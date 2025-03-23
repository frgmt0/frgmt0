# Pocket: What it is and where it's at

I've always had a problem with code. Not writing it (that part I enjoy... for now) but keeping track of all the clever little solutions I come up with.

That's why I built Pocket. It started as a simple idea: what if I had one central place where I could store all those useful code snippets? Not just dump them somewhere, but actually organize them, search through them intelligently, and easily reuse them when needed.

## How it started

Back in March 2025 (Feburary if you count planning), I released the first version of Pocket (v-pocket-A1). It was pretty basic with just enough functionality to store and retrieve snippets, some rudimentary search capabilities; nothing big. The core idea was there though: save code snippets, tag them, find them later.

I quickly realized that just storing snippets wasn't enough. I needed a way to organize them in a meaningful way. That's when I introduced the concept of "backpacks" which are essentially folders, but with a more adventurous name. Each backpack could contain related snippets, making it easier to find what you're looking for when you've got hundreds of saved bits of code.

But organization only gets you so far. The real problem was finding snippets when you couldn't remember exactly what you called them or what tags you used. I invested a lot of time into building a search engine that could understand natural language queries. Now instead of having to remember exact filenames or tags, you could just search for "that thing with the loop that processes JSON" and Pocket would figure out what you meant. By no means is this a top tier engine, but it is pretty good.

## Version Control

Early on, I had this grand vision of Pocket having its own version control system. Not a wrapper around Git, but something custom-built specifically for code snippets. The idea was that you could track changes to your snippets, revert to older versions, branch and merge different variations. All the stuff you'd expect from a VCS, but tailored for the pocket codebase.

I spent weeks building this feature, and it technically worked. But as I got deeper into it, I started questioning whether this was really solving a problem people had. Did developers really need another VCS to learn? Would the complexity of migrating between Pocket's VCS and Git outweigh any benefits?

After about a day of focused effort trying to make the Git migration seamless, I called it quits. It wasn't worth it. Pocket was supposed to make developers' lives easier, not more complicated. So in the R1 series, I ripped out the VCS functionality entirely. It hurt to throw away all that work, but ultimately I think it was the right decision.

My dream of a custom VCS was fulfilled, but it wasn't worth the complexity it added. Sometimes you have to kill your darlings for others. But Pocket's VCS lives on within the pocket codebase.

## Shell Integration

The real breakthrough for me came with the shell integration features. I realized that for Pocket to truly become part of a developer's workflow, it needed to integrate deeply with the terminal; the place where we spend most of our time.

I released version v-pocket-R3C/B2-ncR2 (yes, I have an unusual versioning scheme and I will be posting a blog about that soon), which introduced the `blend` command. This added two powerful capabilities:

First, shell extensions - scripts that get sourced when your shell starts, giving you access to aliases and functions in your regular terminal. This meant you could add custom commands, environment variables, or whatever else you needed to make your terminal environment more productive. For me I use this feature everyday and have added in my custom alias for pocket and many more CLI tools. 

Second, executable hooks - scripts that you could run directly with a simple `@name` prefix. This was a game-changer for my automations. Instead of typing out long complex commands, you could create a hook once and then just call it with `@hook_name` whenever needed.

The shell integration transformed Pocket from a standalone tool into an extension of the terminal itself. It wasn't just another command to remember, but it became part of the environment, always available when needed. One more reminder that pocket was on your system

## Behind The Scenes

Under the hood, Pocket has a few unique things:

First, a modular architecture centered around what I call the "card" system. Think of cards as plugins that extend what the CLI can do without bloating the core.

Second, as previously mentioned, operates within its own custom built VCS.

The core of Pocket consists of several key modules:

The `main.rs` file serves as the entry point for the application, handling command-line arguments and routing to appropriate card handlers. The `cli` directory contains the command-line interface definition using Clap along with handlers that route commands to the right places. Error handling is standardized through `errors.rs`, which defines custom error types and utilities used throughout the application. The `logging.rs` module provides consistent logging and user-friendly console output. The configuration system in `config.rs` manages application settings, supporting both global and card-specific options stored in TOML files. This makes it easy to customize Pocket to your needs without touching code.

Data models live in the `models` directory, defining structures like `Entry` (representing a saved snippet), `Backpack` (a collection of entries), and `ContentType` (an enum for different content types). Persistence is handled by the `storage` module, with a `StorageManager` that coordinates all data operations. This abstraction makes it possible to change the underlying storage mechanism without affecting the rest of the application. Search functionality, one of Pocket's most important features, is implemented in the `search` module. The `SearchEngine` class provides algorithms for both fuzzy and semantic searching, making it possible to find snippets even with imprecise queries.

But the real power comes from the card system in the `cards` directory. Each card implements the `Card` trait, which defines basic metadata (name, version, description), lifecycle methods (initialization and cleanup), and command handling (execution and listing available commands).

The built-in cards include the Core Card for basic functionality (search, listing, backpack management), the Blend Card for shell integration, the Snippet Card for managing code snippets, and the Backup Card for handling backups and versioning.

This modular approach makes it easy to extend Pocket without touching the core code. Want to add a new feature? Just create a new card that implements the `Card` trait, and you're good to go. And since Pocket is a library in addition to a CLI tool, you can access the same core functions of Pocket for your custom cards. Pretty nifty if you ask me.

## Workflows

One of the most powerful features of Pocket is workflows (which I call "lints" in the codebase). These let you chain commands together for automation:

For example, you could create a workflow that searches for a snippet, inserts it into a file, and then runs a linter:

```bash
pocket lint "search 'validation' > insert src/utils.js > run eslint src/utils.js"
```

