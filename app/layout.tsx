import '../styles/globals.css'

export const metadata = {
  title: 'Buffalo Cannabis Network - Your Cannabis Community Hub',
  description: 'Discover dispensaries, events, and cannabis community news in Buffalo, NY.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}