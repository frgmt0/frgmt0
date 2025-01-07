import BlogPost from '../../models/BlogPost';

const experiments = new BlogPost({
    id: 'experiments',
    title: 'adventures in AGI benchmarking: beam search vs MCTS',
    summary: 'messing around with the Arc AGI benchmark',
    content: `
# adventures in AGI benchmarking: beam search vs MCTS (spoiler: trees win)

so i've been messing around with the Arc AGI benchmark lately, testing different reasoning approaches. thought i'd share what i found, because... well, the results are pretty interesting. and by interesting i mean "holy shit MCTS actually works way better than expected."

## the setup

if you're not familiar with Arc, it's this abstract reasoning benchmark that's all about finding patterns and applying them. think of it like those IQ test pattern questions, but way more evil. *perfect* for testing how well different reasoning approaches work.

i ran two sets of tests:
* the initial "let's see what happens" run with 50 puzzles
* a more focused API test with 20-25 puzzles (because my wallet has feelings too)

## beam search: the straightforward approach

beam search is like... you know when you're playing chess and you try to think a few moves ahead? it's like that, but more structured. you keep track of the most promising paths and ditch the ones that look sketchy.

results from the first run (50 puzzles):
* scored about 24% (yeah, not great but not terrible)
* scoring system was pretty forgiving:
  * 5 points - absolutely nailed it
  * 4 points - got it but fumbled the execution
  * 3 points - kinda got the idea
  * 2 points - straight up wrong
  * 1 point - at least tried something reasonable

API test results (smaller sample but more controlled):
* 2/25 with beam width of 3 (oof)
* 3/25 with beam width of 6-10 (letting the model choose)

## MCTS: when you let the trees decide

Monte Carlo Tree Search is like... imagine if instead of just thinking ahead, you also ran a bunch of simulations to see what *might* happen. it's more about exploration than just following what looks good right now.

first run results:
* hit 48% on 50 puzzles (yeah, that's a pretty big jump)
* spent way more time understanding examples before diving in
* more consistent in pattern recognition

API test results:
* 8/20 with 100 samples
* 11/20 with max samples (150)

## what's interesting here

so here's the thing - even though we used a smaller sample size for the API tests (20-25 instead of 50), the results are surprisingly consistent with the first run. do some quick math:

beam search:
* first run: 24% (12/50)
* API test: ~10% (2-3/25)

MCTS:
* first run: 48% (24/50)
* API test: 40-55% (8-11/20)

considering standard deviation and sample size differences, these numbers are actually pretty close to each other. it's not just random luck - MCTS consistently outperforms beam search on these types of problems.

## why this matters

yeah yeah, "structured reasoning makes things better" isn't exactly groundbreaking news. but what's really interesting is *how much* better MCTS performs compared to beam search. we're talking about consistently doubling the success rate.

the cool part? this isn't even about coding problems (claude's already proven itself there). this is about abstract reasoning - the kind of thinking that's harder to quantify and typically harder for AI to handle.

## what's next?

honestly? i'm curious about pushing MCTS further. like, what happens if we:
* tweak the exploration parameters
* combine it with other reasoning approaches
* try it on even more abstract problems

but that's for another day (and another budget cycle tbh).

random fact: during testing, i'm pretty sure claude started enjoying the puzzles more than i did. at least it didn't complain about them being too hard. :>

that's it for now! catch you in the next adventure in "making AI think better without breaking the bank." >:>
`,
    coverImage: '/images/experiments.jpg',
    tags: ['AI', 'small models', 'big dreams'],
    publishDate: '2025-01-06',
    category: 'Technology',
    featured: false,
    authorId: 'frgmt0'
});

export default experiments;