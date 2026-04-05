let _supabase;
try {
  if (typeof supabase !== 'undefined') {
    _supabase = supabase.createClient('https://dmxldiedgmizxwvvjhvj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRteGxkaWVkZ21penh3dnZqaHZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0NjYwNzcsImV4cCI6MjA4OTA0MjA3N30.g8vEOOq7aRMjIWA9qQHpMufoVdbPu2wVVJU8Te5jUFA');
    console.log("Supabase initialized successfully.");
  }
} catch (e) {
  console.error("Supabase failed to initialize", e);
}

// EMAILJS INITIALIZATION
if (typeof emailjs !== 'undefined') {
  emailjs.init("_OJV2s22-Zr3kVGxD");
  console.log("EmailJS initialized.");
}

// TRUST INFO FUNCTION (Moved to top for immediate availability)
window.showTrustInfo = function (type) {
  const modalBody = document.getElementById('trustModalBody');
  const overlay = document.getElementById('trustOverlay');
  if (!modalBody || !overlay) return;

  const info = {
    delivery: {
      icon: '🚚',
      title: 'Free & Fast Delivery',
      content: `
        <p>Enjoy <span class="highlight">Free Delivery</span> on all orders above ₹499. For orders below this amount, a nominal shipping fee of ₹40 applies.</p>
        <ul>
          <li>Same-day dispatch for orders placed before 2 PM.</li>
          <li>Standard delivery: 2-5 business days.</li>
          <li>Express delivery available in select metro cities.</li>
          <li>Real-time tracking provided via SMS and Email.</li>
        </ul>
      `
    },
    payments: {
      icon: '🔒',
      title: 'Secure Payments',
      content: `
        <p>Your security is our priority. We use <span class="highlight">256-bit SSL encryption</span> to protect your data.</p>
        <ul>
          <li>Safe & Secure transaction through Razorpay/Paytm.</li>
          <li>We accept all major Credit/Debit cards, UPI, and Net Banking.</li>
          <li>No-cost EMI available on select bank cards.</li>
          <li>Secure Cash on Delivery (COD) available for most PIN codes.</li>
        </ul>
      `
    },
    returns: {
      icon: '↩️',
      title: 'Easy 30-Day Returns',
      content: `
        <p>Not satisfied with your purchase? No worries! Our <span class="highlight">30-day hassle-free</span> return policy has you covered.</p>
        <ul>
          <li>Easy pick-up from your doorstep.</li>
          <li>Keep the original packaging and tags intact.</li>
          <li>Full refund processed within 5-7 working days.</li>
          <li>Replacement available for damaged or defective items.</li>
        </ul>
      `
    },
    authentic: {
      icon: '💎',
      title: '100% Authentic Products',
      content: `
        <p>We guarantee that all products sold on Smartgo are <span class="highlight">100% Original</span> and sourced directly from brands or authorized distributors.</p>
        <ul>
          <li>Strict quality checks before every shipment.</li>
          <li>Brand warranty cards included with electronics.</li>
          <li>Transparent product descriptions and specs.</li>
          <li>Verified seller badges on all marketplace items.</li>
        </ul>
      `
    },
    support: {
      icon: '🎧',
      title: '24/7 Expert Support',
      content: `
        <p>Our dedicated support team is <span class="highlight">Always here to help</span> you with any queries or issues.</p>
        <ul>
          <li>Phone Support: +91 800-SMARTGO (9 AM - 9 PM).</li>
          <li>WhatsApp Support: Available 24/7 for quick resolutions.</li>
          <li>Email: support@smartgo.in (Response within 12 hours).</li>
          <li>In-app Chat: Connect with our experts instantly.</li>
        </ul>
      `
    }
  };

  const selected = info[type];
  if (selected) {
    modalBody.innerHTML = `
      <div class="trust-modal-content">
        <h2>${selected.icon} ${selected.title}</h2>
        ${selected.content}
        <button class="lf-btn" style="margin-top:20px" onclick="document.getElementById('trustClose').click()">GOT IT</button>
      </div>
    `;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

const products = [
  // ---- AUDIO ----
  {
    id: 1,
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "audio",
    brand: "Sony",
    price: 29990,
    originalPrice: 34990,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
    fallback: "https://placehold.co/400x400/1a1a2e/ffffff?text=Sony+Headphones",
    badge: "hot",
    rating: 4.9,
    reviews: 15400,
    description: "Industry-leading noise cancellation with two processors controlling 8 microphones.",
    specs: { battery: "30 Hours", warranty: "1 Year", noise: "Best-in-class ANC", charging: "USB-C Fast" },
    features: ["Speak-to-Chat", "Adaptive Sound", "Multipoint Connect"],
    colors: ["#212121", "#f0f0f0", "#1a1a2e"],
    stock: 12
  },
  {
    id: 14,
    name: "Sony SRS-XV500 Party Speaker",
    category: "audio",
    brand: "Sony",
    price: 31990,
    originalPrice: 36990,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400",
    fallback: "https://via.placeholder.com/400?text=Sony+Speaker",
    badge: "new",
    rating: 4.8,
    reviews: 210,
    description: "Powerful sound, X-Balanced Speaker Unit, and 25-hour battery life.",
    specs: { battery: "25 Hours", warranty: "1 Year", water: "IPX4 water resistant", lighting: "Ambient Lights" },
    features: ["Karaoke Ready", "TV Sound Booster", "Mega Bass"],
    colors: ["#111", "#212121"],
    stock: 8
  },
  {
    id: 2,
    name: "Apple AirPods Pro (2nd Gen)",
    category: "audio",
    brand: "Apple",
    price: 24900,
    originalPrice: 26900,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
    fallback: "https://placehold.co/400x400/f8f9fa/1a73e8?text=Apple+AirPods",
    badge: "sale",
    rating: 4.9,
    reviews: 32000,
    description: "Rebuilt from the sound up, with Active Noise Cancellation and Adaptive Audio.",
    specs: { battery: "6 Hours (30h Case)", warranty: "1 Year", transparency: "Adaptive", chip: "H2 Chip" },
    features: ["Spatial Audio", "MagSafe Case", "Precision Finding"],
    colors: ["#ffffff"],
    stock: 45
  },
  {
    id: 15,
    name: "Zebronics Zeb-Max Pro Keyboard",
    category: "tech",
    brand: "Zebronics",
    price: 3999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400",
    fallback: "https://via.placeholder.com/400?text=Zebronics+Keyboard",
    badge: "gaming",
    rating: 4.6,
    reviews: 4500,
    description: "Full mechanical keyboard with Blue switches and customizable RGB lighting.",
    specs: { switches: "Blue Mechanical", warranty: "1 Year", light: "RGB (18 modes)", build: "Heavy Duty" },
    features: ["N-Key Rollover", "Gold Plated USB", "Braided Cable"],
    colors: ["#222", "#333"],
    stock: 60
  },

  // ---- WEARABLES ----
  {
    id: 4,
    name: "Samsung Galaxy Watch Ultra",
    category: "wearables",
    brand: "Samsung",
    price: 59999,
    originalPrice: 65000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    badge: "premium",
    rating: 4.9,
    reviews: 890,
    description: "BioActive Sensor, Sleep Coaching, and 100m water resistance. The peak of Samsung wearables.",
    specs: { battery: "100 Hours", warranty: "1 Year", water: "10ATM + IP68", chip: "Exynos W1000" },
    features: ["AI Health Insights", "Dual GPS", "Titanium Case"],
    colors: ["#1a1a2e", "#fb641b", "#ffffff"],
    stock: 22
  },
  {
    id: 16,
    name: "Samsung Galaxy S24 Ultra",
    category: "electronics",
    brand: "Samsung",
    price: 129999,
    originalPrice: 139999,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
    fallback: "https://via.placeholder.com/400?text=Samsung+S24+Ultra",
    badge: "AI",
    rating: 4.9,
    reviews: 25000,
    description: "The ultimate smartphone with Galaxy AI, S Pen, and 200MP camera.",
    specs: { battery: "5000 mAh", warranty: "1 Year", processor: "Snapdragon 8 Gen 3", display: "6.8\" AMOLED 120Hz" },
    features: ["Galaxy AI", "S Pen Included", "5X Optical Zoom"],
    colors: ["#1a1a2e", "#212121", "#878787"],
    stock: 15
  },

  // ---- TECH & OTHERS ----
  {
    id: 17,
    name: "Zebronics Juke Bar 9400",
    category: "audio",
    brand: "Zebronics",
    price: 13999,
    originalPrice: 18999,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400",
    fallback: "https://via.placeholder.com/400?text=Zebronics+Soundbar",
    badge: "top",
    rating: 4.4,
    reviews: 12000,
    description: "5.25\" Subwoofer, 150W Output, Bluetooth 5.0 with Dolby Digital support.",
    specs: { output: "150 Watts", warranty: "1 Year", bluetooth: "v5.0", sound: "Dolby Digital" },
    features: ["Wired Subwoofer", "HDMI ARC", "LED Display"],
    colors: ["#111"],
    stock: 30
  },
  {
    id: 12,
    name: "Apple MacBook Pro M3 (14-inch)",
    category: "tech",
    brand: "Apple",
    price: 169900,
    originalPrice: 189900,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    badge: "pro",
    rating: 4.9,
    reviews: 5600,
    description: "The world's best laptop. Incredible M3 performance and 22 hours of battery life.",
    specs: { battery: "22 Hours", warranty: "1 Year", gpu: "10-Core GPU", display: "Liquid Retina XDR" },
    features: ["M3 Tech", "MagSafe 3", "Final Cut Pro Ready"],
    colors: ["#1a1a2e", "#878787"],
    stock: 10
  },
  {
    id: 13,
    name: "Samsung Galaxy Tab S9 Ultra",
    category: "tech",
    brand: "Samsung",
    price: 108999,
    originalPrice: 122999,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400",
    badge: "elite",
    rating: 4.9,
    reviews: 2100,
    description: "Huge 14.6-inch Dynamic AMOLED 2X display. Powerhouse for creators with S Pen.",
    specs: { battery: "11200 mAh", warranty: "1 Year", screen: "14.6\" Dynamic AMOLED", accessory: "S Pen Included" },
    features: ["Super Wide Camera", "IP68 Resistant", "Desktop DeX Mode"],
    colors: ["#212121", "#878787"],
    stock: 12
  },

  // ---- PHOTOGRAPHY (CAMERA) ----
  {
    id: 101,
    name: "Sony Alpha 7 IV Mirrorless Camera",
    category: "photography",
    brand: "Sony",
    price: 212490,
    originalPrice: 242490,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    fallback: "https://placehold.co/400x400/1a1a2e/ffffff?text=Sony+Alpha+7",
    badge: "pro",
    rating: 4.9,
    reviews: 1250,
    description: "33MP Full-Frame Exmor R CMOS sensor. The perfect choice for hybrid creators.",
    specs: { sensor: "33MP Full-Frame", video: "4K 60p", af: "Real-time Eye AF", iso: "50-204800" },
    features: ["Advanced BIONZ XR", "10-bit 4:2:2", "S-Cinetone Support"],
    colors: ["#212121"],
    stock: 5
  },
  {
    id: 102,
    name: "Canon EOS R6 Mark II",
    category: "photography",
    brand: "Canon",
    price: 229995,
    originalPrice: 243995,
    image: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=400",
    fallback: "https://placehold.co/400x400/f03e3e/ffffff?text=Canon+EOS+R6",
    badge: "high-speed",
    rating: 4.8,
    reviews: 840,
    description: "40 fps electronic shutter. Professional performance with unmatched autofocus technology.",
    specs: { sensor: "24.2MP Full-Frame", burst: "40 fps", focus: "Dual Pixel CMOS AF II", ibis: "Up to 8 stops" },
    features: ["Deep Learning AF", "Uncropped 4K 60p", "High-Definition EVF"],
    colors: ["#212121"],
    stock: 8
  },
  {
    id: 103,
    name: "GoPro HERO12 Black",
    category: "photography",
    brand: "GoPro",
    price: 37990,
    originalPrice: 45000,
    image: "https://images.unsplash.com/photo-1563330232-57114bb0823c?w=400",
    fallback: "https://placehold.co/400x400/1a73e8/ffffff?text=GoPro+Hero12",
    badge: "adventure",
    rating: 4.7,
    reviews: 3200,
    description: "5.3K HDR Video. The most rugged, versatile GoPro ever made for action.",
    specs: { video: "5.3K 60fps", stabilization: "HyperSmooth 6.0", depth: "33ft Waterproof", battery: "Enduro Battery" },
    features: ["Bluetooth Audio Support", "Timecode Sync", "HDR Photo + Video"],
    colors: ["#212121"],
    stock: 25
  },
  {
    id: 104,
    name: "Insta360 X3 Action Camera",
    category: "photography",
    brand: "Insta360",
    price: 45500,
    originalPrice: 49990,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    fallback: "https://placehold.co/400x400/ff9100/ffffff?text=Insta360+X3",
    badge: "360-view",
    rating: 4.6,
    reviews: 2100,
    description: "Capture the impossible. 5.7K 360 Video with massive 1/2-inch sensors.",
    specs: { resolution: "5.7K 360", screen: "2.29\" Touchscreen", ai: "AI Editing", flowstate: "FlowState Stab." },
    features: ["Invisible Selfie Stick", "Active HDR", "Single Lens Mode"],
    colors: ["#212121"],
    stock: 15
  },

  {
    id: 201,
    name: "Voyager Pro Backpack (30L)",
    category: "bags",
    brand: "UrbanGear",
    price: 8299,
    originalPrice: 12000,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400",
    fallback: "https://placehold.co/400x400/1565c0/ffffff?text=Voyager+Pro",
    badge: "travel",
    rating: 4.8,
    reviews: 878,
    description: "Premium tech-backpack with 16\" laptop sleeve and waterproof ballistic nylon.",
    specs: { volume: "30L", laptop: "Up to 16\"", material: "Ballistic Nylon", pockets: "12 Total" },
    features: ["TSA Friendly", "Hidden Passport Pocket", "USB charging port"],
    colors: ["#2d2d2d", "#1a237e"],
    stock: 22
  },
  {
    id: 202,
    name: "Classic Leather Satchel",
    category: "bags",
    brand: "FashionElite",
    price: 15499,
    originalPrice: 19999,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
    fallback: "https://placehold.co/400x400/fb641b/ffffff?text=Leather+Satchel",
    badge: "premium",
    rating: 4.7,
    reviews: 1200,
    description: "Handcrafted full-grain leather satchel for the modern professional.",
    specs: { material: "Full-Grain Leather", strap: "Adjustable Leather", hardware: "Brass Hooks", lining: "Suede" },
    features: ["Handmade", "Internal Organizer", "Magnetic Closures"],
    colors: ["#5d4037", "#212121"],
    stock: 12
  },
  {
    id: 203,
    name: "Expedition Duffel (60L)",
    category: "bags",
    brand: "AdventureCo",
    price: 9999,
    originalPrice: 14500,
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400",
    fallback: "https://placehold.co/400x400/388e3c/ffffff?text=Expedition+Duffel",
    badge: "rugged",
    rating: 4.9,
    reviews: 450,
    description: "Ultra-durable, weather-resistant bag for multi-day expeditions.",
    specs: { volume: "60L", weather: "IPX5 Splashproof", straps: "Detachable Backpack", zippers: "YKK AquaGuard" },
    features: ["Convertible Straps", "Padded Base", "Compression Straps"],
    colors: ["#ffb300", "#d32f2f"],
    stock: 20
  },
  {
    id: 204,
    name: "Anti-Theft Commuter Bag",
    category: "bags",
    brand: "Secur-IT",
    price: 5999,
    originalPrice: 8500,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400",
    fallback: "https://placehold.co/400x400/9c27b0/ffffff?text=Antitheft+Bag",
    badge: "safe",
    rating: 4.6,
    reviews: 1540,
    description: "Lightweight commuter bag with cut-resistant fabric and hidden zippers.",
    specs: { tech: "Cut-Resistant", security: "Hidden Zippers", tech_sleeve: "13\" Tablet", weight: "800g" },
    features: ["RFID Shielding", "Reflective safety", "Night-glow logo"],
    colors: ["#424242", "#78909c"],
    stock: 35
  },

  {
    id: 401,
    name: "Titan X Adjustable Dumbbells (Pair)",
    category: "fitness",
    brand: "TitanGym",
    price: 18499,
    originalPrice: 25000,
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=400",
    fallback: "https://placehold.co/400x400/212121/ffffff?text=Titan+Dumbbells",
    badge: "elite",
    rating: 4.9,
    reviews: 210,
    description: "Space-saving adjustable weights from 2.5kg to 24kg with a simple dial turn.",
    specs: { range: "2.5kg - 24kg", increments: "15 Settings", material: "Steel & Rubber", base: "Safety Trays Inc." },
    features: ["Quiet Selection", "Durable Moldings", "Non-slip Handle"],
    colors: ["#212121", "#f03e3e"],
    stock: 8
  },
  {
    id: 402,
    name: "Pro-Series Yoga Mat (8mm)",
    category: "fitness",
    brand: "EcoFlow",
    price: 3299,
    originalPrice: 4500,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400",
    fallback: "https://placehold.co/400x400/2c3e50/ffffff?text=Yoga+Mat",
    badge: "eco",
    rating: 4.8,
    reviews: 1540,
    description: "High-density natural rubber mat for superior grip and joint cushioning.",
    specs: { thickness: "8mm", material: "Natural Rubber", texture: "Non-slip Dual-side", size: "183 x 68 cm" },
    features: ["Odor Resistant", "Eco-friendly Dye", "Alignment Lines"],
    colors: ["#2d3436", "#00b894", "#6c5ce7"],
    stock: 50
  },
  {
    id: 403,
    name: "Hyper-Track Smart Watch",
    category: "fitness",
    brand: "Smartgo",
    price: 6499,
    originalPrice: 9999,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
    fallback: "https://placehold.co/400x400/1e272e/ffffff?text=Fitness+Watch",
    badge: "tech",
    rating: 4.7,
    reviews: 3200,
    description: "Real-time heart rate, SpO2, and GPS tracking with a stunning AMOLED display.",
    specs: { display: "1.47\" AMOLED", battery: "15 Days", water: "5ATM Resistant", modes: "100+ Sports" },
    features: ["Siri/Alexa Sync", "Sleep Score", "Quick Reply"],
    colors: ["#1e272e", "#ffa801"],
    stock: 120
  },

  {
    id: 3,
    name: "Zebronics Boom Pro Speaker",
    category: "audio",
    brand: "Zebronics",
    price: 2499,
    originalPrice: 4999,
    image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=400",
    badge: "low",
    rating: 4.3,
    reviews: 8700,
    description: "Compact Bluetooth speaker with massive bass and RGB lights.",
    specs: { battery: "10 Hours", warranty: "1 Year", light: "RGB Sync", weight: "400g" },
    features: ["FM Radio", "USB/SD Card", "Built-in Mic"],
    colors: ["#1a73e8", "#212121", "#eb4034"],
    stock: 8
  },
  {
    id: 5,
    name: "Aero Fit Smart Band 2",
    category: "wearables",
    price: 3499,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
    badge: "sale",
    rating: 4.5,
    reviews: 15000,
    description: "Massive AMOLED display, continuous heart rate monitoring, and 14-day battery life.",
    specs: { battery: "14 Days", warranty: "6 Months", screen: "1.62\" AMOLED", tracking: "120+ Sports Modes" },
    features: ["Pai Health", "Stress Monitoring", "Cloud Watchfaces"],
    colors: ["#212121", "#388e3c", "#f03e3e"],
    stock: 120
  },

  // ---- ELECTRONICS (MOBILES) ----
  {
    id: 6,
    name: "Minimalist Smartwatch S1 (Pearl)",
    category: "electronics",
    price: 26477,
    originalPrice: 33117,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
    badge: "-20%",
    rating: 4.7,
    reviews: 2103,
    description: "Elegance meets performance. Ceramic finish with a vibrant OLED face and 7-day battery.",
    specs: { battery: "7 Days", warranty: "1 Year", finish: "Ceramic Pearl", display: "Vibrant OLED" },
    features: ["Ceramic Body", "Magnetic Charging", "AI Voice Assistant"],
    colors: ["#fdfcf0", "#878787"],
    stock: 15
  },
  {
    id: 7,
    name: "Phone (2a) - 5G (8GB/128GB)",
    category: "electronics",
    price: 23999,
    originalPrice: 27999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    badge: "bestseller",
    rating: 4.9,
    reviews: 14500,
    description: "Stunning design, Dimensity 7200 Pro chip, and unique Glyph interface.",
    specs: { battery: "5000 mAh", warranty: "1 Year", processor: "Dimensity 7200 Pro", display: "120Hz AMOLED" },
    features: ["Glyph Interface", "Dual 50MP Camera", "Clean OS Experience"],
    colors: ["#ffffff", "#212121"],
    stock: 5
  },

  // ---- FASHION ----
  {
    id: 8,
    name: "Classic White Sneakers (Premium)",
    category: "fashion",
    price: 4999,
    originalPrice: 8999,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    badge: "hot",
    rating: 4.6,
    reviews: 210,
    description: "Handcrafted Italian leather sneakers with non-slip rubber soles and breathable lining.",
    specs: { material: "Italian Leather", warranty: "6 Months", sole: "Anti-slip Rubber", style: "Casual Premium" },
    features: ["Handcrafted", "Breathable Mesh", "Memory Foam Insole"],
    colors: ["#ffffff", "#e0e0e0"],
    stock: 30
  },
  {
    id: 9,
    name: "Vertex Tech Jacket (Black)",
    category: "fashion",
    price: 12900,
    originalPrice: 18000,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
    badge: "winter",
    rating: 4.8,
    reviews: 45,
    description: "Waterproof, breathable thermal jacket with 8 hidden pockets for all your devices.",
    specs: { material: "Gore-Tex Fabric", warranty: "1 Year", feature: "8 Hidden Pockets", weather: "Fully Waterproof" },
    features: ["Gore-Tex Tech", "Thermal Lining", "Windproof Shield"],
    colors: ["#212121", "#1565c0"],
    stock: 10
  },
  {
    id: 301,
    name: "Urban Knit Sweater (Sand)",
    category: "fashion",
    brand: "NordicKnit",
    price: 3299,
    originalPrice: 5500,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
    fallback: "https://placehold.co/400x400/d2b48c/ffffff?text=Knit+Sweater",
    badge: "trending",
    rating: 4.7,
    reviews: 890,
    description: "Premium merino wool blend sweater for comfort and style.",
    specs: { material: "Merino Wool Blend", warranty: "No Warranty", neck: "Crew Neck", fit: "Regular Fit" },
    features: ["Itch-free", "Temperature Regulating", "Machine Washable"],
    colors: ["#d2b48c", "#ffffff"],
    stock: 45
  },
  {
    id: 302,
    name: "Performance Mesh Joggers",
    category: "fashion",
    brand: "ActivePro",
    price: 2499,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400",
    fallback: "https://placehold.co/400x400/212121/ffffff?text=Joggers",
    badge: "active",
    rating: 4.6,
    reviews: 1200,
    description: "Lightweight, moisture-wicking joggers for training or casual wear.",
    specs: { material: "90% Polyester, 10% Spandex", warranty: "No Warranty", pockets: "Zip Pockets", waist: "Elastic" },
    features: ["Quick Dry", "4-Way Stretch", "Reflective Logos"],
    colors: ["#212121", "#424242"],
    stock: 60
  },
  {
    id: 303,
    name: "Silk Night Gown (Midnight)",
    category: "fashion",
    brand: "Silka",
    price: 8999,
    originalPrice: 12500,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400",
    fallback: "https://placehold.co/400x400/1a1a2e/ffffff?text=Silk+Gown",
    badge: "luxury",
    rating: 4.9,
    reviews: 210,
    description: "100% Mulberry Silk nightgown for the ultimate sleeping experience.",
    specs: { material: "100% Mulberry Silk", warranty: "No Warranty", length: "Full Length", care: "Hand Wash Only" },
    features: ["Hypoallergenic", "Skin Friendly", "Natural Lustre"],
    colors: ["#1a1a2e", "#4a148c"],
    stock: 15
  },

  // ---- ACCESSORIES ----
  {
    id: 10,
    name: "Voyager Pro Backpack (30L)",
    category: "accessories",
    price: 8299,
    originalPrice: 12000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    badge: "travel",
    rating: 4.9,
    reviews: 678,
    description: "Durable ballistic nylon, 16'' laptop sleeve, and anti-theft hidden compartments.",
    specs: { material: "Ballistic Nylon", warranty: "2 Years", capacity: "30 Liters", protection: "Anti-theft Zip" },
    features: ["USB Port", "Trolley Strap", "Water Bottle Pocket"],
    colors: ["#212121", "#333", "#878787"],
    stock: 40
  },
  {
    id: 11,
    name: "Classic Aviator - Gold Edition",
    category: "accessories",
    price: 15499,
    originalPrice: 19999,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    badge: "premium",
    rating: 4.7,
    reviews: 1200,
    description: "Polarized UV400 Sunglasses with 24K gold plated lightweight titanium frames. Perfect fashion eyewear.",
    specs: { lens: "Polarized UV400", warranty: "1 Year", frame: "24K Gold Plated Titanium", weight: "Ultra-Lightweight" },
    features: ["UV400 Protected", "Gold Plated", "Shatterproof Lens"],
    colors: ["#ffd700", "#c0c0c0"],
    stock: 25
  },

  // ---- TECH (LAPTOPS) ----
  {
    id: 12,
    name: "NeoBook Pro 15 (M3 Chip)",
    category: "tech",
    price: 129990,
    originalPrice: 149990,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    badge: "pro",
    rating: 5.0,
    reviews: 12,
    description: "Extreme performance Laptop. M3 Pro chip, 1TB SSD, 32GB Unified Memory, and Liquid XDR Display.",
    specs: { battery: "18-20 Hours", warranty: "1 Year International", chip: "M3 Pro Max", display: "120Hz Liquid XDR" },
    features: ["8K Video Support", "Studio Mic Array", "MagSafe Charging"],
    colors: ["#8e8e93", "#222"],
    stock: 3
  },
  {
    id: 13,
    name: "Elite Tab S9 Ultra",
    category: "tech",
    price: 89999,
    originalPrice: 105000,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    badge: "new",
    rating: 4.8,
    reviews: 890,
    description: "The ultimate Android tablet for productivity and creative work. 14.6-inch AMOLED display and S Pen included.",
    specs: { battery: "11,200 mAh", warranty: "1 Year", display: "14.6\" Dynamic AMOLED 2X", tools: "S Pen Included" },
    features: ["IP68 Rating", "S Pen Included", "DeX Mode Ready"],
    colors: ["#2c2c2e", "#e0e0e0"],
    stock: 18
  }
];

// STATE
let cart = JSON.parse(localStorage.getItem('smartgoCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('smartgoWishlist')) || [];
let currentCategory = 'all';
let currentUser = JSON.parse(localStorage.getItem('smartgoUser')) || null;
let loginMode = 'login'; // 'login' or 'register'
let compareList = JSON.parse(localStorage.getItem('smartgoCompare')) || [];
let recentlyViewed = JSON.parse(localStorage.getItem('smartgoRecent')) || [];
let isDarkMode = localStorage.getItem('smartgoDarkMode') === 'true';

if (isDarkMode) {
  document.body.classList.add('dark-mode');
}

// SELECTORS
const productGrid = document.getElementById('productGrid');
const dealsGrid = document.getElementById('dealsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const cartTotal = document.getElementById('cartTotal');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartCountText = document.getElementById('cartCountText');
const cartFooter = document.getElementById('cartFooter');
const cartEmpty = document.getElementById('cartEmpty');

// INIT
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderDeals();
  updateCartUI();
  initTimer();
  setupEventListeners();
  initSearchSuggestions();
  initHeroCarousel();
  initSideBanners();

  // Initialize Supabase Auth Listener
  if (_supabase) {
    _supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth event:", event, session);
      if (session) {
        currentUser = {
          id: session.user.id,
          email: session.user.email,
          name: session.user.user_metadata?.full_name || session.user.email.split('@')[0]
        };
        localStorage.setItem('smartgoUser', JSON.stringify(currentUser));
      } else {
        // Only clear if it was a real Supabase user
        if (currentUser && !String(currentUser.id).startsWith('otp-') && !String(currentUser.id).startsWith('demo-')) {
          currentUser = null;
          localStorage.removeItem('smartgoUser');
        }
      }
      updateUserUI();
    });
  }

  // Initial UI check
  updateUserUI();
  updateThemeIcon();
});

// FUNCTONS 
// HERO CAROUSEL LOGIC
const heroSlides = [
  {
    bg: "linear-gradient(135deg, #1565c0, #0d47a1)",
    tag: "BIG SAVING DAYS",
    title: "Nova Pro<br>Headphones",
    price: "From <strong>₹29,049</strong>",
    sub: "Active Noise Cancellation · 36hr Battery",
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&auto=format&fit=crop",
    productId: 1,
    bgClass: "bg-blue"
  },
  {
    bgClass: "bg-green",
    tag: "NEW LAUNCH",
    title: "Elite Tab<br>S9 Ultra",
    price: "From <strong>₹89,999</strong>",
    sub: "14.6-inch AMOLED · S Pen Included",
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&auto=format&fit=crop",
    productId: 13
  },
  {
    bg: "linear-gradient(135deg, #d84315, #bf360c)",
    tag: "FESTIVE OFFER",
    title: "NeoBook Pro 15<br>(M3 Chip)",
    price: "Only <strong>₹1,29,990</strong>",
    sub: "M3 Pro chip · Liquid XDR Display",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop",
    productId: 12,
    bgClass: "bg-orange"
  }
];

let heroCurrentIndex = 0;
let heroTimer;

function initHeroCarousel() {
  const container = document.getElementById('heroCarouselContainer');
  const dotsContainer = document.getElementById('heroDots');
  if (!container || !dotsContainer) return;

  dotsContainer.innerHTML = heroSlides.map((_, i) => `<div class="hero-dot" onclick="goToHeroSlide(${i})"></div>`).join('');

  document.getElementById('heroPrev').onclick = () => { changeHeroSlide(-1); resetHeroTimer(); };
  document.getElementById('heroNext').onclick = () => { changeHeroSlide(1); resetHeroTimer(); };

  container.onclick = (e) => {
    if (e.target.closest('.hero-nav') || e.target.closest('.hero-dot') || e.target.closest('.hero-cta')) return;
    openQuickView(heroSlides[heroCurrentIndex].productId);
  };

  renderHeroSlide();
  startHeroTimer();
}

function renderHeroSlide() {
  const slideEl = document.getElementById('heroCarouselSlide');
  const container = document.getElementById('heroCarouselContainer');
  const data = heroSlides[heroCurrentIndex];

  slideEl.style.opacity = 0;
  setTimeout(() => {
    // Reset background styles
    container.className = 'hero-main';
    if (data.bgClass) {
      container.classList.add(data.bgClass);
    } else {
      container.style.background = data.bg;
    }

    slideEl.innerHTML = `
      <div class="hero-text">
        <span class="promo-tag">${data.tag}</span>
        <h1 class="hero-h1">${data.title}</h1>
        <div class="hero-price">${data.price} <span>M.R.P: <del>₹${(parseInt(data.price.replace(/[^\d]/g, '')) * 1.25).toLocaleString()}</del></span></div>
        <p class="hero-sub">${data.sub}</p>
        <button class="hero-cta" onclick="openQuickView(${data.productId})">
          Explore Now
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
      <div class="hero-img-wrap">
        <img src="${data.img}" alt="${data.title.replace(/<[^>]*>?/gm, ' ')}" onerror="this.src='https://placehold.co/600x400/000000/ffffff?text=Product+Image'">
      </div>
    `;
    slideEl.style.opacity = 1;

    document.querySelectorAll('.hero-dot').forEach((d, i) => {
      d.classList.toggle('active', i === heroCurrentIndex);
    });
  }, 250);
}

window.goToHeroSlide = function (index) {
  heroCurrentIndex = index;
  renderHeroSlide();
  resetHeroTimer();
}

function changeHeroSlide(dir) {
  heroCurrentIndex = (heroCurrentIndex + dir + heroSlides.length) % heroSlides.length;
  renderHeroSlide();
}

function startHeroTimer() {
  heroTimer = setInterval(() => { changeHeroSlide(1); }, 4000);
}

function resetHeroTimer() {
  clearInterval(heroTimer);
  startHeroTimer();
}

// SIDE BANNERS LOGIC
window.sideSlides1 = [
  {
    bgClass: "bg-pink",
    tag: "HOT DEAL",
    title: "Smartwatch Sale",
    price: "From ₹35,607",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200",
    productId: 4
  },
  {
    bg: "linear-gradient(135deg,#4c1d95,#2e1065)",
    tag: "BESTSELLER",
    title: "Premium Audio",
    price: "From ₹13,279",
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200",
    productId: 2
  }
];

window.sideSlides2 = [
  {
    bgClass: "bg-orange",
    tag: "NEW LAUNCH",
    title: "Laptops & Tabs",
    price: "Up to 30% off",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200",
    productId: 12
  },
  {
    bg: "linear-gradient(135deg,#065f46,#064e3b)",
    tag: "FESTIVE SALE",
    title: "Classic Sneakers",
    price: "Only ₹4,999",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200",
    productId: 8
  }
];

window.side1Index = 0;
window.side2Index = 0;

function initSideBanners() {
  renderSideBanner('sideBanner1', sideSlides1[side1Index]);
  renderSideBanner('sideBanner2', sideSlides2[side2Index]);

  setInterval(() => {
    side1Index = (side1Index + 1) % sideSlides1.length;
    renderSideBanner('sideBanner1', sideSlides1[side1Index]);
  }, 4500);

  setInterval(() => {
    side2Index = (side2Index + 1) % sideSlides2.length;
    renderSideBanner('sideBanner2', sideSlides2[side2Index]);
  }, 5000);
}

function renderSideBanner(id, data) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.opacity = 0;

  setTimeout(() => {
    // Reset background styles
    el.className = 'hero-card slide-card';
    if (data.bgClass) {
      el.classList.add(data.bgClass);
    } else {
      el.style.background = data.bg;
    }

    el.innerHTML = `
      <div class="hero-card-content">
        <span class="promo-tag">${data.tag}</span>
        <h3>${data.title}</h3>
        <p>${data.price}</p>
      </div>
      <img src="${data.img}" alt="${data.title}" onerror="this.src='https://placehold.co/200x200/000000/ffffff?text=Slide'">
    `;
    el.setAttribute('onclick', `openQuickView(${data.productId})`);
    el.style.opacity = 1;
  }, 400);
}

