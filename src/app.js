/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let pronouns = ["a", "the", "my", "that"];
  let subject = ["professional pickleball player", "dog", "doll"];
  let action = ["ate", "shredded", "stole", "airfried"];
  let possession = ["tv", "bike", "beard"];
  let where = ["home", "mars", "shire"];

  let proIndex = Math.floor(Math.random() * pronouns.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let possIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronouns[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    possession[possIndex] +
    " " +
    where[whereIndex]
  );
};
