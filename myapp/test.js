function initialiseQuestions() {
    l = length(situationArray)
    var indices = [];
    while (indices.length < totalquestions) {
        var newindex = Math.floor(Math.random() * l);
        if (contains(newindex, indices) == False) {
            indices.push(newindex);
        }
    }
    while ()
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
var totalquestions = 10;
var questionsArray = [];
var situationArray = ["You're on a walk. A boulder rolls onto your path.", 
"You're on a walk. A cat jumps in front of you.", 
"You're on a walk. The sky goes black.",
 "You're on a walk. A bolt of lightning strikes beside you.", 
 "You're on a walk. Shrek pops out of the ground.", 
 "You're at home. Your chair turns into a lion.", 
 "You're at home. It starts raining indoors.", 
 "You're at home. Everything you touch turns to gold.",
"You're at home. A bear barges into your room.",
"You're at home. Your pets begin to talk.",
"You're eating food. Your fork turns into a frog.",
 "You're eating food. Your tongue turns into paper.",
"You're eating food. Your plate begins to rotate.",
"You're eating food. All your food tastes like chocolate.",
"You're eating food. All your food turns into peas."];