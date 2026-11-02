
/* ==========================================
   ANNE LISTER'S COMPANION QUIZ
   Seven possible romantic dispositions
========================================== */


// PERSONALITY TYPES

const personalities = {

    ann: {
        name: "Ann Walker",
        subtitle: "The Devoted Romantic",

        description: `
            <p>You are Ann Walker: affectionate, sensitive, thoughtful and rather more complicated than people give you credit for.</p>

            <p>You long for genuine companionship. You want someone who chooses you, proudly and without hesitation. You are generous with your affection, but you can become overwhelmed when emotions run high.</p>

            <p>You have a romantic imagination and a tendency to worry about what other people think. You may occasionally need reassurance, but do not mistake your sensitivity for weakness. You have a quiet determination that can surprise even the most formidable of people.</p>

            <p>You value security, intimacy and the idea of building a life with someone. You would rather have one great love than a dozen flirtations.</p>
        `,

        strongEnding: `
            <p>Anne would find in you something she had long desired: a companion willing to share a home, a future and a life.</p>

            <p>Your relationship would be intense, occasionally turbulent, but full of devotion. You would exchange rings, share secrets and perhaps even take communion together.</p>

            <p>Pack your bags. The two of you are going travelling. Try not to worry about the mountain roads.</p>

            <p><strong>Your ending: A marriage of your own making.</strong></p>
        `,

        complicatedEnding: `
            <p>Anne is fascinated by your tenderness, but she may occasionally find your uncertainty difficult to understand.</p>

            <p>You would have to learn that love does not mean surrendering every decision to another person. Anne needs a companion, not someone who disappears into her shadow.</p>

            <p>There is a future here, but you must find your own footing first.</p>

            <p><strong>Your ending: Devotion, with a little self-discovery.</strong></p>
        `
    },


    mariana: {
        name: "Mariana Lawton",
        subtitle: "The Passionate One",

        description: `
            <p>Oh, Mariana. You are proud, passionate, ambitious and not particularly interested in being second choice.</p>

            <p>You have a strong sense of your own worth. You appreciate beauty, comfort and the finer things in life. You know how to behave in respectable company, but you also know precisely what happens behind closed doors.</p>

            <p>You can be jealous. You can be stubborn. You may occasionally convince yourself that you are being perfectly reasonable while everyone else watches the argument unfold.</p>

            <p>You love deeply, but you are not always willing to sacrifice your social standing or personal security for romance.</p>

            <p>You are not a woman who can simply be forgotten.</p>
        `,

        strongEnding: `
            <p>Anne would be absolutely captivated. Your relationship would be a long, complicated affair, full of passion, longing and inconvenient circumstances.</p>

            <p>There would be letters, secret meetings and more than a little jealousy. You might even find yourself arguing over who is more devoted.</p>

            <p>Unfortunately, society and marriage have a habit of getting in the way.</p>

            <p><strong>Your ending: An unforgettable love, never entirely resolved.</strong></p>
        `,

        complicatedEnding: `
            <p>You and Anne would recognise each other immediately: two stubborn women with very strong opinions.</p>

            <p>The attraction would be undeniable, but neither of you enjoys compromising. Anne might find your desire for security frustrating, while you might find her independence positively exhausting.</p>

            <p>There would be passion. There would also be several letters that should probably never be sent.</p>

            <p><strong>Your ending: A beautiful disaster in excellent company.</strong></p>
        `
    },


    isabella: {
        name: "Isabella 'Tib' Norcliffe",
        subtitle: "The Witty Confidante",

        description: `
            <p>You are Isabella Norcliffe: sociable, clever, spirited and wonderfully difficult to pin down.</p>

            <p>You enjoy a lively social circle and know how to entertain yourself. You appreciate good conversation, good company and perhaps a little too much wine on occasion.</p>

            <p>You are loyal to your friends, although you are not always particularly pleased when they make decisions without consulting you.</p>

            <p>You have a playful side and a sharp tongue. You can laugh at yourself, but you are less forgiving when someone else makes you the subject of a joke.</p>

            <p>You want affection, but you also want to remain your own person.</p>
        `,

        strongEnding: `
            <p>Anne would enjoy your company immensely. You would have years of friendship, flirtation and occasional intimacy.</p>

            <p>You would introduce her to people, gossip about acquaintances and probably be responsible for introducing her to Mariana.</p>

            <p>But there is one difficulty: Anne has a rather complicated idea of commitment, and you may eventually discover that you want more than she is prepared to promise.</p>

            <p><strong>Your ending: The friend she never quite gets over.</strong></p>
        `,

        complicatedEnding: `
            <p>You and Anne would be wonderfully entertaining together, although perhaps not particularly stable.</p>

            <p>You both enjoy independence, and neither of you likes being told what to do.</p>

            <p>There would be plenty of laughter, some flirtation and the occasional disagreement about what constitutes appropriate behaviour.</p>

            <p><strong>Your ending: A friendship with benefits and an excellent social calendar.</strong></p>
        `
    },


    eliza: {
        name: "Eliza Raine",
        subtitle: "The Sentimental First Love",

        description: `
            <p>You are Eliza Raine: romantic, imaginative, devoted and deeply sentimental.</p>

            <p>You remember everything. The first letter, the first gift, the first promise. Small gestures mean an extraordinary amount to you.</p>

            <p>You value emotional intimacy and want to feel irreplaceable to the person you love. You are drawn to private worlds, secret languages and relationships that feel like they belong to nobody else.</p>

            <p>You have a wonderfully romantic imagination, but you can struggle when reality refuses to follow the story you have written in your head.</p>

            <p>You deserve someone who gives you the same devotion you offer them.</p>
        `,

        strongEnding: `
            <p>Anne would remember you as a defining part of her youth. Your relationship began at school, where the two of you shared a bedroom and an extraordinary intimacy.</p>

            <p>Your connection helped inspire the beginnings of Anne's diary-keeping and her private world of correspondence.</p>

            <p>But Anne's attention would eventually wander, and your greatest challenge would be learning that first love does not always become lifelong love.</p>

            <p><strong>Your ending: Forever written in the first pages of her diary.</strong></p>
        `,

        complicatedEnding: `
            <p>Anne would be charmed by your romantic nature, but she is not always the easiest person to love.</p>

            <p>You might find yourself longing for a certainty that she cannot consistently provide.</p>

            <p>There is tenderness here, but you must never confuse being someone's first love with being their only love.</p>

            <p><strong>Your ending: A beautiful chapter, but not the entire book.</strong></p>
        `
    },


    maria: {
        name: "Maria Barlow",
        subtitle: "The Sophisticated Intellectual",

        description: `
            <p>You are Maria Barlow: intelligent, cultured, observant and rather more daring than your respectable appearance suggests.</p>

            <p>You enjoy intellectual conversation and appreciate a person who can keep up with you. You are curious about the world and have little patience for people who mistake good manners for a lack of personality.</p>

            <p>You are affectionate, but you are not necessarily willing to make yourself entirely available to someone else's whims.</p>

            <p>You can be generous with your love, but you also understand the importance of boundaries.</p>

            <p>You have a particular talent for noticing what people would rather keep hidden.</p>
        `,

        strongEnding: `
            <p>Anne would find your intelligence and company irresistible. Your relationship would be intellectually stimulating, intimate and full of interesting conversations.</p>

            <p>During Anne's time in Paris, your relationship became particularly significant. The two of you even developed private language around the idea of making a lifelong commitment.</p>

            <p>There is a catch, however. Anne's feelings for Mariana would complicate matters considerably.</p>

            <p><strong>Your ending: A Parisian affair worthy of its own diary volume.</strong></p>
        `,

        complicatedEnding: `
            <p>Anne would appreciate your mind, but she might not appreciate that you have one of your own.</p>

            <p>You are not particularly interested in being a supporting character in someone else's romantic adventure.</p>

            <p>There would be affection and intellectual chemistry, but you would insist on being treated as an equal.</p>

            <p><strong>Your ending: A stimulating affair with an expiration date.</strong></p>
        `
    },


    vere: {
        name: "Vere Hobart",
        subtitle: "The Elusive Almost-Romance",

        description: `
            <p>You are Vere Hobart: independent, intriguing, socially accomplished and rather difficult to impress.</p>

            <p>You have your own ambitions and interests. You appreciate attention, but you dislike being pursued too aggressively.</p>

            <p>You can be charming without revealing very much about yourself. People may find you mysterious, although you would probably describe yourself as simply having better things to do.</p>

            <p>You are selective with affection and do not feel obliged to reciprocate every romantic gesture.</p>

            <p>You enjoy being admired, but you value your freedom even more.</p>
        `,

        strongEnding: `
            <p>Anne would certainly be intrigued by you. She was interested in Vere Hobart and attempted a courtship, but the connection did not develop into the relationship she hoped for.</p>

            <p>You would leave Anne wondering what might have happened had circumstances been different.</p>

            <p>Perhaps you would exchange letters. Perhaps you would meet again. Perhaps you would simply remain an interesting possibility.</p>

            <p><strong>Your ending: The woman who got away before the affair began.</strong></p>
        `,

        complicatedEnding: `
            <p>Anne would be fascinated by your independence, but she might find your reluctance to commit deeply frustrating.</p>

            <p>You would enjoy the attention, but you are not convinced that Anne is quite the prize she thinks she is.</p>

            <p>She would write about you. You would carry on with your life.</p>

            <p><strong>Your ending: A footnote in an exceptionally long diary.</strong></p>
        `
    },


    anne: {
        name: "Anne Lister",
        subtitle: "The Formidable Original",

        description: `
            <p>Oh dear. This is most Odd... You are Anne Lister herself!</p>

            <p>You are ambitious, fiercely independent, intellectual and exceptionally confident in your own abilities.</p>

            <p>You have a mind that never seems to rest. You enjoy travelling, learning, managing your affairs and making decisions for yourself.</p>

            <p>You are not afraid to challenge convention, although you are perfectly happy to use convention when it benefits you.</p>

            <p>You can be stubborn, occasionally self-centred and rather fond of having the final word.</p>

            <p>You are a romantic, but you also like being in charge of the romance.</p>

            <p>In short: you are a formidable woman. God help anyone who disagrees with you.</p>
        `,

        strongEnding: `
            <p>You and Anne would make a spectacular pair. Unfortunately, there is only room for one Anne Lister in this relationship.</p>

            <p>You would compete over everything: intelligence, travelling, finances, social standing and who gets to decide what happens next.</p>

            <p>There would be mutual admiration, but also an alarming amount of arguing.</p>

            <p><strong>Your ending: Two gentlemen, one household, absolutely no peace.</strong></p>
        `,

        complicatedEnding: `
            <p>Anne would admire your independence, but she might find your similarities rather irritating.</p>

            <p>You both want to lead, neither enjoys being corrected and both have an unfortunate tendency to believe you are right.</p>

            <p>Perhaps you should simply become friends and compare diaries.</p>

            <p><strong>Your ending: A most respectable intellectual rivalry.</strong></p>
        `
    }

};


