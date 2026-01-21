
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tvm-blue opacity-10 -z-10"></div>
      <div className="absolute right-0 top-0 w-64 h-64 bg-tvm-blue opacity-20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl -z-10"></div>
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-tvm-blue opacity-20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl -z-10"></div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Transform Your Business?</h2>
          <p className="text-tvm-gray text-lg mb-10 max-w-2xl mx-auto">
            Contact us today to discuss how TVM IT Solutions can help take your business to the next level with our comprehensive range of IT services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="button-animation">
              <Link to="/contact">
                Get in Touch <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
