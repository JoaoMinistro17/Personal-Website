export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}


        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"/>
        <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet"/>

        <canvas class="background"></canvas>
        <script src="../node_modules/particlesjs/dist/particles.min.js"></script>
      </body>
    </html>
  )
}
