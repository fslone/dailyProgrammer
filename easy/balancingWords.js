// Today we're going to balance words on one of the letters in them. We'll use the position and letter itself to calculate the weight around the balance point. A word can be balanced if the weight on either side of the balance point is equal. Not all words can be balanced, but those that can are interesting for this challenge.
// The formula to calculate the weight of the word is to look at the letter position in the English alphabet (so A=1, B=2, C=3 ... Z=26) as the letter weight, then multiply that by the distance from the balance point, so the first letter away is multiplied by 1, the second away by 2, etc.
// As an example:
// STEAD balances at T: 1 * S(19) = 1 * E(5) + 2 * A(1) + 3 * D(4))
// Input Description:
// You'll be given a series of English words. Example:
// STEAD
// Output Description:
// Your program or function should emit the words split by their balance point and the weight on either side of the balance point. Example:
// S T EAD - 19
// This indicates that the T is the balance point and that the weight on either side is 19.
// Challenge Input:
// CONSUBSTANTIATION
// WRONGHEADED
// UNINTELLIGIBILITY
// SUPERGLUE
// Challenge Output:
// CONSUBST A NTIATION - 456
// WRO N GHEADED - 120
// UNINTELL I GIBILITY - 521    
// SUPERGLUE DOES NOT BALANCE

(function(){
  function _balanceWord(word){
    var alphabet, 
        letterWeight, 
        lettersInWord,
        leftWeight,
        rightWeight,
        letterPosition,
        index,
        distanceFromCenter,
        leftLetter,
        rightLetter,
        leftString,
        rightString,
        wordIsZen;

    wordIsZen = false;

    //build alphabet to get letter values later
    alphabet = [];
    alphabet.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");

    //break up all letters in word to array
    lettersInWord = word.split("");
    lettersInWord.forEach(function(letter) {
      
      //reset weights and strings
      leftWeight = 0;
      rightWeight = 0;
      leftString = "";
      rightString = "";
      
      //can't ever balance on the first letter or last letter obviously
      if(lettersInWord.indexOf(letter) !== 0
         && lettersInWord.indexOf(letter) + 1 !== lettersInWord.length)
      {

        letterPosition = lettersInWord.indexOf(letter);
        
        //find the weight to the left side of the fulcrum
        for(index = 0; index < letterPosition; index++)
        {

          leftLetter = lettersInWord[index];

          //find the letter weight of each letter from the first letter 
          //up to the fulcrum and add to the left weight
          letterWeight = alphabet.indexOf(leftLetter.toLowerCase()) + 1;
          distanceFromCenter = letterPosition - index;
          leftWeight += distanceFromCenter * letterWeight;
          leftString += leftLetter;
        }
        
        //find the weight to the right side of the fulcrum
        for(index = letterPosition + 1; index < lettersInWord.length; index++)
        {

          rightLetter = lettersInWord[index];

          //find the letter weight of each letter from the first letter 
          //after the fulcrum and to the end of the word
          letterWeight = alphabet.indexOf(rightLetter.toLowerCase()) + 1;
          distanceFromCenter = index - letterPosition;
          rightWeight += distanceFromCenter * letterWeight;
          rightString += rightLetter;
        }

        if(leftWeight === rightWeight) 
        {
          wordIsZen = true;
          console.log(leftString + " " + letter + " " + rightString + " - " + rightWeight.toString());
        }

      }

    });

    if(!wordIsZen) console.log(word + " does not balance.")

  }

  _balanceWord("CONSUBSTANTIATION")

}());