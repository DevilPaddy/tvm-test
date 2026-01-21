
import PageLayout from "@/components/common/PageLayout";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceDetail from "@/components/services/ServiceDetail";

const ServicesPage = () => {
  return (
    <PageLayout>
      <ServicesHero />
      <section className="container-custom py-16">
        <div className="space-y-24">
          <ServiceDetail
            id="android"
            title="Android App Development"
            description="Custom Android applications tailored to your business requirements with intuitive user interfaces and seamless functionality."
            features={[
              "Native Android development using Kotlin and Java",
              "User-centered design approach for maximum engagement",
              "Integration with APIs and third-party services",
              "Comprehensive testing and quality assurance",
              "Ongoing maintenance and support"
            ]}
            imageSrc="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            imageAlt="Android App Development"
            isReversed={false}
          />
          
          <ServiceDetail
            id="website"
            title="Website Development"
            description="Responsive and modern websites designed to provide the best user experience across all devices and platforms."
            features={[
              "Custom website design and development",
              "Responsive layouts for all devices",
              "SEO-friendly structure and implementation",
              "Content Management Systems (WordPress, etc.)",
              "E-commerce solutions and payment gateway integration"
            ]}
            imageSrc="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            imageAlt="Website Development"
            isReversed={true}
          />
          
          <ServiceDetail
            id="digital"
            title="Digital Marketing"
            description="Strategic digital marketing campaigns that drive traffic, increase conversions, and maximize your online presence."
            features={[
              "Search Engine Optimization (SEO)",
              "Social Media Marketing and Management",
              "Pay-Per-Click (PPC) Advertising",
              "Content Marketing and Strategy",
              "Email Marketing Campaigns",
              "Analytics and Performance Tracking"
            ]}
            imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80"
            imageAlt="Digital Marketing"
            isReversed={false}
          />
          
          <ServiceDetail
            id="influencer"
            title="Influencer Marketing"
            description="Connect with relevant influencers to promote your brand and reach new audiences through authentic partnerships."
            features={[
              "Influencer identification and selection",
              "Campaign planning and strategy",
              "Content creation guidance",
              "Performance tracking and analytics",
              "Long-term influencer relationship management"
            ]}
            imageSrc="https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
            imageAlt="Influencer Marketing"
            isReversed={true}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
