export type PastPaperExam = 'Matric' | 'FSc' | 'MDCAT' | 'ECAT';

export type PastPaperGrade = 9 | 10 | 11 | 12;

export type PastPaperEntry = {
  id: string;
  exam: PastPaperExam;
  grade?: PastPaperGrade;
  board?: string;
  year: number;
  title: string;
  pdfUrl?: string;
  downloadable?: boolean;
};

export const pastPapers: PastPaperEntry[] = [
  // =========================================================
  // GRADE 9 CHEMISTRY
  // Latest year first
  // =========================================================

  {
    id: 'grade-9-chemistry-2026',
    exam: 'Matric',
    grade: 9,
    year: 2026,
    title: 'Grade 9 Chemistry Past Paper 2026',
  },
  {
    id: 'grade-9-chemistry-2025',
    exam: 'Matric',
    grade: 9,
    year: 2025,
    title: 'Grade 9 Chemistry Past Paper 2025',
  },
  {
    id: 'grade-9-chemistry-2024',
    exam: 'Matric',
    grade: 9,
    year: 2024,
    title: 'Grade 9 Chemistry Past Paper 2024',
    pdfUrl: '/past-papers/grade-9/chemistry-2024.pdf',
    downloadable: true,
  },
  {
    id: 'grade-9-chemistry-2023',
    exam: 'Matric',
    grade: 9,
    year: 2023,
    title: 'Grade 9 Chemistry Past Paper 2023',
  },
  {
    id: 'grade-9-chemistry-2022',
    exam: 'Matric',
    grade: 9,
    year: 2022,
    title: 'Grade 9 Chemistry Past Paper 2022',
  },

  // =========================================================
  // GRADE 10 CHEMISTRY
  // Latest year first
  // =========================================================

  {
    id: 'grade-10-chemistry-2026',
    exam: 'Matric',
    grade: 10,
    year: 2026,
    title: 'Grade 10 Chemistry Past Paper 2026',
  },
  {
    id: 'grade-10-chemistry-2025',
    exam: 'Matric',
    grade: 10,
    year: 2025,
    title: 'Grade 10 Chemistry Past Paper 2025',
  },
  {
    id: 'grade-10-chemistry-2024',
    exam: 'Matric',
    grade: 10,
    year: 2024,
    title: 'Grade 10 Chemistry Past Paper 2024',
  },
  {
    id: 'grade-10-chemistry-2023',
    exam: 'Matric',
    grade: 10,
    year: 2023,
    title: 'Grade 10 Chemistry Past Paper 2023',
  },
  {
    id: 'grade-10-chemistry-2022',
    exam: 'Matric',
    grade: 10,
    year: 2022,
    title: 'Grade 10 Chemistry Past Paper 2022',
  },

  // =========================================================
  // FSC GRADE 11 CHEMISTRY
  // Latest year first
  // =========================================================

  {
    id: 'fsc-grade-11-chemistry-2026',
    exam: 'FSc',
    grade: 11,
    year: 2026,
    title: 'FSc Grade 11 Chemistry Past Paper 2026',
  },
  {
    id: 'fsc-grade-11-chemistry-2025',
    exam: 'FSc',
    grade: 11,
    year: 2025,
    title: 'FSc Grade 11 Chemistry Past Paper 2025',
  },
  {
    id: 'fsc-grade-11-chemistry-2024',
    exam: 'FSc',
    grade: 11,
    year: 2024,
    title: 'FSc Grade 11 Chemistry Past Paper 2024',
  },
  {
    id: 'fsc-grade-11-chemistry-2023',
    exam: 'FSc',
    grade: 11,
    year: 2023,
    title: 'FSc Grade 11 Chemistry Past Paper 2023',
  },
  {
    id: 'fsc-grade-11-chemistry-2022',
    exam: 'FSc',
    grade: 11,
    year: 2022,
    title: 'FSc Grade 11 Chemistry Past Paper 2022',
  },

  // =========================================================
  // FSC GRADE 12 CHEMISTRY
  // Latest year first
  // =========================================================

  {
    id: 'fsc-grade-12-chemistry-2026',
    exam: 'FSc',
    grade: 12,
    year: 2026,
    title: 'FSc Grade 12 Chemistry Past Paper 2026',
  },
  {
    id: 'fsc-grade-12-chemistry-2025',
    exam: 'FSc',
    grade: 12,
    year: 2025,
    title: 'FSc Grade 12 Chemistry Past Paper 2025',
  },
  {
    id: 'fsc-grade-12-chemistry-2024',
    exam: 'FSc',
    grade: 12,
    year: 2024,
    title: 'FSc Grade 12 Chemistry Past Paper 2024',
  },
  {
    id: 'fsc-grade-12-chemistry-2023',
    exam: 'FSc',
    grade: 12,
    year: 2023,
    title: 'FSc Grade 12 Chemistry Past Paper 2023',
  },
  {
    id: 'fsc-grade-12-chemistry-2022',
    exam: 'FSc',
    grade: 12,
    year: 2022,
    title: 'FSc Grade 12 Chemistry Past Paper 2022',
  },

  // =========================================================
  // MDCAT CHEMISTRY
  // Latest year first
  // =========================================================

  {
    id: 'mdcat-chemistry-2026',
    exam: 'MDCAT',
    year: 2026,
    title: 'MDCAT Chemistry Past Paper 2026',
  },
  {
    id: 'mdcat-chemistry-2025',
    exam: 'MDCAT',
    year: 2025,
    title: 'MDCAT Chemistry Past Paper 2025',
  },
  {
    id: 'mdcat-chemistry-2024',
    exam: 'MDCAT',
    year: 2024,
    title: 'MDCAT Chemistry Past Paper 2024',
  },
  {
    id: 'mdcat-chemistry-2023',
    exam: 'MDCAT',
    year: 2023,
    title: 'MDCAT Chemistry Past Paper 2023',
  },
  {
    id: 'mdcat-chemistry-2022',
    exam: 'MDCAT',
    year: 2022,
    title: 'MDCAT Chemistry Past Paper 2022',
  },

  // =========================================================
  // ECAT CHEMISTRY
  // Latest year first
  // =========================================================

  {
    id: 'ecat-chemistry-2026',
    exam: 'ECAT',
    year: 2026,
    title: 'ECAT Chemistry Past Paper 2026',
  },
  {
    id: 'ecat-chemistry-2025',
    exam: 'ECAT',
    year: 2025,
    title: 'ECAT Chemistry Past Paper 2025',
  },
  {
    id: 'ecat-chemistry-2024',
    exam: 'ECAT',
    year: 2024,
    title: 'ECAT Chemistry Past Paper 2024',
  },
  {
    id: 'ecat-chemistry-2023',
    exam: 'ECAT',
    year: 2023,
    title: 'ECAT Chemistry Past Paper 2023',
  },
  {
    id: 'ecat-chemistry-2022',
    exam: 'ECAT',
    year: 2022,
    title: 'ECAT Chemistry Past Paper 2022',
  },
];

export function filterPapers(options: {
  exam?: PastPaperExam;
  grade?: PastPaperGrade;
  board?: string;
  year?: number;
}): PastPaperEntry[] {
  return pastPapers.filter((paper) => {
    if (options.exam && paper.exam !== options.exam) {
      return false;
    }

    if (options.grade && paper.grade !== options.grade) {
      return false;
    }

    if (options.board && paper.board !== options.board) {
      return false;
    }

    if (options.year && paper.year !== options.year) {
      return false;
    }

    return true;
  });
}