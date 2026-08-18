import type { ReactNode } from 'react';
import {
  Atom,
  BookOpenText,
  Boxes,
  CircleDot,
  FlaskConical,
  ListChecks,
  Scale,
  Sparkles,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Basic Concepts of Chemistry',
};

type UnitQuestion = {
  number: number;
  question: string;
  paragraphs: string[];
};

const shortQuestions: UnitQuestion[] = [
  {
    number: 1,
    question: "What was the concept or belief of Greek philosophers about matter (universe)?",
    paragraphs: [
      "Ans. Greek philosophers believed that everything was made of an elemental substance. Some of them believed that elemental substance is water, others thought that elemental substance is air.",
    ],
  },
  {
    number: 2,
    question: "Define corpuscular theory of matter. [Do You Know]",
    paragraphs: [
      "Ans. Corpuscular theory tells us that matter (universe) is made up of small particles (things). Two Greek philosophers named Empedocles and Democratus presented this theory in 5th century B.C.",
    ],
  },
  {
    number: 4,
    question: "Define chemistry.",
    paragraphs: [
      "Ans. It is the branch of science which deals with the study (examination) of matter and changes in matter.",
    ],
  },
  {
    number: 8,
    question: "What is Dalton’s Atomic Theory? Write it postulates. [Society, Technology and Science]",
    paragraphs: [
      "Ans. In 1803, a British scientist John Dalton presented his famous theory which has the following postulates.",
      "i. All elements are made of small indivisible particles called atoms.",
      "ii. All atoms of an element are identical. They have same masses.",
      "iii. During chemical reactions, atoms combine, separate or rearrange in simple ratios.",
      "iv. Atoms can neither be created nor destroyed.",
    ],
  },
  {
    number: 10,
    question: "Define atom. Give example.",
    paragraphs: [
      "Ans. The smallest particle of an element that cannot exist in free state is called atom. It is electrically neutral which means that it has no net charge because it has equal number of electrons and protons. For example, Na is an atom of sodium element, H is an atom of hydrogen element, Cl is an atom of chlorine element and C is an atom of carbon element.",
    ],
  },
  {
    number: 11,
    question: "How an atom can be seen and weighed? [Important Information]",
    paragraphs: [
      "Ans. Many scientists thought that an atom is a mental construction because it cannot be seen with naked eyes. However, with the advancement of science, scientist made scanning tunneling microscope which is used to visualize atoms. Mass spectrometer can be used to weigh atom.",
    ],
  },
  {
    number: 12,
    question: "Define matter. Name its three states.",
    paragraphs: [
      "Ans. Anything which occupies space and has weight is called matter. It has three states, i.e solid, liquid and gas.",
    ],
  },
  {
    number: 13,
    question: "Define substance. Give examples.",
    paragraphs: [
      "Ans. Any matter which has different characteristics from any other kind of matter around it is called substance. OR",
      "Anything which is pure is called substance. For example, sodium (Na), water (H2O) and sodium chloride (NaCl) etc. It means all elements or compounds in pure form are called substances.",
    ],
  },
  {
    number: 14,
    question: "Define element. Give examples.",
    paragraphs: [
      "Ans. A substance which cannot be divided into simpler substances is called element. OR",
      "A substance which has all its atoms with same atomic number is called element.",
      "For example, sodium (Na), gold (Au), Silver (Ag) and potassium (K) etc. Elements have uniform composition.",
    ],
  },
  {
    number: 17,
    question: "Define compound. Give examples.",
    paragraphs: [
      "Ans. A compound is a substance which is formed of two or more than two elements combined in a fixed ratio by a natural force called chemical bond. For example water (H2O), sulphuric acid (H2SO4), ammonia (NH3), nitric acid (HNO3) and sodium chloride (NaCl) etc.",
      "Remember that both elements and compounds have uniform composition which means that both are formed of same type of particles.",
    ],
  },
  {
    number: 18,
    question: "What is a mixture. Give examples.",
    paragraphs: [
      "Ans. A mixture is formed by two or more than two different types of substances (elements or compounds) which retain their properties. For example, salt dissolved in water or iron pieces mixed with clay.",
    ],
  },
  {
    number: 21,
    question: "Define atomic number. Give examples.",
    paragraphs: [
      "Ans. The number of protons in the nucleus of an atom or number of electrons around the nucleus of an atom of an element is called atomic number of that element. It is represented by “Z”.",
      "For example, atomic number of sodium ( ) is 11 and () is 17. Atomic number is shown at subscript position of the symbol for an element.",
      "Remember that the number of proton is equal to the number of electrons in a neutral atom.",
    ],
  },
  {
    number: 22,
    question: "Define mass number. Give examples.",
    paragraphs: [
      "Ans. The sum of number of protons and number of neutrons is called mass number. For example, the mass number of carbon () is 12 and oxygen () is 16.",
      "Mass number is shown at superscript position of the symbol for an element.",
    ],
  },
  {
    number: 24,
    question: "Define relative atomic mass. Give examples.",
    paragraphs: [
      "Ans. The mass of an atom of an element related to the mass of one atom of carbon-12 (C-12) atom is called relative atomic mass or simply atomic mass of that element. The unit of atomic mass is atomic mass unit (amu). For example, the relative atomic mass of hydrogen is 1.008 amu, oxygen is 15.9994 amu and sodium is 22.9898 amu.",
    ],
  },
  {
    number: 25,
    question: "Who were the first scientists to work on relative atomic masses of elements?",
    paragraphs: [
      "Ans. John Dalton, Gay Lussac, Lavoisier, Avogadro and Berzelius worked on relative atomic masses of elements and presented quantitative information about atomic masses. The chemists in nineteenth century observed the proportions in which elements combine to form different compounds and in this way they calculated relative atomic masses.",
    ],
  },
  {
    number: 27,
    question: "What is atomic mass unit?",
    paragraphs: [
      "Ans. One atomic mass unit (amu) is the mass exactly equal to one-twelfth (1/12th) the mass of one atom of light isotope of carbon-12. Mathematically, 1 amu = of carbon-12 atom",
    ],
  },
  {
    number: 29,
    question: "Define chemical formula. Give examples.",
    paragraphs: [
      "Ans. A symbolic representation which tells us about the type of elements and whole number ratio between atoms of elements in covalent compounds and ionic compounds. For example, the chemical formulas of sodium chloride is NaCl, calcium oxide is CaO, ammonia is NH3 and hydrochloric acid is HCl. The numerical subscripts in chemical formulas tell us the number of each type of atoms in the compound. Chemical formula has two types, i.e molecular formula and empirical formula.",
    ],
  },
  {
    number: 30,
    question: "Define molecular formula. Give examples.",
    paragraphs: [
      "Ans. A symbolic representation which tells us about the actual whole number ratio between atoms of elements in a covalent compound. For example, the molecular formulsa of glucose is C6H12O6, sulphuric acid is H2SO4, ammonia is NH3, benzene is C6H6 and sucrose (table sugar) is C12H22O11.",
    ],
  },
  {
    number: 31,
    question: "What is empirical formula. Give examples.",
    paragraphs: [
      "Ans. The symbolic representation of a compound which tells us about simplest whole number ratio between atoms of elements in a compound. For example, the empirical formula of glucose is CH2O, sulphuric acid is H2SO4, sodium chloride is NaCl, water is H2O and benzene is CH.",
    ],
  },
  {
    number: 33,
    question: "Define molecular mass. Give examples.",
    paragraphs: [
      "Ans. The sum of atomic masses of all atoms present in a molecule is called molecular mass. For example, the molecular mass of hydrogen (H2) is 2 amu (1amu + 1 amu = 2 amu), chlorine (Cl2) is 71 amu, (35.5 amu + 35.5 amu = 71 amu) water (H2O) is 18 amu (2 x 1 amu + 16 amu = 18 amu), and sulphuric acid (H2SO4) is 98 amu ( 2 x 1 amu + 32 amu + 4 x 16 amu = 98 amu).",
      "The term molecular mass is only used for molecular elements and molecular compounds (covalent compounds) only.",
    ],
  },
  {
    number: 34,
    question: "Define formula mass. Give examples.",
    paragraphs: [
      "Ans. The sum of atomic masses of all atoms present in a formula unit of an ionic compound is called formula mass. For example, The formula mass of sodium chloride (NaCl) is 58.5 amu (23 amu + 35.5 amu = 58.5 amu) , calcium oxide (CaO) is 56 amu (40 amu + 16 amu = 56 amu) and calcium chloride (CaCl2) is 111 amu (40 amu + 2 x 35.5 amu = 111 amu).",
      "The term formula mass is used for ionic compounds only.",
    ],
  },
  {
    number: 37,
    question: "Define chemical species. Give examples.",
    paragraphs: [
      "Ans. An atom, molecule of ion which is under chemical process of measurement is called chemical species. For example, a sample of sodium element, sodium chloride or a piece of ice etc.",
    ],
  },
  {
    number: 38,
    question: "Define ion. Give examples.",
    paragraphs: [
      "Ans. A charged species which is formed by loss or gain of electron from an atom of chemically bonded group of atoms. For example, calcium ion (Ca2+) and oxide ion (O2-) etc. There are two types of ions, i.e cation and anion.",
    ],
  },
  {
    number: 42,
    question: "Define free radical. Give examples.",
    paragraphs: [
      "Ans. A free radical is an atom or a group of atoms that contains an unpaired electron and has no overall electric charge.",
    ],
  },
  {
    number: 45,
    question: "What are representative particles of a substance? Give examples.",
    paragraphs: [
      "Ans. The particles present in a substance are called its representative particles. For example, H2O molecules are representative particles of water. Similarly, Na atoms are representative particles of sodium element and NaCl formula units are representative particles of sodium chloride.",
    ],
  },
  {
    number: 49,
    question: "What is pseudo-science? [Society, technology and science]",
    paragraphs: [
      "Ans. The scientists who worked on changing cheap (less valued) metals such as lead into gold were called Alchemists and that branch was called Alchemy. Alchemy was named pseudo-science (pseudo means false) because Alchemists totally failed in preparing gold from cheap metals.",
    ],
  },
  {
    number: 50,
    question: "What was the importance/advantage of Alchemy? [Society, technology and science]",
    paragraphs: [
      "Ans. Changing cheap metals into gold was wastage of time, but at the same time new processes, like distillation, sublimation and metal extraction were discovered. In this way Alchemists promoted science rather than wasting time.",
    ],
  },
  {
    number: 51,
    question: "What is mole and Avogadro’s number. How are they related (linked) with one another?",
    paragraphs: [
      "Ans. Mole is the amount of a substance that contains 6.022x1023 particles (atoms, molecules and formula units) of that substance. It is the unit of measuring amount of a substance.",
      "The experimentally determined number equals to the number of particles in one mole of a substance is called Avogadro’s number. It is represented by NA.",
      "For example, 12 g carbon, 18 g water and 58.5 g sodium chloride are equal to one mole and contain 6.022x1023 atoms, molecules and formula units respectively.",
    ],
  },
  {
    number: 52,
    question: "What is molar mass? Give examples. How is molar mass related to Avogadro’s number?",
    paragraphs: [
      "Ans. The mass of one mole of a substance is called molar mass. Molar mass of a substance contains 6.022x1023 particles of that substance. Hydrogen exists as molecules so one mole of water has 6.022x1023 molecules. Carbon exists as atoms so one mole of carbon contains 6.022x1023 atoms. Sodium chloride exists as formula units so one mole of sodium chloride contains 6.022x1023 formula units.",
    ],
  },
  {
    number: 53,
    question: "What is the use/importance of mole concept? [Society, technology and science]",
    paragraphs: [
      "Ans. The word mole comes from the word molecule. Mole is such a big quantity that entire world population need almost one million years to count one mole coins. So it is inconvenient to count that much large number.",
      "However, the mole concept has made it easier to count 6.022x1023. A mole represents a definite mass so we can count these big numbers by weighing if we know the mass of one particle (coin).",
    ],
  },
  {
    number: 54,
    question: "Define gram atomic mass, gram molecular mass and gram formula mass of substances.",
    paragraphs: [
      "Ans. The atomic mass of an element shown in gram is called gram atomic mass of that element.",
      "For example, 12 g carbon is gram atomic mass of carbon.",
      "The molecular mass of an element or compound shown in gram is called gram molecular mass of that substance. For example 2 g hydrogen and 18 g water are gram molecular mass of these substances.",
      "The formula mass of a compound shown in gram is called gram formula mass of that compound.",
      "For example, 58.5 g sodium chloride is gram formula mass of sodium chloride.",
    ],
  },
];

