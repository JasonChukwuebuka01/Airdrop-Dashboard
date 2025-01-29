'use client';

import HeaderNav from '@/components/Helper/HeaderNav';
import ThumbNail from '@/components/Helper/ThumbNail';
import React from 'react';
export default function DashboardPage() {
  return (
    <>
      <HeaderNav />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800">Total Earnings</h2>
          <p className="text-gray-600">$1,234.56</p>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800">Completed Quests</h2>
          <p className="text-gray-600">12</p>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800">Referrals</h2>
          <p className="text-gray-600">5</p>
        </article>
      </section>
    </>
  );
}