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