'use client';
import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function InfoClient({ initialData }) {
  const data = initialData;

  // ✅ ต้องมี useEffect นี้ เพื่อให้ Carousel ใช้งานได้
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (!data) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container py-4">

      {/* ✅ Carousel */}
      <Carousel fade indicators={true} controls={true} interval={2500}>
        {data.images.map((img, i) => (
          <Carousel.Item key={i}>
            <img
              src={img}
              alt={`Slide ${i}`}
              className="d-block w-100 rounded"
              style={{
                maxHeight: "520px",
                objectFit: "cover",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* เนื้อหาอื่นๆ ของหน้า (ไม่ต้องลบ) */}
    </div>
  );
}
