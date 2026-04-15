import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
      <p>{t.footer.credit}</p>
    </footer>
  );
}
