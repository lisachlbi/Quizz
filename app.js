let quiz1 = [

    {
        question: "Quelle est la capitale du Mexique ?",
        reponse: [
            { text: "Mexico", correct: true },
            { text: "Maputo", correct: false },
            { text: "Managua", correct: false },
            { text: "Monaco", correct: false },
        ]
    },

    {
        question: "Quelle est la capitale de la Chine ?",
        reponse: [
            { text: "Phnom Penh", correct: false },
            { text: "Prague", correct: false },
            { text: "Pékin", correct: true },
            { text: "Prétoria", correct: false }
        ]
    },

    {
        question: "Quelle est la capitale de la Namibie ?",
        reponse: [
            { text: "Wellington", correct: false },
            { text: "Windhoek", correct: true },
            { text: "Washington", correct: false },
            { text: "Waben", correct: false },
        ]
    },

    {
        question: "Quelle est la capitale de la Bulgarie ?",
        reponse: [
            { text: "Sanaa", correct: false },
            { text: "Stockholm", correct: false },
            { text: "Sarajevo", correct: false },
            { text: "Sofia", correct: true },
        ]
    },

    {
        question: "Quelle est la capitale de l'île de Kiribati ?",
        reponse: [
            { text: "Belmopa", correct: false },
            { text: "Bujumbura", correct: false },
            { text: "Bairiki", correct: true },
            { text: "Buenos Aires", correct: false }
        ]
    },

]
let quiz2 = [

    {
        question: "La date de l'indépendance Haitienne ?",
        reponse: [
            { text: "22 aout 1784", correct: false },
            { text: "1 janvier 1804", correct: true },
            { text: "27 avril 1848", correct: false },
            { text: "26 août 1789", correct: false },
        ]
    },

    {
        question: "La date de l'indépendance Algérienne ?",
        reponse: [
            { text: "5 juillet 1962", correct: true },
            { text: "1 novembre 1954", correct: false },
            { text: "18 mars 1962", correct: false },
            { text: "13 aout 1956", correct: false }
        ]
    },

    {
        question: "La date de l'indépendance Angolaise ?",
        reponse: [
            { text: "4 février 1961", correct: false },
            { text: "25 avril 1974", correct: false },
            { text: "25 mai 1963", correct: false },
            { text: "11 novembre 1975", correct: true },
        ]
    },

    {
        question: "La date de l'indépendance Vietnamienne ?",
        reponse: [
            { text: "10 mai 1941", correct: false },
            { text: "20 juin 1940", correct: false },
            { text: "2 novembre 1945", correct: true },
            { text: "19 décembre 1946", correct: false },
        ]
    },

    {
        question: "La date de l'indépendance Vénézuelienne ?",
        reponse: [
            { text: "30 mars 1845", correct: false },
            { text: "5 juillet 1811", correct: true },
            { text: "24 juin 1821", correct: false },
            { text: "15 février 1819", correct: false }
        ]
    },

]
let quiz3 = [

    {
        question: "Quel roi de Numidie défie Rome de 111 à 105 avant J-C  ?",
        reponse: [
            { text: "Bocchus", correct: false },
            { text: "Jugurtha", correct: true },
            { text: "Syphax", correct: false },
            { text: "Massinissa", correct: false },
        ]
    },

    {
        question: "Qui organise la cérémonie du Bois-Caïman, et reuni les esclaves marrons dans la nuit du 14 août 1791 ?",
        reponse: [
            { text: "Samba Boukman", correct: true },
            { text: "Macandal", correct: false },
            { text: "Jean Zinga", correct: false },
            { text: "Petit Noel Prieur", correct: false }
        ]
    },

    {
        question: "Qui devient le premier empereur du Japon le 11 février 660 avant J-C ?",
        reponse: [
            { text: "Jinmu", correct: true },
            { text: "Nintoku", correct: false },
            { text: "Meiji", correct: false },
            { text: "Showa", correct: false },
        ]
    },

    {
        question: "Qui participe à la redaction en 1997 du rapport 'Bringing them home' qui révèle le scandanle des 100 000 enfants aborigènes enlevés de force à leurs parents par le gouvernement australien de 1869 jusqu'en 1969  ?",
        reponse: [
            { text: "Pearl Gibbs", correct: false },
            { text: "Edward Koiki Mabo", correct: false },
            { text: "Burnum Burnum", correct: false },
            { text: "Mick Dodson", correct: true },
        ]
    },

    {
        question: "Quel Rais d'Alger est tué le 17 juin 1815 par le flotte américiane au large des côtes espagnole ?",
        reponse: [
            { text: "Rais Salah", correct: false },
            { text: "Rais Mourad", correct: false },
            { text: "Rais Hamidou", correct: true },
            { text: "Rais Corso", correct: false }
        ]
    },

]

