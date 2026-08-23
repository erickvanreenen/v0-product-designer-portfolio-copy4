import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Erick van Reenen",
  description:
    "Ten projects, each titled by the work it involved. E-commerce, omnichannel platforms, investment reporting, data tooling, and education.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
