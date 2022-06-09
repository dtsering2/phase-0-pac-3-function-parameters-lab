//Function with one parameter
function introduction(name){
    return `Hi, my name is ${name}.`;
}
console.log(introduction("Aki"));
console.log(introduction("Samip"));

//Function with two parameters
function introductionWithLanguage (name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguage("Aki","Ember.js"));
console.log(introductionWithLanguage("Samip", "React"));

//Function with two parameters and a default
function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguageOptional("Gracie"));

//Function with two parameters and a overriden default
function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguageOptional("Gracie", "Python"));