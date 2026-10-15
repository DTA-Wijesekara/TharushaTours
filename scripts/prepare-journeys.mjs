import { mkdir } from "node:fs/promises";
import sharp from "sharp";

await mkdir("public/images/journeys", { recursive: true });
for (const [source, name] of [
  ["tours/tour 1.png", "airport-welcome"],
  ["tours/tour 2.jpeg", "scenic-train"],
]) {
  const result = await sharp(source)
    .rotate()
    .resize({ width: 1086, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`public/images/journeys/${name}.webp`);
  console.log(
    `${name}: ${result.width}×${result.height}, ${Math.round(result.size / 1024)} KB`,
  );
}
