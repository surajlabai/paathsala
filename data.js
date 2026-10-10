/* =====================================================
   DIGITAL PAATHSHALA - COMPLETE BOOK DATA
   Oxford Current English Translation Style
   Structure: Chapter → Rule → Examples → Puzzles
===================================================== */

const translationBook = [
  // ============ CHAPTER 1: IS, AM, ARE ============
  {
    id: 1,
    chapter: "Chapter 1",
    title: "Use of Is, Am, Are",
    rule: `
      <h4>📖 Rule (नियम):</h4>
      <p>Is, Am, Are — teeno <strong>'to be' verbs</strong> hain jo <strong>Present Tense</strong> me use hote hain. Inka matlab hota hai — <strong>"है / हूँ / हैं"</strong>.</p>
      <ul>
        <li><strong>Is</strong> → He, She, It, Ram, Sita, Singular Noun ke saath</li>
        <li><strong>Am</strong> → Sirf <strong>I</strong> ke saath</li>
        <li><strong>Are</strong> → You, We, They, Plural Noun ke saath</li>
      </ul>
      <h4>📐 Formula:</h4>
      <div class="formula">Subject + is/am/are + Object</div>
      <h4>🚫 Negative (नकारात्मक):</h4>
      <div class="formula">Subject + is/am/are + not + Object</div>
      <h4>❓ Interrogative (प्रश्नवाचक):</h4>
      <div class="formula">Is/Am/Are + Subject + Object?</div>
    `,
    examples: [
      { hindi: "राम एक डॉक्टर है।", english: "Ram is a doctor." },
      { hindi: "मैं एक छात्र हूँ।", english: "I am a student." },
      { hindi: "वे खिलाड़ी हैं।", english: "They are players." },
      { hindi: "वह एक शिक्षक है।", english: "He is a teacher." },
      { hindi: "हम दोस्त हैं।", english: "We are friends." },
      { hindi: "वह नहीं है।", english: "He is not here." },
      { hindi: "क्या तुम होशियार हो?", english: "Are you clever?" }
    ],
    puzzles: [
      { hindi: "राम एक डॉक्टर है।", answer: "Ram is a doctor", words: ["Ram", "is", "a", "doctor"] },
      { hindi: "मैं एक छात्र हूँ।", answer: "I am a student", words: ["I", "am", "a", "student"] },
      { hindi: "वे खिलाड़ी हैं।", answer: "They are players", words: ["They", "are", "players"] },
      { hindi: "वह एक शिक्षक है।", answer: "He is a teacher", words: ["He", "is", "a", "teacher"] },
      { hindi: "हम दोस्त हैं।", answer: "We are friends", words: ["We", "are", "friends"] },
      { hindi: "सीता एक गायिका है।", answer: "Sita is a singer", words: ["Sita", "is", "a", "singer"] },
      { hindi: "यह एक किताब है।", answer: "It is a book", words: ["It", "is", "a", "book"] },
      { hindi: "तुम एक अच्छे लड़के हो।", answer: "You are a good boy", words: ["You", "are", "a", "good", "boy"] },
      { hindi: "मोहन और सोहन भाई हैं।", answer: "Mohan and Sohan are brothers", words: ["Mohan", "and", "Sohan", "are", "brothers"] },
      { hindi: "क्या वे खिलाड़ी हैं?", answer: "Are they players", words: ["Are", "they", "players"] }
    ]
  },

  // ============ CHAPTER 2: WAS, WERE ============
  {
    id: 2,
    chapter: "Chapter 2",
    title: "Use of Was, Were",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Was aur Were — <strong>'to be' verbs ka Past Tense</strong> hai. Inka matlab — <strong>"था / थी / थे"</strong>.</p>
      <ul>
        <li><strong>Was</strong> → I, He, She, It, Singular ke saath</li>
        <li><strong>Were</strong> → You, We, They, Plural ke saath</li>
      </ul>
      <div class="formula">Subject + was/were + Object</div>
      <h4>🚫 Negative:</h4>
      <div class="formula">Subject + was/were + not + Object</div>
      <h4>❓ Interrogative:</h4>
      <div class="formula">Was/Were + Subject + Object?</div>
    `,
    examples: [
      { hindi: "वह खुश था।", english: "He was happy." },
      { hindi: "वे देर से थे।", english: "They were late." },
      { hindi: "मैं थका हुआ था।", english: "I was tired." },
      { hindi: "हम तैयार थे।", english: "We were ready." }
    ],
    puzzles: [
      { hindi: "वह खुश था।", answer: "He was happy", words: ["He", "was", "happy"] },
      { hindi: "वे देर से थे।", answer: "They were late", words: ["They", "were", "late"] },
      { hindi: "मैं थका हुआ था।", answer: "I was tired", words: ["I", "was", "tired"] },
      { hindi: "हम तैयार थे।", answer: "We were ready", words: ["We", "were", "ready"] },
      { hindi: "वह एक अच्छा लड़का था।", answer: "He was a good boy", words: ["He", "was", "a", "good", "boy"] },
      { hindi: "तुम वहाँ थे।", answer: "You were there", words: ["You", "were", "there"] },
      { hindi: "यह एक पुरानी किताब थी।", answer: "It was an old book", words: ["It", "was", "an", "old", "book"] },
      { hindi: "बच्चे बगीचे में थे।", answer: "Children were in the garden", words: ["Children", "were", "in", "the", "garden"] }
    ]
  },

  // ============ CHAPTER 3: HAS, HAVE, HAD ============
  {
    id: 3,
    chapter: "Chapter 3",
    title: "Use of Has, Have, Had",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Has/Have/Had ka matlab — <strong>"पास है / पास था"</strong> (possession).</p>
      <ul>
        <li><strong>Has</strong> → He, She, It, Singular (Present)</li>
        <li><strong>Have</strong> → I, You, We, They, Plural (Present)</li>
        <li><strong>Had</strong> → Sabhi subjects ke saath (Past)</li>
      </ul>
      <div class="formula">Subject + has/have/had + Object</div>
      <h4>🚫 Negative:</h4>
      <div class="formula">Subject + has/have/had + no/not + Object</div>
      <h4>❓ Interrogative:</h4>
      <div class="formula">Has/Have/Had + Subject + Object?</div>
    `,
    examples: [
      { hindi: "उसके पास एक कार है।", english: "She has a car." },
      { hindi: "मेरे पास एक पेन है।", english: "I have a pen." },
      { hindi: "उसके पास एक किताब थी।", english: "He had a book." }
    ],
    puzzles: [
      { hindi: "उसके पास एक कार है।", answer: "She has a car", words: ["She", "has", "a", "car"] },
      { hindi: "मेरे पास एक पेन है।", answer: "I have a pen", words: ["I", "have", "a", "pen"] },
      { hindi: "उनके पास एक घर है।", answer: "They have a house", words: ["They", "have", "a", "house"] },
      { hindi: "राम के पास एक किताब है।", answer: "Ram has a book", words: ["Ram", "has", "a", "book"] },
      { hindi: "उसके पास एक किताब थी।", answer: "He had a book", words: ["He", "had", "a", "book"] },
      { hindi: "हमारे पास पैसे थे।", answer: "We had money", words: ["We", "had", "money"] },
      { hindi: "तुम्हारे पास एक फोन है।", answer: "You have a phone", words: ["You", "have", "a", "phone"] },
      { hindi: "बिल्ली के पास दूध है।", answer: "The cat has milk", words: ["The", "cat", "has", "milk"] }
    ]
  },

  // ============ CHAPTER 4: PRESENT INDEFINITE ============
  {
    id: 4,
    chapter: "Chapter 4",
    title: "Present Indefinite Tense",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Rozana ki aadatein, general sach, habits batane ke liye use hota hai.</p>
      <ul>
        <li>Singular Subject (He/She/It) → verb + <strong>s/es</strong></li>
        <li>Plural Subject (I/We/You/They) → verb as it is</li>
      </ul>
      <div class="formula">Subject + Verb (s/es) + Object</div>
      <h4>🚫 Negative:</h4>
      <div class="formula">Subject + do/does + not + Verb + Object</div>
      <h4>❓ Interrogative:</h4>
      <div class="formula">Do/Does + Subject + Verb + Object?</div>
      <h4>❓ WH-Question:</h4>
      <div class="formula">WH-word + do/does + Subject + Verb + Object?</div>
    `,
    examples: [
      { hindi: "वह स्कूल जाता है।", english: "He goes to school." },
      { hindi: "वे क्रिकेट खेलते हैं।", english: "They play cricket." },
      { hindi: "वह स्कूल नहीं जाता है।", english: "He does not go to school." },
      { hindi: "क्या वह स्कूल जाता है?", english: "Does he go to school?" }
    ],
    puzzles: [
      { hindi: "वह स्कूल जाता है।", answer: "He goes to school", words: ["He", "goes", "to", "school"] },
      { hindi: "वे क्रिकेट खेलते हैं।", answer: "They play cricket", words: ["They", "play", "cricket"] },
      { hindi: "मैं रोज पढ़ता हूँ।", answer: "I study daily", words: ["I", "study", "daily"] },
      { hindi: "वह गाना गाती है।", answer: "She sings a song", words: ["She", "sings", "a", "song"] },
      { hindi: "वह स्कूल नहीं जाता है।", answer: "He does not go to school", words: ["He", "does", "not", "go", "to", "school"] },
      { hindi: "क्या वह स्कूल जाता है?", answer: "Does he go to school", words: ["Does", "he", "go", "to", "school"] },
      { hindi: "मैं झूठ नहीं बोलता।", answer: "I do not tell a lie", words: ["I", "do", "not", "tell", "a", "lie"] },
      { hindi: "क्या तुम अंग्रेजी पढ़ते हो?", answer: "Do you read English", words: ["Do", "you", "read", "English"] },
      { hindi: "सूरज पूरब में उगता है।", answer: "The sun rises in the east", words: ["The", "sun", "rises", "in", "the", "east"] },
      { hindi: "वह रोज सुबह टहलता है।", answer: "He walks every morning", words: ["He", "walks", "every", "morning"] }
    ]
  },

  // ============ CHAPTER 5: PRESENT CONTINUOUS ============
  {
    id: 5,
    chapter: "Chapter 5",
    title: "Present Continuous Tense",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Jo kaam <strong>abhi ho raha hai</strong> (is waqt).</p>
      <div class="formula">Subject + is/am/are + Verb+ing + Object</div>
      <h4>🚫 Negative:</h4>
      <div class="formula">Subject + is/am/are + not + Verb+ing + Object</div>
      <h4>❓ Interrogative:</h4>
      <div class="formula">Is/Am/Are + Subject + Verb+ing + Object?</div>
    `,
    examples: [
      { hindi: "वह खेल रहा है।", english: "He is playing." },
      { hindi: "मैं पढ़ रहा हूँ।", english: "I am reading." },
      { hindi: "वह नहीं खेल रहा है।", english: "He is not playing." },
      { hindi: "क्या वह खेल रहा है?", english: "Is he playing?" }
    ],
    puzzles: [
      { hindi: "वह खेल रहा है।", answer: "He is playing", words: ["He", "is", "playing"] },
      { hindi: "मैं पढ़ रहा हूँ।", answer: "I am reading", words: ["I", "am", "reading"] },
      { hindi: "वे गा रहे हैं।", answer: "They are singing", words: ["They", "are", "singing"] },
      { hindi: "बच्चे खेल रहे हैं।", answer: "Children are playing", words: ["Children", "are", "playing"] },
      { hindi: "वह नहीं खेल रहा है।", answer: "He is not playing", words: ["He", "is", "not", "playing"] },
      { hindi: "क्या वह खेल रहा है?", answer: "Is he playing", words: ["Is", "he", "playing"] },
      { hindi: "मैं खाना खा रहा हूँ।", answer: "I am eating food", words: ["I", "am", "eating", "food"] },
      { hindi: "वह सो रही है।", answer: "She is sleeping", words: ["She", "is", "sleeping"] },
      { hindi: "बारिश हो रही है।", answer: "It is raining", words: ["It", "is", "raining"] },
      { hindi: "हम पढ़ नहीं रहे हैं।", answer: "We are not studying", words: ["We", "are", "not", "studying"] }
    ]
  },

  // ============ CHAPTER 6: PRESENT PERFECT ============
  {
    id: 6,
    chapter: "Chapter 6",
    title: "Present Perfect Tense",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Jo kaam abhi-abhi poora hua hai, par uska asar abhi bhi hai.</p>
      <div class="formula">Subject + has/have + Verb (3rd form) + Object</div>
      <h4>🚫 Negative:</h4>
      <div class="formula">Subject + has/have + not + V3 + Object</div>
      <h4>❓ Interrogative:</h4>
      <div class="formula">Has/Have + Subject + V3 + Object?</div>
    `,
    examples: [
      { hindi: "मैंने खाना खाया है।", english: "I have eaten food." },
      { hindi: "उसने काम किया है।", english: "He has done the work." }
    ],
    puzzles: [
      { hindi: "मैंने खाना खाया है।", answer: "I have eaten food", words: ["I", "have", "eaten", "food"] },
      { hindi: "उसने काम किया है।", answer: "He has done the work", words: ["He", "has", "done", "the", "work"] },
      { hindi: "वे जा चुके हैं।", answer: "They have gone", words: ["They", "have", "gone"] },
      { hindi: "मैंने नहीं खाया है।", answer: "I have not eaten", words: ["I", "have", "not", "eaten"] },
      { hindi: "क्या तुमने खाया है?", answer: "Have you eaten", words: ["Have", "you", "eaten"] },
      { hindi: "उसने पत्र लिखा है।", answer: "He has written a letter", words: ["He", "has", "written", "a", "letter"] },
      { hindi: "हमने फिल्म देखी है।", answer: "We have seen the movie", words: ["We", "have", "seen", "the", "movie"] },
      { hindi: "बारिश रुक गई है।", answer: "The rain has stopped", words: ["The", "rain", "has", "stopped"] }
    ]
  },

  // ============ CHAPTER 7: PAST INDEFINITE ============
  {
    id: 7,
    chapter: "Chapter 7",
    title: "Past Indefinite Tense",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Jo kaam <strong>beet chuka hai</strong> (kal, pichle saal, etc.).</p>
      <div class="formula">Subject + Verb (2nd form) + Object</div>
      <h4>🚫 Negative:</h4>
      <div class="formula">Subject + did + not + Verb (1st form) + Object</div>
      <h4>❓ Interrogative:</h4>
      <div class="formula">Did + Subject + Verb (1st form) + Object?</div>
    `,
    examples: [
      { hindi: "वह दिल्ली गया।", english: "He went to Delhi." },
      { hindi: "मैंने खाना खाया।", english: "I ate food." }
    ],
    puzzles: [
      { hindi: "वह दिल्ली गया।", answer: "He went to Delhi", words: ["He", "went", "to", "Delhi"] },
      { hindi: "मैंने खाना खाया।", answer: "I ate food", words: ["I", "ate", "food"] },
      { hindi: "उसने एक पत्र लिखा।", answer: "He wrote a letter", words: ["He", "wrote", "a", "letter"] },
      { hindi: "वे कल आए।", answer: "They came yesterday", words: ["They", "came", "yesterday"] },
      { hindi: "वह नहीं गया।", answer: "He did not go", words: ["He", "did", "not", "go"] },
      { hindi: "क्या वह गया?", answer: "Did he go", words: ["Did", "he", "go"] },
      { hindi: "मैंने उसे देखा।", answer: "I saw him", words: ["I", "saw", "him"] },
      { hindi: "हमने मैच जीता।", answer: "We won the match", words: ["We", "won", "the", "match"] },
      { hindi: "उसने मुझे नहीं बताया।", answer: "He did not tell me", words: ["He", "did", "not", "tell", "me"] },
      { hindi: "क्या तुमने खाना खाया?", answer: "Did you eat food", words: ["Did", "you", "eat", "food"] }
    ]
  },

  // ============ CHAPTER 8: PAST CONTINUOUS ============
  {
    id: 8,
    chapter: "Chapter 8",
    title: "Past Continuous Tense",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Jo kaam <strong>past me kuch samay tak chal raha tha</strong>.</p>
      <div class="formula">Subject + was/were + Verb+ing + Object</div>
      <h4>🚫 Negative:</h4>
      <div class="formula">Subject + was/were + not + Verb+ing + Object</div>
      <h4>❓ Interrogative:</h4>
      <div class="formula">Was/Were + Subject + Verb+ing + Object?</div>
    `,
    examples: [
      { hindi: "वह खेल रहा था।", english: "He was playing." },
      { hindi: "वे पढ़ रहे थे।", english: "They were reading." }
    ],
    puzzles: [
      { hindi: "वह खेल रहा था।", answer: "He was playing", words: ["He", "was", "playing"] },
      { hindi: "वे पढ़ रहे थे।", answer: "They were reading", words: ["They", "were", "reading"] },
      { hindi: "मैं सो रहा था।", answer: "I was sleeping", words: ["I", "was", "sleeping"] },
      { hindi: "वह नहीं पढ़ रहा था।", answer: "He was not reading", words: ["He", "was", "not", "reading"] },
      { hindi: "क्या तुम खेल रहे थे?", answer: "Were you playing", words: ["Were", "you", "playing"] },
      { hindi: "बच्चे रो रहे थे।", answer: "Children were crying", words: ["Children", "were", "crying"] },
      { hindi: "बारिश हो रही थी।", answer: "It was raining", words: ["It", "was", "raining"] },
      { hindi: "हम बात कर रहे थे।", answer: "We were talking", words: ["We", "were", "talking"] }
    ]
  },

  // ============ CHAPTER 9: PRESENT PERFECT CONTINUOUS ============
  {
    id: 9,
    chapter: "Chapter 9",
    title: "Present Perfect Continuous Tense",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Jo kaam <strong>past se ab tak chal raha hai</strong>. Time ke saath <strong>since/for</strong> use hota hai.</p>
      <ul>
        <li><strong>Since</strong> → fixed point (since morning, since 2010)</li>
        <li><strong>For</strong> → duration (for 2 hours, for 5 years)</li>
      </ul>
      <div class="formula">Subject + has/have been + Verb+ing + since/for + Object</div>
    `,
    examples: [
      { hindi: "मैं 2 घंटे से पढ़ रहा हूँ।", english: "I have been reading for 2 hours." },
      { hindi: "वह सुबह से खेल रहा है।", english: "He has been playing since morning." }
    ],
    puzzles: [
      { hindi: "मैं 2 घंटे से पढ़ रहा हूँ।", answer: "I have been reading for 2 hours", words: ["I", "have", "been", "reading", "for", "2", "hours"] },
      { hindi: "वह सुबह से खेल रहा है।", answer: "He has been playing since morning", words: ["He", "has", "been", "playing", "since", "morning"] },
      { hindi: "वे 5 साल से यहाँ रह रहे हैं।", answer: "They have been living here for 5 years", words: ["They", "have", "been", "living", "here", "for", "5", "years"] },
      { hindi: "बारिश कल से हो रही है।", answer: "It has been raining since yesterday", words: ["It", "has", "been", "raining", "since", "yesterday"] },
      { hindi: "हम 3 घंटे से इंतज़ार कर रहे हैं।", answer: "We have been waiting for 3 hours", words: ["We", "have", "been", "waiting", "for", "3", "hours"] },
      { hindi: "वह 2010 से पढ़ा रहा है।", answer: "He has been teaching since 2010", words: ["He", "has", "been", "teaching", "since", "2010"] }
    ]
  },

  // ============ CHAPTER 10: PAST PERFECT ============
  {
    id: 10,
    chapter: "Chapter 10",
    title: "Past Perfect Tense",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Jab do kaam past me hue, jo <strong>pehle hua</strong> wo Past Perfect me hota hai.</p>
      <div class="formula">Subject + had + Verb (3rd form) + Object</div>
      <h4>🚫 Negative:</h4>
      <div class="formula">Subject + had + not + V3 + Object</div>
      <h4>❓ Interrogative:</h4>
      <div class="formula">Had + Subject + V3 + Object?</div>
    `,
    examples: [
      { hindi: "वह जा चुका था।", english: "He had gone." },
      { hindi: "मैंने खाना खाया था।", english: "I had eaten food." }
    ],
    puzzles: [
      { hindi: "वह जा चुका था।", answer: "He had gone", words: ["He", "had", "gone"] },
      { hindi: "मैंने खाना खाया था।", answer: "I had eaten food", words: ["I", "had", "eaten", "food"] },
      { hindi: "वे आ चुके थे।", answer: "They had come", words: ["They", "had", "come"] },
      { hindi: "उसने पत्र लिखा था।", answer: "He had written a letter", words: ["He", "had", "written", "a", "letter"] },
      { hindi: "वह नहीं गया था।", answer: "He had not gone", words: ["He", "had", "not", "gone"] },
      { hindi: "क्या तुमने देखा था?", answer: "Had you seen", words: ["Had", "you", "seen"] },
      { hindi: "बारिश रुक गई थी।", answer: "The rain had stopped", words: ["The", "rain", "had", "stopped"] },
      { hindi: "हम पहुँच चुके थे।", answer: "We had reached", words: ["We", "had", "reached"] }
    ]
  },

  // ============ CHAPTER 11: FUTURE INDEFINITE ============
  {
    id: 11,
    chapter: "Chapter 11",
    title: "Future Indefinite Tense",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Jo kaam <strong>aage hone wala hai</strong>.</p>
      <div class="formula">Subject + will/shall + Verb (1st form) + Object</div>
      <h4>🚫 Negative:</h4>
      <div class="formula">Subject + will/shall + not + Verb + Object</div>
      <h4>❓ Interrogative:</h4>
      <div class="formula">Will/Shall + Subject + Verb + Object?</div>
    `,
    examples: [
      { hindi: "मैं कल जाऊंगा।", english: "I will go tomorrow." },
      { hindi: "वह गाएगी।", english: "She will sing." }
    ],
    puzzles: [
      { hindi: "मैं कल जाऊंगा।", answer: "I will go tomorrow", words: ["I", "will", "go", "tomorrow"] },
      { hindi: "वह गाएगी।", answer: "She will sing", words: ["She", "will", "sing"] },
      { hindi: "वे मैच जीतेंगे।", answer: "They will win the match", words: ["They", "will", "win", "the", "match"] },
      { hindi: "हम पढ़ेंगे।", answer: "We will study", words: ["We", "will", "study"] },
      { hindi: "वह नहीं आएगा।", answer: "He will not come", words: ["He", "will", "not", "come"] },
      { hindi: "क्या तुम जाओगे?", answer: "Will you go", words: ["Will", "you", "go"] },
      { hindi: "मैं तुम्हारी मदद करूंगा।", answer: "I will help you", words: ["I", "will", "help", "you"] },
      { hindi: "बारिश होगी।", answer: "It will rain", words: ["It", "will", "rain"] }
    ]
  },

  // ============ CHAPTER 12: FUTURE CONTINUOUS ============
  {
    id: 12,
    chapter: "Chapter 12",
    title: "Future Continuous Tense",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Jo kaam future me <strong>kuch samay tak chal raha hoga</strong>.</p>
      <div class="formula">Subject + will be/shall be + Verb+ing + Object</div>
    `,
    examples: [
      { hindi: "वह खेल रहा होगा।", english: "He will be playing." }
    ],
    puzzles: [
      { hindi: "वह खेल रहा होगा।", answer: "He will be playing", words: ["He", "will", "be", "playing"] },
      { hindi: "मैं पढ़ रहा होऊंगा।", answer: "I will be reading", words: ["I", "will", "be", "reading"] },
      { hindi: "वे गा रहे होंगे।", answer: "They will be singing", words: ["They", "will", "be", "singing"] },
      { hindi: "वह सो रही होगी।", answer: "She will be sleeping", words: ["She", "will", "be", "sleeping"] },
      { hindi: "हम इंतज़ार कर रहे होंगे।", answer: "We will be waiting", words: ["We", "will", "be", "waiting"] },
      { hindi: "बारिश हो रही होगी।", answer: "It will be raining", words: ["It", "will", "be", "raining"] }
    ]
  },

  // ============ CHAPTER 13: CAN, COULD ============
  {
    id: 13,
    chapter: "Chapter 13",
    title: "Use of Can, Could",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Ability (क्षमता), permission (अनुमति), possibility dikhane ke liye.</p>
      <ul>
        <li><strong>Can</strong> → Present ability (सकता है)</li>
        <li><strong>Could</strong> → Past ability (सकता था) / polite request</li>
      </ul>
      <div class="formula">Subject + can/could + Verb (1st form) + Object</div>
      <h4>🚫 Negative:</h4>
      <div class="formula">Subject + cannot/could not + Verb + Object</div>
      <h4>❓ Interrogative:</h4>
      <div class="formula">Can/Could + Subject + Verb + Object?</div>
    `,
    examples: [
      { hindi: "मैं तैर सकता हूँ।", english: "I can swim." },
      { hindi: "वह तेज दौड़ सकता था।", english: "He could run fast." }
    ],
    puzzles: [
      { hindi: "मैं तैर सकता हूँ।", answer: "I can swim", words: ["I", "can", "swim"] },
      { hindi: "वह तेज दौड़ सकता था।", answer: "He could run fast", words: ["He", "could", "run", "fast"] },
      { hindi: "क्या तुम गा सकते हो?", answer: "Can you sing", words: ["Can", "you", "sing"] },
      { hindi: "वह अंग्रेजी बोल सकती है।", answer: "She can speak English", words: ["She", "can", "speak", "English"] },
      { hindi: "मैं नहीं तैर सकता।", answer: "I cannot swim", words: ["I", "cannot", "swim"] },
      { hindi: "क्या वह आ सकता है?", answer: "Can he come", words: ["Can", "he", "come"] },
      { hindi: "हम मदद कर सकते हैं।", answer: "We can help", words: ["We", "can", "help"] },
      { hindi: "तुम क्या कर सकते हो?", answer: "What can you do", words: ["What", "can", "you", "do"] }
    ]
  },

  // ============ CHAPTER 14: MAY, MIGHT ============
  {
    id: 14,
    chapter: "Chapter 14",
    title: "Use of May, Might",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Possibility (संभावना), permission (अनुमति), wish (इच्छा) dikhane ke liye.</p>
      <ul>
        <li><strong>May</strong> → Present possibility / permission</li>
        <li><strong>Might</strong> → Less possibility (kam sambhavna)</li>
      </ul>
      <div class="formula">Subject + may/might + Verb (1st form) + Object</div>
    `,
    examples: [
      { hindi: "वह आ सकता है।", english: "He may come." },
      { hindi: "बारिश हो सकती है।", english: "It might rain." }
    ],
    puzzles: [
      { hindi: "वह आ सकता है।", answer: "He may come", words: ["He", "may", "come"] },
      { hindi: "बारिश हो सकती है।", answer: "It might rain", words: ["It", "might", "rain"] },
      { hindi: "शायद वह सफल हो।", answer: "May he succeed", words: ["May", "he", "succeed"] },
      { hindi: "मैं जा सकता हूँ।", answer: "I may go", words: ["I", "may", "go"] },
      { hindi: "वह देर कर सकता है।", answer: "He may be late", words: ["He", "may", "be", "late"] },
      { hindi: "क्या मैं अंदर आ सकता हूँ?", answer: "May I come in", words: ["May", "I", "come", "in"] },
      { hindi: "वे जीत सकते हैं।", answer: "They may win", words: ["They", "may", "win"] }
    ]
  },

  // ============ CHAPTER 15: SHOULD, WOULD ============
  {
    id: 15,
    chapter: "Chapter 15",
    title: "Use of Should, Would",
    rule: `
      <h4>📖 Rule:</h4>
      <ul>
        <li><strong>Should</strong> → Advice (सलाह), moral duty (चाहिए)</li>
        <li><strong>Would</strong> → Polite request, past habit, imaginary situation</li>
      </ul>
      <div class="formula">Subject + should/would + Verb (1st form) + Object</div>
    `,
    examples: [
      { hindi: "तुम्हें पढ़ना चाहिए।", english: "You should study." },
      { hindi: "क्या तुम मेरी मदद करोगे?", english: "Would you help me?" }
    ],
    puzzles: [
      { hindi: "तुम्हें पढ़ना चाहिए।", answer: "You should study", words: ["You", "should", "study"] },
      { hindi: "क्या तुम मेरी मदद करोगे?", answer: "Would you help me", words: ["Would", "you", "help", "me"] },
      { hindi: "हमें सच बोलना चाहिए।", answer: "We should speak the truth", words: ["We", "should", "speak", "the", "truth"] },
      { hindi: "तुम्हें व्यायाम करना चाहिए।", answer: "You should exercise", words: ["You", "should", "exercise"] },
      { hindi: "वह रोज स्कूल जाता था।", answer: "He would go to school daily", words: ["He", "would", "go", "to", "school", "daily"] },
      { hindi: "मुझे देर नहीं करनी चाहिए।", answer: "I should not be late", words: ["I", "should", "not", "be", "late"] }
    ]
  },

  // ============ CHAPTER 16: MUST, OUGHT TO ============
  {
    id: 16,
    chapter: "Chapter 16",
    title: "Use of Must, Ought to",
    rule: `
      <h4>📖 Rule:</h4>
      <ul>
        <li><strong>Must</strong> → Strong necessity / obligation (अवश्य / जरूर)</li>
        <li><strong>Ought to</strong> → Moral duty (नैतिक कर्तव्य)</li>
      </ul>
      <div class="formula">Subject + must/ought to + Verb (1st form) + Object</div>
    `,
    examples: [
      { hindi: "तुम्हें समय पर आना चाहिए।", english: "You must come on time." },
      { hindi: "हमें बड़ों का सम्मान करना चाहिए।", english: "We ought to respect elders." }
    ],
    puzzles: [
      { hindi: "तुम्हें समय पर आना चाहिए।", answer: "You must come on time", words: ["You", "must", "come", "on", "time"] },
      { hindi: "हमें बड़ों का सम्मान करना चाहिए।", answer: "We ought to respect elders", words: ["We", "ought", "to", "respect", "elders"] },
      { hindi: "मुझे यह काम करना ही होगा।", answer: "I must do this work", words: ["I", "must", "do", "this", "work"] },
      { hindi: "तुम्हें धूम्रपान नहीं करना चाहिए।", answer: "You must not smoke", words: ["You", "must", "not", "smoke"] },
      { hindi: "हमें सच बोलना चाहिए।", answer: "We ought to speak the truth", words: ["We", "ought", "to", "speak", "the", "truth"] }
    ]
  },

  // ============ CHAPTER 17: THERE ============
  {
    id: 17,
    chapter: "Chapter 17",
    title: "Use of There (There is / There are)",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Kisi cheez ke hone ka pata dene ke liye <strong>"There"</strong> use hota hai.</p>
      <ul>
        <li><strong>There is</strong> → Singular noun ke saath</li>
        <li><strong>There are</strong> → Plural noun ke saath</li>
      </ul>
      <div class="formula">There is/are + Noun + Place</div>
    `,
    examples: [
      { hindi: "मेज पर एक किताब है।", english: "There is a book on the table." },
      { hindi: "कमरे में बहुत छात्र हैं।", english: "There are many students in the room." }
    ],
    puzzles: [
      { hindi: "मेज पर एक किताब है।", answer: "There is a book on the table", words: ["There", "is", "a", "book", "on", "the", "table"] },
      { hindi: "कमरे में बहुत छात्र हैं।", answer: "There are many students in the room", words: ["There", "are", "many", "students", "in", "the", "room"] },
      { hindi: "बगीचे में फूल हैं।", answer: "There are flowers in the garden", words: ["There", "are", "flowers", "in", "the", "garden"] },
      { hindi: "आसमान में तारे हैं।", answer: "There are stars in the sky", words: ["There", "are", "stars", "in", "the", "sky"] },
      { hindi: "थैले में पैसे हैं।", answer: "There is money in the bag", words: ["There", "is", "money", "in", "the", "bag"] }
    ]
  },

  // ============ CHAPTER 18: IT ============
  {
    id: 18,
    chapter: "Chapter 18",
    title: "Use of It",
    rule: `
      <h4>📖 Rule:</h4>
      <p><strong>It</strong> ka use — samay (time), mausam (weather), doori (distance), ya kisi nirjiv cheez ke liye hota hai.</p>
      <div class="formula">It is/was + ...</div>
    `,
    examples: [
      { hindi: "आज बहुत गर्मी है।", english: "It is very hot today." },
      { hindi: "5 बजे हैं।", english: "It is 5 o'clock." }
    ],
    puzzles: [
      { hindi: "आज बहुत गर्मी है।", answer: "It is very hot today", words: ["It", "is", "very", "hot", "today"] },
      { hindi: "5 बजे हैं।", answer: "It is 5 o'clock", words: ["It", "is", "5", "o'clock"] },
      { hindi: "बारिश हो रही है।", answer: "It is raining", words: ["It", "is", "raining"] },
      { hindi: "आज सोमवार है।", answer: "It is Monday today", words: ["It", "is", "Monday", "today"] },
      { hindi: "वहाँ जाना आसान है।", answer: "It is easy to go there", words: ["It", "is", "easy", "to", "go", "there"] }
    ]
  },

  // ============ CHAPTER 19: ACTIVE & PASSIVE ============
  {
    id: 19,
    chapter: "Chapter 19",
    title: "Active & Passive Voice",
    rule: `
      <h4>📖 Rule:</h4>
      <p><strong>Active Voice</strong> me subject khud kaam karta hai.<br>
         <strong>Passive Voice</strong> me kaam subject par hota hai.</p>
      <h4>📐 Formula (Passive):</h4>
      <div class="formula">Object + Helping Verb + V3 + by + Subject</div>
      <h4>📌 Helping verbs:</h4>
      <ul>
        <li>Present → is/am/are + V3</li>
        <li>Past → was/were + V3</li>
        <li>Perfect → has/have/had been + V3</li>
        <li>Future → will be + V3</li>
      </ul>
    `,
    examples: [
      { hindi: "आम राम के द्वारा खाया जाता है।", english: "Mango is eaten by Ram." },
      { hindi: "पत्र उसके द्वारा लिखा गया।", english: "A letter was written by him." }
    ],
    puzzles: [
      { hindi: "आम राम के द्वारा खाया जाता है।", answer: "Mango is eaten by Ram", words: ["Mango", "is", "eaten", "by", "Ram"] },
      { hindi: "पत्र उसके द्वारा लिखा गया।", answer: "A letter was written by him", words: ["A", "letter", "was", "written", "by", "him"] },
      { hindi: "गाना उसके द्वारा गाया जाता है।", answer: "A song is sung by her", words: ["A", "song", "is", "sung", "by", "her"] },
      { hindi: "काम मेरे द्वारा किया गया।", answer: "The work was done by me", words: ["The", "work", "was", "done", "by", "me"] },
      { hindi: "अंग्रेजी यहाँ बोली जाती है।", answer: "English is spoken here", words: ["English", "is", "spoken", "here"] },
      { hindi: "चोर पुलिस द्वारा पकड़ा गया।", answer: "The thief was caught by the police", words: ["The", "thief", "was", "caught", "by", "the", "police"] }
    ]
  },

  // ============ CHAPTER 20: WH-QUESTIONS ============
  {
    id: 20,
    chapter: "Chapter 20",
    title: "WH-Questions (What, Where, When, Why, Who, How)",
    rule: `
      <h4>📖 Rule:</h4>
      <p>WH-words sawaal poochhne ke liye use hote hain:</p>
      <ul>
        <li><strong>What</strong> → क्या (cheez)</li>
        <li><strong>Where</strong> → कहाँ (jagah)</li>
        <li><strong>When</strong> → कब (samay)</li>
        <li><strong>Why</strong> → क्यों (kaaran)</li>
        <li><strong>Who</strong> → कौन (vyakti)</li>
        <li><strong>Whose</strong> → किसका (possession)</li>
        <li><strong>Whom</strong> → किसको</li>
        <li><strong>How</strong> → कैसे</li>
        <li><strong>How many</strong> → कितने (countable)</li>
        <li><strong>How much</strong> → कितना (uncountable)</li>
      </ul>
      <div class="formula">WH-word + Helping Verb + Subject + Verb + Object?</div>
    `,
    examples: [
      { hindi: "तुम्हारा नाम क्या है?", english: "What is your name?" },
      { hindi: "वह कहाँ रहता है?", english: "Where does he live?" }
    ],
    puzzles: [
      { hindi: "तुम्हारा नाम क्या है?", answer: "What is your name", words: ["What", "is", "your", "name"] },
      { hindi: "वह कहाँ रहता है?", answer: "Where does he live", words: ["Where", "does", "he", "live"] },
      { hindi: "तुम कब आओगे?", answer: "When will you come", words: ["When", "will", "you", "come"] },
      { hindi: "तुम क्यों रो रहे हो?", answer: "Why are you crying", words: ["Why", "are", "you", "crying"] },
      { hindi: "वह कौन है?", answer: "Who is he", words: ["Who", "is", "he"] },
      { hindi: "तुम कैसे हो?", answer: "How are you", words: ["How", "are", "you"] },
      { hindi: "तुम्हारे पास कितनी किताबें हैं?", answer: "How many books do you have", words: ["How", "many", "books", "do", "you", "have"] },
      { hindi: "यह किसकी कार है?", answer: "Whose car is this", words: ["Whose", "car", "is", "this"] },
      { hindi: "तुम क्या खा रहे हो?", answer: "What are you eating", words: ["What", "are", "you", "eating"] },
      { hindi: "वह कहाँ जा रहा है?", answer: "Where is he going", words: ["Where", "is", "he", "going"] }
    ]
  },

  // ============ CHAPTER 21: IMPERATIVE ============
  {
    id: 21,
    chapter: "Chapter 21",
    title: "Imperative Sentences (आज्ञा / निर्देश)",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Order, request, advice dene ke liye. Inme subject (you) chhupa hota hai.</p>
      <ul>
        <li>Order → Verb se shuru</li>
        <li>Request → Please add karo</li>
        <li>Negative → Don't / Do not + Verb</li>
      </ul>
    `,
    examples: [
      { hindi: "दरवाजा बंद करो।", english: "Close the door." },
      { hindi: "कृपया बैठिए।", english: "Please sit down." }
    ],
    puzzles: [
      { hindi: "दरवाजा बंद करो।", answer: "Close the door", words: ["Close", "the", "door"] },
      { hindi: "कृपया बैठिए।", answer: "Please sit down", words: ["Please", "sit", "down"] },
      { hindi: "शांत रहो।", answer: "Be quiet", words: ["Be", "quiet"] },
      { hindi: "शोर मत करो।", answer: "Do not make noise", words: ["Do", "not", "make", "noise"] },
      { hindi: "मेरी मदद करो।", answer: "Help me", words: ["Help", "me"] },
      { hindi: "समय पर आओ।", answer: "Come on time", words: ["Come", "on", "time"] },
      { hindi: "यहाँ मत खेलो।", answer: "Do not play here", words: ["Do", "not", "play", "here"] }
    ]
  },

  // ============ CHAPTER 22: EXCLAMATORY ============
  {
    id: 22,
    chapter: "Chapter 22",
    title: "Exclamatory Sentences (विस्मयादिबोधक)",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Strong feelings — khushi, dukh, aashcharya dikhane ke liye. Shuru me <strong>What / How</strong> use hota hai aur end me <strong>!</strong></p>
      <div class="formula">What a + Adjective + Noun! / How + Adjective + Subject + Verb!</div>
    `,
    examples: [
      { hindi: "कितना सुंदर फूल है!", english: "What a beautiful flower!" },
      { hindi: "वह कितना होशियार है!", english: "How clever he is!" }
    ],
    puzzles: [
      { hindi: "कितना सुंदर फूल है!", answer: "What a beautiful flower", words: ["What", "a", "beautiful", "flower"] },
      { hindi: "वह कितना होशियार है!", answer: "How clever he is", words: ["How", "clever", "he", "is"] },
      { hindi: "कितना सुंदर दृश्य है!", answer: "What a beautiful scene", words: ["What", "a", "beautiful", "scene"] },
      { hindi: "कितना ठंडा पानी है!", answer: "How cold the water is", words: ["How", "cold", "the", "water", "is"] },
      { hindi: "क्या शानदार मैच था!", answer: "What a wonderful match", words: ["What", "a", "wonderful", "match"] }
    ]
  },

  // ============ CHAPTER 23: PREPOSITIONS ============
  {
    id: 23,
    chapter: "Chapter 23",
    title: "Prepositions (In, On, At, By, With, For)",
    rule: `
      <h4>📖 Rule:</h4>
      <ul>
        <li><strong>In</strong> → bade space / month / year (in India, in May, in 2020)</li>
        <li><strong>On</strong> → din / date / surface (on Monday, on the table)</li>
        <li><strong>At</strong> → exact time / chhoti jagah (at 5 PM, at home)</li>
        <li><strong>By</strong> → through / agent (by bus, by Ram)</li>
        <li><strong>With</strong> → saath (with my friend)</li>
        <li><strong>For</strong> → liye (for you)</li>
      </ul>
    `,
    examples: [
      { hindi: "वह स्कूल में है।", english: "He is in the school." },
      { hindi: "किताब मेज पर है।", english: "The book is on the table." }
    ],
    puzzles: [
      { hindi: "वह स्कूल में है।", answer: "He is in the school", words: ["He", "is", "in", "the", "school"] },
      { hindi: "किताब मेज पर है।", answer: "The book is on the table", words: ["The", "book", "is", "on", "the", "table"] },
      { hindi: "मैं 5 बजे आऊंगा।", answer: "I will come at 5 o'clock", words: ["I", "will", "come", "at", "5", "o'clock"] },
      { hindi: "वह बस से जाता है।", answer: "He goes by bus", words: ["He", "goes", "by", "bus"] },
      { hindi: "मैं अपने दोस्त के साथ जाऊंगा।", answer: "I will go with my friend", words: ["I", "will", "go", "with", "my", "friend"] },
      { hindi: "यह तुम्हारे लिए है।", answer: "This is for you", words: ["This", "is", "for", "you"] }
    ]
  },

  // ============ CHAPTER 24: CONJUNCTIONS ============
  {
    id: 24,
    chapter: "Chapter 24",
    title: "Conjunctions (And, But, Or, So, Because)",
    rule: `
      <h4>📖 Rule:</h4>
      <p>Do shabdon ya vaakyon ko jodne ke liye.</p>
      <ul>
        <li><strong>And</strong> → और</li>
        <li><strong>But</strong> → लेकिन</li>
        <li><strong>Or</strong> → या</li>
        <li><strong>So</strong> → इसलिए</li>
        <li><strong>Because</strong> → क्योंकि</li>
      </ul>
    `,
    examples: [
      { hindi: "राम और श्याम दोस्त हैं।", english: "Ram and Shyam are friends." },
      { hindi: "वह थका था इसलिए सो गया।", english: "He was tired so he slept." }
    ],
    puzzles: [
      { hindi: "राम और श्याम दोस्त हैं।", answer: "Ram and Shyam are friends", words: ["Ram", "and", "Shyam", "are", "friends"] },
      { hindi: "वह थका था इसलिए सो गया।", answer: "He was tired so he slept", words: ["He", "was", "tired", "so", "he", "slept"] },
      { hindi: "मुझे चाय या कॉफी चाहिए।", answer: "I want tea or coffee", words: ["I", "want", "tea", "or", "coffee"] },
      { hindi: "वह आया लेकिन देर से।", answer: "He came but late", words: ["He", "came", "but", "late"] },
      { hindi: "मैं नहीं आया क्योंकि बीमार था।", answer: "I did not come because I was ill", words: ["I", "did", "not", "come", "because", "I", "was", "ill"] }
    ]
  },

  // ============ CHAPTER 25: NARRATION ============
  {
    id: 25,
    chapter: "Chapter 25",
    title: "Direct & Indirect Narration",
    rule: `
      <h4>📖 Rule:</h4>
      <p><strong>Direct:</strong> Actual words inverted commas me.<br>
         <strong>Indirect:</strong> Reported speech, bina quotes.</p>
      <h4>📌 Changes:</h4>
      <ul>
        <li>Present → Past</li>
        <li>Past → Past Perfect</li>
        <li>Will → Would, Can → Could, May → Might</li>
        <li>I → he/she, my → his/her, you → he/she</li>
      </ul>
    `,
    examples: [
      { hindi: "उसने कहा कि वह ठीक है।", english: "He said that he was fine." },
      { hindi: "उसने पूछा कि मैं कहाँ रहता हूँ।", english: "He asked where I lived." }
    ],
    puzzles: [
      { hindi: "उसने कहा कि वह ठीक है।", answer: "He said that he was fine", words: ["He", "said", "that", "he", "was", "fine"] },
      { hindi: "उसने पूछा कि मैं कहाँ रहता हूँ।", answer: "He asked where I lived", words: ["He", "asked", "where", "I", "lived"] },
      { hindi: "उसने कहा कि वह आएगा।", answer: "He said that he would come", words: ["He", "said", "that", "he", "would", "come"] },
      { hindi: "माँ ने कहा कि खाना तैयार है।", answer: "Mother said that food was ready", words: ["Mother", "said", "that", "food", "was", "ready"] }
    ]
  }
];

// Grammar section (coming soon)
const grammarBook = [
  {
    id: 1,
    chapter: "Grammar",
    title: "Coming Soon",
    rule: `<p>Grammar section abhi ban raha hai. Filhaal Translation section ka poora maza lo! 😊</p>`,
    examples: [],
    puzzles: []
  }
];
