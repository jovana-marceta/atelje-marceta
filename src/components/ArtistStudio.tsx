import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import studioPhoto from '@/assets/artist-studio.jpg';

const ArtistStudio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section
      className="relative py-32 md:py-72 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${studioPhoto})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-white/70 mb-4">
            {t('studio.label')}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-6">
            {t('studio.title')}
          </h2>
          <div className="relative w-24 h-px mx-auto my-8" style={{ background: 'linear-gradient(90deg, transparent, hsl(43 75% 50%), transparent)' }} />
        </motion.div>
      </div>
    </section>
  );
};

export default ArtistStudio;
