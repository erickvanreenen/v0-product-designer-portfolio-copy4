/*
  The design and delivery workflow, in order. One source for both the About
  page diagram and the home page band, so the two can never drift apart.
*/
export interface WorkflowStep {
  n: string;
  label: string;
  sub: string[];
}

export const DELIVERY_STEPS: WorkflowStep[] = [
  { n: "01", label: "POC and prototype", sub: ["Claude Code, Cowork"] },
  { n: "02", label: "Refine", sub: [] },
  { n: "03", label: "Present", sub: [] },
  { n: "04", label: "Editable frames", sub: ["written to Figma"] },
  { n: "05", label: "Align to system", sub: ["1:1, then refine as a whole"] },
  { n: "06", label: "Annotations", sub: ["for developers"] },
  { n: "07", label: "Handover", sub: ["with documentation"] },
];
