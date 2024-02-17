// 1.
"" + 1 + 0
"" - 1 + 0
true + false
!true
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
" -9 " + 5
" -9 " - 5
null + 1
undefined + 1
undefined == null
undefined === null
" \t \n" - 2




// 2.
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
 // 34 = it is wrong because + concatenates two strings
let addition2 = Number(three) + Number(four); 
//fixed - converted strings to numbers
let addition3 = parseInt(three) + parseInt(four);
 //fixed - converted strings to integers
let multiplication = three * four 
// 12 RIGHT because + converts strings to numbers
let division = three / four
 // 0.75 RIGHT because / converts strings to numbers
let subtraction = three - four
 // -1 RIGHT because - converts srtrings to numbers
let lessThan1 = three < four
 // true RIGHT because 3 comes before 4 alphabetically
let lessThan2 = thirty < four;
 // true WRONG because 30 comes before 4 alphabetically
let lessthan2_fixed = Number(thirty) < Number(four);
 //fixed - converted strings to numbers
let lessThan2_fixed2 = parseInt(thirty) < parseInt(four); 
// fixed - converted strings to ints


//3.
if (0) console.log('#1 zero is true') //zero equivalent to false, doesn't print
if ("0") console.log('#2 zero is true') //strings equivalent to true, prints
if (null) console.log('null is true') //null equivalent to false, doesn't print
if (-1) console.log('negative is true') //non-zero number equivalent to true, prints
if (1) console.log('positive is true')//non-zero number equivalent to true, prints

//4.
let a = 10, b = 14 ;
let result = `${a} + ${b} is `;


if (a + b < 10) {
result += 'less than 10'; 'greater than 10';
// adds on to the existing value

//5.
function getGreeting(name) {
    return 'Hello ' + name + '!';
    }

    //a. function expression syntax:
const getGreetingA = function(name) {
    return 'Hello' + name + '!';
}

    //b. arrow function syntax:
    const getGreetingB = (name) => 'Hello ' + name + '!';

    console.log(getGreeting('Samwise Gangee'))
    console.log(getGreetingA('Samwise Gangee'))
    console.log(getGreetingB('Samwise Gangee'))

    // 6.
    const westley = {
        name: 'Westley',
        numFingers: 5
        }
        const rugen = {
        name: 'Count Rugen',
        numFingers: 6
        }
        const inigo = {
        firstName: 'Inigo',
        greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
        console.log(greeting + this.getCatchPhrase(person));
        },
        getCatchPhrase(person) {
        return 'Nice to meet you.';
        }
        }
        inigo.greeting(westley)
        inigo.greeting(rugen)

        const inigo = {
            firstName: "Inigo",
            lastName: "Montoya",
            greeting(person) {
                let greeting = 'Hello $(person.name), my name is ${this.firstName} ${this.lastName}. ';
                console.log(greeting + this.getCatchPhrase(person));
            },
            getcatchPhrade: (person) => person.numFingers == 6 ?
            'You killed my father. Prepare to die.' : 'Nice to meet you.'
        }


        inigo.greeting(westley)
        inigo.greeting(rugen)

        //7.

        const basketballGame = {
            score: 0,
            freeThrow() {
            this.score++;
            },
            basket() {
            this.score += 2;
            },
            threePointer() {
            this.score += 3;
            },
            halfTime() {
            console.log('Halftime score is '+this.score);
            }
            }
            //modify each of the above object methods to enable function chaining as below:
            basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

            // 8.
            const sydney = {
                name: 'Sydney',
                population: 5_121_000,
                state: 'NSW',
                founded: '26 January 1788',
                timezone: 'Australia/Sydney'
                }

                const melbourne = {
                    name: 'Melbourne',
                    population: '5.64 million',
                    state: "VIC",
                    elevation: '31 m',
                    area: '9992 km2'
                }

                function printCityProps(cityObj) {
                    for (cityProp in cityObj) {
                        console.log(cityProp + ' = ' + cityObj[cityprop])
                    }
                }

                











// 9.
// A.
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports;
moreSports.push('Basketball');
moreSports.unshift('Soccer')

// B.
let dog1 = 'Bingo';
let dog2 = dog1;
dog2 = 'Milo';

// C.
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = cat1;
cat1.name = 'Gracie';
console.log(cat2.name);
// D. 

// E.


