import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Globe, 
  Smartphone,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

// Import project images
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectAnalytics from "@/assets/project-analytics.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "React", level: 88 },
    { name: "Node.js", level: 82 },
    { name: "SQL", level: 80 },
    { name: "Java", level: 78 },
    { name: "Git", level: 85 },
    { name: "Docker", level: 75 }
  ];

  const projects = [
    {
      title: "Smart Dashboard Analytics",
      description: "A comprehensive web application with real-time data visualization, user management, and advanced analytics features built with React and Node.js.",
      image: projectDashboard,
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      github: "#",
      live: "#"
    },
    {
      title: "Mobile Task Manager",
      description: "Cross-platform mobile application for task management with offline capabilities, push notifications, and team collaboration features.",
      image: projectMobile,
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      github: "#",
      live: "#"
    },
    {
      title: "Data Insights Platform",
      description: "Machine learning powered analytics platform that processes large datasets and provides actionable business insights through interactive visualizations.",
      image: projectAnalytics,
      technologies: ["Python", "Django", "TensorFlow", "PostgreSQL"],
      github: "#",
      live: "#"
    }
  ];

  const experiences = [
    {
      type: "internship",
      title: "Software Engineering Intern",
      company: "Tech Solutions Inc.",
      period: "Jun 2024 - Aug 2024",
      description: "Developed and optimized web applications, collaborated with senior developers on major projects, and improved system performance by 25%."
    },
    {
      type: "education",
      title: "Bachelor of Technology in Computer Science",
      company: "XYZ Engineering College",
      period: "2021 - 2025",
      description: "CGPA: 8.7/10. Specialized in software engineering and data structures. Active member of coding club and technical societies."
    },
    {
      type: "project",
      title: "Final Year Project",
      company: "AI-Powered Code Review System",
      period: "Jan 2024 - Present",
      description: "Leading a team of 4 to develop an intelligent code review system using machine learning algorithms to detect bugs and suggest improvements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 glass-effect border-b transition-smooth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary">Portfolio</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-smooth hover:text-accent ${
                    activeSection === item.toLowerCase() ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-background border-t py-4 animate-fade-in">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-sm font-medium hover:text-accent transition-smooth"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hello, I'm <span className="text-yellow-300">Alex Johnson</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100">
              Computer Science Engineering Student | Full-Stack Developer | Ready for Placements
            </p>
            <p className="text-lg mb-12 text-blue-50 max-w-2xl mx-auto">
              Passionate about creating innovative solutions through code. Experienced in modern web technologies 
              and always eager to tackle challenging problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => scrollToSection("projects")}
                className="transition-bounce hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-bounce hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="mt-16 animate-float">
              <ChevronDown 
                size={32} 
                className="mx-auto cursor-pointer" 
                onClick={() => scrollToSection("about")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                  I'm a final-year Computer Science Engineering student with a passion for building 
                  scalable web applications and solving complex problems through code. My journey in 
                  software development started with curiosity and has evolved into expertise across 
                  multiple technologies.
                </p>
                <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                  Throughout my academic journey, I've consistently maintained excellent grades while 
                  actively participating in coding competitions, hackathons, and open-source projects. 
                  I believe in continuous learning and staying updated with the latest technology trends.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="text-accent" size={20} />
                    <span className="font-medium">CSE Student</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="text-accent" size={20} />
                    <span className="font-medium">Full-Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-accent" size={20} />
                    <span className="font-medium">Open to Opportunities</span>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in">
                <Card className="shadow-medium transition-smooth hover:shadow-strong">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>🎓 Final Year CSE Student (CGPA: 8.7/10)</li>
                      <li>💻 3+ Years of Programming Experience</li>
                      <li>🏆 Winner of 2 Hackathons</li>
                      <li>📚 Published 1 Research Paper</li>
                      <li>🌟 200+ Problems Solved on LeetCode</li>
                      <li>🤝 Active Open Source Contributor</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">Skills & Technologies</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Technical Skills */}
              <div className="animate-slide-in">
                <h3 className="text-2xl font-semibold mb-8">Technical Proficiency</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className={`animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="accent-gradient h-2 rounded-full transition-smooth"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Domain Expertise */}
              <div className="animate-slide-in">
                <h3 className="text-2xl font-semibold mb-8">Domain Expertise</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Globe, title: "Web Development", desc: "Full-stack applications" },
                    { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform solutions" },
                    { icon: Database, title: "Database Design", desc: "SQL & NoSQL databases" },
                    { icon: Code, title: "Algorithm Design", desc: "Data structures & algorithms" }
                  ].map((domain, index) => (
                    <Card key={domain.title} className={`text-center p-6 shadow-soft transition-smooth hover:shadow-medium hover:scale-105 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <domain.icon className="mx-auto mb-4 text-accent" size={40} />
                      <h4 className="font-semibold mb-2">{domain.title}</h4>
                      <p className="text-sm text-muted-foreground">{domain.desc}</p>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Additional Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Problem Solving", "System Design", "API Development", "Testing", "DevOps", "UI/UX", "Agile", "Leadership"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="transition-smooth hover:scale-105">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">Featured Projects</h2>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={project.title} className={`overflow-hidden shadow-medium transition-smooth hover:shadow-strong hover:scale-105 animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-smooth hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-smooth flex items-center justify-center">
                      <div className="flex gap-3">
                        <Button size="sm" variant="secondary" className="shadow-soft">
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                        <Button size="sm" variant="secondary" className="shadow-soft">
                          <ExternalLink size={16} className="mr-2" />
                          Live
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">Experience & Education</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className={`shadow-soft transition-smooth hover:shadow-medium animate-slide-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <Badge variant="secondary">{exp.period}</Badge>
                        <Badge variant="outline">
                          {exp.type === 'internship' ? <Briefcase size={12} className="mr-1" /> : 
                           exp.type === 'education' ? <GraduationCap size={12} className="mr-1" /> : 
                           <Code size={12} className="mr-1" />}
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 animate-fade-in">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
              I'm actively seeking full-time opportunities and would love to discuss how I can contribute 
              to your team. Feel free to reach out!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Mail, title: "Email", value: "alex.johnson@email.com", link: "mailto:alex.johnson@email.com" },
                { icon: Linkedin, title: "LinkedIn", value: "/in/alex-johnson", link: "https://linkedin.com/in/alex-johnson" },
                { icon: Github, title: "GitHub", value: "/alex-johnson", link: "https://github.com/alex-johnson" }
              ].map((contact, index) => (
                <Card key={contact.title} className={`text-center p-6 shadow-soft transition-smooth hover:shadow-medium hover:scale-105 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <contact.icon className="mx-auto mb-4 text-accent" size={32} />
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  <a 
                    href={contact.link}
                    className="text-muted-foreground hover:text-accent transition-smooth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.value}
                  </a>
                </Card>
              ))}
            </div>
            
            <div className="animate-fade-in">
              <Button 
                size="lg" 
                className="accent-gradient text-white shadow-medium hover:shadow-strong transition-bounce hover:scale-105"
                onClick={() => window.open("mailto:alex.johnson@email.com", "_blank")}
              >
                <Mail className="mr-2" size={20} />
                Send Me an Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Alex Johnson. Built with React & TypeScript. Ready for placements!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;