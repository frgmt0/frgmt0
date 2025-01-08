import BlogPost from '../../models/BlogPost';

const what = new BlogPost({
    id: 'smoll-models-big-dreams',
    title: 'small models, big dreams: when 1B parameters punch above their weight',
    summary: 'how to get started with AI',
    content: `
# small models, big dreams: when 1B parameters punch above their weight

remember when i was geeking out about MCTS vs beam search? well, things got *interesting* when i decided to see how these approaches would work with Meta's Llama 3.2 1B model. spoiler: size isn't everything, but compute... yeah, that's still a thing.

## the experiment

so here's what went down - i wanted to see if a tiny 1B parameter model could hang with the big boys when given the same reasoning tools we tested on claude. and by "hang with the big boys" i mean "maybe not embarrass itself completely on the Arc AGI benchmark."

## attempt #1: beam search (aka "well that was humbling")

first up, i tried being clever:
* let the model study the full Arc training dataset
* had it write reports on what it "learned" (spoiler: LLMs don't actually learn, but you knew that)
* synthesized 200 rows of training responses
* ran it against the full eval set

the result? *drumroll please*... 1/400. yeah. ONE. and that one was just because it recognized the pattern from training. not exactly what you'd call a breakthrough.

## attempt #2: MCTS (aka "throw more compute at it")

since we're running locally, we're not bound by the same sample limits as cloud models. so naturally, i did what any reasonable person would do - cranked that baby up to 300 samples (claude maxes out at 150).

the results? 14/400. better, but still... yikes.

here's where it gets interesting though - remember claude's performance? even if we tested it on the full dataset (which i didn't because i like having money), i'd bet my next 10 million smackaroos it would still hit around its official Arc prize score (~22%). why? because these models are like your uncle who "knows what he knows" - adding reasoning tools is just augmenting what's already there, not fundamentally changing how they think.

## attempt #3: the fun part (aka "RIP my RAM")

but wait! what if we fine-tuned the model to actually understand MCTS methodology? and what if instead of forcing it to use a fixed number of samples, we let it decide based on confidence?

the good news: we hit 22/400! that's a serious improvement.
the bad news: my poor computer...
* average sampling: 456.34 (casual 50% increase from previous tests)
* RAM usage: went from 16GB to 32GB faster than you can say "system requirements"
* computer state: basically a very expensive space heater

## what did we actually learn here?

1. **post-training reasoning is tricky**: you can't just bolt on reasoning capabilities and expect magic. it needs to be baked in during training or very carefully fine-tuned.

2. **size vs efficiency**: here's the wild part - on the MATH500 benchmark, this tiny 1B model performed similarly to its 70B parameter big brother. it's not about the size of the model in the fight, it's about the fight in the... wait, no, that's not right.

3. **practical applications**: let's be real - if you're just writing emails, you probably don't need a model doing Monte Carlo simulations of your greeting format. but for developers? this could be huge.

## the future is... smaller?

here's my hot take: these smaller models, when properly equipped with reasoning capabilities, might be the future for a lot of applications. why?
* they're more practical for local deployment
* they can be more focused and efficient
* they're easier to fine-tune for specific tasks

will they replace the big models? nah. but for specific tasks where thoughtful reasoning matters more than raw knowledge? *watch this space.*

random fact: during testing, my computer got so hot i could have made toast on it. didn't try it though - scientific rigor and all that. maybe next time. :>

catch you in the next adventure in "making small models think big without melting your hardware." >:>
    `,
    coverImage: '/images/what.jpg',
    tags: ['AI', 'small models', 'big dreams'],
    publishDate: '2025-01-06',
    category: 'Technology',
    featured: false,
    authorId: 'frgmt0'
});

export default what;  