const longQuestions: UnitQuestion[] = [
  {
    number: 3,
    question: "What was the concept of Greek philosophers (Empedocles, Plato and Aristotle) about corpuscular theory of matter? Explain. [Do You Know]",
    paragraphs: [
      "Ans. Ancient Greek philosophers presented different concepts about corpuscular theory as follows.",
      "i. Empedocles theory.",
      "A Greek philosopher, named Empedocles, was the first to say that all matter is made of four things, called earth, air, water and fire.",
      "ii. Plato theory.",
      "Plato followed Empedocles theory and called these four things elements.",
      "iii. Aristotle theory.",
      "Aristotle was another Greek philosopher (student of Plato) who adopted the same concept of four elements. But he added that these four elements are made of other four opposite elements called hot-cold and dry-wet. These four elements combine in pairs to form air, fire, water and earth.",
      "For example, fire is formed from hot and dry, air is formed from hot and wet, water is formed from cold and wet and earth is formed from wet and dry. This concept of Greeks remained applicable for more than 2000 years.",
    ],
  },
  {
    number: 5,
    question: "Define different branches of chemistry.",
    paragraphs: [
      "Ans. The following are different branches of chemistry.",
      "i. Analytical chemistry: It is that branch of chemistry which deals with the study of methods and instruments used for determination of composition of matter.",
      "ii. Biochemistry: It is that branch which deals with the study of chemical and physical changes taking place inside living things.",
      "iii. Environmental chemistry: It deals with the studies of harmful effects of chemicals on environment and human beings.",
      "iv. Inorganic chemistry: It deals with the study of elements and compounds other than organic compounds.",
      "v. Industrial chemistry: It deals with the studies of methods and technology used for the large scale preparation of products in industries.",
      "vi. Nuclear chemistry: It deals with the changes in nuclie of atoms in various substances. [nuclie is plural of nucleus].",
      "vii. Organic chemistry: It studies substances having carbon in them, except carbonmonoxide",
      "(CO),carbondioxide (CO2),carbonates (CO2-3) and bicarbonates (HCO­1-3).",
      "viii. Physical chemistry: It studies laws and theories to understand structure and changes in matter.",
    ],
  },
  {
    number: 6,
    question: "Write down different statements against each branch of chemistry to justify its definition.",
    paragraphs: [
      "Ans. (a) Analytical Chemistry.",
      "i. Elemental analysis shows that ammonia contains nitrogen and hydrogen elements.",
      "ii. Acetic acid is composed of carbon, hydrogen and carbon elements only.",
      "iii. Gasoline fumes are burnt in automobile engine to give energy.",
      "iv. Calorimeter is a device used to measure the amount heat a substance absorbs on heating or emits on cooling.",
      "v. Sulphuric acid is weaker acid than hydrochloric acid.",
      "vi. Melting point of sodium chloride is 801oC measured by Fisher-Johns Apparatus.",
      "vii. A chemist did an experiment to determine percentage purity of a sample of glucose.",
      "(b) Biochemistry.",
      "i. Acetic acid causes so many chemical reactions inside human body.",
      "ii. Photosynthesis is a natural process used for production of food inside plants in presence of sunlight and chlorophyll.",
      "iii. Hair and nails contain keratins (proteins).",
      "iv. A cornstalk grows from a seed.",
      "v. Some examples of complete protein food are meat, milk and eggs.",
      "(c) Environmental Chemistry.",
      "i. Nitrogen dioxide (NO2) is responsible for acid rain.",
      "ii. Excessive drink of acetic acid causes adverse/harmful effects on human health.",
      "iii. Vehicles exhaust gases pollute the air or atmosphere.",
      "iv. Sulphur dioxide is the major source of acid rain.",
      "v. Chlorofluorocarbons are responsible for ozone depletion.",
      "vi. Plantation helps in overcoming green house effect.",
      "vii. Light chlorinated hydrocarbons in drinking water are carcinogens (cancer causing).",
      "(d) Inorganic Chemistry.",
      "i. Ammonia is soluble in water. It has no colour and has pungent irritating smell.",
      "ii. The study of carbon, oxygen and hydrogen elements in acetic acid (CH3COOH).",
      "iii. A silver article tarnishes in air.",
      "(e) Industrial Chemistry.",
      "i. Haber’s process is used for large scale production of ammonia.",
      "ii. Acetic acid is prepared by oxidation of ethyl alcohol.",
      "iii. White lead is a pigment used by artists for centuries which is extracted from its ore, galena (PbS).",
      "iv. In Pakistan, most industries use wet process for cement production.",
      "(f) Nuclear Chemistry.",
      "i. Bombardment of alpha rays or neutrons on compounds brings about nuclear changes. ii. The element radium is converted into radon by emitting α-particles.",
      "iii. Carbon-14 is continuously produced in the atmosphere when high energy neutrons from space collide with nitrogen-14.",
      "(g) Organic Chemistry.",
      "i. Acetic acid is compound of carbon and is prepared from organic compound called ethyl alcohol (C2H5OH).",
      "ii. Acetylene is hydrocarbon composed of carbon and hydrogen elements.",
      "iii. Dynamite (C3H5N3O9) explodes to form a mixture of gases.",
      "(h) Physical Chemistry.",
      "i. The change of solid to gas, gas to liquid or liquid to solid or solid to liquid etc.",
      "ii. Gases can be compressed by applying pressure.",
      "ii. Purple iodine vapours appear when solid iodine is warmed.",
      "iii. Ice floats on water.",
    ],
  },
  {
    number: 7,
    question: "How Archimedes (Greek philosopher) explained the purity of gold of the crown of a Greek emperor of his times? [Society, Technology and Science]",
    paragraphs: [
      "Ans. Archimedes was a Greek philosopher and mathematician. The Greek emperor gave him a task to check the purity of his crown made of gold. One day Archimedes was taking bath and he observed that as he went deep in water, more volume (weight) of water was overflowed from bath tank.",
      "He put a piece of gold in water in a pot. It displaced some water from there. He thought that the purity of gold could be determined from the amount (volume) of liquid water it displaced (overflowed) from the pot.",
      "He meant that the quantity of water displaced by gold is equal to the weight of the gold piece dipped in it. He knew that if the crown was pure, then the amount of water displaced by it from a pot must be equal to the water displaced by equal weight of pure gold in another pot filled with same quantity of water.",
      "He was very much excited by this thinking and ran from there shouting “Eureka” which means",
      "“I found it”.",
    ],
  },
  {
    number: 9,
    question: "What are the defects of Dalton’s atomic theory? OR",
    paragraphs: [
      "Which postulates of Dalton’s atomic theory were changed? [Society, Technology and Science]",
      "Ans. In 1850s, sub atomic particles (electrons, protons and neutrons) were discovered so the postulate that “atom is indivisible” was rejected. With the discovery of isotopes, the postulate that “all atoms of an",
      "elements are identical” was rejected. The two postulates of Dalton’s theory are still applicable.",
      "Identify the branch of chemistry that is related to the following information:",
      "1. Hair contains a special class of proteins called keratins, which are present in nails and wool.",
      "Ans. This information is related to biochemistry because it discusses hair which is produced as a result of chemical changes (chemical reactions) taking place inside living things.",
      "2. Acetylene is the simplest hydrocarbon that contains carbon-carbon triple bond. Hydrocarbons are the compound of carbon and hydrogen.",
      "Ans. This information is related to organic chemistry because it deals with carbon compound (acetylene).",
      "3. White lead is a pigment used by artists for centuries, the metal lead (Pb) in the compound is extracted from its ore, galena (PbS).",
      "Ans. This information is associated with industrial chemistry because it shows large scale production of lead from its ore.",
      "4. Sulphuric acid (H2SO4) is extremely corrosive to skin.",
      "Ans. This information belongs to environmental chemistry because it tells us about the adverse effects on human beings.",
      "5. Gases can be compressed by applying pressure.",
      "Ans. This statement is related to physical chemistry because it focuses on a physical change (compression) which takes place under a law called Boyle’s law.",
      "6. Some examples of complete protein food are meat, milk and eggs.",
      "Ans. This information is related to biochemistry because proteins are produced inside the body of living things as a result of chemical changes (chemical reactions).",
      "7. Element radium decays by emitting alpha (α) particles and is converted into another element radon.",
      "Ans. This statement belongs to nuclear chemistry because one element can only be converted to another element if changes inside nucleus take place.",
      "8. Calorimeter is a device that measures the amount of heat, a substance absorbs on heating or emits on cooling.",
      "Ans. This observation is related to physical chemistry because it deals with the study of heat changes in matter.",
    ],
  },
  {
    number: 15,
    question: "Explain molecularity of physical world. [Society, Technology and Science]",
    paragraphs: [
      "Ans. Molecularity of physical world means that this world is made up of molecules. Entire physical world is made of mixtures. Mixtures are made of elements and compounds which are made of molecules. So we can say that physical world is made of molecules and this property is called molecularity of physical world.",
      "Elements are the building blocks of living and non-living things in this universe. The elements which make up this earth also make up the moon.",
      "Air consists of polyatomic molecules, like O2, N2, CO2 , H2O and noble gases. Water consists of polyatomic molecules which covers 70% of earth crust and also fills the empty spaces under the earth. Clay and sand also consists of long chain molecules called giant molecules. Petroleum and coal are also composed of molecules. Living things are also formed of thousands of different substances which exist in the form of large molecules (polymers), like carbohydrates, proteins, fats, lipids, DNA and RNA etc. Simply, this world is made up of molecules",
    ],
  },
  {
    number: 16,
    question: "Highlight the importance of garlic. [Science Tit Bits]",
    paragraphs: [
      "Ans. Garlic produces bad breath which may be good for you. Garlic contains more than 200 compounds and has the following uses.",
      "i. It is used against stomach cancer.",
      "ii. It may cure heart diseases.",
      "iii. It may lower the chances of stroke.",
    ],
  },
  {
    number: 19,
    question: "Explain the types of mixture. Give examples.",
    paragraphs: [
      "Ans. There are two types of mixture.",
      "i. Homogeneous mixture. It is a mixture which has uniform (same) composition throughout its body. OR",
      "It is that mixture having one phase. For example, sugar or sodium chloride dissolved in water.",
      "ii. Heterogeneous mixture. It is that type of mixture which is formed of two or more than two visibly different components. OR",
      "It is a mixture which has more than one phases. For example, iron pieces added in water.",
    ],
  },
  {
    number: 20,
    question: "What are the differences between compounds and mixtures.",
    paragraphs: [
      "Ans. The following table shows the differences.",
      "Compound",
      "Mixture",
      "It is formed by two or more elements combined by fixed ratio by a chemical bond.",
      "It is formed by two or more elements or compounds combined with indefinite ratio",
      "The substances of which a compound is formed are called elements.",
      "The substances of which a mixture is formed are called components of mixture.",
      "The elements making compounds cannot be separated by physical means. They can be separated by chemical means.",
      "The components making mixtures can be separated by physical means.",
      "The properties of compounds are different from their elements.",
      "The properties of mixtures are similar to their components",
      "Examples: Benzene (C6H6) & glucose (C6H12O6)",
      "Examples: Clay or sand added to water .",
    ],
  },
  {
    number: 23,
    question: "How to calculate number of electrons, number of protons and number of neutrons.",
    paragraphs: [
      "Ans. Remember that number of electrons in an atom of an element is equal to number of protons. The number of neutrons can be calculated by subtracting atomic number from mass number as given.",
      "For example, the number of electrons, protons and neutrons in chlorine () can be calculated as,",
      "Number of electrons = 17",
      "Number of protons = 17",
      "Number of neutrons = 35-17 = 18",
    ],
  },
  {
    number: 26,
    question: "How is relative atomic mass determined?",
    paragraphs: [
      "An atom is extremely small so we cannot determine the mass of a single atom of an element. However, we can determine the atomic mass of an atom relative to another atom experimentally by mass spectrometer. This can be done by giving a value to the mass of one atom of a given element as a standard value.",
      "In 1961, the international agreement selected light isotope of carbon-12 as a standard and assigned a mass of exactly 12 atomic mass unit. The atomic masses of all elements are determined by comparing to the mass of carbon-12 atom in mass spectrometer.",
    ],
  },
  {
    number: 28,
    question: "Calculate the atomic mass of hydrogen atom which is 8.40% as massive as one atom of C-12.",
    paragraphs: [
      "Ans. If the percentage of an atom related to carbon-12 is given, then we can calculate the atomic mass of the given atom is the following formula.",
      "x 12 amu",
      "Relative percentage by mass of hydrogen = 8.40%",
      "So put the value in the above formula,",
      "x 12 amu = 1.008 amu",
    ],
  },
  {
    number: 32,
    question: "Many compounds have same chemical formulas/molecular and empirical formulas?",
    paragraphs: [
      "Ans. There are some compounds which have same molecular and empirical formulas. For example, water (H2O), carbondioxide (CO2), ammonia (NH3), nitric acid (HNO3), sulphuric acid (H2SO4), sodium chloride (NaCl), calcium chloride (CaCl2) etc.",
      "Note that for all ionic compounds, chemical formulas are same to their empirical formulas.",
      "1. Write the empirical formulas for the compound containing carbon and hydrogen in the following ratios. (a) 1:4 (b) 2:6 (c) 2:2 (d) 6:6",
      "Ans. (a) CH4 (b) CH3 (c) CH (d) CH",
      "2. For many compounds, the empirical and molecular formulas are same. For example, water (H2O), carbondioxide (CO2), ammonia (NH3), methane (CH4), sulphur dioxide (SO2) etc. Can you show it why?",
      "Ans. As we know that the ratio between atoms of different elements in the mentioned compounds cannot be divided by a common digit to make it simplest, so both the molecular formulas and empirical formulas of these compounds are same.",
      "1. Asparine is used as mild pain killer. There are nine carbon atoms, eight hydrogen atoms and four oxygen atoms in this compound. Write empirical and molecular formulas.",
      "Ans. The molecular formula of asparine is C9H8O4.",
      "The empirical formula of asparine is C9H8O4.",
      "2. Vinegar is 5% acetic acid. It contains two carbon atoms, four hydrogen atoms and two oxygen atoms. Write its empirical and molecular formulas.",
      "Ans. The molecular formula of acetic acid is C2H4O2.",
      "The empirical formula of acetic acid is CH2O.",
      "3. Caffeine (C8H10N4O­2) is found in tea and coffee. Write the empirical formula of caffeine.",
      "Ans. The empirical formula of caffeine is C4H5N2O.",
    ],
  },
  {
    number: 35,
    question: "Define formula unit. Give examples.",
    paragraphs: [
      "Ans. The arrays (arrangement) of oppositely charged ions in ionic compounds which show simplest ratio between cations and anions are called formula units. Ionic compounds contain formula units, not molecules or atoms.",
      "For example, NaCl is the formula unit of sodium chloride which shows that it has one sodium ion (Na+) for one chloride ion (Cl-). Similarly, CaCl2 is the formula unit of calcium chloride which shows that it has one calcium ion (Ca2+) for two chloride ions (Cl-). Remember that onic compounds are shown by formula units.",
    ],
  },
  {
    number: 36,
    question: "Define molecule. Explain the types of molecules with examples.",
    paragraphs: [
      "Ans. The smallest particle of a molecular element or a molecular compound which can exist in free state (uncombined state) is called molecule. For example, Cl2 is the molecule of chlorine gas, H2O is the molecule of water. There are two types of molecules.",
      "i. Monoatomic molecules. These are molecules having one atom, e.g helium (He) and neon (Ne) etc. All noble gases contain monoatomic molecules.",
      "ii. Polyatomic molecules. These are molecules containing more than one atom, e.g water (H2O) and table sugar (C12H22O11) etc.",
      "1. Potassium chlorate (KClO3) is used commonly for the laboratory preparation of oxygen gas. Calculate its formula mass.",
      "Ans. Atomic mass of potassium (K) = 39 amu",
      "Atomic mass of chlorine (Cl) = 35.5 amu",
      "Atomic mass of oxygen (O) = 16 amu",
      "Formula mass is the sum of atomic mass of all atoms present in the formula.",
      "So formula mass of KClO3 is = (39 amu + 35.5 amu + 3x16 amu = 122.5 amu)",
      "2. When baking soda (NaHCO3) is heated, carbondioxide (CO2) is released, which is responsible for the rising of cookies and bread. Determine the formula masses of baking soda and carbondioxide.",
      "Ans. For baking soda (NaHCO3):",
      "Atomic mass of sodium (Na) = 23 amu",
      "Atomic mass of hydrogen (H) = 1 amu",
      "Atomic mass of carbon(C) = 12 amu",
      "Atomic mass of oxygen (O) = 16 amu",
      "So the formula mass of NaHCO3 is (23 amu + 1 amu + 12 amu + 3x16 amu = 84 amu)",
      "For carbondioxide (CO2):",
      "Atomic mass of carbon (C) = 12 amu",
      "Atomic mass of oxygen (O) = 16 amu",
      "Formula mass of CO2 = (12 amu + 2x16 amu = 44 amu)",
      "3. The following compounds are used as fertilizers. Determine their formula masses.",
      "(i) Urea, (NH2)2CO (ii) Ammonium nitrate, NH4NO3.",
      "Ans. For urea, (NH2)2CO:",
      "Atomic mass of nitrogen (N) = 14 amu",
      "Atomic mass of hydrogen (H) = 1 amu",
      "Atomic mass of carbon (C) = 12 amu",
      "Atomic mass of oxygen (O) = 16 amu",
      "Formula mass of urea (NH2)2CO = (2x14 amu + 4x1amu + 12 amu + 16 amu = 60 amu)",
      "For ammonium nitrate, NH4NO3:",
      "Atomic mass of nitrogen (N) = 14 amu",
      "Atomic mass of hydrogen (H) = 1 amu",
      "Atomic mass of oxygen (O)= 16 amu",
      "The formula mass of ammonium nitrate (NH4NO3) = (2x14amu + 4x1amu + 3x16amu= 80 amu",
    ],
  },
  {
    number: 39,
    question: "What is cation and anion? How are they formed? Give examples.",
    paragraphs: [
      "Ans. i. Cation.",
      "It is positively charged ion. It is formed from metal atoms by losing one or more electrons. For example potassium ion (K+) which is formed by losing one electron and aluminium ion (Al3+) which is formed by losing three electrons.",
      "ii. Anion.",
      "It is negatively charged ion. It is formed from non metal atoms by gaining one or more than one electrons. For example, fluoride ion (F-) which is formed by gaining one electron and oxide ion (O2-) which is formed by gaining two electrons.",
    ],
  },
  {
    number: 40,
    question: "Why an ion acquires (adopts) a net positive and negative charge? Give examples.",
    paragraphs: [
      "Ans. A cation gets a positive charge because after losing electron/s because the number of electrons decreases than the number of protons, so an overall positive charge appears on it.",
      "Sodium atom () = 11 electrons (-11 charge) + 11 protons (+11)",
      "= -11 + (+11) = 0",
      "It means no charge appears on sodium atom.",
      "If sodium loses one electron, it means the number of electrons decreases by one unit than the number of protons (proton number does not change), so a net positive charge appears on it as follows.",
      "Sodium ion (1+) = 10 electron (-10 charge) + 11 protons (+11 charge)",
      "= -10 + (+11) = +1",
      "It means +1 charge appears on sodium ion.",
      "On the other hand, an anion gets negative charge after gaining electron/s because the number of electrons increases than the number of protons, so an overall negative charge appears on it.",
      "Chlorine atom () = 17 electrons (-17 charge) + 17 protons (+17)",
      "= -17 + (+17) = 0",
      "It means no charge appears on chlorine atom.",
      "If chlorine atom gains one electron, it means the number of electrons increases by one unit than the number of protons (proton number does not change), so a net negative charge appears on it as follows. Chloride ion (1-) = 18 electron (-18 charge) + 17 protons (+17 charge)",
      "= -18 + (+17) = -1",
      "Explain why",
      "1. An oxide ion (O2-) has “-2” charge.",
      "Ans. Oxide ion (O2-) has “-2” charged because it gains two electrons so the number of electrons increases than protons by two units. Two electrons carry give 2 negative charge to oxide ion as shown.",
      "O + 2e- O2-",
      "2. Magnesium ion (Mg2+) has “+2” charge.",
      "Ans. Magnesium ion (Mg2+) has “+2” charge because it loses two electrons so the number of protons increases than electrons by two units. Two electrons loss give 2 positive charge to magnesium ion.",
      "Mg Mg2+ + 2e-",
      "3. Sulphide ion (S2-) has “-2” charge.",
      "Ans. Sulphide ion (S2-) has “-2” charge because it gains two electrons so the number of electrons increases than protons by two units. Two electrons produce 2 negative charge to sulphide ion.",
      "S + 2e- S2-",
    ],
  },
  {
    number: 41,
    question: "Define molecular ion. Give examples.",
    paragraphs: [
      "Ans. The chemical species which is formed by a molecule after gaining or losing electrons is called molecular ion. It is unstable so can live for very short time. It can exist at high temperature only.",
      "For example, O21- is the molecular ion of oxygen formed by gaining one electron, O21+ is the molecular ion of oxygen formed by loss of one electron. Similarly, N21- is the molecular ion of nitrogen formed by gaining one electron and N21+ is the molecular ion of nitrogen formed by loss of on electron. Remember that molecular ions cannot form ionic compounds.",
    ],
  },
  {
    number: 43,
    question: "How is free radical formed? Give example.",
    paragraphs: [
      "Ans. When a molecule, like halogen is exposed to sunlight, it splits into its free radicals. For example,",
    ],
  },
  {
    number: 44,
    question: "What are the differences between free radical and an ion? Give examples.",
    paragraphs: [
      "Ans. The following table shows the difference between free radical and ion.",
      "Free radical",
      "Ion",
      "It has an unpaired electron",
      "It has no unpaired electron",
      "It carries no electrical charge",
      "It carries electrical charge",
      "It has odd number of electrons. For example, chlorine radical (Cl.) has seven electrons.",
      "It has even number of electrons. For example, chloride ion (Cl1-) has eight electrons",
      "Identify ions, molecular ions and free radicals from the following chemical species.",
      "Ans. Ions: CN1-, N3-,He2+",
      "Molecular ions: He2+, CH41+",
      "Free radicals:",
    ],
  },
  {
    number: 46,
    question: "How to identify an element, compound and mixture. Show diagrams.",
    paragraphs: [
      "Ans. If the particles are formed of same type of atoms, then they are elements. If the particles contain different type of atoms combined then they show compounds. If different type of elements or compounds are mixed, they form mixtures.",
      "The following diagram shows elements, compound and mixtures clearly.",
    ],
  },
  {
    number: 47,
    question: "Define molecule. Differentiate between molecules of elements and compounds . Give examples.",
    paragraphs: [
      "Ans. The particles which can exist freely (independently) is called molecule. Molecules of elements have same types of atoms. For example, He, H2, O3 and S8 are the molecules of helium, hydrogen and sulphur respectively.",
      "On the other hand, the molecules of compounds have different types of atoms. For example, HCl, H2O and C12H22O11 are the molecules of hydrogen chloride, water and sucrose (table sugar) respectively.",
    ],
  },
  {
    number: 48,
    question: "What are monoatomic and polyatomic molecules? Give examples.",
    paragraphs: [
      "Ans. The molecules which consist of one atom only are called monoatomic molecules. For example, He and Ne are monoatomic molecules of helium and neon respectively. All inert gases or noble gases are monoatomic molecules.",
      "On the other hand, the molecules having two or more atoms in them are called polyatomic molecules. For example, H2, CO2 and C6H12O6 are polyatomic molecules of hydrogen, carbondioxide and glucose respectively.",
      "(1) Observe the given figure “A” and identify the diagram that represent the particles of",
      "(a) an element whose representative particles are atoms",
      "(b) an element whose representative particles are molecules",
      "(c) a compound",
      "(d) a mixture of an element and a compound",
      "(e) a mixture of two elements",
      "(f) a mixture of two compounds.",
      "(2) Observe the given figure “B” and decide which diagram represents particles in an element, a compound and a mixture?",
      "Ans. (1) (a) (vi) Radon is an element whose particles are atoms.",
      "(b) (iv) Iodine is an element whose particles are molecules.",
      "(c) (i) Hydrogen chloride is a compound because it has different atoms combined.",
      "(d) (ii) Oxygen (element) and sulphur dioxide (compound) are mixed form a mixture.",
      "(e) (v) It is a mixture of elements chlorine (Cl2) and argon (Ar).",
      "(f) (iii) It is a mixture of two compounds, i.e sulphur dioxide (SO2) and ammonia (NH3).",
      "Ans. (2) (b) and (f) represent particles of elements argon (Ar) and chlorine (Cl2) respectively.",
      "(a) and (c) represent particles of compounds (ammonia and sulphur dioxide).",
      "(d) and (e) are mixtures of elements (N2, H2) and compounds (CO2, CO) respectively.",
    ],
  },
  {
    number: 55,
    question: "What is the relationship/link between molar mass with gram atomic mass, gram molecular mass and gram formula mass of substances?",
    paragraphs: [
      "Ans. Gram atomic mass, gram molecular mass and gram formula mass are equal to molar masses of substances and have 6.022x1023 particles in them.",
    ],
  },
  {
    number: 56,
    question: "Differentiate between gram atomic mass, gram molecular mass and gram formula mass of substances?",
    paragraphs: [
      "Ans: The following table shows differences between gram atomic mass, gram molecular mass and gram",
      "formula mass.",
      "Gram atomic mass",
      "Gram molecular mass",
      "Gram formula mass",
      "It represents one mole of atoms of elements.",
      "It represents one mole of molecules of elements or molecular compounds.",
      "It represents one mole of formula units of ionic compounds.",
      "It has 6.022 x x1023 atoms.",
      "It has 6.022 x 1023 molecules.",
      "It represents 6.022 x 1023 formula units.",
      "It is equal to molar mass of element.",
      "It is equal to molar mass of molecular elements or a molecular compounds.",
      "It is equal to formula mass of an ionic compound.",
      "Examples: Na = 23g,",
      "Ca = 40g, K = 39g etc",
      "Examples: H2 = 2g, H2O=18g",
      "Example: NaCl= 58.5g, CaO=56g, CaCl2= 111g etc.",
      "The following formula is used for calculating mass from given moles.",
      "Example 1.5 (a). Calculate molar mass of",
      "(a) sodium (Na) (b) nitrogen (N2) (c) sucrose (C12H22O11)",
      "For calculating molar masses of substances, atomic masses of required elements will be given to you.",
      "Atomic mass of sodium (Na) = 23 amu",
      "Atomic mass of nitogen (N) = 14 amu",
      "Atomic mass of carbon (C) = 12 amu",
      "Atomic mass of hydrogen (H) = 1 amu",
      "Atomic mass of oxygen (O) = 16 amu",
      "Solution. Note that sodium exists in atomic form so its atomic mass shown in grams is equal to its molar mass. Nitrogen and sucrose exist in molecular form so their molecular masses shown in gram are equal to their molar masses.",
      "(a) Atomic mass of sodium (Na) = 23 amu",
      "Molar mass of sodium (Na) = 23 g/mol",
      "(b) Molecular mass of nitrogen (N2) = (14 amu + 14 amu) = 28 amu",
      "Molar mass of nitrogen (N2) = 28 g/mol",
      "(c) Molecular mass of sucrose (C12H22O11) = (12x12+22x1+11x16) = 342 amu",
      "Molar mass of sucrose (C12H22O11) = 342 g/mol",
      "Calculate the mass of one mole of",
      "(a) copper (Cu) (b) iodine (I2) (c) potassium (K) (d) oxygen (O2)",
      "Atomic mass of copper (Cu) = 63 amu",
      "Atomic mass of iodine (I) = 127 amu",
      "Atomic mass of potassium (K) = 39 amu",
      "Atomic mass of oxygen (O) = 16 amu",
      "Solution. Copper (Cu) and potassium (K) exist as atoms so their atomic masses shown in grams are equal to their molar masses. On the other hand, iodine (I2) and oxygen (O2) exist as molecules so their molecular masses shown in gram are equal to their molar masses.",
      "(a) Atomic mass of copper (Cu) = 63 amu",
      "Molar mass of copper (Cu) = 63 g/mol",
      "(b) Molecular mass of iodine (I2) = (127 amu + 127 amu) = 254 amu",
      "Molar mass of iodine molecule (I2) = 254 g/mol",
      "(c) Atomic mass of potassium (K) = 39 amu",
      "Molar mass of potassium (K) = 39 g/mol",
      "(d) Molecular mass of oxygen (O2) = 32 amu",
      "Molar mass of oxygen (O2) = 32 g/mol",
      "Example 1.5 (b). Oxygen is converted to ozone (O3) during thunderstorm. Calculate the mass of",
      "ozone (O3) if 9.05 moles of ozone are formed in a storm.",
      "Solution. Molecular mass of ozone (O3) = 48 amu",
      "Molar mass of ozone (O3) = 48 g/mol",
      "Mass = Moles x Molar mass",
      "= 9.05 moles x 48 g/mol",
      "= 434.4 g O3.",
      "Example 1.6. When natural gas burns, carbondioxide (CO2) is formed. If 0.25 moles of",
      "carbondioxide (CO2) are formed, what mass of carbondioxide (CO2) is produced?",
      "Solution. Molecular mass of carbondioxide (CO2) = 44 amu",
      "Molar mass of carbondioxide (CO2) = 44 g/mol",
      "Mass = Moles x Molar mass",
      "= 0.25 moles x 44g/mol",
      "= 11 g CO2",
      "The following formula is used for calculating moles from given mass.",
      "Example 1.7. How many moles of each of the following substances are present?",
      "(a) A balloon filled with 5 g of hydrogen.",
      "(b) A block of ice that weighs 100 g.",
      "Solution. (a) Molar mass of hydroge (H2) = 2 g/mol",
      "Given mass = 5g",
      "Moles = 5g/2g.mol-1",
      "= 2.5 moles hydrogen (H2).",
      "(b) Molar mass of ice (H2O) = 18 g/mol",
      "Given mass of ice = 100 g",
      "Moles = 100g/18g.mol-1 = 5.55 moles ice (H­2O",
      "(1) The molecular formula of compound used for bleaching hair is hydrogen peroxide(H2O2).",
      "Then calculate the",
      "(a) mass of this compound that would contain 2.5 moles.",
      "(b) number of moles of this compound that would exactly weigh 30 g.",
      "Solution. (a) Molar mass of hydrogen peroxide (H2O2) = 34g/mol",
      "Moles = 2.5 moles",
      "Mass = Moles x Molar mass",
      "= 2.5 moles x 34 g/mol",
      "= 85 g H2O2",
      "(b) Mass of hydrogen peroxide (H2O2) = 30 g",
      "Moles = Mass/Molar mass",
      "= 30 g/34g.mol-1",
      "= 0.88 moles H2O2",
      "(2) A spoon of table salt (NaCl) contains 12.5 g of this salt. Calculate number of moles it contains.",
      "Solution. Molar mass of table salt (NaCl) = 58.5 g/mol",
      "Mass = 12.5 g",
      "Moles = Mass/Molar mass",
      "= 12.5 g/58.5 g.mol-1",
      "= 0.21 moles NaCl",
      "(3) Before the digestive system X-rayed, people are required to swallow suspensions of barium sulphate (BaSO4). Calculate the mass of one mole barium sulphate (BaSO4).",
      "Solution. Molar mass of barium sulphate (BaSO4) =",
      "Moles of barium sulphate (BaSO4) = 1 mole",
      "Mass = Moles x Molar mass",
      "= 1 mole x 233 g/mole",
      "= 233 g BaSO4",
      "·",
      "· Calculating number of atoms in given number of moles of substances.",
      "The following formula is used for calculating number of atoms in given moles for elements which exist in the form of atoms.",
      "Example 1.8. Calculate the number of atoms in the following substances.",
      "(1) Zinc (Zn) is a silvery metal that is used to galvanize steel to prevent corrosion. How many atoms are there in 1.25 moles zinc (Zn)?",
      "Solution. Moles of zinc (Zn) = 1.25 moles",
      "Number of atoms = Moles x 6.022 x 1023",
      "= 1.25 moles x 6.022 x 1023",
      "= 7.53 x 1023 atoms of zinc (Zn).",
      "(2) A thin foil of aluminium (Al) is used as wrapper in food industries. How many atoms are present in a foil that contains 0.2 moles of aluminium?",
      "Solution. Moles of aluminium (Al) = 0.2 moles",
      "Number of atoms = 0.2 moles x 6.022 x 1023",
      "Number of atoms = 1.2044 x 1023 atoms of aluminium (Al).",
      "· Calculating number of molecules in given number of moles of substances.",
      "The following formula is used for calculating number of molecules from given moles of a substance. This formula is used for those substances which exist in the form of molecules.",
      "Example 1.9. Calculate number of molecules in the following substances.",
      "(1) Methane (CH4) is the major component of natural gas. How many molecules are present in 0.5 moles of pure sample of methane (CH4)?",
      "Solution. Moles of methane (CH4) = 0.5 moles",
      "Number of molecules = Moles x 6.022 x 1023",
      "= 0.5 moles x 6.022 x 1023",
      "= 3.011 x 1023 molecules of methane (CH4).",
      "(2). At high temperature, hydrogen sulphide (H2S) gas given off by a volcano is oxidized by air to sulphur dioxide (SO2). Sulphur dioxide (SO2) reacts with water to form acid rain. How many molecules are there in 0.25 moles of sulphur dioxide (SO2)?",
      "Solution. Moles of sulphur dioxide (SO2) = 0.25 moles",
      "Molecules of sulphur dioxide (SO2) gas = Moles x 6.022 x 1023",
      "= 0.25 moles x 6.022 x 1023",
      "= 1.5055 x 1023 molecules of sulphur dioxide (SO2)",
      "· Calculating number of moles from the given number of atoms of substances.",
      "The following formula is used for calculating number of moles from the given number of atoms of substance which exist in the form of atoms.",
      "Example 1.10. Titanium (Ti) is corrosion resistant metal that is used in rockets, aircraft and jet",
      "engines. Calculate the number of moles in this metal in a sample containing 3.011 x 1023 titanium (Ti) atoms.",
      "Solution. Number of atoms given = 3.011 x 1023",
      "Moles = Given atoms/ Avogadro’s number",
      "= 3.011 x1023 / 6.022 x 1023",
      "= 0.5 moles titanium (Ti)",
      "· Calculating number of moles from the given number molecules of substances.",
      "The following formula is used for calculating number of moles from the given number of molecules of substances which exist in the form of molecules.",
      "Example 1.11. Formaldehyde (CH2O) is used to preserve dead animals. Its molecular formula is",
      "CH2O. Calculate its number of moles that would contain 3.011 x 1022 molecules in it.",
      "Solution. Number of molecules of formaldehyde (CH2O) = 3.011 x 1022",
      "Number of moles = Given molecules/Avogadro’s number",
      "= 3.011 x 1022 / 6.022 x 1023",
      "= 0.05 moles of formaldehyde (CH2O).",
      "1. Aspirin is a compound that contains carbon, hydrogen and oxygen. It is used as a painkiller. An aspirin tablet contains 1.25 x 1030 molecules. How many moles of the compound are present in the tablet?",
      "Solution. Molecules given = 1.25 x 1030",
      "Moles = No of molecules / Avogadro’s number",
      "= 1.25 x 1030/ 6.022 x 1023",
      "= 2.076 x 106 moles of aspirin.",
      "2. A method used to prevent rusting in ships and underground pipelines involves connecting the iron to a block of a more active metal such as magnesium. This method is called cathodic protection. How many moles of magnesium are present in 1 billion (1 x 109) atoms of magnesium?",
      "Solution. Number of atoms of magnesium (Mg) = 1 x 109",
      "Moles = No of atoms / Avogadro’s number",
      "= 1 x 109 / 6.022 x 1023",
      "= 1.66 x 10-15 moles of magnesium (Mg)",
    ],
  },
];

