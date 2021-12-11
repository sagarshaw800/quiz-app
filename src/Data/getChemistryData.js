var chemistryData =[
    {
        id:1,
        question: "What is isobutylphenylpropanoic acid more commonly known as?",
        options: ["Morphine", "Ibuprofen", "Aspirin", "Ketamine"],
        correct: 'Ibuprofen',
        answered: false,
        visited: false
    },
    {
        id:2,
        question: "Which of these chemical compounds is NOT found in gastric acid?",
        options: ['Sulfuric acid', "Hydrochloric acid", "Potassium chloride", "Sodium chloride"],
        correct: 'Sulfuric acid',
        answered: false,
        visited: false
    },
    {
        id:3,
        question: "After which Danish city is the 72th element on the periodic table named?",
        options: ["Odense", "Herning", "Copenhagen", "Skagen"],
        correct: 'Copenhagen',
        answered: false,
        visited: false
    },
    {
        id:4,
        question: "In the hexadecimal system, what number comes after 9?",
        options: ['10', 'The Letter A', '16', 'The Number 0'],
        correct: 'The Letter A',
        answered: false,
        visited: false
    },
    {
        id:5,
        question: "How many zeros are there in a googol?",
        options: ['10', '100', '1,000', '1,000,000'],
        correct: '100',
        answered: false,
        visited: false
    },
    {
        id:6,
        question: "What is the Roman numeral for 500?",
        options: ['L', 'C', 'D', 'X'],
        correct: 'D',
        answered: false,
        visited: false
    },
    {
        id:7,
        question: "What Greek letter is used to signify summation?",
        options: ["Delta", "Alpha", "Omega", 'Sigma'],
        correct: 'Sigma',
        answered: false,
        visited: false
    },
    {
        id:8,
        question: "Which of the following dice is not a platonic solid?",
        options: ["8-sided die", "10-sided die", "12-sided die", '20-sided die'],
        correct: '10-sided die',
        answered: false,
        visited: false
    },
]

localStorage.setItem("chemistryData", JSON.stringify(chemistryData))

const getChemistryData = () => {
    return (JSON.parse(localStorage.getItem("chemistryData")))
    // return chemistryData;
}

export default getChemistryData
