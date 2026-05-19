import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        style={{
          fontFamily: "Poppins, sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
          background: "#f9f8ff",
        }}
      >
        <p style={{ fontSize: 80, margin: "0 0 8px", lineHeight: 1 }}>🛸</p>
        <h1
          style={{
            fontSize: 42,
            fontWeight: 800,
            color: "#0d0d14",
            letterSpacing: "-0.025em",
            margin: "0 0 12px",
          }}
        >
          404 — Page Not Found
        </h1>
        <p style={{ fontSize: 16, color: "#888", maxWidth: 400, lineHeight: 1.7, margin: "0 0 36px" }}>
          Looks like this page drifted into deep space. Let's get you back home.
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 28px",
            background: "linear-gradient(135deg, #6c63ff, #564ef1)",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "Poppins, sans-serif",
            boxShadow: "0 8px 24px rgba(108,99,255,0.3)",
          }}
        >
          ← Back to Home
        </button>
      </div>
    </>
  );
};

export default NotFound;