const exerciseQuestions: UnitQuestion[] = [
  {
    number: 1,
    question: "Encircle the correct answer.",
    paragraphs: [
      "(i) Which of the following lists contains only elements?",
      "A. air, water, oxygen B. hydrogen, oxygen, brass",
      "C. air, water, fire, earth D. calcium, sulphur, carbon",
      "(ii) The diagrams below represent particles in four substances. Which box represents the particles of nitrogen?",
      "(iii) What is the formula mass of copper sulphate pentahydrate (CuSO4.5H2O)?",
      "[Atomic masses of copper (Cu) = 63.5 amu, sulphur (S) = 32 amu, oxygen (O) = 16 amu, hydrogen (H) = 1amu]",
      "A. 159.5 amu B. 185.5 amu C. 249.5 amu D. 149.5 amu",
      "(iv) A compound with chemical Na2CX3 has formula mass 106 amu. Atomic mass of element “X” would be",
      "A. 106 amu B. 23 amu C. 12 amu D. 16 amu",
      "(v) How many moles of molecules are there in 16 g oxygen?",
      "A. 1 mole B. 0.5 moles C. 0.1 moles D. 0.05 moles",
      "(vi) What is the mass of 4 moles of hydrogen gas?",
      "A. 8.064 g B. 4.032 g C. 1 g D. 1.008 g",
      "(vii) What is the mass of carbon present in 44 g carbondioxide (CO2)?",
      "A. 12 g B. 6 g C. 24 g D. 44 g",
      "(viii) The electronic configuration of an element is 1s2 2s2. An atom of this element will form an",
      "ion that will have charge [ This question belongs to chapter 3]",
      "A. +1 B. +2 C. +3 D. -1",
      "(ix) Which term is same for one mole of oxygen and one mole of water?",
      "A. volume B. mass C. atoms D. molecules",
      "(x) If one mole of carbon contains “x” atoms, what is the number of atoms contained in 12 g of",
      "magnesium (Mg)?",
      "A. x B. 0.5x C. 2x D. 1.5x",
      "Answers.",
      "i",
      "ii",
      "iii",
      "iv",
      "v",
      "vi",
      "vii",
      "viii",
      "ix",
      "x",
      "D",
      "D",
      "C",
      "D",
      "B",
      "A",
      "A",
      "B",
      "D",
      "B",
    ],
  },
  {
    number: 2,
    question: "Give short answers.",
    paragraphs: [
      "(i) Differentiate between an ion and a free radical.",
      "Ans. The following table shows difference between free radical and ion.",
      "Free radical",
      "Ion",
      "It has an unpaired electron",
      "It has no unpaired electron",
      "It carries no electrical charge",
      "It carries electrical charge",
      "It has odd number of electrons. For example, chlorine radical (Cl.) has seven electrons.",
      "It has even number of electrons. For example, chloride ion (Cl1-) has eight electrons",
      "(ii) What do you know about corpuscular nature of matter?",
      "Ans. Corpuscular nature of matter means that matter consists of small particles. This theory explains that matter is discontinuous, not continuous. Two Greek philosophers named Empedocles and Democratus presented this theory in 5th century B.C.",
      "(iii) Differentiate between analytical chemistry and environmental chemistry.",
      "Ans. Analytical chemistry tells us about the methods and instruments used for studying composition of matter whereas environmental chemistry tells us about chemicals which pollute our environment and put negative effects on human beings.",
      "(iv) What is mole?",
      "Ans. It is a unit of quantity of matter. It is amount (quantity) of a substance which contains Avogadro’s number (6.022 x 1023) particles in it. For example, 23 g sodium (Na) and 71 g chlorine gas (Cl2) are equal to one mole of sodium and chlorine respectively.",
      "(v) Differentiate between empirical formula and molecular formula.",
      "Ans. The molecular formula of a compound tells us about actual whole number ratio between atoms in a molecule whereas empirical formula tells us about simplest whole number ratio between atoms in a molecule or formula unit. For example molecular formula of benzene is C6H6 whereas empirical formula of benzene is CH. Similarly, molecular formula of glucose is C6H12O6 whereas empirical formula of glucose is CH2O.",
      "(vi) What is the number of molecules in 9.0 g steam?",
      "Ans. Always convert mass to moles first.",
      "Molar mass of steam (water) = 18 g/mol",
      "Using the formula, Moles = Mass / Molar mass",
      "= 9g / 18g.mlo-1",
      "= 0.5 moles H2O",
      "Now using the formula, Number of molecules = Moles x Avogadro’s number",
      "= 0.5 moles x 6.022 x 1023",
      "= 3.022 x 1023 molecules of water (steam)",
      "(vii) What are the molar masses of uranium-238 and uranium-235?",
      "Ans. The number given after symbols or names of elements are their atomic masses. Similarly, the numbers given as superscripts of symbols of elements are also their atomic masses. If we show the atomic masses of elements in grams, they becomes equal to their molar masses or one moles.",
      "Therefore, 238 g and 235 g are the molar masses of uranium-238 and uranium-235 respectively.",
      "(viii) Why one mole of hydrogen molecules and one mole of H-atoms have different masses?",
      "Ans. This is because hydrogen molecule (H2) has mass equals to 2 amu and hydrogen atom (H) has mass equals to 1 amu. One mole of hydrogen molecules has mass 2 g and one mole hydrogen atoms has mass equals to 1 g.",
    ],
  },
  {
    number: 3,
    question: "Define ion, molecular ion, formula unit, free radical, atomic number, mass number and atomic mass unit.",
    paragraphs: [
      "Ans. Ion. Any charged particle is called ion. It may consist of an atom or group of atoms.",
      "For example, Na1+, Cl1-, NH41+ or CO32- etc.",
      "Molecular ion. It is formed from molecule by losing or gaining electron/s. For example, N21-, N21+ , O21-, He1+ or CH41+ etc.",
      "Formula unit. It is a symbolic representation of ionic compounds which shows the lowest whole number ratio between ions. For example, NaCl is the formula unit of sodium chloride and CaCl2 is the formula unit of calcium chloride. Both these formula units shows lowest (simplest) whole number ratio between ions present in these compounds. In NaCl (1:1) and CaCl2 (1:2).",
      "Free radical. An atom or group of atoms which has an unpaired electron and no electric. For example,",
      "Atomic number (Z). The number of protons in the nucleus of an atoms of an element is called atomic number. OR",
      "It is the number of electrons around the nucleus of an atom of an element. For example, atomic number of hydrogen (H) is 1 and that of sodium (Na) is 11.",
      "Mass number. It is the sum of number of protons and neutrons in the nucleus of an atom. For example, mass number of berylium (Be) is 9 and that of sodium is 23.",
      "Atomic mass unit (amu). Atomic mass unit is the standard unit used for the measuring atomic masses of elements. One atomic mass unit (1 amu) is equal to one nucleon (proton or neutron).",
      "1amu = 1/12th of carbon-12 atom",
    ],
  },
  {
    number: 4,
    question: "Differentiate between (a) atom and ion (b) molecular ion and free radical.",
    paragraphs: [
      "Ans. The following table shows differences between an atom and ion.",
      "Atom",
      "Ion",
      "It is electrically neutral",
      "It is a charged body",
      "It may or may not exist separately (freely)",
      "It cannot exist freely",
      "It may or may not obey duplet and octet rules",
      "It always obey duplet and octet rules",
      "Na, H, He and Ca etc",
      "Na1+, Ca2+, Cl1- and O2- etc",
      "The following table shows differences between free radical and molecular ion.",
      "Free radical",
      "Molecular ion",
      "It is formed by an atom or group of atoms",
      "It is formed by loss or gain of electrons by a molecule",
      "It is electrically neutral (uncharged)",
      "It is electrically charged",
      "It has always odd number of electrons",
      "It may have odd or even number of electrons",
      ",",
      "N21-, N21+, O21+ etc",
    ],
  },
  {
    number: 5,
    question: "Describe how Avogadro’s number is related to a mole of any substance?",
    paragraphs: [
      "Ans. A mole is the quantity of a substance having Avogadro’s number (6.022 x 1023) of particles in it.",
      "It means that a mole is defined on the basis of Avogadro’s number which shows a deep relationship.",
    ],
  },
  {
    number: 6,
    question: "Calculate the number of moles of each substance in samples with the following masses.",
    paragraphs: [
      "(a) 2.4 g of helium (He) (b) 250 mg of carbon (C) (c) 15 g sodium chloride (NaCl)",
      "(d) 40 g sulphur (S) (e) 1.5 kg of magnesium oxide (MgO)",
      "Solution. (a) Mass of helium (He) = 2.5 g",
      "Molar mass of helium (He) = 4 g/mol",
      "Using the formula, Moles = Mass / Molar mass",
      "= 2.5 g / 4 g.mol-1 = 0.6 moles helium (He)",
      "(b) Mass of carbon (C) = 250 mg = 0.25 g",
      "Molar mass of carbon (C) = 12 g/mol",
      "Using the formula, Moles = Mass/Molar mass",
      "= 0.25 g / 12 g.mol-1",
      "= 0.021 moles carbon (C)",
      "(c) Mass of sodium chloride (NaCl) = 15 g",
      "Molar mass of sodium Chloride (NaCl) = 58.5 g/mol",
      "Using the same formula, Moles = Mass / Molar mass",
      "= 15 g / 58.5 g.mol-1",
      "= 0.256 moles sodium chloride (NaCl)",
      "(d) Mass of sulphur (S) = 40 g",
      "Molar mass of sulphur (S) = 32 g/mol",
      "Using the formula, Moles = Mass / Molar mass",
      "= 40 g / 32 g.mol-1",
      "= 1.25 moles sulphur (S)",
      "(e) Mass of magnesium oxide (MgO) = 1.5 kg = 1500 g",
      "Molar mass of magnesium oxide (MgO) = 40 g/mol",
      "Using the formula, Moles = Mass / Molar mass",
      "= 1500 g / 40 g.mol-1",
      "= 37.5 moles magnesium oxide (MgO)",
    ],
  },
  {
    number: 7,
    question: "Calculate the mass in grams of each of the following samples.",
    paragraphs: [
      "(a) 1.2 moles of potassium (K) (b) 75 moles of hydrogen (H2)",
      "(c) 0.25 moles of steam (H2O) (d) 1.05 moles copper sulphate pentahydrte CuSO4.5H2",
      "(e) 0.15 moles of sulphuric acid (H2SO4)",
      "Ans. (a) Moles of potassium (K) = 1.2 moles",
      "Molar mass of potassium (K) = 39 g/mol",
      "Using the formula, Mass = Moles x Molar mass",
      "= 1.2 moles x 39 g/mol",
      "= 46.8 g potassium (K)",
      "(b) Moles of hydrogen (H2) = 75 moles",
      "Molar mass of hydrogen (H2) = 2 g/mol",
      "Using the formula, Mass = Moles x Molar mass",
      "= 75 moles x 2 g/mol",
      "= 150 g hydrogen (H2)",
      "(c) Moles of steam (H2O) = 0.25 moles",
      "Molar mass of steam (H2O) = 18 g/mol",
      "Using the formula, Mass = Moles x Molar mass",
      "= 0.25 moles x 18 g/mol",
      "= 4.5 g steam (H2O)",
      "(d) Moles of copper sulphate pentahydrate (CuSO4.5H2O) = 1.05 moles",
      "Molar mass of copper sulphate pentahydrate (CuSO4.5H2O) = 249.5 g/mol",
      "Using the formula, Mass = Moles x Molar mass",
      "= 1.05 moles x 249.5 g/mol",
      "= 261.96 g copper sulphate pentahydrate (CuSO4.5H2O)",
      "(e) Moles of sulphuric acid (H2SO4) = 0.15 moles",
      "Molar mass of sulphuric acid (H2SO4)",
      "Using the formula, Mass = Moles x Molar mass",
      "= 0.15 moles x 98 g/mol",
      "= 14.7 g sulphuric acid (H2SO4",
    ],
  },
  {
    number: 8,
    question: "Calculate the number of molecules in each of the following samples.",
    paragraphs: [
      "(a) 2.5 moles of carbondioxide (CO2) (b) 3.4 moles of ammonia (NH3)",
      "(c) 1.09 moles benzene (C6H6) (d) 0.01 moles acetic acid (CH3COOH)",
      "Ans. (a) Moles of carbondioxide (CO2) = 2.5 moles",
      "Using the formula, Number of molecules = Moles x Avogadro’s number",
      "= 2.5 moles x 6.022 x 1023",
      "= 1.5055 X 1024 Molecules of carbondioxide (CO2)",
      "(b) Moles of ammonia (NH3) = 3.4 moles",
      "Using the formula, Number of Molecules = Moles x Avogadro’s number",
      "= 3.4 moles x 6.022 x 1023",
      "= 2.05 x 1024 molecules of ammonia (NH3)",
      "(c) Moles of benzene (C6H6) = 1.09 moles benzene",
      "Using the formula, Number of Molecules = Moles x Avogadro’s number",
      "= 1.09 moles x 6.022 x 1023",
      "= 6.56 x 1023 molecules of benzene (C6H6)",
      "(d) Moles of acetic acid (CH3COOH) = 0.01 moles",
      "Using the formula, Number of Molecules = Moles x Avogadro’s number",
      "= 0.01 moles x 6.022 x 1023",
      "= 6.02 x 1021 molecules of acetic acid (CH3COOH)",
    ],
  },
  {
    number: 9,
    question: "Decide whether or not each of the following is an example of empirical formula?",
    paragraphs: [
      "(a) Al2CL6 (b) Hg2Cl2 (c) NaCl (d) C2H6O",
      "Ans. (a) Al2Cl6 is not an empirical formula because the ratio between aluminium (Al) and chlorine",
      "(Cl) is 2:6 and it can be simplified to 1:3. So its empirical formula becomes AlCl3.",
      "(b) Hg2Cl2 is not an empirical formula because the ratio between mercury (Hg) and chlorine (Cl)",
      "is 2:2 and it can be simplified to 1:1. So the empirical formula becomes HgCl.",
      "(c) NaCl is empirical formula of sodium chloride because the ratio between sodium ion (Na1+) and chloride (Cl1-) is 1:1 and this ratio cannot be simplified anymore.",
      "(d) C2H6O is the empirical formula of ethyl alcohol because the ratio between carbon, hydrogen and oxygen is2:6:1 and it cannot be simplified anymore.",
    ],
  },
  {
    number: 10,
    question: "TNT (trinitrotoluene) is an explosive compound used in bombs. It contains 7 carbon atoms, 5 hydrogen atoms, 3 nitrogen atoms and 6 oxygen atoms. Write its empirical formula.",
    paragraphs: [
      "Ans. The molecular formula of TNT (trinitrotoluene) is C7H5N3O6. This is empirical formula also because the ratio between carbon, hydrogen, nitrogen and oxygen is 7:5:3:6 and it cannot be simplified anymore. Therefore, this is both molecular and empirical formula of TNT.",
    ],
  },
  {
    number: 11,
    question: "A molecule contains 4 phosphorous atoms and 10 oxygen atoms. Write the empirical formula of this compound. Also determine the molar mass of this compound.",
    paragraphs: [
      "Ans The molecular formula of this compound is P4O10. Molar mass is equal to the molecular mass shown in grams which is 284 g (31 amu x 4 + 16 amu x10 = 284 amu).",
      "The ratio between phosphorous and oxygen is 4:10 and it can be simplified to 2:5. So the empirical formula of this compound is P2O5.",
    ],
  },
  {
    number: 12,
    question: "Indigo (C16H10N2O2), the dye used to colour blue jeans is derived from a compound known as indoxyl (C8H7ON). Calculate the molar masses of these compounds. Also write their empirical formulas.",
    paragraphs: [
      "Ans. Molecular formula of indigo is C16H10N2O2",
      "Molar mass of indigo is equal to it molecular mass shown in gram. It is calculate as follows.",
      "16 (12amu) + 10 (1amu) + 2 (14amu) + 2 (16amu) = 262 amu",
      "\\= 262 g",
      "Empirical formula = C8H5NO",
      "Molecular formula of indoxyl is C8H7ON",
      "Molar mass of indoxyl is equal to its molecular mass shown in gram. It is calculated as follows.",
      "8 (12amu) + 7 (1amu) + 14amun + 16 amu = 96amu + 7amu + 16 amu + 14amu = 133 amu",
      "= 133 g",
    ],
  },
  {
    number: 13,
    question: "Identify the substance that has formula mass 133 amu.",
    paragraphs: [
      "(a) MgCl2 (b) S2Cl2 (c) BCl3 (d) AlCl3",
      "Ans. AlCl3 has formula mass 133 amu. It is calculated as follows.",
      "27 amu + 3 (35.5 amu) = 133.5 amu.",
      "Remember that the atomic masses of atoms will be given to you. You have just to sum up atomic masses of all elements present in the given formulas.",
    ],
  },
  {
    number: 14,
    question: "Calculate the number of atoms in each of the following samples.",
    paragraphs: [
      "(a) 3.4 moles of nitrogen atoms (N) (b) 23 g sodium (Na) (c) 5 g hydrogen atoms (H)",
      "Ans. (a) Moles of nitrogen atoms (N)",
      "Using the formula, Number of atoms = Moles x Avogadro’s number",
      "= 3.4 moles x 6.022 x 1023",
      "= 2.05 x 1024 atoms of nitrogen (N)",
      "(b) Mass of sodium atoms (Na) = 23 g",
      "First of all you have to convert mass to moles by the following formula.",
      "Moles = Mass / Molar mass [Molar mass of sodium (Na) = 23 g.mol-1]",
      "= 23 g / 23 g.mol-1 = 1 mole",
      "Using the formula, Number of atom = Moles x Avogadro’s number",
      "= 1 mole x 6.022 x 1023",
      "= 6.022 x 1023 sodium atoms (Na)",
      "(c) Mass of hydrogen atoms (H) = 5 g",
      "First convert mass to moles by the following formula.",
      "Moles = Mass / Molar mass [Molar mass of atomic hydrogen(H) = 1 g/mol)]",
      "= 5 g/ 1 g.mol-1",
      "= 5 moles hydrogen atoms (H)",
      "Using the formula Number of atoms = Moles x Avogadro’s number",
      "= 5 mole x 6.022 x 1023",
      "= 3.01 x 1024 hydrogen atoms (H)",
    ],
  },
  {
    number: 15,
    question: "Calculate masses of the following.",
    paragraphs: [
      "(a) 3.24 x 1018 atoms of iron (Fe) (b) 2 x 1010 molecules of nitrogen gas (N2)",
      "(c) 1 x 1025 molecules of water (H2O) (d) 3 x 106 atoms of aluminium (Al)",
      "Ans. (a) Number of atoms of iron (Fe) = 3.24 x1018",
      "Molar mass of iron (Fe) = 56 g/mol",
      "Using the formula, Mass =",
      "Mass = = 3.01 x 10-4 g",
      "(b) Number of molecules of nitrogen gas (N2) = 2 x 1010",
      "Molar mass of nitrogen gas (N2) = 28 g/mol",
      "Using the formula, Mass =",
      "Mass = = 9.3 x 10-4 g",
      "(c) Number of molecules of water (H2O) = 1 x 1025",
      "Molar mass of water = 18 g/mol",
      "Using formula, Mass =",
      "Mass = = 2.99 x 102 g",
      "(d) Number of atoms of aluminium (Al) = 3 x 106",
      "Molar mass of aluminium (Al) = 27 g/mol",
      "Using the formula, Mass =",
      "= = 1.345 x 10-16 g",
    ],
  },
  {
    number: 16,
    question: "Identify the branch of chemistry that deals with the following examples.",
    paragraphs: [
      "1. A cornstalk grows from a seed. (Biochemistry)",
      "2. Dynamite (C3H5N3O9) explodes to form a mixture of gases. (Inorganic chemistry)",
      "3. Purple iodine vapour appears when solid iodine is warmed. (Physical chemistry)",
      "4. Gasoline (mixture of hydrocarbons) fumes are ignited in an automobile engine. (Organic chemistry)",
      "5. A silver article tarnishes in air. (Inorganics chemistry)",
      "6. Ice floats on water. (Physical chemistry)",
      "7. Sulphur dioxide (SO2) is the major source of acid rain. (Environmental chemistry)",
      "8. Many other light chlorinated hydrocarbons in drinking water are carcinogens. (Environmental chemistry)",
      "9. In Pakistan most of the factories use wet process for the production of cement. (Industrial chemistry)",
      "10. Carbon-14 is continuously produced in the atmosphere when high energy neutrons from space collide nitrogen-14. (Nuclear chemistry)",
    ],
  },
  {
    number: 1,
    question: "What mass of sodium metal contains the same number of atoms as 12.00 of carbon?",
    paragraphs: [
      "Ans. This question has two parts.",
      "(i) First you have to calculate number of atoms in 12 g carbon. As 12 g is the molar mass of carbon so it contains 6.022 x 1023 atoms.",
      "(ii) Then calculate the mass of sodium containing 6.022 x 1023 atoms. Molar mass of sodium is 23 g so 23 g sodium contains same number of atoms as 12.00 g carbon.",
    ],
  },
  {
    number: 2,
    question: "What mass of oxygen (O2) contains same number of molecules as 42 g of nitrogen gas (N2)?",
    paragraphs: [
      "Ans. This question has two parts.",
      "(i) First you have to calculate number of molecules contained in 42 g nitrogen gas (N2).",
      "Molar mass of nitrogen gas (N2) = 28 g",
      "Convert mass to moles by the following formula.",
      "Moles = = 42 g / 28 g = 1.5 moles nitrogen gas (N2)",
      "Now calculate number of molecules in 1.5 moles nitrogen gas (N2) by the following formula.",
      "Number of molecules = Moles x Avogadro’s number",
      "= 1.5 moles x 6.022 x 1023",
      "= 9.03 x 1023 molecules",
      "(ii) Now calculate mass of 9.03 x 1023 molecules of oxygen gas by the following.",
      "Mass = Number of molecules x",
      "Mass = 9.03 x 1023 = 48 g",
    ],
  },
  {
    number: 3,
    question: "Calculate the mass of one hydrogen atom (H) in grams.",
    paragraphs: [
      "Ans. Molar mass of hydrogen atom (H) = 1.008 g",
      "Use the following formula,",
      "Mass = Number of atoms x",
      "= 1 x = 1.674 x 10-23 g",
    ],
  },
  {
    number: 4,
    question: "Observe the given figure. It shows particles in a sample of air.",
    paragraphs: [
      "(a) Count the substances shown in the sample.",
      "(b) Is air a mixture or pure substance? Explain.",
      "(c) Identify the formula of each substance in air.",
      "(d) Argue whether each substance in air is an",
      "element or a compound.",
      "(e) What is the most common substance in air?",
      "Ans. (a) There are five substances in the sample (air). i.e water vapours (H2O) , argon (Ar), nitrogen",
      "gas (N2), oxygen gas (O2) and carbondioxide gas (CO2).",
      "(b) Air is a mixture, not a pure substance. A pure substance consists of one type of particles. However, air consists of five substances as shown.",
      "(c) The formula of water vapours is H2O, nitrogen gas is N2, oxygen gas is O2, argon gas is Ar and carbondioxide gas is CO2.",
      "(d) Air has three elements i.e nitrogen gas (N2) , oxygen gas (O2) and argon gas (Ar). Air has two compounds i.e carbondioxide gas (CO2) and water vapours (H2O). Remember that the molecules of elements have same type of atoms whereas molecules of compounds have different type of atoms.",
      "(e) The most common substance in the air is nitrogen gas (N2) because it is found in abundant (78%).",
    ],
  },
  {
    number: 5,
    question: "Calculate number of hydrogen atoms present in 18 g water.",
    paragraphs: [
      "Ans. Mass of water (H2O) = 18 g",
      "Molar mass of water = 18 g / mol",
      "Number of hydrogen atoms in one molecule of water (H2O) = 2",
      "First convert mass to moles by the following formula.",
      "Moles = Mass / Molar mass",
      "Moles = 18 g / 18 g.mol-1 = 1 mole water",
      "Use the following formula to calculate number of hydrogen atoms in 1 mole (18 g) water.",
      "Number of atoms = Moles x Number of atoms in on molecule x Avogadro’s number",
      "= 1 mole x 2 x 6.022 x 1023",
      "= 1.204 x 1024 hydrogen atoms (H) in 18 g (1 mole) water.",
    ],
  },
  {
    number: 6,
    question: "Calculate the total number of atoms present in 18 g water.",
    paragraphs: [
      "Ans. Mass of water (H2O) = 18 g",
      "Molar mass of water = 18 g / mol",
      "Total number of atoms in one molecule of water (H2O) = 3",
      "First convert mass to moles by the following formula.",
      "Moles = Mass / Molar mass",
      "Moles = 18 g / 18 g.mol-1 = 1 mole water",
      "Use the following formula to calculate total number of atoms in 1 mole (18 g) water.",
      "Total number of atoms = Moles x Number of atoms in on molecule x Avogadro’s number",
      "= 1 mole x 3 x 6.022 x 1023",
      "= 1.806 x 1024 atoms in 18 g (1 mole) water",
    ],
  },
];

