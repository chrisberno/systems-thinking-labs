export const metadata = {
  title: "SPOK OS — Playground Test",
  description: "A dummy Next.js app built by a SPOK OS agent.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          background: "#272b34",
          color: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
