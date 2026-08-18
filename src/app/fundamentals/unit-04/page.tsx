import type { ReactNode } from 'react';
import {
  Atom,
  BookOpenText,
  CircleDot,
  FlaskConical,
  Layers3,
  Link2,
  ListChecks,
  Network,
  Orbit,
  Sparkles,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Chemical Bonding',
};

type Question = {
  number: string | number;
  question: ReactNode;
  answer: ReactNode;
  tag?: string;
};

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

function QuestionCard({ item }: { item: Question }) {
  return (
    <article className="card p-5 sm:p-7">
      <div className="flex items-start gap-3">
        <span className="shrink-0 pt-1 text-sm font-semibold text-brand-700">
          Q{item.number}.
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold leading-7 sm:text-xl">
            {item.question}
          </h2>
          {item.tag && (
            <span className="mt-2 inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
              {item.tag}
            </span>
          )}
          <AnswerBlock>{item.answer}</AnswerBlock>
        </div>
      </div>
    </article>
  );
}

function PointList({
  items,
  type = 'roman',
}: {
  items: ReactNode[];
  type?: 'roman' | 'alpha' | 'number';
}) {
  const roman = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii'];
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-[2rem_1fr] gap-2">
          <strong>
            {type === 'alpha'
              ? `(${alpha[index]})`
              : type === 'number'
                ? `${index + 1}.`
                : `${roman[index]}.`}
          </strong>
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
}

function EC({ value }: { value: string }) {
  const tokens = value.split(/\s+/);

  return (
    <span className="inline-flex flex-wrap gap-x-1.5 gap-y-1 font-medium">
      {tokens.map((token, i) => {
        const m = token.match(/^(\d+[spdf])(\d+)$/i);
        if (!m) return <span key={`${token}-${i}`}>{token}</span>;

        return (
          <span key={`${token}-${i}`} className="whitespace-nowrap">
            {m[1]}
            <sup>{m[2]}</sup>
          </span>
        );
      })}
    </span>
  );
}

function Equation({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 overflow-x-auto rounded-lg bg-brand-50/40 px-4 py-3 text-center font-medium">
      {children}
    </div>
  );
}

function LewisSymbol({
  symbol,
  dots,
  charge,
}: {
  symbol: string;
  dots: number;
  charge?: string;
}) {
  const positions = [
    'left-1/2 top-0 -translate-x-1/2',
    'right-0 top-1/2 -translate-y-1/2',
    'left-1/2 bottom-0 -translate-x-1/2',
    'left-0 top-1/2 -translate-y-1/2',
    'left-[28%] top-[8%]',
    'right-[28%] top-[8%]',
    'right-[28%] bottom-[8%]',
    'left-[28%] bottom-[8%]',
  ];

  return (
    <div className="relative mx-auto h-24 w-24">
      <div className="absolute inset-4 flex items-center justify-center rounded-full border border-line bg-paper text-2xl font-semibold">
        {symbol}
        {charge && <sup className="ml-0.5 text-sm">{charge}</sup>}
      </div>
      {Array.from({ length: dots }).map((_, i) => (
        <span
          key={i}
          className={`absolute h-2 w-2 rounded-full bg-brand-700 ${positions[i]}`}
        />
      ))}
    </div>
  );
}

function ElectronTransferDiagram({
  metal,
  nonMetal,
  metalDots,
  nonMetalDots,
  metalCharge,
  nonMetalCharge,
  product,
}: {
  metal: string;
  nonMetal: string;
  metalDots: number;
  nonMetalDots: number;
  metalCharge: string;
  nonMetalCharge: string;
  product: string;
}) {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <div>
          <LewisSymbol symbol={metal} dots={metalDots} />
          <p className="mt-2 text-center text-sm">{metal} atom</p>
        </div>
        <div className="text-center text-2xl font-semibold text-brand-700">→</div>
        <div>
          <LewisSymbol symbol={nonMetal} dots={nonMetalDots} />
          <p className="mt-2 text-center text-sm">{nonMetal} atom</p>
        </div>
        <div className="text-center text-2xl font-semibold text-brand-700">→</div>
        <div className="rounded-xl bg-brand-50/40 p-4 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="font-semibold">
              {metal}<sup>{metalCharge}</sup>
            </span>
            <span>+</span>
            <span className="font-semibold">
              {nonMetal}<sup>{nonMetalCharge}</sup>
            </span>
          </div>
          <div className="mt-2 text-sm font-medium">{product}</div>
        </div>
      </div>
    </div>
  );
}

