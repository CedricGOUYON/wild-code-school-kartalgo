import "./animations.css";
import kart from "../../assets/kart-one.png";
import { useEffect, useState } from "react";
import { useGame } from "../../Context/GameContext";

const stylePos = [
  {
    position: "relative" as const,
    top: "55%",
    left: "88.5%",
    transform: "rotate(90deg)",
  },

  {
    position: "relative" as const,
    top: "34%",
    left: "82%",
    transform: "rotate(30deg)",
  },
  {
    position: "relative" as const,
    top: "19%",
    left: "52%",
    transform: "rotate(30deg)",
  },
  {
    position: "relative" as const,
    top: "4%",
    left: "17%",
    transform: "rotate(0deg)",
  },
  {
    position: "relative" as const,
    top: "35%",
    left: "5%",
    transform: "rotate(-90deg)",
  },
  {
    position: "relative" as const,
    top: "66%",
    left: "19%",
    transform: "rotate(150deg)",
  },
  {
    position: "relative" as const,
    top: "55%",
    left: "50%",
    transform: "rotate(-135deg)",
  },
  {
    position: "relative" as const,
    top: "86%",
    left: "76%",
    transform: "rotate(180deg)",
  },
];

const posFinal = {
  position: "relative" as const,
  top: "45%",
  left: "88.5%",
  transform: "rotate(90deg)",
};

function Animations() {
  const [posKart, setPosKart] = useState(stylePos[0]);
  const { score } = useGame();

  useEffect(() => {
    if (score < 8) {
      setPosKart(stylePos[score]);
    } else {
      setPosKart(posFinal);
    }
  }, [score]);

  return (
    <>
      <div className="animation">
        <img style={posKart} className="kart" src={kart} alt="petit kart" />
      </div>
    </>
  );
}
export default Animations;
