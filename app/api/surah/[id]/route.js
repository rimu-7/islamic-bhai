import axios from "axios";

export async function GET(req, { params }) {
  const { id } = params; // dynamic ID from URL
  try {
    const arabic = await axios.get(
      `https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`
    );
    const english = await axios.get(
      `https://api.alquran.cloud/v1/surah/${id}/en.asad`
    );
    const bengali = await axios.get(
      `https://api.alquran.cloud/v1/surah/${id}/bn.bengali`
    );

    const verses = arabic.data.data.ayahs.map((a, i) => ({
      number: a.number,
      numberInSurah: a.numberInSurah,
      arabicText: a.text,
      englishText: english.data.data.ayahs[i].text,
      bengaliText: bengali.data.data.ayahs[i].text,
      audio: a.audio,
    }));

    return Response.json({
      surah: arabic.data.data,
      verses,
    });
  } catch (error) {
    console.error("Surah details fetch failed:", error.message);
    return Response.json(
      { error: "Failed to fetch surah details" },
      { status: 500 }
    );
  }
}
