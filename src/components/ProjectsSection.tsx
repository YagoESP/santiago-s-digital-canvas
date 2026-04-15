import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

import limpiezasImg from "@/assets/projects/limpiezas-alicia.jpg";
import terraSalImg from "@/assets/projects/terra-sal.jpg";
import islaSetupImg from "@/assets/projects/isla-setup.jpg";
import logoLimpiezas from "@/assets/projects/logo-limpiezas-alicia.png";
import logoTerraSal from "@/assets/projects/logo-terra-sal.png";
import logoIslaSetup from "@/assets/projects/logo-islasetup.png";

const projectImages = [limpiezasImg, terraSalImg, islaSetupImg];
const projectLogos = [logoLimpiezas, logoTerraSal, logoIslaSetup];
const projectSlugs = ["limpiezas-alicia", "terra-sal", "islasetup"] as const;

export default function ProjectsSection() {
  const { t } = useI18n();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4"
        >
          {t.projects.title1} <span className="text-gradient">{t.projects.title2}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-12"
        >
          {t.projects.subtitle}
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Card className="group h-full flex flex-col overflow-hidden border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_var(--glow)] hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={projectImages[i]}
                    alt={`Mockup del proyecto ${p.title}`}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  <Link
                    to="/caso/$slug"
                    params={{ slug: projectSlugs[i] }}
                    className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Eye size={18} /> {t.projects.viewDetail}
                    </span>
                  </Link>
                </div>

                <div className="flex items-center gap-3 px-6 pt-4">
                  <img
                    src={projectLogos[i]}
                    alt={`Logo ${p.title}`}
                    className="h-10 w-10 rounded-lg object-contain bg-muted p-1 shadow-sm shrink-0"
                  />
                  <div>
                    <p className="text-xs text-muted-foreground">{p.role}</p>
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                  </div>
                </div>

                <CardHeader className="pb-2 pt-2">
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
                  <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary" asChild>
                    <Link to="/caso/$slug" params={{ slug: projectSlugs[i] }}>
                      {t.projects.viewProject} <ExternalLink size={14} />
                    </Link>
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
