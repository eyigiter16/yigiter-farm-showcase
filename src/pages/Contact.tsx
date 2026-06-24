import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>İletişim | Yiğiter Tarım Ürünleri</title>
        <meta name="description" content="Yiğiter Tarım Tekirdağ iletişim bilgileri. Bize telefon, WhatsApp veya e-posta yoluyla ulaşabilirsiniz." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            Bize Ulaşın
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-100 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Ürün seçimi, fiyat bilgisi veya teknik destek için bize ulaşın. Hızlı dönüş garantisi veriyoruz.
          </p>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-10 bg-[#25D366] shadow-lg relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white text-center">
            <p className="text-2xl font-bold">
              Acil mi? WhatsApp ile anında yanıt alın:
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#25D366] hover:bg-white/90 rounded-full px-10 py-8 text-2xl font-bold shadow-xl transition-all hover:scale-105"
              aria-label="WhatsApp"
            >
              <a 
                href="https://wa.me/905448474121?text=Merhaba,%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="h-7 w-7" />
                0544 847 41 21
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  İletişim Bilgileri
                </h2>
                <p className="text-xl text-foreground/80 leading-relaxed mb-8 font-medium">
                  Tekirdağ merkezimizden Trakya genelinde hizmet veriyoruz. 
                  Telefon veya WhatsApp ile bize ulaşabilir, mağazamızı ziyaret edebilirsiniz.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-2 border-border/50 hover:border-primary transition-all shadow-md group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-5">
                      <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                        <Phone className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-foreground mb-1">Telefon / WhatsApp</h3>
                        <a href="tel:+905448474121" className="text-2xl text-primary hover:underline font-bold">
                          +90 544 847 41 21
                        </a>
                        <p className="text-base text-foreground/70 mt-2 font-medium">Hızlı yanıt için WhatsApp tercih edin</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border/50 hover:border-primary transition-all shadow-md group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-5">
                      <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                        <Mail className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-foreground mb-1">E-posta</h3>
                        <a href="mailto:yigitertarimsal@gmail.com" className="text-xl text-foreground/80 hover:text-primary transition-colors font-bold">
                          yigitertarimsal@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border/50 hover:border-primary transition-all shadow-md group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-5">
                      <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                        <MapPin className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-foreground mb-1">Adres</h3>
                        <p className="text-xl text-foreground/80 font-bold leading-tight">
                          Çınarlı Mah. Hayrabolu Cd. No:9/10
                          <br />
                          <span className="text-lg font-medium">59030 Süleymanpaşa / Tekirdağ</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border/50 hover:border-primary transition-all shadow-md group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-5">
                      <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                        <Clock className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-foreground mb-1">Çalışma Saatleri</h3>
                        <p className="text-xl text-foreground/80 font-bold">
                          Pazartesi – Cumartesi: 08:00 – 18:30
                          <br />
                          <span className="text-lg font-medium text-destructive">Pazar: Kapalı</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-2 border-border/50 shadow-2xl overflow-hidden">
              <div className="bg-primary/5 p-8 border-b border-border/50">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Mesaj Gönderin
                </h2>
                <p className="text-foreground/70 font-medium">
                  Form yerine doğrudan aramayı veya WhatsApp yazmayı tercih edebilirsiniz.
                </p>
              </div>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                        Ad Soyad *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Adınız ve soyadınız"
                        className="w-full py-6 border-2 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                        Telefon *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="05XX XXX XX XX"
                        className="w-full py-6 border-2 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                      E-posta
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ornek@email.com (isteğe bağlı)"
                      className="w-full py-6 border-2 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                      Konu *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Örn: Gübre fiyat bilgisi"
                      className="w-full py-6 border-2 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                      Mesaj *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mesajınızı buraya yazın..."
                      className="w-full min-h-[150px] border-2 focus:border-primary py-4"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-glow text-xl font-bold py-8 rounded-xl shadow-xl transition-all"
                    aria-label="Mesajı Gönder"
                  >
                    Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;