/* =========================================================
   SCIENTIFIC / CHEMISTRY TEXT RENDERER
   ========================================================= */

const chemicalToken =
  /\b(?:H2SO4|H2O2|H2O|D2O|CO2|SO2|SO3|NO2|NH3|NH4NO3|NaHCO3|NaCl|CaCl2|CaO|KClO3|BaSO4|CH4|CH2O|CH3COOH|C2H5OH|C3H5N3O9|C6H6|C6H12O6|C8H10N4O2|C9H8O4|C12H22O11|HNO3|HCl|H2S|N2|O2|O3|Cl2|S8|PbS|MgO|Fe3O4|ZnSO4|FeSO4|AgCl|AgBr|Ba\(OH\)2|NH4Cl|NH4OH|CuSO4|CuCl2|PbCl2|Na2SO4|\(NH2\)2CO)\b/g;

function Formula({ formula }: { formula: string }) {
  const parts: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < formula.length) {
    const ch = formula[i];

    if (/\d/.test(ch)) {
      let digits = ch;
      i += 1;
      while (i < formula.length && /\d/.test(formula[i])) {
        digits += formula[i];
        i += 1;
      }
      parts.push(<sub key={key++}>{digits}</sub>);
      continue;
    }

    parts.push(<span key={key++}>{ch}</span>);
    i += 1;
  }

  return <span className="whitespace-nowrap font-medium">{parts}</span>;
}

