import { ArrowUpRight, BriefcaseBusiness, ChartNoAxesCombined, Compass, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const pillars = [
  { icon: BriefcaseBusiness, title: 'Operational context', text: 'Experience working with teams, field operations, lead follow-up, and stakeholder coordination.' },
  { icon: ChartNoAxesCombined, title: 'Analytical approach', text: 'An interest in transforming raw information into clear reporting, useful patterns, and better decisions.' },
  { icon: Compass, title: 'Learning mindset', text: 'Building data science foundations through coursework, practical projects, and continuous iteration.' },
];
export default function About() {
  return <section id="about" className="section section-about"><div className="shell"><SectionHeading eyebrow="A little context" title="Business-first thinking. Data-led decisions." description="I’m interested in the point where analytical work meets real operational questions." />
    <div className="about-layout"><div className="about-narrative"><p className="large-copy">Numbers are most useful when they help someone make a better decision.</p><p>My experience in sales operations and team coordination gives me a practical view of how businesses work: where information gets fragmented, why consistent reporting matters, and how follow-through changes outcomes. I’m developing my analytics and machine-learning skills to bring more structure and evidence to those questions.</p><p>I’m currently pursuing a BCA in Data Science / Analytics and looking for opportunities where business understanding and technical curiosity can work together.</p><a href="#contact" className="text-link">Let’s connect <ArrowUpRight size={15} /></a></div>
      <div className="pillar-list">{pillars.map((item, i) => <motion.article className="pillar-card" key={item.title} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><div className="pillar-icon"><item.icon size={20} /></div><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="pillar-number">0{i + 1}</span></motion.article>)}</div></div>
    <div className="about-note"><GraduationCap size={17} /><span>Currently learning and building — with an emphasis on fundamentals, transparent evaluation, and practical business value.</span></div>
  </div></section>;
}
