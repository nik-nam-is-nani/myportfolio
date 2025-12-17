import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">K. Nikshith</h3>
            <p className="text-muted-foreground">
              Aspiring Backend Developer & AI/ML Enthusiast, 3rd year engineering student 
              passionate about creating innovative software solutions.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/nik-nam-is-nani" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-github"
              >
                <SiGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/k-nikshith-b4b8b42ba/" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-linkedin"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:nikshithkyathrigi2005@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground" data-testid="text-copyright">
            © 2024 K. Nikshith. Built with passion for clean code and innovative solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