// QUESTIONS AND ANSWERS

const questions = [

    {
        question: "You receive a mysterious letter from a woman you admire. What do you do?",

        answers: [
            {
                text: "Read it seventeen times and keep it somewhere special.",
                scores: { ann: 2, eliza: 2 }
            },
            {
                text: "Write back immediately. I have things to say.",
                scores: { mariana: 2, isabella: 1 }
            },
            {
                text: "Analyse every word. There must be a hidden meaning.",
                scores: { maria: 2, anne: 1 }
            },
            {
                text: "Wait a little. Let her wonder what I think.",
                scores: { vere: 2, anne: 1 }
            }
        ]
    },


    {
        question: "Anne invites you to spend a week at Shibden Hall. What interests you most?",

        answers: [
            {
                text: "The romantic gardens, private walks and cosy evenings.",
                scores: { ann: 2, eliza: 1 }
            },
            {
                text: "The social opportunities and excellent company.",
                scores: { mariana: 2, isabella: 2 }
            },
            {
                text: "The library, architecture and intellectual conversations.",
                scores: { maria: 2, anne: 2 }
            },
            {
                text: "The opportunity to escape my usual routine.",
                scores: { vere: 2 }
            }
        ]
    },


    {
        question: "You discover that Anne has been flirting with another woman. Your reaction?",

        answers: [
            {
                text: "I am devastated. I thought we had something special.",
                scores: { ann: 2, eliza: 2 }
            },
            {
                text: "She has some explaining to do. Immediately.",
                scores: { mariana: 2 }
            },
            {
                text: "Interesting. I wonder what she sees in her.",
                scores: { isabella: 2, maria: 1 }
            },
            {
                text: "I have better things to do than compete for attention.",
                scores: { vere: 2, anne: 1 }
            }
        ]
    },


    {
        question: "What would your ideal declaration of love look like?",

        answers: [
            {
                text: "A lifelong promise, sealed with a ring.",
                scores: { ann: 2, eliza: 1 }
            },
            {
                text: "A passionate confession in the middle of an argument.",
                scores: { mariana: 2 }
            },
            {
                text: "A clever letter full of private references and wit.",
                scores: { maria: 2, isabella: 1 }
            },
            {
                text: "A bold declaration. No hesitation, no apologies.",
                scores: { anne: 2, vere: 1 }
            }
        ]
    },


    {
        question: "Which of these would most likely get you into trouble?",

        answers: [
            {
                text: "Being far too emotionally invested.",
                scores: { ann: 2, eliza: 2 }
            },
            {
                text: "My jealousy and my inability to hide it.",
                scores: { mariana: 2 }
            },
            {
                text: "A little too much wine and a little too much gossip.",
                scores: { isabella: 2 }
            },
            {
                text: "My opinions. I have no intention of keeping them to myself.",
                scores: { anne: 2, maria: 1 }
            }
        ]
    },


    {
        question: "You and Anne are travelling through Europe. What sort of companion are you?",

        answers: [
            {
                text: "I make sure we are comfortable, safe and well looked after.",
                scores: { ann: 2 }
            },
            {
                text: "I enjoy the finer hotels, beautiful clothes and fashionable company.",
                scores: { mariana: 2, vere: 1 }
            },
            {
                text: "I want to explore museums, architecture and local history.",
                scores: { maria: 2, anne: 1 }
            },
            {
                text: "I am ready for an adventure. Let's see where the road takes us.",
                scores: { isabella: 1, vere: 2, anne: 1 }
            }
        ]
    },


    {
        question: "What is your greatest romantic weakness?",

        answers: [
            {
                text: "I need reassurance that I am loved.",
                scores: { ann: 2, eliza: 1 }
            },
            {
                text: "I want to be someone's one and only.",
                scores: { mariana: 2, eliza: 1 }
            },
            {
                text: "I find it difficult to let someone get too close.",
                scores: { vere: 2, isabella: 1 }
            },
            {
                text: "I sometimes put my ambitions before my relationships.",
                scores: { anne: 2, maria: 1 }
            }
        ]
    },


    {
        question: "A respectable acquaintance makes a rude comment about your relationship with Anne. What do you do?",

        answers: [
            {
                text: "I feel hurt, but I would rather avoid a confrontation.",
                scores: { ann: 2, eliza: 1 }
            },
            {
                text: "I give her a piece of my mind. Respectfully, of course.",
                scores: { mariana: 2, anne: 1 }
            },
            {
                text: "I make a witty remark that leaves everyone speechless.",
                scores: { isabella: 2, maria: 1 }
            },
            {
                text: "I couldn't care less what people think.",
                scores: { vere: 2, anne: 2 }
            }
        ]
    },


    {
        question: "Anne asks you to keep a secret. How do you respond?",

        answers: [
            {
                text: "Her secrets are safe with me. Always.",
                scores: { ann: 2, eliza: 1 }
            },
            {
                text: "I can keep a secret, provided it doesn't involve another lover.",
                scores: { mariana: 2 }
            },
            {
                text: "I adore secrets. Especially when they involve coded letters.",
                scores: { maria: 2, eliza: 1 }
            },
            {
                text: "I will keep it, but I expect the same courtesy in return.",
                scores: { isabella: 1, vere: 1, anne: 2 }
            }
        ]
    },


    {
        question: "Which quality do you value most in a partner?",

        answers: [
            {
                text: "Loyalty and emotional devotion.",
                scores: { ann: 2, eliza: 2 }
            },
            {
                text: "Passion and an appetite for life.",
                scores: { mariana: 2, isabella: 1 }
            },
            {
                text: "Intelligence and a stimulating conversation.",
                scores: { maria: 2, anne: 1 }
            },
            {
                text: "Independence and a strong sense of self.",
                scores: { vere: 2, anne: 2 }
            }
        ]
    },


    {
        question: "What would you do if Anne announced she was going away for several months?",

        answers: [
            {
                text: "Write constantly. I would miss her terribly.",
                scores: { ann: 2, eliza: 2 }
            },
            {
                text: "Demand to know why I am not going with her.",
                scores: { mariana: 2 }
            },
            {
                text: "I would make my own plans and perhaps visit her.",
                scores: { isabella: 2, vere: 1 }
            },
            {
                text: "Wonderful. I have my own adventures to pursue.",
                scores: { maria: 1, anne: 2, vere: 1 }
            }
        ]
    },


    {
        question: "Finally, what would you most like to leave behind?",

        answers: [
            {
                text: "A love story that lasts beyond my lifetime.",
                scores: { ann: 2, eliza: 2 }
            },
            {
                text: "A reputation as a woman nobody could forget.",
                scores: { mariana: 2, vere: 1 }
            },
            {
                text: "Letters, ideas and memories worth preserving.",
                scores: { maria: 2, isabella: 1 }
            },
            {
                text: "A legacy. Something extraordinary that bears my name.",
                scores: { anne: 2, vere: 1 }
            }
        ]
    }

];


