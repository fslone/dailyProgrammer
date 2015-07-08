// Description

// In this challenge, we are going to take a sentence and mangle it up by sorting the letters in each word. So, for instance, if you take the word "hello" and sort the letters in it, you get "ehllo". If you take the two words "hello world", and sort the letters in each word, you get "ehllo dlorw".
// Inputs & outputs

// Input

// The input will be a single line that is exactly one English sentence, starting with a capital letter and ending with a period
// Output

// The output will be the same sentence with all the letters in each word sorted. Words that were capitalized in the input needs to be capitalized properly in the output, and any punctuation should remain at the same place as it started. So, for instance, "Dailyprogrammer" should become "Aadegilmmoprrry" (note the capital A), and "doesn't" should become "denos't".
// To be clear, only spaces separate words, not any other kind of punctuation. So "time-worn" should be transformed into "eimn-ortw", not "eimt-norw", and "Mickey's" should be transformed into "Ceikms'y", not anything else.
// Edit: It has been pointed out to me that this criterion might make the problem a bit too difficult for [easy] difficulty. If you find this version too challenging, you can consider every non-alphabetic character as splitting a word. So "time-worn" becomes "eimt-norw" and "Mickey's" becomes ""Ceikmy's". Consider the harder version as a Bonus.
// Sample inputs & outputs

// Input 1

// This challenge doesn't seem so hard.
// Output 1

// Hist aceeghlln denos't eems os adhr.
// Input 2

// There are more things between heaven and earth, Horatio, than are dreamt of in your philosophy. 
// Output 2

// Eehrt aer emor ghinst beeentw aeehnv adn aehrt, Ahioort, ahnt aer ademrt fo in oruy hhilooppsy.
// Challenge inputs

// Input 1

// Eye of Newt, and Toe of Frog, Wool of Bat, and Tongue of Dog.
// Input 2

// Adder's fork, and Blind-worm's sting, Lizard's leg, and Howlet's wing. 
// Input 3

// For a charm of powerful trouble, like a hell-broth boil and bubble.
(function() {

  function _mangleSentence(sentence) {
    
    var words, 
        letters, 
        alphabet,
        sortedSentence,
        letterMap,
        isCapitalLetter,
        lowerCaseLetter,
        capitalValue;

    alphabet = [];
    alphabet.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");

    sortedSentence = "";

    words = sentence.split(" ");

    words.forEach(function(word) {
      
      letters = word.split("");
      letterMap = {};
      letterMap.sortedLetters = [];
      letterMap.capitals = [];
      letterMap.punctuation = [];

      letters.forEach(function(letter) {
      
        isPunctuationMark = false;  
        isCapitalLetter = false;
        numBefore = 0;
        lowerCaseLetter = letter.toLowerCase();

        //if the letter isn't found in the alphabet array 
        //but is found there after lowercasing it then it's 
        //a capital
        if(alphabet.indexOf(letter) === -1) {
          if(alphabet.indexOf(lowerCaseLetter) === -1) isPunctuationMark = true;
          else if(alphabet.indexOf(lowerCaseLetter) !== -1) isCapitalLetter = true;
        }

        //if it's a capital letter or punctuation mark, need to keep track of that
        if(isCapitalLetter) {
          letterMap.sortedLetters.push(letter.toLowerCase());
          letterMap.capitals.push(letters.indexOf(letter));
        } else if(isPunctuationMark) {
          letterMap.punctuation.push([letters.indexOf(letter), letter]);
        } else letterMap.sortedLetters.push(letter);
      
        letterMap.sortedLetters = letterMap.sortedLetters.sort();

      });

      //now that we've got the sorted letters splice punctuation back in
      letterMap.punctuation.forEach(function(mark) {
        letterMap.sortedLetters.splice(mark[0], 0, mark[1]);
      });

      //capitalize letters at the proper positions
      letterMap.capitals.forEach(function(capitalIndex) {
        capitalValue = letterMap.sortedLetters[capitalIndex].toUpperCase();
        letterMap.sortedLetters.splice(capitalIndex, 1, capitalValue);
      });

      //join the letters back into a string and push to the sorted words array
      word = letterMap.sortedLetters.join("");
      
      if(sortedSentence.length === 0) sortedSentence += word;
      else sortedSentence += " " + word;

    });

    return sortedSentence;

  }

  var sortedSentence  = _mangleSentence("This challenge doesn't seem so hard.");

  console.log(sortedSentence)

}())