# Risks and Rewards of Vibe Coding

In wake of the recent critical Next.js vulnerability (CVE-2025-29927), which allows attackers to bypass middleware authorization checks, rumors have circulated that the vulnerable middleware code may have been AI generated. While there's no verified evidence confirming this claim, it raises important questions about the emerging practice of "vibe coding" and when it's appropriate to rely on AI for software development. (Again this is purely speculation, please don't sue me Vercel, please)

## What is Vibe Coding?

For people who are unfamiliar, the term "vibe coding" was coined by Andrej Karpathy, former AI leader at Tesla and co-founder of OpenAI, in February 2025. It refers to a coding approach where developers fully trust AI to generate code based on natural language prompts, often without thoroughly reviewing or understanding the code themselves. As Karpathy described it, it's "where you fully give in to the vibes, embrace exponentials, and forget that the code even exists." (That honestly sounds cringey but hey you do you boo).

Vibe coding represents a significant shift from traditional development practices. Instead of meticulously writing each line of code, developers describe what they want in plain language, and AI tools like large language models (LLMs) generate the actual code. This approach enables even those with limited programming knowledge to create functional software by focusing on intent rather than syntax. (On the surface the fact that LLMs have made this much progress and developers have coalesced around this and built up tools for LLMs to use, is impressive).

## The Benefits

There's no denying that AI assisted coding offers substantial benefits that are changing how we approach software development.

First, vibe coding dramatically accelerates development timelines. Tasks that would take skilled developers hours to complete can be generated in minutes by AI. This efficiency boost allows teams to build and iterate faster than ever before, potentially enabling companies to deliver products and features at unprecedented speeds.

Additionally, AI excels at generating boilerplate code; those repetitive, foundational elements that follow standard patterns but consume significant development time. By delegating these tasks to AI, engineers can focus on more creative and complex aspects of their projects. This isn't just about convenience; it's about optimizing human resources for higher-value work.

The accessibility factor cannot be overstated. Vibe coding lowers the barrier to entry for software development, allowing non-technical team members to contribute meaningfully to coding projects. This democratization of development could lead to more diverse perspectives in software creation and empower more people to build tools that solve their specific problems. (I think opening up the gates to a new group of developers, allows them to contribute creatively in ways developers can't. That part cannot be overstated).

As one blog notes, vibe coding "isn't just about speed—it changes the whole game of software development" by making it accessible to non-developers and massively speeding up development processes.

## The Dangers

Despite these benefits, the Next.js vulnerability highlights potential pitfalls of over-reliance on AI-generated code, especially for critical security features.

The vulnerability in question (CVE-2025-29927) affects the middleware functionality in Next.js, which is frequently used for implementing authorization checks, security headers, and request validation. By manipulating a special HTTP header, attackers can bypass these middleware controls entirely, potentially accessing protected resources without proper authentication. (For the non-cybersecurity folk: oopsie bad thing).

This case demonstrates one of the biggest risks of vibe coding: **security vulnerabilities**. AI models are trained on vast collections of existing code, which may include outdated patterns or security anti-patterns. Without proper security expertise to review the generated code, these vulnerabilities can make it into production systems, creating serious security risks.

For experienced engineers, blind acceptance of AI generated code can lead to integrating solutions they don't fully understand. When issues inevitably arise, debugging becomes significantly more challenging. As one source cleverly puts it, "Vibe coding is all fun and games until you have to vibe debug." (Me personally I like the term 'vibe check(ing)').

For novice developers, the risks are even greater. Without a solid foundation in programming fundamentals, they may lack the ability to evaluate whether AI generated code follows best practices or contains potential security flaws. This knowledge gap can lead to propagating poor coding standards and building vulnerable systems without realizing it.

Performance and optimization concerns also arise with vibe coding. AI may prioritize generating functional code quickly over creating efficient solutions. This can result in applications that work but suffer from unnecessary overhead, poor scalability, or excessive resource consumption.

## My Workflow: Finding the Right Balance

In my personal development practice, I've found a balanced approach that leverages AI assistance while maintaining control over the final code. I use Aider with Zed as my IDE, which positions AI as a pair programmer rather than taking over the entire development process.

This setup allows me to benefit from AI's capabilities in specific contexts. For example, when implementing payment functionality, instead of spending hours digging through Stripe documentation, I can simply ask, "Can you fix my payment method?" and get a solution quickly. This saves valuable time on common tasks while keeping me in the driver's seat. (With the occasional lane assist... I'm a bad driver).

I've found that current AI models excel at generating boilerplate code and implementing standard patterns but may struggle with more niche or cutting edge features. In these cases, I need to review and modify the AI's suggestions to fit my specific requirements.

## My Personal Vibe Coding Experience

I recently attempted to redesign my website using AI assistance. Initially, I asked for a portfolio site design, and the AI provided a basic, cookie cutter layout that didn't match my vision. After refining my prompt with more specific details, the results improved but still didn't capture what I wanted.

After about two hours of back-and-forth iterations, I abandoned the purely AI driven approach and manually refined the styles myself. One particular frustration was the AI's tendency to default to Tailwind CSS, which I don't prefer. I had to rework the styles to use plain CSS instead.

Additionally, I needed to implement Cloudflare-specific optimizations that the AI likely wasn't familiar with beyond basic techniques like preloading and prerendering. This experience highlighted both the promise and limitations of current AI coding tools—they provide a useful starting point but often require substantial human refinement for specialized requirements.

Now, I think my site embodies my style, my favorite colors, and overall represents me, not the AI.

## Should You Vibe Code?

The question of whether vibe coding is appropriate doesn't have a one-size-fits-all answer. Context matters tremendously.

For personal projects with limited scope and minimal security concerns, vibe coding can be perfectly acceptable. If you're building a simple TODO app for personal use or automating repetitive tasks, the speed and convenience of AI-generated code may outweigh potential drawbacks.

Similarly, using AI to handle routine coding tasks can significantly improve productivity. There's little reason to manually write standard code patterns when AI can generate them quickly and reliably. This approach aligns with the principle of working smarter, not harder.

However, for applications handling sensitive information, processing payments, or serving a large user base, relying solely on vibe coding becomes problematic. Critical systems require thorough understanding, extensive testing, and expert human oversight to ensure security, performance, and maintainability.

As AI-generated code becomes increasingly prevalent in our digital ecosystem, users should approach software with appropriate caution. For open-source projects, reviewing the source code when possible can provide insight into its quality and security. For commercial products, researching the development team's approach to security and quality assurance becomes even more important.

## Finding the Sweet Spot

The future of software development likely lies in finding the optimal collaboration between human expertise and AI capabilities. Rather than viewing vibe coding as an all-or-nothing proposition, we should see it as another tool in our development toolkit; powerful when used appropriately, potentially dangerous when misapplied.

For now, a sensible approach involves using AI to accelerate development while maintaining human oversight for critical components. Understanding the fundamentals of programming, security principles, and best practices remains essential, even as AI takes on more coding responsibilities. (Basically understand what the AI is writing).

By maintaining this balance, we can leverage the extraordinary capabilities of AI coding assistants while mitigating their inherent risks. The Next.js vulnerability serves as a timely reminder that even as we embrace new technologies, we must remain vigilant about their limitations and potential pitfalls.

In the end, the most successful developers won't be those who rely exclusively on either traditional coding or vibe coding, but those who skillfully combine both approaches based on the specific requirements and context of each project. (Don't shut down/out developers who use AI because it would be denying them a resource that as of today is fairly good. It would be like me telling you "you can't use google." you simply wouldnt succeed as a developer).