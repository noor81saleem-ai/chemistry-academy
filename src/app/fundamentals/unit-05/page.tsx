import type { ReactNode } from 'react';
import {
  AirVent,
  BarChart3,
  Beaker,
  BookOpenText,
  Box,
  CircleDot,
  Cloud,
  Droplets,
  FlaskConical,
  Gauge,
  Layers3,
  ListChecks,
  Snowflake,
  ThermometerSun,
  Wind,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'States of Matter',
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

function Equation({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 overflow-x-auto rounded-lg bg-brand-50/40 px-4 py-3 text-center font-medium">
      {children}
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
    <div className="my-5 overflow-x-auto">
      <table className="w-full min-w-[700px] border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border border-line bg-brand-50/40 p-3 text-left font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIndex) => (
            <tr key={rIndex}>
              {row.map((cell, cIndex) => (
                <td key={cIndex} className="border border-line p-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ParticleBox({
  title,
  type,
}: {
  title: string;
  type: 'gas' | 'liquid' | 'solid';
}) {
  const positions =
    type === 'gas'
      ? [
          [12, 14], [74, 10], [44, 27], [19, 70], [82, 76],
          [55, 58], [31, 44], [68, 42],
        ]
      : type === 'liquid'
        ? [
            [18, 56], [38, 60], [58, 54], [77, 63], [28, 78],
            [50, 80], [70, 78], [42, 43], [62, 40], [82, 45],
          ]
        : [
            [20, 20], [40, 20], [60, 20], [80, 20],
            [20, 45], [40, 45], [60, 45], [80, 45],
            [20, 70], [40, 70], [60, 70], [80, 70],
          ];

  return (
    <div className="rounded-xl border border-line bg-paper p-4">
      <div className="mb-3 text-center font-semibold">{title}</div>
      <div className="relative h-44 overflow-hidden rounded-lg border border-line bg-brand-50/20">
        {positions.map(([x, y], index) => (
          <span
            key={index}
            className="absolute h-4 w-4 rounded-full bg-brand-700"
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
          />
        ))}
      </div>
    </div>
  );
}

function StatesDiagram() {
  return (
    <div className="my-6 grid gap-4 md:grid-cols-3">
      <ParticleBox title="Solid" type="solid" />
      <ParticleBox title="Liquid" type="liquid" />
      <ParticleBox title="Gas" type="gas" />
    </div>
  );
}

function DiffusionDiagram() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="mb-4 font-semibold">Diffusion — movement from higher to lower concentration</div>
      <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-lg border border-line bg-brand-50/30 p-4 text-center">
          <div className="text-sm font-semibold">High concentration</div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} className="h-3 w-3 rounded-full bg-brand-700" />
            ))}
          </div>
        </div>
        <div className="text-2xl font-semibold text-brand-700">→</div>
        <div className="rounded-lg border border-line p-4 text-center">
          <div className="text-sm font-semibold">Lower concentration</div>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={i} className="h-3 w-3 rounded-full bg-brand-700" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EffusionDiagram() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="mb-4 font-semibold">Effusion through a very small opening</div>
      <div className="relative mx-auto h-44 max-w-2xl">
        <div className="absolute left-0 top-5 h-32 w-[45%] rounded-lg border border-line bg-brand-50/20">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-3 w-3 rounded-full bg-brand-700"
              style={{
                left: `${12 + ((i * 17) % 76)}%`,
                top: `${16 + ((i * 23) % 68)}%`,
              }}
            />
          ))}
        </div>
        <div className="absolute left-[45%] top-[44%] h-3 w-3 rounded-full bg-brand-700" />
        <div className="absolute left-[49%] top-[46%] h-1.5 w-14 bg-brand-700/60" />
        <div className="absolute right-0 top-5 flex h-32 w-[42%] items-center justify-center rounded-lg border border-line">
          <span className="text-sm text-ink-muted">Gas molecules escape one by one</span>
        </div>
      </div>
    </div>
  );
}

