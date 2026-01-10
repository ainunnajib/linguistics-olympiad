export const lessons = [
  {
    id: 1,
    title: "Number Systems",
    emoji: "🔢",
    difficulty: "Beginner",
    duration: "10 min",
    description: "Learn to decode counting patterns in unknown languages",
    content: `
# Number Systems in Linguistics Olympiad

Number system problems are among the most common in linguistics olympiads. You'll be given numbers in an unknown language and must figure out the pattern.

## Key Strategies

### 1. Look for Base Systems
Most languages use base-10 (decimal), but some use:
- **Base-5** (quinary) - common in languages with "hand" counting
- **Base-20** (vigesimal) - used in Mayan, Welsh, French (quatre-vingts = 4×20)
- **Base-12** (duodecimal) - traces in English (dozen, gross)

### 2. Identify Building Blocks
Start with the smallest numbers and work up:
- Find 1-10 first
- Look for patterns like "10+1", "10+2" for 11, 12
- Watch for multiplication: "2×10" for 20

### 3. Common Patterns

**Additive:** 15 = 10 + 5 (like English "fifteen")
**Subtractive:** 19 = 20 - 1 (like Latin "undeviginti")
**Multiplicative:** 40 = 4 × 10 (like English "forty")

## Example

Given these numbers in Language X:
- 2 = "ba"
- 5 = "lima"
- 7 = "ba-lima" (2+5)
- 10 = "polo"
- 12 = "polo-ba" (10+2)

This shows an **additive system** with base-10!

## Tips for SLO
- Write out all given numbers in a table
- Look for repeated morphemes (word parts)
- Test your hypothesis with ALL given examples
- Check edge cases (teens, multiples of 10)
    `
  },
  {
    id: 2,
    title: "Writing Systems",
    emoji: "✍️",
    difficulty: "Beginner",
    duration: "12 min",
    description: "Understand different scripts and symbol patterns",
    content: `
# Writing Systems

Understanding how writing systems work is crucial for script-decipherment problems.

## Types of Writing Systems

### 1. Alphabets
Each symbol represents a **consonant or vowel sound**.
- Examples: Latin, Greek, Cyrillic
- Usually 20-40 symbols

### 2. Abjads
Symbols represent **consonants only**; vowels are optional or marked with diacritics.
- Examples: Arabic, Hebrew
- Usually 22-30 symbols

### 3. Syllabaries
Each symbol represents a **syllable** (consonant + vowel).
- Examples: Japanese Hiragana/Katakana, Cherokee
- Usually 50-100 symbols

### 4. Logographic
Each symbol represents a **word or morpheme**.
- Examples: Chinese characters
- Thousands of symbols

## Decipherment Strategies

### Count Unique Symbols
- ~25 symbols → probably alphabet
- ~50-80 symbols → probably syllabary
- Hundreds → probably logographic

### Look for Patterns
- Repeated symbols in similar positions
- Short words vs long words
- Symbol combinations

### Use Context
- Numbers often appear in sequences
- Names may be marked specially
- Common words repeat frequently

## Example Problem Approach

Given unknown script with translations:
1. List all unique symbols
2. Match repeated symbols across words
3. Look for shared meanings with shared symbols
4. Build a symbol-sound correspondence table

## Tips for SLO
- Be systematic - create a symbol inventory
- Similar-looking symbols may be related
- Direction of writing matters (left-to-right, etc.)
    `
  },
  {
    id: 3,
    title: "Sound Changes",
    emoji: "🔊",
    difficulty: "Intermediate",
    duration: "15 min",
    description: "Master phonological rules and sound correspondences",
    content: `
# Sound Changes (Phonology)

Sound change problems test your ability to find patterns in how sounds transform.

## Common Sound Changes

### 1. Assimilation
Sounds become **more similar** to nearby sounds.
- "in + possible" → "impossible" (n→m before p)
- "con + rupt" → "corrupt" (n→r before r)

### 2. Voicing/Devoicing
Voiced sounds (b, d, g) ↔ Voiceless sounds (p, t, k)
- Often happens at word edges
- Or next to other voiced/voiceless sounds

### 3. Lenition (Weakening)
Sounds become "weaker":
- p → b → v → w
- t → d → ð → ∅ (deletion)

### 4. Vowel Changes
- **Raising:** e → i, o → u
- **Lowering:** i → e, u → o
- **Fronting:** u → ü, o → ö

### 5. Deletion
Sounds disappear in certain contexts:
- Final consonant deletion
- Unstressed vowel deletion

## How to Solve Sound Change Problems

### Step 1: Align the Data
Write cognates (related words) in columns:
| Language A | Language B |
|------------|------------|
| pata       | bada       |
| kuma       | guma       |

### Step 2: Find Correspondences
- A's "p" = B's "b"
- A's "k" = B's "g"
- Pattern: Voiceless stops → Voiced stops

### Step 3: State the Rule
"Voiceless stops become voiced in Language B"
Or: p→b, t→d, k→g

### Step 4: Test All Examples
Make sure your rule works for EVERY example!

## Notation
- → means "becomes"
- / means "in the environment of"
- _ shows where the sound is
- # means word boundary

Example: t → d / V_V
"t becomes d between vowels"

## Tips for SLO
- Create comparison tables
- Look for minimal pairs (words differing in one sound)
- Check if changes are context-dependent
    `
  },
  {
    id: 4,
    title: "Morphology",
    emoji: "🧩",
    difficulty: "Intermediate",
    duration: "15 min",
    description: "Analyze word structure and meaningful parts",
    content: `
# Morphology: Word Structure

Morphology problems ask you to break words into meaningful parts (morphemes).

## Key Concepts

### Morphemes
The smallest meaningful units:
- **"unhappiness"** = un + happy + ness (3 morphemes)
- **"cats"** = cat + s (2 morphemes)

### Types of Morphemes

**Free morphemes:** Can stand alone (cat, happy, run)
**Bound morphemes:** Must attach to something (un-, -ness, -s)

**Prefixes:** Attach before (un-, pre-, re-)
**Suffixes:** Attach after (-ing, -ness, -ed)
**Infixes:** Insert inside (rare in English)

## Solving Morphology Problems

### Step 1: Find Repeated Parts
Look for chunks that appear in multiple words with similar meaning:

| Word | Meaning |
|------|---------|
| rumah | house |
| rumahku | my house |
| bukuku | my book |

→ "-ku" = "my"

### Step 2: Subtract to Find Roots
- rumahku - ku = rumah (house)
- bukuku - ku = buku (book)

### Step 3: Map Affixes to Meanings
Build a table:
| Affix | Position | Meaning |
|-------|----------|---------|
| -ku | suffix | my |
| -mu | suffix | your |

### Step 4: Predict New Forms
Use your rules to create words not in the data:
- If buku = book and -mu = your
- Then bukumu = your book

## Complex Morphology

### Agglutinative Languages
Words = many morphemes stacked together
- Turkish: ev-ler-im-den = house-PLURAL-my-from = "from my houses"

### Order Matters!
Affixes must go in specific order:
- English: un-happi-ness ✓
- English: *happi-un-ness ✗

## Tips for SLO
- Create a morpheme inventory
- Align words with shared parts
- Test by predicting new combinations
- Watch for sound changes at morpheme boundaries
    `
  },
  {
    id: 5,
    title: "Syntax Patterns",
    emoji: "📝",
    difficulty: "Intermediate",
    duration: "12 min",
    description: "Decode sentence structure and word order",
    content: `
# Syntax: Sentence Structure

Syntax problems focus on how words are ordered and sentences are built.

## Word Order Types

Languages have typical orders for Subject (S), Verb (V), Object (O):

| Order | Example Language | Example |
|-------|------------------|---------|
| SVO | English | "The cat eats fish" |
| SOV | Japanese, Turkish | "The cat fish eats" |
| VSO | Welsh, Arabic | "Eats the cat fish" |
| VOS | Malagasy | "Eats fish the cat" |
| OVS | Hixkaryana | "Fish eats the cat" |
| OSV | (rare) | "Fish the cat eats" |

## How to Determine Word Order

### Step 1: Identify Components
For each sentence, mark:
- Subject (who does the action)
- Verb (the action)
- Object (what receives the action)

### Step 2: Compare Positions
| Sentence | Translation |
|----------|-------------|
| X Y Z | "The man sees the dog" |
| X W Z | "The man eats the food" |
| A Y Z | "The woman sees the dog" |

- X/A = Subject position (the man/woman)
- Y/W = Verb position (sees/eats)
- Z = Object position (the dog/food)
- Order: SVO

## Other Syntax Features

### Question Formation
- Word order change: "You are" → "Are you?"
- Question particles: Japanese "ka"
- Intonation only

### Negation
- Position of "not" varies
- Some languages use double negatives
- May change word order

### Relative Clauses
"The man **who eats fish**"
- May come before or after the noun
- May use special markers

## Solving Syntax Problems

1. **Translate word by word** when possible
2. **Find the verb** - usually easiest to identify
3. **Identify subject/object** by meaning
4. **Note function words** (particles, articles)
5. **Look for agreement** (verb matches subject?)

## Tips for SLO
- Create a glossary as you work
- Sentences with shared words help identify positions
- Look for consistent patterns across all examples
- Some words may have no direct English equivalent
    `
  }
];
