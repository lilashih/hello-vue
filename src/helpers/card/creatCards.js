import _ from "lodash";

const faces = [
  {
    icon: "candy-cane",
    backgroundColor: "#cadcee",
    color: "#dc2626",
  },
  {
    icon: "bomb",
    backgroundColor: "#cccbcd",
    color: "#000000",
  },
  {
    icon: "cat",
    backgroundColor: "#ef4444",
    color: "#f3f4f6",
  },
  {
    icon: "anchor",
    backgroundColor: "#fecaca",
    color: "#069bcc",
  },
  {
    icon: "crown",
    backgroundColor: "#866fa4",
    color: "#eeff72",
  },
  {
    icon: "grin-tongue-wink",
    backgroundColor: "#797171",
    color: "#ffd700",
  },
  {
    icon: "fish",
    backgroundColor: "#528cd1",
    color: "#fbdcbb",
  },
  {
    icon: "guitar",
    backgroundColor: "#d5e4ce",
    color: "#9c6721",
  },
];

const initCards = (items) => {
  let cardData = [];
  items.forEach((item) => {
    cardData.push({
      ...item,
      v: 1,
      visible: false,
      matched: false,
    });
    cardData.push({
      ...item,
      v: 2,
      visible: false,
      matched: false,
    });
  });

  cardData = _.shuffle(cardData);
  return cardData;
};

export default function creatCards() {
  return initCards(faces);
}