import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Image } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const exhibitions = [
    t('about.exhibition1'),
    t('about.exhibition2'),
    t('about.exhibition3'),
    t('about.exhibition4'),
  ];

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
          className="mt-12 max-w-3xl mx-auto space-y-6"
        >
          <p className="font-body text-lg text-foreground/85 leading-relaxed text-center">
            {t('about.p1')}
          </p>

          <p className="font-body text-lg text-foreground/85 leading-relaxed text-center">
            {t('about.p2')}
          </p>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-xl text-foreground">
              {t('about.awards.title')}
            </h3>
          </div>
          <ul className="space-y-3 pl-8">
            <li className="font-body text-foreground/80 leading-relaxed list-disc marker:text-primary">
              {t('about.award1')}
            </li>
          </ul>
        </motion.div>

        {/* Exhibitions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Image className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-xl text-foreground">
              {t('about.exhibitions.title')}
            </h3>
          </div>
          <ul className="space-y-3 pl-8">
            {exhibitions.map((exhibition, index) => (
              <li key={index} className="font-body text-foreground/80 leading-relaxed list-disc marker:text-primary">
                {exhibition}
              </li>
            ))}
          </ul>
        </motion.div>

    

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <p className="font-heading text-4xl text-primary mb-2">28+</p>
            <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">{t('about.stat.years')}</p>
          </div>
          <div>
            <p className="font-heading text-4xl text-primary mb-2">1500+</p>
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
