// src/lib/propertyData.js

export async function fetchProperty(id = 1) {
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
