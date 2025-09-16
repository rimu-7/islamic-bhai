"use client";

import { useEffect, useState } from "react";
import { Popup } from "./Popup";
import axios from "axios";

export function ShowPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [paymentData, setPaymentData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // প্রথম লোডে পপআপ দেখাবে
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const handlePayment = async () => {
    try {
      const { data } = await axios.post("/api/make-payment", paymentData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Popup
      isOpen={isPopupOpen}
      onClose={() => setIsPopupOpen(false)}
      title="ডোনেশন করুন"
    >
      <div className="space-y-4">
        <p className="text-gray-700">
          আপনার দান আমাদের কাজ চালিয়ে রাখতে সাহায্য করে। অনুগ্রহ করে নিচের তথ্য
          প্রদান করুন:
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              আপনার নাম
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="পুরো নাম লিখুন"
              onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ইমেইল ঠিকানা
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="আপনার ইমেইল"
              onChange={(e) => setPaymentData({ ...paymentData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ফোন নম্বর
            </label>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ফোন নম্বর"
              onChange={(e) => setPaymentData({ ...paymentData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ডোনেশন Amount
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="100">১০০ টাকা</option>
              <option value="500">৫০০ টাকা</option>
              <option value="1000">১০০০ টাকা</option>
              <option value="2000">২০০০ টাকা</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => handlePayment()}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
          >
            ডোনেট করুন
          </button>
        </form>
      </div>
    </Popup>
  );
}
