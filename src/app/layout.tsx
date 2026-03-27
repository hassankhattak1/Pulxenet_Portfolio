import type { Metadata } from 'next'
import { Bebas_Neue, Poppins } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })
const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Pulxenet - Digital Transformation & IT Services',
  description: 'Digital Transformation, Managed IT Services, Cloud, Data and Automation Solutions Provider.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${bebas.variable} font-poppins bg-background text-paragraph antialiased`}>
        {children}
      </body>
    </html>
  )
}
