'use client';

import { useMemo, useState } from 'react';
import {
  periodicElements,
  elementCategoryNames,
  type ElementCategory,
  type PeriodicElement,
} from '@/data/periodicElements';

const colors: Record<ElementCategory, string> = {
  alkali: '#F5D85A',
  alkaline: '#C7E96B',
  transition: '#F5B783',
  'post-transition': '#8FD3EA',
  metalloid: '#70D8C8',
  nonmetal: '#81E0A9',
  halogen: '#72DDE5',
  noble: '#E7AFD7',
  lanthanide: '#EBD18A',
  actinide: '#E8A9BB',
  unknown: '#D5D8DC',
};

const borderColors: Record<ElementCategory, string> = {
  alkali: '#D3AF20',
  alkaline: '#91BD35',
  transition: '#DB8445',
  'post-transition': '#4FA8C9',
  metalloid: '#37A895',
  nonmetal: '#42B878',
  halogen: '#38B3BE',
  noble: '#C779B1',
  lanthanide: '#C49F43',
  actinide: '#C76E89',
  unknown: '#9CA3AF',
};

const categories: ElementCategory[] = [
  'alkali',
  'alkaline',
  'transition',
  'post-transition',
  'metalloid',
  'nonmetal',
  'halogen',
  'noble',
  'lanthanide',
  'actinide',
];

function getPosition(element: PeriodicElement) {
  const n = element.atomicNumber;

  if (n === 1) return [1, 1];
  if (n === 2) return [1, 18];

  if (n === 3) return [2, 1];
  if (n === 4) return [2, 2];
  if (n >= 5 && n <= 10) return [2, n + 8];

  if (n === 11) return [3, 1];
  if (n === 12) return [3, 2];
  if (n >= 13 && n <= 18) return [3, n];

  if (n >= 19 && n <= 36) return [4, n - 18];
  if (n >= 37 && n <= 54) return [5, n - 36];

  if (n === 55) return [6, 1];
  if (n === 56) return [6, 2];
  if (n >= 72 && n <= 86) return [6, n - 68];

  if (n === 87) return [7, 1];
  if (n === 88) return [7, 2];
  if (n >= 104 && n <= 118) return [7, n - 100];

  return null;
}

function ElementTile({
  element,
  selected,
  dimmed,
  onClick,
}: {
  element: PeriodicElement;
  selected: boolean;
  dimmed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={`${element.name} (${element.symbol})`}
      style={{
        backgroundColor: colors[element.category],
        borderColor: selected ? '#123F36' : borderColors[element.category],
        opacity: dimmed ? 0.18 : 1,
      }}
      className={`relative h-full w-full rounded-[4px] border text-left transition duration-150
        ${selected ? 'ring-2 ring-emerald-900 ring-offset-1' : ''}
        ${dimmed ? 'pointer-events-none' : 'hover:-translate-y-0.5 hover:shadow-md'}
      `}
    >
      <span className="absolute left-1 top-1 text-[8px] font-medium text-slate-700">
        {element.atomicNumber}
      </span>

      <div className="flex h-full flex-col justify-center px-1 pt-2">
        <span className="text-[17px] font-bold leading-none text-slate-950">
          {element.symbol}
        </span>

        <span className="mt-1 truncate text-[7px] font-semibold leading-none text-slate-800">
          {element.name}
        </span>

        <span className="mt-1 truncate text-[7px] leading-none text-slate-600">
          {element.atomicMass}
        </span>
      </div>
    </button>
  );
}

function Property({
  label,
  value,
}: {
  label: string;
  value: string | number | null;
}) {
  return (
    <div className="border-b border-slate-200 py-2.5 last:border-0">
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs text-slate-500">{label}</span>
        <span className="text-right text-xs font-semibold text-slate-900">
          {value ?? '—'}
        </span>
      </div>
    </div>
  );
}

