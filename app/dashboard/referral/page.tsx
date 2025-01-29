import HeaderNav from "@/components/Helper/HeaderNav";

// app/dashboard/referral/page.tsx
export default function ReferralPage() {

    return (
      <section>
         <HeaderNav />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Referral</h1>
        <p className="text-gray-600">Invite your friends and earn rewards!</p>
      </section>
    );
  }