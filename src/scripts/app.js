"use strict";

import { fetchAdvices } from "../services";

const $adviceTitle = document.querySelector(".advice-title");
const $adviceText = document.querySelector(".advice-text");
const $searchBtn = document.querySelector(".button")

function updateAdvince(adviceData) {
    $adviceTitle.innerHTML = adviceData
    $adviceText.innerHTML = adviceData
}

async function searchAdvice(){
    try {
       const adviceData = await fetchAdvices();

    } catch (error) {
        throw new Error("Data not found")
        
    }
}

$searchBtn.addEventListener("click", () => {
    searchAdvice();
})