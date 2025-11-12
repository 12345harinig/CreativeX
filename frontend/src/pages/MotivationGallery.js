// src/pages/MotivationGallery.js
import React, { useEffect, useState } from "react";

export default function MotivationGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual Render backend API URL
    fetch("https://wallpaper-backend-7dry.onrender.com")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching images:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading wallpapers...</h2>;
  }

  if (images.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>No wallpapers available.</h2>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Motivational Cards</h1>
      <div style={styles.grid}>
        {images.map((item) => (
          <div style={styles.card} key={item.id}>
            <img src={item.url} alt={item.name} style={styles.image} />
            <a href={item.url} download style={styles.button}>
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px 20px",
    fontFamily: "Arial, sans-serif",
    background: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "30px",
    color: "#7c3aed",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    padding: "15px",
  },
  image: { width: "100%", borderRadius: "12px" },
  button: {
    display: "inline-block",
    marginTop: "15px",
    padding: "10px 20px",
    background: "#7c3aed",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
