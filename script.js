/* =====================================================
   DIGITAL PAATHSHALA - Main Logic
   Data source: data.js
===================================================== */

// ========== STATE ==========
let currentSection = "translation";
let currentTopic = null;
let currentPuzzleIndex = 0;
let score = 0;
let selectedWords = [];
let remainingWords = [];
let draggedWord = null;

// ========== SCREEN MANAGEMENT ==========
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  showScreen("homeScreen");
}

// ========== SMART BACK (ek step peeche) ==========
function smartBack() {
  const current = document.querySelector(".screen.active").id;

  if (current === "gameScreen") {
    openLesson(currentTopic);       // Game → Lesson
  } else if (current === "lessonScreen") {
    openSection(currentSection);    // Lesson → Topic list
  } else if (current === "topicScreen") {
    showScreen("homeScreen");       // Topic list → Home
  } else if (current === "resultScreen") {
    openLesson(currentTopic);       // Result → Lesson
  } else {
    showScreen("homeScreen");
  }
}

// ========== OPEN SECTION (Translation / Grammar) ==========
function openSection(section) {
  currentSection = section;
  const title = document.getElementById("sectionTitle");
  const grid = document.getElementById("topicGrid");
  grid.innerHTML = "";

  if (section === "translation") {
    title.textContent = "📘 Translation Topics";
    translationBook.forEach((t, i) => {
      const card = document.createElement("div");
      card.className = "topic-card";
      card.innerHTML = `
        <div class="num">${i + 1}</div>
        <h4>${t.title}</h4>
        <p style="color:#b8b8d1;font-size:0.8rem;margin-top:6px;">${t.chapter}</p>
      `;
      card.onclick = () => openLesson(t);
      grid.appendChild(card);
    });
  } else {
    title.textContent = "📗 Grammar Topics";
    grammarBook.forEach((t, i) => {
      const card = document.createElement("div");
      card.className = "topic-card";
      card.innerHTML = `
        <div class="num">${i + 1}</div>
        <h4>${t.title}</h4>
      `;
      grid.appendChild(card);
    });
  }

  showScreen("topicScreen");
}

// ========== OPEN LESSON ==========
function openLesson(topic) {
  currentTopic = topic;
  document.getElementById("lessonTitle").textContent =
    topic.chapter + ": " + topic.title;

  let html = topic.rule;

  if (topic.examples && topic.examples.length > 0) {
    html += `<h4>📝 Examples (उदाहरण):</h4>`;
    topic.examples.forEach(ex => {
      html += `<div class="example">
        <strong>हिंदी:</strong> ${ex.hindi}<br>
        <strong>English:</strong> ${ex.english}
      </div>`;
    });
  }

  document.getElementById("lessonContent").innerHTML = html;
  showScreen("lessonScreen");
}

// ========== GAME START ==========
function startGame() {
  if (!currentTopic.puzzles || currentTopic.puzzles.length === 0) {
    alert("Is topic me puzzles nahi hain!");
    return;
  }
  currentPuzzleIndex = 0;
  score = 0;
  showScreen("gameScreen");
  loadPuzzle();
}

