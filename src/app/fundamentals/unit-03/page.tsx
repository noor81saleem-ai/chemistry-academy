import type { ReactNode } from 'react';
import { BookOpenText, Grid3X3, ListChecks, Orbit, Rows3, TrendingDown, TrendingUp } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = { title: 'Periodic Table' };

type Question = { number: string | number; question: ReactNode; answer: ReactNode; tag?: string };

function AnswerBlock({ children }: { children: ReactNode }) {
  return <div className="mt-5 space-y-4 leading-7"><div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Answer</div>{children}</div>;
}

function QuestionCard({ item }: { item: Question }) {
  return (
    <article className="card p-5 sm:p-7">
      <div className="flex items-start gap-3">
        <span className="shrink-0 pt-1 text-sm font-semibold text-brand-700">Q{item.number}.</span>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold leading-7 sm:text-xl">{item.question}</h2>
          {item.tag && <span className="mt-2 inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">{item.tag}</span>}
          <AnswerBlock>{item.answer}</AnswerBlock>
        </div>
      </div>
    </article>
  );
}

function PointList({ items, type = 'roman' }: { items: ReactNode[]; type?: 'roman' | 'alpha' | 'number' }) {
  const roman = ['i','ii','iii','iv','v','vi','vii','viii','ix','x','xi','xii'];
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return <div className="space-y-3">{items.map((item, index) => <div key={index} className="grid grid-cols-[2rem_1fr] gap-2"><strong>{type === 'alpha' ? `(${alpha[index]})` : type === 'number' ? `${index+1}.` : `${roman[index]}.`}</strong><div>{item}</div></div>)}</div>;
}

function EC({ value }: { value: string }) {
  return <span className="inline-flex flex-wrap gap-x-1.5 gap-y-1 font-medium">{value.split(/\s+/).map((token,i) => { const m = token.match(/^(\d+[spdf])(\d+)$/i); return m ? <span key={`${token}-${i}`}>{m[1]}<sup>{m[2]}</sup></span> : <span key={`${token}-${i}`}>{token}</span>; })}</span>;
}

function Equation({ children }: { children: ReactNode }) {
  return <div className="my-4 overflow-x-auto rounded-lg bg-brand-50/40 px-4 py-3 text-center font-medium">{children}</div>;
}

function NewlandsTable() {
  const rows = [['H','Li','Be','B','C','N','O'],['F','Na','Mg','Al','Si','P','S'],['Cl','K','Ca','Cr','Ti','Mn','Fe']];
  return <div className="my-6 overflow-x-auto"><table className="w-full min-w-[680px] border-collapse text-center text-sm"><tbody>{rows.map((row,r)=><tr key={r}>{row.map(cell=><td key={cell} className="border border-line p-3 font-semibold">{cell}</td>)}</tr>)}</tbody></table></div>;
}

function PeriodicTableSketch() {
  const data = [
    ['H','','','','','','','','','','','He'],
    ['Li','Be','','','','','','','','B','C','N'],
    ['O','F','Ne','','','','','','','','',''],
    ['Na','Mg','','','','','','','','Al','Si','P'],
    ['S','Cl','Ar','','','','','','','','',''],
  ];
  return <div className="my-6 rounded-xl border border-line bg-paper p-5"><div className="mb-4 flex items-center gap-2 text-sm font-semibold"><Grid3X3 className="h-4 w-4 text-brand-700"/>Simplified periodic-table layout</div><div className="overflow-x-auto"><div className="grid min-w-[760px] grid-cols-12 gap-1">{data.flatMap((row,r)=>Array.from({length:12}).map((_,c)=>{const s=row[c]??''; return <div key={`${r}-${c}`} className={`min-h-12 rounded border border-line p-2 text-center text-sm ${s?'bg-brand-50/50 font-semibold':''}`}>{s}</div>}))}</div></div><p className="mt-3 text-sm text-ink-muted">The full periodic table arranges all elements by increasing atomic number.</p></div>;
}

