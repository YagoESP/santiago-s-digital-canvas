import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function HeroSection() {
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase"
        >
          {t.hero.badge}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          {t.hero.greeting}{" "}
          <span className="text-gradient">{t.hero.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-primary font-medium"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button size="lg" onClick={() => scrollTo("#projects")} className="gap-2">
            <ArrowDown size={16} /> {t.hero.cta1}
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")} className="gap-2 border-primary/40 text-primary hover:bg-primary/10">
            <Mail size={16} /> {t.hero.cta2}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
