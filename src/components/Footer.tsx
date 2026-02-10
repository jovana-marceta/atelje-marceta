import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-foreground text-background/80">
      <div className="container-narrow text-center">
        <p className="font-heading text-2xl text-background mb-4">{t('brand')}</p>
        <p className="font-body text-sm mb-6">
          {t('footer.description')}
        </p>
        <div className="divider-gold mb-6" />
        <p className="font-body text-xs text-background/50">
          © {currentYear} {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
