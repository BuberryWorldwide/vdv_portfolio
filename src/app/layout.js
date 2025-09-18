import './globals.css'

export const metadata = {
  title: 'Volunteer Digital Ventures - Professional Technical Services',
  description: 'Tennessee-licensed contractor specializing in digital infrastructure deployment and cryptocurrency mining infrastructure.',
  
  openGraph: {
    title: 'Volunteer Digital Ventures',
    description: 'Professional technical contractor - Licensed Tennessee LLC',
    url: 'https://vdv.gold',
    siteName: 'Volunteer Digital Ventures',
    type: 'website',
  },
  
  twitter: {
    card: 'summary',
    title: 'Volunteer Digital Ventures',
    description: 'Professional technical contractor services',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}