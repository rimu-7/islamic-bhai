import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get("https://api.alquran.cloud/v1/surah");
    return Response.json(response.data.data);
  } catch (error) {
    console.error("Surah fetch failed:", error.message);
    return Response.json({ error: "Failed to fetch Surahs" }, { status: 500 });
  }
}
