import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import Navbar from "./components/navbar";
const roboto = Roboto({ subsets: ['latin'] , weight: ['400']})
export const metadata = {
  title: 'codnap',
  description: 'Code The World',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
    <Navbar/>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
