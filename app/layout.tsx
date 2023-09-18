import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Nunito_Sans } from 'next/font/google'

const nunito = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista de paises',
  description: 'Uma lista de paises criada com o Next 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
          <nav className='w-full bg-white h-16 flex items-center justify-center'>
            <section className='container flex items-center gap-3'>
              <Image src="/logo.svg" alt="Logo" width={48} height={48} />
              <h1 className='font-bold text-2xl'>Lista de paises</h1>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
