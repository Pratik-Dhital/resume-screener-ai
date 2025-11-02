import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Users, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Efficiency",
      description: "Streamline your hiring process and save valuable time with automated resume screening."
    },
    {
      icon: Shield,
      title: "Fairness",
      description: "Eliminate unconscious bias with objective, AI-driven candidate evaluation."
    },
    {
      icon: Lightbulb,
      title: "Transparency",
      description: "Understand every decision with clear, explainable AI recommendations."
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Empower recruiters to make data-driven hiring decisions with confidence."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">About AI Resume Screener</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Revolutionizing the hiring process with transparent, efficient, and fair AI-powered resume screening.
            </p>
          </div>

          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe that finding the right talent should be efficient, fair, and transparent. 
              Our AI-powered platform automates the time-consuming task of resume screening while 
              eliminating unconscious bias and providing clear explanations for every decision.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By combining advanced machine learning with human-centered design, we empower recruiters 
              to make better hiring decisions faster, ensuring both candidates and companies benefit 
              from a more equitable hiring process.
            </p>
          </Card>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <value.icon className="text-primary-foreground" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>Save up to 80% of time spent on resume screening</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>Reduce unconscious bias with objective AI evaluation</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>Get transparent explanations for every candidate ranking</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>Improve quality of hire with data-driven insights</span>
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
