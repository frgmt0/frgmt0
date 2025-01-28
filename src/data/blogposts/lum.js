import BlogPost from "../../models/BlogPost";

const lum = new BlogPost({
  id: "lum",
  title: "lüm: rethinking AI tools for mental health professionals",
  summary: "an ai assistant for mental health professionals",
  content: `
  let's talk about something different today. no snarky AI comments, no clever wordplay about databases - because this project matters too much for that. i've been working on something that's been keeping me up at night (in a good way), and it's time to share it with you.

  ---

  ## what is lüm?
  lüm is an AI assistant built specifically for mental health professionals. but before you roll your eyes at "another AI tool," let me explain why this one's different. this isn't about slapping a chat interface on a language model and calling it a day. this is about creating something that actually understands and respects the complexity of mental health work.

  ## why this exists
  look, i've spent enough time building AI tools to know that most of them are... well, they're built by tech people for tech people. and that's fine for what it is. but mental health? that's different. that's real people dealing with real struggles, and the professionals helping them deserve better than general-purpose AI tools that don't understand their needs.
  what makes this different? a few things:

  ### privacy that actually makes sense
  you know how most services love to talk about their "military-grade encryption" and their fancy cloud infrastructure? yeah, we're doing something different. lüm keeps all sensitive data on a single, secure computer that we maintain. no AWS. no cloud provider roulette. just straightforward, transparent data storage that mental health professionals can actually trust.

  ### built with, not for
  here's something i learned while working on other projects - you can't build tools for a profession you don't understand. that's why lüm is being developed in direct collaboration with mental health professionals. every feature, every interface choice, every decision about how the AI should behave - it's all guided by the people who'll actually use it.

  ### commands that speak your language
  remember how in my other projects i'm always going on about making things intuitive? well, this takes it to a new level. lüm understands psychological terminology out of the box. want to document observations? just type "@observations" and write naturally. need to format an interview? "@interviews" has you covered. and yes, you can create your own commands because every practitioner has their own style.

  ###the technical stuff (because i can't help myself)
  while i usually dive deep into the tech specs, this time i'll keep it focused on what matters: lüm is built on a custom AI framework that prioritizes:

  - consistent, reliable responses that follow psychological best practices
  - local processing for sensitive data
  - customizable templates that adapt to your workflow
  - ethical AI usage that knows its limits and isn't afraid to admit them

  ## why this matters
  mental health professionals spend too much time on documentation and not enough time with clients. that's not just inefficient - it's harmful. every minute spent fighting with clunky software is a minute not spent helping someone who needs it.
  the social contract
  this is probably the most important part of lüm. we've written a social contract that lays out exactly what we stand for and what users can expect from us. it's not marketing speak - it's a set of promises about:

  ## prioritizing impact over profit
  maintaining radical transparency about how we operate
  never selling out to larger corporations
  keeping our basic services accessible and affordable
  growing through collaboration with our users

  ## what's next
  right now, we're working closely with a group of mental health professionals to refine and improve lüm. we're learning, adapting, and building something that actually serves their needs. if you're a mental health professional interested in being part of this journey, reach out at contact@lum.frgmt.xyz.
  final thoughts
  i usually end my posts with some kind of witty remark, but this time i'll just say this: if you're a mental health professional, we built this for you. not for investors, not for the tech crowd, but for the people doing the vital work of helping others navigate their mental health journeys. we're here to support that work, not disrupt it.
  if you want to learn more, check out lum.frgmt.xyz. and if you're skeptical about another AI tool making big promises? good. you should be. read our social contract, ask us tough questions, challenge our assumptions. that's exactly what we need to build something that actually matters.

  ---

  building something meaningful requires more than just good code. it requires understanding, respect, and a commitment to doing things right. that's what lüm is about. let's make something that actually helps.
  `,
  coverImage: "/images/prismcover.jpg",
  tags: ["AI", "Psychology", "Resources", "Artificial Intelligence"],
  publishDate: "2025-01-28",
  category: "Technology",
  featured: true,
  authorId: "frgmt0",
});

export default lum;