function loadPuzzle() {
  if (currentPuzzleIndex >= currentTopic.puzzles.length) {
    return showResult();
  }

  const puzzle = currentTopic.puzzles[currentPuzzleIndex];
  document.getElementById("hindiSentence").textContent = puzzle.hindi;
  document.getElementById("feedback").textContent = "";
  document.getElementById("feedback").className = "feedback";

  // Update progress
  const progress = (currentPuzzleIndex / currentTopic.puzzles.length) * 100;
  document.getElementById("progressFill").style.width = progress + "%";
  document.getElementById("scoreText").textContent = `Score: ${score}`;

  // Shuffle words
  remainingWords = shuffle([...puzzle.words]);
  selectedWords = [];

  renderWords();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderWords() {
  const bank = document.getElementById("wordBank");
  const drop = document.getElementById("dropZone");
  bank.innerHTML = "";
  drop.innerHTML = "";

  // Remaining words in bank (clickable + draggable)
  remainingWords.forEach((w, i) => {
    const chip = document.createElement("div");
    chip.className = "word-chip";
    chip.textContent = w;
    chip.draggable = true;
    chip.dataset.word = w;
    chip.dataset.index = i;
    chip.addEventListener("dragstart", handleDragStart);
    chip.addEventListener("dragend", () => chip.style.opacity = "1");
    chip.addEventListener("click", () => moveToDrop(w, i));
    bank.appendChild(chip);
  });

  // Selected words in drop zone (click to remove)
  selectedWords.forEach((w, i) => {
    const chip = document.createElement("div");
    chip.className = "word-chip placed";
    chip.textContent = w;
    chip.addEventListener("click", () => moveToBank(i));
    drop.appendChild(chip);
  });
}

// ========== DRAG & DROP ==========
function handleDragStart(e) {
  draggedWord = {
    word: e.target.dataset.word,
    index: parseInt(e.target.dataset.index)
  };
  e.target.style.opacity = "0.4";
}

function moveToDrop(word, index) {
  remainingWords.splice(index, 1);
  selectedWords.push(word);
  renderWords();
}

function moveToBank(index) {
  const word = selectedWords.splice(index, 1)[0];
  remainingWords.push(word);
  renderWords();
}

// Drop zone listeners
document.addEventListener("DOMContentLoaded", () => {
  const drop = document.getElementById("dropZone");
  if (!drop) return;

  drop.addEventListener("dragover", e => {
    e.preventDefault();
    drop.classList.add("drag-over");
  });
  drop.addEventListener("dragleave", () => drop.classList.remove("drag-over"));
  drop.addEventListener("drop", e => {
    e.preventDefault();
    drop.classList.remove("drag-over");
    if (draggedWord) {
      remainingWords.splice(draggedWord.index, 1);
      selectedWords.push(draggedWord.word);
      draggedWord = null;
      renderWords();
    }
  });
});

// ========== CHECK ANSWER ==========
function checkAnswer() {
  const puzzle = currentTopic.puzzles[currentPuzzleIndex];
  const userAnswer = selectedWords.join(" ").trim();
  const correct = puzzle.answer.trim();
  const fb = document.getElementById("feedback");

  if (selectedWords.length === 0) {
    fb.textContent = "⚠️ Pehle words to choose karo!";
    fb.className = "feedback wrong";
    return;
  }

  if (userAnswer.toLowerCase() === correct.toLowerCase()) {
    score += 10;
    fb.textContent = "✅ Sahi jawab! Shabash! 🎉";
    fb.className = "feedback correct";
    document.getElementById("scoreText").textContent = `Score: ${score}`;

    setTimeout(() => {
      currentPuzzleIndex++;
      loadPuzzle();
    }, 1200);
  } else {
    fb.textContent = "❌ Galat! Phir se try karo 😊";
    fb.className = "feedback wrong";
  }
}

function resetPuzzle() {
  const puzzle = currentTopic.puzzles[currentPuzzleIndex];
  remainingWords = shuffle([...puzzle.words]);
  selectedWords = [];
  document.getElementById("feedback").textContent = "";
  renderWords();
}

// ========== RESULT ==========
function showResult() {
  const total = currentTopic.puzzles.length * 10;
  const percent = (score / total) * 100;

  document.getElementById("resultTitle").textContent =
    percent >= 80 ? "🏆 Excellent!" :
    percent >= 50 ? "👍 Achha kiya!" :
    "💪 Practice karo!";

  document.getElementById("resultMsg").innerHTML =
    `Tumne <strong>${score}</strong> / ${total} score kiya!<br><br>
     <span style="color:#ffd166;">${currentTopic.chapter}: ${currentTopic.title}</span>`;

  document.getElementById("progressFill").style.width = "100%";
  showScreen("resultScreen");
}

function backToLesson() {
  openLesson(currentTopic);
}
