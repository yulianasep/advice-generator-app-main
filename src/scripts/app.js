"use strict";

import { fetchAdvices } from "../services/index.js";

const $adviceTitle = document.querySelector(".advice-title");
const $adviceText = document.querySelector(".advice-text");
const $searchBtn = document.querySelector(".button")

function updateAdvice(adviceData) {
    $adviceTitle.innerHTML = adviceData.slip.id;
    $adviceText.innerHTML = adviceData.slip.advice;
}

async function searchAdvice(){
    try {
       const adviceData = await fetchAdvices();
        updateAdvice(adviceData)
    } catch (error) {
        throw new Error("Data not found")
        
    }
}

$searchBtn.addEventListener("click", () => {
    searchAdvice();
});