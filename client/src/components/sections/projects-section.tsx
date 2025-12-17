import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  colors: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: "Supermarket Management System",
    description: "Complete backend system in Java with Oracle DB integration and sleek frontend. Features inventory management, billing system, and customer management with comprehensive reporting.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Java", "Oracle DB", "Swing", "JDBC"],
    colors: ["primary", "secondary", "accent", "primary"],
    githubUrl: "https://github.com/nik-nam-is-nani",
    demoUrl: "#"
  },
  {
    title: "StudyHub Web Application",
    description: "Modern platform with PDF viewer/manager, user authentication system, and dark/light mode toggle. Built with responsive design and intuitive user interface.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "JavaScript", "CSS", "PDF.js"],
    colors: ["primary", "secondary", "accent", "primary"],
    githubUrl: "https://github.com/nik-nam-is-nani",
    demoUrl: "#"
  },
  {
    title: "Real-time Chat Application",
    description: "PyQt6-based chat application with WebChannel integration for real-time messaging. Features username handling, message history, and clean desktop interface.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "PyQt6", "WebChannel", "Sockets"],
    colors: ["primary", "secondary", "accent", "primary"],
    githubUrl: "https://github.com/nik-nam-is-nani",
    demoUrl: "#"
  },
  {
    title: "CARLA Self-Driving Car Simulation",
    description: "Advanced autonomous driving simulation built on CARLA. Uses CNN-based steering (NVIDIA model), Faster R-CNN traffic-light detection, LiDAR obstacle avoidance, semantic segmentation recovery, and GPU-accelerated inference with real-time route planning.",
    image: "https://www.cogitotech.com/wp-content/uploads/2020/08/lidar-in-self-driving-cars-1080x6751626616413-1.jpg",
    technologies: [
      "Python",
      "CARLA Simulator",
      "PyTorch",
      "Faster R-CNN",
      "LiDAR"
    ],
    colors: ["primary", "secondary", "accent", "primary", "secondary"],
    githubUrl: "https://github.com/nik-nam-is-nani/car_simulation_carla",
    demoUrl: "#"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in backend development and AI implementation
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card-hover bg-card border border-border rounded-xl overflow-hidden shadow-lg"
              data-testid={`card-project-${index}`}
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`img-project-${index}`}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`text-title-${index}`}>
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a 
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-github-${index}`}
                    >
                      <SiGithub className="h-4 w-4" />
                    </a>
                    <a 
                      href={project.demoUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-demo-${index}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed" data-testid={`text-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`text-xs ${
                        project.colors[techIndex] === 'primary' 
                          ? 'bg-primary/20 text-primary' 
                          : project.colors[techIndex] === 'secondary'
                          ? 'bg-secondary/20 text-secondary'
                          : 'bg-accent/20 text-accent'
                      }`}
                      data-testid={`badge-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/nik-nam-is-nani"
            className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
            data-testid="link-all-projects"
          >
            <SiGithub className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
