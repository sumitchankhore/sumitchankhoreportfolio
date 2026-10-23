export type Achievement = { value: string; label: string; detail: string; note?: string };
export const achievements: Achievement[] = [
  { value: '83%', label: 'Faster reporting turnaround', detail: 'Reported reduction associated with Excel / Google Sheets workflow automation.', note: 'Baseline and measurement window should be verified.' },
  { value: '50+', label: 'Professionals in team scope', detail: 'Team leadership / coordination scope referenced in the supplied brief.' },
  { value: '150', label: 'CMEGP beneficiaries', detail: 'Beneficiary count mentioned in the brief; clarify whether managed, supported, or processed.' , note: 'Wording pending resume verification.' },
  { value: '60%', label: 'Campaign engagement uplift', detail: 'Reported increase in tracked campaign engagement.', note: 'Methodology and comparison period require verification.' },
];
