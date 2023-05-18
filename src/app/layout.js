import './globals.css'

export const metadata = {
  title: 'Kelebek\'s Tools',
  description: 'kelebek\'s tools',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
