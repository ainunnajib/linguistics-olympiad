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

