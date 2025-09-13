
export const metadata = {
  title: "Satisfied -Islamic Bhai",
  description:
    "Welcome to Islamic Bhai, your one-stop destination for all things Islamic. From prayer times to spiritual guidance, Islamic Bhai is your trusted source for all things Islamic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
       
        <div className="max-w-6xl mx-auto">
          {children}
        
        </div>
      </body>
    </html>
  );
}
