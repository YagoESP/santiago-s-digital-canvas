import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Send, Coffee } from "lucide-react";

export default function ContactSection() {
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
            <span className="text-gradient">¿Hablamos?</span>
          </h2>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Coffee size={18} className="text-primary" />
            Tomemos un café virtual — o uno real si estás por Mallorca.
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
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" placeholder="Tu nombre" className="bg-background/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="tu@email.com" className="bg-background/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea id="message" placeholder="Cuéntame sobre tu proyecto..." rows={5} className="bg-background/50" />
          </div>
          <Button type="submit" className="w-full gap-2">
            <Send size={16} /> Enviar Mensaje
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-6"
        >
          <a href="mailto:contacto@santiagogarcia.dev" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <Mail size={16} /> Email
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
