import type { ReactNode } from 'react';
import { BookOpenText, ListChecks, CircleDot, Atom, FlaskConical } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
 
export const metadata = {
  title: 'Atomic Structure',
};
 
function Chem({ children }: { children: ReactNode }) {
  return (
    <span className="whitespace-nowrap font-medium">
      {children}
    </span>
  );
}
 
function Nuclide({
  symbol,
  mass,
  atomic,
}: {
  symbol: string;
  mass?: number | string;
  atomic?: number | string;
}) {
  return (
    <span className="inline-flex items-center whitespace-nowrap font-medium">
      <span className="mr-0.5 flex flex-col items-end text-[0.68em] leading-[0.85]">
        {mass !== undefined && <sup>{mass}</sup>}
        {atomic !== undefined && <sub>{atomic}</sub>}
      </span>
      <span>{symbol}</span>
    </span>
  );
}
 
function OrbitalConfig({ text }: { text: string }) {
  const parts = text.trim().split(/\s+/);
 
  return (
    <span className="inline-flex flex-wrap gap-x-2 gap-y-1 font-medium">
      {parts.map((part, index) => {
        const match = part.match(/^(\d+[spdf])(\d+)$/i);
 
        if (!match) {
          return <span key={`${part}-${index}`}>{part}</span>;
        }
 
        return (
          <span key={`${part}-${index}`} className="whitespace-nowrap">
            {match[1]}
            <sup>{match[2]}</sup>
          </span>
        );
      })}
    </span>
  );
}
 
function Equation({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 overflow-x-auto rounded-lg bg-brand-50/40 px-4 py-3 text-center text-base font-medium">
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
 
function PointList({
  items,
  type = 'roman',
}: {
  items: ReactNode[];
  type?: 'roman' | 'alpha' | 'number';
}) {
  const labels =
    type === 'alpha'
      ? 'abcdefghijklmnopqrstuvwxyz'.split('')
      : type === 'number'
        ? items.map((_, i) => String(i + 1))
        : ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];
 
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-[auto_1fr] gap-3">
          <span className="font-semibold">
            {type === 'alpha' ? `(${labels[index]})` : `${labels[index]}.`}
          </span>
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
}
 
function QuestionCard({
  number,
  question,
  children,
  tag,
}: {
  number: string | number;
  question: ReactNode;
  children: ReactNode;
  tag?: string;
}) {
  return (
    <article className="card p-5 sm:p-7">
      <div className="flex items-start gap-3">
        <span className="shrink-0 text-sm font-semibold text-brand-700">
          Q{number}.
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold leading-7 sm:text-xl">
            {question}
          </h2>
          {tag && (
            <span className="mt-2 inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
              {tag}
            </span>
          )}
          {children}
        </div>
      </div>
    </article>
  );
}
 
/**
 * Rutherford's gold-foil apparatus + the scattering-through-atoms diagram,
 * redrawn to match: source of alpha particles -> beam -> gold foil ->
 * fluorescent screen, plus a row of atoms showing most particles passing
 * straight through, a few deflected at an angle less than 90°, and about
 * 1 in a million deflected back at an angle greater than 90°.
 */
function RutherfordExperimentDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-line bg-paper p-4">
      <div className="mb-3 text-sm font-semibold">Rutherford's α-particle scattering experiment</div>
 
      {/* Apparatus */}
      <svg viewBox="0 0 900 340" className="h-auto w-full" role="img" aria-label="Rutherford alpha particle scattering apparatus">
        <defs>
          <marker id="ruth-arrow-1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="currentColor" />
          </marker>
        </defs>
 
        <rect x="50" y="150" width="100" height="55" fill="none" stroke="currentColor" strokeWidth="3" />
        <text x="100" y="182" textAnchor="middle" fontSize="14">Source of</text>
        <text x="100" y="200" textAnchor="middle" fontSize="14">alpha particles</text>
 
        <path d="M150 178 H330" stroke="currentColor" strokeWidth="2.5" markerEnd="url(#ruth-arrow-1)" />
        <text x="240" y="165" textAnchor="middle" fontSize="14">Beam of alpha particles</text>
 
        <rect x="330" y="90" width="16" height="180" fill="none" stroke="currentColor" strokeWidth="3" />
        <text x="338" y="75" textAnchor="middle" fontSize="14">Gold foil</text>
 
        <ellipse cx="580" cy="178" rx="200" ry="120" fill="none" stroke="currentColor" strokeWidth="3" />
        <text x="580" y="45" textAnchor="middle" fontSize="14">Fluorescent screen</text>
 
        <path d="M346 178 H750" stroke="currentColor" strokeWidth="2" markerEnd="url(#ruth-arrow-1)" />
        <path d="M346 178 L590 90" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#ruth-arrow-1)" />
        <path d="M346 178 L660 268" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#ruth-arrow-1)" />
        <path d="M346 178 L495 96" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#ruth-arrow-1)" />
        <path d="M346 178 L460 262" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#ruth-arrow-1)" />
      </svg>
 
      {/* Scattering through atoms in the foil */}
      <svg viewBox="0 0 900 260" className="mt-4 h-auto w-full" role="img" aria-label="Alpha particles passing through gold atoms">
        <defs>
          <marker id="ruth-arrow-2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="currentColor" />
          </marker>
        </defs>
 
        {[70, 170].map((cy) =>
          [180, 300, 420, 540].map((cx) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="45" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx={cx} cy={cy} r="5" fill="currentColor" />
            </g>
          )),
        )}
 
        {[55, 90, 125, 155, 185].map((y) => (
          <path key={y} d={`M30 ${y} H700`} stroke="currentColor" strokeWidth="1.5" markerEnd="url(#ruth-arrow-2)" />
        ))}
        <text x="720" y="120" fontSize="15">Undeflected alpha particles</text>
 
        <path d="M180 70 L55 8" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#ruth-arrow-2)" />
        <path d="M420 70 L525 5" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#ruth-arrow-2)" />
        <text x="30" y="24" fontSize="13">Angle &lt; 90°</text>
        <text x="470" y="20" fontSize="13">Angle &lt; 90°</text>
 
        <path d="M300 170 L110 232" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#ruth-arrow-2)" />
        <text x="95" y="250" fontSize="13">Angle &gt; 90° (1 in a million)</text>
      </svg>
    </div>
  );
}
 
