const questions = [
  { word: "cermat", answer: "careful", options: ["careful", "noisy", "heavy", "crooked"], page: 45, theme: "Tema 3 · Keselamatan", example: "Kita perlu cermat semasa menggunakan pisau." },
  { word: "pantas", answer: "quick", options: ["wide", "quick", "silent", "soft"], page: 45, theme: "Tema 3 · Keselamatan", example: "Dia bergerak dengan pantas." },
  { word: "perlahan", answer: "slowly", options: ["safely", "closely", "slowly", "brightly"], page: 45, theme: "Tema 3 · Keselamatan", example: "Berjalanlah dengan perlahan di lantai licin." },
  { word: "hampir", answer: "near", options: ["near", "under", "behind", "outside"], page: 45, theme: "Tema 3 · Keselamatan", example: "Mei Fung berdiri hampir dengan ibunya." },
  { word: "jauh", answer: "far", options: ["low", "far", "thin", "early"], page: 45, theme: "Tema 3 · Keselamatan", example: "Kawasan itu jauh dari sekolah." },
  { word: "laluan", answer: "pathway", options: ["ceiling", "pathway", "window", "garden"], page: 46, theme: "Tema 3 · Keselamatan", example: "Gunakan laluan yang telah ditentukan." },
  { word: "peka", answer: "alert and aware", options: ["tired and sleepy", "alert and aware", "angry and loud", "weak and slow"], page: 48, theme: "Tema 3 · Keselamatan", example: "Murid perlu peka akan keselamatan diri." },
  { word: "sunyi", answer: "quiet and deserted", options: ["crowded", "beautiful", "quiet and deserted", "dangerous"], page: 48, theme: "Tema 3 · Keselamatan", example: "Jangan berjalan seorang diri di kawasan sunyi." },
  { word: "terhumban", answer: "thrown out", options: ["locked inside", "thrown out", "pulled down", "carried home"], page: 51, theme: "Tema 3 · Keselamatan", example: "Tempat duduk keselamatan membantu mengelakkan kanak-kanak terhumban." },
  { word: "topi keledar", answer: "helmet", options: ["seat belt", "helmet", "raincoat", "gloves"], page: 52, theme: "Tema 3 · Keselamatan", example: "Pakai topi keledar semasa menunggang motosikal." },
  { vocab: "kecederaan", meaning: "injury", word: "Topi keledar melindungi kepala daripada ____.", instruction: "Choose the Malay word that best completes the sentence.", answer: "kecederaan", options: ["kecederaan", "perhiasan", "kebahagiaan", "kesenian"], audio: "kecederaan", page: 52, theme: "Tema 3 · Keselamatan", example: "Kecederaan means injury. Topi keledar membantu melindungi kepala." },
  { vocab: "tahan lasak", meaning: "durable", word: "Beg sekolah itu kuat dan ____ walaupun selalu digunakan.", instruction: "Complete the sentence using the most suitable phrase.", answer: "tahan lasak", options: ["tahan lasak", "terburu-buru", "lemah gemalai", "berwarna-warni"], audio: "tahan lasak", page: 52, theme: "Tema 3 · Keselamatan", example: "Tahan lasak describes something strong and durable." },
  { vocab: "hentakan", meaning: "impact", word: "Span di dalam topi keledar membantu menyerap ____.", instruction: "Which textbook word fits this safety sentence?", answer: "hentakan", options: ["hentakan", "pergerakan", "pantulan", "pandangan"], audio: "hentakan", page: 52, theme: "Tema 3 · Keselamatan", example: "Hentakan means an impact or forceful knock." },
  { vocab: "jalur pemantul cahaya", meaning: "reflective strip", word: "Jaket keselamatan mempunyai ____ supaya mudah dilihat pada waktu malam.", instruction: "Choose the complete Malay phrase.", answer: "jalur pemantul cahaya", options: ["jalur pemantul cahaya", "tali pinggang keledar", "lampu isyarat", "laluan berbumbung"], audio: "jalur pemantul cahaya", page: 52, theme: "Tema 3 · Keselamatan", example: "A jalur pemantul cahaya is a reflective strip that improves visibility." },
  { vocab: "gembira", meaning: "happy", word: "Najwa berasa ____ kerana keluarganya tiba dengan selamat.", instruction: "Use the context to choose the correct feeling.", answer: "gembira", options: ["gembira", "cemas", "kecewa", "bosan"], audio: "gembira", page: 55, theme: "Tema 3 · Keselamatan", example: "Gembira is the suitable feeling after arriving safely." },
  { vocab: "cemas", meaning: "anxious", word: "Kami berasa ____ apabila terdengar bunyi penggera kecemasan.", instruction: "Use the situation to infer the feeling.", answer: "cemas", options: ["cemas", "gembira", "bangga", "tenang"], audio: "cemas", page: 55, theme: "Tema 3 · Keselamatan", example: "Cemas means anxious or worried." },
  { vocab: "warisan", meaning: "heritage", word: "Tarian tradisional ialah ____ bangsa yang perlu dipelihara.", instruction: "Choose the word that completes the cultural idea.", answer: "warisan", options: ["warisan", "peraturan", "kemalangan", "persediaan"], audio: "warisan", page: 64, theme: "Tema 4 · Seni & Budaya", example: "Warisan means heritage passed from one generation to another." },
  { vocab: "merdu", meaning: "melodious", word: "Bunyi alat muzik tradisional itu sungguh ____.", instruction: "Select the adjective that describes a pleasant sound.", answer: "merdu", options: ["merdu", "licin", "harum", "kesat"], audio: "merdu", page: 65, theme: "Tema 4 · Seni & Budaya", example: "Merdu describes a pleasant, melodious sound." },
  { vocab: "licin", meaning: "smooth", word: "Permukaan labu sayong itu terasa ____ apabila disentuh.", instruction: "Choose the sensory adjective that fits.", answer: "licin", options: ["licin", "merdu", "harum", "masin"], audio: "licin", page: 65, theme: "Tema 4 · Seni & Budaya", example: "Licin describes a smooth surface." },
  { vocab: "harum", meaning: "fragrant", word: "Bunga malai itu berbau sangat ____.", instruction: "Choose the adjective related to smell.", answer: "harum", options: ["harum", "kasar", "bising", "pahit"], audio: "harum", page: 65, theme: "Tema 4 · Seni & Budaya", example: "Harum means fragrant or pleasantly scented." },
  { vocab: "berwaspada", meaning: "to stay alert", word: "Which Malay word means “to stay alert and careful”?", instruction: "Translate the meaning into Bahasa Melayu.", answer: "berwaspada", options: ["berwaspada", "bergembira", "bersimpuh", "berkunjung"], audio: "berwaspada", page: 56, theme: "Tema 3 · Keselamatan", example: "Kita hendaklah sentiasa berwaspada demi keselamatan diri." },
  { vocab: "kecemasan", meaning: "emergency", word: "Jika berlaku ____, murid perlu meniup wisel dengan kuat.", instruction: "Infer the missing word from the safety instruction.", answer: "kecemasan", options: ["kecemasan", "kebudayaan", "keharmonian", "kecemerlangan"], audio: "kecemasan", page: 58, theme: "Tema 3 · Keselamatan", example: "Kecemasan means an emergency requiring immediate action." },
  { vocab: "peraturan", meaning: "rules", word: "Which word names the rules that everyone must obey?", instruction: "Choose the precise Bahasa Melayu term.", answer: "peraturan", options: ["peraturan", "pergerakan", "perhiasan", "perasaan"], audio: "peraturan", page: 58, theme: "Tema 3 · Keselamatan", example: "Para peserta mesti mematuhi peraturan keselamatan." },
  { vocab: "bersimpuh", meaning: "to sit with legs folded behind", word: "Dalam adat makan, seseorang duduk dengan kedua-dua kaki dilipat ke belakang. Mereka duduk ____.", instruction: "Identify the action described by the sentence.", answer: "bersimpuh", options: ["bersimpuh", "berwaspada", "berpecah", "berkunjung"], audio: "bersimpuh", page: 61, theme: "Tema 4 · Seni & Budaya", example: "Bersimpuh describes sitting with both legs folded behind the body." },
  { vocab: "keharmonian", meaning: "harmony", word: "Tang yuan yang berbentuk bulat melambangkan ____ keluarga.", instruction: "Choose the abstract noun that expresses family unity.", answer: "keharmonian", options: ["keharmonian", "kemalangan", "kecederaan", "kekotoran"], audio: "keharmonian", page: 62, theme: "Tema 4 · Seni & Budaya", example: "Keharmonian means harmony and peaceful unity." },
  { vocab: "melambangkan", meaning: "symbolises", word: "In the sentence “Tang yuan melambangkan kebahagiaan,” what does melambangkan mean?", instruction: "Use context to choose the English meaning.", answer: "symbolises", options: ["symbolises", "prepares", "protects", "examines"], audio: "melambangkan", page: 62, theme: "Tema 4 · Seni & Budaya", example: "Melambangkan means symbolises or represents." },
  { vocab: "pusaka", meaning: "legacy or heirloom", word: "Budaya ialah ____ berharga yang diwarisi daripada generasi terdahulu.", instruction: "Choose the strongest word for an inherited cultural treasure.", answer: "pusaka", options: ["pusaka", "isyarat", "laluan", "peralatan"], audio: "pusaka", page: 64, theme: "Tema 4 · Seni & Budaya", example: "Pusaka is a valued legacy or heirloom inherited from the past." },
  { vocab: "jati diri", meaning: "identity and character", word: "Budaya menjadi lambang ____ sesuatu bangsa.", instruction: "Which phrase means a people’s identity and character?", answer: "jati diri", options: ["jati diri", "jalan raya", "tahan lasak", "ambil berat"], audio: "jati diri", page: 64, theme: "Tema 4 · Seni & Budaya", example: "Jati diri refers to identity, values and personal character." },
  { vocab: "pancaindera", meaning: "the five senses", word: "Rasa, pandang, dengar dan bau berkaitan dengan ____.", instruction: "Connect the examples to the correct concept.", answer: "pancaindera", options: ["pancaindera", "cenderamata", "peribahasa", "keselamatan"], audio: "pancaindera", page: 65, theme: "Tema 4 · Seni & Budaya", example: "Pancaindera refers to the senses used to taste, see, hear, smell and touch." },
  { vocab: "cenderamata", meaning: "souvenir", word: "Gauri membeli topeng kecil sebagai kenangan daripada karnival. Topeng itu ialah ____.", instruction: "Infer the word meaning souvenir from the situation.", answer: "cenderamata", options: ["cenderamata", "perhiasan", "kecemasan", "peraturan"], audio: "cenderamata", page: 68, theme: "Tema 4 · Seni & Budaya", example: "Cenderamata is a souvenir kept as a reminder of a place or event." }
];

