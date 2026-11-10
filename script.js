// Os textos dos cinco capítulos foram mantidos conforme a versão enviada.
const chapters = [
  {
    title: "31 de dezembro de 2021",
    caption: "31 de dezembro de 2021",
    image: "capitulo-1.png",
    paragraphs: [
      "Era o fim de ano. Eu estava indo para a praça da cidade com alguns amigos para passar a virada. Você estava a caminho, e fui com uma colega te buscar.",
      "Quando você me abraçou, eu fiquei tímida. Te achava muito bonita e, naquele instante, alguma coisa em mim pareceu prestar atenção em cada detalhe. Lembro dos nossos corpos se encostando e, principalmente, das nossas mãos. Elas se tocavam repetidas vezes, quase sem querer — ou talvez querendo.",
      "Eu senti um calor por dentro. Pela primeira vez em muito tempo, tive a sensação de ser vista sem precisar fazer nada para merecer aquilo. Eu só precisava estar ali.",
      "Gosto de imaginar que você também sentiu alguma coisa parecida. Mas essa parte da história só você poderia contar."
    ]
  },
  {
    title: "Desafios",
    caption: "Os pequenos momentos da nossa rotina",
    image: "capitulo-2.png",
    paragraphs: [
      "Em 2022, com meus erros e minhas negligências, senti que perdi uma parte de você. O medo e a insegurança fizeram com que eu não soubesse cuidar de algumas oportunidades de viver um amor bonito. Reconheço o que foi meu, sem fingir que uma história inteira cabe na responsabilidade de uma pessoa só.",
      "A gente tinha um humor tão nosso. Eu não me importava quando você me acordava no meio da noite ou bem cedinho, falando alto. Eu gostava de ouvir você contar, pela manhã, coisas que muitas vezes eu nem entendia.",
      "Antes de ir trabalhar, você deitava em cima de mim por alguns minutos. Era uma das experiências mais bonitas que eu já tinha vivido. Parecia uma casinha. Uma felicidade pequena, cotidiana, mas enorme para mim.",
      "Eu gostava dos seus cachos, da sua pele, dos seus olhos e do seu nariz. Gostava de você nos detalhes que talvez nem percebesse."
    ]
  },
  {
    title: "Aos 24 anos",
    caption: "Éramos apenas nós",
    image: "capitulo-3.png",
    paragraphs: [
      "Eu me sentia quebrada, mas ainda queria mudar e tentar. Eu era jovem, não tinha muito apoio e não sabia como viver algumas coisas. Isso não é uma desculpa; é parte do contexto de quem eu era naquele momento.",
      "Achei que conseguiria consertar tudo e mostrar que o amor também pode queimar sem machucar — pode ser calor, abrigo, aconchego. Eu queria que você sentisse isso comigo.",
      "A gente ria, fazia piadas e tentava encontrar leveza mesmo nos dias difíceis. Nós duas tivemos momentos complicados, mas continuávamos tentando, porque acreditávamos que valia a pena.",
      "Na minha lembrança, o amor entre nós não tinha ego ou vaidade. Éramos apenas nós."
    ]
  },
  {
    title: "Seus detalhes",
    caption: "Seus detalhes",
    image: "capitulo-4.png",
    paragraphs: [
      "Eu amei seus detalhes. Nos dias bons e nos dias ruins. Amei cada fase sua, desde quando você tinha 21 anos. E, mesmo quando as coisas mudavam, eu continuava encontrando beleza em você.",
      "Queria ter sido mais compreensiva, mais amorosa, mais carinhosa e mais atenta. Ao mesmo tempo, eu também tinha 22 anos e nem sempre sabia acertar. Eu estava aprendendo a viver, a amar e a entender o que sentia.",
      "Eu amava sua voz, as histórias que você repetia, seu rosto inchadinho de sono. Amava observar você no banho, lavando e enxaguando o cabelo. São lembranças pequenas que ficaram enormes dentro de mim.",
      "Eu fantasiava sobre casamento entre duas mulheres. Imaginava que um dia seria sua esposa. Acompanhei tantas versões suas, dos 21 aos 27 anos, e espero que você tenha sentido ao menos um por cento do amor que eu tinha por você."
    ]
  },
  {
    title: "O fim",
    caption: "O que permanece",
    image: "capitulo-5.png",
    paragraphs: [
      "O fim é difícil porque não significa apenas deixar alguém. Às vezes, significa também abrir mão de desejos, planos e de uma vida que a gente chegou a imaginar com detalhes.",
      "Eu queria ser sua esposinha. Acreditava no nosso casamento, na nossa casa, nas pequenas discussões sobre a rotina de morar juntas. Eu teria me casado com você, sem dúvida.",
      "Talvez eu pudesse ter feito mais em alguns momentos. Talvez algumas coisas pudessem ter sido diferentes. Ainda assim, não quero transformar nossa história em uma lista de culpas. Ela foi feita de duas pessoas, de tentativas, de afeto, de falhas e de tudo o que vivemos.",
      "Obrigada por ter existido na minha história. Você é especial e continuará sendo alguém que eu amo — romanticamente, como pessoa e como família. Eu sou uma parte da sua casa."
    ]
  }
];

const chapterList = document.getElementById("chapterList");
const chapterText = document.getElementById("chapterText");
const chapterNumber = document.getElementById("chapterNumber");
const chapterProgress = document.getElementById("chapterProgress");
const chapterImage = document.getElementById("chapterImage");
const chapterImageCaption = document.getElementById("chapterImageCaption");
const pageNumber = document.getElementById("pageNumber");
const pageCounter = document.getElementById("pageCounter");
const previousButton = document.getElementById("previousChapter");
const nextButton = document.getElementById("nextChapter");

