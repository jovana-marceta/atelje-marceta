import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
            {t('about.label')}
          </p>
          
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            {t('about.title')}
          </h2>

          <div className="divider-gold" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <p className="font-body text-lg text-foreground/85 leading-relaxed mb-6 text-center">
            {t('about.p1')}
          </p>

          <p className="font-body text-lg text-foreground/85 leading-relaxed mb-6 text-center">
            {t('about.p2')}
          </p>

          <p className="font-body text-lg text-foreground/85 leading-relaxed text-center">
            {t('about.p3')}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <p className="font-heading text-4xl text-primary mb-2">28+</p>
            <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">{t('about.stat.years')}</p>
          </div>
          <div>
            <p className="font-heading text-4xl text-primary mb-2">1000+</p>
            <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">{t('about.stat.works')}</p>
          </div>
          <div>
            <p className="font-heading text-4xl text-primary mb-2">800+</p>
            <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">{t('about.stat.icons')}</p>
          </div>
          <div>
            <p className="font-heading text-4xl text-primary mb-2">100%</p>
            <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">{t('about.stat.dedication')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
