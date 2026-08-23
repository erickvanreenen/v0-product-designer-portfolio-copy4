import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Erick van Reenen",
  description:
    "Nine projects, each titled by the work it involved. E-commerce, omnichannel platforms, data tooling, and education.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
