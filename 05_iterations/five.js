// for each loop

const coding = ['js', 'cpp', 'py', 'java', 'rb']

coding.forEach(function (val) {   //callbackfn does'nt have name
    // console.log(val);
})

coding.forEach( (val) => {
    // console.log(val);
})


function printme(item) {
    // console.log(item);
}
coding.forEach(printme)



coding.forEach((val, index, arr) => {
    // console.log(val, index, arr);
})


const myCoding = [
    {
        langaugeName : "JavaScript",
        languageFileName : "js"
    },

    {
        langaugeName : "Java",
        languageFileName : "java"
    },

    {
        langaugeName : "C++",
        languageFileName : "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langaugeName);
})
