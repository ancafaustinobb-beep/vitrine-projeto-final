import { useEffect, useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("/api/ofertas")
      .then(res => res.json())
      .then(data => setProdutos(data));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Ofertas do Dia</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {produtos.map((p, idx) => (
          <a
            key={idx}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "1rem",
              textAlign: "center",
              textDecoration: "none",
              color: "#000",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img
              src={p.imagem}
              alt={p.nome}
              style={{ width: "100%", height: "200px", objectFit: "contain", marginBottom: "1rem" }}
            />
            <p>{p.nome}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
