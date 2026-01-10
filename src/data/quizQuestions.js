export const quizQuestions = [
  {
    id: 1,
    category: "Number Systems",
    question: "If a language uses base-5 (quinary), how many unique number words would you expect for 1-5?",
    options: ["2", "5", "10", "20"],
    correct: 1,
    explanation: "In a base-5 system, you need unique words for 1, 2, 3, 4, and 5. Numbers above 5 are typically formed by combining these. For example, 7 might be '5+2'."
  },
  {
    id: 2,
    category: "Number Systems",
    question: "In the pattern: 11='ten-one', 12='ten-two', 15='ten-five', 20='two-ten', what is 25?",
    options: ["two-ten-five", "twenty-five", "five-five", "ten-ten-five"],
    correct: 0,
    explanation: "Following the pattern: 20 = 'two-ten' (2×10), so 25 = 'two-ten-five' (2×10 + 5). This is a decimal system with multiplicative tens and additive units."
  },
  {
    id: 3,
    category: "Morphology",
    question: "Given: 'bookish', 'foolish', 'childish' - what does the suffix '-ish' likely mean?",
    options: ["Full of", "Without", "Having qualities of", "The opposite of"],
    correct: 2,
    explanation: "The suffix '-ish' means 'having qualities of' or 'resembling'. Bookish = having qualities of books (studious), foolish = resembling a fool, childish = like a child."
  },
  {
    id: 4,
    category: "Morphology",
    question: "If 'gato' means 'cat' and 'gatos' means 'cats' in Spanish, what is '-s'?",
    options: ["A prefix marking past tense", "A suffix marking plural", "A root meaning 'many'", "An infix marking feminine"],
    correct: 1,
    explanation: "The '-s' is a suffix (attached to the end) that marks plural number. This is similar to English pluralization."
  },
  {
    id: 5,
    category: "Phonology",
    question: "What type of sound change is 'impossible' from 'in-' + 'possible' (n→m)?",
    options: ["Deletion", "Insertion", "Assimilation", "Metathesis"],
    correct: 2,
    explanation: "This is assimilation - the 'n' becomes 'm' to be more similar to the following 'p'. Both 'm' and 'p' are bilabial (made with both lips), so 'n' assimilates to match."
  },
  {
    id: 6,
    category: "Phonology",
    question: "If Language A has 'pata' where Language B has 'bada', what sound change occurred?",
    options: ["Vowel harmony", "Voicing of consonants", "Consonant deletion", "Vowel raising"],
    correct: 1,
    explanation: "The voiceless stops 'p' and 't' became voiced stops 'b' and 'd'. This is called voicing - adding vibration of the vocal cords to consonants."
  },
  {
    id: 7,
    category: "Syntax",
    question: "In Japanese, 'Neko-ga sakana-o taberu' means 'The cat eats fish'. What is the word order?",
    options: ["SVO", "SOV", "VSO", "OVS"],
    correct: 1,
    explanation: "Japanese is SOV: Neko (cat/Subject) + sakana (fish/Object) + taberu (eats/Verb). The verb comes at the end of the sentence."
  },
  {
    id: 8,
    category: "Syntax",
    question: "If a language marks objects with a special suffix (like Turkish '-i'), what is this called?",
    options: ["Nominative case", "Accusative case", "Genitive case", "Dative case"],
    correct: 1,
    explanation: "Accusative case marks the direct object of a verb - the thing receiving the action. Nominative marks subjects, genitive marks possession, dative marks indirect objects."
  },
  {
    id: 9,
    category: "Writing Systems",
    question: "A writing system has 47 symbols. What type of system is it most likely?",
    options: ["Alphabet", "Syllabary", "Logographic", "Abjad"],
    correct: 1,
    explanation: "47 symbols suggests a syllabary (each symbol = one syllable). Alphabets typically have 20-30 symbols, syllabaries have 40-100, and logographic systems have thousands."
  },
  {
    id: 10,
    category: "Writing Systems",
    question: "Arabic and Hebrew writing systems primarily represent what?",
    options: ["Only vowels", "Only consonants", "Syllables", "Whole words"],
    correct: 1,
    explanation: "Arabic and Hebrew are 'abjads' - writing systems that primarily write consonants. Vowels are either omitted or marked with optional diacritics."
  },
  {
    id: 11,
    category: "Number Systems",
    question: "French 'quatre-vingts' (80) literally means 'four-twenties'. What system does this reflect?",
    options: ["Base-4", "Base-10", "Base-20", "Base-40"],
    correct: 2,
    explanation: "This reflects a vigesimal (base-20) system. 80 = 4 × 20. French also has 'soixante-dix' (60+10=70) and 'quatre-vingt-dix' (4×20+10=90), showing traces of base-20."
  },
  {
    id: 12,
    category: "Morphology",
    question: "In 'un-believe-able', which morpheme is the root?",
    options: ["un-", "believe", "-able", "un-believe"],
    correct: 1,
    explanation: "'Believe' is the root - the core meaning. 'Un-' is a prefix (meaning 'not') and '-able' is a suffix (meaning 'capable of being'). The root carries the main semantic content."
  },
  {
    id: 13,
    category: "Phonology",
    question: "The change from Latin 'octo' to Italian 'otto' (eight) shows what process?",
    options: ["Vowel insertion", "Consonant assimilation", "Metathesis", "Palatalization"],
    correct: 1,
    explanation: "The 'ct' cluster became 'tt' through assimilation - the 'c' became identical to the following 't'. This is specifically 'total assimilation' where sounds become identical."
  },
  {
    id: 14,
    category: "Syntax",
    question: "Which sentence structure is LEAST common across world languages?",
    options: ["SOV (Subject-Object-Verb)", "SVO (Subject-Verb-Object)", "VSO (Verb-Subject-Object)", "OSV (Object-Subject-Verb)"],
    correct: 3,
    explanation: "OSV is the rarest word order, found in very few languages. SOV (~45% of languages) and SVO (~42%) are most common, followed by VSO (~9%). OVS and OSV are extremely rare."
  },
  {
    id: 15,
    category: "General",
    question: "What is the BEST first step when solving a linguistics olympiad problem?",
    options: ["Guess the answer quickly", "Organize the data in a table", "Skip to the hardest question", "Assume it's like English"],
    correct: 1,
    explanation: "Organizing data in a table helps you see patterns clearly. Never assume a language works like English! Systematic analysis beats guessing, and you should solve easier parts first."
  }
];