function PeriodGroupDiagram() {
  return <div className="my-6 grid gap-4 md:grid-cols-2"><div className="rounded-xl border border-line bg-paper p-5"><div className="flex items-center gap-2 font-semibold"><Rows3 className="h-5 w-5 text-brand-700"/>Periods</div><p className="mt-2 text-sm leading-6">Horizontal rows. The period number is connected with the highest n value in the valence shell.</p></div><div className="rounded-xl border border-line bg-paper p-5"><div className="flex items-center gap-2 font-semibold"><Grid3X3 className="h-5 w-5 text-brand-700"/>Groups</div><p className="mt-2 text-sm leading-6">Vertical columns. Main-group elements in one group have similar valence-shell electronic configurations.</p></div></div>;
}

function TrendPanel({ title, across, down }: { title: string; across: string; down: string }) {
  return <div className="my-6 rounded-xl border border-line bg-paper p-5"><div className="text-base font-semibold">{title}</div><div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-lg bg-brand-50/40 p-4"><div className="flex items-center gap-2 font-semibold"><TrendingUp className="h-4 w-4 text-brand-700"/>Across a period</div><p className="mt-2 text-sm leading-6">{across}</p></div><div className="rounded-lg bg-brand-50/40 p-4"><div className="flex items-center gap-2 font-semibold"><TrendingDown className="h-4 w-4 text-brand-700"/>Down a group</div><p className="mt-2 text-sm leading-6">{down}</p></div></div></div>;
}

function ShieldingDiagram() {
  return <div className="my-6 rounded-xl border border-line bg-paper p-5"><div className="mb-3 text-sm font-semibold">Shielding effect</div><svg viewBox="0 0 620 280" className="mx-auto h-auto w-full max-w-3xl"><circle cx="310" cy="140" r="32" fill="none" stroke="currentColor" strokeWidth="4"/><text x="310" y="146" textAnchor="middle" fontSize="16">nucleus</text><circle cx="310" cy="140" r="78" fill="none" stroke="currentColor" strokeWidth="3"/><circle cx="310" cy="140" r="125" fill="none" stroke="currentColor" strokeWidth="3"/><circle cx="310" cy="15" r="8" fill="currentColor"/><circle cx="388" cy="140" r="8" fill="currentColor"/><circle cx="232" cy="140" r="8" fill="currentColor"/><text x="450" y="132" fontSize="15">inner-shell electrons</text><text x="320" y="28" fontSize="15">valence electron</text></svg></div>;
}

function LewisDots() {
  return <div className="my-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[['Be','••'],['K','•'],['N','•••••'],['I','•••••••']].map(([symbol,dots])=><div key={symbol} className="rounded-xl border border-line bg-paper p-5 text-center"><div className="text-3xl font-semibold">{symbol}</div><div className="mt-2 tracking-[0.35em] text-brand-700">{dots}</div></div>)}</div>;
}

function FigureABCF() {
  const labels: Record<number,string> = {8:'A',11:'B',14:'C',16:'D',18:'E',23:'F'};
  return <div className="my-6 rounded-xl border border-line bg-paper p-5"><div className="mb-4 text-sm font-semibold">Periodic-table position figure (A–F)</div><div className="grid grid-cols-8 gap-2 text-center text-sm">{Array.from({length:24}).map((_,i)=><div key={i} className={`min-h-12 rounded border border-line p-3 ${labels[i]?'bg-brand-50 font-semibold text-brand-700':''}`}>{labels[i]??''}</div>)}</div></div>;
}

