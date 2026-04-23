import { load } from "js-yaml";
import raw from "@/data/reading-list.md?raw";

export interface ReadingEntry {
  title: string;
  url: string;
  authors: string;
  year: number;
  tags: string[];
  notes: string;
}

export function getReadingList(): ReadingEntry[] {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return [];
  const data = load(match[1]) as { entries?: ReadingEntry[] };
  return data.entries ?? [];
}

export function getAllTags(entries: ReadingEntry[]): string[] {
  const set = new Set<string>();
  for (const e of entries) e.tags.forEach((t) => set.add(t));
  return Array.from(set).sort();
}