You can also save workflows for future use:

```bash
pocket lint --save validate_util "search 'validation' > insert src/utils.js > run eslint src/utils.js"
```

And then run them with a simple command:

```bash
pocket lint validate_util
```

This has been a game-changer for how I manage the Pocket codebase itself. About 70-80% of the workflows were initially generated by AI. I found that providing enough context to Claude usually produced syntactically correct commands that actually worked. These workflows have become the backbone of how I develop Pocket, allowing me to make consistent changes without having to remember complex command sequences.

## More on AI

Speaking of AI, it's played a significant role in Pocket's development. About 50% of the codebase written after the initial release (v-pocket-A1) has been AI-assisted in some way. This includes everything from tab completions to directly copying code from Claude and using Claude Code.

The most interesting part has been using AI to help with managing my horrific way of writing code. If you look at the codebase before (and during to some extent) AI coding, nothing was modular, everything was rigid, but AI has been a significant help in boosting the power of cards over core integrations.

This isn't just an interesting footnote as it's a glimpse into how development is evolving. Tools and apps in general are being developed with AI assistance. Pocket is no different. I would be a fool to reject a resource. I couldn't imagine developing any tool without Google, StackOverflow, or W3 Schools, so AI to me isn't any different. In the future, you can expect some more AI integrations and hopefully an expanse of new features because of it.

## How to Use Pocket

If you're intrigued and want to try Pocket yourself, here's how to get started:

First, check out the github repo [here](https://github.com/frgmt0/pocket-cli.git)

Installing is simple with Cargo:

```bash
cargo install pocket-cli
```
This gives you access to the main `pocket` binary as well as the library if you are working on custom cards and need that.

Once installed, you can start saving snippets:

```bash
# Save a snippet from a file
pocket add file.js

# Save a snippet with inline text
pocket add -m "console.log('why am I hard-coding this?');"

# Open an editor to create a snippet
pocket add -e

# Save to a specific backpack
pocket add -b backpack_name file.js
```

When you need to find a snippet later, you can use the search command:

```bash
# Search with natural language
pocket search "that validation function for email addresses"

# Search with exact matching
pocket search "email validation" --exact

# Search in a specific backpack
pocket search "validation" --backpack form_utils
```

And once you've found what you need, you can insert it into a file:

```bash
pocket insert ID file.js
```

The shell integration features are particularly useful:

```bash
# Add a shell script as an extension (sourced at shell startup)
pocket blend my_aliases.sh

# Add a script as an executable hook (can be run with @name)
pocket blend --executable deploy_script.sh

# After restarting your shell, run the hook with:
@deploy_script
```

For more complex automation, you can use workflows:

```bash
# Chain commands together
pocket lint "search 'query' > insert file.js"

# Save a workflow for future use
pocket lint --save workflow_name "search 'query' > insert file.js"

# Run a saved workflow
pocket lint workflow_name
```

And if you want to extend functionality, you can use the card system:

```bash
# List available cards
pocket cards list

# Add a card from GitHub
pocket cards add card_name https://github.com/username/pocket-card-name

# Build the card
pocket cards build card_name

# Run a card command
pocket cards run card_name command [args...]
```
While Pocket has no centralized marketplace for cards, being able to add from GitHub is particularly powerful, as it's the next best thing.

## The Road Ahead

So what's next for Pocket? I have plenty of ideas:

I'd like to figure out how to better integrate Pocket into existing workflows. Right now it feels somewhat separate from other development tools, and I'd like to bridge that gap. Maybe integrations with popular editors, or better support for sharing snippets between team members.

The search functionality could be improved with more advanced AI techniques. Imagine being able to describe what you want a function to do, and having Pocket find the closest match in your collection of snippets.

I'm also interested in exploring language-specific features. Different programming languages have different patterns and idioms, and Pocket could be smarter about understanding and managing those differences.

Collaborative features are another area of interest. Right now Pocket is very much a personal tool, but there's potential for sharing snippet collections within teams or even publicly.

That said, I'm not actively working on any of these features right now. Pocket in its current form serves my needs well, and I'm content with that for the moment. If you see something missing that you'd like to add, contributions are always welcome!

## The Philosophy

At its core, Pocket reflects a philosophy about how we work with code. It recognizes that much of programming isn't about writing new code from scratch, but rather about remembering and reusing patterns we've encountered before.

It's about acknowledging our limitations as humans. We simply can't remember everything we've ever written. Rather than fighting against this limitation, Pocket embraces it and provides a system to compensate for it.

It's also about reducing friction in the development process. Every time you have to stop what you're doing to search for a solution you know you've implemented before, you're breaking your flow state. Pocket aims to minimize these interruptions by making it fast and easy to find and reuse code.

Finally, it's about personal ownership of your code library. As developers, we build up a personal collection of solutions, patterns, and techniques over time. Pocket gives you a way to intentionally curate that collection rather than letting it scatter across dozens of projects and repositories.

In the end, Pocket is a tool built by a developer for developers, designed to solve a real problem we all face. It's not perfect, and it's certainly not for everyone, but if you've ever found yourself thinking "I know I've solved this before, where did I put that code?", then maybe it's worth giving Pocket a try.

## Join In

If you're interested in trying Pocket or contributing to its development, check out the GitHub repository at [github.com/frgmt0/pocket-cli](https://github.com/frgmt0/pocket-cli) or join the Discord community at [discord.gg/YDB5Kxf2xg](https://discord.gg/YDB5Kxf2xg).

The current version is `v-pocket-R1`, with a focus on stability and core functionality. There's plenty of room for new ideas and improvements, so don't hesitate to get involved if you see something that could be better.