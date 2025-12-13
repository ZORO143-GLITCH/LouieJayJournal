import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Louie Jay T. Oani. All rights reserved.
          </p>
          <p className="text-primary-foreground/80 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for WATT
            Educational Program
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
