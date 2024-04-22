#! /usr/bin/cnv node 
import inquirer from "inquirer";
let repeat = true;
while (repeat == true) {
    console.log("\n****** Words and Characters Count *****");
    //console.log("\n****** Based on PKR *****");
    let answers = await inquirer.prompt([{ name: "para", type: "input", message: "Enter para to count words and characters " }
    ]);
    let myPara = answers.para;
    myPara = myPara.trim();
    let myCharacters = myPara.replace(/\s/g, "");
    let myWords = myPara.split(" ");
    let wordsCount = 0;
    let charactersCount = 0;
    wordsCount = WordsCount(myWords);
    charactersCount = myCharacters.length;
    console.log(`Your para has ${wordsCount} words and ${charactersCount} characters. `);
    console.log(CharactersCount(myWords));
    let ans = await inquirer.prompt([{ name: "isContinue", type: "confirm", message: "Do You Want to Contine ...... (y/n): ",
            default: "true" }
    ]);
    repeat = ans.isContinue;
}
function WordsCount(items) {
    let n = 0;
    for (let a = 0; a < items.length; a++) {
        items[a] = items[a].replace(/\s/g, "");
        if (items[a].length >= 1)
            n = n + 1;
    }
    return n;
}
function CharactersCount(items) {
    let n = 0;
    for (let a = 0; a < items.length; a++) {
        items[a] = items[a].replace(/\s/g, "");
        if (items[a].length >= 1)
            n = n + items[a].length;
    }
    return n;
}
