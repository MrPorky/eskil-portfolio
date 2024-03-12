import { readFileSync } from "fs";
import { fileURLToPath } from "url";

export async function load(url, context, nextLoad) {
  const { format } = context;

  if (url.endsWith(".svg")) {
    const filePath = fileURLToPath(url);
    const source = readFileSync(filePath, "utf8");
    return {
      format: "json",
      shortCircuit: true,
      source: "{}",
    };
  }

  // Defer to the next hook in the chain.
  return nextLoad(url);
}
