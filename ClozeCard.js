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

var fs = require('fs');

var inquirer = require('inquirer');



//var BasicCard = require("./BasicCard.js");
var Clozecard = function(text,cloze) {
	if(this instanceof Clozecard) {
		this.fulltext = text;
		this.cloze = cloze;
		this.partial = function() {
          if(this.fulltext.includes(this.cloze)) {
        	 return this.fulltext.replace(this.cloze, '...');
        	 } else {
        	   var brokenMsg = "Opps, the text: " + this.fulltext + "doesn't have the Cloze" + this.cloze + "'.";
			   return brokenMsg; 

       	}
	};
};
};
		Clozecard.prototype.createCard = function(){
			inquirer.prompt([
             {
             	name: "fullText",
             	message: "What's the statement including the answer?"
             }, {
             	name:"cloze",
             	message: "What portion of the statement do you wish to quiz?"
             }
				]).then(function(response){
					var newClozeQeestion = new Clozecard (
						response.fullText,
						response.cloze
						);
		    console.log(newClozeQeestion.partial()) 
				});
		};
	//};	

    //
		Clozecard.prototype.errorMessage = function() {
		 	if (error) throw error;
		 };

    module.exports = Clozecard;		

        
     
//         };
// 	} else {
// 		return new ClozeCard(text,cloze);
// 	}
// };

// var question = {
// 	question0: "Name two programming paradigms importnat for Javascript app developers?"
// 	question1:
// 	question2:
// 	question3:
// 	question4:
// 	question5:
// }