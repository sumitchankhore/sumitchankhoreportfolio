import { AlertCircle, ArrowUpRight, Gauge, Users, Workflow, TrendingUp } from 'lucide-react';
import { achievements } from '../data/achievements';
import SectionHeading from './SectionHeading';
const icons = [Gauge, Users, Workflow, TrendingUp];
export default function ImpactMetrics() {
  return <section id="impact" className="section section-impact"><div className="shell"><SectionHeading eyebrow="Impact snapshot" title="Work measured by outcomes." description="Selected figures mentioned in the supplied brief. Supporting definitions and measurement periods should be confirmed before public use." />
    <div className="metrics-grid">{achievements.map((metric, i) => { const Icon = icons[i]; return <article className="metric-card" key={metric.label}><div className="metric-top"><span className="metric-icon"><Icon size={18} /></span><span className="metric-index">0{i + 1} / IMPACT</span></div><div className="metric-value">{metric.value}</div><h3>{metric.label}</h3><p>{metric.detail}</p>{metric.note && <div className="metric-note"><AlertCircle size={13} /> {metric.note}</div>}</article>; })}</div>
    <div className="impact-footnote"><span className="status-pulse" /> Metrics are presented as reported, not independently audited. No synthetic revenue or conversion claims are used.</div>
  </div></section>;
}
