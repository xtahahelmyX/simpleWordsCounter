let batman = "I love you batman"

const counter = () => {
 
 let batmanSticky = batman.split(" ").join("")
 let batmanLetters = batmanSticky.split("")
 let batmanLettersNum = batmanLetters.length

 let batmanWords = batman.split(" ")
 let batmanWordsNum = batmanWords.length
 
 let vowels = "aeiouAEIOU"
  let vowelSticky = vowels.split(" ").join("")
  let vowelList = vowelSticky.split("")
 let vCount = 0

 for (let i = 0; i < batmanLettersNum; i++) {
  if (vowelList.indexOf(batmanLetters[i]) !== -1) {
    vCount += 1;
  }
 }
 return console.log(`${batmanWordsNum} Words, ${batmanLettersNum} letters including ${vCount} vowels`)
}

counter()

