import type { ReactNode } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Solutions',
};

type QA = {
  number: string;
  question: ReactNode;
  answer: ReactNode;
  tag?: string;
};

function SectionHeading({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <div className="unit-section-heading">
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}

function QuestionCard({ item }: { item: QA }) {
  return (
    <article className="card unit-question-card">
      <div className="unit-question-row">
        <span className="unit-question-number">Q {item.number}.</span>
        <div className="unit-question-content">
          <h3>{item.question}</h3>
          {item.tag ? <span className="unit-tag">{item.tag}</span> : null}
          <div className="unit-answer">
            <span className="unit-answer-label">Answer</span>
            <div className="unit-answer-body">{item.answer}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Formula({ children }: { children: ReactNode }) {
  return <div className="formula-box">{children}</div>;
}

function Note({ children }: { children: ReactNode }) {
  return <div className="unit-note">{children}</div>;
}

function SubHeading({ children }: { children: ReactNode }) {
  return <h4 className="unit-subheading">{children}</h4>;
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
    <div className="unit-points">
      {items.map((item, index) => {
        const marker =
          type === 'alpha'
            ? `(${alpha[index]})`
            : type === 'number'
              ? `${index + 1}.`
              : `${roman[index]}.`;

        return (
          <div className="unit-point" key={index}>
            <strong>{marker}</strong>
            <div>{item}</div>
          </div>
        );
      })}
    </div>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: ReactNode[];
  rows: ReactNode[][];
}) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td key={c}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SaturationDiagram() {
  return (
    <div className="diagram-box">
      <h4>Unsaturated → Saturated → Supersaturated</h4>
      <svg viewBox="0 0 900 280" role="img" aria-label="Types of solutions by amount of dissolved solute">
        <rect x="40" y="70" width="220" height="150" rx="18" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="340" y="70" width="220" height="150" rx="18" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="640" y="70" width="220" height="150" rx="18" fill="none" stroke="currentColor" strokeWidth="3" />

        {[
          [85,120],[130,140],[175,110],[220,155],[105,185],[165,185]
        ].map(([x,y],i)=><circle key={`u-${i}`} cx={x} cy={y} r="8" fill="currentColor"/>)}

        {[
          [380,115],[420,145],[460,110],[500,160],[400,190],[450,185],[515,120],[525,195],[370,175],[480,140]
        ].map(([x,y],i)=><circle key={`s-${i}`} cx={x} cy={y} r="8" fill="currentColor"/>)}

        {[
          [675,105],[710,135],[745,100],[780,145],[820,110],[690,180],[730,190],[770,175],[810,190],[835,150],
          [705,155],[755,135],[795,120],[820,175]
        ].map(([x,y],i)=><circle key={`ss-${i}`} cx={x} cy={y} r="8" fill="currentColor"/>)}

        <text x="150" y="45" textAnchor="middle" fill="currentColor" fontSize="22">Unsaturated</text>
        <text x="450" y="45" textAnchor="middle" fill="currentColor" fontSize="22">Saturated</text>
        <text x="750" y="45" textAnchor="middle" fill="currentColor" fontSize="22">Supersaturated</text>
      </svg>
      <p>Diagram shows the relative amount of dissolved solute in the same amount of solvent.</p>
    </div>
  );
}

function NineSolutionsDiagram() {
  const cells = [
    ['Gas in gas', 'Air'],
    ['Gas in liquid', 'Oxygen in sea water'],
    ['Gas in solid', 'Hydrogen on nickel'],
    ['Liquid in gas', 'Mist / fog / clouds'],
    ['Liquid in liquid', 'Vinegar / rectified spirit'],
    ['Liquid in solid', 'Amalgam'],
    ['Solid in gas', 'Smoke / dust in air'],
    ['Solid in liquid', 'Salt or sugar in water'],
    ['Solid in solid', 'Brass / bronze'],
  ];

  return (
    <div className="diagram-box">
      <h4>Nine physical-state combinations of solutions</h4>
      <div className="solution-grid">
        {cells.map(([type, example]) => (
          <div className="solution-grid-cell" key={type}>
            <strong>{type}</strong>
            <span>{example}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HydrogenBondingDiagram() {
  return (
    <div className="diagram-box">
      <h4>Hydrogen bonding between water and methanol</h4>
      <svg viewBox="0 0 900 260" role="img" aria-label="Hydrogen bonding between water and methanol">
        <text x="110" y="140" fill="currentColor" fontSize="34">H—O—H</text>
        <text x="540" y="140" fill="currentColor" fontSize="34">CH₃—O—H</text>
        <line x1="300" y1="130" x2="520" y2="130" stroke="currentColor" strokeWidth="3" strokeDasharray="10 10"/>
        <text x="330" y="105" fill="currentColor" fontSize="18">hydrogen bond</text>
      </svg>
      <p>Water and methanol have polar O—H groups and can form hydrogen bonds with one another.</p>
    </div>
  );
}

function NaClHydrationDiagram() {
  return (
    <div className="diagram-box">
      <h4>Hydration of Na⁺ and Cl⁻ ions</h4>
      <svg viewBox="0 0 900 320" role="img" aria-label="Water molecules surrounding sodium and chloride ions">
        <circle cx="240" cy="160" r="55" fill="none" stroke="currentColor" strokeWidth="3"/>
        <text x="240" y="172" textAnchor="middle" fill="currentColor" fontSize="30">Na⁺</text>

        <circle cx="660" cy="160" r="55" fill="none" stroke="currentColor" strokeWidth="3"/>
        <text x="660" y="172" textAnchor="middle" fill="currentColor" fontSize="30">Cl⁻</text>

        {[
          [120,95,0],[120,225,0],[240,55,90],[240,265,90],[355,95,180],[355,225,180]
        ].map(([x,y,r],i)=>(
          <g key={`na-${i}`} transform={`translate(${x} ${y}) rotate(${r})`}>
            <text x="0" y="0" textAnchor="middle" fill="currentColor" fontSize="24">H—O—H</text>
          </g>
        ))}

        {[
          [540,95,180],[540,225,180],[660,55,90],[660,265,90],[775,95,0],[775,225,0]
        ].map(([x,y,r],i)=>(
          <g key={`cl-${i}`} transform={`translate(${x} ${y}) rotate(${r})`}>
            <text x="0" y="0" textAnchor="middle" fill="currentColor" fontSize="24">H—O—H</text>
          </g>
        ))}
      </svg>
      <p>The polar ends of water molecules attract Na⁺ and Cl⁻ ions and help pull the ionic solid apart.</p>
    </div>
  );
}

function SolubilityGraph() {
  return (
    <div className="diagram-box">
      <h4>Solubility of salts with temperature</h4>
      <svg viewBox="0 0 900 460" role="img" aria-label="Conceptual solubility curves">
        <line x1="90" y1="390" x2="840" y2="390" stroke="currentColor" strokeWidth="3"/>
        <line x1="90" y1="390" x2="90" y2="55" stroke="currentColor" strokeWidth="3"/>

        {[0,20,40,60,80,100].map((t,i)=>(
          <g key={t}>
            <line x1={90+i*140} y1="390" x2={90+i*140} y2="402" stroke="currentColor" strokeWidth="2"/>
            <text x={90+i*140} y="425" textAnchor="middle" fill="currentColor" fontSize="18">{t}</text>
          </g>
        ))}

        {[20,40,60,80,100,120].map((s,i)=>(
          <g key={s}>
            <line x1="78" y1={350-i*50} x2="90" y2={350-i*50} stroke="currentColor" strokeWidth="2"/>
            <text x="65" y={356-i*50} textAnchor="end" fill="currentColor" fontSize="18">{s}</text>
          </g>
        ))}

        <text x="470" y="455" textAnchor="middle" fill="currentColor" fontSize="20">Temperature (°C)</text>
        <text x="25" y="225" textAnchor="middle" fill="currentColor" fontSize="20" transform="rotate(-90 25 225)">
          Solubility (g / 100 g water)
        </text>

        <polyline points="90,330 230,300 370,250 510,185 650,110 790,70"
          fill="none" stroke="currentColor" strokeWidth="4"/>
        <polyline points="90,305 230,290 370,272 510,250 650,225 790,205"
          fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="14 8"/>
        <polyline points="90,300 230,296 370,292 510,288 650,284 790,280"
          fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="4 8"/>

        <text x="800" y="68" fill="currentColor" fontSize="18">KNO₃</text>
        <text x="800" y="204" fill="currentColor" fontSize="18">KBr</text>
        <text x="800" y="282" fill="currentColor" fontSize="18">NaCl</text>
      </svg>
      <p>Conceptual curve showing strong, moderate and small temperature effects. Use the values stated in the questions when answering numerical graph questions.</p>
    </div>
  );
}

function SolutionColloidSuspensionDiagram() {
  return (
    <div className="diagram-box">
      <h4>Relative particle sizes</h4>
      <svg viewBox="0 0 900 300" role="img" aria-label="Solution colloid suspension particle size comparison">
        <rect x="60" y="70" width="220" height="170" rx="18" fill="none" stroke="currentColor" strokeWidth="3"/>
        <rect x="340" y="70" width="220" height="170" rx="18" fill="none" stroke="currentColor" strokeWidth="3"/>
        <rect x="620" y="70" width="220" height="170" rx="18" fill="none" stroke="currentColor" strokeWidth="3"/>

        {[...Array(20)].map((_,i)=>(
          <circle key={`a-${i}`} cx={85+(i%5)*38} cy={100+Math.floor(i/5)*35} r="3" fill="currentColor"/>
        ))}
        {[...Array(12)].map((_,i)=>(
          <circle key={`b-${i}`} cx={370+(i%4)*48} cy={105+Math.floor(i/4)*52} r="8" fill="currentColor"/>
        ))}
        {[...Array(7)].map((_,i)=>(
          <circle key={`c-${i}`} cx={655+(i%3)*65} cy={105+Math.floor(i/3)*60} r="17" fill="currentColor"/>
        ))}

        <text x="170" y="45" textAnchor="middle" fill="currentColor" fontSize="22">Solution</text>
        <text x="450" y="45" textAnchor="middle" fill="currentColor" fontSize="22">Colloid</text>
        <text x="730" y="45" textAnchor="middle" fill="currentColor" fontSize="22">Suspension</text>
      </svg>
    </div>
  );
}

const shortQuestions: QA[] = [
  {
    number: '1',
    question: 'Define solution, solute and solvent. Give examples.',
    answer: (
      <>
        <SubHeading>Solution</SubHeading>
        <p>
          A homogeneous mixture of two or more substances which has uniform composition throughout is called a homogeneous solution.
          Sugar dissolved in water is an example of solution. A solution has one phase.
        </p>
        <p>
          The physical state of solution is determined by the physical state of solvent. If solvent is liquid, the solution will be liquid.
          If solvent is solid, the solution will be solid.
        </p>

        <SubHeading>Solute</SubHeading>
        <p>
          The substance which is found in lesser amount in a solution is called solute. For example, in salt water, salt is solute.
        </p>

        <SubHeading>Solvent</SubHeading>
        <p>
          The substance present in larger amount in a solution is called solvent. For example, in salt water, water is solvent.
        </p>
      </>
    ),
  },
  {
    number: '2',
    question: 'What is aqueous solution? Give examples.',
    answer: (
      <p>
        A solution in which water is solvent is called aqueous solution. Sugar dissolved in water is an example.
        The word aqueous comes from the Latin word “aqua”, meaning water.
      </p>
    ),
  },
  {
    number: '3',
    question: 'Define dilute solution and concentrated solution with examples.',
    answer: (
      <>
        <p>
          A solution which has relatively lesser amount of solute at a given temperature is called dilute solution.
          A solution which has relatively more solute at a given temperature is called concentrated solution.
        </p>
        <p>
          Example: 2 g sodium chloride in 100 g water is more dilute than 6 g sodium chloride in 100 g water.
        </p>
      </>
    ),
  },
  {
    number: '4',
    question: 'Describe the classes of solution on the basis of quantity of solute dissolved.',
    answer: (
      <PointList type="alpha" items={[
        <>Unsaturated solution</>,
        <>Saturated solution</>,
        <>Supersaturated solution</>,
      ]}/>
    ),
  },
  {
    number: '5',
    question: 'Define unsaturated solution. Give example.',
    answer: (
      <p>
        A solution which can dissolve more solute in 100 g solvent at a given temperature is called unsaturated solution.
        Example: 2 g sodium chloride dissolved in 100 g water at 50 °C.
      </p>
    ),
  },
  {
    number: '6',
    question: 'Define saturated solution with example.',
    answer: (
      <p>
        A solution which cannot dissolve any more solute in a given solvent at a given temperature is called saturated solution.
        Example from the supplied material: 35.7 g sodium chloride dissolved in 100 g water at room temperature (25 °C).
      </p>
    ),
  },
  {
    number: '7',
    question: 'Explain supersaturated solution. Give example.',
    answer: (
      <>
        <p>
          A solution which has more solute dissolved than a saturated solution in a given solvent at a given temperature is called supersaturated solution.
        </p>
        <p>
          It can be produced by heating a saturated solution so that more solute dissolves and then cooling it slowly.
          If extra solute does not crystallize out, the cooled solution contains more dissolved solute than the normal saturated solution at that temperature.
        </p>
        <SaturationDiagram />
      </>
    ),
  },
  {
    number: '8',
    question: 'How is a supersaturated solution prepared? Give example.',
    answer: (
      <>
        <p>
          The supplied example uses sugar. At 25 °C, 210 g sugar is dissolved in 100 cm³ water to obtain a saturated solution.
          On heating to 80 °C, the same amount of water can dissolve 360 g sugar.
        </p>
        <p>
          If that hot saturated solution is cooled slowly to 25 °C without crystallization, the extra dissolved sugar remains in solution.
          The resulting solution is supersaturated.
        </p>
      </>
    ),
  },
  {
    number: '9',
    question: 'Why is a supersaturated solution unstable in presence of crystals of its solute while a saturated solution is stable?',
    answer: (
      <>
        <p>
          A supersaturated solution is unstable because seed crystals cause the extra dissolved solute to crystallize out.
          Crystallization continues until a saturated solution remains.
        </p>
        <p>
          In a saturated solution, added crystals do not trigger further crystallization; they simply remain undissolved and settle.
        </p>
      </>
    ),
  },
  {
    number: '10',
    question: 'Explain types of solutions on the basis of physical states.',
    answer: (
      <>
        <SubHeading>(i) Solutions of gases</SubHeading>
        <PointList type="alpha" items={[
          <>Gas in gas: air.</>,
          <>Gas in liquid: oxygen dissolved in sea water.</>,
          <>Gas in solid: hydrogen gas adsorbed on nickel catalyst.</>,
        ]}/>

        <SubHeading>(ii) Solutions of liquids</SubHeading>
        <PointList type="alpha" items={[
          <>Liquid in gas: mist, clouds and fog.</>,
          <>Liquid in liquid: rectified spirit and vinegar.</>,
          <>Liquid in solid: amalgams, where mercury is mixed with solid metals.</>,
        ]}/>

        <SubHeading>(iii) Solutions of solids</SubHeading>
        <PointList type="alpha" items={[
          <>Solid in gas: smoke or dust particles in air.</>,
          <>Solid in liquid: sugar or salt dissolved in water.</>,
          <>Solid in solid: metal alloys such as brass and bronze.</>,
        ]}/>
        <NineSolutionsDiagram />
      </>
    ),
  },
  {
    number: '11',
    question: 'What is importance of ozone?',
    tag: 'Important information',
    answer: (
      <p>
        Ozone exists in the upper atmosphere and helps prevent harmful ultraviolet (UV) rays from reaching living organisms.
        The supplied content notes that long exposure to UV radiation can damage DNA and contribute to cancer.
      </p>
    ),
  },
  {
    number: '12',
    question: 'What is concentration of solution? Explain it.',
    answer: (
      <>
        <p>
          The quantity of solute dissolved in a given amount of solvent or solution at a given temperature is called concentration of solution.
        </p>
        <SubHeading>(i) Percentage</SubHeading>
        <DataTable
          headers={['Form', 'Meaning', 'Example meaning']}
          rows={[
            ['% v/v', 'Volume solute per 100 volume solution', '10% v/v alcohol = 10 cm³ alcohol in 100 cm³ solution'],
            ['% v/m', 'Volume solute per 100 mass solution', '10% v/m alcohol = 10 cm³ alcohol in 100 g solution'],
            ['% m/m', 'Mass solute per 100 mass solution', '15% m/m sugar = 15 g sugar in 100 g solution'],
            ['% m/v', 'Mass solute per 100 volume solution', '30% m/v salt = 30 g salt in 100 cm³ solution'],
          ]}
        />

        <SubHeading>(ii) Molarity</SubHeading>
        <p>The number of moles of solute dissolved in one liter (1 dm³) of solution is called molarity.</p>
        <Formula>M = moles of solute / volume of solution in dm³</Formula>
      </>
    ),
  },
  {
    number: '13',
    question: 'Define solubility of substances. Give examples.',
    answer: (
      <>
        <p>
          The maximum amount of solute dissolved in 100 g solvent at a given temperature is called solubility of that solute.
        </p>
        <p>
          Example from the supplied material: sodium chloride has solubility 35.7 g per 100 g water at 25 °C.
        </p>
      </>
    ),
  },
  {
    number: '14',
    question: 'Explain the reasons of solubility of substances with examples.',
    answer: (
      <>
        <p>
          A common chemistry rule is “like dissolves like”. Dissolution depends strongly on structure and intermolecular forces.
          Substances with similar polarity and similar intermolecular attractions tend to dissolve in one another.
        </p>
        <p>
          Methanol and water both have polar O—H bonds and can form hydrogen bonds with each other.
        </p>
        <HydrogenBondingDiagram />
      </>
    ),
  },
  {
    number: '15',
    question: 'Why do oil and gasoline not dissolve in water, but dissolve in one another?',
    answer: (
      <p>
        Oil and gasoline are non-polar whereas water is polar and forms hydrogen bonds.
        Oil and gasoline have similar non-polar character and similar weak intermolecular attractions, so they dissolve in one another more readily.
      </p>
    ),
  },
  {
    number: '16',
    question: 'Why does sodium chloride dissolve in water? Give reasons.',
    answer: (
      <>
        <p>
          Sodium chloride contains Na⁺ and Cl⁻ ions. Water is polar: its oxygen end is partially negative and its hydrogen ends are partially positive.
          Water molecules attract the ions and help pull them apart from the crystal.
        </p>
        <p>
          A solute dissolves when solute–solvent attractions become strong enough compared with solute–solute and solvent–solvent attractions.
        </p>
        <NaClHydrationDiagram />
      </>
    ),
  },
  {
    number: '17',
    question: 'Explain the effect of temperature on solubility of salts. OR Explain the solubility graph.',
    answer: (
      <>
        <p>
          Generally, the solubility of many ionic compounds increases as temperature increases.
          The supplied example states that 100 g water dissolves about 34.7 g KCl at 20 °C and about 56.7 g at 100 °C.
        </p>
        <p>
          On cooling, some dissolved solute may crystallize out. Some salts behave differently; the supplied content mentions sodium sulphate as an example whose solubility may decrease over a temperature range.
        </p>
        <SolubilityGraph />
      </>
    ),
  },
  {
    number: '18',
    question: 'Explain the effect of temperature on solubility of gases.',
    answer: (
      <p>
        Solubility of gases in water generally decreases as temperature increases.
        The supplied content uses aquarium fish as an example: warmer water contains less dissolved oxygen, which may cause stress to fish.
      </p>
    ),
  },
  {
    number: '19',
    question: 'Define solutions, colloids and suspensions.',
    answer: (
      <>
        <SubHeading>Solution</SubHeading>
        <p>A homogeneous mixture whose particles are evenly distributed throughout the medium.</p>
        <SubHeading>Colloid</SubHeading>
        <p>A heterogeneous dispersion with very small particles that are not visible to the naked eye.</p>
        <SubHeading>Suspension</SubHeading>
        <p>A heterogeneous mixture with larger particles distributed unevenly; particles may be visible and may settle.</p>
        <SolutionColloidSuspensionDiagram />
      </>
    ),
  },
  {
    number: '20',
    question: 'Compare the properties of solutions, colloids and suspensions.',
    answer: (
      <>
        <DataTable
          headers={['Property', 'Solution', 'Colloid', 'Suspension']}
          rows={[
            ['Nature', 'Homogeneous', 'Heterogeneous', 'Heterogeneous'],
            ['Particle size', 'About 0.1–1 nm', 'About 1–10³ nm', 'Greater than 10³ nm'],
            ['Visibility', 'Not visible as individual particles', 'Not visible to naked eye; may be observed with electron microscope', 'Can be visible to naked eye'],
            ['Ordinary filter paper', 'Particles pass through', 'Particles generally pass through', 'Particles are retained'],
            ['Ultra filtration', 'Particles pass through', 'Particles do not pass through', 'Particles do not pass through'],
            ['Light scattering', 'Does not appreciably scatter light', 'Scatters light', 'Scatters light'],
          ]}
        />
        <Note>
          Ultra filtration uses a semipermeable membrane that allows very small particles to pass while blocking larger particles.
        </Note>
      </>
    ),
  },
];

function SelfAssessment() {
  return (
    <section className="unit-section">
      <SectionHeading kicker="Practice" title="Self Assessment Exercises" />

      <div className="unit-stack">
        <article className="card">
          <h3>Self Assessment Exercise 6.1</h3>
          <p>
            Maximum sodium acetate dissolved in 100 g water: 119 g at 0 °C and 170 g at 100 °C.
          </p>
          <PointList type="alpha" items={[
            <>If 170 g is added at 0 °C, only 119 g dissolves.</>,
            <>The solution is saturated at 0 °C.</>,
            <>If the 119 g solution is heated to 100 °C, it becomes unsaturated because more solute can dissolve.</>,
            <>If a hot solution containing extra dissolved solute is cooled back to 0 °C without crystals appearing, it is supersaturated.</>,
          ]}/>
        </article>

        <article className="card">
          <h3>Self Assessment Exercise 6.2</h3>
          <DataTable
            headers={['Example', 'Solute', 'Solvent', 'Type']}
            rows={[
              ['Deep-sea breathing mixture', 'Helium gas', 'Oxygen gas', 'Gas in gas'],
              ['Brass', 'Zinc', 'Copper', 'Solid in solid'],
              ['Dental filling', 'Mercury', 'Metal', 'Liquid in solid'],
              ['Brine', 'NaCl', 'Water', 'Solid in liquid'],
              ['Chlorinated drinking water', 'Chlorine gas', 'Water', 'Gas in liquid'],
              ['Ruby / gemstone', 'Cr₂O₃', 'Al₂O₃', 'Solid in solid'],
              ['98% H₂SO₄', 'Water', 'Sulphuric acid', 'Liquid in liquid'],
            ]}
          />
        </article>

        <article className="card">
          <h3>Self Assessment Exercise 6.3</h3>
          <PointList type="number" items={[
            <>Four percentage forms: volume/volume, volume/mass, mass/mass and mass/volume.</>,
            <>0.85% m/v NaCl means 0.85 g NaCl is present in enough solution to make 100 cm³.</>,
          ]}/>
        </article>

        <article className="card">
          <h3>Self Assessment Exercise 6.4 — Potassium chlorate (KClO₃)</h3>

          <SubHeading>(a) 1.5 mol in 250 cm³</SubHeading>
          <Formula>V = 250 cm³ = 0.25 dm³</Formula>
          <Formula>M = 1.5 / 0.25 = 6 M</Formula>

          <SubHeading>(b) 75 g KClO₃ in 1.25 dm³</SubHeading>
          <Formula>Molar mass KClO₃ = 39 + 35.5 + 3(16) = 122.5 g mol⁻¹</Formula>
          <Formula>n = 75 / 122.5 ≈ 0.61 mol</Formula>
          <Formula>M = 0.61 / 1.25 ≈ 0.49 M</Formula>

          <SubHeading>(c) 0.25 g residue from 50 cm³ solution</SubHeading>
          <Formula>n = 0.25 / 122.5 ≈ 0.002 mol</Formula>
          <Formula>V = 50 cm³ = 0.05 dm³</Formula>
          <Formula>M ≈ 0.002 / 0.05 = 0.04 M</Formula>
        </article>

        <article className="card">
          <h3>Self Assessment Exercise 6.5</h3>

          <SubHeading>(1) 25 g NaOH in 1 dm³</SubHeading>
          <Formula>n = 25 / 40 = 0.625 mol</Formula>
          <Formula>M ≈ 0.62 M</Formula>

          <SubHeading>(2) Convert 1.2 M NaOH to g dm⁻³</SubHeading>
          <Formula>Mass = 1.2 × 40 = 48 g dm⁻³</Formula>

          <SubHeading>(3) 10 g haemoglobin in 1 dm³; molar mass = 6.51 × 10⁴ g mol⁻¹</SubHeading>
          <Formula>n = 10 / (6.51 × 10⁴) ≈ 1.5 × 10⁻⁴ mol</Formula>
          <Formula>M ≈ 1.5 × 10⁻⁴ M</Formula>
        </article>

        <article className="card">
          <h3>Self Assessment Exercise 6.6 — Preparation from solid solute</h3>

          <SubHeading>(1) Prepare 500 cm³ of 0.2 M KMnO₄</SubHeading>
          <Formula>V = 0.500 dm³</Formula>
          <Formula>n = MV = 0.2 × 0.500 = 0.100 mol</Formula>
          <Formula>Mass = 0.100 × 158 = 15.8 g KMnO₄</Formula>
          <p>Dissolve 15.8 g KMnO₄ and make final solution volume 500 cm³.</p>

          <SubHeading>(2) Prepare 25 cm³ of 0.25 M CuSO₄·5H₂O</SubHeading>
          <Formula>Molar mass CuSO₄·5H₂O = 249.5 g mol⁻¹</Formula>
          <Formula>V = 25 cm³ = 0.025 dm³</Formula>
          <Formula>n = 0.25 × 0.025 = 0.00625 mol</Formula>
          <Formula>Mass = 0.00625 × 249.5 ≈ 1.56 g</Formula>
          <p>Dissolve 1.56 g CuSO₄·5H₂O and make final volume 25 cm³.</p>
        </article>

        <article className="card">
          <h3>Self Assessment Exercise 6.7 — Dilution</h3>

          <SubHeading>(1) 12.1 M HCl → 500 cm³ of 0.1 M HCl</SubHeading>
          <Formula>M₁V₁ = M₂V₂</Formula>
          <Formula>V₁ = (0.1 × 500) / 12.1 ≈ 4.13 cm³</Formula>

          <SubHeading>(2) 2.5 M K₂Cr₂O₇ → 50 cm³ of 0.05 M</SubHeading>
          <Formula>V₁ = (0.05 × 50) / 2.5 = 1 cm³</Formula>

          <SubHeading>(3) 17.8 M CH₃COOH → 1 dm³ of 0.1 M</SubHeading>
          <Formula>V₁ = (0.1 × 1000) / 17.8 ≈ 5.62 cm³</Formula>
        </article>

        <article className="card">
          <h3>Self Assessment Exercise 6.8 — Solubility and polarity</h3>
          <PointList type="number" items={[
            <>NaCl and glucose both dissolve in water, but the supplied material explains the greater solubility of NaCl in terms of stronger attraction between its ions and polar water molecules.</>,
            <>KCl is expected to be more soluble in water than CCl₄, and more soluble in methanol than benzene, because KCl is ionic/polar and prefers polar solvents.</>,
            <>Benzene + CCl₄ and oil + benzene are expected to be miscible because each pair has similar non-polar character. Water + benzene are immiscible.</>,
          ]}/>
        </article>

        <article className="card">
          <h3>Self Assessment Exercise 6.9 — Solubility curve questions</h3>
          <PointList type="number" items={[
            <>KNO₃ and KBr have the same solubility at about 55 °C according to the supplied answer.</>,
            <>KBr solubility at 45 °C is about 80 g per 100 g water.</>,
            <>At 40 °C, NaNO₃ is about 98 g while KBr is about 78 g, so NaNO₃ is greater.</>,
            <>NaCl is identified as the compound whose solubility changes only a little with temperature.</>,
          ]}/>
          <SolubilityGraph />
        </article>
      </div>
    </section>
  );
}

function Numericals() {
  return (
    <section className="unit-section">
      <SectionHeading kicker="Numericals" title="Molarity & Solution Calculations" />

      <div className="unit-stack">
        <article className="card">
          <h3>Type I — Calculate molarity from moles/mass and volume</h3>
          <Formula>M = moles / volume in dm³</Formula>
          <Formula>moles = mass / molar mass</Formula>

          <SubHeading>Example 6.1 — 40 g urea in 500 cm³</SubHeading>
          <Formula>n = 40 / 60 ≈ 0.667 mol</Formula>
          <Formula>V = 500 cm³ = 0.500 dm³</Formula>
          <Formula>M ≈ 0.667 / 0.500 = 1.33 M</Formula>

          <SubHeading>Example 6.2 — 0.05 mol KMnO₄ in 600 cm³</SubHeading>
          <Formula>V = 0.600 dm³</Formula>
          <Formula>M = 0.05 / 0.600 ≈ 0.083 M</Formula>
        </article>

        <article className="card">
          <h3>Type II — Convert molarity into g dm⁻³</h3>
          <SubHeading>Example 6.3 — 0.25 M NaOH</SubHeading>
          <p>0.25 M means 0.25 mol NaOH in 1 dm³ solution.</p>
          <Formula>Mass = moles × molar mass</Formula>
          <Formula>Mass = 0.25 × 40 = 10 g</Formula>
          <Formula>Concentration = 10 g dm⁻³</Formula>
        </article>

        <article className="card">
          <h3>Type III — Convert g dm⁻³ into molarity</h3>
          <SubHeading>Example 6.4 — 5.6 g KOH in 1 dm³</SubHeading>
          <Formula>n = 5.6 / 56 = 0.10 mol</Formula>
          <Formula>M = 0.10 / 1 = 0.10 M</Formula>
        </article>

        <article className="card">
          <h3>Type IV — Prepare a solution of given molarity</h3>
          <SubHeading>Prepare 100 cm³ of 0.2 M KMnO₄</SubHeading>
          <Formula>V = 100 cm³ = 0.100 dm³</Formula>
          <Formula>n = MV = 0.2 × 0.100 = 0.020 mol</Formula>
          <Formula>Mass = 0.020 × 158 = 3.16 g</Formula>
          <p>Dissolve 3.16 g KMnO₄ in water and make final solution volume 100 cm³.</p>
        </article>

        <article className="card">
          <h3>Type V — Prepare a dilute solution from a stock solution</h3>
          <Formula>M₁V₁ = M₂V₂</Formula>
          <SubHeading>18 M H₂SO₄ → 250 cm³ of 0.1 M</SubHeading>
          <Formula>V₁ = (0.1 × 250) / 18 ≈ 1.39 cm³</Formula>
          <p>Measure the required stock solution and dilute to the final volume.</p>
        </article>
      </div>
    </section>
  );
}

function ReviewQuestions() {
  return (
    <section className="unit-section">
      <SectionHeading kicker="Review" title="Review Questions" />

      <div className="unit-stack">
        <article className="card">
          <h3>Q1. Encircle the correct answer</h3>
          <DataTable
            headers={['i','ii','iii','iv','v','vi','vii','viii','ix','x']}
            rows={[['b','c','c','d','b','c','d','c','c','c']]}
          />
        </article>

        <article className="card">
          <h3>Q2. Give short answers</h3>

          <SubHeading>(i) Differentiate saturated and unsaturated solution</SubHeading>
          <DataTable
            headers={['Saturated solution', 'Unsaturated solution']}
            rows={[
              ['Cannot dissolve more solute at the stated temperature.', 'Can dissolve more solute at the stated temperature.'],
              ['Example in supplied material: about 37.5 g NaCl in 100 g water at 25 °C.', 'Example: 2 g NaCl in 100 g water at 25 °C.'],
            ]}
          />

          <SubHeading>(ii) Give an example of a solid solution containing two solids</SubHeading>
          <p>Brass, made from copper and zinc.</p>

          <SubHeading>(iii) Can you call colloid a solution?</SubHeading>
          <p>
            No. A true solution has much smaller particles and does not scatter light appreciably, while a colloid has larger dispersed particles and shows light scattering.
          </p>

          <SubHeading>(iv) Gasoline does not dissolve in water. Why?</SubHeading>
          <p>Gasoline is non-polar while water is polar. This follows the “like dissolves like” principle.</p>

          <SubHeading>(v) Are gemstones solutions?</SubHeading>
          <p>The supplied content treats gemstones as solid-solid solutions.</p>
        </article>

        <article className="card">
          <h3>Q3. What happens when a tiny crystal is added?</h3>
          <PointList type="alpha" items={[
            <>Supersaturated solution: crystallization occurs and a saturated solution forms.</>,
            <>Unsaturated solution: the crystal dissolves.</>,
            <>Saturated solution: the crystal does not dissolve and settles.</>,
          ]}/>
        </article>

        <article className="card">
          <h3>Q4. Why is methanol (CH₃OH) soluble in water but insoluble in benzene?</h3>
          <p>
            Methanol and water are polar and can form hydrogen bonds. Benzene is non-polar, so methanol does not mix well with it.
          </p>
          <HydrogenBondingDiagram />
        </article>

        <article className="card">
          <h3>Q5. Prepare 250 cm³ of 0.5 M MgSO₄ from 2.5 M stock solution</h3>
          <Formula>M₁V₁ = M₂V₂</Formula>
          <Formula>V₁ = (0.5 × 250) / 2.5 = 50 cm³</Formula>
          <p>Take 50 cm³ of 2.5 M stock solution and dilute to a final volume of 250 cm³.</p>
        </article>

        <article className="card">
          <h3>Q6. Complete the NaOH table</h3>
          <DataTable
            headers={['Mass of NaOH (g)', 'Moles', 'Volume (cm³)', 'Molarity']}
            rows={[
              ['20', '0.5', '500', '1.0 M'],
              ['10', '0.25', '1000', '0.25 M'],
              ['0.8', '0.02', '200', '0.10 M'],
            ]}
          />
        </article>

        <article className="card">
          <h3>Q7. Give examples of the following solutions</h3>
          <PointList type="alpha" items={[
            <>Liquid solvent with gaseous solute: oxygen gas dissolved in sea water.</>,
            <>Solid solution of two solids: bronze (copper and tin).</>,
          ]}/>
        </article>

        <article className="card">
          <h3>Q8. Molarity of 1.25 g HCl in 30 cm³ solution</h3>
          <Formula>Molar mass HCl = 36.5 g mol⁻¹</Formula>
          <Formula>n = 1.25 / 36.5 ≈ 0.034 mol</Formula>
          <Formula>V = 30 cm³ = 0.030 dm³</Formula>
          <Formula>M ≈ 0.034 / 0.030 = 1.14 M</Formula>
        </article>

        <article className="card">
          <h3>Q9. Mass of formaldehyde required for 1 dm³ of 11.5 M formalin</h3>
          <Formula>Molar mass HCHO = 30 g mol⁻¹</Formula>
          <Formula>Mass = 11.5 × 30 = 345 g</Formula>
        </article>

        <article className="card">
          <h3>Q10. Molarity of Ca(OH)₂ solution: 5.2 mg in 1000 cm³</h3>
          <Formula>5.2 mg = 0.0052 g</Formula>
          <Formula>Molar mass Ca(OH)₂ = 74 g mol⁻¹</Formula>
          <Formula>n = 0.0052 / 74 ≈ 0.00007 mol</Formula>
          <Formula>M ≈ 7.0 × 10⁻⁵ M</Formula>
        </article>

        <article className="card">
          <h3>Q11. Moles of H₃PO₄ in 1.25 cm³ of 0.5 M solution</h3>
          <Formula>V = 1.25 cm³ = 0.00125 dm³</Formula>
          <Formula>n = MV = 0.5 × 0.00125 = 6.25 × 10⁻⁴ mol</Formula>
        </article>

        <article className="card">
          <h3>Q12. New molarity after adding 100 cm³ water to 100 cm³ of 0.5 M HCl</h3>
          <Formula>M₁V₁ = M₂V₂</Formula>
          <Formula>V₂ = 200 cm³</Formula>
          <Formula>M₂ = (0.5 × 100) / 200 = 0.25 M</Formula>
        </article>

        <article className="card">
          <h3>Q13. How are solutions useful for society? Give examples.</h3>
          <p>
            The supplied content gives air, shampoos, soft drinks, medicines, brass and steel as examples of useful solutions in daily life and technology.
          </p>
        </article>
      </div>
    </section>
  );
}

function ExtendedQuestions() {
  return (
    <section className="unit-section">
      <SectionHeading kicker="Long / Applied" title="Extended Questions" />

      <div className="unit-stack">
        <article className="card">
          <h3>Q1. 10 g solute in 100 g water, then another 4 g dissolves at 20 °C</h3>
          <PointList type="alpha" items={[
            <>The first solution is unsaturated because it can dissolve another 4 g at the same temperature.</>,
            <>The supplied answer treats the final solution as unsaturated because all added solute dissolves; to prove saturation experimentally, more solute would have to be added until no more dissolves.</>,
          ]}/>
        </article>

        <article className="card">
          <h3>Q2. Change saturated ↔ unsaturated solution</h3>
          <SubHeading>(a) Saturated → unsaturated</SubHeading>
          <PointList items={[
            <>Add more solvent.</>,
            <>Increase temperature where solubility increases with temperature.</>,
          ]}/>
          <SubHeading>(b) Unsaturated → saturated</SubHeading>
          <p>Add more solute at the same temperature until no more dissolves; remove excess undissolved solute if required.</p>
        </article>

        <article className="card">
          <h3>Q3. Why is knowing molarity more meaningful than only saying dilute or concentrated?</h3>
          <p>
            “Dilute” and “concentrated” are relative descriptions, while molarity gives a numerical concentration in moles per dm³ and therefore allows calculation and comparison.
          </p>
        </article>

        <article className="card">
          <h3>Q4. Design an experiment to determine solubility of table sugar in water at room temperature</h3>
          <PointList type="number" items={[
            <>Measure 100 g water at room temperature.</>,
            <>Add sugar gradually with stirring until no more dissolves.</>,
            <>Filter away any excess undissolved sugar.</>,
            <>Determine the amount of sugar dissolved, for example by evaporating the filtrate to dryness and weighing the recovered sugar.</>,
            <>Mass of dissolved sugar per 100 g water is its solubility at that temperature.</>,
          ]}/>
          <Note>The supplied content states a value of about 204 g sugar per 100 g water at room temperature.</Note>
        </article>

        <article className="card">
          <h3>Q5. Prepare 10% m/v CuSO₄·5H₂O solution</h3>
          <p>Dissolve 10 g copper sulphate pentahydrate in water and make the final solution volume 100 cm³.</p>
        </article>

        <article className="card">
          <h3>Q6. Benzene exposure limit: 0.32 mg dm⁻³</h3>
          <Formula>0.32 mg = 0.00032 g</Formula>
          <Formula>Molar mass C₆H₆ = 78 g mol⁻¹</Formula>
          <Formula>n = 0.00032 / 78 ≈ 4.1 × 10⁻⁶ mol</Formula>
          <Formula>M ≈ 4 × 10⁻⁶ M</Formula>
        </article>

        <article className="card">
          <h3>Q7. IV solutions: 0.85% m/v NaCl and 5% m/v glucose</h3>
          <SubHeading>(i) NaCl</SubHeading>
          <Formula>0.85 g in 100 cm³ = 0.1 dm³</Formula>
          <Formula>n = 0.85 / 58.5 ≈ 0.0145 mol</Formula>
          <Formula>M ≈ 0.0145 / 0.1 = 0.145 M</Formula>

          <SubHeading>(ii) Glucose</SubHeading>
          <Formula>5 g in 100 cm³ = 0.1 dm³</Formula>
          <Formula>n = 5 / 180 ≈ 0.0278 mol</Formula>
          <Formula>M ≈ 0.0278 / 0.1 = 0.278 M</Formula>
        </article>

        <article className="card">
          <h3>Q8. 100 cm³ NaOH solution leaves 1.5 g residue</h3>
          <Formula>n = 1.5 / 40 = 0.0375 mol</Formula>
          <Formula>V = 100 cm³ = 0.1 dm³</Formula>
          <Formula>M = 0.0375 / 0.1 = 0.375 M</Formula>
        </article>

        <article className="card">
          <h3>Q9. Design an experiment to distinguish saturated and supersaturated solutions</h3>
          <PointList type="number" items={[
            <>Prepare a saturated solution by adding solute until no more dissolves at a fixed temperature.</>,
            <>Filter off undissolved crystals.</>,
            <>Heat the saturated solution and dissolve additional solute.</>,
            <>Cool the solution slowly without disturbing it to produce a supersaturated solution.</>,
            <>Add a small seed crystal to each sample.</>,
            <>In the saturated solution, the crystal remains undissolved. In the supersaturated solution, crystallization of excess solute occurs.</>,
          ]}/>
          <SaturationDiagram />
        </article>
      </div>
    </section>
  );
}

export default function UnitSixPage() {
  return (
    <div className="container-wide unit-page">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Fundamentals', href: '/fundamentals' },
          { label: 'Solutions' },
        ]}
      />

      <section className="page-heading-box unit-hero">
        <span className="eyebrow">Fundamentals · Unit 06</span>
        <h1>Solutions</h1>
        <p>
          Solution, solute, solvent, saturation, concentration, molarity, dilution,
          solubility, colloids and suspensions.
        </p>
      </section>

      <section className="unit-navigation-grid">
        <a href="#short-questions" className="card card-hover unit-nav-card">
          <h2>Short Questions</h2>
          <p>Definitions, types of solutions, concentration, solubility and mixture classification.</p>
        </a>

        <a href="#numericals" className="card card-hover unit-nav-card">
          <h2>Numericals</h2>
          <p>Molarity, percentage concentration, preparation and dilution problems.</p>
        </a>

        <a href="#self-assessment" className="card card-hover unit-nav-card">
          <h2>Self Assessment</h2>
          <p>Exercises 6.1 to 6.9 with tables, calculations and graph-based questions.</p>
        </a>

        <a href="#review" className="card card-hover unit-nav-card">
          <h2>Review & Applied</h2>
          <p>MCQs, short answers, numerical problems and experimental questions.</p>
        </a>
      </section>

      <section id="short-questions" className="unit-section">
        <SectionHeading kicker="Section 01" title="Short Questions" />
        <div className="unit-stack">
          {shortQuestions.map((item) => (
            <QuestionCard key={item.number} item={item} />
          ))}
        </div>
      </section>

      <div id="self-assessment">
        <SelfAssessment />
      </div>

      <div id="numericals">
        <Numericals />
      </div>

      <div id="review">
        <ReviewQuestions />
        <ExtendedQuestions />
      </div>
    </div>
  );
}
