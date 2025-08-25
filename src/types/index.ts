export interface Platform {
  id: string;
  name: string;
  color: string;
  logo?: string;
}

export interface Section {
  id: string;
  title: string;
  subsections?: Subsection[];
}

export interface Subsection {
  id: string;
  title: string;
  content: string;
}

export interface ComparisonTable {
  id: string;
  title: string;
  headers: string[];
  rows: TableRow[];
}

export interface TableRow {
  platform: string;
  data: (string | number)[];
}

export interface ChartData {
  name: string;
  gcp: number;
  azure: number;
  aws: number;
}

export interface BookmarkItem {
  id: string;
  title: string;
  section: string;
}