function renderProducts(productsToRender = null) {
  const filtered = productsToRender || (currentCategory === 'all'
    ? products
    : products.filter(p => p.category === currentCategory));

  // Update subtitle count
  const subEl = document.querySelector('.prod-sub');
  if (subEl && !currentFilters.searchQuery) {
    // only update if filterCat hasn't already set it
    const meta = CAT_META[currentCategory] || { sub: '' };
    subEl.innerText = `${filtered.length} product${filtered.length !== 1 ? 's' : ''} — ${meta.sub || 'Showing all results'}`;
  }

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding: 80px 20px;">
        <div style="font-size:60px; margin-bottom:20px;">🔍</div>
        <h3 style="font-size:22px; font-weight:700; margin-bottom:10px; color:#212121;">No products found</h3>
        <p style="color:#878787; margin-bottom:25px;">We couldn't find any products in this category.<br>Try a different filter or browse all products.</p>
        <button onclick="filterCat('all')" style="background:var(--pk-blue); color:#fff; padding:12px 30px; border-radius:6px; font-size:15px; font-weight:700;">Browse All Products</button>
      </div>`;
    return;
  }

  productGrid.innerHTML = filtered.map(product => {
    const isWished = wishlist.includes(product.id);
    const offPct = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    return `
    <div class="product-card" style="animation: fadeInCard 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both; border: none; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); overflow: hidden; background: #fff; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 40px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.05)';">
      <div class="pc-img-wrap" onclick="openQuickView(${product.id})" style="position: relative; padding: 25px; background: linear-gradient(to bottom, #f8faff, #ffffff); cursor: pointer; display: flex; align-items: center; justify-content: center; height: 260px;">
        ${product.badge ? `<span style="position:absolute; top:15px; left:15px; background: ${product.badge === 'hot' ? 'linear-gradient(135deg, #f03e3e, #d32f2f)' : 'linear-gradient(135deg, #1a73e8, #2874f0)'}; color: #fff; font-size: 10px; font-weight: 900; padding: 6px 14px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 10px rgba(0,0,0,0.15); z-index: 5;">${product.badge}</span>` : ''}
        
        <div style="position:absolute; top:15px; right:15px; z-index:5; display:flex; flex-direction:column; gap:10px;">
          <button class="pc-wish" style="background: rgba(255,255,255,0.9); backdrop-filter: blur(5px); border: none; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: 0.3s;" onclick="event.stopPropagation(); toggleWishlist(${product.id})" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">${isWished ? '❤️' : '🤍'}</button>
          <button onclick="event.stopPropagation(); addToCompare(${product.id})" title="Compare" style="background: rgba(255,255,255,0.9); backdrop-filter: blur(5px); border: none; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">⚖️</button>
        </div>

        <img src="${product.image}" alt="${product.name}" style="max-width: 100%; max-height: 200px; object-fit: contain; filter: drop-shadow(0 15px 20px rgba(0,0,0,0.08)); transition: 0.4s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" onerror="this.src='${product.fallback || 'https://placehold.co/400x400?text=' + encodeURIComponent(product.name)}'">
      </div>
      
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="background: #e8f5e9; color: #2e7d32; font-size: 11px; font-weight: 800; padding: 4px 8px; border-radius: 6px;">${product.rating} ★</span>
          <span style="font-size: 12px; color: #888; font-weight: 600;">(${product.reviews.toLocaleString()})</span>
        </div>
        
        <h4 style="font-family: 'Outfit', sans-serif; font-size: 18px; font-weight: 800; color: #111; line-height: 1.3; cursor: pointer; height: 46px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;" onclick="openQuickView(${product.id})">${product.name}</h4>
        
        <div style="display: flex; align-items: baseline; gap: 10px; margin-top: 5px;">
          <span style="font-size: 22px; font-weight: 900; color: #1a73e8;">₹${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span style="font-size: 14px; color: #aaa; text-decoration: line-through; font-weight: 600;">₹${product.originalPrice.toLocaleString()}</span>` : ''}
          ${offPct > 0 ? `<span style="font-size: 12px; color: #f03e3e; font-weight: 800;">(${offPct}% OFF)</span>` : ''}
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 15px;">
          <button onclick="addToCart(${product.id})" style="background: #f4f6fb; color: #1a73e8; border: 2px solid transparent; padding: 12px 10px; border-radius: 10px; font-weight: 800; font-size: 13px; cursor: pointer; transition: 0.3s;" onmouseover="this.style.borderColor='#1a73e8'" onmouseout="this.style.borderColor='transparent'">🛒 ADD</button>
          <button onclick="buyNow(${product.id})" style="background: #1a1a2e; color: #fff; border: none; padding: 12px 10px; border-radius: 10px; font-weight: 800; font-size: 13px; cursor: pointer; box-shadow: 0 6px 15px rgba(26,26,46,0.3); transition: 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">⚡ BUY</button>
        </div>
      </div>
    </div>
  `}).join('');
}

