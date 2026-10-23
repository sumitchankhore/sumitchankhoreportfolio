import { useEffect } from 'react';
import { ArrowUpRight, Github, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, type Project } from '../data/projects';
import { githubUrl } from '../lib/utils';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';
export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  useEffect(() => { if (!selected) return; const old = document.body.style.overflow; document.body.style.overflow = 'hidden'; const handle = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null); }; window.addEventListener('keydown', handle); return () => { document.body.style.overflow = old; window.removeEventListener('keydown', handle); }; }, [selected]);
  return <section id="projects" className="section section-projects"><div className="shell"><SectionHeading eyebrow="Selected projects" title="Questions worth exploring." description="Project summaries below describe intended workflows. Evaluation results and live demos are not claimed unless verified." />
    <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />)}</div>
    <div className="projects-footer"><span><span className="status-pulse" /> 6 project outlines · results pending verification</span>{githubUrl ? <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">Browse GitHub <Github size={15} /><ArrowUpRight size={13} /></a> : <span className="pending-inline"><Github size={15} /> GitHub profile link needs to be added</span>}</div>
  </div>
  <AnimatePresence>{selected && <motion.div className="modal-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null); }}><motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} transition={{ duration: 0.2 }}><button className="modal-close button-icon" onClick={() => setSelected(null)} aria-label="Close project details"><X size={19} /></button><span className="eyebrow"><span className="eyebrow-dot" />{selected.category}</span><h2 id="modal-title">{selected.title}</h2><p className="modal-summary">{selected.summary}</p><div className="modal-section"><h3>Problem statement</h3><p>{selected.problem}</p></div><div className="modal-section"><h3>Suggested workflow</h3><ol>{selected.approach.map((step) => <li key={step}>{step}</li>)}</ol></div><div className="modal-section"><h3>Technologies</h3><div className="project-tech">{selected.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div><div className="modal-status"><b>{selected.status}</b><p>{selected.evaluation}</p><p><strong>Limitations:</strong> {selected.limitations}</p></div><p className="modal-repo-note">Repository and live demo links will be added once verified. No working ML demo is represented by this portfolio card.</p></motion.div></motion.div>}</AnimatePresence>
  </section>;
}
