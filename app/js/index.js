const icon = document.querySelector("[data-advice-icon]")
const main = document.querySelector("#main-advice-container")
const id = document.querySelector("#advice-id")
const advice = document.querySelector("#advice")

const API_URL = `https://api.adviceslip.com/advice`

const getAdvice = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()

    const dataID = data.slip.id
    const dataAdvice = data.slip.advice

    id.innerText = `ADVICE #${dataID}`
    advice.innerText = `"${dataAdvice}"`
}

getAdvice()

icon.addEventListener("click", getAdvice)
