import MarkdownRenderer from '../components/MarkdownRenderer'

const strategyContent = `
# Exam Strategy & Tips for SLO

Master these strategies to maximize your score in the Singapore Linguistics Olympiad.

## Before the Exam

### What to Bring
- Multiple pens/pencils (no special equipment needed)
- Eraser and correction tape
- Watch (phones usually not allowed)
- Water bottle

### Mental Preparation
- Get good sleep the night before
- Eat a proper meal
- Stay calm - these puzzles are meant to be solvable!

---

## During the Exam

### Time Management (Critical!)

**For a 3-hour exam with 5 problems:**
- First pass: ~25 min per problem (2 hours total)
- Second pass: ~10 min per problem (50 min for stuck ones)
- Final check: 10 minutes

**Rule of thumb:**
- If stuck for 10+ minutes on one part, MOVE ON
- Come back with fresh eyes later
- Partial credit is better than zero!

### Problem-Solving Framework

**Step 1: READ EVERYTHING FIRST (2-3 min)**
- Read the entire problem before writing anything
- Understand what you're being asked
- Note how many points each question is worth

**Step 2: ORGANIZE THE DATA (5 min)**
- Create tables to align related information
- Number systems: list all numbers in order
- Morphology: align words with shared parts vertically
- Syntax: mark Subject, Verb, Object

**Step 3: FIND THE PATTERN (10-15 min)**
- Start with the easiest, most obvious patterns
- Look for repeated elements
- Compare minimal pairs (things that differ by one element)

**Step 4: TEST YOUR HYPOTHESIS**
- Your rule must work for ALL examples
- If it doesn't, refine it
- Look for exceptions and sub-rules

**Step 5: ANSWER THE QUESTIONS**
- Be systematic
- Show your work (partial credit!)
- Double-check translations

---

## Problem Type Strategies

### Number Systems
1. Find 1-5 first (usually given or easy to deduce)
2. Look for the base (5, 10, 12, 20 are common)
3. Check for addition vs. multiplication
4. Watch for subtraction (e.g., 19 = 20-1)

### Morphology
1. Identify the ROOT (constant meaning-bearing part)
2. List all AFFIXES (prefixes, suffixes)
3. Create a morpheme glossary
4. Test by building new words

### Phonology
1. Create correspondence tables
2. Look for ENVIRONMENTS (what comes before/after)
3. State rules precisely: X → Y / A_B
4. Check if changes are context-dependent

### Syntax
1. Identify S, V, O in each sentence
2. Determine basic word order
3. Look for case markers (who does what)
4. Note any particles or function words

### Writing Systems
1. Count unique symbols
2. Match symbols to sounds systematically
3. Look for consistent symbol positions
4. Use process of elimination

---

## Golden Rules

### DO:
- **Organize data visually** - tables and alignment reveal patterns
- **Start simple** - solve easy parts first, build confidence
- **Show your reasoning** - partial credit adds up
- **Check ALL examples** - exceptions break theories
- **Write neatly** - graders need to read your work

### DON'T:
- **Don't assume English** - other languages work differently!
- **Don't skip data** - every example is a clue
- **Don't overcomplicate** - the simplest pattern is usually right
- **Don't panic** - these problems have solutions
- **Don't leave blanks** - educated guesses get partial credit

---

## Common Mistakes to Avoid

1. **Ignoring data** - Every example matters, use them all
2. **English bias** - "There must be articles" - no, there don't have to be!
3. **Overcomplicating** - If your rule has 10 exceptions, find a simpler one
4. **Not checking work** - Test your answers against original data
5. **Giving up too early** - Partial answers score points!

---

## If You're Stuck

1. **Re-read the problem** - you may have missed something
2. **Try a different approach** - if rows don't work, try columns
3. **Start from a different point** - skip to an easier question
4. **Use process of elimination** - what CAN'T it be?
5. **Come back later** - fresh eyes often see new patterns

---

## Last-Minute Reminders

- Trust your analysis over intuition
- Patterns are consistent - if there's an exception, look deeper
- Languages are logical - there IS a pattern, you just need to find it
- Points for partial work - never leave anything blank
- You've prepared for this - you can do it!
`

function Strategy() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🎯 Exam Strategy</h1>
        <p className="text-gray-600">
          Proven strategies to maximize your SLO score
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
        <MarkdownRenderer content={strategyContent} />
      </div>
    </div>
  )
}

export default Strategy