const shortQuestions: Question[] = [
  { number:1, question:'Write down the history of discovery of elements.', answer:<p>By the end of 18th century, 23 elements were discovered; by 1870, 65 elements were known. By 1925, 88 elements were discovered and today we have 109 elements.</p> },
  { number:5, question:'What is modern periodic table?', answer:<p>The systematic arrangement of elements on the basis of increasing order of their atomic numbers is called modern periodic table. Atomic number was discovered by Moseley in 1913 and became the basis of modern periodic table.</p> },
  { number:6, question:'Define periodic law.', answer:<p>Periodic law says that when elements are arranged in increasing order of their atomic numbers, their properties are repeated in regular manner.</p> },
  { number:11, question:'What are the group names of groups IA, IIA, VIIA and VIIIA elements?', answer:<p>Group IA: alkali metals; group IIA: alkaline earth metals; group VIIA: halogens; group VIIIA: noble gases.</p> },
  { number:12, question:'Why group VIIIA elements are called noble gases?', answer:<p>They are called noble gases because they do not react readily/easily with other substances.</p> },
  { number:13, question:'Why the elements of same group have similar chemical properties?', answer:<p>Because they have the same number of valence-shell electrons or similar valence-shell electronic configuration.</p> },
  { number:16, question:'Define s-block and p-block elements. Give examples.', answer:<><p>Elements having valence-shell electrons in an s sub-shell are called s-block elements, e.g. groups IA and IIA.</p><p>Elements having valence-shell electrons in a p sub-shell are called p-block elements, e.g. groups IIIA to VIIIA except helium.</p></> },
  { number:20, question:'Define periodicity of properties of elements. Give examples.', answer:<p>The repetition of properties of elements after regular intervals of increasing atomic number is called periodicity. Chemical properties in a group are similar because of similar valence-shell electronic configuration, while atomic size, ionization energy and electron affinity change regularly in periods.</p> },
  { number:21, question:'What is shielding effect? Write its trends in periodic table.', answer:<><p>The decrease in force of attraction between nucleus and valence-shell electrons due to inner-shell electrons is called shielding effect. It remains nearly constant across a period and increases down a group.</p><ShieldingDiagram/></> },
  { number:23, question:'What is atomic size / atomic radius? What are its periodic trends?', answer:<><p>The average distance between nucleus and valence shell of an atom is called atomic size. It decreases across a period and increases down a group.</p><TrendPanel title="Atomic-size trend" across="Generally decreases from left to right." down="Increases from top to bottom."/></> },
  { number:25, question:'Define ionization energy. What are its periodic trends?', answer:<><p>The minimum amount of energy needed to remove valence-shell electron(s) from an isolated gaseous atom is called ionization energy. Its units are kJ/mol.</p><Equation>M(g) + energy → M<sup>+</sup>(g) + e<sup>−</sup></Equation><TrendPanel title="Ionization-energy trend" across="Increases from left to right." down="Decreases from top to bottom."/></> },
  { number:27, question:'What is electron affinity? Write its trends in periods and groups.', answer:<><p>The amount of energy released when an electron is added to the outermost shell of an isolated gaseous atom to form a uninegative ion is called electron affinity.</p><Equation>X(g) + e<sup>−</sup> → X<sup>−</sup>(g) + energy</Equation><TrendPanel title="Electron-affinity trend" across="Increases from left to right." down="Decreases from top to bottom."/></> },
  { number:29, question:'Define electronegativity. What are its periodic trends?', answer:<><p>The ability of an atom to attract the shared pair of electrons in a chemical bond towards itself is called electronegativity. Linus Pauling developed the electronegativity scale.</p><TrendPanel title="Electronegativity trend" across="Increases from left to right." down="Decreases from top to bottom."/></> },
];

