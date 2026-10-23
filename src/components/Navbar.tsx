import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import { sectionIds } from '../lib/utils';

const links = [{ id: 'about', label: 'About' }, { id: 'impact', label: 'Impact' }, { id: 'skills', label: 'Skills' }, { id: 'experience', label: 'Experience' }, { id: 'projects', label: 'Projects' }, { id: 'education', label: 'Education' }, { id: 'contact', label: 'Contact' }];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const close = () => setOpen(false);
  return <header className="site-header"><nav className="nav shell" aria-label="Main navigation">
    <a className="brand" href="#top" onClick={close} aria-label="Sumit Chankhore home"><span className="brand-mark">SC</span><span>sumit<span className="brand-muted">.chankhore</span></span></a>
    <button className="mobile-menu button-icon" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    <div className={`nav-links ${open ? 'is-open' : ''}`}>{links.map((link) => <a key={link.id} href={`#${link.id}`} onClick={close} className={active === link.id ? 'active' : ''}>{link.label}</a>)}<a className="nav-cta" href="#contact" onClick={close}>Let’s talk <ArrowUpRight size={15} /></a></div>
  </nav></header>;
}
