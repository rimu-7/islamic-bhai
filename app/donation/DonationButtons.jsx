import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export default function DonationButtons({ bankAccount, bKash, nagad }) {
  const handleCopy = (text, label) => {
    if (navigator.clipboard) navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  return (
    <div className="flex flex-col gap-3">
      <Button
        variant="outline"
        className="flex justify-between items-center"
        onClick={() => handleCopy(bankAccount, "Bank Account")}
      >
        {bankAccount} <Copy className="w-5 h-5" />
      </Button>

      <Button
        variant="destructive"
        className="flex justify-between items-center"
        onClick={() => handleCopy(bKash, "bKash")}
      >
        bKash: {bKash} <Copy className="w-5 h-5" />
      </Button>

      <Button
        variant="secondary"
        className="flex justify-between items-center"
        onClick={() => handleCopy(nagad, "Nagad")}
      >
        Nagad: {nagad} <Copy className="w-5 h-5" />
      </Button>
    </div>
  );
}
