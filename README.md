# Jiji Soundboard — Witch Edition

Includes the previous 13 normalized cat sounds plus three newly normalized witch laughs. Witch button selects a random witch recording; existing Random button selects a cat sound as before. Witch tracks are normalized with FFmpeg loudnorm (-18 LUFS, -2 dBTP target); perceptual differences may remain.

## GitHub Pages
Copy the **contents** of this folder into the root of your existing `jiji-soundboard` repository, replacing existing files. Commit and push. GitHub Pages will redeploy automatically.

```sh
git add -A
git commit -m "Add normalized random witch laughs"
git push
```

Audio files are stored locally in `sounds/`. Review the license/attribution requirements of the three supplied witch recordings before publishing publicly.