const longQuestions: Question[] = [
  { number:2, question:'How John Newland classified elements in the form of a table?', answer:<><p>In 1864, an English chemist arranged 24 elements in increasing order of atomic masses. Starting from any point, every eighth element showed similar properties.</p><NewlandsTable/></> },
  { number:3, question:'Why was Newland’s classification failed?', answer:<p>Many elements were out of place. Titanium did not show similarity with silicon, iron did not resemble oxygen and sulphur, and manganese did not resemble nitrogen and phosphorous. However, Newlands’ work provided a basis for later classification.</p> },
  { number:4, question:'Describe Mendeleev’s classification of elements.', answer:<p>In 1869, Mendeleev classified elements according to increasing atomic masses and observed that properties repeated at regular intervals. He made a periodic table of 65 elements.</p> },
  { number:7, question:'How was modern periodic table made? OR What was the need of periodic table?', answer:<><p>Because there were many elements, it was difficult to study each separately. Scientists therefore arranged elements by increasing atomic number, producing the modern periodic table.</p><PeriodicTableSketch/></> },
  { number:8, question:'What is the importance / use / application of periodic table?', answer:<PointList items={[<>Understand physical and chemical properties of elements.</>,<>Predict properties from elements of the same group.</>,<>Relate trends in reactivity with atomic structure.</>,<>Predict ionic and covalent bonding behaviour.</>]}/> },
  { number:9, question:'Define periods. How many periods are there in periodic table? Explain.', answer:<><p>Horizontal rows are periods. There are seven periods. Period 1 has two elements; periods 2 and 3 have eight each. Periods 4 and 5 have 18 each. The supplied chapter states period 6 has 32 elements and period 7 has 23.</p><PeriodGroupDiagram/></> },
  { number:10, question:'Define groups. How many groups are there in periodic table? Explain.', answer:<><p>Vertical columns are called groups. In the A/B notation used in this chapter, eight groups are further divided into A and B subgroups. A-subgroup elements are representative/main-group elements; B-subgroup elements are transition elements.</p><PeriodGroupDiagram/></> },
  { number:14, question:'How can we identify period number and group number of an element on the basis of its electronic configuration?', answer:<PointList items={[<>Split all sub-shells into shells.</>,<>Find the valence shell with the highest n value; this gives the period number.</>,<>Count electrons in the valence-shell sub-shells; this indicates the group number for main-group elements.</>]}/> },
  { number:15, question:'Which elements belong to same group and same period? Prove by examples.', answer:<><p>Elements having similar valence-shell electronic configurations belong to the same group, except helium.</p><Equation>A: <EC value="1s2 2s2"/> &nbsp; B: <EC value="1s2 2s2 2p6 3s2"/> &nbsp; C: <EC value="1s2 2s2 2p6 3s2 3p6 4s2"/></Equation><p>These end in ns², so they belong to the same group. Elements with the same highest n value belong to the same period.</p></> },
  { number:17, question:'How valence shell electronic configuration of an element can be determined from its position in periodic table?', answer:<><p>The period number shows the n value, total shells and possible sub-shells in the valence shell. The group number shows the number of valence-shell electrons for main-group elements.</p></> },
  { number:18, question:'Determine electronic configurations of elements from their positions in periodic table.', answer:<div className="overflow-x-auto"><table className="w-full min-w-[900px] border-collapse text-sm"><thead><tr><th className="border border-line p-3 text-left">Element</th><th className="border border-line p-3 text-left">Period</th><th className="border border-line p-3 text-left">Group</th><th className="border border-line p-3 text-left">Valence e⁻</th><th className="border border-line p-3 text-left">Electronic configuration</th></tr></thead><tbody><tr><td className="border border-line p-3">a</td><td className="border border-line p-3">2</td><td className="border border-line p-3">IVA</td><td className="border border-line p-3">4</td><td className="border border-line p-3"><EC value="1s2 2s2 2p2"/></td></tr><tr><td className="border border-line p-3">b</td><td className="border border-line p-3">3</td><td className="border border-line p-3">VIA</td><td className="border border-line p-3">6</td><td className="border border-line p-3"><EC value="1s2 2s2 2p6 3s2 3p4"/></td></tr><tr><td className="border border-line p-3">c</td><td className="border border-line p-3">4</td><td className="border border-line p-3">IIA</td><td className="border border-line p-3">2</td><td className="border border-line p-3"><EC value="1s2 2s2 2p6 3s2 3p6 4s2"/></td></tr></tbody></table></div> },
  { number:19, question:'How are periods and groups formed in periodic table? OR How periods and groups form the shape of periodic table?', answer:<><p>Starting the filling of a new shell marks the start of a period, and completing that shell marks the end of the period. Elements with the same number of valence-shell electrons appear one above another and form a group.</p></> },
  { number:22, question:'Why shielding effect remains constant along a period and increases along a group?', answer:<p>Across a period, the number of inner shells remains constant. Down a group, more shells and more inner-shell electrons are added, so shielding increases.</p> },
  { number:24, question:'Why atomic size decreases along a period and increases along a group.', answer:<><p>Across a period, nuclear charge increases while shell number stays the same, pulling valence electrons closer. Down a group, more shells are added and the valence shell lies farther away.</p><TrendPanel title="Atomic-size trend" across="Decreases from left to right." down="Increases from top to bottom."/></> },
  { number:26, question:'Why ionization energy increases along a period and decreases along a group? Give reasons.', answer:<><p>Across a period, increasing nuclear charge holds valence electrons more strongly. Down a group, larger size and greater shielding make them easier to remove.</p></> },
  { number:28, question:'Why electron affinity increases along a period and decreases along a group?', answer:<><p>Across a period, higher nuclear charge and smaller size attract an added electron more strongly. Down a group, increased shielding reduces that attraction.</p></> },
  { number:30, question:'Why electronegativity increases along a period and decreases along a group?', answer:<><p>Electronegativity increases across a period because nuclear charge increases. It decreases down a group because shielding effect increases.</p></> },
];

