console.log();
console.log('Conditional Statements: if, else if, else statements, strict (===) and loose equality (==) and bang (!=)operators, logical operators (&&[AND], ||[OR], ![NOT]) short-circuit evaluation (truthy and falsy variable and values), ternary statemen (? :), and switch statement (switch, code, and default');
console.log();
/*Codecademy led practice below this line*/
let sale = true; 
sale = false;
if (sale){
  console.log('Summer sale on!');
}else {
  console.log('Summer sale not here yet!');
}

/*Independant self practice below this line*/
let Zee = 'Boy';
Zee = 'Man';
if (Zee === 'Boy'){
  console.log('Zee is a Boy');
}else{
  console.log('Zee is not a Boy but a Man!');
}

let Zee_Kambula = 'Birthday';
Zee_Kambula = 'Birthday not today';
if (Zee_Kambula === 'Birthday'){
  console.log("Today is Zee Kambula's birthday, happy birthday Zee Kambula!")
}else{
    console.log('Today is not Zee Kambula\'s birthday.');
  }
console.log();
console.log('The Strict Equality Operator (===):') /*Two conditions must be true for the output to be True: (1) The data type
must be similar and (2) the values must be identical on the left and right*/
console.log(30 === '30');
console.log();
console.log('The Loose Equality Operator (==) with identical (values)');//Conversion rules === convert string to number first
console.log(30 == '30');/*Step one: the LEO converts the string to number ('30' -> 30), step 2, it compares
the values now(30 and 30) and because they match, the output will be true*/
console.log();
console.log('The Loose Equality Operator with different (values)');
console.log(30 == '40')/*Step one: the LEO converts the string to number ('40' -> 40), step 2, it compares
the values now(40 and 30) and because they don't match, the output is false */
console.log();
console.log('The Three Logical Operators (&&, ||, and !)');
console.log();
console.log('(I)The && (AND) Operator requires that two conditions be true to evaluate true.'); 
console.log('(1a)The first example below of an && operator is in an if/else statement, and the second example is a method invocation that takes an argument with two conditions that evaluate true:');
console.log();
let fire = 'burn';
let hot_Stove = 'burn';
if (fire === 'burn' && hot_Stove === 'burn'){
  console.log('Caution! Do not touch!');
} else{
  console.log('No danger, you can touch.');//
}
console.log(20 === 20 && 10 === 10);
console.log();

console.log('(1b) The && Operator with only one condition that evaluates true:');
fire = 'cold';
if (fire === 'burn' && hot_Stove === 'burn'){
  console.log('Caution! Do not touch!')
} else {
  console.log('No danger, you can touch!');
}

console.log(100 == 100 && 10 === 5);//logs false because the second condition is false
console.log();


console.log('(II) The || (OR) Operator requires only one condition to evaluate true:');
console.log();
let day_start = 6;
let day_end = 5;
if(day_start === 5 || day_end === 5){
  console.log(`(2a)It's ${day_start} am; your day just started.`);
} else{
  console.log(`Its not ${day_start} am; your day has not started yet.`);
}
console.log();
console.log("(2b)The method invocation (console.log call) examples below have two conditions that evaluate false using the strict equality operator (===), but the second example uses the loose equality operator (==). The coercion operator (loose equality operator) converts a string data type to a number data type only if they share the same value (e.g.,'30' == 30 ! '30' == 'Zee':)");
let year = 2026;
console.log(Zee === 'Zee' || '35' === 35);
console.log(Zee == 35 || 2026 == 2000);
console.log();
console.log('(III)The ! (Not) Logical Operator negates. It takes a true value and passes it back as false, or a false value and passes it back as true');
console.log();
console.log('The example below applies the ! operator in both an if-else statement (first line) and a console.log() invocation:')
let career = 'softwareEngineer';
let salary = '100k';
if (career === 'softwareEngineer' && salary === '100k'){
  console.log('(3a)Software Engineering is a good and well-paying career!');
} else {
  console.log(!'Sofware Engineering is a good and well paying career!');
}
console.log(!'Software Engineering is a good and well paying career!');
console.log();
console.log('(IV)Truthy and Falsy - evaluates non-boolean data types (e.g., strings or numbers) inside conditional statements');
console.log();
console.log('((4a) The example below checks whether a variable is assigned and that its value is not falsy');
let variableAssigned = 'Hello, I am.';
if (variableAssigned)/*Notice the value assignment operator (=) and the value ('Hello, I am.') are excluded because the interest concerns only the existance of the variable BUT check the value on one conditional requirement, that is, the value must not be a false value*/{
  console.log(variableAssigned);/*This line of code will print because of two conditions that evalute to truthy: (1) the variable itself exits because it is declared in line 97; (2) the value assigned the variableAssigned is not a falsy value (e.g., 0, ('' or " "), NaN (Not a Number), Null (No value assigned), and undefined (a variable without a value)*/
} else {
  console.log('variableAssigned not assigned');
}
console.log();
console.log('The example below uses the logic of (4a) but with the value changed to a falsy value (0)');
variableAssigned = 0; 
if(variableAssigned){
  console.log(variableAssigned);
} else{
  console.log('I, am not.');
}
console.log();
console.log('(V)Short-circuit Evaluation (shorthand/short cut) checks if a variable is defined and assigns a default string if it is not');
console.log();
let hello = '';
let helloDefault;
if (hello){
  helloDefault = hello;
} else{
  helloDefault = 'Stranger';
  console.log(`hello ${helloDefault}`);
  /*console.log(`Hello ${helloDefault}`);*/
}
/*Below is a short-circuit evalution of the code above*/
helloDefault = hello || 'Stranger';
if (hello){
  console.log(hello);
}else{
  console.log(helloDefault);
}
/*Independant example below*/
let king = '';
let defaultKing = king || 'Jesus';/*This declarative code with two values separated by the || logical operator is key*/
if (king){
  console.log(`Hi ${king} young king`);
}else{
  console.log(`${defaultKing} is the King of kings!`);
}
console.log();
console.log("(VI) Ternary Operator (? :) is used for conditions that evaluate true or false (similar to if/else) but simplified. See examples below.");
/*Ternary is an intergrated concept from the these three atomic concpets: isCondition? (this expression evalutes to either true of false); expressionIfTrue (this expression will be return if the condition evalutes to true); and expressionIfFalse (this expression will return if the condition evalutes to false).*/
console.log();
let isMorning = true;
if (isMorning = true){
  console.log('Time to wake up. (Standard six lines of code)');
} else {

  console.log('Not yet time to wake up');
}

