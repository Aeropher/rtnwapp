# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is an **issue tracking repository** for the RightNow productivity app - NOT a source code repository. It exists solely for community interaction, bug reports, and feature requests.

## Key Information

- **No source code**: This repository contains only issue templates and documentation
- **Application**: RightNow is a capacity-first productivity app
  - Web app: https://rtnw.app
  - Android app: Currently in closed testing
  - iOS app: Coming soon
- **Private development**: All actual development happens in a separate private repository

## Repository Structure

```
rtnwapp/
├── README.md                    # Main repository documentation
├── .gitignore                   # Git ignore file
├── CLAUDE.md                    # This file
├── index.html                   # GitHub Pages landing page
├── style.css                    # CSS styling for the website
├── _config.yml                  # GitHub Pages configuration
└── .github/
    └── ISSUE_TEMPLATE/
        ├── bug_report.md        # Bug report template
        ├── feature_request.md   # Feature request template
        ├── question.md          # Question template
        └── config.yml          # GitHub issue configuration
```

## Common Tasks

Since this is an issue-only repository with a GitHub Pages site, common tasks involve:
- Updating issue templates
- Modifying the README for clarity
- Adjusting issue configuration settings
- Updating the landing page (index.html) content
- Modifying website styling (style.css)

## Important Notes

- Security issues should be reported using GitHub's private vulnerability reporting, not as public issues
- The repository uses GitHub issue templates that automatically appear when users create new issues
- Response time expectations are documented in the README
- GitHub Pages site will be available at https://[username].github.io/rtnwapp/ once enabled
- Remember to update the GitHub username in index.html links and _config.yml

## Design Philosophy

### Website Design
The website follows a clean, minimalist design approach that reflects RightNow's core philosophy of "doing less to achieve more":
- **Green color scheme**: Represents growth, productivity, and a fresh approach to task management
- **Soft, rounded edges**: Creates a friendly, approachable feel that reduces stress
- **Light background with subtle green accents**: Maintains visual clarity and reduces cognitive load
- **Clear visual hierarchy**: Important actions are prominent, secondary information is subdued

### Blog Design
The blog is intentionally designed for continuous, uninterrupted reading:
- **No individual post pages**: All content is on one page to encourage flow and reduce clicks
- **Infinite scroll**: Seamlessly load more posts as you read, maintaining engagement
- **Minimal metadata**: Only timestamps shown, keeping focus on the content
- **Chronological order**: Latest updates at the top for returning visitors
- **Simple JSON storage**: Easy to update by adding new entries to blog-posts.json
- **Responsive cards**: Each post is contained in a soft-bordered card for visual separation

This design philosophy extends the RightNow ethos - just as the app helps you focus on what matters without overwhelming complexity, the website and blog provide information without unnecessary navigation or distractions.

## Writing Style and Voice

### Alex's Writing Tone
When writing blog posts or content as Alex, maintain these characteristics:

**Voice Qualities:**
- **British English**: Alex is British and uses UK spelling and expressions
- **Conversational and informal**: Uses contractions freely ("I'm", "don't", "it's")
- **Self-aware and honest**: Openly discusses being torn about issues, admits uncertainties
- **Humble**: Acknowledges limitations ("I know there is simply no such thing as perfect")
- **Enthusiastic but grounded**: Excited about the project but realistic about challenges
- **Personal**: Shares motivations and feelings openly

**Writing Patterns:**
- Often starts sentences with conjunctions ("And", "So")
- Uses humor and casual expressions ("lol", emoticons like ":-)")
- Employs parenthetical asides for additional thoughts
- Sometimes trails off with ellipses for effect ("Somehow... I'm not sure how")
- Prefers shorter paragraphs for online readability

**Content Approach:**
- Transparent about being a solo developer with a full-time job
- Open about using AI and other technologies
- Focuses on personal learning and growth
- Acknowledges the community and asks for patience
- Balances technical topics with personal perspective

**Key Phrases and Style:**
- "I am Alex" (not "I'm Alex" in introductions)
- "pretty cool" for expressing enthusiasm
- "having a go at" instead of more formal "attempting" (British expression)
- "get to grips with" rather than "get a handle on"
- Direct address to readers ("So I hope you don't mind...")

**British Language Notes:**
- Uses UK spelling: "fulfils" (though accepts US spelling in code/tech contexts)
- British expressions: "having a go", "full-time" (hyphenated), "at the end of the day"
- Understated enthusiasm typical of British communication style
- Polite self-deprecation and asking for patience

Remember: Alex writes like someone talking to a friend about their passion project - genuine, slightly nerdy, and refreshingly honest, with a distinctly British voice.