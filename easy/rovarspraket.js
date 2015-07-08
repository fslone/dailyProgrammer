// Description

// When we Swedes are young, we are taught a SUPER-SECRET language that only kids know, so we can hide secrets from our confused parents. This language is known as "Rövarspråket" (which means "Robber's language", more or less), and is surprisingly easy to become fluent in, at least when you're a kid. Recently, the cheeky residents of /r/Sweden decided to play a trick on the rest on reddit, and get a thread entirely in Rövarspråket to /r/all. The results were hilarious.
// Rövarspråket is not very complicated: you take an ordinary word and replace the consonants with the consonant doubled and with an "o" in between. So the consonant "b" is replaced by "bob", "r" is replaced with "ror", "s" is replaced with "sos", and so on. Vowels are left intact. It's made for Swedish, but it works just as well in English.
// Your task today is to write a program that can encode a string of text into Rövarspråket.
// (note: this is a higly guarded Swedish state secret, so I trust that none of you will share this very privileged information with anyone! If you do, you will be extradited to Sweden and be forced to eat surströmming as penance.)
// (note 2: surströmming is actually not that bad, it's much tastier than its reputation would suggest! I'd go so far as to say that it's the tastiest half-rotten fish in the world!)
// Formal inputs & outputs

// Input

// You will recieve one line of input, which is a text string that should be encoded into Rövarspråket.
// Output

// The output will be the encoded string.
// A few notes: your program should be able to handle case properly, which means that "Hello" should be encoded to "Hohelollolo", and not as "HoHelollolo" (note the second capital "H").
// Also, since Rövarspråket is a Swedish invention, your program should follow Swedish rules regarding what is a vowel and what is a consonant. The Swedish alphabet is the same as the English alphabet except that there are three extra characters at the end (Å, Ä and Ö) which are all vowels. In addition, Y is always a vowel in Swedish, so the full list of vowels in Swedish is A, E, I, O, U, Y, Å, Ä and Ö. The rest are consonants.
// Lastly, any character that is not a vowel or a consonant (i.e. things like punctuation) should be left intact in the output.
// Example inputs

// Input 1

// Jag talar Rövarspråket!
// Output 1

// Jojagog totalolaror Rorövovarorsospoproråkoketot!
// Input 2

// I'm speaking Robber's language!
// Output 2

// I'mom sospopeakokinongog Rorobobboberor'sos lolanongoguagoge!
// Challenge inputs

// Input 1

// Tre Kronor är världens bästa ishockeylag.
// Input 2

// Vår kung är coolare än er kung. 

(function() {

  function _rovarspraket(sentence) {
    
    var alphabet,
        vowels,
        rovarspraket,
        words,
        isConsonant,
        isPunctuation,
        lowerCaseLetter;

    isConsonant = false;
    isPunctuation = false;

    rovarspraket = "";

    alphabet = [];
    alphabet.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");

    vowels = [];
    vowels.push("a", "e", "i", "o", "u");

    words = sentence.split(" ");
    words.forEach(function(word) {
      
      newWord = "";
      letters = word.split("");
      
      letters.forEach(function(letter) {
        
        isConsonant = false;
        isPunctuation = false;

        lowerCaseLetter = letter.toLowerCase();

        //determine if the letter is a punctuation mark
        if(alphabet.indexOf(lowerCaseLetter) === -1) isPunctuation = true;  
        
        //determine if it is a consonant by verifying it is in 
        //the alphabet but not in the vowels array
        if(alphabet.indexOf(lowerCaseLetter) !== -1 
          && vowels.indexOf(lowerCaseLetter) === -1) isConsonant = true;  

         //form rovarspraket encoding of letter and append to newWord
        if(isConsonant) newWord += letter + "o" + letter.toLowerCase();
        else newWord += letter;

      });

      if(rovarspraket.length === 0) rovarspraket += newWord;
      else rovarspraket += " " + newWord;

    });

    return rovarspraket;
  
  }

  var rovarspraket  = _rovarspraket("This challenge doesn't seem so hard.");
  
  console.log(rovarspraket);

}())