function PracticeSection() {
  return <section className="mt-16"><div className="mb-6 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><Orbit className="h-5 w-5"/></span><div><span className="eyebrow">Section 03</span><h2 className="text-2xl font-semibold sm:text-3xl">Examples, Self Assessment & Exercise</h2></div></div><div className="space-y-7">
    <article className="card p-5 sm:p-7"><h3 className="text-xl font-semibold">Self Assessment Exercise 3.1</h3><div className="mt-5 space-y-3"><p><strong>Magnesium:</strong> <EC value="1s2 2s2 2p6 3s2"/> → period 3, group IIA.</p><p><strong>Neon:</strong> <EC value="1s2 2s2 2p6"/> → period 2, group VIIIA.</p><p><strong>Silicon:</strong> <EC value="1s2 2s2 2p6 3s2 3p2"/> → period 3, group IVA.</p><p><strong>Boron:</strong> <EC value="1s2 2s2 2p1"/> → period 2, group IIIA.</p></div></article>
    <article className="card p-5 sm:p-7"><h3 className="text-xl font-semibold">Example 3.2 — Classify elements into groups and periods</h3><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[760px] border-collapse text-sm"><thead><tr><th className="border border-line p-3 text-left">Element</th><th className="border border-line p-3 text-left">Electronic configuration</th><th className="border border-line p-3 text-left">Period</th><th className="border border-line p-3 text-left">Group</th></tr></thead><tbody>{[['A','1s2 2s2','2','IIA'],['B','1s2 2s2 2p3','2','VA'],['C','1s2 2s2 2p5','2','VIIA'],['D','1s2 2s2 2p6 3s2','3','IIA'],['E','1s2 2s2 2p6 3s2 3p5','3','VIIA'],['F','1s2 2s2 2p6 3s2 3p3','3','VA']].map(([el,ec,p,g])=><tr key={el}><td className="border border-line p-3">{el}</td><td className="border border-line p-3"><EC value={ec}/></td><td className="border border-line p-3">{p}</td><td className="border border-line p-3">{g}</td></tr>)}</tbody></table></div></article>
    <article className="card p-5 sm:p-7"><h3 className="text-xl font-semibold">Self Assessment Exercise 3.4</h3><div className="mt-4 space-y-4"><p>Aluminium: <EC value="3s2 3p1"/>.</p><p>Sulphur: <EC value="3s2 3p4"/>.</p><p>Neon: <EC value="1s2 2s2 2p6"/> → period 2, group VIIIA.</p><p>Chlorine: <EC value="1s2 2s2 2p6 3s2 3p5"/> → period 3, group VIIA.</p></div></article>
    <article className="card p-5 sm:p-7"><h3 className="text-xl font-semibold">Chapter Exercise — Important answers</h3><div className="mt-6 space-y-8">
      <div><h4 className="font-semibold">Q2. Give short answers</h4><div className="mt-4 space-y-4"><p><strong>(i)</strong> Period 3 and group IIIA → <EC value="3s2 3p1"/>.</p><p><strong>(ii)</strong> Isotopes differ in neutron number/mass number and physical properties.</p><p><strong>(iii)</strong> Sodium has higher shielding effect than lithium.</p><p><strong>(iv)</strong> Sodium has higher ionization energy than potassium because it is smaller and holds valence electrons more strongly.</p><p><strong>(v)</strong> Alkali metals are s-block elements because their valence electron lies in an s sub-shell.</p></div></div>
      <div><h4 className="font-semibold">Q3. Increasing ionization energy</h4><Equation>K &lt; Na &lt; Li</Equation><Equation>I &lt; Br &lt; Cl</Equation></div>
      <div><h4 className="font-semibold">Q4. Decreasing shielding effect</h4><Equation>K &gt; Na &gt; Li</Equation><Equation>I &gt; Br &gt; Cl</Equation><Equation>Br &gt; Cl</Equation></div>
      <div><h4 className="font-semibold">Q6. Similar chemical properties</h4><div className="overflow-x-auto"><table className="w-full min-w-[620px] border-collapse text-sm"><thead><tr><th className="border border-line p-3 text-left">Group IA</th><th className="border border-line p-3 text-left">Group IIA</th><th className="border border-line p-3 text-left">Group VA</th><th className="border border-line p-3 text-left">VIIIA</th></tr></thead><tbody><tr><td className="border border-line p-3">F and G</td><td className="border border-line p-3">A and H</td><td className="border border-line p-3">C and E</td><td className="border border-line p-3">B and D</td></tr></tbody></table></div></div>
      <div><h4 className="font-semibold">Q9. General valence-shell electronic configurations</h4><div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-lg bg-brand-50/40 p-4"><strong>Alkali metals:</strong> ns<sup>1</sup></div><div className="rounded-lg bg-brand-50/40 p-4"><strong>Alkaline earth metals:</strong> ns<sup>2</sup></div><div className="rounded-lg bg-brand-50/40 p-4"><strong>Halogens:</strong> ns<sup>2</sup>np<sup>5</sup></div><div className="rounded-lg bg-brand-50/40 p-4"><strong>Noble gases:</strong> ns<sup>2</sup>np<sup>6</sup> (except He)</div></div></div>
      <div><h4 className="font-semibold">Q10. Electron-dot symbols</h4><LewisDots/></div>
      <div><h4 className="font-semibold">Q12. Complete the table</h4><div className="mt-4 overflow-x-auto"><table className="w-full min-w-[760px] border-collapse text-sm"><thead><tr><th className="border border-line p-3 text-left">Atomic No.</th><th className="border border-line p-3 text-left">Mass No.</th><th className="border border-line p-3 text-left">Protons</th><th className="border border-line p-3 text-left">Neutrons</th><th className="border border-line p-3 text-left">Electrons</th></tr></thead><tbody>{[[11,23,11,12,11],[14,29,14,15,14],[22,47,22,25,22],[13,27,13,14,13]].map((row,i)=><tr key={i}>{row.map((v,j)=><td key={j} className="border border-line p-3">{v}</td>)}</tr>)}</tbody></table></div></div>
      <div><h4 className="font-semibold">Q15. Block, group and period</h4><div className="mt-4 overflow-x-auto"><table className="w-full min-w-[720px] border-collapse text-sm"><thead><tr><th className="border border-line p-3 text-left">Element</th><th className="border border-line p-3 text-left">Block</th><th className="border border-line p-3 text-left">Group</th><th className="border border-line p-3 text-left">Period</th></tr></thead><tbody><tr><td className="border border-line p-3">Lithium</td><td className="border border-line p-3">s</td><td className="border border-line p-3">IA</td><td className="border border-line p-3">2</td></tr><tr><td className="border border-line p-3">Fluorine</td><td className="border border-line p-3">p</td><td className="border border-line p-3">VIIA</td><td className="border border-line p-3">2</td></tr><tr><td className="border border-line p-3">Magnesium</td><td className="border border-line p-3">s</td><td className="border border-line p-3">IIA</td><td className="border border-line p-3">3</td></tr><tr><td className="border border-line p-3">Helium</td><td className="border border-line p-3">p</td><td className="border border-line p-3">VIIIA</td><td className="border border-line p-3">1</td></tr></tbody></table></div></div>
      <div><h4 className="font-semibold">Applied Question — Elements A to F</h4><FigureABCF/><PointList type="alpha" items={[<>A and B belong to the same period; D and E belong to the same period.</>,<>Valence-shell configuration of D is 4s².</>,<>A and D are metals.</>,<>D can lose two electrons.</>,<>E is in group VA.</>,<>F is a halogen.</>,<>D forms D²⁺.</>,<>Electronic configuration of E is <EC value="1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p3"/>.</>,<>A and F can form an ionic bond.</>,<>C can form C₂ according to the supplied chapter explanation.</>,<>C and F can form covalent bonds.</>,<>F is a non-metal in group VIIA.</>]}/></div>
    </div></article>
  </div></section>;
}