let currentChapter = 0;
let photoObjectUrl = null;

// Cria automaticamente o índice dos cinco capítulos.
function createChapterMenu() {
  chapterList.replaceChildren();

  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chapter-button";
    button.dataset.index = String(index);

    const number = document.createElement("span");
    number.className = "chapter-index";
    number.textContent = String(index + 1).padStart(2, "0");

    const name = document.createElement("span");
    name.className = "chapter-name";
    name.textContent = chapter.title;

    const arrow = document.createElement("span");
    arrow.className = "chapter-arrow";
    arrow.textContent = "↗";

    button.append(number, name, arrow);

    button.addEventListener("click", () => {
      renderChapter(index);
      document.getElementById("leitura").scrollIntoView({
        behavior: "smooth"
      });
    });

    chapterList.appendChild(button);
  });
}

// Exibe o capítulo escolhido.
function renderChapter(index) {
  currentChapter = index;

  const chapter = chapters[index];

  const heading = document.createElement("h2");
  heading.className = "chapter-title chapter-enter";
  heading.textContent = chapter.title;

  const body = document.createElement("div");
  body.className = "chapter-body chapter-enter";

  chapter.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    body.appendChild(p);
  });

  chapterText.replaceChildren(heading, body);

  chapterNumber.textContent =
    `CAPÍTULO ${String(index + 1).padStart(2, "0")}`;

  chapterProgress.textContent =
    `${index + 1} / ${chapters.length}`;

  chapterImage.src = chapter.image;
  chapterImage.alt =
    `Imagem que acompanha o capítulo ${index + 1}: ${chapter.title}`;
  chapterImage.style.display = "block";

  chapterImageCaption.textContent = chapter.caption;

  pageNumber.textContent =
    String(index * 2 + 3).padStart(2, "0");

  pageCounter.textContent =
    String(index * 2 + 3).padStart(2, "0");

  document.querySelectorAll(".chapter-button").forEach((button, buttonIndex) => {
    const active = buttonIndex === index;

    button.classList.toggle("active", active);

    if (active) {
      button.setAttribute("aria-current", "step");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  previousButton.disabled = index === 0;
  nextButton.disabled = false;

  // No quinto capítulo, o botão leva ao encerramento.
  nextButton.textContent =
    index === chapters.length - 1
      ? "Ir ao encerramento ↓"
      : "Próximo capítulo →";
}

// Botão de capítulo anterior.
previousButton.addEventListener("click", () => {
  if (currentChapter > 0) {
    renderChapter(currentChapter - 1);
  }
});

// Botão de próximo capítulo ou encerramento.
nextButton.addEventListener("click", () => {
  if (currentChapter < chapters.length - 1) {
    renderChapter(currentChapter + 1);
  } else {
    document.getElementById("ultima-pagina").scrollIntoView({
      behavior: "smooth"
    });
  }
});

// Botão da capa.
document.getElementById("startReading").addEventListener("click", () => {
  document.getElementById("leitura").scrollIntoView({
    behavior: "smooth"
  });
});

// Voltar ao início.
document.getElementById("backToTop").addEventListener("click", () => {
  document.getElementById("inicio").scrollIntoView({
    behavior: "smooth"
  });
});

// Pré-visualização de fotografia escolhida pela pessoa.
const photoUpload = document.getElementById("photoUpload");
const photoPreview = document.getElementById("photoPreview");

photoUpload.addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];

  if (!file) return;

  if (photoObjectUrl) {
    URL.revokeObjectURL(photoObjectUrl);
  }

  photoObjectUrl = URL.createObjectURL(file);
  photoPreview.src = photoObjectUrl;
  photoPreview.hidden = false;
});

// Elementos da página secreta.
const secretDialog = document.getElementById("secretDialog");
const secretForm = document.getElementById("secretForm");
const secretCode = document.getElementById("secretCode");
const secretError = document.getElementById("secretError");
const secretPage = document.getElementById("secretPage");

// Abre a janela que solicita a data.
function openSecretDialog() {
  secretDialog.hidden = false;
  secretError.hidden = true;
  secretCode.value = "";
  secretCode.focus();
}

// Fecha a janela da senha.
function closeSecretDialog() {
  secretDialog.hidden = true;
  document.getElementById("openSecret").focus();
}

document.getElementById("openSecret").addEventListener("click", openSecretDialog);

document.getElementById("closeSecretDialog").addEventListener("click", closeSecretDialog);

// Também fecha ao clicar fora da caixa.
secretDialog.addEventListener("click", (event) => {
  if (event.target === secretDialog) {
    closeSecretDialog();
  }
});

// Fecha com a tecla Escape.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !secretDialog.hidden) {
    closeSecretDialog();
  }
});

// Confere o código e abre a página secreta.
secretForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (secretCode.value.trim() === "12042022") {
    secretDialog.hidden = true;
    secretPage.hidden = false;

    secretPage.scrollIntoView({
      behavior: "smooth"
    });

    secretError.hidden = true;
  } else {
    secretError.hidden = false;
    secretCode.select();
  }
});

// Retorna da página secreta para o encerramento do livro.
document.getElementById("closeSecretPage").addEventListener("click", () => {
  secretPage.hidden = true;

  document.getElementById("ultima-pagina").scrollIntoView({
    behavior: "smooth"
  });
});

// Inicializa o índice e mostra o primeiro capítulo.
createChapterMenu();
renderChapter(0);
