import HeaderNav from "@/components/Helper/HeaderNav";

// app/dashboard/earnings/page.tsx
export default function EarningsPage() {
    return (
      <section>
        <HeaderNav />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Earnings</h1>
        <p className="text-gray-600">Track your earnings over time.</p>
      </section>
    );
  }