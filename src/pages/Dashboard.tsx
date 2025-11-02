import { motion } from "framer-motion";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CandidateCard from "@/components/CandidateCard";

interface Candidate {
  id: number;
  name: string;
  email: string;
  experience: string;
  skills: string[];
  matchScore: number;
}

const mockCandidates: Candidate[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    experience: "5 years",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    matchScore: 95
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@email.com",
    experience: "7 years",
    skills: ["Python", "Machine Learning", "TensorFlow", "Docker"],
    matchScore: 88
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    experience: "4 years",
    skills: ["JavaScript", "Vue.js", "GraphQL", "MongoDB"],
    matchScore: 82
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.k@email.com",
    experience: "6 years",
    skills: ["Java", "Spring Boot", "Kubernetes", "PostgreSQL"],
    matchScore: 79
  },
  {
    id: 5,
    name: "Jessica Taylor",
    email: "j.taylor@email.com",
    experience: "3 years",
    skills: ["React", "Redux", "CSS", "Figma"],
    matchScore: 75
  },
  {
    id: 6,
    name: "Alex Martinez",
    email: "alex.m@email.com",
    experience: "8 years",
    skills: ["C++", "System Design", "Linux", "Redis"],
    matchScore: 71
  }
];

const Dashboard = () => {
  const [sortBy, setSortBy] = useState("score");
  const [candidates, setCandidates] = useState(mockCandidates);

  const handleSort = (value: string) => {
    setSortBy(value);
    const sorted = [...candidates].sort((a, b) => {
      if (value === "score") return b.matchScore - a.matchScore;
      if (value === "experience") {
        const expA = parseInt(a.experience);
        const expB = parseInt(b.experience);
        return expB - expA;
      }
      return 0;
    });
    setCandidates(sorted);
  };


  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Candidate Dashboard</h1>
              <p className="text-muted-foreground">
                {candidates.length} candidates analyzed and ranked
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Select value={sortBy} onValueChange={handleSort}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Sort by..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="score">Sort by Score</SelectItem>
                  <SelectItem value="experience">Sort by Experience</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidates.map((candidate, index) => (
              <CandidateCard key={candidate.id} candidate={candidate} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