function BondDiagram({
  formula,
  structure,
  note,
}: {
  formula: string;
  structure: ReactNode;
  note?: string;
}) {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="text-sm font-semibold text-brand-700">{formula}</div>
      <div className="mt-4 flex min-h-28 items-center justify-center text-2xl font-semibold">
        {structure}
      </div>
      {note && <p className="mt-3 text-center text-sm text-ink-muted">{note}</p>}
    </div>
  );
}

function MoleculeGrid() {
  const molecules = [
    ['H₂', 'H—H', 'single bond'],
    ['F₂', 'F—F', 'single bond'],
    ['O₂', 'O=O', 'double bond'],
    ['N₂', 'N≡N', 'triple bond'],
    ['CO₂', 'O=C=O', 'two double bonds'],
    ['HCN', 'H—C≡N', 'single + triple bond'],
  ];

  return (
    <div className="my-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {molecules.map(([f, s, n]) => (
        <div key={f} className="rounded-xl border border-line bg-paper p-5 text-center">
          <div className="text-sm font-semibold text-brand-700">{f}</div>
          <div className="mt-4 text-2xl font-semibold">{s}</div>
          <div className="mt-2 text-sm text-ink-muted">{n}</div>
        </div>
      ))}
    </div>
  );
}

function WaterDotCross() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="text-center text-sm font-semibold text-brand-700">Electron dot-cross representation of H₂O</div>
      <div className="mt-6 flex items-center justify-center gap-8 text-2xl font-semibold">
        <span>H</span>
        <span className="text-brand-700">•×</span>
        <span className="relative">
          O
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-sm">••</span>
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm">••</span>
        </span>
        <span className="text-brand-700">×•</span>
        <span>H</span>
      </div>
      <p className="mt-8 text-center text-sm text-ink-muted">Oxygen forms two covalent bonds and keeps two lone pairs.</p>
    </div>
  );
}

function IntermolecularDiagram() {
  return (
    <div className="my-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-line bg-paper p-5">
        <div className="font-semibold">Dipole–dipole interaction</div>
        <div className="mt-6 text-center text-xl">
          H<sup>δ+</sup>—Cl<sup>δ−</sup>
          <span className="mx-3 text-brand-700">···</span>
          H<sup>δ+</sup>—Cl<sup>δ−</sup>
        </div>
      </div>
      <div className="rounded-xl border border-line bg-paper p-5">
        <div className="font-semibold">Hydrogen bonding</div>
        <div className="mt-6 text-center text-xl">
          O—H<sup>δ+</sup>
          <span className="mx-3 text-brand-700">···</span>
          O:
        </div>
      </div>
    </div>
  );
}

