import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import SectionHeading from "../common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

type ServiceCategory =
  | "Website Development"
  | "Android App Development"
  | "Digital Marketing"
  | "Influencer Marketing";

const BASE_URL = import.meta.env.VITE_API_URL;

const ReviewForm = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    companyName: string;
    serviceUsed: ServiceCategory | "";
    rating: number;
    review: string;
  }>({
    name: "",
    email: "",
    companyName: "",
    serviceUsed: "",
    rating: 0,
    review: "",
  });

  const [hoveredRating, setHoveredRating] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.review ||
      formData.rating === 0 ||
      !formData.serviceUsed
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields and rating.",
        variant: "destructive",
      });
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/api/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit review");
      }

      toast({
        title: "Review Submitted",
        description: "Your review will be published after approval.",
      });

      setFormData({
        name: "",
        email: "",
        companyName: "",
        serviceUsed: "",
        rating: 0,
        review: "",
      });

      setHoveredRating(0);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="submit-review"
      className="section-padding bg-tvm-lightGray scroll-mt-20"
    >
      <div className="container-custom">
        <SectionHeading
          title="Share Your Experience"
          subtitle="We value your feedback. Please take a moment to share your experience working with TVM IT Solutions."
        />

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="glassmorphism rounded-xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Company Name
                </label>
                <input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Service Used <span className="text-red-500">*</span>
                </label>
                <select
                  name="serviceUsed"
                  value={formData.serviceUsed}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Android App Development">
                    Android App Development
                  </option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Influencer Marketing">
                    Influencer Marketing
                  </option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">
                Your Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                  >
                    <Star
                      size={24}
                      className={
                        star <= (hoveredRating || formData.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">
                Your Review <span className="text-red-500">*</span>
              </label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Submit Review
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;
