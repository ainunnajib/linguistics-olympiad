export const problems = [
  {
    id: 1,
    title: "The Toki Pona Numbers",
    emoji: "🔢",
    category: "Number Systems",
    difficulty: "Easy",
    description: "Decode a simple number system from Toki Pona, a constructed language.",
    problem: `
## Problem

Toki Pona is a minimalist constructed language. Here are some numbers:

| Number | Toki Pona |
|--------|-----------|
| 1 | wan |
| 2 | tu |
| 3 | tu wan |
| 5 | luka |
| 6 | luka wan |
| 7 | luka tu |
| 10 | luka luka |
| 11 | luka luka wan |

### Questions:
1. How would you say **4** in Toki Pona?
2. How would you say **8** in Toki Pona?
3. How would you say **15** in Toki Pona?
4. What is the base of this number system?
    `,
    hints: [
      "Look at how 3 is formed from smaller numbers",
      "Notice that 'luka' means 5 - what body part has 5 of something?",
      "How is 10 formed? What about 11?"
    ],
    solution: `
## Solution

### Analysis:
- **wan** = 1
- **tu** = 2
- **luka** = 5 (from the word for "hand" - 5 fingers!)

The system is **additive** - numbers are built by adding together:
- 3 = tu wan (2 + 1)
- 6 = luka wan (5 + 1)
- 7 = luka tu (5 + 2)
- 10 = luka luka (5 + 5)

### Answers:

1. **4** = **tu tu** (2 + 2)

2. **8** = **luka tu wan** (5 + 2 + 1) or **luka luka tu tu** would be wrong since we work up from 5

   Actually: **luka wan tu** or more simply **luka tu wan** (5 + 3 = 5 + 2 + 1)

3. **15** = **luka luka luka** (5 + 5 + 5)

4. This is a **base-5 (quinary)** system built on the hand!

### Key Insight:
Toki Pona uses an additive base-5 system, which is common in languages where counting originated from finger-counting.
    `
  },
  {
    id: 2,
    title: "Swahili Word Structure",
    emoji: "🧩",
    category: "Morphology",
    difficulty: "Easy",
    description: "Analyze the morphology of Swahili verbs.",
    problem: `
## Problem

Study these Swahili sentences:

| Swahili | English |
|---------|---------|
| Ninasoma | I am reading |
| Unasoma | You are reading |
| Anasoma | He/She is reading |
| Ninakula | I am eating |
| Unakula | You are eating |
| Anakula | He/She is eating |
| Ninapenda | I am loving |
| Unapenda | You are loving |

### Questions:
1. What does **-soma** mean?
2. What does **-kula** mean?
3. What does **ni-** mean?
4. What does **-na-** mean?
5. How would you say "He/She is loving" in Swahili?
    `,
    hints: [
      "Compare words that share the same ending",
      "Compare words that share the same beginning",
      "The middle part '-na-' appears in all words - what meaning do they all share?"
    ],
    solution: `
## Solution

### Analysis:

Let's break down the words:

| Word | Parts | Meaning |
|------|-------|---------|
| Ni-na-soma | ni + na + soma | I + am + reading |
| U-na-soma | u + na + soma | You + am + reading |
| A-na-soma | a + na + soma | He + am + reading |

### Morpheme Inventory:

**Prefixes (Subject markers):**
- **ni-** = I
- **u-** = you
- **a-** = he/she

**Tense marker:**
- **-na-** = present continuous (am/is/are ...ing)

**Verb roots:**
- **-soma** = read
- **-kula** = eat
- **-penda** = love

### Answers:

1. **-soma** = read/reading
2. **-kula** = eat/eating
3. **ni-** = I (first person subject marker)
4. **-na-** = present continuous tense marker (am/is/are + -ing)
5. "He/She is loving" = **Anapenda** (a + na + penda)

### Structure:
Swahili verbs follow the pattern: **SUBJECT-TENSE-ROOT**

This is called **agglutinative** morphology - meaningful pieces stack together in a fixed order!
    `
  },
  {
    id: 3,
    title: "Japanese Sound Changes",
    emoji: "🔊",
    category: "Phonology",
    difficulty: "Medium",
    description: "Discover the pattern behind Japanese verb conjugation.",
    problem: `
## Problem

Study these Japanese verb forms:

| Dictionary Form | Negative Form | Meaning |
|-----------------|---------------|---------|
| kaku | kakanai | write |
| oyogu | oyoganai | swim |
| hanasu | hanasanai | speak |
| matsu | matanai | wait |
| shinu | shinanai | die |
| yobu | yobanai | call |
| nomu | nomanai | drink |
| toru | toranai | take |

### Questions:
1. What is the pattern for forming the negative?
2. What happens to the final vowel 'u'?
3. How would you form the negative of **kau** (to buy)?
4. What special change happens with verbs ending in **-tsu**?
    `,
    hints: [
      "Focus on what happens to the last syllable",
      "The ending 'u' changes to 'a' - but what else happens?",
      "Compare 'matsu' → 'matanai' carefully"
    ],
    solution: `
## Solution

### Analysis:

Let's look at the final consonant of each verb:

| Verb | Final C | Negative | Pattern |
|------|---------|----------|---------|
| kak-u | k | kak-anai | k stays |
| oyog-u | g | oyog-anai | g stays |
| hanas-u | s | hanas-anai | s stays |
| mats-u | ts | mat-anai | ts → t |
| shin-u | n | shin-anai | n stays |
| yob-u | b | yob-anai | b stays |
| nom-u | m | nom-anai | m stays |
| tor-u | r | tor-anai | r stays |

### The Pattern:

1. Remove the final **-u**
2. The consonant before 'u' remains
3. Add **-anai**
4. **Special case:** -tsu becomes -t (the 's' is lost)

### Answers:

1. **Pattern:** Change final -u to -anai (consonant + anai)

2. The final vowel **'u' is replaced** by 'a' (from -anai)

3. **kau → kawanai**
   - But wait! "Kau" ends in vowel + u
   - The hidden consonant is 'w': ka-w-u → ka-w-anai

4. Verbs ending in **-tsu** lose the 's':
   - matsu → mat-anai (not *matsanai)
   - This is because 'tsu' is a single sound [ts] in Japanese, and it simplifies to just 't' before 'a'

### Key Insight:
Japanese verb conjugation involves changing the vowel of the last syllable. The consonant (including hidden 'w') is preserved, except for the tsu→t simplification.
    `
  },
  {
    id: 4,
    title: "Turkish Sentence Structure",
    emoji: "📝",
    category: "Syntax",
    difficulty: "Medium",
    description: "Figure out Turkish word order and case marking.",
    problem: `
## Problem

Study these Turkish sentences:

| Turkish | English |
|---------|---------|
| Adam kediyi görüyor | The man sees the cat |
| Kedi adamı görüyor | The cat sees the man |
| Kadın elmayı yiyor | The woman eats the apple |
| Çocuk kadını seviyor | The child loves the woman |
| Adam çocuğu görüyor | The man sees the child |

### Questions:
1. What is the basic word order in Turkish (SVO, SOV, etc.)?
2. What does the suffix **-i/-ı/-u/-ü** (or -yi/-yı/-yu/-yü) indicate?
3. How would you say "The child eats the apple" in Turkish?
4. How would you say "The cat loves the man" in Turkish?

**Vocabulary given:**
- adam = man
- kedi = cat
- kadın = woman
- çocuk = child
- elma = apple
- görüyor = sees
- yiyor = eats
- seviyor = loves
    `,
    hints: [
      "Where is the verb in each sentence?",
      "Compare 'adam' when it's doing the action vs receiving it",
      "The suffix changes slightly based on the vowel in the word (vowel harmony)"
    ],
    solution: `
## Solution

### Analysis:

Let's identify S, V, O in each sentence:

| Turkish | S | O | V |
|---------|---|---|---|
| Adam kediyi görüyor | Adam (man) | kediyi (cat) | görüyor (sees) |
| Kedi adamı görüyor | Kedi (cat) | adamı (man) | görüyor (sees) |

### Answers:

1. **Word Order: SOV (Subject-Object-Verb)**
   - The verb always comes at the end
   - Subject comes first, Object in the middle

2. **The suffix -i/-ı/-u/-ü marks the OBJECT (accusative case)**
   - kedi → kediyi (the cat, as object)
   - adam → adamı (the man, as object)
   - elma → elmayı (the apple, as object)
   - çocuk → çocuğu (the child, as object)

   The vowel changes due to **vowel harmony** (matching front/back, rounded/unrounded vowels)

3. **"The child eats the apple":**
   - Subject: çocuk (child)
   - Object: elmayı (apple + accusative)
   - Verb: yiyor (eats)
   - Answer: **Çocuk elmayı yiyor**

4. **"The cat loves the man":**
   - Subject: kedi (cat)
   - Object: adamı (man + accusative)
   - Verb: seviyor (loves)
   - Answer: **Kedi adamı seviyor**

### Key Insights:
- Turkish is SOV (verb-final)
- Objects are marked with accusative suffix
- Vowel harmony affects suffix vowels
- Word order is flexible because cases mark grammatical roles
    `
  },
  {
    id: 5,
    title: "Mystery Script",
    emoji: "✍️",
    category: "Writing Systems",
    difficulty: "Hard",
    description: "Decipher an unknown syllabary script.",
    problem: `
## Problem

An archaeologist found inscriptions in an unknown script. By studying pictures nearby, they determined these translations:

| Script | Transliteration | Meaning |
|--------|-----------------|---------|
| ▲● | ka-mi | god |
| ▲■ | ka-wa | river |
| ●■ | mi-wa | sacred water |
| ■▲ | wa-ka | young |
| ●▲ | mi-ka | three days |
| ▲●■ | ka-mi-wa | divine river |
| ■●▲ | wa-mi-ka | (unknown) |

### Questions:
1. What type of writing system is this (alphabet, syllabary, or logographic)?
2. What does each symbol represent?
   - ▲ = ?
   - ● = ?
   - ■ = ?
3. What might ■●▲ (wa-mi-ka) mean, given the patterns?
4. How would you write "mi-ka-wa" (three-day river)?
    `,
    hints: [
      "Count the unique symbols and compare to the number of unique syllables",
      "Each symbol appears in multiple words - what syllable is consistent?",
      "Look at the order of symbols vs the order of syllables in the transliteration"
    ],
    solution: `
## Solution

### Analysis:

**Step 1: Count symbols and syllables**
- 3 unique symbols: ▲ ● ■
- 3 unique syllables: ka, mi, wa
- This is a 1-to-1 correspondence!

**Step 2: Match symbols to syllables**

From ▲● = ka-mi:
- ▲ could be 'ka' or 'mi'
- ● could be 'ka' or 'mi'

From ▲■ = ka-wa:
- ▲ appears again with 'ka' in first position
- So ▲ = 'ka'

From ●■ = mi-wa:
- Now ● is in 'mi' position
- So ● = 'mi'

Therefore: ■ = 'wa'

**Verification:**
- ▲● = ka-mi ✓
- ▲■ = ka-wa ✓
- ●■ = mi-wa ✓
- ■▲ = wa-ka ✓
- ●▲ = mi-ka ✓

### Answers:

1. **Syllabary** - each symbol represents one syllable (CV combination)

2. **Symbol values:**
   - ▲ = **ka**
   - ● = **mi**
   - ■ = **wa**

3. **■●▲ = wa-mi-ka** could mean something like:
   - Combining "wa" (from young/river context) + "mi" (sacred) + "ka" (from god/days)
   - Possibly: "young sacred day" or "new divine time"
   - (In real linguistics olympiad, you'd look for semantic patterns)

4. **"mi-ka-wa" (three-day river):**
   - mi = ●
   - ka = ▲
   - wa = ■
   - Answer: **●▲■**

### Key Insight:
This is a simple syllabary where each symbol = one syllable. Real ancient scripts like Linear B and Hiragana work similarly!
    `
  },
  {
    id: 6,
    title: "Georgian Verb Agreement",
    emoji: "🇬🇪",
    category: "Morphology",
    difficulty: "Hard",
    description: "Decode Georgian's complex verb agreement system.",
    problem: `
## Problem

Georgian verbs agree with both subject AND object. Study these forms:

| Georgian | English |
|----------|---------|
| vxatav | I paint it |
| xatav | You paint it |
| xatavs | He/She paints it |
| vxatavt | We paint it |
| gxatav | I paint you |
| gxatavt | I paint you (plural) |
| mxatav | You paint me |
| mxatavs | He/She paints me |
| gvxatav | You paint us |
| gvxatavs | He/She paints us |

### Questions:
1. What does the root **-xatav-** mean?
2. What does **v-** indicate?
3. What does **-s** indicate?
4. What does **m-** indicate? What about **g-**?
5. How would you say "We paint you (plural)"?
    `,
    hints: [
      "The root stays constant - what part is always there?",
      "Compare 'vxatav' (I paint it) with 'xatav' (You paint it)",
      "Look at object markers: what's the difference between 'mxatav' and 'gxatav'?"
    ],
    solution: `
## Solution

### Analysis:

**Step 1: Find the root**
The constant part is **-xatav-** = "paint"

**Step 2: Identify subject markers**
- **v-** at start = "I" or "we" (1st person subject)
- **-t** at end = plural subject (we/you-pl)
- **-s** at end = 3rd person subject (he/she)
- No v-, no -s = "you" (singular)

**Step 3: Identify object markers**
- **m-** = "me" (1st person singular object)
- **gv-** = "us" (1st person plural object)
- **g-** = "you/you-all" (2nd person object)
- No prefix = "it" (3rd person object)

### Answers:

1. **-xatav-** = paint (verb root)

2. **v-** = 1st person subject marker (I/we)

3. **-s** = 3rd person subject marker (he/she)

4. **m-** = 1st person singular object (me)
   **g-** = 2nd person object (you)

5. "We paint you (plural)":
   - Subject: we → v- ... -t
   - Object: you-plural → g-
   - Answer: **gvxatavt** (g- for "you" + v- for "we" + xatav + -t for plural)

### Key Insight:
Georgian is **polypersonal** - verbs mark both subject AND object with affixes. The subject uses both prefix (v-) and suffix (-s/-t), while objects use prefixes only (m-, g-, gv-).
    `
  },
  {
    id: 7,
    title: "Basque Numbers",
    emoji: "🔢",
    category: "Number Systems",
    difficulty: "Medium",
    description: "Uncover Basque's vigesimal (base-20) counting system.",
    problem: `
## Problem

Basque uses a base-20 number system. Study these numbers:

| Number | Basque |
|--------|--------|
| 1 | bat |
| 2 | bi |
| 3 | hiru |
| 4 | lau |
| 5 | bost |
| 10 | hamar |
| 11 | hamaika |
| 15 | hamabost |
| 20 | hogei |
| 21 | hogeita bat |
| 25 | hogeita bost |
| 30 | hogeita hamar |
| 40 | berrogei |
| 60 | hirurogei |
| 80 | laurogei |

### Questions:
1. How is 15 formed?
2. What does "hogeita" mean?
3. How would you say 35?
4. How would you say 50?
5. What pattern forms 40, 60, 80?
    `,
    hints: [
      "Compare hamar (10) with hamabost (15)",
      "Break down 'berrogei' - what could 'berr-' relate to?",
      "30 = 20 + 10, so what would 50 be?"
    ],
    solution: `
## Solution

### Analysis:

**Base numbers:**
- hamar = 10
- hogei = 20

**Building teens (11-19):**
- 11 = hamaika (special form)
- 15 = hama-bost = 10 + 5

**Building 20s:**
- hogeita = "twenty and"
- 21 = hogeita bat (20 and 1)
- 25 = hogeita bost (20 and 5)
- 30 = hogeita hamar (20 and 10)

**Multiples of 20:**
- 40 = berrogei = bi-hogei = 2 × 20
- 60 = hirurogei = hiru-hogei = 3 × 20
- 80 = laurogei = lau-hogei = 4 × 20

### Answers:

1. **15** = hama + bost = 10 + 5 (additive)

2. **hogeita** = "twenty and" (used for numbers 21-39)

3. **35** = hogeita hamabost (20 and 15)

4. **50** = berrogeita hamar (40 and 10, or 2×20 + 10)

5. **Pattern for 40, 60, 80:**
   - Multiplier (bi→berr, hiru→hirur, lau→laur) + ogei
   - berrogei = 2×20, hirurogei = 3×20, laurogei = 4×20
   - Note: sound changes occur (bi→berr, etc.)

### Key Insight:
Basque uses a **vigesimal (base-20)** system, similar to French quatre-vingts (80 = 4×20). Numbers are built by multiples of 20 plus additions.
    `
  },
  {
    id: 8,
    title: "Hawaiian Phonology",
    emoji: "🌺",
    category: "Phonology",
    difficulty: "Medium",
    description: "Discover the sound rules of Hawaiian.",
    problem: `
## Problem

Hawaiian has strict rules about what sounds can appear together. Study these words:

| Hawaiian | English |
|----------|---------|
| aloha | love, hello |
| mahalo | thank you |
| wiki | quick |
| hula | dance |
| keiki | child |
| wahine | woman |
| kane | man |
| lanai | porch |
| pua | flower |
| kai | sea |
| lei | garland |
| moana | ocean |

Now look at some English loanwords adapted into Hawaiian:

| English | Hawaiian |
|---------|----------|
| Christmas | Kalikimaka |
| ticket | kikiki |
| Bible | Baibala |
| Smith | Kamika |

### Questions:
1. What consonants does Hawaiian allow?
2. What rule governs syllable structure?
3. Why does "Christmas" become "Kalikimaka"?
4. Why does "Smith" become "Kamika"?
    `,
    hints: [
      "List all consonants you see in the native words",
      "Look at every syllable - what pattern do you notice about C and V?",
      "What does Hawaiian do with consonant clusters like 'Chr' or 'sm'?"
    ],
    solution: `
## Solution

### Analysis:

**Step 1: Identify Hawaiian consonants**
From native words: h, l, k, m, n, p, w
(Also allowed but not in examples: ' (glottal stop))

**Total: only 8 consonants!**

**Step 2: Syllable structure**
Looking at syllables:
- a.lo.ha (V.CV.CV)
- ma.ha.lo (CV.CV.CV)
- wi.ki (CV.CV)
- ke.i.ki (CV.V.CV)

**Pattern: (C)V** - every syllable is either V or CV
- No consonant clusters allowed
- Every syllable ends in a vowel
- No closed syllables (no CVC)

**Step 3: Loanword adaptation**

"Christmas" → "Kalikimaka":
- Chr → K (cluster simplified, r not allowed)
- s → k (s not in Hawaiian)
- t → k (t not in Hawaiian)
- mas → maka (add vowel to end)

"Smith" → "Kamika":
- Sm → Ka (break cluster, s→k)
- th → k (th not in Hawaiian)
- Final consonant → add 'a'

### Answers:

1. **Hawaiian consonants:** h, k, l, m, n, p, w, ʻ (glottal stop)
   - Only 8 consonants! No s, t, r, b, d, g, etc.

2. **Syllable rule:** (C)V only
   - Every syllable must end in a vowel
   - No consonant clusters
   - Maximum one consonant per syllable (at start)

3. **"Christmas" → "Kalikimaka":**
   - Break up clusters: Chr→Ka, st→ki
   - Replace missing sounds: s→k, t→k, r→l
   - Add final vowel: -mas→-maka

4. **"Smith" → "Kamika":**
   - Sm → Kam (break cluster)
   - i stays
   - th → k (no 'th' sound)
   - Add final -a (no final consonants)

### Key Insight:
Hawaiian has very strict **phonotactics** - rules about what sounds can combine. All syllables must be (C)V, forcing major changes to loanwords.
    `
  },
  {
    id: 9,
    title: "Latin to Romance",
    emoji: "🏛️",
    category: "Phonology",
    difficulty: "Hard",
    description: "Trace sound changes from Latin to Spanish and Italian.",
    problem: `
## Problem

Compare these Latin words with their descendants:

| Latin | Spanish | Italian | English |
|-------|---------|---------|---------|
| noctem | noche | notte | night |
| octo | ocho | otto | eight |
| factum | hecho | fatto | fact |
| lactem | leche | latte | milk |
| dictum | dicho | detto | said |
| pectus | pecho | petto | chest |

### Questions:
1. What happened to Latin "ct" in Spanish?
2. What happened to Latin "ct" in Italian?
3. What is the pattern for Latin initial "f" in Spanish? (Look at 'factum'→'hecho')
4. Predict: Latin "lectum" (read) in Spanish and Italian?
    `,
    hints: [
      "Focus on what 'ct' becomes in each language",
      "Spanish 'ch' is the sound in 'church'",
      "Italian 'tt' is a doubled/long consonant",
      "The f→h change in Spanish is famous - compare 'hijo' (son) from Latin 'filius'"
    ],
    solution: `
## Solution

### Analysis:

**Latin CT cluster changes:**

| Latin | Spanish | Italian |
|-------|---------|---------|
| ct | ch /tʃ/ | tt |

Examples:
- noctem → noche, notte
- octo → ocho, otto
- factum → (f)echo, fatto
- lactem → leche, latte

**Spanish changes:**
- ct → ch (palatalization)
- f → h (at word start, before vowels)

**Italian changes:**
- ct → tt (total assimilation)

### Answers:

1. **Latin "ct" in Spanish → "ch"** [tʃ]
   - This is palatalization - the sounds merged into an affricate

2. **Latin "ct" in Italian → "tt"**
   - This is total assimilation - the first consonant becomes identical to the second

3. **Latin initial "f" in Spanish → "h"**
   - factum → hecho (not *fecho)
   - This is a famous Spanish sound change
   - The "h" is now silent in modern Spanish

4. **Predict "lectum":**
   - Spanish: **lecho** (l + e + ch + o)
   - Italian: **letto** (l + e + tt + o)
   (Both mean "bed" in modern usage!)

### Key Insight:
Sound changes are **regular** - they apply consistently across the vocabulary. Once you identify a pattern, you can predict forms you haven't seen!

### Bonus Pattern:
This is why Spanish and Italian are recognizably related but sound different:
- Spanish favored palatalization (ct→ch, cl→ll)
- Italian favored gemination/doubling (ct→tt, pt→tt)
    `
  },
  {
    id: 10,
    title: "Korean Honorifics",
    emoji: "🇰🇷",
    category: "Syntax",
    difficulty: "Hard",
    description: "Navigate Korean's speech level system.",
    problem: `
## Problem

Korean uses different verb endings based on politeness level. Study these sentences:

**Informal (반말 - banmal):**
| Korean | English |
|--------|---------|
| 먹어 (meog-eo) | eat / (I) eat |
| 가 (ga) | go / (I) go |
| 해 (hae) | do / (I) do |

**Polite (해요체 - haeyoche):**
| Korean | English |
|--------|---------|
| 먹어요 (meog-eo-yo) | (I) eat (polite) |
| 가요 (ga-yo) | (I) go (polite) |
| 해요 (hae-yo) | (I) do (polite) |

**Formal (합쇼체 - hapsyoche):**
| Korean | English |
|--------|---------|
| 먹습니다 (meok-seumnida) | (I) eat (formal) |
| 갑니다 (gam-nida) | (I) go (formal) |
| 합니다 (ham-nida) | (I) do (formal) |

More verbs:
| Dictionary form | Meaning |
|-----------------|---------|
| 보다 (boda) | to see |
| 읽다 (ikda) | to read |
| 마시다 (masida) | to drink |

### Questions:
1. What morpheme makes informal → polite?
2. What's the formal ending pattern?
3. Give all three forms for "보다" (to see)
4. Why might Korean need multiple politeness levels?
    `,
    hints: [
      "Compare meog-eo with meog-eo-yo - what's added?",
      "The formal form has a different stem - look at how the verb root changes",
      "For 보다, the informal is 봐 (bwa) - a contracted form of 보+아"
    ],
    solution: `
## Solution

### Analysis:

**Politeness suffixes:**
- Informal: bare stem (먹어, 가, 해)
- Polite: stem + **-요 (-yo)**
- Formal: stem + **-습니다/-ㅂ니다 (-seumnida/-mnida)**

**Stem formation:**
- Verbs with consonant-final stems: add -습니다
- Verbs with vowel-final stems: add -ㅂ니다

### Answers:

1. **Informal → Polite:** Add **-요 (-yo)**
   - 먹어 → 먹어요
   - 가 → 가요
   - This is the most common polite form in daily Korean

2. **Formal ending pattern:** **-습니다 / -ㅂ니다** (-seumnida / -mnida)
   - After consonant: 먹 → 먹습니다
   - After vowel: 가 → 갑니다 (가 + ㅂ니다)

3. **보다 (to see) in all forms:**
   - Informal: **봐** (bwa) - contracted from 보+아
   - Polite: **봐요** (bwayo)
   - Formal: **봅니다** (bomnida) - 보 + ㅂ니다

4. **Why multiple levels?**
   - Korean society emphasizes hierarchy and social relationships
   - Age, social status, and familiarity determine speech level
   - Using wrong level can be rude or awkward
   - Formal: news, presentations, military
   - Polite: strangers, elders, customers
   - Informal: close friends, younger people, children

### Key Insight:
Korean **honorifics** are grammatically encoded - you can't speak Korean without indicating your relationship to the listener. This is called a **speech level system** and reflects Korean cultural values.
    `
  }
];
