import dayjs from "dayjs";
import Redis from "ioredis";

const redis = new Redis();

async function getLast7Days() {
  const results = [];
  for (let i = 0; i < 7; i++) {
    const day = dayjs().subtract(i, "day").format("YYYY-MM-DD");
    const val = await redis.get(`req:${day}`);
    results.push({ day, count: Number(val || 0) });
  }
  return results.reverse();
}

export default async function handler(req, res) {
  const today = dayjs().format("YYYY-MM-DD");
  const week = dayjs().format("GGGG-WW");
  const month = dayjs().format("YYYY-MM");

  const [todayCount, weekCount, monthCount, blockedToday, last7days] =
    await Promise.all([
      redis.get(`req:${today}`),
      redis.get(`req:${week}`),
      redis.get(`req:${month}`),
      redis.get(`blocked:${today}`),
      getLast7Days(),
    ]);

  res.status(200).json({
    today: Number(todayCount || 0),
    thisWeek: Number(weekCount || 0),
    thisMonth: Number(monthCount || 0),
    blockedToday: Number(blockedToday || 0),
    last7days,
  });
}
