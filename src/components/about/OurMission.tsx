
import { Target, Award, Users } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import AnimatedCard from "../common/AnimatedCard";

const values = [
  {
    icon: <Target size={32} />,
    title: "Our Mission",
    description: "To empower businesses with innovative IT solutions that drive growth, efficiency, and digital transformation."
  },
  {
    icon: <Target size={32} />,
    title: "Our Vision",
    description: "To become the leading IT solutions provider, known for quality, innovation, and exceptional client service."
  },
  {
    icon: <Award size={32} />,
    title: "Excellence",
    description: "We are committed to delivering the highest quality solutions and exceeding client expectations."
  },
  {
    icon: <Users size={32} />,
    title: "Collaboration",
    description: "We believe in building strong partnerships with our clients through open communication and teamwork."
  }
];

const OurMission = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Our Values"
          subtitle="These core principles guide everything we do at TVM IT Solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <AnimatedCard key={index} delay={index * 100}>
              <div className="glassmorphism rounded-xl p-8 h-full">
                <div className="p-4 rounded-lg inline-block mb-4 bg-tvm-blue/10 text-tvm-blue">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-tvm-gray">{value.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
