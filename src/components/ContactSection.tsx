import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Send, Coffee } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">{t.contact.title}</span>
          </h2>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Coffee size={18} className="text-primary" />
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-5 rounded-2xl border border-border/50 bg-card/50 p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-2">
            <Label htmlFor="name">{t.contact.name}</Label>
            <Input id="name" placeholder={t.contact.namePlaceholder} className="bg-background/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t.contact.email}</Label>
            <Input id="email" type="email" placeholder={t.contact.emailPlaceholder} className="bg-background/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t.contact.message}</Label>
            <Textarea id="message" placeholder={t.contact.messagePlaceholder} rows={5} className="bg-background/50" />
          </div>
          <Button type="submit" className="w-full gap-2">
            <Send size={16} /> {t.contact.send}
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-6"
        >
          <a href="mailto:santiagogarciag732015@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <Mail size={16} /> Email
          </a>
          <a href="https://www.linkedin.com/in/santiagogg03/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
