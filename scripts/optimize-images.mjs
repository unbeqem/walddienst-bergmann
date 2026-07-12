import sharp from "sharp";
import { mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "src", "assets", "originals");
const OUT = join(__dirname, "..", "src", "assets", "images");

// [source file, output file, max width]
const jobs = [
  ["green-trees.jpg", "hero.jpg", 2400],
  ["Falk-im-wald.jpg", "founder-teaser.jpg", 1400],
  ["falk.jpg", "founder-portrait.jpg", 900],
  ["colorfull-trees.jpg", "closing-cta.jpg", 2400],
  ["cut-tree-close.jpg", "gefahrenbaumfaellung.jpg", 1400],
  ["vegetationspflege.jpg", "gruenpflege.jpg", 1400],
  ["cut-tree.jpg", "mondphasenholz.jpg", 1400],
  ["sawdust.jpg", "holzernte.jpg", 1400],
  ["green-trees-dark.jpg", "leistungen-hero.jpg", 2400],
  ["rising-sun.jpg", "kontakt-bg.jpg", 2400],
  ["working.jpg", "karriere-bg.jpg", 2400],
];

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

for (const [srcFile, outFile, maxWidth] of jobs) {
  const srcPath = join(SRC, srcFile);
  const outPath = join(OUT, outFile);
  const meta = await sharp(srcPath).metadata();
  const width = Math.min(maxWidth, meta.width ?? maxWidth);

  const info = await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(outPath);

  const before = meta.size ?? 0;
  console.log(
    `${srcFile} -> ${outFile}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(
      info.size / 1024 / 1024
    ).toFixed(2)}MB`,
  );
}
