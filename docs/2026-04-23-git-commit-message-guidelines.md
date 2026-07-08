---
title: Git Commit Message Guidelines
alias: git-commit-message-guidelines
created: '2026-04-23'
tags:
- git
- commit-message
- guidelines
---
> The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT",
> "RECOMMENDED",  "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC
> 2119.[^rfc-keywords]

## Overview

* Commit message **SHOULD** be limited to 72 characters per line.
* Commit message **SHOULD** use imperative mood.
* Commit message **SHOULD** be written in present tense.
* Subject is **RECOMMENDED** to be limited to 50 characters.
* Body is **OPTIONAL** if deemed necessary to further explain the commit.
* Subject and body **MUST** be separated by an empty line.
* Prepared commit messages by various Git actions **SHOULD** remain untouched.

## General

### Subject

The subject is **RECOMMENDED** to be limited to 50 characters. It **SHOULD** be limited to 72
characters.[^tbaggery-commit-messages]

It **SHOULD** be written in imperative mood. Consider it to finish the sentence
"If applied, this commit will...".[^tbaggery-commit-messages] [^git-commits-in-present-tense] [^git-commit-imperative-mood]

### Body

If applicable to include further details regarding your commit, you can add an **OPTIONAL** body
to your commit message which includes further information regarding the changes committed. This
can be used to further explain the changes (why and how the changes applied does what it does).[^git-commit-meaningful-message] [^chris-beams-how-to-write-a-git-commit-message]

When describing problem statements, describe them in present tense. Describe as it is its current
state and how you address it.[^git-commit-present-tense]

If a body is included, it **MUST** be separated from the subject by an empty line and **SHOULD** be
limited to 72 characters for each line written.[^tbaggery-commit-messages] If there's any resources
related to the changes done, you **MAY** add them to the bottom of your commit message below the
body to keep text and links separate.

### Example template

    # If applied, this commit will...
    Short summary around recommended 50 characters

    # Why is this change needed and how is it addressed?
    A longer description which explains further what has been changed. Wrap
    each line after 72 characters to make it easier to be read if summary
    requires it.

    # Provide links to any relevant tickets, articles or other resources
    * Bullet list of references

### Prepared commit messages

Actions that have a prepared commit message, for example when doing a `git merge`[^git-merge] or
`git revert`[^git-revert] , the commit message **SHOULD** stay as prepared.

## Footnotes

[^rfc-keywords]: [Key words for use in RFCs to Indicate Requirement Levels - RFC-2119](https://www.ietf.org/rfc/rfc2119.txt)

[^tbaggery-commit-messages]: [A Note About Git Commit Messages - tbaggery](https://tbaggery.com/2008/04/19/a-tbaggery-commit-messages.html)

[^git-commits-in-present-tense]: [Why is it considered good practice to describe git commits in the present tense? - Stack Overflow](https://stackoverflow.com/questions/13861318/why-is-it-considered-good-practice-to-describe-git-commits-in-the-present-tense/13861351#13861351)

[^git-commit-imperative-mood]: [git/git > Submitting patches > Imperative mood](https://github.com/git/git/blob/5a0ee6f793d57510770947c51df1ce76055aa196/Documentation/SubmittingPatches#L332-L338)

[^git-commit-meaningful-message]: [git/git > Submitting patches > Meaningful message](https://github.com/git/git/blob/5a0ee6f793d57510770947c51df1ce76055aa196/Documentation/SubmittingPatches#L314-L323)

[^chris-beams-how-to-write-a-git-commit-message]: [How to Write a Git Commit Message - Chris Beams](https://chris.beams.io/posts/git-commit/)

[^git-commit-present-tense]: [git/git > Submitting patches > Present tense](https://github.com/git/git/blob/5a0ee6f793d57510770947c51df1ce76055aa196/Documentation/SubmittingPatches#L325-L330)

[^git-merge]: [Git Documentation > git-merge > Merging tag](https://git-scm.com/docs/git-merge#_merging_tag)

[^git-revert]: [Git Documentation > git-revert](https://git-scm.com/docs/git-revert)
