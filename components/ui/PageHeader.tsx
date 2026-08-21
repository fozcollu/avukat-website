import Container from "./Container";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-charcoal py-16 sm:py-20">
      <Container>
        {eyebrow && (
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl text-white sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/60">{subtitle}</p>
        )}
      </Container>
    </div>
  );
}
