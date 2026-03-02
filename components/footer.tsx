import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-foreground/30">
            &copy; {new Date().getFullYear()} Erick van Reenen
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="mailto:erickvanreenen@gmail.com"
              className="text-foreground/30 hover:text-[#F0531C] transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/erick-van-reenen-b549061a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/30 hover:text-[#F0531C] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
