import HeaderNav from "@/components/Helper/HeaderNav";

// app/dashboard/quest/page.tsx
export default function QuestPage() {
    return (
      <section>
         <HeaderNav />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Quest</h1>
        <p className="text-gray-600">Complete quests to earn rewards.</p>
      </section>
    );
  }