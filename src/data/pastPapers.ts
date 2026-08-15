export type PastPaperEntry = {
  id: string;
  exam: 'FSc' | 'MDCAT' | 'ECAT';
  grade?: 11 | 12;
  board?: string;
  year: number;
  title: string;
  solved: boolean;
  hasVideo?: boolean;
  downloadable?: boolean;
};

export const pastPapers: PastPaperEntry[] = [
  { id: 'fsc-11-fb-2024', exam: 'FSc', grade: 11, board: 'Federal Board', year: 2024, title: 'Federal Board Grade 11 Chemistry 2024', solved: true, hasVideo: true },
  { id: 'fsc-11-fb-2023', exam: 'FSc', grade: 11, board: 'Federal Board', year: 2023, title: 'Federal Board Grade 11 Chemistry 2023', solved: true, hasVideo: false },
  { id: 'fsc-11-ajk-2023', exam: 'FSc', grade: 11, board: 'AJK Board', year: 2023, title: 'AJK Board Grade 11 Chemistry 2023', solved: false, hasVideo: false },
  { id: 'fsc-11-fb-2022', exam: 'FSc', grade: 11, board: 'Federal Board', year: 2022, title: 'Federal Board Grade 11 Chemistry 2022', solved: true, hasVideo: true },
  { id: 'fsc-12-fb-2024', exam: 'FSc', grade: 12, board: 'Federal Board', year: 2024, title: 'Federal Board Grade 12 Chemistry 2024', solved: true, hasVideo: true },
  { id: 'fsc-12-fb-2023', exam: 'FSc', grade: 12, board: 'Federal Board', year: 2023, title: 'Federal Board Grade 12 Chemistry 2023', solved: false, hasVideo: false },
  { id: 'fsc-12-ajk-2023', exam: 'FSc', grade: 12, board: 'AJK Board', year: 2023, title: 'AJK Board Grade 12 Chemistry 2023', solved: true, hasVideo: false },
  { id: 'mdcat-2024', exam: 'MDCAT', year: 2024, title: 'MDCAT Chemistry 2024 — Full Paper', solved: true, hasVideo: true },
  { id: 'mdcat-2023', exam: 'MDCAT', year: 2023, title: 'MDCAT Chemistry 2023 — Full Paper', solved: true, hasVideo: true },
  { id: 'mdcat-2022', exam: 'MDCAT', year: 2022, title: 'MDCAT Chemistry 2022 — Topic-wise MCQs', solved: false, hasVideo: false },
  { id: 'ecat-2024', exam: 'ECAT', year: 2024, title: 'ECAT Chemistry 2024 — Full Paper', solved: true, hasVideo: true },
  { id: 'ecat-2023', exam: 'ECAT', year: 2023, title: 'ECAT Chemistry 2023 — Full Paper', solved: false, hasVideo: false },
];

export function filterPapers(opts: { exam?: string; grade?: number; board?: string; year?: number; solved?: boolean }): PastPaperEntry[] {
  return pastPapers.filter((p) => {
    if (opts.exam && p.exam !== opts.exam) return false;
    if (opts.grade && p.grade !== opts.grade) return false;
    if (opts.board && p.board !== opts.board) return false;
    if (opts.year && p.year !== opts.year) return false;
    if (opts.solved !== undefined && p.solved !== opts.solved) return false;
    return true;
  });
}
