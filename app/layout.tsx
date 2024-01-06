import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Personal Portfolio | Linval',
  description: 'Linval is a full stack developer with 3+ years experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
      <div className='bg-[#3ab2f2] absolute top-[-6rem] right-[11rem] h-[31.25rem] -z-10  w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem]'></div>
        <div className='bg-[#baf5df] absolute top-[-1rem] left-[-35rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <Header />
        {children}
        </body>
    </html>
  )
}
