const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

const data = {
  id: 1,
  title: { en: "SONLE RESIDENCES – Luxurious 3-Storey Detached Homes", th: "SONLE RESIDENCES บ้านเดี่ยวสุดหรู 3 ชั้น" },
  priceDisplay: "฿ 260,000,000",
  location: "Wong Sawan, Bang Sue, Bangkok",
  description: {
    en: "An exclusive luxury development offering modern design and premium finishes. Spacious living areas, panoramic windows, and private gardens.",
    th: "โครงการบ้านเดี่ยวสุดหรู ออกแบบทันสมัย วัสดุพรีเมียม พื้นที่ใช้สอยกว้างขวาง และสวนส่วนตัว"
  },
  images: ["/assets/house1.jpg","/assets/house2.jpg","/assets/house3.jpg"],
  agent: { name: "Monkey", phone: "+66-80-123-4567", email: "agent@example.com", avatar: "/assets/agent.jpg" },
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.732474567527!2d100.5147!3d13.7527"
};

app.get('/api/property/:id', (req,res)=>{ res.json(data); });

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));