function PlanetaryAtomDiagram({ label = 'Rutherford planetary model' }: { label?: string }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-line bg-paper p-4">
      <div className="mb-3 text-sm font-semibold">{label}</div>
      <svg viewBox="0 0 500 300" className="mx-auto h-auto w-full max-w-2xl" role="img" aria-label={label}>
        <circle cx="250" cy="150" r="32" fill="none" stroke="currentColor" strokeWidth="4" />
        <text x="250" y="155" textAnchor="middle" fontSize="18">nucleus +</text>
        <ellipse cx="250" cy="150" rx="150" ry="62" fill="none" stroke="currentColor" strokeWidth="3" />
        <ellipse cx="250" cy="150" rx="95" ry="120" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(45 250 150)" />
        <circle cx="100" cy="150" r="9" fill="currentColor" />
        <circle cx="378" cy="88" r="9" fill="currentColor" />
        <circle cx="320" cy="255" r="9" fill="currentColor" />
        <text x="98" y="135" fontSize="16">e−</text>
        <text x="385" y="84" fontSize="16">e−</text>
        <text x="330" y="270" fontSize="16">e−</text>
      </svg>
    </div>
  );
}
 
/**
 * Generic Bohr-model diagram: nucleus (showing proton/neutron counts when
 * provided, e.g. "6P / 6N"), concentric shells, and electrons placed evenly
 * around each shell.
 */
function BohrAtom({
  shells,
  electrons,
  protons,
  neutrons,
  label,
}: {
  shells: number;
  electrons: number[];
  protons?: number;
  neutrons?: number;
  label: string;
}) {
  const radii = [55, 90, 125, 158];
 
  return (
    <div className="rounded-xl border border-line bg-paper p-4">
      <div className="mb-2 text-center text-sm font-semibold">{label}</div>
      <svg viewBox="0 0 360 360" className="mx-auto h-auto w-full max-w-sm" role="img" aria-label={label}>
        <circle cx="180" cy="180" r="32" fill="none" stroke="currentColor" strokeWidth="3" />
        {protons !== undefined && neutrons !== undefined ? (
          <>
            <text x="180" y="176" textAnchor="middle" fontSize="14" fontWeight="600">
              {protons}P
            </text>
            <text x="180" y="193" textAnchor="middle" fontSize="14" fontWeight="600">
              {neutrons}N
            </text>
          </>
        ) : (
          <text x="180" y="185" textAnchor="middle" fontSize="13">
            nucleus
          </text>
        )}
        {Array.from({ length: shells }).map((_, shellIndex) => (
          <circle
            key={shellIndex}
            cx="180"
            cy="180"
            r={radii[shellIndex]}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        ))}
        {electrons.flatMap((count, shellIndex) => {
          const radius = radii[shellIndex];
          return Array.from({ length: count }).map((_, electronIndex) => {
            const angle = (electronIndex / count) * Math.PI * 2 - Math.PI / 2;
            const x = 180 + radius * Math.cos(angle);
            const y = 180 + radius * Math.sin(angle);
            return <circle key={`${shellIndex}-${electronIndex}`} cx={x} cy={y} r="6.5" fill="currentColor" />;
          });
        })}
      </svg>
    </div>
  );
}
 
function IsotopeNucleus({
  label,
  protons,
  neutrons,
  electrons,
}: {
  label: ReactNode;
  protons: number;
  neutrons: number;
  electrons: number;
}) {
  return (
    <div className="rounded-xl border border-line bg-paper p-4 text-center">
      <div className="font-semibold">{label}</div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
        <div><strong>{protons}</strong><br />protons</div>
        <div><strong>{neutrons}</strong><br />neutrons</div>
        <div><strong>{electrons}</strong><br />electrons</div>
      </div>
    </div>
  );
}
 
/**
 * Energy-absorbed / energy-emitted diagram redrawn to match Bohr's model:
 * a nucleus (+) with two orbits, an electron dot, and E1/E2 arrows showing
 * the transition. ΔE = E2 − E1.
 */
function EnergyLevelDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-line bg-paper p-4">
      <div className="mb-3 text-sm font-semibold">Energy absorbed and emitted during an electron transition</div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="text-center">
          <svg viewBox="0 0 300 260" className="mx-auto h-auto w-full max-w-xs" role="img" aria-label="Energy absorbed diagram">
            <defs>
              <marker id="energy-arrow-absorb" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="currentColor" />
              </marker>
            </defs>
            <circle cx="150" cy="150" r="26" fill="none" stroke="currentColor" strokeWidth="2" />
            <text x="150" y="156" textAnchor="middle" fontSize="18">+</text>
            <circle cx="150" cy="150" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="150" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="150" cy="50" r="7" fill="currentColor" />
            <path d="M35 88 L140 54" stroke="currentColor" strokeWidth="2.5" fill="none" markerEnd="url(#energy-arrow-absorb)" />
            <path d="M8 128 L92 106" stroke="currentColor" strokeWidth="2.5" fill="none" markerEnd="url(#energy-arrow-absorb)" />
            <text x="15" y="78" fontSize="16">E2</text>
            <text x="0" y="120" fontSize="16">E1</text>
          </svg>
          <div className="mt-1 text-sm font-medium">Energy absorbed (electron jumps to a higher orbit)</div>
        </div>
        <div className="text-center">
          <svg viewBox="0 0 300 260" className="mx-auto h-auto w-full max-w-xs" role="img" aria-label="Energy emitted diagram">
            <defs>
              <marker id="energy-arrow-emit" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="currentColor" />
              </marker>
            </defs>
            <circle cx="150" cy="150" r="26" fill="none" stroke="currentColor" strokeWidth="2" />
            <text x="150" y="156" textAnchor="middle" fontSize="18">+</text>
            <circle cx="150" cy="150" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="150" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="150" cy="90" r="7" fill="currentColor" />
            <path d="M265 55 L165 84" stroke="currentColor" strokeWidth="2.5" fill="none" markerEnd="url(#energy-arrow-emit)" />
            <path d="M292 108 L212 128" stroke="currentColor" strokeWidth="2.5" fill="none" markerEnd="url(#energy-arrow-emit)" />
            <text x="270" y="46" fontSize="16">E1</text>
            <text x="270" y="102" fontSize="16">E2</text>
          </svg>
          <div className="mt-1 text-sm font-medium">Energy emitted (electron falls to a lower orbit)</div>
        </div>
      </div>
      <Equation>
        ΔE = E<sub>2</sub> − E<sub>1</sub>
      </Equation>
    </div>
  );
}
 
