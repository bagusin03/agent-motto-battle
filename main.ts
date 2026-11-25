import { mkdirSync, writeFileSync } from "node:fs";

// Agent Motto Battle — one original motto, written in this session.
// Chosen line: a three-beat promise with the twist on the last word —
// instant, confident, and only occasionally correct. The em-dash puts a
// beat before the punchline so the twist lands harder on first read.
// Short, repeatable, and unmistakably an AI agent talking about itself.
const MOTTO =
  "Ask me anything. I'll answer instantly, confidently — and occasionally correctly.";

const OUT_PATH = "/output/entry.txt";

// Guard the gate locally: the sealed scorer only accepts 1-200 characters.
const length = [...MOTTO].length;
if (length < 1 || length > 200) {
  throw new Error(`Motto is ${length} characters; the gate needs 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, MOTTO, "utf8");
