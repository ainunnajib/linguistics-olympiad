export const lessons = [
  {
    id: 1,
    title: "Number Systems",
    emoji: "🔢",
    difficulty: "Beginner",
    duration: "15 min",
    description: "Learn to decode counting patterns in unknown languages",
    content: `
# Number Systems in Linguistics Olympiad

Number system problems are among the most common in IOL, APLO, and SLO. You'll be given numbers in an unknown language and must decode the pattern.

## Types of Number Systems

### Base Systems
Most languages use **base-10** (decimal), but many others exist:

| Base | Name | Example Languages |
|------|------|-------------------|
| 5 | Quinary | Toki Pona, many African languages |
| 10 | Decimal | English, Mandarin, most languages |
| 12 | Duodecimal | Traces in English (dozen) |
| 20 | Vigesimal | **Basque**, Mayan, French (80=4×20) |
| 60 | Sexagesimal | Babylonian (time: 60 seconds) |

### Additive Systems
Numbers are built by **adding** smaller numbers:
- English: 15 = "fifteen" (five + ten)
- Toki Pona: 7 = "luka tu" (5 + 2)

### Subtractive Systems
Numbers use **subtraction** from the next larger unit:
- **Latin**: 19 = "undeviginti" (one-from-twenty)
- **Yoruba** (featured in IOL): 15 = "ẹẹ́dógún" (20 - 5)

The Yoruba system is particularly complex:
- 45 = (20×3) - 10 - 5
- 77 = (20×4) - 3

### Multiplicative Systems
Numbers use **multiplication**:
- English: 40 = "forty" (4 × 10)
- French: 80 = "quatre-vingts" (4 × 20)

## Real IOL Example: Supyire (2023 IOL)

Supyire, spoken in Mali, appeared in the 2023 IOL. It has a base-80 system!

Key patterns to look for:
- Words for 1-10 as building blocks
- Multiples like 20, 40, 80
- How teens (11-19) are formed
- Combination strategies (add, subtract, multiply)

## Problem-Solving Strategy

### Step 1: Organize the Data
Create a table with numbers in order:

| Number | Word | Analysis |
|--------|------|----------|
| 1 | X | base |
| 2 | Y | base |
| ... | ... | ... |

### Step 2: Find Base Numbers
Identify words for: **1, 5, 10, 20**
These are usually single morphemes (no combinations).

### Step 3: Analyze Composite Numbers
Look at how 11-19 are formed:
- 11 = 10+1? Or special word?
- 15 = 10+5? Or 20-5?
- 19 = 10+9? Or 20-1?

### Step 4: Check Multiples
How are 20, 30, 40... formed?
- 20 = two-ten? Or unique word?
- 30 = three-ten? Or 40-10?

### Step 5: Verify with ALL Data
Your pattern must work for EVERY number given!

## Common Traps

1. **Irregular forms**: Many languages have irregular 11-19
2. **Sound changes**: Numbers may change form when combined
3. **Multiple strategies**: Some languages mix systems
4. **Body-part origins**: "hand" = 5, "person" = 20 (fingers + toes)

## Practice Recognition

Given: "three-hand-two" = 17
- This suggests base-5: (3 × 5) + 2 = 17

Given: "four-score" = 80
- This suggests base-20: 4 × 20 = 80

Given: "one-less-twenty" = 19
- This is subtractive: 20 - 1 = 19
    `
  },
  {
    id: 2,
    title: "Writing Systems",
    emoji: "✍️",
    difficulty: "Beginner",
    duration: "15 min",
    description: "Understand different scripts and symbol patterns",
    content: `
# Writing Systems

Script decipherment problems require you to match symbols to sounds or meanings.

## Types of Writing Systems

### Alphabets (~25-30 symbols)
Each symbol = one **phoneme** (consonant OR vowel)
- Examples: Latin, Greek, Cyrillic, Korean Hangul
- Symbols: A, B, C... / α, β, γ...

### Abjads (~22-30 symbols)
Symbols = **consonants only** (vowels optional/diacritics)
- Examples: Arabic, Hebrew, Phoenician
- "ktb" can be read as "kitab" (book), "katib" (writer)

### Abugidas (~30-50 symbols)
Base symbol = consonant + inherent vowel, modified for other vowels
- Examples: Devanagari (Hindi), Thai, Ethiopic
- क = "ka", की = "ki", कू = "ku"

### Syllabaries (~50-100 symbols)
Each symbol = one **syllable** (usually CV)
- Examples: Japanese Hiragana/Katakana, Cherokee
- か = "ka", き = "ki", く = "ku", け = "ke", こ = "ko"

### Logographic (1000s of symbols)
Each symbol = one **morpheme** or word
- Examples: Chinese characters, Ancient Egyptian hieroglyphs
- 山 = "mountain", 水 = "water"

## How to Determine the Type

**Count unique symbols in the data:**

| Count | Likely Type |
|-------|-------------|
| ~25 | Alphabet |
| ~50-80 | Syllabary |
| ~100+ | Logographic (or abugida with combinations) |

## Problem-Solving Strategy

### Step 1: Create Symbol Inventory
List every unique symbol you see.

### Step 2: Analyze Distribution
- Which symbols appear most frequently? (likely vowels or common syllables)
- Which appear rarely? (likely rare consonants/syllables)
- Which appear at word beginnings/endings?

### Step 3: Find Recurring Patterns
If two words share meaning ("eat" and "eats"), they likely share symbols:
- 食べる (taberu) = eat
- 食べます (tabemasu) = eat (polite)
- Shared: 食べ (tabe)

### Step 4: Use the Rosetta Stone Method
Given parallel texts (same meaning in script + translation):
1. Match word boundaries
2. Find repeated elements
3. Build symbol-sound correspondences

## Example: Japanese Hiragana

Given:
| Hiragana | Romaji |
|----------|--------|
| あか | aka (red) |
| あお | ao (blue) |
| かお | kao (face) |

Analysis:
- あ appears in "aka" and "ao" → あ = "a"
- か appears in "aka" and "kao" → か = "ka"
- お appears in "ao" and "kao" → お = "o"

## Cherokee Syllabary (IOL Featured)

Cherokee has 85 symbols, each representing a syllable:
- Invented by Sequoyah in the 1820s
- Some symbols look like Latin letters but have different values
- "D" shape = "a" sound, "R" shape = "e" sound

## Tips for SLO

- Similar-looking symbols may NOT be related
- Direction of writing matters (left→right, right→left, top→bottom)
- Word boundaries may not be marked
- Look for punctuation patterns
    `
  },
  {
    id: 3,
    title: "Sound Changes (Phonology)",
    emoji: "🔊",
    difficulty: "Intermediate",
    duration: "20 min",
    description: "Master phonological rules and sound correspondences",
    content: `
# Sound Changes (Phonology)

Phonology problems test your ability to find patterns in how sounds transform across related languages or within a single language.

## Types of Sound Changes

### 1. Assimilation
Sounds become **more similar** to neighboring sounds.

**Place Assimilation:**
- "in + possible" → "impossible" (n→m before bilabial p)
- "in + legal" → "illegal" (n→l before l)

**Voicing Assimilation:**
- "cats" [kæts] (s voiceless after voiceless t)
- "dogs" [dɔgz] (z voiced after voiced g)

### 2. Voicing/Devoicing
| Voiceless | Voiced |
|-----------|--------|
| p | b |
| t | d |
| k | g |
| f | v |
| s | z |

**Intervocalic voicing**: Voiceless → voiced between vowels
- Latin "vita" → Spanish "vida" (t→d)

**Final devoicing**: Voiced → voiceless at word end
- German: "Tag" pronounced [tak]

### 3. Palatalization
Sounds move toward the **palate** (roof of mouth)

Common changes:
- k → tʃ (before front vowels): Latin "centum" [k] → Italian "cento" [tʃ]
- t → tʃ: question → [kwestʃən]
- s → ʃ: sugar [ʃʊgər]

### 4. Lenition (Weakening)
Sounds become "weaker" over time:

p → b → β → w → ∅
t → d → ð → ∅
k → g → ɣ → ∅

Example: Latin "ripa" → Spanish "riba" → French "rive"

### 5. Vowel Harmony (Featured in IOL)
Vowels in a word must share features:

**Turkish Vowel Harmony:**
| Feature | Front | Back |
|---------|-------|------|
| Unrounded | e, i | a, ı |
| Rounded | ö, ü | o, u |

- "ev" (house) + plural → "evler" (front vowel)
- "at" (horse) + plural → "atlar" (back vowel)

## Real IOL Examples

### Hawaiian Phonotactics (Sound Patterns)

Hawaiian allows only: **p, k, ʔ, h, m, n, l, w** + 5 vowels

Syllable structure: **(C)V** only
- No consonant clusters
- No closed syllables (no CVC)

English loanwords must adapt:
- "Christmas" → "Kalikimaka"
- "Merry" → "Mele"

### Plains Cree Morphophonology (2023 IOL)

Sound changes occur at morpheme boundaries in verb conjugation.

## Problem-Solving Strategy

### Step 1: Create Alignment Tables
| Language A | Language B | Correspondence |
|------------|------------|----------------|
| pata | bada | p:b, t:d |
| kuma | guma | k:g |
| sano | zano | s:z |

### Step 2: Find the Environment
Ask: WHEN does the change happen?
- At word beginning? End? Middle?
- Before/after certain sounds?
- Between vowels?

### Step 3: State the Rule
Use notation:
- X → Y means "X becomes Y"
- X → Y / A_B means "X becomes Y between A and B"
- V = any vowel, C = any consonant
- # = word boundary

Example: "p → b / V_V"
= "p becomes b between vowels"

### Step 4: Test All Data
Your rule must work for EVERY example without exception!

## Phonological Notation Quick Reference

| Symbol | Meaning |
|--------|---------|
| → | becomes |
| / | in the environment |
| _ | position of sound |
| # | word boundary |
| V | any vowel |
| C | any consonant |
| ∅ | nothing (deletion) |

## Tips for SLO
- Sound changes are REGULAR - they apply consistently
- Multiple changes may apply in sequence
- Some changes only happen in specific positions
- Look for minimal pairs to identify contrastive sounds
    `
  },
  {
    id: 4,
    title: "Morphology",
    emoji: "🧩",
    difficulty: "Intermediate",
    duration: "20 min",
    description: "Analyze word structure and meaningful parts",
    content: `
# Morphology: Word Structure

Morphology problems ask you to identify meaningful word parts (morphemes) and how they combine.

## Types of Morphological Systems

### 1. Isolating Languages
One morpheme = one word. Little to no affixation.
- **Vietnamese**: "tôi đã ăn" = I PAST eat = "I ate"
- **Mandarin**: "我 吃 了" = I eat COMPLETED

### 2. Agglutinative Languages
Words = many morphemes clearly stacked.
- **Turkish**: "ev-ler-im-de" = house-PL-my-in = "in my houses"
- **Swahili**: "ni-na-soma" = I-PRES-read = "I am reading"
- **Japanese**: "tabe-sase-rare-mashi-ta" = eat-CAUS-PASS-POL-PAST

### 3. Fusional Languages
Morphemes blend together; one affix = multiple meanings.
- **Spanish**: "hablé" = I spoke (-é = 1st person + past + indicative)
- **Latin**: "amō" = I love (-ō = 1st person + singular + present + active + indicative)

### 4. Polysynthetic Languages (IOL Favorite!)
Entire sentences expressed in one complex word.
- **Inuktitut**: "tusaa-tsia-runna-nngit-tu-alu-u-junga"
  = hear-well-able-not-doer-very-be-PART.1SG
  = "I can't hear very well"

## Morpheme Types

### By Position
| Type | Position | Example |
|------|----------|---------|
| Prefix | before root | un-happy |
| Suffix | after root | happi-ness |
| Infix | inside root | Tagalog: sulat→s-um-ulat |
| Circumfix | around root | German: ge-mach-t |

### By Function
- **Derivational**: Changes word class or meaning (happy→unhappy, happy→happiness)
- **Inflectional**: Grammatical info only (walk→walks, walk→walked)

## Real IOL Problem Types

### Swahili Verb Morphology (Common Pattern)

Structure: **Subject-Tense-Object-Root-Mood**

| Form | Analysis | Meaning |
|------|----------|---------|
| ninakupenda | ni-na-ku-penda | I-PRES-you-love = "I love you" |
| alinipiga | a-li-ni-piga | he-PAST-me-hit = "He hit me" |
| tutawaona | tu-ta-wa-ona | we-FUT-them-see = "We will see them" |

### Georgian Polypersonal Verbs (2024 IOL Pattern)

Verbs agree with BOTH subject and object:
- "gxatav" = "I paint you" (g=you-OBJ, v=I-SUBJ)
- "mxatavs" = "He paints me" (m=me-OBJ, s=he-SUBJ)

### Arabic Root-and-Pattern (Templatic)

Consonant root + vowel pattern:
- Root **K-T-B** (writing):
  - kitāb = book
  - kātib = writer
  - maktaba = library
  - kutub = books

## Problem-Solving Strategy

### Step 1: Find Repeated Elements
Look for chunks that appear with consistent meaning:

| Word | Meaning |
|------|---------|
| rumah | house |
| rumahku | my house |
| rumahmu | your house |
| bukuku | my book |

Pattern: -ku = "my", -mu = "your"

### Step 2: Segment Words
Break words at morpheme boundaries:
- rumahku = rumah + ku
- bukuku = buku + ku

### Step 3: Build Morpheme Inventory
| Morpheme | Meaning | Position |
|----------|---------|----------|
| rumah | house | root |
| buku | book | root |
| -ku | my | suffix |
| -mu | your | suffix |

### Step 4: Predict New Forms
Test by creating words not in the data:
- bukumu = buku + mu = "your book" ✓

## Watch Out For

1. **Allomorphy**: Same morpheme, different forms
   - English plural: -s, -es, -en, ∅ (sheep)

2. **Morphophonology**: Sound changes at boundaries
   - "in-" → "im-" before p (impossible)

3. **Zero morphemes**: Meaning with no visible marker
   - "sheep" (singular) vs "sheep" (plural)

## Tips for SLO
- Create a morpheme glossary as you work
- Align related words vertically to see shared parts
- Order of morphemes matters - note the sequence
- Test your analysis by predicting new forms
    `
  },
  {
    id: 5,
    title: "Syntax Patterns",
    emoji: "📝",
    difficulty: "Intermediate",
    duration: "15 min",
    description: "Decode sentence structure and word order",
    content: `
# Syntax: Sentence Structure

Syntax problems test your understanding of how words are ordered and how sentences are built.

## Word Order Typology

### The Six Possible Orders

| Order | % of Languages | Examples |
|-------|----------------|----------|
| **SOV** | ~45% | Japanese, Turkish, Korean, Hindi |
| **SVO** | ~42% | English, Mandarin, Spanish, Swahili |
| **VSO** | ~9% | Welsh, Arabic, Irish, Tagalog |
| **VOS** | ~3% | Malagasy, Fijian |
| **OVS** | ~1% | Hixkaryana |
| **OSV** | <1% | Extremely rare |

### Determining Word Order

Given: "Neko-ga sakana-o taberu" = "The cat eats fish"

Step 1: Identify components
- Subject (who does action): cat
- Object (receives action): fish
- Verb (action): eats

Step 2: Match positions
- Neko (cat) - ga (particle) - sakana (fish) - o (particle) - taberu (eats)
- Order: S-O-V → **Japanese is SOV**

## Case Marking Systems

### What is Case?
Grammatical marking showing the role of a noun:

| Case | Role | Example (Turkish) |
|------|------|-------------------|
| Nominative | Subject | adam (the man) |
| Accusative | Direct object | adamı (the man - object) |
| Dative | Indirect object | adama (to the man) |
| Genitive | Possession | adamın (of the man) |
| Locative | Location | adamda (at/in the man) |
| Ablative | Source | adamdan (from the man) |

### Why Case Matters
In case-marking languages, word order is often **flexible**:
- Turkish: "Adam kediyi görüyor" = "The man sees the cat"
- Turkish: "Kediyi adam görüyor" = Same meaning!
- The -yi suffix marks "cat" as object regardless of position

## Focus and Voice Systems (IOL Favorite!)

### Tagalog Focus System

Tagalog has **multiple voices** - the verb changes based on which argument is focused:

| Voice | Affix | Focus | Example |
|-------|-------|-------|---------|
| Actor | -um- | Agent | B-um-ili ang lalaki ng libro |
| Patient | -in | Patient | B-in-ili ng lalaki ang libro |
| Locative | -an | Location | B-in-ilh-an ng lalaki ang tindahan |
| Benefactive | i- | Beneficiary | I-b-in-ili ng lalaki ang bata |

All mean "The man bought a book" but with different focus!

## Particles and Function Words

### Japanese Particles
| Particle | Function |
|----------|----------|
| が (ga) | Subject marker |
| を (o/wo) | Object marker |
| に (ni) | Direction/indirect object |
| で (de) | Location of action |
| は (wa) | Topic marker |

### Difference: Topic vs Subject
- 象は鼻が長い (Zō-wa hana-ga nagai)
- "Elephant-TOPIC nose-SUBJECT long"
- = "As for elephants, (their) noses are long"

## Real IOL Problem Types

### Engenni Syntax (2024 IOL)
Niger-Congo language with complex agreement patterns.

### Teop Syntax (2012 IOL)
Austronesian language from Papua New Guinea with unique clause structures.

### Coastal Marind (2023 IOL)
Papuan language with complex morphosyntax.

## Problem-Solving Strategy

### Step 1: Create a Glossary
Track every word and its meaning:

| Word | Meaning | Notes |
|------|---------|-------|
| adam | man | noun |
| kedi | cat | noun |
| görüyor | sees | verb |

### Step 2: Find the Verb
Verbs are usually easiest to identify - they describe actions.

### Step 3: Identify Subject vs Object
- Who performs the action? → Subject
- What receives the action? → Object

### Step 4: Look for Patterns
- Are there particles/case markers?
- Does the verb agree with subject/object?
- What's consistent across all sentences?

### Step 5: Test with Translation
Translate a new sentence using your rules.

## Tips for SLO
- Build a word-by-word glossary
- Note word order in EVERY sentence
- Look for agreement patterns (verb matching subject)
- Function words/particles are key - don't ignore them!
    `
  },
  {
    id: 6,
    title: "Austronesian Languages",
    emoji: "🌊",
    difficulty: "Advanced",
    duration: "20 min",
    description: "Master focus systems, reduplication, and Austronesian patterns",
    content: `
# Austronesian Languages

Austronesian languages span from Madagascar to Hawaii and are **frequent in IOL, APLO, and SLO**. Understanding their common features gives you a huge advantage.

## The Austronesian Family

Over 1,200 languages including:
- **Tagalog/Filipino** (Philippines)
- **Indonesian/Malay** (Indonesia, Malaysia, Singapore)
- **Hawaiian, Samoan, Māori** (Polynesia)
- **Fijian, Tongan** (Melanesia/Polynesia)
- **Malagasy** (Madagascar)

## Key Feature 1: Focus/Voice System

### The Problem with "Voice"
Austronesian languages have multiple transitive constructions - not just active/passive!

### Tagalog Focus System

The **ang** phrase is the "focused" element:

| Voice | Verb Form | Meaning | Focus |
|-------|-----------|---------|-------|
| Actor | b-um-ili | "bought" | Agent |
| Patient | b-in-ili | "was bought" | Patient |
| Locative | b-in-ilh-an | "was bought at" | Location |
| Benefactive | i-b-in-ili | "was bought for" | Beneficiary |

Example:
- **Bumili ang lalaki ng isda sa palengke.**
- "The man bought fish at the market." (Actor focus)

- **Binili ng lalaki ang isda sa palengke.**
- "The fish was bought by the man at the market." (Patient focus)

Same event, different focus!

### Indonesian Voice

Indonesian has simpler voice marking:
- **Active**: Saya mem-baca buku = "I read (a) book"
- **Passive**: Buku di-baca (oleh saya) = "The book is read (by me)"

Prefix **meN-** = active, **di-** = passive

## Key Feature 2: Reduplication

Austronesian languages LOVE reduplication!

### Types of Reduplication

**Full reduplication** (whole word copied):
- Malay: "buku" (book) → "buku-buku" (books)
- Indonesian: "orang" (person) → "orang-orang" (people)

**Partial reduplication** (part of word copied):
- Tagalog: "sulat" (write) → "su-sulat" (will write)
- Māori: "piri" (cling) → "pi-piri" (cling together)

### Meanings of Reduplication

| Function | Example |
|----------|---------|
| Plural | Malay: bunga → bunga-bunga (flowers) |
| Intensity | Māori: pai → pa-pai (very good) |
| Diminutive | Māori: pango → pa-pango (blackish) |
| Continuous | Tagalog: takbo → tak-takbo (running) |
| Reciprocal | Samoan: fasi → fefasi (hit each other) |

## Key Feature 3: Noun-Class Systems

### Fijian Pronouns (IOL Problem)

Fijian has different pronouns based on number:

| | Singular | Dual | Paucal | Plural |
|--|----------|------|--------|--------|
| 1st incl | - | kedaru | kedatou | keda |
| 1st excl | au | keirau | keitou | keimami |
| 2nd | iko | kemudrau | kemudou | kemuni |
| 3rd | koya | rau | ratou | ira |

"Dual" = exactly 2, "Paucal" = few (3-4), "Plural" = many

## Key Feature 4: Sound Correspondences

Polynesian languages show regular sound correspondences:

| Proto-Polynesian | Hawaiian | Māori | Samoan | Tongan |
|------------------|----------|-------|--------|--------|
| *t | k | t | t | t |
| *k | ʔ | k | ʔ | k |
| *r | l | r | l | - |
| *ŋ | n | ng | ŋ | ng |

Example: "human being"
- Hawaiian: **kanaka**
- Māori: **tangata**
- Samoan: **tagata**
- Tongan: **tangata**

## Problem-Solving for Austronesian Languages

### 1. Identify the Voice/Focus
Look for verbal affixes that change:
- -um-, -in-, -an, i- (Tagalog)
- meN-, di-, ber- (Indonesian)

### 2. Watch for Reduplication
- Is it full or partial?
- What meaning does it add?
- Is it regular or irregular?

### 3. Use Sound Correspondences
If you know one Polynesian language, you can predict others!

### 4. Note the ang/ng/sa System (Tagalog)
- **ang** = focused argument
- **ng** = non-focused agent or possessor
- **sa** = location or direction

## Real Competition Problems

- **IOL 2012**: Rotuman (Austronesian semantics)
- **IOL 2012**: Teop (Austronesian syntax)
- **APLO 2024**: Tutuba (Vanuatu)
- Training Guide: Fijian, Māori problems

## Tips for SLO

- Focus systems are NOT just active/passive - look for more voices
- Reduplication patterns are usually regular - find the rule
- Sound correspondences help you predict cognates
- Singapore context: Indonesian/Malay knowledge helps!
    `
  },
  {
    id: 7,
    title: "Semantics & Kinship",
    emoji: "👨‍👩‍👧‍👦",
    difficulty: "Advanced",
    duration: "18 min",
    description: "Understand meaning relationships and kinship terminology",
    content: `
# Semantics & Kinship Systems

Semantics problems test your understanding of meaning, categories, and how languages divide up concepts differently.

## Kinship Systems (IOL Favorite!)

### Why Kinship Matters
Different cultures categorize family relations differently. What English calls "cousin" might be 8 different terms in another language!

### The 2023 IOL: Kómnzo Kinship

The 2023 IOL featured Kómnzo (Yam language family, Papua New Guinea) kinship terms. These problems require mapping:
- English kinship concepts → Target language terms
- Understanding which relatives are grouped together

### Major Kinship Systems

**1. Eskimo System (English)**
- Distinguishes lineal (parents) from collateral (aunts/uncles)
- All cousins grouped together

**2. Hawaiian System**
- Generation-based: all relatives of same generation = same term
- "Mother" = mother, mother's sister, father's sister

**3. Iroquois/Dravidian System**
- Distinguishes parallel vs cross relatives
- Parallel: father's brother = "father", mother's sister = "mother"
- Cross: father's sister = "aunt", mother's brother = "uncle"
- Cross cousins may be marriage partners!

**4. Sudanese System**
- Every relative has a unique term
- Most complex system

### Solving Kinship Problems

**Step 1: Draw a Family Tree**
\`\`\`
        Grandfather ── Grandmother
              │
    ┌─────────┼─────────┐
  Uncle    Father    Aunt
    │         │         │
 Cousin     EGO      Cousin
\`\`\`

**Step 2: Map Terms to Positions**
For each kinship term given, identify which family position(s) it covers.

**Step 3: Find the Patterns**
- Are siblings of parents merged? (parallel vs cross)
- Is gender marked? Age? Generation?
- Are in-laws distinguished?

## Tangut Kinship (2024 IOL)

The 2024 IOL featured Tangut, an extinct Tibeto-Burman language with historical kinship terms found in manuscripts.

## Semantic Fields

### Classifiers (East/Southeast Asian)

Many Asian languages require **classifiers** when counting:

**Mandarin Chinese:**
| Classifier | Used for | Example |
|------------|----------|---------|
| 个 (gè) | general/people | 一个人 (yī gè rén) |
| 本 (běn) | books | 一本书 (yī běn shū) |
| 只 (zhī) | animals | 一只猫 (yī zhī māo) |
| 条 (tiáo) | long things | 一条鱼 (yī tiáo yú) |

**Thai:**
| Classifier | Used for |
|------------|----------|
| คน (khon) | people |
| ตัว (tua) | animals |
| เล่ม (lem) | books |
| ใบ (bai) | flat things, fruits |

**Vietnamese:**
- Uses classifiers similarly to Chinese/Thai
- con = animals, cái = inanimate objects

### Color Terms

Languages vary in how they divide the color spectrum:

| Language | Basic Color Terms |
|----------|-------------------|
| English | 11 (black, white, red, green, blue, yellow, brown, purple, pink, orange, gray) |
| Russian | 12 (includes "light blue" as separate from "blue") |
| Pirahã | 2? (light/dark) |
| Himba | 5 (different boundaries than English) |

### Body Parts

Languages divide the body differently:
- English: hand, arm (separate)
- Russian: рука (hand+arm)
- English: finger, toe (separate)
- Spanish: dedo (finger+toe), distinguished by context

## Problem-Solving Strategy

### For Kinship Problems

1. **List all terms** and their definitions
2. **Draw a family tree** from EGO's perspective
3. **Map each term** to the tree positions
4. **Look for groupings** - what's merged?
5. **Identify the system** type if possible

### For Classifier Problems

1. **Group nouns** by their classifier
2. **Find the semantic feature** linking each group
3. **Predict** classifiers for new nouns

### For Semantic Field Problems

1. **Map meanings** to terms
2. **Find boundaries** - where does one term end and another begin?
3. **Compare to English** - what's different?

## Tips for SLO

- Kinship problems often appear in APLO/IOL
- Don't assume English categories apply
- Draw diagrams for kinship trees
- For classifiers, think about physical properties (shape, size, animacy)
    `
  },
  {
    id: 8,
    title: "Competition Strategy",
    emoji: "🎯",
    difficulty: "Essential",
    duration: "15 min",
    description: "Time management and problem-solving approaches for SLO",
    content: `
# Competition Strategy for SLO

The Singapore Linguistics Olympiad gives you **4 hours** to solve **4 problems**. Strategy matters!

## Time Management

### The 4-Hour Framework

| Phase | Time | Activity |
|-------|------|----------|
| Overview | 10 min | Read ALL problems, assess difficulty |
| Problem 1 | 50-60 min | Start with easiest |
| Problem 2 | 50-60 min | Second easiest |
| Problem 3 | 50-60 min | Medium difficulty |
| Problem 4 | 50-60 min | Hardest |
| Review | 20 min | Check answers, fill gaps |

### Don't Get Stuck!
- If stuck for 10+ minutes, **move on**
- Return with fresh eyes later
- Partial answers get partial credit

## The Universal Problem-Solving Method

### Step 1: READ EVERYTHING (5 min)
- Read the entire problem including all questions
- The questions often hint at what patterns to look for
- Note the language family and region (may give clues)

### Step 2: ORGANIZE THE DATA (10 min)
Create a table:

| Foreign | English | Notes |
|---------|---------|-------|
| X | "the man" | noun |
| Y | "sees" | verb |
| X-Z | "the man sees" | X=man, Z=sees? |

### Step 3: FIND PATTERNS (15-20 min)
Look for:
- Repeated morphemes
- Position patterns (where do verbs go?)
- Sound correspondences

### Step 4: FORM HYPOTHESIS (5 min)
Write down your rule clearly:
- "The suffix -lar means plural"
- "Verbs come at the end"

### Step 5: TEST WITH ALL DATA (10 min)
Your rule MUST work for EVERY example!
If it fails once, refine it.

### Step 6: ANSWER QUESTIONS (15 min)
- Answer every question, even if unsure
- Show your work for partial credit
- Be precise with translations

## Common Problem Types

### Type A: Translation
"Translate these sentences..."
- Use your morpheme inventory
- Check word order
- Verify against patterns

### Type B: Fill the Gap
"What does X mean?"
- Use context and parallel structures
- Eliminate impossible options

### Type C: Explain the Pattern
"What rule governs..."
- State the rule clearly
- Give examples from the data

### Type D: Create New Forms
"How would you say..."
- Apply your rules systematically
- Double-check morpheme order

## Critical Don'ts

### DON'T Assume It's Like English
- Word order may differ
- Concepts may not map directly
- English has weird features too!

### DON'T Ignore Data
Every piece of data is there for a reason:
- No filler or decoration
- Exceptions may reveal sub-rules
- Numbers of examples are balanced

### DON'T Skip Questions
- Partial credit exists
- Write something for every question
- Your "wrong" answer might be half-right

### DON'T Forget Sound Changes
At morpheme boundaries:
- Sounds may change
- Letters may drop
- Harmony rules may apply

## Partial Credit Strategy

Even if you can't solve everything:

1. **Show your work** - explain your reasoning
2. **Identify patterns** you found
3. **Translate what you can** - even partial translations
4. **State your hypothesis** - even if unverified

## Mental Approach

### Stay Calm
- These problems are designed to be solvable
- You have the skills if you've practiced
- Confusion is temporary

### Be Systematic
- Follow the method step by step
- Don't jump ahead
- Trust the process

### Use the Data
- Everything you need is in the problem
- No external knowledge required
- The answer is there if you look carefully

## What to Bring

- Pencils (multiple)
- Eraser
- Ruler (for tables)
- Watch (for time management)
- Water
- Confidence!

## After the Competition

- Discuss problems with others
- Review official solutions when released
- Learn from any mistakes
- Celebrate your effort!
    `
  }
];
