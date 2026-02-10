import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import heroImage from '@/assets/hero-icon.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Orthodox icon painting"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className="font-body text-base font-black uppercase tracking-[0.3em] text-foreground/70 mb-4">
            {t('hero.subtitle')}
          </p>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            {t('hero.title1')}
            <br />
            <span className="text-primary">{t('hero.title2')}</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#gallery" className="btn-classical">
              {t('hero.cta.gallery')}
            </a>
            <a href="viber://chat?number=%2B381642954990" className="btn-viber">
              <Phone size={18} />
              {t('hero.cta.contact')}
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-foreground/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
