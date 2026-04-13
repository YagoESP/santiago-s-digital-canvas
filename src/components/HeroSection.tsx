import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase"
        >
          Portfolio 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Hola, soy{" "}
          <span className="text-gradient">Santiago García G.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-primary font-medium"
        >
          Desarrollador Web Junior | Especializado en Front-End, WordPress y Shopify
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed"
        >
          Estudiante de DAW en Palma de Mallorca, apasionado por crear experiencias web
          rápidas, atractivas y enfocadas en la conversión. Transformo ideas en código.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button size="lg" onClick={() => scrollTo("#projects")} className="gap-2">
            <ArrowDown size={16} /> Ver Proyectos
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")} className="gap-2 border-primary/40 text-primary hover:bg-primary/10">
            <Mail size={16} /> Contactar
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
