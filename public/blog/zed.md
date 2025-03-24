# Why I Settled on Zed

I've been coding for about 10 years now, and like many developers, my choice of IDE has evolved over time. After trying almost everything out there, I wanted to share some thoughts on the current IDE landscape and why I ultimately settled on Zed.

## JetBrains

JetBrains makes incredible IDEs. There's no denying that tools like IntelliJ, PyCharm, and WebStorm offer some of the best language-specific features you can find. Their refactoring tools are second to none, and the code completion is genuinely helpful rather than annoying.

The problem? They're resource hogs. Even on decent hardware, JetBrains products can feel sluggish, especially when opening large projects. The indexing process is particularly painful, especially when you just want to make a quick edit, but the IDE decides it's time to index everything for the next 10 minutes.

Then there's the pricing. While I understand the value proposition, maintaining subscriptions for multiple specialized IDEs gets expensive quickly. For teams or well-funded projects, this might not be an issue, but it's definitely something to consider for independent developers. Although JetBrains offers free community versions of their IDEs, they often miss a lot of the features you might get if you paid for them.

## VSCode

VSCode started as a promising lightweight alternative to JetBrains (although chronologically this may not be true, VSCode was definitely intended to be a lightweight version of the JetBrains IDEs). The extension ecosystem is genuinely impressive; you can transform it into a specialized environment for practically any language or framework. It's free, open source (mostly), cross-platform, and has great community support.

But over time, VSCode has fallen victim to feature creep (much like my projects). Each extension adds overhead, and before you know it, you're dealing with the same performance issues you were trying to avoid by not using JetBrains. I've had instances where VSCode would inexplicably spike to 100% CPU usage for something trivial. There have also been moments when my RAM usage would hit nearly 10GB on VSCode alone, which definitely annoyed me.

The extension quality is also hit-or-miss. For popular languages (Python, Rust, C, etc.), you'll find excellent support, but venture into something less mainstream (F#, Swift, MATLAB), and you might deal with half-baked extensions that cause more problems than they solve.

## Vim/Neovim

Vim and its modern counterpart Neovim represent the opposite end of the spectrum. They're incredibly lightweight and blazing fast, with a modal editing approach that can make you extremely efficient once mastered.

Neovim has made great strides in modernizing the experience with better defaults, async support, and a more accessible plugin system. You can now get many IDE-like features through LSP integration.

The drawback? The learning curve is very steep. Despite several earnest attempts to make Vim my primary editor, I've never fully gotten over the hump where it feels more efficient than alternatives. There's also the time investment in configuring everything just right because Vim doesn't do much out of the box. After all, Vim is a text editor, not a fully featured, git integrated, extension marketplace IDE. It edits text and sometimes that's all you need.

For those who push through that initial pain, the rewards can be substantial. But it's definitely not for everyone.

## Why I Chose Zed

After bouncing between these options for years, I stumbled upon Zed a few times and at first I hated it. I hated how my extensions couldn't transfer over and all the extensions were basically just themes. I hated how little (at the time) git integration it had, and virtually no TAB to complete. So I left it and went back to VSCode, Cursor, then Windsurf, then back to Zed because I couldn't take all the bloat and resource intensivity of those VSCode-alikes. 

Built by the creators of Atom but written in Rust, it delivers on the promise of being both lightweight and feature-rich. On my Mac with 64GB of unified memory, Zed absolutely flies. Startup is instant, large files open without hesitation, and I've yet to encounter any performance hiccups. But good performance alone wouldn't be enough to make me switch.

What makes Zed unique is its custom tech stack. Unlike VSCode (Electron) or newer editors built with Tauri, the Zed team created their own custom UI framework called GPUI. This is a GPU-accelerated UI framework written in Rust that renders UI elements directly with the GPU, similar to how video games render graphics. It's a hybrid immediate and retained mode framework designed specifically for high performance. It means no chromium, no lock in to frameworks like tauri (although better then Electron), and I appreciate the effort. Sometimes theres a little bug, and it gets patched the next day.

This choice was deliberate because after their experience building Atom with Electron, the Zed founders realized that web technologies couldn't deliver the performance they wanted. They initially considered using Electron with a Rust core, but gradually shifted to a fully custom approach with GPU acceleration to maximize speed.

The results speak for themselves. By using Rust and GPU rendering, Zed can consistently deliver frames at 120 FPS, maintaining a level of responsiveness that feels immediate. This technical foundation is a key reason why the editor feels so snappy. On top of that, near native MPS (Metal Performance Shaders) support, makes it so I can get the most out of my mac.

What also really sold me was how Zed manages to include all the essential features I need without the bloat. It has great syntax highlighting, solid LSP integration for intelligent code completion, and clean Git integration. The UI is minimal but thoughtfully designed.

The multiplayer features are surprisingly useful too. Real-time collaboration that actually works without lag or conflicts for all my non-existent friends? YAY! Although I never use this feature, its nice to know I won't have to install an extension and set up something just to show off my code once. With Zed it just works.

And after about 3 months of daily usage, I've found that I don't actually miss many of the extensions I thought were essential in VSCode. Zed provides a focused set of core features that cover 95% of my needs. For the remaining 5%, I've either found workarounds or realized they weren't as crucial as I thought.

Is Zed perfect? Of course not. It's still relatively young, and there are occasional rough edges. The extension ecosystem isn't as vast as VSCode's. But the core experience is so solid that these limitations feel minor in comparison.

## Finding What Works for You

The "best" IDE is ultimately about personal preference and specific needs. If you work primarily in one language ecosystem and value deeply integrated tooling, JetBrains products might justify their resource demands. If you need extensive customization, VSCode might be worth the bloat. If you value raw editing efficiency and don't mind the learning curve, Vim/Neovim could be your best option.

For me, Zed strikes the perfect balance – fast, focused, and just featured enough. It feels like using a tool that was designed by someone who understands my frustrations with other IDEs.

Everyone's mileage will vary, but if you've found yourself frustrated with sluggish performance or unnecessary complexity in your current IDE, Zed is definitely worth a look. In the end, your IDE should make coding more enjoyable, not add friction to your workflow.