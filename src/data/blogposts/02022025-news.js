import BlogPost from "../../models/BlogPost";

const tariffs = new BlogPost({
  id: "02022025-news",
  title: "Tariffs",
  content: `
  # tariffs: from economic tool to political weapon
  ## a deep dive into trump's latest power play against canada and mexico

  tariffs have been around since basically forever. they're supposed to be this smart economic tool that helps protect domestic industries and give them room to grow. (*you know, like training wheels for the economy*) but what's happening right now with trump's latest 25% tariff on canada and mexico? that's a whole different story.

  ### what tariffs are actually supposed to do

  when we talk about tariffs in their traditional sense, we're talking about a carefully considered economic policy tool. they serve several legitimate purposes in international trade: protecting new domestic industries until they can compete globally, leveling the playing field when other countries use unfair trade practices, and even raising revenue for the government (*though this was more important before income tax was a thing*). when used properly, tariffs can act as a shield that gives your economy time to build strength. (*think of it as the economic equivalent of learning to ride a bike with training wheels*)

  ### how trump is using tariffs: power politics 101

  but here's where things get weird. trump's using these tariffs in a completely different way. instead of protecting vulnerable industries, he's targeting our closest trading partners - who, by the way, we already have a trade agreement with (usmca). (*awkward*) this isn't about economic protection anymore - it's about wielding economic power as a political weapon.

  the approach we're seeing now is unprecedented in modern american trade policy. trump is threatening 25% tariffs on canada and mexico, our literal neighbors and biggest trading partners, using economic pressure to force political concessions (*because nothing says friendship like economic threats*). this strategy completely bypasses traditional diplomatic channels and negotiation processes, undermining the very trade agreement (usmca) that his own administration negotiated.

  ### the real impacts on our economy

  the consequences of this approach are far-reaching and complex. our north american supply chains, built over decades of cooperation, cross borders multiple times during production. each crossing will now face additional costs, creating a compounding effect that ripples through the entire economy. american manufacturers are already bracing for higher material costs, and these increases will inevitably be passed down to consumers.

  the diplomatic damage might be even more concerning than the immediate economic impact. our relationships with canada and mexico, built on decades of trust and cooperation, are being strained to their limits. canada isn't taking this lying down - they're already talking about pulling american products from their shelves. (*and let's be honest, who can blame them?*)

  ### the working class bears the burden

  this is where it gets personal for most americans. while this might look like high-level political chess from the outside, it's regular working families who are about to feel the real impact. everyday items are about to get more expensive - from your morning avocado toast to your next car repair. manufacturing companies facing higher production costs might need to cut jobs, and small businesses will struggle with increased supply expenses.

  the long-term consequences could be even more severe. we're looking at potentially permanent damage to north american economic cooperation, reduced international investment in american industries, and the possible loss of market share in key sectors. (*spoiler alert: these jobs aren't coming back once they're gone*)

  ### the wealth gap widens

  (*and now for the part that really gets my blood boiling*)

  while working americans are about to get hit with all these increased costs, the story at the top couldn't be more different. the ultra-wealthy continue to enjoy tax breaks, corporate loopholes remain wide open, and investment income is still taxed at lower rates than actual work. when prices go up, wealthy individuals have ways to avoid the impact - the working class doesn't have that luxury.

  ### why this matters more than ever

  the transformation of tariffs from an economic tool into a political weapon represents a fundamental shift in american trade policy. it's not just about paying more for groceries or car parts - it's about the long-term consequences for american workers and our place in the global economy. when tariffs are used as intended, they can help build a stronger economy. when they're used as threats against allies, they can destroy decades of economic cooperation and trust. (*and trust me, that's way harder to rebuild than a damaged economy*)

  ### looking to the future

  as we look ahead, we need to ask ourselves what kind of economic relationship we want with our neighbors and allies. do we want to be reliable trading partners or unpredictable threats? do we want to lead global trade or follow a path of isolation? (*spoiler alert: threatening our besties probably isn't the best long-term strategy*)

  ### the bottom line

  tariffs can be a useful economic tool when used correctly. but what we're seeing now isn't about protecting american industries or workers - it's about wielding economic power for political gain, and it's the american working class who will pay the price. when politicians talk tough on trade, always ask yourself who's really going to foot the bill. (*hint: check your wallet*)
  `,
  summary:
    "Tariffs are a tool for politicians to protect their own interests. But they can also be used to undermine the economy and threaten our allies. What do we do?",
  coverImage: "/images/tariffs.webp",
  tags: [
    "politics",
    "economics",
    "news",
    "trump",
    "trade",
    "canada",
    "mexico",
    "usmca",
    "tariffs",
  ],
  category: "News",
  authorId: "frgmt0",
  publishDate: "2025-02-02",
});

export default tariffs;