function renderDeals() {
  const dealsGrid1 = document.getElementById('dealsGrid');
  const dealsGrid2 = document.getElementById('dealsGrid2');
  if (!dealsGrid1 || !dealsGrid2) return;

  const deals1 = products.slice(0, 8);
  const deals2 = products.slice(4, 12);

  const html1 = deals1.map(product => `
    <div class="deal-card" onclick="openQuickView(${product.id})" style="border-radius: 16px; background: #fff; padding: 20px; box-shadow: 0 8px 25px rgba(0,0,0,0.06); display: flex; flex-direction: column; align-items: center; border: 1px solid #f0f0f0; transition: 0.3s; cursor: pointer;" onmouseover="this.style.borderColor='#1a73e8'; this.style.transform='translateY(-5px)'" onmouseout="this.style.borderColor='#f0f0f0'; this.style.transform='translateY(0)'">
      <div style="width: 100%; display: flex; justify-content: center; position: relative;">
        <div style="position: absolute; width: 80px; height: 80px; background: rgba(26,115,232,0.1); border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%); filter: blur(15px); pointer-events: none;"></div>
        <img src="${product.image}" alt="${product.name}" style="height: 120px; width: auto; object-fit: contain; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1)); z-index: 2;" onerror="this.src='${product.fallback || 'https://via.placeholder.com/200'}'">
      </div>
      <h4 style="font-size: 14px; font-weight: 800; color: #222; margin: 20px 0 10px; text-align: center; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 38px;">${product.name.split(' ').slice(0, 4).join(' ')}</h4>
      <div style="background: linear-gradient(135deg, #1a1a2e, #1a73e8); color: #fff; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 800; letter-spacing: 0.5px; box-shadow: 0 4px 10px rgba(26,115,232,0.3);">⚡ Up to ${product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 20}% Off</div>
    </div>
  `).join('');

  const html2 = deals2.map(product => `
    <div class="deal-card" onclick="openQuickView(${product.id})" style="border-radius: 16px; background: #fff; padding: 20px; box-shadow: 0 8px 25px rgba(0,0,0,0.06); display: flex; flex-direction: column; align-items: center; border: 1px solid #f0f0f0; transition: 0.3s; cursor: pointer;" onmouseover="this.style.borderColor='#f03e3e'; this.style.transform='translateY(-5px)'" onmouseout="this.style.borderColor='#f0f0f0'; this.style.transform='translateY(0)'">
      <div style="width: 100%; display: flex; justify-content: center; position: relative;">
        <div style="position: absolute; width: 80px; height: 80px; background: rgba(240,62,62,0.1); border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%); filter: blur(15px); pointer-events: none;"></div>
        <img src="${product.image}" alt="${product.name}" style="height: 120px; width: auto; object-fit: contain; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1)); z-index: 2;" onerror="this.src='${product.fallback || 'https://via.placeholder.com/200'}'">
      </div>
      <h4 style="font-size: 14px; font-weight: 800; color: #222; margin: 20px 0 10px; text-align: center; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 38px;">${product.name.split(' ').slice(0, 4).join(' ')}</h4>
      <div style="background: linear-gradient(135deg, #f03e3e, #ff9100); color: #fff; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 800; letter-spacing: 0.5px; box-shadow: 0 4px 10px rgba(240,62,62,0.3);">🔥 Up to ${product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 15}% Off</div>
    </div>
  `).join('');

  // Clone multiple times to ensure the marquee loop is seamless
  dealsGrid1.innerHTML = html1 + html1;
  dealsGrid2.innerHTML = html2 + html2;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const exists = cart.find(item => item.id === id);

  if (exists) {
    exists.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart!`);
  openCart();
}

function buyNow(id) {
  addToCart(id);
  // Simulating immediate checkout
  setTimeout(() => {
    showToast("Redirecting to secure checkout...");
  }, 500);
}

function updateCartUI() {
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  cartBadge.innerText = count;
  cartBadge.style.display = count > 0 ? 'block' : 'none';
  cartCountText.innerText = `(${count} items)`;

  if (cart.length === 0) {
    cartEmpty.style.display = 'block';
    cartFooter.style.display = 'none';
    cartItems.innerHTML = `
      <div style="padding: 60px 20px; text-align: center;">
        <div style="font-size: 80px; margin-bottom: 20px; opacity: 0.15; animation: bounce 2s infinite">🛒</div>
        <h3 style="color: #212121; margin-bottom: 10px; font-weight: 800;">Your cart is lonely!</h3>
        <p style="color: #878787; font-size: 14px; margin-bottom: 30px;">Let's find some amazing products for you.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 30px;">
          <div class="ct" onclick="handleCartCatClick('audio')" style="width: auto; background: #fff; padding: 15px; border: 1px solid #eee; border-radius: 12px; transition: 0.3s; cursor: pointer;">
            <div class="ct-ico" style="width: 50px; height: 50px; font-size: 24px; background: #fdf2f2; margin: 0 auto; border-radius: 50%; display: flex; align-items: center; justify-content: center;">🎧</div>
            <span style="font-size: 13px; font-weight: 700; margin-top: 8px; display: block;">Audio</span>
          </div>
          <div class="ct" onclick="handleCartCatClick('tech')" style="width: auto; background: #fff; padding: 15px; border: 1px solid #eee; border-radius: 12px; transition: 0.3s; cursor: pointer;">
            <div class="ct-ico" style="width: 50px; height: 50px; font-size: 24px; background: #f0f5ff; margin: 0 auto; border-radius: 50%; display: flex; align-items: center; justify-content: center;">💻</div>
            <span style="font-size: 13px; font-weight: 700; margin-top: 8px; display: block;">Tech</span>
          </div>
          <div class="ct" onclick="handleCartCatClick('fashion')" style="width: auto; background: #fff; padding: 15px; border: 1px solid #eee; border-radius: 12px; transition: 0.3s; cursor: pointer;">
            <div class="ct-ico" style="width: 50px; height: 50px; font-size: 24px; background: #fff9ed; margin: 0 auto; border-radius: 50%; display: flex; align-items: center; justify-content: center;">👕</div>
            <span style="font-size: 13px; font-weight: 700; margin-top: 8px; display: block;">Fashion</span>
          </div>
          <div class="ct" onclick="handleCartCatClick('fitness')" style="width: auto; background: #fff; padding: 15px; border: 1px solid #eee; border-radius: 12px; transition: 0.3s; cursor: pointer;">
            <div class="ct-ico" style="width: 50px; height: 50px; font-size: 24px; background: #f2fff2; margin: 0 auto; border-radius: 50%; display: flex; align-items: center; justify-content: center;">💪</div>
            <span style="font-size: 13px; font-weight: 700; margin-top: 8px; display: block;">Fitness</span>
          </div>
        </div>

        <button onclick="closeCart(); openOrders(event)" style="background: #2874f0; color: #fff; padding: 12px 20px; border-radius: 8px; font-weight: 700; cursor: pointer; border: none; width: 100%; box-shadow: 0 4px 12px rgba(40,116,240,0.2);">VIEW PURCHASE HISTORY</button>
      </div>
    `;
  } else {
    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';

    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" class="ci-img" onerror="this.src='${item.fallback || 'https://via.placeholder.com/200'}'">
        <div class="ci-info">
          <h5>${item.name}</h5>
          <div class="ci-price">₹${item.price.toLocaleString()}</div>
          <div class="ci-qty">
            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button onclick="removeFromCart(${item.id})">✕</button>
      </div>
    `).join('');

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    cartSubtotal.innerText = `₹${subtotal.toLocaleString()}`;
    cartTotal.innerText = `₹${subtotal.toLocaleString()}`;
  }
}

