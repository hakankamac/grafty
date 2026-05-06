type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
};

export function PageHero({ eyebrow, title, subtitle, imageUrl }: Props) {
  return (
    <section className="relative w-screen h-[72vh] min-h-[520px] overflow-hidden isolate flex items-end pb-16 md:pb-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 page-hero-overlay"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.07] mix-blend-overlay grain"
      />

      <div className="relative z-10 w-full px-6 md:px-10 max-w-[1400px] mx-auto">
        <p className="eyebrow-line text-[12px] uppercase tracking-[0.32em] text-white/70 mb-6">
          {eyebrow}
        </p>
        <h1
          className="font-display font-black uppercase tracking-[-0.04em] leading-[0.92] text-white title-shadow max-w-[12ch]"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-7 max-w-[560px] text-base md:text-lg font-light text-white/70 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
