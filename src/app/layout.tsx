

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <p>
          {/* header */}
        </p>
        {children}
      </body>
    </html>
  );
}
