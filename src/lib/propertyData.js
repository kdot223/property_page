export async function fetchProperty(id = 1) {
  // ถ้ารันบนเซิร์ฟเวอร์ (ตอน build หรือใน Vercel)
  if (typeof window === "undefined") {
    console.log("🌐 Server build detected — using mock data only");
    return {
      id,
      title: { 
        en: "SONLE RESIDENCES – Luxurious 3-Storey Detached Homes", 
        th: "SONLE RESIDENCES บ้านเดี่ยวสุดหรู 3 ชั้น" 
      },
      priceDisplay: "฿ 260,000,000",
      beds: 5,
      baths: 5,
      area: 714,
      location: "Wong Sawan, Bang Sue, Bangkok",
      description: {
        en: "An exclusive luxury development offering modern design and premium finishes. Spacious living areas, panoramic windows, and private gardens.",
        th: "โครงการบ้านเดี่ยวสุดหรู ออกแบบทันสมัย วัสดุพรีเมียม พื้นที่ใช้สอยกว้างขวาง และสวนส่วนตัว"
      },
      // ✅ เพิ่มหลายรูปภาพ (จะเลื่อนได้แน่นอน)
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600",
        "https://images.unsplash.com/photo-1599423300746-b62533397364?w=1600"
      ],
      agent: {
        name: "Monkey",
        phone: "+66-80-123-4567",
        email: "agent@example.com",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.732474567527!2d100.5147!3d13.7527"
    };
  }

  // ถ้า fetch backend ไม่ได้ ให้ fallback มาที่ mock data ข้างบน
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4001";
    const res = await fetch(`${backendUrl}/api/property/${id}`);
    if (!res.ok) throw new Error("Backend not responding");
    return await res.json();
  } catch (err) {
    console.warn("⚠️ Backend not found, using mock data instead.");
    return {
      id,
      title: { 
        en: "SONLE RESIDENCES – Luxurious 3-Storey Detached Homes", 
        th: "SONLE RESIDENCES บ้านเดี่ยวสุดหรู 3 ชั้น" 
      },
      priceDisplay: "฿ 260,000,000",
      beds: 5,
      baths: 5,
      area: 714,
      location: "Wong Sawan, Bang Sue, Bangkok",
      description: {
        en: "An exclusive luxury development offering modern design and premium finishes. Spacious living areas, panoramic windows, and private gardens.",
        th: "โครงการบ้านเดี่ยวสุดหรู ออกแบบทันสมัย วัสดุพรีเมียม พื้นที่ใช้สอยกว้างขวาง และสวนส่วนตัว"
      },
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600"
      ],
      agent: {
        name: "Monkey",
        phone: "+66-80-123-4567",
        email: "agent@example.com",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.732474567527!2d100.5147!3d13.7527"
    };
  }
}