function SupNumber({ base, exponent }: { base: string; exponent: string }) {
  return (
    <span className="whitespace-nowrap font-medium">
      {base}
      <sup>{exponent}</sup>
    </span>
  );
}

function ScientificText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let rest = text;
  let key = 0;

  const tokenRegex =
    /(6\.022\s*x\s*10(?:23|22|30)|\d+(?:\.\d+)?\s*x\s*10(?:23|22|30|-34)|2n2|(?:Ca|Mg|Al|Na|K|Cl|O|S|F)(?:1-|2-|1\+|2\+|3\+)|H2SO4|H2O2|H2O|D2O|CO2|SO2|SO3|NO2|NH3|NH4NO3|NaHCO3|NaCl|CaCl2|CaO|KClO3|BaSO4|CH4|CH2O|CH3COOH|C2H5OH|C3H5N3O9|C6H6|C6H12O6|C8H10N4O2|C9H8O4|C12H22O11|HNO3|HCl|H2S|N2|O2|O3|Cl2|S8|PbS|MgO|Fe3O4|ZnSO4|FeSO4|AgCl|AgBr|Ba\(OH\)2|NH4Cl|NH4OH|CuSO4|CuCl2|PbCl2|Na2SO4|\(NH2\)2CO)/g;

  let match: RegExpExecArray | null;
  let last = 0;

  while ((match = tokenRegex.exec(rest)) !== null) {
    if (match.index > last) {
      nodes.push(<span key={key++}>{rest.slice(last, match.index)}</span>);
    }

    const token = match[0];

    if (/10(?:23|22|30|-34)$/.test(token.replace(/\s/g, ''))) {
      const m = token.match(/^(.*?10)(-?\d+)$/);
      if (m) {
        nodes.push(<SupNumber key={key++} base={m[1]} exponent={m[2]} />);
      } else {
        nodes.push(<span key={key++}>{token}</span>);
      }
    } else if (token === '2n2') {
      nodes.push(
        <span key={key++} className="font-medium">
          2n<sup>2</sup>
        </span>,
      );
    } else if (/^(?:Ca|Mg|Al|Na|K|Cl|O|S|F)(?:1-|2-|1\+|2\+|3\+)$/.test(token)) {
      const charge = token.match(/(1-|2-|1\+|2\+|3\+)$/)?.[1] ?? '';
      const symbol = token.slice(0, token.length - charge.length);
      nodes.push(
        <span key={key++} className="whitespace-nowrap font-medium">
          {symbol}
          <sup>{charge}</sup>
        </span>,
      );
    } else {
      nodes.push(<Formula key={key++} formula={token} />);
    }

    last = tokenRegex.lastIndex;
  }

  if (last < rest.length) {
    nodes.push(<span key={key++}>{rest.slice(last)}</span>);
  }

  return <>{nodes}</>;
}

