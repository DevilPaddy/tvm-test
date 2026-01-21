
import PageLayout from "@/components/common/PageLayout";
import AboutHero from "@/components/about/AboutHero";
import OurMission from "@/components/about/OurMission";
import CompanyHistory from "@/components/about/CompanyHistory";
import OurTeam from "@/components/about/OurTeam";

const AboutPage = () => {
  return (
    <PageLayout>
      <AboutHero />
      <OurMission />
      <CompanyHistory />
      <OurTeam
        teamMembers={[
          {
            name: "Mayur Bodkhe",
            role: "CEO & Founder",
            bio: "Passionate tech enthusiast with expertise in IT solutions and business strategy. Leads TVM IT Solutions with a vision to transform businesses through innovative technology.",
            image: "/lovable-uploads/74ea8c25-477b-4878-8ec5-93284f92d85b.png",
            email: "mayurbodkhe7918@gmail.com",
            socialLinks: {
              twitter: "https://twitter.com",
              linkedin: "https://linkedin.com",
              github: "https://github.com"
            }
          }
        ]}
      />
    </PageLayout>
  );
};

export default AboutPage;
