// Product data for all categories with subcategories, crops, and brands

export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  subcategory: string;
  crops?: string[];
  brand?: string;
}

export interface Subcategory {
  slug: string;
  title: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  subcategories: Subcategory[];
}

export const crops = [
  "Buğday",
  "Mısır",
  "Ayçiçeği",
  "Arpa",
  "Kanola",
  "Domates",
  "Biber",
  "Patlıcan",
  "Salatalık",
  "Kabak",
  "Fasulye",
  "Patates",
];

export const brands = {
  "zirai-ilac": ["Syngenta", "Bayer", "BASF", "Corteva", "Adama", "FMC", "UPL", "Hektaş"],
  "gubre": ["Toros", "İGSAŞ", "Gemlik", "Dr. Tarsa", "Seleda", "Bontera"],
  "tohum": ["Pioneer", "Dekalb", "LG", "Syngenta", "Seminis", "Sakata", "May"],
  "hayvan-yemleri": ["Optima", "Özlem Yem", "Maysan"],
  "evcil-hayvan-mamalari": ["Lider Pet Food"],
};

export const categories: Category[] = [
  {
    slug: "zirai-ilac",
    title: "Zirai İlaç",
    description: "Bitki sağlığını koruyan, ruhsatlı ve güvenilir zirai ilaçlar.",
    subcategories: [
      { slug: "fungusit", title: "Fungusit (Mantar İlaçları)" },
      { slug: "insektisit", title: "İnsektisit (Böcek İlaçları)" },
      { slug: "herbisit", title: "Herbisit (Yabancı Ot İlaçları)" },
      { slug: "akarisit", title: "Akarisit (Kırmızı Örümcek)" },
      { slug: "nematisit", title: "Nematisit (Toprak Zararlısı)" },
      { slug: "rodentisit", title: "Rodentisit (Kemirgen)" },
    ],
  },
  {
    slug: "gubre",
    title: "Gübre",
    description: "Toprağınızın besin değerini artıran, verim odaklı gübre çeşitlerimiz.",
    subcategories: [
      { slug: "taban-gubre", title: "Taban Gübresi" },
      { slug: "ust-gubre", title: "Üst Gübre" },
      { slug: "yaprak-gubre", title: "Yaprak Gübresi" },
      { slug: "organomineral", title: "Organomineral Gübre" },
    ],
  },
  {
    slug: "tohum",
    title: "Tohum",
    description: "Bölgeye uygun, sertifikalı ve yüksek verimli tohum çeşitleri.",
    subcategories: [
      { slug: "tarla-bitkileri", title: "Tarla Bitkileri" },
      { slug: "sebze", title: "Sebze Tohumları" },
      { slug: "sera", title: "Sera Tohumları" },
    ],
  },
  {
    slug: "hayvan-yemleri",
    title: "Hayvan Yemleri",
    description: "Büyükbaş, küçükbaş ve kanatlı hayvanlar için kaliteli yem ürünleri.",
    subcategories: [
      { slug: "buyukbas", title: "Büyükbaş Yemi" },
      { slug: "kucukbas", title: "Küçükbaş Yemi" },
      { slug: "kanatli", title: "Kanatlı Yemi" },
    ],
  },
  {
    slug: "evcil-hayvan-mamalari",
    title: "Evcil Hayvan Mamaları",
    description: "Kedi ve köpekler için besleyici ve güvenilir mama çeşitleri.",
    subcategories: [
      { slug: "kedi", title: "Kedi Mamaları" },
      { slug: "kopek", title: "Köpek Mamaları" },
    ],
  },
];

