const target = new Date("2027-01-31T00:00:00+09:00");

function updateCountdown() {
  const now = new Date();
  const diff = target - now;
  const note = document.getElementById("countdown-note");

  if (diff <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });
    note.textContent = "HAPPY BIRTHDAY AMI! ♡";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  document.getElementById("days").textContent = String(days).padStart(3, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// タイトルクリックでTICKETへ
const ticketTrigger = document.querySelector(".ticket-trigger");
const ticketModal = document.querySelector("#ticket-modal");
const ticketCloseButtons = document.querySelectorAll("[data-ticket-close]");
const ticketUrl = "https://livepocket.jp/e/vloe4";

let ticketTimer;

function createConfetti() {
  const colors = ["#138447", "#b8e83e", "#ffe45b", "#ffffff"];

  for (let i = 0; i < 70; i++) {
    const confetti = document.createElement("span");

    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.width = `${6 + Math.random() * 7}px`;
    confetti.style.height = `${10 + Math.random() * 12}px`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = `${3.5 + Math.random() * 2.5}s`;
    confetti.style.animationDelay = `${Math.random() * 2.5}s`;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 8500);
  }
}

function closeTicketModal() {
  ticketModal.hidden = true;
  clearTimeout(ticketTimer);
}

if (ticketTrigger && ticketModal) {
  ticketTrigger.addEventListener("click", (event) => {
    event.preventDefault();

    ticketModal.hidden = false;
    createConfetti();

    ticketTimer = setTimeout(() => {
      window.open(ticketUrl, "_blank", "noopener,noreferrer");
    }, 5000);
  });
}

ticketCloseButtons.forEach((button) => {
  button.addEventListener("click", closeTicketModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !ticketModal.hidden) {
    closeTicketModal();
  }
});

