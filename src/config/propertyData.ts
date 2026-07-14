/**
 * Nara Home Pamulang - Core Property Configurations
 * Customize prices, contact info, specifications, and content here.
 */

export const PROPERTY_CONFIG = {
  name: "Nara Home Pamulang",
  tagline: "Hunian Modern di Jantung Pamulang",
  subtitle: "Rumah 2 Lantai Modern Mulai Rp950 Jutaan dengan Lokasi Strategis di Tangerang Selatan.",
  developer: "Nara Home Pamulang",
  launchPrice: "Rp950 Juta*",
  whatsappNumber: "+62 813-2000-2523", // Change this to your real WhatsApp number
  whatsappMessage: "Halo Nara Home, saya tertarik untuk bertanya tentang unit dan booking site visit.",
  email: "narahomepamulang@gmail.com",
  googleMapsIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.57864114777!2d106.7138602!3d-6.3263837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e50077f91f77%3A0x9df57f83427299f7!2sNara%20Home!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid", // Map embed URL for resolved Nara Home location
  googleMapsDirectionsUrl: "https://maps.app.goo.gl/9mtNbVpPuAhAenma9",
  address: "Jl. Kalimantan No.24, Benda Baru, Pamulang, Tangerang Selatan, Banten 15418",
  totalUnits: 22,
  showHousesCount: 6,

  // Floating CTA WhatsApp link
  whatsappUrl: "https://wa.me/6281320002523?text=Halo%20Nara%20Home%20Pamulang%2C%20saya%20tertarik%20untuk%20info%20lebih%20lanjut%20dan%20booking%20site%20visit.",

  // House Specifications
  specs: {
    buildingArea: 74, // m²
    landArea: 60, // m²
    bedrooms: 3,
    bathrooms: 2,
    carport: 1, // car
    floors: 2,
    electricity: "2.200 W",
    waterSupply: "Pompa Air Shimizu & Toren 500L (Air Jernih)",
    foundation: "Cakar Ayam & Beton Bertulang",
    structure: "Hebel (Double Dinding)",
    roof: "Baja Ringan, Genteng Beton",
    floorFinishing: "Homogeneous Tile 60x60"
  },

  // Detailed Building Materials Specifications (From Official Blueprint Image)
  materialSpecs: [
    { label: "Dinding", value: "Hebel (Double Dinding)" },
    { label: "Lantai Utama", value: "Homogenous Tile 60x60" },
    { label: "Tangga", value: "Homogenous Tile 30x60 Kasar (Anti-Slip)" },
    { label: "Lantai Kamar Mandi", value: "Keramik 25x25" },
    { label: "Atap", value: "Baja Ringan, Genteng Beton" },
    { label: "Plafon", value: "Gypsum" },
    { label: "Sanitary", value: "Setara Toto" },
    { label: "Cat", value: "Jotun (Premium Weatherproof & Interior)" },
    { label: "Kusen Pintu", value: "Aluminium (Kuat & Tahan Rayap)" },
    { label: "Daun Pintu Dalam", value: "Multipleks + HPL" },
    { label: "Jendela", value: "Aluminium Alexindo" },
    { label: "Aksesoris Pintu Jendela", value: "Solid" },
    { label: "Septictank", value: "Biopro (Sistem Ramah Lingkungan)" },
    { label: "Toren", value: "500L" },
    { label: "Pompa Air", value: "Shimizu" },
    { label: "Listrik", value: "2.200 W" }
  ],

  // Key Highlights / USPs (Unique Selling Points)
  highlights: [
    {
      id: "modern-design",
      title: "Modern Minimalist Design",
      desc: "Estetika modern dengan fungsionalitas ruang maksimal, sirkulasi udara optimal, dan limpahan cahaya alami.",
      icon: "Home"
    },
    {
      id: "strategic-location",
      title: "Strategic Location",
      desc: "Hanya menit dari gerbang tol BSD/Pamulang, stasiun KRL, pusat belanja, dan fasilitas kesehatan terbaik.",
      icon: "MapPin"
    },
    {
      id: "family-friendly",
      title: "Family Friendly",
      desc: "Lingkungan tenang dengan taman bermain ramah anak dan keamanan 24 jam untuk tumbuh kembang buah hati.",
      icon: "Users"
    },
    {
      id: "investment-potential",
      title: "High Investment Potential",
      desc: "Pamulang adalah kawasan penyangga Jakarta dengan laju pertumbuhan nilai properti hingga 15% per tahun.",
      icon: "TrendingUp"
    },
    {
      id: "quality-construction",
      title: "Premium Construction",
      desc: "Material pilihan terbaik mulai dari pondasi cakar ayam, dinding bata kokoh, hingga finishing homogeneous tile.",
      icon: "ShieldCheck"
    },
    {
      id: "growing-neighborhood",
      title: "Growing Neighborhood",
      desc: "Dikelilingi oleh pusat pendidikan ternama seperti Universitas Pamulang serta beragam area komersial aktif.",
      icon: "Sparkles"
    }
  ],  // Gallery categorization (with placeholder paths generated or fallbacks)
  logo: "/assets/images/logo_narahome-removebg-preview.webp",
  heroImage: "/assets/images/img15.webp",
  facade3D: "/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0001.webp",
  
  // Multi-page PDF layouts
  facade3DPages: [
    "/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0001.webp",
    "/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0002.webp",
    "/assets/images/1-PDF-3D-FACADE-_-SITE-PROJECT-CLUSTER-PAMULANG_-TANGERANG-SELATAN-BAPAK-RAMLI_page-0003.webp",
    "/assets/images/1-PDF-3D-FACADE-_-SITE-PROJECT-CLUSTER-PAMULANG_-TANGERANG-SELATAN-BAPAK-RAMLI_page-0004.webp",
    "/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp",
    "/assets/images/1-PDF-3D-FACADE-_-SITE-PROJECT-CLUSTER-PAMULANG_-TANGERANG-SELATAN-BAPAK-RAMLI_page-0006.webp",
    "/assets/images/1-PDF-3D-FACADE-_-SITE-PROJECT-CLUSTER-PAMULANG_-TANGERANG-SELATAN-BAPAK-RAMLI_page-0007.webp",
    "/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0008.webp"
  ],

  denah3DPages: [
    "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0001.webp",
    "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0002.webp",
    "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0003.webp",
    "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0004.webp",
    "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp",
    "/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0006.webp"
  ],
  
  // Interactive Site Map list of all 22 units
  units: [
    { id: "unit-A-01", number: "A-01", status: "Coming Soon", isReady: false, price: "Rp1.15 Miliar*", specs: { land: 72, building: 89 } },
    { id: "unit-A-02", number: "A-02", status: "Coming Soon", isReady: false, price: "Rp1.18 Miliar*", specs: { land: 75, building: 89 } },
    { id: "unit-A-03", number: "A-03", status: "Coming Soon", isReady: false, price: "Rp995 Juta*", specs: { land: 66, building: 74 } },
    { id: "unit-A-04", number: "A-04", status: "Coming Soon", isReady: false, price: "Rp1.02 Miliar*", specs: { land: 68, building: 74 } },
    { id: "unit-A-05", number: "A-05", status: "Coming Soon", isReady: false, price: "Rp1.04 Miliar*", specs: { land: 69, building: 74 } },
    { id: "unit-A-06", number: "A-06", status: "Coming Soon", isReady: false, price: "Rp1.01 Miliar*", specs: { land: 67, building: 74 } },
    { id: "unit-A-07", number: "A-07", status: "Coming Soon", isReady: false, price: "Rp1.22 Miliar*", specs: { land: 89, building: 74 } },
    { id: "unit-B-01", number: "B-01", status: "Coming Soon", isReady: false, price: "Rp970 Juta*", specs: { land: 62, building: 74 } },
    { id: "unit-B-02", number: "B-02", status: "Coming Soon", isReady: false, price: "Rp970 Juta*", specs: { land: 62, building: 74 } },
    { id: "unit-B-03", number: "B-03", status: "Coming Soon", isReady: false, price: "Rp970 Juta*", specs: { land: 62, building: 74 } },
    { id: "unit-B-04", number: "B-04", status: "Coming Soon", isReady: false, price: "Rp1.24 Miliar*", specs: { land: 83, building: 89 } },
    { id: "unit-B-05", number: "B-05", status: "Coming Soon", isReady: false, price: "Rp1.29 Miliar*", specs: { land: 96, building: 74 } },
    { id: "unit-B-06", number: "B-06", status: "Coming Soon", isReady: false, price: "Rp1.16 Miliar*", specs: { land: 83, building: 74 } },
    { id: "unit-B-07", number: "B-07", status: "Coming Soon", isReady: false, price: "Rp920 Juta*", specs: { land: 62, building: 68 } },
    { id: "unit-C-01", number: "C-01", status: "Available", isReady: true, price: "Rp950 Juta*", specs: { land: 60, building: 74 } },
    { id: "unit-C-02", number: "C-02", status: "Available", isReady: true, price: "Rp950 Juta*", specs: { land: 60, building: 74 } },
    { id: "unit-C-03", number: "C-03", status: "Available", isReady: true, price: "Rp950 Juta*", specs: { land: 60, building: 74 } },
    { id: "unit-C-04", number: "C-04", status: "Available", isReady: true, price: "Rp950 Juta*", specs: { land: 60, building: 74 } },
    { id: "unit-C-05", number: "C-05", status: "Available", isReady: true, price: "Rp950 Juta*", specs: { land: 60, building: 74 } },
    { id: "unit-C-06", number: "C-06", status: "Available", isReady: true, price: "Rp950 Juta*", specs: { land: 60, building: 74 } },
    { id: "unit-C-07", number: "C-07", status: "Coming Soon", isReady: false, price: "Rp1.15 Miliar*", specs: { land: 72, building: 89 } },
    { id: "unit-C-08", number: "C-08", status: "Coming Soon", isReady: false, price: "Rp930 Juta*", specs: { land: 60, building: 70 } }
  ],

  gallery: [
    {
      id: "img-1",
      category: "living-room",
      title: "Ruang Tamu & Void Utama",
      desc: "Desain ruang tamu megah dengan plafon tinggi yang memberikan sirkulasi udara optimal dan pencahayaan alami melimpah.",
      image: "/assets/images/img1.webp",
      fallback: "/assets/images/img1.webp"
    },
    {
      id: "img-3",
      category: "living-room",
      title: "Area Makan Terbuka",
      desc: "Konsep open-concept layout yang luas, bersih, dan memancarkan kemewahan kontemporer.",
      image: "/assets/images/img3.webp",
      fallback: "/assets/images/img3.webp"
    },
    {
      id: "img-5",
      category: "living-room",
      title: "Tangga & Lorong Estetik",
      desc: "Setiap detail pengerjaan finishing tangga & lantai presisi tinggi menggunakan homogeneous tile premium.",
      image: "/assets/images/img5.webp",
      fallback: "/assets/images/img5.webp"
    },
    {
      id: "img-7",
      category: "bedroom",
      title: "Kamar Tidur Utama Suite",
      desc: "Tempat peristirahatan pribadi yang tenang di lantai dua, lengkap dengan jendela besar berpemandangan hijau.",
      image: "/assets/images/img7.webp",
      fallback: "/assets/images/img7.webp"
    },
    {
      id: "img-9",
      category: "bedroom",
      title: "Kamar Tidur Anak / Guest",
      desc: "Fungsionalitas ruang ekstra yang siap dijadikan kamar tidur anak, kamar tamu atau ruang kerja pribadi.",
      image: "/assets/images/img9.webp",
      fallback: "/assets/images/img9.webp"
    },
    {
      id: "img-11",
      category: "kitchen",
      title: "Dapur Modern Bersih",
      desc: "Kabinet dapur ringkas dengan material tahan panas dan mudah dibersihkan.",
      image: "/assets/images/img11.webp",
      fallback: "/assets/images/img11.webp"
    },
    {
      id: "img-13",
      category: "kitchen",
      title: "Area Masak & Dapur Belakang",
      desc: "Ventilasi sempurna langsung menghadap area luar terbuka untuk sirkulasi udara masakan yang lancar.",
      image: "/assets/images/img13.webp",
      fallback: "/assets/images/img13.webp"
    },
    {
      id: "img-15",
      category: "kitchen",
      title: "Detail Faucet / Kitchen Sink",
      desc: "Instalasi keran air jernih bersih dari sumur bor dalam jetpump.",
      image: "/assets/images/img15.webp",
      fallback: "/assets/images/img15.webp"
    },
    {
      id: "img-17",
      category: "bathroom",
      title: "Shower Room Elegan",
      desc: "Instalasi shower berkualitas tinggi dengan kesiapan pipa pemanas air mandi.",
      image: "/assets/images/img17.webp",
      fallback: "/assets/images/img17.webp"
    },
    {
      id: "img-19",
      category: "exterior",
      title: "Fasad Rumah Tropis Modern",
      desc: "Fasad modern minimalis tropis 2 lantai berkelas dengan paduan cat monokrom dan aksen kayu premium.",
      image: "/assets/images/img19.webp",
      fallback: "/assets/images/img19.webp"
    },
    {
      id: "img-21",
      category: "exterior",
      title: "Area Depan & Carport",
      desc: "Carport yang luas dengan perkerasan berpola rapi, cukup untuk parkir mobil SUV Anda.",
      image: "/assets/images/img21.webp",
      fallback: "/assets/images/img21.webp"
    }
  ],

  // Nearby landmarks & travel times
  nearbyFacilities: [
    {
      category: "Education",
      icon: "GraduationCap",
      places: [
        { name: "SD/SMP/SMA Mumtaza Islamic", time: "2 Menit (Satu Area Jl. Kalimantan)" },
        { name: "TK & SD Islam Al-Azhar Pamulang", time: "4 Menit" },
        { name: "Universitas Pamulang (UNPAM)", time: "7 Menit" },
        { name: "Global Islamic School", time: "10 Menit" }
      ]
    },
    {
      category: "Healthcare",
      icon: "HeartPulse",
      places: [
        { name: "RSUD Tangerang Selatan", time: "3 Menit (Jl. Pajajaran)" },
        { name: "RS Permata Pamulang", time: "6 Menit" },
        { name: "RS Vitalaya Pamulang", time: "7 Menit" },
        { name: "Klinik & Apotek 24 Jam terdekat", time: "1 Menit" }
      ]
    },
    {
      category: "Shopping",
      icon: "ShoppingBag",
      places: [
        { name: "Superindo Pamulang", time: "4 Menit" },
        { name: "Pamulang Square", time: "6 Menit" },
        { name: "Living Plaza Pamulang", time: "8 Menit" },
        { name: "Lotte Grosir Serpong", time: "12 Menit" }
      ]
    },
    {
      category: "Transportation",
      icon: "Car",
      places: [
        { name: "Gerbang Tol Pamulang (Cinere-Serpong)", time: "8 Menit" },
        { name: "Stasiun KRL Sudimara", time: "12 Menit" },
        { name: "Stasiun KRL Rawa Buntu", time: "15 Menit" },
        { name: "Halte Bus Transjakarta Pamulang", time: "6 Menit" }
      ]
    },
    {
      category: "Public & Leisure",
      icon: "Compass",
      places: [
        { name: "Masjid Agung Pamulang", time: "6 Menit" },
        { name: "Kantor Walikota Tangerang Selatan", time: "8 Menit" },
        { name: "Taman Kota Pamulang", time: "6 Menit" },
        { name: "Community Center Pamulang", time: "6 Menit" }
      ]
    }
  ],

  // Core Residential Cluster Amenities (10 Cards)
  facilities: [
    { name: "One Gate Community", desc: "Akses tunggal terkontrol untuk privasi & rasa aman keluarga.", icon: "Lock" },
    { name: "24/7 Security", desc: "Petugas keamanan terlatih bersertifikasi berjaga nonstop.", icon: "Shield" },
    { name: "Children's Playground", desc: "Taman hijau interaktif yang ramah & aman bagi tumbuh kembang anak.", icon: "Smile" },
    { name: "Wide Paved Roads", desc: "Jalan utama cluster lebar 7-8 meter dilapisi paving block premium.", icon: "Milestone" },
    { name: "CCTV Monitoring", desc: "Pengawasan kamera keamanan di seluruh titik strategis cluster.", icon: "Video" },
    { name: "Green Open Space", desc: "Taman terbuka dengan pohon tropis rindang yang asri dan menyejukkan.", icon: "Trees" },
    { name: "Underground Utilities", desc: "Instalasi kabel listrik bawah tanah bebas kusut & rapi secara estetika.", icon: "Zap" },
    { name: "Mosque Nearby", desc: "Masjid komplek yang bersih dan nyaman berjarak berjalan kaki singkat.", icon: "Moon" },
    { name: "Sport & Basketball Court", desc: "Fasilitas olahraga mini untuk menjaga kebugaran warga.", icon: "Dribbble" },
    { name: "Smart Key Door Lock", desc: "Keamanan modern pintu utama berbasis kartu pintar dan kode PIN.", icon: "Key" }
  ],

  // Customer FAQs (SEO Optimized)
  faqs: [
    {
      q: "Berapa minimal uang muka (DP) yang harus disiapkan?",
      a: "Tersedia promo DP khusus mulai dari 5% hingga 10% yang bisa diangsur, atau bahkan DP 0% (Syarat dan Ketentuan berlaku). Hubungi marketing kami via WhatsApp untuk mendapatkan simulasi cicilan resmi terupdate."
    },
    {
      q: "Apakah bisa mengajukan pembelian melalui KPR?",
      a: "Sangat bisa. Saat ini Nara Home Pamulang bekerja sama dengan Bank Syariah Indonesia (BSI) dan Bank Tabungan Negara (BTN) untuk memudahkan pengajuan KPR Anda dengan proses yang dibantu penuh oleh tim kami."
    },
    {
      q: "Berapa sisa unit yang tersedia saat ini?",
      a: "Nara Home Pamulang adalah cluster eksklusif yang hanya terdiri dari 22 Unit secara keseluruhan. Saat ini unit-unit di Blok C (C-01 hingga C-06) telah dibuka dan siap dipilih. Untuk mengetahui kavling terbaik yang masih tersedia, silakan segera jadwalkan kunjungan site visit."
    },
    {
      q: "Bagaimana akses transportasi terdekat dari Nara Home Pamulang?",
      a: "Sangat strategis! Kami hanya berjarak 8 menit dari Gerbang Tol Pamulang (Tol Serpong-Cinere) dan sekitar 12 menit berkendara menuju Stasiun KRL Sudimara yang menghubungkan langsung ke pusat bisnis Sudirman Jakarta."
    },
    {
      q: "Bagaimana cara memesan unit atau melakukan booking?",
      a: "Cukup dengan Booking Fee Rp5 Juta (Refundable sesuai ketentuan), Anda sudah bisa mengamankan nomor kavling pilihan Anda. Langkah pertama adalah menghubungi kami melalui WhatsApp untuk menjadwalkan kunjungan show unit."
    }
  ],

  // Imaginary/fictional testimonials focusing on survey, design, and location impressions (no buyer/resident claims)
  testimonials: [
    {
      name: "Andini & Rangga",
      role: "Keluarga Muda, Pengunjung Site Visit",
      text: "Sangat kagum saat pertama kali berkunjung ke lokasi Nara Home. Desain rumah 2 lantainya sangat modern dengan tata ruang yang lapang dan fungsional untuk keluarga kecil. Lokasinya juga strategis sekali, dekat ke area sekolah dan hanya beberapa menit menuju kampus UNPAM.",
      avatar: "AR"
    },
    {
      name: "Budi Hermawan",
      role: "Wiraswasta, Pengamat Properti",
      text: "Nara Home menawarkan spesifikasi material bangunan yang sangat kokoh dan berkualitas tinggi di kelasnya. Konsep arsitektur tropis modernnya terlihat menawan, ditambah suasananya yang tenang meskipun dekat dari jalan raya utama Pamulang.",
      avatar: "BH"
    },
    {
      name: "Citra Lestari",
      role: "Karyawan Swasta, Peminat Desain Modern",
      text: "Suka sekali dengan konsep One Gate System dan sistem pencahayaan alami di setiap sudut ruangan yang kami lihat saat survey. Tata ruangnya dirancang apik untuk sirkulasi udara yang optimal, serta akses transportasi ke Tol Pamulang juga sangat mudah.",
      avatar: "CL"
    }
  ]
};
