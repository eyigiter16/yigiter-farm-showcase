import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Ahmet Yiğiter",
      role: "Genel Müdür",
      description: "20 yıllık tarım sektörü deneyimi ile Yiğiter Tarım'ın kurucusu ve genel müdürü.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Mehmet Demir",
      role: "Teknik Müdür",
      description: "Ziraat mühendisi, 15 yıllık teknik danışmanlık ve tarım teknolojileri uzmanlığı.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Ayşe Kaya",
      role: "Satış Müdürü",
      description: "10 yıllık satış ve müşteri ilişkileri yönetimi deneyimi.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "Fatma Şahin",
      role: "Pazarlama Müdürü",
      description: "Modern pazarlama stratejileri ve dijital dönüşüm uzmanı.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
    {
      name: "Ali Yılmaz",
      role: "Saha Koordinatörü",
      description: "Üreticilerle birebir çalışan, 12 yıllık saha tecrübesi olan koordinatör.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
    {
      name: "Zeynep Arslan",
      role: "Müşteri Hizmetleri Müdürü",
      description: "Müşteri memnuniyeti ve ilişkileri yönetimi alanında 8 yıllık deneyim.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            Ekibimiz
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Deneyimli ve uzman kadromuz ile tarım sektörüne değer katıyoruz.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex gap-3">
                    <button
                      className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4" />
                    </button>
                    <button
                      className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ekibimize Katılmak İster misiniz?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Yiğiter Tarım ailesine katılmak ve tarım sektörüne katkı sağlamak için bizimle iletişime geçin.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Team;
