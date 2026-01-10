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
  },
  {
    id: 16,
    category: "Number Systems",
    question: "A language has: 6='hand-one', 7='hand-two', 10='two-hands'. What is the base?",
    options: ["Base-5", "Base-6", "Base-10", "Base-12"],
    correct: 0,
    explanation: "This is base-5 (quinary). 'Hand' = 5, so 6 = 5+1, 7 = 5+2, 10 = 2×5. Many languages use hand-based counting."
  },
  {
    id: 17,
    category: "Morphology",
    question: "In Turkish, 'ev'=house, 'evler'=houses, 'evlerim'=my houses. What is '-im'?",
    options: ["Plural marker", "Possessive marker (my)", "Accusative case", "Past tense"],
    correct: 1,
    explanation: "'-im' is the 1st person possessive suffix meaning 'my'. Turkish is agglutinative: ev-ler-im = house-PLURAL-my."
  },
  {
    id: 18,
    category: "Phonology",
    question: "Latin 'octo' became Spanish 'ocho'. The change ct→ch is called:",
    options: ["Deletion", "Metathesis", "Palatalization", "Vowel harmony"],
    correct: 2,
    explanation: "Palatalization is when sounds become palatal (made with tongue at hard palate). CT→CH involves the sounds moving to the palatal region."
  },
  {
    id: 19,
    category: "Syntax",
    question: "Welsh 'Gwelodd y dyn y ci' = 'The man saw the dog'. What word order is this?",
    options: ["SVO", "SOV", "VSO", "OVS"],
    correct: 2,
    explanation: "Welsh is VSO: Gwelodd (saw) + y dyn (the man) + y ci (the dog). The verb comes first, which is common in Celtic languages."
  },
  {
    id: 20,
    category: "Writing Systems",
    question: "Cherokee has 85 symbols. This suggests it's probably a:",
    options: ["Alphabet", "Syllabary", "Logographic system", "Abjad"],
    correct: 1,
    explanation: "85 symbols is typical for a syllabary (each symbol = syllable). Cherokee was invented by Sequoyah in the 1820s with one symbol per syllable."
  },
  {
    id: 21,
    category: "Morphology",
    question: "Arabic: 'kitab'=book, 'kutub'=books, 'katib'=writer, 'maktaba'=library. What pattern is this?",
    options: ["Prefixation", "Suffixation", "Root and pattern (templatic)", "Compounding"],
    correct: 2,
    explanation: "Arabic uses root-and-pattern morphology. The root K-T-B (writing) combines with vowel patterns: kiCaC=thing, CuCuC=plural, CaCiC=doer, maCCaCa=place."
  },
  {
    id: 22,
    category: "Phonology",
    question: "If a language voices consonants between vowels (p→b, t→d, k→g), where does this change happen?",
    options: ["Word-initially", "Word-finally", "Intervocalically", "Before nasals"],
    correct: 2,
    explanation: "'Intervocalic' means between vowels. Voicing between vowels is common because vowels are voiced, and consonants assimilate to their environment."
  },
  {
    id: 23,
    category: "Syntax",
    question: "Japanese uses particles like 'wa' (topic) and 'ga' (subject). What are these called?",
    options: ["Prepositions", "Postpositions/Case particles", "Conjunctions", "Determiners"],
    correct: 1,
    explanation: "Japanese uses postpositions (come after nouns) or case particles. 'Wa' marks the topic, 'ga' marks the subject, 'o/wo' marks the object."
  },
  {
    id: 24,
    category: "General",
    question: "Which strategy is MOST useful when stuck on a linguistics problem?",
    options: ["Skip it entirely", "Look for minimal pairs (small differences)", "Assume it works like English", "Guess based on the first example"],
    correct: 1,
    explanation: "Minimal pairs - words/phrases differing in just one element - reveal what each element means. Comparing similar forms is the key to linguistic analysis."
  },
  {
    id: 25,
    category: "Number Systems",
    question: "Yoruba uses subtraction: 15 = 20-5 (ẹẹ́dógún). This is called:",
    options: ["Additive system", "Subtractive system", "Multiplicative system", "Base-15 system"],
    correct: 1,
    explanation: "Subtractive systems express numbers by subtraction from a larger unit. Latin also does this: 19 = undeviginti (one-from-twenty)."
  },
  {
    id: 26,
    category: "Syntax",
    question: "In Basque, the subject of 'I see him' is marked differently from 'I run'. This is called:",
    options: ["Nominative-Accusative", "Ergative-Absolutive", "Active-Stative", "Tripartite"],
    correct: 1,
    explanation: "Ergative-absolutive systems mark transitive subjects (ergative) differently from intransitive subjects and objects (both absolutive). The 'seer' gets ergative case."
  },
  {
    id: 27,
    category: "Syntax",
    question: "In an ergative language, which arguments share the same case marking?",
    options: ["Subject of 'run' + Subject of 'see'", "Subject of 'see' + Object of 'see'", "Subject of 'run' + Object of 'see'", "All arguments are marked differently"],
    correct: 2,
    explanation: "In ergative-absolutive systems, intransitive subject (S) and transitive object (O) share ABSOLUTIVE case, while transitive subject (A) gets ERGATIVE case."
  },
  {
    id: 28,
    category: "Morphology",
    question: "Tagalog marks which argument is the topic using verb affixes. This system is called:",
    options: ["Case system", "Voice/Focus system", "Agreement system", "Tense system"],
    correct: 1,
    explanation: "Philippine-type voice/focus systems mark on the verb which argument (actor, patient, location, etc.) is the topic/focus of the sentence."
  },
  {
    id: 29,
    category: "Morphology",
    question: "In Chinese, you say 'three FLAT book' not 'three book'. What is the word FLAT called?",
    options: ["Article", "Demonstrative", "Classifier/Measure word", "Plural marker"],
    correct: 2,
    explanation: "Classifiers (or measure words) categorize nouns by properties like shape, animacy, or size. Chinese, Vietnamese, Thai, and Japanese all use classifiers extensively."
  },
  {
    id: 30,
    category: "Morphology",
    question: "Vietnamese uses different classifiers: 'con' for animals, 'cái' for objects, 'cuốn' for books. What determines the classifier?",
    options: ["The number being used", "The semantic category of the noun", "The grammatical gender", "The tense of the verb"],
    correct: 1,
    explanation: "Classifiers are chosen based on the semantic properties of the noun: shape, animacy, size, function, etc. 'Con' = animate, 'cái' = inanimate object, 'cuốn' = bound volumes."
  },
  {
    id: 31,
    category: "Morphology",
    question: "Nahuatl 'ni-naka-kwa' means 'I eat meat' (I-meat-eat). This structure is called:",
    options: ["Agglutination", "Noun incorporation", "Compounding", "Cliticization"],
    correct: 1,
    explanation: "Noun incorporation merges a noun into the verb to form a single word. The object 'meat' becomes part of the verb 'eat' creating 'meat-eating' as one word."
  },
  {
    id: 32,
    category: "Morphology",
    question: "Languages like Nahuatl and Mohawk can express 'I-saw-the-big-red-house' as one word. These are called:",
    options: ["Analytic languages", "Polysynthetic languages", "Isolating languages", "Fusional languages"],
    correct: 1,
    explanation: "Polysynthetic languages combine many morphemes into single words, often incorporating nouns, adverbs, and other elements into the verb."
  },
  {
    id: 33,
    category: "Phonology",
    question: "In Turkish, 'ev' + plural + 'in' = 'evlerin' but 'köy' + plural + 'in' = 'köylerin'. What pattern is this?",
    options: ["Consonant harmony", "Vowel harmony", "Umlaut", "Ablaut"],
    correct: 1,
    explanation: "Turkish has vowel harmony: vowels in suffixes change to match the vowels in the root. Front vowels (e, i, ö, ü) and back vowels (a, ı, o, u) stay together."
  },
  {
    id: 34,
    category: "Phonology",
    question: "In a tone language, 'ma' with high tone means 'mother' but 'ma' with falling tone means 'scold'. Tone is:",
    options: ["Optional emphasis", "Distinctive/phonemic", "Grammatical only", "Dialectal variation"],
    correct: 1,
    explanation: "In tone languages, pitch differences are phonemic (distinctive) - they change word meaning. Mandarin Chinese has 4 tones; Vietnamese has 6."
  },
  {
    id: 35,
    category: "Writing Systems",
    question: "Korean Hangul groups letters into syllable blocks. What type of system is this?",
    options: ["Pure alphabet", "Syllabary", "Featural alphabet/Alphabetic syllabary", "Logographic"],
    correct: 2,
    explanation: "Hangul is a featural alphabet with syllabic arrangement. Individual letters represent sounds (like an alphabet) but are grouped into syllable blocks."
  },
  {
    id: 36,
    category: "Syntax",
    question: "In the sentence 'It was JOHN who ate the cake', 'John' is emphasized through:",
    options: ["Topicalization", "Cleft construction", "Passive voice", "Pronoun drop"],
    correct: 1,
    explanation: "Cleft constructions use 'it is/was X who/that...' to focus or emphasize a particular element. Many languages have similar focus-marking strategies."
  },
  {
    id: 37,
    category: "General",
    question: "When a linguistics problem shows both the foreign language AND English translations, you should first:",
    options: ["Memorize all the words", "Find words that appear multiple times", "Translate word-by-word immediately", "Focus on the longest sentences"],
    correct: 1,
    explanation: "Finding repeated elements helps you identify consistent meanings. If 'kuma' appears in 'I eat' and 'You eat', then 'kuma' likely means 'eat'."
  },
  {
    id: 38,
    category: "Number Systems",
    question: "If 18 = 'twenty minus two' and 37 = 'two twenties minus three', what is 56?",
    options: ["Three twenties minus four", "Two twenties plus sixteen", "Three twenties minus four", "Sixty minus four"],
    correct: 0,
    explanation: "Following the pattern: 56 = 60 - 4 = 3×20 - 4 = 'three twenties minus four'. This is a vigesimal subtractive system."
  },
  {
    id: 39,
    category: "Morphology",
    question: "Indonesian: 'tulis'=write, 'penulis'=writer, 'menulis'=to write, 'tulisan'=writing. What type of affixation is this?",
    options: ["Only prefixation", "Only suffixation", "Circumfixation", "Prefixes AND suffixes (both)"],
    correct: 3,
    explanation: "Indonesian uses both prefixes (pe-, me-) and suffixes (-an) to derive new words from roots. 'Pe-' = agent, 'me-' = active verb, '-an' = result/noun."
  },
  {
    id: 40,
    category: "General",
    question: "A linguistics problem gives you 10 sentences. Which approach is MOST efficient?",
    options: ["Solve them in order 1-10", "Start with the shortest sentences", "Start with sentences sharing common words", "Randomly pick sentences"],
    correct: 2,
    explanation: "Comparing sentences with common elements reveals what the differing parts mean. Short sentences are also good starting points for establishing basic patterns."
  }
];
