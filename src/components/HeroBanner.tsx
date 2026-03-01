interface HeroBannerProps {
  image: string;
  subtitle: string;
  title: string;
  ctaText?: string;
  ctaHref?: string;
}

const HeroBanner = ({ image, subtitle, title, ctaText, ctaHref }: HeroBannerProps) => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      <div className="relative h-full flex items-center px-4 md:px-16 lg:px-24">
        <div className="max-w-xl">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3 font-body font-medium">
            {subtitle}
          </p>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight uppercase">
            {title}
          </h1>
          {ctaText && ctaHref && (
            <a href={ctaHref} className="btn-gold mt-8 inline-flex">
              {ctaText} →
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
