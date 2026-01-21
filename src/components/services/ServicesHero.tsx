
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-20 bg-tvm-lightGray">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold bg-tvm-blue/10 text-tvm-blue rounded-full">
            Our Expertise
          </span>
          <h1 className="mb-6">Comprehensive <span className="text-tvm-blue">IT Solutions</span></h1>
          <p className="text-tvm-gray text-lg mb-8">
            Explore our range of services designed to help your business thrive in the digital landscape. From mobile apps to websites and marketing strategies, we've got you covered.
          </p>
          <Button asChild size="lg" className="button-animation">
            <Link to="/contact">
              Get Started <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
