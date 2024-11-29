import fs from 'fs/promises';

export async function load(url, context, defaultLoad) {
  if (url.endsWith('.svg')) {
    const svgContent = await fs.readFile(new URL(url), 'utf8');

    // Explicitly short-circuit to signal completion
    return {
      format: 'module',
      source: `export default ${JSON.stringify(svgContent)};`,
      shortCircuit: true,  // Added this line
    };
  }

  // For other files, use the default loader
  return defaultLoad(url, context, defaultLoad);
}
