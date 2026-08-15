// ==================================================
// CHAPTER CONTENT TYPES
// ==================================================
// These types define the structure of every chapter.
// You do NOT need to modify this file to add content.
// Just edit the files in src/data/chapter-content/
// ==================================================

// --- Content blocks used in Study Notes, Long Questions, etc. ---

export type ContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'numbers'; items: string[] }
  | { type: 'equation'; latex: string; caption?: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'definition'; term: string; text: string }
  | { type: 'note'; text: string }
  | { type: 'warning'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

// --- MCQ ---

export type MCQ = {
  number: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

// --- Short Question ---

export type ShortQuestion = {
  number: number;
  question: string;
  answer: string;
};

// --- Long Question ---

export type LongQuestion = {
  number: number;
  question: string;
  answer: ContentBlock[];
};

// --- Numerical ---

export type Numerical = {
  number: number;
  question: string;
  given: string[];
  formula: string;
  solution: string;
  answer: string;
  unit: string;
};

// --- Lecture ---

export type Lecture = {
  number: number;
  title: string;
  videoUrl?: string;
  content: ContentBlock[];
};

// --- Chapter Test ---

export type ChapterTest = {
  number: number;
  title: string;
  mcqs: MCQ[];
  shortQuestions: ShortQuestion[];
};

// --- Past Paper Question ---

export type PastPaperQuestion = {
  number: number;
  question: string;
  answer: string;
  source: string;
};

// --- Full Chapter Content ---

export type ChapterContent = {
  slug: string;
  title: string;
  overview: string;
  objectives: string[];
  keyDefinitions: { term: string; def: string }[];
  formulae: string[];
  lectures: Lecture[];
  studyNotes: ContentBlock[];
  keyConcepts: ContentBlock[];
  mcqs: MCQ[];
  shortQuestions: ShortQuestion[];
  longQuestions: LongQuestion[];
  numericals: Numerical[];
  chapterTests: ChapterTest[];
  pastPaperQuestions: PastPaperQuestion[];
};
