
const chapters = [
  {
    title: "31 de dezembro de 2021",
    subtitle: "O começo de uma lembrança.",
    image: "capitulo-1.png",
    caption: "31 de dezembro de 2021",
    paragraphs: [
      "Era o fim de ano. Eu estava indo para a praça da cidade com alguns amigos para passar a virada. Você estava a caminho, e fui com uma colega te buscar.",
      "Quando você me abraçou, eu fiquei tímida. Te achava muito bonita e, naquele instante, alguma coisa em mim pareceu prestar atenção em cada detalhe. Lembro dos nossos corpos se encostando e, principalmente, das nossas mãos. Elas se tocavam repetidas vezes, quase sem querer — ou talvez querendo.",
      "Eu senti um calor por dentro. Pela primeira vez em muito tempo, tive a sensação de ser vista sem precisar fazer nada para merecer aquilo. Eu só precisava estar ali.",
      "Gosto de imaginar que você também sentiu alguma coisa parecida. Mas essa parte da história só você poderia contar."
    ]
  },
  {
    title: "Desafios",
    subtitle: "Os pequenos momentos da nossa rotina.",
    image: "capitulo-2.png",
    caption: "Os pequenos momentos da nossa rotina",
    paragraphs: [
      "Em 2022, com meus erros e minhas negligências, senti que perdi uma parte de você. O medo e a insegurança fizeram com que eu não soubesse cuidar de algumas oportunidades de viver um amor bonito. Reconheço o que foi meu, sem fingir que uma história inteira cabe na responsabilidade de uma pessoa só.",
      "A gente tinha um humor tão nosso. Eu não me importava quando você me acordava no meio da noite ou bem cedinho, falando alto. Eu gostava de ouvir você contar, pela manhã, coisas que muitas vezes eu nem entendia.",
      "Antes de ir trabalhar, você deitava em cima de mim por alguns minutos. Era uma das experiências mais bonitas que eu já tinha vivido. Parecia uma casinha. Uma felicidade pequena, cotidiana, mas enorme para mim.",
      "Eu gostava dos seus cachos, da sua pele, dos seus olhos e do seu nariz. Gostava de você nos detalhes que talvez nem percebesse."
    ]
  },
  {
    title: "Aos 24 anos",
    subtitle: "O amor e as tentativas.",
    image: "capitulo-3.png",
    caption: "Éramos apenas nós",
    paragraphs: [
      "Eu me sentia quebrada, mas ainda queria mudar e tentar. Eu era jovem, não tinha muito apoio e não sabia como viver algumas coisas. Isso não é uma desculpa; é parte do contexto de quem eu era naquele momento.",
      "Achei que conseguiria consertar tudo e mostrar que o amor também pode queimar sem machucar — pode ser calor, abrigo, aconchego. Eu queria que você sentisse isso comigo.",
      "A gente ria, fazia piadas e tentava encontrar leveza mesmo nos dias difíceis. Nós duas tivemos momentos complicados, mas continuávamos tentando, porque acreditávamos que valia a pena.",
      "Na minha lembrança, o amor entre nós não tinha ego ou vaidade. Éramos apenas nós."
    ]
  },
  {
    title: "Seus detalhes",
    subtitle: "Tudo aquilo que ficou na memória.",
    image: "capitulo-4.png",
    caption: "Seus detalhes",
    paragraphs: [
      "Eu amei seus detalhes. Nos dias bons e nos dias ruins. Amei cada fase sua, desde quando você tinha 21 anos. E, mesmo quando as coisas mudavam, eu continuava encontrando beleza em você.",
      "Queria ter sido mais compreensiva, mais amorosa, mais carinhosa e mais atenta. Ao mesmo tempo, eu também tinha 22 anos e nem sempre sabia acertar. Eu estava aprendendo a viver, a amar e a entender o que sentia.",
      "Eu amava sua voz, as histórias que você repetia, seu rosto inchadinho de sono. Amava observar você no banho, lavando e enxaguando o cabelo. São lembranças pequenas que ficaram enormes dentro de mim.",
      "Eu fantasiava sobre casamento entre duas mulheres. Imaginava que um dia seria sua esposa. Acompanhei tantas versões suas, dos 21 aos 27 anos, e espero que você tenha sentido ao menos um por cento do amor que eu tinha por você."
    ]
  },
  {
    title: "O fim",
    subtitle: "O que permanece.",
    image: "capitulo-5.png",
    caption: "O que permanece",
    paragraphs: [
      "O fim é difícil porque não significa apenas deixar alguém. Às vezes, significa também abrir mão de desejos, planos e de uma vida que a gente chegou a imaginar com detalhes.",
      "Eu queria ser sua esposinha. Acreditava no nosso casamento, na nossa casa, nas pequenas discussões sobre a rotina de morar juntas. Eu teria me casado com você, sem dúvida.",
      "Talvez eu pudesse ter feito mais em alguns momentos. Talvez algumas coisas pudessem ter sido diferentes. Ainda assim, não quero transformar nossa história em uma lista de culpas. Ela foi feita de duas pessoas, de tentativas, de afeto, de falhas e de tudo o que vivemos.",
      "Obrigada por ter existido na minha história. Você é especial e continuará sendo alguém que eu amo — romanticamente, como pessoa e como família. Eu sou uma parte da sua casa."
    ]
  }
];

