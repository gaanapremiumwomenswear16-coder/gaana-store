export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 40px",
          borderBottom: "1px solid #eee",
          fontWeight: "500"
        }}>
          <h2>GAANA</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/">Home</a>
            <a href="#">Shop</a>
            <a href="#">New Arrivals</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <a href="#">🛒 Cart</a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}