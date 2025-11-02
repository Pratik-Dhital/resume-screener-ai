import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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

interface CandidateCardProps {
  candidate: Candidate;
  index: number;
}

const CandidateCard = ({ candidate, index }: CandidateCardProps) => {
  const navigate = useNavigate();

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[380px] flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12 flex-shrink-0">
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-semibold">
                {getInitials(candidate.name)}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground truncate">{candidate.name}</h3>
              <p className="text-sm text-muted-foreground truncate">{candidate.email}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 flex-1 flex flex-col">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Experience</p>
            <p className="font-medium text-foreground">{candidate.experience}</p>
          </div>

          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-2">Skills</p>
            <div className="flex flex-wrap gap-2 max-h-[80px] overflow-y-auto">
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
            className="w-full mt-auto"
            variant="outline"
            onClick={() => navigate(`/candidate/${candidate.id}`)}
          >
            <Eye className="mr-2" size={16} />
            View Details
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default CandidateCard;