function Equation({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 overflow-x-auto rounded-lg bg-brand-50/40 px-4 py-3 text-center font-medium">
      {children}
    </div>
  );
}

function AnswerBlock({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 space-y-4 leading-7">
      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
        Answer
      </div>
      {children}
    </div>
  );
}

function StructuredParagraph({ text }: { text: string }) {
  const cleaned = text
    .replace(/^Ans\.\s*/i, '')
    .replace(/^Answer\.\s*/i, '')
    .trim();

  const roman = cleaned.match(/^(i{1,3}|iv|v|vi{0,3}|ix|x)\.\s+(.*)$/i);
  if (roman) {
    return (
      <div className="grid grid-cols-[2rem_1fr] gap-2">
        <strong>{roman[1].toLowerCase()}.</strong>
        <p><ScientificText text={roman[2]} /></p>
      </div>
    );
  }

  const alpha = cleaned.match(/^\(([a-z])\)\s+(.*)$/i);
  if (alpha) {
    return (
      <div className="grid grid-cols-[2rem_1fr] gap-2">
        <strong>({alpha[1].toLowerCase()})</strong>
        <p><ScientificText text={alpha[2]} /></p>
      </div>
    );
  }

  return <p><ScientificText text={cleaned} /></p>;
}

/* =========================================================
   PROFESSIONAL DIAGRAMS
   ========================================================= */

