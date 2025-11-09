'use client';
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function InfoPage() {
  const [lang, setLang] = useState("th");
  const [price, setPrice] = useState(260000000);
  const [loanPercent, setLoanPercent] = useState(70);
  const [interest, setInterest] = useState(3);
  const [years, setYears] = useState(30);

  const loanAmount = Math.round((price * loanPercent) / 100);
  const downPayment = price - loanAmount;
  const yearlyPayment = Math.round(
    loanAmount * (1 + (interest / 100) * years) / years
  );

  const data = {
    title: {
      en: "SONLE RESIDENCES – Luxurious 3-Storey Detached Homes",
      th: "SONLE RESIDENCES บ้านเดี่ยวสุดหรู 3 ชั้น",
    },
    priceDisplay: "฿ 260,000,000",
    location: "วงศ์สว่าง, บางซื่อ, กรุงเทพฯ",
    description: {
      en: "An exclusive luxury development offering modern design and premium finishes. Spacious living areas, panoramic windows, and private gardens.",
      th: "โครงการบ้านเดี่ยวสุดหรู ออกแบบทันสมัย วัสดุพรีเมียม พื้นที่ใช้สอยกว้างขวาง และสวนส่วนตัว เหมาะสำหรับครอบครัวที่ต้องการความเป็นส่วนตัวและหรูหรา",
    },
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
    ],
    agent: {
      name: "Monkey",
      phone: "+66-80-123-4567",
      email: "agent@example.com",
      line: "@monkeyagent",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.732474567527!2d100.5147!3d13.7527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2995a5d81b3b5%3A0x5d55aa4227abf5b!2sBang%20Sue%2C%20Bangkok!5e0!3m2!1sen!2sth!4v1699372054783!5m2!1sen!2sth",
  };

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="container py-5">
      {/* 🔄 Language Toggle */}
      <div className="d-flex justify-content-end mb-3">
        <div className="btn-group">
          <button
            className={`btn btn-outline-secondary ${lang === "en" ? "active" : ""}`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            className={`btn btn-outline-secondary ${lang === "th" ? "active" : ""}`}
            onClick={() => setLang("th")}
          >
            TH
          </button>
        </div>
      </div>

      {/* 🏡 Carousel */}
      <Carousel className="rounded overflow-hidden shadow mb-4" interval={3000}>
        {data.images.map((src, i) => (
          <Carousel.Item key={i}>
            <img
              src={src}
              className="d-block w-100"
              style={{ maxHeight: "550px", objectFit: "cover" }}
              alt={`slide-${i}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* 🏠 Property Info */}
      <h2 className="fw-bold">{data.title[lang]}</h2>
      <p className="text-muted">{data.description[lang]}</p>
      <h4 className="text-primary mb-3">
        💰 ราคา: <span className="fw-bold">{data.priceDisplay}</span>
      </h4>
      <p><i className="bi bi-geo-alt"></i> {data.location}</p>

      {/* 📞 Agent Card */}
      <div className="card mt-4 border-0 shadow-sm p-3">
        <div className="d-flex align-items-center">
          <img
            src={data.agent.avatar}
            alt="Agent"
            width="80"
            height="80"
            className="rounded-circle border me-3"
          />
          <div>
            <h5 className="mb-1">{data.agent.name}</h5>
            <p className="text-muted small mb-2">Property Agent</p>
            <div className="d-flex gap-2 flex-wrap">
              <a href={`tel:${data.agent.phone}`} className="btn btn-outline-success btn-sm">
                <i className="bi bi-telephone-fill me-1"></i> โทร
              </a>
              <a href={`mailto:${data.agent.email}`} className="btn btn-outline-primary btn-sm">
                <i className="bi bi-envelope-fill me-1"></i> อีเมล
              </a>
              <a
                href={`https://line.me/R/ti/p/${data.agent.line}`}
                target="_blank"
                className="btn btn-success btn-sm text-white"
              >
                <i className="bi bi-line me-1"></i> LINE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🗺 Google Map */}
      <div className="mt-5">
        <h6 className="fw-bold mb-2">📍 แผนที่</h6>
        <div className="ratio ratio-4x3 shadow rounded">
          <iframe src={data.mapEmbed} style={{ border: 0 }} loading="lazy"></iframe>
        </div>
      </div>

      {/* 💰 Mortgage Calculator */}
      <div className="mt-5">
        <h5 className="fw-bold mb-3 text-primary">คำนวณสินเชื่อบ้าน</h5>
        <div className="row g-4">
          <div className="col-md-6">
            <label className="form-label">ราคาอสังหาฯ (บาท)</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />

            <label className="form-label mt-3">วงเงินกู้ (%)</label>
            <input
              type="number"
              className="form-control"
              value={loanPercent}
              onChange={(e) => setLoanPercent(Number(e.target.value))}
            />

            <label className="form-label mt-3">อัตราดอกเบี้ย (%)</label>
            <input
              type="number"
              className="form-control"
              value={interest}
              onChange={(e) => setInterest(Number(e.target.value))}
            />

            <label className="form-label mt-3">ระยะเวลา (ปี)</label>
            <input
              type="number"
              className="form-control"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />

            <button className="btn btn-warning w-100 mt-4 fw-semibold">
              คำนวณอีกครั้ง
            </button>
          </div>

          <div className="col-md-6">
            <div className="bg-light p-4 rounded shadow-sm">
              <p>💸 วงเงินกู้โดยประมาณ: <strong>{loanAmount.toLocaleString()}</strong> บาท</p>
              <p>🏦 เงินดาวน์โดยประมาณ: <strong>{downPayment.toLocaleString()}</strong> บาท</p>
              <p>📆 ยอดชำระต่อปี: <strong>{yearlyPayment.toLocaleString()}</strong> บาท</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
