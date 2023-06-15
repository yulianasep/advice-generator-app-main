"use strict";

import { fetchAdvices } from "../services/index.js";
import {$, getCurrentDataTime} from "../utils/index.js"

const $adviceTitle = $(".advice-title");
const $adviceText = $(".advice-text");
const $searchBtn = $(".button");
const $adviceHours = $(".advice-hours");

/* function updateAdvice(advace = {slip:{id:'', advice: ''}}) {
    const {slip: {id,advice }} = advace;
    $adviceTitle.innerHTML = `ADVACE# ${id}`;
    $adviceText.innerHTML = `"${advice}"`;
} */

function updateAdvice({slip}) {
    const {id, advice} = slip;
    $adviceTitle.innerHTML = `ADVICE# ${id}`;
    $adviceText.innerHTML = `"${advice}"`;
}

function  updateHours(){
    $adviceHours.innerHTML = getCurrentDataTime()
}

async function searchAdvice(){
    try {
       const adviceData = await fetchAdvices();
        updateAdvice(adviceData)
        updateHours()
    } catch (error) {
        console.error("Data not found: " + error)
    }
}

$searchBtn.addEventListener("click", () => {
    searchAdvice();
});

updateHours();