export function PeriodicTable() {
  const [selected, setSelected] = useState<PeriodicElement>(
    periodicElements.find((e) => e.atomicNumber === 26) ??
      periodicElements[0]
  );

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<ElementCategory | 'all'>('all');

  const visibleNumbers = useMemo(() => {
    const q = search.trim().toLowerCase();

    return new Set(
      periodicElements
        .filter((e) => {
          const searchMatch =
            !q ||
            e.name.toLowerCase().includes(q) ||
            e.symbol.toLowerCase().includes(q) ||
            String(e.atomicNumber) === q;

          const categoryMatch =
            category === 'all' || e.category === category;

          return searchMatch && categoryMatch;
        })
        .map((e) => e.atomicNumber)
    );
  }, [search, category]);

  const mainElements = periodicElements.filter(
    (e) => e.category !== 'lanthanide' && e.category !== 'actinide'
  );

  const lanthanides = periodicElements.filter(
    (e) => e.category === 'lanthanide'
  );

  const actinides = periodicElements.filter(
    (e) => e.category === 'actinide'
  );

  return (
    <div className="w-full space-y-5">
      {/* CONTROLS */}
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
              Interactive Chemistry Tool
            </p>

            <h2 className="mt-1 font-serif text-2xl font-semibold text-slate-950">
              Periodic Table of the Elements
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Select any element to view its atomic, electronic and physical properties.
            </p>
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search: Fe, Iron, 26..."
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 lg:w-72"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory('all')}
            className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
              category === 'all'
                ? 'bg-emerald-800 text-white'
                : 'border border-slate-300 bg-white text-slate-600'
            }`}
          >
            All elements
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium ${
                category === cat
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-300 bg-white text-slate-600'
              }`}
            >
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: colors[cat] }}
              />
              {elementCategoryNames[cat]}
            </button>
          ))}
        </div>
      </section>

      {/* FULL WIDTH TABLE */}
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="w-full overflow-visible">
          <div className="w-full">
            {/* GROUP NUMBERS */}
            <div
              className="mb-1 grid gap-[2px]"
              style={{
                gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
              }}
            >
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="text-center text-[9px] font-semibold text-slate-500"
                >
                  {i + 1}
                </div>
              ))}
            </div>

            {/* MAIN TABLE */}
            <div
              className="grid gap-[2px]"
              style={{
                gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
                gridTemplateRows: 'repeat(7, 56px)',
              }}
            >
              {mainElements.map((element) => {
                const position = getPosition(element);

                if (!position) return null;

                const [row, col] = position;

                return (
                  <div
                    key={element.atomicNumber}
                    style={{
                      gridRowStart: row,
                      gridColumnStart: col,
                    }}
                  >
                    <ElementTile
                      element={element}
                      selected={selected.atomicNumber === element.atomicNumber}
                      dimmed={!visibleNumbers.has(element.atomicNumber)}
                      onClick={() => setSelected(element)}
                    />
                  </div>
                );
              })}

              <div
                style={{ gridRowStart: 6, gridColumnStart: 3 }}
                className="flex items-center justify-center rounded-[4px] border border-amber-400 bg-amber-50 text-center text-[8px] font-bold leading-tight text-amber-900"
              >
                57–71
                <br />
                Lanthanides
              </div>

              <div
                style={{ gridRowStart: 7, gridColumnStart: 3 }}
                className="flex items-center justify-center rounded-[4px] border border-rose-400 bg-rose-50 text-center text-[8px] font-bold leading-tight text-rose-900"
              >
                89–103
                <br />
                Actinides
              </div>
            </div>

            {/* LANTHANIDES */}
            <div className="mt-5">
              <div className="mb-1 text-[10px] font-semibold text-slate-500">
                Lanthanides 57–71
              </div>

              <div
                className="grid gap-[2px]"
                style={{
                  gridTemplateColumns: 'repeat(15, minmax(0, 1fr))',
                  gridTemplateRows: '56px',
                }}
              >
                {lanthanides.map((element) => (
                  <ElementTile
                    key={element.atomicNumber}
                    element={element}
                    selected={selected.atomicNumber === element.atomicNumber}
                    dimmed={!visibleNumbers.has(element.atomicNumber)}
                    onClick={() => setSelected(element)}
                  />
                ))}
              </div>
            </div>

            {/* ACTINIDES */}
            <div className="mt-3">
              <div className="mb-1 text-[10px] font-semibold text-slate-500">
                Actinides 89–103
              </div>

              <div
                className="grid gap-[2px]"
                style={{
                  gridTemplateColumns: 'repeat(15, minmax(0, 1fr))',
                  gridTemplateRows: '56px',
                }}
              >
                {actinides.map((element) => (
                  <ElementTile
                    key={element.atomicNumber}
                    element={element}
                    selected={selected.atomicNumber === element.atomicNumber}
                    dimmed={!visibleNumbers.has(element.atomicNumber)}
                    onClick={() => setSelected(element)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LEGEND */}
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-200 pt-4">
          {categories.map((cat) => (
            <span
              key={cat}
              className="flex items-center gap-1.5 text-[10px] text-slate-600"
            >
              <span
                className="h-2.5 w-2.5 rounded-sm border border-black/10"
                style={{ backgroundColor: colors[cat] }}
              />
              {elementCategoryNames[cat]}
            </span>
          ))}
        </div>
      </section>

      {/* SELECTED ELEMENT DETAILS - FULL WIDTH BELOW TABLE */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div
          className="border-b p-5"
          style={{
            backgroundColor: colors[selected.category],
            borderColor: borderColors[selected.category],
          }}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <div
              className="flex h-32 w-32 shrink-0 flex-col justify-between rounded-lg border-2 bg-white/40 p-3"
              style={{ borderColor: borderColors[selected.category] }}
            >
              <div className="flex items-start justify-between">
                <span className="text-lg font-semibold text-slate-900">
                  {selected.atomicNumber}
                </span>

                <span className="text-xs font-medium text-slate-700">
                  {selected.period},{selected.group ?? 'f'}
                </span>
              </div>

              <div>
                <div className="text-5xl font-bold leading-none text-slate-950">
                  {selected.symbol}
                </div>

                <div className="mt-1 text-base font-semibold text-slate-900">
                  {selected.name}
                </div>

                <div className="text-sm text-slate-800">
                  {selected.atomicMass}
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-700">
                {elementCategoryNames[selected.category]}
              </p>

              <h3 className="mt-1 text-3xl font-bold text-slate-950">
                {selected.name}
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700">
                {selected.summary}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 p-5 lg:grid-cols-3">
          <div>
            <h4 className="mb-2 text-sm font-bold text-slate-950">
              Atomic Information
            </h4>

            <Property label="Symbol" value={selected.symbol} />
            <Property label="Atomic number" value={selected.atomicNumber} />
            <Property label="Atomic mass" value={selected.atomicMass} />
            <Property label="Group" value={selected.group ?? 'f-block'} />
            <Property label="Period" value={selected.period} />
            <Property label="Block" value={`${selected.block}-block`} />
            <Property label="State" value={selected.state} />
          </div>

          <div>
            <h4 className="mb-2 text-sm font-bold text-slate-950">
              Electronic Structure
            </h4>

            <Property
              label="Electron configuration"
              value={selected.electronConfiguration}
            />
            <Property label="Electron shells" value={selected.shells} />
            <Property
              label="Oxidation states"
              value={selected.oxidationStates}
            />
            <Property
              label="Electronegativity"
              value={selected.electronegativity}
            />
          </div>

          <div>
            <h4 className="mb-2 text-sm font-bold text-slate-950">
              Physical Properties
            </h4>

            <Property label="Density" value={selected.density} />
            <Property label="Melting point" value={selected.meltingPoint} />
            <Property label="Boiling point" value={selected.boilingPoint} />

            <div className="mt-4 rounded-lg bg-emerald-50 p-3">
              <div className="text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                Common Uses
              </div>

              <p className="mt-1 text-xs leading-5 text-emerald-950">
                {selected.uses}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}