// ==========================================
// CREATE THE QUESTIONS
// ==========================================

const quiz = document.getElementById("quiz");
const form = document.getElementById("quiz-form");

function createQuiz() {

    quiz.innerHTML = "";

    questions.forEach((question, questionIndex) => {

        const card = document.createElement("div");
        card.className = "question-card";

        const number = document.createElement("p");
        number.className = "question-number";
        number.textContent =
            "Question " + (questionIndex + 1) + " of " + questions.length;

        const title = document.createElement("h3");
        title.textContent = question.question;

        const answers = document.createElement("div");
        answers.className = "answers";

        question.answers.forEach((answer, answerIndex) => {

            const wrapper = document.createElement("div");
            wrapper.className = "answer-option";

            const input = document.createElement("input");

            input.type = "radio";
            input.name = "question-" + questionIndex;
            input.id = "q" + questionIndex + "-a" + answerIndex;
            input.value = answerIndex;
            input.required = true;

            const label = document.createElement("label");

            label.htmlFor = input.id;
            label.textContent = answer.text;

            wrapper.appendChild(input);
            wrapper.appendChild(label);

            answers.appendChild(wrapper);

        });

        card.appendChild(number);
        card.appendChild(title);
        card.appendChild(answers);

        quiz.appendChild(card);

    });

}


