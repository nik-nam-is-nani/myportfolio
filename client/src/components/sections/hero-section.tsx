import { motion } from "framer-motion";
import { ChevronDown, Code, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 parallax-bg opacity-10" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold"
            >

              <span className="block text-white font-extrabold drop-shadow-2xl" style={{textShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(168, 85, 247, 0.4)'}}>
                Hi, I'm
                K. Nikshith
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto"
            >
              Aspiring Backend Developer & AI/ML Enthusiast
            </motion.p>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            I'm a 3rd year engineering student passionate about building robust Java backend systems and exploring AI/ML solutions. 
            From complete management systems to interactive web applications, I love turning ideas into working software.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
              data-testid="button-view-work"
            >
              <Code className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-3"
              data-testid="button-contact"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6 pt-8"
          >
            <a 
              href="https://github.com/nik-nam-is-nani" 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-github"
            >
              <SiGithub className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-linkedin"
            >
              <SiLinkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-primary transition-colors"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </motion.div>
    </section>
  );
}
