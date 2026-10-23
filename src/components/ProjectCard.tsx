import { ArrowUpRight, Database, FlaskConical, LineChart, MessageSquareText, ScanSearch } from 'lucide-react';
import type { Project } from '../data/projects';
const icons = [LineChart, ScanSearch, Database, MessageSquareText, FlaskConical, Database];
type Props = { project: Project; index: number; onOpen: (project: Project) => void };
export default function ProjectCard({ project, index, onOpen }: Props) {
  const Icon = icons[index % icons.length];
  return <article className={`project-card accent-${project.accent}`}><div className="project-art"><div className="project-art-grid" /><div className="project-art-top"><span className="project-category">{project.category}</span><span className="project-art-icon"><Icon size={20} /></span></div><div className="project-visual-lines"><span /><span /><span /><span /></div><div className="project-art-footer"><span>PROJECT / {String(index + 1).padStart(2, '0')}</span><span>PORTFOLIO STUDY</span></div></div>
    <div className="project-content"><div className="project-title-row"><h3>{project.title}</h3><span className="project-status">{project.status}</span></div><p>{project.summary}</p><div className="project-tech">{project.stack.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div><button className="project-open" onClick={() => onOpen(project)}>Explore project <ArrowUpRight size={15} /></button></div>
  </article>;
}
