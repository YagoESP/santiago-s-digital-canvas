import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Limpiezas Alicia",
    description: "Web corporativa optimizada para SEO local y captación de clientes para una empresa de servicios en Mallorca.",
    stack: ["WordPress", "CSS Personalizado", "SEO"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Terra & Sal",
    description: "Tienda online completa para productos locales y ecológicos, con gestión de inventario y pasarelas de pago configuradas.",
    stack: ["WooCommerce", "PHP", "Diseño UI"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "IslaSetup",
    description: "eCommerce moderno especializado en la venta de configuraciones de ofimática y setups gaming de alto rendimiento.",
    stack: ["Shopify", "Liquid", "Optimización de Conversión"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "PokeDex Fetch API",
    description: "Aplicación web interactiva que consume la PokeAPI oficial para buscar, filtrar y mostrar estadísticas de Pokémon en tiempo real.",
    stack: ["JavaScript (ES6+)", "Fetch API", "CSS Grid/Flexbox"],
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    title: "Calculadora CIDR & Subredes",
    description: "Herramienta visual diseñada para administradores de sistemas que permite calcular máscaras de red, rangos de IP y broadcast instantáneamente.",
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    color: "from-cyan-500/20 to-sky-500/20",
  },
  {
    title: "Cobblemon Server Landing",
    description: "Landing page interactiva y dinámica para promocionar un servidor de Minecraft modificado, con sistema de estado del servidor y registro.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    color: "from-primary/20 to-indigo-500/20",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4"
        >
          Mis <span className="text-gradient">Proyectos</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-12"
        >
          Una selección de trabajos que reflejan mi versatilidad y pasión por el desarrollo web.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Card className="group h-full flex flex-col overflow-hidden border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_var(--glow)] hover:-translate-y-1">
                {/* Color band */}
                <div className={`h-32 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-foreground/60 group-hover:text-foreground transition-colors">
                    {p.title.split(" ")[0]}
                  </span>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <CardDescription className="leading-relaxed">{p.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary">
                    Ver Proyecto <ExternalLink size={14} />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
