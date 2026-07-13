/**
 * Nara Home Pamulang - Core Property Configurations
 * Customize prices, contact info, specifications, and content here.
 */

export const PROPERTY_CONFIG = {
  name: "Nara Home Pamulang",
  tagline: "Hunian Modern di Jantung Pamulang",
  subtitle: "Rumah 2 Lantai Modern Mulai Rp950 Jutaan dengan Lokasi Strategis di Tangerang Selatan.",
  developer: "Tricore Indonesia",
  launchPrice: "Rp950 Juta*",
  whatsappNumber: "+628123456789", // Change this to your real WhatsApp number
  whatsappMessage: "Halo Nara Home, saya tertarik untuk bertanya tentang unit dan booking site visit.",
  email: "info@tricore.co.id",
  googleMapsIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.590212356515!2d106.7118314!3d-6.3174151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTknMDIuNyJTIDEwNsKwNDInNDIuNiJF!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid", // Map embed URL for Benda Baru Pamulang area
  googleMapsDirectionsUrl: "https://maps.google.com/?q=-6.3174151,106.7118314",
  address: "Jl. Kalimantan No.24, Benda Baru, Pamulang, Tangerang Selatan, Banten 15418",
  totalUnits: 22,
  showHousesCount: 6,

  // Floating CTA WhatsApp link
  whatsappUrl: "https://wa.me/628123456789?text=Halo%20Nara%20Home%20Pamulang%2C%20saya%20tertarik%20untuk%20info%20lebih%20lanjut%20dan%20booking%20site%20visit.",

  // House Specifications
  specs: {
    buildingArea: 74, // m²
    landArea: 60, // m²
    bedrooms: 3,
    bathrooms: 2,
    carport: 1, // car
    floors: 2,
    electricity: "2200 VA",
    waterSupply: "Jetpump / Sumur Bor (Sangat Jernih)",
    foundation: "Cakar Ayam & Beton Bertulang",
    structure: "Bata Merah / Bata Ringan (Plaster + Aci)",
    roof: "Rangka Baja Ringan & Genteng Beton",
    floorFinishing: "Homogeneous Tile 60x60 Premium"
  },

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
  ],

  // Gallery categorization (with placeholder paths generated or fallbacks)
  logo: "/assets/images/logo_narahome-removebg-preview.webp",
  heroImage: "/assets/images/img15.webp",
  facade3D: "/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0001.webp",
  
  // Multi-page PDF layouts
  facade3DPages: [
    "/src/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0001.webp",
    "/src/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0002.webp",
    "/src/assets/images/1-PDF-3D-FACADE-_-SITE-PROJECT-CLUSTER-PAMULANG_-TANGERANG-SELATAN-BAPAK-RAMLI_page-0003.webp",
    "/src/assets/images/1-PDF-3D-FACADE-_-SITE-PROJECT-CLUSTER-PAMULANG_-TANGERANG-SELATAN-BAPAK-RAMLI_page-0004.webp",
    "/src/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp",
    "/src/assets/images/1-PDF-3D-FACADE-_-SITE-PROJECT-CLUSTER-PAMULANG_-TANGERANG-SELATAN-BAPAK-RAMLI_page-0006.webp",
    "/src/assets/images/1-PDF-3D-FACADE-_-SITE-PROJECT-CLUSTER-PAMULANG_-TANGERANG-SELATAN-BAPAK-RAMLI_page-0007.webp",
    "/src/assets/images/1 PDF 3D FACADE & SITE - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0008.webp"
  ],

  denah3DPages: [
    "/src/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0001.webp",
    "/src/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0002.webp",
    "/src/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0003.webp",
    "/src/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0004.webp",
    "/src/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0005.webp",
    "/src/assets/images/1 PDF 3D DENAH - PROJECT CLUSTER - PAMULANG, TANGERANG SELATAN - BAPAK RAMLI_page-0006.webp"
  ],
  
  // Interactive Site Map list of all 22 units
  units: [
    { id: "unit-A-01", number: "A-01", status: "Available", isReady: false, price: "Rp1.15 Miliar*", specs: { land: 72, building: 89 } },
    { id: "unit-A-02", number: "A-02", status: "Sold", isReady: false, price: "Rp1.18 Miliar*", specs: { land: 75, building: 89 } },
    { id: "unit-A-03", number: "A-03", status: "Available", isReady: false, price: "Rp995 Juta*", specs: { land: 66, building: 74 } },
    { id: "unit-A-04", number: "A-04", status: "Sold", isReady: false, price: "Rp1.02 Miliar*", specs: { land: 68, building: 74 } },
    { id: "unit-A-05", number: "A-05", status: "Available", isReady: false, price: "Rp1.04 Miliar*", specs: { land: 69, building: 74 } },
    { id: "unit-A-06", number: "A-06", status: "Reserved", isReady: false, price: "Rp1.01 Miliar*", specs: { land: 67, building: 74 } },
    { id: "unit-A-07", number: "A-07", status: "Available", isReady: false, price: "Rp1.22 Miliar*", specs: { land: 89, building: 74 } },
    { id: "unit-B-01", number: "B-01", status: "Sold", isReady: false, price: "Rp970 Juta*", specs: { land: 62, building: 74 } },
    { id: "unit-B-02", number: "B-02", status: "Available", isReady: false, price: "Rp970 Juta*", specs: { land: 62, building: 74 } },
    { id: "unit-B-03", number: "B-03", status: "Sold", isReady: false, price: "Rp970 Juta*", specs: { land: 62, building: 74 } },
    { id: "unit-B-04", number: "B-04", status: "Available", isReady: false, price: "Rp1.24 Miliar*", specs: { land: 83, building: 89 } },
    { id: "unit-B-05", number: "B-05", status: "Available", isReady: false, price: "Rp1.29 Miliar*", specs: { land: 96, building: 74 } },
    { id: "unit-B-06", number: "B-06", status: "Reserved", isReady: false, price: "Rp1.16 Miliar*", specs: { land: 83, building: 74 } },
    { id: "unit-B-07", number: "B-07", status: "Sold", isReady: false, price: "Rp920 Juta*", specs: { land: 62, building: 68 } },
    { id: "unit-C-01", number: "C-01", status: "Available", isReady: true, price: "Rp950 Juta*", specs: { land: 60, building: 74 } },
    { id: "unit-C-02", number: "C-02", status: "Sold", isReady: true, price: "Rp950 Juta*", specs: { land: 60, building: 74 } },
    { id: "unit-C-03", number: "C-03", status: "Available", isReady: true, price: "Rp950 Juta*", specs: { land: 60, building: 74 } },
    { id: "unit-C-04", number: "C-04", status: "Available", isReady: true, price: "Rp950 Juta*", specs: { land: 60, building: 74 } },
    { id: "unit-C-05", number: "C-05", status: "Reserved", isReady: true, price: "Rp950 Juta*", specs: { land: 60, building: 74 } },
    { id: "unit-C-06", number: "C-06", status: "Sold", isReady: true, price: "Rp950 Juta*", specs: { land: 60, building: 74 } },
    { id: "unit-C-07", number: "C-07", status: "Available", isReady: false, price: "Rp1.15 Miliar*", specs: { land: 72, building: 89 } },
    { id: "unit-C-08", number: "C-08", status: "Sold", isReady: false, price: "Rp930 Juta*", specs: { land: 60, building: 70 } }
  ],

  gallery: [
    {
      id: "img-1",
      category: "living-room",
      title: "Ruang Tamu & Void Utama",
      desc: "Desain ruang tamu megah dengan plafon tinggi yang memberikan sirkulasi udara optimal dan pencahayaan alami melimpah.",
      image: "/src/assets/images/img1.webp",
      fallback: "/src/assets/images/img1.webp"
    },
    {
      id: "img-3",
      category: "living-room",
      title: "Area Makan Terbuka",
      desc: "Konsep open-concept layout yang luas, bersih, dan memancarkan kemewahan kontemporer.",
      image: "/src/assets/images/img3.webp",
      fallback: "/src/assets/images/img3.webp"
    },
    {
      id: "img-5",
      category: "living-room",
      title: "Tangga & Lorong Estetik",
      desc: "Setiap detail pengerjaan finishing tangga & lantai presisi tinggi menggunakan homogeneous tile premium.",
      image: "/src/assets/images/img5.webp",
      fallback: "/src/assets/images/img5.webp"
    },
    {
      id: "img-7",
      category: "bedroom",
      title: "Kamar Tidur Utama Suite",
      desc: "Tempat peristirahatan pribadi yang tenang di lantai dua, lengkap dengan jendela besar berpemandangan hijau.",
      image: "/src/assets/images/img7.webp",
      fallback: "/src/assets/images/img7.webp"
    },
    {
      id: "img-9",
      category: "bedroom",
      title: "Kamar Tidur Anak / Guest",
      desc: "Fungsionalitas ruang ekstra yang siap dijadikan kamar tidur anak, kamar tamu atau ruang kerja pribadi.",
      image: "/src/assets/images/img9.webp",
      fallback: "/src/assets/images/img9.webp"
    },
    {
      id: "img-11",
      category: "kitchen",
      title: "Dapur Modern Bersih",
      desc: "Kabinet dapur ringkas dengan material tahan panas dan mudah dibersihkan.",
      image: "/src/assets/images/img11.webp",
      fallback: "/src/assets/images/img11.webp"
    },
    {
      id: "img-13",
      category: "kitchen",
      title: "Area Masak & Dapur Belakang",
      desc: "Ventilasi sempurna langsung menghadap area luar terbuka untuk sirkulasi udara masakan yang lancar.",
      image: "/src/assets/images/img13.webp",
      fallback: "/src/assets/images/img13.webp"
    },
    {
      id: "img-15",
      category: "kitchen",
      title: "Detail Faucet / Kitchen Sink",
      desc: "Instalasi keran air jernih bersih dari sumur bor dalam jetpump.",
      image: "/src/assets/images/img15.webp",
      fallback: "/src/assets/images/img15.webp"
    },
    {
      id: "img-17",
      category: "bathroom",
      title: "Shower Room Elegan",
      desc: "Instalasi shower berkualitas tinggi dengan kesiapan pipa pemanas air mandi.",
      image: "/src/assets/images/img17.webp",
      fallback: "/src/assets/images/img17.webp"
    },
    {
      id: "img-19",
      category: "exterior",
      title: "Fasad Rumah Tropis Modern",
      desc: "Fasad modern minimalis tropis 2 lantai berkelas dengan paduan cat monokrom dan aksen kayu premium.",
      image: "/src/assets/images/img19.webp",
      fallback: "/src/assets/images/img19.webp"
    },
    {
      id: "img-21",
      category: "exterior",
      title: "Area Depan & Carport",
      desc: "Carport yang luas dengan perkerasan berpola rapi, cukup untuk parkir mobil SUV Anda.",
      image: "/src/assets/images/img21.webp",
      fallback: "/src/assets/images/img21.webp"
    }
  ],

  // Nearby landmarks & travel times
  nearbyFacilities: [
    {
      category: "Education",
      icon: "GraduationCap",
      places: [
        { name: "Universitas Pamulang (UNPAM)", time: "5 Menit" },
        { name: "Global Islamic School", time: "10 Menit" },
        { name: "SD/SMP/SMA Mumtaza Islamic", time: "8 Menit" },
        { name: "TK & SD Islam Al-Azhar Pamulang", time: "7 Menit" }
      ]
    },
    {
      category: "Healthcare",
      icon: "HeartPulse",
      places: [
        { name: "RSUD Tangerang Selatan", time: "6 Menit" },
        { name: "RS Permata Pamulang", time: "4 Menit" },
        { name: "RS Vitalaya Pamulang", time: "8 Menit" },
        { name: "Klinik & Apotek 24 Jam terdekat", time: "2 Menit" }
      ]
    },
    {
      category: "Shopping",
      icon: "ShoppingBag",
      places: [
        { name: "Pamulang Square", time: "7 Menit" },
        { name: "Lotte Grosir Serpong", time: "12 Menit" },
        { name: "Living Plaza Pamulang", time: "9 Menit" },
        { name: "Superindo Pamulang", time: "5 Menit" }
      ]
    },
    {
      category: "Transportation",
      icon: "Car",
      places: [
        { name: "Gerbang Tol Pamulang (Cinere-Serpong)", time: "10 Menit" },
        { name: "Stasiun KRL Sudimara", time: "15 Menit" },
        { name: "Stasiun KRL Rawa Buntu", time: "18 Menit" },
        { name: "Halte Bus Transjakarta Pamulang", time: "8 Menit" }
      ]
    },
    {
      category: "Worship & Leisure",
      icon: "Compass",
      places: [
        { name: "Masjid Agung Pamulang", time: "5 Menit" },
        { name: "Gereja Santo Barnabas Pamulang", time: "10 Menit" },
        { name: "Taman Kota Pamulang", time: "6 Menit" },
        { name: "Community Center Pamulang", time: "5 Menit" }
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
      a: "Sangat bisa. Nara Home Pamulang bekerja sama dengan bank-bank nasional terkemuka (seperti Bank Syariah Indonesia, Mandiri, BCA, BTN) untuk memudahkan pengajuan KPR Anda dengan proses yang dibantu penuh oleh tim kami."
    },
    {
      q: "Berapa sisa unit yang tersedia saat ini?",
      a: "Nara Home Pamulang adalah cluster eksklusif yang hanya terdiri dari 19 Unit secara keseluruhan. Saat ini beberapa unit telah terjual dan dihuni. Untuk mengetahui kavling terbaik yang masih tersedia, silakan segera jadwalkan kunjungan site visit."
    },
    {
      q: "Bagaimana akses transportasi terdekat dari Nara Home Pamulang?",
      a: "Sangat strategis! Kami hanya berjarak 10 menit dari Gerbang Tol Pamulang (Tol Serpong-Cinere) dan sekitar 15 menit berkendara menuju Stasiun KRL Sudimara yang menghubungkan langsung ke pusat bisnis Sudirman Jakarta."
    },
    {
      q: "Bagaimana cara memesan unit atau melakukan booking?",
      a: "Cukup dengan Booking Fee Rp5 Juta (Refundable sesuai ketentuan), Anda sudah bisa mengamankan nomor kavling pilihan Anda. Langkah pertama adalah menghubungi kami melalui WhatsApp untuk menjadwalkan kunjungan show unit."
    }
  ],

  // Real-world look-and-feel testimonials
  testimonials: [
    {
      name: "Andini & Rangga",
      role: "Keluarga Muda, Pemilik Unit Kavling 05",
      text: "Kami sangat bersyukur menemukan Nara Home. Setelah berbulan-bulan mencari rumah di Jakarta yang harganya luar biasa mahal, di sini kami dapat rumah 2 lantai yang sangat modern, lingkungannya aman untuk anak kami yang balita, dan ke UNPAM cuma 5 menit saja!",
      avatar: "AR"
    },
    {
      name: "Bambang Wijaya",
      role: "Wiraswasta, Pembeli untuk Investasi",
      text: "Pamulang adalah area dengan kenaikan nilai lahan tercepat di Tangerang Selatan saat ini. Unit Nara Home memiliki spesifikasi material premium (bata merah, pondasi kokoh) yang jarang sekali ditemukan di rumah harga di bawah 1 miliar. Sangat prospektif untuk instrumen investasi sewa.",
      avatar: "BW"
    },
    {
      name: "dr. Shinta Amelia",
      role: "Dokter Spesialis Anak, Penghuni Nara Home",
      text: "Akses ke jalan utama Pamulang sangat dekat tetapi di dalam cluster tetap sangat tenang dan bebas bising. Keamanan One Gate System-nya benar-benar berfungsi dengan baik, petugas satpam ramah dan sigap. Kualitas bangunan juga jempolan, tidak ada retak rambut sama sekali.",
      avatar: "SA"
    }
  ]
};
