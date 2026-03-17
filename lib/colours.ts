/**
 * Portfolio Colour Palette
 * Source: Brand colour reference (filed 2026-03-04)
 */

export const colours = {
  venetianLace:  { hex: "#F7EDDA", name: "Venetian Lace",  contrast: "18.08:1" },
  fieryGlow:     { hex: "#F0531C", name: "Fiery Glow",     contrast: "3.52:1"  },
  fenceGreen:    { hex: "#09332C", name: "Fence Green",    contrast: "13.8:1"  },
  macadamiaBeige:{ hex: "#F7DFBA", name: "Macadamia Beige",contrast: "16.21:1" },
  pumpkinVapor:  { hex: "#FFA74F", name: "Pumpkin Vapor",  contrast: "10.89:1" },
  norfolkGreen:  { hex: "#2E4B3C", name: "Norfolk Green",  contrast: "9.59:1"  },
} as const;

export type ColourKey = keyof typeof colours;
