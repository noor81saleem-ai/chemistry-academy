export type QA = { q: string; a: string };

export type FundamentalsChapter = {
  slug: string;
  number: number;
  title: string;
  intro: string;
  objectives: string[];
  keyTerms: { term: string; def: string }[];
  qa: QA[];
  formulae?: string[];
};

export const fundamentalsChapters: Record<string, FundamentalsChapter> = {
  'unit-03': {
    slug: 'unit-03',
    number: 3,
    title: 'Atoms and Molecules',
    intro:
      'This unit introduces the building blocks of all matter — atoms and molecules. You will learn how elements are made of atoms, how atoms combine to form molecules and ions, and how we count these tiny particles using the mole concept. This is one of the most important foundations in all of Chemistry.',
    objectives: [
      'Define atom, molecule and ion with examples.',
      'Distinguish between elements, compounds and mixtures.',
      'Explain the laws of chemical combination.',
      "State and use Avogadro's number.",
      'Define the mole and calculate molar mass.',
      'Convert between mass, moles and number of particles.',
    ],
    keyTerms: [
      { term: 'Atom', def: 'The smallest particle of an element that can take part in a chemical combination.' },
      { term: 'Molecule', def: 'A group of two or more atoms chemically bonded together; the smallest particle of a substance that can exist independently.' },
      { term: 'Ion', def: 'An atom or group of atoms that has gained or lost one or more electrons and so carries an electric charge.' },
      { term: 'Mole', def: 'The amount of substance that contains as many elementary particles as there are atoms in exactly 12 g of carbon-12.' },
      { term: "Avogadro's number", def: 'The number of particles in one mole of a substance; equal to 6.022 × 10²³.' },
      { term: 'Molar mass', def: 'The mass in grams of one mole of a substance, numerically equal to its relative atomic or molecular mass.' },
    ],
    formulae: [
      'Moles = Mass (g) / Molar mass (g mol⁻¹)',
      'Number of particles = Moles × 6.022 × 10²³',
      'Mass = Moles × Molar mass',
    ],
    qa: [
      { q: 'Q1. What is an atom?', a: 'An atom is the smallest particle of an element that can take part in a chemical combination. It is electrically neutral and consists of a positively charged nucleus (containing protons and neutrons) surrounded by negatively charged electrons. Atoms of the same element have the same number of protons.' },
      { q: 'Q2. What is a molecule? Give two examples.', a: 'A molecule is a group of two or more atoms that are chemically bonded together and behave as a single unit. A molecule is the smallest particle of a substance that can exist independently. For example, a molecule of oxygen (O₂) contains two oxygen atoms, and a molecule of water (H₂O) contains two hydrogen atoms and one oxygen atom.' },
      { q: 'Q3. What is the difference between an atom and a molecule?', a: 'An atom is the smallest particle of an element and may not exist independently (e.g. an atom of oxygen alone). A molecule is a group of atoms bonded together and can exist independently (e.g. O₂). Atoms take part in chemical reactions, while molecules are the smallest independent particles of many substances.' },
      { q: 'Q4. What is an ion? Define cation and anion.', a: 'An ion is an atom or group of atoms that has gained or lost one or more electrons and therefore carries an electric charge. A cation is a positively charged ion formed when an atom loses electrons (e.g. Na⁺). An anion is a negatively charged ion formed when an atom gains electrons (e.g. Cl⁻).' },
      { q: 'Q5. Distinguish between an element and a compound.', a: 'An element is a pure substance made of only one kind of atom (e.g. iron, oxygen). A compound is a pure substance made of two or more different elements chemically combined in a fixed ratio (e.g. water H₂O, carbon dioxide CO₂). Components of a compound can only be separated by chemical means, while elements cannot be broken down further by chemical means.' },
      { q: 'Q6. State the law of constant composition (definite proportions).', a: 'The law of constant composition states that a given chemical compound always contains its component elements in a fixed ratio by mass, regardless of how the compound is prepared. For example, pure water (H₂O) always contains hydrogen and oxygen in the mass ratio 1:8.' },
      { q: 'Q7. State the law of multiple proportions.', a: 'The law of multiple proportions states that when two elements combine to form more than one compound, the different masses of one element that combine with a fixed mass of the other are in a simple whole-number ratio. For example, carbon and oxygen form CO and CO₂; the ratio of oxygen masses combining with a fixed mass of carbon is 1:2.' },
      { q: "Q8. What is Avogadro's number?", a: "Avogadro's number is the number of elementary particles (atoms, molecules or ions) present in one mole of a substance. Its value is 6.022 × 10²³. It is denoted by N_A and is the same for all substances." },
      { q: 'Q9. Define the mole. How many particles does one mole contain?', a: 'The mole is the amount of substance that contains as many elementary particles (atoms, molecules or ions) as there are atoms in exactly 12 g of carbon-12. One mole of any substance contains 6.022 × 10²³ particles.' },
      { q: 'Q10. What is molar mass? How is it calculated?', a: 'Molar mass is the mass of one mole of a substance, expressed in grams per mole (g mol⁻¹). It is numerically equal to the relative atomic mass (for elements) or relative molecular mass (for molecules) but expressed in grams. For example, the molar mass of water (H₂O) = 2(1) + 16 = 18 g mol⁻¹.' },
      { q: 'Q11. Calculate the number of moles in 36 g of water. (Molar mass of water = 18 g mol⁻¹)', a: 'Using the formula: Moles = Mass / Molar mass = 36 g / 18 g mol⁻¹ = 2 moles. So 36 g of water contains 2 moles of water molecules.' },
      { q: 'Q12. How many molecules are present in 2 moles of CO₂?', a: "Number of molecules = Moles × Avogadro's number = 2 × 6.022 × 10²³ = 1.2044 × 10²⁴ molecules. So 2 moles of CO₂ contain 1.2044 × 10²⁴ molecules." },
      { q: 'Q13. What is the difference between a molecular ion and a polyatomic ion?', a: 'A molecular ion is a molecule that has lost or gained electrons and carries a charge (e.g. O₂²⁻, NH₄⁺). A polyatomic ion is an ion made of two or more atoms bonded together that behaves as a single charged unit (e.g. SO₄²⁻, NO₃⁻). All polyatomic ions with a charge are molecular ions, but in school-level chemistry the terms are often used for charged groups of atoms.' },
      { q: 'Q14. Why do atoms combine to form molecules?', a: 'Atoms combine to achieve a stable electronic configuration, usually a complete outermost shell (the octet or, for hydrogen, the duplet). By sharing, gaining or losing electrons, atoms lower their energy and form chemical bonds, producing more stable molecules or ions.' },
      { q: 'Q15. What is a chemical formula? What information does it give?', a: 'A chemical formula is a symbolic representation of a substance that shows the elements present and the number of atoms of each element in one molecule. For example, H₂SO₄ shows that sulfuric acid contains 2 hydrogen atoms, 1 sulfur atom and 4 oxygen atoms. It also allows calculation of molar mass and percentage composition.' },
    ],
  },
};
