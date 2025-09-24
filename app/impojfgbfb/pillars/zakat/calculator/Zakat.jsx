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
import { toast, Toaster } from "sonner";

export default function ZakatCalculator() {
  const [form, setForm] = useState({
    cash: "",
    savings: "",
    investments: "",
    receivables: "",
    otherAssets: "",
    debts: "",
    goldGrams: "",
    silverGrams: "",
    goldPricePerGram: "7500",
    silverPricePerGram: "90",
  });

  const [nisabBy, setNisabBy] = useState("gold");
  const [results, setResults] = useState({
    zakatDue: 0,
    netAssets: 0,
    nisabValue: 0,
    isCalculated: false,
  });

  const nisabThresholds = {
    gold: 87.48,
    silver: 612.36,
  };

  const handleChange = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const calculateZakat = () => {
    const gVal =
      parseFloat(form.goldGrams) * parseFloat(form.goldPricePerGram) || 0;
    const sVal =
      parseFloat(form.silverGrams) * parseFloat(form.silverPricePerGram) || 0;

    const totalAssets =
      (parseFloat(form.cash) || 0) +
      (parseFloat(form.savings) || 0) +
      (parseFloat(form.investments) || 0) +
      (parseFloat(form.receivables) || 0) +
      (parseFloat(form.otherAssets) || 0) +
      gVal +
      sVal;

    const net = totalAssets - (parseFloat(form.debts) || 0);

    const nisabValueByGold =
      nisabThresholds.gold * (parseFloat(form.goldPricePerGram) || 0);
    const nisabValueBySilver =
      nisabThresholds.silver * (parseFloat(form.silverPricePerGram) || 0);

    const chosenNisab =
      nisabBy === "gold" ? nisabValueByGold : nisabValueBySilver;

    const zakat =
      net >= chosenNisab && net > 0 ? Number((net * 0.025).toFixed(2)) : 0;

    setResults({
      zakatDue: zakat,
      netAssets: Number(net.toFixed(2)),
      nisabValue: Number(chosenNisab.toFixed(2)),
      isCalculated: true,
    });

    if (zakat > 0) {
      toast.success("যাকাত হিসাব সম্পন্ন হয়েছে!", {
        description: `আপনার যাকাত: ${zakat.toLocaleString()} টাকা`,
      });
    } else {
      toast.info("হিসাব সম্পন্ন হয়েছে", {
        description: "আপনার সম্পদ নিসাবের নিচে। যাকাত ফরজ নয়।",
      });
    }
  };

  const reset = () => {
    setForm({
      cash: "",
      savings: "",
      investments: "",
      receivables: "",
      otherAssets: "",
      debts: "",
      goldGrams: "",
      silverGrams: "",
      goldPricePerGram: "7500",
      silverPricePerGram: "90",
    });
    setResults({
      zakatDue: 0,
      netAssets: 0,
      nisabValue: 0,
      isCalculated: false,
    });
    toast.info("ফর্ম রিসেট হয়েছে");
  };

  const copyResult = async () => {
    const { zakatDue, netAssets, nisabValue } = results;
    const text = `নেট সম্পদ: ${netAssets.toLocaleString()} টাকা\nনিসাব (${
      nisabBy === "gold" ? "স্বর্ণ" : "রূপা"
    }): ${nisabValue.toLocaleString()} টাকা\nযাকাত প্রদেয়: ${zakatDue.toLocaleString()} টাকা`;

    try {
      await navigator.clipboard.writeText(text);
      toast.success("ফলাফল কপি হয়েছে");
    } catch {
      toast.error("কপি ব্যর্থ হয়েছে");
    }
  };

  const isZakatApplicable =
    results.netAssets >= results.nisabValue && results.netAssets > 0;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl p-3 md:text-6xl font-bold bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text">
          যাকাত ক্যালকুলেটর
        </h2>
      </div>
      <Card>
        <CardContent className="pt-6">
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-red-600 mb-2">
                  নিসাবের সীমা (যাকাত ফরজ হওয়ার ন্যূনতম সম্পদ)
                </h3>
                <div className="text-sm text-red-600 space-y-1">
                  <p>
                    <strong>স্বর্ণের ভিত্তিতে:</strong> {nisabThresholds.gold}
                    গ্রাম স্বর্ণ বা তার সমমূল্যের সম্পদ
                  </p>
                  <p>
                    <strong>রূপার ভিত্তিতে:</strong>
                    {nisabThresholds.silver.toLocaleString()} গ্রাম রূপা বা তার
                    সমমূল্যের সম্পদ
                  </p>
                  <p className="text-xs mt-2">
                    ※ আপনার মোট সম্পদ নিসাবের সীমা অতিক্রম করলে এবং এক বছর পূর্ণ
                    হলে যাকাত ফরজ হয়।
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { key: "cash", label: "নগদ অর্থ" },
              { key: "savings", label: "সঞ্চয়" },
              { key: "investments", label: "বিনিয়োগ" },
              { key: "receivables", label: "প্রাপ্য ঋণ / পাওনা" },
              { key: "otherAssets", label: "অন্যান্য সম্পদ" },
              { key: "debts", label: "বকেয়া ঋণ" },
              { key: "goldGrams", label: "স্বর্ণ (গ্রাম)" },
              { key: "silverGrams", label: "রূপা (গ্রাম)" },
              { key: "goldPricePerGram", label: "স্বর্ণ প্রতি গ্রাম মূল্য" },
              { key: "silverPricePerGram", label: "রূপা প্রতি গ্রাম মূল্য" },
            ].map((f) => (
              <div key={f.key}>
                <label className="block text-sm font-medium mb-1">
                  {f.label}
                </label>
                <Input
                  type="number"
                  value={form[f.key]}
                  onChange={(e) => handleChange(f.key, e.target.value)}
                  placeholder="0"
                />
              </div>
            ))}

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">
                নিসাব নির্ধারণ
              </label>
              <Select value={nisabBy} onValueChange={setNisabBy}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gold">
                    স্বর্ণ — {nisabThresholds.gold} গ্রাম
                  </SelectItem>
                  <SelectItem value="silver">
                    রূপা — {nisabThresholds.silver} গ্রাম
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6 flex gap-3 flex-wrap">
            <Button onClick={calculateZakat}>হিসাব করুন</Button>
            <Button variant="ghost" onClick={reset}>
              রিসেট
            </Button>
            {results.isCalculated && (
              <Button variant="outline" onClick={copyResult}>
                <Clipboard className="mr-2 h-4 w-4" /> ফলাফল কপি
              </Button>
            )}
          </div>

          {results.isCalculated && (
            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-3 text-green-800">
                হিসাবের ফলাফল
              </h3>
              <p>নেট সম্পদ: {results.netAssets.toLocaleString()} টাকা</p>
              <p>
                নিসাব: {results.nisabValue.toLocaleString()} টাকা ({nisabBy})
              </p>
              <p>যাকাত ফরজ: {isZakatApplicable ? "✅ হ্যাঁ" : "❌ না"}</p>
              {isZakatApplicable && (
                <p className="font-bold text-blue-600 mt-2">
                  যাকাত প্রদেয়: {results.zakatDue.toLocaleString()} টাকা
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
