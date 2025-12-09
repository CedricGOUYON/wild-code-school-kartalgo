import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useGame } from "../../Context/GameContext";
import "./Questions.css";

const allScore = JSON.parse(localStorage.getItem("allScore") || "[]");

const dataBase = [
  {
    id: 1,
    question: "Que retourne typeof null en JavaScript ?",
    options: ["null", "undefined", "object", "boolean"],
    answer: "object",
  },
  {
    id: 2,
    question: "Quelle méthode permet de transformer une chaîne en majuscules ?",
    options: ["upper()", "toCaps()", "majuscule()", "toUpperCase()"],
    answer: "toUpperCase()",
  },
  {
    id: 3,
    question: "Que fait la méthode Array.push() ?",
    options: ["Ajoute un élément à la fin", "Ajoute au début", "Trie le tableau", "Supprime le dernier"],
    answer: "Ajoute un élément à la fin",
  },
  {
    id: 4,
    question: "Comment déclare-t-on une constante ?",
    options: ["let x = 5", "const x = 5", "var x = 5", "x := 5"],
    answer: "const x = 5",
  },
  {
    id: 5,
    question: "Quel est le résultat de 3 === '3' ?",
    options: ["true", "undefined", "false", "null"],
    answer: "false",
  },
  {
    id: 6,
    question: "Quelle boucle s’utilise pour parcourir un tableau ?",
    options: ["for", "while", "do", "repeat"],
    answer: "for",
  },
  {
    id: 7,
    question: "Que fait console.log ?",
    options: ["Crée une variable", "Affiche dans la console", "Lance une alerte", "Crée une fonction"],
    answer: "Affiche dans la console",
  },
  {
    id: 8,
    question: "Quelle est la portée d’une variable déclarée avec let ?",
    options: ["Bloc", "Globale", "Fonction", "Aucune"],
    answer: "Bloc",
  },
  {
    id: 9,
    question: "Comment vérifier si une variable est un tableau ?",
    options: ["typeof", "instanceof ArrayList", "checkArray()", "Array.isArray()"],
    answer: "Array.isArray()",
  },
  {
    id: 10,
    question: "Que signifie NaN ?",
    options: ["No active Name", "Not a Number", "Null and Nothing", "Name and Number"],
    answer: "Not a Number",
  },
  {
    id: 11,
    question: "Quel opérateur est utilisé pour l'addition ?",
    options: ["+", "-", "*", "/"],
    answer: "+",
  },
  {
    id: 12,
    question: "Que retourne typeof undefined ?",
    options: ["null", "object", "boolean", "undefined"],
    answer: "undefined",
  },
  {
    id: 13,
    question: "Quelle est la bonne syntaxe pour une fonction fléchée ?",
    options: ["() => {}", "function => {}", "() -> {}", "(=>) => {}"],
    answer: "() => {}",
  },
  {
    id: 14,
    question: "Comment créer un objet vide ?",
    options: ["[]", "{}", "()", "''"],
    answer: "{}",
  },
  {
    id: 15,
    question: "Quelle méthode supprime le dernier élément d’un tableau ?",
    options: ["remove()", "cut()", "pop()", "shift()"],
    answer: "pop()",
  },
  {
    id: 16,
    question: "Comment écrire un commentaire sur une ligne ?",
    options: ["<!-- commentaire -->", "# commentaire", "-- commentaire", "// commentaire"],
    answer: "// commentaire",
  },
  {
    id: 17,
    question: "Comment accéder à la troisième valeur d’un tableau nommé fruits ?",
    options: ["fruits[2]", "fruits(2)", "fruits{2}", "fruits.3"],
    answer: "fruits[2]",
  },
  {
    id: 18,
    question: "Quelle méthode convertit une chaîne en nombre ?",
    options: ["parseInt()", "toNumber()", "String()", "numberify()"],
    answer: "parseInt()",
  },
  {
    id: 19,
    question: "Quelle valeur retourne une fonction sans return explicite ?",
    options: ["null", "undefined", "false", "0"],
    answer: "undefined",
  },
  {
    id: 20,
    question: "Comment peut-on interrompre une boucle ?",
    options: ["stop", "exit", "break", "halt"],
    answer: "break",
  },
  {
    id: 21,
    question: "Quelle méthode permet de joindre les éléments d’un tableau en une chaîne ?",
    options: ["join()", "concat()", "merge()", "append()"],
    answer: "join()",
  },
  {
    id: 22,
    question: "Quel mot-clé permet de déclarer une variable constante ?",
    options: ["let", "var", "static", "const"],
    answer: "const",
  },
  {
    id: 23,
    question: "Quel symbole est utilisé pour les commentaires multiligne ?",
    options: ["/* */", "//", "#", "<!-- -->"],
    answer: "/* */",
  },
  {
    id: 24,
    question: "Quelle méthode vérifie si un tableau contient une valeur ?",
    options: ["has()", "contains()", "includes()", "search()"],
    answer: "includes()",
  },
  {
    id: 25,
    question: "Comment arrondir un nombre vers le bas ?",
    options: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.down()"],
    answer: "Math.floor()",
  },
  {
    id: 26,
    question: "Quelle structure conditionnelle permet d’exécuter différents cas ?",
    options: ["switch", "if", "else", "when"],
    answer: "switch",
  },
  {
    id: 27,
    question: "Quelle fonction permet de convertir un nombre en chaîne ?",
    options: ["parseInt()", "Stringify()", "toChar()", "toString()"],
    answer: "toString()",
  },
  {
    id: 28,
    question: "Quel mot-clé permet de gérer les erreurs ?",
    options: ["catch", "error", "try", "handle"],
    answer: "try",
  },
  {
    id: 29,
    question: "Quelle méthode permet d’ajouter un élément à la fin d’un tableau ?",
    options: ["push()", "add()", "insert()", "append()"],
    answer: "push()",
  },
  {
    id: 30,
    question: "Comment vérifier si deux valeurs sont strictement égales ?",
    options: ["==", "===", "=", "!=="],
    answer: "===",
  },
  {
    id: 31,
    question: "Quelle méthode JavaScript transforme une chaîne en majuscules ?",
    options: ["toUpperCase()", "upper()", "capitalize()", "toCaps()"],
    answer: "toUpperCase()",
  },
  {
    id: 32,
    question: "Quelle est la sortie de 'typeof null' ?",
    options: ["object", "null", "undefined", "boolean"],
    answer: "object",
  },
  {
    id: 33,
    question: "Quelle boucle est idéale quand on connaît le nombre d’itérations ?",
    options: ["while", "do while", "for", "foreach"],
    answer: "for",
  },
  {
    id: 34,
    question: "Quel opérateur logique signifie 'et' ?",
    options: ["&&", "||", "!", "??"],
    answer: "&&",
  },
  {
    id: 35,
    question: "Quelle méthode convertit une chaîne JSON en objet JavaScript ?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.decode()"],
    answer: "JSON.parse()",
  },
  {
    id: 36,
    question: "Comment créer un tableau vide ?",
    options: ["{}", "()", "[]", "''"],
    answer: "[]",
  },
  {
    id: 37,
    question: "Quelle est la valeur initiale d’une variable non définie ?",
    options: ["null", "undefined", "0", "false"],
    answer: "undefined",
  },
  {
    id: 38,
    question: "Quel mot-clé permet de sortir d’une boucle ?",
    options: ["break", "exit", "stop", "return"],
    answer: "break",
  },
  {
    id: 39,
    question: "Quelle méthode enlève le dernier élément d’un tableau ?",
    options: ["remove()", "pop()", "shift()", "delete()"],
    answer: "pop()",
  },
  {
    id: 40,
    question: "Comment écrire une fonction fléchée ?",
    options: ["() => {}", "function() {}", "-> {}", "=> function()"],
    answer: "() => {}",
  },
  {
    id: 41,
    question: "Quelle méthode ajoute un élément à la fin d’un tableau ?",
    options: ["append()", "add()", "insert()", "push()"],
    answer: "push()",
  },
  {
    id: 42,
    question: "Comment vérifier si deux valeurs sont égales en type et en valeur ?",
    options: ["==", "!=", "=", "==="],
    answer: "===",
  },
  {
    id: 43,
    question: "Quel est le résultat de 3 + '4' en JavaScript ?",
    options: ["'34'", "7", "NaN", "undefined"],
    answer: "'34'",
  },
  {
    id: 44,
    question: "Quel type retourne la méthode Array.isArray([1,2,3]) ?",
    options: ["false", "true", "array", "object"],
    answer: "true",
  },
  {
    id: 45,
    question: "Quel est l'opérateur ternaire ?",
    options: ["condition ? true : false", "if...else", "switch", "case"],
    answer: "condition ? true : false",
  },
  {
    id: 46,
    question: "Comment accéder au 3ème élément d’un tableau 'arr' ?",
    options: ["arr(2)", "arr{2}", "arr<2>", "arr[2]"],
    answer: "arr[2]",
  },
  {
    id: 47,
    question: "Quelle méthode convertit un objet JavaScript en chaîne JSON ?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.encode()", "JSON.objectify()"],
    answer: "JSON.stringify()",
  },
  {
    id: 48,
    question: "Que renvoie 'typeof NaN' ?",
    options: ["NaN", "undefined", "number", "object"],
    answer: "number",
  },
  {
    id: 49,
    question: "Quelle méthode enlève le premier élément d’un tableau ?",
    options: ["pop()", "slice()", "shift()", "remove()"],
    answer: "shift()",
  },
  {
    id: 50,
    question: "Comment déclare-t-on une constante en JavaScript ?",
    options: ["const x = 5", "let x = 5", "var x = 5", "constant x = 5"],
    answer: "const x = 5",
  },
];

