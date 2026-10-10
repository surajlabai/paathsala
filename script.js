/* =====================================================
   DIGITAL PAATHSHALA - Premium English Learning Game
   Data + Logic + Puzzle Game (Pure JavaScript)
===================================================== */

// ========== DATA: TRANSLATION TOPICS ==========
const translationTopics = [
  {
    id: 1,
    title: "Use of Is, Am, Are",
    lesson: `
      <p><strong>Rule:</strong> Yeh sab 'to be' verbs hain — Present Tense me use hote hain.</p>
      <p>👉 <strong>Is</strong> → He, She, It, Singular Noun ke saath</p>
      <p>👉 <strong>Am</strong> → Sirf 'I' ke saath</p>
      <p>👉 <strong>Are</strong> → You, We, They, Plural Noun ke saath</p>
      <div class="example">Ram is a doctor. (राम एक डॉक्टर है।)</div>
      <div class="example">I am a student. (मैं एक छात्र हूँ।)</div>
      <div class="example">They are players. (वे खिलाड़ी हैं।)</div>
    `,
    puzzles: [
      { hindi: "राम एक डॉक्टर है।", answer: "Ram is a doctor", words: ["Ram", "is", "a", "doctor"] },
      { hindi: "मैं एक छात्र हूँ।", answer: "I am a student", words: ["I", "am", "a", "student"] },
      { hindi: "वे खिलाड़ी हैं।", answer: "They are players", words: ["They", "are", "players"] },
      { hindi: "वह एक शिक्षक है।", answer: "He is a teacher", words: ["He", "is", "a", "teacher"] },
      { hindi: "हम दोस्त हैं।", answer: "We are friends", words: ["We", "are", "friends"] }
    ]
  },
  {
    id: 2,
    title: "Use of Was, Were",
    lesson: `
      <p><strong>Rule:</strong> Yeh 'to be' verbs ka Past Tense hai.</p>
      <p>👉 <strong>Was</strong> → I, He, She, It, Singular ke saath</p>
      <p>👉 <strong>Were</strong> → You, We, They, Plural ke saath</p>
      <div class="example">He was happy. (वह खुश था।)</div>
      <div class="example">They were late. (वे देर से थे।)</div>
    `,
    puzzles: [
      { hindi: "वह खुश था।", answer: "He was happy", words: ["He", "was", "happy"] },
      { hindi: "वे देर से थे।", answer: "They were late", words: ["They", "were", "late"] },
      { hindi: "मैं थका हुआ था।", answer: "I was tired", words: ["I", "was", "tired"] },
      { hindi: "हम तैयार थे।", answer: "We were ready", words: ["We", "were", "ready"] }
    ]
  },
  {
    id: 3,
    title: "Use of Has, Have",
    lesson: `
      <p><strong>Rule:</strong> Possession dikhane ke liye Present Tense me use hote hain.</p>
      <p>👉 <strong>Has</strong> → He, She, It, Singular ke saath</p>
      <p>👉 <strong>Have</strong> → I, You, We, They, Plural ke saath</p>
      <div class="example">She has a car. (उसके पास एक कार है।)</div>
      <div class="example">I have a pen. (मेरे पास एक पेन है।)</div>
    `,
    puzzles: [
      { hindi: "उसके पास एक कार है।", answer: "She has a car", words: ["She", "has", "a", "car"] },
      { hindi: "मेरे पास एक पेन है।", answer: "I have a pen", words: ["I", "have", "a", "pen"] },
      { hindi: "उनके पास एक घर है।", answer: "They have a house", words: ["They", "have", "a", "house"] },
      { hindi: "राम के पास एक किताब है।", answer: "Ram has a book", words: ["Ram", "has", "a", "book"] }
    ]
  },
  {
    id: 4,
    title: "Present Indefinite Tense",
    lesson: `
      <p><strong>Rule:</strong> Rozana ki aadatein, general sach, habits batane ke liye.</p>
      <p>👉 Singular subject (He/She/It) → verb + <strong>s/es</strong></p>
      <p>👉 Plural subject (I/We/You/They) → verb as it is</p>
      <div class="example">He goes to school. (वह स्कूल जाता है।)</div>
      <div class="example">They play cricket. (वे क्रिकेट खेलते हैं।)</div>
    `,
    puzzles: [
      { hindi: "वह स्कूल जाता है।", answer: "He goes to school", words: ["He", "goes", "to", "school"] },
      { hindi: "वे क्रिकेट खेलते हैं।", answer: "They play cricket", words: ["They", "play", "cricket"] },
      { hindi: "मैं रोज पढ़ता हूँ।", answer: "I study daily", words: ["I", "study", "daily"] },
      { hindi: "वह गाना गाती है।", answer: "She sings a song", words: ["She", "sings", "a", "song"] }
    ]
  },
  {
    id: 5,
    title: "Present Continuous Tense",
    lesson: `
      <p><strong>Rule:</strong> Jo kaam abhi ho raha hai.</p>
      <p>Formula: <strong>Subject + is/am/are + verb+ing + object</strong></p>
      <div class="example">He is playing. (वह खेल रहा है।)</div>
      <div class="example">I am reading. (मैं पढ़ रहा हूँ।)</div>
    `,
    puzzles: [
      { hindi: "वह खेल रहा है।", answer: "He is playing", words: ["He", "is", "playing"] },
      { hindi: "मैं पढ़ रहा हूँ।", answer: "I am reading", words: ["I", "am", "reading"] },
      { hindi: "वे गा रहे हैं।", answer: "They are singing", words: ["They", "are", "singing"] },
      { hindi: "बच्चे खेल रहे हैं।", answer: "Children are playing", words: ["Children", "are", "playing"] }
    ]
  },
  {
    id: 6,
    title: "Past Indefinite Tense",
    lesson: `
      <p><strong>Rule:</strong> Jo kaam kal ya pehle khatam ho gaya.</p>
      <p>Formula: <strong>Subject + verb (2nd form) + object</strong></p>
      <div class="example">He went to Delhi. (वह दिल्ली गया।)</div>
      <div class="example">I ate food. (मैंने खाना खाया।)</div>
    `,
    puzzles: [
      { hindi: "वह दिल्ली गया।", answer: "He went to Delhi", words: ["He", "went", "to", "Delhi"] },
      { hindi: "मैंने खाना खाया।", answer: "I ate food", words: ["I", "ate", "food"] },
      { hindi: "उसने एक पत्र लिखा।", answer: "He wrote a letter", words: ["He", "wrote", "a", "letter"] },
      { hindi: "वे कल आए।", answer: "They came yesterday", words: ["They", "came", "yesterday"] }
    ]
  },
  {
    id: 7,
    title: "Future Indefinite Tense",
    lesson: `
      <p><strong>Rule:</strong> Jo kaam aage hone wala hai.</p>
      <p>Formula: <strong>Subject + will/shall + verb (1st form) + object</strong></p>
      <div class="example">I will go tomorrow. (मैं कल जाऊंगा।)</div>
      <div class="example">She will sing. (वह गाएगी।)</div>
    `,
    puzzles: [
      { hindi: "मैं कल जाऊंगा।", answer: "I will go tomorrow", words: ["I", "will", "go", "tomorrow"] },
      { hindi: "वह गाएगी।", answer: "She will sing", words: ["She", "will", "sing"] },
      { hindi: "वे मैच जीतेंगे।", answer: "They will win the match", words: ["They", "will", "win", "the", "match"] },
      { hindi: "हम पढ़ेंगे।", answer: "We will study", words: ["We", "will", "study"] }
    ]
  },
  {
    id: 8,
    title: "Use of Can, Could",
    lesson: `
      <p><strong>Rule:</strong> Ability / permission dikhane ke liye.</p>
      <p>👉 <strong>Can</strong> → Present ability</p>
      <p>👉 <strong>Could</strong> → Past ability / polite request</p>
      <div class="example">I can swim. (मैं तैर सकता हूँ।)</div>
      <div class="example">He could run fast. (वह तेज दौड़ सकता था।)</div>
    `,
    puzzles: [
      { hindi: "मैं तैर सकता हूँ।", answer: "I can swim", words: ["I", "can", "swim"] },
      { hindi: "वह तेज दौड़ सकता था।", answer: "He could run fast", words: ["He", "could", "run", "fast"] },
      { hindi: "क्या तुम गा सकते हो?", answer: "Can you sing", words: ["Can", "you", "sing"] },
      { hindi: "वह अंग्रेजी बोल सकती है।", answer: "She can speak English", words: ["She", "can", "speak", "English"] }
    ]
  },
  {
    id: 9,
    title: "Use of There",
    lesson: `
      <p><strong>Rule:</strong> Kisi cheez ke hone ka pata dene ke liye.</p>
      <p>👉 <strong>There is</strong> → Singular</p>
      <p>👉 <strong>There are</strong> → Plural</p>
      <div class="example">There is a book. (एक किताब है।)</div>
      <div class="example">There are many students. (बहुत छात्र हैं।)</div>
    `,
    puzzles: [
      { hindi: "मेज पर एक किताब है।", answer: "There is a book on the table", words: ["There", "is", "a", "book", "on", "the", "table"] },
      { hindi: "कमरे में बहुत छात्र हैं।", answer: "There are many students in the room", words: ["There", "are", "many", "students", "in", "the", "room"] },
      { hindi: "बगीचे में फूल हैं।", answer: "There are flowers in the garden", words: ["There", "are", "flowers", "in", "the", "garden"] }
    ]
  },
  {
    id: 10,
    title: "Active & Passive Voice",
    lesson: `
      <p><strong>Rule:</strong> Active me subject kaam karta hai, Passive me kaam hota hai.</p>
      <p>Formula (Passive): <strong>Object + helping verb + V3 + by + Subject</strong></p>
      <div class="example">Ram eats mango. → Mango is eaten by Ram.</div>
      <div class="example">He wrote a letter. → A letter was written by him.</div>
    `,
    puzzles: [
      { hindi: "आम राम के द्वारा खाया जाता है।", answer: "Mango is eaten by Ram", words: ["Mango", "is", "eaten", "by", "Ram"] },
      { hindi: "पत्र उसके द्वारा लिखा गया।", answer: "A letter was written by him", words: ["A", "letter", "was", "written", "by", "him"] },
      { hindi: "गाना उसके द्वारा गाया जाता है।", answer: "A song is sung by her", words: ["A", "song", "is", "sung", "by", "her"] }
    ]
  }
];

