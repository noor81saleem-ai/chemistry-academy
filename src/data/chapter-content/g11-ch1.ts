// SINGLE-FILE CHAPTER VERSION
// This file contains the chapter content AND all numerical problem data.
// No separate NumericalBlocks.tsx file is required for the data.
// For visible card styling, your existing ChapterView/renderer controls presentation.

// ==================================================
// GRADE 11 - CHAPTER 1
// Clean professional version
// Questions are separated; markdown/table artifacts removed.
// ==================================================

import type { ChapterContent } from './types';

export const g11_ch01: ChapterContent = {
  slug: 'chapter-01',
  title: 'Basic Concepts & Atomic Structure',
  overview: "A structured study chapter covering the historical development of chemistry, branches of chemistry, classification of matter, atomic concepts, chemical formulae and species, and the mole concept.",
  objectives: [
    "Explain early Greek ideas about matter, corpuscular theory and the historical development of chemistry.",
    "Define chemistry and distinguish its major branches with suitable examples.",
    "Explain Dalton's atomic theory and the postulates modified by later discoveries.",
    "Differentiate matter, substances, elements, compounds and mixtures.",
    "Use atomic number, mass number and relative atomic mass to describe atoms.",
    "Differentiate molecular formula, empirical formula, molecular mass, formula mass and formula unit.",
    "Explain ions, cations, anions, molecular ions, free radicals and representative particles.",
    "Apply the mole concept, Avogadro's number and molar mass in quantitative calculations.",
  ],
  keyDefinitions: [
    { term: "Chemistry", def: "The branch of science which deals with the study of matter and changes in matter." },
    { term: "Matter", def: "Anything which occupies space and has weight." },
    { term: "Substance", def: "Pure matter having characteristics different from other kinds of matter around it." },
    { term: "Element", def: "A substance which cannot be divided into simpler substances; its atoms have the same atomic number." },
    { term: "Compound", def: "A substance formed when two or more elements combine in a fixed ratio through chemical bonding." },
    { term: "Mixture", def: "A combination of two or more substances in which the components retain their properties." },
    { term: "Atomic number", def: "The number of protons in the nucleus of an atom; represented by Z." },
    { term: "Mass number", def: "The sum of the numbers of protons and neutrons in an atom." },
    { term: "Mole", def: "The amount of a substance containing 6.022 × 10²³ representative particles." },
    { term: "Molar mass", def: "The mass of one mole of a substance." },
    { term: "Empirical formula", def: "The simplest whole-number ratio between atoms of elements in a compound." },
    { term: "Molecular formula", def: "The actual number or whole-number ratio of atoms in a molecular compound." },
    { term: "Ion", def: "A charged chemical species formed by loss or gain of electrons." },
    { term: "Cation", def: "A positively charged ion formed when an atom loses one or more electrons." },
    { term: "Anion", def: "A negatively charged ion formed when an atom gains one or more electrons." },
    { term: "Free radical", def: "An atom or group of atoms containing an unpaired electron and no overall electric charge." },
  ],
  formulae: [
    "Moles = mass / molar mass",
    "Number of particles = moles × 6.022 × 10²³",
    "Moles = number of particles / 6.022 × 10²³",
    "Mass = moles × molar mass",
    "Number of neutrons = mass number − atomic number",
    "Molecular mass = sum of atomic masses of all atoms in a molecule",
    "Formula mass = sum of atomic masses of all atoms in a formula unit",
  ],

  lectures: [
    {
      number: 1,
      title: 'Introduction to Matter and Chemistry',
      content: [
        { type: 'heading', text: 'Historical Development of Ideas About Matter' },
        { type: 'paragraph', text: 'The chapter begins with early Greek ideas about matter, corpuscular theory, the concepts of Empedocles, Plato and Aristotle, and the later development of chemistry.' },
      ],
    },
    {
      number: 2,
      title: 'Branches of Chemistry',
      content: [
        { type: 'heading', text: 'Major Branches of Chemistry' },
        { type: 'paragraph', text: 'Analytical, biochemical, environmental, inorganic, industrial, nuclear, organic and physical chemistry are introduced with practical examples.' },
      ],
    },
    {
      number: 3,
      title: 'Atomic and Formula Concepts',
      content: [
        { type: 'heading', text: 'Atoms, Formulae and Chemical Species' },
        { type: 'paragraph', text: 'The chapter develops atomic number, mass number, relative atomic mass, formulae, molecular and formula masses, ions, molecular ions and free radicals.' },
      ],
    },
    {
      number: 4,
      title: 'The Mole Concept',
      content: [
        { type: 'heading', text: 'Mole, Molar Mass and Avogadro’s Number' },
        { type: 'paragraph', text: 'The mole links measurable mass with the number of atoms, molecules or formula units and is used in quantitative chemistry calculations.' },
      ],
    },
  ],

  studyNotes: [
    { type: 'heading', text: 'Chapter Study Notes' },
    { type: 'bullets', items: [
      'Greek ideas about matter, corpuscular theory and the historical role of alchemy.',
      'Definition and branches of chemistry with examples.',
      'Dalton’s atomic theory and its later modifications.',
      'Matter, substances, elements, compounds, mixtures and representative particles.',
      'Atomic number, mass number, relative atomic mass and atomic mass unit.',
      'Molecular formula, empirical formula, molecular mass, formula mass and formula unit.',
      'Ions, cations, anions, molecular ions and free radicals.',
      'Mole, Avogadro’s number, molar mass and mass–particle conversions.',
    ] },
  ],

  keyConcepts: [
    { type: 'heading', text: 'Key Concepts' },
    { type: 'paragraph', text: 'Atomic and formula concepts describe the composition of substances, while the mole and Avogadro’s number connect microscopic particles with laboratory-scale masses.' },
  ],

  mcqs: [],

  shortQuestions: [
    {
      number: 1,
      question: "What was the concept or belief of Greek philosophers about matter (universe)?",
      answer: "Greek philosophers believed that everything was made of an elemental substance. Some of them believed that elemental substance is water, others thought that elemental substance is air.",
    },
    {
      number: 2,
      question: "Define corpuscular theory of matter. [Do You Know]",
      answer: "Corpuscular theory tells us that matter (universe) is made up of small particles (things). Two Greek philosophers named Empedocles and Democratus presented this theory in 5th century B.C.",
    },
    {
      number: 3,
      question: "What was the concept of Greek philosophers (Empedocles, Plato and Aristotle) about corpuscular theory of matter? Explain. [Do You Know]",
      answer: "Ancient Greek philosophers presented different concepts about corpuscular theory as follows.\n\ni. Empedocles theory.\n\nA Greek philosopher, named Empedocles, was the first to say that all matter is made of four things, called earth, air, water and fire.\n\nii. Plato theory.\n\nPlato followed Empedocles theory and called these four things elements.\n\niii. Aristotle theory.\n\nAristotle was another Greek philosopher (student of Plato) who adopted the same concept of four elements. But he added that these four elements are made of other four opposite elements called hot-cold and dry-wet. These four elements combine in pairs to form air, fire, water and earth.\n\nFor example, fire is formed from hot and dry, air is formed from hot and wet, water is formed from cold and wet and earth is formed from wet and dry. This concept of Greeks remained applicable for more than 2000 years.",
    },
    {
      number: 4,
      question: "Define chemistry.",
      answer: "It is the branch of science which deals with the study (examination) of matter and changes in matter.",
    },
    {
      number: 5,
      question: "Define different branches of chemistry.",
      answer: "The following are different branches of chemistry.\n\ni. Analytical chemistry: It is that branch of chemistry which deals with the study of methods and instruments used for determination of composition of matter.\n\nii. Biochemistry: It is that branch which deals with the study of chemical and physical changes taking place inside living things.\n\niii. Environmental chemistry: It deals with the studies of harmful effects of chemicals on environment and human beings.\n\niv. Inorganic chemistry: It deals with the study of elements and compounds other than organic compounds.\n\nv. Industrial chemistry: It deals with the studies of methods and technology used for the large scale preparation of products in industries.\n\nvi. Nuclear chemistry: It deals with the changes in nuclie of atoms in various substances. [nuclie is plural of nucleus].\n\nvii. Organic chemistry: It studies substances having carbon in them, except carbonmonoxide\n\n(CO),carbondioxide (CO₂),carbonates (CO²⁻3) and bicarbonates (HCO­1-3).\n\nviii. Physical chemistry: It studies laws and theories to understand structure and changes in matter.",
    },
    {
      number: 6,
      question: "Write down different statements against each branch of chemistry to justify its definition.",
      answer: "(a) Analytical Chemistry.\n\ni. Elemental analysis shows that ammonia contains nitrogen and hydrogen elements.\n\nii. Acetic acid is composed of carbon, hydrogen and carbon elements only.\n\niii. Gasoline fumes are burnt in automobile engine to give energy.\n\niv. Calorimeter is a device used to measure the amount heat a substance absorbs on heating or emits on cooling.\n\nv. Sulphuric acid is weaker acid than hydrochloric acid.\n\nvi. Melting point of sodium chloride is 801oC measured by Fisher-Johns Apparatus.\n\nvii. A chemist did an experiment to determine percentage purity of a sample of glucose.\n\n(b) Biochemistry.\n\ni. Acetic acid causes so many chemical reactions inside human body.\n\nii. Photosynthesis is a natural process used for production of food inside plants in presence of sunlight and chlorophyll.\n\niii. Hair and nails contain keratins (proteins).\n\niv. A cornstalk grows from a seed.\n\nv. Some examples of complete protein food are meat, milk and eggs.\n\n(c) Environmental Chemistry.\n\ni. Nitrogen dioxide (NO₂) is responsible for acid rain.\n\nii. Excessive drink of acetic acid causes adverse/harmful effects on human health.\n\niii. Vehicles exhaust gases pollute the air or atmosphere.\n\niv. Sulphur dioxide is the major source of acid rain.\n\nv. Chlorofluorocarbons are responsible for ozone depletion.\n\nvi. Plantation helps in overcoming green house effect.\n\nvii. Light chlorinated hydrocarbons in drinking water are carcinogens (cancer causing).\n\n(d) Inorganic Chemistry.\n\ni. Ammonia is soluble in water. It has no colour and has pungent irritating smell.\n\nii. The study of carbon, oxygen and hydrogen elements in acetic acid (CH₃COOH).\n\niii. A silver article tarnishes in air.\n\n(e) Industrial Chemistry.\n\ni. Haber’s process is used for large scale production of ammonia.\n\nii. Acetic acid is prepared by oxidation of ethyl alcohol.\n\niii. White lead is a pigment used by artists for centuries which is extracted from its ore, galena (PbS).\n\niv. In Pakistan, most industries use wet process for cement production.\n\n(f) Nuclear Chemistry.\n\ni. Bombardment of alpha rays or neutrons on compounds brings about nuclear changes.\n\nii. The element radium is converted into radon by emitting α-particles.\n\niii. Carbon-14 is continuously produced in the atmosphere when high energy neutrons from space collide with nitrogen-14.\n\n(g) Organic Chemistry.\n\ni. Acetic acid is compound of carbon and is prepared from organic compound called ethyl alcohol (C₂H₅OH).\n\nii. Acetylene is hydrocarbon composed of carbon and hydrogen elements.\n\niii. Dynamite (C₃H₅N₃O₉) explodes to form a mixture of gases.\n\n(h) Physical Chemistry.\n\ni. The change of solid to gas, gas to liquid or liquid to solid or solid to liquid etc.\n\nii. Gases can be compressed by applying pressure.\n\nii. Purple iodine vapours appear when solid iodine is warmed.\n\niii. Ice floats on water.",
    },
    {
      number: 7,
      question: "How Archimedes (Greek philosopher) explained the purity of gold of the crown of a Greek emperor of his times? [Society, Technology and Science]",
      answer: "Archimedes was a Greek philosopher and mathematician. The Greek emperor gave him a task to check the purity of his crown made of gold. One day Archimedes was taking bath and he observed that as he went deep in water, more volume (weight) of water was overflowed from bath tank.\n\nHe put a piece of gold in water in a pot. It displaced some water from there. He thought that the purity of gold could be determined from the amount (volume) of liquid water it displaced (overflowed) from the pot.\n\nHe meant that the quantity of water displaced by gold is equal to the weight of the gold piece dipped in it. He knew that if the crown was pure, then the amount of water displaced by it from a pot must be equal to the water displaced by equal weight of pure gold in another pot filled with same quantity of water.\n\nHe was very much excited by this thinking and ran from there shouting “Eureka” which means\n\n“I found it”.",
    },
    {
      number: 8,
      question: "What is Dalton’s Atomic Theory? Write it postulates. [Society, Technology and Science]",
      answer: "In 1803, a British scientist John Dalton presented his famous theory which has the following postulates.\n\ni. All elements are made of small indivisible particles called atoms.\n\nii. All atoms of an element are identical. They have same masses.\n\niii. During chemical reactions, atoms combine, separate or rearrange in simple ratios.\n\niv. Atoms can neither be created nor destroyed.",
    },
    {
      number: 9,
      question: "What are the defects of Dalton’s atomic theory? OR Which postulates of Dalton’s atomic theory were changed? [Society, Technology and Science]",
      answer: "In 1850s, sub atomic particles (electrons, protons and neutrons) were discovered so the postulate that “atom is indivisible” was rejected. With the discovery of isotopes, the postulate that “all atoms of an\n\nelements are identical” was rejected. The two postulates of Dalton’s theory are still applicable.\n\nIdentify the branch of chemistry that is related to the following information:\n\n1. Hair contains a special class of proteins called keratins, which are present in nails and wool.\n\nAns. This information is related to biochemistry because it discusses hair which is produced as a result of chemical changes (chemical reactions) taking place inside living things.\n\n2. Acetylene is the simplest hydrocarbon that contains carbon-carbon triple bond. Hydrocarbons are the compound of carbon and hydrogen.\n\nAns. This information is related to organic chemistry because it deals with carbon compound (acetylene).\n\n3. White lead is a pigment used by artists for centuries, the metal lead (Pb) in the compound is extracted from its ore, galena (PbS).\n\nAns. This information is associated with industrial chemistry because it shows large scale production of lead from its ore.\n\n4. Sulphuric acid (H₂SO₄) is extremely corrosive to skin.\n\nAns. This information belongs to environmental chemistry because it tells us about the adverse effects on human beings.\n\n5. Gases can be compressed by applying pressure.\n\nAns. This statement is related to physical chemistry because it focuses on a physical change (compression) which takes place under a law called Boyle’s law.\n\n6. Some examples of complete protein food are meat, milk and eggs.\n\nAns. This information is related to biochemistry because proteins are produced inside the body of living things as a result of chemical changes (chemical reactions).\n\n7. Element radium decays by emitting alpha (α) particles and is converted into another element radon.\n\nAns. This statement belongs to nuclear chemistry because one element can only be converted to another element if changes inside nucleus take place.\n\n8. Calorimeter is a device that measures the amount of heat, a substance absorbs on heating or emits on cooling.\n\nAns. This observation is related to physical chemistry because it deals with the study of heat changes in matter.",
    },
    {
      number: 10,
      question: "Define atom. Give example.",
      answer: "The smallest particle of an element that cannot exist in free state is called atom. It is electrically neutral which means that it has no net charge because it has equal number of electrons and protons. For example, Na is an atom of sodium element, H is an atom of hydrogen element, Cl is an atom of chlorine element and C is an atom of carbon element.",
    },
    {
      number: 11,
      question: "How an atom can be seen and weighed? [Important Information]",
      answer: "Many scientists thought that an atom is a mental construction because it cannot be seen with naked eyes. However, with the advancement of science, scientist made scanning tunneling microscope which is used to visualize atoms. Mass spectrometer can be used to weigh atom.",
    },
    {
      number: 12,
      question: "Define matter. Name its three states.",
      answer: "Anything which occupies space and has weight is called matter. It has three states, i.e solid, liquid and gas.",
    },
    {
      number: 13,
      question: "Define substance. Give examples.",
      answer: "Any matter which has different characteristics from any other kind of matter around it is called substance. OR\n\nAnything which is pure is called substance. For example, sodium (Na), water (H₂O) and sodium chloride (NaCl) etc. It means all elements or compounds in pure form are called substances.",
    },
    {
      number: 14,
      question: "Define element. Give examples.",
      answer: "A substance which cannot be divided into simpler substances is called element. OR\n\nA substance which has all its atoms with same atomic number is called element.\n\nFor example, sodium (Na), gold (Au), Silver (Ag) and potassium (K) etc. Elements have uniform composition.",
    },
    {
      number: 15,
      question: "Explain molecularity of physical world. [Society, Technology and Science]",
      answer: "Molecularity of physical world means that this world is made up of molecules. Entire physical world is made of mixtures. Mixtures are made of elements and compounds which are made of molecules. So we can say that physical world is made of molecules and this property is called molecularity of physical world.\n\nElements are the building blocks of living and non-living things in this universe. The elements which make up this earth also make up the moon.\n\nAir consists of polyatomic molecules, like O₂, N₂, CO₂ , H₂O and noble gases. Water consists of polyatomic molecules which covers 70% of earth crust and also fills the empty spaces under the earth. Clay and sand also consists of long chain molecules called giant molecules. Petroleum and coal are also composed of molecules. Living things are also formed of thousands of different substances which exist in the form of large molecules (polymers), like carbohydrates, proteins, fats, lipids, DNA and RNA etc. Simply, this world is made up of molecules",
    },
    {
      number: 16,
      question: "Highlight the importance of garlic. [Science Tit Bits]",
      answer: "Garlic produces bad breath which may be good for you. Garlic contains more than 200 compounds and has the following uses.\n\ni. It is used against stomach cancer.\n\nii. It may cure heart diseases.\n\niii. It may lower the chances of stroke.",
    },
    {
      number: 17,
      question: "Define compound. Give examples.",
      answer: "A compound is a substance which is formed of two or more than two elements combined in a fixed ratio by a natural force called chemical bond. For example water (H₂O), sulphuric acid (H₂SO₄), ammonia (NH₃), nitric acid (HNO₃) and sodium chloride (NaCl) etc.\n\nRemember that both elements and compounds have uniform composition which means that both are formed of same type of particles.",
    },
    {
      number: 18,
      question: "What is a mixture. Give examples.",
      answer: "A mixture is formed by two or more than two different types of substances (elements or compounds) which retain their properties. For example, salt dissolved in water or iron pieces mixed with clay.",
    },
    {
      number: 19,
      question: "Explain the types of mixture. Give examples.",
      answer: "There are two types of mixture.\n\ni. Homogeneous mixture. It is a mixture which has uniform (same) composition throughout its body. OR\n\nIt is that mixture having one phase. For example, sugar or sodium chloride dissolved in water.\n\nii. Heterogeneous mixture. It is that type of mixture which is formed of two or more than two visibly different components. OR\n\nIt is a mixture which has more than one phases. For example, iron pieces added in water.",
    },
    {
      number: 20,
      question: "What are the differences between compounds and mixtures.",
      answer: "The following table shows the differences.\n\nCompound\n\nMixture\n\nIt is formed by two or more elements combined by fixed ratio by a chemical bond.\n\nIt is formed by two or more elements or compounds combined with indefinite ratio\n\nThe substances of which a compound is formed are called elements.\n\nThe substances of which a mixture is formed are called components of mixture.\n\nThe elements making compounds cannot be separated by physical means. They can be separated by chemical means.\n\nThe components making mixtures can be separated by physical means.\n\nThe properties of compounds are different from their elements.\n\nThe properties of mixtures are similar to their components\n\nExamples: Benzene (C₆H₆) & glucose (C₆H₁₂O₆)\n\nExamples: Clay or sand added to water .",
    },
    {
      number: 21,
      question: "Define atomic number. Give examples.",
      answer: "The number of protons in the nucleus of an atom or number of electrons around the nucleus of an atom of an element is called atomic number of that element. It is represented by “Z”.\n\nFor example, atomic number of sodium ( ) is 11 and () is 17. Atomic number is shown at subscript position of the symbol for an element.\n\nRemember that the number of proton is equal to the number of electrons in a neutral atom.",
    },
    {
      number: 22,
      question: "Define mass number. Give examples.",
      answer: "The sum of number of protons and number of neutrons is called mass number. For example, the mass number of carbon () is 12 and oxygen () is 16.\n\nMass number is shown at superscript position of the symbol for an element.",
    },
    {
      number: 23,
      question: "How to calculate number of electrons, number of protons and number of neutrons.",
      answer: "Remember that number of electrons in an atom of an element is equal to number of protons. The number of neutrons can be calculated by subtracting atomic number from mass number as given.\n\nFor example, the number of electrons, protons and neutrons in chlorine () can be calculated as,\n\nNumber of electrons = 17\n\nNumber of protons = 17\n\nNumber of neutrons = 35-17 = 18",
    },
    {
      number: 24,
      question: "Define relative atomic mass. Give examples.",
      answer: "The mass of an atom of an element related to the mass of one atom of carbon-12 (¹²C) (¹²C) atom is called relative atomic mass or simply atomic mass of that element. The unit of atomic mass is atomic mass unit (amu). For example, the relative atomic mass of hydrogen is 1.008 amu, oxygen is 15.9994 amu and sodium is 22.9898 amu.",
    },
    {
      number: 25,
      question: "Who were the first scientists to work on relative atomic masses of elements?",
      answer: "John Dalton, Gay Lussac, Lavoisier, Avogadro and Berzelius worked on relative atomic masses of elements and presented quantitative information about atomic masses. The chemists in nineteenth century observed the proportions in which elements combine to form different compounds and in this way they calculated relative atomic masses.",
    },
    {
      number: 26,
      question: "How is relative atomic mass determined?",
      answer: "Answer not explicitly marked in the supplied source.",
    },
    {
      number: 27,
      question: "What is atomic mass unit?",
      answer: "One atomic mass unit (amu) is the mass exactly equal to one-twelfth (1/12th) the mass of one atom of light isotope of carbon-12 (¹²C). Mathematically, 1 amu = of carbon-12 (¹²C) atom",
    },
    {
      number: 28,
      question: "Calculate the atomic mass of hydrogen atom which is 8.40% as massive as one atom of ¹²C.",
      answer: "If the percentage of an atom related to carbon-12 (¹²C) is given, then we can calculate the atomic mass of the given atom is the following formula.\n\nx 12 amu\n\nRelative percentage by mass of hydrogen = 8.40%\n\nSo put the value in the above formula,\n\nx 12 amu = 1.008 amu",
    },
    {
      number: 29,
      question: "Define chemical formula. Give examples.",
      answer: "A symbolic representation which tells us about the type of elements and whole number ratio between atoms of elements in covalent compounds and ionic compounds. For example, the chemical formulas of sodium chloride is NaCl, calcium oxide is CaO, ammonia is NH₃ and hydrochloric acid is HCl. The numerical subscripts in chemical formulas tell us the number of each type of atoms in the compound. Chemical formula has two types, i.e molecular formula and empirical formula.",
    },
    {
      number: 30,
      question: "Define molecular formula. Give examples.",
      answer: "A symbolic representation which tells us about the actual whole number ratio between atoms of elements in a covalent compound. For example, the molecular formulsa of glucose is C₆H₁₂O₆, sulphuric acid is H₂SO₄, ammonia is NH₃, benzene is C₆H₆ and sucrose (table sugar) is C₁₂H₂₂O₁₁.",
    },
    {
      number: 31,
      question: "What is empirical formula. Give examples.",
      answer: "The symbolic representation of a compound which tells us about simplest whole number ratio between atoms of elements in a compound. For example, the empirical formula of glucose is CH₂O, sulphuric acid is H₂SO₄, sodium chloride is NaCl, water is H₂O and benzene is CH.",
    },
    {
      number: 32,
      question: "Many compounds have same chemical formulas/molecular and empirical formulas?",
      answer: "There are some compounds which have same molecular and empirical formulas. For example, water (H₂O), carbondioxide (CO₂), ammonia (NH₃), nitric acid (HNO₃), sulphuric acid (H₂SO₄), sodium chloride (NaCl), calcium chloride (CaCl₂) etc.\n\nNote that for all ionic compounds, chemical formulas are same to their empirical formulas.\n\n1. Write the empirical formulas for the compound containing carbon and hydrogen in the following ratios. (a) 1:4 (b) 2:6 (c) 2:2 (d) 6:6\n\nAns. (a) CH₄ (b) CH₃ (c) CH (d) CH\n\n2. For many compounds, the empirical and molecular formulas are same. For example, water (H₂O), carbondioxide (CO₂), ammonia (NH₃), methane (CH₄), sulphur dioxide (SO₂) etc. Can you show it why?\n\nAns. As we know that the ratio between atoms of different elements in the mentioned compounds cannot be divided by a common digit to make it simplest, so both the molecular formulas and empirical formulas of these compounds are same.\n\n1. Asparine is used as mild pain killer. There are nine carbon atoms, eight hydrogen atoms and four oxygen atoms in this compound. Write empirical and molecular formulas.\n\nAns. The molecular formula of asparine is C₉H₈O₄.\n\nThe empirical formula of asparine is C₉H₈O₄.\n\n2. Vinegar is 5% acetic acid. It contains two carbon atoms, four hydrogen atoms and two oxygen atoms. Write its empirical and molecular formulas.\n\nAns. The molecular formula of acetic acid is C₂H₄O₂.\n\nThe empirical formula of acetic acid is CH₂O.\n\n3. Caffeine (C₈H₁₀N₄O­2) is found in tea and coffee. Write the empirical formula of caffeine.\n\nAns. The empirical formula of caffeine is C₄H₅N₂O.",
    },
    {
      number: 33,
      question: "Define molecular mass. Give examples.",
      answer: "The sum of atomic masses of all atoms present in a molecule is called molecular mass. For example, the molecular mass of hydrogen (H₂) is 2 amu (1amu + 1 amu = 2 amu), chlorine (Cl₂) is 71 amu, (35.5 amu + 35.5 amu = 71 amu) water (H₂O) is 18 amu (2 x 1 amu + 16 amu = 18 amu), and sulphuric acid (H₂SO₄) is 98 amu ( 2 x 1 amu + 32 amu + 4 x 16 amu = 98 amu).\n\nThe term molecular mass is only used for molecular elements and molecular compounds (covalent compounds) only.",
    },
    {
      number: 34,
      question: "Define formula mass. Give examples.",
      answer: "The sum of atomic masses of all atoms present in a formula unit of an ionic compound is called formula mass. For example, The formula mass of sodium chloride (NaCl) is 58.5 amu (23 amu + 35.5 amu = 58.5 amu) , calcium oxide (CaO) is 56 amu (40 amu + 16 amu = 56 amu) and calcium chloride (CaCl₂) is 111 amu (40 amu + 2 x 35.5 amu = 111 amu).\n\nThe term formula mass is used for ionic compounds only.",
    },
    {
      number: 35,
      question: "Define formula unit. Give examples.",
      answer: "The arrays (arrangement) of oppositely charged ions in ionic compounds which show simplest ratio between cations and anions are called formula units. Ionic compounds contain formula units, not molecules or atoms.\n\nFor example, NaCl is the formula unit of sodium chloride which shows that it has one sodium ion (Na⁺) for one chloride ion (Cl⁻). Similarly, CaCl₂ is the formula unit of calcium chloride which shows that it has one calcium ion (Ca²⁺) for two chloride ions (Cl⁻). Remember that onic compounds are shown by formula units.",
    },
    {
      number: 36,
      question: "Define molecule. Explain the types of molecules with examples.",
      answer: "The smallest particle of a molecular element or a molecular compound which can exist in free state (uncombined state) is called molecule. For example, Cl₂ is the molecule of chlorine gas, H₂O is the molecule of water. There are two types of molecules.\n\ni. Monoatomic molecules. These are molecules having one atom, e.g helium (He) and neon (Ne) etc. All noble gases contain monoatomic molecules.\n\nii. Polyatomic molecules. These are molecules containing more than one atom, e.g water (H₂O) and table sugar (C₁₂H₂₂O₁₁) etc.\n\n1. Potassium chlorate (KClO₃) is used commonly for the laboratory preparation of oxygen gas. Calculate its formula mass.\n\nAns. Atomic mass of potassium (K) = 39 amu\n\nAtomic mass of chlorine (Cl) = 35.5 amu\n\nAtomic mass of oxygen (O) = 16 amu\n\nFormula mass is the sum of atomic mass of all atoms present in the formula.\n\nSo formula mass of KClO₃ is = (39 amu + 35.5 amu + 3x16 amu = 122.5 amu)\n\n2. When baking soda (NaHCO₃) is heated, carbondioxide (CO₂) is released, which is responsible for the rising of cookies and bread. Determine the formula masses of baking soda and carbondioxide.\n\nAns. For baking soda (NaHCO₃):\n\nAtomic mass of sodium (Na) = 23 amu\n\nAtomic mass of hydrogen (H) = 1 amu\n\nAtomic mass of carbon(C) = 12 amu\n\nAtomic mass of oxygen (O) = 16 amu\n\nSo the formula mass of NaHCO₃ is (23 amu + 1 amu + 12 amu + 3x16 amu = 84 amu)\n\nFor carbondioxide (CO₂):\n\nAtomic mass of carbon (C) = 12 amu\n\nAtomic mass of oxygen (O) = 16 amu\n\nFormula mass of CO₂ = (12 amu + 2x16 amu = 44 amu)\n\n3. The following compounds are used as fertilizers. Determine their formula masses.\n\n(i) Urea, (NH₂)2CO (ii) Ammonium nitrate, NH₄NO₃.\n\nAns. For urea, (NH₂)2CO:\n\nAtomic mass of nitrogen (N) = 14 amu\n\nAtomic mass of hydrogen (H) = 1 amu\n\nAtomic mass of carbon (C) = 12 amu\n\nAtomic mass of oxygen (O) = 16 amu\n\nFormula mass of urea (NH₂)2CO = (2x14 amu + 4x1amu + 12 amu + 16 amu = 60 amu)\n\nFor ammonium nitrate, NH₄NO₃:\n\nAtomic mass of nitrogen (N) = 14 amu\n\nAtomic mass of hydrogen (H) = 1 amu\n\nAtomic mass of oxygen (O)= 16 amu\n\nThe formula mass of ammonium nitrate (NH₄NO₃) = (2x14amu + 4x1amu + 3x16amu= 80 amu",
    },
    {
      number: 37,
      question: "Define chemical species. Give examples.",
      answer: "An atom, molecule of ion which is under chemical process of measurement is called chemical species. For example, a sample of sodium element, sodium chloride or a piece of ice etc.",
    },
    {
      number: 38,
      question: "Define ion. Give examples.",
      answer: "A charged species which is formed by loss or gain of electron from an atom of chemically bonded group of atoms. For example, calcium ion (Ca²⁺) and oxide ion (O²⁻) etc. There are two types of ions, i.e cation and anion.",
    },
    {
      number: 39,
      question: "What is cation and anion? How are they formed? Give examples.",
      answer: "i. Cation.\n\nIt is positively charged ion. It is formed from metal atoms by losing one or more electrons. For example potassium ion (K⁺) which is formed by losing one electron and aluminium ion (Al³⁺) which is formed by losing three electrons.\n\nii. Anion.\n\nIt is negatively charged ion. It is formed from non metal atoms by gaining one or more than one electrons. For example, fluoride ion (F⁻) which is formed by gaining one electron and oxide ion (O²⁻) which is formed by gaining two electrons.",
    },
    {
      number: 40,
      question: "Why an ion acquires (adopts) a net positive and negative charge? Give examples.",
      answer: "A cation gets a positive charge because after losing electron/s because the number of electrons decreases than the number of protons, so an overall positive charge appears on it.\n\nSodium atom () = 11 electrons (-11 charge) + 11 protons (+11)\n\n= -11 + (+11) = 0\n\nIt means no charge appears on sodium atom.\n\nIf sodium loses one electron, it means the number of electrons decreases by one unit than the number of protons (proton number does not change), so a net positive charge appears on it as follows.\n\nSodium ion (1+) = 10 electron (-10 charge) + 11 protons (+11 charge)\n\n= -10 + (+11) = +1\n\nIt means +1 charge appears on sodium ion.\n\nOn the other hand, an anion gets negative charge after gaining electron/s because the number of electrons increases than the number of protons, so an overall negative charge appears on it.\n\nChlorine atom () = 17 electrons (-17 charge) + 17 protons (+17)\n\n= -17 + (+17) = 0\n\nIt means no charge appears on chlorine atom.\n\nIf chlorine atom gains one electron, it means the number of electrons increases by one unit than the number of protons (proton number does not change), so a net negative charge appears on it as follows. Chloride ion (1-) = 18 electron (-18 charge) + 17 protons (+17 charge)\n\n= -18 + (+17) = -1\n\nExplain why\n\n1. An oxide ion (O²⁻) has “-2” charge.\n\nAns. Oxide ion (O²⁻) has “-2” charged because it gains two electrons so the number of electrons increases than protons by two units. Two electrons carry give 2 negative charge to oxide ion as shown.\n\nO + 2e- O²⁻\n\n2. Magnesium ion (Mg²⁺) has “+2” charge.\n\nAns. Magnesium ion (Mg²⁺) has “+2” charge because it loses two electrons so the number of protons increases than electrons by two units. Two electrons loss give 2 positive charge to magnesium ion.\n\nMg Mg²⁺ + 2e-\n\n3. Sulphide ion (S²⁻) has “-2” charge.\n\nAns. Sulphide ion (S²⁻) has “-2” charge because it gains two electrons so the number of electrons increases than protons by two units. Two electrons produce 2 negative charge to sulphide ion.\n\nS + 2e- S²⁻",
    },
    {
      number: 41,
      question: "Define molecular ion. Give examples.",
      answer: "The chemical species which is formed by a molecule after gaining or losing electrons is called molecular ion. It is unstable so can live for very short time. It can exist at high temperature only.\n\nFor example, O₂⁻ is the molecular ion of oxygen formed by gaining one electron, O₂⁺ is the molecular ion of oxygen formed by loss of one electron. Similarly, N₂⁻ is the molecular ion of nitrogen formed by gaining one electron and N₂⁺ is the molecular ion of nitrogen formed by loss of on electron. Remember that molecular ions cannot form ionic compounds.",
    },
    {
      number: 42,
      question: "Define free radical. Give examples.",
      answer: "A free radical is an atom or a group of atoms that contains an unpaired electron and has no overall electric charge.",
    },
    {
      number: 43,
      question: "How is free radical formed? Give example.",
      answer: "When a molecule, like halogen is exposed to sunlight, it splits into its free radicals. For example,",
    },
    {
      number: 44,
      question: "What are the differences between free radical and an ion? Give examples.",
      answer: "The following table shows the difference between free radical and ion.\n\nFree radical\n\nIon\n\nIt has an unpaired electron\n\nIt has no unpaired electron\n\nIt carries no electrical charge\n\nIt carries electrical charge\n\nIt has odd number of electrons. For example, chlorine radical (Cl.) has seven electrons.\n\nIt has even number of electrons. For example, chloride ion (Cl⁻) has eight electrons\n\nIdentify ions, molecular ions and free radicals from the following chemical species.\n\nAns. Ions: CN⁻, N³⁻,He²⁺\n\nMolecular ions: He²⁺, CH₄⁺\n\nFree radicals:",
    },
    {
      number: 45,
      question: "What are representative particles of a substance? Give examples.",
      answer: "The particles present in a substance are called its representative particles. For example, H₂O molecules are representative particles of water. Similarly, Na atoms are representative particles of sodium element and NaCl formula units are representative particles of sodium chloride.",
    },
    {
      number: 46,
      question: "How to identify an element, compound and mixture. Show diagrams.",
      answer: "If the particles are formed of same type of atoms, then they are elements. If the particles contain different type of atoms combined then they show compounds. If different type of elements or compounds are mixed, they form mixtures.\n\nThe following diagram shows elements, compound and mixtures clearly.",
    },
    {
      number: 47,
      question: "Define molecule. Differentiate between molecules of elements and compounds . Give examples.",
      answer: "The particles which can exist freely (independently) is called molecule. Molecules of elements have same types of atoms. For example, He, H₂, O₃ and S₈ are the molecules of helium, hydrogen and sulphur respectively.\n\nOn the other hand, the molecules of compounds have different types of atoms. For example, HCl, H₂O and C₁₂H₂₂O₁₁ are the molecules of hydrogen chloride, water and sucrose (table sugar) respectively.",
    },
    {
      number: 48,
      question: "What are monoatomic and polyatomic molecules? Give examples.",
      answer: "The molecules which consist of one atom only are called monoatomic molecules. For example, He and Ne are monoatomic molecules of helium and neon respectively. All inert gases or noble gases are monoatomic molecules.\n\nOn the other hand, the molecules having two or more atoms in them are called polyatomic molecules. For example, H₂, CO₂ and C₆H₁₂O₆ are polyatomic molecules of hydrogen, carbondioxide and glucose respectively.\n\n(1) Observe the given figure “A” and identify the diagram that represent the particles of\n\n(a) an element whose representative particles are atoms\n\n(b) an element whose representative particles are molecules\n\n(c) a compound\n\n(d) a mixture of an element and a compound\n\n(e) a mixture of two elements\n\n(f) a mixture of two compounds.\n\n(2) Observe the given figure “B” and decide which diagram represents particles in an element, a compound and a mixture?\n\nAns. (1) (a) (vi) Radon is an element whose particles are atoms.\n\n(b) (iv) Iodine is an element whose particles are molecules.\n\n(c) (i) Hydrogen chloride is a compound because it has different atoms combined.\n\n(d) (ii) Oxygen (element) and sulphur dioxide (compound) are mixed form a mixture.\n\n(e) (v) It is a mixture of elements chlorine (Cl₂) and argon (Ar).\n\n(f) (iii) It is a mixture of two compounds, i.e sulphur dioxide (SO₂) and ammonia (NH₃).\n\nAns. (2) (b) and (f) represent particles of elements argon (Ar) and chlorine (Cl₂) respectively.\n\n(a) and (c) represent particles of compounds (ammonia and sulphur dioxide).\n\n(d) and (e) are mixtures of elements (N₂, H₂) and compounds (CO₂, CO) respectively.",
    },
    {
      number: 49,
      question: "What is pseudo-science? [Society, technology and science]",
      answer: "The scientists who worked on changing cheap (less valued) metals such as lead into gold were called Alchemists and that branch was called Alchemy. Alchemy was named pseudo-science (pseudo means false) because Alchemists totally failed in preparing gold from cheap metals.",
    },
    {
      number: 50,
      question: "What was the importance/advantage of Alchemy? [Society, technology and science]",
      answer: "Changing cheap metals into gold was wastage of time, but at the same time new processes, like distillation, sublimation and metal extraction were discovered. In this way Alchemists promoted science rather than wasting time.",
    },
    {
      number: 51,
      question: "What is mole and Avogadro’s number. How are they related (linked) with one another?",
      answer: "Mole is the amount of a substance that contains 6.022x1023 particles (atoms, molecules and formula units) of that substance. It is the unit of measuring amount of a substance.\n\nThe experimentally determined number equals to the number of particles in one mole of a substance is called Avogadro’s number. It is represented by NA.\n\nFor example, 12 g carbon, 18 g water and 58.5 g sodium chloride are equal to one mole and contain 6.022x1023 atoms, molecules and formula units respectively.",
    },
    {
      number: 52,
      question: "What is molar mass? Give examples. How is molar mass related to Avogadro’s number?",
      answer: "The mass of one mole of a substance is called molar mass. Molar mass of a substance contains 6.022x1023 particles of that substance. Hydrogen exists as molecules so one mole of water has 6.022x1023 molecules. Carbon exists as atoms so one mole of carbon contains 6.022x1023 atoms. Sodium chloride exists as formula units so one mole of sodium chloride contains 6.022x1023 formula units.",
    },
    {
      number: 53,
      question: "What is the use/importance of mole concept? [Society, technology and science]",
      answer: "The word mole comes from the word molecule. Mole is such a big quantity that entire world population need almost one million years to count one mole coins. So it is inconvenient to count that much large number.\n\nHowever, the mole concept has made it easier to count 6.022x1023. A mole represents a definite mass so we can count these big numbers by weighing if we know the mass of one particle (coin).",
    },
    {
      number: 54,
      question: "Define gram atomic mass, gram molecular mass and gram formula mass of substances.",
      answer: "The atomic mass of an element shown in gram is called gram atomic mass of that element.\n\nFor example, 12 g carbon is gram atomic mass of carbon.\n\nThe molecular mass of an element or compound shown in gram is called gram molecular mass of that substance. For example 2 g hydrogen and 18 g water are gram molecular mass of these substances.\n\nThe formula mass of a compound shown in gram is called gram formula mass of that compound.\n\nFor example, 58.5 g sodium chloride is gram formula mass of sodium chloride.",
    },
    {
      number: 55,
      question: "What is the relationship/link between molar mass with gram atomic mass, gram molecular mass and gram formula mass of substances?",
      answer: "Gram atomic mass, gram molecular mass and gram formula mass are equal to molar masses of substances and have 6.022x1023 particles in them.",
    },
    {
      number: 56,
      question: "Differentiate between gram atomic mass, gram molecular mass and gram formula mass of substances?",
      answer: ": The following table shows differences between gram atomic mass, gram molecular mass and gram\n\nformula mass.\n\nGram atomic mass\n\nGram molecular mass\n\nGram formula mass\n\nIt represents one mole of atoms of elements.\n\nIt represents one mole of molecules of elements or molecular compounds.\n\nIt represents one mole of formula units of ionic compounds.\n\nIt has 6.022 x x1023 atoms.\n\nIt has 6.022 x 1023 molecules.\n\nIt represents 6.022 x 1023 formula units.\n\nIt is equal to molar mass of element.\n\nIt is equal to molar mass of molecular elements or a molecular compounds.\n\nIt is equal to formula mass of an ionic compound.\n\nExamples: Na = 23g,\n\nCa = 40g, K = 39g etc\n\nExamples: H₂ = 2g, H₂O=18g\n\nExample: NaCl= 58.5g, CaO=56g, CaCl₂= 111g etc.\n\nThe following formula is used for calculating mass from given moles.\n\nExample 1.5 (a). Calculate molar mass of\n\n(a) sodium (Na) (b) nitrogen (N₂) (c) sucrose (C₁₂H₂₂O₁₁)\n\nFor calculating molar masses of substances, atomic masses of required elements will be given to you.\n\nAtomic mass of sodium (Na) = 23 amu\n\nAtomic mass of nitogen (N) = 14 amu\n\nAtomic mass of carbon (C) = 12 amu\n\nAtomic mass of hydrogen (H) = 1 amu\n\nAtomic mass of oxygen (O) = 16 amu\n\nSolution. Note that sodium exists in atomic form so its atomic mass shown in grams is equal to its molar mass. Nitrogen and sucrose exist in molecular form so their molecular masses shown in gram are equal to their molar masses.\n\n(a) Atomic mass of sodium (Na) = 23 amu\n\nMolar mass of sodium (Na) = 23 g/mol\n\n(b) Molecular mass of nitrogen (N₂) = (14 amu + 14 amu) = 28 amu\n\nMolar mass of nitrogen (N₂) = 28 g/mol\n\n(c) Molecular mass of sucrose (C₁₂H₂₂O₁₁) = (12x12+22x1+11x16) = 342 amu\n\nMolar mass of sucrose (C₁₂H₂₂O₁₁) = 342 g/mol\n\nCalculate the mass of one mole of\n\n(a) copper (Cu) (b) iodine (I₂) (c) potassium (K) (d) oxygen (O₂)\n\nAtomic mass of copper (Cu) = 63 amu\n\nAtomic mass of iodine (I) = 127 amu\n\nAtomic mass of potassium (K) = 39 amu\n\nAtomic mass of oxygen (O) = 16 amu\n\nSolution. Copper (Cu) and potassium (K) exist as atoms so their atomic masses shown in grams are equal to their molar masses. On the other hand, iodine (I₂) and oxygen (O₂) exist as molecules so their molecular masses shown in gram are equal to their molar masses.\n\n(a) Atomic mass of copper (Cu) = 63 amu\n\nMolar mass of copper (Cu) = 63 g/mol\n\n(b) Molecular mass of iodine (I₂) = (127 amu + 127 amu) = 254 amu\n\nMolar mass of iodine molecule (I₂) = 254 g/mol\n\n(c) Atomic mass of potassium (K) = 39 amu\n\nMolar mass of potassium (K) = 39 g/mol\n\n(d) Molecular mass of oxygen (O₂) = 32 amu\n\nMolar mass of oxygen (O₂) = 32 g/mol\n\nExample 1.5 (b). Oxygen is converted to ozone (O₃) during thunderstorm. Calculate the mass of\n\nozone (O₃) if 9.05 moles of ozone are formed in a storm.\n\nSolution. Molecular mass of ozone (O₃) = 48 amu\n\nMolar mass of ozone (O₃) = 48 g/mol\n\nMass = Moles x Molar mass\n\n= 9.05 moles x 48 g/mol\n\n= 434.4 g O₃.\n\nExample 1.6. When natural gas burns, carbondioxide (CO₂) is formed. If 0.25 moles of\n\ncarbondioxide (CO₂) are formed, what mass of carbondioxide (CO₂) is produced?\n\nSolution. Molecular mass of carbondioxide (CO₂) = 44 amu\n\nMolar mass of carbondioxide (CO₂) = 44 g/mol\n\nMass = Moles x Molar mass\n\n= 0.25 moles x 44g/mol\n\n= 11 g CO₂\n\nThe following formula is used for calculating moles from given mass.\n\nExample 1.7. How many moles of each of the following substances are present?\n\n(a) A balloon filled with 5 g of hydrogen.\n\n(b) A block of ice that weighs 100 g.\n\nSolution. (a) Molar mass of hydroge (H₂) = 2 g/mol\n\nGiven mass = 5g\n\nMoles = 5g/2g.mol-1\n\n= 2.5 moles hydrogen (H₂).\n\n(b) Molar mass of ice (H₂O) = 18 g/mol\n\nGiven mass of ice = 100 g\n\nMoles = 100g/18g.mol-1 = 5.55 moles ice (H­2O\n\n(1) The molecular formula of compound used for bleaching hair is hydrogen peroxide(H₂O₂).\n\nThen calculate the\n\n(a) mass of this compound that would contain 2.5 moles.\n\n(b) number of moles of this compound that would exactly weigh 30 g.\n\nSolution. (a) Molar mass of hydrogen peroxide (H₂O₂) = 34g/mol\n\nMoles = 2.5 moles\n\nMass = Moles x Molar mass\n\n= 2.5 moles x 34 g/mol\n\n= 85 g H₂O₂\n\n(b) Mass of hydrogen peroxide (H₂O₂) = 30 g\n\nMoles = Mass/Molar mass\n\n= 30 g/34g.mol-1\n\n= 0.88 moles H₂O₂\n\n(2) A spoon of table salt (NaCl) contains 12.5 g of this salt. Calculate number of moles it contains.\n\nSolution. Molar mass of table salt (NaCl) = 58.5 g/mol\n\nMass = 12.5 g\n\nMoles = Mass/Molar mass\n\n= 12.5 g/58.5 g.mol-1\n\n= 0.21 moles NaCl\n\n(3) Before the digestive system X-rayed, people are required to swallow suspensions of barium sulphate (BaSO₄). Calculate the mass of one mole barium sulphate (BaSO₄).\n\nSolution. Molar mass of barium sulphate (BaSO₄) =\n\nMoles of barium sulphate (BaSO₄) = 1 mole\n\nMass = Moles x Molar mass\n\n= 1 mole x 233 g/mole\n\n= 233 g BaSO₄\n\n·\n\n· Calculating number of atoms in given number of moles of substances.\n\nThe following formula is used for calculating number of atoms in given moles for elements which exist in the form of atoms.\n\nExample 1.8. Calculate the number of atoms in the following substances.\n\n(1) Zinc (Zn) is a silvery metal that is used to galvanize steel to prevent corrosion. How many atoms are there in 1.25 moles zinc (Zn)?\n\nSolution. Moles of zinc (Zn) = 1.25 moles\n\nNumber of atoms = Moles x 6.022 x 1023\n\n= 1.25 moles x 6.022 x 1023\n\n= 7.53 x 1023 atoms of zinc (Zn).\n\n(2) A thin foil of aluminium (Al) is used as wrapper in food industries. How many atoms are present in a foil that contains 0.2 moles of aluminium?\n\nSolution. Moles of aluminium (Al) = 0.2 moles\n\nNumber of atoms = 0.2 moles x 6.022 x 1023\n\nNumber of atoms = 1.2044 x 1023 atoms of aluminium (Al).\n\n· Calculating number of molecules in given number of moles of substances.\n\nThe following formula is used for calculating number of molecules from given moles of a substance. This formula is used for those substances which exist in the form of molecules.\n\nExample 1.9. Calculate number of molecules in the following substances.\n\n(1) Methane (CH₄) is the major component of natural gas. How many molecules are present in 0.5 moles of pure sample of methane (CH₄)?\n\nSolution. Moles of methane (CH₄) = 0.5 moles\n\nNumber of molecules = Moles x 6.022 x 1023\n\n= 0.5 moles x 6.022 x 1023\n\n= 3.011 x 1023 molecules of methane (CH₄).\n\n(2). At high temperature, hydrogen sulphide (H₂S) gas given off by a volcano is oxidized by air to sulphur dioxide (SO₂). Sulphur dioxide (SO₂) reacts with water to form acid rain. How many molecules are there in 0.25 moles of sulphur dioxide (SO₂)?\n\nSolution. Moles of sulphur dioxide (SO₂) = 0.25 moles\n\nMolecules of sulphur dioxide (SO₂) gas = Moles x 6.022 x 1023\n\n= 0.25 moles x 6.022 x 1023\n\n= 1.5055 x 1023 molecules of sulphur dioxide (SO₂)\n\n· Calculating number of moles from the given number of atoms of substances.\n\nThe following formula is used for calculating number of moles from the given number of atoms of substance which exist in the form of atoms.\n\nExample 1.10. Titanium (Ti) is corrosion resistant metal that is used in rockets, aircraft and jet\n\nengines. Calculate the number of moles in this metal in a sample containing 3.011 x 1023 titanium (Ti) atoms.\n\nSolution. Number of atoms given = 3.011 x 1023\n\nMoles = Given atoms/ Avogadro’s number\n\n= 3.011 x1023 / 6.022 x 1023\n\n= 0.5 moles titanium (Ti)\n\n· Calculating number of moles from the given number molecules of substances.\n\nThe following formula is used for calculating number of moles from the given number of molecules of substances which exist in the form of molecules.\n\nExample 1.11. Formaldehyde (CH₂O) is used to preserve dead animals. Its molecular formula is\n\nCH2O. Calculate its number of moles that would contain 3.011 x 1022 molecules in it.\n\nSolution. Number of molecules of formaldehyde (CH₂O) = 3.011 x 1022\n\nNumber of moles = Given molecules/Avogadro’s number\n\n= 3.011 x 1022 / 6.022 x 1023\n\n= 0.05 moles of formaldehyde (CH₂O).\n\n1. Aspirin is a compound that contains carbon, hydrogen and oxygen. It is used as a painkiller. An aspirin tablet contains 1.25 x 1030 molecules. How many moles of the compound are present in the tablet?\n\nSolution. Molecules given = 1.25 x 1030\n\nMoles = No of molecules / Avogadro’s number\n\n= 1.25 x 1030/ 6.022 x 1023\n\n= 2.076 x 106 moles of aspirin.\n\n2. A method used to prevent rusting in ships and underground pipelines involves connecting the iron to a block of a more active metal such as magnesium. This method is called cathodic protection. How many moles of magnesium are present in 1 billion (1 x 109) atoms of magnesium?\n\nSolution. Number of atoms of magnesium (Mg) = 1 x 109\n\nMoles = No of atoms / Avogadro’s number\n\n= 1 x 109 / 6.022 x 1023\n\n= 1.66 x 10-15 moles of magnesium (Mg)",
    },
    {
      number: 57,
      question: "Encircle the correct answer. (i) Which of the following lists contains only elements? A. air, water, oxygen B. hydrogen, oxygen, brass C. air, water, fire, earth D. calcium, sulphur, carbon (ii) The diagrams below represent particles in four substances. Which box represents the particles of nitrogen? (iii) What is the formula mass of copper sulphate pentahydrate (CuSO₄.5H2O)? [Atomic masses of copper (Cu) = 63.5 amu, sulphur (S) = 32 amu, oxygen (O) = 16 amu, hydrogen (H) = 1amu] A. 159.5 amu B. 185.5 amu C. 249.5 amu D. 149.5 amu (iv) A compound with chemical Na₂CX₃ has formula mass 106 amu. Atomic mass of element “X” would be A. 106 amu B. 23 amu C. 12 amu D. 16 amu (v) How many moles of molecules are there in 16 g oxygen? A. 1 mole B. 0.5 moles C. 0.1 moles D. 0.05 moles (vi) What is the mass of 4 moles of hydrogen gas? A. 8.064 g B. 4.032 g C. 1 g D. 1.008 g (vii) What is the mass of carbon present in 44 g carbondioxide (CO₂)? A. 12 g B. 6 g C. 24 g D. 44 g (viii) The electronic configuration of an element is 1s2 2s2. An atom of this element will form an ion that will have charge [ This question belongs to chapter 3] A. +1 B. +2 C. +3 D. -1 (ix) Which term is same for one mole of oxygen and one mole of water? A. volume B. mass C. atoms D. molecules (x) If one mole of carbon contains “x” atoms, what is the number of atoms contained in 12 g of magnesium (Mg)? A. x B. 0.5x C. 2x D. 1.5x",
      answer: "wers.\n\ni\n\nii\n\niii\n\niv\n\nv\n\nvi\n\nvii\n\nviii\n\nix\n\nx\n\nD\n\nD\n\nC\n\nD\n\nB\n\nA\n\nA\n\nB\n\nD\n\nB",
    },
    {
      number: 58,
      question: "Give short answers. (i) Differentiate between an ion and a free radical.",
      answer: "The following table shows difference between free radical and ion.\n\nFree radical\n\nIon\n\nIt has an unpaired electron\n\nIt has no unpaired electron\n\nIt carries no electrical charge\n\nIt carries electrical charge\n\nIt has odd number of electrons. For example, chlorine radical (Cl.) has seven electrons.\n\nIt has even number of electrons. For example, chloride ion (Cl⁻) has eight electrons\n\n(ii) What do you know about corpuscular nature of matter?\n\nAns. Corpuscular nature of matter means that matter consists of small particles. This theory explains that matter is discontinuous, not continuous. Two Greek philosophers named Empedocles and Democratus presented this theory in 5th century B.C.\n\n(iii) Differentiate between analytical chemistry and environmental chemistry.\n\nAns. Analytical chemistry tells us about the methods and instruments used for studying composition of matter whereas environmental chemistry tells us about chemicals which pollute our environment and put negative effects on human beings.\n\n(iv) What is mole?\n\nAns. It is a unit of quantity of matter. It is amount (quantity) of a substance which contains Avogadro’s number (6.022 x 1023) particles in it. For example, 23 g sodium (Na) and 71 g chlorine gas (Cl₂) are equal to one mole of sodium and chlorine respectively.\n\n(v) Differentiate between empirical formula and molecular formula.\n\nAns. The molecular formula of a compound tells us about actual whole number ratio between atoms in a molecule whereas empirical formula tells us about simplest whole number ratio between atoms in a molecule or formula unit. For example molecular formula of benzene is C₆H₆ whereas empirical formula of benzene is CH. Similarly, molecular formula of glucose is C₆H₁₂O₆ whereas empirical formula of glucose is CH₂O.\n\n(vi) What is the number of molecules in 9.0 g steam?\n\nAns. Always convert mass to moles first.\n\nMolar mass of steam (water) = 18 g/mol\n\nUsing the formula, Moles = Mass / Molar mass\n\n= 9g / 18g.mlo-1\n\n= 0.5 moles H₂O\n\nNow using the formula, Number of molecules = Moles x Avogadro’s number\n\n= 0.5 moles x 6.022 x 1023\n\n= 3.022 x 1023 molecules of water (steam)\n\n(vii) What are the molar masses of uranium-238 and uranium-235?\n\nAns. The number given after symbols or names of elements are their atomic masses. Similarly, the numbers given as superscripts of symbols of elements are also their atomic masses. If we show the atomic masses of elements in grams, they becomes equal to their molar masses or one moles.\n\nTherefore, 238 g and 235 g are the molar masses of uranium-238 and uranium-235 respectively.\n\n(viii) Why one mole of hydrogen molecules and one mole of H-atoms have different masses?\n\nAns. This is because hydrogen molecule (H₂) has mass equals to 2 amu and hydrogen atom (H) has mass equals to 1 amu. One mole of hydrogen molecules has mass 2 g and one mole hydrogen atoms has mass equals to 1 g.",
    },
    {
      number: 59,
      question: "Define ion, molecular ion, formula unit, free radical, atomic number, mass number and atomic mass unit.",
      answer: "Ion. Any charged particle is called ion. It may consist of an atom or group of atoms.\n\nFor example, Na⁺, Cl⁻, NH₄₁+ or CO₃₂- etc.\n\nMolecular ion. It is formed from molecule by losing or gaining electron/s. For example, N₂⁻, N₂⁺ , O₂⁻, He₁+ or CH₄⁺ etc.\n\nFormula unit. It is a symbolic representation of ionic compounds which shows the lowest whole number ratio between ions. For example, NaCl is the formula unit of sodium chloride and CaCl₂ is the formula unit of calcium chloride. Both these formula units shows lowest (simplest) whole number ratio between ions present in these compounds. In NaCl (1:1) and CaCl₂ (1:2).\n\nFree radical. An atom or group of atoms which has an unpaired electron and no electric. For example,\n\nAtomic number (Z). The number of protons in the nucleus of an atoms of an element is called atomic number. OR\n\nIt is the number of electrons around the nucleus of an atom of an element. For example, atomic number of hydrogen (H) is 1 and that of sodium (Na) is 11.\n\nMass number. It is the sum of number of protons and neutrons in the nucleus of an atom. For example, mass number of berylium (Be) is 9 and that of sodium is 23.\n\nAtomic mass unit (amu). Atomic mass unit is the standard unit used for the measuring atomic masses of elements. One atomic mass unit (1 amu) is equal to one nucleon (proton or neutron).\n\n1amu = 1/12th of carbon-12 (¹²C) atom",
    },
    {
      number: 60,
      question: "Differentiate between (a) atom and ion (b) molecular ion and free radical.",
      answer: "The following table shows differences between an atom and ion.\n\nAtom\n\nIon\n\nIt is electrically neutral\n\nIt is a charged body\n\nIt may or may not exist separately (freely)\n\nIt cannot exist freely\n\nIt may or may not obey duplet and octet rules\n\nIt always obey duplet and octet rules\n\nNa, H, He and Ca etc\n\nNa⁺, Ca²⁺, Cl⁻ and O²⁻ etc\n\nThe following table shows differences between free radical and molecular ion.\n\nFree radical\n\nMolecular ion\n\nIt is formed by an atom or group of atoms\n\nIt is formed by loss or gain of electrons by a molecule\n\nIt is electrically neutral (uncharged)\n\nIt is electrically charged\n\nIt has always odd number of electrons\n\nIt may have odd or even number of electrons\n\n,\n\nN₂⁻, N₂⁺, O₂⁺ etc",
    },
    {
      number: 61,
      question: "Describe how Avogadro’s number is related to a mole of any substance?",
      answer: "A mole is the quantity of a substance having Avogadro’s number (6.022 x 1023) of particles in it.\n\nIt means that a mole is defined on the basis of Avogadro’s number which shows a deep relationship.",
    },
    {
      number: 62,
      question: "Calculate the number of moles of each substance in samples with the following masses.",
      answer: "Answer not explicitly marked in the supplied source.",
    },
    {
      number: 63,
      question: "Calculate the mass in grams of each of the following samples. (a) 1.2 moles of potassium (K) (b) 75 moles of hydrogen (H₂) (c) 0.25 moles of steam (H₂O) (d) 1.05 moles copper sulphate pentahydrte CuSO₄.5H2 (e) 0.15 moles of sulphuric acid (H₂SO₄)",
      answer: "(a) Moles of potassium (K) = 1.2 moles\n\nMolar mass of potassium (K) = 39 g/mol\n\nUsing the formula, Mass = Moles x Molar mass\n\n= 1.2 moles x 39 g/mol\n\n= 46.8 g potassium (K)\n\n(b) Moles of hydrogen (H₂) = 75 moles\n\nMolar mass of hydrogen (H₂) = 2 g/mol\n\nUsing the formula, Mass = Moles x Molar mass\n\n= 75 moles x 2 g/mol\n\n= 150 g hydrogen (H₂)\n\n(c) Moles of steam (H₂O) = 0.25 moles\n\nMolar mass of steam (H₂O) = 18 g/mol\n\nUsing the formula, Mass = Moles x Molar mass\n\n= 0.25 moles x 18 g/mol\n\n= 4.5 g steam (H₂O)\n\n(d) Moles of copper sulphate pentahydrate (CuSO₄.5H2O) = 1.05 moles\n\nMolar mass of copper sulphate pentahydrate (CuSO₄.5H2O) = 249.5 g/mol\n\nUsing the formula, Mass = Moles x Molar mass\n\n= 1.05 moles x 249.5 g/mol\n\n= 261.96 g copper sulphate pentahydrate (CuSO₄.5H2O)\n\n(e) Moles of sulphuric acid (H₂SO₄) = 0.15 moles\n\nMolar mass of sulphuric acid (H₂SO₄)\n\nUsing the formula, Mass = Moles x Molar mass\n\n= 0.15 moles x 98 g/mol\n\n= 14.7 g sulphuric acid (H₂SO₄",
    },
    {
      number: 64,
      question: "Calculate the number of molecules in each of the following samples. (a) 2.5 moles of carbondioxide (CO₂) (b) 3.4 moles of ammonia (NH₃) (c) 1.09 moles benzene (C₆H₆) (d) 0.01 moles acetic acid (CH₃COOH)",
      answer: "(a) Moles of carbondioxide (CO₂) = 2.5 moles\n\nUsing the formula, Number of molecules = Moles x Avogadro’s number\n\n= 2.5 moles x 6.022 x 1023\n\n= 1.5055 X 1024 Molecules of carbondioxide (CO₂)\n\n(b) Moles of ammonia (NH₃) = 3.4 moles\n\nUsing the formula, Number of Molecules = Moles x Avogadro’s number\n\n= 3.4 moles x 6.022 x 1023\n\n= 2.05 x 1024 molecules of ammonia (NH₃)\n\n(c) Moles of benzene (C₆H₆) = 1.09 moles benzene\n\nUsing the formula, Number of Molecules = Moles x Avogadro’s number\n\n= 1.09 moles x 6.022 x 1023\n\n= 6.56 x 1023 molecules of benzene (C₆H₆)\n\n(d) Moles of acetic acid (CH₃COOH) = 0.01 moles\n\nUsing the formula, Number of Molecules = Moles x Avogadro’s number\n\n= 0.01 moles x 6.022 x 1023\n\n= 6.02 x 1021 molecules of acetic acid (CH₃COOH)",
    },
    {
      number: 65,
      question: "Decide whether or not each of the following is an example of empirical formula? (a) Al₂CL₆ (b) Hg₂Cl₂ (c) NaCl (d) C₂H₆O",
      answer: "(a) Al₂Cl₆ is not an empirical formula because the ratio between aluminium (Al) and chlorine\n\n(Cl) is 2:6 and it can be simplified to 1:3. So its empirical formula becomes AlCl₃.\n\n(b) Hg₂Cl₂ is not an empirical formula because the ratio between mercury (Hg) and chlorine (Cl)\n\nis 2:2 and it can be simplified to 1:1. So the empirical formula becomes HgCl.\n\n(c) NaCl is empirical formula of sodium chloride because the ratio between sodium ion (Na⁺) and chloride (Cl⁻) is 1:1 and this ratio cannot be simplified anymore.\n\n(d) C₂H₆O is the empirical formula of ethyl alcohol because the ratio between carbon, hydrogen and oxygen is2:6:1 and it cannot be simplified anymore.",
    },
    {
      number: 66,
      question: "TNT (trinitrotoluene) is an explosive compound used in bombs. It contains 7 carbon atoms, 5 hydrogen atoms, 3 nitrogen atoms and 6 oxygen atoms. Write its empirical formula.",
      answer: "The molecular formula of TNT (trinitrotoluene) is C₇H₅N₃O₆. This is empirical formula also because the ratio between carbon, hydrogen, nitrogen and oxygen is 7:5:3:6 and it cannot be simplified anymore. Therefore, this is both molecular and empirical formula of TNT.",
    },
    {
      number: 67,
      question: "A molecule contains 4 phosphorous atoms and 10 oxygen atoms. Write the empirical formula of this compound. Also determine the molar mass of this compound.",
      answer: "The molecular formula of this compound is P₄O₁₀. Molar mass is equal to the molecular mass shown in grams which is 284 g (31 amu x 4 + 16 amu x10 = 284 amu).\n\nThe ratio between phosphorous and oxygen is 4:10 and it can be simplified to 2:5. So the empirical formula of this compound is P₂O₅.",
    },
    {
      number: 68,
      question: "Indigo (C₁₆H₁₀N₂O₂), the dye used to colour blue jeans is derived from a compound known as indoxyl (C₈H₇ON). Calculate the molar masses of these compounds. Also write their empirical formulas.",
      answer: "Molecular formula of indigo is C₁₆H₁₀N₂O₂\n\nMolar mass of indigo is equal to it molecular mass shown in gram. It is calculate as follows.\n\n16 (12amu) + 10 (1amu) + 2 (14amu) + 2 (16amu) = 262 amu\n\n\\= 262 g\n\nEmpirical formula = C₈H₅NO\n\nMolecular formula of indoxyl is C₈H₇ON\n\nMolar mass of indoxyl is equal to its molecular mass shown in gram. It is calculated as follows.\n\n8 (12amu) + 7 (1amu) + 14amun + 16 amu = 96amu + 7amu + 16 amu + 14amu = 133 amu\n\n= 133 g",
    },
    {
      number: 69,
      question: "Identify the substance that has formula mass 133 amu. (a) MgCl₂ (b) S₂Cl₂ (c) BCl₃ (d) AlCl₃",
      answer: "AlCl₃ has formula mass 133 amu. It is calculated as follows.\n\n27 amu + 3 (35.5 amu) = 133.5 amu.\n\nRemember that the atomic masses of atoms will be given to you. You have just to sum up atomic masses of all elements present in the given formulas.",
    },
    {
      number: 70,
      question: "Calculate the number of atoms in each of the following samples. (a) 3.4 moles of nitrogen atoms (N) (b) 23 g sodium (Na) (c) 5 g hydrogen atoms (H)",
      answer: "(a) Moles of nitrogen atoms (N)\n\nUsing the formula, Number of atoms = Moles x Avogadro’s number\n\n= 3.4 moles x 6.022 x 1023\n\n= 2.05 x 1024 atoms of nitrogen (N)\n\n(b) Mass of sodium atoms (Na) = 23 g\n\nFirst of all you have to convert mass to moles by the following formula.\n\nMoles = Mass / Molar mass [Molar mass of sodium (Na) = 23 g.mol-1]\n\n= 23 g / 23 g.mol-1 = 1 mole\n\nUsing the formula, Number of atom = Moles x Avogadro’s number\n\n= 1 mole x 6.022 x 1023\n\n= 6.022 x 1023 sodium atoms (Na)\n\n(c) Mass of hydrogen atoms (H) = 5 g\n\nFirst convert mass to moles by the following formula.\n\nMoles = Mass / Molar mass [Molar mass of atomic hydrogen(H) = 1 g/mol)]\n\n= 5 g/ 1 g.mol-1\n\n= 5 moles hydrogen atoms (H)\n\nUsing the formula Number of atoms = Moles x Avogadro’s number\n\n= 5 mole x 6.022 x 1023\n\n= 3.01 x 1024 hydrogen atoms (H)",
    },
    {
      number: 71,
      question: "Calculate masses of the following. (a) 3.24 x 1018 atoms of iron (Fe) (b) 2 x 1010 molecules of nitrogen gas (N₂) (c) 1 x 1025 molecules of water (H₂O) (d) 3 x 106 atoms of aluminium (Al)",
      answer: "(a) Number of atoms of iron (Fe) = 3.24 x1018\n\nMolar mass of iron (Fe) = 56 g/mol\n\nUsing the formula, Mass =\n\nMass = = 3.01 x 10-4 g\n\n(b) Number of molecules of nitrogen gas (N₂) = 2 x 1010\n\nMolar mass of nitrogen gas (N₂) = 28 g/mol\n\nUsing the formula, Mass =\n\nMass = = 9.3 x 10-4 g\n\n(c) Number of molecules of water (H₂O) = 1 x 1025\n\nMolar mass of water = 18 g/mol\n\nUsing formula, Mass =\n\nMass = = 2.99 x 102 g\n\n(d) Number of atoms of aluminium (Al) = 3 x 106\n\nMolar mass of aluminium (Al) = 27 g/mol\n\nUsing the formula, Mass =\n\n= = 1.345 x 10-16 g",
    },
    {
      number: 72,
      question: "Identify the branch of chemistry that deals with the following examples.",
      answer: "Answer not explicitly marked in the supplied source.",
    },
    {
      number: 73,
      question: "What mass of sodium metal contains the same number of atoms as 12.00 of carbon?",
      answer: "This question has two parts.\n\n(i) First you have to calculate number of atoms in 12 g carbon. As 12 g is the molar mass of carbon so it contains 6.022 x 1023 atoms.\n\n(ii) Then calculate the mass of sodium containing 6.022 x 1023 atoms. Molar mass of sodium is 23 g so 23 g sodium contains same number of atoms as 12.00 g carbon.",
    },
    {
      number: 74,
      question: "What mass of oxygen (O₂) contains same number of molecules as 42 g of nitrogen gas (N₂)?",
      answer: "This question has two parts.\n\n(i) First you have to calculate number of molecules contained in 42 g nitrogen gas (N₂).\n\nMolar mass of nitrogen gas (N₂) = 28 g\n\nConvert mass to moles by the following formula.\n\nMoles = = 42 g / 28 g = 1.5 moles nitrogen gas (N₂)\n\nNow calculate number of molecules in 1.5 moles nitrogen gas (N₂) by the following formula.\n\nNumber of molecules = Moles x Avogadro’s number\n\n= 1.5 moles x 6.022 x 1023\n\n= 9.03 x 1023 molecules\n\n(ii) Now calculate mass of 9.03 x 1023 molecules of oxygen gas by the following.\n\nMass = Number of molecules x\n\nMass = 9.03 x 1023 = 48 g",
    },
    {
      number: 75,
      question: "Calculate the mass of one hydrogen atom (H) in grams.",
      answer: "Molar mass of hydrogen atom (H) = 1.008 g\n\nUse the following formula,\n\nMass = Number of atoms x\n\n= 1 x = 1.674 x 10-23 g",
    },
    {
      number: 76,
      question: "Observe the given figure. It shows particles in a sample of air. (a) Count the substances shown in the sample. (b) Is air a mixture or pure substance? Explain. (c) Identify the formula of each substance in air. (d) Argue whether each substance in air is an element or a compound. (e) What is the most common substance in air?",
      answer: "(a) There are five substances in the sample (air). i.e water vapours (H₂O) , argon (Ar), nitrogen\n\ngas (N₂), oxygen gas (O₂) and carbondioxide gas (CO₂).\n\n(b) Air is a mixture, not a pure substance. A pure substance consists of one type of particles. However, air consists of five substances as shown.\n\n(c) The formula of water vapours is H₂O, nitrogen gas is N₂, oxygen gas is O₂, argon gas is Ar and carbondioxide gas is CO₂.\n\n(d) Air has three elements i.e nitrogen gas (N₂) , oxygen gas (O₂) and argon gas (Ar). Air has two compounds i.e carbondioxide gas (CO₂) and water vapours (H₂O). Remember that the molecules of elements have same type of atoms whereas molecules of compounds have different type of atoms.\n\n(e) The most common substance in the air is nitrogen gas (N₂) because it is found in abundant (78%).",
    },
    {
      number: 77,
      question: "Calculate number of hydrogen atoms present in 18 g water.",
      answer: "Mass of water (H₂O) = 18 g\n\nMolar mass of water = 18 g / mol\n\nNumber of hydrogen atoms in one molecule of water (H₂O) = 2\n\nFirst convert mass to moles by the following formula.\n\nMoles = Mass / Molar mass\n\nMoles = 18 g / 18 g.mol-1 = 1 mole water\n\nUse the following formula to calculate number of hydrogen atoms in 1 mole (18 g) water.\n\nNumber of atoms = Moles x Number of atoms in on molecule x Avogadro’s number\n\n= 1 mole x 2 x 6.022 x 1023\n\n= 1.204 x 1024 hydrogen atoms (H) in 18 g (1 mole) water.",
    },
    {
      number: 78,
      question: "Calculate the total number of atoms present in 18 g water.",
      answer: "Mass of water (H₂O) = 18 g\n\nMolar mass of water = 18 g / mol\n\nTotal number of atoms in one molecule of water (H₂O) = 3\n\nFirst convert mass to moles by the following formula.\n\nMoles = Mass / Molar mass\n\nMoles = 18 g / 18 g.mol-1 = 1 mole water\n\nUse the following formula to calculate total number of atoms in 1 mole (18 g) water.\n\nTotal number of atoms = Moles x Number of atoms in on molecule x Avogadro’s number\n\n= 1 mole x 3 x 6.022 x 1023\n\n= 1.806 x 1024 atoms in 18 g (1 mole) water",
    },
  ],

  longQuestions: [],

  numericals: [
    {
      number: 1,
      question: "Example 1.5 (a). Calculate molar mass of (a) sodium (Na) (b) nitrogen (N₂) (c) sucrose (C₁₂H₂₂O₁₁) For calculating molar masses of substances, atomic masses of required elements will be given to you. Atomic mass of sodium (Na) = 23 amu Atomic mass of nitogen (N) = 14 amu Atomic mass of carbon (C) = 12 amu Atomic mass of hydrogen (H) = 1 amu Atomic mass of oxygen (O) = 16 amu",
      given: [],
      formula: 'Use the relevant relationship from the chapter.',
      solution: "Note that sodium exists in atomic form so its atomic mass shown in grams is equal to its molar mass. Nitrogen and sucrose exist in molecular form so their molecular masses shown in gram are equal to their molar masses.\n\n(a) Atomic mass of sodium (Na) = 23 amu\n\nMolar mass of sodium (Na) = 23 g/mol\n\n(b) Molecular mass of nitrogen (N₂) = (14 amu + 14 amu) = 28 amu\n\nMolar mass of nitrogen (N₂) = 28 g/mol\n\n(c) Molecular mass of sucrose (C₁₂H₂₂O₁₁) = (12x12+22x1+11x16) = 342 amu\n\nMolar mass of sucrose (C₁₂H₂₂O₁₁) = 342 g/mol\n\nCalculate the mass of one mole of\n\n(a) copper (Cu) (b) iodine (I₂) (c) potassium (K) (d) oxygen (O₂)\n\nAtomic mass of copper (Cu) = 63 amu\n\nAtomic mass of iodine (I) = 127 amu\n\nAtomic mass of potassium (K) = 39 amu\n\nAtomic mass of oxygen (O) = 16 amu\n\nSolution. Copper (Cu) and potassium (K) exist as atoms so their atomic masses shown in grams are equal to their molar masses. On the other hand, iodine (I₂) and oxygen (O₂) exist as molecules so their molecular masses shown in gram are equal to their molar masses.\n\n(a) Atomic mass of copper (Cu) = 63 amu\n\nMolar mass of copper (Cu) = 63 g/mol\n\n(b) Molecular mass of iodine (I₂) = (127 amu + 127 amu) = 254 amu\n\nMolar mass of iodine molecule (I₂) = 254 g/mol\n\n(c) Atomic mass of potassium (K) = 39 amu\n\nMolar mass of potassium (K) = 39 g/mol\n\n(d) Molecular mass of oxygen (O₂) = 32 amu\n\nMolar mass of oxygen (O₂) = 32 g/mol",
      answer: 'See worked solution',
      unit: '',
    },
    {
      number: 2,
      question: "Example 1.5 (b). Oxygen is converted to ozone (O₃) during thunderstorm. Calculate the mass of ozone (O₃) if 9.05 moles of ozone are formed in a storm.",
      given: [],
      formula: 'Use the relevant relationship from the chapter.',
      solution: "Molecular mass of ozone (O₃) = 48 amu\n\nMolar mass of ozone (O₃) = 48 g/mol\n\nMass = Moles x Molar mass\n\n= 9.05 moles x 48 g/mol\n\n= 434.4 g O₃.",
      answer: 'See worked solution',
      unit: '',
    },
    {
      number: 3,
      question: "Example 1.6. When natural gas burns, carbondioxide (CO₂) is formed. If 0.25 moles of carbondioxide (CO₂) are formed, what mass of carbondioxide (CO₂) is produced?",
      given: [],
      formula: 'Use the relevant relationship from the chapter.',
      solution: "Molecular mass of carbondioxide (CO₂) = 44 amu\n\nMolar mass of carbondioxide (CO₂) = 44 g/mol\n\nMass = Moles x Molar mass\n\n= 0.25 moles x 44g/mol\n\n= 11 g CO₂\n\nThe following formula is used for calculating moles from given mass.",
      answer: 'See worked solution',
      unit: '',
    },
    {
      number: 4,
      question: "Example 1.7. How many moles of each of the following substances are present? (a) A balloon filled with 5 g of hydrogen. (b) A block of ice that weighs 100 g.",
      given: [],
      formula: 'Use the relevant relationship from the chapter.',
      solution: "(a) Molar mass of hydroge (H₂) = 2 g/mol\n\nGiven mass = 5g\n\nMoles = 5g/2g.mol-1\n\n= 2.5 moles hydrogen (H₂).\n\n(b) Molar mass of ice (H₂O) = 18 g/mol\n\nGiven mass of ice = 100 g\n\nMoles = 100g/18g.mol-1 = 5.55 moles ice (H­2O\n\n(1) The molecular formula of compound used for bleaching hair is hydrogen peroxide(H₂O₂).\n\nThen calculate the\n\n(a) mass of this compound that would contain 2.5 moles.\n\n(b) number of moles of this compound that would exactly weigh 30 g.\n\nSolution. (a) Molar mass of hydrogen peroxide (H₂O₂) = 34g/mol\n\nMoles = 2.5 moles\n\nMass = Moles x Molar mass\n\n= 2.5 moles x 34 g/mol\n\n= 85 g H₂O₂\n\n(b) Mass of hydrogen peroxide (H₂O₂) = 30 g\n\nMoles = Mass/Molar mass\n\n= 30 g/34g.mol-1\n\n= 0.88 moles H₂O₂\n\n(2) A spoon of table salt (NaCl) contains 12.5 g of this salt. Calculate number of moles it contains.\n\nSolution. Molar mass of table salt (NaCl) = 58.5 g/mol\n\nMass = 12.5 g\n\nMoles = Mass/Molar mass\n\n= 12.5 g/58.5 g.mol-1\n\n= 0.21 moles NaCl\n\n(3) Before the digestive system X-rayed, people are required to swallow suspensions of barium sulphate (BaSO₄). Calculate the mass of one mole barium sulphate (BaSO₄).\n\nSolution. Molar mass of barium sulphate (BaSO₄) =\n\nMoles of barium sulphate (BaSO₄) = 1 mole\n\nMass = Moles x Molar mass\n\n= 1 mole x 233 g/mole\n\n= 233 g BaSO₄\n\n·\n\n· Calculating number of atoms in given number of moles of substances.\n\nThe following formula is used for calculating number of atoms in given moles for elements which exist in the form of atoms.",
      answer: 'See worked solution',
      unit: '',
    },
    {
      number: 5,
      question: "Example 1.8. Calculate the number of atoms in the following substances. (1) Zinc (Zn) is a silvery metal that is used to galvanize steel to prevent corrosion. How many atoms are there in 1.25 moles zinc (Zn)?",
      given: [],
      formula: 'Use the relevant relationship from the chapter.',
      solution: "Moles of zinc (Zn) = 1.25 moles\n\nNumber of atoms = Moles x 6.022 x 1023\n\n= 1.25 moles x 6.022 x 1023\n\n= 7.53 x 1023 atoms of zinc (Zn).\n\n(2) A thin foil of aluminium (Al) is used as wrapper in food industries. How many atoms are present in a foil that contains 0.2 moles of aluminium?\n\nSolution. Moles of aluminium (Al) = 0.2 moles\n\nNumber of atoms = 0.2 moles x 6.022 x 1023\n\nNumber of atoms = 1.2044 x 1023 atoms of aluminium (Al).\n\n· Calculating number of molecules in given number of moles of substances.\n\nThe following formula is used for calculating number of molecules from given moles of a substance. This formula is used for those substances which exist in the form of molecules.",
      answer: 'See worked solution',
      unit: '',
    },
    {
      number: 6,
      question: "Example 1.9. Calculate number of molecules in the following substances. (1) Methane (CH₄) is the major component of natural gas. How many molecules are present in 0.5 moles of pure sample of methane (CH₄)?",
      given: [],
      formula: 'Use the relevant relationship from the chapter.',
      solution: "Moles of methane (CH₄) = 0.5 moles\n\nNumber of molecules = Moles x 6.022 x 1023\n\n= 0.5 moles x 6.022 x 1023\n\n= 3.011 x 1023 molecules of methane (CH₄).\n\n(2). At high temperature, hydrogen sulphide (H₂S) gas given off by a volcano is oxidized by air to sulphur dioxide (SO₂). Sulphur dioxide (SO₂) reacts with water to form acid rain. How many molecules are there in 0.25 moles of sulphur dioxide (SO₂)?\n\nSolution. Moles of sulphur dioxide (SO₂) = 0.25 moles\n\nMolecules of sulphur dioxide (SO₂) gas = Moles x 6.022 x 1023\n\n= 0.25 moles x 6.022 x 1023\n\n= 1.5055 x 1023 molecules of sulphur dioxide (SO₂)\n\n· Calculating number of moles from the given number of atoms of substances.\n\nThe following formula is used for calculating number of moles from the given number of atoms of substance which exist in the form of atoms.",
      answer: 'See worked solution',
      unit: '',
    },
    {
      number: 7,
      question: "Example 1.10. Titanium (Ti) is corrosion resistant metal that is used in rockets, aircraft and jet engines. Calculate the number of moles in this metal in a sample containing 3.011 x 1023 titanium (Ti) atoms.",
      given: [],
      formula: 'Use the relevant relationship from the chapter.',
      solution: "Number of atoms given = 3.011 x 1023\n\nMoles = Given atoms/ Avogadro’s number\n\n= 3.011 x1023 / 6.022 x 1023\n\n= 0.5 moles titanium (Ti)\n\n· Calculating number of moles from the given number molecules of substances.\n\nThe following formula is used for calculating number of moles from the given number of molecules of substances which exist in the form of molecules.",
      answer: 'See worked solution',
      unit: '',
    },
    {
      number: 8,
      question: "Example 1.11. Formaldehyde (CH₂O) is used to preserve dead animals. Its molecular formula is CH₂O. Calculate its number of moles that would contain 3.011 x 1022 molecules in it.",
      given: [],
      formula: 'Use the relevant relationship from the chapter.',
      solution: "Number of molecules of formaldehyde (CH₂O) = 3.011 x 1022\n\nNumber of moles = Given molecules/Avogadro’s number\n\n= 3.011 x 1022 / 6.022 x 1023\n\n= 0.05 moles of formaldehyde (CH₂O).\n\n1. Aspirin is a compound that contains carbon, hydrogen and oxygen. It is used as a painkiller. An aspirin tablet contains 1.25 x 1030 molecules. How many moles of the compound are present in the tablet?\n\nSolution. Molecules given = 1.25 x 1030\n\nMoles = No of molecules / Avogadro’s number\n\n= 1.25 x 1030/ 6.022 x 1023\n\n= 2.076 x 106 moles of aspirin.\n\n2. A method used to prevent rusting in ships and underground pipelines involves connecting the iron to a block of a more active metal such as magnesium. This method is called cathodic protection. How many moles of magnesium are present in 1 billion (1 x 109) atoms of magnesium?\n\nSolution. Number of atoms of magnesium (Mg) = 1 x 109\n\nMoles = No of atoms / Avogadro’s number\n\n= 1 x 109 / 6.022 x 1023\n\n= 1.66 x 10-15 moles of magnesium (Mg)\n\nQ 1. Encircle the correct answer.\n\n(i) Which of the following lists contains only elements?\n\nA. air, water, oxygen B. hydrogen, oxygen, brass\n\nC. air, water, fire, earth D. calcium, sulphur, carbon\n\n(ii) The diagrams below represent particles in four substances. Which box represents the particles of nitrogen?\n\n(iii) What is the formula mass of copper sulphate pentahydrate (CuSO₄.5H2O)?\n\n[Atomic masses of copper (Cu) = 63.5 amu, sulphur (S) = 32 amu, oxygen (O) = 16 amu, hydrogen (H) = 1amu]\n\nA. 159.5 amu B. 185.5 amu C. 249.5 amu D. 149.5 amu\n\n(iv) A compound with chemical Na₂CX₃ has formula mass 106 amu. Atomic mass of element “X” would be\n\nA. 106 amu B. 23 amu C. 12 amu D. 16 amu\n\n(v) How many moles of molecules are there in 16 g oxygen?\n\nA. 1 mole B. 0.5 moles C. 0.1 moles D. 0.05 moles\n\n(vi) What is the mass of 4 moles of hydrogen gas?\n\nA. 8.064 g B. 4.032 g C. 1 g D. 1.008 g\n\n(vii) What is the mass of carbon present in 44 g carbondioxide (CO₂)?\n\nA. 12 g B. 6 g C. 24 g D. 44 g\n\n(viii) The electronic configuration of an element is 1s2 2s2. An atom of this element will form an\n\nion that will have charge [ This question belongs to chapter 3]\n\nA. +1 B. +2 C. +3 D. -1\n\n(ix) Which term is same for one mole of oxygen and one mole of water?\n\nA. volume B. mass C. atoms D. molecules\n\n(x) If one mole of carbon contains “x” atoms, what is the number of atoms contained in 12 g of\n\nmagnesium (Mg)?\n\nA. x B. 0.5x C. 2x D. 1.5x\n\nAnswers.\n\ni\n\nii\n\niii\n\niv\n\nv\n\nvi\n\nvii\n\nviii\n\nix\n\nx\n\nD\n\nD\n\nC\n\nD\n\nB\n\nA\n\nA\n\nB\n\nD\n\nB\n\nQ 2. Give short answers.\n\n(i) Differentiate between an ion and a free radical.\n\nAns. The following table shows difference between free radical and ion.\n\nFree radical\n\nIon\n\nIt has an unpaired electron\n\nIt has no unpaired electron\n\nIt carries no electrical charge\n\nIt carries electrical charge\n\nIt has odd number of electrons. For example, chlorine radical (Cl.) has seven electrons.\n\nIt has even number of electrons. For example, chloride ion (Cl⁻) has eight electrons\n\n(ii) What do you know about corpuscular nature of matter?\n\nAns. Corpuscular nature of matter means that matter consists of small particles. This theory explains that matter is discontinuous, not continuous. Two Greek philosophers named Empedocles and Democratus presented this theory in 5th century B.C.\n\n(iii) Differentiate between analytical chemistry and environmental chemistry.\n\nAns. Analytical chemistry tells us about the methods and instruments used for studying composition of matter whereas environmental chemistry tells us about chemicals which pollute our environment and put negative effects on human beings.\n\n(iv) What is mole?\n\nAns. It is a unit of quantity of matter. It is amount (quantity) of a substance which contains Avogadro’s number (6.022 x 1023) particles in it. For example, 23 g sodium (Na) and 71 g chlorine gas (Cl₂) are equal to one mole of sodium and chlorine respectively.\n\n(v) Differentiate between empirical formula and molecular formula.\n\nAns. The molecular formula of a compound tells us about actual whole number ratio between atoms in a molecule whereas empirical formula tells us about simplest whole number ratio between atoms in a molecule or formula unit. For example molecular formula of benzene is C₆H₆ whereas empirical formula of benzene is CH. Similarly, molecular formula of glucose is C₆H₁₂O₆ whereas empirical formula of glucose is CH₂O.\n\n(vi) What is the number of molecules in 9.0 g steam?\n\nAns. Always convert mass to moles first.\n\nMolar mass of steam (water) = 18 g/mol\n\nUsing the formula, Moles = Mass / Molar mass\n\n= 9g / 18g.mlo-1\n\n= 0.5 moles H₂O\n\nNow using the formula, Number of molecules = Moles x Avogadro’s number\n\n= 0.5 moles x 6.022 x 1023\n\n= 3.022 x 1023 molecules of water (steam)\n\n(vii) What are the molar masses of uranium-238 and uranium-235?\n\nAns. The number given after symbols or names of elements are their atomic masses. Similarly, the numbers given as superscripts of symbols of elements are also their atomic masses. If we show the atomic masses of elements in grams, they becomes equal to their molar masses or one moles.\n\nTherefore, 238 g and 235 g are the molar masses of uranium-238 and uranium-235 respectively.\n\n(viii) Why one mole of hydrogen molecules and one mole of H-atoms have different masses?\n\nAns. This is because hydrogen molecule (H₂) has mass equals to 2 amu and hydrogen atom (H) has mass equals to 1 amu. One mole of hydrogen molecules has mass 2 g and one mole hydrogen atoms has mass equals to 1 g.\n\nQ 3. Define ion, molecular ion, formula unit, free radical, atomic number, mass number and atomic mass unit.\n\nAns. Ion. Any charged particle is called ion. It may consist of an atom or group of atoms.\n\nFor example, Na⁺, Cl⁻, NH₄₁+ or CO₃₂- etc.\n\nMolecular ion. It is formed from molecule by losing or gaining electron/s. For example, N₂⁻, N₂⁺ , O₂⁻, He₁+ or CH₄⁺ etc.\n\nFormula unit. It is a symbolic representation of ionic compounds which shows the lowest whole number ratio between ions. For example, NaCl is the formula unit of sodium chloride and CaCl₂ is the formula unit of calcium chloride. Both these formula units shows lowest (simplest) whole number ratio between ions present in these compounds. In NaCl (1:1) and CaCl₂ (1:2).\n\nFree radical. An atom or group of atoms which has an unpaired electron and no electric. For example,\n\nAtomic number (Z). The number of protons in the nucleus of an atoms of an element is called atomic number. OR\n\nIt is the number of electrons around the nucleus of an atom of an element. For example, atomic number of hydrogen (H) is 1 and that of sodium (Na) is 11.\n\nMass number. It is the sum of number of protons and neutrons in the nucleus of an atom. For example, mass number of berylium (Be) is 9 and that of sodium is 23.\n\nAtomic mass unit (amu). Atomic mass unit is the standard unit used for the measuring atomic masses of elements. One atomic mass unit (1 amu) is equal to one nucleon (proton or neutron).\n\n1amu = 1/12th of carbon-12 (¹²C) atom\n\nQ 4. Differentiate between (a) atom and ion (b) molecular ion and free radical.\n\nAns. The following table shows differences between an atom and ion.\n\nAtom\n\nIon\n\nIt is electrically neutral\n\nIt is a charged body\n\nIt may or may not exist separately (freely)\n\nIt cannot exist freely\n\nIt may or may not obey duplet and octet rules\n\nIt always obey duplet and octet rules\n\nNa, H, He and Ca etc\n\nNa⁺, Ca²⁺, Cl⁻ and O²⁻ etc\n\nThe following table shows differences between free radical and molecular ion.\n\nFree radical\n\nMolecular ion\n\nIt is formed by an atom or group of atoms\n\nIt is formed by loss or gain of electrons by a molecule\n\nIt is electrically neutral (uncharged)\n\nIt is electrically charged\n\nIt has always odd number of electrons\n\nIt may have odd or even number of electrons\n\n,\n\nN₂⁻, N₂⁺, O₂⁺ etc\n\nQ 5. Describe how Avogadro’s number is related to a mole of any substance?\n\nAns. A mole is the quantity of a substance having Avogadro’s number (6.022 x 1023) of particles in it.\n\nIt means that a mole is defined on the basis of Avogadro’s number which shows a deep relationship.\n\nQ 6. Calculate the number of moles of each substance in samples with the following masses.\n\n(a) 2.4 g of helium (He) (b) 250 mg of carbon (C) (c) 15 g sodium chloride (NaCl)\n\n(d) 40 g sulphur (S) (e) 1.5 kg of magnesium oxide (MgO)\n\nSolution. (a) Mass of helium (He) = 2.5 g\n\nMolar mass of helium (He) = 4 g/mol\n\nUsing the formula, Moles = Mass / Molar mass\n\n= 2.5 g / 4 g.mol-1 = 0.6 moles helium (He)\n\n(b) Mass of carbon (C) = 250 mg = 0.25 g\n\nMolar mass of carbon (C) = 12 g/mol\n\nUsing the formula, Moles = Mass/Molar mass\n\n= 0.25 g / 12 g.mol-1\n\n= 0.021 moles carbon (C)\n\n(c) Mass of sodium chloride (NaCl) = 15 g\n\nMolar mass of sodium Chloride (NaCl) = 58.5 g/mol\n\nUsing the same formula, Moles = Mass / Molar mass\n\n= 15 g / 58.5 g.mol-1\n\n= 0.256 moles sodium chloride (NaCl)\n\n(d) Mass of sulphur (S) = 40 g\n\nMolar mass of sulphur (S) = 32 g/mol\n\nUsing the formula, Moles = Mass / Molar mass\n\n= 40 g / 32 g.mol-1\n\n= 1.25 moles sulphur (S)\n\n(e) Mass of magnesium oxide (MgO) = 1.5 kg = 1500 g\n\nMolar mass of magnesium oxide (MgO) = 40 g/mol\n\nUsing the formula, Moles = Mass / Molar mass\n\n= 1500 g / 40 g.mol-1\n\n= 37.5 moles magnesium oxide (MgO)\n\nQ 7. Calculate the mass in grams of each of the following samples.\n\n(a) 1.2 moles of potassium (K) (b) 75 moles of hydrogen (H₂)\n\n(c) 0.25 moles of steam (H₂O) (d) 1.05 moles copper sulphate pentahydrte CuSO₄.5H2\n\n(e) 0.15 moles of sulphuric acid (H₂SO₄)\n\nAns. (a) Moles of potassium (K) = 1.2 moles\n\nMolar mass of potassium (K) = 39 g/mol\n\nUsing the formula, Mass = Moles x Molar mass\n\n= 1.2 moles x 39 g/mol\n\n= 46.8 g potassium (K)\n\n(b) Moles of hydrogen (H₂) = 75 moles\n\nMolar mass of hydrogen (H₂) = 2 g/mol\n\nUsing the formula, Mass = Moles x Molar mass\n\n= 75 moles x 2 g/mol\n\n= 150 g hydrogen (H₂)\n\n(c) Moles of steam (H₂O) = 0.25 moles\n\nMolar mass of steam (H₂O) = 18 g/mol\n\nUsing the formula, Mass = Moles x Molar mass\n\n= 0.25 moles x 18 g/mol\n\n= 4.5 g steam (H₂O)\n\n(d) Moles of copper sulphate pentahydrate (CuSO₄.5H2O) = 1.05 moles\n\nMolar mass of copper sulphate pentahydrate (CuSO₄.5H2O) = 249.5 g/mol\n\nUsing the formula, Mass = Moles x Molar mass\n\n= 1.05 moles x 249.5 g/mol\n\n= 261.96 g copper sulphate pentahydrate (CuSO₄.5H2O)\n\n(e) Moles of sulphuric acid (H₂SO₄) = 0.15 moles\n\nMolar mass of sulphuric acid (H₂SO₄)\n\nUsing the formula, Mass = Moles x Molar mass\n\n= 0.15 moles x 98 g/mol\n\n= 14.7 g sulphuric acid (H₂SO₄\n\nQ 8. Calculate the number of molecules in each of the following samples.\n\n(a) 2.5 moles of carbondioxide (CO₂) (b) 3.4 moles of ammonia (NH₃)\n\n(c) 1.09 moles benzene (C₆H₆) (d) 0.01 moles acetic acid (CH₃COOH)\n\nAns. (a) Moles of carbondioxide (CO₂) = 2.5 moles\n\nUsing the formula, Number of molecules = Moles x Avogadro’s number\n\n= 2.5 moles x 6.022 x 1023\n\n= 1.5055 X 1024 Molecules of carbondioxide (CO₂)\n\n(b) Moles of ammonia (NH₃) = 3.4 moles\n\nUsing the formula, Number of Molecules = Moles x Avogadro’s number\n\n= 3.4 moles x 6.022 x 1023\n\n= 2.05 x 1024 molecules of ammonia (NH₃)\n\n(c) Moles of benzene (C₆H₆) = 1.09 moles benzene\n\nUsing the formula, Number of Molecules = Moles x Avogadro’s number\n\n= 1.09 moles x 6.022 x 1023\n\n= 6.56 x 1023 molecules of benzene (C₆H₆)\n\n(d) Moles of acetic acid (CH₃COOH) = 0.01 moles\n\nUsing the formula, Number of Molecules = Moles x Avogadro’s number\n\n= 0.01 moles x 6.022 x 1023\n\n= 6.02 x 1021 molecules of acetic acid (CH₃COOH)\n\nQ 9. Decide whether or not each of the following is an example of empirical formula?\n\n(a) Al₂CL₆ (b) Hg₂Cl₂ (c) NaCl (d) C₂H₆O\n\nAns. (a) Al₂Cl₆ is not an empirical formula because the ratio between aluminium (Al) and chlorine\n\n(Cl) is 2:6 and it can be simplified to 1:3. So its empirical formula becomes AlCl₃.\n\n(b) Hg₂Cl₂ is not an empirical formula because the ratio between mercury (Hg) and chlorine (Cl)\n\nis 2:2 and it can be simplified to 1:1. So the empirical formula becomes HgCl.\n\n(c) NaCl is empirical formula of sodium chloride because the ratio between sodium ion (Na⁺) and chloride (Cl⁻) is 1:1 and this ratio cannot be simplified anymore.\n\n(d) C₂H₆O is the empirical formula of ethyl alcohol because the ratio between carbon, hydrogen and oxygen is2:6:1 and it cannot be simplified anymore.\n\nQ 10. TNT (trinitrotoluene) is an explosive compound used in bombs. It contains 7 carbon atoms, 5 hydrogen atoms, 3 nitrogen atoms and 6 oxygen atoms. Write its empirical formula.\n\nAns. The molecular formula of TNT (trinitrotoluene) is C₇H₅N₃O₆. This is empirical formula also because the ratio between carbon, hydrogen, nitrogen and oxygen is 7:5:3:6 and it cannot be simplified anymore. Therefore, this is both molecular and empirical formula of TNT.\n\nQ 11. A molecule contains 4 phosphorous atoms and 10 oxygen atoms. Write the empirical formula of this compound. Also determine the molar mass of this compound.\n\nAns The molecular formula of this compound is P₄O₁₀. Molar mass is equal to the molecular mass shown in grams which is 284 g (31 amu x 4 + 16 amu x10 = 284 amu).\n\nThe ratio between phosphorous and oxygen is 4:10 and it can be simplified to 2:5. So the empirical formula of this compound is P₂O₅.\n\nQ 12. Indigo (C₁₆H₁₀N₂O₂), the dye used to colour blue jeans is derived from a compound known as indoxyl (C₈H₇ON). Calculate the molar masses of these compounds. Also write their empirical formulas.\n\nAns. Molecular formula of indigo is C₁₆H₁₀N₂O₂\n\nMolar mass of indigo is equal to it molecular mass shown in gram. It is calculate as follows.\n\n16 (12amu) + 10 (1amu) + 2 (14amu) + 2 (16amu) = 262 amu\n\n\\= 262 g\n\nEmpirical formula = C₈H₅NO\n\nMolecular formula of indoxyl is C₈H₇ON\n\nMolar mass of indoxyl is equal to its molecular mass shown in gram. It is calculated as follows.\n\n8 (12amu) + 7 (1amu) + 14amun + 16 amu = 96amu + 7amu + 16 amu + 14amu = 133 amu\n\n= 133 g\n\nQ 13. Identify the substance that has formula mass 133 amu.\n\n(a) MgCl₂ (b) S₂Cl₂ (c) BCl₃ (d) AlCl₃\n\nAns. AlCl₃ has formula mass 133 amu. It is calculated as follows.\n\n27 amu + 3 (35.5 amu) = 133.5 amu.\n\nRemember that the atomic masses of atoms will be given to you. You have just to sum up atomic masses of all elements present in the given formulas.\n\nQ 14. Calculate the number of atoms in each of the following samples.\n\n(a) 3.4 moles of nitrogen atoms (N) (b) 23 g sodium (Na) (c) 5 g hydrogen atoms (H)\n\nAns. (a) Moles of nitrogen atoms (N)\n\nUsing the formula, Number of atoms = Moles x Avogadro’s number\n\n= 3.4 moles x 6.022 x 1023\n\n= 2.05 x 1024 atoms of nitrogen (N)\n\n(b) Mass of sodium atoms (Na) = 23 g\n\nFirst of all you have to convert mass to moles by the following formula.\n\nMoles = Mass / Molar mass [Molar mass of sodium (Na) = 23 g.mol-1]\n\n= 23 g / 23 g.mol-1 = 1 mole\n\nUsing the formula, Number of atom = Moles x Avogadro’s number\n\n= 1 mole x 6.022 x 1023\n\n= 6.022 x 1023 sodium atoms (Na)\n\n(c) Mass of hydrogen atoms (H) = 5 g\n\nFirst convert mass to moles by the following formula.\n\nMoles = Mass / Molar mass [Molar mass of atomic hydrogen(H) = 1 g/mol)]\n\n= 5 g/ 1 g.mol-1\n\n= 5 moles hydrogen atoms (H)\n\nUsing the formula Number of atoms = Moles x Avogadro’s number\n\n= 5 mole x 6.022 x 1023\n\n= 3.01 x 1024 hydrogen atoms (H)\n\nQ 15. Calculate masses of the following.\n\n(a) 3.24 x 1018 atoms of iron (Fe) (b) 2 x 1010 molecules of nitrogen gas (N₂)\n\n(c) 1 x 1025 molecules of water (H₂O) (d) 3 x 106 atoms of aluminium (Al)\n\nAns. (a) Number of atoms of iron (Fe) = 3.24 x1018\n\nMolar mass of iron (Fe) = 56 g/mol\n\nUsing the formula, Mass =\n\nMass = = 3.01 x 10-4 g\n\n(b) Number of molecules of nitrogen gas (N₂) = 2 x 1010\n\nMolar mass of nitrogen gas (N₂) = 28 g/mol\n\nUsing the formula, Mass =\n\nMass = = 9.3 x 10-4 g\n\n(c) Number of molecules of water (H₂O) = 1 x 1025\n\nMolar mass of water = 18 g/mol\n\nUsing formula, Mass =\n\nMass = = 2.99 x 102 g\n\n(d) Number of atoms of aluminium (Al) = 3 x 106\n\nMolar mass of aluminium (Al) = 27 g/mol\n\nUsing the formula, Mass =\n\n= = 1.345 x 10-16 g\n\nQ 16. Identify the branch of chemistry that deals with the following examples.\n\n1. A cornstalk grows from a seed. (Biochemistry)\n\n2. Dynamite (C₃H₅N₃O₉) explodes to form a mixture of gases. (Inorganic chemistry)\n\n3. Purple iodine vapour appears when solid iodine is warmed. (Physical chemistry)\n\n4. Gasoline (mixture of hydrocarbons) fumes are ignited in an automobile engine. (Organic chemistry)\n\n5. A silver article tarnishes in air. (Inorganics chemistry)\n\n6. Ice floats on water. (Physical chemistry)\n\n7. Sulphur dioxide (SO₂) is the major source of acid rain. (Environmental chemistry)\n\n8. Many other light chlorinated hydrocarbons in drinking water are carcinogens. (Environmental chemistry)\n\n9. In Pakistan most of the factories use wet process for the production of cement. (Industrial chemistry)\n\n10. Carbon-14 is continuously produced in the atmosphere when high energy neutrons from space collide nitrogen-14. (Nuclear chemistry)\n\nQ 1. What mass of sodium metal contains the same number of atoms as 12.00 of carbon?\n\nAns. This question has two parts.\n\n(i) First you have to calculate number of atoms in 12 g carbon. As 12 g is the molar mass of carbon so it contains 6.022 x 1023 atoms.\n\n(ii) Then calculate the mass of sodium containing 6.022 x 1023 atoms. Molar mass of sodium is 23 g so 23 g sodium contains same number of atoms as 12.00 g carbon.\n\nQ 2. What mass of oxygen (O₂) contains same number of molecules as 42 g of nitrogen gas (N₂)?\n\nAns. This question has two parts.\n\n(i) First you have to calculate number of molecules contained in 42 g nitrogen gas (N₂).\n\nMolar mass of nitrogen gas (N₂) = 28 g\n\nConvert mass to moles by the following formula.\n\nMoles = = 42 g / 28 g = 1.5 moles nitrogen gas (N₂)\n\nNow calculate number of molecules in 1.5 moles nitrogen gas (N₂) by the following formula.\n\nNumber of molecules = Moles x Avogadro’s number\n\n= 1.5 moles x 6.022 x 1023\n\n= 9.03 x 1023 molecules\n\n(ii) Now calculate mass of 9.03 x 1023 molecules of oxygen gas by the following.\n\nMass = Number of molecules x\n\nMass = 9.03 x 1023 = 48 g\n\nQ 3. Calculate the mass of one hydrogen atom (H) in grams.\n\nAns. Molar mass of hydrogen atom (H) = 1.008 g\n\nUse the following formula,\n\nMass = Number of atoms x\n\n= 1 x = 1.674 x 10-23 g\n\nQ 4. Observe the given figure. It shows particles in a sample of air.\n\n(a) Count the substances shown in the sample.\n\n(b) Is air a mixture or pure substance? Explain.\n\n(c) Identify the formula of each substance in air.\n\n(d) Argue whether each substance in air is an\n\nelement or a compound.\n\n(e) What is the most common substance in air?\n\nAns. (a) There are five substances in the sample (air). i.e water vapours (H₂O) , argon (Ar), nitrogen\n\ngas (N₂), oxygen gas (O₂) and carbondioxide gas (CO₂).\n\n(b) Air is a mixture, not a pure substance. A pure substance consists of one type of particles. However, air consists of five substances as shown.\n\n(c) The formula of water vapours is H₂O, nitrogen gas is N₂, oxygen gas is O₂, argon gas is Ar and carbondioxide gas is CO₂.\n\n(d) Air has three elements i.e nitrogen gas (N₂) , oxygen gas (O₂) and argon gas (Ar). Air has two compounds i.e carbondioxide gas (CO₂) and water vapours (H₂O). Remember that the molecules of elements have same type of atoms whereas molecules of compounds have different type of atoms.\n\n(e) The most common substance in the air is nitrogen gas (N₂) because it is found in abundant (78%).\n\nQ 5. Calculate number of hydrogen atoms present in 18 g water.\n\nAns. Mass of water (H₂O) = 18 g\n\nMolar mass of water = 18 g / mol\n\nNumber of hydrogen atoms in one molecule of water (H₂O) = 2\n\nFirst convert mass to moles by the following formula.\n\nMoles = Mass / Molar mass\n\nMoles = 18 g / 18 g.mol-1 = 1 mole water\n\nUse the following formula to calculate number of hydrogen atoms in 1 mole (18 g) water.\n\nNumber of atoms = Moles x Number of atoms in on molecule x Avogadro’s number\n\n= 1 mole x 2 x 6.022 x 1023\n\n= 1.204 x 1024 hydrogen atoms (H) in 18 g (1 mole) water.\n\nQ 6. Calculate the total number of atoms present in 18 g water.\n\nAns. Mass of water (H₂O) = 18 g\n\nMolar mass of water = 18 g / mol\n\nTotal number of atoms in one molecule of water (H₂O) = 3\n\nFirst convert mass to moles by the following formula.\n\nMoles = Mass / Molar mass\n\nMoles = 18 g / 18 g.mol-1 = 1 mole water\n\nUse the following formula to calculate total number of atoms in 1 mole (18 g) water.\n\nTotal number of atoms = Moles x Number of atoms in on molecule x Avogadro’s number\n\n= 1 mole x 3 x 6.022 x 1023\n\n= 1.806 x 1024 atoms in 18 g (1 mole) water",
      answer: 'See worked solution',
      unit: '',
    },
  ],

  chapterTests: [],
  pastPaperQuestions: [],
};