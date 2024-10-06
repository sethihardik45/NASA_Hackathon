(function() {
    const quizData = {
        basic: [
            {
                question: "What is SDG 6 about?",
                answers: {
                    a: "Clean Water and Sanitation",
                    b: "Affordable and Clean Energy",
                    c: "Life Below Water"
                },
                correctAnswer: "a"
            },
            {
                question: "How many people lack access to clean drinking water?",
                answers: {
                    a: "1 billion",
                    b: "2 billion",
                    c: "3 billion"
                },
                correctAnswer: "b"
            },
            {
                question: "What is a key component of sanitation?",
                answers: {
                    a: "Water filtration",
                    b: "Waste disposal",
                    c: "Energy production"
                },
                correctAnswer: "b"
            },
            {
                question: "Which of the following is essential for good health?",
                answers: {
                    a: "Access to clean water",
                    b: "Public transport",
                    c: "Housing"
                },
                correctAnswer: "a"
            },
            {
                question: "What is the primary source of water pollution?",
                answers: {
                    a: "Plastic waste",
                    b: "Sewage discharge",
                    c: "Agricultural runoff"
                },
                correctAnswer: "b"
            },
            {
                question: "What percentage of freshwater is available for human consumption?",
                answers: {
                    a: "2.5%",
                    b: "5%",
                    c: "10%"
                },
                correctAnswer: "a"
            },
            {
                question: "Which region has the highest number of people without access to safe drinking water?",
                answers: {
                    a: "Africa",
                    b: "Asia",
                    c: "Europe"
                },
                correctAnswer: "a"
            },
            {
                question: "What is the UN's target for improving water quality by 2030?",
                answers: {
                    a: "Reduce pollution by half",
                    b: "Eliminate pollution completely",
                    c: "Increase pollution levels"
                },
                correctAnswer: "a"
            },
            {
                question: "Which organization is primarily responsible for monitoring SDG 6 progress?",
                answers: {
                    a: "UNICEF",
                    b: "WHO",
                    c: "UN Water"
                },
                correctAnswer: "c"
            },
            {
                question: "What is the recommended daily water intake for an adult?",
                answers: {
                    a: "2 liters",
                    b: "3 liters",
                    c: "1 liter"
                },
                correctAnswer: "a"
            }
        ],
        intermediate: [
            {
                question: "What is the goal of SDG 6?",
                answers: {
                    a: "Ensure availability and sustainable management of water and sanitation",
                    b: "Ensure access to affordable energy",
                    c: "Reduce inequality within and among countries"
                },
                correctAnswer: "a"
            },
            {
                question: "What percentage of the world's population lacks safely managed drinking water services?",
                answers: {
                    a: "25%",
                    b: "30%",
                    c: "36%"
                },
                correctAnswer: "c"
            },
            {
                question: "What is the target for water-related ecosystems by 2020?",
                answers: {
                    a: "Protect and restore water-related ecosystems",
                    b: "Increase water efficiency",
                    c: "Reduce water pollution"
                },
                correctAnswer: "a"
            },
            {
                question: "Which of the following is a target under SDG 6?",
                answers: {
                    a: "End open defecation",
                    b: "Increase industrial growth",
                    c: "Improve air quality"
                },
                correctAnswer: "a"
            },
            {
                question: "What does 'safely managed drinking water' mean?",
                answers: {
                    a: "Water sourced from natural springs",
                    b: "Water treated with chemicals",
                    c: "Water that is accessible and free from contamination"
                },
                correctAnswer: "c"
            },
            {
                question: "Which of the following contributes to water scarcity?",
                answers: {
                    a: "Water conservation practices",
                    b: "Population growth",
                    c: "Improved irrigation"
                },
                correctAnswer: "b"
            },
            {
                question: "What is the main cause of groundwater depletion?",
                answers: {
                    a: "Urbanization",
                    b: "Over-extraction for agriculture",
                    c: "Water recycling"
                },
                correctAnswer: "b"
            },
            {
                question: "Which technology can help improve water management?",
                answers: {
                    a: "Solar panels",
                    b: "Rainwater harvesting",
                    c: "Wind turbines"
                },
                correctAnswer: "b"
            },
            {
                question: "What is a significant risk of inadequate sanitation?",
                answers: {
                    a: "Increased biodiversity",
                    b: "Waterborne diseases",
                    c: "Enhanced water quality"
                },
                correctAnswer: "b"
            },
            {
                question: "What is the primary focus of SDG 6?",
                answers: {
                    a: "Health and well-being",
                    b: "Water and sanitation",
                    c: "Sustainable cities"
                },
                correctAnswer: "b"
            }
        ],
        advanced: [
            {
                question: "What is the global target for water-related ecosystems by 2020?",
                answers: {
                    a: "Protect and restore water-related ecosystems",
                    b: "Increase water efficiency",
                    c: "Reduce water pollution"
                },
                correctAnswer: "a"
            },
            {
                question: "Which SDG is primarily focused on clean water?",
                answers: {
                    a: "SDG 5",
                    b: "SDG 6",
                    c: "SDG 7"
                },
                correctAnswer: "b"
            },
            {
                question: "What is the aim of the International Decade for Action on Water for Sustainable Development (2018-2028)?",
                answers: {
                    a: "To increase the price of water",
                    b: "To promote sustainable water management",
                    c: "To reduce water scarcity"
                },
                correctAnswer: "b"
            },
            {
                question: "Which country has the highest water stress level?",
                answers: {
                    a: "Canada",
                    b: "Egypt",
                    c: "Brazil"
                },
                correctAnswer: "b"
            },
            {
                question: "What role does climate change play in water availability?",
                answers: {
                    a: "It increases water availability",
                    b: "It has no impact",
                    c: "It can lead to more droughts and floods"
                },
                correctAnswer: "c"
            },
            {
                question: "What is a major challenge for achieving SDG 6?",
                answers: {
                    a: "Global cooperation",
                    b: "Sustainable urban planning",
                    c: "Political instability"
                },
                correctAnswer: "c"
            },
            {
                question: "What is one way to address water pollution?",
                answers: {
                    a: "Promoting industrial growth",
                    b: "Implementing stricter regulations",
                    c: "Reducing public awareness"
                },
                correctAnswer: "b"
            },
            {
                question: "What is the impact of deforestation on water resources?",
                answers: {
                    a: "It increases water supply",
                    b: "It has no impact",
                    c: "It can lead to soil erosion and reduced water quality"
                },
                correctAnswer: "c"
            },
            {
                question: "Which organization sets global water standards?",
                answers: {
                    a: "World Health Organization (WHO)",
                    b: "United Nations Development Programme (UNDP)",
                    c: "Food and Agriculture Organization (FAO)"
                },
                correctAnswer: "a"
            },
            {
                question: "What is the water-energy nexus?",
                answers: {
                    a: "The relationship between water and energy production",
                    b: "The connection between water and soil quality",
                    c: "The balance between water supply and demand"
                },
                correctAnswer: "a"
            }
        ]
    };

    function buildQuiz(level) {
        const output = [];
        quizData[level].forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                       <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                     </label>`
                );
            }
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        });

        document.getElementById(`quiz${level === 'basic' ? '' : level === 'intermediate' ? '2' : '3'}`).innerHTML = output.join('');
    }

    function showResults(level) {
        const answerContainers = document.querySelectorAll(`#quiz${level === 'basic' ? '' : level === 'intermediate' ? '2' : '3'} .answers`);
        let numCorrect = 0;

        quizData[level].forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        document.getElementById(`results${level === 'basic' ? '' : level === 'intermediate' ? '2' : '3'}`).innerHTML = `You got ${numCorrect} out of ${quizData[level].length} correct!`;
    }

    document.getElementById('submit').addEventListener('click', () => showResults('basic'));
    document.getElementById('submit2').addEventListener('click', () => showResults('intermediate'));
    document.getElementById('submit3').addEventListener('click', () => showResults('advanced'));

    buildQuiz('basic');
    buildQuiz('intermediate');
    buildQuiz('advanced');
})();
