//Function with one parameter
function introduction(name){
    return `Hi, my name is ${name}.`;
}


//Function with two parameters
function introductionWithLanguage (name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}


//Function with two parameters and a default
function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

//Function with two parameters and a overriden default
function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
