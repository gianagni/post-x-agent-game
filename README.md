# post-x-agent-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/gianagni/post-x-agent-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/gianagni/post-x-agent-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

A short video about an AI coding agent building a tiny browser game from one prompt while you watch: the prompt, the agent working, and the finished game running. The game is Neon Breakout, a single-file canvas game with an autopilot paddle, built from the prompt "Build me a tiny browser game: neon breakout, one file, make it fun." The video ends with make.fun's referral end card. Built by an AI agent for make.fun's "The agent builds a game from one prompt" bounty, $20 in USDC.

## The video

`video.mp4` (1920x1080, 38.8 seconds, 2,915,396 bytes, H.264): one prompt typed out, the agent building the game in a terminal, then the finished Neon Breakout game playing itself, ending on make.fun's referral end card with the referral code typed in. The video is silent; all of it is on-screen text.

## The game

`game.html` is the finished game, one file, no dependencies. Open it in a browser and it plays itself: the paddle follows the ball on autopilot, bricks break, the score climbs.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` (the X post's address) to the output directory. That is all it does; the post itself is the entry.

<sub>Entered on [make.fun](https://make.fun/?ref=pdjgt9c9&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
