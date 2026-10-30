# Jiji Soundboard — 実際の猫の音源版

ユーザー提供のMixkit WAV音声13ファイルをすべて同梱しました。6種類のボタンから各カテゴリ内の音声をランダムに選びます。「ランダム」はカテゴリもランダムに選びます。大型ネコ科動物の鳴き声も含みます。

## GitHub Pagesへの更新

このZIPを解凍し、**中のファイルとsoundsフォルダ**をリポジトリ `yuki-morphs/jiji-soundboard` のルートに上書きしてcommit/pushしてください。以前の合成音 `cat1.wav`〜`cat6.wav` は不要です。`index.html`, `app.js`, `style.css`, `sounds/`, `.nojekyll` が必要です。

```bash
# 解凍したフォルダの中で実行（既存のgitリポジトリにコピーした後）
git add -A
git commit -m "Replace synthetic sounds with Mixkit cat recordings"
git push
```

iPhoneのSafariで再読み込みし、必要ならページのキャッシュを消してください。Bluetoothスピーカーへの出力はiPhoneの音声出力先設定で選択してください。

音声提供: Mixkit (mixkit.co)。公開利用前にMixkit Sound Effects Free Licenseの利用条件をご確認ください。音声はユーザーが提供したファイルです。
