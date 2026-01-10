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
  }
];
