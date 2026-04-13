import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, ShoppingCart, Database, Terminal, Palette } from "lucide-react";

const skills = [
  { name: "HTML5", icon: <Code size={14} /> },
  { name: "CSS3", icon: <Palette size={14} /> },
  { name: "JavaScript", icon: <Terminal size={14} /> },
  { name: "React", icon: <Code size={14} /> },
  { name: "Tailwind CSS", icon: <Palette size={14} /> },
  { name: "WordPress", icon: <Globe size={14} /> },
  { name: "WooCommerce", icon: <ShoppingCart size={14} /> },
  { name: "Shopify", icon: <ShoppingCart size={14} /> },
  { name: "SQL (Oracle)", icon: <Database size={14} /> },
  { name: "Linux", icon: <Terminal size={14} /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4"
        >
          Sobre Mí & <span className="text-gradient">Tech Stack</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-center text-muted-foreground leading-relaxed mb-12"
        >
          Soy un desarrollador web junior con un enfoque práctico y orientado a resultados.
          Mi experiencia previa en atención al cliente me ha dado una visión comercial única
          que aplico en cada proyecto: entiendo lo que el usuario final necesita y lo traduzco
          en interfaces intuitivas que convierten. Siempre aprendiendo, siempre construyendo.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Badge
                variant="secondary"
                className="gap-1.5 px-4 py-2 text-sm transition-all hover:bg-primary/20 hover:text-primary cursor-default"
              >
                {skill.icon}
                {skill.name}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
