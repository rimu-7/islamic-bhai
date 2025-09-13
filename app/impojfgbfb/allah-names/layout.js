import { Amiri } from "next/font/google"

const amiri = Amiri({
  subsets: ["arabic"],
  weight: "400",
  variable: "--font-arabic"
})

export const metadata = {
  title: "99 Names of Allah",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${amiri.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
