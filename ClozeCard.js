//module.exports = ClozeCard;

//two arguements: text & cloze

//Three Arguements
//cloze property contains only cloze-deleted flashcards
//partial property contains only partial text
//fulltext property contains only the full text

//constructor should throw or log an error when the cloze deletion does not appear in the input text

//use prototypes to attach these methods

//Pseudocode
//BasicCard Constructor exported from BasicCard.js
//Constructor function created for making Clozecard Obj
//Create Scope-safe constructor
  //1st check if obj is new 
  //Create partial text for cloze flashcard
//If the new operator is missing then a new obj will be created


//Test Basic constructor
//Test Clozecard constructor 


var BasicCard = require("./BasicCard.js");
var Clozecard = function(text,cloze) {
	if(this instanceof Clozecard) {
		this.fulltext = text;
		this.cloze = cloze;
        
        this.partial = function() {
        	if(this.fullText.includes(this.cloze)) {
        		return this.fullText.replace(this.cloze, '...');
        	} else {
        		var brokenMsg = "Opps, the text: " +this.text+ "doesn't have the Cloze" + this.cloze + "'.";
				return brokenClozeMessage; 

        	}
        };
	} else {
		return new ClozeCard(text,cloze);
	}
};