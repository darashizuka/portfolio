import type { Metadata } from "next";
import { TIMELINE } from "@/src/data/timeline";
import { TimelineWheel } from "./TimelineWheel";

export const metadata: Metadata = {
  title: "Past",
  description: "A timeline of where I've been and what I've worked on.",
};

export default function PastPage() {
  return <TimelineWheel entries={TIMELINE} />;
}
