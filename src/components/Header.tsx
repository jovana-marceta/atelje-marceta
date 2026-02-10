import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#commissions", label: t("nav.commissions") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-4 lg:py-6"
      }`}>
      <div className='container-wide flex items-center justify-between'>
        <a
          href='#home'
          className='font-heading text-xl md:text-2xl text-foreground tracking-wide'>
          {t("brand")}
        </a>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='font-body text-sm text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide'>
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href='tel:+381642954990'
            className='flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors'>
            <Phone size={16} />
            <span className='hidden lg:inline'>+381 64 295 4990</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center gap-2'>
          <LanguageSwitcher />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='p-2 text-foreground'
            aria-label='Toggle menu'>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-background/98 backdrop-blur-sm border-t border-border mt-5'>
            <div className='container-wide py-6 flex flex-col gap-4'>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='font-body text-foreground/80 hover:text-primary transition-colors py-2'>
                  {link.label}
                </a>
              ))}
              <a
                href='tel:+381642954990'
                className='flex items-center gap-2 text-primary py-2'>
                <Phone size={16} />
                <span>+381 64 295 4990</span>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
