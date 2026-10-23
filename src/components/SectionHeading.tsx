import { motion, useReducedMotion } from 'framer-motion';

type Props = { eyebrow: string; title: string; description?: string; align?: 'left' | 'center' };
export default function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  const reduced = useReducedMotion();
  return <motion.div className={`section-heading ${align === 'center' ? 'center' : ''}`} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55 }}>
    <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </motion.div>;
}
