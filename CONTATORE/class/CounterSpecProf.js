import Counter from './Counter.js'; // require 
//import CounterElement from './CounterElement.js'

let contatore = new Counter()
contatore.increment()
contatore.increment()

console.log("01 - dopo due incrementi senza argumenti nel costruttore",contatore.value == 2);


contatore = new Counter(10)
contatore.increment()
contatore.increment()

console.log("02 - dopo due incrementi con un argumento nel costruttore",contatore.value == 12);

/**
 * 1 arg partenza
 * 2 arg min
 * 3 arg max
 */
contatore = new Counter(10,10,15)
contatore.increment() //11
contatore.increment() // 12
contatore.increment() // 13

console.log("03 - partendo da 10 mi aspetto che il contatore vale 13",contatore.value == 13)

contatore.increment() // 14
contatore.increment() // 15
contatore.increment() // 15
contatore.increment() // 15

console.log("04- il valore massimo del contatore deve essere 15",contatore.value == 15)

contatore = new Counter(10,10,15)
contatore.decrement() //11
contatore.decrement() // 12
contatore.decrement() // 13
contatore.decrement() // 13

console.log("05 - il valore minimo del contatore deve essere 10",contatore.value == 10)



//parte da 10, il minimo è 4 ma non cè un massimo
//contatore = new Counter(10,4)


//contatore = new Counter(10,null,20)

//new CounterElement('#counterA')
//new CounterElement('#counterB')