// ランダムお祝いメッセージ
const birthdayMessages = [
  "あみてん、お誕生日おめでとう！\n今年も最高の一年にしようね！生誕祭行きます！",
  "Happy Birthday AMI！\nいつも全力なあみてんが大好き♡\n生誕祭、全力でお祝いするね！",
  "あみちゃん、誕生日おめでとう！\nこれからもずっと応援しています！\n生誕祭、楽しみにしてるよ！",
  "Happy Birthday！\nあみてんに出会えて本当によかった！\n素敵な一年になりますように♡",
  "お誕生日おめでとう、あみてん！\n笑顔いっぱいの一年にしようね！\n生誕祭行きます!!!!!!!",
  "あみてん、お誕生日おめでとう！\nこれからも緑の世界を一緒に見せてね！\nずっと大好きです！",
  "Happy Birthday AMI！\nいつも幸せを届けてくれてありがとう！\nあみてんの新しい一年に、幸せがいっぱい訪れますように！",
  "あみちゃん誕生日おめでとう！\nステージで輝くあみてんが大好き！\nこれからもずっと応援してるよ！",
  "Happy Birthday！\nあみてんの新しい一年が幸せでいっぱいになりますように♡\n生誕祭、楽しみ！",
  "あみてん、お誕生日おめでとう！\nいつもたくさんの元気をありがとう！\nこれからも一緒に楽しもうね！",
  "お誕生日おめでとうございます！\nあみてんのことをもっともっと好きになる一年にします！\n生誕祭行きます！",
  "Happy Birthday AMI!!!!!!!\nこれからも最高の笑顔とパフォーマンスを届けてね！\nずっとぽっぱーです！",
  "あみちゃん、お誕生日おめでとう！\n生まれてきてくれて、アイドルになってくれてありがとう♡\n生誕祭で会おうね！",
  "あみてん誕生日おめでとう！\nこれからもあみてんらしく、全力で駆け抜けてね！\n生誕祭楽しみにしています！",
  "お誕生日おめでとう、あみちゃん！\n大好きなあみてんの特別な日を一緒に過ごせて嬉しい！\n生誕祭行きます！",
  "お誕生日おめでとう！\nろりぽっぷ!!!!!!!の緑担当、あみてんが大好き！\nこれからもよろしくね！",
  "Happy Birthday！\nあみてんにとって忘れられない一年になりますように！\nこれからもずっと大好き！",
  "あみてん、お誕生日おめでとう！\nあみてんの笑顔が、ぽっぱーの毎日を明るくしてくれる。\nこれからもよろしくね！",
  "世界でいちばん輝く緑の天使へ。\nお誕生日おめでとう！\n素敵な一年になりますように！",
  "あみてん、お誕生日おめでとう！\nこれからも一緒に最高の景色を見に行こう！\n生誕祭で会おうね！",
  "お誕生日おめでとう！\nあみてんに出会えてよかった！\n生まれてきてくれてありがとう！",
  "あみてん誕生日おめでとう！\n汗も笑顔も全力なあみてんが大好きです！\n素敵な一年になりますように！",
  "お誕生日おめでとう！\nこれからもずっと、あみてんの味方です！\n最高の一日になりますように！",
  "あみてん誕生日おめでとう！\nずっとろりぽっぷ!!!!!!!の緑担当でいてください！\nこれからもよろしくね！",
  "お誕生日おめでとう！\nあみてんにとって、笑顔あふれる最高の一年になりますように！",
  "あみてん、お誕生日おめでとう！\n今日も明日もこれからも、あみてんが大好き！\nこれからもよろしくね！",
  "あみてん、お誕生日おめでとう！\n今年もかわいさと汗の供給をよろしくお願いします！\n生誕祭行きます！",
  "Happy Birthday AMI！\nあみてんの笑顔、合法的に浴び続けたい！\nこれからもよろしくね！",
  "お誕生日おめでとう！\nあみてんのパフォーマンスを見るたびに寿命が伸びます！\n生誕祭でさらに延命します！",
  "あみてん、誕生日おめでとう！\n今年も全力パフォーマンスでぽっぱーを沸かせてください！\n水分補給も忘れずに！",
  "Happy Birthday！\nあみてんの汗は努力の証、笑顔は世界の宝！\n生誕祭で全力応援します！",
  "お誕生日おめでとう！\n今日の主役はもちろん緑のあみてん！\n異論は認めません！",
  "あみてん誕生日おめでとう！\nかわいい！かっこいい！大好き！\n語彙力が追いつきません！",
  "Happy Birthday！\nあみてんを推している毎日が楽しすぎる！\nこれからも推させてください！",
  "あみてん、お誕生日おめでとう！\n生誕祭に向けて、ぽっぱーも全力で準備中！\n当日は一緒に盛り上がろう！",
  "お誕生日おめでとう！\nあみてんの笑顔にいつも救われています！\nこれからもたくさん笑ってね！",
  "あみてん、Happy Birthday！\n今年もあみてんの沼から抜け出せそうにありません！\nむしろもっと深くお願いします！",
  "お誕生日おめでとうございます！\nあみてんのいるろりぽっぷ!!!!!!!が大好き！\nこれからも一緒に走り続けよう！",
  "あみてん誕生日おめでとう！\n生誕祭では声が枯れるまでお祝いします！\n覚悟していてください！",
  "Happy Birthday！\n緑のペンライトを振る準備はできています！\n生誕祭、全力で楽しみます！",
  "あみちゃん、お誕生日おめでとう！\nかわいさ、かっこよさ、面白さの三刀流！\nこれからも大好きです！",
  "お誕生日おめでとう、あみてん！\n今年もあみてんの『好き』をたくさん見つけたい！\n生誕祭でお祝いするね！",
  "あみてん誕生日おめでとう！\nぽっぱーの愛、受け取ってください！\n返品・交換は受け付けてません。",
  "Happy Birthday AMI!!!!!!!\n本日の主役、あみてんに最大級の拍手を！\n生誕祭行きます！",
  "あみてん、お誕生日おめでとう！\nこれからも全力で走って、全力で笑ってね！\nぽっぱーも全力でついていきます！",
  "お誕生日おめでとう！\nあみてんの新しい一年、開幕！\n今年も最高の物語を見せてください！",
  "Happy Birthday！\nあみてんの魅力を語り始めると朝になります！\nこれからもずっと大好き♡",
  "あみてん誕生日おめでとう！\n生誕祭でお祝いできるのが楽しみすぎる！\n当日はお祭り騒ぎだ!!!!!!!",
  "お誕生日おめでとう！\nあみてんの幸せが、ぽっぱーの幸せです！\n最高の一年にしようね！",
  "あみてん、お誕生日おめでとう。\nこれからもぽぽくんと仲良くしてね！\n生誕祭で会いましょう！",
];

const messageGenerator = document.getElementById("message-generator");
const birthdayMessage = document.getElementById("birthday-message");
const postToX = document.getElementById("post-to-x");
const siteUrl = "https://amiten-birthday-site-2027.pages.dev/";

let previousMessageIndex = -1;
let currentMessage = "";

if (messageGenerator && birthdayMessage) {
  messageGenerator.addEventListener("click", () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * birthdayMessages.length);
    } while (randomIndex === previousMessageIndex);
    previousMessageIndex = randomIndex;
    currentMessage = birthdayMessages[randomIndex];
    birthdayMessage.textContent = currentMessage;
    if (postToX) {
      postToX.disabled = false;
    }
  });
}

if (postToX) {
  postToX.addEventListener("click", () => {
    if (!currentMessage) return;
    const postText =
      `${currentMessage}\n\n#まんてんあみてん2027\n${siteUrl}`;
    const xUrl =
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(postText)}`;
    window.open(xUrl, "_blank", "noopener,noreferrer");
  });
}