function CrystalDiagram({ type }: { type: 'NaCl' | 'CsCl' }) {
  if (type === 'NaCl') {
    return (
      <div className="my-6 rounded-xl border border-line bg-paper p-5">
        <div className="mb-4 font-semibold">NaCl crystal arrangement</div>
        <div className="grid max-w-md grid-cols-5 gap-2">
          {Array.from({ length: 25 }).map((_, i) => {
            const even = (Math.floor(i / 5) + (i % 5)) % 2 === 0;
            return (
              <div
                key={i}
                className={`flex h-12 items-center justify-center rounded-full border border-line text-xs font-semibold ${
                  even ? 'bg-brand-50 text-brand-700' : 'bg-paper'
                }`}
              >
                {even ? 'Na⁺' : 'Cl⁻'}
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          Each Na⁺ is surrounded by six Cl⁻ ions and each Cl⁻ by six Na⁺ ions.
        </p>
      </div>
    );
  }

  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="mb-4 font-semibold">CsCl body-centered arrangement</div>
      <div className="relative mx-auto h-64 w-64">
        {[
          ['left-2 top-2', 'Cl⁻'],
          ['right-2 top-2', 'Cl⁻'],
          ['left-2 bottom-2', 'Cl⁻'],
          ['right-2 bottom-2', 'Cl⁻'],
          ['left-1/2 top-2 -translate-x-1/2', 'Cl⁻'],
          ['left-1/2 bottom-2 -translate-x-1/2', 'Cl⁻'],
          ['left-2 top-1/2 -translate-y-1/2', 'Cl⁻'],
          ['right-2 top-1/2 -translate-y-1/2', 'Cl⁻'],
        ].map(([pos, label], i) => (
          <div key={i} className={`absolute ${pos} flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-xs font-semibold`}>
            {label}
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-50 font-semibold text-brand-700">
          Cs⁺
        </div>
      </div>
      <p className="mt-4 text-sm text-ink-muted">
        Each Cs⁺ is surrounded by eight Cl⁻ ions and each Cl⁻ by eight Cs⁺ ions.
      </p>
    </div>
  );
}

const shortQuestions: Question[] = [
  {
    number: 1,
    question: 'Define noble gases. Why are they called inert gases? Give examples.',
    answer: (
      <>
        <p>
          Elements having complete outermost s and p sub-shells are called noble gases. Helium is an exception because
          its first shell is complete with two electrons.
        </p>
        <p>
          They are sometimes called inert gases because they generally do not take part in chemical reactions. Examples:
          helium, neon, argon, krypton, xenon and radon.
        </p>
      </>
    ),
  },
  {
    number: 2,
    question: 'Why noble gases do not take part in chemical reactions? Write the electronic configuration of first three noble gases.',
    answer: (
      <>
        <p>Noble gases are stable because their valence shells are complete.</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-brand-50/40 p-4"><strong>Helium:</strong> <EC value="1s2" /></div>
          <div className="rounded-lg bg-brand-50/40 p-4"><strong>Neon:</strong> <EC value="1s2 2s2 2p6" /></div>
          <div className="rounded-lg bg-brand-50/40 p-4"><strong>Argon:</strong> <EC value="1s2 2s2 2p6 3s2 3p6" /></div>
        </div>
      </>
    ),
  },
  {
    number: 3,
    question: 'Why do atoms combine to form compounds?',
    answer: (
      <p>
        Atoms combine to attain the electronic configuration of the nearest noble gas and obtain stability. This
        combination produces different substances around us.
      </p>
    ),
  },
  {
    number: 4,
    question: 'What is Lewis concept about chemical reactions of atoms of elements?',
    answer: (
      <p>
        In 1916, G. N. Lewis explained that noble gases are stable because they have complete duplets or octets.
        Atoms of other elements combine by forming chemical bonds so that they can complete their duplets or octets and
        attain noble-gas-like electronic configurations.
      </p>
    ),
  },
  {
    number: 5,
    question: 'Define duplet rule. Give examples.',
    answer: (
      <p>
        The tendency of atoms to acquire two electrons in the first shell during bond formation is called duplet rule.
        It applies to the K-shell. Helium has a complete duplet.
      </p>
    ),
  },
  {
    number: 7,
    question: 'Define octet rule. Give examples.',
    answer: (
      <p>
        The tendency of atoms to acquire eight electrons in the valence shell during bond formation is called octet rule.
        It applies to shells beyond the first shell. Neon and other noble gases except helium have complete octets.
      </p>
    ),
  },
  {
    number: 9,
    question: 'Define chemical bond. Name the types of chemical bond.',
    answer: (
      <>
        <p>
          The force of attraction which holds atoms together to form substances is called a chemical bond.
        </p>
        <PointList items={[<>Ionic bond</>, <>Covalent bond</>]} />
      </>
    ),
  },
  {
    number: 11,
    question: 'How are cations formed?',
    answer: (
      <p>
        Cations are formed when metal atoms lose electron(s) from their valence shells. The positive charge equals the
        number of electrons lost.
      </p>
    ),
  },
  {
    number: 12,
    question: 'How are anions formed?',
    answer: (
      <p>
        Anions are formed when non-metal atoms gain electron(s) to complete their valence shells. The negative charge
        equals the number of electrons gained.
      </p>
    ),
  },
  {
    number: 14,
    question: 'Define ionic compound. Why ionic compounds are electrically neutral?',
    answer: (
      <p>
        Compounds containing ions joined by electrostatic attraction are called ionic compounds. They are electrically
        neutral because total positive charge equals total negative charge.
      </p>
    ),
  },
  {
    number: 15,
    question: 'Define covalent bond. Give examples.',
    answer: (
      <p>
        A covalent bond is formed by mutual sharing of electrons between non-metal atoms. For example, two hydrogen atoms
        share a pair of electrons in H—H.
      </p>
    ),
  },
  {
    number: 19,
    question: 'Define unshared pair of electrons or lone pair of electrons.',
    answer: (
      <p>
        A pair of valence electrons that is not shared between atoms and does not participate in covalent bond formation
        is called a lone pair or unshared pair.
      </p>
    ),
  },
  {
    number: 21,
    question: 'Define polar covalent bond and non-polar covalent bond. Give examples.',
    answer: (
      <>
        <p>
          A polar covalent bond is formed when different atoms share electrons unequally because of different
          electronegativities. Examples include H₂O, HCl and NH₃.
        </p>
        <p>
          A non-polar covalent bond is formed when the bonded atoms share electrons equally, usually between identical atoms,
          for example H₂, O₂ and N₂.
        </p>
      </>
    ),
  },
  {
    number: 22,
    question: 'Define intermolecular forces. Give examples.',
    answer: (
      <p>
        Intermolecular forces are forces of attraction between molecules of the same or different substances. They are
        weaker than ionic and covalent bonds.
      </p>
    ),
  },
  {
    number: 27,
    question: 'What are epoxy adhesives? Name their types.',
    tag: 'Society, Technology and Science',
    answer: (
      <>
        <p>Epoxy adhesives are substances used to coat, stick or assemble objects together.</p>
        <PointList items={[<>Epoxy resins</>, <>Glues</>]} />
      </>
    ),
  },
  {
    number: 30,
    question: 'Write the properties of ionic compounds.',
    answer: (
      <PointList
        items={[
          <>They are solids at room temperature.</>,
          <>They generally have high melting points because of strong ionic attraction.</>,
          <>They do not conduct electricity in solid state.</>,
          <>They conduct electricity in molten/fused state.</>,
          <>They conduct electricity in aqueous solution.</>,
        ]}
      />
    ),
  },
];

const longQuestions: Question[] = [
  {
    number: 6,
    question: 'Which elements obey duplet rule? Explain with example.',
    answer: (
      <>
        <p>
          Elements close to helium, such as hydrogen, lithium and beryllium, can obey the duplet rule when bonding.
        </p>
        <p>
          Lithium hydride (LiH) is one example: lithium loses one electron and hydrogen gains one electron, so both achieve
          stable first-shell configurations.
        </p>
        <ElectronTransferDiagram
          metal="Li"
          nonMetal="H"
          metalDots={1}
          nonMetalDots={1}
          metalCharge="+"
          nonMetalCharge="−"
          product="LiH"
        />
      </>
    ),
  },
  {
    number: 8,
    question: 'Which elements obey octet rule? Explain with example.',
    answer: (
      <>
        <p>
          Sodium and chlorine follow the octet rule during formation of sodium chloride. Sodium loses one electron and
          chlorine gains one electron.
        </p>
        <ElectronTransferDiagram
          metal="Na"
          nonMetal="Cl"
          metalDots={1}
          nonMetalDots={7}
          metalCharge="+"
          nonMetalCharge="−"
          product="NaCl"
        />
      </>
    ),
  },
  {
    number: 10,
    question: 'Define ionic bond. How is it formed? Give example.',
    answer: (
      <>
        <p>
          An ionic bond is the electrostatic force of attraction between oppositely charged ions. It forms when a metal
          loses electron(s) and a non-metal gains electron(s).
        </p>
        <Equation>
          Na → Na<sup>+</sup> + e<sup>−</sup>
        </Equation>
        <Equation>
          Cl + e<sup>−</sup> → Cl<sup>−</sup>
        </Equation>
        <ElectronTransferDiagram
          metal="Na"
          nonMetal="Cl"
          metalDots={1}
          nonMetalDots={7}
          metalCharge="+"
          nonMetalCharge="−"
          product="NaCl"
        />
      </>
    ),
  },
  {
    number: '11A',
    question: 'Describe the formation of sodium and magnesium cations.',
    answer: (
      <>
        <p><strong>Sodium:</strong> <EC value="1s2 2s2 2p6 3s1" /></p>
        <Equation>
          Na → Na<sup>+</sup> + e<sup>−</sup>
        </Equation>
        <p><strong>Magnesium:</strong> <EC value="1s2 2s2 2p6 3s2" /></p>
        <Equation>
          Mg → Mg<sup>2+</sup> + 2e<sup>−</sup>
        </Equation>
      </>
    ),
  },
  {
    number: '12A',
    question: 'Describe the formation of oxygen and fluorine anions.',
    answer: (
      <>
        <p><strong>Oxygen:</strong> <EC value="1s2 2s2 2p4" /></p>
        <Equation>
          O + 2e<sup>−</sup> → O<sup>2−</sup>
        </Equation>
        <p><strong>Fluorine:</strong> <EC value="1s2 2s2 2p5" /></p>
        <Equation>
          F + e<sup>−</sup> → F<sup>−</sup>
        </Equation>
      </>
    ),
  },
  {
    number: 13,
    question: 'Define ionic bond. How it is formed?',
    answer: (
      <>
        <p>
          Ionic bond is the attractive force that binds oppositely charged ions. Metals form cations by losing electrons,
          while non-metals form anions by gaining electrons.
        </p>
        <p>
          The resulting electrostatic attraction holds the ions together in an ionic compound.
        </p>
      </>
    ),
  },
  {
    number: '14A',
    question: 'Use electron dot and cross structures to represent ionic bond formation in NaCl and MgF₂.',
    answer: (
      <>
        <ElectronTransferDiagram
          metal="Na"
          nonMetal="Cl"
          metalDots={1}
          nonMetalDots={7}
          metalCharge="+"
          nonMetalCharge="−"
          product="NaCl"
        />
        <ElectronTransferDiagram
          metal="Mg"
          nonMetal="F"
          metalDots={2}
          nonMetalDots={7}
          metalCharge="2+"
          nonMetalCharge="−"
          product="MgF₂"
        />
      </>
    ),
  },
  {
    number: 16,
    question: 'How the formation of a covalent bond between two atoms is represented?',
    answer: (
      <p>
        Electron-dot and electron-cross symbols are used to show valence electrons from different atoms. A shared pair may
        also be represented by a dash between bonded atoms.
      </p>
    ),
  },
  {
    number: 17,
    question: 'How is a covalent bond formed? Give reason.',
    answer: (
      <p>
        Covalent bonds form between non-metal atoms. Since non-metals have high ionization energies, they do not readily
        lose electrons. Instead, they share electrons to complete their duplets or octets.
      </p>
    ),
  },
  {
    number: 18,
    question: 'How is hydrogen molecule formed? Explain.',
    answer: (
      <>
        <p>
          Each hydrogen atom has one valence electron and requires one more to complete a duplet. Two hydrogen atoms share
          one pair of electrons.
        </p>
        <BondDiagram formula="Hydrogen molecule" structure={<>H—H</>} note="One shared pair = one single covalent bond" />
      </>
    ),
  },
  {
    number: 20,
    question: 'Explain the types of covalent bonds with examples.',
    answer: (
      <>
        <PointList
          items={[
            <>Single covalent bond: one shared electron pair, e.g. F—F.</>,
            <>Double covalent bond: two shared electron pairs, e.g. O=O.</>,
            <>Triple covalent bond: three shared electron pairs, e.g. N≡N.</>,
          ]}
        />
        <MoleculeGrid />
      </>
    ),
  },
  {
    number: '20A',
    question: 'Draw electron dot-cross structures for CH₄, H₂O, NH₃, CCl₄, SiCl₄ and H₂S.',
    answer: (
      <>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <BondDiagram formula="CH₄" structure={<><span className="text-center">H<br/>│<br/>H—C—H<br/>│<br/>H</span></>} />
          <WaterDotCross />
          <BondDiagram formula="NH₃" structure={<><span className="text-center">H<br/>│<br/>H—N—H</span></>} note="Nitrogen has one lone pair" />
          <BondDiagram formula="CCl₄" structure={<><span className="text-center">Cl<br/>│<br/>Cl—C—Cl<br/>│<br/>Cl</span></>} />
          <BondDiagram formula="SiCl₄" structure={<><span className="text-center">Cl<br/>│<br/>Cl—Si—Cl<br/>│<br/>Cl</span></>} />
          <BondDiagram formula="H₂S" structure={<>H—S—H</>} note="Sulphur has two lone pairs" />
        </div>
      </>
    ),
  },
  {
    number: '20B',
    question: 'Draw structures for CO₂, HCN, CS₂ and N₂.',
    answer: (
      <div className="grid gap-4 md:grid-cols-2">
        <BondDiagram formula="CO₂" structure={<>O=C=O</>} />
        <BondDiagram formula="HCN" structure={<>H—C≡N</>} />
        <BondDiagram formula="CS₂" structure={<>S=C=S</>} />
        <BondDiagram formula="N₂" structure={<>N≡N</>} />
      </div>
    ),
  },
  {
    number: 23,
    question: 'Explain the types of intermolecular forces.',
    answer: (
      <>
        <PointList
          items={[
            <>Dipole–dipole forces: attraction between opposite partial charges of polar molecules.</>,
            <>Hydrogen bonding: attraction involving hydrogen bonded to highly electronegative atoms such as N, O or F and a lone pair on a nearby electronegative atom.</>,
          ]}
        />
        <IntermolecularDiagram />
      </>
    ),
  },
  {
    number: 24,
    question: 'Explain the importance or uses of intermolecular forces.',
    answer: (
      <PointList
        items={[
          <>Hydrogen bonding influences properties of water, DNA and proteins.</>,
          <>Hydrogen bonding helps adhesion of paints and dyes.</>,
          <>Dipole–dipole interactions and hydrogen bonding help synthetic resins bind surfaces.</>,
          <>They help paints and dyes adhere to solid surfaces and protect them from atmospheric effects.</>,
        ]}
      />
    ),
  },
  {
    number: 25,
    question: 'How synthetic resins or epoxy adhesives bind two surfaces together?',
    tag: 'Society, Technology and Science',
    answer: (
      <p>
        Epoxy adhesives contain polar groups with partial positive hydrogen atoms and partial negative oxygen atoms with
        lone pairs. Hydrogen bonding and other intermolecular attractions help them adhere strongly to surfaces.
      </p>
    ),
  },
  {
    number: 26,
    question: 'Write important properties of synthetic adhesives.',
    tag: 'Society, Technology and Science',
    answer: (
      <PointList
        items={[
          <>Excellent chemical resistance.</>,
          <>Good adhesion.</>,
          <>Good heat resistance.</>,
          <>Excellent water resistance.</>,
          <>Strong and tough coatings.</>,
        ]}
      />
    ),
  },
  {
    number: 28,
    question: 'Write the uses or importance of glues.',
    tag: 'Society, Technology and Science',
    answer: (
      <PointList
        items={[
          <>Veneer.</>,
          <>Plywood.</>,
          <>Corrugated cartons.</>,
          <>Laminated boards.</>,
        ]}
      />
    ),
  },
  {
    number: 29,
    question: 'Write the uses or importance of epoxy resins or synthetic resins.',
    tag: 'Society, Technology and Science',
    answer: (
      <>
        <p>Synthetic resins provide chemical resistance, water resistance, toughness and flexibility.</p>
        <PointList
          items={[
            <>Coating dams, bridges and power stations.</>,
            <>Assembling automobiles.</>,
            <>Assembling aircraft.</>,
            <>Assembling spacecraft.</>,
          ]}
        />
      </>
    ),
  },
  {
    number: 31,
    question: 'Ionic substances cannot conduct electricity in solid states but can conduct in molten states and aqueous solutions. Why?',
    answer: (
      <p>
        Ionic compounds conduct only when ions are free to move. In solids, ions are fixed in the crystal lattice. In
        molten state or aqueous solution, ions become mobile and can carry electric current.
      </p>
    ),
  },
  {
    number: 32,
    question: 'Explain the structures of sodium chloride (NaCl) and cesium chloride (CsCl).',
    answer: (
      <>
        <p>
          Sodium chloride forms a cubic ionic lattice where each Na⁺ is surrounded by six Cl⁻ ions and each Cl⁻ by six Na⁺ ions.
        </p>
        <CrystalDiagram type="NaCl" />
        <p>
          Cesium chloride forms a body-centered ionic arrangement where each Cs⁺ is surrounded by eight Cl⁻ ions and vice versa.
        </p>
        <CrystalDiagram type="CsCl" />
      </>
    ),
  },
];

function PracticeSection() {
  return (
    <section className="mt-16">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
          <FlaskConical className="h-5 w-5" />
        </span>
        <div>
          <span className="eyebrow">Section 03</span>
          <h2 className="text-2xl font-semibold sm:text-3xl">Examples, Exercises & Practice</h2>
        </div>
      </div>

      <div className="space-y-7">
        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Example 4.1 — Valence-shell electrons</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-brand-50/40 p-4"><strong>Carbon:</strong> 4 valence electrons</div>
            <div className="rounded-lg bg-brand-50/40 p-4"><strong>Magnesium:</strong> 2 valence electrons</div>
            <div className="rounded-lg bg-brand-50/40 p-4"><strong>Phosphorus:</strong> 5 valence electrons</div>
          </div>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Example 4.2 — Formation of cations</h3>
          <div className="mt-5 space-y-5">
            <Equation>Na → Na<sup>+</sup> + e<sup>−</sup></Equation>
            <Equation>Mg → Mg<sup>2+</sup> + 2e<sup>−</sup></Equation>
            <Equation>Li → Li<sup>+</sup> + e<sup>−</sup></Equation>
            <Equation>Al → Al<sup>3+</sup> + 3e<sup>−</sup></Equation>
            <Equation>K → K<sup>+</sup> + e<sup>−</sup></Equation>
            <Equation>Ca → Ca<sup>2+</sup> + 2e<sup>−</sup></Equation>
          </div>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Example 4.3 — Formation of anions</h3>
          <div className="mt-5 space-y-5">
            <Equation>O + 2e<sup>−</sup> → O<sup>2−</sup></Equation>
            <Equation>F + e<sup>−</sup> → F<sup>−</sup></Equation>
            <Equation>S + 2e<sup>−</sup> → S<sup>2−</sup></Equation>
            <Equation>Cl + e<sup>−</sup> → Cl<sup>−</sup></Equation>
            <Equation>N + 3e<sup>−</sup> → N<sup>3−</sup></Equation>
            <Equation>P + 3e<sup>−</sup> → P<sup>3−</sup></Equation>
            <Equation>Br + e<sup>−</sup> → Br<sup>−</sup></Equation>
            <Equation>H + e<sup>−</sup> → H<sup>−</sup></Equation>
          </div>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Example 4.4 — Ionic compound formation</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <ElectronTransferDiagram metal="Na" nonMetal="Cl" metalDots={1} nonMetalDots={7} metalCharge="+" nonMetalCharge="−" product="NaCl" />
            <ElectronTransferDiagram metal="Mg" nonMetal="F" metalDots={2} nonMetalDots={7} metalCharge="2+" nonMetalCharge="−" product="MgF₂" />
            <ElectronTransferDiagram metal="Mg" nonMetal="O" metalDots={2} nonMetalDots={6} metalCharge="2+" nonMetalCharge="2−" product="MgO" />
            <ElectronTransferDiagram metal="Al" nonMetal="Cl" metalDots={3} nonMetalDots={7} metalCharge="3+" nonMetalCharge="−" product="AlCl₃" />
          </div>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Example 4.6 & 4.7 — Covalent structures</h3>
          <MoleculeGrid />
          <WaterDotCross />
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Exercise Q1 — Multiple Choice Answers</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-line p-3 text-left">i</th>
                  <th className="border border-line p-3 text-left">ii</th>
                  <th className="border border-line p-3 text-left">iii</th>
                  <th className="border border-line p-3 text-left">iv</th>
                  <th className="border border-line p-3 text-left">v</th>
                  <th className="border border-line p-3 text-left">vi</th>
                  <th className="border border-line p-3 text-left">vii</th>
                  <th className="border border-line p-3 text-left">viii</th>
                  <th className="border border-line p-3 text-left">ix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {['c','c','a','c','c','b','c','d','c'].map((v, i) => (
                    <td key={i} className="border border-line p-3 font-semibold uppercase">{v}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Exercise Q2 — Give short answers</h3>
          <div className="mt-5 space-y-5">
            <div><strong>(i) Octet and duplet rules:</strong> octet = eight valence electrons; duplet = two electrons in the first shell.</div>
            <div><strong>(ii) N₂ formation:</strong> N≡N, a triple covalent bond.</div>
            <div><strong>(iii) Aluminium cation:</strong> Al → Al³⁺ + 3e⁻.</div>
            <div><strong>(iv) Oxygen anion:</strong> O + 2e⁻ → O²⁻.</div>
            <div><strong>(v) Water structure:</strong><WaterDotCross /></div>
          </div>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Exercise — Ionic and covalent bonding</h3>
          <div className="mt-5 space-y-6">
            <div>
              <h4 className="font-semibold">Q5. Ways in which bonds may be formed</h4>
              <PointList
                items={[
                  <>Ionic bond: electron transfer between metal and non-metal atoms.</>,
                  <>Covalent bond: mutual sharing of electrons between non-metal atoms.</>,
                ]}
              />
            </div>

            <div>
              <h4 className="font-semibold">Q7. Single, double and triple covalent bonds</h4>
              <MoleculeGrid />
            </div>

            <div>
              <h4 className="font-semibold">Q12. Ionic compounds from K/Cl, Ca/S and Al/N</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-brand-50/40 p-4 text-center font-semibold">KCl</div>
                <div className="rounded-lg bg-brand-50/40 p-4 text-center font-semibold">CaS</div>
                <div className="rounded-lg bg-brand-50/40 p-4 text-center font-semibold">AlN</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Q13. Recognize ionic compounds</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-brand-50/40 p-4 text-center font-semibold">MgCl₂</div>
                <div className="rounded-lg bg-brand-50/40 p-4 text-center font-semibold">KBr</div>
                <div className="rounded-lg bg-brand-50/40 p-4 text-center font-semibold">NaI</div>
              </div>
            </div>
          </div>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Applied Questions</h3>
          <div className="mt-5 space-y-7">
            <div>
              <h4 className="font-semibold">MgO ion formation</h4>
              <Equation>Mg → Mg<sup>2+</sup> + 2e<sup>−</sup></Equation>
              <Equation>O + 2e<sup>−</sup> → O<sup>2−</sup></Equation>
            </div>

            <div>
              <h4 className="font-semibold">Substance-property table</h4>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="border border-line p-3 text-left">Substance</th>
                      <th className="border border-line p-3 text-left">Melting point</th>
                      <th className="border border-line p-3 text-left">Solid conductivity</th>
                      <th className="border border-line p-3 text-left">Molten conductivity</th>
                      <th className="border border-line p-3 text-left">Identification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-line p-3">A</td><td className="border border-line p-3">High</td><td className="border border-line p-3">Nil</td><td className="border border-line p-3">Nil</td><td className="border border-line p-3">Non-metal</td></tr>
                    <tr><td className="border border-line p-3">B</td><td className="border border-line p-3">High</td><td className="border border-line p-3">Nil</td><td className="border border-line p-3">Good</td><td className="border border-line p-3">Ionic compound</td></tr>
                    <tr><td className="border border-line p-3">C</td><td className="border border-line p-3">Low</td><td className="border border-line p-3">Nil</td><td className="border border-line p-3">Nil</td><td className="border border-line p-3">Covalent compound</td></tr>
                    <tr><td className="border border-line p-3">D</td><td className="border border-line p-3">High</td><td className="border border-line p-3">Good</td><td className="border border-line p-3">Good</td><td className="border border-line p-3">Metal</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Electronic configurations X and Y</h4>
              <p className="mt-3">
                X = <EC value="1s2 2s2 2p6 3s2" /> and Y = <EC value="1s2 2s2 2p4" />.
                X behaves like Mg and Y like O, so the expected compound is ionic XY (MgO).
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Shared electrons in CO₂</h4>
              <BondDiagram formula="CO₂" structure={<>O=C=O</>} note="Two double bonds = four shared pairs = eight shared electrons" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function UnitFourPage() {
  return (
    <div className="container-wide py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Fundamentals', href: '/fundamentals' },
          { label: 'Chemical Bonding' },
        ]}
      />

      <section className="page-heading-box mt-6">
        <span className="eyebrow mb-2">Fundamentals · Unit 04</span>
        <h1>Chemical Bonding</h1>
        <p className="mt-3 max-w-3xl leading-relaxed">
          Noble-gas stability, duplet and octet rules, ionic and covalent bonds, electron-dot structures,
          intermolecular forces, adhesives and structures of ionic solids.
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
                Noble gases, rules of stability, bond definitions, ions, intermolecular forces and properties.
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
                Ion formation, ionic compounds, covalent structures, multiple bonds, intermolecular forces and crystal structures.
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
          {shortQuestions.map((item) => (
            <QuestionCard key={`short-${item.number}`} item={item} />
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
          {longQuestions.map((item) => (
            <QuestionCard key={`long-${item.number}`} item={item} />
          ))}
        </div>
      </section>

      <PracticeSection />
    </div>
  );
}
