import { ArrowUpRight, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import SectionHeading from './SectionHeading';
export default function Experience() {
  return <section id="experience" className="section section-experience"><div className="shell"><SectionHeading eyebrow="Professional experience" title="Learning through real operations." description="A concise overview of roles and responsibilities based on the professional details provided." />
    <div className="experience-timeline">{experience.map((item, index) => <motion.article className="experience-item" key={item.role} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.1 }}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="experience-card"><div className="experience-meta"><span className="experience-kind"><Building2 size={13} /> {item.kind}</span><span className="experience-period">{item.period}</span></div><h3>{item.role}</h3><p className="experience-company">{item.company}</p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></motion.article>)}</div>
    <p className="experience-note">Role descriptions are intentionally high-level; confirm exact responsibilities and dates against the final resume before publishing.</p>
  </div></section>;
}
