export type ElementCategory =
  | 'alkali'
  | 'alkaline'
  | 'transition'
  | 'post-transition'
  | 'metalloid'
  | 'nonmetal'
  | 'halogen'
  | 'noble'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

export type ElementState = 'Solid' | 'Liquid' | 'Gas' | 'Unknown';

export type PeriodicElement = {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: string;
  group: number | null;
  period: number;
  block: 's' | 'p' | 'd' | 'f';
  category: ElementCategory;
  state: ElementState;

  electronConfiguration: string;
  shells: string;
  oxidationStates: string;

  electronegativity: string;
  meltingPoint: string;
  boilingPoint: string;
  density: string;

  summary: string;
  uses: string;
};

const e = (
  atomicNumber: number,
  symbol: string,
  name: string,
  atomicMass: string,
  group: number | null,
  period: number,
  block: 's' | 'p' | 'd' | 'f',
  category: ElementCategory,
  state: ElementState,
  electronConfiguration: string,
  shells: string,
  oxidationStates: string,
  electronegativity: string,
  meltingPoint: string,
  boilingPoint: string,
  density: string,
  summary: string,
  uses: string
): PeriodicElement => ({
  atomicNumber,
  symbol,
  name,
  atomicMass,
  group,
  period,
  block,
  category,
  state,
  electronConfiguration,
  shells,
  oxidationStates,
  electronegativity,
  meltingPoint,
  boilingPoint,
  density,
  summary,
  uses,
});

