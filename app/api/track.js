import dayjs from "dayjs";
import Redis from "ioredis";

const redis = new Redis();

const blockedUAs = [/bot/i, /crawler/i, /spider/i];

export default async function handler(req, res) {
  const ua = req.headers["user-agent"] || "";
  const now = dayjs();
  const dayKey = `req:${now.format("YYYY-MM-DD")}`;
  const weekKey = `req:${now.format("GGGG-WW")}`;
  const monthKey = `req:${now.format("YYYY-MM")}`;

  if (blockedUAs.some(rx => rx.test(ua))) {
    await redis.incr(`blocked:${dayKey}`);
    return res.status(403).json({ message: "Blocked bot" });
  }

  await Promise.all([
    redis.incr(dayKey),
    redis.incr(weekKey),
    redis.incr(monthKey),
  ]);

  res.status(200).json({ message: "Logged" });
}