export const products: Product[] = [
  // Zirai İlaç - Fungusit (5 products)
  {
    id: "ilac-f1",
    name: "Score 250 EC - Külleme",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "fungusit",
    crops: ["Buğday", "Arpa", "Domates"],
    brand: "Syngenta",
  },
  {
    id: "ilac-f2",
    name: "Tilt 250 EC - Pas Hastalığı",
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "fungusit",
    crops: ["Buğday", "Arpa"],
    brand: "Syngenta",
  },
  {
    id: "ilac-f3",
    name: "Folicur EW 250 - Mildiyö",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "fungusit",
    crops: ["Ayçiçeği", "Kanola"],
    brand: "Bayer",
  },
  {
    id: "ilac-f4",
    name: "Antracol WP 70 - Antraknoz",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "fungusit",
    crops: ["Domates", "Biber", "Patlıcan"],
    brand: "Bayer",
  },
  {
    id: "ilac-f5",
    name: "Cabrio Top - Genel Mantar",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "fungusit",
    crops: ["Domates", "Salatalık", "Biber"],
    brand: "BASF",
  },

  // Zirai İlaç - İnsektisit (5 products)
  {
    id: "ilac-i1",
    name: "Karate Zeon - Yaprak Biti",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "insektisit",
    crops: ["Buğday", "Mısır", "Ayçiçeği"],
    brand: "Syngenta",
  },
  {
    id: "ilac-i2",
    name: "Confidor 200 SL - Beyaz Sinek",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "insektisit",
    crops: ["Domates", "Biber", "Patlıcan"],
    brand: "Bayer",
  },
  {
    id: "ilac-i3",
    name: "Decis Mega - Meyve Kurdu",
    image: "https://images.unsplash.com/photo-1595351475754-8a520e9f6a45?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "insektisit",
    crops: ["Domates", "Biber"],
    brand: "Bayer",
  },
  {
    id: "ilac-i4",
    name: "Affirm - Yaprak Güvesi",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "insektisit",
    crops: ["Domates", "Salatalık"],
    brand: "Syngenta",
  },
  {
    id: "ilac-i5",
    name: "Coragen - Trips",
    image: "https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "insektisit",
    crops: ["Biber", "Patlıcan", "Domates"],
    brand: "FMC",
  },

  // Zirai İlaç - Herbisit (5 products)
  {
    id: "ilac-h1",
    name: "Roundup Power Max - Total",
    image: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "herbisit",
    crops: ["Buğday", "Mısır", "Ayçiçeği"],
    brand: "Bayer",
  },
  {
    id: "ilac-h2",
    name: "Attribut - Dar Yapraklı",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "herbisit",
    crops: ["Buğday", "Arpa"],
    brand: "Bayer",
  },
  {
    id: "ilac-h3",
    name: "Mustang - Geniş Yapraklı",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "herbisit",
    crops: ["Buğday", "Arpa", "Mısır"],
    brand: "Corteva",
  },
  {
    id: "ilac-h4",
    name: "Dual Gold - Mısır Otu",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "herbisit",
    crops: ["Mısır", "Ayçiçeği"],
    brand: "Syngenta",
  },
  {
    id: "ilac-h5",
    name: "Pulsar Plus - Ayçiçeği",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "herbisit",
    crops: ["Ayçiçeği"],
    brand: "BASF",
  },

  // Zirai İlaç - Akarisit (3 products)
  {
    id: "ilac-a1",
    name: "Envidor 240 SC",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "akarisit",
    crops: ["Domates", "Biber", "Patlıcan"],
    brand: "Bayer",
  },
  {
    id: "ilac-a2",
    name: "Vertimec 018 EC",
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "akarisit",
    crops: ["Domates", "Salatalık"],
    brand: "Syngenta",
  },
  {
    id: "ilac-a3",
    name: "Oberon 240 SC",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "akarisit",
    crops: ["Biber", "Domates"],
    brand: "Bayer",
  },

  // Zirai İlaç - Nematisit (2 products)
  {
    id: "ilac-n1",
    name: "Vydate 10 L",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "nematisit",
    crops: ["Domates", "Patates", "Biber"],
    brand: "Corteva",
  },
  {
    id: "ilac-n2",
    name: "Velum Prime",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "nematisit",
    crops: ["Domates", "Patlıcan"],
    brand: "Bayer",
  },

  // Zirai İlaç - Rodentisit (2 products)
  {
    id: "ilac-r1",
    name: "Storm Blok - Fare",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "rodentisit",
    brand: "BASF",
  },
  {
    id: "ilac-r2",
    name: "Ratimor Wax",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    category: "zirai-ilac",
    subcategory: "rodentisit",
    brand: "UPL",
  },

  // Gübre - Taban Gübresi (3 products)
  {
    id: "gubre-t1",
    name: "DAP 18-46-0",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    category: "gubre",
    subcategory: "taban-gubre",
    crops: ["Buğday", "Arpa", "Mısır", "Ayçiçeği"],
    brand: "Toros",
  },
  {
    id: "gubre-t2",
    name: "NPK 15-15-15 Kompoze",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop",
    category: "gubre",
    subcategory: "taban-gubre",
    crops: ["Buğday", "Mısır", "Ayçiçeği"],
    brand: "İGSAŞ",
  },
  {
    id: "gubre-t3",
    name: "TSP Triple Süper Fosfat",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c16?w=400&h=400&fit=crop",
    category: "gubre",
    subcategory: "taban-gubre",
    crops: ["Buğday", "Arpa"],
    brand: "Gemlik",
  },

  // Gübre - Üst Gübre (3 products)
  {
    id: "gubre-u1",
    name: "Üre %46 Azot",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop",
    category: "gubre",
    subcategory: "ust-gubre",
    crops: ["Buğday", "Mısır", "Ayçiçeği"],
    brand: "Toros",
  },
  {
    id: "gubre-u2",
    name: "Amonyum Sülfat %21",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c16?w=400&h=400&fit=crop",
    category: "gubre",
    subcategory: "ust-gubre",
    crops: ["Buğday", "Arpa", "Mısır"],
    brand: "İGSAŞ",
  },
  {
    id: "gubre-u3",
    name: "CAN %26 Azot",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e7?w=400&h=400&fit=crop",
    category: "gubre",
    subcategory: "ust-gubre",
    crops: ["Buğday", "Arpa"],
    brand: "Toros",
  },

  // Gübre - Yaprak Gübresi (2 products)
  {
    id: "gubre-y1",
    name: "Brexil Mix - Mikro Element",
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=400&fit=crop",
    category: "gubre",
    subcategory: "yaprak-gubre",
    crops: ["Domates", "Biber", "Salatalık"],
    brand: "Dr. Tarsa",
  },
  {
    id: "gubre-y2",
    name: "Fertiactyl - Aminoasit",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=400&fit=crop",
    category: "gubre",
    subcategory: "yaprak-gubre",
    crops: ["Domates", "Biber", "Patlıcan"],
    brand: "Seleda",
  },

  // Gübre - Organomineral (2 products)
  {
    id: "gubre-o1",
    name: "Organik Plus 5-5-5",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=400&fit=crop",
    category: "gubre",
    subcategory: "organomineral",
    crops: ["Domates", "Biber", "Salatalık"],
    brand: "Bontera",
  },
  {
    id: "gubre-o2",
    name: "Hümik Asit Granül",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop",
    category: "gubre",
    subcategory: "organomineral",
    crops: ["Buğday", "Mısır", "Ayçiçeği"],
    brand: "Seleda",
  },

  // Tohum - Tarla Bitkileri (4 products)
  {
    id: "tohum-tf1",
    name: "Pioneer PR64LE25 Ayçiçeği",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=400&fit=crop",
    category: "tohum",
    subcategory: "tarla-bitkileri",
    crops: ["Ayçiçeği"],
    brand: "Pioneer",
  },
  {
    id: "tohum-tf2",
    name: "Dekalb DKC 6980 Mısır",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=400&fit=crop",
    category: "tohum",
    subcategory: "tarla-bitkileri",
    crops: ["Mısır"],
    brand: "Dekalb",
  },
  {
    id: "tohum-tf3",
    name: "LG Armagnac Buğday",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop",
    category: "tohum",
    subcategory: "tarla-bitkileri",
    crops: ["Buğday"],
    brand: "LG",
  },
  {
    id: "tohum-tf4",
    name: "Syngenta SY Kardio Arpa",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&h=400&fit=crop",
    category: "tohum",
    subcategory: "tarla-bitkileri",
    crops: ["Arpa"],
    brand: "Syngenta",
  },

  // Tohum - Sebze (4 products)
  {
    id: "tohum-s1",
    name: "Seminis Domates - Roma",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&h=400&fit=crop",
    category: "tohum",
    subcategory: "sebze",
    crops: ["Domates"],
    brand: "Seminis",
  },
  {
    id: "tohum-s2",
    name: "Sakata Biber - Kapya",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop",
    category: "tohum",
    subcategory: "sebze",
    crops: ["Biber"],
    brand: "Sakata",
  },
  {
    id: "tohum-s3",
    name: "Syngenta Salatalık F1",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=400&fit=crop",
    category: "tohum",
    subcategory: "sebze",
    crops: ["Salatalık"],
    brand: "Syngenta",
  },
  {
    id: "tohum-s4",
    name: "May Patlıcan Hibrit",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=400&h=400&fit=crop",
    category: "tohum",
    subcategory: "sebze",
    crops: ["Patlıcan"],
    brand: "May",
  },

  // Tohum - Sera (3 products)
  {
    id: "tohum-sr1",
    name: "Seminis Sera Domates",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&h=400&fit=crop",
    category: "tohum",
    subcategory: "sera",
    crops: ["Domates"],
    brand: "Seminis",
  },
  {
    id: "tohum-sr2",
    name: "Sakata Sera Biber",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop",
    category: "tohum",
    subcategory: "sera",
    crops: ["Biber"],
    brand: "Sakata",
  },
  {
    id: "tohum-sr3",
    name: "Syngenta Sera Salatalık",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=400&fit=crop",
    category: "tohum",
    subcategory: "sera",
    crops: ["Salatalık"],
    brand: "Syngenta",
  },

  // Hayvan Yemleri - Büyükbaş (3 products)
  {
    id: "yem-b1",
    name: "Besi Yemi Premium",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
    subcategory: "buyukbas",
    brand: "Optima",
  },
  {
    id: "yem-b2",
    name: "Süt İneği Yemi",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
    subcategory: "buyukbas",
    brand: "Özlem Yem",
  },
  {
    id: "yem-b3",
    name: "Buzağı Başlangıç",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
    subcategory: "buyukbas",
    brand: "Maysan",
  },

  // Hayvan Yemleri - Küçükbaş (2 products)
  {
    id: "yem-k1",
    name: "Koyun Besi Yemi",
    image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
    subcategory: "kucukbas",
    brand: "Optima",
  },
  {
    id: "yem-k2",
    name: "Keçi Yemi",
    image: "https://images.unsplash.com/photo-1524024973431-2ad916746881?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
    subcategory: "kucukbas",
    brand: "Özlem Yem",
  },

  // Hayvan Yemleri - Kanatlı (3 products)
  {
    id: "yem-kn1",
    name: "Yumurta Tavuğu Yemi",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
    subcategory: "kanatli",
    brand: "Optima",
  },
  {
    id: "yem-kn2",
    name: "Etlik Tavuk Yemi",
    image: "https://images.unsplash.com/photo-1569288063477-c6681b913231?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
    subcategory: "kanatli",
    brand: "Maysan",
  },
  {
    id: "yem-kn3",
    name: "Güvercin Yemi Mix",
    image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
    subcategory: "kanatli",
    brand: "Özlem Yem",
  },

  // Evcil Hayvan Mamaları - Kedi (4 products)
  {
    id: "mama-k1",
    name: "Yetişkin Kedi Maması",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
    subcategory: "kedi",
    brand: "Lider Pet Food",
  },
  {
    id: "mama-k2",
    name: "Yavru Kedi Maması",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
    subcategory: "kedi",
    brand: "Lider Pet Food",
  },
  {
    id: "mama-k3",
    name: "Kısır Kedi Maması",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
    subcategory: "kedi",
    brand: "Lider Pet Food",
  },
  {
    id: "mama-k4",
    name: "Kedi Ödül Maması",
    image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
    subcategory: "kedi",
    brand: "Lider Pet Food",
  },

  // Evcil Hayvan Mamaları - Köpek (4 products)
  {
    id: "mama-kp1",
    name: "Yetişkin Köpek Maması",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
    subcategory: "kopek",
    brand: "Lider Pet Food",
  },
  {
    id: "mama-kp2",
    name: "Yavru Köpek Maması",
    image: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
    subcategory: "kopek",
    brand: "Lider Pet Food",
  },
  {
    id: "mama-kp3",
    name: "Büyük Irk Köpek Maması",
    image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
    subcategory: "kopek",
    brand: "Lider Pet Food",
  },
  {
    id: "mama-kp4",
    name: "Köpek Ödül Maması",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
    subcategory: "kopek",
    brand: "Lider Pet Food",
  },
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter((product) => product.category === categorySlug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};

export const getBrandsByCategory = (categorySlug: string): string[] => {
  return brands[categorySlug as keyof typeof brands] || [];
};

export const getCropsForCategory = (categorySlug: string): string[] => {
  const categoryProducts = getProductsByCategory(categorySlug);
  const uniqueCrops = new Set<string>();
  categoryProducts.forEach(product => {
    product.crops?.forEach(crop => uniqueCrops.add(crop));
  });
  return Array.from(uniqueCrops).sort();
};
