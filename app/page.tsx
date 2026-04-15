"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 20px",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 10
      }}>
        <h2 style={{ letterSpacing: "2px" }}>GAANA</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          fontSize: "14px"
        }}>
          <span style={{ cursor: "pointer" }}>Home</span>
          <span style={{ cursor: "pointer" }}>Shop</span>
          <span style={{ cursor: "pointer" }}>New Arrivals</span>
          <span style={{ cursor: "pointer" }}>Cart (0)</span>
        </div>
      </div>

      {/* BANNER */}
      <div style={{
        height: "400px",
        backgroundImage: "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}>
        {/* DARK OVERLAY */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.4)"
        }}></div>

        {/* TEXT */}
        <h1 style={{
          color: "white",
          fontSize: "36px",
          zIndex: 1,
          textAlign: "center"
        }}>
          Gaana Premium Women's Wear
        </h1>
      </div>

      {/* PRODUCTS */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Our Collection</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          {products.map((p: any) => (
            <div key={p.id} style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              transition: "0.3s"
            }}>
              <img
                src={p.image}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "10px" }}>
                <h3>{p.name}</h3>
                <p>₹{p.price}</p>

                <button
                  onClick={() => alert("Added to cart")}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "black",
                    color: "white",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}