const levels = [
  { number: 1, start: 0, end: 9, name: "Word meanings", difficulty: "Beginner" },
  { number: 2, start: 10, end: 19, name: "Sentence challenge", difficulty: "Intermediate" },
  { number: 3, start: 20, end: 29, name: "Context mastery", difficulty: "Advanced" }
];

const savedUnlock = Number.parseInt(localStorage.getItem("kapiBmUnlockedLevel") || "1", 10);
const state = { level: 1, index: 0, score: 0, selected: null, checked: false, maxUnlocked: Math.min(Math.max(savedUnlock, 1), levels.length), responses: Array(questions.length).fill(null) };
const gameHeader = document.querySelector(".game-header");
const menuScreen = document.getElementById("menuScreen");
const lesson = document.getElementById("lesson");
const resultScreen = document.getElementById("resultScreen");
const answers = document.getElementById("answers");
const nextButton = document.getElementById("nextButton");
const feedback = document.getElementById("feedback");
const backButton = document.getElementById("backButton");
const summaryDialog = document.getElementById("summaryDialog");
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function renderQuestion() {
  const q = questions[state.index];
  const level = levels[state.level - 1];
  const number = state.index - level.start + 1;
  const levelLength = level.end - level.start + 1;
  const response = state.responses[state.index];
  state.selected = response?.selected ?? null;
  state.checked = Boolean(response);

  document.getElementById("questionText").textContent = q.word;
  document.querySelector(".question-area").classList.toggle("is-context", Boolean(q.vocab));
  document.getElementById("instruction").textContent = q.instruction || (number % 4 === 0
    ? "Choose the closest English meaning."
    : "What does this Bahasa Melayu word mean?");
  document.getElementById("listenButton").setAttribute("aria-label", `Listen to ${q.audio || q.vocab || q.word}`);
  document.getElementById("levelChip").textContent = `Level ${state.level}`;
  document.getElementById("themeChip").textContent = q.theme;
  document.getElementById("pageRef").textContent = `Buku teks m.s. ${q.page}`;
  document.getElementById("progressLabel").textContent = `Level ${state.level} · Soalan ${number} daripada ${levelLength}`;
  document.getElementById("progressPercent").textContent = `${Math.round(number / levelLength * 100)}%`;
  document.getElementById("progressFill").style.width = `${number / levelLength * 100}%`;
  document.querySelector(".progress-track").setAttribute("aria-valuenow", String(number));
  document.querySelector(".progress-track").setAttribute("aria-valuemax", String(levelLength));
  document.getElementById("kapiMessage").textContent = number === 1
    ? (state.level === 1 ? "Hai! Let’s learn one word at a time." : state.level === 2 ? "Look for clues inside each sentence!" : "Think carefully—this is the mastery challenge!")
    : ["You’ve got this!", "Dengar dan fikir. Listen and think.", "Bagus—keep going!", "One more word for your collection!"][state.index % 4];

  answers.innerHTML = "";
  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.dataset.value = option;
    button.innerHTML = `<span class="answer-key">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    button.addEventListener("click", () => selectAnswer(option, button));
    if (response) {
      button.disabled = true;
      if (option === q.answer) button.classList.add("correct");
      if (!response.correct && option === response.selected) button.classList.add("wrong");
    }
    answers.appendChild(button);
  });

  feedback.classList.remove("is-wrong");
  backButton.disabled = state.index === level.start;
  if (response) {
    feedback.hidden = false;
    showFeedback(response.correct, q, false);
    nextButton.disabled = false;
    nextButton.textContent = state.index === level.end ? `Finish Level ${state.level}` : "Continue";
  } else {
    feedback.hidden = true;
    nextButton.disabled = true;
    nextButton.textContent = "Check answer";
  }
}

function selectAnswer(value, button) {
  if (state.checked) return;
  state.selected = value;
  document.querySelectorAll(".answer-button").forEach(item => item.classList.remove("selected"));
  button.classList.add("selected");
  nextButton.disabled = false;
}

function checkAnswer() {
  const q = questions[state.index];
  if (!state.selected) return;

  if (state.checked) {
    const level = levels[state.level - 1];
    if (state.index === level.end) showResults();
    else { state.index += 1; renderQuestion(); }
    return;
  }

  state.checked = true;
  const correct = state.selected === q.answer;
  state.responses[state.index] = { selected: state.selected, correct };
  state.score = state.responses.filter(response => response?.correct).length;
  document.getElementById("score").textContent = state.score;
  document.querySelectorAll(".answer-button").forEach(button => {
    button.disabled = true;
    if (button.dataset.value === q.answer) button.classList.add("correct");
    if (button.dataset.value === state.selected && !correct) button.classList.add("wrong");
  });

  showFeedback(correct, q, true);
  nextButton.textContent = state.index === levels[state.level - 1].end ? `Finish Level ${state.level}` : "Continue";
}

function showFeedback(correct, q, withEffects) {
  feedback.hidden = false;
  if (correct) {
    feedback.classList.remove("is-wrong");
    document.getElementById("feedbackIcon").textContent = "✓";
    document.getElementById("feedbackTitle").textContent = "Betul! Correct.";
    document.getElementById("feedbackText").textContent = q.example;
    document.getElementById("kapiMessage").textContent = ["Hebat! Great job!", "Tepat sekali! Exactly right!", "Bagus! You found it!"][state.index % 3];
    if (withEffects) {
      playCorrectSound();
      burstConfetti(12);
    }
  } else {
    feedback.classList.add("is-wrong");
    document.getElementById("feedbackIcon").textContent = "×";
    document.getElementById("feedbackTitle").textContent = `Cuba lagi next time. “${q.vocab || q.word}” means “${q.meaning || q.answer}”.`;
    document.getElementById("feedbackText").textContent = q.example;
    document.getElementById("kapiMessage").textContent = "Tak apa! Mistakes help us learn.";
    if (withEffects) playWrongSound();
  }
}

function goBack() {
  if (!resultScreen.hidden) {
    resultScreen.hidden = true;
    lesson.hidden = false;
    state.index = levels[state.level - 1].end;
    renderQuestion();
    return;
  }
  if (state.index > levels[state.level - 1].start) {
    state.index -= 1;
    renderQuestion();
  }
}

function renderMenu() {
  gameHeader.hidden = true;
  menuScreen.hidden = false;
  lesson.hidden = true;
  resultScreen.hidden = true;
  document.getElementById("unlockedCount").textContent = `${state.maxUnlocked} of ${levels.length} levels unlocked`;
  document.querySelectorAll("[data-level-card]").forEach(card => {
    const levelNumber = Number(card.dataset.levelCard);
    const button = card.querySelector("[data-start-level]");
    const level = levels[levelNumber - 1];
    const responses = state.responses.slice(level.start, level.end + 1);
    const answered = responses.filter(Boolean).length;
    const complete = answered === responses.length;
    const locked = levelNumber > state.maxUnlocked;
    card.classList.toggle("is-locked", locked);
    button.disabled = locked;
    button.textContent = locked ? "🔒 Locked" : complete ? `Replay Level ${levelNumber}` : answered > 0 ? `Continue Level ${levelNumber}` : `Start Level ${levelNumber}`;
  });
}

function startLevel(levelNumber) {
  if (levelNumber > state.maxUnlocked) return;
  const level = levels[levelNumber - 1];
  const levelResponses = state.responses.slice(level.start, level.end + 1);
  const complete = levelResponses.every(Boolean);
  if (complete) {
    for (let index = level.start; index <= level.end; index += 1) state.responses[index] = null;
  }
  state.level = levelNumber;
  const nextUnanswered = state.responses.findIndex((response, index) => index >= level.start && index <= level.end && !response);
  state.index = nextUnanswered === -1 ? level.start : nextUnanswered;
  state.score = state.responses.filter(response => response?.correct).length;
  document.getElementById("score").textContent = state.score;
  menuScreen.hidden = true;
  resultScreen.hidden = true;
  gameHeader.hidden = false;
  lesson.hidden = false;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openSummary() {
  const answered = state.responses.filter(Boolean).length;
  const correct = state.responses.filter(response => response?.correct).length;
  document.getElementById("summaryAnswered").textContent = answered;
  document.getElementById("summaryCorrect").textContent = correct;
  document.getElementById("summaryRemaining").textContent = questions.length - answered;
  document.getElementById("summaryEncouragement").textContent = answered === questions.length
    ? "All 30 questions reviewed!"
    : answered === 0
      ? "Start with your first word!"
      : `${questions.length - answered} words still waiting.`;
  document.getElementById("summaryWords").innerHTML = questions.map((q, index) => {
    const response = state.responses[index];
    const statusClass = response ? (response.correct ? "is-correct" : "is-wrong") : "is-pending";
    const icon = response ? (response.correct ? "✓" : "×") : index + 1;
    const meaning = response ? (q.meaning || q.answer) : "Not answered yet";
    return `<div class="summary-word ${statusClass}"><span class="summary-word-icon">${icon}</span><div><strong>${q.vocab || q.word}</strong><span>${meaning}</span></div></div>`;
  }).join("");
  summaryDialog.showModal();
}

function speakWord() {
  const q = questions[state.index];
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const voice = new SpeechSynthesisUtterance(q.audio || q.vocab || q.word);
  voice.lang = "ms-MY";
  voice.rate = 0.76;
  voice.pitch = 1.03;
  window.speechSynthesis.speak(voice);
}

function tone(frequency, start, duration, type = "sine", volume = .11) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime + start);
  gain.gain.setValueAtTime(0, audioContext.currentTime + start);
  gain.gain.linearRampToValueAtTime(volume, audioContext.currentTime + start + .015);
  gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + start + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(audioContext.currentTime + start);
  oscillator.stop(audioContext.currentTime + start + duration);
}

function playCorrectSound() {
  if (audioContext.state === "suspended") audioContext.resume();
  tone(523.25, 0, .18, "sine", .12);
  tone(659.25, .11, .2, "sine", .13);
  tone(783.99, .23, .28, "sine", .14);
}

function playWrongSound() {
  if (audioContext.state === "suspended") audioContext.resume();
  tone(220, 0, .18, "triangle", .07);
  tone(174.61, .12, .22, "triangle", .055);
}

function burstConfetti(count) {
  const field = document.getElementById("confetti");
  const colours = ["#22a447", "#facc15", "#ef7e32", "#2d87d3"];
  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${20 + Math.random() * 60}%`;
    piece.style.background = colours[i % colours.length];
    piece.style.setProperty("--drift", `${-120 + Math.random() * 240}px`);
    piece.style.animationDelay = `${Math.random() * .18}s`;
    field.appendChild(piece);
    setTimeout(() => piece.remove(), 2200);
  }
}

