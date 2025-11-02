import { motion } from "framer-motion";
import { ArrowLeft, Download, Mail, Briefcase, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";

const CandidateDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const candidate = {
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    experience: "5 years",
    matchScore: 95,
    skills: ["React", "TypeScript", "Node.js", "AWS", "GraphQL", "Docker"],
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "Stanford University",
        year: "2018"
      },
      {
        degree: "Bachelor of Science in Software Engineering",
        institution: "MIT",
        year: "2016"
      }
    ],
    experience_details: [
      {
        title: "Senior Frontend Developer",
        company: "Tech Corp",
        duration: "2021 - Present",
        description: "Leading frontend architecture and team of 5 developers"
      },
      {
        title: "Frontend Developer",
        company: "StartupXYZ",
        duration: "2018 - 2021",
        description: "Developed responsive web applications using React and TypeScript"
      }
    ],
    aiExplanation: {
      strengths: [
        "Strong technical skills matching 90% of required technologies",
        "Extensive experience with React and TypeScript (5+ years)",
        "Leadership experience managing development teams",
        "Master's degree from top-tier university"
      ],
      considerations: [
        "Limited experience with cloud infrastructure (AWS)",
        "No mention of Agile/Scrum methodologies"
      ],
      recommendation: "Highly recommended candidate. Strong technical background with relevant experience. Consider for technical interview round."
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Dashboard
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Candidate Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                      {candidate.name}
                    </h1>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex items-center">
                        <Mail className="mr-2" size={16} />
                        {candidate.email}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {candidate.matchScore}%
                    </div>
                    <p className="text-sm text-muted-foreground">Match Score</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3 p-4 bg-accent rounded-lg">
                    <Briefcase className="text-primary" size={24} />
                    <div>
                      <p className="text-sm text-muted-foreground">Experience</p>
                      <p className="font-semibold text-foreground">{candidate.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-accent rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                    <div>
                      <p className="text-sm text-muted-foreground">Education</p>
                      <p className="font-semibold text-foreground">Master's Degree</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <Award className="mr-2 text-primary" size={20} />
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm py-1 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <GraduationCap className="mr-2 text-primary" size={20} />
                    Education
                  </h2>
                  <div className="space-y-4">
                    {candidate.education.map((edu, idx) => (
                      <div key={idx} className="border-l-2 border-primary pl-4">
                        <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Briefcase className="mr-2 text-primary" size={20} />
                    Work Experience
                  </h2>
                  <div className="space-y-4">
                    {candidate.experience_details.map((exp, idx) => (
                      <div key={idx} className="border-l-2 border-primary pl-4">
                        <h3 className="font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  size="lg"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate("/dashboard")}>
                  Back
                </Button>
              </div>
            </div>

            {/* Right Column - AI Explanation */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-20">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  AI Analysis
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-green-600 mb-3">Strengths</h3>
                    <ul className="space-y-2">
                      {candidate.aiExplanation.strengths.map((strength, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex">
                          <span className="text-green-600 mr-2">✓</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-orange-600 mb-3">Considerations</h3>
                    <ul className="space-y-2">
                      {candidate.aiExplanation.considerations.map((consideration, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex">
                          <span className="text-orange-600 mr-2">!</span>
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-2">Recommendation</h3>
                    <p className="text-sm text-muted-foreground">
                      {candidate.aiExplanation.recommendation}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CandidateDetails;
