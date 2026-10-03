import { mkdir, writeFile, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import sharp from "sharp";

const output = resolve("public/images");
await mkdir(output, { recursive: true });
const assets = [
  {
    name: "ella",
    url: "https://images.unsplash.com/photo-1734279135113-8bd58bc02b69?auto=format&fit=crop&w=1920&q=85",
    width: 1920,
  },
  {
    name: "coast",
    url: "https://images.pexels.com/photos/32310234/pexels-photo-32310234.jpeg?auto=compress&cs=tinysrgb&w=1400",
    width: 1400,
  },
  {
    name: "wildlife",
    url: "https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?auto=format&fit=crop&w=1000&q=85",
    width: 1000,
  },
  {
    name: "prius",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/01/2009_Toyota_Prius_%28ZVW30R%29_liftback_%282011-12-06%29_01.jpg",
    width: 1200,
  },
  {
    name: "hiace",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Toyota_Hiace_KDH202L_3.0_Commuter_White_-_front.jpg",
    width: 1200,
  },
  {
    name: "island-drive",
    url: "https://images.unsplash.com/photo-1580910675958-a92b5c0b48cb?auto=format&fit=crop&w=1200&q=85",
    width: 1200,
  },
];
const selectedAssets = process.argv.includes("--vehicles-only")
  ? assets.filter((asset) =>
      ["prius", "hiace", "island-drive"].includes(asset.name),
    )
  : assets;
for (const asset of selectedAssets) {
  const response = await fetch(asset.url, {
    signal: AbortSignal.timeout(45000),
    headers: {
      "User-Agent": "TharushaToursWebsite/1.0 (local asset preparation)",
    },
  });
  if (!response.ok) throw new Error(`${asset.name}: HTTP ${response.status}`);
  const original = Buffer.from(await response.arrayBuffer());
  const image = await sharp(original)
    .rotate()
    .resize({ width: asset.width, withoutEnlargement: true })
    .webp({ quality: 83 })
    .toBuffer();
  await writeFile(resolve(output, `${asset.name}.webp`), image);
  const metadata = await sharp(image).metadata();
  console.log(
    `${asset.name}: ${metadata.width}×${metadata.height}, ${Math.round(image.length / 1024)} KB`,
  );
}
const suppliedLogo = await readFile(
  "resources/WhatsApp Image 2026-10-03 at 9.32.47 AM.jpeg",
);
await sharp(suppliedLogo)
  .resize({ width: 180 })
  .webp({ quality: 90 })
  .toFile(resolve(output, "brand.webp"));
console.log("Supplied brand logo prepared.");
