
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ReviewsHero = () => {
  return (
    <section className="pt-32 pb-20 bg-tvm-lightGray">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold bg-tvm-blue/10 text-tvm-blue rounded-full">
            Client Feedback
          </span>
          <h1 className="mb-6">What Our Clients <span className="text-tvm-blue">Say About Us</span></h1>
          <p className="text-tvm-gray text-lg mb-8">
            We value feedback from our clients. It helps us improve and deliver even better solutions. Take a look at what some of our clients have to say about working with us.
          </p>
          <Button asChild size="lg" className="button-animation">
            <Link to="#submit-review">
              Submit Your Review <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsHero;
