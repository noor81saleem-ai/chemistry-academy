export type ChapterSection = {
  id: string;
  heading: string;
  blocks: ContentBlock[];
};

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; variant: 'definition' | 'tip' | 'warning' | 'example'; title: string; text: string }
  | { type: 'equation'; latex: string; caption?: string }
  | { type: 'mcqs'; items: { q: string; options: string[]; answer: number; explanation: string }[] }
  | { type: 'shortqs'; items: { q: string; a: string }[] }
  | { type: 'longqs'; items: string[] }
  | { type: 'numericals'; items: { q: string; solution: string; answer: string }[] };

export type FscChapterContent = {
  slug: string;
  title: string;
  overview: string;
  objectives: string[];
  sections: ChapterSection[];
  keyDefinitions: { term: string; def: string }[];
  formulae: string[];
};

export const fscChapterContent: Record<string, FscChapterContent> = {
  'chapter-01': {
    slug: 'chapter-01',
    title: 'Basic Concepts & Atomic Structure',
    overview:
      'This opening chapter establishes the language of Chemistry — atoms, molecules, ions, the mole concept and atomic structure. These ideas underpin every later chapter in FSc and are heavily tested in MDCAT and ECAT.',
    objectives: [
      'Recall and apply the laws of chemical combination.',
      'Define the mole and perform mole-mass-particle conversions.',
      'Determine empirical and molecular formulae from composition data.',
      'Describe the development of atomic models from Dalton to Bohr.',
      'Write quantum numbers and electron configurations.',
      'Calculate percentage composition and limiting reactants.',
    ],
    keyDefinitions: [
      { term: 'Empirical formula', def: 'The simplest whole-number ratio of atoms of each element in a compound.' },
      { term: 'Molecular formula', def: 'The actual number of atoms of each element in one molecule of a compound.' },
      { term: 'Limiting reactant', def: 'The reactant that is completely consumed first and so determines the maximum amount of product.' },
      { term: 'Quantum numbers', def: 'A set of four numbers (n, l, m, s) that describe the energy, shape, orientation and spin of an electron in an atom.' },
    ],
    formulae: [
      'Moles = mass (g) / molar mass (g mol⁻¹)',
      'Number of particles = moles × 6.022 × 10²³',
      'Empirical formula mass = Σ (atomic mass × subscript)',
      'n = (molecular mass) / (empirical formula mass)',
    ],
    sections: [
      {
        id: 'mole-concept',
        heading: 'The Mole Concept',
        blocks: [
          { type: 'p', text: 'The mole is the central counting unit in Chemistry. One mole of any substance contains Avogadro\'s number of particles — 6.022 × 10²³. This lets us move between the mass we weigh in the lab and the number of atoms or molecules reacting.' },
          {
            type: 'callout',
            variant: 'definition',
            title: 'Definition',
            text: 'The mole is the amount of substance that contains as many elementary particles as there are atoms in exactly 12 g of carbon-12.',
          },
          { type: 'p', text: 'A useful worked example: calculate the number of molecules in 4.4 g of CO₂.' },
          { type: 'equation', latex: 'n = \\frac{m}{M} = \\frac{4.4\\ \\text{g}}{44\\ \\text{g mol}^{-1}} = 0.1\\ \\text{mol}' },
          { type: 'equation', latex: 'N = n \\times N_A = 0.1 \\times 6.022 \\times 10^{23} = 6.022 \\times 10^{22}\\ \\text{molecules}' },
        ],
      },
      {
        id: 'stoichiometry',
        heading: 'Stoichiometry and the Limiting Reactant',
        blocks: [
          { type: 'p', text: 'Stoichiometry uses the mole ratios from a balanced equation to predict amounts of products. When reactants are not present in the exact ratio, one is consumed first — the limiting reactant — and it sets the maximum yield.' },
          {
            type: 'callout',
            variant: 'example',
            title: 'Worked example',
            text: 'For 2H₂ + O₂ → 2H₂O, if 5 mol H₂ reacts with 2 mol O₂, the required ratio is 2:1. 5 mol H₂ needs 2.5 mol O₂, but only 2 mol is available, so O₂ is limiting and the yield is 2 × 2 = 4 mol H₂O.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Common mistake',
            text: 'Students often compare the masses of reactants directly. Always convert to moles first — stoichiometry works in moles, not grams.',
          },
        ],
      },
      {
        id: 'atomic-structure',
        heading: 'Atomic Structure and Quantum Numbers',
        blocks: [
          { type: 'p', text: 'Atomic structure evolved from Dalton\'s indivisible atom, through Thomson\'s and Rutherford\'s models, to Bohr\'s quantised shells and the modern quantum-mechanical model. Each electron is described by four quantum numbers.' },
          { type: 'ul', items: [
            'Principal quantum number (n) — the energy level or shell.',
            'Azimuthal quantum number (l) — the subshell shape (s, p, d, f).',
            'Magnetic quantum number (m) — orbital orientation.',
            'Spin quantum number (s) — electron spin (+½ or −½).',
          ]},
          {
            type: 'callout',
            variant: 'tip',
            title: 'Exam tip',
            text: 'MDCAT frequently tests the maximum number of electrons in a subshell: s = 2, p = 6, d = 10, f = 14. Learn these by the formula 2(2l + 1).',
          },
        ],
      },
      {
        id: 'mcqs',
        heading: 'MCQs',
        blocks: [
          {
            type: 'mcqs',
            items: [
              { q: 'The number of atoms in 0.5 mol of Na is:', options: ['3.011 × 10²³', '6.022 × 10²³', '1.2044 × 10²⁴', '0.5 × 10²³'], answer: 0, explanation: 'N = n × N_A = 0.5 × 6.022 × 10²³ = 3.011 × 10²³.' },
              { q: 'Which quantum number describes the shape of an orbital?', options: ['Principal (n)', 'Azimuthal (l)', 'Magnetic (m)', 'Spin (s)'], answer: 1, explanation: 'The azimuthal quantum number l determines the subshell shape (s, p, d, f).' },
              { q: 'The empirical formula of glucose (C₆H₁₂O₆) is:', options: ['CHO', 'CH₂O', 'C₂H₄O₂', 'CHO₂'], answer: 1, explanation: 'Divide all subscripts by 6: CH₂O.' },
            ],
          },
        ],
      },
      {
        id: 'short-questions',
        heading: 'Short Questions',
        blocks: [
          {
            type: 'shortqs',
            items: [
              { q: 'Differentiate between empirical and molecular formula.', a: 'The empirical formula gives the simplest whole-number ratio of atoms; the molecular formula gives the actual number of atoms of each element in a molecule. The molecular formula is always a whole-number multiple of the empirical formula.' },
              { q: 'State Avogadro\'s law.', a: 'Equal volumes of all gases, at the same temperature and pressure, contain equal numbers of molecules.' },
              { q: 'Why is the limiting reactant important?', a: 'It determines the maximum amount of product that can form, so it is used to calculate theoretical yield in stoichiometric calculations.' },
            ],
          },
        ],
      },
      {
        id: 'long-questions',
        heading: 'Long Questions',
        blocks: [
          {
            type: 'longqs',
            items: [
              'Describe the development of atomic models from Dalton to Bohr, highlighting the key experimental evidence that led to each model.',
              'Explain the four quantum numbers and state how each is derived. Write the electronic configuration of chromium (Z = 24) and justify the exception.',
              'A compound contains 40% carbon, 6.7% hydrogen and 53.3% oxygen by mass. Its molar mass is 180 g mol⁻¹. Determine its empirical and molecular formulae.',
            ],
          },
        ],
      },
      {
        id: 'numericals',
        heading: 'Numericals',
        blocks: [
          {
            type: 'numericals',
            items: [
              {
                q: 'Calculate the number of molecules in 11 g of CO₂. (Molar mass = 44 g mol⁻¹)',
                solution: 'n = m/M = 11/44 = 0.25 mol. N = n × N_A = 0.25 × 6.022 × 10²³.',
                answer: '1.506 × 10²³ molecules',
              },
              {
                q: 'In the reaction N₂ + 3H₂ → 2NH₃, how many moles of NH₃ form from 2 mol N₂ and 3 mol H₂?',
                solution: 'Required ratio N₂:H₂ = 1:3. For 2 mol N₂ we need 6 mol H₂, but only 3 mol is available, so H₂ is limiting. Moles NH₃ = (2/3) × 3 × (2/3) — actually from H₂: 3 mol H₂ gives 2 mol NH₃.',
                answer: '2 mol NH₃',
              },
            ],
          },
        ],
      },
    ],
  },
};
