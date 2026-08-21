export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl text-ink sm:text-4xl">{title}</h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-slate ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
