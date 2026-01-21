
import { ReactNode } from "react";
import { CheckCircle } from "lucide-react";
import AnimatedCard from "../common/AnimatedCard";

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: ReactNode;
  image?: string;
  imageSrc?: string; // Added this prop
  imageAlt?: string; // Added this prop
  reversed?: boolean;
  isReversed?: boolean; // Added this prop
}

const ServiceDetail = ({
  id,
  title,
  description,
  features,
  icon,
  image,
  imageSrc, // Use either image or imageSrc
  imageAlt,
  reversed = false,
  isReversed = false, // Use either reversed or isReversed
}: ServiceDetailProps) => {
  // Use the appropriate props (supporting both naming conventions)
  const imageSource = image || imageSrc;
  const isReversedLayout = reversed || isReversed;
  
  return (
    <section id={id} className="py-20 scroll-mt-20">
      <div className="container-custom">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${isReversedLayout ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <AnimatedCard>
              <div className="flex items-center space-x-3 mb-6">
                {icon && <div className="text-tvm-blue">{icon}</div>}
                <h2 className="text-3xl font-medium">{title}</h2>
              </div>
              <p className="text-tvm-gray text-lg mb-8">{description}</p>
              <h3 className="text-xl font-medium mb-4">Key Features:</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-tvm-blue mt-1 flex-shrink-0" />
                    <p className="text-tvm-gray">{feature}</p>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <AnimatedCard delay={200}>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={imageSource}
                  alt={imageAlt || title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
