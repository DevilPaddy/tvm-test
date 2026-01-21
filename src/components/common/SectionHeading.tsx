
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  titleClassName?: string;
  subtitleClassName?: string;
  children?: ReactNode;
}

const SectionHeading = ({
  title,
  subtitle,
  alignment = "center",
  titleClassName = "",
  subtitleClassName = "",
  children,
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[alignment]}`}>
      <h2 className={`heading-accent inline-block mb-6 ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-tvm-gray mt-4 text-lg ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
