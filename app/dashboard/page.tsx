'use client';

import HeaderNav from '@/components/Helper/HeaderNav';
import React from 'react';




export default function DashboardPage() {
  return (
    <>
      <HeaderNav />
      <main className='h-[85vh] p-6'>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
          <article className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-500 ">
            <h2 className="text-xl font-bold text-gray-800">Current Stage: Kilo Cycle</h2>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 border-2 border-green-500 ">
              <aside className="flex flex-row md:flex-col space-y-0 md:space-y-4 space-x-4 md:space-x-0 rounded-lg border-2 border-red-500 ">
                <figure className="bg-gray-100 p-4 rounded">Child 1</figure>
                <figure className="bg-gray-100 p-4 rounded">Child 2</figure>
              </aside>
              <aside className="bg-gray-100 p-4  border-2 border-red-500 rounded-lg">Second Column</aside>
            </section>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-500 ">
            <h2 className="text-xl font-bold text-gray-800">Completed Quests</h2>
            <p className="text-gray-600">12</p>
          </article>
        </section>
      </main>
    </>
  );
}
{/*  */ }