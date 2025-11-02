import { motion } from "framer-motion";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600";
    if (score >= 70) return "text-blue-600";
    return "text-orange-600";
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
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
              <motion.div
                key={candidate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-semibold">
                          {getInitials(candidate.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground">{candidate.name}</h3>
                        <p className="text-sm text-muted-foreground">{candidate.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Experience</p>
                      <p className="font-medium text-foreground">{candidate.experience}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm text-muted-foreground">Match Score</p>
                        <span className={`text-lg font-bold ${getScoreColor(candidate.matchScore)}`}>
                          {candidate.matchScore}%
                        </span>
                      </div>
                      <Progress value={candidate.matchScore} className="h-2" />
                    </div>

                    <Button
                      className="w-full"
                      variant="outline"
                      onClick={() => navigate(`/candidate/${candidate.id}`)}
                    >
                      <Eye className="mr-2" size={16} />
                      View Details
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
