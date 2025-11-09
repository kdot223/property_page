"use client";
import Image from "next/image";
import { useState } from "react";

export default function InfoPage() {
  // 🖼️ ที่นี่พี่ใส่ URL รูปบ้านของพี่เองได้เลย
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600"
  );

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1600",
  ];

  return (
    <main className="property-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home / Bangkok / Detached House / SONLE Residences / For Sale
      </div>

      {/* รูปบ้านหลัก */}
      <div className="main-image">
        <Image
          src={mainImage}
          alt="Main property image"
          width={1200}
          height={700}
          className="property-image"
        />
        <div className="thumbnail-row">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`thumbnail ${img === mainImage ? "active" : ""}`}
              onClick={() => setMainImage(img)}
              alt="thumbnail"
            />
          ))}
        </div>
      </div>

      {/* รายละเอียดบ้าน */}
      <div className="property-details">
        <h2>SONLE RESIDENCES – Luxurious 3-Storey Detached Homes</h2>
        <p className="location">Wong Sawan, Bang Sue, Bangkok</p>
        <p className="price">฿ 260,000,000</p>

        <div className="icons-row">
          <div>🛏️ 5 Beds</div>
          <div>🛁 5 Baths</div>
          <div>📏 714 sq.m.</div>
        </div>
      </div>

      {/* Agent */}
      <div className="agent-card">
        <img src="/assets/agent.jpg" alt="Agent" className="agent-avatar" />
        <div>
          <strong>Monkey</strong>
          <p>Real Estate Consultant</p>
          <a href="https://line.me/en/">💬 Contact via LINE</a>
        </div>
      </div>

      {/* แผนที่ */}
      <div className="map-section">
        <h3>Google Map</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.732474567527!2d100.5147!3d13.7527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2995db8d8e46f%3A0x11cb4b1d8475bc3!2sBangkok!5e0!3m2!1sen!2sth!4v1700000000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Mortgage Section */}
      <div className="mortgage-section">
        <h3>Estimated Mortgage</h3>
        <div className="mortgage-bar">
          <span>Loan 80%</span>
          <progress value="80" max="100"></progress>
        </div>
        <button className="calculate-btn">Calculate Again</button>
      </div>

      {/* Footer */}
      <footer>
        <p>
          Acceptable Use Policy | Terms & Conditions | Privacy Policy | Terms of
          Sale
        </p>
        <p>©Copyright 2025</p>
      </footer>
    </main>
  );
}
