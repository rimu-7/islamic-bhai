"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clipboard, Info } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function ZakatCalculator() {
  const [cash, setCash] = useState("");
  const [savings, setSavings] = useState("");
  const [investments, setInvestments] = useState("");
  const [receivables, setReceivables] = useState("");
  const [otherAssets, setOtherAssets] = useState("");
  const [debts, setDebts] = useState("");

  const [goldGrams, setGoldGrams] = useState("");
  const [silverGrams, setSilverGrams] = useState("");
  const [goldPricePerGram, setGoldPricePerGram] = useState("7500");
  const [silverPricePerGram, setSilverPricePerGram] = useState("90");

  const [nisabBy, setNisabBy] = useState("gold");
  const [zakatDue, setZakatDue] = useState(0);
  const [netAssets, setNetAssets] = useState(0);
  const [nisabValue, setNisabValue] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);

  // নিসাবের সীমা (Minimum asset threshold for Zakat)
  const nisabThresholds = {
    gold: 87.48, // 87.48 grams of gold
    silver: 612.36 // 612.36 grams of silver
  };

  const calculateZakat = () => {
    const goldValue = Number(goldGrams || 0) * Number(goldPricePerGram || 0);
    const silverValue = Number(silverGrams || 0) * Number(silverPricePerGram || 0);

    const totalAssets =
      Number(cash || 0) +
      Number(savings || 0) +
      Number(investments || 0) +
      Number(receivables || 0) +
      Number(otherAssets || 0) +
      goldValue +
      silverValue;

    const net = totalAssets - Number(debts || 0);

    const nisabValueByGold = nisabThresholds.gold * Number(goldPricePerGram || 0);
    const nisabValueBySilver = nisabThresholds.silver * Number(silverPricePerGram || 0);

    const chosenNisab = nisabBy === "gold" ? nisabValueByGold : nisabValueBySilver;

    const zakat = net >= chosenNisab && net > 0 ? Number((net * 0.025).toFixed(2)) : 0;

    setNetAssets(Number(net.toFixed(2)));
    setNisabValue(Number(chosenNisab.toFixed(2)));
    setZakatDue(zakat);
    setIsCalculated(true);

    // Show calculation complete toast
    if (net >= chosenNisab && net > 0) {
      toast.success("যাকাত হিসাব সম্পন্ন হয়েছে!", {
        description: `আপনার যাকাতের পরিমাণ: ${zakat.toLocaleString()} টাকা`,
      });
    } else {
      toast.info("হিসাব সম্পন্ন হয়েছে", {
        description: "আপনার সম্পদ নিসাবের সীমার নিচে, যাকাত ফরজ নয়",
      });
    }
  };

  const reset = () => {
    setCash("");
    setSavings("");
    setInvestments("");
    setReceivables("");
    setOtherAssets("");
    setDebts("");
    setGoldGrams("");
    setSilverGrams("");
    setGoldPricePerGram("7500");
    setSilverPricePerGram("90");
    setZakatDue(0);
    setNetAssets(0);
    setNisabValue(0);
    setIsCalculated(false);
    
    toast.info("ফর্ম রিসেট করা হয়েছে");
  };

  const copyResult = async () => {
    const text = `নেট সম্পদ: ${netAssets.toLocaleString()} টাকা\nনিসাব (${
      nisabBy === "gold" ? "স্বর্ণ" : "রূপা"
    }): ${nisabValue.toLocaleString()} টাকা\nযাকাত প্রদেয় (২.৫%): ${zakatDue.toLocaleString()} টাকা`;
    
    try {
      await navigator.clipboard.writeText(text);
      toast.success("ফলাফল কপি করা হয়েছে!", {
        description: "যাকাতের হিসাব ক্লিপবোর্ডে সংরক্ষিত হয়েছে",
      });
    } catch (err) {
      toast.error("কপি করতে ব্যর্থ", {
        description: "দুঃখিত, ফলাফল কপি করা যায়নি",
      });
    }
  };

  const isZakatApplicable = netAssets >= nisabValue && netAssets > 0;

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl p-3 md:text-6xl font-bold bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text">
          জাকাত ক্যালকুলেটর
        </h2>
      </div>
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-2">যাকাত ক্যালকুলেটর</h2>
          <p className="text-sm mb-6">
            এখানে আপনার নগদ, সঞ্চয়, সোনার/রূপার পরিমাণ ও অন্যান্য সম্পদ লিখুন। 
            নিসাব হিসেবে স্বর্ণ বা রূপা পরিমাপ বেছে নিন। যাকাত = ২.৫% (বার্ষিক) যদি প্রযোজ্য হয়।
          </p>

          {/* নিসাবের তথ্য (Nisab Information) */}
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-red-600 mb-2">নিসাবের সীমা (যাকাত ফরজ হওয়ার ন্যূনতম সম্পদ)</h3>
                <div className="text-sm text-red-600 space-y-1">
                  <p><strong>স্বর্ণের ভিত্তিতে:</strong> {nisabThresholds.gold} গ্রাম স্বর্ণ বা তার সমমূল্যের সম্পদ</p>
                  <p><strong>রূপার ভিত্তিতে:</strong> {nisabThresholds.silver.toLocaleString()} গ্রাম রূপা বা তার সমমূল্যের সম্পদ</p>
                  <p className="text-xs mt-2">※ আপনার মোট সম্পদ নিসাবের সীমা অতিক্রম করলে এবং এক বছর পূর্ণ হলে যাকাত ফরজ হয়।</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                নগদ অর্থ
              </label>
              <Input
                type="number"
                value={cash}
                onChange={(e) => setCash(e.target.value)}
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                সঞ্চয়
              </label>
              <Input
                type="number"
                value={savings}
                onChange={(e) => setSavings(e.target.value)}
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                বিনিয়োগ
              </label>
              <Input
                type="number"
                value={investments}
                onChange={(e) => setInvestments(e.target.value)}
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                প্রাপ্য ঋণ / পাওনা
              </label>
              <Input
                type="number"
                value={receivables}
                onChange={(e) => setReceivables(e.target.value)}
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                অন্যান্য সম্পদ
              </label>
              <Input
                type="number"
                value={otherAssets}
                onChange={(e) => setOtherAssets(e.target.value)}
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                বকেয়া ঋণ (বিয়োগযোগ্য)
              </label>
              <Input
                type="number"
                value={debts}
                onChange={(e) => setDebts(e.target.value)}
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                স্বর্ণের পরিমাণ (গ্রাম)
              </label>
              <Input
                type="number"
                value={goldGrams}
                onChange={(e) => setGoldGrams(e.target.value)}
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                রূপার পরিমাণ (গ্রাম)
              </label>
              <Input
                type="number"
                value={silverGrams}
                onChange={(e) => setSilverGrams(e.target.value)}
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                স্বর্ণের প্রতি গ্রাম মূল্য
              </label>
              <Input
                type="number"
                value={goldPricePerGram}
                onChange={(e) => setGoldPricePerGram(e.target.value)}
                placeholder="7500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                রূপার প্রতি গ্রাম মূল্য
              </label>
              <Input
                type="number"
                value={silverPricePerGram}
                onChange={(e) => setSilverPricePerGram(e.target.value)}
                placeholder="90"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">
                নিসাব নির্ধারণের ভিত্তি
              </label>
              <Select value={nisabBy} onValueChange={(v) => setNisabBy(v)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="নিসাবের ভিত্তি নির্বাচন করুন" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gold">
                    স্বর্ণ — {nisabThresholds.gold} গ্রাম
                  </SelectItem>
                  <SelectItem value="silver">
                    রূপা — {nisabThresholds.silver.toLocaleString()} গ্রাম
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6 flex gap-3 flex-wrap">
            <Button onClick={calculateZakat}>
              হিসাব করুন
            </Button>
            <Button variant="ghost" onClick={reset}>
              রিসেট করুন
            </Button>
            {isCalculated && (
              <Button variant="outline" onClick={copyResult}>
                <Clipboard className="mr-2 h-4 w-4" /> ফলাফল কপি করুন
              </Button>
            )}
          </div>

          {isCalculated && (
            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-3 text-green-800">হিসাবের ফলাফল</h3>
              <div className="text-sm text-gray-700 space-y-3">
                <div className="flex justify-between">
                  <span>মোট নেট সম্পদ:</span>
                  <strong>{netAssets.toLocaleString()} টাকা</strong>
                </div>
                <div className="flex justify-between">
                  <span>নিসাবের সীমা:</span>
                  <strong>{nisabValue.toLocaleString()} টাকা</strong>
                </div>
                <div className="flex justify-between">
                  <span>নিসাবের ভিত্তি:</span>
                  <strong>{nisabBy === "gold" ? "স্বর্ণ" : "রূপা"}</strong>
                </div>
                
                {/* নিসাব অর্জন সম্পর্কে স্পষ্ট তথ্য */}
                <div className="p-3 bg-white rounded border">
                  <div className="flex justify-between items-center">
                    <span>যাকাত ফরজ হওয়ার শর্ত পূরণ:</span>
                    <strong className={isZakatApplicable ? "text-green-600" : "text-red-600"}>
                      {isZakatApplicable ? "হ্যাঁ" : "না"}
                    </strong>
                  </div>
                  {isZakatApplicable ? (
                    <p className="text-xs text-green-600 mt-1">
                      ✓ আপনার সম্পদ নিসাবের সীমা অতিক্রম করেছে। এক বছর পূর্ণ হলে যাকাত প্রদান করা ফরজ।
                    </p>
                  ) : (
                    <p className="text-xs text-red-600 mt-1">
                      ✗ আপনার সম্পদ নিসাবের সীমার নিচে। এ অবস্থায় যাকাত ফরজ নয়।
                    </p>
                  )}
                </div>

                {isZakatApplicable && (
                  <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                    <span>যাকাতের পরিমাণ (২.৫%):</span>
                    <strong className="text-blue-600">{zakatDue.toLocaleString()} টাকা</strong>
                  </div>
                )}
              </div>

              <p className="mt-4 text-xs text-gray-600">
                নোট: এখানে প্রদত্ত হিসাবগুলো নির্দেশমূলক। নিসাব ও হিসাব গণনা করার সময় স্থানীয় স্বর্ণ/রূপার মূল্য এবং ইসলামিক বিধান অনুযায়ী বিশেষজ্ঞের পরামর্শ গ্রহণ করুন।
                যাকাত ফরজ হওয়ার জন্য সম্পদ নিসাবের সমান বা বেশি হওয়ার পাশাপাশি এক চান্দ্র বছর পূর্ণ হওয়া必要।
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}