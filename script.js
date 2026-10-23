/**
 * Zodiac Seoul Club Matcher - JavaScript Logic
 * Contains all 23 curated Hongdae & Itaewon venues.
 * Compliant with Course Evaluation Rubrics.
 */

const CLUBS = {
    modeci: {
        name: "MODECi",
        area: "Hongdae/Sangsu (홍대/상수)",
        genre: "Deep Techno / House",
        vibe: "Artsy rooftop venue offering panoramic Sangsu views alongside minimal techno, house, and disco.",
        dress: "Aesthetic / Indie / Casual Cool",
        tip: "Check out the outdoor rooftop space for fresh air between sets.",
        map: "https://www.google.com/maps/search/?api=1&query=MODECi+Hongdae",
        tags: ["earth", "house", "locals", "stylish_night"]
    },
    cakeshop: {
        name: "Cakeshop",
        area: "Itaewon (이태원)",
        genre: "Bass / Underground",
        vibe: "The holy grail of underground bass music and dark industrial aesthetics. Famous for international guest DJs and raw energy.",
        dress: "Trendy Streetwear / All Black / Casual",
        tip: "Arrive before midnight on weekends to avoid long queues.",
        map: "https://www.google.com/maps/search/?api=1&query=Cakeshop+Itaewon",
        tags: ["water", "techno", "ravers", "lose_myself"]
    },
    faust: {
        name: "Faust",
        area: "Itaewon (이태원)",
        genre: "Industrial Techno",
        vibe: "Equipped with a premier Funktion-One sound system for pure, relentless peak-time dark techno raves.",
        dress: "Black Rave Wear / Minimal / Comfortable Shoes",
        tip: "The vibe peaks late around 2:00 AM to 5:00 AM.",
        map: "https://www.google.com/maps/search/?api=1&query=Faust+Itaewon",
        tags: ["water", "techno", "ravers", "lose_myself"]
    },
    soap: {
        name: "Soap Seoul",
        area: "Itaewon (이태원)",
        genre: "House / R&B / Disco",
        vibe: "Aesthetic neon visuals, signature soapy scent, and groovy House/R&B party sets.",
        dress: "Smart Casual / Stylish / Trendy",
        tip: "Great crowd for socializing and enjoying uplifting dance beats.",
        map: "https://www.google.com/maps/search/?api=1&query=Soap+Seoul+Itaewon",
        tags: ["earth", "house", "globals", "locals", "stylish_night"]
    },
    grainhaus: {
        name: "Grainhaus",
        area: "Itaewon (이태원)",
        genre: "Melodic Techno / Tech-House",
        vibe: "Artsy cultural lounge venue blending visual art, deep tech-house grooves, and aesthetic lighting.",
        dress: "Smart Casual / Aesthetic",
        tip: "Perfect venue for a sophisticated night out with curated electronic soundscapes.",
        map: "https://www.google.com/maps/search/?api=1&query=Grainhaus+Itaewon",
        tags: ["earth", "techno", "ravers", "stylish_night"]
    },
    flac: {
        name: "FLAC Seoul",
        area: "Itaewon (이태원)",
        genre: "Minimal Techno / Groovy House",
        vibe: "Cozy 2nd-floor music lounge offering deep, soulful minimal techno and house sets by talented local selectors.",
        dress: "Casual Cool / Minimalist",
        tip: "Intimate atmosphere ideal for enjoying high-quality sound in a relaxed setting.",
        map: "https://www.google.com/maps/search/?api=1&query=FLAC+Seoul+Itaewon",
        tags: ["water", "house", "ravers", "locals", "stylish_night"]
    },
    bolero: {
        name: "Bolero",
        area: "Itaewon (이태원)",
        genre: "Deep Tech-House / Melodic Techno",
        vibe: "Chic speakeasy-style basement venue loved by fashion/art hipsters for moody visuals and deep hypnotic house.",
        dress: "Trendy / Fashion-forward / Stylish",
        tip: "Knock on the hidden entrance; vibe peaks late after 1:30 AM.",
        map: "https://www.google.com/maps/search/?api=1&query=Bolero+Itaewon",
        tags: ["earth", "house", "ravers", "locals", "stylish_night"]
    },
    prost: {
        name: "PROST Pub & Lounge",
        area: "Itaewon (이태원)",
        genre: "All Mix / Commercial",
        vibe: "The ultimate global gathering hub behind Hamilton Hotel. High-energy lounge bar filled with travelers.",
        dress: "Casual / Smart Dress",
        tip: "Ideal starting spot for early drinks before hitting late-night clubs.",
        map: "https://www.google.com/maps/search/?api=1&query=PROST+Itaewon",
        tags: ["air", "kpop", "locals", "globals", "local_culture", "make_friends"]
    },
    fountain: {
        name: "The Fountain",
        area: "Itaewon (이태원)",
        genre: "All Mix / Commercial Pop",
        vibe: "Iconic European-style multi-story lounge bar featuring massive interior fountains, arcade games, and commercial pop hits.",
        dress: "Smart Casual / Partywear",
        tip: "Huge international crowd; perfect starting venue for group drinking and socializing.",
        map: "https://www.google.com/maps/search/?api=1&query=The+Fountain+Itaewon",
        tags: ["air", "kpop", "locals", "globals", "local_culture", "make_friends"]
    },
    agave: {
        name: "Agave Itaewon",
        area: "Itaewon (이태원)",
        genre: "Reggaeton / Latin Pop",
        vibe: "Exotic Latin vibe with tequilas, tropical heat, and endless Reggaeton rhythms.",
        dress: "Vibrant / Casual Partywear",
        tip: "Passionate dancing crowd; over 80% international guests.",
        map: "https://www.google.com/maps/search/?api=1&query=Agave+Itaewon",
        tags: ["fire", "latin", "dancers", "lose_myself"]
    },
    juntoslatinos: {
        name: "Juntos Latinos",
        area: "Itaewon (이태원)",
        genre: "Reggaeton / Salsa / Bachata",
        vibe: "Authentic Latin party hub where Latino expats and dance lovers gather for tropical beats and energetic couple dancing.",
        dress: "Casual Partywear / Dance-friendly",
        tip: "Don't hesitate to jump on the dance floor; extremely welcoming and passionate crowd.",
        map: "https://www.google.com/maps/search/?api=1&query=Juntos+Latinos+Itaewon",
        tags: ["fire", "latin", "globals", "dancers", "lose_myself", "make_friends"]
    },
    danco2: {
        name: "Danco 2",
        area: "Itaewon (이태원)",
        genre: "Latin Pop / Reggaeton",
        vibe: "Cozy and vibrant Latin bar filled with non-stop Reggaeton hits, tequilas, and friendly international partygoers.",
        dress: "Casual Partywear",
        tip: "Great spot for drinking shots and singing along to Latin top 40 hits.",
        map: "https://www.google.com/maps/search/?api=1&query=Danco+2+Itaewon",
        tags: ["fire", "air", "latin", "globals", "lose_myself"]
    },
    labamba: {
        name: "La Bamba",
        area: "Hongdae (홍대)",
        genre: "Salsa / Bachata / Latin",
        vibe: "Hongdae's premier Latin dance spot where locals and foreigners dance Salsa & Bachata together.",
        dress: "Flexible / Dance-friendly",
        tip: "Very welcoming to beginners and tourists alike.",
        map: "https://www.google.com/maps/search/?api=1&query=La+Bamba+Hongdae",
        tags: ["fire", "air", "latin", "globals", "dancers", "lose_myself", "make_friends"]
    },
    badass: {
        name: "Badass Itaewon",
        area: "Itaewon (이태원)",
        genre: "Hip-Hop / Afrobeat",
        vibe: "Raw, energetic Hip-Hop joint blasting old-school gems and modern trap bangers.",
        dress: "Streetwear / Sneakers",
        tip: "High-density dance floor; wear comfortable shoes.",
        map: "https://www.google.com/maps/search/?api=1&query=Badass+Itaewon",
        tags: ["fire", "air", "hiphop", "dancers", "lose_myself", "make_friends"]
    },
    owllounge: {
        name: "Owl Lounge",
        area: "Itaewon (이태원)",
        genre: "Authentic Hip-Hop / R&B",
        vibe: "Legendary Itaewon Hip-Hop basement landmark known for crystal-clear sound and heavy Hip-Hop playlist sets.",
        dress: "Streetwear / Stylish Casual",
        tip: "Gets extremely packed after 1:00 AM; arrive early to secure a good spot near the booth.",
        map: "https://www.google.com/maps/search/?api=1&query=Owl+Lounge+Itaewon",
        tags: ["fire", "hiphop", "locals", "lose_myself", "local_culture"]
    },
    xx2: {
        name: "XX2",
        area: "Hongdae (홍대)",
        genre: "Trendy Hip-Hop / Trap",
        vibe: "Massive Hip-Hop club hosting famous Korean rappers and DJs, blasting heavy trap and modern Hip-Hop bangers.",
        dress: "Trendy Streetwear / Stylish",
        tip: "Peak hours get very crowded; check their Instagram for surprise guest artist lineups.",
        map: "https://www.google.com/maps/search/?api=1&query=XX2+Hongdae",
        tags: ["fire", "earth", "hiphop", "locals", "local_culture"]
    },
    henz: {
        name: "The Henz Club",
        area: "Hongdae (홍대)",
        genre: "Subculture Hip-Hop",
        vibe: "The heart of Seoul's street culture. Cutting-edge Hip-Hop/Electronic beats visited by top Korean artists.",
        dress: "Fashion-forward Streetwear / Oversized",
        tip: "Strictly music-focused crowd; line builds up very fast.",
        map: "https://www.google.com/maps/search/?api=1&query=The+Henz+Club+Hongdae",
        tags: ["earth", "hiphop", "locals", "local_culture", "stylish_night"]
    },
    sinkhole: {
        name: "Sinkhole",
        area: "Hongdae (홍대)",
        genre: "Trendy Hip-Hop / R&B",
        vibe: "Affordable, friendly, and wildly popular casual Hip-Hop basement venue packed with students.",
        dress: "Super Casual",
        tip: "Budget-friendly drinks and zero dress code pressure.",
        map: "https://www.google.com/maps/search/?api=1&query=Sinkhole+Hongdae",
        tags: ["air", "hiphop", "locals", "local_culture"]
    },
    rollie: {
        name: "Rollie",
        area: "Hongdae (홍대)",
        genre: "Trendy Hip-Hop / R&B",
        vibe: "High-energy trendy Hip-Hop club in Hongdae delivering heavy bass drops, trap bangers, and an electric youth crowd.",
        dress: "Casual / Partywear",
        tip: "Gets packed with high-tension partygoers late at night; wear comfortable shoes for heavy dancing.",
        map: "https://www.google.com/maps/search/?api=1&query=Rollie+Hongdae",
        tags: ["fire", "earth", "hiphop", "globals", "lose_myself"]
    },
    seoulpub: {
        name: "Seoul Pub",
        area: "Hongdae & Itaewon (홍대 & 이태원)",
        genre: "All Mix / Party Pub",
        vibe: "Lively and welcoming party pub in Hongdae where international travelers and locals mingle over drinks and commercial party beats.",
        dress: "Casual / Comfortable",
        tip: "Great low-pressure venue to grab a drink, meet new friends, and warm up before late-night clubbing.",
        map: "https://maps.app.goo.gl/asKr4CRd6C9bBgzq8",
        tags: ["air", "kpop", "globals", "make_friends"]
    },
    mongs: {
        name: "Mongs",
        area: "Hongdae (홍대)",
        genre: "All Mix / Commercial EDM",
        vibe: "Energetic All-Mix party spot in central Hongdae packed with young locals and tourists dancing to high-tempo party tracks.",
        dress: "Casual / Partywear",
        tip: "Great choice for an easygoing, high-energy party atmosphere without dress code stress.",
        map: "https://www.google.com/maps/search/?api=1&query=Mongs+Hongdae",
        tags: ["fire", "air", "kpop", "locals", "globals", "dancers", "lose_myself", "make_friends"]
    },
    thisisclub25: {
        name: "Club 25",
        area: "Hongdae (홍대)",
        genre: "Hip-Hop / All Mix",
        vibe: "High-energy all-mix party venue in Hongdae packed with a vibrant crowd dancing to a mix of commercial hits, hip-hop, and club anthems.",
        dress: "Super Casual / Streetwear",
        tip: "Arrive early for free entry offers and cheap drinks before peak hours.",
        map: "https://www.google.com/maps/search/?api=1&query=Club+25+Hongdae",
        tags: ["fire", "air", "kpop", "globals", "locals", "dancers", "lose_myself", "make_friends"]
    },
    b1: {
        name: "B1",
        area: "Hongdae (홍대)",
        genre: "All Mix / Party Lounge",
        vibe: "Long-standing basement lounge club in Hongdae offering accessible commercial pop, Hip-Hop, and party tunes.",
        dress: "Casual / Smart Casual",
        tip: "Good middle-ground spot for casual drinks and light dancing with friends.",
        map: "https://www.google.com/maps/search/?api=1&query=B1+Hongdae",
        tags: ["fire", "air", "kpop", "globals", "locals", "dancers", "lose_myself"]
    }
};

