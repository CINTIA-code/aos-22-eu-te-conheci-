// Os textos dos cinco capítulos foram mantidos exatamente como estavam no arquivo original.
const chapters = [
  {
    title: "31 de dezembro de 2021",
    paragraphs: [
      "Era o fim de ano. Eu estava indo para a praça da cidade com alguns amigos para passar a virada. Você estava a caminho, e fui com uma colega te buscar.",
      "Quando você me abraçou, eu fiquei tímida. Te achava muito bonita e, naquele instante, alguma coisa em mim pareceu prestar atenção em cada detalhe. Lembro dos nossos corpos se encostando e, principalmente, das nossas mãos. Elas se tocavam repetidas vezes, quase sem querer — ou talvez querendo.",
      "Eu senti um calor por dentro. Pela primeira vez em muito tempo, tive a sensação de ser vista sem precisar fazer nada para merecer aquilo. Eu só precisava estar ali.",
      "Gosto de imaginar que você também sentiu alguma coisa parecida. Mas essa parte da história só você poderia contar."
    ],
    image: "capitulo-1.png",
    caption: "31 de dezembro de 2021"
  },
  {
    title: "Desafios",
    paragraphs: [
      "Em 2022, com meus erros e minhas negligências, senti que perdi uma parte de você. O medo e a insegurança fizeram com que eu não soubesse cuidar de algumas oportunidades de viver um amor bonito. Reconheço o que foi meu, sem fingir que uma história inteira cabe na responsabilidade de uma pessoa só.",
      "A gente tinha um humor tão nosso. Eu não me importava quando você me acordava no meio da noite ou bem cedinho, falando alto. Eu gostava de ouvir você contar, pela manhã, coisas que muitas vezes eu nem entendia.",
      "Antes de ir trabalhar, você deitava em cima de mim por alguns minutos. Era uma das experiências mais bonitas que eu já tinha vivido. Parecia uma casinha. Uma felicidade pequena, cotidiana, mas enorme para mim.",
      "Eu gostava dos seus cachos, da sua pele, dos seus olhos e do seu nariz. Gostava de você nos detalhes que talvez nem percebesse."
    ],
    image: "capitulo-2.png",
    caption: "Os pequenos momentos da nossa rotina"
  },
  {
    title: "Aos 24 anos",
    paragraphs: [
      "Eu me sentia quebrada, mas ainda queria mudar e tentar. Eu era jovem, não tinha muito apoio e não sabia como viver algumas coisas. Isso não é uma desculpa; é parte do contexto de quem eu era naquele momento.",
      "Achei que conseguiria consertar tudo e mostrar que o amor também pode queimar sem machucar — pode ser calor, abrigo, aconchego. Eu queria que você sentisse isso comigo.",
      "A gente ria, fazia piadas e tentava encontrar leveza mesmo nos dias difíceis. Nós duas tivemos momentos complicados, mas continuávamos tentando, porque acreditávamos que valia a pena.",
      "Na minha lembrança, o amor entre nós não tinha ego ou vaidade. Éramos apenas nós."
    ],
    image: "capitulo-3.png",
    caption: "Éramos apenas nós"
  },
  {
    title: "Seus detalhes",
    paragraphs: [
      "Eu amei seus detalhes. Nos dias bons e nos dias ruins. Amei cada fase sua, desde quando você tinha 21 anos. E, mesmo quando as coisas mudavam, eu continuava encontrando beleza em você.",
      "Queria ter sido mais compreensiva, mais amorosa, mais carinhosa e mais atenta. Ao mesmo tempo, eu também tinha 22 anos e nem sempre sabia acertar. Eu estava aprendendo a viver, a amar e a entender o que sentia.",
      "Eu amava sua voz, as histórias que você repetia, seu rosto inchadinho de sono. Amava observar você no banho, lavando e enxaguando o cabelo. São lembranças pequenas que ficaram enormes dentro de mim.",
      "Eu fantasiava sobre casamento entre duas mulheres. Imaginava que um dia seria sua esposa. Acompanhei tantas versões suas, dos 21 aos 27 anos, e espero que você tenha sentido ao menos um por cento do amor que eu tinha por você."
    ],
    image: "capitulo-4.png",
    caption: "Seus detalhes"
  },
  {
    title: "O fim",
    paragraphs: [
      "O fim é difícil porque não significa apenas deixar alguém. Às vezes, significa também abrir mão de desejos, planos e de uma vida que a gente chegou a imaginar com detalhes.",
      "Eu queria ser sua esposinha. Acreditava no nosso casamento, na nossa casa, nas pequenas discussões sobre a rotina de morar juntas. Eu teria me casado com você, sem dúvida.",
      "Talvez eu pudesse ter feito mais em alguns momentos. Talvez algumas coisas pudessem ter sido diferentes. Ainda assim, não quero transformar nossa história em uma lista de culpas. Ela foi feita de duas pessoas, de tentativas, de afeto, de falhas e de tudo o que vivemos.",
      "Obrigada por ter existido na minha história. Você é especial e continuará sendo alguém que eu amo — romanticamente, como pessoa e como família. Eu sou uma parte da sua casa."
    ],
    image: "capitulo-5.png",
    caption: "O que permanece"
  }
];

