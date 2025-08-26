import { useState } from "react";
import { useEffect } from "react";

interface FunFact {
  text: string;
}

export default function RandomFunFactsHelper() {

  const [allFacts, setAllFacts] = useState<FunFact[]>([]);
  // state variable that holds current fact displayed to user
  const [currentFact, setCurrentFact] = useState("");
  // timer functionality
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  // state variable to store all facts
  

  useEffect(() => {
    // fetch code
    fetch("./json/funfacts.json")
      .then((response) => response.json())
      .then((data) => {
        setAllFacts(data.funFacts); // stores all facts
        setCurrentFact(data.funFacts[0].text); // displays first fact
      });
  }, []);

  useEffect(() => {
    if (!isAutoPlay || allFacts.length === 0) return;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * allFacts.length);
      const selectedFact = allFacts[randomIndex];
      if (selectedFact && selectedFact.text) {
        setCurrentFact(selectedFact.text);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlay, allFacts]);

  return (
    <div>
      <h1>Fun Facts</h1>
      <p>{currentFact}</p>
      <button onClick={() => setIsAutoPlay(!isAutoPlay)}>
        {isAutoPlay ? "Stop Auto-Play" : "Start Auto-Play"}
      </button>
    </div>
  );
}