function ShellSubshellDiagram() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="text-sm font-semibold">Shells and sub-shells</div>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-brand-50/40 p-4">
          <div className="font-semibold">K-shell (n = 1)</div>
          <div className="mt-2">1s</div>
          <div className="mt-2 text-sm">Maximum electrons: 2</div>
        </div>
        <div className="rounded-lg bg-brand-50/40 p-4">
          <div className="font-semibold">L-shell (n = 2)</div>
          <div className="mt-2">2s, 2p</div>
          <div className="mt-2 text-sm">Maximum electrons: 8</div>
        </div>
        <div className="rounded-lg bg-brand-50/40 p-4">
          <div className="font-semibold">M-shell (n = 3)</div>
          <div className="mt-2">3s, 3p, 3d</div>
          <div className="mt-2 text-sm">Maximum electrons: 18</div>
        </div>
      </div>
    </div>
  );
}
 
const shortQuestions = [
  {
    number: 1,
    question: 'What does structure of atom mean?',
    answer: (
      <p>
        The arrangement of sub-atomic particles (electrons, protons and neutrons) in an atom is called
        structure of that atom. Atomic structure was proposed as a result of series of experiments in the
        later nineteenth century and beginning of twentieth century.
      </p>
    ),
  },
  {
    number: 8,
    question: 'Define isotopes. Give examples.',
    answer: (
      <p>
        Isotopes are the atoms of same element which have same atomic number (proton number) but different
        mass number. For example, protium (<Nuclide symbol="H" mass={1} atomic={1} />), deuterium (
        <Nuclide symbol="H" mass={2} atomic={1} />) and tritium (
        <Nuclide symbol="H" mass={3} atomic={1} />).
      </p>
    ),
  },
  {
    number: 9,
    question: 'Who discovered isotopes? What is the origin of word "isotope"?',
    answer: (
      <p>
        Isotopes were discovered by Frederick Soddy. The word "isotope" comes from the Greek "isos" meaning
        same and "topos" meaning place. It means isotopes belong to the same place (element) in the periodic table.
      </p>
    ),
  },
  {
    number: 10,
    question: 'Why isotopes have similar chemical properties but different physical properties?',
    answer: (
      <>
        <p>
          Isotopes have similar chemical properties because they have same number of valence shell electrons.
          On the other hand, their physical properties are different because they have different mass numbers.
        </p>
        <p>
          <strong>Note:</strong> mass numbers of isotopes are different because they have different number of neutrons.
        </p>
      </>
    ),
  },
  {
    number: 12,
    question: (
      <>
        Write down the properties of hydrogen gas (<Chem>H<sub>2</sub></Chem>).
      </>
    ),
    answer: (
      <PointList
        items={[
          <>It is colourless, odourless (no smell) and tasteless.</>,
          <>It is insoluble in water.</>,
          <>It is inflammable (catches fire easily).</>,
        ]}
      />
    ),
  },
  {
    number: 16,
    question: 'Write down the properties of carbon.',
    answer: (
      <PointList
        items={[
          <>Carbon has different forms (coke is black, graphite is grey and diamond is colourless/transparent).</>,
          <>They are odourless and tasteless.</>,
          <>They have high melting points and boiling points.</>,
          <>They are insoluble in water.</>,
        ]}
      />
    ),
  },
  {
    number: 18,
    question: 'Write down the properties of chlorine.',
    answer: (
      <PointList
        items={[
          <>It is a yellowish-green gas.</>,
          <>It has a sharp, pungent, irritating smell.</>,
          <>It is fairly soluble in water.</>,
        ]}
      />
    ),
  },
  {
    number: 21,
    question: 'Why chemical properties of isotopes are similar and physical properties are different?',
    answer: (
      <>
        <p>
          Chemical properties of elements depend on valence shell electrons. All isotopes of an element have
          the same number of valence shell electrons so they have similar chemical properties.
        </p>
        <p>
          Physical properties of elements depend on their mass number. All isotopes of an element have different
          mass numbers, so they have different physical properties.
        </p>
      </>
    ),
  },
  {
    number: 24,
    question: 'What are shells or orbits? Give examples.',
    answer: (
      <>
        <p>
          The circular paths around a nucleus in which electrons revolve are called shells or orbits or energy
          levels. For example, K-shell, L-shell and M-shell. Each shell has its own numerical value represented
          by n = 1, 2, 3, …
        </p>
        <PointList
          items={[
            <>K-shell, n = 1</>,
            <>L-shell, n = 2</>,
            <>M-shell, n = 3</>,
          ]}
        />
      </>
    ),
  },
  {
    number: 25,
    question: 'What are sub-shells? Give examples.',
    answer: (
      <p>
        A shell is subdivided into smaller regions or spaces called sub-shells or sub-energy levels. For example,
        s, p, d and f.
      </p>
    ),
  },
  {
    number: 27,
    question: 'What is the link between the "n" value of a shell and the number of sub-shells in a given shell?',
    answer: (
      <>
        <p>
          The "n" value of a shell tells us the number of sub-shells in that particular shell.
        </p>
        <p>
          K-shell has n = 1, so it has one sub-shell: 1s. L-shell has n = 2, so it has two sub-shells:
          2s and 2p. M-shell has n = 3, so it has three sub-shells: 3s, 3p and 3d.
        </p>
        <ShellSubshellDiagram />
      </>
    ),
  },
  {
    number: 28,
    question: 'Define electronic configuration.',
    answer: (
      <p>
        The arrangement (distribution) of electrons in different sub-shells around a nucleus is called electronic
        configuration. When writing the electronic configuration of an element, the "n" value of a shell is always
        placed before the symbol of its corresponding sub-shell.
      </p>
    ),
  },
];
 
