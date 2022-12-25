import React, { useState, useEffect } from 'react'
import Navbar2 from '../../components/navbar2/Navbar2';
// import Footer from '../../containers/footer/Footer'
import './message.css';

const Message = () => {

    const [message, setMessage] = useState('');

    useEffect(() => {

        const delayFunction = setTimeout(() => {

            var info = messageAnalysis(message);

            if(info.paragraphs !== 3) {
                document.getElementById('check1').style.display = "none";
            }
            else {
                document.getElementById('check1').style.display = "flex";
            }
            if(info.questions !== 1 && info.questions !== 2) {
                document.getElementById('check2').style.display = "none";
            }
            else {
                document.getElementById('check2').style.display = "flex";
            }
            if(info.grade > 0 && info.grade <= 7) {
                document.getElementById('check3').style.display = "flex";
            }
            else {
                document.getElementById('check3').style.display = "none";
            }
            // Wording
            if(info.paragraphs === 0) { // No text
                document.getElementById("adverbsHeader").style.display = "none";
                document.getElementById("flaggedAdverbs").style.display = "none";
                document.getElementById("verbsHeader").style.display = "none";
                document.getElementById("flaggedVerbs").style.display = "none";
                document.getElementById('verbExamples').style.display = "none";
                document.getElementById("verbExamplesHeading").style.display = "none";
                document.getElementById('check4').style.display = "none";
                document.getElementById('warning').style.display = "none";
            }
            else if (info.adverbs.length > 0 || info.verbs.length > 0) { // Text and there's at least one flagged word
                if (info.adverbs.length > 0){ // Flagged adverb
                    document.getElementById("adverbsHeader").style.display = "block";
                    document.getElementById("flaggedAdverbs").style.display = "block";
                    document.getElementById('check4').style.display = "none";
                    document.getElementById('warning').style.display = "block";
                }
                else {
                    document.getElementById("adverbsHeader").style.display = "none";
                    document.getElementById("flaggedAdverbs").style.display = "none";
                }
                if (info.verbs.length > 0){ // Flagged verb
                    document.getElementById("verbsHeader").style.display = "block";
                    document.getElementById("flaggedVerbs").style.display = "block";
                    document.getElementById("verbExamplesHeading").style.display = "block";
                    document.getElementById('verbExamples').style.display = "block";
                    document.getElementById('check4').style.display = "none";
                    document.getElementById('warning').style.display = "block";
                    if(document.getElementById("rocketstart-examples-div")) {
                    document.getElementById("rocketstart-examples-div").remove();
                    }
                }
                else {
                    document.getElementById("verbsHeader").style.display = "none";
                    document.getElementById("flaggedVerbs").style.display = "none";
                }
            }
            else { // Text & there's no flagged word
                document.getElementById("adverbsHeader").style.display = "none";
                document.getElementById("verbsHeader").style.display = "none";
                document.getElementById('verbExamples').style.display = "none";
                document.getElementById('check4').style.display = "flex";
                document.getElementById('warning').style.display = "none";
            }
                
            // 1) Update the paragraphs text
            document.getElementById('paragraphs').textContent = info.paragraphs;
            // 2) Update the paragraphs slider.
            if (info.paragraphs > 5) {
                info.paragraphs = 5;
            }
            document.getElementById('paragraph__slider').style.left = (info.paragraphs)*20 + "%";
            
            // 1) Update the questions text
            document.getElementById('questions').textContent = info.questions;
            // 2) Update the questions slider.
            if (info.questions > 4) {
                info.questions = 4;
            }
            document.getElementById('question__slider').style.left = (info.questions)*25 + "%";
            
            // 1) Update the Grade Level text
            document.getElementById('grade').textContent = info.grade;
            // 2) Update the Grade Level Slider.
            if (info.grade < 2) {
                info.grade = 2;
            }
            document.getElementById('grade__slider').style.left = (info.grade)*10-20 + "%";
            
            // 1) Update the Wording text
            var totalFlagged = info.adverbs.length + info.verbs.length
            if (totalFlagged > 4) {
                totalFlagged = 4;
            }
            document.getElementById('words').textContent = totalFlagged;
            // 2) Update the wording slider.
            document.getElementById('word__slider').style.left = (totalFlagged)*25 + "%";
            // 3) Update adverbs list
            document.getElementById('flaggedAdverbs').textContent = info.adverbs.join(', ');
            // 4) Update verbs list
            document.getElementById('flaggedVerbs').textContent = info.verbs.join(', ');
            
            var numerousFlaggedVerbs = false;
            for (var i = 0; i < info.verbs.length; i++) { // Verbs
                if(i+1 !== info.verbs.length) {
                    numerousFlaggedVerbs = true;
                }
                else {
                    numerousFlaggedVerbs = false;
                }
                var example =  populateExamples(info.verbs[i], numerousFlaggedVerbs);
                document.getElementById("verbExamples").appendChild(example);
            }

            function populateExamples(verb, horizontalRule) {
                var exampleDiv = document.createElement('div');
                exampleDiv.id = "rocketstart-examples-div";
              
                if(!horizontalRule) {
                  exampleDiv.innerHTML = `
                  <div class="good__example">
                    <span class="material-icons explanation__cross">close</span>
                    <p class="badExample"></p>
                  </div>
                  <div class="bad__example">
                    <span class="material-icons explanation__check">done</span>
                    <p class="goodExample"></p>
                  </div>
                `;
                }
                else {
                  exampleDiv.innerHTML = `
                  <div class="good__example">
                    <span class="material-icons explanation__cross">close</span>
                    <p class="badExample"></p>
                  </div>
                  <div class="bad__example">
                    <span class="material-icons explanation__check">done</span>
                    <p class="goodExample"></p>
                  </div>
                  <hr class="horizontal__rule">
                  <div style="padding-bottom: .5rem;">
                `;
                }
              
                // Example phrases
                if(verb === "to be") {
                  exampleDiv.getElementsByClassName("badExample")[0].textContent = "I want to be a part of your team.";
                  exampleDiv.getElementsByClassName("goodExample")[0].textContent = "I'd love to join your team.";
                }
                else if(verb === "to have") {
                  exampleDiv.getElementsByClassName("badExample")[0].textContent = "I'd love to have a conversation with you.";
                  exampleDiv.getElementsByClassName("goodExample")[0].textContent = "I'd love to chat with you.";
                }
                else if(verb === "there is" || verb === "there are") {
                  exampleDiv.getElementsByClassName("badExample")[0].textContent = "There are plenty of strengths that make me stand out.";
                  exampleDiv.getElementsByClassName("goodExample")[0].textContent = "I stand out because of these strengths.";
                }
                else if(verb === "was") {
                  exampleDiv.getElementsByClassName("badExample")[0].textContent = "I was in the position for two years.";
                  exampleDiv.getElementsByClassName("goodExample")[0].textContent = "I held the position for two years.";
                }
              
                return exampleDiv;
            }

            // Counts the number of syllables per word
            function syllable(word) {
                word = word.toLowerCase();
                // Removes anything that's not an english character (dashes, line breaks)
                word = word.replace(/[^a-z]/, '')
                // Special cases
                    // TODO: Print 1000 of the top most used common words and check against a known program
                        // Known words that are broken: something, somewhere, sometime, somehow
                word = word.replace(/(?:[^laeiouy]es|[^laeiouy]e)$/, '');
                word = word.replace(/^y/, '');
                if (word && word.match(/[aeiouy]{1,2}/g)) { // TODO "Be" is broken here, so an "else" needs to be added to return 1.
                    return word.match(/[aeiouy]{1,2}/g).length;
                }
                else {
                    return 1; // Syllables can't be NaN
                }
            }

            function messageAnalysis(text) {

                // The following words should not be in the LinkedIn message:
                var adverbs = ["abnormally", "absentmindedly", "accidentally", "acidly", "actually", "adventurously", "afterwards", "almost", "always", "angrily", "annually", "anxiously", "arrogantly", "awkwardly", "badly", "bashfully", "beautifully", "bitterly", "bleakly", "blindly", "blissfully", "boastfully", "boldly", "bravely", "briefly", "brightly", "briskly", "broadly", "busily", "calmly", "carefully", "carelessly", "cautiously", "certainly", "cheerfully", "clearly", "cleverly", "closely", "coaxingly", "colorfully", "commonly", "continually", "coolly", "correctly", "courageously", "crossly", "cruelly", "curiously", "daily", "daintily", "dearly", "deceivingly", "delightfully", "deeply", "defiantly", "deliberately", "delightfully", "diligently", "dimly", "doubtfully", "dreamily", "easily", "elegantly", "energetically", "enormously", "enthusiastically", "equally", "especially", "even", "evenly", "eventually", "exactly", "excitedly", "extremely", "fairly", "faithfully", "famously", "far", "fast", "fatally", "ferociously", "fervently", "fiercely", "fondly", "foolishly", "fortunately", "frankly", "frantically", "freely", "frenetically", "frightfully", "fully", "furiously", "generally", "generously", "gently", "gladly", "gleefully", "gracefully", "gratefully", "greatly", "greedily", "happily", "hastily", "healthily", "heavily", "helpfully", "helplessly", "highly", "honestly", "hopelessly", "hourly", "hungrily", "immediately", "innocently", "inquisitively", "instantly", "intensely", "intently", "interestingly", "inwardly", "irritably", "jaggedly", "jealously", "joshingly", "joyfully", "joyously", "jovially", "jubilantly", "judgmentally", "justly", "keenly", "kiddingly", "kindheartedly", "kindly", "knavishly", "knottily", "knowingly", "knowledgeably", "kookily", "lazily", "less", "lightly", "likely", "limply", "lively", "loftily", "longingly", "loosely", "lovingly", "loudly", "loyally", "madly", "majestically", "meaningfully", "mechanically", "merrily", "miserably", "mockingly", "monthly", "mortally", "mostly", "mysteriously", "naturally", "nearly", "neatly", "needily", "nervously", "never", "nicely", "noisily", "not", "obediently", "obnoxiously", "oddly", "offensively", "officially", "often", "only", "openly", "optimistically", "overconfidently", "owlishly", "painfully", "partially", "patiently", "perfectly", "physically", "playfully", "politely", "poorly", "positively", "potentially", "powerfully", "promptly", "properly", "punctually", "quaintly", "quarrelsomely", "queasily", "queerly", "questionably", "questioningly", "quicker", "quickly", "quietly", "quirkily", "quizzically", "rapidly", "rarely", "readily", "really", "reassuringly", "recklessly", "regularly", "reluctantly", "repeatedly", "reproachfully", "restfully", "righteously", "rightfully", "rigidly", "roughly", "rudely", "sadly", "safely", "scarcely", "scarily", "searchingly", "sedately", "seemingly", "seldom", "selfishly", "separately", "seriously", "shakily", "sharply", "sheepishly", "shrilly", "shyly", "silently", "sleepily", "slowly", "smoothly", "softly", "solemnly", "solidly", "sometimes", "soon", "speedily", "stealthily", "sternly", "strictly", "successfully", "suddenly", "surprisingly", "suspiciously", "sweetly", "swiftly", "sympathetically", "tenderly", "tensely", "terribly", "thankfully", "thoroughly", "thoughtfully", "tightly", "tomorrow", "too", "tremendously", "triumphantly", "truly", "truthfully", "ultimately", "unabashedly", "unaccountably", "unbearably", "unethically", "unexpectedly", "unfortunately", "unimpressively", "unnaturally", "unnecessarily", "utterly", "upbeat", "upliftingly", "upright", "upside-down", "upward", "upwardly", "urgently", "usefully", "uselessly", "usually", "utterly", "vacantly", "vaguely", "vainly", "valiantly", "vastly", "verbally", "very", "viciously", "victoriously", "violently", "vivaciously", "voluntarily", "warmly", "weakly", "wearily", "wetly", "wholly", "wildly", "willfully", "wisely", "woefully", "wonderfully", "worriedly", "wrongly", "yawningly", "yearly", "yearningly", "yesterday", "yieldingly", "youthfully", "zealously", "zestfully", "zestily"];
                var verbs = ["to be", "to have", "there are", "there is", "was"];

                // Paragraphs, where a double line break (or more) separated by nothing is one paragraph
                var paragraphs = text.split(/\n\s*\n/).length;

                // If there's a double return and no start to the second paragraph:
                    // The text should be counted as 1 paragraph
                var re = new RegExp(/\n\n$/);
                if (re.test(text)) {
                    paragraphs--;
                }
                else if(text === ""){
                    paragraphs = 0;
                }
                
                // Questions, where one or more question marks in a row means one question
                var questions = text.split(/\?{1,}/).length - 1

                // Grade Level, characterized by Flesch-Kincaid
                // # of words
                // numWords = text.split(" ").length + 1
                var numWords = text.split(/\S*[a-z]\S*/).length - 1

                // # of sentences, includes periods, exclamation, questions
                var numSentences = text.split(/[.]{1,}/).length + text.split(/!{1,}/).length + questions - 2;
                // If the string ends with a word, there's no punctuation.
                if(text.split(/[A-Za-z]$/).length - 1) {
                    numSentences = numSentences + 1;
                }
                // The readingLevel function will break if numSentences = 0.
                if(numSentences === 0) {
                    numSentences = 1;
                }
                

                // # of syllables
                var numSyllables = 0;
                text = text.replaceAll('\'',''); // Removing apostrophes '
                var wordList = text.split(/[^A-Za-z]/);
                var wordCount = wordList.length;

                // Working on verbs for wording:
                var flaggedAdverbs = [];
                var flaggedVerbs = [];
                for (var i = 0; i < verbs.length; i++) { // Verbs
                    if (text.toLowerCase().includes(verbs[i])) {
                        flaggedVerbs.push(verbs[i]);
                    }
                }
                // Working on syllable count for grade level & adverbs for wording:
                for (i = 0; i < wordCount; i++) {
                    if (wordList[i] !== '') { // If the word is not empty (some words like '-' have already been made '')
                        numSyllables = numSyllables + syllable(wordList[i])
                        if (adverbs.includes(wordList[i].toLowerCase())) { // Adverbs
                            flaggedAdverbs.push(wordList[i]);
                        }
                    }
                }

                // console.clear()
                // console.log("Words:", numWords)
                // console.log("Sentences:", numSentences)
                // console.log("Syllables:", numSyllables)

                // Flesch-Kincaid
                // Grade level
                // gradeLevel = .39 * (numWords/numSentences) + 11.8 * (numSyllables / numWords) - 15.59
                var grade = 0
                if (text !== '') {
                    var readingLevel = 206.835 - 1.015*(numWords/numSentences) - 84.6*(numSyllables / numWords);
                    // console.log(readingLevel)
                    switch(true) {
                        case (readingLevel <= 50):
                            grade = 12
                            break;
                        case (readingLevel > 50 && readingLevel <= 55):
                            grade = 11
                            break;
                        case (readingLevel > 55 && readingLevel <= 60):
                            grade = 10
                            break;
                        case (readingLevel > 60 && readingLevel <= 65):
                            grade = 9
                            break;
                        case (readingLevel > 65 && readingLevel <= 70):
                            grade = 8
                            break;
                        case (readingLevel > 70 && readingLevel <= 80):
                            grade = 7;
                            break;
                        case (readingLevel > 80 && readingLevel <= 90):
                            grade = 6;
                            break;
                        case (readingLevel > 90 && readingLevel <= 100):
                            grade = 5;
                            break;
                        case (readingLevel > 100 && readingLevel <= 110):
                            grade = 4;
                            break;
                        case (readingLevel > 110 && readingLevel <= 120):
                            grade = 3;
                            break;
                        case (readingLevel > 120):
                            grade = 2;
                            break;
                        default:
                            grade = 2
                    }
                }

                var pack = {
                    paragraphs: paragraphs,
                    questions: questions,
                    grade: grade,
                    adverbs: flaggedAdverbs,
                    verbs: flaggedVerbs
                };

                return pack;
            }

        }, 1500)

        return () => clearTimeout(delayFunction)
    }, [message])

    // Handling insight clicks
    const handleExplanation = (one, two, three, four) => {
        let paragraph__explanation = document.getElementById("paragraph__explanation");
        let question__explanation = document.getElementById("question__explanation");
        let grade__explanation = document.getElementById("grade__explanation");
        let wording__explanation = document.getElementById("wording__explanation");
        if(one) {
            paragraph__explanation.style.display = `block`;
            question__explanation.style.display = `none`;
            grade__explanation.style.display = `none`;
            wording__explanation.style.display = `none`;
            // Scale
            document.getElementById("paragraph__container").classList.add("active__rs");
            document.getElementById("question__container").classList.remove("active__rs");
            document.getElementById("grade__container").classList.remove("active__rs");
            document.getElementById("wording__container").classList.remove("active__rs");
        }
        else if(two) {
            paragraph__explanation.style.display = `none`;
            question__explanation.style.display = `block`;
            grade__explanation.style.display = `none`;
            wording__explanation.style.display = `none`;
            // Scale
            document.getElementById("paragraph__container").classList.remove("active__rs");
            document.getElementById("question__container").classList.add("active__rs");
            document.getElementById("grade__container").classList.remove("active__rs");
            document.getElementById("wording__container").classList.remove("active__rs");
        }
        else if(three) {
            paragraph__explanation.style.display = `none`;
            question__explanation.style.display = `none`;
            grade__explanation.style.display = `block`;
            wording__explanation.style.display = `none`;
            // Scale
            document.getElementById("paragraph__container").classList.remove("active__rs");
            document.getElementById("question__container").classList.remove("active__rs");
            document.getElementById("grade__container").classList.add("active__rs");
            document.getElementById("wording__container").classList.remove("active__rs");
        }
        else if(four) {
            paragraph__explanation.style.display = `none`;
            question__explanation.style.display = `none`;
            grade__explanation.style.display = `none`;
            wording__explanation.style.display = `block`;
            // Scale
            document.getElementById("paragraph__container").classList.remove("active__rs");
            document.getElementById("question__container").classList.remove("active__rs");
            document.getElementById("grade__container").classList.remove("active__rs");
            document.getElementById("wording__container").classList.add("active__rs");
        }
    };

    // Copied to clipboard animation
    const handleCopy = () => {
        navigator.clipboard.writeText(message);
        document.getElementById("copiedContainer").classList.add("fade__in");
        setTimeout(function () {
            document.getElementById("copiedContainer").classList.remove("fade__in");
          }, 3000);
    }

  return (
    <div>
        <Navbar2/>
        <div className='message grey__bg'>
            <div className='message__header'>
                <h4>LinkedIn Invitation Insights</h4>
                <p>Maximize your LinkedIn invitation reply rates through text analysis.</p>
            </div>
            <div style={{margin: '1rem'}}></div>
            <div className='columns'>
                <div className='left__column'>
                <div className="insights">
                    <div className="insight__container active__rs" id="paragraph__container" onClick={() => handleExplanation(true, false, false, false)}>
                    <div className="insight">
                        <h3 className="insight__title">Paragraphs</h3>
                        <div className="insight__metrics">
                        <span className="material-icons insight__icon" id="check1">done</span>
                        <h3 className="insight__number" id="paragraphs">0</h3>
                        </div>
                    </div>
                    <div>
                        <div className="insight__slider">
                        <div className="slider__rectangle" id="paragraph__slider"></div>
                        </div>
                    </div>
                    <div className="slider__gradient paragraph__gradient"></div>
                    </div>
                    <div className="insight__container" id="question__container" onClick={() => handleExplanation(false, true, false, false)}>
                    <div className="insight">
                        <h3 className="insight__title">Questions</h3>
                        <div className="insight__metrics">
                        <span className="material-icons insight__icon" id="check2">done</span>
                        <h3 className="insight__number" id="questions">0</h3>
                        </div>
                    </div>
                    <div>
                        <div className="insight__slider">
                        <div className="slider__rectangle" id="question__slider"></div>
                        </div>
                    </div>
                    <div className="slider__gradient question__gradient"></div>
                    </div>
                    <div className="insight__container" id="grade__container" onClick={() => handleExplanation(false, false, true, false)}>
                    <div className="insight">
                        <h3 className="insight__title">Grade Level</h3>
                        <div className="insight__metrics">
                        <span className="material-icons insight__icon" id="check3">done</span>
                        <h3 className="insight__number" id="grade">0</h3>
                        </div>
                    </div>
                    <div>
                        <div className="insight__slider">
                        <div className="slider__rectangle" id="grade__slider"></div>
                        </div>
                    </div>
                    <div className="slider__gradient grade__gradient"></div>
                    </div>

            </div>
                    <textarea placeholder='Type your invitation note here' maxLength="300" id='textBox' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <div className='left__column-three'>
                        <p className='character__counter'>{300 - message.length} / 300</p>
                        <div className='copied__container' id='copiedContainer'>
                            <p className='copied__text'>Copied to clipboard</p>
                            <span className="material-icons copied__check">done</span>
                        </div>
                        <button className='navbar__button copy__button' onClick={() => handleCopy()}>
                            Copy
                        </button>
                    </div>
                </div>
            <div className='right__column'>
                <div className='insights'>
                    <div className="insight__container" id="wording__container" onClick={() => handleExplanation(false, false, false, true)}>
                        <div className="insight">
                            <h3 className="insight__title">Wording</h3>
                            <div className="insight__metrics">
                            <span className="material-icons insight__icon" id="check4">done</span>
                            <span className="material-symbols-outlined insight__warning" id="warning">warning</span>
                            <h3 className="insight__number" id="words">0</h3>
                            </div>
                        </div>
                        <div>
                            <div className="insight__slider">
                            <div className="slider__rectangle" id="word__slider"></div>
                            </div>
                        </div>
                        <div className="slider__gradient word__gradient"></div>
                    </div>
                </div>
                <div className="insights__explanation">
                    <div className="explanation__container" id="paragraph__explanation" style={{display: "block"}}>
                        <h3 className="insight__title">Paragraphs</h3>
                        <p className='explanation__text'>
                        Break your message into three components: a greeting, message body, and a farewell.
                        The brain likes to be presented with three choices.
                        Anything higher leads to confusion.
                        </p>
                        <p className="learn__more"><a target="_blank" rel="noopener noreferrer" href="https://rocketstart.careers/blog">Learn more</a></p>
                    </div>
                    <div className="explanation__container" id="question__explanation" style={{display: "none"}}>
                        <h3 className="insight__title">Question Count</h3>
                        <p className='explanation__text'>
                        Include a call to action in your message.
                        Messages with questions receive higher reply rates.
                        Your recipient should learn why you're interested in connecting with them.
                        </p>
                        <p className="learn__more"><a target="_blank" rel="noopener noreferrer" href="https://rocketstart.careers/blog">Learn more</a></p>
                    </div>
                    <div className="explanation__container" id="grade__explanation" style={{display: "none"}}>
                        <h3 className="insight__title">Grade Level</h3>
                        <p className='explanation__text'>
                        Make your message easy to read.
                        Messages with short sentences and accessible words receive higher reply rates.
                        Understanding your intent should be effortless.
                        </p>
                        <p className="learn__more"><a target="_blank" rel="noopener noreferrer" href="https://rocketstart.careers/blog">Learn more</a></p>
                    </div>
                    <div className="explanation__container" id="wording__explanation" style={{display: "none"}}>
                        <h3 className="insight__title">Wording</h3>
                        <p className='explanation__text'>
                        Avoid adverbs and weak verbs.
                        You'll save characters, which allows you to write more.
                        Any ineffective words will be detected and displayed here.
                        </p>
                        <h3 className="insight__title" id="adverbsHeader" style={{display: "none"}}>Please remove adverbs:</h3>
                        <p className="red italicBold"id="flaggedAdverbs" style={{display: "none"}}></p>
                        <h3 className="insight__title" id="verbsHeader" style={{display: "none"}}>Please remove weak verbs:</h3>
                        <p className="red italicBold"id="flaggedVerbs" style={{display: "none"}}></p>
                        <h3 className='verb__examples-heading' id="verbExamplesHeading" style={{display: "none"}}>Example:</h3>
                        <div id="verbExamples" className="verb__example" style={{display: "none"}}></div>
                        <p className="learn__more"><a target="_blank" rel="noopener noreferrer" href="https://rocketstart.careers/blog">Learn more</a></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Message