export default function UnitThreePage() {
  return <div className="container-wide py-8">
    <Breadcrumbs items={[{label:'Home',href:'/'},{label:'Fundamentals',href:'/fundamentals'},{label:'Periodic Table'}]}/>
    <section className="page-heading-box mt-6"><span className="eyebrow mb-2">Fundamentals · Unit 03</span><h1>Periodic Table</h1><p className="mt-3 max-w-3xl leading-relaxed">Classification of elements, periods and groups, electronic configuration, blocks and periodic trends.</p></section>
    <section className="mt-8 grid gap-5 md:grid-cols-2"><a href="#short-questions" className="card-hover group p-6 sm:p-7"><div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><ListChecks className="h-5 w-5"/></span><div><h2 className="text-xl font-semibold">Short Questions</h2><p className="mt-2 leading-7">Definitions, group names, periodic law, blocks and periodic trends.</p></div></div></a><a href="#long-questions" className="card-hover group p-6 sm:p-7"><div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><BookOpenText className="h-5 w-5"/></span><div><h2 className="text-xl font-semibold">Long Questions</h2><p className="mt-2 leading-7">Classification systems, periodic-table structure, electronic configuration and trend explanations.</p></div></div></a></section>
    <section id="short-questions" className="mt-14 scroll-mt-28"><div className="mb-6 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><ListChecks className="h-5 w-5"/></span><div><span className="eyebrow">Section 01</span><h2 className="text-2xl font-semibold sm:text-3xl">Short Questions</h2></div></div><div className="space-y-6">{shortQuestions.map(item=><QuestionCard key={`short-${item.number}`} item={item}/>)}</div></section>
    <section id="long-questions" className="mt-16 scroll-mt-28"><div className="mb-6 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><BookOpenText className="h-5 w-5"/></span><div><span className="eyebrow">Section 02</span><h2 className="text-2xl font-semibold sm:text-3xl">Long Questions</h2></div></div><div className="space-y-7">{longQuestions.map(item=><QuestionCard key={`long-${item.number}`} item={item}/>)}</div></section>
    <PracticeSection/>
  </div>;
}
