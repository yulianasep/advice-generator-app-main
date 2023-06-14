const API_URL = "https://api.adviceslip.com/advice";

export async function fetchAdvices() {
  const response = await fetch(API_URL);
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong with the fetch");
  }
  const dataResponse = await response.json(); 
  return dataResponse; 
}
