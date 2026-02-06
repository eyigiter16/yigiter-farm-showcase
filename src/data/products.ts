// Product data for all categories

export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: "gubre",
    title: "Gübre",
    description: "Toprağınızın besin değerini artıran, verim odaklı gübre çeşitlerimiz.",
  },
  {
    slug: "zirai-ilac",
    title: "Zirai İlaç",
    description: "Bitki sağlığını koruyan, ruhsatlı ve güvenilir zirai ilaçlar.",
  },
  {
    slug: "tohum",
    title: "Tohum",
    description: "Bölgeye uygun, sertifikalı ve yüksek verimli tohum çeşitleri.",
  },
  {
    slug: "hayvan-yemleri",
    title: "Hayvan Yemleri",
    description: "Büyükbaş, küçükbaş ve kanatlı hayvanlar için kaliteli yem ürünleri.",
  },
  {
    slug: "evcil-hayvan-mamalari",
    title: "Evcil Hayvan Mamaları",
    description: "Kedi ve köpekler için besleyici ve güvenilir mama çeşitleri.",
  },
];

export const products: Product[] = [
  // Gübre (8 products)
  {
    id: "gubre-1",
    name: "DAP Gübre (18-46-0)",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    category: "gubre",
  },
  {
    id: "gubre-2",
    name: "Üre Gübre (%46 Azot)",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop",
    category: "gubre",
  },
  {
    id: "gubre-3",
    name: "Amonyum Sülfat (AS)",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c16?w=400&h=400&fit=crop",
    category: "gubre",
  },
  {
    id: "gubre-4",
    name: "NPK Kompoze (15-15-15)",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop",
    category: "gubre",
  },
  {
    id: "gubre-5",
    name: "Potasyum Sülfat",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop",
    category: "gubre",
  },
  {
    id: "gubre-6",
    name: "Kalsiyum Amonyum Nitrat",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e7?w=400&h=400&fit=crop",
    category: "gubre",
  },
  {
    id: "gubre-7",
    name: "Organomineral Gübre",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=400&fit=crop",
    category: "gubre",
  },
  {
    id: "gubre-8",
    name: "Yaprak Gübresi (Mikro Element)",
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=400&fit=crop",
    category: "gubre",
  },

  // Zirai İlaç (18 products)
  {
    id: "ilac-1",
    name: "Fungusit - Mantar İlacı",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-2",
    name: "İnsektisit - Yaprak Biti",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-3",
    name: "Herbisit - Dar Yapraklı",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-4",
    name: "Herbisit - Geniş Yapraklı",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-5",
    name: "Akarisit - Kırmızı Örümcek",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-6",
    name: "Fungusit - Külleme İlacı",
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-7",
    name: "İnsektisit - Meyve Kurdu",
    image: "https://images.unsplash.com/photo-1595351475754-8a520e9f6a45?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-8",
    name: "Fungusit - Pas Hastalığı",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-9",
    name: "Nematisit - Toprak Zararlısı",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-10",
    name: "Herbisit - Total (Glifosat)",
    image: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-11",
    name: "İnsektisit - Trips",
    image: "https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-12",
    name: "Fungusit - Mildiyö",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-13",
    name: "İnsektisit - Beyaz Sinek",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-14",
    name: "Rodentisit - Fare İlacı",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-15",
    name: "Mollusisit - Sümüklü Böcek",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-16",
    name: "İnsektisit - Yaprak Güvesi",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-17",
    name: "Fungusit - Antraknoz",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },
  {
    id: "ilac-18",
    name: "Bitki Aktivatörü",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop",
    category: "zirai-ilac",
  },

  // Tohum (10 products)
  {
    id: "tohum-1",
    name: "Buğday Tohumu - Sertifikalı",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop",
    category: "tohum",
  },
  {
    id: "tohum-2",
    name: "Mısır Tohumu - Hibrit",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=400&fit=crop",
    category: "tohum",
  },
  {
    id: "tohum-3",
    name: "Ayçiçeği Tohumu",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=400&fit=crop",
    category: "tohum",
  },
  {
    id: "tohum-4",
    name: "Arpa Tohumu",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&h=400&fit=crop",
    category: "tohum",
  },
  {
    id: "tohum-5",
    name: "Domates Tohumu - Sera",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&h=400&fit=crop",
    category: "tohum",
  },
  {
    id: "tohum-6",
    name: "Biber Tohumu - Kapya",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop",
    category: "tohum",
  },
  {
    id: "tohum-7",
    name: "Salatalık Tohumu",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=400&fit=crop",
    category: "tohum",
  },
  {
    id: "tohum-8",
    name: "Patlıcan Tohumu",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=400&h=400&fit=crop",
    category: "tohum",
  },
  {
    id: "tohum-9",
    name: "Kabak Tohumu",
    image: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=400&h=400&fit=crop",
    category: "tohum",
  },
  {
    id: "tohum-10",
    name: "Fasulye Tohumu",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&h=400&fit=crop",
    category: "tohum",
  },

  // Hayvan Yemleri (8 products)
  {
    id: "yem-1",
    name: "Büyükbaş Besi Yemi",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
  },
  {
    id: "yem-2",
    name: "Süt İneği Yemi",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
  },
  {
    id: "yem-3",
    name: "Küçükbaş Koyun Yemi",
    image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
  },
  {
    id: "yem-4",
    name: "Küçükbaş Keçi Yemi",
    image: "https://images.unsplash.com/photo-1524024973431-2ad916746881?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
  },
  {
    id: "yem-5",
    name: "Tavuk Yemi - Yumurta",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
  },
  {
    id: "yem-6",
    name: "Tavuk Yemi - Etlik",
    image: "https://images.unsplash.com/photo-1569288063477-c6681b913231?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
  },
  {
    id: "yem-7",
    name: "Güvercin Yemi",
    image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
  },
  {
    id: "yem-8",
    name: "Buzağı Başlangıç Yemi",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400&h=400&fit=crop",
    category: "hayvan-yemleri",
  },

  // Evcil Hayvan Mamaları (8 products)
  {
    id: "mama-1",
    name: "Kedi Maması - Yetişkin",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
  },
  {
    id: "mama-2",
    name: "Kedi Maması - Yavru",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
  },
  {
    id: "mama-3",
    name: "Kedi Maması - Kısır",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
  },
  {
    id: "mama-4",
    name: "Köpek Maması - Yetişkin",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
  },
  {
    id: "mama-5",
    name: "Köpek Maması - Yavru",
    image: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
  },
  {
    id: "mama-6",
    name: "Köpek Maması - Büyük Irk",
    image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
  },
  {
    id: "mama-7",
    name: "Kedi Ödül Maması",
    image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
  },
  {
    id: "mama-8",
    name: "Köpek Ödül Maması",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
    category: "evcil-hayvan-mamalari",
  },
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter((product) => product.category === categorySlug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};
