export const site = {
  name: 'Professor Noor Saleem',
  shortName: 'Noor Saleem',
  tagline: 'Chemistry Academy',
  descriptor: 'Chemistry Educator · Textbook Author · Since 2006',
  domain: 'https://noorsaleemchemistry.pk',
  location: 'Islamabad, Pakistan',
  teachingSince: 2006,
  email: 'contact@noorsaleemchemistry.pk',
  social: {
    youtube: '',
    facebook: '',
  },
} as const;

export type NavChild = { label: string; to: string; desc?: string };
export type NavItem = { label: string; to: string; children?: NavChild[] };

export const primaryNav: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'FSc',
    to: '/fsc',
    children: [
      { label: 'Grade 11 Chemistry', to: '/fsc/grade-11', desc: 'First-year FSc Part 1' },
      { label: 'Grade 12 Chemistry', to: '/fsc/grade-12', desc: 'Second-year FSc Part 2' },
    ],
  },
  {
    label: 'MDCAT',
    to: '/mdcat',
    children: [
      { label: 'Physical Chemistry', to: '/mdcat/physical-chemistry' },
      { label: 'Inorganic Chemistry', to: '/mdcat/inorganic-chemistry' },
      { label: 'Organic Chemistry', to: '/mdcat/organic-chemistry' },
    ],
  },
  {
    label: 'ECAT',
    to: '/ecat',
    children: [
      { label: 'Physical Chemistry', to: '/ecat/physical-chemistry' },
      { label: 'Inorganic Chemistry', to: '/ecat/inorganic-chemistry' },
      { label: 'Organic Chemistry', to: '/ecat/organic-chemistry' },
    ],
  },
  { label: 'Fundamentals', to: '/fundamentals' },
  {
    label: 'Resources',
    to: '/resources',
    children: [
      { label: 'Study Notes', to: '/resources/study-notes' },
      { label: 'MCQs', to: '/resources/mcqs' },
      { label: 'Worksheets', to: '/resources/worksheets' },
      { label: 'Formula Sheets', to: '/resources/formula-sheets' },
      { label: 'Periodic Table', to: '/resources/periodic-table' },
      { label: 'Exam Tips', to: '/resources/exam-tips' },
    ],
  },
  { label: 'Past Papers', to: '/past-papers' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
];

export const footerNav = {
  learn: [
    { label: 'FSc Chemistry', to: '/fsc' },
    { label: 'MDCAT Chemistry', to: '/mdcat' },
    { label: 'ECAT Chemistry', to: '/ecat' },
    { label: 'Fundamentals of Chemistry', to: '/fundamentals' },
  ],
  resources: [
    { label: 'Study Notes', to: '/resources/study-notes' },
    { label: 'MCQs', to: '/resources/mcqs' },
    { label: 'Worksheets', to: '/resources/worksheets' },
    { label: 'Past Papers', to: '/past-papers' },
    { label: 'Blog', to: '/blog' },
  ],
  professor: [
    { label: 'About', to: '/about' },
    { label: 'Online Tuition', to: '/online-tuition' },
    { label: 'Contact', to: '/online-tuition' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Use', to: '/terms' },
  ],
} as const;
