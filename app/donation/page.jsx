"use client";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";

const Donation = () => {
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedBKash, setCopiedBKash] = useState(false);
  const [copiedNagad, setCopiedNagad] = useState(false);

  const bankAccount = "012345678901";
  const accountName = "Name: Mutasim Fuad Rimu";
  const bankName = "BankName: IFIC";
  const bankBranch = "Branch: Kushtia";

  const bKash = "01915159977";
  const nagad = "01915159977";
  const qrCodeUrl = "/donation-qrcode.jpg";

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-3xl space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-400">
        গুরুত্বপূর্ণ
      </h2>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহু। আমি একাই এই সাইটটি
        পরিচালনা করছি। সাইটটি সচল রাখতে দান করুন। ইনশাআল্লাহ এটি সদকাহে জারিয়া
        হবে এবং আপনাকে প্রচুর সওয়াব দান হবে।
      </p>

      {/* Bank Account */}
      <div className="p-4 bg-green-50 rounded border border-green-100 space-y-2">
        <p className="font-semibold text-gray-800">ব্যাংক একাউন্ট</p>
        <p className="text-gray-700 text-sm">
          {accountName} - {bankName}, {bankBranch}
        </p>
        <CopyToClipboard
          text={bankAccount}
          onCopy={() => setCopiedBank(true)}
        >
          <button className="w-full px-4 py-2 bg-green-400 hover:bg-green-600 rounded transition flex justify-center items-center gap-2 text-sm sm:text-base">
            {copiedBank ? "✓ কপি হয়েছে" : `একাউন্ট নং: ${bankAccount}`}
          </button>
        </CopyToClipboard>
      </div>

      {/* QR Code */}
      <div className="p-4 bg-gray-50 rounded border border-gray-200">
        <p className="font-semibold text-gray-800 mb-3">QR কোড স্ক্যান করুন</p>
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
          <Image
            src={qrCodeUrl}
            alt="Donation QR"
            fill
            style={{ objectFit: "contain" }}
            className="rounded shadow-md"
            priority
          />
        </div>
      </div>

      {/* Mobile Payments */}
      <div className="p-4 bg-green-100 rounded border border-blue-100 space-y-3">
        <p className="font-semibold text-gray-800">মোবাইল পেমেন্ট</p>
        <CopyToClipboard text={bKash} onCopy={() => setCopiedBKash(true)}>
          <button className="w-full px-4 py-2 bg-[#D12053] hover:bg-[#a70d38] text-white rounded transition flex justify-center items-center gap-2 text-sm sm:text-base">
            {copiedBKash ? "✓ কপি হয়েছে" : `bKash: ${bKash}`}
          </button>
        </CopyToClipboard>
        <CopyToClipboard text={nagad} onCopy={() => setCopiedNagad(true)}>
          <button className="w-full px-4 py-2 bg-[#F26522] hover:bg-orange-700 text-white rounded transition flex justify-center items-center gap-2 text-sm sm:text-base">
            {copiedNagad ? "✓ কপি হয়েছে" : `Nagad: ${nagad}`}
          </button>
        </CopyToClipboard>
      </div>

      <p className="text-gray-500 text-xs sm:text-sm mt-4 text-center">
        جزاك الله خيرًا। আল্লাহ আমাকে শক্তি দান করুন যাতে আমি সর্বোচ্চ চেষ্টা
        করতে পারি এই সাইটের মাধ্যমে ইসলামিক জ্ঞান ছড়ানোর জন্য।
      </p>
    </div>
  );
};

export default Donation;