function MatterClassificationDiagram() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="mb-4 text-sm font-semibold">Classification of matter</div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-brand-50/40 p-4 text-center">
          <div className="font-semibold">Matter</div>
          <div className="mt-2 text-sm">occupies space and has weight</div>
        </div>
        <div className="rounded-lg bg-brand-50/40 p-4">
          <div className="font-semibold">Pure substances</div>
          <div className="mt-2 text-sm">Elements · Compounds</div>
        </div>
        <div className="rounded-lg bg-brand-50/40 p-4">
          <div className="font-semibold">Mixtures</div>
          <div className="mt-2 text-sm">Homogeneous · Heterogeneous</div>
        </div>
      </div>
    </div>
  );
}

function ParticleDiagram() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="mb-4 text-sm font-semibold">Particles of elements, compounds and mixtures</div>
      <svg viewBox="0 0 900 280" className="h-auto w-full" role="img" aria-label="Particle diagrams of element, compound and mixture">
        <g transform="translate(20,20)">
          <rect width="250" height="220" rx="16" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="125" y="28" textAnchor="middle" fontSize="16" fontWeight="600">Element</text>
          {[[55,75],[125,75],[195,75],[55,145],[125,145],[195,145]].map(([x,y], i) => (
            <circle key={i} cx={x} cy={y} r="16" fill="none" stroke="currentColor" strokeWidth="3" />
          ))}
        </g>
        <g transform="translate(325,20)">
          <rect width="250" height="220" rx="16" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="125" y="28" textAnchor="middle" fontSize="16" fontWeight="600">Compound</text>
          {[[55,85],[135,85],[55,155],[135,155]].map(([x,y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="15" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle cx={x+28} cy={y} r="11" fill="none" stroke="currentColor" strokeWidth="3" />
              <line x1={x+15} y1={y} x2={x+17} y2={y} stroke="currentColor" strokeWidth="3" />
            </g>
          ))}
        </g>
        <g transform="translate(630,20)">
          <rect width="250" height="220" rx="16" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="125" y="28" textAnchor="middle" fontSize="16" fontWeight="600">Mixture</text>
          <circle cx="55" cy="80" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="130" cy="70" r="11" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="158" cy="70" r="11" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="70" cy="155" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="145" cy="150" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="173" cy="150" r="11" fill="none" stroke="currentColor" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function IonFormationDiagram() {
  return (
    <div className="my-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-line bg-paper p-5">
        <div className="font-semibold">Cation formation</div>
        <Equation>
          Na → Na<sup>+</sup> + e<sup>−</sup>
        </Equation>
        <p className="text-sm">Loss of electron produces a positive ion.</p>
      </div>
      <div className="rounded-xl border border-line bg-paper p-5">
        <div className="font-semibold">Anion formation</div>
        <Equation>
          Cl + e<sup>−</sup> → Cl<sup>−</sup>
        </Equation>
        <p className="text-sm">Gain of electron produces a negative ion.</p>
      </div>
    </div>
  );
}

function MoleConceptDiagram() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="mb-4 text-sm font-semibold">Mole concept</div>
      <div className="grid gap-3 text-center md:grid-cols-3">
        <div className="rounded-lg bg-brand-50/40 p-4">
          <div className="text-xl font-semibold">1 mole</div>
          <div className="mt-1 text-sm">amount of substance</div>
        </div>
        <div className="rounded-lg bg-brand-50/40 p-4">
          <div className="text-xl font-semibold">6.022 × 10<sup>23</sup></div>
          <div className="mt-1 text-sm">representative particles</div>
        </div>
        <div className="rounded-lg bg-brand-50/40 p-4">
          <div className="text-xl font-semibold">molar mass</div>
          <div className="mt-1 text-sm">mass of one mole</div>
        </div>
      </div>
    </div>
  );
}

