import { useState, useEffect } from "react";
import { X, Megaphone, AlertTriangle, CheckCircle, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { announcement } from "@/data/announcements";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const typeConfig = {
  info: { icon: Megaphone, accent: "text-primary" },
  warning: { icon: AlertTriangle, accent: "text-yellow-500" },
  success: { icon: CheckCircle, accent: "text-emerald-500" },
  promo: { icon: Tag, accent: "text-primary" },
};

const AnnouncementPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!announcement.enabled) return;

    const dismissedId = localStorage.getItem("announcement-dismissed");
    if (dismissedId === announcement.id) return;

    // Small delay so the page loads first
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setOpen(false);
    localStorage.setItem("announcement-dismissed", announcement.id);
  };

  if (!announcement.enabled) return null;

  const { icon: Icon, accent } = typeConfig[announcement.type];

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleDismiss()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-full bg-muted ${accent}`}>
              <Icon className="h-6 w-6" />
            </div>
            <DialogTitle className="text-xl">{announcement.title}</DialogTitle>
          </div>
          <DialogDescription className="text-base leading-relaxed">
            {announcement.message}
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3 mt-4">
          {announcement.ctaText && announcement.ctaLink && (
            <Button asChild onClick={handleDismiss}>
              <Link to={announcement.ctaLink}>{announcement.ctaText}</Link>
            </Button>
          )}
          <Button variant="outline" onClick={handleDismiss}>
            Kapat
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementPopup;
