var physicsData = [
    {
        id:1,
        question: "What is the first Mersenne prime exponent over 1000?",
        options: ["1279", "2203", "1009", "1069"],
        correct: '1279',
        answered: false,
        visited: false
    },
    {
        id:2,
        question: "To the nearest whole number, how many radians are in a whole circle?",
        options: ['3', '4', '5', '6'],
        correct: '6',
        answered: false,
        visited: false
    },
    {
        id:3,
        question: "What is the alphanumeric representation of the imaginary number?",
        options: ['e', 'n', 'i', 'x'],
        correct: 'i',
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


localStorage.setItem("physicsData", JSON.stringify(physicsData))

const getPhysicsData = () => {
    return (JSON.parse(localStorage.getItem("physicsData")))
    // return physicsData;
}

export default getPhysicsData
