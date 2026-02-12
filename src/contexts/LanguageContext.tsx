import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "sr-latn" | "sr-cyrl" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  "sr-latn": {
    // Header
    "nav.home": "Početna",
    "nav.about": "O umetniku",
    "nav.gallery": "Galerija",
    "nav.commissions": "Narudžbine",
    "nav.contact": "Kontakt",
    brand: "Atelje Marčeta",

    // Hero
    "hero.subtitle": "Aktivni slikar od 1997. godine",
    "hero.title1": "Tradicija i duša",
    "hero.title2": "u svakom potezu",
    "hero.description":
      "Ikone, portreti, pejzaži i replike klasičnih dela srpskih i stranih slikara, kreirane sa posvećenošću i strpljenjem kroz više od dve decenije umetničkog rada.",
    "hero.cta.gallery": "Pogledajte radove",
    "hero.cta.contact": "Kontakt",

    // About
    "about.label": "O umetniku",
    "about.title": "Više od dve decenije posvećenosti",
    "about.p1":
      "Miroslav Marčeta iz Novog Sada se od 1997. godine aktivno bavi slikarstvom, sa posebnim fokusom na pravoslavne ikone, portrete, pejzaže i replike dela klasičnih srpskih majstora. Njegov put nije akademski, već praktični – hiljade sati provedenih ispred platna. Uči kroz rad i posvećenost svakom delu.",
    "about.p2":
      "Najveći deo njegovih radova nastao je po preporuci zadovoljnih naručilaca. To poverenje doživljava kao najveće priznanje, svako delo naslikano je sa istim nivoom pažnje i posvećenosti, bilo da je u pitanju mala ikona za dom ili veliki portret za crkvu.",
    "about.p3":
      "Veruje da dobro umetničko delo nastaje spojem veštine, strpljenja i duboke povezanosti sa temom. Svaka linija, svaka nijansa boje nosi deo te posvećenosti.",
    "about.stat.years": "Godina iskustva",
    "about.stat.works": "Naslikanih dela",
    "about.stat.icons": "Ikona",
    "about.stat.dedication": "Posvećenost",

    // Gallery
    "gallery.label": "Galerija radova",
    "gallery.title": "Izabrana dela",
    "gallery.category.all": "Svi radovi",
    "gallery.category.icons": "Ikone",
    "gallery.category.portraits": "Portreti",
    "gallery.category.landscapes": "Pejzaži",
    "gallery.category.replicas": "Replike",
    "gallery.category.stilllife": "Mrtva priroda",
    "gallery.technique": "Tehnika:",
    "gallery.dimensions": "Dimenzije:",
    "gallery.year": "Godina:",
    // Artwork titles
    "artwork.bogorodica": "Bezgrešno začeće, Muriljo",
    "artwork.georgije": "Sveti Georgije",

    "artwork.portrait-elder": "Portret starijeg čoveka",
    "artwork.portrait-young": "Portret dečaka",
    "artwork.tvrdjava": "Petrovaradinska tvrđava",
    "artwork.classical-masters":
      "Replika slike Les Licornes (The Unicorns) od Gustava Moreau",
    "artwork.stillife-grapes": "Mrtva priroda sa grožđem",
    "artwork.stillife-vase": "Mrtva priroda vaza",
    // Techniques
    "technique.oil-on-board": "Ulje na dasci",
    "technique.tempera-on-board": "Jajčana tempera na dasci",
    "technique.oil-on-canvas": "Ulje na platnu",

    // Commissions
    "commissions.label": "Narudžbine",
    "commissions.title": "Kako nastaju vaša dela",
    "commissions.description":
      "Svako delo nastaje u saradnji sa naručiocem. Proces je jednostavan, a krajnji cilj je uvek isti delo koje ćete sa ponosom čuvati.",
    "commissions.step1.title": "Razgovor",
    "commissions.step1.description":
      "Kontaktirajte me putem Viber-a ili telefona da bismo razgovarali o vašoj ideji i željama.",
    "commissions.step2.title": "Tema i tehnika",
    "commissions.step2.description":
      "Zajedno određujemo motiv, tehniku slikanja i stil koji će najbolje odgovarati vašoj viziji.",
    "commissions.step3.title": "Dimenzije",
    "commissions.step3.description":
      "Definišemo veličinu dela u skladu sa prostorom gde će biti izloženo.",
    "commissions.step4.title": "Izrada",
    "commissions.step4.description":
      "Delo nastaje sa pažnjom i posvećenošću. Rok zavisi od kompleksnosti  obično 2-8 nedelja.",
    "commissions.pricing":
      "Cene se dogovaraju individualno, u zavisnosti od dimenzija, tehnike i kompleksnosti rada. Pozovite slobodno za informativni razgovor  bez obaveza.",

    // Contact
    "contact.label": "Kontakt",
    "contact.title": "Stupite u kontakt",
    "contact.description":
      "Za sve informacije, pitanja ili narudžbine, slobodno me kontaktirajte. Najbrži način je putem Viber-a ili telefonskog poziva.",
    "contact.viber": "Viber poruka",
    "contact.form.title": "Ili pošaljite poruku putem forme:",
    "contact.form.name": "Unesite Ime",
    "contact.form.last-name": "Unesite Prezime",
    "contact.form.email": "Unesite imejl adresu",
    "contact.form.message": "Vaša poruka",
    "contact.form.submit": "Pošaljite poruku",
    "contact.form.success":
      "Hvala na poruci! Odgovoriću vam u najkraćem mogućem roku.",

    // Footer
    "footer.description":
      "Slikar pravoslavnih ikona, portreta i pejzaža • Novi Sad, Srbija • Aktivni od 1997. godine",
    "footer.rights": "Sva prava zadržana",
  },
  "sr-cyrl": {
    // Header
    "nav.home": "Почетна",
    "nav.about": "О уметнику",
    "nav.gallery": "Галерија",
    "nav.commissions": "Наруџбине",
    "nav.contact": "Контакт",
    brand: "Атељe Марчета",

    // Hero
    "hero.subtitle": "Активни сликар од 1997. године",
    "hero.title1": "Традиција и душа",
    "hero.title2": "у сваком потезу",
    "hero.description":
      "Иконе, портрети, пејзажи и реплике класичних дела српских и страних сликара, креиранe са посвећеношћу и стрпљењем кроз више од две деценије уметничког рада.",
    "hero.cta.gallery": "Погледајте радове",
    "hero.cta.contact": "Контакт",

    // About
    "about.label": "О уметнику",
    "about.title": "Више од две деценије посвећености",
    "about.p1":
      "Мирослав Марчета из Новог Сада се од 1997. године активно бави сликарством, са посебним фокусом на православне иконе, портрете, пејзаже и реплике дела класичних српских мајстора. Његов пут није академски, већ практични – хиљаде сати проведених испред платна. Учи кроз рад и посвећеност сваком делу.",
    "about.p2":
      "Највећи део његових радова настао је по препоруци задовољних наручилаца. То поверење доживљава као највеће признање – свако дело насликано је са истим нивоом пажње и посвећености, било да је у питању мала икона за дом или велики портрет за цркву.",
    "about.p3":
      "Верује да добро уметничко дело настаје спојем вештине, стрпљења и дубоке повезаности са темом. Свака линија, свака нијанса боје  носи део те посвећености.",
    "about.stat.years": "Година искуства",
    "about.stat.works": "Насликаних дела",
    "about.stat.icons": "Икона",
    "about.stat.dedication": "Посвећеност",

    // Gallery
    "gallery.label": "Галерија радова",
    "gallery.title": "Изабрана дела",
    "gallery.category.all": "Сви радови",
    "gallery.category.icons": "Иконе",
    "gallery.category.portraits": "Портрети",
    "gallery.category.landscapes": "Пејзажи",
    "gallery.category.replicas": "Реплике",
    "gallery.category.stilllife": "Мртва природа",
    "gallery.technique": "Техника:",
    "gallery.dimensions": "Димензије:",
    "gallery.year": "Година:",
    // Artwork titles
    "artwork.bogorodica": "Безгрешно зачеће, Мурило",
    "artwork.georgije": "Свети Георгије",

    "artwork.portrait-elder": "Портрет старијег човека",
    "artwork.portrait-young": "Портрет дечака",
    "artwork.tvrdjava": "Српски пропланци",
    "artwork.classical-masters":
      "Реплика слике Les Licornes (The Unicorns) од Густава Мороа",
     "artwork.stillife-grapes": "Мртва природа са грожђем",
    "artwork.stillife-vase": "Мртва природа са вазом",
    // Techniques
    "technique.oil-on-board": "Уље на дасци",
    "technique.tempera-on-board": "Јајчана темпера на дасци",
    "technique.oil-on-canvas": "Уље на платну",

    // Commissions
    "commissions.label": "Наруџбине",
    "commissions.title": "Како настају ваша дела",
    "commissions.description":
      "Свако дело настаје у сарадњи са наручиоцем. Процес је једноставан, а крајњи циљ је увек исти  дело које ћете са поносом чувати.",
    "commissions.step1.title": "Разговор",
    "commissions.step1.description":
      "Контактирајте ме путем Вибер-а или телефона да бисмо разговарали о вашој идеји и жељама.",
    "commissions.step2.title": "Тема и техника",
    "commissions.step2.description":
      "Заједно одређујемо мотив, технику сликања и стил који ће најбоље одговарати вашој визији.",
    "commissions.step3.title": "Димензије",
    "commissions.step3.description":
      "Дефинишемо величину дела у складу са простором где ће бити изложено.",
    "commissions.step4.title": "Израда",
    "commissions.step4.description":
      "Дело настаје са пажњом и посвећеношћу. Рок зависи од комплексности  обично 2-8 недеља.",
    "commissions.pricing":
      "Цене се договарају индивидуално, у зависности од димензија, технике и комплексности рада. Позовите слободно за информативни разговор  без обавеза.",

    // Contact
    "contact.label": "Контакт",
    "contact.title": "Ступите у контакт",
    "contact.description":
      "За све информације, питања или наруџбине, слободно ме контактирајте. Најбржи начин је путем Вибер-а или телефонског позива.",
    "contact.viber": "Вибер порука",
    "contact.form.title": "Или пошаљите поруку путем форме:",
    "contact.form.name": "Унесите име",
    "contact.form.last-name": "Унесите презиме",
    "contact.form.email": "Унесите имејл адресу",
    "contact.form.message": "Унесите вашу поруку",
    "contact.form.submit": "Пошаљите поруку",
    "contact.form.success":
      "Хвала на поруци! Одговорићу вам у најкраћем могућем року.",

    // Footer
    "footer.description":
      "Сликар православних икона, портрета и пејзажа • Нови Сад, Србија • Активни од 1997. године",
    "footer.rights": "Сва права задржана",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.commissions": "Commissions",
    "nav.contact": "Contact",
    brand: "Painting Studio Marceta",

    // Hero
    "hero.subtitle": "Active painter since 1997",
    "hero.title1": "Tradition and soul",
    "hero.title2": "in every brushstroke",
    "hero.description":
      "Icons, portraits, landscapes, and replicas of classical Serbian and foreign paintings  created with dedication and patience through more than two decades of artistic work.",
    "hero.cta.gallery": "View artworks",
    "hero.cta.contact": "Contact",

    // About
    "about.label": "About the artist",
    "about.title": "More than three decades of dedication",
    "about.p1":
      "Since 1997, Miroslav Marceta from Novi Sad has been actively engaged in painting, with a special focus on Orthodox icons, portraits, landscapes, and replicas of classical Serbian masters. His path is not academic, but practical – thousands of hours spent in front of the canvas. He learns through work and dedication to each piece.",
    "about.p2":
      "Most of his works were created through recommendations from satisfied clients. He sees this trust as the greatest recognition – every piece is painted with the same level of attention and dedication, whether it is a small icon for a home or a large portrait for a church.",
    "about.p3":
      "He believes that good artwork is created through a combination of skill, patience, and a deep connection with the subject. Every line, every shade of color  carries a part of that dedication.",
    "about.stat.years": "Years of experience",
    "about.stat.works": "Painted works",
    "about.stat.icons": "Icons",
    "about.stat.dedication": "Dedication",

    // Gallery
    "gallery.label": "Gallery of works",
    "gallery.title": "Selected works",
    "gallery.category.all": "All works",
    "gallery.category.icons": "Icons",
    "gallery.category.portraits": "Portraits",
    "gallery.category.landscapes": "Landscapes",
    "gallery.category.replicas": "Replicas",
    "gallery.category.stilllife": "Still life",
    "gallery.technique": "Technique:",
    "gallery.dimensions": "Dimensions:",
    "gallery.year": "Year:",
    // Artwork titles
    "artwork.bogorodica":
      "The Immaculate Conception of Los Venerables, Murillo",
    "artwork.georgije": "Saint George",

    "artwork.portrait-elder": "Portrait of an elderly man",
    "artwork.portrait-young": "Portrait of a young boy",
    "artwork.tvrdjava": "Petrovaradin Fortress",
    "artwork.classical-masters":
      "Replica of Les Licornes (The Unicorns) by Gustave Moreau",
    "artwork.stillife-grapes": "Still life with grapes",
    "artwork.stillife-vase": "Still life with vase",
    // Techniques
    "technique.oil-on-board": "Oil on board",
    "technique.tempera-on-board": "Egg tempera on board",
    "technique.oil-on-canvas": "Oil on canvas",

    // Commissions
    "commissions.label": "Commissions",
    "commissions.title": "How your artwork is created",
    "commissions.description":
      "Every piece is created in collaboration with the client. The process is simple, and the ultimate goal is always the same  a work you will proudly cherish.",
    "commissions.step1.title": "Conversation",
    "commissions.step1.description":
      "Contact me via Viber or phone to discuss your idea and wishes.",
    "commissions.step2.title": "Theme and technique",
    "commissions.step2.description":
      "Together we determine the motif, painting technique, and style that will best suit your vision.",
    "commissions.step3.title": "Dimensions",
    "commissions.step3.description":
      "We define the size of the piece according to the space where it will be displayed.",
    "commissions.step4.title": "Creation",
    "commissions.step4.description":
      "The piece is created with care and dedication. The timeline depends on complexity  usually 2-8 weeks.",
    "commissions.pricing":
      "Prices are discussed individually, depending on dimensions, technique, and complexity of the work. Feel free to call for an informative conversation  no obligations.",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Get in touch",
    "contact.description":
      "For all information, questions, or orders, feel free to contact me. The fastest way is via Viber or phone call.",
    "contact.viber": "Viber message",
    "contact.form.title": "Or send a message via the form:",
    "contact.form.name": "Enter Your Name",
    "contact.form.last-name": "Enter Your Last Name",
    "contact.form.email": "Enter Your Email Address",
    "contact.form.message": "Enter Your Message",
    "contact.form.submit": "Send message",
    "contact.form.success":
      "Thank you for your message! I will respond as soon as possible.",

    // Footer
    "footer.description":
      "Painter of Orthodox icons, portraits, and landscapes • Novi Sad, Serbia • Active since 1997",
    "footer.rights": "All rights reserved",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("sr-latn");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