// ========== STATE ==========
let currentSection = "translation";
let currentTopic = null;
let currentPuzzleIndex = 0;
let score = 0;
let selectedWords = [];
let remainingWords = [];

// ========== SCREEN MANAGEMENT ==========
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openSection(section) {
  currentSection = section;
  const title = document.getElementById("sectionTitle");
  const grid = document.getElementById("topicGrid");
  grid.innerHTML = "";

  if (section === "translation") {
    title.textContent = "📘 Translation Topics";
    translationTopics.forEach((t, i) => {
      const card = document.createElement("div");
      card.className = "topic-card";
      card.innerHTML = `<div class="num">${i + 1}</div><h4>${t.title}</h4>`;
      card.onclick = () => openLesson(t);
      grid.appendChild(card);
    });
  } else {
    title.textContent = "📗 Grammar Topics";
    grid.innerHTML = `<div class="topic-card" style="grid-column:1/-1;padding:60px;">
      <div class="num">🚧</div>
      <h4>Grammar Section Coming Soon!</h4>
      <p style="color:#b8b8d1;margin-top:10px;">Filhaal Translation section ka poora maza lo 😊</p>
    </div>`;
  }

  showScreen("topicScreen");
}

function goHome() {
  showScreen("homeScreen");
}

function backToTopics() {
  openSection(currentSection);
}