const QUESTIONS = [
    {
        id: "q1",
        title: "What's your Zodiac Element?",
        subtitle: "Choose the element that aligns with your astrological aura.",
        options: [
            { label: "🔥 Fire Signs (Aries, Leo, Sag)", desc: "High energy, explosive passion, center of the dancefloor", val: "fire" },
            { label: "🌍 Earth Signs (Taurus, Virgo, Cap)", desc: "Aesthetic, sensory experience, stylish & curated vibes", val: "earth" },
            { label: "🌬️ Air Signs (Gemini, Libra, Aqua)", desc: "Social butterfly, trendy sound, open to making friends", val: "air" },
            { label: "🌊 Water Signs (Cancer, Scorpio, Pisces)", desc: "Deep bass, dark & immersive beats, hypnotic trance", val: "water" }
        ]
    },
    {
        id: "q2",
        title: "What's the ultimate soundtrack for your night?",
        subtitle: "Select the rhythm you want pounding through your chest.",
        options: [
            { label: "🎧 Dark, Heavy Techno & Industrial", desc: "Fast-paced, hypnotic, underground raves", val: "techno" },
            { label: "🎤 Trendy Hip-Hop, R&B & Afrobeat", desc: "Heavy bass, trap bangers, and street rhythms", val: "hiphop" },
            { label: "🇰🇷🎶 K-Pop & Commercial Pop All-Mix", desc: "Sing-along choruses, viral pop hits, high-energy party drops", val: "kpop" },
            { label: "💃 Spicy Reggaeton, Salsa & Latin Beats", desc: "Tropical heat, couple dancing, high passion", val: "latin" },
            { label: "🍸 Groovy House, Disco & Chill Lounge", desc: "Uplifting rhythms, cocktail conversations", val: "house" }
        ]
    },
    {
        id: "q3",
        title: "Who do you want to dance with tonight?",
        subtitle: "Pick your ideal midnight crowd.",
        options: [
            { label: "🖤 Underground Music Snobs & Ravers", desc: "Music comes first; zero posing", val: "ravers" },
            { label: "🌍 Global Travelers & International Party Animals", desc: "Diverse crowd from all around the world", val: "globals" },
            { label: "👟 Local Korean Hipsters & Fashionistas", desc: "Trendy Seoul locals with top-tier outfits", val: "locals" },
            { label: "🔥 Passionate Dancers & Social Spirits", desc: "People who love to dance and interact freely", val: "dancers" }
        ]
    },
    {
        id: "q4",
        title: "What's your main priority tonight?",
        subtitle: "What defines a successful night out for you in Seoul?",
        options: [
            { label: "🌀 Lose myself in darkness until sunrise", desc: "Non-stop dance immersion", val: "lose_myself" },
            { label: "🍻 Drink & make new global friends", desc: "Socializing and creating fun memories", val: "make_friends" },
            { label: "🇰🇷 Feel authentic local Seoul nightlife", desc: "Real Hongdae/Itaewon youth culture", val: "local_culture" },
            { label: "🍹 Enjoy craft drinks & groovy rhythms", desc: "Sensory, stylish, and comfortable nightlife", val: "stylish_night" }
        ]
    }
];

