'use client';
import React, { useState } from "react";

export default function InfoPage() {
  const [price, setPrice] = useState(260000000);
  const [loanPercent, setLoanPercent] = useState(70);
  const [interest, setInterest] = useState(3);
  const [years, setYears] = useState(30);

  const loanAmount = Math.round((price * loanPercent) / 100);
  const downPayment = price - loanAmount;
  const yearlyPayment = Math.round(loanAmount * (1 + (interest / 100) * years) / years);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-primary">🏠 คำนวณสินเชื่อบ้าน</h2>

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
  );
}
