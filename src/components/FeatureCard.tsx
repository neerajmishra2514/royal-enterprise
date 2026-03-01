import { type ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="feature-card flex flex-col items-center">
      <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default FeatureCard;
