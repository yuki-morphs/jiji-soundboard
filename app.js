const sounds = [
  { emoji: '😾', label: 'おこっている', files: ['mixkit-angry-wild-cat-roar-89.wav', 'mixkit-domestic-cat-hungry-meow-45.wav'] },
  { emoji: '🐱', label: '子猫', files: ['mixkit-cartoon-kitty-begging-meow-92.wav', 'mixkit-sweet-kitty-meow-93.wav'] },
  { emoji: '🐈‍⬛', label: '普通', files: ['mixkit-angry-cartoon-kitty-meow-94.wav', 'mixkit-cartoon-little-cat-meow-91.wav', 'mixkit-little-cat-pain-meow-87.wav'] },
  { emoji: '🦁', label: '猛獣', files: ['mixkit-big-wild-cat-scary-roar-88.wav', 'mixkit-wild-lion-animal-roar-6.wav'] },
  { emoji: '🧙‍♀️', label: '魔女', files: ['dragon-studio-witch-laugh-401713.mp3', 'freesound_community-witch-laugh-95203.mp3', 'universfield-evil-witch-laugh-140135.mp3'] }
];
const status = document.querySelector('#status');
const volume = document.querySelector('#volume');
const buttons = document.querySelector('#buttons');
let active = null, lastFile = null;
function stop() {
  if (active) { active.pause(); active.currentTime = 0; active = null; }
  status.textContent = '停止しました';
}
function pick(files) {
  const options = files.length > 1 ? files.filter(file => file !== lastFile) : files;
  return options[Math.floor(Math.random() * options.length)];
}
function play(group) {
  stop();
  const file = pick(group.files);
  lastFile = file;
  const audio = new Audio('sounds/' + encodeURIComponent(file));
  active = audio;
  audio.volume = Number(volume.value) / 100;
  status.textContent = group.emoji + ' ' + group.label;
  audio.onended = () => { if (active === audio) { active = null; status.textContent = '次の声をどうぞ 🐾'; } };
  audio.onerror = () => { if (active === audio) status.textContent = '音声を読み込めません。soundsフォルダを確認してください。'; };
  audio.play().catch(err => { if (active === audio) status.textContent = '再生できません: ' + err.message; });
}
sounds.forEach(group => {
  const button = document.createElement('button');
  button.className = 'sound';
  const emoji = document.createElement('span');
  emoji.setAttribute('aria-hidden', 'true');
  emoji.textContent = group.emoji;
  const label = document.createElement('strong');
  label.textContent = group.label;
  button.append(emoji, label);
  button.addEventListener('click', () => play(group));
  buttons.appendChild(button);
});
document.querySelector('#random').addEventListener('click', () => play(sounds[Math.floor(Math.random() * sounds.length)]));
document.querySelector('#stop').addEventListener('click', stop);
volume.addEventListener('input', () => {
  document.querySelector('#volumeValue').textContent = volume.value + '%';
  if (active) active.volume = Number(volume.value) / 100;
});
