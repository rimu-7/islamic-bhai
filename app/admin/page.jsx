import React from "react";

async function fetchStats() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/stats`, {
    cache: "no-store", // always fetch fresh data
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function AdminPage() {
  const stats = await fetchStats();

  if (!stats) {
    return <p className="text-center py-10">No stats available</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Request Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded shadow">
          <p className="font-bold text-xl">{stats.today}</p>
          <p>Today</p>
        </div>
        <div className="p-4 bg-green-50 rounded shadow">
          <p className="font-bold text-xl">{stats.thisWeek}</p>
          <p>This Week</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded shadow">
          <p className="font-bold text-xl">{stats.thisMonth}</p>
          <p>This Month</p>
        </div>
        <div className="p-4 bg-red-50 rounded shadow">
          <p className="font-bold text-xl">{stats.blockedToday}</p>
          <p>Blocked Bots Today</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Last 7 Days</h2>
        <ul>
          {stats.last7days.map((d) => (
            <li key={d.day}>
              {d.day}: {d.count} requests
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
