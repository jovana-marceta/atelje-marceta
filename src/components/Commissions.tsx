import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Ruler, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Commissions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageCircle,
      titleKey: 'commissions.step1.title',
      descriptionKey: 'commissions.step1.description',
    },
    {
      icon: Palette,
      titleKey: 'commissions.step2.title',
      descriptionKey: 'commissions.step2.description',
    },
    {
      icon: Ruler,
      titleKey: 'commissions.step3.title',
      descriptionKey: 'commissions.step3.description',
    },
    {
      icon: Clock,
      titleKey: 'commissions.step4.title',
      descriptionKey: 'commissions.step4.description',
    },
  ];

  return (
    <section id="commissions" className="section-padding bg-card">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
            {t('commissions.label')}
          </p>
          
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            {t('commissions.title')}
          </h2>

          <div className="divider-gold" />

          <p className="font-body text-lg text-foreground/80 max-w-2xl mx-auto mt-8">
            {t('commissions.description')}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="flex gap-6 p-6 bg-background border border-border"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-2">{t(step.titleKey)}</h3>
                <p className="font-body text-foreground/70 leading-relaxed">{t(step.descriptionKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 border border-border bg-secondary/30 text-center"
        >
          <p className="font-body text-foreground/80 italic">
            {t('commissions.pricing')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Commissions;
