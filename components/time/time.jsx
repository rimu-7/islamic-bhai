"use client";
import React, { useState, useEffect, useCallback } from "react";
import { MapPin, Sun, Sunrise, Sunset, Clock, CircleAlert } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
// Debounce utility to limit API calls
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const Time = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [times, setTimes] = useState(null);
  const [location, setLocation] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [calculationMethod, setCalculationMethod] = useState("2"); // Default to ISNA
  const [currentPrayer, setCurrentPrayer] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null);
  const [manualInput, setManualInput] = useState("");

  const createTime = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  const findCurrentAndNextPrayer = useCallback((prayerTimes) => {
    const now = new Date();
    const nowInMinutes = now.getHours() * 60 + now.getMinutes();
    const prayerKeys = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

    let nextPrayerIndex = -1;
    let currentPrayerIndex = -1;

    for (let i = 0; i < prayerKeys.length; i++) {
      const key = prayerKeys[i];
      if (key === "Sunrise" || key === "Sunset") continue;

      const prayerTime =
        createTime(prayerTimes[key]).getHours() * 60 +
        createTime(prayerTimes[key]).getMinutes();
      const nextPrayerTime =
        i < prayerKeys.length - 1
          ? createTime(prayerTimes[prayerKeys[i + 1]]).getHours() * 60 +
            createTime(prayerTimes[prayerKeys[i + 1]]).getMinutes()
          : 1440;

      if (nowInMinutes >= prayerTime && nowInMinutes < nextPrayerTime) {
        currentPrayerIndex = i;
      }

      if (nowInMinutes < prayerTime) {
        nextPrayerIndex = i;
        break;
      }
    }

    if (nextPrayerIndex === -1) {
      setNextPrayer({ name: prayerKeys[0], time: prayerTimes[prayerKeys[0]] });
    } else {
      setNextPrayer({
        name: prayerKeys[nextPrayerIndex],
        time: prayerTimes[prayerKeys[nextPrayerIndex]],
      });
    }

    if (currentPrayerIndex !== -1) {
      setCurrentPrayer(prayerKeys[currentPrayerIndex]);
    } else {
      setCurrentPrayer(null);
    }
  }, []);

  const fetchPrayerTimes = useCallback(
    async ({ lat, lon, city, country, method }) => {
      try {
        setLoading(true);
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();

        let url;
        let displayLocation = city || "Unknown Location";

        if (lat && lon) {
          url = `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${lat}&longitude=${lon}&method=${method}`;
          const nominatimResponse = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`,
            { headers: { "User-Agent": "SalahTimesApp/1.0" } }
          );
          const nominatimData = await nominatimResponse.json();
          if (nominatimData.address && nominatimData.address.county) {
            displayLocation = nominatimData.address.county; // e.g., Kushtia District
          } else if (nominatimData.address.city || nominatimData.address.town) {
            displayLocation =
              nominatimData.address.city || nominatimData.address.town;
          }
          localStorage.setItem(
            "userLocation",
            JSON.stringify({ lat, lon, displayLocation })
          );
        } else if (city && country) {
          url = `https://api.aladhan.com/v1/timingsByCity/${day}-${month}-${year}?city=${city}&country=${country}&method=${method}`;
          displayLocation = city;
        } else {
          throw new Error("No location data provided.");
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            "Failed to fetch prayer times. Please try again later."
          );
        }
        const data = await response.json();

        setTimes(data.data.timings);
        setLocation(displayLocation);
        findCurrentAndNextPrayer(data.data.timings);
      } catch (e) {
        console.error("API error:", e);
        setError(
          "Could not get prayer times. Please check your internet connection or try again later."
        );
      } finally {
        setLoading(false);
      }
    },
    [findCurrentAndNextPrayer]
  );

  useEffect(() => {
    const cachedLocation = localStorage.getItem("userLocation");
    if (cachedLocation) {
      const { lat, lon, displayLocation } = JSON.parse(cachedLocation);
      setLocation(displayLocation);
      fetchPrayerTimes({ lat, lon, method: calculationMethod });
      return;
    }

    const fetchByIP = async () => {
      try {
        const ipResponse = await fetch("https://ipapi.co/json/");
        const ipData = await ipResponse.json();

        if (ipData.latitude && ipData.longitude) {
          const nominatimResponse = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${ipData.latitude}&lon=${ipData.longitude}&zoom=10&addressdetails=1`,
            { headers: { "User-Agent": "SalahTimesApp/1.0" } }
          );
          const nominatimData = await nominatimResponse.json();

          let city = ipData.city;
          let country = ipData.country_name;
          let displayLocation = ipData.city;

          if (nominatimData.address && nominatimData.address.county) {
            displayLocation = nominatimData.address.county;
            city =
              nominatimData.address.city ||
              nominatimData.address.town ||
              ipData.city;
          } else if (nominatimData.address.city || nominatimData.address.town) {
            displayLocation =
              nominatimData.address.city || nominatimData.address.town;
          }

          fetchPrayerTimes({
            lat: ipData.latitude,
            lon: ipData.longitude,
            city,
            country,
            method: calculationMethod,
          });
          setLocation(displayLocation);
        } else {
          setError(
            "Could not get your location. Displaying prayer times for Dhaka."
          );
          fetchPrayerTimes({
            lat: 23.8103,
            lon: 90.4125,
            method: calculationMethod,
          });
        }
      } catch (e) {
        console.error("IP or Nominatim API error:", e);
        setError(
          "Could not get your location. Displaying prayer times for Dhaka."
        );
        fetchPrayerTimes({
          lat: 23.8103,
          lon: 90.4125,
          method: calculationMethod,
        });
      }
    };

    const handleSuccess = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      fetchPrayerTimes({ lat, lon, method: calculationMethod });
    };

    const handleError = (err) => {
      console.error("Geolocation error:", err.message, err.code);
      let errorMessage =
        "Could not get your precise location. Finding nearest city...";
      if (err.code === err.PERMISSION_DENIED) {
        errorMessage =
          "Location access denied. Please allow location access or enter your location manually.";
      } else if (err.code === err.POSITION_UNAVAILABLE) {
        errorMessage = "Location unavailable. Trying IP-based location...";
      } else if (err.code === err.TIMEOUT) {
        errorMessage =
          "Location request timed out. Trying IP-based location...";
      }
      setError(errorMessage);
      fetchByIP();
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      });
    } else {
      setError(
        "Geolocation is not supported by your browser. Attempting to find location via IP..."
      );
      fetchByIP();
    }
  }, [fetchPrayerTimes, calculationMethod]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      if (times) {
        findCurrentAndNextPrayer(times);
      }
    }, 60000);
    return () => clearInterval(timer);
  }, [times, findCurrentAndNextPrayer]);

  const prayerOrder = [
    { name: "Fajr", key: "Fajr" },
    { name: "Dhuhr", key: "Dhuhr" },
    { name: "Asr", key: "Asr" },
    { name: "Maghrib", key: "Maghrib" },
    { name: "Isha", key: "Isha" },
  ];

  const getEndTime = (prayerKey) => {
    if (!times) return "N/A";
    const prayerIndex = prayerOrder.findIndex((p) => p.key === prayerKey);
    if (prayerIndex === -1) return "N/A";

    if (prayerKey === "Fajr") return times.Sunrise;
    if (prayerKey === "Isha") {
      const nextFajr = new Date();
      nextFajr.setHours(23, 59, 59);
      return `${nextFajr.getHours()}:${String(nextFajr.getMinutes()).padStart(
        2,
        "0"
      )}`;
    }

    const nextPrayerKey = prayerOrder[prayerIndex + 1]?.key;
    return nextPrayerKey ? times[nextPrayerKey] : "N/A";
  };

  // Debounced handler for manual input
  const handleManualInput = debounce((value) => {
    if (value.length >= 3) {
      setError(null);
      fetchPrayerTimes({
        city: value,
        country: "Bangladesh",
        method: calculationMethod,
      });
    } else if (value.length > 0) {
      setError("Please enter at least 3 characters for the city or district.");
    }
  }, 500);

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-center bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text p-2 font-bold mb-4">
          নামাজের সময় সূচি
        </h2>
        <div className="flex flex-col items-center mb-6">
          {loading ? (
            <Skeleton className="h-5 w-32 mt-2" />
          ) : (
            <p className="text-sm sm:text-base  flex items-center gap-2">
              <Clock size={16} />{" "}
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          )}
          {loading ? (
            <Skeleton className="h-5 w-48 mt-2" />
          ) : (
            location && (
              <p className="text-sm sm:text-base  flex items-center gap-2 mt-1">
                <MapPin size={16} /> {location}
              </p>
            )
          )}
        </div>

        {error && (
          <div className="flex flex-col items-center gap-2 p-4 mb-6 rounded-xl bg-red-100 text-red-700">
            <div className="flex items-center gap-2">
              <CircleAlert size={20} />
              <span className="text-sm sm:text-base">{error}</span>
            </div>
            <div className="mt-4 w-full">
              <input
                type="text"
                placeholder="Enter your city or district (e.g., Kushtia)"
                className="w-full p-2 rounded-lg border border-gray-300"
                value={manualInput}
                onChange={(e) => {
                  setManualInput(e.target.value);
                  handleManualInput(e.target.value);
                }}
              />
            </div>
          </div>
        )}

        {loading && !error && (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <Skeleton className="h-25 w-96" />
            <Skeleton className="h-15 w-96" />
            <Skeleton className="h-10 w-96" />
            <Skeleton className="h-8 w-96" />
          </div>
        )}

        {times && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                {
                  key: "Sunrise",
                  icon: Sunrise,
                  color: "text-yellow-500",
                  bg: "bg-yellow-50",
                },
                {
                  key: "Sunset",
                  icon: Sunset,
                  color: "text-red-500",
                  bg: "bg-red-50",
                },
              ].map(({ key, icon: Icon, color, bg }) => (
                <div
                  key={key}
                  className={`${bg} rounded-xl p-4  flex flex-col items-center justify-center`}
                >
                  {loading ? (
                    <Skeleton className="h-7 w-7 mb-2 rounded-full" />
                  ) : (
                    <Icon size={28} className={`${color} mb-2`} />
                  )}
                  <p className="text-xs font-semibold">{key}</p>
                  {loading ? (
                    <Skeleton className="h-7 w-20 mt-2 rounded-md" />
                  ) : (
                    <p className="text-lg font-bold text-gray-800">
                      {times[key]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {prayerOrder.map((prayer) => {
                const isActive = currentPrayer === prayer.key;
                return (
                  <div
                    key={prayer.key}
                    className={`flex justify-between items-center p-4 rounded-xl  transition-all duration-200 ${
                      isActive ? "bg-green-500  scale-105" : "bg-green-50 "
                    }`}
                  >
                    <span
                      className={`font-bold text-sm sm:text-lg ${
                        isActive ? "text-white" : ""
                      }`}
                    >
                      {prayer.name}
                    </span>
                    <div className="text-right">
                      {loading ? (
                        <Skeleton className="h-6 w-16 mb-1 rounded-md" />
                      ) : (
                        <span
                          className={`font-semibold text-sm sm:text-lg ${
                            isActive ? "text-white" : ""
                          }`}
                        >
                          {times[prayer.key]}
                        </span>
                      )}
                      {loading ? (
                        <Skeleton className="h-4 w-24 rounded-md" />
                      ) : (
                        <p
                          className={`text-xs ${
                            isActive ? "text-blue-200" : "text-red-400"
                          }`}
                        >
                          End: {getEndTime(prayer.key)}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {nextPrayer && (
              <div className="p-4 rounded-xl bg-green-50 text-green-500 text-center text-sm font-semibold">
                {loading ? (
                  <Skeleton className="h-20 w-64" />
                ) : (
                  <p>
                    Next Prayer:{" "}
                    <span className="font-bold">
                      {nextPrayer.name} at {nextPrayer.time}
                    </span>
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Time;
