// src/pages/Gallery.js
import { Link } from "react-router-dom";

export default function Gallery() {
  const categories = [
    { id: "birthday", title: "🎂 Birthday Cards", img: "https://picsum.photos/400/250?random=11" },
    { id: "valentine", title: "❤️ Valentine’s Day", img: "https://picsum.photos/400/250?random=12" },
    { id: "motivation", title: "✨ Motivational Quotes", img: "https://picsum.photos/400/250?random=13" },
    { id: "festival", title: "🎉 Festival Greetings", img: "https://picsum.photos/400/250?random=14" },
  ];

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", margin: "30px 0" }}>🎨 Templates Gallery</h1>
      <div className="grid">
        {categories.map((c) => (
          <div key={c.id} className="card">
            <img src={c.img} alt={c.title} />
            <h2>{c.title}</h2>
            <Link to={`/gallery/${c.id}`} className="btn">View Templates</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
