import { notFound } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Pastel Ruched Dress",
    price: "₹1,999",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322"
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1520975922203-bb3c1e0e91b8"
  },
  {
    id: 3,
    name: "Elegant Black Dress",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
  }
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === Number(params.id));

  if (!product) return notFound();

  return (
    <div style={{
      display: "flex",
      gap: "40px",
      padding: "40px",
      maxWidth: "1000px",
      margin: "0 auto"
    }}>
      
      {/* IMAGE */}
      <div style={{ flex: 1 }}>
        <img src={product.image} style={{ width: "100%", borderRadius: "10px" }} />
      </div>

      {/* DETAILS */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
          {product.name}
        </h1>

        <p style={{ fontSize: "20px", marginBottom: "20px" }}>
          {product.price}
        </p>

        <button style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}>
          Add to Cart
        </button>
      </div>

    </div>
  );
}