function updateQty(id, change) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += change;
    if (item.qty <= 0) {
      removeFromCart(id);
    } else {
      saveCart();
      updateCartUI();
    }
  }
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('smartgoCart', JSON.stringify(cart));
}

// =====================================================
// PLACE ORDER → SAVES TO SUPABASE
// =====================================================
window.placeOrder = async function () {
  if (!currentUser) {
    showToast('Please login to place an order! 🔐');
    openLogin();
    return;
  }
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }

  const btn = document.getElementById('checkoutBtn');
  if (btn) { btn.disabled = true; btn.innerText = 'Checking Sync...'; }

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = subtotal >= 499 ? 0 : 40;
  const totalAmount = subtotal + shipping;

  try {
    if (!_supabase) throw new Error('Supabase not connected');

    // 1. Sync User using Upsert (Fixes "Duplicate User" error)
    await _supabase.from('customers').upsert({
      id: currentUser.id,
      full_name: currentUser.name || 'Valued Customer',
      contact_info: currentUser.email
    }, { onConflict: 'contact_info' });

    // 2. Insert Order
    const { data: order, error: orderErr } = await _supabase.from('orders').insert([{
      user_id: currentUser.id,
      user_email: currentUser.email,
      user_name: currentUser.name,
      product_names: cart.map(i => `${i.name} (x${i.qty})`).join(', '),
      total_amount: totalAmount,
      shipping_amount: shipping,
      status: 'confirmed',
      payment_method: 'COD'
    }]).select().single();

    if (orderErr) {
      console.error('Database Error:', orderErr);
      alert(`❌ DATABASE ERROR!\n\nReason: ${orderErr.message}\nCode: ${orderErr.code}\n\nMake sure your Supabase tables have the right columns.`);
      throw orderErr;
    }

    // 3. Insert Items (Only sending columns that definitely exist)
    const items = cart.map(i => ({
      order_id: order.id,
      product_name: i.name,
      quantity: i.qty,
      unit_price: i.price,
      total_price: i.price * i.qty
    }));

    const { error: itemsErr } = await _supabase.from('order_items').insert(items);
    if (itemsErr) {
      console.error('Items Error:', itemsErr);
      throw itemsErr;
    }

    // SUCCESS!
    cart = [];
    saveCart();
    updateCartUI();
    closeCart();
    showToast(`🎉 Order placed! ID: ${order.id.slice(0, 8).toUpperCase()}`);
    setTimeout(() => {
      alert(`✅ Order Placed Successfully!\n\nOrder ID: ${order.id.slice(0, 8).toUpperCase()}\nTotal: ₹${totalAmount.toLocaleString()}\n\nThank you for shopping with Smart Explore! 🛍️`);
    }, 400);

  } catch (err) {
    console.error('placeOrder failed:', err);
    showToast('❌ Failed: ' + (err.message || 'Error occurred'));
  } finally {
    if (btn) { btn.disabled = false; btn.innerText = 'PLACE ORDER →'; }
  }
};

// =====================================================
// VIEW PURCHASE HISTORY
// =====================================================
window.openOrders = async function (e) {
  if (e) e.preventDefault();
  if (!currentUser) {
    showToast('Please login to view your orders! 🔐');
    openLogin();
    return;
  }

  let ordersHTML = '';

  try {
    if (_supabase) {
      // Filter by email (works for OTP users who don't have real UUID)
      const { data: orders, error } = await _supabase
        .from('orders')
        .select('*, order_items(*)')
        .eq('user_email', currentUser.email)
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (!orders || orders.length === 0) {
        ordersHTML = `<div style="text-align:center; padding:40px; color:#888;">
          <div style="font-size:50px; margin-bottom:15px;">📦</div>
          <h3 style="font-weight:800; margin-bottom:8px;">No Orders Yet</h3>
          <p>Start shopping to see your orders here!</p>
        </div>`;
      } else {
        ordersHTML = orders.map(order => `
          <div style="border:1px solid #e0eaf8; border-radius:14px; padding:20px; margin-bottom:16px; background:#fafcff;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <div>
                <div style="font-size:12px; color:#888; font-weight:600;">Order ID</div>
                <div style="font-size:14px; font-weight:800; color:#1a1a2e;">#${order.id.slice(0, 8).toUpperCase()}</div>
              </div>
              <div>
                <span style="background:${order.status === 'delivered' ? '#e6f4ea' : order.status === 'confirmed' ? '#e8f0fe' : '#fff3e0'}; color:${order.status === 'delivered' ? '#1e8e3e' : order.status === 'confirmed' ? '#1a73e8' : '#e65100'}; padding:5px 14px; border-radius:20px; font-size:12px; font-weight:800; text-transform:uppercase;">
                  ${order.status}
                </span>
              </div>
            </div>
            <div style="font-size:12px; color:#888; margin-bottom:8px;">📅 ${new Date(order.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
            <div style="border-top:1px solid #eee; padding-top:12px; margin-top:8px;">
              ${(order.order_items || []).map(item => `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                  <span style="font-size:13px; color:#333; font-weight:600;">${item.product_name}</span>
                  <span style="font-size:13px; font-weight:800; color:#1a73e8;">₹${Number(item.unit_price).toLocaleString()} × ${item.quantity}</span>
                </div>
              `).join('')}
            </div>
            <div style="border-top:1px solid #eee; padding-top:12px; margin-top:8px; display:flex; justify-content:space-between;">
              <span style="font-weight:700; color:#444;">Total Paid</span>
              <span style="font-weight:900; font-size:16px; color:#1a1a2e;">₹${Number(order.total_amount).toLocaleString()}</span>
            </div>
          </div>
        `).join('');
      }
    } else {
      // Fallback: localStorage
      const localOrders = JSON.parse(localStorage.getItem('smartgoOrders') || '[]');
      if (localOrders.length === 0) {
        ordersHTML = `<div style="text-align:center; padding:40px; color:#888;"><div style="font-size:50px;">📦</div><h3>No Orders Yet</h3></div>`;
      } else {
        ordersHTML = localOrders.map(order => `
          <div style="border:1px solid #e0eaf8; border-radius:14px; padding:20px; margin-bottom:16px; background:#fafcff;">
            <div style="font-size:14px; font-weight:800; color:#1a1a2e; margin-bottom:8px;">📦 ${order.id}</div>
            <div style="font-size:12px; color:#888; margin-bottom:8px;">📅 ${new Date(order.created_at).toLocaleDateString('en-IN')}</div>
            <div style="font-weight:900; color:#1a73e8;">Total: ₹${Number(order.total_amount).toLocaleString()}</div>
          </div>
        `).join('');
      }
    }
  } catch (err) {
    ordersHTML = `<div style="color:red; padding:20px;">Error loading orders: ${err.message}</div>`;
  }

  // Show orders in a modal overlay
  const overlay = document.createElement('div');
  overlay.id = 'ordersOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(5px);';
  overlay.innerHTML = `
    <div style="background:#fff;border-radius:20px;width:100%;max-width:560px;max-height:80vh;overflow-y:auto;box-shadow:0 40px 80px rgba(0,0,0,0.3);">
      <div style="padding:20px 24px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1;border-radius:20px 20px 0 0;">
        <h2 style="font-weight:900;font-size:18px;color:#1a1a2e;">📦 My Orders</h2>
        <button onclick="document.getElementById('ordersOverlay').remove()" style="background:#f5f5f5;border:none;width:36px;height:36px;border-radius:50%;font-size:18px;cursor:pointer;font-weight:700;">✕</button>
      </div>
      <div style="padding:20px 24px;">
        ${ordersHTML}
      </div>
    </div>
  `;
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
  document.body.appendChild(overlay);
};


