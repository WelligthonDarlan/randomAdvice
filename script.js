async function AskForAdvice () {
  const response = await fetch('https://api.adviceslip.com/advice')
  const conselho = await response.json()

  const advicPhrase = document.querySelector('#advicPhrase')
  const phrase = conselho.slip
  advicPhrase.textContent = phrase.advice
}