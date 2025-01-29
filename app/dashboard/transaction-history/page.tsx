import HeaderNav from "@/components/Helper/HeaderNav";

// app/dashboard/transaction-history/page.tsx



export default function TransactionHistoryPage() {
    return (
      <section>
         <HeaderNav />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Transaction History</h1>
        <p className="text-gray-600">View your transaction history here.</p>
      </section>
    );
  }