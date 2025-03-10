import BlogPost from "../../models/BlogPost";

const versioning = new BlogPost({
    id: "03102025-tech",
    title: "The Versioning Manifesto: A Better Alternative to SemVer's Tyranny",
    content: `
# The Versioning Manifesto: A Better Alternative to SemVer's Tyranny

*The document about versioning you'll actually enjoy reading*

## Introduction: The Quiet Crisis in Your Codebase

Let's start with a truth we all know but rarely admit: software versioning is fundamentally broken. We've been fumbling around with increasingly complex versioning schemes that somehow manage to be simultaneously too rigid and too ambiguous. And yet, we all pretend this system is working just fine while secretly cursing it at 3 AM when trying to understand why our dependency tree just imploded.

I'm here to declare what we've all been thinking: our current approaches to versioning—particularly Semantic Versioning—aren't just inadequate; they're actively harmful to development ecosystems and user sanity. But unlike most rants that identify problems without solutions, I've developed a practical alternative that addresses the fundamental flaws in how we communicate software changes.

This isn't just another dev complaining about SemVer. This is a call to arms, a practical manifesto, and most importantly, a way out of the versioning hellscape we've collectively created.

## The Rise and Reign of Semantic Versioning: A Brief History

Before we demolish SemVer, let's understand how we got here. Semantic Versioning (SemVer) was proposed by Tom Preston-Werner in 2013 as a solution to what was accurately described as "dependency hell." The concept was elegant in its simplicity: a version number in the format of MAJOR.MINOR.PATCH where MAJOR versions contain incompatible API changes, MINOR versions add functionality in a backward-compatible manner, and PATCH versions make backward-compatible bug fixes.

This promised a world where, by simply looking at a version number, developers could understand the risk and impact of an update. Increment the major version when you break things, the minor version when you add features, and the patch when you fix bugs. What could possibly go wrong?

Well, as it turns out, just about everything.

SemVer was rapidly adopted across the software industry because it appeared to solve a genuine problem. Package managers like npm adopted it as their standard. Documentation began to reference it as if it were some immutable law of nature rather than a human convention. Entire ecosystems built their foundations on these three little numbers, treating them as a cryptographic guarantee of compatibility.

And for a brief moment, it felt like sanity. We had a common language to express change. We had rules. We had structure.

Unfortunately, we also had humans involved.

## The Spectacular Failure of Semantic Versioning: Why Your v1.0.0 is Lying to My Face

The catastrophic flaw in SemVer isn't in its intentions, but in its assumptions about how software actually evolves and how humans actually behave. Let me illustrate why the whole system is a comedy of errors:

### 1. The "What Even Is a Breaking Change?" Problem

SemVer assumes developers can accurately predict when they're making a breaking change. This is like assuming I can predict exactly how many tacos I'll want for dinner next Wednesday—wildly optimistic and almost certainly wrong.

A seemingly innocent patch to fix a security vulnerability might change behavior that someone was unwittingly depending on. That bug you fixed? Turns out it was a critical feature for 30% of your users who built workarounds atop it. That optimization you made? It just broke 12 different edge cases you didn't even know existed.

In complex systems, the butterfly effect isn't just real; it's inevitable. Every change is potentially breaking for someone. SemVer pretends we have perfect knowledge of our systems, which is a flattering but dangerous fantasy.

### 2. The "When Do We Hit 1.0.0?" Dilemma

Tell me if this sounds familiar: v1.0.0 might be someone's first production release; v0.1.0 might be someone else's first production release; v0.0.1 might be yet another team's stable, been-in-production-for-three-years release; v0.0.0-alpha.12-hotfix3-please-god-work might be what's currently powering critical infrastructure somewhere.

There's no consensus on when software is "ready" for the magical 1.0.0 designation. Some projects sit at 0.x forever despite being used in production worldwide (I'm looking at you, Redis, which only reached 1.0 after years of production use). Others jump to 1.0 immediately and then agonize over whether their first bug fix is a 1.0.1 or a 1.1.0.

The result? Version numbers that communicate almost nothing useful about actual software maturity or stability.

### 3. The "Comparing Versions Is a Nightmare" Catastrophe

Quick quiz: Which of these updates is more significant? v12.72.111 → v12.73.0 or v3.1.4 → v3.2.0? Without context, it's impossible to tell. The version numbers themselves are untethered from any meaningful measure of change magnitude. 

In the npm ecosystem, every PATCH update might contain critical security fixes. Or not. Every MINOR update might introduce significant new features. Or just rename an internal variable. Every MAJOR update might completely overturn your world. Or just remove a deprecated function nobody used anyway.

### 4. The "Major Version as Marketing" Corruption

Let's be blunt: version numbers have been corrupted by marketing concerns. Major versions are often driven by promotional needs rather than technical ones. We've all seen projects jump from v2.9 to v4.0 with no significant breaking changes, simply because "v3" didn't sound impressive enough for the launch event.

When Firefox jumped from version 4 to version 5 in just three months back in 2011, it signaled the beginning of the end for meaningful major versions. Chrome followed with rapid major version increments, and now we have browsers with version numbers in the hundreds that tell us absolutely nothing about compatibility or feature sets.

This marketing-driven approach undermines the entire premise of SemVer by severing the connection between version numbers and actual code changes.

### 5. The "Zero Doesn't Count" Loophole

The most pernicious aspect of SemVer might be its handling of 0.x versions. According to the specification, anything before 1.0.0 can change in any way at any time. This creates a perverse incentive to never reach 1.0, giving rise to what's been sarcastically dubbed "ZeroVer"—the practice of keeping software at version 0.x indefinitely to avoid making compatibility promises.

Some of the most critical software infrastructure in the world has operated under this loophole, creating a wild west where breaking changes can happen in any increment, and the entire promise of SemVer is rendered meaningless.

## A Better Way Forward: The Alphabet Soup That Actually Makes Sense

Now that we've torn down the crumbling edifice of SemVer, let's build something better. I propose a more expressive, honest, and human-readable versioning system that prioritizes communication over artificial constraints.

The foundation of this new approach uses letters as the primary signifier of stability and intent. We start with "A" for Alpha, indicating software that's experimental and seeking feedback. Don't expect it to work flawlessly, but we desperately need your input to shape it. Next comes "B" for Beta, representing software that's still buggy but not completely unusable—proceed with caution, but it's stable enough for testing in non-critical environments. When we reach "C" for Candidate, everything looks good and we're just refining a few things before the official release. Finally, "R" stands for Release, signifying software that actually works as promised and is ready for production use.

Numbers still have their place, but they indicate iteration rather than dictate version status. This means we transform the cryptic v12.72.111 into the immediately comprehensible **v-projectname-R12**.

At a glance, you know this is a stable release (R), it's the 12th iteration of stable releases, and which project it belongs to (no more guessing which dependency is being referenced). The cognitive load of parsing version numbers drops dramatically, replaced with clear communication about what actually matters: stability and project identity.

### Handling Compatibility: The Part You Actually Care About

The fatal flaw of SemVer is its assumption that compatibility can be expressed through a rigid numbering system. Instead, let's be explicit about compatibility. When a release isn't compatible with previous versions, we simply add "-nc" (not compatible) to create something like **v-projectname-R12-nc**. This directly communicates that despite being a stable release, it will not work with previous versions.

We can get even more specific when needed. If a new release is only compatible with version 11 or newer, but not with anything older, we can express that with **v-projectname-R12-nc11<**. This approach acknowledges the reality that compatibility isn't a boolean flag that tracks linearly with version numbers. Sometimes you're compatible with version 7 through 9, but not with 10 or 11. Our versioning should be able to express these real-world scenarios rather than forcing them into an artificial numeric scheme.

### Going Beyond Numbers: Codenames for Context

For projects that want to escape the tyranny of numbers entirely, codenames provide a memorable and distinct identity for each release. Instead of struggling to remember if you're on v3.2.1 or v3.1.2, you can simply reference **v-projectname-Thundercat**, a release with a distinct identity that's easier to reference in discussions and documentation.

Compatibility remains clear even with codenames. **v-projectname-Thundercat-nc!ref<MoonRabbit>** explicitly states that this release isn't compatible with the MoonRabbit release. Codenames serve a dual purpose: they give each release a memorable identity while breaking the psychological attachment to numeric increments. Nobody expects Thundercat to be an incremental improvement over MoonRabbit – they understand these are distinct releases with potentially significant differences.

## The Benefits: Why This Actually Matters

This new versioning approach offers several critical improvements over the SemVer paradigm. First and foremost, it's designed for human comprehension rather than machine parsing. When I see **v-projectname-R12**, I immediately know what I'm dealing with. There's no ambiguity about whether this is a major or minor update, a pre-release or a stable build. The information I need is right there, prominently displayed in a format my brain can process without consulting a specification document.

Rather than trying to encode compatibility information into a numeric scheme, this system makes compatibility explicit. No more guessing whether a MINOR increment might actually contain breaking changes that the developers didn't recognize. The compatibility information is stated clearly, removing the burden of interpretation from users.

This system provides flexibility for different types of projects while maintaining a consistent basic structure. Library developers can emphasize compatibility information, application developers might focus on release status, and both can communicate effectively within the same framework. It adapts to the needs of diverse software ecosystems without losing its essential clarity.

By including the project name in the version itself, we eliminate confusion in complex dependency graphs. Seeing **v-react-R18** and **v-lodash-R4** makes it immediately clear which project each version refers to, a significant improvement over seeing just "18.2.0" or "4.17.21" in error messages or logs. Context is built into the versioning scheme itself, reducing cognitive overhead in debugging and dependency management.

By separating the release stage (A/B/C/R) from the iteration number, we allow for marketing needs without compromising technical clarity. A company can market their "Version 5" while the actual version remains **v-product-R5**, maintaining consistency in both domains. This decoupling of marketing and technical concerns prevents the distortion of version numbers for promotional purposes.

## The Potential Downsides: Let's Be Honest

No system is perfect, so let's address the potential challenges of this approach with clear eyes. Transitioning existing projects from SemVer to this system would require education and tooling updates. Package managers, dependency resolution algorithms, and developer workflows are currently built around SemVer, which means adoption would need to be gradual. This migration complexity is a real barrier, though not an insurmountable one.

The proposed format results in longer version strings than the compact MAJOR.MINOR.PATCH format. This verbosity could be seen as excessive, though I would argue the additional clarity is worth a few extra characters. In a world where we regularly work with GUIDs and SHA hashes, slightly longer version strings seem like a minor concern compared to the benefits they provide.

Any new system requires learning, and developers comfortable with SemVer might resist change. The initial period of adoption would involve some confusion as teams adjust to the new paradigm. This learning curve is inevitable with any significant improvement to existing practices, but the long-term benefits outweigh the short-term adjustment period.

One of SemVer's strengths is its widespread adoption and standardization. A new versioning approach would need to achieve critical mass to realize its full benefits across ecosystems. This standardization challenge is perhaps the most significant hurdle, as it requires collective action rather than individual decisions.

More expressive version strings could be more complex to parse programmatically, potentially requiring more sophisticated tooling for automated version handling. While this is true, it's also an opportunity to build tools that better reflect the nuanced reality of software evolution rather than forcing that reality into an oversimplified model.

## The Path Forward: A Versioning Revolution

Will this approach require more typing? Yes. Will it save countless hours of confusion and misery? Also yes. Is it worth it? Absolutely. The software industry has reached a scale and complexity where our tooling and conventions must evolve. Versioning isn't just a technical nicety; it's a critical communication channel between developers, between teams, and between humans and machines.

By adopting a more expressive, intentional versioning scheme, we can reduce confusion around software updates, provide clearer signals about compatibility and stability, align technical reality with user expectations, and create a more honest representation of software evolution. These benefits far outweigh the costs of transition and adaptation.

## Conclusion: It's Time for Change

SemVer served its purpose as a stepping stone toward more structured versioning, but its limitations have become increasingly apparent as our software ecosystems have grown in complexity. We've outgrown the simplistic MAJOR.MINOR.PATCH model, and it's time for a paradigm that better reflects the nuanced reality of modern software development.

This manifesto isn't just a critique—it's an invitation to reimagine how we communicate about software change. It's a call to prioritize clarity over tradition, and human understanding over machine convenience. It's a recognition that our tools should serve us, not force us into artificial constraints that obscure rather than clarify.

Join me in demanding versioning that speaks human, not calculator. Your future self, desperately debugging production at 3AM, will thank you.

*This has been my TED talk on versioning. If you've made it this far, you deserve a cookie and probably agree with me, or at least respect my dedication to this extremely niche hill I've chosen to die on.*
    `,
    summary: "A better way to version software",
    coverImage: "images/versioning.jpg",
    category: "technology",
    date: "2025-03-10",
    tags: ["versioning"],
    authorId: "frgmt0",
    publishDate: "2025-03-10",
});

export default versioning;