function openCart() {
  cartSidebar.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// QUICK VIEW
function openQuickView(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalName').innerText = product.name;
  document.getElementById('modalCategory').innerText = product.category;
  document.getElementById('modalDescription').innerText = product.description;

  // Reset Color Projection
  const overlayReset = document.getElementById('modalImageOverlay');
  if (overlayReset) {
    overlayReset.style.backgroundColor = 'transparent';
    overlayReset.style.opacity = '0';
  }
  const imgReset = document.getElementById('modalImage');
  if (imgReset) imgReset.style.filter = 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))';

  // Render Product Specs
  const specsGrid = document.getElementById('modalSpecsGrid');
  if (specsGrid) {
    if (product.specs) {
      specsGrid.innerHTML = Object.entries(product.specs).map(([key, val]) => `
        <div style="background: rgba(40,116,240,0.05); border: 1px solid rgba(40,116,240,0.1); border-radius: 12px; padding: 12px 15px; display: flex; flex-direction: column; gap: 4px;">
          <span style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: #878787; letter-spacing: 0.5px;">${key}</span>
          <span style="font-size: 13px; font-weight: 700; color: #1a1a2e;">${val}</span>
        </div>
      `).join('');
    } else {
      specsGrid.innerHTML = '';
    }
  }

  // Render Color Swatches
  const colorSwatches = document.getElementById('modalColors');
  if (colorSwatches) {
    if (product.colors && product.colors.length > 0) {
      colorSwatches.innerHTML = product.colors.map((c, i) => `
        <div class="color-swatch ${i === 0 ? 'active' : ''}" style="width:28px; height:28px; background:${c}; border-radius:50%; border:2px solid ${i === 0 ? '#1a73e8' : '#eee'}; cursor:pointer; box-shadow:0 2px 5px rgba(0,0,0,0.1); transition:0.3s; position:relative;" onclick="selectColor(this)" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
           ${i === 0 ? '<span style="position:absolute; inset:-4px; border:2px solid #1a73e8; border-radius:50%; pointer-events:none;"></span>' : ''}
        </div>
      `).join('');
    } else {
      colorSwatches.innerHTML = '<span style="font-size:12px;color:#878787;">Standard Edition</span>';
    }
  }

  // Render Key Features
  const featuresBox = document.getElementById('modalFeatures');
  if (featuresBox) {
    if (product.features) {
      featuresBox.innerHTML = product.features.map(f => `
        <div style="display:flex; align-items:center; gap:8px; background:#fff; border:1px solid #eef2f8; padding:8px 14px; border-radius:12px; font-size:13px; font-weight:600; color:#444; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
          <span style="color:#1a73e8; font-size:14px;">⚡</span> ${f}
        </div>
      `).join('');
    } else {
      featuresBox.innerHTML = '';
    }
  }

  // Render Image Secondary Details (Trust & Stats)
  const imageDetails = document.getElementById('modalImageDetails');
  if (imageDetails) {
    const momentum = Math.floor(Math.random() * (2000 - 500) + 500); // Dynamic feel
    let categoryBabel = "";
    if (product.category === 'audio') categoryBabel = "🎧 Studio Grade Acoustic Seal";
    else if (product.category === 'tech') categoryBabel = "🛡️ Next-Gen Tech Architecture";
    else if (product.category === 'fashion') categoryBabel = "✨ Premium Finish Guaranteed";
    else categoryBabel = "⭐ High Performance Collection";

    imageDetails.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:8px;">
        <div style="font-size: 13px; font-weight: 800; color: #1a73e8; display:flex; align-items:center; justify-content:center; gap:6px;">
          <span style="font-size:16px;">📈</span> Trending: ${momentum}+ Orders this month
        </div>
        <div style="font-size: 11px; font-weight: 700; color: #878787; background: #f8faff; padding: 6px 12px; border-radius: 8px; display:inline-block; margin: 0 auto; border: 1px solid #eef3fc;">
          ${categoryBabel}
        </div>
      </div>
    `;
  }

  // Stock Status
  const stockEl = document.getElementById('modalStockStatus');
  if (stockEl) {
    const stockCount = product.stock || 0;
    if (stockCount < 10) {
      stockEl.innerHTML = `<span style="background:#fff2f2; color:#d93025; padding:4px 10px; border-radius:6px; font-size:11px; font-weight:800; border:1px solid #ffd4d4;">🔥 ONLY ${stockCount} LEFT IN STOCK!</span>`;
    } else {
      stockEl.innerHTML = `<span style="background:#e6f4ea; color:#1e8e3e; padding:4px 10px; border-radius:6px; font-size:11px; font-weight:800; border:1px solid #ceead6;">✅ IN STOCK · NEXT DAY DELIVERY</span>`;
    }
  }

  document.getElementById('modalPrice').innerText = `₹${product.price.toLocaleString()}`;
  document.getElementById('modalRating').innerHTML = `<span style="background: #e8f5e9; color: #2e7d32; padding: 3px 8px; border-radius: 6px;">${product.rating} ★</span> <span>(${product.reviews.toLocaleString()} reviews)</span>`;

  // Connect extra fields
  const bagdeEl = document.getElementById('modalBadge');
  if (bagdeEl) {
    if (product.badge) {
      bagdeEl.style.display = 'block';
      bagdeEl.innerText = product.badge;
      bagdeEl.style.background = product.badge === 'hot' ? 'linear-gradient(135deg, #f03e3e, #d32f2f)' : 'linear-gradient(135deg, #1a73e8, #2874f0)';
    } else {
      bagdeEl.style.display = 'none';
    }
  }

  const origPriceEl = document.getElementById('modalOriginalPrice');
  const discountEl = document.getElementById('modalDiscount');
  const saveEl = document.getElementById('modalSavings');

  if (product.originalPrice && product.originalPrice > product.price) {
    const offPct = Math.round((1 - product.price / product.originalPrice) * 100);
    const saved = product.originalPrice - product.price;
    if (origPriceEl) {
      origPriceEl.innerText = `₹${product.originalPrice.toLocaleString()}`;
      origPriceEl.style.display = 'block';
    }
    if (discountEl) {
      discountEl.innerText = `${offPct}% OFF`;
      discountEl.style.display = 'block';
    }
    if (saveEl) {
      saveEl.innerHTML = `🔥 You save <strong>₹${saved.toLocaleString()}</strong> on this order!`;
      saveEl.style.display = 'block';
    }
  } else {
    if (origPriceEl) origPriceEl.style.display = 'none';
    if (discountEl) discountEl.style.display = 'none';
    if (saveEl) saveEl.style.display = 'none';
  }

  const addBtn = document.getElementById('modalAddBtn');
  const buyBtn = document.getElementById('modalBuyBtn');
  const wishBtn = document.getElementById('modalWishBtn');

  addBtn.onclick = () => { addToCart(id); closeModal(); };
  buyBtn.onclick = () => { buyNow(id); closeModal(); };

  if (wishBtn) {
    const isWished = wishlist.includes(id);
    wishBtn.innerHTML = isWished ? '❤️ Remove from Wishlist' : '🤍 Add to Wishlist';
    wishBtn.onclick = () => {
      if (typeof toggleWishlist === 'function') {
        toggleWishlist(id);
        const nowWished = wishlist.includes(id);
        wishBtn.innerHTML = nowWished ? '❤️ Remove from Wishlist' : '🤍 Add to Wishlist';
      }
    };
  }

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function selectColor(el) {
  // Remove active state from others
  const swatches = el.parentElement.querySelectorAll('.color-swatch');
  swatches.forEach(s => {
    s.classList.remove('active');
    s.style.borderColor = '#eee';
    const ring = s.querySelector('span');
    if (ring) ring.remove();
  });

  // Set active to this one
  el.classList.add('active');
  el.style.borderColor = '#1a73e8';

  // Add the highlight ring
  const newRing = document.createElement('span');
  newRing.style.position = 'absolute';
  newRing.style.inset = '-4px';
  newRing.style.border = '2px solid #1a73e8';
  newRing.style.borderRadius = '50%';
  newRing.style.pointerEvents = 'none';
  el.appendChild(newRing);

  // Apply Color to Image
  const chosenColor = el.style.backgroundColor;
  const overlay = document.getElementById('modalImageOverlay');
  const img = document.getElementById('modalImage');
  const container = document.getElementById('modalImgContainer');

  if (overlay) {
    // Use color blend for realistic tinting
    overlay.style.backgroundColor = chosenColor;
    overlay.style.opacity = '0.6';
  }
  if (img) {
    // Add a subtle glow of the chosen color
    img.style.filter = `drop-shadow(0 20px 30px rgba(0,0,0,0.1)) drop-shadow(0 0 15px ${chosenColor})`;
  }
  if (container) {
    container.style.transform = 'scale(1.02)';
    setTimeout(() => container.style.transform = 'scale(1)', 300);
  }

  showToast(`Viewing in ${chosenColor.toUpperCase()} ✨`);
}

// FILTER STATE
window.currentFilters = {
  searchQuery: '',
  category: 'all',
  minPrice: 0,
  maxPrice: 9999999,
  brands: [],
  ratings: [],
  sort: 'relevance'
};

// CATEGORY LABELS + EMOJIS
const CAT_META = {
  all: { label: 'Best Sellers', emoji: '🏠', sub: 'Handpicked by our experts' },
  electronics: { label: 'Mobiles', emoji: '📱', sub: 'Top smartphones & gadgets' },
  tech: { label: 'Laptops & Tabs', emoji: '💻', sub: 'Power-up your productivity' },
  audio: { label: 'Audio', emoji: '🎧', sub: 'Headphones, speakers & more' },
  wearables: { label: 'Fitness', emoji: '⌚', sub: 'Smartwatches & fitness bands' },
  fashion: { label: 'Fashion', emoji: '👗', sub: 'Trending styles for you' },
  accessories: { label: 'Bags & Accessories', emoji: '🎒', sub: 'Backpacks, sunglasses & more' },
  photography: { label: 'Camera', emoji: '📷', sub: 'Capture every moment perfectly' },
};

// MASTER FILTER FUNCTION — single source of truth
window.handleCartCatClick = function (category) {
  closeCart();
  if (!currentUser) {
    showToast("Please login to browse tailored collections ✨");
    openLogin();
  } else {
    filterCat(category);
  }
};

window.filterCat = function (category) {
  // 1. Update global state
  currentCategory = category;
  currentFilters.category = category;
  currentFilters.searchQuery = '';
  window.isDealsView = false;

  // 2. Intelligently toggle UI Mode
  // If 'all', show Home Page layout. If specific category, show Search Results layout (with Sidebar)
  if (category === 'all') {
    document.body.classList.remove('search-active', 'deals-active');

    // PERFECT RESET: Show the 'Elite Tab S9 Ultra' (Second Slide) on logo click
    heroCurrentIndex = 1;
    if (typeof renderHeroSlide === 'function') {
      renderHeroSlide();
      if (typeof resetHeroTimer === 'function') resetHeroTimer();
    }

    // SYNC ROW SCROLL: Ensure the category row scrolls back to the start on mobile
    const catsRow = document.getElementById('quickCatsRow');
    if (catsRow) catsRow.scrollTo({ left: 0, behavior: 'smooth' });

    // FORCED TOP RESET: Scroll to absolute zero of the website immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.documentElement.scrollTop = 0; // Backup for older browsers
    document.body.scrollTop = 0; // Backup for mobile viewports

    // Sync UI elements for 'all'
    syncCategoryUI('all');
    applyFilters();
    return;
  } else {
    document.body.classList.add('search-active');
    document.body.classList.remove('deals-active');
  }

  // 3. Clear search input
  const si = document.getElementById('searchInput');
  if (si) si.value = '';
  const sugBox = document.getElementById('searchSuggestions');
  if (sugBox) sugBox.classList.remove('active');

  // 4. Sync ALL category UI elements (Glowing active ring + Sidebar bold)
  document.querySelectorAll('.qcat').forEach(el =>
    el.classList.toggle('active', el.dataset.cat === category));
  document.querySelectorAll('.f-item').forEach(el =>
    el.classList.toggle('active', el.dataset.cat === category));
  document.querySelectorAll('.fpill').forEach(el =>
    el.classList.toggle('active', el.dataset.category === category));

  // 5. Update section title & subtitle
  const meta = CAT_META[category] || { label: category, emoji: '🛍️', sub: '' };
  const titleEl = document.getElementById('productsTitle');
  if (titleEl) titleEl.innerHTML = `${meta.emoji} ${meta.label}`;
  const subEl = document.querySelector('.prod-sub');
  if (subEl) subEl.innerText = meta.sub;

  // 6. Run filters & render products
  applyFilters();

  // 7. Smooth scroll to results area for immediate focus
  const prodSection = document.getElementById('products');
  if (prodSection) {
    setTimeout(() => {
      // Perfected scroll offset: Header height + breathing room for full visibility
      const headerH = document.getElementById('header')?.offsetHeight || 80;
      const cushion = 25; // Extra space to show the section perfectly
      const topOffset = prodSection.getBoundingClientRect().top + window.scrollY - headerH - cushion;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }, 220);
  }
};

window.viewAllDeals = function (e) {
  if (e) e.preventDefault();

  // Create unique "Deals" specific section view
  document.body.classList.add('deals-active');
  document.body.classList.remove('search-active');

  // Set filters to all, but flag deals mode
  currentCategory = 'all';
  currentFilters.category = 'all';
  currentFilters.searchQuery = '';
  window.isDealsView = true;

  document.querySelectorAll('.fpill, .cat-item, .f-item').forEach(el => el.classList.remove('active'));

  document.getElementById('productsTitle').innerHTML = '🔥 Flash Sale: All Deals';
  const sub = document.querySelector('.prod-sub');
  if (sub) sub.innerText = 'Grab these exclusive discounts before time runs out!';

  applyFilters();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ADVANCED FILTERS
window.applyFilters = function () {
  // Update state from DOM
  const minDropdown = document.getElementById('minPrice');
  const maxDropdown = document.getElementById('maxPrice');
  if (minDropdown) currentFilters.minPrice = parseInt(minDropdown.value);
  if (maxDropdown) currentFilters.maxPrice = parseInt(maxDropdown.value);

  const brandBoxes = document.querySelectorAll('.b-filter:checked');
  currentFilters.brands = Array.from(brandBoxes).map(b => b.value);

  const ratingBoxes = document.querySelectorAll('.r-filter:checked');
  currentFilters.ratings = Array.from(ratingBoxes).map(r => parseInt(r.value));

  // 1. Start with entirely filtered list
  let results = products.filter(p => {
    // Category match
    if (currentFilters.category !== 'all' && p.category !== currentFilters.category) return false;

    // Search match
    if (currentFilters.searchQuery) {
      const q = currentFilters.searchQuery;
      if (!getSearchMetadata(p).includes(q)) {
        return false;
      }
    }

    // Price match
    if (p.price < currentFilters.minPrice || p.price > currentFilters.maxPrice) return false;

    // Brand match
    if (currentFilters.brands.length > 0) {
      if (!p.brand || !currentFilters.brands.some(b => b.toLowerCase() === p.brand.toLowerCase())) return false;
    }

    // Rating match
    if (currentFilters.ratings.length > 0) {
      const minRating = Math.min(...currentFilters.ratings);
      if (p.rating < minRating) return false;
    }

    // Deals View match (Only show products with originalPrice = a deal)
    if (window.isDealsView && !p.originalPrice) {
      return false;
    }

    return true;
  });

  // 2. Sort results
  if (currentFilters.sort === 'asc') {
    results.sort((a, b) => a.price - b.price);
  } else if (currentFilters.sort === 'desc') {
    results.sort((a, b) => b.price - a.price);
  } else if (currentFilters.sort === 'pop') {
    results.sort((a, b) => b.reviews - a.reviews);
  } // 'relevance' maintains original array order which usually defaults to ID

  renderProducts(results);
}

function getSearchMetadata(p) {
  let meta = p.name + " " + p.category + " " + p.description + " " + (p.brand || "");
  if (p.category === 'tech') meta += " laptop computer notebook pc macbook";
  if (p.category === 'electronics') meta += " smartphone phone mobile gadget";
  if (p.category === 'audio') meta += " music sound headphone bluetooth speaker";
  return meta.toLowerCase();
}

window.clearFilters = function () {
  document.getElementById('minPrice').value = "0";
  document.getElementById('maxPrice').value = "9999999";
  document.querySelectorAll('.b-filter, .r-filter').forEach(cb => cb.checked = false);

  // Re-apply without changing category or search
  applyFilters();
}

window.sortProds = function (sortType, element) {
  document.querySelectorAll('.sort-opt').forEach(el => el.classList.remove('active'));
  if (element) element.classList.add('active');

  currentFilters.sort = sortType;
  applyFilters();
}

// TIMER
function initTimer() {
  let h = 8, m = 45, s = 0;
  setInterval(() => {
    s--;
    if (s < 0) { s = 59; m--; }
    if (m < 0) { m = 59; h--; }
    if (h < 0) { h = 23; } // Reset

    document.getElementById('tH').innerText = String(h).padStart(2, '0');
    document.getElementById('tM').innerText = String(m).padStart(2, '0');
    document.getElementById('tS').innerText = String(s).padStart(2, '0');
  }, 1000);
}

// TOAST
function showToast(msg) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// MISC
function setupEventListeners() {
  const safeOnClick = (id, fn) => {
    const el = document.getElementById(id);
    if (el) el.onclick = fn;
  };

  const safeOnSubmit = (id, fn) => {
    const el = document.getElementById(id);
    if (el) el.onsubmit = fn;
  };

  const safeOnKeyUp = (id, fn) => {
    const el = document.getElementById(id);
    if (el) el.onkeyup = fn;
  };

  // Cart toggle
  safeOnClick('cartBtn', openCart);
  safeOnClick('cartCloseBtn', closeCart);
  if (cartOverlay) cartOverlay.onclick = closeCart;

  // Logo / Home reset
  document.querySelectorAll('.logo-wrap').forEach(logo => {
    logo.onclick = (e) => {
      e.preventDefault();
      document.body.classList.remove('search-active');
      document.body.classList.remove('deals-active');
      window.isDealsView = false;
      filterCat('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  });

  // Search
  safeOnClick('searchBtn', handleSearch);
  safeOnKeyUp('searchInput', (e) => { if (e.key === 'Enter') handleSearch(); });

  // Category Pills
  const catFilters = document.getElementById('categoryFilters');
  if (catFilters) {
    catFilters.onclick = (e) => {
      if (e.target.classList.contains('fpill')) {
        filterCat(e.target.dataset.category);
      }
    };
  }

  // Modal close
  safeOnClick('modalClose', closeModal);

  // Login
  const logBtn = document.getElementById('loginBtn');
  if (logBtn) {
    console.log("Binding click listener to loginBtn");
    logBtn.addEventListener('click', (e) => {
      console.log("loginBtn clicked!");
      e.preventDefault();
      e.stopPropagation();
      openLogin();
    });
  }

  const logCls = document.getElementById('loginClose');
  if (logCls) {
    logCls.addEventListener('click', (e) => {
      e.preventDefault();
      closeLogin();
    });
  }

  const loginOv = document.getElementById('loginOverlay');
  if (loginOv) {
    loginOv.addEventListener('click', (e) => {
      if (e.target === loginOv) closeLogin();
    });
  }

  safeOnSubmit('loginForm', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('loginSubmitBtn');
    const originalBtnText = submitBtn.innerText;
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPass').value;
    const name = document.getElementById('loginName').value;

    if (!_supabase) {
      showToast("Auth Service unavailable. Try again later.");
      return;
    }

    try {
      submitBtn.innerText = "Processing...";
      submitBtn.disabled = true;

      if (loginMode === 'register') {
        if (!name) { showToast("Please enter your name."); submitBtn.disabled = false; submitBtn.innerText = originalBtnText; return; }
        const { data, error } = await _supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: name }
          }
        });
        if (error) throw error;

        // Save to customers table
        const { error: profileError } = await _supabase
          .from('customers')
          .upsert([{ full_name: name, contact_info: email }], { onConflict: 'contact_info' });

        if (profileError) console.error("Profile sync error:", profileError);

        showToast("Registration successful! check your email.");
      } else {
        // Intercept Phone Numbers
        const isPhone = /^[0-9]{10}$/.test(email.replace(/\s+/g, ''));
        if (isPhone) {
          showToast("OTP required for Mobile number. Click 'Request OTP' below.");
          submitBtn.disabled = false;
          submitBtn.innerText = originalBtnText;
          return;
        }

        const { data, error } = await _supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) throw error;

        // Fetch User Name from customers table
        const { data: profile } = await _supabase
          .from('customers')
          .select('full_name')
          .eq('contact_info', email)
          .single();

        currentUser = {
          id: data.user.id,
          email: data.user.email,
          name: profile?.full_name || data.user.user_metadata?.full_name || data.user.email.split('@')[0]
        };
        localStorage.setItem('smartgoUser', JSON.stringify(currentUser));
        updateUserUI();

        showToast(`Welcome back, ${currentUser.name}!`);
        closeLogin();
      }
    } catch (err) {
      console.error(err);

      // FALLBACK: If Supabase fails or for local demo
      if (err.message.includes('Invalid login credentials') || err.status === 400 || err.status === 401) {
        const inputEmail = document.getElementById('loginEmail').value.trim();
        const inputName = document.getElementById('loginName').value.trim();

        if (loginMode === 'register' && !inputName) {
          showToast("Full Name is required for registration.");
          submitBtn.disabled = false; submitBtn.innerText = originalBtnText; return;
        }

        currentUser = {
          id: 'demo-user-' + Date.now(),
          email: inputEmail,
          name: inputName || 'User'
        };
        localStorage.setItem('smartgoUser', JSON.stringify(currentUser));
        updateUserUI();
        showToast(`Welcome, ${currentUser.name}!`);
        closeLogin();
      } else {
        showToast(err.message || "Authentication failed.");
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerText = originalBtnText;
    }
  });

  // Category Strip (Nav) Links
  document.querySelectorAll('.cat-item').forEach(item => {
    item.onclick = (e) => {
      e.preventDefault();
      document.body.classList.remove('deals-active');
      window.isDealsView = false;
      filterCat(item.dataset.cat);
      const productsSec = document.getElementById('products');
      if (productsSec) productsSec.scrollIntoView({ behavior: 'smooth' });
    };
  });

  // Newsletter
  safeOnSubmit('newsletterForm', (e) => {
    e.preventDefault();
    showToast("Thanks for subscribing! Check your email for the discount code.");
    e.target.reset();
  });

  // More Dropdown
  const moreBtn = document.getElementById('moreBtn');
  if (moreBtn) {
    // Dropdown works on hover via CSS, but we can add secondary click logic for mobile
    moreBtn.onclick = () => {
      // Logic for mobile if needed, for now just prevents jump
    };
  }


  // Trust Modal
  const trustClose = document.getElementById('trustClose');
  const trustOverlay = document.getElementById('trustOverlay');

  if (trustClose) trustClose.onclick = () => {
    if (trustOverlay) trustOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (trustOverlay) {
    trustOverlay.onclick = (e) => {
      if (e.target === trustOverlay) {
        if (trustClose) trustClose.click();
      }
    };
  }

  document.querySelectorAll('.trust-item').forEach(item => {
    item.addEventListener('click', () => {
      const type = item.getAttribute('data-type');
      if (type) window.showTrustInfo(type);
    });
  });
}

function handleSearch() {
  const input = document.getElementById('searchInput');
  const query = input.value.toLowerCase().trim();
  const sugBox = document.getElementById('searchSuggestions');

  if (sugBox) sugBox.classList.remove('active');

  if (!query) {
    showToast("Please enter a product name to search.");
    return;
  }

  // Active Search View
  document.body.classList.add('search-active');

  // Sync search query into global state
  currentFilters.searchQuery = query;

  const filtered = products.filter(p => getSearchMetadata(p).includes(query));

  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;

  productGrid.innerHTML = filtered.length ? '' : `<div style="grid-column:1/-1;text-align:center;padding:100px;color:#878787">No products found for "${query}"</div>`;

  if (filtered.length) {
    document.getElementById('productsTitle').innerText = `Showing results for "${query}"`;
    const sub = document.querySelector('.prod-sub');
    if (sub) sub.innerText = `Found ${filtered.length} products`;

    // Instead of rendering directly, apply the global filters
    // we already set currentFilters.searchQuery above
    applyFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.getElementById('productsTitle').innerText = `No results for "${query}"`;
    const sub = document.querySelector('.prod-sub');
    if (sub) sub.innerText = `Try checking your spelling or use more general terms.`;
  }

  input.blur();
}

// SEARCH SUGGESTIONS LOGIC
function initSearchSuggestions() {
  const input = document.getElementById('searchInput');
  const sugBox = document.getElementById('searchSuggestions');
  if (!input || !sugBox) return;

  input.addEventListener('input', () => {
    const val = input.value.toLowerCase().trim();
    if (val.length < 1) {
      sugBox.classList.remove('active');
      return;
    }

    // Filter products for suggestions
    const matches = products.filter(p =>
      p.name.toLowerCase().includes(val) ||
      p.category.toLowerCase().includes(val)
    ).slice(0, 8); // Limit to 8 suggestions

    if (matches.length > 0) {
      sugBox.innerHTML = matches.map(p => `
        <div class="sug-item" onclick="selectSuggestion('${p.name}')">
          <img src="${p.image}" class="sug-img" onerror="this.src='https://via.placeholder.com/32'">
          <div class="sug-text">
            <span class="sug-main">${p.name}</span>
            <span class="sug-sub">in ${p.category}</span>
          </div>
          <span class="sug-ico-fade">↖</span>
        </div>
      `).join('');

      // Add a category skip suggestion if matching category
      const catMatch = [...new Set(products.map(p => p.category))].find(c => c.includes(val));
      if (catMatch && !matches.some(m => m.category === catMatch && m.name.toLowerCase() === val)) {
        sugBox.insertAdjacentHTML('afterbegin', `
           <div class="sug-item" onclick="filterCat('${catMatch}'); document.getElementById('searchSuggestions').classList.remove('active');">
             <span class="sug-img" style="display:flex;align-items:center;justify-content:center;font-size:20px">📂</span>
             <div class="sug-text">
               <span class="sug-main">${catMatch.toUpperCase()}</span>
               <span class="sug-sub">Browse entire category</span>
             </div>
           </div>
         `);
      }

      sugBox.classList.add('active');
    } else {
      sugBox.classList.remove('active');
    }
  });

  // Close suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !sugBox.contains(e.target)) {
      sugBox.classList.remove('active');
    }
  });

  // Handle focus
  input.addEventListener('focus', () => {
    if (input.value.trim().length > 0) {
      sugBox.classList.add('active');
    }
  });
}

window.selectSuggestion = function (name) {
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = name;
    handleSearch();
  }
}

window.toggleWishlist = function (id) {
  const index = wishlist.indexOf(id);
  let isAdding = false;
  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(id);
    isAdding = true;
  }

  localStorage.setItem('smartgoWishlist', JSON.stringify(wishlist));
  showToast(isAdding ? "Added to wishlist ❤️" : "Removed from wishlist 🤍");

  // Update the grid quietly if search is not active
  try { applyFilters(); } catch (e) { if (typeof renderProducts === 'function') renderProducts(); }
}

window.updateUserUI = updateUserUI;
window.openLogin = openLogin;
window.closeLogin = closeLogin;
window.logoutUser = logoutUser;
window.handleOTP = handleOTP;

function updateUserUI() {
  const label = document.getElementById('userNameLabel');
  const wrap = document.getElementById('userMenuWrap');
  if (!label || !wrap) return;

  if (currentUser) {
    label.innerHTML = `${currentUser.name} <small>▾</small>`;
    wrap.classList.add('logged-in');
  } else {
    label.innerHTML = `Login <small>▾</small>`;
    wrap.classList.remove('logged-in');
  }
}

function openLogin() {
  console.log("openLogin function executed. CurrentUser:", !!currentUser);
  if (currentUser) return;
  const overlay = document.getElementById('loginOverlay');
  if (overlay) {
    console.log("Login overlay found. Showing...");
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
  } else {
    console.error("CRITICAL: loginOverlay element NOT FOUND in the DOM!");
  }
}

function closeLogin() {
  console.log("closeLogin function executed.");
  const overlay = document.getElementById('loginOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }, 400);
  }
}

function logoutUser(e) {
  if (e) e.preventDefault();

  const finishLogout = () => {
    currentUser = null;
    localStorage.removeItem('smartgoUser');
    updateUserUI();
    showToast("Logged out successfully. Refreshing...");
    setTimeout(() => location.reload(), 1000);
  };

  if (typeof _supabase !== 'undefined' && _supabase) {
    _supabase.auth.signOut().then(finishLogout).catch(finishLogout);
  } else {
    finishLogout();
  }
}

window.verifyOTP = verifyOTP;

function handleOTP() {
  const emailOrPhone = document.getElementById('loginEmail').value.trim();
  const userName = document.getElementById('loginName').value.trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrPhone);

  if (!isEmail) {
    showToast("Please enter a valid Email Address to receive OTP.");
    const inp = document.getElementById('loginEmail');
    inp.style.borderColor = '#f03e3e';
    setTimeout(() => inp.style.borderColor = '', 2000);
    return;
  }

  if (!userName) {
    showToast("Please enter your name first.");
    const inp = document.getElementById('loginName');
    inp.style.borderColor = '#f03e3e';
    setTimeout(() => inp.style.borderColor = '', 2000);
    return;
  }

  const otpBtn = document.getElementById('otpBtn');
  const originalText = otpBtn.innerText;
  otpBtn.innerText = "Connecting...";
  otpBtn.disabled = true;

  // Mock OTP Generation
  const tempOtp = Math.floor(100000 + Math.random() * 900000);
  window._lastGeneratedOtp = tempOtp.toString();

  // REAL EMAIL SENDING VIA EMAILJS
  if (typeof emailjs === 'undefined') {
    showToast("Email service not ready. Using mock OTP.");
    setTimeout(() => {
      finalizeOTPUI(false, emailOrPhone, tempOtp);
      otpBtn.innerText = "Resend OTP";
      otpBtn.disabled = false;
    }, 1200);
  } else {
    otpBtn.innerText = "Sending Real OTP...";
    const templateParams = {
      fullName: userName,
      to_email: emailOrPhone,
      otp_code: tempOtp,
      from_name: "Smartgo Explore Plus"
    };

    emailjs.send("service_84pn4ro", "template_k474i5j", templateParams)
      .then(() => {
        showToast("Real OTP sent to your email! ✅");
        finalizeOTPUI(false, emailOrPhone, tempOtp);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        showToast("Real sending failed. Reverting to mock.");
        finalizeOTPUI(false, emailOrPhone, tempOtp);
      })
      .finally(() => {
        otpBtn.innerText = "Resend OTP";
        otpBtn.disabled = false;
      });
  }
}

function finalizeOTPUI(isPhone, emailOrPhone, tempOtp) {
  document.getElementById('otpField').style.display = 'block';
  document.getElementById('verifyOtpBtn').style.display = 'block';
  document.getElementById('loginSubmitBtn').style.display = 'none';

  // Display the OTP in the UI notification box
  const notifyBox = document.getElementById('otpNotify');
  const notifyContent = document.getElementById('otpNotifyContent');

  if (notifyBox && notifyContent) {
    const channelLabel = isPhone ? `SMS to <strong>+91 ${emailOrPhone}</strong>` : `Email to <strong>${emailOrPhone}</strong>`;
    const channelIcon = isPhone ? "📱" : "📧";

    notifyContent.innerHTML = `
        <div style="display:flex; align-items:flex-start; gap:12px;">
          <div style="font-size:24px;">${channelIcon}</div>
          <div>
            <strong>OTP Dispatched!</strong><br>
            A 6-digit secure code has been sent to your respective ${channelLabel}. It may take a few seconds to arrive.
          </div>
        </div>
      `;
    notifyBox.style.display = 'block';
    notifyBox.style.animation = 'slideDown 0.4s ease-out';
  }

  showToast(`Secure OTP dispatched!`);
  const scrollArea = document.getElementById('loginScrollArea');
  if (scrollArea) { scrollArea.scrollTo({ top: scrollArea.scrollHeight, behavior: 'smooth' }); }
}

async function verifyOTP() {
  const entered = document.getElementById('loginOtp').value.trim();
  const inputEmail = document.getElementById('loginEmail').value.trim();
  const inputName = document.getElementById('loginName').value.trim();

  if (entered === window._lastGeneratedOtp) {
    if (_supabase) {
      // 1. Check if user exists in customers table
      const { data: existingUser } = await _supabase
        .from('customers')
        .select('*')
        .eq('contact_info', inputEmail)
        .single();

      if (existingUser) {
        currentUser = {
          id: existingUser.id,
          email: existingUser.contact_info,
          name: existingUser.full_name
        };
      } else {
        // 2. If new user, they MUST provide a name
        if (!inputName) {
          showToast("New user discovered! Please enter your Full Name to register.");
          return;
        }

        const newId = 'otp-user-' + Date.now();
        const { error: regError } = await _supabase
          .from('customers')
          .insert([{ full_name: inputName, contact_info: inputEmail }]);

        if (regError) { console.error(regError); }

        currentUser = {
          id: newId,
          email: inputEmail,
          name: inputName
        };
      }
    } else {
      // FALLBACK logic if Supabase is offline
      currentUser = {
        id: 'otp-user-' + Date.now(),
        email: inputEmail,
        name: inputName || inputEmail
      };
    }

    localStorage.setItem('smartgoUser', JSON.stringify(currentUser));
    updateUserUI();
    showToast(`Welcome, ${currentUser.name}!`);
    closeLogin();
    resetLoginUI();
  } else {
    showToast("Invalid OTP. Please try again.");
  }
}

// THEME TOGGLE
window.toggleTheme = function () {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('smartgoDarkMode', isDarkMode);
  updateThemeIcon();
  showToast(isDarkMode ? "Dark Mode Activated 🌙" : "Light Mode Activated ☀️");
};

function updateThemeIcon() {
  const icon = document.getElementById('themeIcon');
  if (icon) icon.innerText = isDarkMode ? '☀️' : '🌙';
}

// COMPARE LOGIC
window.addToCompare = function (id) {
  if (compareList.includes(id)) {
    showToast("Product already in comparison list.");
    return;
  }
  if (compareList.length >= 3) {
    showToast("Comparison limited to 3 products. Remove one first.");
    return;
  }
  compareList.push(id);
  localStorage.setItem('smartgoCompare', JSON.stringify(compareList));
  showToast("Added to Comparison! ⚖️");
  openCompare();
};

window.removeFromCompare = function (id) {
  compareList = compareList.filter(pid => pid !== id);
  localStorage.setItem('smartgoCompare', JSON.stringify(compareList));
  renderCompare();
};

window.openCompare = function () {
  document.getElementById('compareOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  renderCompare();
};

window.closeCompare = function () {
  document.getElementById('compareOverlay').classList.remove('active');
  document.body.style.overflow = '';
};

function renderCompare() {
  const content = document.getElementById('compareContent');
  if (compareList.length === 0) {
    content.innerHTML = `<div style="text-align:center; padding: 40px; color: #878787;">Select products to compare! ⚖️</div>`;
    return;
  }

  const items = products.filter(p => compareList.includes(p.id));

  content.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Attribute</th>
          ${items.map(item => `
            <th>
              <button onclick="removeFromCompare(${item.id})" style="float:right; opacity:0.5">✕</button>
              <img src="${item.image}" class="comp-prod-img" onerror="this.src='${item.fallback}'">
              <div class="comp-name">${item.name}</div>
              <div class="comp-price">₹${item.price.toLocaleString()}</div>
            </th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
        <tr><td>Rating</td>${items.map(item => `<td>${item.rating} ★ (${item.reviews})</td>`).join('')}</tr>
        <tr><td>Category</td>${items.map(item => `<td>${item.category}</td>`).join('')}</tr>
        <tr><td>Description</td>${items.map(item => `<td style="font-size:12px; line-height:1.4">${item.description}</td>`).join('')}</tr>
        <tr><td>Action</td>${items.map(item => `<td><button class="btn-add" onclick="addToCart(${item.id}); closeCompare();">ADD TO CART</button></td>`).join('')}</tr>
      </tbody>
    </table>
  `;
}

// CHAT LOGIC → handled by Smartgo AI Engine (see bottom of file)


// SEARCH LOGIC handled above

window.toggleLoginMode = function (e) {
  if (e) e.preventDefault();
  const submitBtn = document.getElementById('loginSubmitBtn');
  const toggleText = document.getElementById('regToggleText');
  const otpBtn = document.getElementById('otpBtn');
  const leftDesc = document.querySelector('.login-left p');
  const leftTitle = document.querySelector('.login-left h2');

  if (loginMode === 'login') {
    loginMode = 'register';
    submitBtn.innerText = 'Create Account Now';
    if (toggleText) toggleText.innerHTML = `Already have an account? <a href="#" onclick="toggleLoginMode(event)" style="color: #2874f0; font-weight: 700;">Login here</a>`;
    if (otpBtn) otpBtn.style.display = 'none';
    if (leftTitle) leftTitle.innerText = "Join Smartgo";
    if (leftDesc) leftDesc.innerText = "Create an account to track your orders, save your favorites to wishlist, and earn Smartgo Coins!";
  } else {
    loginMode = 'login';
    submitBtn.innerText = 'Continue to Login';
    if (toggleText) toggleText.innerHTML = `New to Smartgo? <a href="#" onclick="toggleLoginMode(event)" style="color: #2874f0; font-weight: 700;">Create Account</a>`;
    if (otpBtn) otpBtn.style.display = 'block';
    if (leftTitle) leftTitle.innerText = "Smartgo Explore Plus";
    if (leftDesc) leftDesc.innerText = "Get access to your Orders, Wishlist and Personalized Recommendations";
  }
}

function resetLoginUI() {
  document.getElementById('otpField').style.display = 'none';
  document.getElementById('verifyOtpBtn').style.display = 'none';
  document.getElementById('loginSubmitBtn').style.display = 'block';
  document.getElementById('otpBtn').innerText = "Request OTP";
  document.getElementById('loginOtp').value = '';
}

function closeOrders() {
  const overlay = document.getElementById('ordersOverlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}
window.openOrders = openOrders;
window.closeOrders = closeOrders;

async function openOrders(e) {
  if (e) e.preventDefault();
  if (!currentUser) {
    showToast("Please login to view your orders!");
    openLogin();
    return;
  }

  const overlay = document.getElementById('ordersOverlay');
  const content = document.getElementById('ordersContent');
  if (!overlay || !content) return;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  content.innerHTML = `<div style="text-align:center; padding: 50px; color: #878787;">🔍 Searching for your orders...</div>`;

  try {
    if (!_supabase) throw new Error("Database offline");

    // Fetch orders for this user securely
    let allOrders = [];
    try {
      if (_supabase) {
        const { data: remoteOrders, error } = await _supabase
          .from('orders')
          .select('*')
          .eq('user_email', currentUser.email)
          .order('created_at', { ascending: false });
        if (!error && remoteOrders) { allOrders = allOrders.concat(remoteOrders); }

        // Check for orders with customer_contact as a fallback
        const { data: oldOrders } = await _supabase
          .from('orders')
          .select('*')
          .eq('customer_contact', currentUser.email)
          .order('created_at', { ascending: false });
        if (oldOrders) { allOrders = allOrders.concat(oldOrders); }
      }
    } catch (e) { console.warn("Supabase fetch failed", e); }

    // Combine with Local Fallback Orders (To solve RLS Blocks perfectly)
    const localOrders = JSON.parse(localStorage.getItem('smartgoLocalOrders') || '[]');
    const emailMatches = localOrders.filter(o => o.user_email === currentUser.email || o.customer_contact === currentUser.email);
    allOrders = [...emailMatches, ...allOrders];

    // Deduplicate
    allOrders = allOrders.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);

    if (allOrders.length === 0) {
      content.innerHTML = `
        <div style="text-align:center; padding: 60px 20px;">
          <div style="font-size: 60px; margin-bottom: 20px;">📦</div>
          <h3 style="color: #212121; margin-bottom: 10px;">No Orders Found</h3>
          <p style="color: #878787; font-size: 14px;">Looks like you haven't placed any orders yet.</p>
          <button class="btn-buy" style="margin-top: 20px; padding: 10px 30px;" onclick="closeOrders()">Start Shopping</button>
        </div>
      `;
      return;
    }

    // Render orders
    content.innerHTML = allOrders.map(order => `
      <div class="order-card" style="background:#fff; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 20px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
        <div style="padding: 15px 20px; background: #f8f9fa; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <span style="font-size: 12px; color: #878787; text-transform: uppercase; font-weight: 700;">Order ID</span>
            <div style="font-weight: 700; color: #212121;">#${order.order_number || order.id.slice(0, 8).toUpperCase()}</div>
          </div>
          <div style="text-align: right;">
             <span style="font-size: 12px; color: #878787; text-transform: uppercase; font-weight: 700;">Status</span>
             <div style="color: ${order.status === 'Delivered' ? '#388e3c' : '#fb641b'}; font-weight: 700;">● ${order.status || 'Confirmed'}</div>
          </div>
        </div>
        <div style="padding: 20px; display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; gap: 20px; align-items: center;">
            <div style="background: #f0f2f5; width: 60px; height: 60px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px;">🏷️</div>
            <div>
              <div style="font-weight: 600; font-size: 15px;">Order placed on ${new Date(order.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
              <div style="font-size: 13px; color: #2874f0; margin-top: 4px; font-weight: 600; max-width: 400px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">📦 ${order.product_names || 'Products Included'}</div>
              <div style="font-size: 13px; color: #878787; margin-top: 4px;">Total Amount: <span style="font-weight: 700; color: #212121;">₹${order.total_amount.toLocaleString()}</span></div>
            </div>
          </div>
          <button class="btn-add" style="border: 1px solid #2874f0; color: #2874f0; background: transparent; padding: 8px 20px; border-radius: 4px; font-weight: 600;" onclick="showToast('Tracking info will be available soon!')">TRACK ORDER</button>
        </div>
      </div>
    `).join('');

  } catch (err) {
    console.error(err);
    content.innerHTML = `<div style="text-align:center; padding: 50px; color: #d32f2f;">⚠️ Error loading orders. Please try again later.</div>`;
  }
}

function openNotifications(e) {
  if (e) e.preventDefault();
  document.getElementById('notifyOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeNotifications() {
  document.getElementById('notifyOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function triggerDownload() {
  showToast("Downloading Smartgo Mobile App... 🚀");

  // Create a blob (mock APK file)
  const dummyContent = "Smartgo E-commerce App v1.0.1\n\nThis is a mock application package for demonstration purposes.";
  const blob = new Blob([dummyContent], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);

  // Trigger the download
  const link = document.createElement("a");
  link.href = url;
  link.download = "Smartgo.apk"; // In a real scenario, this would be your APK file URL
  document.body.appendChild(link);
  link.click();

  // Cleanup
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);

  setTimeout(() => {
    showToast("Smartgo.apk download complete! Check your status bar.");
  }, 1000);
}

function openProfile(e) {
  if (e) e.preventDefault();
  if (!currentUser) return;
  document.getElementById('profileOverlay').classList.add('active');
  document.getElementById('newNameInput').value = currentUser.name;
  document.body.style.overflow = 'hidden';
}

function closeProfile() {
  document.getElementById('profileOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

async function updateProfileName() {
  const newName = document.getElementById('newNameInput').value.trim();
  if (!newName) {
    showToast("Name cannot be empty!");
    return;
  }

  try {
    if (!_supabase) throw new Error("Database offline");

    // Update the database
    const { error } = await _supabase
      .from('customers')
      .update({ full_name: newName })
      .eq('contact_info', currentUser.email);

    if (error) throw error;

    // Update local state
    currentUser.name = newName;
    localStorage.setItem('smartgoUser', JSON.stringify(currentUser));

    // Update UI
    updateUserUI();
    showToast("Profile renamed successfully! ✅");
    closeProfile();

  } catch (err) {
    console.error(err);
    showToast("Error updating profile. Please try again.");
  }
}

// REMOVED OLD WISHLIST DECLARATION FROM HERE (ALREADY AT TOP)

function toggleWishlist(id) {
  const index = wishlist.indexOf(id);
  if (index === -1) {
    wishlist.push(id);
    showToast("Added to Wishlist! ❤️");
  } else {
    wishlist.splice(index, 1);
    showToast("Removed from Wishlist!");
  }
  localStorage.setItem('smartgoWishlist', JSON.stringify(wishlist));

  try {
    if (typeof applyFilters === 'function') applyFilters(); // commonly updates main page grid
    if (typeof renderProducts === 'function') renderProducts();
  } catch (e) { }

  if (document.getElementById('wishlistOverlay').classList.contains('active')) {
    renderWishlist();
  }
}

function renderWishlist() {
  const content = document.getElementById('wishlistContent');
  if (wishlist.length === 0) {
    content.innerHTML = `<div style="text-align:center; padding: 40px; color: #878787;">Your wishlist is empty! ❤️</div>`;
    return;
  }

  const items = products.filter(p => wishlist.includes(p.id));
  content.innerHTML = items.map(item => `
    <div style="display:flex; gap:15px; padding: 15px 0; border-bottom: 1px solid #eee; align-items:center;">
      <img src="${item.image}" style="width:60px; height:60px; object-fit:contain; background:#f9f9f9; border-radius:4px;" onerror="this.src='${item.fallback}'">
      <div style="flex:1">
        <div style="font-weight: 600; font-size: 14px;">${item.name}</div>
        <div style="color: #212121; font-weight: 700; margin-top: 5px;">₹${item.price.toLocaleString()}</div>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn-add" onclick="addToCart(${item.id})" style="padding: 5px 12px; font-size: 12px;">ADD CART</button>
        <button onclick="toggleWishlist(${item.id})" style="font-size: 18px; color: #878787; background:none; border:none; cursor:pointer;" onmouseover="this.style.color='#ff3e6c'" onmouseout="this.style.color='#878787'" title="Remove from wishlist">🗑️</button>
      </div>
    </div>
  `).join('');
}

function openWishlist() {
  document.getElementById('wishlistOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  renderWishlist();
}

function closeWishlist() {
  document.getElementById('wishlistOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function openRewardsModal() {
  document.getElementById('rewardsOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRewardsModal() {
  document.getElementById('rewardsOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Ensure globally accessible
window.openNotifications = openNotifications;
window.closeNotifications = closeNotifications;
window.triggerDownload = triggerDownload;
window.openProfile = openProfile;
window.closeProfile = closeProfile;
window.updateProfileName = updateProfileName;
window.openWishlist = openWishlist;
window.closeWishlist = closeWishlist;
window.toggleWishlist = toggleWishlist;
window.openRewardsModal = openRewardsModal;
window.closeRewardsModal = closeRewardsModal;

// ===== BACK TO TOP =====
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (btn) {
    btn.classList.toggle('visible', window.scrollY > 400);
  }
});

// ===== QUICK CATEGORY ACTIVE STATE already handled inside filterCat =====

// ===== PROMO POPUP (shown once per session) =====
window.claimPromo = function () {
  const email = document.getElementById('ppEmail').value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    const inp = document.getElementById('ppEmail');
    inp.style.borderColor = '#d32f2f';
    inp.placeholder = 'Please enter a valid email!';
    setTimeout(() => { inp.style.borderColor = ''; inp.placeholder = 'Enter your email'; }, 2000);
    return;
  }
  showToast('🎉 Code SMART10 sent to ' + email + '. Check your inbox!');
  closePromoPopup();
  sessionStorage.setItem('promoShown', 'true');
};

window.closePromoPopup = function () {
  document.getElementById('promoPopupOv').classList.remove('active');
  document.body.style.overflow = '';
  sessionStorage.setItem('promoShown', 'true');
};

// Show popup after 4 seconds if not shown this session
if (!sessionStorage.getItem('promoShown')) {
  setTimeout(() => {
    const ov = document.getElementById('promoPopupOv');
    if (ov) {
      ov.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }, 4000);
}

// =====================================================
// ===== SMARTGO AI CHATBOT ENGINE (Full Version) =====
// =====================================================

// Synonyms / Keyword → product category or id mapping
const chatKeywords = {
  // Audio
  headphone: [1], headphones: [1], anc: [1], 'noise cancel': [1], 'noise cancell': [1],
  earphone: [1, 2], earbuds: [2], earbud: [2], 'true wireless': [2], tws: [2],
  speaker: [3], speakers: [3], bluetooth: [1, 2, 3], stereo: [3], bass: [3],
  audio: [1, 2, 3], sound: [1, 2, 3], music: [1, 2, 3],
  // Wearables
  smartwatch: [4, 6], 'smart watch': [4, 6], watch: [4, 6],
  fitness: [5], 'fitness band': [5], 'smart band': [5], 'health band': [5], tracker: [5],
  wearable: [4, 5, 6], wearables: [4, 5, 6], ecg: [4], steps: [5],
  // Mobiles
  mobile: [7], mobiles: [7], phone: [7], smartphone: [7], smartphones: [7],
  '5g': [7], android: [7], glyph: [7],
  // Fashion
  sneaker: [8], sneakers: [8], shoes: [8], footwear: [8], sports: [8],
  jacket: [9], jackets: [9], winter: [9], waterproof: [9], thermal: [9],
  fashion: [8, 9], clothing: [8, 9], wear: [8, 9], clothes: [8, 9],
  // Accessories
  backpack: [10], bag: [10], bags: [10], travel: [10], luggage: [10],
  sunglass: [11], sunglasses: [11], spectacle: [11], glasses: [11], eyewear: [11],
  accessory: [10, 11], accessories: [10, 11],
  // Tech
  laptop: [12], laptops: [12], notebook: [12], macbook: [12], 'm3': [12], ssd: [12], 'retina display': [12],
  tablet: [13], tab: [13], 's9': [13], 'spen': [13], 's pen': [13], 'amoled': [13],
  tech: [12, 13], gadget: [12, 13], gadgets: [12, 13], computer: [12], pc: [12],
  // Product names (partial)
  nova: [1], 'nova pro': [1],
  pulse: [2], 'pulse pro': [2],
  boom: [3], 'boom studio': [3],
  zenith: [4], 'zenith smartwatch': [4],
  aero: [5], 'aero fit': [5],
  minimalist: [6],
  neobook: [12], 'neo book': [12], 'm3 chip': [12],
  elite: [13], 'elite tab': [13], 'tab s9': [13],
  voyager: [10], 'voyager pro': [10],
  aviator: [11], 'classic aviator': [11],
  vertex: [9], 'vertex tech': [9],
  // General browsing
  cheap: [5, 8], expensive: [12, 13, 1], premium: [1, 4, 12], bestseller: [7, 1, 5]
};

const chatFAQ = [
  {
    keys: ['return', 'refund', 'exchange'],
    answer: '↩️ **Easy Returns!** We offer a hassle-free **30-day return policy** on all products. Just raise a return request and we\'ll pick it up from your doorstep. Refunds are processed in 5-7 business days.'
  },
  {
    keys: ['delivery', 'shipping', 'ship', 'deliver'],
    answer: '🚚 **Free Delivery** on all orders above ₹499! Standard delivery takes **2-5 business days**. Express delivery available in major cities. Same-day dispatch for orders before 2 PM.'
  },
  {
    keys: ['payment', 'pay', 'emi', 'upi', 'cod', 'cash'],
    answer: '💳 We accept **UPI, Credit/Debit Cards, Net Banking, Wallets & Cash on Delivery (COD)**. No-Cost EMI available on select bank cards. All payments are protected with 256-bit SSL encryption. 🔒'
  },
  {
    keys: ['offer', 'discount', 'coupon', 'code', 'sale', 'deal', 'smart10'],
    answer: '🎁 Use code **SMART10** at checkout for **10% OFF** your first order! Also check Deals of the Day for limited-time flash prices. Subscribe to our newsletter for exclusive weekly deals!'
  },
  {
    keys: ['warranty', 'guarantee', 'genuine', 'original', 'authentic'],
    answer: '💎 **100% Authentic Products** — All items are sourced directly from brands or authorized distributors. Electronics come with official brand warranty cards. We do strict quality checks before every shipment.'
  },
  {
    keys: ['hello', 'hi', 'hey', 'hii', 'helo', 'howdy', 'greet'],
    answer: '👋 Hello there! I\'m **Smartgo AI**, your personal shopping buddy. I can help you find products, check prices, deals, delivery info, and much more! What are you looking for today? 🛍️'
  },
  {
    keys: ['thank', 'thanks', 'thankyou', 'great', 'awesome', 'perfect', 'nice', 'good'],
    answer: '😊 You\'re so welcome! Happy shopping at Smartgo. Feel free to ask me anything else — I\'m here 24/7!'
  },
  {
    keys: ['bye', 'goodbye', 'exit', 'close'],
    answer: '👋 Thanks for chatting with Smartgo AI! Have a wonderful shopping experience. Come back anytime! 🛍️'
  },
  {
    keys: ['contact', 'support', 'help', 'customer care', 'care'],
    answer: '🎧 **24/7 Customer Support:**\n- 📞 Phone: 1800-SMARTGO\n- 📧 Email: support@smartgo.in\n- 💬 WhatsApp: +91 98765 43210\n\nOur team typically responds within minutes!'
  },
  {
    keys: ['top', 'popular', 'bestseller', 'best seller', 'trending', 'recommended', 'recommend'],
    answer: null, // special: show top products
    special: 'topProducts'
  },
  // Reorder: 'cart' FAQ must NOT steal 'bag' or 'band' when products are clearly intended
  // So we push cart FAQ lower (done by checking product keywords FIRST — see getBotReply)
  {
    keys: ['my cart', 'view cart', 'open cart', 'checkout', 'my order', 'my orders'],
    answer: '🛒 To view your cart, click the **Cart** button in the top navigation. You can update quantities, apply coupons, and proceed to checkout from there!'
  },
  {
    keys: ['all product', 'show all', 'browse', 'categories', 'category', 'list'],
    answer: null,
    special: 'allProducts'
  },
  {
    keys: ['price', 'cost', 'how much', 'rate', 'cheap', 'expensive', 'afford'],
    answer: '💰 Our prices range from **₹3,499** (fitness bands) to **₹1,29,990** (premium laptops). Use the **Price filter** in the product section to find items in your budget. Type a product name and I\'ll show you its exact price!'
  },
  {
    keys: ['about', 'smartgo', 'company', 'who are you', 'website'],
    answer: '🏪 **About Smartgo**\nSmartgo is India\'s most trusted online shopping platform for Electronics, Fashion, Audio, Tech & more. We have **4.8★ rating** from 2 lakh+ happy customers, with **Free Delivery**, **30-Day Returns**, and **100% Authentic** products!'
  }
];

let chatOpen = false;

window.toggleChat = function () {
  try {
    const win = document.getElementById('chatWindow');
    const badge = document.getElementById('chatBadge');
    if (!win) {
      alert("Error: chatWindow element not found in HTML!");
      return;
    }
    chatOpen = !chatOpen;
    win.classList.toggle('active', chatOpen);
    if (chatOpen && badge) badge.style.display = 'none';
  } catch (e) {
    alert("Error opening chat: " + e.message);
  }
};

window.sendQuickReply = function (text) {
  const input = document.getElementById('chatInput');
  if (input) input.value = text;
  sendChat();
};

window.sendChat = function () {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  appendChatMsg(text, 'user');

  // Hide quick replies after first message
  const qr = document.getElementById('quickReplies');
  if (qr) qr.style.display = 'none';

  // Show typing for 900ms then reply
  const typingId = showTyping();
  setTimeout(() => {
    removeTyping(typingId);
    const reply = getBotReply(text.toLowerCase());
    if (reply && reply.type === 'products') {
      appendProductCards(reply.products, reply.intro);
    } else if (reply && reply.html) {
      appendChatMsg(reply.html, 'bot', true);
    } else {
      appendChatMsg(reply.text || reply, 'bot');
    }
  }, 900);
};

function getBotReply(msg) {
  // === STEP 1: Product keyword check (BEFORE FAQ to prevent collision) ===
  const matchedIds = new Set();

  // 1a. Match multi-word keywords (longer first to avoid partial matches)
  const sortedKeywords = Object.entries(chatKeywords).sort((a, b) => b[0].length - a[0].length);
  for (const [keyword, ids] of sortedKeywords) {
    if (msg.includes(keyword)) ids.forEach(id => matchedIds.add(id));
  }

  // 1b. Deep product name scan: every significant word of product name vs msg
  const stopWords = new Set(['a', 'an', 'the', 'for', 'of', 'in', 'with', 'and', '&', '-', '(', ')', '5g']);
  products.forEach(p => {
    const words = p.name.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/);
    const significant = words.filter(w => w.length >= 3 && !stopWords.has(w));
    const match = significant.some(w => msg.includes(w));
    if (match) matchedIds.add(p.id);
    // Also search in description for keyword match
    if (p.description.toLowerCase().split(/\s+/).some(w => w.length >= 5 && msg.includes(w))) {
      matchedIds.add(p.id);
    }
  });

  if (matchedIds.size > 0) {
    const matched = [...matchedIds].slice(0, 4).map(id => products.find(p => p.id === id)).filter(Boolean);
    const intro = matched.length === 1
      ? `📦 Here's the complete details for **${matched[0].name}**:`
      : `🔍 Found **${matched.length} product(s)** matching "${msg.length > 30 ? msg.substring(0, 30) + '...' : msg}":`;
    return { type: 'products', products: matched, intro, fullDesc: matched.length === 1 };
  }

  // === STEP 2: FAQ keywords (only if no product found) ===
  for (const faq of chatFAQ) {
    if (faq.keys.some(k => msg.includes(k))) {
      if (faq.special === 'topProducts') {
        const top = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
        return { type: 'products', products: top, intro: '🔥 Here are our **top-rated products** for you:' };
      }
      if (faq.special === 'allProducts') {
        return { type: 'products', products: products.slice(0, 6), intro: '🛍️ Here\'s a selection of our products:' };
      }
      return { text: faq.answer };
    }
  }

  // === STEP 3: Fallback ===
  return {
    text: `🤔 I couldn't find a match for "**${msg.length > 25 ? msg.substring(0, 25) + '...' : msg}**" — but I know all about Smartgo products!\n\nTry asking about:\n• 🎧 **Headphones, Earbuds, Speakers**\n• 💻 **Laptops, Tablets**\n• 📱 **Mobiles, Smartphones**\n• ⌚ **Smartwatches, Fitness Bands**\n• 👗 **Fashion, Sneakers, Jackets**\n• 🎒 **Bags, Sunglasses**\n• 🚚 **Delivery, Returns, Offers**`
  };
}

function appendChatMsg(text, sender, isHtml = false) {
  const body = document.getElementById('chatBody');
  if (!body) return;
  const div = document.createElement('div');
  div.className = `chat-msg ${sender}`;
  if (isHtml) {
    div.innerHTML = text;
  } else {
    const formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
    div.innerHTML = formatted;
  }
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function appendProductCards(prods, introText, fullDesc = false) {
  const body = document.getElementById('chatBody');
  if (!body) return;

  // Intro message
  const introDiv = document.createElement('div');
  introDiv.className = 'chat-msg bot';
  introDiv.innerHTML = introText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  body.appendChild(introDiv);

  prods.forEach(p => {
    const offPct = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
    const savings = p.originalPrice ? (p.originalPrice - p.price).toLocaleString() : 0;
    // Show FULL description always (no truncation)
    const desc = p.description;
    const stockLabel = p.badge === 'hot' ? '🔴 Limited Stock' : '🟢 In Stock';
    const card = document.createElement('div');
    card.className = 'chat-msg bot-item-box';
    card.style.cssText = 'flex-shrink:0; height:auto; max-width:96%; padding:0; border-radius:16px; border:1px solid #e0eaf8; box-shadow: 0 4px 16px rgba(26,115,232,0.08); background:#fff; overflow:hidden;';
    card.innerHTML = `
      <div style="background:linear-gradient(145deg,#f0f5ff,#eaf2ff); padding:16px; display:flex; gap:14px; align-items:flex-start; border-bottom:1px solid #dce8f8;">
        <img src="${p.image}" alt="${p.name}" style="width:90px; height:90px; object-fit:contain; border-radius:10px; background:#fff; flex-shrink:0; cursor:pointer; box-shadow:0 4px 12px rgba(0,0,0,0.08);" onclick="closeChat(); openQuickView(${p.id})" onerror="this.onerror=null; this.src='${p.fallback || 'https://via.placeholder.com/90'}'">
        <div style="flex:1; display:flex; flex-direction:column; gap:6px;">
          <div style="font-weight:800; font-size:14px; color:#1a1a2e; line-height:1.3; cursor:pointer;" onclick="closeChat(); openQuickView(${p.id})">${p.name}</div>
          <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
            <span style="background:#388e3c; color:#fff; font-size:10px; font-weight:800; padding:3px 8px; border-radius:4px;">${p.rating} ★</span>
            <span style="font-size:11px; color:#666;">(${p.reviews.toLocaleString()} reviews)</span>
          </div>
          <div style="font-weight:900; font-size:18px; color:#1a1a2e;">₹${p.price.toLocaleString()}</div>
        </div>
      </div>
      <div style="padding:14px 16px; background:#fff;">
        <div style="font-size:11px; font-weight:800; color:#1a73e8; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
          <span style="width:14px;height:14px;background:#1a73e8;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:9px;">✦</span> Description
        </div>
        <div style="font-size:13px; color:#444; line-height:1.6; background:#f8fbff; padding:10px 14px; border-radius:10px; border-left:3px solid #1a73e8;">${p.description}</div>
        <div style="display:flex; gap:10px; margin-top:14px;">
          <button onclick="var btn=this; addToCart(${p.id}); btn.innerHTML='✅ Added to Cart!'; btn.style.background='linear-gradient(135deg,#2e7d32,#388e3c)'; setTimeout(function(){ btn.innerHTML='🛒 Add to Cart'; btn.style.background='linear-gradient(135deg,#1a73e8,#1565c0)'; }, 2500);" style="flex:1; background:linear-gradient(135deg,#1a73e8,#1565c0); color:#fff; border:none; padding:11px 10px; border-radius:10px; font-size:13px; font-weight:800; cursor:pointer; box-shadow:0 4px 10px rgba(26,115,232,0.3); transition:0.3s; height:40px;">🛒 Add to Cart</button>
          <button onclick="closeChat(); openQuickView(${p.id})" style="flex:1; background:#fff; color:#1a73e8; border:2px solid #1a73e8; padding:11px 10px; border-radius:10px; font-size:13px; font-weight:800; cursor:pointer; transition:0.3s; height:40px;">🔍 Full Details</button>
        </div>
      </div>
    `;
    body.appendChild(card);
  });

  body.scrollTop = body.scrollHeight;
}

function showTyping() {
  const body = document.getElementById('chatBody');
  if (!body) return null;
  const id = 'typing_' + Date.now();
  const div = document.createElement('div');
  div.className = 'typing-indicator';
  div.id = id;
  div.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function closeChat() {
  const win = document.getElementById('chatWindow');
  if (win) win.classList.remove('active');
  chatOpen = false;
}
window.closeChat = closeChat;

window.toggleMobileFilters = function () {
  const sidebar = document.querySelector('.filters-sidebar');
  if (sidebar) {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
};

window.resetChat = function () {
  const chatBody = document.getElementById('chatBody');
  if (chatBody) {
    chatBody.innerHTML = `
      <div class="chat-msg bot"
        style="background:#fff; border-radius:4px 18px 18px 18px; padding:14px 16px; font-size:14px; max-width:86%; box-shadow:0 2px 8px rgba(0,0,0,0.07); line-height:1.6; color:#1a1a1a;">
        👋 Hi! I'm <strong>Smartgo AI</strong> — your personal shopping assistant.<br><br>I know everything about our
        products! Ask me about any item, price, or category. 🛍️
      </div>
      <div id="quickReplies" style="display:flex; flex-wrap:wrap; gap:8px; margin-top:4px;">
        <button class="qr-chip" onclick="sendQuickReply('top products')">🔥 Top Products</button>
        <button class="qr-chip" onclick="sendQuickReply('headphone')">🎧 Headphones</button>
        <button class="qr-chip" onclick="sendQuickReply('laptop')">💻 Laptops</button>
        <button class="qr-chip" onclick="sendQuickReply('offer discount')">🏷️ Offers</button>
        <button class="qr-chip" onclick="sendQuickReply('mobile')">📱 Mobiles</button>
        <button class="qr-chip" onclick="sendQuickReply('smartwatch')">⌚ Watches</button>
      </div>
    `;
  }
};
