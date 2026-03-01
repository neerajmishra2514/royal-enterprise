interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-10">
      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="section-divider mt-4">
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span className="w-2 h-2 rounded-full bg-muted" />
        <span className="w-2 h-2 rounded-full bg-muted" />
      </div>
    </div>
  );
};

export default SectionHeading;
