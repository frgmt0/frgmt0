import BlogPost from "../../models/BlogPost";

const post = new BlogPost({
  id: "01072025",
  title: "the ever expanding quest for knowledge",
  summary:
    'a look back at my journey with AI as a student, and a discussion of the paradox of "smart" models',
  content: `
# the ever expanding quest for knowledge

alright folks, grab your coffee (or your energy drink of choice… im a monster type of guy personally) because we need to talk about something that's been driving me absolutely crazy lately. as an electrical engineering student who's way too invested in AI development, i've hit this weird paradox that i can't stop thinking about: why are our "smartest" AI models so... well, not smart when it comes to actual learning?

## the promise vs. reality

let's be real for a second. when chatGPT dropped, everyone lost their minds. suddenly we had this tool that could write essays, debug code, and apparently solve all our problems. fast forward to now, with Claude and GPT-4 and a million other models, and yeah, they're impressive... but there's something deeply wrong with how we're using them in education.

i've spent the last year trying every new model that drops. Claude, GPT-4, the various flavors of Llama (seriously, Meta, how many do we need?), Mixtral, you name it. and here's the thing - they're all incredibly powerful tools that somehow manage to be absolutely terrible at helping you actually learn complex subjects.

## the good, the bad, and the "what the hell was that?"

let me break down where these models shine and where they completely fall apart:

### the good stuff:
- **lab reports**: holy shit, these models are incredible at formatting and structure. they get the scientific method, they understand data presentation, and they can help you make your results look professional af
- **code debugging**: when you're staring at your code at 3am wondering why your voltage divider simulation is giving you impossible numbers, AI can spot that missing semicolon faster than your sleep-deprived brain
- **email writing**: because who actually enjoys writing formal emails to professors?
- **documentation**: need to document your project? AI's got your back
- **basic concept explanations**: if you need a quick refresher on what a capacitor does, they're pretty solid

### the bad stuff:
- **complex mathematical proofs**: they'll give you an answer that looks right... until you actually understand the topic
- **circuit analysis**: sure, they can handle basic stuff, but throw in some non-linear components and watch them sweat
- **physics problems that require actual intuition**: this is where things get really interesting (and by interesting i mean potentially harmful to your education)

## the north pole problem

let me share this problem that perfectly illustrates what i'm talking about. it seems simple but it shows exactly where these models break down:

"if you start at the north pole (assuming it's exactly at the top of the world) and walk 1 km south, then take a hard left or right (90 degrees) and walk 1 km in that direction, are you closer or farther from the north pole?"

now, as humans, our thought process might go something like:
1. "okay, we're on a sphere, so regular geometry might be weird here"
2. "if i draw it out... wait, we're walking on a curved surface"
3. "the second walk is actually following a latitude line..."
4. "holy shit, we might be keeping the same distance from the pole!"

but AI? oh boy. throw this at any current model and watch what happens:
1. first response: "let's use the pythagorean theorem!" (wrong approach, but confident)
2. mention we're on a sphere: "oh wait, no, we need spherical coordinates..." (complete 180)
3. ask for proof: *spits out some mathematical formulas that look impressive but might not even be relevant*

## the confidence problem

and this brings us to the core issue. these models are too confident when they should be uncertain, and their reasoning... well, it's like they're playing mad libs with mathematical concepts. they've seen patterns in their training data and they'll pattern-match the hell out of any problem you give them, whether that pattern actually applies or not.

as an engineering student, this is actually dangerous. when i'm learning about electromagnetic fields or trying to understand complex circuits, i need to:
1. build proper intuition about the concepts
2. understand why certain approaches work (or don't)
3. develop problem-solving skills that work in the real world
4. learn to recognize when something doesn't make sense

but current AI models? they'll give you an answer with the same confidence whether they're telling you 2+2=4 or claiming that you can solve a complex field problem with basic algebra. it's like that one friend who's always super confident but only sometimes right - entertaining, but not who you want designing your bridge.

## the pattern-matching trap

here's where it gets really interesting (and by interesting i mean slightly terrifying). these models are essentially incredibly sophisticated pattern-matching machines. they've seen millions of examples of:
- solved math problems
- physics explanations
- circuit analyses
- engineering concepts

and they can reproduce these patterns incredibly well. but they're not actually understanding the underlying principles. they're not doing what we do as engineering students:
- building mental models
- connecting concepts across different domains
- developing intuition about physical systems
- learning to spot when something just doesn't make sense

instead, they're playing a very sophisticated game of "this looks like that problem i've seen before, so i'll apply that solution." sometimes it works brilliantly. other times... well, let's just say i'm glad we still have human engineers checking these things.

## where web search and RAG fall short

now, you might be thinking "but what about all these new tools? web search? RAG? surely they help?" and yeah, they do... kind of. these tools are like giving someone access to a massive library - useful, but not the same as understanding.

i've experimented with:
- feeding my textbooks into RAG systems
- using models with web search capabilities
- trying various "learning assistant" AIs

and while they're better than baseline models, they still fall into the same fundamental traps. they're just pattern matching with more patterns to choose from.

## the experiment that changed my mind

before we dive into solutions, let me tell you about an experiment that completely changed how i think about AI capabilities. i've been playing around with the Arc AGI benchmark lately (because who doesn't love torturing themselves with abstract reasoning puzzles?), testing different approaches with various models.

here's what blew my mind: when i added Monte Carlo Tree Search (MCTS) to a tiny 1B parameter model, it started performing at the level of its 70B parameter bigger brother. yeah, you read that right... a model 70 times smaller was keeping up just by thinking differently.

why does this matter? because it suggests something huge: maybe we don't need bigger models. maybe we just need smarter ways of thinking.

## what actual AGI might look like

okay, let's get controversial for a minute. everyone's throwing around the term "AGI" like it's going to be this magical system that knows everything. but based on my experiments and what we actually need in fields like engineering, i think true AGI needs to be something very different:

### 1. dynamic reasoning paths
imagine an AI that approaches problems like a human student:
- tries one approach, realizes it's wrong
- backs up, tries something completely different
- can explain why certain approaches might work better than others
- actually learns from its mistakes

current models? they're like that one student who memorized all the formulas but doesn't understand when to use them. they'll give you the same approach every time because that's what their training taught them.

### 2. genuine learning capability
here's what i mean by "genuine" learning:
- ability to update its understanding based on new information
- can identify gaps in its knowledge
- builds connections between different concepts
- develops intuition about physical systems

right now, even with fancy fine-tuning and RAG systems, we're basically just giving models more patterns to match. it's like trying to teach someone calculus by making them memorize every possible calculus problem. sure, they might get the right answer, but they don't understand why.

### 3. computational scaling awareness
this is where things get really interesting. imagine an AI that could:
\`\`\`python
# pseudo-code for how AI should think
def solve_problem(problem, complexity):
    initial_approach = quick_analysis(problem)

    if complexity > self.current_capabilities:
        # scale up thinking resources
        additional_resources = request_compute()
        # or ask for help
        second_opinion = consult_other_model()
        # or admit limitations
        return "this is beyond my current understanding"

    return solve_with_confidence(problem)
\`\`\`

### 4. specialization over generalization
here's a hot take: we don't need models that can do everything. we need:
- models that can become experts in specific domains
- systems that can learn deeply rather than broadly
- AI that knows its limitations and can specialize

## the SoFragment approach

so what are we doing about this at SoFragment? well, we're taking a different approach:

1. **reasoning first**:
instead of just making bigger models, we're focusing on better reasoning systems:
- implementing MCTS for complex problem-solving
- developing dynamic reasoning paths
- building systems that can actually explain their thinking

2. **modular knowledge**:
we're working on systems that:
- can build knowledge bases from scratch
- understand the relationships between concepts
- develop intuition about physical systems

3. **scalable architecture**:
our approach allows for:
- dynamic resource allocation based on problem complexity
- collaborative problem-solving between multiple specialized models
- continuous learning and adaptation

## the real future of AI in engineering

here's what i think the future actually looks like:

1. **specialized learning assistants**:
- models specifically trained for electrical engineering
- systems that understand physical principles deeply
- AI that can help you develop intuition, not just solve problems

2. **collaborative learning networks**:
- multiple specialized models working together
- systems that can debate approaches and find optimal solutions
- AI that learns from its interactions with students and experts

3. **adaptive difficulty scaling**:
- systems that know when to push you harder
- AI that can identify gaps in your understanding
- models that adjust their explanations based on your level

## what's next?

the immediate future isn't about building bigger models or achieving some mythical AGI status. it's about:

1. **better reasoning systems**:
- implementing more sophisticated decision-making algorithms
- developing ways to validate AI reasoning
- creating systems that can actually learn from experience

2. **specialized knowledge bases**:
- building domain-specific models that truly understand their field
- developing systems that can grow their expertise
- creating AI that can admit when it's uncertain

3. **improved learning interfaces**:
- tools that help develop intuition
- systems that can explain complex concepts clearly
- AI that supports learning rather than replacing it

## looking forward

here's the thing - we're at this weird point where AI is simultaneously over-hyped and under-utilized. yes, the current models are impressive, but they're also fundamentally limited by their architecture and training approach.

but the experiments i've run with MCTS and smaller models suggest something exciting: we might be able to achieve better results by thinking differently about how AI should work, rather than just making it bigger and feeding it more data.

## final thoughts

the future of AI in engineering education isn't about replacing human understanding. it's about enhancing it.

we need systems that can:
- help develop real intuition about complex systems
- support learning rather than short-circuit it
- admit their limitations and grow from them

and maybe, just maybe, we need to stop chasing the dream of a single, all-knowing AI and start building specialized tools that actually help us learn and grow.

random thought: maybe the real AGI was the friends we made along the way... just kidding, it's probably hiding in some Google datacenter wondering why we're all so obsessed with chatbots.

p.s. if you're interested in the MCTS experiments or want to chat about specialized AI development, hit me up. always down to geek out about this stuff.
@frgmt.xyz on Bluesky and you can probably find me on discord as well
`,
  coverImage: "/images/0107.jpg",
  tags: ["AI", "small models", "big dreams"],
  publishDate: "2025-01-07",
  category: "Technology",
  featured: false,
  authorId: "frgmt0",
});

export default post;
