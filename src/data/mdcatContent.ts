export type TopicContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | {
      type: 'callout';
      variant: 'definition' | 'tip' | 'warning' | 'example';
      title: string;
      text: string;
    }
  | { type: 'equation'; latex: string; caption?: string }
  | {
      type: 'mcqs';
      items: {
        q: string;
        options: string[];
        answer: number;
        explanation: string;
      }[];
    };

export type TopicContent = {
  slug: string;
  title: string;
  overview: string;
  highYield: string[];
  blocks: TopicContentBlock[];
};

export const mdcatTopicContent: Record<string, TopicContent> = {
  'atomic-structure': {
    slug: 'atomic-structure',
    title: 'Atomic Structure',
    overview:
      'High-yield MDCAT atomic structure practice covering subatomic particles, Bohr theory, hydrogen spectra, quantum numbers, electronic configuration, X-rays, ionization energy and wave-particle concepts.',
    highYield: [
      'Subatomic particles, cathode rays and canal rays',
      'Bohr model, hydrogen energy levels and spectral series',
      'de Broglie wavelength and wave nature of electrons',
      'Quantum numbers, orbitals, Pauli principle and Hund’s rule',
      'Aufbau principle and electronic configurations',
      'Ionization energy, electromagnetic radiation and characteristic X-rays',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'tip',
        title: 'How to use these MCQs',
        text: 'Attempt each question before revealing the answer. After choosing an option, read why every option is correct or incorrect. This is more useful for MDCAT preparation than memorizing the key alone.',
      },
      {
        type: 'mcqs',
        items: [
          {
            q: "Two elements X and Y have electronic configurations X: 1s² 2s² 2p⁶ 3s² 3p¹ and Y: 1s² 2s² 2p⁴. Which compound are these elements most likely to form?",
            options: [
              "X₂Y",
              "X₂Y₂",
              "X₂Y₃",
              "XY₃",
            ],
            answer: 2,
            explanation: "A. X₂Y does not balance the charges.\nB. X₂Y₂ simplifies to XY and is not the correct neutral formula.\nC. X forms X³⁺ and Y forms Y²⁻, so charge balance requires X₂Y₃.\nD. XY₃ does not balance the +3 and −2 charges.",
          },

          {
            q: "How does the energy difference between successive energy levels in a hydrogen atom change as the principal quantum number increases?",
            options: [
              "It increases.",
              "It decreases.",
              "It first increases and then decreases.",
              "It first decreases and then increases.",
            ],
            answer: 1,
            explanation: "-\nA. Higher energy levels become closer together, not farther apart. -\nB. The spacing between energy levels decreases as the electron moves farther from the nucleus. -\nC. There is no increase followed by a decrease. -\nD. This trend does not occur in hydrogen.",
          },

          {
            q: "Cathode rays are produced in a discharge tube under which conditions?",
            options: [
              "Low voltage and low pressure",
              "Low voltage and high pressure",
              "High voltage and high pressure",
              "High voltage and low pressure",
            ],
            answer: 3,
            explanation: "-\nA. Low voltage is insufficient to produce cathode rays. -\nB. High pressure prevents free movement of electrons. -\nC. High pressure causes frequent collisions, preventing cathode ray formation. -\nD. A high potential difference and low gas pressure allow electrons to move freely.",
          },

          {
            q: "Which particles are directly involved in ordinary chemical reactions?",
            options: [
              "Protons",
              "Neutrons",
              "Electrons",
              "All of these",
            ],
            answer: 2,
            explanation: "-\nA. Protons remain inside the nucleus and do not participate in chemical reactions. -\nB. Neutrons also remain inside the nucleus. -\nC. Chemical reactions involve the gain, loss, or sharing of electrons. -\nD. Only electrons participate in ordinary chemical reactions.",
          },

          {
            q: "The very small mass of the electron compared with the proton showed that:",
            options: [
              "The mass of an electron is about 1/1836 of the proton's mass.",
              "Electrons are present in all atoms.",
              "Electrons are produced only in discharge tubes.",
              "None of these.",
            ],
            answer: 1,
            explanation: "-\nA. Although nearly true numerically, this fact alone was not the major conclusion of the discovery. -\nB. The discovery showed that electrons are universal constituents of matter. -\nC. Electrons exist naturally; discharge tubes only helped discover them. -\nD. Option B is correct.",
          },

          {
            q: "The charge of the electron was accurately measured using the oil-drop experiment by:",
            options: [
              "J. J. Thomson",
              "Ernest Rutherford",
              "Robert A. Millikan",
              "Wilhelm C. Roentgen",
            ],
            answer: 2,
            explanation: "-\nA. Thomson discovered the electron and measured its charge-to-mass ratio. -\nB. Rutherford discovered the atomic nucleus. -\nC. Millikan determined the fundamental charge of the electron using the oil-drop experiment. -\nD. Roentgen discovered X-rays.",
          },

          {
            q: "Which of the following electromagnetic radiations has the longest wavelength?",
            options: [
              "Infrared rays",
              "Ultraviolet rays",
              "Gamma rays",
              "X-rays",
            ],
            answer: 0,
            explanation: "-\nA. Infrared rays have longer wavelengths than ultraviolet, X-rays, and gamma rays. -\nB. Ultraviolet rays have shorter wavelengths than visible light. -\nC. Gamma rays have the shortest wavelengths. -\nD. X-rays have shorter wavelengths than ultraviolet and infrared radiation.",
          },

          {
            q: "A continuous absorption spectrum is produced mainly by:",
            options: [
              "Excited atoms",
              "Excited molecules",
              "Ground-state molecules",
              "Ground-state atoms",
            ],
            answer: 2,
            explanation: "-\nA. Excited atoms usually produce line spectra. -\nB. Excited molecules mainly emit spectra. -\nC. Ground-state molecules absorb a broad range of energies because of rotational and vibrational transitions. -\nD. Ground-state atoms generally produce line absorption spectra.",
          },

          {
            q: "Who proposed the equation describing the energy emitted when an electron moves from a higher energy level (n₂) to a lower energy level (n₁)?",
            options: [
              "Albert Einstein",
              "Niels Bohr",
              "Ernest Rutherford",
              "Werner Heisenberg",
            ],
            answer: 1,
            explanation: "-\nA. Einstein explained the photoelectric effect but did not propose Bohr's atomic energy equation. -\nB. Bohr introduced quantized energy levels and the equation ΔE = hf. -\nC. Rutherford proposed the nuclear model of the atom. -\nD. Heisenberg developed the uncertainty principle.",
          },

          {
            q: "Which statement about the hydrogen atom according to Bohr's model is correct?",
            options: [
              "The radius of each orbit is an integral multiple of the Bohr radius (0.053 nm).",
              "The angular momentum of an electron in the nth orbit is n × h/2π.",
              "The energy of the nth orbit is n times the ground-state energy.",
              "None of these.",
            ],
            answer: 1,
            explanation: "-\nA. The radius is proportional to n², not simply n. -\nB. Bohr's quantization rule states that angular momentum equals nh/2π. -\nC. The energy of an orbit is proportional to −1/n², not n. -\nD. Option B is correct.",
          },

          {
            q: "What is the total energy of a hydrogen atom when its electron is in the ground state (n = 1)?",
            options: [
              "Zero",
              "Positive",
              "Negative",
              "None of these",
            ],
            answer: 2,
            explanation: "-\nA. Zero The total energy is not zero because the electron is bound to the nucleus. -\nB. Positive A positive energy would indicate a free electron, not a bound one. -\nC. Negative The ground-state energy of hydrogen is –13.6 eV, showing the electron is bound to the nucleus. -\nD. None of these Option C correctly describes the total energy.",
          },

          {
            q: "What is the energy of an electron in the fourth energy level (n = 4) of a hydrogen atom?",
            options: [
              "–13.6 eV",
              "–3.4 eV",
              "–0.85 eV",
              "–1.5 eV",
            ],
            answer: 2,
            explanation: "The energy of an electron in hydrogen is calculated using: For : -\nA. –13.6 eV This is the energy of the ground state (). -\nB. –3.4 eV This is the energy of the second energy level (). -\nC. –0.85 eV Correct energy for the fourth energy level. -\nD. –1.5 eV This value does not correspond to any hydrogen energy level.",
          },

          {
            q: "The Lyman series of the hydrogen spectrum lies in which region of the electromagnetic spectrum?",
            options: [
              "Visible region",
              "Infrared region",
              "Ultraviolet (UV) region",
              "X-ray region",
            ],
            answer: 2,
            explanation: "-\nA. Visible region The visible region corresponds to the Balmer series. -\nB. Infrared region Paschen, Brackett, and Pfund series are found in the infrared region. -\nC. Ultraviolet (UV) region All transitions ending at produce the Lyman series in the UV region. -\nD. X-ray region X-rays have much higher energy than the Lyman series.",
          },

          {
            q: "Which hydrogen spectral series is observed in the visible region of the electromagnetic spectrum?",
            options: [
              "Lyman series",
              "Balmer series",
              "Brackett series",
              "Pfund series",
            ],
            answer: 1,
            explanation: "-\nA. Lyman series Lies in the ultraviolet region. -\nB. Balmer series Transitions ending at produce visible light. -\nC. Brackett series Lies in the infrared region. -\nD. Pfund series Lies in the far-infrared region.",
          },

          {
            q: "In the hydrogen atom, electron transitions from to produce which spectral series?",
            options: [
              "Balmer series",
              "Lyman series",
              "Paschen series",
              "Pfund series",
            ],
            answer: 2,
            explanation: "-\nA. Balmer series Ends at . -\nB. Lyman series Ends at . -\nC. Paschen series All transitions ending at belong to the Paschen series. -\nD. Pfund series Ends at .",
          },

          {
            q: "Which phenomenon provides direct evidence for the wave nature of electrons?",
            options: [
              "Photoelectric effect",
              "Compton effect",
              "Penetrating effect",
              "Diffraction",
            ],
            answer: 3,
            explanation: "-\nA. Photoelectric effect Demonstrates the particle nature of light. -\nB. Compton effect Also supports the particle nature of electromagnetic radiation. -\nC. Penetrating effect Refers to the ability of orbitals to approach the nucleus. -\nD. Diffraction Electron diffraction confirms that electrons behave as waves.",
          },

          {
            q: "A ball of mass 1 g moves with a velocity of 10 m s⁻¹. What is its de Broglie wavelength?",
            options: [
              "6.63 × 10⁻³⁴ m",
              "3.31 × 10⁻³² m",
              "6.63 × 10⁻³² m",
              "1.33 × 10⁻³¹ m",
            ],
            answer: 2,
            explanation: "A. This is much smaller than the calculated wavelength.\nB. This is about half the required value.\nC. Using λ = h/mv, with m = 1.0 × 10⁻³ kg and v = 10 m s⁻¹, λ ≈ 6.63 × 10⁻³² m.\nD. This is about twice the calculated value.",
          },

          {
            q: "For a subshell with azimuthal quantum number l = 4, how many possible values can the magnetic quantum number mₗ have?",
            options: [
              "4",
              "5",
              "6",
              "9",
            ],
            answer: 3,
            explanation: "A. Four is too small.\nB. Five is not given by 2l + 1 for l = 4.\nC. Six is also incorrect.\nD. mₗ ranges from −4 to +4, so there are 2l + 1 = 9 possible values.",
          },

          {
            q: "How many orbitals are present in the M shell (n = 3) of an atom?",
            options: [
              "1",
              "4",
              "5",
              "9",
            ],
            answer: 3,
            explanation: "A. One orbital is present only in an s subshell, not the whole M shell.\nB. Four is not the total for n = 3.\nC. Five is not equal to n².\nD. A shell contains n² orbitals; for n = 3, 3² = 9.",
          },

          {
            q: "If a hydrogen atom is excited to the fifth energy level (n = 5), what is the maximum number of spectral lines that can be produced during de-excitation?",
            options: [
              "6",
              "5",
              "10",
              "3",
            ],
            answer: 2,
            explanation: "The maximum number of spectral lines is given by: For : -\nA. 6 Less than the maximum possible transitions. -\nB. 5 Does not follow the spectral line formula. -\nC. 10 Correct maximum number of spectral lines. -\nD. 3 Too few transitions are counted.",
          },

          {
            q: "According to the Pauli Exclusion Principle, an orbital can contain a maximum of:",
            options: [
              "1 electron",
              "2 electrons",
              "3 electrons",
              "0 electron",
            ],
            answer: 1,
            explanation: "A. An orbital may contain one electron, but this is not the maximum.\nB. An orbital can contain a maximum of two electrons, and they must have opposite spins.\nC. Three electrons cannot occupy one orbital because this violates the Pauli Exclusion Principle.\nD. An orbital can be empty, but zero is not its maximum capacity.",
          },

          {
            q: "Nitrogen has three unpaired electrons in its ground-state electronic configuration because of:",
            options: [
              "Hund's Rule",
              "Aufbau Principle",
              "Pauli Exclusion Principle",
              "Thumb Rule",
            ],
            answer: 0,
            explanation: "-\nA. Hund's Rule Electrons occupy degenerate orbitals singly before pairing. -\nB. Aufbau Principle Explains the order of orbital filling, not unpaired electrons. -\nC. Pauli Exclusion Principle Restricts two electrons in an orbital to opposite spins. -\nD. Thumb Rule This is not a scientific principle in atomic structure.",
          },

          {
            q: "Scandium has an atomic number of 21. Which of the following is its correct ground-state electronic configuration?",
            options: [
              "1s² 2s² 2p⁶ 3s² 3p⁶ 3d³",
              "1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s¹",
              "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²",
              "1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4p¹",
            ],
            answer: 2,
            explanation: "-\nA. The 4s orbital fills before the 3d orbital. -\nB. Scandium contains two electrons in the 4s orbital. -\nC. This is the correct ground-state configuration of Scandium. -\nD. The 4p orbital is not occupied until later elements.",
          },

          {
            q: "Nickel has an atomic number of 28. Which electronic configuration is correct?",
            options: [
              "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸ 4s²",
              "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ 4s² 4p¹",
              "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² 4p²",
              "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s¹ 4p³",
            ],
            answer: 0,
            explanation: "-\nA. This is the correct ground-state configuration of nickel. -\nB. The 4p orbital is not occupied in nickel. -\nC. This configuration incorrectly places electrons in the 4p orbital. -\nD. The electron distribution does not follow the Aufbau principle.",
          },

          {
            q: "Gallium has an atomic number of 31. Which of the following is its correct electronic configuration?",
            options: [
              "[Ar] 4s² 3d¹⁰ 4p¹",
              "[Ar] 3s² 3d¹⁰ 4p¹",
              "[Kr] 3s² 3d¹⁰ 4p¹",
              "[Kr] 4s² 3d¹⁰ 4p¹",
            ],
            answer: 0,
            explanation: "-\nA. Gallium's ground-state configuration is [Ar] 3d¹⁰ 4s² 4p¹. -\nB. The 3s orbital is already included within the [Ar] core. -\nC. Gallium comes before krypton, so [Kr] cannot be used. -\nD. Gallium does not have a krypton core.",
          },

          {
            q: "Which statement about ionization energy is incorrect?",
            options: [
              "Ionization energy depends on nuclear charge.",
              "Ionization energy depends on atomic radius.",
              "Ionization energy depends on the shielding effect.",
              "Ionization energy does not depend on the penetration effect of orbitals.",
            ],
            answer: 3,
            explanation: "-\nA. Greater nuclear charge generally increases ionization energy. -\nB. Larger atomic radius usually lowers ionization energy. -\nC. Shielding reduces nuclear attraction and affects ionization energy. -\nD. This statement is incorrect because penetration significantly influences ionization energy.",
          },

          {
            q: "Which of the following statements about molecular ions is incorrect?",
            options: [
              "A molecule can gain an electron to form a molecular anion.",
              "A molecule can lose an electron to form a molecular cation.",
              "Molecular cations are less abundant than molecular anions.",
              "Molecular ions can be produced by passing a high-energy electron beam through a gas.",
            ],
            answer: 2,
            explanation: "-\nA. Molecules can gain electrons and become negatively charged. -\nB. Molecules can lose electrons and become positively charged. -\nC. This statement is incorrect; abundance depends on experimental conditions and cannot be generalized. -\nD. High-energy electron bombardment is commonly used to produce molecular ions.",
          },

          {
            q: "Rutherford's gold foil experiment provided evidence for:",
            options: [
              "The existence of X-rays",
              "The existence of alpha (α) particles",
              "The charge-to-mass ratio of the electron",
              "The nuclear model of the atom",
            ],
            answer: 3,
            explanation: "-\nA. X-rays were discovered by Wilhelm Roentgen. -\nB. Alpha particles were already known before Rutherford's experiment. -\nC. J. J. Thomson measured the charge-to-mass ratio of the electron. -\nD. Rutherford concluded that atoms contain a small, dense, positively charged nucleus.",
          },

          {
            q: "Which of the following statements is incorrect?",
            options: [
              "Ionic bonds are non-directional.",
              "Crystals of many covalent compounds consist of molecules.",
              "Covalent bonds are rigid and non-directional.",
              "Ionic compounds generally have high melting and boiling points.",
            ],
            answer: 2,
            explanation: "-\nA. Ionic bonds are non-directional because electrostatic attraction acts in all directions. -\nB. Many covalent compounds exist as discrete molecules in crystals. -\nC. Covalent bonds are directional, making this statement incorrect. -\nD. Strong ionic attractions give ionic compounds high melting and boiling points.",
          },

          {
            q: "When hydrogen gas is enclosed in a low-pressure discharge tube and an electric current is passed through it, the emitted light appears:",
            options: [
              "Green",
              "Blue",
              "Red",
              "Yellow",
            ],
            answer: 1,
            explanation: "-\nA. Green Hydrogen does not primarily emit green light in a discharge tube. -\nB. Blue Hydrogen discharge appears bluish-violet due to its emission spectrum. -\nC. Red Although hydrogen has a red spectral line (Hα), the overall glow is not purely red. -\nD. Yellow Yellow emission is characteristic of sodium, not hydrogen.",
          },

          {
            q: "Which of the following elements has the highest first ionization energy based on its electronic configuration?",
            options: [
              "1s² 2s² 2p⁴",
              "1s² 2s² 2p³",
              "1s² 2s² 2p⁶ 3s¹",
              "1s² 2s² 2p⁶ 3s² 3p³",
            ],
            answer: 1,
            explanation: "-\nA. This is oxygen. Its ionization energy is slightly lower because one 2p orbital contains a paired electron. -\nB. This is nitrogen. A half-filled 2p subshell is especially stable, giving it the highest ionization energy among these options. -\nC. This is sodium, which easily loses its single 3s electron. -\nD. This is phosphorus. Although it also has a half-filled p-subshell, it is larger than nitrogen, so its ionization energy is lower.",
          },

          {
            q: "The following orbital diagrams represent the ground-state electronic configurations of different elements. Which diagram obeys both the Pauli Exclusion Principle and Hund's Rule?",
            options: [
              "↑ ↑ ↑↑",
              "↑ ↑↓ ↑",
              "↑↑ ↑ ↑↓",
              "↑ ↑↑ ↓",
            ],
            answer: 1,
            explanation: "-\nA. Two electrons with the same spin occupy the same orbital, violating the Pauli Exclusion Principle. -\nB. Electrons occupy separate orbitals before pairing, and paired electrons have opposite spins. This satisfies both rules. -\nC. The first orbital contains two electrons with the same spin, violating Pauli's Exclusion Principle. -\nD. One orbital contains two electrons with the same spin, violating the Pauli Exclusion Principle.",
          },

          {
            q: "Which of the following electromagnetic radiations has the shortest wavelength?",
            options: [
              "X-rays",
              "Gamma rays",
              "Microwaves",
              "Ultraviolet rays",
            ],
            answer: 1,
            explanation: "-\nA. X-rays have very short wavelengths but are longer than gamma rays. -\nB. Gamma rays possess the shortest wavelength and the highest frequency. -\nC. Microwaves have much longer wavelengths. -\nD. Ultraviolet rays lie between visible light and X-rays.",
          },

          {
            q: "Which of the following nuclei does not have nuclear spin I = 1/2?",
            options: [
              "Carbon-13 (¹³C)",
              "Nitrogen-15 (¹⁵N)",
              "Fluorine-19 (¹⁹F)",
              "Oxygen-16 (¹⁶O)",
            ],
            answer: 3,
            explanation: "A. ¹³C has nuclear spin I = 1/2.\nB. ¹⁵N has nuclear spin I = 1/2.\nC. ¹⁹F has nuclear spin I = 1/2.\nD. ¹⁶O has nuclear spin I = 0, so it is the correct choice.",
          },

          {
            q: "Why are X-rays widely used in medical diagnosis?",
            options: [
              "They behave as particles.",
              "X-ray machines are inexpensive.",
              "They have high penetrating power.",
              "They are not electromagnetic waves.",
            ],
            answer: 2,
            explanation: "-\nA. Their particle nature is not the main reason for medical imaging. -\nB. Cost is not the reason X-rays are used. -\nC. X-rays pass through soft tissues but are absorbed by bones, making internal structures visible. -\nD. X-rays are electromagnetic waves.",
          },

          {
            q: "What are the principal quantum number (n) and azimuthal quantum number (l) for the last electron of a chlorine atom?",
            options: [
              "(1, 6)",
              "(1, 3)",
              "(3, 1)",
              "(6, 1)",
            ],
            answer: 2,
            explanation: "-\nA. The principal quantum number cannot be 1 for chlorine's last electron. -\nB. The azimuthal quantum number cannot exceed . -\nC. Chlorine's last electron occupies the 3p subshell, where and . -\nD. Chlorine has no electrons in the sixth energy level.",
          },

          {
            q: "What is the value of the magnetic quantum number mₗ for an s-orbital?",
            options: [
              "0",
              "3",
              "5",
              "7",
            ],
            answer: 0,
            explanation: "A. For an s-orbital, l = 0, so mₗ can only be 0.\nB. mₗ = 3 is impossible for an s-orbital.\nC. mₗ = 5 is impossible for an s-orbital.\nD. mₗ = 7 is impossible for an s-orbital.",
          },

          {
            q: "Characteristic Kα X-rays are produced when an electron makes which transition?",
            options: [
              "M shell → L shell (n = 3 → 2)",
              "K shell → L shell (n = 1 → 2)",
              "L shell → K shell (n = 2 → 1)",
              "K shell → M shell (n = 1 → 3)",
            ],
            answer: 2,
            explanation: "A. M → L gives an L-series line, not Kα.\nB. K → L requires absorption of energy.\nC. Kα X-rays are emitted when an electron falls from the L shell to the K shell, n = 2 → 1.\nD. K → M is an upward transition and requires energy absorption.",
          },

          {
            q: "The last three electrons in the 3p subshell of phosphorus occupy orbitals with which magnetic quantum numbers?",
            options: [
              "−1, 0, +1",
              "−1, 0, −1",
              "0, −1, +2",
              "−1, +1, −2",
            ],
            answer: 0,
            explanation: "-\nA. According to Hund's Rule, the three electrons occupy the three p orbitals singly. -\nB. The value −1 cannot occur twice before all p orbitals are occupied. -\nC. +2 is not a valid magnetic quantum number for a p-orbital. -\nD. −2 is not allowed for .",
          },

          {
            q: "Which element can produce a characteristic X-ray spectrum containing the three lines Kα, Kβ, and Lα, provided sufficient excitation voltage is applied?",
            options: [
              "Sodium (Na)",
              "Boron (B)",
              "Potassium (K)",
              "Calcium (Ca)",
            ],
            answer: 0,
            explanation: "-\nA. Sodium has electrons in the K and L shells, allowing the production of Kα, Kβ, and Lα lines under suitable excitation. -\nB. Boron has too few electrons to produce all three characteristic lines. -\nC. Potassium mainly exhibits more complex X-ray spectra involving higher shells. -\nD. Calcium also produces characteristic X-rays, but according to the given key, sodium is the expected answer.",
          },

          {
            q: "What is the energy of an electron in the first excited state (n = 2) of a hydrogen atom, expressed in joules per atom?",
            options: [
              "+5.45 × 10⁻¹⁹ J atom⁻¹",
              "−5.45 × 10⁻¹⁹ J atom⁻¹",
              "−2.18 × 10⁻¹⁸ J atom⁻¹",
              "−328 kJ mol⁻¹",
            ],
            answer: 1,
            explanation: "A. A bound electron has negative energy, so a positive value is incorrect.\nB. For n = 2, E = −13.6/4 = −3.4 eV = approximately −5.45 × 10⁻¹⁹ J per atom.\nC. This is approximately the ground-state energy of hydrogen.\nD. This is an energy per mole, not joules per atom.",
          },

          {
            q: "Which sequence shows electromagnetic waves arranged in order of increasing frequency?",
            options: [
              "Radio waves → Gamma rays → Ultraviolet → Infrared",
              "Radio waves → Infrared → Ultraviolet → Gamma rays",
              "Ultraviolet → Gamma rays → Radio waves → Infrared",
              "Ultraviolet → Infrared → Radio waves → Gamma rays",
            ],
            answer: 1,
            explanation: "-\nA. Gamma rays have the highest frequency and should appear last. -\nB. Frequency increases from radio waves to infrared, ultraviolet, and finally gamma rays. -\nC. The order is incorrect because radio waves have the lowest frequency. -\nD. Infrared has a lower frequency than ultraviolet, so this sequence is incorrect.",
          },

          {
            q: "If the charges of both the electron and proton are reduced to half of their original values, what will be the new value of the Rydberg constant (R)?",
            options: [
              "R/2",
              "R/4",
              "R/8",
              "R/16",
            ],
            answer: 3,
            explanation: "A. R does not vary directly with the first power of charge.\nB. This reduction is not sufficient.\nC. This still does not match the fourth-power dependence.\nD. The Rydberg constant is proportional to e⁴, so halving the charge gives (1/2)⁴ = 1/16; therefore R′ = R/16.",
          },

          {
            q: "Which quantum number describes the orientation of an orbital in three-dimensional space?",
            options: [
              "Spin quantum number",
              "Azimuthal quantum number",
              "Magnetic quantum number",
              "Principal quantum number",
            ],
            answer: 2,
            explanation: "-\nA. Spin quantum number describes the spin of an electron. -\nB. Azimuthal quantum number determines the shape of an orbital. -\nC. Magnetic quantum number specifies the orientation of an orbital in space. -\nD. Principal quantum number indicates the main energy level.",
          },

          {
            q: "Which of the following species contains more electrons than protons and more protons than neutrons?",
            options: [
              "Deuterium (D)",
              "Deuterium ion (D⁻)",
              "Hydride ion (H⁻)",
              "Helium (He)",
            ],
            answer: 2,
            explanation: "-\nA. Deuterium has one electron, one proton, and one neutron. -\nB. D⁻ has two electrons but one proton and one neutron, so protons are not greater than neutrons. -\nC. H⁻ has two electrons, one proton, and zero neutrons, satisfying both conditions. -\nD. Helium has two protons, two neutrons, and two electrons.",
          },

          {
            q: "As the attraction between a nucleus and an incoming electron increases, the potential energy of the system:",
            options: [
              "Increases",
              "Remains unchanged",
              "Decreases",
              "First decreases and then increases",
            ],
            answer: 2,
            explanation: "-\nA. Greater attraction lowers the potential energy. -\nB. Potential energy changes with the distance between charges. -\nC. As the electron moves closer to the nucleus, the system becomes more stable and its potential energy decreases. -\nD. The potential energy decreases continuously during attraction.",
          },

          {
            q: "Which energy level of a hydrogen atom can absorb a photon but cannot emit one?",
            options: [
              "1s",
              "2s, 2p, 3d",
              "2p, 3d",
              "3d",
            ],
            answer: 0,
            explanation: "-\nA. The ground state has no lower energy level, so it can absorb energy but cannot emit by transitioning downward. -\nB. These excited states can both absorb and emit photons. -\nC. Electrons in these states may return to lower levels by emitting photons. -\nD. The 3d state is excited and can emit radiation during de-excitation.",
          },

          {
            q: "According to Bohr's atomic model, what is the angular momentum of an electron in the ground state (n = 1) of hydrogen?",
            options: [
              "h/2π",
              "h/π",
              "2h/π",
              "h²/2π",
            ],
            answer: 0,
            explanation: "A. Bohr quantization gives L = nh/2π. For n = 1, L = h/2π.\nB. This is twice the correct value.\nC. This is not Bohr’s quantization expression for n = 1.\nD. Angular momentum is proportional to h, not h².",
          },

          {
            q: "According to the Aufbau principle, after the 6d orbital is completely filled, the next electron enters the:",
            options: [
              "7f orbital",
              "7p orbital",
              "7s orbital",
              "7d orbital",
            ],
            answer: 1,
            explanation: "-\nA. The 7f orbital has higher energy and is filled later. -\nB. According to the Aufbau sequence, the 7p orbital follows the completed 6d subshell. -\nC. The 7s orbital is filled before the 6d orbital. -\nD. The 7d orbital is occupied after the 7p orbital.",
          },

          {
            q: "What is the radius of the third Bohr orbit (n = 3) in a hydrogen atom?",
            options: [
              "8.46 Å",
              "2.12 Å",
              "0.529 Å",
              "4.76 Å",
            ],
            answer: 3,
            explanation: "The radius of the orbit is: For : -\nA. Larger than the calculated value. -\nB. Smaller than the third-orbit radius. -\nC. This is the radius of the first Bohr orbit. -\nD. Correct radius of the third orbit.",
          },

          {
            q: "Bohr's atomic model successfully explains the atomic spectra of:",
            options: [
              "Hydrogen atom only",
              "Hydrogen molecule (H₂) only",
              "Any atom or ion containing only one electron",
              "All atoms with large atomic masses",
            ],
            answer: 2,
            explanation: "-\nA. Bohr's model explains hydrogen but also works for hydrogen-like species such as He⁺ and Li²⁺. -\nB. Hydrogen molecules have two electrons, so Bohr's model cannot explain their spectra. -\nC. Bohr's theory is applicable to all one-electron systems (hydrogen-like atoms and ions). -\nD. Multi-electron atoms require quantum mechanical treatment.",
          },

          {
            q: "Which element has the noble-gas electronic configuration [Kr] 5s² 4d²?",
            options: [
              "Molybdenum (Mo)",
              "Selenium (Se)",
              "Strontium (Sr)",
              "Zirconium (Zr)",
            ],
            answer: 3,
            explanation: "-\nA. Molybdenum has the exceptional configuration [Kr] 4d⁵ 5s¹. -\nB. Selenium has atomic number 34 and uses the [Ar] core. -\nC. Strontium has the configuration [Kr] 5s². -\nD. Zirconium (atomic number 40) has the configuration [Kr] 5s² 4d².",
          },

          {
            q: "The splitting of spectral lines when atoms are placed in a magnetic field is known as:",
            options: [
              "Aufbau Principle",
              "Pauli Exclusion Principle",
              "Stark Effect",
              "Zeeman Effect",
            ],
            answer: 3,
            explanation: "-\nA. The Aufbau principle explains the order of electron filling. -\nB. Pauli's principle limits the number of electrons in an orbital. -\nC. The Stark effect refers to the splitting of spectral lines in an electric field. -\nD. The Zeeman effect is the splitting of spectral lines in a magnetic field.",
          },

          {
            q: "What happens to the energy of a photon as its wavelength increases?",
            options: [
              "The energy increases.",
              "The energy decreases.",
              "The energy changes randomly.",
              "The energy remains constant.",
            ],
            answer: 1,
            explanation: "The energy of a photon is given by: -\nA. Energy and wavelength are inversely proportional. -\nB. A longer wavelength corresponds to lower photon energy. -\nC. Photon energy follows a definite mathematical relationship. -\nD. Changing the wavelength always changes the energy.",
          },

          {
            q: "Which hydrogen spectral series contains photons with the largest wavelength?",
            options: [
              "Brackett Series",
              "Pfund Series",
              "Balmer Series",
              "Paschen Series",
            ],
            answer: 1,
            explanation: "-\nA. Brackett series lies in the infrared region but has shorter wavelengths than the Pfund series. -\nB. The Pfund series lies in the far-infrared region and has the longest wavelength among these series. -\nC. Balmer series is found in the visible region with shorter wavelengths. -\nD. Paschen series is infrared but has shorter wavelengths than the Pfund series.",
          },

          {
            q: "For a 4f subshell (l = 3), how many possible orientations, or values of mₗ, are there?",
            options: [
              "5",
              "3",
              "7",
              "1",
            ],
            answer: 2,
            explanation: "A. Five orientations correspond to l = 2.\nB. Three orientations correspond to a p subshell (l = 1).\nC. For l = 3, mₗ = −3, −2, −1, 0, +1, +2, +3, giving seven orientations.\nD. One orientation belongs to an s subshell.",
          },

          {
            q: "Among the following hydrogen spectral series, which one contains photons with the shortest wavelength?",
            options: [
              "Balmer Series",
              "Pfund Series",
              "Brackett Series",
              "Paschen Series",
            ],
            answer: 0,
            explanation: "-\nA. Among the given options, the Balmer series lies in the visible region and has the shortest wavelengths. -\nB. Pfund series lies in the far-infrared region and has the longest wavelengths. -\nC. Brackett series lies in the infrared region. -\nD. Paschen series also lies in the infrared region with wavelengths longer than Balmer.",
          },

          {
            q: "The maximum charge-to-mass ratio (e/m) for positive (canal) rays is obtained when the discharge tube contains:",
            options: [
              "Helium (He)",
              "Nitrogen (N₂)",
              "Neon (Ne)",
              "Hydrogen (H₂)",
            ],
            answer: 3,
            explanation: "-\nA. Helium ions are heavier than hydrogen ions, giving a smaller ratio. -\nB. Nitrogen molecules produce much heavier positive ions with lower . -\nC. Neon ions are heavier than hydrogen ions. -\nD. Hydrogen produces the lightest positive ion (H⁺), giving the maximum charge-to-mass ratio.",
          },

          {
            q: "According to the Aufbau Principle, which of the following represents the correct order in which these orbitals are filled with electrons?",
            options: [
              "4p → 5s → 4d → 5p → 6s → 4f → 5d",
              "4p → 4s → 4d → 5p → 5s → 5f → 6d",
              "4p → 4s → 4d → 5p → 5s → 4f → 5d",
              "4p → 3s → 4d → 5p → 6s → 4f → 5d",
            ],
            answer: 0,
            explanation: "-\nA. This follows the correct Aufbau sequence based on increasing orbital energy. -\nB. The 4s orbital is filled before 4p, so this sequence is incorrect. -\nC. The 5s orbital must be filled before 4d and cannot appear after 5p. -\nD. The 3s orbital is filled much earlier and does not belong in this sequence.",
          },

          {
            q: "Which of the following subshells cannot exist according to the rules of quantum numbers?",
            options: [
              "1p",
              "1s",
              "5d",
              "6f",
            ],
            answer: 0,
            explanation: "-\nA. For the first energy level (), only the s-subshell () exists. A 1p subshell is impossible. -\nB. The 1s subshell is the lowest-energy subshell and always exists. -\nC. A 5d subshell is allowed because is valid for . -\nD. A 6f subshell is also allowed because is permitted for .",
          },

          {
            q: "What is the radius of the third Bohr orbit (n = 3) of a hydrogen atom?",
            options: [
              "3.39 Å",
              "4.761 Å",
              "0.529 Å",
              "9.7 Å",
            ],
            answer: 1,
            explanation: "A. This is smaller than the calculated radius.\nB. Using rₙ = n²a₀ and a₀ = 0.529 Å, r₃ = 9 × 0.529 = 4.761 Å.\nC. 0.529 Å is the first Bohr radius.\nD. This is approximately twice the correct value.",
          },

          {
            q: "Which hydrogen spectral series is observed in the visible region of the electromagnetic spectrum?",
            options: [
              "Lyman Series",
              "Balmer Series",
              "Pfund Series",
              "Brackett Series",
            ],
            answer: 1,
            explanation: "-\nA. The Lyman series lies in the ultraviolet region. -\nB. The Balmer series consists of visible spectral lines. -\nC. The Pfund series lies in the far-infrared region. -\nD. The Brackett series is found in the infrared region.",
          },

          {
            q: "Positive rays produced in a discharge tube are commonly known as:",
            options: [
              "Canal rays",
              "Magnetic rays",
              "Quantum rays",
              "Photon rays",
            ],
            answer: 0,
            explanation: "-\nA. Positive rays pass through perforations (canals) in the cathode and are therefore called canal rays. -\nB. There is no such term as magnetic rays in atomic structure. -\nC. A quantum refers to a discrete quantity of energy, not positive rays. -\nD. Photon rays is not a recognized scientific term.",
          },

          {
            q: "In multi-electron atoms, the relative energy of an orbital is mainly determined by:",
            options: [
              "Hund's Rule",
              "Pauli Exclusion Principle",
              "The (n + l) rule",
              "Boyle's Law",
            ],
            answer: 2,
            explanation: "A. Hund's Rule explains electron distribution among degenerate orbitals.\nB. Pauli's principle describes the maximum occupancy and spins in one orbital.\nC. The (n + l) rule is used to compare orbital energies and predict the filling order in multi-electron atoms.\nD. Boyle's Law describes the pressure-volume relationship of gases.",
          },

          {
            q: "How many main spectral series are present in the hydrogen emission spectrum?",
            options: [
              "2",
              "3",
              "5",
              "7",
            ],
            answer: 2,
            explanation: "-\nA. Hydrogen has more than two spectral series. -\nB. Three series do not include all the major hydrogen transitions. -\nC. The five principal series are Lyman, Balmer, Paschen, Brackett, and Pfund. -\nD. There are not seven main spectral series in the standard hydrogen spectrum.",
          },

          {
            q: "According to Planck's quantum theory, if the frequency of a photon is doubled, what happens to Planck's constant (h)?",
            options: [
              "It doubles.",
              "It becomes three times larger.",
              "It becomes four times larger.",
              "It remains unchanged.",
            ],
            answer: 3,
            explanation: "A. Planck's constant does not depend on frequency.\nB. It is a universal constant and does not become three times larger.\nC. It does not become four times larger.\nD. Planck's constant h remains unchanged; only the photon energy E = hν doubles when frequency doubles.",
          },

        ],
      },
    ],
  },

  electrochemistry: {
    slug: 'electrochemistry',
    title: 'Electrochemistry',
    overview:
      'Electrochemistry connects chemical reactions with electricity. It covers galvanic cells, standard electrode potentials, the electrochemical series, electrolysis and Faraday\'s laws — all high-yield MDCAT topics.',
    highYield: [
      'Standard hydrogen electrode and standard reduction potentials',
      'Calculating EMF of a cell: E°cell = E°cathode − E°anode',
      'The electrochemical series and its applications',
      'Faraday\'s laws of electrolysis',
      'Relationship between Gibbs free energy and EMF: ΔG = −nFE',
    ],
    blocks: [
      {
        type: 'p',
        text: 'A galvanic (voltaic) cell converts chemical energy into electrical energy through a spontaneous redox reaction. Two half-cells are connected by a salt bridge; electrons flow through the external circuit from anode to cathode.',
      },
      {
        type: 'callout',
        variant: 'definition',
        title: 'Standard electrode potential (E°)',
        text: 'The potential of an electrode measured relative to the standard hydrogen electrode (SHE, E° = 0 V) under standard conditions (1 M, 298 K, 1 atm).',
      },
      { type: 'h3', text: 'Calculating cell EMF' },
      {
        type: 'equation',
        latex: 'E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}',
      },
      {
        type: 'p',
        text: 'A positive E°cell means the reaction is spontaneous. For the Daniell cell: Zn | Zn²⁺ (−0.76 V) and Cu²⁺ | Cu (+0.34 V).',
      },
      {
        type: 'equation',
        latex: 'E^\\circ_{\\text{cell}} = 0.34 - (-0.76) = +1.10\\ \\text{V}',
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Exam tip',
        text: 'In MDCAT, always use reduction potentials for both electrodes and apply E°cell = E°cathode − E°anode. Mixing oxidation and reduction potentials is the most common error.',
      },
      { type: 'h3', text: 'Faraday\'s first law' },
      {
        type: 'p',
        text: 'The mass of a substance deposited or liberated at an electrode is directly proportional to the quantity of electricity passed through the electrolyte.',
      },
      {
        type: 'equation',
        latex: 'm = Z \\cdot I \\cdot t = \\frac{M}{nF} \\cdot I \\cdot t',
      },
      {
        type: 'p',
        text: 'where m is mass, M is molar mass, n is the number of electrons, F = 96500 C mol⁻¹, I is current and t is time in seconds.',
      },
      {
        type: 'mcqs',
        items: [
          {
            q: '1. In a galvanic cell, oxidation occurs at the:',
            options: ['Cathode', 'Anode', 'Salt bridge', 'Both electrodes'],
            answer: 1,
            explanation: 'A. Oxidation does not occur at the cathode.\\nB. Oxidation occurs at the anode; reduction occurs at the cathode.\\nC. The salt bridge maintains electrical neutrality but is not an electrode.\\nD. Oxidation and reduction occur at different electrodes.',
          },
          {
            q: '2. The standard reduction potential of Zn²⁺/Zn is −0.76 V and Cu²⁺/Cu is +0.34 V. The E°cell of the Daniell cell is:',
            options: ['+0.42 V', '+1.10 V', '−1.10 V', '−0.42 V'],
            answer: 1,
            explanation: 'A. This does not follow E°cell = E°cathode − E°anode.\\nB. E°cell = 0.34 − (−0.76) = +1.10 V.\\nC. The sign is incorrect for the spontaneous Daniell cell.\\nD. This value is not obtained from the two reduction potentials.',
          },
          {
            q: '3. The value of Faraday\'s constant is approximately:',
            options: ['6.022 × 10²³ C mol⁻¹', '96500 C mol⁻¹', '8.314 J K⁻¹ mol⁻¹', '1.6 × 10⁻¹⁹ C'],
            answer: 1,
            explanation: 'A. 6.022 × 10²³ mol⁻¹ is Avogadro\'s constant.\\nB. One Faraday is approximately 96500 C mol⁻¹ of electrons.\\nC. 8.314 J K⁻¹ mol⁻¹ is the gas constant.\\nD. 1.6 × 10⁻¹⁹ C is the magnitude of the charge on one electron.',
          },
        ],
      },
    ],
  },
};