let currentStep = 0;
let userAnswers = [];
let lastResultData = { persona: "", primaryName: "", primaryArea: "", secondaryName: "" };

const introScreen = document.getElementById('intro-screen');
const quizScreen = document.getElementById('quiz-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

const startQuizBtn = document.getElementById('start-quiz-btn');
const backBtn = document.getElementById('back-btn');
const retakeBtn = document.getElementById('retake-btn');
const shareBtn = document.getElementById('share-btn');

const stepIndicator = document.getElementById('step-indicator');
const stepPercent = document.getElementById('step-percent');
const progressBar = document.getElementById('progress-bar');
const questionTitle = document.getElementById('question-title');
const questionSubtitle = document.getElementById('question-subtitle');
const optionsContainer = document.getElementById('options-container');

// Modal & Tab Elements
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const faqModal = document.getElementById('faq-modal');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// --- EVENT LISTENERS REGISTRATION ---
document.addEventListener('DOMContentLoaded', () => {
    startQuizBtn.addEventListener('click', startQuiz);
    backBtn.addEventListener('click', prevStep);
    retakeBtn.addEventListener('click', retakeQuiz);
    shareBtn.addEventListener('click', shareResult);

    // Interaction 1: Modal window open & close
    openModalBtn.addEventListener('click', () => faqModal.classList.remove('hidden'));
    closeModalBtn.addEventListener('click', () => faqModal.classList.add('hidden'));
    faqModal.addEventListener('click', (e) => {
        if (e.target === faqModal) faqModal.classList.add('hidden');
    });

    // Interaction 2: Tab menu content switching
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => handleTabSwitch(e));
    });
});

