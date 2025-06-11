
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X, Code, Brain, Smartphone, Globe, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = {
    "Programming Languages": ["Java", "Python", "C++", "SQL"],
    "Web Technologies": ["HTML", "CSS", "JavaScript", "ReactJS", "AngularJS", "Flask"],
    "AI/ML Tools": ["TensorFlow", "Scikit-learn", "PyTorch", "NLTK", "Pandas", "NumPy"],
    "Tools": ["GitHub", "VS Code", "AWS", "Excel"],
    "Mobile": ["Android Dev (Java, Kotlin)"]
  };

  const projects = [
    {
      title: "Context Based GPT",
      description: "RAG-based chatbot using Ollama & Hugging Face for intelligent, context-aware conversations",
      technologies: ["Python", "Ollama", "Hugging Face", "RAG"],
      type: "AI/ML"
    },
    {
      title: "Hospital Management System", 
      description: "Full-stack web application for hospital operations, hosted on AWS cloud infrastructure",
      technologies: ["ReactJS", "Flask", "AWS", "SQL"],
      type: "Full-Stack"
    },
    {
      title: "AI-Based Assistive Vision System",
      description: "Android app using TFLite and ML Kit for vision assistance and accessibility",
      technologies: ["Android", "TFLite", "ML Kit", "Kotlin"],
      type: "Mobile AI"
    },
    {
      title: "AI Car Simulation",
      description: "Intelligent car simulation using NEAT algorithm and reinforcement learning techniques",
      technologies: ["Python", "NEAT", "Reinforcement Learning"],
      type: "AI/ML"
    },
    {
      title: "Image Caption Generator",
      description: "Deep learning model combining DenseNet201 and CNN-LSTM for automatic image captioning",
      technologies: ["TensorFlow", "DenseNet201", "CNN-LSTM", "Python"],
      type: "Deep Learning"
    }
  ];

  const services = [
    {
      icon: Globe,
      title: "Front-end Web Development",
      description: "Modern, responsive websites using React, JavaScript, and latest web technologies"
    },
    {
      icon: Code,
      title: "Full-stack Web Applications",
      description: "End-to-end web solutions with robust backend systems and cloud deployment"
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Native Android applications with Java/Kotlin and modern development practices"
    },
    {
      icon: Brain,
      title: "AI/ML Prototyping & Custom Models",
      description: "Intelligent systems, machine learning models, and AI-powered solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold gradient-text">Sohel Shaik</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#projects" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#services" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#contact" className="py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative pt-24 pb-20 section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-green/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tech-purple/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[80vh]">
            <div className="flex-1 text-center lg:text-left">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-6 animate-fade-in">
                <div className="w-2 h-2 bg-tech-green rounded-full animate-pulse"></div>
                Available for opportunities
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                Hi, I'm{" "}
                <span className="relative">
                  <span className="gradient-text">Sohel Shaik</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-tech-green rounded-full"></div>
                </span>
              </h1>

              {/* Tagline */}
              <div className="mb-6 animate-slide-in">
                <p className="text-xl md:text-3xl font-semibold text-foreground mb-2">
                  Innovating with <span className="text-primary">Code</span>.
                </p>
                <p className="text-xl md:text-3xl font-semibold text-foreground">
                  Solving with <span className="text-tech-green">Intelligence</span>.
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-fade-in">
                Aspiring Software Engineer specializing in <span className="text-primary font-medium">AI & ML</span>, passionate about creating 
                <span className="text-tech-green font-medium"> scalable and intelligent systems</span> that drive meaningful change.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in">
                <Button size="lg" className="group tech-glow bg-gradient-to-r from-primary to-tech-green hover:from-primary/90 hover:to-tech-green/90 transition-all duration-300">
                  <a href="#projects" className="flex items-center gap-2">
                    Explore My Work
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group border-primary/30 hover:border-primary hover:bg-primary/5">
                  <Download size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                  Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center lg:justify-start animate-slide-in">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   className="group p-3 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300">
                  <Linkedin size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                   className="group p-3 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300">
                  <Github size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href="mailto:shaiksohel120@gmail.com"
                   className="group p-3 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300">
                  <Mail size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
            
            {/* Profile Image Section */}
            <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="absolute -top-2 -right-6 w-6 h-6 bg-tech-green rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-6 -left-2 w-4 h-4 bg-tech-purple rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
                
                {/* Main Image Container */}
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-tech-green to-tech-purple rounded-full p-1 animate-pulse">
                    <div className="w-full h-full bg-background rounded-full p-2">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                        alt="Sohel Shaik"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Skill Tags Floating Around */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary/20 text-primary border-primary/30 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                      React
                    </Badge>
                  </div>
                  <div className="absolute top-1/4 -right-8">
                    <Badge className="bg-tech-green/20 text-tech-green border-tech-green/30 animate-fade-in" style={{ animationDelay: '1s' }}>
                      AI/ML
                    </Badge>
                  </div>
                  <div className="absolute bottom-1/4 -left-8">
                    <Badge className="bg-tech-purple/20 text-tech-purple border-tech-purple/30 animate-fade-in" style={{ animationDelay: '1.5s' }}>
                      Python
                    </Badge>
                  </div>
                  <div className="absolute -bottom-6 right-1/4">
                    <Badge className="bg-primary/20 text-primary border-primary/30 animate-fade-in" style={{ animationDelay: '2s' }}>
                      AWS
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-padding bg-secondary/20">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With a strong foundation in computer science and hands-on experience in software development, 
              I'm passionate about solving real-world problems through scalable and intelligent systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Education */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-muted-foreground">Specialization in AI & ML</p>
                  <p className="text-sm text-muted-foreground">Vellore Institute of Technology, Andhra Pradesh (2021–2025)</p>
                </div>
                <div>
                  <h4 className="font-semibold">Intermediate</h4>
                  <p className="text-sm text-muted-foreground">Sri Chaitanya Junior College, Guntur (2019–2021)</p>
                </div>
                <div>
                  <h4 className="font-semibold">Secondary</h4>
                  <p className="text-sm text-muted-foreground">Dr KKR Gowtham School, Guntur (2018–2019)</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" size={20} />
                  <span>shaiksohel120@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">📱</span>
                  <span>+91 8142383894</span>
                </div>
                <div className="flex gap-4 pt-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="skill-tag">
                          {skill}
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

      {/* Projects Section */}
      <section id="projects" className="py-20 section-padding">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my technical expertise and problem-solving abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 section-padding bg-secondary/20">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <p className="text-lg text-muted-foreground">
              What I can help you build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-padding">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground">
              Ready to bring your ideas to life? Let's discuss your project.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full tech-glow">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 section-padding border-t border-border">
        <div className="max-container text-center">
          <p className="text-muted-foreground">
            © 2024 Sohel Shaik. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
