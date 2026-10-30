const sounds = [
  {
    "emoji": "🐱",
    "label": "普通のニャー",
    "files": [
      "mixkit-domestic-cat-hungry-meow-45.wav",
      "mixkit-little-cat-attention-meow-86.wav"
    ]
  },
  {
    "emoji": "😻",
    "label": "甘えたニャ〜",
    "files": [
      "mixkit-sweet-kitty-meow-93.wav",
      "mixkit-cartoon-kitty-begging-meow-92.wav"
    ]
  },
  {
    "emoji": "🐾",
    "label": "子猫のミャッ",
    "files": [
      "mixkit-cartoon-little-cat-meow-91.wav",
      "mixkit-little-cat-pain-meow-87.wav"
    ]
  },
  {
    "emoji": "🌙",
    "label": "夜のニャオーン",
    "files": [
      "mixkit-big-wild-cat-slow-moan-90.wav",
      "mixkit-angry-cartoon-kitty-meow-94.wav"
    ]
  },
  {
    "emoji": "😾",
    "label": "怒った猫",
    "files": [
      "mixkit-angry-wild-cat-roar-89.wav",
      "mixkit-big-wild-cat-scary-roar-88.wav"
    ]
  },
  {
    "emoji": "🎃",
    "label": "ゴロゴロ・猛獣",
    "files": [
      "mixkit-big-wild-cat-long-purr-96.wav",
      "mixkit-big-wild-lion-growl-95.wav",
      "mixkit-wild-lion-animal-roar-6.wav"
    ]
  }
];
const status=document.querySelector('#status'),volume=document.querySelector('#volume'),buttons=document.querySelector('#buttons');
let active=null,lastFile=null;
function stop(){if(active){active.pause();active.currentTime=0;active=null;}status.textContent='停止しました';}
function pick(arr){const choices=arr.length>1?arr.filter(x=>x!==lastFile):arr;return choices[Math.floor(Math.random()*choices.length)];}
function play(s){stop();const file=pick(s.files);lastFile=file;const a=new Audio('sounds/'+encodeURIComponent(file));active=a;a.volume=Number(volume.value)/100;status.textContent=s.emoji+' '+s.label;a.onended=()=>{if(active===a){active=null;status.textContent='次の鳴き声をどうぞ 🐾';}};a.onerror=()=>{status.textContent='音声を読み込めません。soundsフォルダとファイルを確認してください。';};a.play().catch(e=>{status.textContent='再生できません: '+e.message;});}
sounds.forEach(s=>{const b=document.createElement('button');b.className='sound';const icon=document.createElement('span');icon.setAttribute('aria-hidden','true');icon.textContent=s.emoji;const title=document.createElement('strong');title.textContent=s.label;b.append(icon,title);b.addEventListener('click',()=>play(s));buttons.appendChild(b);});
document.querySelector('#random').addEventListener('click',()=>{const s=sounds[Math.floor(Math.random()*sounds.length)];play(s);});
document.querySelector('#stop').addEventListener('click',stop);
volume.addEventListener('input',()=>{document.querySelector('#volumeValue').textContent=volume.value+'%';if(active)active.volume=Number(volume.value)/100;});
