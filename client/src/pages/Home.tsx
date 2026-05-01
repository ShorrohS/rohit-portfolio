import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Award, Briefcase, Code, Download, ExternalLink, Mail } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Modern Professional Minimalist
 * - Deep Navy primary (#1a365d) for trust and professionalism
 * - Warm Coral accent (#ff6b35) for highlights and CTAs
 * - Playfair Display for headings, Inter for body
 * - Generous whitespace and subtle animations
 */

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  highlights: string[];
}

interface Skill {
  category: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Business Analyst",
    company: "Nissan Digital India LLP",
    period: "Sep 2024 – Present",
    location: "Trivandrum, Kerala",
    description: [
      "Leading E2E Project Management for a global greenfield project digitalizing TM/TC workflow for Post-Sales Vehicle Incident Management across multiple Nissan Subsidiaries worldwide.",
      "Owned the entire project lifecycle including Requirement Gathering, BRD & User Story creation, backlog grooming, and Agile ceremonies.",
      "Championed DevOps & SE best practices, achieving 'Advance Level' maturity in NDI's Agile/DevOps assessment.",
    ],
    highlights: [
      "¥160M/year estimated cost savings",
      "Global best practice project delivery model",
      "Leadership recognition from GM, IB3 Division",
    ],
  },
  {
    title: "Assistant Vice President (Lead - Process & New Initiatives)",
    company: "RBL Finserve Limited",
    period: "Apr 2024 – Aug 2024",
    location: "Navi Mumbai, Maharashtra",
    description: [
      "Spearheaded strategic improvement initiatives in Retail Lending Systems (LOS, LMS), managing 16+CR deliverables under strict regulatory timelines.",
      "Designed Wireframes and User Stories, conducted feasibility studies, created BRDs, and tracked development through UAT and deployment of 4+ internal products.",
      "Led R&D to integrate latest IT services into core LOS & LMS applications.",
    ],
    highlights: [
      "25% reduction in Process failures",
      "4+ internal products deployed",
      "Modernized internal systems & processes",
    ],
  },
  {
    title: "Deputy Manager (Retail Advances)",
    company: "State Bank of India",
    period: "Aug 2021 – Mar 2023",
    location: "Trivandrum, Kerala",
    description: [
      "Conducted end-to-end testing of SBI's Retail Loan Management System, reducing 200+ data entry points to 25+.",
      "Revamped 30+ branches from physical to cloud-based servers with Azure VM-Ware.",
    ],
    highlights: [
      "200+ data entry points reduced to 25+",
      "30+ branches migrated to cloud",
      "Enhanced efficiency & compliance reporting",
    ],
  },
  {
    title: "Deputy Manager (HR)",
    company: "State Bank of India",
    period: "Jan 2021 – Jul 2021",
    location: "Trivandrum, Kerala",
    description: [
      "Led a 20+ member agile team (Kanban) to design & develop an internal product (Covid Data Portal) to automate & visualize health status tracking of 14k+ employees.",
      "Awarded with 'Pearl' recognition from Top Management for automating data reporting and visualization.",
    ],
    highlights: [
      "14k+ employees impacted",
      "'Pearl' recognition award",
      "Business Continuity ensured during Covid'19",
    ],
  },
];

const skills: Skill[] = [
  {
    category: "Product Management",
    skills: [
      "E2E Product Management",
      "Product Analysis",
      "Agile Scrum",
      "Requirement Gathering",
      "BRD & User Story Creation",
      "Product Strategy",
      "Feasibility Studies",
      "Wireframing",
    ],
  },
  {
    category: "Digital Transformation & AI",
    skills: [
      "AI for Data Analytics",
      "Digital Transformation",
      "Cloud Migration",
      "DevOps",
      "CI/CD Pipelines",
      "AI-image analyzer APIs",
      "QR-code based payments",
      "UPI integrations",
    ],
  },
  {
    category: "Leadership",
    skills: [
      "Program Management",
      "Project Management",
      "Team Leadership",
      "Cross-functional Coordination",
      "Stakeholder Management",
      "Business Development",
    ],
  },
  {
    category: "Domain Expertise",
    skills: ["BFSI", "Retail Lending", "Retail Banking", "Automotive Tech", "EdTech", "Credit Risk Management"],
  },
];

