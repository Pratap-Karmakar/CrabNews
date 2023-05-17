import '@/styles/globals.css'
import Header from './Header'

export const metadata = {
  title: 'CrabNews',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  )
}