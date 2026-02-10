import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Phone, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const { t } = useLanguage();

  // Load Forminit SDK
  useEffect(() => {
    if (!window.Forminit) {
      const script = document.createElement("script");
      script.src = "https://forminit.com/sdk/v1/forminit.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("");
    // Wait for SDK to load
    if (!window.Forminit) {
      setResult("Form backend not ready. Try again in a moment.");
      return;
    }
    const forminit = new window.Forminit();
    const FORM_ID = "rvd7d1vouh0";
    // Prepare FormData with correct field names
    const fd = new FormData();
    fd.append("fi-sender-firstName", formData.firstName);
    fd.append("fi-sender-lastName", formData.lastName);
    fd.append("fi-sender-email", formData.email);
    fd.append("fi-text-message", formData.message);

    const { data, error } = await forminit.submit(FORM_ID, fd);
    if (error) {
      setResult(error.message);
      return;
    }
    setResult(t("contact.form.success"));
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section id='contact' className='section-padding'>
      <div className='container-narrow' ref={ref}>
         <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='text-center'>
        <p className='font-body text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4'>
          {t("contact.label")}
        </p>
        <h2 className='font-heading text-3xl md:text-4xl text-foreground mb-6'>
          {t("contact.title")}
        </h2>
        <div className='divider-gold' />
        <p className='font-body text-lg text-foreground/80 max-w-2xl mx-auto mt-8'>
          {t("contact.description")}
        </p>
      </motion.div>

         <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mt-12 flex flex-col md:flex-row gap-8 items-center justify-center'>
          <a
            href='viber://chat?number=%2B381642954990'
            className='btn-viber text-lg'>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M11.398 0.002c-4.32 0.024-7.618 1.18-9.58 3.37C-0.09 5.492-0.58 8.452 0.5 12.402c0.85 3.11 3.19 5.8 6.49 7.47l0.12 3.79c0.03 0.74 0.87 1.15 1.48 0.71l2.85-2.01c0.95 0.12 1.87 0.17 2.76 0.16 4.08-0.03 7.27-1.15 9.23-3.23 2.02-2.15 2.54-5.06 1.5-8.4-1.55-4.97-6.76-10.87-13.55-10.89zM12.11 1.92c5.67 0.01 10.17 5.13 11.51 9.45 0.82 2.66 0.41 4.87-1.15 6.53-1.6 1.7-4.37 2.65-7.97 2.68-0.95 0.01-1.94-0.05-2.96-0.17l-0.3-0.04-0.24 0.17-2.13 1.5-0.09-2.82-0.04-0.12-0.1-0.06c-2.97-1.48-5.07-3.87-5.8-6.55-0.89-3.26-0.49-5.54 1.18-7.32 1.6-1.7 4.3-3.23 8.09-3.25zm-0.08 3.53c-0.36 0-0.65 0.29-0.65 0.65s0.29 0.65 0.65 0.65c1.87 0 3.49 0.73 4.67 1.97 1.13 1.2 1.79 2.84 1.79 4.63 0 0.36 0.29 0.65 0.65 0.65 0.36 0 0.65-0.29 0.65-0.65 0-2.13-0.79-4.11-2.15-5.55-1.41-1.49-3.39-2.35-5.61-2.35zm0 2.27c-0.36 0-0.65 0.29-0.65 0.65s0.29 0.65 0.65 0.65c0.9 0 1.74 0.37 2.33 0.99 0.59 0.61 0.94 1.45 0.94 2.36 0 0.36 0.29 0.65 0.65 0.65s0.65-0.29 0.65-0.65c0-1.26-0.49-2.43-1.31-3.28-0.83-0.86-1.99-1.37-3.26-1.37zm-4.12 0.96c-0.37-0.02-0.73 0.06-1.04 0.27l-0.03 0.02c-0.35 0.25-0.68 0.54-0.96 0.86-0.44 0.5-0.69 1.01-0.72 1.52-0.02 0.32 0.04 0.64 0.18 0.95 0.29 0.71 0.72 1.39 1.24 2.06 1.08 1.4 2.54 2.78 4.31 3.88 0.87 0.54 1.85 1.02 2.96 1.37 0.69 0.22 1.35 0.31 1.98 0.26 0.62-0.05 1.22-0.27 1.73-0.68 0.33-0.27 0.62-0.6 0.86-0.96l0.02-0.03c0.38-0.57 0.4-1.28 0.06-1.83-0.35-0.57-1.22-1.26-1.9-1.73-0.72-0.5-1.49-0.55-2.05-0.15l-0.57 0.41c-0.27 0.19-0.56 0.19-0.84-0.02-0.62-0.47-1.18-1.02-1.66-1.65-0.23-0.3-0.26-0.6-0.07-0.88l0.39-0.57c0.37-0.54 0.33-1.32-0.11-2.06-0.39-0.65-1.01-1.46-1.53-1.84-0.32-0.24-0.67-0.37-1.03-0.37-0.06 0-0.12 0-0.18 0.01zm4.12 0.63c-0.36 0-0.65 0.29-0.65 0.65s0.29 0.65 0.65 0.65c0.4 0 0.75 0.16 1.01 0.43 0.26 0.27 0.41 0.63 0.41 1.02 0 0.36 0.29 0.65 0.65 0.65s0.65-0.29 0.65-0.65c0-0.74-0.29-1.43-0.78-1.94-0.49-0.5-1.18-0.81-1.94-0.81z' />
            </svg>
            {t("contact.viber")}
          </a>

          <a
            href='tel:+381642954990'
            className='btn-classical flex items-center gap-3'>
            <Phone size={18} />
            +381 64 295 4990
          </a>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit}
          className='mt-16 max-w-xl mx-auto space-y-6'>
          <p className='font-body text-center text-muted-foreground mb-8'>
            {t("contact.form.title")}
          </p>

          <div>
            <label className='block font-body text-sm text-foreground/70 mb-2'>
              {t("contact.form.name")}
            </label>
            <input
              type='text'
              name='fi-sender-firstName'
              required
              placeholder={t("contact.form.name") }
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className='w-full px-4 py-3 bg-card border border-border focus:border-primary 
                       outline-none transition-colors font-body text-foreground'
            />
          </div>

          <div>
             <label className='block font-body text-sm text-foreground/70 mb-2'>
              {t("contact.form.last-name")}
            </label>
            <input
              type='text'
              name='fi-sender-lastName'
              required
              placeholder={t("contact.form.last-name")}
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className='w-full px-4 py-3 bg-card border border-border focus:border-primary 
                       outline-none transition-colors font-body text-foreground mt-2'
            />
          </div>

          <div>
            <label className='block font-body text-sm text-foreground/70 mb-2'>
              {t("contact.form.email")}
            </label>
            <input
              type='email'
              name='fi-sender-email'
              required
              placeholder={t("contact.form.email")}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className='w-full px-4 py-3 bg-card border border-border focus:border-primary 
                       outline-none transition-colors font-body text-foreground'
            />
          </div>

          <div>
            <label className='block font-body text-sm text-foreground/70 mb-2'>
              {t("contact.form.message")}
            </label>
            <textarea
              name='fi-text-message'
              required
              rows={5}
              placeholder={t("contact.form.message")}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className='w-full px-4 py-3 bg-card border border-border focus:border-primary 
                       outline-none transition-colors font-body text-foreground resize-none'
            />
          </div>

          <button
            type='submit'
            className='btn-classical w-full flex items-center justify-center gap-3'>
            <Send size={16} />
            {t("contact.form.submit")}
          </button>
          <p className='text-center mt-4 text-primary'>{result}</p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
