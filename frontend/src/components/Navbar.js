import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>✨ Card & Wallpaper Maker</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/gallery" style={styles.link}>Gallery</Link>
        <Link to="/create" style={styles.link}>Create</Link>
        <Link to="/download" style={styles.link}>Download</Link>
        <Link to="/motivation" style={styles.link}>Motivation</Link> {/* <-- link */}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#7c3aed", // violet theme
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "30px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 500,
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "all 0.3s",
  },
};

// Add hover effect with inline style workaround
// If you want, we can use a small CSS file for hover to make it smoother.
