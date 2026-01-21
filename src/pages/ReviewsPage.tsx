
import PageLayout from "@/components/common/PageLayout";
import ReviewsHero from "@/components/reviews/ReviewsHero";
import ReviewsList from "@/components/reviews/ReviewsList";
import ReviewForm from "@/components/reviews/ReviewForm";

const ReviewsPage = () => {
  return (
    <PageLayout>
      <ReviewsHero />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ReviewsList />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ReviewForm />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ReviewsPage;
