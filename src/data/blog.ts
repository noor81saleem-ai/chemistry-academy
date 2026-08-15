export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; variant: 'definition' | 'tip' | 'warning' | 'example'; title: string; text: string }
  | { type: 'equation'; latex: string; caption?: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
  body: BlogBlock[];
};

export const blogCategories = [
  'FSc Chemistry',
  'MDCAT Preparation',
  'ECAT Preparation',
  'Chemistry Concepts',
  'Fundamentals of Chemistry',
  'Exam Preparation',
  'Study Techniques',
  'Educational Updates',
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'balancing-chemical-equations-step-by-step',
    title: 'Balancing Chemical Equations: A Step-by-Step Method',
    excerpt:
      'A clear, repeatable method for balancing any chemical equation — the skill that underpins stoichiometry, MDCAT MCQs and FSc numericals.',
    category: 'Chemistry Concepts',
    date: '2025-09-18',
    readingTime: '6 min read',
    author: 'Professor Noor Saleem',
    body: [
      { type: 'p', text: 'Balancing chemical equations is one of the first skills every Chemistry student must master. It is not just a bookkeeping exercise — it is the foundation of stoichiometry, limiting-reactant problems and almost every numerical you will meet in FSc, MDCAT and ECAT.' },
      { type: 'p', text: 'The law of conservation of mass requires that the number of atoms of each element is the same on both sides of a chemical equation. This article gives you a method you can apply to any equation.' },
      { type: 'h2', text: 'The method in four steps' },
      { type: 'ol', items: [
        'Write the correct formulae of all reactants and products. Never balance an equation by changing formulae — change only the coefficients.',
        'Count the atoms of each element on both sides.',
        'Balance one element at a time, starting with the most complex substance. Leave hydrogen and oxygen until last when possible.',
        'Check every element again and reduce the coefficients to the simplest whole-number ratio.',
      ]},
      { type: 'h2', text: 'Worked example' },
      { type: 'p', text: 'Balance the combustion of propane:' },
      { type: 'equation', latex: '\\text{C}_3\\text{H}_8 + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}', caption: 'Unbalanced equation' },
      { type: 'p', text: 'Carbon appears in 3 atoms on the left and 1 on the right, so place a 3 before CO₂. Hydrogen appears in 8 atoms on the left and 2 on the right, so place a 4 before H₂O.' },
      { type: 'equation', latex: '\\text{C}_3\\text{H}_8 + \\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}' },
      { type: 'p', text: 'Now count oxygen on the right: 3×2 + 4×1 = 10 oxygen atoms. So we need 5 O₂ molecules on the left.' },
      { type: 'equation', latex: '\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}', caption: 'Balanced equation' },
      { type: 'callout', variant: 'tip', title: 'Exam tip', text: 'In MDCAT MCQs, always check the simplest whole-number ratio. Coefficients of 2, 3 and 6 can usually be divided by 2 to give 1, 1.5 and 3 — but coefficients must be integers, so multiply through instead.' },
      { type: 'h2', text: 'Common mistakes' },
      { type: 'ul', items: [
        'Changing subscripts inside a formula to force balance — this changes the substance itself.',
        'Forgetting to re-check after each change; balancing is iterative.',
        'Leaving fractional coefficients instead of multiplying through to clear them.',
      ]},
      { type: 'p', text: 'Practise this method on ten equations from your textbook and it will become automatic. Once equations are balanced, stoichiometric ratios, limiting reactants and percentage-yield problems all follow directly.' },
    ],
  },
  {
    slug: 'mdcat-chemistry-high-yield-topics',
    title: 'MDCAT Chemistry: High-Yield Topics to Prioritise',
    excerpt:
      'Not every topic carries equal weight in MDCAT. Here is how to focus your revision on the concepts and question types that appear most often.',
    category: 'MDCAT Preparation',
    date: '2025-09-02',
    readingTime: '7 min read',
    author: 'Professor Noor Saleem',
    body: [
      { type: 'p', text: 'MDCAT Chemistry is broad, but it is not equally weighted. Some topics appear in nearly every paper, while others are rarely tested. If your preparation time is limited, prioritising high-yield topics is the single most effective strategy.' },
      { type: 'h2', text: 'Physical Chemistry — the backbone' },
      { type: 'p', text: 'Stoichiometry, atomic structure, chemical bonding and electrochemistry together account for a large share of MDCAT Chemistry marks. Master mole calculations, quantum numbers, hybridisation and the electrochemical series first.' },
      { type: 'callout', variant: 'definition', title: 'Key definition', text: "The mole is the amount of substance that contains 6.022 × 10²³ elementary particles — Avogadro's number." },
      { type: 'h2', text: 'Organic Chemistry — reactions and identification' },
      { type: 'p', text: 'Organic chemistry tests your recall of functional-group reactions and identification tests. Focus on the reactions of alcohols, aldehydes, ketones and carboxylic acids, and on the characteristic tests (Tollens, Fehling, Lucas test, iodoform).' },
      { type: 'h2', text: 'Inorganic Chemistry — periodic trends' },
      { type: 'p', text: 'Periodic trends — atomic radius, ionisation energy, electron affinity and electronegativity — underpin many MDCAT questions. Understand the trends and their exceptions rather than memorising isolated facts.' },
      { type: 'callout', variant: 'warning', title: 'Common mistake', text: 'Students often memorise reactions without understanding why they happen. MDCAT questions frequently test the reasoning, not just the product.' },
      { type: 'h2', text: 'A practical revision plan' },
      { type: 'ol', items: [
        'Spend 50% of your time on Physical Chemistry, 30% on Organic, 20% on Inorganic.',
        'Do topic-wise MCQs immediately after revising each topic.',
        'Take one full-length Chemistry test every week in the final month.',
        'Review every incorrect answer and write down the concept you missed.',
      ]},
      { type: 'p', text: 'Concentrating on high-yield topics does not mean ignoring the rest — it means making sure the most important concepts are automatic before you move on to lower-yield material.' },
    ],
  },
  {
    slug: 'how-to-study-chemistry-numericals',
    title: 'How to Study Chemistry Numericals Without Memorising',
    excerpt:
      'Numericals scare many students, but they become straightforward once you treat them as concept applications, not formula recall.',
    category: 'Study Techniques',
    date: '2025-08-21',
    readingTime: '5 min read',
    author: 'Professor Noor Saleem',
    body: [
      { type: 'p', text: 'Many students approach Chemistry numericals by memorising formulae and plugging in values. This works for simple questions but fails the moment an exam rephrases the problem. The reliable approach is to understand the concept, derive the relationship, and only then calculate.' },
      { type: 'h2', text: 'A four-step framework' },
      { type: 'ol', items: [
        'Read the question twice and write down what is given and what is asked, with units.',
        'Identify the concept — is this stoichiometry, gas law, thermochemistry, equilibrium?',
        'Write the relevant relationship and rearrange it symbolically before substituting numbers.',
        'Substitute with units, calculate, and check whether the answer is physically reasonable.',
      ]},
      { type: 'callout', variant: 'tip', title: 'Why this works', text: 'When you rearrange symbolically, you catch unit errors before they hide in the arithmetic. When you check the reasonableness of the answer, you catch mistakes that pure calculation would miss.' },
      { type: 'h2', text: 'An example: limiting reactant' },
      { type: 'p', text: 'Suppose 5.0 g of hydrogen reacts with 32 g of oxygen to form water. Which is the limiting reactant?' },
      { type: 'equation', latex: '2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}' },
      { type: 'p', text: 'Moles of H₂ = 5.0 / 2 = 2.5 mol. Moles of O₂ = 32 / 32 = 1.0 mol. The equation needs 2 mol H₂ per 1 mol O₂, so 2.5 mol H₂ would need 1.25 mol O₂ — but only 1.0 mol is available. Oxygen is the limiting reactant.' },
      { type: 'p', text: 'Notice that we never memorised a "limiting reactant formula". We used the balanced equation and the mole concept, which is exactly how the examiner expects you to think.' },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
