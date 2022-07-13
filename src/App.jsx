import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [{text: "Phone", correct: false,},
                {text: "Watches",correct: true,},
                {text: "Food",correct: false,},
                {text: "Cosmetic",correct: false,},
               ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [{text: "2004", correct: true,},
                {text: "2005",correct: false,},
                {text: "2006",correct: false,},
                {text: "2007",correct: false,},
               ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [{text: "Johnny Deep", correct: false,},
                {text: "Leonardo Di Caprio",correct: false,},
                {text: "Denzel Washington",correct: false,},
                {text: "Daniel Red Cliff",correct: true,},
               ],
    },
    {
      id: 4,
      question: "Where was the BRICS summit held in 2014?",
      answers: [{text: "Brazil", correct: true,},
                {text: "India",correct: false,},
                {text: "Russia",correct: false,},
                {text: "China",correct: false,},
               ],
    },
    {
      id: 5,
      question: "Who wrote the introduction to the English translation of Rabindranath Tagore’s Gitanjali?",
      answers: [{text: "P.B. Shelley", correct: false,},
                {text: "Alfred Tennyson",correct: false,},
                {text: "W.B. Yeats",correct: true,},
                {text: "T.S. Elliot",correct: false,},
               ],
    },
    {
      id: 6,
      question: "The wife of which of these famous sports persons was once captain of Indian volleyball team?",
      answers: [{text: "K.D.Jadav", correct: false,},
                {text: "Dhyan Chand",correct: false,},
                {text: "Prakash Padukone",correct: false,},
                {text: "Milkha Singh",correct: true,},
               ],
    },
    {
      id: 7,
      question: "Which of these sports requires you to shout out a word loudly during play?",
      answers: [{text: "Ludo", correct: false,},
                {text: "Kho-kho",correct: true,},
                {text: "Playing cards",correct: false,},
                {text: "Chess",correct: false,},
               ],
    },
    {
      id: 8,
      question: "Which battle in 1757 marked the beginning of British occupation in India?",
      answers: [{text: "Plassey", correct: true,},
                {text: "Assaye",correct: false,},
                {text: "Buxar",correct: false,},
                {text: "Cuddalore",correct: false,},
               ],
    },
    {
      id: 9,
      question: "Which is the second most spoken language of Nepal?",
      answers: [{text: "Bajjika", correct: false,},
                {text: "Nepali",correct: false,},
                {text: "Maithili",correct: true,},
                {text: "Bhojpuri",correct: false,},
               ],
    },
    {
      id: 10,
      question: "Which of these stages is one of the four stages of human life in ancient Indian tradition?",
      answers: [{text: "Dronacharya", correct: false,},
                {text: "Bramhacharya",correct: true,},
                {text: "Vasudevacharya",correct: false,},
                {text: "Kripacharya",correct: false,},
               ],
    },
    {
      id: 11,
      question: "Which of these medical conditions is most likely to cause dehydration?",
      answers: [{text: "Malaria", correct: false,},
                {text: "Tetanus",correct: false,},
                {text: "Diarrhoea",correct: true,},
                {text: "Beriberi",correct: false,},
               ],
    },
    {
      id: 12,
      question: "In which state is the Larji Hydroelectric Power Project located?",
      answers: [{text: "Uttarakhand", correct: false,},
                {text: "Jammu and Kashmir",correct: false,},
                {text: "Sikkim",correct: false,},
                {text: "Himachal Pradesh",correct: true,},
               ],
    },
    {
      id: 13,
      question: "Effective on may 2014,the European union imposed a temporary ban on the import of which of these fruits from India?",
      answers: [{text: "Mango", correct: true,},
                {text: "Banana",correct: false,},
                {text: "Litchi",correct: false,},
                {text: "Pineapple",correct: false,},
               ],
    },
    {
      id: 14,
      question: "Where did Homi Jehangir Bhaba, the principal architect of India’s nuclear program, die in a plane crash?",
      answers: [{text: "Monte Rosa", correct: false,},
                {text: "Mount Ararat",correct: false,},
                {text: "Mount Elbrus",correct: false,},
                {text: "Mont Blanc",correct: true,},
               ],
    },
    {
      id: 15,
      question: "Whose autobiography is titled ‘Man of Everest’ also published as ‘Tiger of the snows’?",
      answers: [{text: "Sir Edmund Hillary", correct: false,},
                {text: "Tenzing Norgay",correct: true,},
                {text: "George Mallory",correct: false,},
                {text: "Major H P S Aluhwalia",correct: false,},
               ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;