function Questions() {
  const [isPop, setIsPop] = useState(false);
  const [isChrono, setIsChrono] = useState(true);
  const [chrono, setChrono] = useState(0); // en secondes
  const [currentName, setCurrentName] = useState("");
  const timerRef = useRef<number | null>(null);
  const { currentQuestion, setCurrentQuestion, allQuestions, score, setScore } = useGame();
  // const randomNumber = Math.floor(Math.random() * 50) + 1;
  // setCurrentQuestion(dataBase[randomNumber]);

  function handleClick(option: string) {
    if (option === currentQuestion.answer) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      setCurrentQuestion(allQuestions[randomNumber]);
      const newScore = score + 1;
      setScore(newScore);
    } else {
      const newChrono = chrono + 5;
      setChrono(newChrono);
    }
  }

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentName(e.target.value);
  }

  function handleOk() {
    const newUserScore = {
      name: currentName,
      score: chrono,
    };
    if (allScore) {
      allScore.push(newUserScore);
      localStorage.setItem("allScore", JSON.stringify(allScore));
    }
    setIsPop(false);
  }

  // Démarre le chrono au montage

  // Arrête le chrono quand score atteint 8
  useEffect(() => {
    if (score >= 8) {
      if (timerRef.current !== null) clearInterval(timerRef.current);
      setIsChrono(false);
      setIsPop(true);
    }
  }, [score]);

  useEffect(() => {
    setIsPop(false);
    setCurrentQuestion(dataBase[0]);
    setScore(0);
    setChrono(0);
    setIsChrono(true);
    console.log(isChrono);
  }, []);

  useEffect(() => {
    if (isChrono) {
      timerRef.current = setInterval(() => {
        setChrono((prev) => prev + 1);
      }, 1000);
    }

    // Nettoyage si le composant est démonté
    return () => {
      if (timerRef.current !== null) clearInterval(timerRef.current);
    };
  }, [isChrono]);

  return (
    <>
      <div className="question-container">
        <h2>{currentQuestion.question}</h2>

        <ul>
          {currentQuestion.options.map((option) => (
            <button onClick={() => handleClick(option)} type="button" key={option}>
              {option}
            </button>
          ))}
        </ul>
        <section>
          <p>Ton score</p>
          <article className="timer">{score}</article>
          <p>Ton temps en secondes</p>
          <article className="timer">{chrono}</article>
        </section>
      </div>
      {isPop ? (
        <div className="popup">
          <div className="popup-content">
            <h1 id="congrat" className="congratulation">
              Félicitation !!
            </h1>
            <div id="temp" className="congratulation">
              Votre temps est de : {chrono} secondes
            </div>

            <input value={currentName} onChange={handleName} id="name" placeholder="Entrez votre nom" type="text" />
            <Link to="/classement">
              <button className="go-button" onClick={() => handleOk()} id="ok" type="button">
                Ok
              </button>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default Questions;
