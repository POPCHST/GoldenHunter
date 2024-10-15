function HeroSection() {
  return (
    <section style={heroStyle}>
      <h1>Welcome to Our Channel</h1>
      <button style={ctaButtonStyle}>Watch Latest Video</button>
    </section>
  );
}

const heroStyle: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   height: "400px",
//   backgroundColor: "#555",
//   color: "#fff",
  textAlign: "center",
};

const ctaButtonStyle: React.CSSProperties = {
  marginTop: "20px",
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#f44336",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default HeroSection;
