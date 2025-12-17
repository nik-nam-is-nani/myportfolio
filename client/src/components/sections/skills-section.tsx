import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Lightbulb, MessageCircle, GitBranch } from "lucide-react";
import { SiOracle, SiKubernetes, SiTensorflow } from "react-icons/si";
import { Coffee } from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const technicalSkills: Skill[] = [
  { name: "Java Programming", percentage: 85, color: "primary" },
  { name: "Backend Development", percentage: 80, color: "secondary" },
  { name: "Database Management", percentage: 75, color: "accent" },
  { name: "Python & AI/ML", percentage: 70, color: "primary" },
  { name: "Frontend Development", percentage: 96, color: "secondary" },
  
];

const certifications = [
  { name: "Oracle Database Fundamentals", icon: SiOracle, color: "text-red-600" },
  { name: "Java Programming Certification", icon: Coffee, color: "text-red-500" },
  { name: "AI/ML Course Completion", icon: SiTensorflow, color: "text-orange-500" },
];

const professionalSkills = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical approach to coding challenges and project development",
    color: "text-primary"
  },
  {
    icon: GitBranch,
    title: "Project Management",
    description: "Organizing and completing projects from concept to deployment",
    color: "text-secondary"
  },
  {
    icon: MessageCircle,
    title: "Learning Agility",
    description: "Quick to adapt and learn new technologies and frameworks",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in team environments and peer programming",
    color: "text-primary"
  },
];

export function SkillsSection() {
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Growing expertise in backend development, database management, and AI/ML exploration
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium" data-testid={`text-skill-${index}`}>
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground text-sm" data-testid={`text-percentage-${index}`}>
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={skillsVisible ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`skill-bar h-2 rounded-full ${
                        skill.color === 'primary' 
                          ? 'bg-primary' 
                          : skill.color === 'secondary'
                          ? 'bg-secondary'
                          : 'bg-accent'
                      }`}
                      data-testid={`bar-skill-${index}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Soft Skills & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Professional Skills</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {professionalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.title}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-card border border-border rounded-lg"
                    data-testid={`card-professional-skill-${index}`}
                  >
                    <IconComponent className={`text-2xl ${skill.color} mb-3`} />
                    <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Certifications</h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <motion.div
                      key={cert.name}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-3 p-3 bg-card border border-border rounded-lg"
                      data-testid={`card-certification-${index}`}
                    >
                      <IconComponent className={cert.color} />
                      <span className="text-foreground">{cert.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
