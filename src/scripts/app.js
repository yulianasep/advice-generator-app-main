"use strict";

import { fetchAdvices } from "../services/index.js";

const $adviceTitle = document.querySelector(".advice-title");
const $adviceText = document.querySelector(".advice-text");
const $searchBtn = document.querySelector(".button");

function updateAdvice(adviceData) {
    $adviceTitle.innerHTML = "ADVACE# " + (adviceData.slip.id);
    $adviceText.innerHTML =  '"' + (adviceData.slip.advice) + '"';
}

async function searchAdvice(){
    try {
       const adviceData = await fetchAdvices();
        updateAdvice(adviceData)
    } catch (error) {
        console.error("Data not found: " + error)
    }
}

$searchBtn.addEventListener("click", () => {
    searchAdvice();
});