const certifications = [
  "Professional Scrum Product Owner I (PSPO I) – Scrum.org",
  "Advanced Product Management - Agile Methodologies – Institute of Product Leadership",
  "AI For Engineers – Outskill",
  "Vibe Coding: Use AI & Python to Automate and Prototype Idea – Vibe Coding Academy",
  "Google Project Management Professional Certificate",
  "Aha! Product Management Professional Certificate",
];

const awards = [
  { title: "CFO Award", company: "Nissan Digital" },
  { title: "ACE Employee of Nissan Digital FY26", company: "Nissan Digital" },
  { title: "Project Kibin - Most Agile Project Winner", company: "Nissan Digital" },
  { title: "'Pearl' Recognition", company: "State Bank of India" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"experience" | "skills" | "certifications">("experience");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            Rohit SS
          </div>
          <div className="flex gap-8 items-center">
            <a href="#experience" className="text-sm font-medium hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
            <Button className="bg-accent hover:bg-accent/90 text-white gap-2">
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032507663/5UQY8ez3dBfedm4nFsiuYE/hero-background-o9iZgDTGTWDWHHAV2GYjza.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />

        <div className="container relative z-20 max-w-4xl mx-auto">
          <div className="space-y-6 text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Senior Product Manager & Digital Transformation Leader
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Driving innovation in BFSI and Automotive Tech. Proven expertise in E2E product management, AI-driven solutions, and building high-performing teams. Delivered ¥160M+ in cost savings and led global digital transformation initiatives.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-accent hover:bg-accent/90 text-white gap-2 text-lg px-8 py-6">
                View My Work <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">¥160M</div>
              <p className="text-muted-foreground">Cost Savings Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">25%</div>
              <p className="text-muted-foreground">Process Improvement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">14k+</div>
              <p className="text-muted-foreground">People Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-primary">Professional Experience</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            A track record of driving innovation and delivering measurable business impact across BFSI, Automotive, and Digital Transformation.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <Card key={idx} className="p-8 border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">{exp.title}</h3>
                    <p className="text-lg text-accent font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p className="font-medium">{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="text-foreground leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {exp.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="inline-block bg-secondary text-foreground px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white border-b border-border">
        <div
          className="absolute inset-0 opacity-30 -z-10"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032507663/5UQY8ez3dBfedm4nFsiuYE/skills-section-bg-RQ6qfUQVZF9HKLMV6ugrR8.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container max-w-4xl relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-primary">Skills & Expertise</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            A comprehensive skill set spanning product management, digital transformation, and leadership.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <Card key={idx} className="p-6 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-primary/10 to-accent/10 text-foreground px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-accent" />
                Certifications
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-accent font-bold text-lg mt-1">•</span>
                    <span className="text-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-accent" />
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {awards.map((award, idx) => (
                  <Card key={idx} className="p-4 border border-accent/20 bg-accent/5">
                    <p className="font-semibold text-foreground">{award.title}</p>
                    <p className="text-sm text-muted-foreground">{award.company}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-primary">Education</h2>
          <div className="space-y-6">
            <Card className="p-6 border border-border">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-primary">Master of Business Administration (MBA)</h3>
                  <p className="text-accent font-semibold">Indian Institute of Management, Kozhikode</p>
                  <p className="text-sm text-muted-foreground mt-1">PGP-Business Leadership (PGPBL)</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground">2023 – 2024</span>
              </div>
            </Card>
            <Card className="p-6 border border-border">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-primary">Diploma in Computer Applications</h3>
                  <p className="text-accent font-semibold">C-DIT (Centre for Development of Imaging Technology)</p>
                  <p className="text-sm text-muted-foreground mt-1">Skills: RDBMS, C Programming</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground">Nov 2017</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-white/90 mb-8">
            I'm open to discussing product management opportunities, digital transformation initiatives, or strategic partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-primary gap-2 text-lg px-8 py-6">
              <Mail className="w-5 h-5" />
              Send Email
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70">
              Email: rohit04bl@iimklive.com | Phone: +91 9645480078
            </p>
            <p className="text-white/70 mt-2">
              Based in Trivandrum, Kerala, India | Open to International Opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 border-t border-primary/20">
        <div className="container text-center text-white/70">
          <p>© 2025 Rohit SS. All rights reserved. | Crafted with precision for international opportunities.</p>
        </div>
      </footer>
    </div>
  );
}
