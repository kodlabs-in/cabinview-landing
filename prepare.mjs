import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import config from "./cloudflare.config.ts";

// shortcut: cf's beta v0 output format; revisit when the installed CLI changes it.
const output = new URL("./.cloudflare/output/v0/", import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(new URL("workers/default/", output), { recursive: true });
await cp(new URL("./public/", import.meta.url), new URL("workers/default/assets/", output), { recursive: true });
await writeFile(new URL("config.json", output), JSON.stringify({ buildContext: { isPreview: false } }));
await writeFile(new URL("workers/default/worker.config.json", output), JSON.stringify(config.worker));