// ==========================================
// PROGRESS BAR
// ==========================================

function updateProgress() {

    const answered = questions.filter((question, index) => {

        return document.querySelector(
            'input[name="question-' + index + '"]:checked'
        );

    }).length;

    const percentage = (answered / questions.length) * 100;

    document.getElementById("progress-bar").style.width =
        percentage + "%";

    document.getElementById("progress-text").textContent =
        "Question " + answered + " of " + questions.length + " answered";

}

quiz.addEventListener("change", updateProgress);


// ==========================================
// CALCULATE PERSONALITY SCORES
// ==========================================

function calculateScores() {

    const scores = {};

    Object.keys(personalities).forEach(type => {

        scores[type] = 0;

    });

    questions.forEach((question, questionIndex) => {

        const selected = document.querySelector(
            'input[name="question-' + questionIndex + '"]:checked'
        );

        if (!selected) return;

        const answer = question.answers[Number(selected.value)];

        Object.entries(answer.scores).forEach(([type, points]) => {

            scores[type] += points;

        });

    });

    return scores;

}


// ==========================================
// DISPLAY RESULTS
// ==========================================

function displayResults(scores) {

    const ranking = Object.entries(scores).sort((a, b) => {

        return b[1] - a[1];

    });

    const winner = ranking[0][0];

    const highestScore = ranking[0][1];
    const secondScore = ranking[1][1];

    const result = personalities[winner];

    // A clear match gets a strong ending.
    // A close match gets a more complicated ending.

    const ending = highestScore - secondScore >= 3
        ? result.strongEnding
        : result.complicatedEnding;


    document.getElementById("result-title").textContent =
        "You are " + result.name + "!";

    document.getElementById("result-subtitle").textContent =
        result.subtitle;

    document.getElementById("result-description").innerHTML =
        result.description;

    document.getElementById("result-ending").innerHTML =
        ending;


    // Hide quiz and show result

    document.getElementById("quiz-section").classList.add("hide");

    document.getElementById("result-section").classList.remove("hide");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================
// SUBMIT QUIZ
// ==========================================

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const unanswered = questions.findIndex((question, index) => {

        return !document.querySelector(
            'input[name="question-' + index + '"]:checked'
        );

    });

    if (unanswered !== -1) {

        document.getElementById("error-message").textContent =
            "Dear reader, you have forgotten to answer question " +
            (unanswered + 1) + ". Do finish your business.";

        const missingQuestion = quiz.children[unanswered];

        missingQuestion.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        return;

    }

    document.getElementById("error-message").textContent = "";

    const scores = calculateScores();

    displayResults(scores);

});


// ==========================================
// RETAKE QUIZ
// ==========================================

document.getElementById("retake-btn").addEventListener("click", function() {

    form.reset();

    updateProgress();

    document.getElementById("result-section").classList.add("hide");

    document.getElementById("quiz-section").classList.remove("hide");

    document.getElementById("error-message").textContent = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// START
// ==========================================

createQuiz();

updateProgress();