function showResults() {
  const level = levels[state.level - 1];
  const levelResponses = state.responses.slice(level.start, level.end + 1);
  const levelScore = levelResponses.filter(response => response?.correct).length;
  const isFinalLevel = state.level === levels.length;
  if (!isFinalLevel && state.maxUnlocked < state.level + 1) {
    state.maxUnlocked = state.level + 1;
    localStorage.setItem("kapiBmUnlockedLevel", String(state.maxUnlocked));
  }
  lesson.hidden = true;
  resultScreen.hidden = false;
  document.getElementById("resultEyebrow").textContent = isFinalLevel ? "All levels complete" : `Level ${state.level} complete`;
  document.getElementById("resultTitle").textContent = isFinalLevel ? "Cemerlang! You completed all three levels." : `Hebat! Level ${state.level} complete.`;
  document.getElementById("finalScore").textContent = isFinalLevel ? `${state.score}/${questions.length}` : `${levelScore}/${levelResponses.length}`;
  document.getElementById("resultScoreLabel").textContent = isFinalLevel ? "correct across all three levels" : "correct in this level";
  const resultMessage = isFinalLevel
    ? (state.score >= 27 ? "Your Bahasa Melayu vocabulary is very strong." : "Bagus! Replay the levels to strengthen every word.")
    : (levelScore >= 8 ? `Excellent work. Level ${state.level + 1} is now unlocked!` : `Good effort. Level ${state.level + 1} is ready when you are!`);
  document.getElementById("resultMessage").textContent = resultMessage;
  ["levelOneNode", "levelTwoNode", "levelThreeNode"].forEach((id, index) => {
    const number = index + 1;
    document.getElementById(id).className = number <= state.level ? "level-node is-complete" : number === state.level + 1 ? "level-node is-current" : "level-node";
  });
  document.getElementById("levelConnectorOne").className = state.level >= 1 ? "level-connector is-complete" : "level-connector";
  document.getElementById("levelConnectorTwo").className = state.level >= 2 ? "level-connector is-complete" : "level-connector";
  document.getElementById("resultActionButton").textContent = isFinalLevel ? "Back to Main Menu" : `Continue to Level ${state.level + 1} →`;
  burstConfetti(50);
  playCorrectSound();
  backButton.disabled = false;
}

