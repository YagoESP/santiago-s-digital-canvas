import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

import casoAlicia from "@/assets/projects/caso-limpiezas-alicia.png";
import casoTerra from "@/assets/projects/caso-terra-sal.png";
import casoIsla from "@/assets/projects/caso-islasetup.png";

const images: Record<string, string> = {
  "limpiezas-alicia": casoAlicia,
  "terra-sal": casoTerra,
  islasetup: casoIsla,
};

export const Route = createFileRoute("/caso/$slug")({
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const { t } = useI18n();
  const cs = t.caseStudy;
  const data = cs.cases[slug as keyof typeof cs.cases];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <Link to="/" className="text-primary hover:underline">{cs.back}</Link>
        </div>
      </div>
    );
  }

  const heroImg = images[slug] || "";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[800px] px-5 py-8">
        {/* Back nav */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-semibold text-sm">
            <ArrowLeft size={16} />
            {cs.back}
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-extrabold mb-3 sm:text-5xl">{data.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{data.subtitle}</p>
        </motion.div>

        {/* Hero image */}
        {heroImg && (
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            src={heroImg}
            alt={`Vista completa de ${data.title}`}
            className="w-full rounded-xl shadow-lg mb-10 border border-border/50 object-cover"
          />
        )}

        {/* Meta grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-5 rounded-xl border border-border/50 bg-card/50 p-5 mb-14"
        >
          <div>
            <h4 className="text-xs uppercase text-muted-foreground mb-1">{cs.role}</h4>
            <p className="font-semibold text-sm">{data.role}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase text-muted-foreground mb-1">{cs.tech}</h4>
            <p className="font-semibold text-sm">{data.tech}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase text-muted-foreground mb-1">{cs.goal}</h4>
            <p className="font-semibold text-sm">{data.goal}</p>
          </div>
        </motion.div>

        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary inline-block pb-1">
            {cs.problem}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">{data.problem}</p>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary inline-block pb-1">
            {cs.process}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{data.processIntro}</p>
          <ul className="space-y-3 mb-10">
            {data.processList.map((item, i) => (
              <li key={i} className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary inline-block pb-1">
            {cs.solution}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">{data.solutionText}</p>
        </motion.div>

        {/* CTA */}
        {data.url && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-10"
          >
            <Button size="lg" className="gap-2" asChild>
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                {cs.viewLive} <ExternalLink size={16} />
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
