export const problems = [
  {
    id: 1,
    title: "Tongan Numbers",
    emoji: "🇹🇴",
    category: "Number Systems",
    difficulty: "Easy",
    description: "Decode the Polynesian counting system of Tonga.",
    problem: `
## Problem

Tongan is an Austronesian language spoken by about 100,000 people in the Kingdom of Tonga.

Study these Tongan numbers:

| Number | Tongan |
|--------|--------|
| 1 | taha |
| 2 | ua |
| 3 | tolu |
| 4 | fā |
| 5 | nima |
| 6 | ono |
| 7 | fitu |
| 8 | valu |
| 9 | hiva |
| 10 | hongofulu |
| 11 | hongofulu mā taha |
| 15 | hongofulu mā nima |
| 20 | uofulu |
| 23 | uofulu mā tolu |
| 30 | tolungofulu |
| 40 | fāngofulu |
| 50 | nimangofulu |
| 100 | teau |

### Questions:

1. What does **mā** mean?
2. What does **-ngofulu** mean?
3. How would you say **17** in Tongan?
4. How would you say **36** in Tongan?
5. How would you say **84** in Tongan?
6. What is **hivangofulu mā valu** in numerals?
    `,
    hints: [
      "Compare 10 (hongofulu) with 20 (uofulu) - what's the pattern?",
      "Look at how 11 is built from 10 + 1",
      "Notice the 'h' at the beginning of hongofulu disappears in higher multiples"
    ],
    solution: `
## Solution

### Analysis:

**Base numbers (1-9):** taha, ua, tolu, fā, nima, ono, fitu, valu, hiva

**Building tens:**
- 10 = hongofulu (base form)
- 20 = ua + (h)ongofulu = uofulu (2 × 10)
- 30 = tolu + ngofulu = tolungofulu (3 × 10)
- 40 = fā + ngofulu = fāngofulu (4 × 10)
- 50 = nima + ngofulu = nimangofulu (5 × 10)

**Pattern:** [digit] + ngofulu = [digit] × 10

**Building compound numbers:**
- 11 = hongofulu **mā** taha (10 and 1)
- 15 = hongofulu **mā** nima (10 and 5)
- 23 = uofulu **mā** tolu (20 and 3)

**mā** = "and" (connects tens and units)

### Answers:

1. **mā** = "and" (additive conjunction between tens and units)

2. **-ngofulu** = "ten/tens" (the morpheme for 10, attached to multipliers)

3. **17** = hongofulu mā fitu (10 + 7)

4. **36** = tolungofulu mā ono (30 + 6)

5. **84** = valungofulu mā fā (80 + 4)

6. **hivangofulu mā valu** = 90 + 8 = **98**

### Key Insight:
Tongan uses a straightforward base-10 system with:
- Multiplication for tens (digit + ngofulu)
- Addition with "mā" for units
- The initial "h" in hongofulu is dropped when a multiplier is prefixed
    `
  },
  {
    id: 2,
    title: "Indonesian Morphology",
    emoji: "🇮🇩",
    category: "Morphology",
    difficulty: "Medium",
    description: "Analyze the affix system of Indonesian/Malay.",
    problem: `
## Problem

Indonesian (Bahasa Indonesia) is spoken by over 270 million people and is closely related to Malay spoken in Singapore and Malaysia.

Study these Indonesian words:

| Indonesian | English |
|------------|---------|
| tulis | write |
| menulis | to write (active) |
| ditulis | to be written |
| penulis | writer |
| tulisan | writing (noun) |
| baca | read |
| membaca | to read (active) |
| dibaca | to be read |
| pembaca | reader |
| bacaan | reading material |
| ajar | teach |
| mengajar | to teach (active) |
| diajar | to be taught |
| pengajar | teacher |
| ajaran | teaching (noun) |
| dengar | hear |
| mendengar | to hear (active) |
| didengar | to be heard |
| pendengar | listener |

### Questions:

1. What does the prefix **meN-** indicate? (Note: N changes based on following sound)
2. What does the prefix **di-** indicate?
3. What does the prefix **peN-** indicate?
4. What does the suffix **-an** indicate?
5. How does meN- change before different consonants? (Look at menulis, membaca, mengajar, mendengar)
6. How would you say "singer" if "nyanyi" means "sing"?
    `,
    hints: [
      "Compare 'tulis' with 'menulis' and 'ditulis' - what's the difference in meaning?",
      "Look at meN-: me-N-ulis, mem-baca, meng-ajar, men-dengar - the N changes!",
      "The prefix peN- follows the same pattern as meN- for the N sound"
    ],
    solution: `
## Solution

### Analysis:

**Root verbs:** tulis (write), baca (read), ajar (teach), dengar (hear)

**Prefix patterns:**

| Root starts with | meN- becomes | peN- becomes |
|------------------|--------------|--------------|
| t | men- (t drops) | pen- |
| b | mem- | pem- |
| vowel/g/h | meng- | peng- |
| d | men- | pen- |

**The "N" in meN-/peN- assimilates to the following sound!**

**Affix meanings:**
- **meN-**: Active voice marker ("to do X")
- **di-**: Passive voice marker ("to be X-ed")
- **peN-**: Agent noun ("one who does X")
- **-an**: Result/abstract noun ("the X / X-ing")

### Answers:

1. **meN-** = active voice marker (indicates the subject performs the action)

2. **di-** = passive voice marker (indicates the subject receives the action)

3. **peN-** = agentive nominalizer (creates "doer" nouns)

4. **-an** = nominalizer (creates nouns from verbs, indicating result or abstract concept)

5. **meN- changes:**
   - Before **t**: men- (t drops) → menulis
   - Before **b**: mem- → membaca
   - Before vowels/g/h: meng- → mengajar
   - Before **d**: men- → mendengar

6. **"singer"** = **penyanyi**
   - nyanyi starts with ny- (palatal nasal)
   - peN- + nyanyi = penyanyi

### Key Insight:
Indonesian has a productive affix system where:
- meN-/di- mark voice (active/passive)
- peN- creates agent nouns
- -an creates result/abstract nouns
- The nasal "N" assimilates to match the following consonant
    `
  },
  {
    id: 3,
    title: "Tagalog Focus System",
    emoji: "🇵🇭",
    category: "Syntax",
    difficulty: "Hard",
    description: "Master the Philippine focus/voice system.",
    problem: `
## Problem

Tagalog is spoken by about 28 million people in the Philippines. It has a unique "focus" or "voice" system.

Study these Tagalog sentences:

| Tagalog | English |
|---------|---------|
| Bumili ang lalaki ng isda sa palengke. | The man bought fish at the market. |
| Binili ng lalaki ang isda sa palengke. | The fish was bought by the man at the market. |
| Binilhan ng lalaki ng isda ang palengke. | The market was bought-at by the man. |
| Kumain ang bata ng mansanas. | The child ate an apple. |
| Kinain ng bata ang mansanas. | The apple was eaten by the child. |
| Sumulat ang guro ng liham. | The teacher wrote a letter. |
| Sinulat ng guro ang liham. | The letter was written by the teacher. |

**Vocabulary:**
- lalaki = man, bata = child, guro = teacher
- isda = fish, mansanas = apple, liham = letter
- palengke = market
- bili = buy, kain = eat, sulat = write

### Questions:

1. What do **ang**, **ng**, and **sa** mark?
2. What does the infix **-um-** indicate?
3. What does the infix **-in-** indicate?
4. Which noun phrase is always marked with **ang**?
5. Translate: "The man wrote a letter." (Actor focus)
6. Translate: "The apple was bought by the child."
    `,
    hints: [
      "Notice that 'ang' always marks one specific noun in each sentence",
      "Compare B-um-ili (actor focus) with B-in-ili (patient focus)",
      "The infix goes after the first consonant: bili → b-um-ili, b-in-ili"
    ],
    solution: `
## Solution

### Analysis:

**Case markers:**
- **ang** = marks the FOCUSED/TOPIC noun phrase
- **ng** (pronounced "nang") = marks non-focused agent OR patient
- **sa** = marks location/direction

**Voice affixes on verbs:**

| Voice | Affix | Focus |
|-------|-------|-------|
| Actor | -um- | Agent is focus |
| Patient | -in- | Patient is focus |
| Locative | -in-...-an | Location is focus |

### Answers:

1. **ang** = topic/focus marker; **ng** = non-focus agent or patient; **sa** = location

2. **-um-** = Actor Voice (agent is the focus)

3. **-in-** = Patient Voice (patient is the focus)

4. The **FOCUSED/TOPIC** noun phrase always gets **ang**

5. **"The man wrote a letter."** (Actor focus)
   = **Sumulat ang lalaki ng liham.**
   - S-um-ulat (actor voice) + ang lalaki (focus: man) + ng liham (patient)

6. **"The apple was bought by the child."**
   = **Binili ng bata ang mansanas.**
   - B-in-ili (patient voice) + ng bata (agent) + ang mansanas (focus: apple)

### Key Insight:
Tagalog doesn't have active/passive like English. Instead, it has multiple "voices" that put different participants in focus. The verb morphology tells you WHICH argument is the topic (marked with ang).
    `
  },
  {
    id: 4,
    title: "Yoruba Subtractive Numbers",
    emoji: "🇳🇬",
    category: "Number Systems",
    difficulty: "Hard",
    description: "Decode the complex subtractive system of Yoruba.",
    problem: `
## Problem

Yoruba is spoken by about 47 million people in Nigeria. It uses both addition AND subtraction in its number system.

Study these Yoruba numbers:

| Number | Yoruba | Analysis |
|--------|--------|----------|
| 1 | ọ̀kan | one |
| 2 | èjì | two |
| 3 | ẹ̀ta | three |
| 4 | ẹ̀rin | four |
| 5 | àrún | five |
| 10 | ẹ̀wá | ten |
| 11 | ọ̀kànlá | one-on-ten |
| 14 | ẹ̀rìnlá | four-on-ten |
| 15 | ẹ̀ẹ́dógún | five-from-twenty |
| 20 | ogún | twenty |
| 25 | ẹ̀ẹ́dọ́gbọ̀n | five-from-thirty |
| 30 | ọgbọ̀n | thirty |
| 40 | ogójì | two-twenties |
| 45 | àrúndínláàádọ́ta | five-from-fifty |
| 50 | àádọ́ta | ten-from-sixty |
| 60 | ọgọ́ta | three-twenties |

### Questions:

1. What is the base of this system?
2. What strategy is used for 11-14?
3. What strategy is used for 15, 25, 45?
4. How is 50 formed mathematically?
5. Express 35 mathematically (Hint: it's 40 - 5).
6. How would 55 be expressed?
    `,
    hints: [
      "Notice ogójì = 40 is described as 'two-twenties' (2×20)",
      "Numbers like 15 are formed by SUBTRACTION: 15 = 20 - 5",
      "50 = àádọ́ta means 'ten from sixty' = 60 - 10"
    ],
    solution: `
## Solution

### Analysis:

**Base-20 (Vigesimal) System:**
- 20 = ogún
- 40 = ogójì (2 × 20)
- 60 = ọgọ́ta (3 × 20)

**Two Strategies:**

**ADDITION (for 1-4 above a base):**
- 11 = ọ̀kànlá = 10 + 1
- 14 = ẹ̀rìnlá = 10 + 4

**SUBTRACTION (for 5-9 above a base):**
- 15 = ẹ̀ẹ́dógún = 20 - 5
- 25 = ẹ̀ẹ́dọ́gbọ̀n = 30 - 5
- 45 = àrúndínláàádọ́ta = 50 - 5
- 50 = àádọ́ta = 60 - 10

### Answers:

1. **Base-20 (vigesimal)** with multiples at 20, 40, 60...

2. **Addition** is used for 11-14 (small amounts above 10)

3. **Subtraction** is used for 15, 25, 45 (subtract from next multiple)

4. **50** = 60 - 10 = (3 × 20) - 10

5. **35** = 40 - 5 = (2 × 20) - 5

6. **55** = 60 - 5 = (3 × 20) - 5

### Key Insight:
Yoruba uses a **subtractive vigesimal** system:
- Numbers 1-4 above a multiple: ADD
- Numbers 5-9 above a multiple: SUBTRACT from next multiple
    `
  },
  {
    id: 5,
    title: "Swahili Verb Agreement",
    emoji: "🇹🇿",
    category: "Morphology",
    difficulty: "Medium",
    description: "Master the subject-tense-object system of Swahili.",
    problem: `
## Problem

Swahili (Kiswahili) is a Bantu language spoken by over 100 million people across East Africa.

Study these Swahili verb forms:

| Swahili | English |
|---------|---------|
| ninasoma | I am reading |
| unasoma | you (sg) are reading |
| anasoma | he/she is reading |
| tunasoma | we are reading |
| nilisoma | I read (past) |
| alisoma | he/she read (past) |
| nitasoma | I will read |
| atakupenda | he/she will love you |
| nilikupenda | I loved you |
| ulinipenda | you loved me |
| watatupenda | they will love us |
| tuliwapenda | we loved them |

### Questions:

1. List all the **subject prefixes**.
2. List all the **tense markers**.
3. List all the **object infixes**.
4. What is the morpheme order in a Swahili verb?
5. Translate: **watakulipa** (lipa = pay)
6. How would you say "They loved us"?
    `,
    hints: [
      "Compare 'ninasoma' vs 'nilisoma' vs 'nitasoma' - what changes?",
      "Look at 'atakupenda' - break it into a-ta-ku-penda",
      "Object markers come before the verb root!"
    ],
    solution: `
## Solution

### Analysis:

**Subject Prefixes:**
| Prefix | Person |
|--------|--------|
| ni- | I |
| u- | you (sg) |
| a- | he/she |
| tu- | we |
| wa- | they |

**Tense Markers:**
| Marker | Tense |
|--------|-------|
| -na- | present |
| -li- | past |
| -ta- | future |

**Object Infixes:**
| Infix | Person |
|-------|--------|
| -ni- | me |
| -ku- | you |
| -tu- | us |
| -wa- | them |

### Answers:

1. **Subject prefixes:** ni- (I), u- (you), a- (he/she), tu- (we), wa- (they)

2. **Tense markers:** -na- (present), -li- (past), -ta- (future)

3. **Object infixes:** -ni- (me), -ku- (you), -tu- (us), -wa- (them)

4. **Morpheme order:** SUBJECT + TENSE + OBJECT + VERB ROOT

5. **watakulipa** = wa-ta-ku-lipa = they-FUT-you-pay = **"They will pay you"**

6. **"They loved us"** = wa-li-tu-penda = **walitupenda**

### Key Insight:
Swahili verbs pack subject, tense, and object all into one word!
    `
  },
  {
    id: 6,
    title: "Japanese Verb Conjugation",
    emoji: "🇯🇵",
    category: "Phonology",
    difficulty: "Medium",
    description: "Discover the patterns behind Japanese verb forms.",
    problem: `
## Problem

Study these Japanese verb conjugations:

| Dictionary | Negative | Te-form | Meaning |
|------------|----------|---------|---------|
| kaku | kakanai | kaite | write |
| oyogu | oyoganai | oyoide | swim |
| hanasu | hanasanai | hanashite | speak |
| matsu | matanai | matte | wait |
| yobu | yobanai | yonde | call |
| nomu | nomanai | nonde | drink |
| toru | toranai | totte | take |
| kau | kawanai | katte | buy |

### Questions:

1. What is the pattern for forming the **negative**?
2. What happens to verbs ending in **-tsu**?
3. What is unusual about **kau** → **kawanai**?
4. What pattern do you notice for **-ku** verbs in te-form?
5. What happens to **-bu, -mu** verbs in te-form?
6. Form the negative and te-form of **kiku** (listen).
    `,
    hints: [
      "For negatives: the final -u changes to -anai",
      "Compare matsu → matanai: the 'ts' simplifies",
      "For kau: there's a hidden 'w' that appears"
    ],
    solution: `
## Solution

### Analysis:

**Negative Formation:** Remove -u, add -anai

| Final | → Negative |
|-------|------------|
| -ku | -kanai |
| -gu | -ganai |
| -su | -sanai |
| -tsu | -tanai (ts→t) |
| -bu | -banai |
| -mu | -manai |
| -u (vowel) | -wanai |

**Te-form Patterns:**

| Final | → Te-form |
|-------|-----------|
| -ku | -ite |
| -gu | -ide |
| -su | -shite |
| -tsu, -ru, -u | -tte |
| -bu, -mu | -nde |

### Answers:

1. **Negative:** Replace -u with -anai

2. **-tsu verbs:** "ts" simplifies to "t" → matsu → matanai

3. **kau → kawanai:** Hidden "w" appears (stem is "kaw-")

4. **-ku in te-form:** becomes -ite (kaku → kaite)

5. **-bu, -mu in te-form:** become -nde (yobu → yonde)

6. **kiku:** Negative = **kikanai**, Te-form = **kiite**
    `
  },
  {
    id: 7,
    title: "Warlpiri Location",
    emoji: "🦘",
    category: "Morphology",
    difficulty: "Medium",
    description: "Figure out location suffixes in this Australian language.",
    problem: `
## Problem

Warlpiri is spoken by about 3,000 people in central Australia. Based on UKLO 2024.

Study these words:

| Warlpiri | English |
|----------|---------|
| ngapa | water |
| ngapangka | at the water |
| jilji | sand |
| jiljirla | at the sand |
| wati | man |
| watirla | at the man |
| maliki | dog |
| malikingka | at the dog |
| kurdu | child |
| kurdungka | at the child |
| pirli | rock |
| pirlirla | at the rock |

### Questions:

1. What are the two locative suffixes?
2. What determines which suffix is used?
3. Add the locative to: **kardiya** (white person)
4. Add the locative to: **warlpa** (wind)
    `,
    hints: [
      "Look at the last vowel of each stem",
      "Compare ngapa→ngapangka vs jilji→jiljirla",
      "The suffixes are -ngka and -rla"
    ],
    solution: `
## Solution

### Analysis:

**Two Locative Suffixes:**
- **-ngka**: after stems with a, u
- **-rla**: after stems with i

| Stem | Final vowel | Locative |
|------|-------------|----------|
| ngapa | a | ngapangka |
| kurdu | u | kurdungka |
| jilji | i | jiljirla |
| wati | i | watirla |
| maliki | i (but longer word) | malikingka |

The pattern is more complex for longer words - but generally:
- a/u → -ngka
- i (in short words) → -rla

### Answers:

1. **Two suffixes:** -ngka and -rla

2. **Determining factor:** Vowel quality (a/u vs i) and word length

3. **kardiya** + LOC = **kardiyangka** (ends in -a)

4. **warlpa** + LOC = **warlpangka** (ends in -a)

### Key Insight:
Warlpiri shows **allomorphy** - same meaning, different forms based on phonology.
    `
  },
  {
    id: 8,
    title: "Samoan Reduplication",
    emoji: "🇼🇸",
    category: "Morphology",
    difficulty: "Medium",
    description: "Discover plural formation through reduplication.",
    problem: `
## Problem

Samoan is a Polynesian language spoken by about 500,000 people.

Study these singular and plural forms:

| Singular | Plural | Meaning |
|----------|--------|---------|
| nofo | nonofo | sit |
| moe | momoe | sleep |
| alofa | alolofa | love |
| savali | sasavali | walk |
| malosi | malolosi | strong |
| manao | mananao | want |

### Questions:

1. What process forms the plural?
2. Is this full or partial reduplication?
3. Which part of the word is copied?
4. Form the plural of **galue** (work)
5. Form the plural of **tautala** (speak)
    `,
    hints: [
      "Compare nofo → nonofo: what's been copied?",
      "The pattern copies part of the first syllable",
      "Look at longer words like savali → sasavali"
    ],
    solution: `
## Solution

### Analysis:

**Reduplication Pattern:**
The first consonant-vowel (CV) is copied:

| Singular | Reduplicated | Plural |
|----------|--------------|--------|
| nofo | no- | nonofo |
| moe | mo- | momoe |
| savali | sa- | sasavali |

For some words, the penultimate syllable is reduplicated:
- alofa → alo-lofa
- malosi → malo-losi

### Answers:

1. **Reduplication** (copying part of the word)

2. **Partial reduplication**

3. **First CV** or **penultimate syllable** depending on word structure

4. **galue** → **galulue** (penultimate 'lu' reduplicated)

5. **tautala** → **tautalatala** or **tatautala**

### Key Insight:
Samoan uses reduplication for plural/intensity, common in Polynesian languages.
    `
  },
  {
    id: 9,
    title: "Turkish Vowel Harmony",
    emoji: "🇹🇷",
    category: "Phonology",
    difficulty: "Medium",
    description: "Master the vowel harmony system of Turkish.",
    problem: `
## Problem

Turkish suffix vowels must match the vowels in the stem.

Study these words:

| Turkish | English |
|---------|---------|
| ev | house |
| evler | houses |
| evde | in the house |
| at | horse |
| atlar | horses |
| atta | on the horse |
| göz | eye |
| gözler | eyes |
| kuş | bird |
| kuşlar | birds |
| kuşta | on the bird |

**Turkish vowels:** Front (e, i, ö, ü) vs Back (a, ı, o, u)

### Questions:

1. What are the two forms of the plural suffix?
2. What determines which form is used?
3. What are the forms of the locative suffix?
4. What is the plural of **kapı** (door)?
5. What is "in the villages" for **köy** (village)?
    `,
    hints: [
      "Compare evler vs atlar - the vowel changes!",
      "Look at the stem vowel: ev has 'e' (front), at has 'a' (back)",
      "Locative also has voicing changes: -de/-da vs -te/-ta"
    ],
    solution: `
## Solution

### Analysis:

**Plural Suffix:**
- **-ler** after front vowels (e, i, ö, ü)
- **-lar** after back vowels (a, ı, o, u)

**Locative Suffix:**
- **-de/-da** after voiced sounds
- **-te/-ta** after voiceless sounds (p, ç, t, k, f, h, s, ş)

### Answers:

1. **Plural:** -ler (front) and -lar (back)

2. **Front/back quality** of the last stem vowel

3. **Locative:** -de, -da, -te, -ta (varies by vowel + voicing)

4. **kapı** → **kapılar** (back vowel ı → -lar)

5. **köy** → **köyler** (front ö) → **köylerde** (in the villages)

### Key Insight:
Turkish vowel harmony ensures phonetic smoothness throughout words.
    `
  },
  {
    id: 10,
    title: "Inuktitut Polysynthesis",
    emoji: "🇨🇦",
    category: "Morphology",
    difficulty: "Hard",
    description: "Analyze the polysynthetic structure of Inuktitut.",
    problem: `
## Problem

Inuktitut is spoken by about 40,000 Inuit across northern Canada. Entire sentences can be one word.

Study these words:

| Inuktitut | English |
|-----------|---------|
| iglu | house |
| igluga | my house |
| igluvut | our house |
| igluit | houses |
| qimmiq | dog |
| qimmiga | my dog |
| takujunga | I see |
| takujara | I see it |
| takujarma | when I see it |
| tusaajunga | I hear |
| nirijunga | I eat |
| nirijara | I eat it |

### Questions:

1. What is the suffix for "my"?
2. What is the suffix for "our"?
3. What marks plural?
4. What does **-junga** mean vs **-jara**?
5. Translate: **qimmivut**
6. How would you say "when I eat it"?
    `,
    hints: [
      "Compare iglu, igluga, igluvut",
      "Compare takujunga (I see) with takujara (I see it)",
      "-jarma adds 'when' to -jara"
    ],
    solution: `
## Solution

### Analysis:

**Noun Suffixes:**
- **-ga**: my
- **-vut**: our
- **-it**: plural

**Verb Suffixes:**
- **-junga**: I (intransitive, no object)
- **-jara**: I + it (transitive)
- **-jarma**: when I + it

### Answers:

1. **"my"** = **-ga**

2. **"our"** = **-vut**

3. **Plural** = **-it**

4. **-junga** = "I" (no object); **-jara** = "I...it" (with object)

5. **qimmivut** = **"our dog"**

6. **"when I eat it"** = **nirijarma**

### Key Insight:
Inuktitut is polysynthetic - one word can express a whole sentence!
    `
  },
  {
    id: 11,
    title: "Yoruba Subtractive Numbers",
    emoji: "🇳🇬",
    category: "Number Systems",
    difficulty: "Hard",
    description: "Decode the famous Yoruba number system that uses subtraction.",
    problem: `
## Problem

Yoruba (spoken in Nigeria) has one of the most complex number systems in the world. Study these numbers carefully:

| Number | Yoruba |
|--------|--------|
| 1 | okan |
| 2 | eji |
| 3 | eta |
| 4 | erin |
| 5 | arun |
| 10 | ewa |
| 11 | okanla |
| 14 | erinla |
| 15 | arundinlogun |
| 16 | erindinlogun |
| 17 | etadinlogun |
| 18 | ejidinlogun |
| 19 | okandinlogun |
| 20 | ogun |
| 25 | arundinlogbon |
| 30 | ogbon |
| 40 | ogoji |
| 45 | arundinlaadota |
| 50 | aadota |
| 60 | ogota |

### Questions:
1. How is 11 (okanla) formed? What about 14 (erinla)?
2. What does "din" mean in numbers like 15-19?
3. How is 15 (arundinlogun) formed? Break it down.
4. What pattern do you notice for 40, 60? How would you say 80?
5. How would you say 35?
6. What makes this number system unusual compared to English?
    `,
    hints: [
      "Compare okan (1) with okanla (11) - what's 'la' doing?",
      "Look at 15-19: the numbers seem to count DOWN from 20",
      "ogoji (40) and ogota (60) - what's 'oji' and 'ota'? Think multiplication.",
      "For 45: arundinlaadota - it's 5 less than 50 (aadota)"
    ],
    solution: `
## Solution

### Analysis:

**Base structure: Vigesimal (base-20) with subtraction**

**Addition pattern (11-14):**
- 11 = okan-la = 1 + 10 (la = added to 10)
- 14 = erin-la = 4 + 10

**Subtraction pattern (15-19):**
- "din" means "minus/less than"
- "logun" = "from 20"
- 15 = arun-din-logun = 5 less than 20 (20-5)
- 19 = okan-din-logun = 1 less than 20 (20-1)

**Multiplication pattern:**
- 20 = ogun
- 40 = og-oji = 20 × 2 (oji related to eji=2)
- 60 = og-ota = 20 × 3 (ota related to eta=3)

### Answers:

1. **11 = okan + la** (1 added to 10)
   **14 = erin + la** (4 added to 10)
   Pattern: X + la = X + 10

2. **"din" = minus/subtract from**
   It signals subtraction from the next higher round number

3. **15 = arun-din-logun**
   - arun = 5
   - din = minus
   - logun = from 20
   - So: 20 - 5 = 15

4. **Pattern: 20 × multiplier**
   - 40 = ogoji (20 × 2)
   - 60 = ogota (20 × 3)
   - 80 = **ogerin** (20 × 4, from erin = 4)

5. **35** = 5 less than 40
   = **arundinlogoji** (arun-din-l-ogoji = 5 from 40)

6. **Unusual features:**
   - Uses SUBTRACTION for many numbers (15-19, 25, 35, 45...)
   - Base-20 (vigesimal) system
   - Numbers 15-19 count DOWN from 20
   - Complex but highly systematic

### Key Insight:
Yoruba is famous for its **subtractive vigesimal** system. While English adds (15 = "fifteen" = 5+10), Yoruba subtracts (15 = "5 from 20"). This reflects different cultural approaches to counting!
    `
  },
  {
    id: 12,
    title: "Tagalog Voice System",
    emoji: "🇵🇭",
    category: "Morphology",
    difficulty: "Hard",
    description: "Master the Austronesian focus/voice system of Tagalog.",
    problem: `
## Problem

Tagalog (Philippines) has a complex voice system where verb affixes indicate which noun is the "focus" of the sentence. The focused noun is marked with "ang".

| Tagalog | English |
|---------|---------|
| Bumili ang lalaki ng isda sa palengke | The man bought fish at the market |
| Binili ng lalaki ang isda sa palengke | The man bought THE FISH at the market |
| Binilhan ng lalaki ng isda ang palengke | The man bought fish at THE MARKET |
| Kumain ang bata ng mangga | The child ate mango |
| Kinain ng bata ang mangga | The child ate THE MANGO |
| Nagluto ang babae ng adobo | The woman cooked adobo |
| Niluto ng babae ang adobo | The woman cooked THE ADOBO |
| Naglinis ang bata ng bahay | The child cleaned the house |
| Nilinis ng bata ang bahay | The child cleaned THE HOUSE |

**Markers:**
- ang = marks the focused noun
- ng = marks non-focused nouns (actor or object)
- sa = location

### Questions:
1. What do the affixes "b-um-ili" and "b-in-ili" have in common? What's different?
2. When is "-um-" used? When is "-in-"?
3. What's the pattern for "nag-" vs "ni-" verbs (nagluto/niluto)?
4. Translate: "The woman bought THE HOUSE" (bahay = house)
5. Translate: "THE WOMAN cooked adobo"
    `,
    hints: [
      "Look at WHICH noun has 'ang' in each sentence",
      "When the ACTOR has 'ang', what infix is in the verb?",
      "When the OBJECT has 'ang', what infix is in the verb?",
      "'-um-' and 'nag-' seem to go with actor focus; '-in-' and 'ni-' with object focus"
    ],
    solution: `
## Solution

### Analysis:

**Voice/Focus System:**
Tagalog verbs change based on which argument is in focus (marked by "ang"):

**Actor Focus (AF):** The doer is in focus
- Uses: **-um-** infix (bumili, kumain)
- Or: **nag-** prefix (nagluto, naglinis)
- Actor gets "ang", object gets "ng"

**Object Focus (OF):** The thing affected is in focus
- Uses: **-in-** infix (binili, kinain)
- Or: **ni-** prefix (niluto, nilinis)
- Object gets "ang", actor gets "ng"

**Location Focus (LF):** The place is in focus
- Uses: **-in-...-an** (binilhan)
- Location gets "ang"

### Verb Pattern Table:

| Root | Actor Focus | Object Focus |
|------|-------------|--------------|
| bili (buy) | b-um-ili | b-in-ili |
| kain (eat) | k-um-ain | k-in-ain |
| luto (cook) | nag-luto | ni-luto |
| linis (clean) | nag-linis | ni-linis |

### Answers:

1. Both have the root "bili" (buy). **-um-** marks actor focus, **-in-** marks object focus. The infix goes after the first consonant.

2. **-um-** = Actor Focus (the doer has "ang")
   **-in-** = Object Focus (the object has "ang")

3. **nag-** verbs → Actor Focus (ni- for Object Focus)
   - nagluto (AF) → niluto (OF)
   - naglinis (AF) → nilinis (OF)

4. "The woman bought THE HOUSE":
   - Object focus (house is focused) → use -in-
   - **Binili ng babae ang bahay**

5. "THE WOMAN cooked adobo":
   - Actor focus (woman is focused) → use nag-
   - **Nagluto ang babae ng adobo**

### Key Insight:
Tagalog's **voice system** lets speakers highlight different parts of the sentence by changing the verb. This is different from English passive - ALL arguments can be focused, not just objects!
    `
  },
  {
    id: 13,
    title: "Vietnamese Classifiers",
    emoji: "🇻🇳",
    category: "Syntax",
    difficulty: "Medium",
    description: "Learn how Vietnamese uses classifiers to count nouns.",
    problem: `
## Problem

In Vietnamese, you cannot directly say "three books." You need a classifier word between the number and noun. Study these phrases:

| Vietnamese | English |
|------------|---------|
| một con chó | one dog |
| hai con mèo | two cats |
| ba con voi | three elephants |
| một cái bàn | one table |
| hai cái ghế | two chairs |
| ba cái xe | three vehicles |
| một quyển sách | one book |
| hai quyển vở | two notebooks |
| một người đàn ông | one man |
| ba người phụ nữ | three women |
| hai người bạn | two friends |
| một quả táo | one apple |
| ba quả cam | three oranges |
| một ngôi nhà | one house |
| hai ngôi sao | two stars |

### Questions:
1. What is the word order pattern: Number + ? + Noun?
2. What classifier is used for animals? Give examples.
3. What classifier is used for people? What about flat objects like books?
4. How would you say "five dogs"? (five = năm)
5. What might "cái" be used for? (Hint: table, chair, vehicle)
6. How would you say "four apples"? (four = bốn)
    `,
    hints: [
      "Look at what word appears between the number and noun",
      "Animals all share one classifier - which one?",
      "Books (sách) and notebooks (vở) share a classifier",
      "'Cái' appears with inanimate objects"
    ],
    solution: `
## Solution

### Analysis:

**Word order: Number + CLASSIFIER + Noun**

**Classifier categories:**

| Classifier | Used for | Examples |
|------------|----------|----------|
| con | animals | chó (dog), mèo (cat), voi (elephant) |
| cái | inanimate objects | bàn (table), ghế (chair), xe (vehicle) |
| quyển | books, volumes | sách (book), vở (notebook) |
| người | people | đàn ông (man), phụ nữ (woman), bạn (friend) |
| quả | round fruits | táo (apple), cam (orange) |
| ngôi | buildings, stars | nhà (house), sao (star) |

### Answers:

1. **Number + CLASSIFIER + Noun**
   Example: hai (2) + con (CL:animal) + mèo (cat)

2. **con** for animals
   - một con chó (one dog)
   - hai con mèo (two cats)
   - ba con voi (three elephants)

3. **người** for people
   - một người đàn ông (one man)
   **quyển** for books/volumes
   - một quyển sách (one book)

4. **Five dogs = năm con chó**
   (năm + con + chó)

5. **cái** is used for inanimate/man-made objects:
   - Tables, chairs, vehicles
   - General "thing" classifier

6. **Four apples = bốn quả táo**
   (bốn + quả + táo)

### Key Insight:
Vietnamese (like Chinese, Japanese, Thai) is a **classifier language**. Every noun belongs to a category and requires its classifier when counted. This reflects how the language categorizes the world (animals vs objects vs people vs round things, etc.)
    `
  },
  {
    id: 14,
    title: "Indonesian Affixes",
    emoji: "🇮🇩",
    category: "Morphology",
    difficulty: "Medium",
    description: "Analyze the rich affix system of Indonesian/Malay.",
    problem: `
## Problem

Indonesian/Malay uses prefixes, suffixes, and circumfixes to create new words. Study these:

| Indonesian | English | Root |
|------------|---------|------|
| tulis | write | tulis |
| menulis | to write (active) | tulis |
| ditulis | to be written (passive) | tulis |
| penulis | writer | tulis |
| tulisan | writing, text | tulis |
| makan | eat | makan |
| memakan | to eat (active) | makan |
| dimakan | to be eaten (passive) | makan |
| pemakan | eater | makan |
| makanan | food | makan |
| ajar | teach | ajar |
| mengajar | to teach (active) | ajar |
| diajar | to be taught (passive) | ajar |
| pengajar | teacher | ajar |
| ajaran | teachings | ajar |
| pelajar | student | ajar |
| baca | read | baca |
| membaca | to read (active) | baca |
| dibaca | to be read (passive) | baca |

### Questions:
1. What prefix makes active verbs? How does it change with different roots?
2. What prefix makes passive verbs?
3. What prefix + suffix creates "doer of action" (like -er in English)?
4. What suffix creates "the thing/result of action"?
5. What is "pelajar" (student) literally? (Hint: "ajar" = teach)
6. Form the word for "reader" from "baca" (read).
    `,
    hints: [
      "The active prefix changes form: me-, mem-, men-, meng-",
      "Compare tulis→menulis with makan→memakan - why me- vs mem-?",
      "Look at 'penulis' and 'pemakan' - what's the pattern?",
      "'pelajar' has something extra compared to 'pengajar'"
    ],
    solution: `
## Solution

### Analysis:

**Prefix Variations (Nasalization Rules):**
The active prefix meN- changes based on the first sound of the root:
- me- + l → menulis (l stays)
- meN- + k → memakan (N→m, k drops or stays)
- meN- + vowel → mengajar (N→ng)
- meN- + b → membaca (N→m)

**Affix Patterns:**

| Affix | Meaning | Example |
|-------|---------|---------|
| meN- | active verb | menulis (to write) |
| di- | passive verb | ditulis (be written) |
| peN- | doer/agent | penulis (writer) |
| -an | result/thing | tulisan (writing) |
| peN-...-an | abstract noun | (not in data) |

### Answers:

1. **meN-** makes active verbs
   - me- before l, r: me-nulis
   - mem- before b, p: mem-baca, mem-akan
   - meng- before vowels: meng-ajar
   (The N nasalizes to match the following consonant)

2. **di-** makes passive verbs
   - di-tulis (be written)
   - di-makan (be eaten)
   - di-ajar (be taught)

3. **peN-** creates "doer"
   - penulis (writer)
   - pemakan (eater)
   - pengajar (teacher)

4. **-an** creates "result/thing"
   - tulisan (writing/text)
   - makanan (food)
   - ajaran (teachings)

5. **pelajar = pe- + ajar**
   - Literally: "one who is taught" = learner/student
   - Different from pengajar (teacher = one who teaches)

6. **Reader = pembaca**
   - peN- + baca = pem-baca

### Key Insight:
Indonesian's affix system is highly productive. The prefix **meN-** undergoes **nasal assimilation** - the N changes to match the following consonant (m before b/p, n before t/d, ng before k/g/vowels).
    `
  },
  {
    id: 15,
    title: "Mandarin Measure Words",
    emoji: "🇨🇳",
    category: "Syntax",
    difficulty: "Medium",
    description: "Understand Chinese classifier (measure word) system.",
    problem: `
## Problem

Mandarin Chinese requires measure words (classifiers) between numbers/demonstratives and nouns. Study these:

| Chinese | Pinyin | English |
|---------|--------|---------|
| 一本书 | yì běn shū | one book |
| 两本杂志 | liǎng běn zázhì | two magazines |
| 三张纸 | sān zhāng zhǐ | three sheets of paper |
| 一张桌子 | yì zhāng zhuōzi | one table |
| 两张票 | liǎng zhāng piào | two tickets |
| 一只猫 | yì zhī māo | one cat |
| 三只鸟 | sān zhī niǎo | three birds |
| 一条鱼 | yì tiáo yú | one fish |
| 两条河 | liǎng tiáo hé | two rivers |
| 一条路 | yì tiáo lù | one road |
| 一个人 | yí gè rén | one person |
| 两个苹果 | liǎng gè píngguǒ | two apples |
| 三个问题 | sān gè wèntí | three questions |
| 一辆车 | yí liàng chē | one car |
| 两辆自行车 | liǎng liàng zìxíngchē | two bicycles |

### Questions:
1. What is the word order pattern?
2. What classifier is used for books/magazines? What shape might they share?
3. What classifier is used for flat things? Give examples.
4. What do fish, rivers, and roads have in common? What classifier do they use?
5. What is the most general/common classifier?
6. How would you say "five cars"? (five = 五 wǔ)
    `,
    hints: [
      "本 (běn) is for bound volumes",
      "张 (zhāng) - think about things that are flat like sheets",
      "条 (tiáo) - think about long, thin things",
      "个 (gè) is the 'default' classifier when unsure"
    ],
    solution: `
## Solution

### Analysis:

**Word order: Number + CLASSIFIER + Noun**
Same as Vietnamese!

**Classifier Categories:**

| Classifier | Shape/Type | Examples |
|------------|------------|----------|
| 本 běn | bound volumes | books, magazines |
| 张 zhāng | flat surfaces | paper, tables, tickets |
| 只 zhī | animals (small) | cats, birds |
| 条 tiáo | long & thin | fish, rivers, roads |
| 个 gè | general/default | people, apples, questions |
| 辆 liàng | wheeled vehicles | cars, bicycles |

### Answers:

1. **Number + Classifier + Noun**
   - 三 (3) + 本 (CL) + 书 (book)

2. **本 (běn)** for books/magazines
   - They are bound volumes/printed materials
   - 一本书, 两本杂志

3. **张 (zhāng)** for flat things
   - Paper (纸), tables (桌子), tickets (票)
   - Think: things that have a flat surface

4. **Fish, rivers, roads all use 条 (tiáo)**
   - They are all LONG and THIN
   - Fish are elongated, rivers flow long distances, roads stretch

5. **个 (gè)** is the most general classifier
   - Used for people, abstract things, and when unsure
   - "Default" option in spoken Chinese

6. **Five cars = 五辆车 (wǔ liàng chē)**
   - 五 (wǔ) + 辆 (liàng) + 车 (chē)

### Key Insight:
Chinese classifiers categorize nouns by **shape and physical properties**:
- Flat → 张
- Long/thin → 条
- Bound/book-like → 本
- Animals → 只
- Vehicles → 辆

This system exists in many East/Southeast Asian languages (Chinese, Japanese, Korean, Vietnamese, Thai).
    `
  },
  {
    id: 16,
    title: "Warlpiri Case System",
    emoji: "🦘",
    category: "Syntax",
    difficulty: "Hard",
    description: "Discover the ergative-absolutive case system of Warlpiri (Australia).",
    problem: `
## Problem

Warlpiri (Aboriginal Australian language) uses a different case system than English. Study these sentences:

| Warlpiri | English |
|----------|---------|
| Kurdu ka parnka-mi | The child is running |
| Kurdu ka nya-nyi maliki | The child sees the dog |
| Maliki ka parnka-mi | The dog is running |
| Kurdu-ngku ka nya-nyi maliki | The child sees the dog |
| Maliki-rli ka nya-nyi kurdu | The dog sees the child |
| Ngarrka ka parnka-mi | The man is running |
| Ngarrka-ngku ka paka-rni maliki | The man is hitting the dog |
| Maliki-rli ka paka-rni kurdu | The dog is hitting the child |
| Karnta ka wangka-mi | The woman is speaking |
| Karnta-ngku ka nya-nyi ngarrka | The woman sees the man |

**Key:** ka = auxiliary (ignore), -mi/-ni = verb endings

### Questions:
1. When does "kurdu" (child) appear without a suffix? When with -ngku?
2. Compare "Kurdu ka parnka-mi" with "Kurdu-ngku ka nya-nyi maliki" - what determines the case?
3. What's the difference between English and Warlpiri in how they mark subjects?
4. What suffix do we expect on "karnta" in "The woman is running"?
5. Translate: "The man sees the woman"
6. Translate: "The woman is running"
    `,
    hints: [
      "Look at verbs with ONE argument (running, speaking) vs TWO arguments (sees, hits)",
      "In 'X sees Y', does X have a suffix? Does Y?",
      "This is called 'ergative-absolutive' - very different from English!",
      "English marks subjects the same; Warlpiri marks them differently based on transitivity"
    ],
    solution: `
## Solution

### Analysis:

**Ergative-Absolutive Case System:**

In English (Nominative-Accusative):
- Subjects are unmarked: "The child runs" / "The child sees the dog"
- Objects are different: "The dog sees THE CHILD"

In Warlpiri (Ergative-Absolutive):
- **Absolutive (unmarked):** S of intransitive verbs AND O of transitive verbs
- **Ergative (-ngku/-rli):** A (agent) of transitive verbs

**Pattern:**

| Verb Type | Subject | Object |
|-----------|---------|--------|
| Intransitive (run) | unmarked (ABS) | — |
| Transitive (see) | -ngku (ERG) | unmarked (ABS) |

### Answers:

1. **kurdu (unmarked):** When child is:
   - Subject of intransitive verb (running)
   - Object of transitive verb (being seen)

   **kurdu-ngku:** When child is the agent DOING the action to something else

2. **The case depends on verb transitivity:**
   - "Kurdu ka parnka-mi" (runs) - intransitive, no suffix
   - "Kurdu-ngku ka nya-nyi maliki" (sees X) - transitive, needs -ngku

3. **English vs Warlpiri:**
   - English: "The child runs" / "The child sees" - SAME form
   - Warlpiri: "Kurdu parnka-mi" / "Kurdu-ngku nya-nyi" - DIFFERENT form
   - Warlpiri groups intransitive S with transitive O (both unmarked)

4. **"The woman is running"** - intransitive, so NO suffix
   - Karnta ka wangka-mi (speaking) has no suffix
   - So: **karnta** (no suffix needed)

5. **"The man sees the woman":**
   - Man = agent → ngarrka-ngku
   - Woman = object → karnta (unmarked)
   - **Ngarrka-ngku ka nya-nyi karnta**

6. **"The woman is running":**
   - Woman = subject of intransitive → unmarked
   - **Karnta ka parnka-mi**

### Key Insight:
Warlpiri has an **ergative-absolutive** system, found in ~25% of world languages (Basque, Georgian, many Australian/Mayan languages). It groups "the one doing" in transitive sentences separately from all other arguments.
    `
  },
  {
    id: 17,
    title: "Nahuatl Incorporation",
    emoji: "🏛️",
    category: "Morphology",
    difficulty: "Hard",
    description: "Analyze noun incorporation in Classical Nahuatl.",
    problem: `
## Problem

Classical Nahuatl (Aztec language) can incorporate nouns into verbs. Study these:

| Nahuatl | Literal Gloss | English |
|---------|--------------|---------|
| ni-choca | I-cry | I cry |
| ti-choca | you-cry | You cry |
| ni-c-cua in nacatl | I-it-eat the meat | I eat the meat |
| ti-c-cua in nacatl | you-it-eat the meat | You eat the meat |
| ni-naca-cua | I-meat-eat | I eat meat / I meat-eat |
| ti-naca-cua | you-meat-eat | You eat meat |
| ni-c-chihua in calli | I-it-make the house | I make the house |
| ni-cal-chihua | I-house-make | I build (house-make) |
| ni-c-paca in tilmatli | I-it-wash the cloak | I wash the cloak |
| ni-tilma-paca | I-cloak-wash | I wash cloaks |
| ni-c-cuilia in nacatl in pilli | I-it-take the meat the noble | I take the meat from the noble |
| ni-naca-cuilia in pilli | I-meat-take the noble | I take meat from the noble |

### Questions:
1. What do "ni-" and "ti-" mean?
2. What does "-c-" mean? When is it used?
3. What happens when a noun is incorporated into the verb?
4. What's the difference in meaning between "ni-c-cua in nacatl" and "ni-naca-cua"?
5. Form: "You house-make" (you build)
6. What would "ni-cal-paca" mean?
    `,
    hints: [
      "ni- and ti- are subject prefixes",
      "When there's a separate object noun (after 'in'), -c- appears",
      "When the noun is INSIDE the verb, -c- disappears",
      "Incorporated nouns are 'generic' - not specific objects"
    ],
    solution: `
## Solution

### Analysis:

**Subject Prefixes:**
- ni- = I (1st person singular)
- ti- = you (2nd person singular)

**Object Marking:**
- -c- = 3rd person object marker ("it/him/her")
- Used when there's a separate object noun phrase
- NOT used when noun is incorporated

**Noun Incorporation:**
The object noun can be incorporated into the verb, between subject prefix and verb root:

| Structure | Example |
|-----------|---------|
| Subj-c-Verb in Object | ni-c-cua in nacatl |
| Subj-NounRoot-Verb | ni-naca-cua |

**Stem changes in incorporation:**
- nacatl → naca- (meat)
- calli → cal- (house)
- tilmatli → tilma- (cloak)

### Answers:

1. **ni-** = I (1st person subject)
   **ti-** = you (2nd person subject)

2. **-c-** = 3rd person object marker ("it")
   - Used when object is a SEPARATE noun phrase (after "in")
   - ni-**c**-cua in nacatl (I eat THE meat)

3. **When noun incorporates:**
   - Noun stem goes between subject and verb
   - Object marker -c- disappears
   - "in + Noun" phrase is not needed
   - ni-naca-cua (I meat-eat)

4. **Difference:**
   - "ni-c-cua in nacatl" = I eat THE meat (specific)
   - "ni-naca-cua" = I eat meat (generic activity, meat-eating)

   Incorporation makes it a general activity, not about a specific object.

5. **"You house-make" = ti-cal-chihua**
   - ti- (you) + cal- (house) + chihua (make)

6. **"ni-cal-paca" = I wash houses / I house-wash**
   - ni- (I) + cal- (house) + paca (wash)
   - Meaning: I do house-washing (generic)

### Key Insight:
**Noun incorporation** is a process where an object noun becomes part of the verb. The incorporated form expresses a general activity ("meat-eating") rather than action on a specific object ("eating the meat"). Many languages have this (Mohawk, Chukchi, Nahuatl)!
    `
  },
  {
    id: 18,
    title: "Tongan Numbers",
    emoji: "🇹🇴",
    category: "Number Systems",
    difficulty: "Easy",
    description: "Decode the Polynesian number system of Tongan.",
    problem: `
## Problem

Tongan is a Polynesian language spoken in Tonga. Study these numbers:

| Number | Tongan |
|--------|--------|
| 1 | taha |
| 2 | ua |
| 3 | tolu |
| 4 | fā |
| 5 | nima |
| 6 | ono |
| 7 | fitu |
| 8 | valu |
| 9 | hiva |
| 10 | hongofulu |
| 11 | taha taha |
| 12 | taha ua |
| 15 | taha nima |
| 20 | uofulu |
| 30 | tolungofulu |
| 40 | fāngofulu |
| 50 | nimangofulu |
| 100 | teau |
| 200 | uangeau |

### Questions:
1. How is 10 (hongofulu) formed?
2. How are 11-19 formed? What's unusual about this?
3. How are 20, 30, 40, 50 formed? What's the pattern?
4. How would you say 13?
5. How would you say 60?
6. How would you say 25?
    `,
    hints: [
      "'hongofulu' - 'hongo' might relate to 'one' somehow, and 'fulu' is clearly 10",
      "For 11-19, the first number word looks like 'taha' (1) - but it means 10 here!",
      "20 = uofulu - 'ua' (2) + something about 10",
      "The pattern is: Multiplier + (ngo)fulu for tens"
    ],
    solution: `
## Solution

### Analysis:

**Base-10 System:**

**Core numbers 1-9:** taha, ua, tolu, fā, nima, ono, fitu, valu, hiva

**Ten:** hongofulu (related to "one" group of ten)

**Teens (11-19):** "taha + digit"
- This is unusual! "taha" here means "ten" not "one"
- 11 = taha taha (ten one)
- 12 = taha ua (ten two)
- 15 = taha nima (ten five)

**Tens (20-90):** "digit + ngofulu"
- 20 = ua + (ngo)fulu = uofulu
- 30 = tolu + ngofulu = tolungofulu
- 40 = fā + ngofulu = fāngofulu

**Hundreds:**
- 100 = teau
- 200 = ua + ngeau = uangeau

### Answers:

1. **hongofulu** = h + ongo (from taha=one?) + fulu (ten)
   - "One ten" or "first ten"

2. **11-19: "taha + unit"**
   - taha = 10 in this context
   - 11 = taha taha, 12 = taha ua
   - **Unusual:** the word for "1" (taha) also means "10" in teens!

3. **20, 30, 40, 50: Multiplier + ngofulu**
   - 20 = ua + fulu → uofulu (2×10)
   - 30 = tolu + ngofulu → tolungofulu (3×10)
   - Pattern: [number]ngofulu or [number]fulu

4. **13 = taha tolu**
   (ten + three)

5. **60 = onongofulu**
   (ono + ngofulu = 6 × 10)

6. **25 = uofulu mā nima** or compound form
   - 20 + 5 (uofulu + nima)
   - Likely: **uofulu mā nima** (twenty and five)

### Key Insight:
Tongan uses a straightforward **decimal (base-10)** system with a twist: the word "taha" (one) also serves as "ten" when counting teens. This is similar to English "-teen" coming from "ten"!
    `
  }
];

