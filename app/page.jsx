'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./info.module.css";

export default function InfoPage() {
  const [price, setPrice] = useState(260000000);
  const [loanPercent, setLoanPercent] = useState(70);
  const [interest, setInterest] = useState(3);
  const [years, setYears] = useState(30);

  const loanAmount = Math.round((price * loanPercent) / 100);
  const downPayment = price - loanAmount;
  const yearlyPayment = Math.round(loanAmount * (1 + (interest / 100) * years) / years);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className={`container py-5 ${styles.infoPage}`}>
      {/* รูปบ้าน */}
      <div className="rounded overflow-hidden mb-4 shadow-sm">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600"
          alt="Luxury House"
          width={1200}
          height={600}
          className="img-fluid rounded"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* ข้อมูล */}
      <h2 className={`fw-bold mb-1 ${styles.title}`}>
        SONLE RESIDENCES บ้านเดี่ยวสุดหรู 3 ชั้น
      </h2>
      <p className="text-muted mb-2">วงศ์สว่าง, บางซื่อ, กรุงเทพมหานคร</p>
      <h4 className={`fw-bold mb-4 ${styles.price}`}>฿ 260,000,000</h4>

      <div className={`d-flex flex-wrap gap-3 mb-4 ${styles.features}`}>
        <span>🛏️ 5 ห้องนอน</span>
        <span>🛁 5 ห้องน้ำ</span>
        <span>📐 714 ตร.ม.</span>
      </div>

      <h5 className="fw-bold">รายละเอียด</h5>
      <p>
        โครงการบ้านเดี่ยวสุดหรู ออกแบบทันสมัย วัสดุพรีเมียม พื้นที่ใช้สอยกว้างขวาง
        และสวนส่วนตัว เหมาะสำหรับครอบครัวที่ต้องการความเป็นส่วนตัวและความหรูหรา
      </p>

      {/* Google Map */}
      <h5 className="fw-bold mt-5">Google Map</h5>
      <div className="ratio ratio-4x3 border rounded">
        <iframe
          src="https://www.google.com/maps?q=13.7563,100.5018&z=12&output=embed"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

      {/* ผู้ดูแลโครงการ */}
      <div className={`mt-5 border-top pt-4 ${styles.agentSection}`}>
        <h5 className="fw-bold mb-3">ผู้ดูแลโครงการ</h5>
        <div className="d-flex align-items-center gap-3">
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Agent"
            width={64}
            height={64}
            className="rounded-circle border"
          />
          <div>
            <div className="fw-bold">Monkey</div>
            <div className="text-muted small">+66-80-123-4567</div>
          </div>
        </div>
      </div>

      {/* 💰 คำนวณสินเชื่อ */}
      <div className={`mt-5 border-top pt-5 ${styles.mortgageBox}`}>
        <h4 className={`fw-bold mb-4 ${styles.calcTitle}`}>💰 คำนวณสินเชื่อโดยประมาณ</h4>

        <div className="row g-4 align-items-start">
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

            <button className={`btn w-100 mt-4 ${styles.calcBtn}`}>
              คำนวณอีกครั้ง
            </button>
          </div>

          <div className="col-md-6">
            <div className={styles.resultBox}>
              <div className={styles.barWrap}>
                <div className={styles.bar}>
                  <div className={styles.barFilled} style={{ width: `${loanPercent}%` }}></div>
                </div>
                <div className={styles.barLabels}>
                  <span>วงเงินกู้ {loanPercent}%</span>
                  <span>เงินดาวน์ {100 - loanPercent}%</span>
                </div>
              </div>

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