function GasPressureDiagram() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="mb-4 font-semibold">Gas pressure due to collisions with container walls</div>
      <div className="relative mx-auto h-56 max-w-lg rounded-lg border-2 border-line bg-brand-50/20">
        {[
          [15, 22], [42, 18], [70, 28], [25, 65], [56, 56], [80, 76],
        ].map(([x, y], i) => (
          <div key={i}>
            <span
              className="absolute h-4 w-4 rounded-full bg-brand-700"
              style={{ left: `${x}%`, top: `${y}%` }}
            />
            <span
              className="absolute h-px w-10 origin-left bg-brand-700/60"
              style={{
                left: `${x + 2}%`,
                top: `${y + 2}%`,
                transform: `rotate(${[20, 145, 70, -30, 110, 180][i]}deg)`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function BoyleGraph() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="mb-3 font-semibold">Boyle’s law graph — Volume vs Pressure</div>
      <svg viewBox="0 0 500 280" className="h-auto w-full">
        <line x1="70" y1="230" x2="460" y2="230" stroke="currentColor" strokeWidth="2" />
        <line x1="70" y1="230" x2="70" y2="30" stroke="currentColor" strokeWidth="2" />
        <text x="250" y="266" textAnchor="middle" fontSize="14">Pressure (P)</text>
        <text x="18" y="135" transform="rotate(-90 18 135)" textAnchor="middle" fontSize="14">Volume (V)</text>
        <path
          d="M105 55 C150 70, 180 95, 220 125 C270 160, 330 190, 430 210"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

function CharlesGraph() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="mb-3 font-semibold">Charles’s law graph — Volume vs Kelvin temperature</div>
      <svg viewBox="0 0 500 280" className="h-auto w-full">
        <line x1="70" y1="230" x2="460" y2="230" stroke="currentColor" strokeWidth="2" />
        <line x1="70" y1="230" x2="70" y2="30" stroke="currentColor" strokeWidth="2" />
        <text x="260" y="266" textAnchor="middle" fontSize="14">Temperature (K)</text>
        <text x="18" y="135" transform="rotate(-90 18 135)" textAnchor="middle" fontSize="14">Volume (V)</text>
        <line x1="90" y1="215" x2="430" y2="55" stroke="currentColor" strokeWidth="3" />
      </svg>
    </div>
  );
}

function VapourPressureDiagram() {
  return (
    <div className="my-6 grid gap-4 md:grid-cols-3">
      {[
        ['(i) Evaporation', 4, 2],
        ['(ii) Evaporation + condensation', 7, 5],
        ['(iii) Dynamic equilibrium', 8, 8],
      ].map(([title, vapours, returns], index) => (
        <div key={index} className="rounded-xl border border-line bg-paper p-4">
          <div className="text-center font-semibold">{title}</div>
          <div className="relative mt-4 h-52 overflow-hidden rounded-lg border border-line">
            <div className="absolute bottom-0 h-[40%] w-full bg-brand-50/60" />
            {Array.from({ length: Number(vapours) }).map((_, i) => (
              <span
                key={`v-${i}`}
                className="absolute h-3 w-3 rounded-full bg-brand-700"
                style={{
                  left: `${15 + ((i * 19) % 70)}%`,
                  top: `${10 + ((i * 13) % 40)}%`,
                }}
              />
            ))}
            {Array.from({ length: Number(returns) }).map((_, i) => (
              <span
                key={`r-${i}`}
                className="absolute h-px w-8 bg-brand-700/50"
                style={{
                  left: `${18 + ((i * 17) % 65)}%`,
                  top: `${48 + ((i * 5) % 12)}%`,
                  transform: 'rotate(90deg)',
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function VapourPressureGraph() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="mb-3 font-semibold">Vapour pressure increases with temperature</div>
      <svg viewBox="0 0 560 320" className="h-auto w-full">
        <line x1="70" y1="260" x2="520" y2="260" stroke="currentColor" strokeWidth="2" />
        <line x1="70" y1="260" x2="70" y2="30" stroke="currentColor" strokeWidth="2" />
        <text x="300" y="302" textAnchor="middle" fontSize="14">Temperature (°C)</text>
        <text x="18" y="150" transform="rotate(-90 18 150)" textAnchor="middle" fontSize="14">Vapour pressure</text>

        <path d="M90 245 C190 225, 250 190, 310 130 C355 85, 395 60, 455 40" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M90 250 C180 235, 250 210, 330 155 C395 110, 440 75, 490 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="7 5" />
        <path d="M90 255 C190 245, 280 225, 365 180 C425 150, 470 105, 505 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="2 4" />
        <line x1="70" y1="95" x2="520" y2="95" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
        <text x="420" y="88" fontSize="12">101.325 kPa</text>
        <text x="420" y="55" fontSize="12">chloroform / ethanol / water / ethanoic acid</text>
      </svg>
    </div>
  );
}

function PressureDevicesDiagram() {
  return (
    <div className="my-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-line bg-paper p-5">
        <div className="font-semibold">Barometer</div>
        <div className="mt-5 flex justify-center">
          <div className="relative h-64 w-36">
            <div className="absolute bottom-0 left-1/2 h-40 w-12 -translate-x-1/2 rounded-t-full border-2 border-line bg-brand-50/30" />
            <div className="absolute bottom-0 left-1/2 h-28 w-8 -translate-x-1/2 bg-brand-700/50" />
            <div className="absolute bottom-0 left-1/2 h-8 w-28 -translate-x-1/2 rounded-full border-2 border-line bg-brand-700/20" />
          </div>
        </div>
        <p className="text-center text-sm text-ink-muted">Measures atmospheric pressure.</p>
      </div>

      <div className="rounded-xl border border-line bg-paper p-5">
        <div className="font-semibold">Manometer</div>
        <div className="mt-5 flex justify-center">
          <div className="relative h-64 w-48">
            <div className="absolute left-6 top-12 h-40 w-10 rounded-b-full border-2 border-line" />
            <div className="absolute right-6 top-12 h-40 w-10 rounded-b-full border-2 border-line" />
            <div className="absolute bottom-12 left-16 h-10 w-16 rounded-b-full border-b-2 border-line" />
            <div className="absolute bottom-12 left-8 h-20 w-8 bg-brand-700/40" />
            <div className="absolute bottom-12 right-8 h-12 w-8 bg-brand-700/40" />
          </div>
        </div>
        <p className="text-center text-sm text-ink-muted">Measures gas pressure.</p>
      </div>
    </div>
  );
}

function SublimationDiagram() {
  return (
    <div className="my-6 rounded-xl border border-line bg-paper p-5">
      <div className="mb-4 font-semibold">Sublimation of iodine</div>
      <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-lg bg-brand-50/40 p-5 text-center">
          <div className="mx-auto h-16 w-16 rounded-lg bg-brand-700/80" />
          <div className="mt-3">Iodine solid</div>
        </div>
        <div className="text-center">
          <div className="text-2xl text-brand-700">→</div>
          <div className="text-xs">heat</div>
        </div>
        <div className="rounded-lg border border-line p-5 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="absolute h-3 w-3 rounded-full bg-brand-700"
                style={{
                  transform: `translate(${(i % 4) * 16 - 24}px, ${Math.floor(i / 4) * 22 - 10}px)`,
                }}
              />
            ))}
          </div>
          <div className="mt-3">Vapour → crystals on cool surface</div>
        </div>
      </div>
    </div>
  );
}

function CrystalVsAmorphous() {
  return (
    <div className="my-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-line bg-paper p-5">
        <div className="font-semibold">Crystalline solid</div>
        <div className="mt-4 grid grid-cols-5 gap-3">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="mx-auto h-4 w-4 rounded-full bg-brand-700" />
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-muted">Particles arranged in an orderly repeating pattern.</p>
      </div>

      <div className="rounded-xl border border-line bg-paper p-5">
        <div className="font-semibold">Amorphous solid</div>
        <div className="relative mt-4 h-40">
          {[
            [15, 15],[35, 20],[62, 13],[78, 30],[22, 48],[49, 44],[72, 55],[33, 74],[59, 75],[84, 80],
            [10, 88],[44, 92],[68, 95],
          ].map(([x,y], i)=>(
            <span key={i} className="absolute h-4 w-4 rounded-full bg-brand-700" style={{left:`${x}%`,top:`${y}%`}} />
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-muted">Particles lack long-range order.</p>
      </div>
    </div>
  );
}

function CarbonAllotropes() {
  return (
    <div className="my-6 grid gap-4 lg:grid-cols-3">
      <div className="rounded-xl border border-line bg-paper p-5">
        <div className="font-semibold">Diamond</div>
        <svg viewBox="0 0 220 180" className="mt-4 w-full">
          {[[110,25],[55,70],[165,70],[80,135],[140,135]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r="8" fill="currentColor"/>
          ))}
          {[[110,25,55,70],[110,25,165,70],[55,70,80,135],[165,70,140,135],[55,70,140,135],[165,70,80,135]].map((l,i)=>(
            <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="currentColor" strokeWidth="2"/>
          ))}
        </svg>
        <p className="text-sm text-ink-muted">Rigid tetrahedral network; very hard.</p>
      </div>

      <div className="rounded-xl border border-line bg-paper p-5">
        <div className="font-semibold">Graphite</div>
        <svg viewBox="0 0 220 180" className="mt-4 w-full">
          {[35,75,115].map((y, row)=>(
            <g key={row}>
              {[[40,y],[80,y-18],[120,y],[160,y-18],[200,y]].map(([x,yy],i)=>(
                <circle key={i} cx={x} cy={yy} r="7" fill="currentColor"/>
              ))}
              <polyline points={`40,${y} 80,${y-18} 120,${y} 160,${y-18} 200,${y}`} fill="none" stroke="currentColor" strokeWidth="2"/>
            </g>
          ))}
        </svg>
        <p className="text-sm text-ink-muted">Layered hexagonal arrangement; layers can slip.</p>
      </div>

      <div className="rounded-xl border border-line bg-paper p-5">
        <div className="font-semibold">Buckyball</div>
        <svg viewBox="0 0 220 180" className="mt-4 w-full">
          <circle cx="110" cy="90" r="60" fill="none" stroke="currentColor" strokeWidth="2"/>
          <polygon points="110,45 140,65 130,100 90,100 80,65" fill="none" stroke="currentColor" strokeWidth="2"/>
          <polygon points="110,135 140,115 130,80 90,80 80,115" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line x1="80" y1="65" x2="55" y2="90" stroke="currentColor"/>
          <line x1="140" y1="65" x2="165" y2="90" stroke="currentColor"/>
          <line x1="80" y1="115" x2="55" y2="90" stroke="currentColor"/>
          <line x1="140" y1="115" x2="165" y2="90" stroke="currentColor"/>
        </svg>
        <p className="text-sm text-ink-muted">Hollow cage-like carbon structure.</p>
      </div>
    </div>
  );
}

function PhosphorusAllotropes() {
  return (
    <div className="my-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-line bg-paper p-5 text-center">
        <div className="font-semibold">White phosphorus (P₄)</div>
        <svg viewBox="0 0 220 180" className="mx-auto mt-4 w-full max-w-xs">
          {[[110,30],[55,120],[165,120],[110,85]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r="10" fill="currentColor"/>
          ))}
          {[[110,30,55,120],[110,30,165,120],[110,30,110,85],[55,120,165,120],[55,120,110,85],[165,120,110,85]].map((l,i)=>(
            <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="currentColor" strokeWidth="2"/>
          ))}
        </svg>
      </div>

      <div className="rounded-xl border border-line bg-paper p-5 text-center">
        <div className="font-semibold">Red phosphorus</div>
        <svg viewBox="0 0 320 180" className="mx-auto mt-4 w-full max-w-md">
          {[50,110,170,230,290].map((x,i)=>(
            <g key={i}>
              <circle cx={x} cy={90 + (i%2?18:-18)} r="9" fill="currentColor"/>
              {i<4 && <line x1={x+9} y1={90 + (i%2?18:-18)} x2={x+51} y2={90 + ((i+1)%2?18:-18)} stroke="currentColor" strokeWidth="2"/>}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  icon,
}: {
  eyebrow: string;
  title: string;
  icon: ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
        {icon}
      </span>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      </div>
    </div>
  );
}

const shortQuestions: Question[] = [
  {
    number: 1,
    question: 'Name typical properties of gases.',
    answer: (
      <PointList
        items={[
          <>Diffusion</>,
          <>Effusion</>,
          <>Pressure</>,
          <>Compressibility</>,
          <>Mobility</>,
          <>Density</>,
        ]}
      />
    ),
  },
  {
    number: 2,
    question: 'Define diffusion. Give example.',
    answer: (
      <>
        <p>
          The movement of molecules of gases from a place of higher concentration to a place of lower concentration is called diffusion.
        </p>
        <p>
          For example, rotten egg smell (hydrogen sulphide molecules) spreads from the higher concentration place near the egg to lower concentration in the room.
        </p>
        <DiffusionDiagram />
      </>
    ),
  },
  {
    number: 3,
    question: 'Why does diffusion of gases take place?',
    answer: (
      <p>
        Gases have a tendency to spread from one place to another. They have large intermolecular spaces and their molecules can move easily among molecules of other gases.
      </p>
    ),
  },
  {
    number: 4,
    question: 'Define effusion. Give example.',
    answer: (
      <>
        <p>
          The escape of gas molecules through a hole one by one without collision with one another is called effusion. An example is escape of air from a punctured tyre.
        </p>
        <EffusionDiagram />
      </>
    ),
  },
  {
    number: 5,
    question: 'What is the condition or requirement for effusion of gases?',
    answer: (
      <p>
        A gas shows effusion when the hole is extremely small, approximately comparable to the molecular scale, so molecules escape one by one.
      </p>
    ),
  },
  {
    number: 6,
    question: 'Define pressure. Give its units.',
    answer: (
      <>
        <p>
          Pressure is the force exerted by gas molecules on unit area of the walls of a container.
        </p>
        <Equation>1 Pa = 1 N m<sup>−2</sup></Equation>
        <Equation>1 atm = 101.325 kPa = 101325 Pa</Equation>
        <Equation>1 atm = 760 mm Hg = 760 torr</Equation>
        <GasPressureDiagram />
      </>
    ),
  },
  {
    number: 7,
    question: 'What is compressibility? Why gases are easily compressed?',
    answer: (
      <p>
        Compressibility is the ability of a gas to occupy less volume when pressure is applied. Gases are highly compressible because there are large spaces among their molecules.
      </p>
    ),
  },
  {
    number: 8,
    question: 'What is mobility of gases? Why gases are mobile?',
    answer: (
      <>
        <p>The ability of gases to flow from one place to another is called mobility.</p>
        <PointList items={[<>Gases expand.</>, <>Gases fill available spaces.</>]} />
      </>
    ),
  },
  {
    number: 9,
    question: 'Why does air in a balloon expand to fill the whole balloon?',
    tag: 'Society, Technology, Science',
    answer: (
      <p>
        Gas molecules are free to move and spread throughout the available space, so gas takes the shape and volume of the container in which it is placed.
      </p>
    ),
  },
  {
    number: 10,
    question: 'What is the importance of earth’s atmosphere?',
    tag: 'Do You Know',
    answer: (
      <PointList
        items={[
          <>It provides oxygen for breathing.</>,
          <>It provides pressure necessary for life on earth.</>,
          <>It helps moderate temperature extremes.</>,
          <>Ozone (O₃) protects living things from harmful ultraviolet radiation.</>,
        ]}
      />
    ),
  },
  {
    number: 11,
    question: 'Define density of gases. Why gases have low density?',
    answer: (
      <>
        <p>The ratio of mass to volume occupied by a gas is called density.</p>
        <Equation>Density = mass / volume</Equation>
        <p>
          Gases have low density because their particles are far apart. The supplied content notes that oxygen has density about 1.4 g/dm³ at 20 °C and 1.5 g/dm³ at 0 °C.
        </p>
      </>
    ),
  },
  {
    number: 12,
    question: 'What is kinetic molecular theory of gases?',
    answer: (
      <PointList
        items={[
          <>Gas molecules are in constant random motion.</>,
          <>Gas molecules move in straight lines until they collide with one another or with the walls of the container.</>,
        ]}
      />
    ),
  },
  {
    number: 13,
    question: 'How do gases exert pressure on the walls of container?',
    answer: (
      <p>Gases exert pressure due to collisions of their molecules with the walls of the container.</p>
    ),
  },
  {
    number: 14,
    question: 'What is the effect of temperature on average kinetic energy of gas molecules?',
    answer: (
      <p>
        Average kinetic energy increases as temperature increases because gas molecules move faster at higher temperature.
      </p>
    ),
  },
  {
    number: 15,
    question: 'What is the effect of pressure on volume of a gas at constant temperature?',
    answer: (
      <p>
        Increasing pressure at constant temperature decreases gas volume because gas molecules are forced closer together.
      </p>
    ),
  },
  {
    number: 16,
    question: 'What is the effect of temperature on volume of a gas at constant pressure?',
    answer: (
      <p>
        Increasing temperature at constant pressure increases gas volume. Faster molecules strike the walls more strongly, so the gas expands to maintain constant pressure.
      </p>
    ),
  },
  {
    number: 17,
    question: 'What are gas variables? Define gas laws.',
    answer: (
      <>
        <p>Pressure (P), volume (V), temperature (T) and number of moles (n) are gas variables.</p>
        <p>Gas laws describe relationships among these variables under specified constant conditions.</p>
      </>
    ),
  },
  {
    number: 23,
    question: 'How can we draw water from a well by a suction pump?',
    tag: 'Science, Technology and Society',
    answer: (
      <p>
        The supplied material explains that atmospheric pressure pushes water upward into the evacuated suction pump. Torricelli used the weight of the atmosphere to explain this effect.
      </p>
    ),
  },
  {
    number: 24,
    question: 'What is barometer and manometer? How do they work?',
    tag: 'Science, Technology and Society',
    answer: (
      <>
        <p>
          A barometer is used to measure atmospheric pressure. Torricelli’s mercury barometer showed a pressure of 760 mm Hg at sea level and 0 °C.
        </p>
        <p>
          A manometer is used to measure the pressure of a gas. The supplied text relates its development to Boyle’s modification of a mercury tube.
        </p>
        <PressureDevicesDiagram />
      </>
    ),
  },
  {
    number: 25,
    question: 'Define evaporation. Why does evaporation take place?',
    answer: (
      <p>
        Evaporation is the conversion of a liquid into vapour from its surface. Molecules having higher kinetic energy can overcome intermolecular attractions and escape from the liquid surface.
      </p>
    ),
  },
  {
    number: 26,
    question: 'Evaporation is cooling process. Justify.',
    answer: (
      <p>
        During evaporation, higher-energy molecules leave the liquid. The average kinetic energy of the remaining molecules decreases, so the temperature falls and cooling occurs.
      </p>
    ),
  },
  {
    number: 27,
    question: 'What is the effect of heating on evaporation of liquids?',
    answer: (
      <p>
        Heating increases the rate of evaporation because more molecules gain enough energy to overcome intermolecular forces.
      </p>
    ),
  },
  {
    number: 28,
    question: 'Define vapour pressure.',
    answer: (
      <p>
        Vapour pressure is the pressure exerted by the vapours of a liquid on the walls of a closed container when the liquid is in equilibrium with its vapour.
      </p>
    ),
  },
  {
    number: 31,
    question: 'Define boiling point.',
    answer: (
      <p>
        Boiling point is the temperature at which the vapour pressure of a liquid becomes equal to the external or atmospheric pressure.
      </p>
    ),
  },
  {
    number: 33,
    question: 'Define distillation.',
    answer: (
      <p>
        Distillation is the process in which a liquid is vaporized and the vapour is cooled back to liquid in another container. It is used to purify liquids.
      </p>
    ),
  },
  {
    number: 34,
    question: 'What are the typical properties of solids?',
    answer: (
      <PointList
        items={[
          <>Particles vibrate around fixed positions.</>,
          <>Solids are difficult to compress because spaces among particles are small.</>,
          <>Solids do not flow because particles occupy fixed positions.</>,
        ]}
      />
    ),
  },
  {
    number: 36,
    question: 'Define freezing point of a liquid.',
    answer: (
      <p>The temperature at which a liquid changes into a solid is called freezing point.</p>
    ),
  },
  {
    number: 38,
    question: 'Define sublimation. Give examples.',
    answer: (
      <>
        <p>
          Sublimation is the direct conversion of a solid into gas on heating without passing through the liquid state.
          Examples in the supplied content include iodine, benzoic acid and ammonium chloride.
        </p>
        <SublimationDiagram />
      </>
    ),
  },
  {
    number: 39,
    question: 'How food (meat) can be preserved?',
    tag: 'Society, Technology and Science',
    answer: (
      <PointList
        items={[
          <>By adding salt to remove water and then keeping food refrigerated.</>,
          <>By lowering external pressure so frozen water sublimes and the food becomes dry.</>,
        ]}
      />
    ),
  },
  {
    number: 41,
    question: 'Define allotropes. Give examples.',
    answer: (
      <p>
        Different forms of an element existing in the same physical state are called allotropes. Diamond, graphite and buckyballs are allotropes of carbon.
      </p>
    ),
  },
  {
    number: 44,
    question: 'Write about the allotropes of sulphur.',
    answer: (
      <p>
        Sulphur exists in several allotropes. The supplied content names rhombic sulphur and monoclinic sulphur as crystalline allotropes and plastic sulphur as an amorphous allotrope.
      </p>
    ),
  },
];

const longQuestions: Question[] = [
  {
    number: 18,
    question: 'What is Boyle’s law? Derive it mathematically.',
    answer: (
      <>
        <p>
          Boyle’s law states that the volume of a given amount of gas is inversely proportional to the applied pressure at constant temperature.
        </p>
        <Equation>V ∝ 1 / P</Equation>
        <Equation>V = K / P</Equation>
        <Equation>PV = K = constant</Equation>
        <p>Therefore, for two states at the same temperature:</p>
        <Equation>P₁V₁ = P₂V₂</Equation>
        <BoyleGraph />
      </>
    ),
  },
  {
    number: 19,
    question: 'How does pressure-volume data confirm Boyle’s law?',
    answer: (
      <>
        <p>
          If the product P × V remains constant at constant temperature, pressure and volume are inversely related and Boyle’s law is obeyed.
        </p>
        <DataTable
          headers={['Experiment', 'Pressure (atm)', 'Volume (dm³)', 'P × V (atm·dm³)']}
          rows={[
            ['1', '0.500', '4.00', '2.00'],
            ['2', '1.00', '2.00', '2.00'],
            ['3', '2.00', '1.00', '2.00'],
            ['4', '4.00', '0.500', '2.00'],
          ]}
        />
      </>
    ),
  },
  {
    number: '19A',
    question: 'Explain pressure-volume relationship from the five-set student data.',
    answer: (
      <>
        <DataTable
          headers={['Experiment', 'Pressure (atm)', 'Volume (dm³)', 'P × V']}
          rows={[
            ['1', '0.350', '0.707', '0.247'],
            ['2', '0.551', '0.450', '0.247'],
            ['3', '0.762', '0.325', '0.247'],
            ['4', '0.951', '0.261', '0.248'],
            ['5', '1.210', '0.205', '0.248'],
          ]}
        />
        <p>
          The P × V values are approximately constant, so the data supports Boyle’s law.
        </p>
      </>
    ),
  },
  {
    number: '19B',
    question: 'Show that the ammonia pressure-volume data satisfies Boyle’s law.',
    answer: (
      <>
        <p>Initial pressure = 1.0 atm</p>
        <p>Initial volume = 2000 cm³ = 2.00 dm³</p>
        <p>Final pressure = 0.474 atm</p>
        <p>Final volume = 4.22 dm³</p>
        <Equation>P₁V₁ = 1.0 × 2.00 = 2.00 atm·dm³</Equation>
        <Equation>P₂V₂ = 0.474 × 4.22 = 2.0028 atm·dm³</Equation>
        <p>The two products are approximately equal, so Boyle’s law is obeyed.</p>
      </>
    ),
  },
  {
    number: 20,
    question: 'Define Charles’s law. Derive it mathematically.',
    answer: (
      <>
        <p>
          Charles’s law states that the volume of a given mass of gas is directly proportional to its absolute temperature at constant pressure.
        </p>
        <Equation>V ∝ T</Equation>
        <Equation>V = KT</Equation>
        <Equation>V / T = K = constant</Equation>
        <Equation>V₁ / T₁ = V₂ / T₂</Equation>
        <CharlesGraph />
      </>
    ),
  },
  {
    number: 21,
    question: 'How is Charles’s law shown by graph?',
    answer: (
      <>
        <p>
          A graph of volume on the y-axis against Kelvin temperature on the x-axis gives a straight line, showing direct proportionality.
        </p>
        <Equation>T(K) = t(°C) + 273</Equation>
        <CharlesGraph />
      </>
    ),
  },
  {
    number: 22,
    question: 'How does temperature-volume data confirm Charles’s law?',
    answer: (
      <>
        <p>
          If V/T remains constant at constant pressure, Charles’s law is obeyed.
        </p>
        <DataTable
          headers={['Sr No', 'Temperature (K)', 'Volume (dm³)', 'V/T']}
          rows={[
            ['1', '273', '1.00', '0.0037'],
            ['2', '373', '1.37', '0.0037'],
            ['3', '473', '1.73', '0.0037'],
            ['4', '573', '2.10', '0.0037'],
          ]}
        />
      </>
    ),
  },
  {
    number: '22A',
    question: 'Explain volume-temperature relationship from the 1 atm chemist data.',
    answer: (
      <DataTable
        headers={['Sr No', 'Volume (cm³)', 'Temperature (K)', 'V/T']}
        rows={[
          ['1', '117.5', '298', '0.39'],
          ['2', '119.4', '303', '0.39'],
          ['3', '121.3', '308', '0.39'],
          ['4', '123.2', '313', '0.39'],
        ]}
      />
    ),
  },
  {
    number: '22B',
    question: 'Explain volume-temperature relationship for methane gas at constant pressure.',
    answer: (
      <>
        <p>First condition: T₁ = 27 °C + 273 = 300 K, V₁ = 36.4 cm³.</p>
        <p>Second condition: T₂ = 0 °C + 273 = 273 K, V₂ = 33.124 cm³.</p>
        <Equation>V₁/T₁ = 36.4/300 ≈ 0.121</Equation>
        <Equation>V₂/T₂ = 33.124/273 ≈ 0.121</Equation>
        <p>The ratios are the same, so Charles’s law is obeyed.</p>
      </>
    ),
  },
  {
    number: '22C',
    question: 'Show that the helium balloon data satisfies Charles’s law.',
    answer: (
      <>
        <p>T₁ = 25 °C + 273 = 298 K</p>
        <p>T₂ = 15 °C + 273 = 288 K</p>
        <p>V₁ = 1.25 × 10³ dm³</p>
        <p>V₂ = 1.208 × 10³ dm³</p>
        <Equation>V₁/T₁ ≈ 4.19</Equation>
        <Equation>V₂/T₂ ≈ 4.19</Equation>
        <p>The ratios are equal, so the data satisfies Charles’s law.</p>
      </>
    ),
  },
  {
    number: 29,
    question: 'How does vapour pressure develop? Explain.',
    answer: (
      <>
        <p>
          In a sealed container, liquid molecules evaporate into the vapour space. As vapour concentration rises, some molecules return to the liquid by condensation.
        </p>
        <p>
          After some time the rate of evaporation becomes equal to the rate of condensation. This dynamic equilibrium produces a definite vapour pressure.
        </p>
        <VapourPressureDiagram />
      </>
    ),
  },
  {
    number: 30,
    question: 'What is the effect of temperature on vapour pressure of a liquid? Justify with a graph.',
    answer: (
      <>
        <p>
          Vapour pressure increases with temperature because more molecules gain enough energy to escape from the liquid phase.
        </p>
        <VapourPressureGraph />
      </>
    ),
  },
  {
    number: 32,
    question: 'What is the effect of external pressure on boiling point of a liquid? Give examples.',
    answer: (
      <>
        <p>
          Boiling point increases when external pressure increases and decreases when external pressure decreases.
        </p>
        <DataTable
          headers={['Condition', 'Pressure', 'Boiling point of water']}
          rows={[
            ['Mount Everest', '34 kPa', '70 °C'],
            ['Sea level', '1 atm = 101.325 kPa', '100 °C'],
            ['Pressure cooker', '2 atm', '120 °C'],
          ]}
        />
      </>
    ),
  },
  {
    number: 35,
    question: 'Define melting point of solids. How does it take place?',
    answer: (
      <p>
        Melting point is the temperature at which a solid changes into liquid. Heating increases particle kinetic energy until particles can leave their fixed positions and the solid melts.
      </p>
    ),
  },
  {
    number: 37,
    question: 'What are similarities between melting point of solids and freezing point of liquids?',
    answer: (
      <>
        <PointList
          items={[
            <>Melting point and freezing point of a substance occur at the same temperature.</>,
            <>At the melting/freezing point, solid and liquid phases can coexist in equilibrium.</>,
          ]}
        />
        <Equation>Solid ⇌ Liquid</Equation>
      </>
    ),
  },
  {
    number: 40,
    question: 'Explain types of solids with properties. Give examples.',
    answer: (
      <>
        <DataTable
          headers={['Property', 'Crystalline solids', 'Amorphous solids']}
          rows={[
            ['Particle arrangement', 'Ordered in three dimensions', 'Not arranged in long-range order'],
            ['Shape', 'Definite shape', 'No regular crystal shape'],
            ['Melting behaviour', 'Sharp/fixed melting point', 'Soften and melt over a range'],
            ['Examples', 'Sodium chloride, quartz', 'Glass, plastic, rubber'],
          ]}
        />
        <CrystalVsAmorphous />
      </>
    ),
  },
  {
    number: 42,
    question: 'Explain the structures and properties of allotropes of carbon.',
    answer: (
      <>
        <PointList
          items={[
            <><strong>Diamond:</strong> each carbon atom is bonded in a rigid three-dimensional arrangement; the supplied content describes it as extremely hard.</>,
            <><strong>Graphite:</strong> carbon atoms form layered hexagonal structures; layers can slip over one another.</>,
            <><strong>Buckyballs:</strong> carbon atoms form hollow cage-like structures containing pentagons and hexagons.</>,
          ]}
        />
        <CarbonAllotropes />
      </>
    ),
  },
  {
    number: 43,
    question: 'Describe the allotropes of phosphorous.',
    answer: (
      <>
        <p><strong>White phosphorous:</strong> tetraatomic P₄ molecules are not bonded into long chains.</p>
        <p><strong>Red phosphorous:</strong> P₄-based units are linked into extended chains.</p>
        <PhosphorusAllotropes />
      </>
    ),
  },
  {
    number: 45,
    question: 'Compare the physical states of matter.',
    answer: (
      <>
        <DataTable
          headers={['Property', 'Solids', 'Liquids', 'Gases']}
          rows={[
            ['Intermolecular forces', 'Strongest', 'Significant', 'Weakest'],
            ['Particle motion', 'Vibrate around fixed positions', 'Slide over one another', 'Move freely and randomly'],
            ['Shape', 'Definite', 'No definite shape', 'No definite shape'],
            ['Volume', 'Definite', 'Definite', 'No definite volume'],
            ['Compressibility', 'Very low', 'Low', 'High'],
          ]}
        />
        <StatesDiagram />
      </>
    ),
  },
];

function ExerciseSection() {
  return (
    <section className="mt-16">
      <SectionTitle
        eyebrow="Section 03"
        title="Exercise & Practice"
        icon={<FlaskConical className="h-5 w-5" />}
      />

      <div className="space-y-7">
        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q1. Multiple Choice Answers</h3>
          <DataTable
            headers={['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x']}
            rows={[['A', 'B', 'D', 'D', 'A', 'C', 'B', 'B', 'A', 'D']]}
          />
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q2. Give short answers</h3>
          <div className="mt-5 space-y-5 leading-7">
            <div>
              <strong>(i) Why does volume decrease when pressure increases?</strong>
              <p className="mt-2">Gas molecules have large spaces among them. Increased pressure brings molecules closer and decreases volume.</p>
            </div>
            <div>
              <strong>(ii) How does temperature affect vapour pressure?</strong>
              <p className="mt-2">Increasing temperature increases molecular kinetic energy, so more vapour forms and vapour pressure rises.</p>
            </div>
            <div>
              <strong>(iii) Water boils at 120 °C in a pressure cooker, why?</strong>
              <p className="mt-2">The supplied content explains that higher external pressure raises the boiling point of water.</p>
            </div>
            <div>
              <strong>(iv) Is evaporation a cooling process?</strong>
              <p className="mt-2">Yes. Higher-energy molecules escape first, lowering the average kinetic energy and temperature of the remaining liquid.</p>
            </div>
            <div>
              <strong>(v) Can you make water boil at 70 °C?</strong>
              <p className="mt-2">Yes, by lowering external pressure, as described for high-altitude conditions.</p>
            </div>
            <div>
              <strong>(vi) Convert 400 mm Hg to kPa.</strong>
              <Equation>400 × 101.325 / 760 = 53.32 kPa</Equation>
            </div>
          </div>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q3. Effect on gas volume by pressure and temperature</h3>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-brand-50/30 p-5">
              <h4 className="font-semibold">Pressure effect — Boyle’s law</h4>
              <Equation>V ∝ 1/P</Equation>
              <Equation>PV = K</Equation>
            </div>
            <div className="rounded-xl bg-brand-50/30 p-5">
              <h4 className="font-semibold">Temperature effect — Charles’s law</h4>
              <Equation>V ∝ T</Equation>
              <Equation>V/T = K</Equation>
            </div>
          </div>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q4. Diffusion and Effusion</h3>
          <DiffusionDiagram />
          <EffusionDiagram />
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q5. Evaporation, vapour pressure and boiling point</h3>
          <div className="mt-5 space-y-6">
            <div>
              <h4 className="font-semibold">(a) Evaporation</h4>
              <p className="mt-2 leading-7">Liquid molecules with sufficiently high kinetic energy escape from the surface and enter the vapour phase.</p>
            </div>
            <div>
              <h4 className="font-semibold">(b) Vapour pressure</h4>
              <p className="mt-2 leading-7">At equilibrium in a closed container, vapour molecules exert pressure on the container walls.</p>
              <VapourPressureDiagram />
            </div>
            <div>
              <h4 className="font-semibold">(c) Boiling point</h4>
              <p className="mt-2 leading-7">A liquid boils when its vapour pressure equals external pressure.</p>
            </div>
          </div>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q7. Amorphous vs crystalline solids</h3>
          <CrystalVsAmorphous />
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q8. Allotropes of phosphorus and sulphur</h3>
          <PhosphorusAllotropes />
          <p className="mt-4 leading-7">
            The supplied content lists rhombic sulphur and monoclinic sulphur as crystalline allotropes and plastic sulphur as an amorphous allotrope.
          </p>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q9. Vapour-pressure vs temperature graph</h3>
          <VapourPressureGraph />
          <PointList
            type="alpha"
            items={[
              <>At 1 atm, the supplied content gives approximate normal boiling points: chloroform 60 °C, ethanol 80 °C, water 100 °C and ethanoic acid 120 °C.</>,
              <>Lowering external pressure lowers the boiling temperature of ethanol.</>,
              <>Water can be made to boil below 100 °C by lowering external pressure.</>,
              <>Lower external pressure lowers the boiling point of chloroform.</>,
            ]}
          />
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q11. Charles’s law — elastic balloon data</h3>
          <p className="mt-5">V₁ = 885 cm³, T₁ = 293 K, V₂ = 794.3 cm³, T₂ = 263 K.</p>
          <Equation>885 / 293 ≈ 3.020</Equation>
          <Equation>794.3 / 263 ≈ 3.020</Equation>
          <p>The two V/T ratios agree, so the supplied data obeys Charles’s law.</p>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q12. Gas thermometer data</h3>
          <DataTable
            headers={['Volume (dm³)', 'Temperature (°C)', 'Temperature (K)', 'V/T']}
            rows={[
              ['2.7', '0', '273', '0.009'],
              ['3.7', '100', '373', '0.009'],
              ['5.7', '300', '573', '0.009'],
            ]}
          />
          <p>The V/T ratio is the same in each set of conditions, so the data is consistent with Charles’s law.</p>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q13. Boyle’s law in an automobile cylinder</h3>
          <Equation>P₁V₁ = 1.0 × 990 = 990 atm·cm³</Equation>
          <Equation>P₂V₂ = 11.0 × 90 = 990 atm·cm³</Equation>
          <p>Both products are equal, so the data obeys Boyle’s law.</p>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q14. Boyle’s law for neon sign gas</h3>
          <Equation>636 × 1500 = 954000 torr·cm³</Equation>
          <Equation>786 × 1213.74 ≈ 954000 torr·cm³</Equation>
          <p>The products are approximately equal, so Boyle’s law is obeyed.</p>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q15. Instrumentation changes as science progresses</h3>
          <p className="mt-5 leading-7">
            The supplied material traces the development from Galileo’s suction-pump explanation to Torricelli’s barometer, Boyle’s J-shaped mercury tube and later manometers. The main idea is that scientific instruments are improved as explanations, measurements and experimental needs develop.
          </p>
          <PressureDevicesDiagram />
        </article>
      </div>
    </section>
  );
}

function AppliedSection() {
  return (
    <section className="mt-16">
      <SectionTitle
        eyebrow="Section 04"
        title="Applied Questions"
        icon={<BarChart3 className="h-5 w-5" />}
      />

      <div className="space-y-7">
        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q1. Evaluate the student’s Boyle’s law data</h3>
          <DataTable
            headers={['Pressure (mm Hg)', 'Volume (dm³)', 'P × V']}
            rows={[
              ['353.5', '400', '141400'],
              ['442', '320', '141440'],
              ['589', '240', '141360'],
              ['707', '200', '141400'],
            ]}
          />
          <p className="leading-7">
            The supplied answer comments that one value differs from the others and concludes that the data was collected carelessly.
          </p>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q2. Aquarium water level decreases</h3>
          <p className="mt-5 leading-7">
            The change of state is evaporation: liquid water changes into vapour from the water surface.
          </p>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q3. Attractive forces in HF and HCl</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-brand-50/30 p-5">
              <div className="font-semibold">HCl</div>
              <div className="mt-4 text-center text-xl">H<sup>δ+</sup>—Cl<sup>δ−</sup> ··· H<sup>δ+</sup>—Cl<sup>δ−</sup></div>
              <p className="mt-3 text-sm text-ink-muted">Dipole–dipole attraction.</p>
            </div>
            <div className="rounded-xl bg-brand-50/30 p-5">
              <div className="font-semibold">HF</div>
              <div className="mt-4 text-center text-xl">H<sup>δ+</sup>—F: ··· H<sup>δ+</sup>—F:</div>
              <p className="mt-3 text-sm text-ink-muted">Hydrogen bonding.</p>
            </div>
          </div>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q4. Examples of solids and liquids at room temperature</h3>
          <DataTable
            headers={['State at 25 °C', 'Examples']}
            rows={[
              ['Solids', 'Sodium chloride (NaCl), limestone (CaCO₃)'],
              ['Liquids', 'Ethanol, mercury (Hg)'],
            ]}
          />
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q5. Identify the process</h3>
          <PointList
            type="alpha"
            items={[
              <>Mothballs slowly disappear: sublimation.</>,
              <>Raindrops freeze on a cold windshield: freezing.</>,
            ]}
          />
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q6. Why is an autoclave an efficient sterilization device?</h3>
          <p className="mt-5 leading-7">
            The supplied content explains that an autoclave operates at higher pressure than open atmosphere. This allows steam to be produced under higher-pressure conditions and makes the sterilization process more effective.
          </p>
        </article>

        <article className="card p-5 sm:p-7">
          <h3 className="text-xl font-semibold">Q7. Melting point / boiling point data</h3>
          <DataTable
            headers={['Substance', 'Melting point (°C)', 'Boiling point (°C)', 'State at 25 °C']}
            rows={[
              ['A', '-123', '-79', 'Gas'],
              ['B', '-17', '58', 'Liquid'],
              ['C', '52', '305', 'Solid'],
              ['D', '-6', '120', 'Liquid'],
            ]}
          />
          <PointList
            type="alpha"
            items={[
              <>Substance C has the longest liquid-temperature range according to the supplied calculation.</>,
              <>Heating B from 0 °C to 100 °C changes it from liquid to gas.</>,
              <>Cooling D from 100 °C to −10 °C changes it from liquid to solid.</>,
            ]}
          />
        </article>
      </div>
    </section>
  );
}

export default function UnitFivePage() {
  return (
    <div className="container-wide py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Fundamentals', href: '/fundamentals' },
          { label: 'States of Matter' },
        ]}
      />

      <section className="page-heading-box mt-6">
        <span className="eyebrow mb-2">Fundamentals · Unit 05</span>
        <h1>States of Matter</h1>
        <p className="mt-3 max-w-3xl leading-relaxed">
          Properties of gases, Boyle’s law, Charles’s law, evaporation, vapour pressure, boiling, solids,
          sublimation, crystalline and amorphous solids, and allotropes.
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
                Gas properties, pressure, density, evaporation, boiling, solids, sublimation and allotropy.
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
                Gas laws, graphs, numerical verification, vapour pressure, boiling point, solids and allotropes.
              </p>
            </div>
          </div>
        </a>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="card p-5">
          <div className="flex items-center gap-3">
            <Wind className="h-5 w-5 text-brand-700" />
            <h3 className="font-semibold">Gas Behaviour</h3>
          </div>
          <p className="mt-3 text-sm leading-6 text-ink-muted">Diffusion, effusion, pressure, compressibility and mobility.</p>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-3">
            <Droplets className="h-5 w-5 text-brand-700" />
            <h3 className="font-semibold">Liquids</h3>
          </div>
          <p className="mt-3 text-sm leading-6 text-ink-muted">Evaporation, vapour pressure, boiling point and distillation.</p>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-3">
            <Layers3 className="h-5 w-5 text-brand-700" />
            <h3 className="font-semibold">Solids</h3>
          </div>
          <p className="mt-3 text-sm leading-6 text-ink-muted">Melting, freezing, sublimation, crystal types and allotropes.</p>
        </div>
      </section>

      <section id="short-questions" className="mt-14 scroll-mt-28">
        <SectionTitle
          eyebrow="Section 01"
          title="Short Questions"
          icon={<ListChecks className="h-5 w-5" />}
        />

        <div className="space-y-6">
          {shortQuestions.map((item) => (
            <QuestionCard key={`short-${item.number}`} item={item} />
          ))}
        </div>
      </section>

      <section id="long-questions" className="mt-16 scroll-mt-28">
        <SectionTitle
          eyebrow="Section 02"
          title="Long Questions"
          icon={<BookOpenText className="h-5 w-5" />}
        />

        <div className="space-y-7">
          {longQuestions.map((item) => (
            <QuestionCard key={`long-${item.number}`} item={item} />
          ))}
        </div>
      </section>

      <ExerciseSection />
      <AppliedSection />
    </div>
  );
}