// Création variable index = commence à zéro

let index = 0

// Création variable score = commence à zéro
let score = 0

// Création variable = désigne le quiz utilisé dans l'interface

let quizUtilise

// Création constante relié au HTML

const allButton = document.querySelector('.display')

// Création de constantes reliés au HTML

const quizCapitale = document.querySelector("#quizCapitale")
const quizIndependance = document.querySelector("#quizIndependance")
const quizPersonnage = document.querySelector("#quizPersonnage")
const modal = document.querySelector(".modal")

// Création constante relié au HTML = la totalité des questions des quizs

const totalQuestions = document.querySelector("#questions")

// Création d'une variable regroupant les tableaux 

let totalQuiz = [quiz1, quiz2, quiz3]

// Relier les boutons des quizs à leur questionnaire

quizCapitale.addEventListener("click", function () {
    allButton.style.display = "none"
    totalQuestions.style.display = "block"
    quizUtilise = totalQuiz[0]
    displayQuizz(index)

})


quizIndependance.addEventListener("click", function name() {
    allButton.style.display = "none"
    totalQuestions.style.display = "block"
    quizUtilise = totalQuiz[1]
    displayQuizz(index)
})

quizPersonnage.addEventListener("click", function name() {
    allButton.style.display = "none"
    totalQuestions.style.display = "block"
    quizUtilise = totalQuiz[2]
    displayQuizz(index)
})


// Création d'une fonction "displayQuizz" : création des différents composant HTML depuis JS

function displayQuizz(i) {

    let global = document.createElement("div")

    let questionText = document.createElement("h3")

    let question = quizUtilise[i].question

    questionText.append(question)
    global.append(questionText)

    let displayButton = document.createElement("div")
    displayButton.classList.add("displayButton")
    global.append(displayButton)

    totalQuestions.append(global)

    // Création d'une variable 
    
    let boutonReponseCorrect

    // Création d'une boucle pour afficher les reponses du questionnaire + creation des composants HTML depuis JS

    for (let y = 0; y < quizUtilise[i].reponse.length; y++) {

        let reponse = quizUtilise[i].reponse[y].text
        let reponseText = document.createElement("button")
        reponseText.append(reponse)
        displayButton.append(reponseText)
        totalQuestions.append(global)

        // Condition qui relie l'élément HTML "button" a la variable let boutonReponseCorrect

        if(quizUtilise[i].reponse[y].correct) {
            boutonReponseCorrect = reponseText
        }

        // Création d'un évènement qui passe à la prochaine question + (réponses) aux couleurs / vert juste / rouge faux / 

        reponseText.addEventListener("click", function () {

            if (quizUtilise[i].reponse[y].correct) {
                reponseText.classList.add("true")
                score++
            } else {
                reponseText.classList.add("false")
                boutonReponseCorrect.classList.add("true");
            
            }


            // Création d'une fonction timeout 

            setTimeout(function () {

                global.classList.add("hidden")

                if (index < quizUtilise.length - 1) {
                    index++
                    displayQuizz(index)
                } else {

                    // Création d'une modale qui contient une div et un bouton 
                    // + concat pour affiche msg et score +

                    let textResultat = document.createElement("div")
                    textResultat.classList.add("textResultat")
                    modal.append(textResultat)
                    textResultat.innerText = "Votre score est ".concat(score)


                    // Création du bouton de la modale + évènement renvoi à la première page 

                    let retour = document.createElement("button")
                    retour.setAttribute('id', 'buttonRetour')
                    retour.innerText = "Retour"
                    retour.addEventListener("click", function () {
                        location.reload()
                    })
                    modal.appendChild(retour);

                    modal.style.display = "block"
                    totalQuestions.classList.add("hidden")

                }
            }, 1000)

        })

    }



}

