import { Inter } from 'next/font/google'
import './ui/globals.css'
import Navbar from "./ui/dashboard/navbar/navbar"
import Sidebar from "./ui/dashboard/sidebar/sidebar"
import styles from "./ui/dashboard/dashboard.module.css"
import Footer from "./ui/dashboard/footer/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lama Dev Next.js Admin Dashboard',
  description: 'Next.js 14 Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
      
      </body>
    </html>
  )
}