function backToLesson() {
  openLesson(currentTopic);
}

// ========== LESSON ==========
function openLesson(topic) {
  currentTopic = topic;
  document.getElementById("lessonTitle").textContent = topic.title;
  document.getElementById("lessonContent").innerHTML = topic.lesson;
  showScreen("lessonScreen");
}

// ========== GAME START ==========
function startGame() {
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

  // Remaining words in bank (draggable)
  remainingWords.forEach((w, i) => {
    const chip = document.createElement("div");
    chip.className = "word-chip";
    chip.textContent = w;
    chip.draggable = true;
    chip.dataset.word = w;
    chip.dataset.index = i;
    chip.addEventListener("dragstart", handleDragStart);
    chip.addEventListener("click", () => moveToDrop(w, i));
    bank.appendChild(chip);
  });

  // Selected words in drop zone
  selectedWords.forEach((w, i) => {
    const chip = document.createElement("div");
    chip.className = "word-chip placed";
    chip.textContent = w;
    chip.addEventListener("click", () => moveToBank(i));
    drop.appendChild(chip);
  });
}

// ========== DRAG & DROP ==========
let draggedWord = null;

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
    percent >= 80 ? "🏆 Excellent!" : percent >= 50 ? "👍 Achha kiya!" : "💪 Practice karo!";

  document.getElementById("resultMsg").innerHTML =
    `Tumne <strong>${score}</strong> / ${total} score kiya!<br>${currentTopic.title}`;

  showScreen("resultScreen");
  document.getElementById("progressFill").style.width = "100%";
}
