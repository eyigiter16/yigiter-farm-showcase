import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-whatsapp-hop hover:scale-110 transition-transform duration-300">
      <Button
        asChild
        size="icon"
        className="h-16 w-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
        aria-label="WhatsApp ile iletişime geçin"
      >
        <a
          href="https://wa.me/905448474121?text=Merhaba,%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-8 w-8" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
