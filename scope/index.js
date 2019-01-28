const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB 
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
      {'A': 'Ben'},
      {'B' : 'CardiB'},
      {'C' : 'CardiB'},
      {'D' : 'Paul'}];
    return result;

    // Annotation:
    // Log A is 'Ben' because the 'personB' variable is globally scoped as 'Ben' and hasn't been reassigned. Log B is 'CardiB' because 'personB' was reassigned to 'person', which was declared as a varaible on line 9 and assigned a value of 'CardiB'. Because 'person' was not declared with const, var, or let, the interpreter gives it a default declaration of var, which means 'person' and its value are hoisted out of the block statement and functionally scoped. Log C is 'CardiB' because 'personB' was not reassigned. Log D is 'Paul' because 'personC' was reassigned to 'personA', which is globally scoped and was declared with a value of 'Paul' that has not been changed. 
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number 

      function newNumber() {
        number = 64;

        // Log B: number
      }

      newNumber();

      // Log C: number
    }

    numberFunction();

    // Log D: number

    const result = [
      { 'A' : 75 },
      { 'B' : 64 },
      { 'C' : 64 },
      { 'D' : 30 }];

    return result;

    // Annotation:
    // Log A has a value of 75 because the 'number' variable is functionally scoped inside numberFunction, and the block statement declares a new variable 'number' rather than reassigning the value of the functionally scoped variable. Log B is 64 because the functionally scoped 'number' declared at line 50 has been reassigned to 64. Log C is also 64 because the variable 'number' at line 50 has been reassigned to 64. Log D is 30 because the variable 'number' is globally scoped and has not been reassigned. 
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting 
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting

    const result = [
      {'A' : 'Yo' },
      {'B' : 'Hey' },
      {'C' : 'Hey' },
      {'D' : 'Hello'}];
    return result;

    // Annotation:
    // Log A, the variable "greeting" has a value of "Yo" because the "greeting" variable at line 89 is block scoped and declares a new variable "greeting", and the value of the variable "greeting" on 86 is functionally scoped  with a value of "Yo". Log B, the variable "greeting" has a value of "Hey" because the functionally scoped "greeting" variable at line 86 has been reassgined a value of "Hey" by line 95. Log C, the variable "greeting" has a value of "Hey" because it's been reassigned a value of "Hey" on line 95. Log D is "Hello" because the "greeting" variable on line 83 is globally scoped and has not been reassigned.
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting 

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      };

      newGreeting();

      // Log C: greeting
    };

    greetingGenerator();

    // Log D: greeting

    const result = [
      {'A' : 'hi'},
      {'B' : 'welcome'},
      {'C' : 'welcome'},
      {'D' : 'howdy'}
    ];
    return result;

    // Annotation:
    // Log A is "hi" because the variable greeting is assigned a value of "hi" on line 124, is functionally scoped, and has not been reassigned. Log B is "welcome" because the functionally scoped variable "greeting" on line 124 has been reassigned a value of "welcome". Log C is "welcome" because the value of the variable "greeting" on line 124 was previously reassigned to "welcome". Log D is "howdy" because the variable greeting on line 121 has a value of "howdy", is globally scoped, and has not been reassigned. 
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name 
      }

      // Log B: name 
    }

    // Log C: name 

    sayName();

    // Log D: name

    const result = [
      { C : 'Brittany' }, 
      { A : 'Nathaniel' },
      { B : 'Nathaniel' },
      { D : 'Brittany' }
    ];
    return result;

    // Annotation:
    // The first log that the interpreter hits is log C, which gives the variable "name" a value of "Brittany" because the value was assigned during execution phase and has not been reassigned. The next log the interpreter hits is log A. For log A, "name" is "Nathaniel" because the if statement on line 65 reassigns the value of the functionally scoped variable "name" that was declared on line 164. It does not reassign the value again in the second if statement even though the length of "name" is greater than zero because the second if statement declares a new variable "name", it doesn't reassign the value of the functionally scoped variable "name" on line 163. For log B, "name" is still "Nathaniel" because the the value of the functionally scoped variable has been reassigned. For log D, the value of "name" is "Brittany" because we're out of the function and the globally scoped variable has not been reassigned. 
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog 

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog 

        dog = 'Biscuit';

        // Log C: dog 

      }

      rollOver();

      // Log D: dog 
    }

    petDog();

    // Log E: dog  

    const result = [
      {'A' : 'Spot'},
      {'B' : 'Spot'},
      {'C' : 'Biscuit'},
      {'D' : 'Biscuit'},
      {'E' : 'Biscuit'}
    ];
    return result;

    // Annotation:
    // Log A: dog is 'Spot' because 'Spot' is globally scoped and has not been reassigned. Log B: dog is still 'Spot' because 'Spot' is globally scoped and has not been reassigned. Log C: dog is 'Biscuit' because the function rollOver reassigns the value of the variable 'dog' on line 197 to 'Biscuit'. Log D and Log E are also 'Biscuit' because the global variable 'dog' has been reassigned the value of 'Biscuit' by the function rollOver. 
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit 
      }

      // Log C: fruit mango
    }

    eatFruit();

    // Log D: fruit apple because we're outside of the function

    const result = [
      {'A' : 'reference error'},
      {'B' : 'mango'},
      {'C' : 'mango'},
      {'D' : 'apple'}
    ];
    return result;

    // Annotation:
    // Log A will throw a reference error because the log is executed above the declaration of the new variable "fruit", and because "fruit" is declared with const instead of var, its value is not hoisted to the top of the function. The interpreter sees that there's a variable "fruit", but it can't access its value yet. Log B is "mango" because the variable fruit declared on line 243 was assigned a value of "mango". We're out of the if statement for log C, but fruit is still "mango" because the variable was declared with var, meaning it's functionally scoped. Log D is "apple" because we're out of the function and the globally scoped variable fruit declared on line 238 has not been reassigned.
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num 4 #1

      if (num < 5) {
        const num = 9;

        fn2(num); // num here is 9 bc block scoped

        const newNum = num;

        // Log B: newNum 9 because fn2 doesn't return anything #4 (a little confused why this isn't 10)
      }

      newNum = num;

      // Log C: newNum 4 #5 because it's being assigned the value of the functionally scoped num
    };

    const fn2 = function(num){
      // Log D: num 9 #2

      num = num + 1;

      // Log E: num 10 #3
    };

    fn1();

    const result = [
      { A : 4 },
      { D: 9 },
      { E: 10 },
      { B: 9 },
      { C: 4 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger 75 the first time eatSnack is called --> 55 the second time 
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger 0 stays 0 the second time 
      }

      // Log C: hunger 75, also changes to 55 2nd time
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger 80

    eatSnack();
    // Log E: hunger 55

    const result = [
      { A: 75 }, 
      { B: 0 },
      { C: 75 },
      { D: 80 },
      { A: 55 },
      { B: 0 },
      { C: 55 },
      { E: 55 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: #1 sandwich 'ketchup sandwich'

    const addChipotle = () => {
      // Log B: toppings is undefined because the label is hoisted by "var", but its value is not. 
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich 'not a mediocre sandwich' because sandwich is declared in the global scope. 
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: #2 cheeseTopping 'gouda' 

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich 'not a mediocre sandwich'
    // Log F: amandaBynes 'National Treasure' because the declaration defaults to var, which is hoisted into the global scope. 

    const result = [
    { A : 'ketchup sandwich'},
    { D : 'gouda'},
    { B : undefined},
    { C : 'not a mediocre sandwich'},
    { E : 'not a mediocre sandwich'},
    { F : 'National Treasure'},
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
    }

    foo();

    // Log B: num 

    const result = [
    { 'A' : 7 },
    { 'B' : 7 }
    ];
    return result;

    // Annotation:
    // Once foo is invoked, it reassigns the value of num during execution phase. Before it's invoked, the interpreter simply captures the text of the function in global memory and wouldn't log any values. 
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade stays 95 because line 440 is declaring a new variable grade, not reassigning the value of the variable grade on line 95. 
      }

      addPoints();

      // Log B: grade is 90 because the addPoints function did not reassign its value. 
    }

    losePoints();

    // Log C: grade 90 because the losePoints function reassigns the value of grade on line 431. 

    const result = [
    { 'A' : 95 },
    { 'B' : 90 },
    { 'C' : 90 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num 5
      num = 6;
      // Log B: num 6
    }

    function second() {
      // Log C: num reference error because num hasn't been declared yet, and because it's declared with let, it won't be hoisted. 
      let num = 7;
    }

    first();
    second();

    // Log D: num 6 because 477 is declaring a new variable, not reassigning the value of the globally scoped num on line 467.

    const result = [
    { 'A' : 5 },
    { 'B' : 6 },
    { 'C' : 'reference error' },
    { 'D' : 6 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor #2 still Pam

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: #3 instructor still Pam

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor #4 Louisa
      }

      rename();

      // Log D: instructor #5 Louisa

    }

    // Log E: instructor #1 Pam

    changeInstructor();

    // Log F: instructor #6 Louisa

    const result = [
    { 'E' : 'Pam'},
    { 'A' : 'Pam'},
    { 'B' : 'Pam'},
    { 'C' : 'Louisa'},
    { 'D' : 'Louisa'},
    { 'F' : 'Louisa'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe undefined because the log is above the variable declaration. Because the variable is declared with var, the interpreter knows it's a variable, but doesn't yet know its value. 
      var shoe = 'boot';
    }
    // Log B: shoe flipflop
    putOnShoe();
    // Log C: shoe flipflop

    const result = [
    { 'B' : 'flipflop' },
    { 'A' : undefined },
    { 'C' : 'flipflop' }];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch #1 undefined
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch soup
    }

    orderLunch();

    // Log C: lunch soup

    const result = [
    // { 'A' : undefined },
    { 'B' : 'soup' },
    { 'C' : 'soup' }
    ];
    return result;

    // Annotation:
    // I'm not sure why the answer array is only looking for the logs for B and C, not for A, which would be undefined. 
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: #1 kid is myKid, which is Pandora
      wildKids.push(kid);
      // Log B: #2 wildKids ['Antigone', 'Pandora']
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: #3 myKid 'Mandy'
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: #4 myKid 'Antigone' because Pandora has been shifted out of the array. 
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: #5 myKid; Pandora because we're out of the myAmazingKid function and referring to the globally scoped myKid on line 595. 
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid); // argument is "Pandora", which is the value of myKid. 

    const result = [
    { 'A' : 'Pandora' },
    { 'B' : ['Antigone', 'Pandora']},
    { 'C' : 'Mandy' },
    { 'D' : 'Antigone' },
    { 'E' : 'Pandora' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName Rody

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName 'RodyToy'

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName Tesla
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName RodyToyDaniels

    const result = [
    { 'A' : 'Rody'},
    { 'B' : 'RodyToy'},
    { 'C' : 'Tesla'},
    { 'D' : 'RodyToyDaniels'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;