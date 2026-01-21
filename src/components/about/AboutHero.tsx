
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 bg-tvm-lightGray">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold bg-tvm-blue/10 text-tvm-blue rounded-full">
            About Us
          </span>
          <h1 className="mb-6">The Team Behind <span className="text-tvm-blue">TVM IT Solutions</span></h1>
          <p className="text-tvm-gray text-lg mb-8">
            We are a team of passionate IT professionals dedicated to delivering innovative solutions that help businesses succeed in the digital world.
          </p>
          <Button asChild size="lg" className="button-animation">
            <Link to="/contact">
              Connect With Us <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
