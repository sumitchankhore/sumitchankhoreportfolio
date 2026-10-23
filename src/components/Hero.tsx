import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Sparkles } from 'lucide-react';
import { emailAddress, githubUrl, linkedinUrl } from '../lib/utils';

function AvatarGraphic() {
  return <div className="avatar-stage" aria-label="Stylized abstract professional avatar illustration" role="img">
    <div className="avatar-orbit orbit-one" /><div className="avatar-orbit orbit-two" />
    <svg className="avatar-svg" viewBox="0 0 420 470" fill="none" aria-hidden="true">
      <defs><linearGradient id="jacket" x1="110" y1="300" x2="320" y2="470" gradientUnits="userSpaceOnUse"><stop stopColor="#263d5e"/><stop offset="1" stopColor="#111b2c"/></linearGradient><linearGradient id="skin" x1="150" y1="90" x2="275" y2="250" gradientUnits="userSpaceOnUse"><stop stopColor="#e8b995"/><stop offset="1" stopColor="#b97959"/></linearGradient><linearGradient id="shirt" x1="180" y1="250" x2="250" y2="410"><stop stopColor="#e8f3fa"/><stop offset="1" stopColor="#93b5cb"/></linearGradient></defs>
      <ellipse cx="210" cy="438" rx="145" ry="14" fill="#070b13" opacity=".45" />
      <path d="M72 430c9-75 44-119 103-139h70c59 20 94 64 103 139v10H72z" fill="url(#jacket)" stroke="#476587" strokeWidth="1.5" />
      <path d="m164 291 46 43 47-43 24 15-38 125h-66l-37-125z" fill="url(#shirt)" />
      <path d="m170 296 40 40-25 24-30-54zM250 296l-40 40 25 24 30-54z" fill="#17283e" />
      <path d="M179 231h62v69c-16 18-46 18-62 0z" fill="url(#skin)" />
      <path d="M147 130c0-55 27-83 66-83 42 0 66 30 66 82v50c0 49-29 80-68 80-37 0-64-32-64-80z" fill="url(#skin)" />
      <path d="M145 150c-12-42-5-88 27-111 21-15 52-18 78-8 28 11 45 35 43 69l-4 38-13-34c-27 0-52-13-69-32-10 23-29 37-55 42z" fill="#1a202b" />
      <path d="M149 139c-14 4-18 22-11 36 4 9 10 14 18 14M276 139c14 4 18 22 11 36-4 9-10 14-18 14" stroke="#b97959" strokeWidth="10" strokeLinecap="round" />
      <path d="M170 158c7-5 16-5 23 0M229 158c7-5 16-5 23 0" stroke="#56392f" strokeWidth="4" strokeLinecap="round" />
      <path d="M182 177c4 3 8 3 12 0M236 177c4 3 8 3 12 0" stroke="#273344" strokeWidth="3" strokeLinecap="round" />
      <path d="M204 177l-5 20 12 4" stroke="#a96d50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M190 215c12 8 26 8 39 0" stroke="#854c3c" strokeWidth="4" strokeLinecap="round" />
      <path d="M144 133c5-38 31-57 54-66 20 19 45 31 78 32l8 34 8-27c3-44-22-76-60-84-40-9-78 8-94 40-12 24-12 51-2 76z" fill="#202733" />
      <path d="M157 136c3-15 7-26 15-37M262 105c5 9 9 20 11 33" stroke="#394658" strokeWidth="5" strokeLinecap="round" />
      <path d="M96 362c19-23 43-35 70-40l44 43 45-43c28 5 52 17 70 40" stroke="#6ee7f9" strokeOpacity=".5" strokeWidth="2" />
      <circle cx="210" cy="335" r="4" fill="#6ee7f9" />
    </svg>
    <div className="float-chip chip-top"><span className="chip-icon"><Sparkles size={15} /></span><span><b>Business + Data</b><small>One perspective</small></span></div>
    <div className="float-chip chip-bottom"><span className="status-pulse" /><span><b>Insight driven</b><small>Curiosity in action</small></span></div>
    <div className="chart-float" aria-hidden="true"><div className="chart-bars"><i /><i /><i /><i /><i /><i /></div><span>DATA → DECISIONS</span></div>
  </div>;
}

export default function Hero() {
  const reduced = useReducedMotion();
  return <section id="top" className="hero-section"><div className="hero-grid-bg" /><div className="hero-glow glow-a" /><div className="hero-glow glow-b" />
    <div className="shell hero-layout">
      <motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="availability"><span className="status-pulse" /> DATA · BUSINESS · MACHINE LEARNING</div>
        <p className="hero-kicker">Hello, I’m Sumit Chankhore</p>
        <h1>Turning business data into <span className="gradient-text">actionable insights.</span></h1>
        <p className="hero-subtitle">Data Analytics <i /> Business Intelligence <i /> Machine Learning</p>
        <p className="hero-description">I’m a data science and analytics student with professional experience in business operations, reporting automation, CRM analytics, and team leadership. I combine business understanding with analytical skills to turn data into meaningful insights.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my projects <ArrowRight size={17} /></a><a className="button button-secondary" href={`mailto:${emailAddress}?subject=${encodeURIComponent('Resume request')}`}>Request resume <ArrowUpRight size={16} /></a></div>
        <div className="hero-socials"><a href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} /></a>{githubUrl ? <a href={githubUrl} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={12} /></a> : <span title="Add your verified GitHub URL before publishing"><Github size={16} /> GitHub <small className="pending-tag">link pending</small></span>}<a href={`mailto:${emailAddress}`}><span className="social-mail">@</span> Email <ArrowUpRight size={12} /></a></div>
      </motion.div>
      <motion.div className="hero-visual" initial={reduced ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85, delay: 0.12 }}><AvatarGraphic /><div className="visual-caption"><span className="mono-label">FIG. 01</span><span>Analytical thinking, grounded in real operations.</span></div></motion.div>
    </div>
    <a href="#about" className="scroll-cue"><span>Scroll to explore</span><ArrowDown size={15} /></a>
  </section>;
}
