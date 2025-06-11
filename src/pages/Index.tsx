import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X, Code, Brain, Smartphone, Globe, ArrowRight, GraduationCap, MapPin, Calendar, Star } from "lucide-react";
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
      type: "AI/ML",
      featured: true
    },
    {
      title: "Hospital Management System", 
      description: "Full-stack web application for hospital operations, hosted on AWS cloud infrastructure",
      technologies: ["ReactJS", "Flask", "AWS", "SQL"],
      type: "Full-Stack",
      featured: true
    },
    {
      title: "AI-Based Assistive Vision System",
      description: "Android app using TFLite and ML Kit for vision assistance and accessibility",
      technologies: ["Android", "TFLite", "ML Kit", "Kotlin"],
      type: "Mobile AI",
      featured: false
    },
    {
      title: "AI Car Simulation",
      description: "Intelligent car simulation using NEAT algorithm and reinforcement learning techniques",
      technologies: ["Python", "NEAT", "Reinforcement Learning"],
      type: "AI/ML",
      featured: false
    },
    {
      title: "Image Caption Generator",
      description: "Deep learning model combining DenseNet201 and CNN-LSTM for automatic image captioning",
      technologies: ["TensorFlow", "DenseNet201", "CNN-LSTM", "Python"],
      type: "Deep Learning",
      featured: true
    }
  ];

  const services = [
    {
      icon: Globe,
      title: "Front-end Web Development",
      description: "Modern, responsive websites using React, JavaScript, and latest web technologies",
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimization"]
    },
    {
      icon: Code,
      title: "Full-stack Web Applications",
      description: "End-to-end web solutions with robust backend systems and cloud deployment",
      features: ["Database Design", "API Development", "Cloud Deployment"]
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Native Android applications with Java/Kotlin and modern development practices",
      features: ["Native Performance", "Material Design", "Play Store Ready"]
    },
    {
      icon: Brain,
      title: "AI/ML Prototyping & Custom Models",
      description: "Intelligent systems, machine learning models, and AI-powered solutions",
      features: ["Custom Models", "Data Analysis", "AI Integration"]
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

      {/* Enhanced About Section */}
      <section id="about" className="py-20 section-padding bg-secondary/20 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary/30 rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-tech-green/30 rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 border border-tech-purple/30 rounded-lg -rotate-12"></div>
        </div>

        <div className="max-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-6">
              <GraduationCap size={16} />
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Building Tomorrow's Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With a strong foundation in computer science and hands-on experience in software development, 
              I'm passionate about solving real-world problems through scalable and intelligent systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Enhanced Education Card */}
            <Card className="hover-lift group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-primary rounded-full"></div>
                  <h4 className="font-semibold text-primary">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-tech-green font-medium">Specialization in AI & ML</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin size={14} />
                    <span>Vellore Institute of Technology, Andhra Pradesh</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>2021–2025</span>
                  </div>
                </div>
                <div className="relative pl-6 border-l-2 border-border">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-border rounded-full"></div>
                  <h4 className="font-semibold">Intermediate</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin size={14} />
                    <span>Sri Chaitanya Junior College, Guntur</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>2019–2021</span>
                  </div>
                </div>
                <div className="relative pl-6 border-l-2 border-border">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-border rounded-full"></div>
                  <h4 className="font-semibold">Secondary</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin size={14} />
                    <span>Dr KKR Gowtham School, Guntur</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>2018–2019</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Contact Info Card */}
            <Card className="hover-lift group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-tech-green/10 rounded-lg">
                    <Mail className="text-tech-green" size={20} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Get In Touch</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">shaiksohel120@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                    <div className="p-2 bg-tech-green/10 rounded-lg">
                      <span className="text-tech-green text-lg">📱</span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+91 8142383894</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full group hover:bg-primary/5 hover:border-primary/50">
                      <Linkedin size={16} className="mr-2 group-hover:text-primary transition-colors" />
                      LinkedIn
                    </Button>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full group hover:bg-primary/5 hover:border-primary/50">
                      <Github size={16} className="mr-2 group-hover:text-primary transition-colors" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Skills Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Technical Arsenal</h3>
              <p className="text-muted-foreground">Technologies and tools I work with</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={category} className="hover-lift group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{category}</CardTitle>
                      <div className="w-2 h-2 bg-tech-green rounded-full animate-pulse"></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="skill-tag hover:bg-primary/20 hover:text-primary transition-all duration-200"
                          style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                        >
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

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 section-padding relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 border-2 border-primary/30 rounded-full"></div>
          <div className="absolute bottom-40 left-20 w-32 h-32 border-2 border-tech-green/30 rounded-lg rotate-45"></div>
        </div>

        <div className="max-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-tech-green/10 border border-tech-green/20 rounded-full text-sm text-tech-green mb-6">
              <Code size={16} />
              Featured Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Projects That Matter</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical expertise and problem-solving abilities through real-world applications
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Star className="text-tech-green" size={20} />
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <Card key={index} className="hover-lift group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-tech-green/20 text-tech-green border-tech-green/30">
                      <Star size={12} className="mr-1" />
                      Featured
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors pr-16">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="shrink-0">{project.type}</Badge>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 group hover:bg-primary/5 hover:border-primary/50">
                        <Github size={16} className="mr-2 group-hover:text-primary transition-colors" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 group hover:bg-tech-green/5 hover:border-tech-green/50">
                        <ExternalLink size={16} className="mr-2 group-hover:text-tech-green transition-colors" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <Card key={index} className="hover-lift group bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/20 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">{project.type}</Badge>
                    </div>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
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
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 section-padding bg-secondary/20 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-64 h-64 border border-primary/20 rounded-full"></div>
          <div className="absolute bottom-10 right-1/4 w-48 h-48 border border-tech-green/20 rounded-lg rotate-12"></div>
        </div>

        <div className="max-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-tech-purple/10 border border-tech-purple/20 rounded-full text-sm text-tech-purple mb-6">
              <Brain size={16} />
              Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">What I Can Build For You</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, I deliver comprehensive solutions that drive results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift group text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tech-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-tech-green/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-primary group-hover:text-tech-green transition-colors duration-300" size={28} />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-tech-green rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 section-padding relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-10 w-32 h-32 border-2 border-primary/30 rounded-lg rotate-12"></div>
          <div className="absolute bottom-1/4 right-10 w-40 h-40 border border-tech-green/30 rounded-full"></div>
        </div>

        <div className="max-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-6">
              <Mail size={16} />
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Let's Build Something Amazing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and create innovative solutions together.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Send me a message</CardTitle>
                <CardDescription>
                  I'll get back to you within 24 hours. Let's start a conversation!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full tech-glow bg-gradient-to-r from-primary to-tech-green hover:from-primary/90 hover:to-tech-green/90 transition-all duration-300">
                    <Mail size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 section-padding border-t border-border/50 bg-secondary/10">
        <div className="max-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold gradient-text mb-2">Sohel Shaik</h3>
              <p className="text-sm text-muted-foreground">
                Building intelligent solutions for tomorrow's challenges
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300">
                <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300">
                <Github size={20} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="mailto:shaiksohel120@gmail.com"
                 className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300">
                <Mail size={20} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Sohel Shaik. All rights reserved. | Crafted with passion and precision
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

</edits_to_apply>
