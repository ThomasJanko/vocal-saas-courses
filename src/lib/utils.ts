import { languagesColors, subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

export const getLanguageColor = (language: string) => {
  return languagesColors[language as keyof typeof languagesColors];
};

export const configureAssistant = (voice: string, style: string, language: string) => {
  const voiceId = voices[voice as keyof typeof voices][
          style as keyof (typeof voices)[keyof typeof voices]
          ] || "sarah";

  let firstMessage = "";
  switch (language) {
    case "fr":
      firstMessage = "Bonjour, commençons la session. Aujourd'hui, nous allons parler de '{{topic}}'.";
      break;
    case "es":
      firstMessage = "Hola, comencemos la sesión. Hoy hablaremos de '{{topic}}'.";
      break;
    case "de":
      firstMessage = "Hallo, lassen Sie uns beginnen. Heute werden wir über '{{topic}}' sprechen.";
      break;
    default:
      firstMessage = "Hello, let's start the session. Today we'll be talking about '{{topic}}'.";
  }

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
        firstMessage,
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "multi",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a highly knowledgeable tutor teaching a real-time voice session with a student. Your goal is to teach the student about the topic and subject.

                    Tutor Guidelines:
                    Stick to the given topic - {{ topic }} and subject - {{ subject }} and teach the student about it.
                    Keep the conversation flowing smoothly while maintaining control.
                    From time to time make sure that the student is following you and understands you.
                    Break down the topic into smaller parts and teach the student one part at a time.
                    Keep your style of conversation {{ style }}.
                    Keep your responses short, like in a real voice conversation.
                    Do not include any special characters in your responses - this is a voice conversation.
              `,
        },
      ],
    },
    clientMessages: [] as never,
    serverMessages: [] as never,
  };
  return vapiAssistant;
};