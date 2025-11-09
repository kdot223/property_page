export async function fetchProperty(id = 1) {
  // ถ้ารันอยู่บนเซิร์ฟเวอร์ (เช่นตอน build หรือใน Vercel)
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
      images: ["/assets/house.jpg"],
      agent: {
        name: "Monkey",
        phone: "+66-80-123-4567",
        email: "agent@example.com",
        avatar: "/assets/agent.jpg"
      },
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.0"
    };
  }

  
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";
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
      images: ["/assets/house.jpg"],
      agent: {
        name: "Monkey",
        phone: "+66-80-123-4567",
        email: "agent@example.com",
        avatar: "/assets/agent.jpg"
      },
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.0"
    };
  }
}