const $ = (id) => document.getElementById(id);

const chapterList = $("chapterList");
const chapterText = $("chapterText");
const chapterNumber = $("chapterNumber");
const chapterProgress = $("chapterProgress");
const chapterImage = $("chapterImage");
const chapterImageCaption = $("chapterImageCaption");
const pageNumber = $("pageNumber");
const previousButton = $("previousChapter");
const nextButton = $("nextChapter");

let currentChapter = 0;

function createChapterMenu() {
  chapterList.replaceChildren();

  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "chapter-button";

    button.innerHTML = `
      <span class="chapter-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="chapter-name"></span>
      <span class="chapter-arrow">↗</span>
    `;

    button.querySelector(".chapter-name").textContent = chapter.title;

    button.addEventListener("click", () => {
      renderChapter(index);

      $("leitura").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    chapterList.appendChild(button);
  });
}

function renderChapter(index) {
  if (index < 0 || index >= chapters.length) return;

  currentChapter = index;

  const chapter = chapters[index];

  chapterNumber.textContent =
    `CAPÍTULO ${String(index + 1).padStart(2, "0")}`;

  chapterProgress.textContent =
    `${index + 1} / ${chapters.length}`;

  chapterImage.src = chapter.image;
  chapterImage.alt = `Ilustração: ${chapter.caption}`;

  chapterImageCaption.textContent = chapter.caption;

  pageNumber.textContent =
    String(index * 2 + 3).padStart(2, "0");

  const heading = document.createElement("h2");
  heading.className = "chapter-title";
  heading.textContent = chapter.title;

  const body = document.createElement("div");
  body.className = "chapter-body";

  chapter.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    body.appendChild(p);
  });

  chapterText.replaceChildren(heading, body);

  document.querySelectorAll(".chapter-button").forEach((button, i) => {
    const active = i === index;

    button.classList.toggle("active", active);

    if (active) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  previousButton.disabled = index === 0;
  nextButton.disabled = index === chapters.length - 1;

  nextButton.textContent =
    index === chapters.length - 1
      ? "Último capítulo"
      : "Próximo capítulo →";

  chapterText.classList.remove("chapter-enter");

  void chapterText.offsetWidth;

  chapterText.classList.add("chapter-enter");
}

previousButton.addEventListener("click", () => {
  if (currentChapter > 0) {
    renderChapter(currentChapter - 1);

    $("leitura").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});

nextButton.addEventListener("click", () => {
  if (currentChapter < chapters.length - 1) {
    renderChapter(currentChapter + 1);

    $("leitura").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});

$("startReading").addEventListener("click", () => {
  $("leitura").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

$("backToTop").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

$("photoUpload").addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];

  if (!file) return;

  const preview = $("photoPreview");

  if (preview.dataset.objectUrl) {
    URL.revokeObjectURL(preview.dataset.objectUrl);
  }

  const objectUrl = URL.createObjectURL(file);

  preview.src = objectUrl;
  preview.dataset.objectUrl = objectUrl;
  preview.hidden = false;
});

createChapterMenu();
renderChapter(0);