const cover = document.getElementById("cover");
const book = document.getElementById("book");
const startButton = document.getElementById("startReading");

const chapterList = document.getElementById("chapterList");
const chapterNumber = document.getElementById("chapterNumber");
const chapterTitle = document.getElementById("chapterTitle");
const chapterSubtitle = document.getElementById("chapterSubtitle");
const chapterImage = document.getElementById("chapterImage");
const chapterImageCaption = document.getElementById("chapterImageCaption");
const chapterText = document.getElementById("chapterText");

const previousButton = document.getElementById("previousChapter");
const nextButton = document.getElementById("nextChapter");
const pageNumber = document.getElementById("pageNumber");

const progressBar = document.getElementById("readingProgressBar");
const progressTrack = document.getElementById("readingProgressTrack");
const progressText = document.getElementById("progressText");

const musicButton = document.getElementById("musicButton");
const musicButtonText = document.getElementById("musicButtonText");
const backgroundMusic = document.getElementById("backgroundMusic");

const backToTopButton = document.getElementById("backToTop");
const readingArea = document.getElementById("leitura");

let currentChapter = 0;
let transitionTimer = null;

// Cria os botões de navegação dos capítulos.
function createChapterMenu() {
  chapterList.innerHTML = "";

  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "chapter-tab";
    button.textContent = `0${index + 1} · ${chapter.title}`;
    button.setAttribute("aria-label", `Abrir capítulo ${index + 1}: ${chapter.title}`);

    button.addEventListener("click", () => {
      showChapter(index);
      readingArea.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    chapterList.appendChild(button);
  });
}

// Atualiza o indicador de progresso.
function updateProgress() {
  const percentage = Math.round(
    ((currentChapter + 1) / chapters.length) * 100
  );

  progressBar.style.width = `${percentage}%`;
  progressTrack.setAttribute("aria-valuenow", percentage);
  progressText.textContent = `${percentage}% concluído`;
}

// Renderiza o conteúdo de um capítulo.
function renderChapter(index) {
  const chapter = chapters[index];

  chapterNumber.textContent =
    `CAPÍTULO ${String(index + 1).padStart(2, "0")}`;

  chapterTitle.textContent = chapter.title;
  chapterSubtitle.textContent = chapter.subtitle;

  chapterImage.src = chapter.image;
  chapterImage.alt = `Ilustração do capítulo ${index + 1}: ${chapter.title}`;

  chapterImageCaption.textContent = chapter.caption;

  chapterText.innerHTML = "";

  chapter.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    chapterText.appendChild(p);
  });

  pageNumber.textContent =
    `${String(index + 1).padStart(2, "0")} / ${String(chapters.length).padStart(2, "0")}`;

  previousButton.disabled = index === 0;
  nextButton.disabled = index === chapters.length - 1;

  const buttons = chapterList.querySelectorAll(".chapter-tab");

  buttons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;

    button.classList.toggle("active", isActive);

    if (isActive) {
      button.setAttribute("aria-current", "step");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  updateProgress();
}

// Troca de capítulo com transição.
function showChapter(index) {
  if (index < 0 || index >= chapters.length || index === currentChapter) {
    return;
  }

  currentChapter = index;

  if (transitionTimer) {
    clearTimeout(transitionTimer);
  }

  readingArea.classList.remove("is-entering");
  readingArea.classList.add("is-changing");

  transitionTimer = setTimeout(() => {
    renderChapter(currentChapter);

    readingArea.classList.remove("is-changing");
    readingArea.classList.add("is-entering");

    transitionTimer = setTimeout(() => {
      readingArea.classList.remove("is-entering");
    }, 650);
  }, 220);
}

// Abre o livro.
function openBook() {
  if (!book.hidden) return;

  book.hidden = false;
  document.body.classList.remove("locked");

  cover.classList.add("is-leaving");

  setTimeout(() => {
    cover.hidden = true;
    book.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 850);
}

// Navegação anterior e próximo.
previousButton.addEventListener("click", () => {
  if (currentChapter > 0) {
    showChapter(currentChapter - 1);
    readingArea.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

nextButton.addEventListener("click", () => {
  if (currentChapter < chapters.length - 1) {
    showChapter(currentChapter + 1);
    readingArea.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// Música: só começa quando a pessoa clicar.
musicButton.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    try {
      await backgroundMusic.play();

      musicButton.classList.add("is-playing");
      musicButton.setAttribute("aria-pressed", "true");
      musicButton.setAttribute("aria-label", "Pausar música");
      musicButtonText.textContent = "Pausar música";
    } catch (error) {
      musicButtonText.textContent = "Áudio indisponível";
      console.error("Não foi possível reproduzir a música:", error);
    }
  } else {
    backgroundMusic.pause();

    musicButton.classList.remove("is-playing");
    musicButton.setAttribute("aria-pressed", "false");
    musicButton.setAttribute("aria-label", "Ativar música");
    musicButtonText.textContent = "Ouvir música";
  }
});

// Volta para o início do livro.
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Abre o livro ao clicar na capa.
startButton.addEventListener("click", openBook);

// Inicialização.
createChapterMenu();
renderChapter(0);
