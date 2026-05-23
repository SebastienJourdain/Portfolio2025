import './globals.css';

export const metadata = {
  title: 'Sebastien Jourdain - Portfolio',
  description: 'Etudiant à Epitech en Master cybersécurité à la recherche d une alternance dans ce domaine pour janvier 2026',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}