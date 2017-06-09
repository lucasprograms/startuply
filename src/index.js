import '../style/reset.scss'
import '../style/style.scss'

import { suffixes, nouns, loadingText, fonts } from './constants'

const randomPick = (array) => array[Math.floor(Math.random() * array.length)]

const generateName = () => `${randomPick(nouns)}<span class="startup-name-suffix">${randomPick(suffixes)}</span>`

const generateColor = () => {
  const hexComponents = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
  const hex = new Array(6).fill('').map(el => randomPick(hexComponents)).join('')
  return `#${hex}`
}

const ingify = (verb) =>
  `${verb[verb.length - 1] === 'e' ? verb.slice(0, verb.length - 1) : verb}ing`

window.onload = function () {
  const button = document.querySelector('button')
  button.addEventListener('click', function () {
    const loadingTextTarget = document.getElementById('loading-text-target')
    const startupNameTarget = document.getElementById('startup-name-target')
    const startUpName = generateName()
    const loadingTexts = new Array(3).fill('')
      .map(el => {
        const verb = ingify(randomPick(loadingText.verbs))
        return `<em>${randomPick(loadingText.adverbs)} ${verb} ${randomPick(loadingText.nouns)}...<em>`
      })

    startupNameTarget.innerHTML = ''
    loadingTextTarget.innerHTML = loadingTexts[0]
    
    setTimeout(
      function () { loadingTextTarget.innerHTML = loadingTexts[1] }, 1500
    )

    setTimeout(
      function () { loadingTextTarget.innerHTML = loadingTexts[2] }, 3000
    )

    setTimeout(
      function () {
        loadingTextTarget.innerHTML = ''
        startupNameTarget.innerHTML = startUpName
        var startupNameFont = randomPick(fonts)
        var startupNameTextColor = generateColor()
        startupNameTarget.setAttribute('style', `font-family:"${startupNameFont}";color:${startupNameTextColor}`)
        if (startupNameFont === 'Open Sans' || Math.random() < .4) {
          document.querySelector('.startup-name-suffix').setAttribute('style', `color:${generateColor()}`)
        }
      }, 4500
    )
  })
}