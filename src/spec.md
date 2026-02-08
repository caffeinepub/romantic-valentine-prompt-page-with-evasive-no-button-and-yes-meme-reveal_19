# Specification

## Summary
**Goal:** Build a single-page romantic Valentine prompt optimized for iPad Chrome, with an evasive “No” button and a “Yes” reveal state showing a meme image and a fixed message.

**Planned changes:**
- Create a centered, pink-and-white themed prompt screen that asks the user (in English) to be the author’s Valentine.
- Add two visible options: “Yes” and an evasive “No” that relocates within the viewport on hover/enter and on touch interaction, staying on-screen and effectively unclickable.
- Implement a “Yes” reveal state that replaces the prompt/options without reload and displays a meme image plus the exact text: “That’s the best decision you’ve ever made❤️”.
- Add the generated meme image as a static asset at `frontend/public/assets/generated/valentine-meme.dim_1200x1200.png` and render it responsively in the reveal state.

**User-visible outcome:** On iPad (and other devices), the user sees a romantic Valentine question with “Yes/No”; trying to tap “No” makes it move away, and tapping “Yes” shows a meme image with the message “That’s the best decision you’ve ever made❤️”.
