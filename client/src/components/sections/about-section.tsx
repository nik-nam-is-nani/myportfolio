import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate 3rd year engineering student exploring backend development and AI/ML technologies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Java Backend Enthusiast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently in my 3rd year of engineering (Roll No: 23ATA31092), I love building projects that connect 
                strong Java backends with smooth frontends. I've worked on complete management systems with Oracle DB 
                integration and modern web applications with user authentication and database management.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">AI & Machine Learning Explorer</h3>
              <p className="text-muted-foreground leading-relaxed">
I’m passionate about AI-powered autonomous driving and love building realistic car simulation systems. My work focuses on self-driving vehicle simulation, camera-based perception, sensor fusion, and intelligent control logic. I enjoy tackling real-world driving challenges and turning experimental ideas into smooth, high-performance simulation experiences.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-primary" data-testid="text-projects-count">6+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-secondary" data-testid="text-experience-years">3rd</div>
                <div className="text-sm text-muted-foreground">Year Student</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern development workspace with multiple monitors showing code" 
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="img-workspace"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
