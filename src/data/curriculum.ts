export type Chapter = {
  slug: string;
  number: number;
  title: string;
  hasContent?: boolean;
};

export type Grade = {
  slug: string;
  grade: 11 | 12;
  title: string;
  description: string;
  chapters: Chapter[];
};

const placeholderChapters = (count: number): Chapter[] =>
  Array.from({ length: count }, (_, i) => ({
    slug: `chapter-${String(i + 1).padStart(2, '0')}`,
    number: i + 1,
    title: `Chapter ${i + 1} — [Editable Title]`,
    hasContent: true,
  }));

export const fscGrades: Grade[] = [
  {
    slug: 'grade-11',
    grade: 11,
    title: 'Grade 11 Chemistry',
    description:
      'FSc Part 1 — first-year Chemistry covering foundational concepts, atomic structure, bonding, states of matter, thermodynamics, equilibrium, kinetics and electrochemistry.',
    chapters: placeholderChapters(10).map((c, i) =>
      i === 0 ? { ...c, title: 'Basic Concepts & Atomic Structure' } : c
    ),
  },
  {
    slug: 'grade-12',
    grade: 12,
    title: 'Grade 12 Chemistry',
    description:
      'FSc Part 2 — second-year Chemistry covering periodicity, s- and p-block elements, transition elements, organic chemistry fundamentals, hydrocarbons, functional groups and macromolecules.',
    chapters: placeholderChapters(10),
  },
];

export type TopicGroup = {
  slug: string;
  title: string;
  description: string;
  topics: { slug: string; title: string; hasContent?: boolean }[];
};

export const mdcatGroups: TopicGroup[] = [
  {
    slug: 'physical-chemistry',
    title: 'Physical Chemistry',
    description:
      'Core physical chemistry concepts tested in MDCAT — stoichiometry, atomic structure, bonding, states of matter, energetics, equilibrium, kinetics and electrochemistry.',
    topics: [
      { slug: 'basic-concepts', title: 'Basic Concepts' },
      { slug: 'atomic-structure', title: 'Atomic Structure' },
      { slug: 'chemical-bonding', title: 'Chemical Bonding' },
      { slug: 'states-of-matter', title: 'States of Matter' },
      { slug: 'thermochemistry', title: 'Thermochemistry' },
      { slug: 'equilibrium', title: 'Equilibrium' },
      { slug: 'reaction-kinetics', title: 'Reaction Kinetics' },
      { slug: 'electrochemistry', title: 'Electrochemistry', hasContent: true },
    ],
  },
  {
    slug: 'inorganic-chemistry',
    title: 'Inorganic Chemistry',
    description:
      'Periodic trends, s- and p-block elements, transition elements and important inorganic reactions for MDCAT.',
    topics: [
      { slug: 'periodicity', title: 'Periodicity' },
      { slug: 's-block-elements', title: 's-Block Elements' },
      { slug: 'p-block-elements', title: 'p-Block Elements' },
      { slug: 'transition-elements', title: 'Transition Elements' },
      { slug: 'important-inorganic-reactions', title: 'Important Inorganic Reactions' },
    ],
  },
  {
    slug: 'organic-chemistry',
    title: 'Organic Chemistry',
    description:
      'Fundamentals of organic chemistry through functional groups and important organic reactions for MDCAT.',
    topics: [
      { slug: 'fundamentals-of-organic-chemistry', title: 'Fundamentals of Organic Chemistry' },
      { slug: 'nomenclature', title: 'Nomenclature' },
      { slug: 'isomerism', title: 'Isomerism' },
      { slug: 'hydrocarbons', title: 'Hydrocarbons' },
      { slug: 'alkyl-halides', title: 'Alkyl Halides / Haloalkanes' },
      { slug: 'alcohols', title: 'Alcohols' },
      { slug: 'phenols', title: 'Phenols' },
      { slug: 'ethers', title: 'Ethers' },
      { slug: 'aldehydes', title: 'Aldehydes' },
      { slug: 'ketones', title: 'Ketones' },
      { slug: 'carboxylic-acids', title: 'Carboxylic Acids' },
      { slug: 'important-organic-reactions', title: 'Important Organic Reactions' },
    ],
  },
];

export const ecatGroups: TopicGroup[] = [
  {
    slug: 'physical-chemistry',
    title: 'Physical Chemistry',
    description:
      'Physical chemistry topics for ECAT — stoichiometry, atomic structure, bonding, energetics, equilibrium, kinetics and electrochemistry with numerical problem-solving.',
    topics: [
      { slug: 'basic-concepts', title: 'Basic Concepts' },
      { slug: 'atomic-structure', title: 'Atomic Structure' },
      { slug: 'chemical-bonding', title: 'Chemical Bonding' },
      { slug: 'states-of-matter', title: 'States of Matter' },
      { slug: 'thermochemistry', title: 'Thermochemistry' },
      { slug: 'equilibrium', title: 'Equilibrium' },
      { slug: 'reaction-kinetics', title: 'Reaction Kinetics' },
      { slug: 'electrochemistry', title: 'Electrochemistry' },
    ],
  },
  {
    slug: 'inorganic-chemistry',
    title: 'Inorganic Chemistry',
    description: 'Periodic trends and element-group chemistry for ECAT.',
    topics: [
      { slug: 'periodicity', title: 'Periodicity' },
      { slug: 's-block-elements', title: 's-Block Elements' },
      { slug: 'p-block-elements', title: 'p-Block Elements' },
      { slug: 'transition-elements', title: 'Transition Elements' },
      { slug: 'important-inorganic-reactions', title: 'Important Inorganic Reactions' },
    ],
  },
  {
    slug: 'organic-chemistry',
    title: 'Organic Chemistry',
    description: 'Organic chemistry fundamentals and functional-group chemistry for ECAT.',
    topics: [
      { slug: 'fundamentals-of-organic-chemistry', title: 'Fundamentals of Organic Chemistry' },
      { slug: 'nomenclature', title: 'Nomenclature' },
      { slug: 'isomerism', title: 'Isomerism' },
      { slug: 'hydrocarbons', title: 'Hydrocarbons' },
      { slug: 'alkyl-halides', title: 'Alkyl Halides / Haloalkanes' },
      { slug: 'alcohols-phenols-ethers', title: 'Alcohols, Phenols & Ethers' },
      { slug: 'aldehydes-ketones', title: 'Aldehydes & Ketones' },
      { slug: 'carboxylic-acids', title: 'Carboxylic Acids' },
      { slug: 'important-organic-reactions', title: 'Important Organic Reactions' },
    ],
  },
];

export type FundamentalsUnit = {
  slug: string;
  number: number;
  title: string;
  hasContent?: boolean;
};

export const fundamentalsUnits: FundamentalsUnit[] = Array.from(
  { length: 20 },
  (_, i) => {
    const slug = `unit-${String(i + 1).padStart(2, '0')}`;

    const unitTitles: Record<number, string> = {
      1: 'Basic Concepts of Chemistry',
      2: 'Atomic Structure',
      3: 'Periodic table',
      4: 'Structure of Molecules',
      5: 'Physical States of Matter',
      6: 'Solution',
      7: 'Electrochemistry',
      8: 'Chemical Reactivity',
    };

    return {
      slug,
      number: i + 1,
      title:
        unitTitles[i + 1] ??
        `Unit ${String(i + 1).padStart(2, '0')} — [Editable Title]`,

      hasContent: [1, 2, 3, 4, 5, 6, 7, 8].includes(i + 1),
    };
  }
);