isMorning = true;
isMorning?/*This line is does what 'if' does*/ console.log('Time to wake up. (Ternary operator applied === 2 lines of code)') : console.log('Not yet time to wake up.');

let isTired = true;
isTired = false;
isTired? console.log('Take a power nap') : console.log("You don't need a power nap");
console.log();

console.log('The example below uses a variable with a falsy value');
let isGender = ''
let isGenderNeutral = isGender === 'nonBinary';
isGender? console.log(isGender) : console.log(isGenderNeutral);
console.log();
console.log('(VII) Else If - allows the addition of multiple conditions between the IF and ELSE statements. Ternary operations in conditional statements with else if statements impede readability.');

console.log();
let areYouReligious = '';
let areYouSpiritual = 'Yes'
let areYouReligiousDefault = areYouReligious || 'So'

let whatIsYourReligion = 'Christianity';
let didYouRecieveJesusAsLord = 'Yes';

if (areYouReligious === 'Yes'){
  console.log("That's great to here.");
  
} else if (areYouSpiritual === 'Yes'){
  console.log('What spirituality?');
}

else{
  console.log(`${areYouReligiousDefault}, what do you describe as: secualar, unaffiliated, agnostic, or athesis?`);
}

console.log();
console.log('(VIII) Switch Statement - does the same execution as else/elseif/else statements but with lesS code');
console.log();
let foodPlate = 'chicken';

switch(foodPlate){//(The IF equivalent that evalutes to true or false) - intiates the statement and takes a variable as an argument
  case 'chicken'://(The ELSE equivalent expression that evaluates true and return a true statement) - takes a value.
    console.log('Chicken dish is $10.00');//The false expression that returns the false statement.
    break;
  case 'beef':
    console.log('Beef dish is $12.00');
    break;
  default://The ELSE equivalent that executes if none of the statements are executed (its an escape or exit)
    console.log('invalid item');
    break;
  }


let soccerItems = 'ball';
switch(soccerItems){
  case 'ball':
    console.log('The ball is $1.00');
  break;
  case 'shorts':
    console.log('The shorts are $2.00');
  break;
  default:
    console.log('Invalid item');
  break;

}

let worldCupTicketsRow = 'Row 5';
switch(worldCupTicketsRow){
  case'Row 19':
    console.log('Row 1 is $15.00');
  break;
  case'Row 2':
    console.log('Row 5 is $12.00');
  break;
  default:
    console.log('Attention! Invalid row inquiry!');
  break;
}


let veggietablesItems = '';
let veggietablesItemsDefault = veggietablesItems || 'item';
switch(veggietablesItems === 'spinach' || 'carrots'){
  case'lettuce':
    console.log('A bag of spinach is $3.00.');
  break;
  case'jams':
    console.log('A bag of jams is $5.00');
  break;
  default:
    console.log(`Sorry ${veggietablesItemsDefault}, the is out of stock.`);//string interpolation
  break;
}

let colorDye = 'red';
switch(colorDye){
  case'red':
    console.log('The red dye is $2.00');
  break;
  case'blue':
    console.log('The blue dye is $1.00');
  break;
  default:
    console.log('Sorry, color dye is invalid or out stock');
  break;
}


















