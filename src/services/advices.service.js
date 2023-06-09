const API_URL = "https://api.adviceslip.com/advice";

export async function fetchAdvices() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Something went wrong with the fetch");
  }
  console.log(response);
  return response.json();
}
