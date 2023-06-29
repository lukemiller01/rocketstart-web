import React, { useState, useEffect } from "react";
import Navbar2 from "../../components/navbar2/Navbar2";
import Verification from "../../modals/verification/Verification";
import { useUserAuth } from "../../context/AuthProvider";
import { Helmet } from "react-helmet";
import TextareaAutosize from "react-textarea-autosize";
import "./message.css";
import { Insight, Explanation } from "../../components";

const Message = () => {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const { user } = useUserAuth();

  let userEmail = user.email;

  useEffect(() => {
    if (!user.emailVerified) {
      setModalOpen(true);
    }
  }, [user]);

  useEffect(() => {
    // window.umami.trackView("/message");
  }, []);

  // ------------------------------------------

  // Message text
  const [message, setMessage] = useState("");

  // Insight checkmarks & wording warning
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [warning1, setWarning1] = useState(false);

  // Sliders
  const [paragraphSlider, setParagraphSlider] = useState("");
  const [questionSlider, setQuestionSlider] = useState("");
  const [gradingSlider, setGradingSlider] = useState("");
  const [wordingSlider, setWordingSlider] = useState("");

  // Wording
  const [adverbsHeader, setAdverbsHeader] = useState(false);
  const [verbsHeader, setVerbsHeader] = useState(false);
  const [flaggedAdverbs, setFlaggedAdverbs] = useState("");
  const [flaggedVerbs, setFlaggedVerbs] = useState("");

  // Text Content:
  const [paragraph, setParagraph] = useState("0");
  const [question, setQuestion] = useState("0");
  const [grade, setGrade] = useState("0");
  const [wording, setWording] = useState("0");

  // Set if explanation is active or not:
  const [explanation, setExplanation] = useState("Paragraphs");

  // Verb prop:
  const [verbProp, setVerbProp] = useState([]);

  // Copy button:
  const [copy, setCopy] = useState(false);

  // Message logic that changes the insights
  useEffect(() => {
    const delayFunction = setTimeout(() => {
      var info = messageAnalysis(message);

      // setVerbProp(info.verbs);

      if (info.paragraphs !== 3) {
        setCheck1(false);
      } else {
        setCheck1(true);
      }
      if (info.questions !== 1 && info.questions !== 2) {
        setCheck2(false);
      } else {
        setCheck2(true);
      }
      if (info.grade > 0 && info.grade <= 7) {
        setCheck3(true);
      } else {
        setCheck3(false);
      }
      // Wording
      if (info.paragraphs === 0) {
        // No text
        setAdverbsHeader(false);
        setVerbsHeader(false);
        setCheck4(false);
        setWarning1(false);
      } else if (info.adverbs.length > 0 || info.verbs.length > 0) {
        // Text and there's at least one flagged word
        if (info.adverbs.length > 0) {
          // Flagged adverb
          setAdverbsHeader(true);
          setCheck4(false);
          setWarning1(true);
        } else {
          setAdverbsHeader(false);
        }
        if (info.verbs.length > 0) {
          // Flagged verb
          setVerbsHeader(true);
          setCheck4(false);
          setWarning1(true);
          setVerbProp((prevState) => []);
        } else {
          setVerbsHeader(false);
        }
      } else {
        // Text & there's no flagged word
        setAdverbsHeader(false);
        setVerbsHeader(false);
        setCheck4(true);
        setWarning1(false);
      }

      // 1) Update the paragraphs text
      setParagraph(info.paragraphs);
      // 2) Update the paragraphs slider.
      if (info.paragraphs > 5) {
        info.paragraphs = 5;
      }
      setParagraphSlider(info.paragraphs * 20 + "%");

      // 1) Update the questions text
      setQuestion(info.questions);
      // 2) Update the questions slider.
      if (info.questions > 4) {
        info.questions = 4;
      }
      setQuestionSlider(info.questions * 25 + "%");

      // 1) Update the Grade Level text
      setGrade(info.grade);
      // 2) Update the Grade Level Slider.
      if (info.grade < 2) {
        info.grade = 2;
      }
      setGradingSlider(info.grade * 10 - 20 + "%");

      // 1) Update the Wording text
      var totalFlagged = info.adverbs.length + info.verbs.length;
      setWording(totalFlagged);
      if (totalFlagged > 4) {
        totalFlagged = 4;
      }
      // 2) Update the wording slider.
      setWordingSlider(totalFlagged * 25 + "%");
      // 3) Update adverbs list
      setFlaggedAdverbs(info.adverbs.join(", "));
      // 4) Update verbs list
      setFlaggedVerbs(info.verbs.join(", "));

      for (var i = 0; i < info.verbs.length; i++) {
        // Verbs
        examplePhrases(info.verbs[i]);
      }

      function examplePhrases(verb) {
        var goodExample = "";
        var badExample = "";

        if (verb === "to be") {
          badExample = "I want to be a part of your team.";
          goodExample = "I'd love to join your team.";
        } else if (verb === "to have") {
          badExample = "I'd love to have a conversation with you.";
          goodExample = "I'd love to chat with you.";
        } else if (verb === "there is" || verb === "there are") {
          badExample = "There are plenty of strengths that make me stand out.";
          goodExample = "I stand out because of these strengths.";
        } else if (verb === "was") {
          badExample = "I was in the position for two years.";
          goodExample = "I held the position for two years.";
        }

        setVerbProp((prevState) => [
          ...prevState,
          { goodExample: goodExample, badExample: badExample },
        ]);
      }

      // Counts the number of syllables per word
      function syllable(word) {
        word = word.toLowerCase();
        // Removes anything that's not an english character (dashes, line breaks)
        word = word.replace(/[^a-z]/, "");
        // Special cases
        // TODO: Print 1000 of the top most used common words and check against a known program
        // Known words that are broken: something, somewhere, sometime, somehow
        word = word.replace(/(?:[^laeiouy]es|[^laeiouy]e)$/, "");
        word = word.replace(/^y/, "");
        if (word && word.match(/[aeiouy]{1,2}/g)) {
          // TODO "Be" is broken here, so an "else" needs to be added to return 1.
          return word.match(/[aeiouy]{1,2}/g).length;
        } else {
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
        } else if (text === "") {
          paragraphs = 0;
        }

        // Questions, where one or more question marks in a row means one question
        var questions = ((text || '').match(/\?{1,}/g) || []).length;

        // Grade Level, characterized by Flesch-Kincaid
        // # of words
        // numWords = text.split(" ").length + 1
        var numWords = text.split(/\S*[a-z]\S*/).length - 1;

        // # of sentences, includes periods, exclamation, questions
        var numSentences =
          text.split(/[.]{1,}/).length +
          text.split(/!{1,}/).length +
          questions -
          2;
        // If the string ends with a word, there's no punctuation.
        if (text.split(/[A-Za-z]$/).length - 1) {
          numSentences = numSentences + 1;
        }
        // The readingLevel function will break if numSentences = 0.
        if (numSentences === 0) {
          numSentences = 1;
        }

        // # of syllables
        var numSyllables = 0;
        text = text.replaceAll("'", ""); // Removing apostrophes '
        var wordList = text.split(/[^A-Za-z]/);
        var wordCount = wordList.length;

        // Working on verbs for wording:
        var flaggedAdverbs = [];
        var flaggedVerbs = [];
        for (var i = 0; i < verbs.length; i++) {
          // Verbs
          if (text.toLowerCase().includes(verbs[i])) {
            flaggedVerbs.push(verbs[i]);
          }
        }
        // Working on syllable count for grade level & adverbs for wording:
        for (i = 0; i < wordCount; i++) {
          if (wordList[i] !== "") {
            // If the word is not empty (some words like '-' have already been made '')
            numSyllables = numSyllables + syllable(wordList[i]);
            if (adverbs.includes(wordList[i].toLowerCase())) {
              // Adverbs
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
        var grade = 0;
        if (text !== "") {
          var readingLevel =
            206.835 -
            1.015 * (numWords / numSentences) -
            84.6 * (numSyllables / numWords);
          // console.log(readingLevel)
          switch (true) {
            case readingLevel <= 50:
              grade = 12;
              break;
            case readingLevel > 50 && readingLevel <= 55:
              grade = 11;
              break;
            case readingLevel > 55 && readingLevel <= 60:
              grade = 10;
              break;
            case readingLevel > 60 && readingLevel <= 65:
              grade = 9;
              break;
            case readingLevel > 65 && readingLevel <= 70:
              grade = 8;
              break;
            case readingLevel > 70 && readingLevel <= 80:
              grade = 7;
              break;
            case readingLevel > 80 && readingLevel <= 90:
              grade = 6;
              break;
            case readingLevel > 90 && readingLevel <= 100:
              grade = 5;
              break;
            case readingLevel > 100 && readingLevel <= 110:
              grade = 4;
              break;
            case readingLevel > 110 && readingLevel <= 120:
              grade = 3;
              break;
            case readingLevel > 120:
              grade = 2;
              break;
            default:
              grade = 2;
          }
        }

        var pack = {
          paragraphs: paragraphs,
          questions: questions,
          grade: grade,
          adverbs: flaggedAdverbs,
          verbs: flaggedVerbs,
        };

        return pack;
      }
    }, 1500);

    return () => clearTimeout(delayFunction);
  }, [message]);

  // Copied to clipboard animation
  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopy(true);
    setTimeout(function () {
      setCopy(false);
    }, 3000);
  };

  return (
    <div>
      <Helmet>
        <title>Maximize LinkedIn reply rates · Rocketstart</title>
      </Helmet>
      <Navbar2 />
      <div className="message">
        <div className="message__header">
          <h2>Message</h2>
          <span className="material-symbols-outlined message__help">
            help
          </span>
          <p className="help__text">
            Craft an optimized LinkedIn invitation message using four text
            insights proven to increase reply rates.
          </p>
        </div>
        <div className="insights">
          <Insight name={"Paragraphs"} active={explanation === "Paragraphs"} setExplanation={setExplanation} slider={paragraphSlider} check={check1} number={paragraph} />
          <Insight name={"Questions"} active={explanation === "Questions"} setExplanation={setExplanation} slider={questionSlider} check={check2} number={question} />
          <Insight name={"Grade"} active={explanation === "Grade"} setExplanation={setExplanation} slider={gradingSlider} check={check3} number={grade} />
          <Insight name={"Wording"} active={explanation === "Wording"} setExplanation={setExplanation} slider={wordingSlider} check={check4} number={wording} warning={warning1} />
        </div>
        <div className="columns">
          <div className="left__column">
            <TextareaAutosize
              className="text__area"
              placeholder="Type your invitation note here"
              minRows={5}
              id="textBox"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label="textbox"
            ></TextareaAutosize>
            <div className="left__column-three">
              <p className="character__counter">{300 - message.length} / 300</p>
              <div
                className={`copied__container ${copy ? " fade__in" : ""}`}
                id="copiedContainer"
              >
                <p className="copied__text">Copied to clipboard</p>
                <span className="material-icons copied__check">done</span>
              </div>
              <button
                className="navbar__button copy__button"
                onClick={() => handleCopy()}
                aria-label="copy-button"
              >
                Copy
              </button>
            </div>
          </div>
          <div className="right__column">
            <div className="insights__explanation">
              <Explanation visible={explanation === 'Paragraphs'} name={"Paragraphs"} hash={'paragraphs'} target={'3-4'} message={'Break your message into three components: a greeting, message body, and a farewell.'}/>
              <Explanation visible={explanation === 'Questions'} name={"Questions"} hash={'cta'} target={'1-2'} message={'Include a call to action (CTA) for your recipient. Messages with a question or CTA receive higher reply rates.'}/>
              <Explanation visible={explanation === 'Grade'} name={"Grade"} hash={'grade'} target={'2-7'} message={'Lower your message\'s grade level to make it easily readable. Messages with short sentences and simple words receive higher reply rates.'}/>
              <Explanation visible={explanation === 'Wording'} name={"Wording"} hash={'wording'} target={'0'} message={'Avoid adverbs and empty verbs to make your message clear and save characters. If you wrote any ineffective words, they will be detected and displayed below.'} adverbsHeader={adverbsHeader} verbsHeader={verbsHeader} flaggedAdverbs={flaggedAdverbs} flaggedVerbs={flaggedVerbs} verbProp={verbProp}/>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
      {modalOpen && <Verification userEmail={userEmail} />}
    </div>
  );
};

export default Message;
