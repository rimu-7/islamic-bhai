import { Toaster } from "sonner";

export const metadata = {
  title: "যাকাত ইসলামের ৩য় স্তম্ভ - ইসলামিক ভাই",
  description:
    "Welcome to Islamic Bhai, your one-stop destination for all things Islamic. From prayer times to spiritual guidance, Islamic Bhai is your trusted source for all things Islamic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
      <Toaster position="top-center" expand={true} richColors />
    </html>
  );
}
