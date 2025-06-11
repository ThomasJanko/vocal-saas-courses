import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl underline">Welcome to my SaaS App</h1>
      <section className="home-section">
        <CompanionCard id="123" name="Neura the Brainy Explorer" topic="Neural Network of the Brain" subject="science" duration={45} color="#ffda6e" />
        <CompanionCard id="456" name="Counts the Counting Companion" topic="Counting Numbers" subject="math" duration={30} color="#91b1eb" />
        <CompanionCard id="789" name="Luna the Space Explorer" topic="Space Exploration" subject="space" duration={60} color="#a668ee" />
      </section>
      <section className="home-section">
        <CompanionsList title="Recently completed sessions" companions={recentSessions} classNames="w-2/3 max-lg:w-full" />
        <CTA />
      </section>
    </main>
  );
}