function FormulaRelationshipDiagram() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="mb-4 text-sm font-semibold">Chemical formula relationships</div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-brand-50/40 p-4">
          <div className="font-semibold">Chemical formula</div>
          <div className="mt-2 text-sm">symbolic representation of composition</div>
        </div>
        <div className="rounded-lg bg-brand-50/40 p-4">
          <div className="font-semibold">Molecular formula</div>
          <div className="mt-2 text-sm">actual whole-number ratio</div>
        </div>
        <div className="rounded-lg bg-brand-50/40 p-4">
          <div className="font-semibold">Empirical formula</div>
          <div className="mt-2 text-sm">simplest whole-number ratio</div>
        </div>
      </div>
    </div>
  );
}

function ArchimedesDiagram() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="mb-4 text-sm font-semibold">Archimedes’ displacement idea</div>
      <svg viewBox="0 0 760 260" className="h-auto w-full" role="img" aria-label="Archimedes water displacement concept">
        <rect x="80" y="65" width="210" height="140" rx="12" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M80 125 H290" stroke="currentColor" strokeWidth="3" />
        <circle cx="185" cy="150" r="35" fill="none" stroke="currentColor" strokeWidth="3" />
        <text x="185" y="156" textAnchor="middle" fontSize="16">gold</text>
        <path d="M310 100 C340 95, 355 105, 375 120" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M310 120 C340 115, 355 125, 375 140" fill="none" stroke="currentColor" strokeWidth="3" />
        <text x="450" y="115" fontSize="17" fontWeight="600">displaced water</text>
        <text x="450" y="145" fontSize="15">compared for crown and pure gold</text>
      </svg>
    </div>
  );
}

function QuestionDiagram({ number }: { number: number }) {
  if (number === 7) return <ArchimedesDiagram />;
  if ([12, 13, 14, 17, 18, 19, 20].includes(number)) return <MatterClassificationDiagram />;
  if ([29, 30, 31, 32].includes(number)) return <FormulaRelationshipDiagram />;
  if ([38, 39, 40, 41, 42, 43, 44].includes(number)) return <IonFormationDiagram />;
  if ([45, 46, 47, 48].includes(number)) return <ParticleDiagram />;
  if ([51, 52, 53, 54, 55, 56].includes(number)) return <MoleConceptDiagram />;
  return null;
}

/* =========================================================
   PROFESSIONAL TABLES FOR IMPORTANT COMPARISONS
   ========================================================= */

function ComparisonTable({ number }: { number: number }) {
  if (number === 20) {
    return (
      <div className="my-6 overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-line p-3 text-left">Compound</th>
              <th className="border border-line p-3 text-left">Mixture</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-line p-3">Elements combine in a fixed ratio by chemical bond.</td>
              <td className="border border-line p-3">Substances combine in indefinite ratio.</td>
            </tr>
            <tr>
              <td className="border border-line p-3">Components cannot be separated by physical means.</td>
              <td className="border border-line p-3">Components can be separated by physical means.</td>
            </tr>
            <tr>
              <td className="border border-line p-3">Properties differ from constituent elements.</td>
              <td className="border border-line p-3">Properties remain similar to components.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (number === 44) {
    return (
      <div className="my-6 overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-line p-3 text-left">Free radical</th>
              <th className="border border-line p-3 text-left">Ion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-line p-3">Has an unpaired electron.</td>
              <td className="border border-line p-3">Has no unpaired electron.</td>
            </tr>
            <tr>
              <td className="border border-line p-3">Carries no electrical charge.</td>
              <td className="border border-line p-3">Carries electrical charge.</td>
            </tr>
            <tr>
              <td className="border border-line p-3">Generally has odd number of electrons.</td>
              <td className="border border-line p-3">Generally has even number of electrons.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (number === 56) {
    return (
      <div className="my-6 overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-line p-3 text-left">Gram atomic mass</th>
              <th className="border border-line p-3 text-left">Gram molecular mass</th>
              <th className="border border-line p-3 text-left">Gram formula mass</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-line p-3">Represents one mole of atoms of elements.</td>
              <td className="border border-line p-3">Represents one mole of molecules.</td>
              <td className="border border-line p-3">Represents one mole of formula units.</td>
            </tr>
            <tr>
              <td className="border border-line p-3">Contains 6.022 × 10²³ atoms.</td>
              <td className="border border-line p-3">Contains 6.022 × 10²³ molecules.</td>
              <td className="border border-line p-3">Contains 6.022 × 10²³ formula units.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}

function QuestionCard({ item }: { item: UnitQuestion }) {
  return (
    <article className="card p-5 sm:p-7">
      <div className="flex items-start gap-3">
        <span className="shrink-0 pt-1 text-sm font-semibold text-brand-700">
          Q{item.number}.
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold leading-7 sm:text-xl">
            <ScientificText text={item.question} />
          </h2>

          <AnswerBlock>
            {item.paragraphs.map((paragraph, index) => (
              <StructuredParagraph key={index} text={paragraph} />
            ))}
          </AnswerBlock>

          <ComparisonTable number={item.number} />
          <QuestionDiagram number={item.number} />
        </div>
      </div>
    </article>
  );
}

export default function UnitOnePage() {
  return (
    <div className="container-wide py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Fundamentals', href: '/fundamentals' },
          { label: 'Basic Concepts of Chemistry' },
        ]}
      />

      <section className="page-heading-box mt-6">
        <span className="eyebrow mb-2">Fundamentals · Unit 01</span>
        <h1>Basic Concepts of Chemistry</h1>
        <p className="mt-3 max-w-3xl leading-relaxed">
          Matter, branches of chemistry, atoms, elements, compounds, mixtures, chemical formulas,
          ions, molecules, mole concept and quantitative foundations of Chemistry.
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <a href="#short-questions" className="card-hover group p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <ListChecks className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-semibold">Short Questions</h2>
              <p className="mt-2 leading-7">
                Definitions, examples, short explanations and core chemistry terminology.
              </p>
            </div>
          </div>
        </a>

        <a href="#long-questions" className="card-hover group p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <BookOpenText className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-semibold">Long Questions</h2>
              <p className="mt-2 leading-7">
                Detailed concepts, comparisons, diagrams, formulas and numerical reasoning.
              </p>
            </div>
          </div>
        </a>
      </section>

      <section id="short-questions" className="mt-14 scroll-mt-28">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
            <ListChecks className="h-5 w-5" />
          </span>
          <div>
            <span className="eyebrow">Section 01</span>
            <h2 className="text-2xl font-semibold sm:text-3xl">Short Questions</h2>
          </div>
        </div>

        <div className="space-y-6">
          {shortQuestions.map((item, index) => (
            <QuestionCard key={`short-${item.number}-${index}`} item={item} />
          ))}
        </div>
      </section>

      <section id="long-questions" className="mt-16 scroll-mt-28">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
            <BookOpenText className="h-5 w-5" />
          </span>
          <div>
            <span className="eyebrow">Section 02</span>
            <h2 className="text-2xl font-semibold sm:text-3xl">Long Questions</h2>
          </div>
        </div>

        <div className="space-y-7">
          {longQuestions.map((item, index) => (
            <QuestionCard key={`long-${item.number}-${index}`} item={item} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
            <FlaskConical className="h-5 w-5" />
          </span>
          <div>
            <span className="eyebrow">Section 03</span>
            <h2 className="text-2xl font-semibold sm:text-3xl">Exercise & Practice</h2>
          </div>
        </div>

        <div className="space-y-7">
          {exerciseQuestions.map((item, index) => (
            <QuestionCard key={`exercise-${item.number}-${index}`} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
