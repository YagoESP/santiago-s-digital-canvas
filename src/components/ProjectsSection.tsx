import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Eye } from "lucide-react";

import limpiezasImg from "@/assets/projects/limpiezas-alicia.jpg";
import terraSalImg from "@/assets/projects/terra-sal.jpg";
import islaSetupImg from "@/assets/projects/isla-setup.jpg";
import pokedexImg from "@/assets/projects/pokedex.jpg";
import cidrImg from "@/assets/projects/cidr-calculator.jpg";
import cobblemonImg from "@/assets/projects/cobblemon.jpg";

const projects = [
  {
    title: "Limpiezas Alicia",
    description: "Web corporativa optimizada para SEO local y captación de clientes para una empresa de servicios en Mallorca.",
    details: "Diseñé y desarrollé una web corporativa completa enfocada en posicionamiento SEO local. Implementé un diseño limpio con paleta verde corporativa, estructura de contenido orientada a la conversión y optimización de velocidad de carga.",
    role: "Diseño UI/UX · Desarrollo WordPress · SEO",
    stack: ["WordPress", "CSS Personalizado", "SEO"],
    color: "from-emerald-500/20 to-teal-500/20",
    image: limpiezasImg,
  },
  {
    title: "Terra & Sal",
    description: "Tienda online completa para productos locales y ecológicos, con gestión de inventario y pasarelas de pago configuradas.",
    details: "Creé desde cero la experiencia de compra online: diseño de catálogo de productos, flujo de checkout optimizado, integración de pasarelas de pago y un sistema de gestión de inventario intuitivo para el cliente.",
    role: "Diseño eCommerce · UX de Checkout · Desarrollo",
    stack: ["WooCommerce", "PHP", "Diseño UI"],
    color: "from-amber-500/20 to-orange-500/20",
    image: terraSalImg,
  },
  {
    title: "IslaSetup",
    description: "eCommerce moderno especializado en la venta de configuraciones de ofimática y setups gaming de alto rendimiento.",
    details: "Diseñé una experiencia de compra premium con estética gaming: tema oscuro con acentos neón, páginas de producto detalladas con comparativas, y un flujo de compra optimizado para maximizar la conversión.",
    role: "Diseño UI · Branding · Optimización CRO",
    stack: ["Shopify", "Liquid", "Optimización de Conversión"],
    color: "from-violet-500/20 to-purple-500/20",
    image: islaSetupImg,
  },
  {
    title: "PokeDex Fetch API",
    description: "Aplicación web interactiva que consume la PokeAPI oficial para buscar, filtrar y mostrar estadísticas de Pokémon en tiempo real.",
    details: "Desarrollé una interfaz interactiva con sistema de búsqueda y filtrado en tiempo real. Diseñé las tarjetas de Pokémon con estadísticas visuales, implementé lazy loading de imágenes y un layout responsive con CSS Grid.",
    role: "Diseño UI · Desarrollo Front-End · API Integration",
    stack: ["JavaScript (ES6+)", "Fetch API", "CSS Grid/Flexbox"],
    color: "from-red-500/20 to-rose-500/20",
    image: pokedexImg,
  },
  {
    title: "Calculadora CIDR & Subredes",
    description: "Herramienta visual diseñada para administradores de sistemas que permite calcular máscaras de red, rangos de IP y broadcast instantáneamente.",
    details: "Diseñé una interfaz técnica pero accesible con tema oscuro profesional. La herramienta calcula en tiempo real máscaras de red, rangos de IP utilizables y direcciones de broadcast con una tabla de resultados clara y exportable.",
    role: "Diseño UI · Lógica de Red · Desarrollo",
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    color: "from-cyan-500/20 to-sky-500/20",
    image: cidrImg,
  },
  {
    title: "Cobblemon Server Landing",
    description: "Landing page interactiva y dinámica para promocionar un servidor de Minecraft modificado, con sistema de estado del servidor y registro.",
    details: "Creé una landing page inmersiva con animaciones de scroll, partículas decorativas y un sistema de estado del servidor en tiempo real. El diseño combina la estética pixel art de Minecraft con un layout web moderno y profesional.",
    role: "Diseño Web · Animaciones · Desarrollo React",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    color: "from-primary/20 to-indigo-500/20",
    image: cobblemonImg,
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

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
                {/* Project image */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={`Mockup del proyecto ${p.title}`}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  <button
                    onClick={() => setSelected(p)}
                    className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Eye size={18} /> Ver Detalle
                    </span>
                  </button>
                </div>

                <CardHeader className="pb-2">
                  <p className="text-xs text-muted-foreground mb-1">{p.role}</p>
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

                <CardFooter className="gap-2">
                  <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary" onClick={() => setSelected(p)}>
                    Ver Proyecto <ExternalLink size={14} />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project detail dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          {selected && (
            <>
              <DialogHeader>
                <p className="text-xs text-primary font-medium mb-1">{selected.role}</p>
                <DialogTitle className="text-xl">{selected.title}</DialogTitle>
                <DialogDescription>{selected.description}</DialogDescription>
              </DialogHeader>

              <div className="rounded-lg overflow-hidden border border-border/50">
                <img
                  src={selected.image}
                  alt={`Vista completa de ${selected.title}`}
                  className="w-full object-cover"
                  width={800}
                  height={512}
                />
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground">Sobre el proyecto</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{selected.details}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selected.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