const longQuestions = [
  {
    number: 2,
    question: 'Explain Rutherford\u2019s experiment for discovery of nucleus.',
    tag: 'Atomic Model',
    answer: (
      <>
        <p>
          In 1911, Rutherford bombarded alpha (α) particles on a very thin gold foil about 0.0004 cm thick.
          He obtained alpha (α) particles from the disintegration (decay) of polonium. Alpha (α) particles
          are helium nuclei (<Chem>He<sup>2+</sup></Chem>) having a "+2" charge.
        </p>
        <h3 className="text-lg font-semibold">Observations</h3>
        <PointList
          items={[
            <>Most of the alpha particles passed straight through the foil.</>,
            <>Only a few particles were slightly deflected at an angle less than 90°.</>,
            <>About one in a million was deflected at an angle greater than 90°.</>,
          ]}
        />
        <RutherfordExperimentDiagram />
        <h3 className="text-lg font-semibold">Conclusions</h3>
        <PointList
          items={[
            <>Most of the atom is empty space, because most alpha particles went undeflected.</>,
            <>There is a positively charged central body which repelled the positively charged alpha particles at different angles.</>,
            <>The heavy alpha (α) particles cannot be deflected by light electrons — only by a heavy, dense core.</>,
          ]}
        />
        <p>
          In this way, Rutherford concluded that there is a small, dense, positively charged body at the centre of
          the atom, which he called the nucleus.
        </p>
      </>
    ),
  },
  {
    number: 3,
    question: 'Explain Rutherford atomic model.',
    tag: 'Atomic Model',
    answer: (
      <>
        <p>
          Rutherford presented his atomic model on the basis of his gold-foil experiment. It has the following postulates.
        </p>
        <PointList
          items={[
            <>An atom is an electrically neutral particle because it has an equal number of electrons and protons.</>,
            <>Almost all the mass of an atom is concentrated in a small, positively charged central region called the nucleus.</>,
            <>Electrons revolve around the nucleus in circular paths called orbits, just as planets revolve around the sun. This is why the Rutherford atomic model is also known as the planetary model.</>,
            <>The centripetal force acting on an electron as it revolves around the nucleus is equal to the electrostatic force of attraction between the electron and the nucleus.</>,
          ]}
        />
        <PlanetaryAtomDiagram />
      </>
    ),
  },
  {
    number: 4,
    question: 'What are the defects (drawbacks/demerits) of Rutherford atomic model?',
    answer: (
      <PointList
        items={[
          <>According to classical physics, an accelerating (revolving) electron should continuously emit energy. So its orbit should keep shrinking until it spirals into the nucleus — meaning the atom would collapse. This does not happen in reality.</>,
          <>If electrons continuously emitted energy, atoms should give a continuous spectrum. However, atoms actually give a line spectrum, not a continuous one.</>,
        ]}
      />
    ),
  },
  {
    number: 5,
    question: 'Explain Bohr\u2019s atomic theory or Bohr\u2019s atomic model.',
    tag: 'Bohr Theory',
    answer: (
      <>
        <p>
          In 1913, Neils Bohr presented his famous atomic model, known as the Bohr atomic model. It has the following postulates.
        </p>
        <PointList
          items={[
            <>Electrons revolve around the nucleus in fixed circular orbits. Each orbit has a fixed amount of energy, so orbits are also called energy levels.</>,
            <>The energy of an electron in a given orbit is directly proportional to its distance from the nucleus.</>,
            <>Electrons can only occupy orbits whose angular momentum is an integral multiple of h/2π, where "h" is Planck's constant (6.626 × 10<sup>−34</sup> J·s).</>,
            <>The energy of an electron remains constant while it stays in a particular orbit. Energy is absorbed when an electron jumps from a lower to a higher energy orbit, and energy is emitted when an electron falls from a higher to a lower energy orbit.</>,
            <>The energy of the light absorbed or emitted equals the difference between the energies of the two orbits.</>,
          ]}
        />
        <Equation>
          ΔE = E<sub>2</sub> − E<sub>1</sub>
        </Equation>
        <EnergyLevelDiagram />
      </>
    ),
  },
  {
    number: '5A',
    question: 'Draw Bohr\u2019s model for carbon and chlorine atoms indicating electrons, protons and neutrons.',
    answer: (
      <>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">
              (a) Carbon — <Nuclide symbol="C" mass={12} atomic={6} />
            </h3>
            <PointList
              type="number"
              items={[
                <>Number of electrons = 6</>,
                <>Number of protons = 6</>,
                <>Number of neutrons = mass number − atomic number = 12 − 6 = 6</>,
              ]}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              (b) Chlorine — <Nuclide symbol="Cl" mass={35} atomic={17} />
            </h3>
            <PointList
              type="number"
              items={[
                <>Number of electrons = 17</>,
                <>Number of protons = 17</>,
                <>Number of neutrons = 35 − 17 = 18</>,
              ]}
            />
          </div>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <BohrAtom shells={2} electrons={[2, 4]} protons={6} neutrons={6} label="Bohr model of carbon" />
          <BohrAtom shells={3} electrons={[2, 8, 7]} protons={17} neutrons={18} label="Bohr model of chlorine" />
        </div>
      </>
    ),
  },
  {
    number: 6,
    question: 'Compare and contrast Rutherford and Bohr\u2019s atomic models. OR How Bohr removed defects of Rutherford\u2019s atomic model.',
    tag: 'Society, Technology and Science',
    answer: (
      <>
        <p>
          Bohr removed the two defects of Rutherford's atomic model by proposing the stability of the atom and
          explaining the line spectrum, as follows.
        </p>
        <PointList
          items={[
            <>Bohr proposed that an electron neither emits nor absorbs energy as long as it stays in the same orbit. So there is no chance of the electron spiralling into the nucleus — this explains the stability of the atom.</>,
            <>Bohr proposed that electrons emit energy discontinuously (in fixed packets, or quanta) when jumping between orbits. Therefore, an atom gives a line spectrum, not a continuous spectrum.</>,
          ]}
        />
      </>
    ),
  },
  {
    number: 7,
    question: 'How does testing prevailing theories bring about changes in them? OR How are theories changed?',
    tag: 'Society, Technology and Science',
    answer: (
      <p>
        Dalton's atomic theory was widely accepted because it explained the data from many experiments. But the
        discovery of sub-atomic particles and isotopes proved some ideas of Dalton's atomic theory wrong. However,
        scientists did not reject Dalton's atomic theory outright — they revised it in light of new discoveries.
        This is how testing (experimentation) brings about change in already-proposed theories.
      </p>
    ),
  },
  {
    number: 11,
    question: 'Draw Bohr\u2019s models for isotopes of hydrogen element.',
    answer: (
      <>
        <p>Hydrogen has the following three isotopes.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-3">
            <IsotopeNucleus label={<><Nuclide symbol="H" mass={1} atomic={1} /> Protium</>} protons={1} neutrons={0} electrons={1} />
            <BohrAtom shells={1} electrons={[1]} protons={1} neutrons={0} label="Protium — no neutron" />
          </div>
          <div className="space-y-3">
            <IsotopeNucleus label={<><Nuclide symbol="H" mass={2} atomic={1} /> Deuterium</>} protons={1} neutrons={1} electrons={1} />
            <BohrAtom shells={1} electrons={[1]} protons={1} neutrons={1} label="Deuterium — 1 neutron" />
          </div>
          <div className="space-y-3">
            <IsotopeNucleus label={<><Nuclide symbol="H" mass={3} atomic={1} /> Tritium</>} protons={1} neutrons={2} electrons={1} />
            <BohrAtom shells={1} electrons={[1]} protons={1} neutrons={2} label="Tritium — 2 neutrons" />
          </div>
        </div>
      </>
    ),
  },
  {
    number: 13,
    question: 'Write down the properties of isotopes of hydrogen.',
    answer: (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-line p-3 text-left">Property</th>
              <th className="border border-line p-3 text-left">Protium</th>
              <th className="border border-line p-3 text-left">Deuterium</th>
              <th className="border border-line p-3 text-left">Tritium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-line p-3">Natural abundance</td>
              <td className="border border-line p-3">Almost all naturally occurring hydrogen is protium — about 99.98%.</td>
              <td className="border border-line p-3">Second most abundant isotope — about 0.0156%.</td>
              <td className="border border-line p-3">Not found in significant amounts naturally. It is radioactive, unstable and rare.</td>
            </tr>
            <tr>
              <td className="border border-line p-3">Reaction with oxygen</td>
              <td className="border border-line p-3">Forms ordinary water (<Chem>H<sub>2</sub>O</Chem>).</td>
              <td className="border border-line p-3">Forms heavy water (<Chem>D<sub>2</sub>O</Chem>).</td>
              <td className="border border-line p-3">Being rare and radioactive, it does not contribute meaningfully to natural water.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    number: 14,
    question: (
      <>
        Compare the properties of ordinary water (<Chem>H<sub>2</sub>O</Chem>) and heavy water (<Chem>D<sub>2</sub>O</Chem>).
      </>
    ),
    answer: (
      <>
        <p>
          Protium is the light isotope of hydrogen, so the water formed from it is called light or ordinary water.
          Deuterium is the heavy isotope, so the water formed from it is called heavy water. Tritium is too rare
          and radioactive to contribute meaningfully to naturally occurring water.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-line p-3 text-left">Property</th>
                <th className="border border-line p-3 text-left">Ordinary water (H₂O)</th>
                <th className="border border-line p-3 text-left">Heavy water (D₂O)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-line p-3">Melting point</td>
                <td className="border border-line p-3">0.00 °C</td>
                <td className="border border-line p-3">3.81 °C</td>
              </tr>
              <tr>
                <td className="border border-line p-3">Boiling point</td>
                <td className="border border-line p-3">100 °C</td>
                <td className="border border-line p-3">101.4 °C</td>
              </tr>
              <tr>
                <td className="border border-line p-3">Density at 25 °C</td>
                <td className="border border-line p-3">0.997 g/cm³</td>
                <td className="border border-line p-3">1.107 g/cm³</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    number: 15,
    question: 'Draw Bohr\u2019s models for isotopes of carbon element.',
    answer: (
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-3">
          <IsotopeNucleus label={<><Nuclide symbol="C" mass={12} atomic={6} /> Carbon-12</>} protons={6} neutrons={6} electrons={6} />
          <BohrAtom shells={2} electrons={[2, 4]} protons={6} neutrons={6} label="Carbon-12 (2, 4)" />
        </div>
        <div className="space-y-3">
          <IsotopeNucleus label={<><Nuclide symbol="C" mass={13} atomic={6} /> Carbon-13</>} protons={6} neutrons={7} electrons={6} />
          <BohrAtom shells={2} electrons={[2, 4]} protons={6} neutrons={7} label="Carbon-13 (2, 4)" />
        </div>
        <div className="space-y-3">
          <IsotopeNucleus label={<><Nuclide symbol="C" mass={14} atomic={6} /> Carbon-14</>} protons={6} neutrons={8} electrons={6} />
          <BohrAtom shells={2} electrons={[2, 4]} protons={6} neutrons={8} label="Carbon-14 (2, 4)" />
        </div>
      </div>
    ),
  },
  {
    number: 17,
    question: 'Draw the Bohr\u2019s model diagrams of isotopes of chlorine.',
    answer: (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-3">
          <IsotopeNucleus label={<><Nuclide symbol="Cl" mass={35} atomic={17} /> Chlorine-35</>} protons={17} neutrons={18} electrons={17} />
          <p className="text-sm">Natural abundance ≈ 75.77%.</p>
          <BohrAtom shells={3} electrons={[2, 8, 7]} protons={17} neutrons={18} label="Chlorine-35 (2, 8, 7)" />
        </div>
        <div className="space-y-3">
          <IsotopeNucleus label={<><Nuclide symbol="Cl" mass={37} atomic={17} /> Chlorine-37</>} protons={17} neutrons={20} electrons={17} />
          <p className="text-sm">Natural abundance ≈ 24.23%.</p>
          <BohrAtom shells={3} electrons={[2, 8, 7]} protons={17} neutrons={20} label="Chlorine-37 (2, 8, 7)" />
        </div>
      </div>
    ),
  },
  {
    number: 19,
    question: 'Discuss isotopes of uranium element.',
    answer: (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-line p-3 text-left">Property</th>
              <th className="border border-line p-3 text-left">Uranium-234</th>
              <th className="border border-line p-3 text-left">Uranium-235</th>
              <th className="border border-line p-3 text-left">Uranium-238</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-line p-3">Uses</td>
              <td className="border border-line p-3">Rare, so it has little practical use.</td>
              <td className="border border-line p-3">Used in nuclear reactors and atomic bombs (it is fissile).</td>
              <td className="border border-line p-3">Not fissile itself, but used to breed plutonium-239 in reactors.</td>
            </tr>
            <tr>
              <td className="border border-line p-3">Natural abundance</td>
              <td className="border border-line p-3">0.0055%</td>
              <td className="border border-line p-3">0.72%</td>
              <td className="border border-line p-3">99.27%</td>
            </tr>
            <tr>
              <td className="border border-line p-3">Sub-atomic particles</td>
              <td className="border border-line p-3">92 electrons, 92 protons, 142 neutrons</td>
              <td className="border border-line p-3">92 electrons, 92 protons, 143 neutrons</td>
              <td className="border border-line p-3">92 electrons, 92 protons, 146 neutrons</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    number: 20,
    question: 'Explain the decay (disintegration) of uranium-238 isotope by nuclear fission reaction. How much energy is released by nuclear fission reaction of Uranium-235?',
    answer: (
      <>
        <p>
          Uranium-238 nuclei decay into thorium-234 nuclei by emitting alpha (α) particles. Alpha particles are
          doubly positively charged helium nuclei (<Chem>He<sup>2+</sup></Chem>).
        </p>
        <Equation>
          <Nuclide symbol="U" mass={238} atomic={92} /> → <Nuclide symbol="Th" mass={234} atomic={90} /> + <Nuclide symbol="He" mass={4} atomic={2} />
        </Equation>
        <p>
          The fission (splitting) of Uranium-235 nuclei produces smaller nuclei, neutrons, and a large amount of
          energy. Nuclear reactions release far more energy than chemical reactions because in chemical reactions
          only electrons are rearranged, while in nuclear reactions the nucleons (protons and neutrons) themselves
          are rearranged.
        </p>
        <p>
          The nuclear energy released by the fission of one kilogram of uranium-235 is roughly equivalent to the
          chemical energy released by burning about 2,700 tonnes of coal.
        </p>
      </>
    ),
  },
  {
    number: 22,
    question: 'What is dating? How can we estimate the age of a dead sample (bone, jaw or a piece of wood etc.)?',
    tag: 'Important Information',
    answer: (
      <>
        <p>
          Carbon-14 is used to estimate the age of carbon-containing substances (bone, jaw, wood, etc.). This
          process is called carbon dating.
        </p>
        <p>
          Living organisms continuously exchange carbon-14 with the atmosphere while alive. Once they die, they
          stop taking in new carbon-14, and the carbon-14 already present begins to decay at a known, constant rate.
          By comparing the remaining carbon-14 activity in a sample with that in living tissue, we can determine
          the approximate age of the sample.
        </p>
      </>
    ),
  },
  {
    number: 23,
    question: 'Write down the uses of isotopes.',
    answer: (
      <PointList
        items={[
          <>Radioactive iodine-131 is used to diagnose and treat thyroid diseases.</>,
          <>Sodium-24 is used to detect obstructions in the blood circulatory system.</>,
          <>Iodine-123 is used to image the brain.</>,
          <>Cobalt-60 is used to treat tumors (radiotherapy).</>,
          <>Carbon-14 is used to trace the path of carbon in photosynthesis.</>,
          <>Radioactive isotopes are used to determine the structures of molecules.</>,
          <>Radioactive isotopes are used to study reaction mechanisms.</>,
          <>Radioactive isotopes are used to date rocks, soil, archaeological objects and mummies.</>,
        ]}
      />
    ),
  },
  {
    number: 26,
    question: 'How many electrons can be placed in different shells and sub-shells? Give examples.',
    answer: (
      <>
        <h3 className="text-lg font-semibold">Shells</h3>
        <p>
          The formula 2n² gives the maximum number of electrons a shell can hold.
        </p>
        <Equation>Maximum electrons = 2n<sup>2</sup></Equation>
        <PointList
          items={[
            <>K-shell: n = 1 → 2(1)² = 2 electrons.</>,
            <>L-shell: n = 2 → 2(2)² = 8 electrons.</>,
            <>M-shell: n = 3 → 2(3)² = 18 electrons.</>,
          ]}
        />
        <h3 className="mt-6 text-lg font-semibold">Sub-shells</h3>
        <PointList
          items={[
            <>s sub-shell can hold a maximum of 2 electrons.</>,
            <>p sub-shell can hold a maximum of 6 electrons.</>,
            <>d sub-shell can hold a maximum of 10 electrons.</>,
            <>f sub-shell can hold a maximum of 14 electrons.</>,
          ]}
        />
        <ShellSubshellDiagram />
      </>
    ),
  },
  {
    number: 29,
    question: 'Define Aufbau principle. How are electrons filled in different sub-shells?',
    answer: (
      <>
        <p>
          The Aufbau principle states that electrons occupy the lowest-energy sub-shells first, before filling
          higher-energy sub-shells.
        </p>
        <Equation>
          1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d &lt; 4p …
        </Equation>
        <p>The number of electrons in a sub-shell is written as a superscript after its symbol.</p>
      </>
    ),
  },
  {
    number: 30,
    question: 'Show the electronic configurations of helium, sodium, and phosphorus.',
    answer: (
      <div className="space-y-3">
        <p><strong>Helium (2 electrons):</strong> <OrbitalConfig text="1s2" /></p>
        <p><strong>Sodium (11 electrons):</strong> <OrbitalConfig text="1s2 2s2 2p6 3s1" /></p>
        <p><strong>Phosphorus (15 electrons):</strong> <OrbitalConfig text="1s2 2s2 2p6 3s2 3p3" /></p>
      </div>
    ),
  },
];
 
const exerciseShort = [
  {
    label: '(i)',
    question: 'Distinguish between shell and sub-shell.',
    answer: (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-line p-3 text-left">Point</th>
              <th className="border border-line p-3 text-left">Shells</th>
              <th className="border border-line p-3 text-left">Sub-shells</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-line p-3">1</td>
              <td className="border border-line p-3">Circular paths around the nucleus in which electrons revolve.</td>
              <td className="border border-line p-3">Smaller regions/spaces into which shells are subdivided.</td>
            </tr>
            <tr>
              <td className="border border-line p-3">2</td>
              <td className="border border-line p-3">Represented by K, L, M and N, with n values 1, 2, 3 and 4.</td>
              <td className="border border-line p-3">Represented by s, p, d and f.</td>
            </tr>
            <tr>
              <td className="border border-line p-3">3</td>
              <td className="border border-line p-3">Maximum electrons calculated using 2n².</td>
              <td className="border border-line p-3">s = 2, p = 6, d = 10, f = 14.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    label: '(ii)',
    question: 'An atom is electrically neutral — why?',
    answer: (
      <p>
        An atom has an equal number of electrons and protons, so the magnitude of negative charge equals the
        magnitude of positive charge. The two cancel out, making the atom electrically neutral overall.
      </p>
    ),
  },
  {
    label: '(iii)',
    question: 'How many sub-shells are there in the N-shell?',
    answer: (
      <p>
        Since the N-shell has n = 4, it has four sub-shells: 4s, 4p, 4d and 4f.
      </p>
    ),
  },
  {
    label: '(iv)',
    question: 'Give notations for sub-shells of the M-shell.',
    answer: <p>3s, 3p, 3d</p>,
  },
  {
    label: '(v)',
    question: 'List the sub-shells of the M-shell in order of increasing energy.',
    answer: <Equation>3s &lt; 3p &lt; 3d</Equation>,
  },
  {
    label: '(vi)',
    question: 'Can you identify an atom without knowing the number of neutrons in it?',
    answer: (
      <p>
        Yes. An atom of an element is identified by the number of protons in its nucleus (the atomic number),
        regardless of how many neutrons it has. Atomic number, not neutron count, gives an element its identity.
      </p>
    ),
  },
];
 
const exerciseLong = [
  {
    number: 3,
    question: 'The electronic configurations listed are incorrect. Explain what mistake has been made in each and write correct electronic configurations.',
    answer: (
      <>
        <p>
          Electronic configuration is written according to the Aufbau principle, which states that electrons fill
          the lower-energy sub-shell first.
        </p>
        <Equation>
          1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d &lt; 4p …
        </Equation>
        <PointList
          type="alpha"
          items={[
            <>x = <OrbitalConfig text="1s2 2s2 2p4 3p2" /> is wrong because 2p is left incomplete before 3p is filled. Correct: <OrbitalConfig text="1s2 2s2 2p6" />.</>,
            <>y = <OrbitalConfig text="1s2 2s1 2p1" /> is wrong because 2s is left incomplete before 2p is started. Correct: <OrbitalConfig text="1s2 2s2" />.</>,
            <>z = <OrbitalConfig text="1s2 2s2 2p5 3s1" /> is wrong because 2p is left incomplete before 3s is filled. Correct: <OrbitalConfig text="1s2 2s2 2p6" />.</>,
          ]}
        />
      </>
    ),
  },
  {
    number: 4,
    question: 'Which orbital in each of the following pairs is lower in energy?',
    answer: (
      <PointList
        type="alpha"
        items={[
          <>2s is lower in energy than 2p.</>,
          <>2p is lower in energy than 3p.</>,
          <>3s is lower in energy than 4s.</>,
        ]}
      />
    ),
  },
  {
    number: 5,
    question: 'Draw Bohr\u2019s model for potassium, silicon and argon indicating electrons, protons and neutrons.',
    answer: (
      <div className="grid gap-5 lg:grid-cols-3">
        <BohrAtom shells={4} electrons={[2, 8, 8, 1]} protons={19} neutrons={20} label="Potassium-39 (2, 8, 8, 1)" />
        <BohrAtom shells={3} electrons={[2, 8, 4]} protons={14} neutrons={14} label="Silicon-28 (2, 8, 4)" />
        <BohrAtom shells={3} electrons={[2, 8, 8]} protons={18} neutrons={22} label="Argon-40 (2, 8, 8)" />
      </div>
    ),
  },
  {
    number: 7,
    question: 'Describe the contribution that Rutherford made to the development of the atomic theory.',
    answer: (
      <>
        <p>Rutherford's gold-foil experiment and atomic model made a major contribution to atomic theory.</p>
        <PointList
          items={[
            <>An atom is electrically neutral because it has an equal number of electrons and protons.</>,
            <>Almost all of an atom's mass is concentrated in a tiny, positively charged central region called the nucleus.</>,
            <>Electrons revolve around the nucleus in circular paths called orbits, just as planets revolve around the sun.</>,
            <>The centripetal force acting on a revolving electron equals the electrostatic force of attraction between the electron and the nucleus.</>,
          ]}
        />
        <PlanetaryAtomDiagram label="Rutherford atomic model" />
      </>
    ),
  },
  {
    number: 8,
    question: 'Explain how Bohr\u2019s atomic theory differed from Rutherford\u2019s atomic theory.',
    answer: (
      <PointList
        items={[
          <>Rutherford's model implied that a revolving electron should continuously lose energy and eventually spiral into the nucleus. Bohr proposed instead that an electron in a given orbit has fixed, constant energy.</>,
          <>Rutherford's model implied continuous emission of energy and hence a continuous spectrum. Bohr's model correctly predicted discontinuous (quantized) emission, producing a line spectrum.</>,
        ]}
      />
    ),
  },
  {
    number: 9,
    question: 'Describe the presence of sub-shells in a shell.',
    answer: (
      <>
        <p>
          Each shell is further divided into smaller regions called sub-shells. The number of sub-shells present
          in a given shell equals the "n" value of that shell.
        </p>
        <ShellSubshellDiagram />
      </>
    ),
  },
  {
    number: 10,
    question: 'State the importance and uses of isotopes in various fields of life.',
    answer: (
      <PointList
        items={[
          <>Radioactive iodine-131 is used to diagnose and treat thyroid diseases.</>,
          <>Sodium-24 is used to detect obstructions in the blood circulatory system.</>,
          <>Iodine-123 is used to image the brain.</>,
          <>Cobalt-60 is used to treat tumors.</>,
          <>Carbon-14 is used to trace the path of carbon in photosynthesis.</>,
          <>Radioactive isotopes are used to determine the structures of molecules.</>,
          <>Radioactive isotopes are used to study reaction mechanisms.</>,
          <>Radioactive isotopes are used to date rocks, soil and mummies.</>,
        ]}
      />
    ),
  },
  {
    number: 11,
    question: 'The atomic number of an element is 23 and its mass number is 56.',
    answer: (
      <PointList
        type="alpha"
        items={[
          <>It has 23 protons and 23 electrons.</>,
          <>Number of neutrons = 56 − 23 = 33.</>,
        ]}
      />
    ),
  },
  {
    number: 12,
    question: 'The atomic symbol of aluminium is written in nuclide notation, ²⁷₁₃Al. What information do you get from it?',
    answer: (
      <p>
        Since the atomic number of aluminium is 13, it has 13 protons in the nucleus and 13 electrons around it.
        The mass number is 27, so the number of neutrons is 27 − 13 = 14.
      </p>
    ),
  },
  {
    number: 13,
    question: 'How does testing prevailing theories bring about changes in them?',
    answer: (
      <p>
        Dalton's atomic theory was widely accepted because it explained data from many experiments. But the
        discovery of sub-atomic particles and isotopes proved some ideas of Dalton's atomic theory wrong. However,
        scientists did not reject Dalton's atomic theory outright — they revised it in light of new discoveries.
      </p>
    ),
  },
  {
    number: 14,
    question: 'How do experimental results of some scientists help chemists formulate new theories and explanations?',
    answer: (
      <p>
        Rutherford carried out extensive experimental work and used it to present his atomic model. Later, Bohr
        identified the weaknesses in Rutherford's model — based on Rutherford's own experimental results — and
        proposed a refined model, now called Bohr's atomic model.
      </p>
    ),
  },
  {
    number: 15,
    question: 'M-24 is a radioactive isotope used to diagnose restricted blood circulation. How many electrons, protons and neutrons are there in this isotope? The valence-shell electronic configuration of M is 3s¹.',
    answer: (
      <>
        <p>First write the complete electronic configuration based on the valence-shell configuration given.</p>
        <Equation>M = <OrbitalConfig text="1s2 2s2 2p6 3s1" /></Equation>
        <p>The total number of electrons is 11 (this identifies M as sodium), so it has 11 electrons and 11 protons.</p>
        <Equation>Number of neutrons = 24 − 11 = 13</Equation>
      </>
    ),
  },
  {
    number: 16,
    question: 'Two isotopes of chlorine are chlorine-35 and chlorine-37. How do these isotopes differ? How are they alike?',
    answer: (
      <>
        <h3 className="text-lg font-semibold">Differences</h3>
        <PointList
          items={[
            <>They have different mass numbers, because they have different numbers of neutrons (18 vs. 20).</>,
            <>They have different physical properties (e.g., slightly different densities).</>,
          ]}
        />
        <h3 className="mt-6 text-lg font-semibold">Similarities</h3>
        <PointList
          items={[
            <>They have the same atomic number — same number of protons (17) and electrons (17).</>,
            <>They have similar chemical properties, since chemical behaviour depends on valence electrons.</>,
          ]}
        />
      </>
    ),
  },
  {
    number: 17,
    question: 'How many electrons can be placed in all of the sub-shells in the shell with n = 2?',
    answer: (
      <>
        <p>
          For n = 2, the shell has two sub-shells: 2s and 2p. The s sub-shell holds a maximum of 2 electrons and
          the p sub-shell holds a maximum of 6 electrons.
        </p>
        <Equation>2 + 6 = 8 electrons</Equation>
      </>
    ),
  },
  {
    number: 18,
    question: 'The mass number of an atom indicates the total number of protons and neutrons in the nucleus. Can you identify an atom without knowing its neutrons?',
    answer: (
      <p>
        Yes. To identify an element, all we need is its proton number (atomic number), since that gives the atom
        its real identity and never changes for a given element — regardless of how many neutrons it has.
      </p>
    ),
  },
  {
    number: 19,
    question: 'The table shows the nuclei of five different atoms.',
    answer: (
      <>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-line p-3 text-left">Atom</th>
                <th className="border border-line p-3 text-left">Protons</th>
                <th className="border border-line p-3 text-left">Neutrons</th>
              </tr>
            </thead>
            <tbody>
              {[['A', 5, 6], ['B', 6, 6], ['C', 6, 7], ['D', 7, 7], ['E', 8, 8]].map(([a, p, n]) => (
                <tr key={String(a)}>
                  <td className="border border-line p-3">{a}</td>
                  <td className="border border-line p-3">{p}</td>
                  <td className="border border-line p-3">{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 space-y-3">
          <p><strong>(a)</strong> Atom E has the highest mass number (8 + 8 = 16).</p>
          <p><strong>(b)</strong> Atoms B and C are isotopes (both have 6 protons, but different neutron counts).</p>
          <p><strong>(c)</strong> Atom A has the fewest electrons (5).</p>
          <p><strong>(d)</strong> Atom D (7 protons, nitrogen) has electronic configuration <OrbitalConfig text="1s2 2s2 2p3" />.</p>
          <p><strong>(e)</strong> Atom E has the highest number of electrons (8).</p>
        </div>
      </>
    ),
  },
  {
    number: 20,
    question: 'Naturally occurring nitrogen has two isotopes, N-14 and N-15. Select the isotope that has a greater number of neutrons.',
    answer: (
      <p>
        A greater mass number (for the same element) means a greater number of neutrons. Therefore, nitrogen-15
        has more neutrons than nitrogen-14.
      </p>
    ),
  },
];
 
const mcqs = [
  ['According to Bohr\u2019s atomic model, the farther the electron is from the nucleus, the more energy it has.', 'D'],
  ['Chlorine has two isotopes, both of which have the same number of electrons.', 'D'],
  ['Number of neutrons in the given atom is 14.', 'B'],
  ['Cobalt-60 is commonly used to irradiate cancer cells.', 'C'],
  ['The M-shell has sub-shells 3s, 3p, 3d.', 'C'],
  ['The p sub-shell can accommodate 6 electrons.', 'C'],
  ['₁₁Na has electronic configuration 1s² 2s² 2p⁶ 3s¹.', 'D'],
  ['Rutherford used He²⁺ particles in his experiment.', 'C'],
  ['"Isotopes have the same physical properties" is not correct.', 'D'],
  ['U-235 is used in nuclear reactors.', 'C'],
];
 
export default function UnitTwoPage() {
  return (
    <div className="container-wide py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Fundamentals', href: '/fundamentals' },
          { label: 'Atomic Structure' },
        ]}
      />
 
      <section className="page-heading-box mt-6">
        <span className="eyebrow mb-2">Fundamentals · Unit 02</span>
        <h1>Atomic Structure</h1>
        <p className="mt-3 max-w-3xl leading-relaxed">
          Rutherford and Bohr atomic models, isotopes, shells, sub-shells, electronic configuration and applications of isotopes.
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
                Definitions, properties, short explanations, quick comparisons and short exercise answers.
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
                Atomic models, diagrams, structured comparisons, isotope applications and electronic configuration.
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
            <QuestionCard key={item.number} number={item.number} question={item.question}>
              <AnswerBlock>{item.answer}</AnswerBlock>
            </QuestionCard>
          ))}
        </div>
 
        <div className="mt-10 card p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <CircleDot className="h-5 w-5 text-brand-700" />
            <h2 className="text-xl font-semibold">Exercise — Short Answers</h2>
          </div>
          <div className="mt-6 space-y-7">
            {exerciseShort.map((item) => (
              <div key={item.label}>
                <h3 className="text-lg font-semibold leading-7">
                  {item.label} {item.question}
                </h3>
                <AnswerBlock>{item.answer}</AnswerBlock>
              </div>
            ))}
          </div>
        </div>
 
        <div className="mt-10 card p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <FlaskConical className="h-5 w-5 text-brand-700" />
            <h2 className="text-xl font-semibold">Practice MCQs</h2>
          </div>
          <div className="mt-6 space-y-4">
            {mcqs.map(([statement, answer], index) => (
              <div key={index} className="rounded-lg bg-brand-50/30 p-4">
                <p><strong>{index + 1}.</strong> {statement}</p>
                <p className="mt-2 text-sm"><strong>Correct option:</strong> {answer}</p>
              </div>
            ))}
          </div>
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
            <QuestionCard
              key={String(item.number)}
              number={item.number}
              question={item.question}
              tag={'tag' in item ? item.tag : undefined}
            >
              <AnswerBlock>{item.answer}</AnswerBlock>
            </QuestionCard>
          ))}
        </div>
 
        <div className="mt-10">
          <div className="mb-6 flex items-center gap-3">
            <Atom className="h-5 w-5 text-brand-700" />
            <h2 className="text-2xl font-semibold">Exercise — Long Questions</h2>
          </div>
 
          <div className="space-y-7">
            {exerciseLong.map((item) => (
              <QuestionCard key={item.number} number={item.number} question={item.question}>
                <AnswerBlock>{item.answer}</AnswerBlock>
              </QuestionCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
 


