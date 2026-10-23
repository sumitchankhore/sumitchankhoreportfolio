import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, GraduationCap, LineChart } from 'lucide-react';
import SectionHeading from './SectionHeading';
const steps = [
  { icon: BriefcaseBusiness, title: 'Customer & sales operations', date: '2025', text: 'Started with customer support and sales responsibilities, learning how to handle follow-up, communication, and day-to-day execution.' },
  { icon: ArrowUpRight, title: 'Team leadership & business development', date: '2025–2026', text: 'Expanded into team coordination, lead management, CRM practices, and reporting routines.' },
  { icon: LineChart, title: 'Cluster operations + analytics', date: '2026 onward', text: 'Connecting field-level operational context with stronger data skills and a clearer analytical toolkit.' },
  { icon: GraduationCap, title: 'Data science foundation', date: 'In progress', text: 'Building academic and practical foundations in analytics, statistics, and machine learning.' },
];
export default function Journey() {
  return <section id="journey" className="section section-journey"><div className="shell"><SectionHeading eyebrow="Career journey" title="A path from operations to analytics." description="The thread through each step is a focus on making information more useful for decisions." />
    <div className="journey-grid">{steps.map((step, index) => <article className="journey-step" key={step.title}><div className="journey-top"><span className="journey-icon"><step.icon size={19} /></span><span className="journey-date">{step.date}</span></div><div className="journey-connector"><span /><span /><span /></div><h3>{step.title}</h3><p>{step.text}</p>{index < steps.length - 1 && <ArrowDownRight className="journey-next" size={18} />}</article>)}</div>
  </div></section>;
}
