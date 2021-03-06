const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');

    // What is the value of `this` when we call ship.fly()?
    const result = 'global window object';
    return result;

    // Annotation:
    // Here, we're calling "fly" on "ship," the new instance of the "SpaceProbe" class. However, because the arrow syntax in the "fly" function causes the browser to define "this" upon creation of the function (rather than upon execution of the function), the value of "this" defaults to the global window object.
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    // The function "fn" is not being called as a method on an object, nor is it invoked with the keyword "new", so it has no immediate context to refer to. It simply refers, by default, to the global object. 
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // The addEventListener method is being called on "el", which means the value of "this" is "el". The value of "this" is not "car" because in the getInfo key, "this" doesn't have anything to point to until some kind of context is created (in this case, the addEventListener method on the DOM element).

    //THE METHOD HERE is addEventListener.
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){
        const innerFunction = function() {
          console.log(this.breed);
        };
    
        return innerFunction();
      }
    };


    // What is the value of `this` when we call dog.getBreed()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // The value of "this" is the default value of the global object because "this" is not bound to a specific instance of the dog object. The nested function prevents "this" from accessing the dog object. 
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // The value of "this" is the global window object because we're not executing a function as a method on an object, and we're not creating a new instance of a class. So "this" refers by default to the global object. If we had returned fn() within exerciseE(), the value of "this" would have been 21. 
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation: 
    // The value of "this" refers to a new instance of the Hero object because its being called on "storm," an instance of Hero. 
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // Because "this" is nested in a function, it cannot see outside the function to the restart() method in the Game class. 

    //The 1000 is a "wait" argument. 
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => { 
          return this;
        };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation: 
    // The arrowFunction() is declared using ES6, which means it's binding "this" to the object that calls arrowFunction(), so in this case arrowFunction() is being called on obj. 
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'poets';
    return result;

    // Annotation: 
    // "This" has a value of "poets" because the second argument in the map method binds "this" to "poets". 
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // "This" has a value of "el" because you're calling a method on the element. 
  },

  exerciseK() {
    const el = $('#btn');
    el.on('click', () => {
      console.log(this);
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'global window object';
    return result;

    // Annotation: 
    // Because we're using ES6 syntax instead of ES5, "this" isn't bound to the object and instead defaults to the global window object. 
  }

};

module.exports = context;