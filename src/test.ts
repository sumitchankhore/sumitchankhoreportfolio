import { describe, expect, it } from 'vitest';
import { projects } from './data/projects';
import { skillGroups } from './data/skills';
import { experience } from './data/experience';

describe('portfolio content integrity', () => {
  it('contains six uniquely identified project outlines', () => {
    expect(projects).toHaveLength(6);
    expect(new Set(projects.map((project) => project.id)).size).toBe(projects.length);
    expect(projects.every((project) => project.evaluation.length > 0)).toBe(true);
  });
  it('contains skill categories and a career timeline', () => {
    expect(skillGroups.length).toBeGreaterThanOrEqual(5);
    expect(experience[0]?.role).toBe('Cluster Manager');
  });
});
