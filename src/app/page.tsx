import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

export default async function Home() {

  const companions = await getAllCompanions({limit: 3});
  const recentSessionCompanions = await getRecentSessions(10);
  return (
    <main>
      <h1 className="text-2xl underline">Welcome to my SaaS App</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard key={companion.id} id={companion.id} name={companion.name} topic={companion.topic} subject={companion.subject} duration={companion.duration} color={getSubjectColor(companion.subject)} />
        ))}
      </section>
      <section className="home-section">
        <CompanionsList title="Recently completed sessions" companions={recentSessionCompanions} classNames="w-2/3 max-lg:w-full" />
        <CTA />
      </section>
    </main>
  );
}
