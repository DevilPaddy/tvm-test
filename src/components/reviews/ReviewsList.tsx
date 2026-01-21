import { useState, useEffect } from "react";
import { Star, User } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import AnimatedCard from "../common/AnimatedCard";
import { useToast } from "@/components/ui/use-toast";

const ReviewsList = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const services = [
    "All",
    "Android App Development",
    "Website Development",
    "Digital Marketing",
    "Influencer Marketing",
  ];

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");

        if (!res.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const result = await res.json();

        const normalizedReviews = result.data.map((review) => ({
          id: review._id,
          name: review.name,
          company: review.company || "Anonymous",
          testimonial: review.review,
          rating: review.rating,
          hasPhoto: false,
          service: review.service || "General",
        }));

        setReviews(normalizedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        toast({
          title: "Error",
          description: "Failed to load reviews. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [toast]);

  const filteredReviews =
    filter === "All"
      ? reviews
      : reviews.filter((review) => review.service.includes(filter));

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Client Reviews"
            subtitle="Read what our clients have to say about their experience working with us."
          />
          <p className="text-center">Loading reviews...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Client Reviews"
          subtitle="Read what our clients have to say about their experience working with us."
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setFilter(service)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === service
                  ? "bg-tvm-blue text-white"
                  : "bg-tvm-blue/10 text-tvm-darkGray hover:bg-tvm-blue/20"
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        {filteredReviews.length === 0 ? (
          <p className="text-center">No reviews found for this service.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review, index) => (
              <AnimatedCard key={review.id} delay={index * 100} className="h-full">
                <div className="glassmorphism rounded-xl p-6 h-full flex flex-col">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  <p className="text-tvm-gray mb-6 flex-grow">
                    {review.testimonial}
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-tvm-blue/10 flex items-center justify-center">
                      <User size={20} className="text-tvm-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">{review.name}</h4>
                      <p className="text-sm text-tvm-gray">{review.company}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs font-medium text-tvm-blue bg-tvm-blue/10 px-2 py-1 rounded-full">
                      {review.service}
                    </span>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsList;