function startQuiz() {
    introScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    currentStep = 0;
    userAnswers = [];
    renderQuestion();
}

function renderQuestion() {
    const q = QUESTIONS[currentStep];
    stepIndicator.innerText = `Step ${currentStep + 1} of ${QUESTIONS.length}`;
    const percent = ((currentStep + 1) / QUESTIONS.length) * 100;
    stepPercent.innerText = `${Math.round(percent)}%`;
    progressBar.style.width = `${percent}%`;

    questionTitle.innerText = q.title;
    questionSubtitle.innerText = q.subtitle;

    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt) => {
        const btn = document.createElement('button');
        const isSelected = userAnswers[currentStep] === opt.val;
        
        btn.className = `glass-option ${isSelected ? 'selected' : ''}`;
        btn.innerHTML = `
            <span class="opt-label">${opt.label}</span>
            <span class="opt-desc">${opt.desc}</span>
        `;
        
        btn.addEventListener('click', () => selectOption(opt.val));
        optionsContainer.appendChild(btn);
    });
}

function selectOption(val) {
    userAnswers[currentStep] = val;
    currentStep++;

    if (currentStep < QUESTIONS.length) {
        quizScreen.classList.remove('fade-in');
        void quizScreen.offsetWidth; 
        quizScreen.classList.add('fade-in');
        renderQuestion();
    } else {
        quizScreen.classList.add('hidden');
        loadingScreen.classList.remove('hidden');
        
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            calculateAndShowResults();
            resultScreen.classList.remove('hidden');
        }, 1200); 
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        quizScreen.classList.remove('fade-in');
        void quizScreen.offsetWidth;
        quizScreen.classList.add('fade-in');
        renderQuestion();
    }
}