export const periodicElements: PeriodicElement[] = [
  e(1,'H','Hydrogen','1.008',1,1,'s','nonmetal','Gas','1s¹','1','-1, +1','2.20','-259.16 °C','-252.87 °C','0.0899 g/L','Lightest element and the most abundant element in the universe.','Ammonia production, fuel cells, petroleum processing and rocket fuel.'),

  e(2,'He','Helium','4.0026',18,1,'s','noble','Gas','1s²','2','0','—','-272.20 °C','-268.93 °C','0.1785 g/L','Very light, chemically inert noble gas.','Cryogenics, MRI cooling, balloons, leak detection and protective atmospheres.'),

  e(3,'Li','Lithium','6.94',1,2,'s','alkali','Solid','[He] 2s¹','2, 1','+1','0.98','180.54 °C','1342 °C','0.534 g/cm³','Soft, light and highly reactive alkali metal.','Lithium-ion batteries, ceramics, glass and specialty alloys.'),

  e(4,'Be','Beryllium','9.0122',2,2,'s','alkaline','Solid','[He] 2s²','2, 2','+2','1.57','1287 °C','2469 °C','1.85 g/cm³','Light, strong alkaline-earth metal with high stiffness.','Aerospace alloys, X-ray windows and precision instruments.'),

  e(5,'B','Boron','10.81',13,2,'p','metalloid','Solid','[He] 2s² 2p¹','2, 3','+3','2.04','2076 °C','3927 °C','2.34 g/cm³','Hard metalloid important in borosilicate materials.','Borosilicate glass, detergents, fiberglass and semiconductor applications.'),

  e(6,'C','Carbon','12.011',14,2,'p','nonmetal','Solid','[He] 2s² 2p²','2, 4','-4, +2, +4','2.55','~3550 °C','~4027 °C','2.267 g/cm³ (graphite)','Central element of organic chemistry and biological molecules.','Steel, graphite electrodes, diamonds, carbon fibers and countless chemical compounds.'),

  e(7,'N','Nitrogen','14.007',15,2,'p','nonmetal','Gas','[He] 2s² 2p³','2, 5','-3, +1, +2, +3, +4, +5','3.04','-210.00 °C','-195.79 °C','1.251 g/L','Major component of Earth’s atmosphere and essential to proteins and nucleic acids.','Fertilizers, ammonia, inert atmospheres and liquid-nitrogen cooling.'),

  e(8,'O','Oxygen','15.999',16,2,'p','nonmetal','Gas','[He] 2s² 2p⁴','2, 6','-2, -1, +2','3.44','-218.79 °C','-182.95 °C','1.429 g/L','Highly electronegative element essential for aerobic respiration.','Medical oxygen, steelmaking, welding, oxidation processes and life support.'),

  e(9,'F','Fluorine','18.998',17,2,'p','halogen','Gas','[He] 2s² 2p⁵','2, 7','-1','3.98','-219.67 °C','-188.11 °C','1.696 g/L','Most electronegative element and an extremely reactive halogen.','Fluorochemicals, fluoropolymers and uranium processing.'),

  e(10,'Ne','Neon','20.180',18,2,'p','noble','Gas','[He] 2s² 2p⁶','2, 8','0','—','-248.59 °C','-246.05 °C','0.900 g/L','Inert noble gas famous for its reddish-orange electrical glow.','Neon signs, high-voltage indicators and lasers.'),

  e(11,'Na','Sodium','22.990',1,3,'s','alkali','Solid','[Ne] 3s¹','2, 8, 1','+1','0.93','97.79 °C','883 °C','0.968 g/cm³','Soft and highly reactive alkali metal.','Chemical synthesis, sodium compounds, heat-transfer applications and lighting.'),

  e(12,'Mg','Magnesium','24.305',2,3,'s','alkaline','Solid','[Ne] 3s²','2, 8, 2','+2','1.31','650 °C','1091 °C','1.738 g/cm³','Light structural metal and biologically important element.','Lightweight alloys, fireworks, flares and metallurgical processes.'),

  e(13,'Al','Aluminium','26.982',13,3,'p','post-transition','Solid','[Ne] 3s² 3p¹','2, 8, 3','+3','1.61','660.32 °C','2519 °C','2.70 g/cm³','Light, corrosion-resistant and widely used metal.','Aircraft, construction, packaging, electrical conductors and household products.'),

  e(14,'Si','Silicon','28.085',14,3,'p','metalloid','Solid','[Ne] 3s² 3p²','2, 8, 4','-4, +2, +4','1.90','1414 °C','3265 °C','2.329 g/cm³','Major semiconductor and one of the most abundant elements in Earth’s crust.','Computer chips, solar cells, glass, concrete and silicones.'),

  e(15,'P','Phosphorus','30.974',15,3,'p','nonmetal','Solid','[Ne] 3s² 3p³','2, 8, 5','-3, +3, +5','2.19','44.15 °C (white)','280.5 °C (white)','~1.82 g/cm³','Essential biological nonmetal present in DNA, ATP and bones.','Fertilizers, phosphoric acid, chemicals and matches.'),

  e(16,'S','Sulfur','32.06',16,3,'p','nonmetal','Solid','[Ne] 3s² 3p⁴','2, 8, 6','-2, +4, +6','2.58','115.21 °C','444.72 °C','2.07 g/cm³','Yellow nonmetal occurring naturally and in sulfide minerals.','Sulfuric acid, fertilizers, rubber vulcanization and chemical manufacturing.'),

  e(17,'Cl','Chlorine','35.45',17,3,'p','halogen','Gas','[Ne] 3s² 3p⁵','2, 8, 7','-1, +1, +3, +5, +7','3.16','-101.5 °C','-34.04 °C','3.214 g/L','Reactive halogen commonly found as chloride compounds.','Water disinfection, PVC production, bleaching and chemical synthesis.'),

  e(18,'Ar','Argon','39.948',18,3,'p','noble','Gas','[Ne] 3s² 3p⁶','2, 8, 8','0','—','-189.34 °C','-185.85 °C','1.784 g/L','Inert noble gas making up nearly one percent of Earth’s atmosphere.','Welding shields, light bulbs, laboratories and inert atmospheres.'),

  e(19,'K','Potassium','39.098',1,4,'s','alkali','Solid','[Ar] 4s¹','2, 8, 8, 1','+1','0.82','63.38 °C','759 °C','0.862 g/cm³','Very reactive alkali metal essential to biological cells.','Fertilizers, potassium compounds and laboratory chemicals.'),

  e(20,'Ca','Calcium','40.078',2,4,'s','alkaline','Solid','[Ar] 4s²','2, 8, 8, 2','+2','1.00','842 °C','1484 °C','1.55 g/cm³','Important alkaline-earth metal found in bones, limestone and minerals.','Cement, metallurgy, construction materials and biological systems.'),

  e(21,'Sc','Scandium','44.956',3,4,'d','transition','Solid','[Ar] 3d¹ 4s²','2, 8, 9, 2','+3','1.36','1541 °C','2836 °C','2.985 g/cm³','Light transition metal with properties useful in high-performance alloys.','Aluminium-scandium alloys, aerospace equipment and specialized lighting.'),

  e(22,'Ti','Titanium','47.867',4,4,'d','transition','Solid','[Ar] 3d² 4s²','2, 8, 10, 2','+2, +3, +4','1.54','1668 °C','3287 °C','4.506 g/cm³','Strong, light and corrosion-resistant transition metal.','Aircraft, medical implants, chemical equipment and titanium dioxide pigments.'),

  e(23,'V','Vanadium','50.942',5,4,'d','transition','Solid','[Ar] 3d³ 4s²','2, 8, 11, 2','+2, +3, +4, +5','1.63','1910 °C','3407 °C','6.11 g/cm³','Hard transition metal capable of several oxidation states.','High-strength steel alloys, catalysts and energy-storage systems.'),

  e(24,'Cr','Chromium','51.996',6,4,'d','transition','Solid','[Ar] 3d⁵ 4s¹','2, 8, 13, 1','+2, +3, +6','1.66','1907 °C','2671 °C','7.15 g/cm³','Hard metal valued for corrosion resistance and bright surface finish.','Stainless steel, chrome plating, pigments and alloys.'),

  e(25,'Mn','Manganese','54.938',7,4,'d','transition','Solid','[Ar] 3d⁵ 4s²','2, 8, 13, 2','+2, +3, +4, +6, +7','1.55','1246 °C','2061 °C','7.21 g/cm³','Transition metal important in steel and biological enzymes.','Steelmaking, batteries, alloys and pigments.'),

  e(26,'Fe','Iron','55.845',8,4,'d','transition','Solid','[Ar] 3d⁶ 4s²','2, 8, 14, 2','+2, +3','1.83','1538 °C','2862 °C','7.874 g/cm³','One of the most important structural metals and central atom of hemoglobin.','Steel production, buildings, vehicles, machinery, tools and infrastructure.'),

  e(27,'Co','Cobalt','58.933',9,4,'d','transition','Solid','[Ar] 3d⁷ 4s²','2, 8, 15, 2','+2, +3','1.88','1495 °C','2927 °C','8.90 g/cm³','Ferromagnetic transition metal used in advanced materials.','Rechargeable batteries, superalloys, magnets, pigments and catalysts.'),

  e(28,'Ni','Nickel','58.693',10,4,'d','transition','Solid','[Ar] 3d⁸ 4s²','2, 8, 16, 2','+2, +3','1.91','1455 °C','2913 °C','8.908 g/cm³','Tough corrosion-resistant transition metal.','Stainless steel, batteries, coins, superalloys and catalysts.'),

  e(29,'Cu','Copper','63.546',11,4,'d','transition','Solid','[Ar] 3d¹⁰ 4s¹','2, 8, 18, 1','+1, +2','1.90','1084.62 °C','2562 °C','8.96 g/cm³','Excellent electrical and thermal conductor.','Electrical wiring, electronics, plumbing, motors and copper alloys.'),

  e(30,'Zn','Zinc','65.38',12,4,'d','transition','Solid','[Ar] 3d¹⁰ 4s²','2, 8, 18, 2','+2','1.65','419.53 °C','907 °C','7.14 g/cm³','Moderately reactive metal important in corrosion protection.','Galvanizing steel, brass, batteries, die casting and biological enzymes.'),

  e(31,'Ga','Gallium','69.723',13,4,'p','post-transition','Solid','[Ar] 3d¹⁰ 4s² 4p¹','2, 8, 18, 3','+1, +3','1.81','29.76 °C','2204 °C','5.91 g/cm³','Soft metal with a melting point close to room temperature.','Semiconductors, LEDs, high-speed electronics and solar technology.'),

  e(32,'Ge','Germanium','72.630',14,4,'p','metalloid','Solid','[Ar] 3d¹⁰ 4s² 4p²','2, 8, 18, 4','-4, +2, +4','2.01','938.25 °C','2820 °C','5.323 g/cm³','Semiconducting metalloid with useful optical properties.','Fiber optics, infrared optics, electronics and solar cells.'),

  e(33,'As','Arsenic','74.922',15,4,'p','metalloid','Solid','[Ar] 3d¹⁰ 4s² 4p³','2, 8, 18, 5','-3, +3, +5','2.18','~817 °C (sublimes)','~614 °C (sublimes)','5.776 g/cm³','Toxic metalloid occurring in several minerals.','Semiconductors, specialty alloys and limited industrial chemical applications.'),

  e(34,'Se','Selenium','78.971',16,4,'p','nonmetal','Solid','[Ar] 3d¹⁰ 4s² 4p⁴','2, 8, 18, 6','-2, +4, +6','2.55','221 °C','685 °C','4.81 g/cm³','Nonmetal with photoconductive properties and biological importance in trace amounts.','Glassmaking, electronics, photocells and pigments.'),

  e(35,'Br','Bromine','79.904',17,4,'p','halogen','Liquid','[Ar] 3d¹⁰ 4s² 4p⁵','2, 8, 18, 7','-1, +1, +3, +5, +7','2.96','-7.2 °C','58.8 °C','3.12 g/cm³','Reactive reddish-brown halogen and one of the few liquid elements at room temperature.','Flame-retardant chemistry, photography chemicals and chemical synthesis.'),

  e(36,'Kr','Krypton','83.798',18,4,'p','noble','Gas','[Ar] 3d¹⁰ 4s² 4p⁶','2, 8, 18, 8','0, +2','3.00','-157.36 °C','-153.42 °C','3.75 g/L','Rare atmospheric noble gas.','Special lighting, lasers, insulation and scientific applications.'),

  e(37,'Rb','Rubidium','85.468',1,5,'s','alkali','Solid','[Kr] 5s¹','2, 8, 18, 8, 1','+1','0.82','39.31 °C','688 °C','1.532 g/cm³','Very reactive soft alkali metal.','Research, atomic clocks, vacuum tubes and specialty electronics.'),

  e(38,'Sr','Strontium','87.62',2,5,'s','alkaline','Solid','[Kr] 5s²','2, 8, 18, 8, 2','+2','0.95','777 °C','1382 °C','2.64 g/cm³','Reactive alkaline-earth metal.','Red fireworks, ferrite magnets, ceramics and specialty materials.'),

  e(39,'Y','Yttrium','88.906',3,5,'d','transition','Solid','[Kr] 4d¹ 5s²','2, 8, 18, 9, 2','+3','1.22','1526 °C','3338 °C','4.472 g/cm³','Transition metal chemically similar to rare-earth elements.','LED phosphors, lasers, superconductors, ceramics and advanced alloys.'),

  e(40,'Zr','Zirconium','91.224',4,5,'d','transition','Solid','[Kr] 4d² 5s²','2, 8, 18, 10, 2','+4','1.33','1855 °C','4409 °C','6.52 g/cm³','Strong corrosion-resistant transition metal.','Nuclear reactor cladding, ceramics, chemical equipment and alloys.'),

  e(41,'Nb','Niobium','92.906',5,5,'d','transition','Solid','[Kr] 4d⁴ 5s¹','2, 8, 18, 12, 1','+3, +5','1.60','2477 °C','4744 °C','8.57 g/cm³','Ductile refractory metal with superconducting properties.','Superconducting magnets, high-strength steels, aerospace alloys and MRI equipment.'),

  e(42,'Mo','Molybdenum','95.95',6,5,'d','transition','Solid','[Kr] 4d⁵ 5s¹','2, 8, 18, 13, 1','+2, +3, +4, +5, +6','2.16','2623 °C','4639 °C','10.28 g/cm³','High-melting transition metal important in strong alloys.','Steel alloys, catalysts, high-temperature equipment and lubricants.'),

  e(43,'Tc','Technetium','[98]',7,5,'d','transition','Solid','[Kr] 4d⁵ 5s²','2, 8, 18, 13, 2','+4, +7','1.90','2157 °C','4265 °C','~11 g/cm³','First artificially produced element; all isotopes are radioactive.','Technetium-99m is widely used in diagnostic nuclear medicine.'),

  e(44,'Ru','Ruthenium','101.07',8,5,'d','transition','Solid','[Kr] 4d⁷ 5s¹','2, 8, 18, 15, 1','+2, +3, +4, +8','2.20','2334 °C','4150 °C','12.37 g/cm³','Hard platinum-group transition metal.','Electrical contacts, catalysts, wear-resistant alloys and electronics.'),

  e(45,'Rh','Rhodium','102.91',9,5,'d','transition','Solid','[Kr] 4d⁸ 5s¹','2, 8, 18, 16, 1','+1, +3','2.28','1964 °C','3695 °C','12.41 g/cm³','Rare, reflective and highly corrosion-resistant platinum-group metal.','Catalytic converters, catalysts, electrical contacts and reflective coatings.'),

  e(46,'Pd','Palladium','106.42',10,5,'d','transition','Solid','[Kr] 4d¹⁰','2, 8, 18, 18','+2, +4','2.20','1554.9 °C','2963 °C','12.02 g/cm³','Platinum-group metal with strong catalytic properties.','Catalytic converters, electronics, dentistry, jewelry and hydrogen-related technology.'),

  e(47,'Ag','Silver','107.87',11,5,'d','transition','Solid','[Kr] 4d¹⁰ 5s¹','2, 8, 18, 18, 1','+1','1.93','961.78 °C','2162 °C','10.49 g/cm³','Metal with the highest electrical conductivity.','Electronics, jewelry, mirrors, solar cells and antimicrobial applications.'),

  e(48,'Cd','Cadmium','112.41',12,5,'d','transition','Solid','[Kr] 4d¹⁰ 5s²','2, 8, 18, 18, 2','+2','1.69','321.07 °C','767 °C','8.65 g/cm³','Soft toxic metal related chemically to zinc.','Batteries, pigments, coatings and specialized nuclear applications.'),

  e(49,'In','Indium','114.82',13,5,'p','post-transition','Solid','[Kr] 4d¹⁰ 5s² 5p¹','2, 8, 18, 18, 3','+1, +3','1.78','156.60 °C','2072 °C','7.31 g/cm³','Soft post-transition metal important in modern displays.','Indium tin oxide touchscreens, LCDs, semiconductors and solders.'),

  e(50,'Sn','Tin','118.71',14,5,'p','post-transition','Solid','[Kr] 4d¹⁰ 5s² 5p²','2, 8, 18, 18, 4','+2, +4','1.96','231.93 °C','2602 °C','7.287 g/cm³','Soft corrosion-resistant metal known since antiquity.','Solder, tin plating, bronze, food cans and chemical compounds.'),

  e(51,'Sb','Antimony','121.76',15,5,'p','metalloid','Solid','[Kr] 4d¹⁰ 5s² 5p³','2, 8, 18, 18, 5','-3, +3, +5','2.05','630.63 °C','1587 °C','6.685 g/cm³','Brittle metalloid used in alloys and compounds.','Flame-retardant compounds, lead alloys, batteries and semiconductors.'),

  e(52,'Te','Tellurium','127.60',16,5,'p','metalloid','Solid','[Kr] 4d¹⁰ 5s² 5p⁴','2, 8, 18, 18, 6','-2, +4, +6','2.10','449.51 °C','988 °C','6.24 g/cm³','Rare metalloid with semiconductor properties.','Solar cells, thermoelectrics, alloys and semiconductor devices.'),

  e(53,'I','Iodine','126.90',17,5,'p','halogen','Solid','[Kr] 4d¹⁰ 5s² 5p⁵','2, 8, 18, 18, 7','-1, +1, +3, +5, +7','2.66','113.7 °C','184.3 °C','4.93 g/cm³','Halogen essential in small amounts for thyroid function.','Medicine, disinfectants, iodized salt, imaging and chemical synthesis.'),

  e(54,'Xe','Xenon','131.29',18,5,'p','noble','Gas','[Kr] 4d¹⁰ 5s² 5p⁶','2, 8, 18, 18, 8','0, +2, +4, +6, +8','2.60','-111.75 °C','-108.10 °C','5.89 g/L','Heavy noble gas capable of forming several compounds.','High-intensity lamps, ion propulsion, imaging and specialized anesthesia.'),

  e(55,'Cs','Cesium','132.91',1,6,'s','alkali','Solid','[Xe] 6s¹','2, 8, 18, 18, 8, 1','+1','0.79','28.44 °C','671 °C','1.93 g/cm³','Extremely reactive alkali metal with a very low melting point.','Atomic clocks, photoelectric devices, drilling fluids and research.'),

  e(56,'Ba','Barium','137.33',2,6,'s','alkaline','Solid','[Xe] 6s²','2, 8, 18, 18, 8, 2','+2','0.89','727 °C','1845 °C','3.62 g/cm³','Reactive alkaline-earth metal occurring mainly in minerals.','Medical X-ray contrast as barium sulfate, drilling fluids, ceramics and fireworks.'),

  // LANTHANIDES
  e(57,'La','Lanthanum','138.91',null,6,'f','lanthanide','Solid','[Xe] 5d¹ 6s²','2, 8, 18, 18, 9, 2','+3','1.10','920 °C','3464 °C','6.15 g/cm³','Soft rare-earth metal and first member of the lanthanide series.','Optical glass, catalysts, batteries and specialty alloys.'),

  e(58,'Ce','Cerium','140.12',null,6,'f','lanthanide','Solid','[Xe] 4f¹ 5d¹ 6s²','2, 8, 18, 19, 9, 2','+3, +4','1.12','798 °C','3443 °C','6.77 g/cm³','Most abundant lanthanide and a reactive rare-earth metal.','Catalytic converters, glass polishing, lighter flints and alloys.'),

  e(59,'Pr','Praseodymium','140.91',null,6,'f','lanthanide','Solid','[Xe] 4f³ 6s²','2, 8, 18, 21, 8, 2','+3, +4','1.13','931 °C','3520 °C','6.77 g/cm³','Soft rare-earth metal with characteristic green compounds.','Magnets, aircraft alloys, glass coloring and high-strength metals.'),

  e(60,'Nd','Neodymium','144.24',null,6,'f','lanthanide','Solid','[Xe] 4f⁴ 6s²','2, 8, 18, 22, 8, 2','+3','1.14','1024 °C','3074 °C','7.01 g/cm³','Rare-earth metal best known for powerful permanent magnets.','Neodymium magnets, motors, headphones, wind turbines and lasers.'),

  e(61,'Pm','Promethium','[145]',null,6,'f','lanthanide','Solid','[Xe] 4f⁵ 6s²','2, 8, 18, 23, 8, 2','+3','1.13','~1042 °C','~3000 °C','~7.26 g/cm³','Radioactive lanthanide with no stable isotopes.','Specialized nuclear batteries, research and luminescent applications.'),

  e(62,'Sm','Samarium','150.36',null,6,'f','lanthanide','Solid','[Xe] 4f⁶ 6s²','2, 8, 18, 24, 8, 2','+2, +3','1.17','1072 °C','1794 °C','7.52 g/cm³','Rare-earth element with useful magnetic and neutron-absorbing properties.','Samarium-cobalt magnets, nuclear reactors, lasers and catalysts.'),

  e(63,'Eu','Europium','151.96',null,6,'f','lanthanide','Solid','[Xe] 4f⁷ 6s²','2, 8, 18, 25, 8, 2','+2, +3','1.20','822 °C','1529 °C','5.24 g/cm³','Highly reactive lanthanide famous for strong luminescence.','Red and blue phosphors, displays, LEDs and security markings.'),

  e(64,'Gd','Gadolinium','157.25',null,6,'f','lanthanide','Solid','[Xe] 4f⁷ 5d¹ 6s²','2, 8, 18, 25, 9, 2','+3','1.20','1313 °C','3273 °C','7.90 g/cm³','Magnetic rare-earth metal with strong neutron absorption.','MRI contrast chemistry, nuclear technology, magnets and research.'),

  e(65,'Tb','Terbium','158.93',null,6,'f','lanthanide','Solid','[Xe] 4f⁹ 6s²','2, 8, 18, 27, 8, 2','+3, +4','1.20','1356 °C','3230 °C','8.23 g/cm³','Rare lanthanide producing bright green luminescence.','Green phosphors, solid-state devices, magnets and specialty alloys.'),

  e(66,'Dy','Dysprosium','162.50',null,6,'f','lanthanide','Solid','[Xe] 4f¹⁰ 6s²','2, 8, 18, 28, 8, 2','+3','1.22','1412 °C','2567 °C','8.55 g/cm³','Rare-earth metal with strong magnetic characteristics.','High-performance magnets, nuclear control materials and lasers.'),

  e(67,'Ho','Holmium','164.93',null,6,'f','lanthanide','Solid','[Xe] 4f¹¹ 6s²','2, 8, 18, 29, 8, 2','+3','1.23','1474 °C','2700 °C','8.80 g/cm³','Lanthanide with an exceptionally high magnetic moment.','Specialized magnets, lasers, nuclear research and calibration standards.'),

  e(68,'Er','Erbium','167.26',null,6,'f','lanthanide','Solid','[Xe] 4f¹² 6s²','2, 8, 18, 30, 8, 2','+3','1.24','1529 °C','2868 °C','9.07 g/cm³','Rare-earth metal whose ions produce characteristic pink compounds.','Fiber-optic amplifiers, lasers, glass coloring and metallurgy.'),

  e(69,'Tm','Thulium','168.93',null,6,'f','lanthanide','Solid','[Xe] 4f¹³ 6s²','2, 8, 18, 31, 8, 2','+2, +3','1.25','1545 °C','1950 °C','9.32 g/cm³','One of the least abundant naturally occurring lanthanides.','Portable X-ray sources, lasers and scientific research.'),

  e(70,'Yb','Ytterbium','173.05',null,6,'f','lanthanide','Solid','[Xe] 4f¹⁴ 6s²','2, 8, 18, 32, 8, 2','+2, +3','1.10','824 °C','1196 °C','6.90 g/cm³','Soft rare-earth metal with a filled 4f subshell.','Fiber lasers, specialty alloys, atomic clocks and research.'),

  e(71,'Lu','Lutetium','174.97',null,6,'f','lanthanide','Solid','[Xe] 4f¹⁴ 5d¹ 6s²','2, 8, 18, 32, 9, 2','+3','1.27','1663 °C','3402 °C','9.84 g/cm³','Dense and relatively hard final member of the lanthanide series.','PET detector crystals, catalysts and specialized research.'),

  e(72,'Hf','Hafnium','178.49',4,6,'d','transition','Solid','[Xe] 4f¹⁴ 5d² 6s²','2, 8, 18, 32, 10, 2','+4','1.30','2233 °C','4603 °C','13.31 g/cm³','Dense corrosion-resistant metal chemically similar to zirconium.','Nuclear control rods, superalloys, plasma electrodes and microelectronics.'),

  e(73,'Ta','Tantalum','180.95',5,6,'d','transition','Solid','[Xe] 4f¹⁴ 5d³ 6s²','2, 8, 18, 32, 11, 2','+5','1.50','3017 °C','5458 °C','16.69 g/cm³','Highly corrosion-resistant refractory metal.','Capacitors, electronics, surgical implants and high-temperature alloys.'),

  e(74,'W','Tungsten','183.84',6,6,'d','transition','Solid','[Xe] 4f¹⁴ 5d⁴ 6s²','2, 8, 18, 32, 12, 2','+4, +5, +6','2.36','3422 °C','5555 °C','19.25 g/cm³','Metal with the highest melting point among pure metals.','Cutting tools, high-temperature components, electrodes and heavy alloys.'),

  e(75,'Re','Rhenium','186.21',7,6,'d','transition','Solid','[Xe] 4f¹⁴ 5d⁵ 6s²','2, 8, 18, 32, 13, 2','+4, +6, +7','1.90','3186 °C','5596 °C','21.02 g/cm³','Very rare refractory transition metal.','Jet-engine superalloys, catalysts, thermocouples and high-temperature equipment.'),

  e(76,'Os','Osmium','190.23',8,6,'d','transition','Solid','[Xe] 4f¹⁴ 5d⁶ 6s²','2, 8, 18, 32, 14, 2','+2, +3, +4, +8','2.20','3033 °C','5012 °C','22.59 g/cm³','Extremely dense platinum-group metal.','Hard alloys, electrical contacts, specialized instruments and catalysts.'),

  e(77,'Ir','Iridium','192.22',9,6,'d','transition','Solid','[Xe] 4f¹⁴ 5d⁷ 6s²','2, 8, 18, 32, 15, 2','+3, +4','2.20','2446 °C','4428 °C','22.56 g/cm³','Exceptionally corrosion-resistant platinum-group metal.','Spark plugs, crucibles, electrical contacts and high-temperature equipment.'),

  e(78,'Pt','Platinum','195.08',10,6,'d','transition','Solid','[Xe] 4f¹⁴ 5d⁹ 6s¹','2, 8, 18, 32, 17, 1','+2, +4','2.28','1768.3 °C','3825 °C','21.45 g/cm³','Dense noble metal with excellent catalytic and corrosion-resistant properties.','Catalytic converters, laboratory catalysts, jewelry, electronics and anticancer drugs.'),

  e(79,'Au','Gold','196.97',11,6,'d','transition','Solid','[Xe] 4f¹⁴ 5d¹⁰ 6s¹','2, 8, 18, 32, 18, 1','+1, +3','2.54','1064.18 °C','2856 °C','19.32 g/cm³','Highly malleable, conductive and chemically resistant precious metal.','Electronics, jewelry, dentistry, investment and specialized coatings.'),

  e(80,'Hg','Mercury','200.59',12,6,'d','transition','Liquid','[Xe] 4f¹⁴ 5d¹⁰ 6s²','2, 8, 18, 32, 18, 2','+1, +2','2.00','-38.83 °C','356.73 °C','13.534 g/cm³','Dense toxic metal that is liquid at room temperature.','Historically used in instruments and lamps; modern use is restricted because of toxicity.'),

  e(81,'Tl','Thallium','204.38',13,6,'p','post-transition','Solid','[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹','2, 8, 18, 32, 18, 3','+1, +3','1.62','304 °C','1473 °C','11.85 g/cm³','Soft, highly toxic post-transition metal.','Specialized electronics, optical materials and scientific research.'),

  e(82,'Pb','Lead','207.2',14,6,'p','post-transition','Solid','[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²','2, 8, 18, 32, 18, 4','+2, +4','2.33','327.46 °C','1749 °C','11.34 g/cm³','Dense, soft toxic metal known since ancient times.','Lead-acid batteries, radiation shielding and specialized alloys.'),

  e(83,'Bi','Bismuth','208.98',15,6,'p','post-transition','Solid','[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³','2, 8, 18, 32, 18, 5','+3, +5','2.02','271.4 °C','1564 °C','9.78 g/cm³','Heavy post-transition metal with relatively low toxicity compared with lead.','Medicines, low-melting alloys, cosmetics and specialty materials.'),

  e(84,'Po','Polonium','[209]',16,6,'p','post-transition','Solid','[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴','2, 8, 18, 32, 18, 6','-2, +2, +4, +6','2.00','254 °C','962 °C','9.2 g/cm³','Rare and intensely radioactive element.','Mostly scientific research; historically used in specialized static eliminators and heat sources.'),

  e(85,'At','Astatine','[210]',17,6,'p','halogen','Solid','[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵','2, 8, 18, 32, 18, 7','-1, +1, +3, +5, +7','2.2','~302 °C','~337 °C','Unknown','Extremely rare radioactive halogen.','Scientific research and experimental targeted alpha-particle therapy.'),

  e(86,'Rn','Radon','[222]',18,6,'p','noble','Gas','[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶','2, 8, 18, 32, 18, 8','0, +2','—','-71 °C','-61.7 °C','9.73 g/L','Radioactive noble gas produced naturally from uranium decay chains.','Primarily scientific research; accumulation in buildings is a health hazard.'),

  // ACTINIDES
  e(87,'Fr','Francium','[223]',1,7,'s','alkali','Solid','[Rn] 7s¹','2, 8, 18, 32, 18, 8, 1','+1','0.7','~27 °C','~677 °C','Unknown','Extremely rare and highly radioactive alkali metal.','Scientific research only.'),

  e(88,'Ra','Radium','[226]',2,7,'s','alkaline','Solid','[Rn] 7s²','2, 8, 18, 32, 18, 8, 2','+2','0.90','700 °C','1737 °C','5.5 g/cm³','Highly radioactive alkaline-earth metal discovered during early radioactivity research.','Historical radiotherapy and luminous paints; modern use is highly restricted.'),

  e(89,'Ac','Actinium','[227]',null,7,'f','actinide','Solid','[Rn] 6d¹ 7s²','2, 8, 18, 32, 18, 9, 2','+3','1.1','1050 °C','~3200 °C','10.07 g/cm³','Radioactive element that gives the actinide series its name.','Scientific research and investigation of targeted alpha therapies.'),

  e(90,'Th','Thorium','232.04',null,7,'f','actinide','Solid','[Rn] 6d² 7s²','2, 8, 18, 32, 18, 10, 2','+4','1.30','1750 °C','4788 °C','11.72 g/cm³','Naturally occurring radioactive actinide with potential nuclear-fuel applications.','Nuclear-energy research, specialty alloys and historical gas mantles.'),

  e(91,'Pa','Protactinium','231.04',null,7,'f','actinide','Solid','[Rn] 5f² 6d¹ 7s²','2, 8, 18, 32, 20, 9, 2','+4, +5','1.5','1572 °C','~4000 °C','15.37 g/cm³','Rare, dense and radioactive actinide.','Primarily scientific research.'),

  e(92,'U','Uranium','238.03',null,7,'f','actinide','Solid','[Rn] 5f³ 6d¹ 7s²','2, 8, 18, 32, 21, 9, 2','+3, +4, +5, +6','1.38','1132.2 °C','4131 °C','19.1 g/cm³','Heavy radioactive element important in nuclear science.','Nuclear fuel, scientific research and specialized industrial applications.'),

  e(93,'Np','Neptunium','[237]',null,7,'f','actinide','Solid','[Rn] 5f⁴ 6d¹ 7s²','2, 8, 18, 32, 22, 9, 2','+3, +4, +5, +6, +7','1.36','644 °C','~3902 °C','20.45 g/cm³','Radioactive actinide produced in nuclear reactors.','Scientific research and production pathways for certain radioisotopes.'),

  e(94,'Pu','Plutonium','[244]',null,7,'f','actinide','Solid','[Rn] 5f⁶ 7s²','2, 8, 18, 32, 24, 8, 2','+3, +4, +5, +6','1.28','639.4 °C','3228 °C','19.84 g/cm³','Radioactive actinide with several unusual solid phases.','Nuclear-energy systems, radioisotope power sources and controlled scientific research.'),

  e(95,'Am','Americium','[243]',null,7,'f','actinide','Solid','[Rn] 5f⁷ 7s²','2, 8, 18, 32, 25, 8, 2','+3','1.3','1176 °C','~2607 °C','13.69 g/cm³','Synthetic radioactive actinide.','Small sealed sources in some smoke detectors and scientific instruments.'),

  e(96,'Cm','Curium','[247]',null,7,'f','actinide','Solid','[Rn] 5f⁷ 6d¹ 7s²','2, 8, 18, 32, 25, 9, 2','+3','1.3','1345 °C','~3110 °C','13.51 g/cm³','Synthetic radioactive actinide named after Marie and Pierre Curie.','Scientific research and specialized radioisotope applications.'),

  e(97,'Bk','Berkelium','[247]',null,7,'f','actinide','Solid','[Rn] 5f⁹ 7s²','2, 8, 18, 32, 27, 8, 2','+3, +4','1.3','~986 °C','Unknown','~14.8 g/cm³','Synthetic radioactive actinide produced in very small quantities.','Scientific research and synthesis of heavier elements.'),

  e(98,'Cf','Californium','[251]',null,7,'f','actinide','Solid','[Rn] 5f¹⁰ 7s²','2, 8, 18, 32, 28, 8, 2','+3','1.3','~900 °C','Unknown','~15.1 g/cm³','Synthetic radioactive actinide and strong neutron-emitting isotope source.','Neutron-source applications, reactor startup and scientific analysis.'),

  e(99,'Es','Einsteinium','[252]',null,7,'f','actinide','Solid','[Rn] 5f¹¹ 7s²','2, 8, 18, 32, 29, 8, 2','+3','1.3','~860 °C','Unknown','~8.84 g/cm³','Synthetic highly radioactive actinide named after Albert Einstein.','Scientific research only.'),

  e(100,'Fm','Fermium','[257]',null,7,'f','actinide','Solid','[Rn] 5f¹² 7s²','2, 8, 18, 32, 30, 8, 2','+3','1.3','~1527 °C','Unknown','Unknown','Synthetic radioactive element named after Enrico Fermi.','Scientific research only.'),

  e(101,'Md','Mendelevium','[258]',null,7,'f','actinide','Solid','[Rn] 5f¹³ 7s²','2, 8, 18, 32, 31, 8, 2','+2, +3','1.3','~827 °C','Unknown','Unknown','Synthetic actinide named after Dmitri Mendeleev.','Scientific research only.'),

  e(102,'No','Nobelium','[259]',null,7,'f','actinide','Solid','[Rn] 5f¹⁴ 7s²','2, 8, 18, 32, 32, 8, 2','+2, +3','1.3','~827 °C','Unknown','Unknown','Synthetic radioactive actinide named after Alfred Nobel.','Scientific research only.'),

  e(103,'Lr','Lawrencium','[266]',null,7,'f','actinide','Solid','[Rn] 5f¹⁴ 7s² 7p¹','2, 8, 18, 32, 32, 8, 3','+3','1.3','~1627 °C','Unknown','Unknown','Synthetic radioactive element at the end of the actinide series.','Scientific research only.'),

  // SUPERHEAVY ELEMENTS
  e(104,'Rf','Rutherfordium','[267]',4,7,'d','transition','Unknown','[Rn] 5f¹⁴ 6d² 7s²','2, 8, 18, 32, 32, 10, 2','+4','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy radioactive element.','Scientific research only.'),

  e(105,'Db','Dubnium','[268]',5,7,'d','transition','Unknown','[Rn] 5f¹⁴ 6d³ 7s²','2, 8, 18, 32, 32, 11, 2','+5','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy radioactive element.','Scientific research only.'),

  e(106,'Sg','Seaborgium','[269]',6,7,'d','transition','Unknown','[Rn] 5f¹⁴ 6d⁴ 7s²','2, 8, 18, 32, 32, 12, 2','+6','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy element named after Glenn T. Seaborg.','Scientific research only.'),

  e(107,'Bh','Bohrium','[270]',7,7,'d','transition','Unknown','[Rn] 5f¹⁴ 6d⁵ 7s²','2, 8, 18, 32, 32, 13, 2','+7','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy radioactive element.','Scientific research only.'),

  e(108,'Hs','Hassium','[277]',8,7,'d','transition','Unknown','[Rn] 5f¹⁴ 6d⁶ 7s²','2, 8, 18, 32, 32, 14, 2','+8','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy radioactive element.','Scientific research only.'),

  e(109,'Mt','Meitnerium','[278]',9,7,'d','transition','Unknown','[Rn] 5f¹⁴ 6d⁷ 7s²','2, 8, 18, 32, 32, 15, 2','Predicted +1, +3','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy element named after Lise Meitner.','Scientific research only.'),

  e(110,'Ds','Darmstadtium','[281]',10,7,'d','transition','Unknown','[Rn] 5f¹⁴ 6d⁸ 7s²','2, 8, 18, 32, 32, 16, 2','Predicted +2, +4','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy radioactive element.','Scientific research only.'),

  e(111,'Rg','Roentgenium','[282]',11,7,'d','transition','Unknown','[Rn] 5f¹⁴ 6d¹⁰ 7s¹','2, 8, 18, 32, 32, 18, 1','Predicted +1, +3','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy element named after Wilhelm Röntgen.','Scientific research only.'),

  e(112,'Cn','Copernicium','[285]',12,7,'d','transition','Unknown','[Rn] 5f¹⁴ 6d¹⁰ 7s²','2, 8, 18, 32, 32, 18, 2','+2','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy element named after Nicolaus Copernicus.','Scientific research only.'),

  e(113,'Nh','Nihonium','[286]',13,7,'p','post-transition','Unknown','[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹','2, 8, 18, 32, 32, 18, 3','Predicted +1, +3','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy element; its name refers to Japan.','Scientific research only.'),

  e(114,'Fl','Flerovium','[289]',14,7,'p','post-transition','Unknown','[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²','2, 8, 18, 32, 32, 18, 4','Predicted +2, +4','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy radioactive element.','Scientific research only.'),

  e(115,'Mc','Moscovium','[290]',15,7,'p','post-transition','Unknown','[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³','2, 8, 18, 32, 32, 18, 5','Predicted +1, +3','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy radioactive element.','Scientific research only.'),

  e(116,'Lv','Livermorium','[293]',16,7,'p','post-transition','Unknown','[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴','2, 8, 18, 32, 32, 18, 6','Predicted +2, +4','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy radioactive element.','Scientific research only.'),

  e(117,'Ts','Tennessine','[294]',17,7,'p','halogen','Unknown','[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵','2, 8, 18, 32, 32, 18, 7','Predicted -1, +1, +3, +5','Unknown','Unknown','Unknown','Unknown','Synthetic superheavy member of group 17.','Scientific research only.'),

  e(118,'Og','Oganesson','[294]',18,7,'p','noble','Unknown','[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶','2, 8, 18, 32, 32, 18, 8','Predicted 0, +2','Unknown','Unknown','Unknown','Unknown','Heaviest currently named element; synthetic and extremely short-lived.','Scientific research only.'),
];

export const elementCategoryNames: Record<ElementCategory, string> = {
  alkali: 'Alkali Metal',
  alkaline: 'Alkaline Earth Metal',
  transition: 'Transition Metal',
  'post-transition': 'Post-transition Metal',
  metalloid: 'Metalloid',
  nonmetal: 'Reactive Nonmetal',
  halogen: 'Halogen',
  noble: 'Noble Gas',
  lanthanide: 'Lanthanide',
  actinide: 'Actinide',
  unknown: 'Unknown / Predicted',
};

export function getElementByAtomicNumber(
  atomicNumber: number
): PeriodicElement | undefined {
  return periodicElements.find(
    (element) => element.atomicNumber === atomicNumber
  );
}

export function getElementBySymbol(
  symbol: string
): PeriodicElement | undefined {
  return periodicElements.find(
    (element) =>
      element.symbol.toLowerCase() === symbol.trim().toLowerCase()
  );
}

export function searchElements(query: string): PeriodicElement[] {
  const q = query.trim().toLowerCase();

  if (!q) return periodicElements;

  return periodicElements.filter((element) => {
    return (
      element.name.toLowerCase().includes(q) ||
      element.symbol.toLowerCase().includes(q) ||
      String(element.atomicNumber) === q
    );
  });
}