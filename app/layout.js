import './globals.css'

export const metadata = {
  title: 'Sebastien Jourdain - Portfolio',
  description: 'Grull Stack Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}