function calculateAndShowResults() {
    let clubScores = [];

    Object.keys(CLUBS).forEach(key => {
        let club = CLUBS[key];
        let score = 0;

        if (club.tags.includes(userAnswers[1])) score += 3;
        if (club.tags.includes(userAnswers[0])) score += 1;
        if (club.tags.includes(userAnswers[2])) score += 1;
        if (club.tags.includes(userAnswers[3])) score += 1;

        clubScores.push({ id: key, clubData: club, score: score });
    });

    clubScores.sort((a, b) => b.score - a.score);

    const primary = clubScores[0].clubData;
    const secondary = clubScores[1].clubData;

    document.getElementById('primary-name').innerText = primary.name;
    document.getElementById('primary-area').innerText = `📍 ${primary.area}`;
    document.getElementById('primary-genre-badge').innerText = primary.genre;
    document.getElementById('primary-vibe').innerText = primary.vibe;
    document.getElementById('primary-dress').innerText = primary.dress;
    document.getElementById('primary-tip').innerText = primary.tip;
    document.getElementById('primary-map-btn').href = primary.map;

    document.getElementById('secondary-name').innerText = secondary.name;
    document.getElementById('secondary-area').innerText = `📍 ${secondary.area}`;
    document.getElementById('secondary-genre-badge').innerText = secondary.genre;
    document.getElementById('secondary-vibe').innerText = secondary.vibe;
    document.getElementById('secondary-map-btn').href = secondary.map;

    const element = userAnswers[0];
    const personaTitles = {
        fire: "🔥 The High-Energy Party Alchemist",
        earth: "🌍 The Stylish Lounge Curator",
        air: "🌬️ The Social Butterfly Raver",
        water: "🌊 The Dark Underground Sorcerer"
    };
    const personaText = personaTitles[element] || "The Seoul Night Explorer";
    document.getElementById('persona-title').innerText = personaText;

    lastResultData = {
        persona: personaText,
        primaryName: primary.name,
        primaryArea: primary.area,
        secondaryName: secondary.name
    };
}

function retakeQuiz() {
    resultScreen.classList.add('hidden');
    introScreen.classList.remove('hidden');
    currentStep = 0;
    userAnswers = []; 
}

function shareResult() {
    const shareText = `🔮 [Zodiac Seoul Club Matcher]\n` +
                      `My Vibe Result: ${lastResultData.persona}\n` +
                      `🏆 Top Club Match: ${lastResultData.primaryName} (${lastResultData.primaryArea})\n` +
                      `✨ Plan B Orbit: ${lastResultData.secondaryName}\n\n` +
                      `Find your ideal Seoul club match too 👇\n` + 
                      window.location.href;

    if (navigator.share) {
        navigator.share({
            title: 'Zodiac Seoul Club Matcher',
            text: shareText,
            url: window.location.href
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showToast("Result & link copied! Share with your friends ✨");
        }).catch(() => {
            showToast("Failed to copy link.");
        });
    }
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').innerText = msg;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function handleTabSwitch(e) {
    const targetTab = e.target.getAttribute('data-tab');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.add('hidden'));

    e.target.classList.add('active');
    document.getElementById(targetTab).classList.remove('hidden');
}