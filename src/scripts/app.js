"use strict";

import { fetchAdvices } from "../services/index.js";
import {$} from "../utils/index.js"

const $adviceTitle = $(".advice-title");
const $adviceText = $(".advice-text");
const $searchBtn = $(".button");

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
