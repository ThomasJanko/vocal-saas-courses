export const subjects = [
  "maths",
  "language",
  "science",
  "history",
  "coding",
  "economics",
];

export const subjectsColors = {
  science: "#E5D0FF",
  maths: "#FFDA6E",
  language: "#BDE7FF",
  coding: "#FFC8E4",
  history: "#FFECC8",
  economics: "#C8FFDF",
};

export const languagesColors = {
  en: "linear-gradient(135deg, #FFFFFF 33%, #CE1124 33%, #CE1124 66%, #FFFFFF 66%)",
  fr: "linear-gradient(135deg, #0055A4 33%, #FFFFFF 33%, #FFFFFF 66%, #EF4135 66%)",
  es: "linear-gradient(135deg, #AA151B 33%, #F1BF00 33%, #F1BF00 66%, #AA151B 66%)", 
  de: "linear-gradient(135deg, #000000 33%, #DD0000 33%, #DD0000 66%, #FFCC00 66%)",
};

export const getVoices = (language: string, voice: string, style: string) => {
  const voiceMap = {
    en: {
      male: { casual: "2BJW5coyhAzSr8STdHbE", formal: "c6SfcYrb2t09NHXiT80T" },
      female: { casual: "x10MLxaAmShMYt7vs7pl", formal: "sarah" }
    },
    fr: {
      male: { casual: "VR6AewLTigWG4xSOukaG", formal: "VR6AewLTigWG4xSOukaG" },
      female: { casual: "EXAVITQu4vr4xnSDxMaL", formal: "EXAVITQu4vr4xnSDxMaL" }
    },
    es: {
      male: { casual: "ErXwobaYiN019PkySvjV", formal: "ErXwobaYiN019PkySvjV" },
      female: { casual: "EXAVITQu4vr4xnSDxMaL", formal: "EXAVITQu4vr4xnSDxMaL" }
    },
    de: {
      male: { casual: "VR6AewLTigWG4xSOukaG", formal: "VR6AewLTigWG4xSOukaG" },
      female: { casual: "MF3mGyEYCl7XYWbV9V6O", formal: "MF3mGyEYCl7XYWbV9V6O" }
    }
  };

  return voiceMap[language as keyof typeof voiceMap]?.[voice as keyof (typeof voiceMap)[keyof typeof voiceMap]]?.[style as keyof (typeof voiceMap)[keyof typeof voiceMap][keyof (typeof voiceMap)[keyof typeof voiceMap]]] || "sarah";
}

export const voices = {
  male: { casual: "2BJW5coyhAzSr8STdHbE", formal: "c6SfcYrb2t09NHXiT80T" },
  female: { casual: "x10MLxaAmShMYt7vs7pl", formal: "sarah" },
};
//FR
// x10MLxaAmShMYt7vs7pl
export const recentSessions = [
  {
    id: "1",
    subject: "science",
    name: "Neura the Brainy Explorer",
    topic: "Neural Network of the Brain",
    duration: 45,
    color: "#E5D0FF",
  },
  {
    id: "2",
    subject: "maths",
    name: "Countsy the Number Wizard",
    topic: "Derivatives & Integrals",
    duration: 30,
    color: "#FFDA6E",
  },
  {
    id: "3",
    subject: "language",
    name: "Verba the Vocabulary Builder",
    topic: "English Literature",
    duration: 30,
    color: "#BDE7FF",
  },
  {
    id: "4",
    subject: "coding",
    name: "Codey the Logic Hacker",
    topic: "Intro to If-Else Statements",
    duration: 45,
    color: "#FFC8E4",
  },
  {
    id: "5",
    subject: "history",
    name: "Memo, the Memory Keeper",
    topic: "World Wars: Causes & Consequences",
    duration: 15,
    color: "#FFECC8",
  },
  {
    id: "6",
    subject: "economics",
    name: "The Market Maestro",
    topic: "The Basics of Supply & Demand",
    duration: 10,
    color: "#C8FFDF",
  },
];
