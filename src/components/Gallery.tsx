import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Import gallery images
import icon1 from "@/assets/gallery/icon-1.jpg";
import icon2 from "@/assets/gallery/icon-2.jpg";
import portrait1 from "@/assets/gallery/portrait-1.jpg";
import portrait2 from "@/assets/gallery/portrait-2.jpeg";
import landscape1 from "@/assets/gallery/landscape-1.jpeg";
import landscape2 from "@/assets/gallery/landscape-2.jpg";
import replica1 from "@/assets/gallery/replica-1.jpeg";
import stilllife1 from "@/assets/gallery/stilllife-1.jpeg";
import stilllife2 from "@/assets/gallery/stilllife-2.jpeg";

interface Artwork {
  id: number;
  src: string;
  titleKey: string;
  category: string;
  techniqueKey: string;
  dimensions: string;
  year?: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    src: icon1,
    titleKey: "artwork.bogorodica",
    category: "icons",
    techniqueKey: "technique.oil-on-board",
    dimensions: "40 × 50 cm",
    year: "2001",
  },
  {
    id: 2,
    src: portrait2,
    titleKey: "artwork.portrait-young",
    category: "portraits",
    techniqueKey: "technique.oil-on-canvas",
    dimensions: "50 × 70 cm",
    year: "2003",
  },
  {
    id: 3,
    src: landscape1,
    titleKey: "artwork.tvrdjava",
    category: "landscapes",
    techniqueKey: "technique.oil-on-canvas",
    dimensions: "70 × 100 cm",
    year: "2022",
  },
  {
    id: 4,
    src: replica1,
    titleKey: "artwork.classical-masters",
    category: "replicas",
    techniqueKey: "technique.oil-on-canvas",
    dimensions: "80 × 100 cm",
    year: "2019",
  },
  {
    id: 5,
    src: stilllife1,
    titleKey: "artwork.stillife-grapes",
    category: "stilllife",
    techniqueKey: "technique.oil-on-canvas",
    dimensions: "80 × 100 cm",
    year: "2008",
  },
   {
    id: 6,
    src: stilllife2,
    titleKey: "artwork.stillife-vase",
    category: "stilllife",
    techniqueKey: "technique.oil-on-canvas",
    dimensions: "80 × 100 cm",
    year: "1997",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const categories = [
    { id: "all", labelKey: "gallery.category.all" },
    { id: "icons", labelKey: "gallery.category.icons" },
    { id: "portraits", labelKey: "gallery.category.portraits" },
    { id: "landscapes", labelKey: "gallery.category.landscapes" },
    { id: "replicas", labelKey: "gallery.category.replicas" },
    { id: "stilllife", labelKey: "gallery.category.stilllife" },
  ];

  const filteredArtworks =
    activeCategory === "all"
      ? artworks
      : artworks.filter((art) => art.category === activeCategory);

  return (
    <section id='gallery' className='section-padding'>
      <div className='container-wide' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-center mb-12'>
          <p className='font-body text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4'>
            {t("gallery.label")}
          </p>

          <h2 className='font-heading text-3xl md:text-4xl text-foreground mb-6'>
            {t("gallery.title")}
          </h2>

          <div className='divider-gold' />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-3 mb-12'>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 text-sm font-body tracking-wide transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground/70 border-border hover:border-primary hover:text-primary"
              }`}>
              {t(cat.labelKey)}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <AnimatePresence mode='popLayout'>
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className='gallery-item group'
                onClick={() => setSelectedArtwork(artwork)}>
                <img
                  src={artwork.src}
                  alt={t(artwork.titleKey)}
                  className='w-full h-auto'
                  loading='lazy'
                />
                <div className='overlay-subtle' />
                <div className='absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent'>
                  <p className='font-heading text-lg text-white'>
                    {t(artwork.titleKey)}
                  </p>
                  <p className='font-body text-sm text-white/70'>
                    {t(artwork.techniqueKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4'
            onClick={() => setSelectedArtwork(null)}>
            <button
              className='absolute top-6 right-6 text-white/70 hover:text-white transition-colors'
              onClick={() => setSelectedArtwork(null)}>
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='max-w-5xl max-h-[90vh] flex flex-col md:flex-row gap-8 items-center'
              onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedArtwork.src}
                alt={t(selectedArtwork.titleKey)}
                className='max-h-[70vh] w-auto object-contain'
              />
              <div className='text-white text-center md:text-left min-w-[200px]'>
                <h3 className='font-heading text-2xl mb-4'>
                  {t(selectedArtwork.titleKey)}
                </h3>
                <div className='space-y-2 font-body text-white/70'>
                  <p>
                    <span className='text-white/50'>
                      {t("gallery.technique")}
                    </span>{" "}
                    {t(selectedArtwork.techniqueKey)}
                  </p>
                  <p>
                    <span className='text-white/50'>
                      {t("gallery.dimensions")}
                    </span>{" "}
                    {selectedArtwork.dimensions}
                  </p>
                  {selectedArtwork.year && (
                    <p>
                      <span className='text-white/50'>{t("gallery.year")}</span>{" "}
                      {selectedArtwork.year}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
