import { useState } from 'react';
import { BrainCircuit, ChartNoAxesCombined, Code2, Database, Layers3, MousePointer2 } from 'lucide-react';
import { skillGroups } from '../data/skills';
import SectionHeading from './SectionHeading';
const iconMap = { code: Code2, chart: ChartNoAxesCombined, brain: BrainCircuit, database: Database, layers: Layers3 } as const;
export default function Skills() {
  const [selected, setSelected] = useState('All');
  const filters = ['All', 'Programming', 'Data analytics', 'Machine learning', 'Visualization', 'Databases & tools', 'Additional exposure'];
  const visible = selected === 'All' ? skillGroups : skillGroups.filter((group) => group.title === selected);
  return <section id="skills" className="section section-skills"><div className="shell"><SectionHeading eyebrow="Technical toolkit" title="A growing, practical toolkit." description="Skills are grouped by the kind of work they support, rather than inflated proficiency scores." />
    <div className="skill-filter" role="group" aria-label="Filter skill categories">{filters.map((filter) => <button key={filter} onClick={() => setSelected(filter)} className={selected === filter ? 'filter-pill selected' : 'filter-pill'} aria-pressed={selected === filter}>{filter}</button>)}</div>
    <div className="skills-grid">{visible.map((group, index) => { const Icon = iconMap[group.icon as keyof typeof iconMap]; return <article className="skill-card" key={group.title} style={{ animationDelay: `${index * 70}ms` }}><div className="skill-card-head"><span className="skill-icon"><Icon size={20} /></span><span className="mono-label">GROUP / 0{skillGroups.indexOf(group) + 1}</span></div><h3>{group.title}</h3><p>{group.description}</p><div className="skill-tags">{group.items.map((skill) => <span className="skill-tag" key={skill}>{skill}{skill.endsWith('*') && <span className="sr-only">, experience level to verify</span>}</span>)}</div></article>; })}</div>
    <p className="skill-disclaimer"><MousePointer2 size={14} /> * Power BI and Excel experience level should be checked against the resume before publishing. “Additional exposure” indicates foundational exposure, not advanced proficiency.</p>
  </div></section>;
}