function handleResultAction() {
  if (state.level < levels.length) {
    startLevel(state.level + 1);
    return;
  }
  renderMenu();
}

function restart() {
  state.level = 1;
  state.index = 0;
  state.score = 0;
  state.responses.fill(null);
  document.getElementById("score").textContent = "0";
  resultScreen.hidden = true;
  lesson.hidden = false;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

nextButton.addEventListener("click", checkAnswer);
document.getElementById("menuButton").addEventListener("click", renderMenu);
document.querySelectorAll("[data-start-level]").forEach(button => button.addEventListener("click", () => startLevel(Number(button.dataset.startLevel))));
backButton.addEventListener("click", goBack);
document.getElementById("summaryButton").addEventListener("click", openSummary);
document.getElementById("closeSummaryButton").addEventListener("click", () => summaryDialog.close());
document.getElementById("dialogDoneButton").addEventListener("click", () => summaryDialog.close());
summaryDialog.addEventListener("click", event => { if (event.target === summaryDialog) summaryDialog.close(); });
document.getElementById("listenButton").addEventListener("click", speakWord);
document.getElementById("resultActionButton").addEventListener("click", handleResultAction);
document.addEventListener("keydown", event => {
  if (resultScreen.hidden && ["1", "2", "3", "4"].includes(event.key) && !state.checked) {
    const button = document.querySelectorAll(".answer-button")[Number(event.key) - 1];
    if (button) button.click();
  }
  if (resultScreen.hidden && event.key === "Enter" && !nextButton.disabled) nextButton.click();
});

renderMenu();
