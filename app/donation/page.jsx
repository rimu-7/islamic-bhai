"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Banknote, Smartphone } from "lucide-react";
import { toast } from "sonner";
import SocialMedia from "@/components/SocialMedia";

export default function DonationPage() {
  const bankDetails = {
    accountNumber: "012345678901",
    routingNumber: "123456789",
    bankName: "IFIC Bank Ltd.",
    branchBankName: "Kushtia Branch",
    accountHolderName: "Mutasim Fuad Rimu",
  };
  const bKash = "01915159977";
  const nagad = "01915159977";
  const qrCodeUrl = "/donation-qrcode.jpg";

  return (
    <div className="">
      <div className="max-w-md mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text font-bold flex items-center justify-center gap-2">
            <Banknote className="w-8 h-8" />
            সাহায্য করুন / Donate
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            আসসালামু আলাইকুম! আমি একাই এই সাইটটি পরিচালনা করছি। সাইট সচল রাখতে
            দান করুন। ইনশাআল্লাহ এটি সদকাহে জারিয়া হবে।
          </p>
        </div>

        {/* QR Code */}
        <Card className=" shadow-md  transition-shadow duration-300 rounded-lg overflow-hidden">
          <CardHeader className="">
            <CardTitle className="text-center text-2xl text-green-700">
              QR কোড স্ক্যান করুন
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center p-6">
            <div className="w-72 h-72 relative">
              <Image
                src={qrCodeUrl}
                alt="Donation QR"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-md shadow-inner"
                priority
              />
            </div>
          </CardContent>
        </Card>

        {/* Donation Options */}
        <Card className=" shadow-md  transition-shadow duration-300 rounded-lg overflow-hidden">
          <CardHeader className="">
            <CardTitle className="text-center text-2xl text-green-700">
              একাউন্ট এবং মোবাইল পেমেন্ট
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <DonationOptions
              bankDetails={bankDetails}
              bKash={bKash}
              nagad={nagad}
            />
          </CardContent>
        </Card>

        {/* Footer Note */}
        <p className="text-center text-gray-600 text-sm sm:text-base mt-6 leading-relaxed italic">
          جزاك الله خيرًا। আল্লাহ আমাকে শক্তি দান করুন যাতে আমি সর্বোচ্চ চেষ্টা
          করতে পারি এই সাইটের মাধ্যমে ইসলামিক জ্ঞান ছড়ানোর জন্য।
        </p>
      </div>
      <SocialMedia />
    </div>
  );
}

function DonationOptions({ bankDetails, bKash, nagad }) {
  const handleCopy = (text, label) => {
    copyToClipboard(text);
    toast.success(`${label} copied to clipboard`, {
      position: "top-center",
      duration: 2000,
    });
  };

  return (
    <div className="space-y-6">
      {/* Bank Details */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Banknote className="w-5 h-5 text-green-600" />
          Bank Details
        </h3>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">Account Number:</span>
            <div className="flex items-center gap-2">
              <span>{bankDetails.accountNumber}</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-green-600 hover:text-green-800 hover:bg-green-100"
                onClick={() =>
                  handleCopy(bankDetails.accountNumber, "Account Number")
                }
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Routing Number:</span>
            <div className="flex items-center gap-2">
              <span>{bankDetails.routingNumber}</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-green-600 hover:text-green-800 hover:bg-green-100"
                onClick={() =>
                  handleCopy(bankDetails.routingNumber, "Routing Number")
                }
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Bank Name:</span>
            <div className="flex items-center gap-2">
              <span>{bankDetails.bankName}</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-green-600 hover:text-green-800 hover:bg-green-100"
                onClick={() => handleCopy(bankDetails.bankName, "Bank Name")}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Branch Name:</span>
            <div className="flex items-center gap-2">
              <span>{bankDetails.branchBankName}</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-green-600 hover:text-green-800 hover:bg-green-100"
                onClick={() =>
                  handleCopy(bankDetails.branchBankName, "Branch Name")
                }
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Account Holder:</span>
            <div className="flex items-center gap-2">
              <span>{bankDetails.accountHolderName}</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-green-600 hover:text-green-800 hover:bg-green-100"
                onClick={() =>
                  handleCopy(bankDetails.accountHolderName, "Account Holder")
                }
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* bKash */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-inner flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-800">
          <Smartphone className="w-5 h-5 text-orange-600" />
          <span className="font-semibold">bKash:</span>
          <span>{bKash}</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-orange-600 hover:text-orange-800 hover:bg-orange-100"
          onClick={() => handleCopy(bKash, "bKash Number")}
        >
          <Copy className="w-4 h-4" />
        </Button>
      </div>

      {/* Nagad */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-inner flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-800">
          <Smartphone className="w-5 h-5 text-red-600" />
          <span className="font-semibold">Nagad:</span>
          <span>{nagad}</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-red-600 hover:text-red-800 hover:bg-red-100"
          onClick={() => handleCopy(nagad, "Nagad Number")}
        >
          <Copy className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

function copyToClipboard(text) {
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Failed to copy text: ", err);
      toast.error("Failed to copy. Please try manually.");
    });
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
      toast.success("Copied using fallback method");
    } catch (err) {
      console.error("Fallback: unable to copy", err);
      toast.error("Failed to copy. Please try manually.");
    }
    document.body.removeChild(textarea);
  }
}
