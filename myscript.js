//let a =  30
//let b= 40
//let c=  70
//let d = 30
//let e = 90

//if(a>b){
//  if(a>c){
//      console.log("A is greater among of All !")
//  }
//  else{
//      console.log("C is greater amng of All !")
//  }
//}
//else{
//  if(b>c){
//      console.log("B is greater among of All !")
//  }
//  else{
//      console.log("C is greater among of All!")
//  }
//}

// Another Formate

//if((a>b)&&(a>c)){
//  console.log("A is greater among of All !")
//}
//else if((b>a)&&(b>c)){
//  console.log("B is greater among of All !")
//}
//else if ((c>a)&&(c>b)){
//  console.log("C is greater amon of All !")
//}

// Number EVEN OR ODD

// if(a % 2 == 0){
//  console.log("Entered number"+a + "is EVEN Number")
// }
// else{
//  console.log("Entred number"+ a +"is ODD Number")
// }

// Number is positive or Negative
   
// let h = window.prompt("Enter any number")
// if( a>=0 ){
//  console.log("Entred number"+  a  + " is positive")
// }
// else{
//  console.log("Entresd number is negative")
// }

// Greatest among Four number


//  if(a>b){
//    if(a>c){
//        if(a>d){
//            console.log("A is greater among of All !");
//        }
//        else{
//            console.log("D is  greater among of All !");
//        }
//
//    }
//    else{
//        if(c>d){
//            console.log("C is greater among of All !");
//        }
//        else{
//           console.log("D is greater among of All !");
//        }
//    }
//}
//else{
//    if(b>c){
//        if(b>d){
//            console.log("B is  greater among of All !");
//        }
//        else{
//            console.log("D is greater among of All !");
//        }
//    }
//    else{
//        if(c>d){
//            console.log("C is greater among of All !");
//        }
//        else{
//            console.log("D is greater among of All !");
//        }
//    }
//}

// logical operator | && | || |!
//true && true:true
// false && true:false
//true && false:false
//false && false :true

//true || true:true
//false || true:true
// true || false:true
// false || false :false

//!true:false
//!false:true
//   if ((a>b)&&(a>c)&&(a>d)){
//    console.log("A is greater among of All !");
//   }
//   if ((b>a)&&(b>c)&&(b>d)){
//    console.log("B is greater among of All !");
//   }
//   if ((c>a)&&(c>b)&&(c>d)){
//    console.log("C is greater among of All !");
//   }
//   if ((d>b)&&(d>c)&&(d>c)){
//    console.log("D is greater among of All !");
//   }

// Greater among five number

//if(a>b){
//    if(a>c){
//        if(a>d){
//            if(a>e){
//
//                console.log("A is greater among of All !");
//            }
//            else{
//                console.log("E is greater among of All !");
//            }
//        }
//        else{
//            if(d>e){
//                console.log("D is greater among of All !");
//            }
//            else{
//                console.log("E is greater among of All !");
//            }
//        }
//    }
//    else{
//        if(c>d){
//            if(c>e){
//                console.log("C is greater among of All !");
//            }
//            else{
//                console.log("E is greater among of All !");
//            }
//        }
//        else{
//            if(d>e){
//                console.log("D is greater among of All !");
//            }
//            else{
//                console.log("E is greater among of All !");
//            }
//        }
//    }
//}
//else{
//    if(b>c){
//        if(b>d){
//            if(b>e){
//                console.log("B is greater among of All !");
//            }
//            else{
//                console.log("E is greater among of All !");
//            }
//        }
//        else{
//            if(d>e){
//                console.log("D is greater among of All !");
//            }
//            else{
//                console.log("E is greater among of All !");
//            }
//        }
//    }
//    else{
//        if(c>d){
//            if(c>e){
//                console.log("C is greater among of All !");
//            }
//            else{
//                console.log("E is greater among of All !");
//            }
//        }
//        else{
//            if(d>e){
//                console.log("D is greater among of All !");
//            }
//            else{
//                console.log("E is greater among of All !");
//            }
//        }
//    }
//}


// through logical oprator

//if((a>b)&&(a>c)&&(a>d)&&(a>e)){
//    console.log('A is greater among of All !');
//}
//if((b>a)&&(b>c)&&(b>d)&&(b>e)){
//    console.log('B is greater among of All !');
//}   
//if((c>a)&&(c>b)&&(c>d)&&(c>e)){
//    console.log('C is greater among of All !');
//}   
//if((d>a)&&(d>b)&&(d>c)&&(d>e)){
//    console.log('D is greater among of All !');
//}   
//if((e>a)&&(e>b)&&(e>c)&&(e>d)){
//    console.log('E is greater among of All !');
//}

//leap year
//once in 4 years||not in every 100 years||once in every 400 years
//0

//let year=2018
//if(year%100==0){
//    if(year%400==0){
//        console.log("Entered year"+ year + " is leap year");
//    }
//    else{
//        console.log("Entred year"+ year + "is not leap year");
//    }
//}
//else{
//    if(year%4==0){
//        console.log("Entered year"+ year + " is leap year");
//    }
//    else{
//        console.log("Entred year"+ year + "is not leap year");
//    }
//}

// ternary statements?
//condition? true block:false block;

//year %100!=0 && year%4==0 || year%400==0?console.log("Entered year"+ year + " is leap year"):console.log("Entred year"+ year + "is not leap year");

//let userInput=Boolean(window.prompt("Enter some Data"))
//console.log(typeof(userInput));

// switch case
// menu driven
//let choice = window.prompt("Enter a value a,b,c,d,e")
//switch(choice){
//    case "a":console.log("case a is running");
//    break;
//    case "b":console.log("case b is running");
//    break;
//    case "c":console.log("case c is running");
//    break;
//    case "d":console.log("case d is running");
//    break;
//    case "e":console.log("case e  is running");
//    break;
//    default:console.log("Invalied choice");
//}

//let character =window.prompt("Enter a character a,e,i,o,u")
//switch(choice){
//    case "a":console.log("It is vowel");
//    break;
//    case "e":console.log("It is vowel");
//    break;
//    case "i":console.log("It is vowel");
//    break;
//    case "o":console.log("It is vowel");
//    break;
//    case "u":console.log("It is vowel");
//    break;
//    default:console.log("Invalied choice");
//}  
    
// function

// 4 types of function
//no argument and no return 

// function functionName(args){
// function body
//}

// calling a function : functionName(args[optional])
// function greet(name){
//     console.log("Hello " + name +" user i'm greet !")
//}

//greet("Amey")
//greet("kunal")
//greet("Rohit")
//greet("Yash")
//greet("Om")

// scope name = (args[optional]) => {
// function body 
// }

//let greet = (name) => {
//     console.log("Hello " + name + " user i'm greet !")
//}

//greet("Amey")
//greet("kunal")
//greet("Rohit")
//greet("Yash")
//greet("Om")

// hoisted data / data hoisting

// fun1()

// function fun1(){
//     console.log("this is function 1")
// }

// fun2()

// let fun2 = () => {
//     console.log("this is function 2")
// }

// js support hoisting | we can hoist a normal function keyword but not a arrow function

// 4 types of function
// no args and no return
// args but no return
// no args but return
// args and return

// return statement has to be writen in function body, once in body 

// no args and no return
// function doSomething(){
//     console.log("doing something !")
// }

// doSomething()

// // args but no return 
// function greet(name){
//        console.log("Hello " + name +" user i'm greet !")
//}

//greet("Amey")

//let greet=(name)=>{
//    console.log("Hello " + name +" user i'm greet !")
//}

//greet("Amey")


// no args but return

 //let a = 100

//function doSomething(){
//        let a = 20
//        let b = 30
//        return a+b 
//}

//let data = doSomething()

//console.log(data)

//let doSomething=()=>{
//    let a = 20
//    let b = 30
//    return a+b 
//}
//function doSomething(){
//    let a=20
//    let b=30
//    return a+b
//}
//let data = doSomething()
//console.log(data);

//let data = doSomething()

//console.log(data)
// args and return

// T && F : F
// F && F : F
// F && T : F
// T && T : T

//function add(num1, num2){
///    if(typeof (num1)=='number')
//}

//function add(num1, num2) {
//    if (typeof (num1) == 'number' && typeof (num2) == 'number') {
//        return num1 + num2
//    } else {
//        return "cannot add this data !"
//    }
//}

//console.log(add(1, 2))
//console.log(add(1, "2"))

// Araay
// A Data structure called the array, which can store a fixed-size sequential collection of elements of the same type.An array is used to store a collection of data but it is often more usefull to think of array as a collection of variable of the same type .
// A specific element in an arrray accessed by index.All arrays consist of contiguous memory locations.The Lowest address corresponds to the first element and the highest address to the last element.

//let number=[1,2,"sonakshi",4, 5 ,true,7,8.6,9.098,10]
//console.log(number[5]);
//number.push(89)
//console.log(number);
//number.unshift(43)
//console.log(number);
//number.pop()
//console.log(number);
//number.shift()
//console.log(number);

// formate of Array representation

// 1st formate
///const cars=["Saab","Volve","BWM"]
//console.log(cars);

// 2nd formate
//const cars=[
//    "Saab",
//    "Volve",
//    "BWM"]
//console.log(cars);

// 3rd formate
// accessing the first Array  element 
//const  cars= new Array("Saab","Volve","BWM")
//let car=cars[0]
//console.log(car);
// OR (simple way)
//console.log(cars[0]);

// Accessing last Array Element
//let car=cars[cars.length-1]
//console.log(car);
// OR (simple way write index number)
//console.log(cars[2]);

// The toString() Methode
// The toString()methode return an array as a comma separate string
//const fruits=["Banana","Orange","Apple","Mango"]
//console.log(fruits.toString());

// object 
// object always store key pair values
//const person={firstName:"Sonakshi", lastName:"Tiwari", age:19}
//console.log(person);
// access a single value
//console.log(person.firstName);
//console.log(person.lastName);
//console.log(person.age);

//Array Elements Can Be Objects
//JavaScript variables can be objects. Arrays are special kinds of objects.
//Because of this, you can have variables of different types in the same Array.
//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
//myArray[0] = Date.now;
//myArray[1] = myFunction;
//myArray[2] = myCars;

// Array property and Methods
//The real strength of JavaScript arrays are the built-in array properties and methods:
//cars.length   // Returns the number of elements
//cars.sort()   // Sorts the array

// length property
//The length property of an array returns the length of an array (the number of array elements).
//const fruits=["Banana","Orange","Apple","Mango"]
//let size=fruits.length
//console.log(size);

//Basic Array Methods:

// Javascript Array length
//The length property returns the length (size) of an array:
//The JavaScript method toString() converts an array to a string of (comma separated) array values.
//const fruits=["Banana","Orange","Apple","Mango"]
//let size=fruits.length
//console.log(size);
//OR (simple way)
//console.log(fruits.length);

// Javascripts Array toString()
//The JavaScript method toString() converts an array to a string of (comma separated) array values.
//const fruits=["Banana","Orange","Apple","Mango"]
//let fruit=fruits.toString()
//console.log(fruit);
//OR (simple way)
//console.log(fruits.toString());

// Javascript Array at()
//ES2022 intoduced the array method at():
// It gives those index element
//const fruits=["Banana","Orange","Apple","Mango"]
//let fruit=fruits.at(2)
//console.log(fruit);

// Javascript Array join()
//The join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition you can specify the separator:
//const fruits=["Banana","Orange","Apple","Mango"]
//console.log(fruits.join("*"));

//Popping and Pushing
//When you work with arrays, it is easy to remove elements and add new elements.
//This is what popping and pushing is:
//Popping items out of an array, or pushing items into an array.

// Javascript Array pop()
//The pop() method removes the last element from an array:

//const fruits=["Banana","Orange","Apple","Mango"]
//fruits.pop()
//console.log(fruits)
//Yes, the pop() method in JavaScript returns the removed value from the array.
//When you use the pop() method on an array, it removes the last element from the array and returns that element. The array is modified in place, and its length is reduced by 1.
//console.log(fruits);


// javascript Array push()
//The push() method returns the new array length:
//const fruits=["Banana","Orange","Apple","Mango"]
//let fruit=fruits.push("Kiwi")
//console.log(fruits);
//fruits.push("Kiwi")
//Yes, the push() method in JavaScript returns the new length of the array after the element(s) have been added.
//When you use the push() method on an array, it appends one or more elements to the end of the array and returns the updated length of the array (not the added elements themselves).
//console.log(fruits);

//JavaArray shift()
//remove the element from leading side
//const fruits=["Banana","Orange","Apple","Mango"]
//let fruit=fruits.shift()
//console.log(fruits);
//fruits.shift()
//console.log(fruits);

// Javascript Array unshift()
// insert the element from leading side
//const fruits=["Banana","Orange","Apple","Mango"]
//let fruit=fruits.unshift("Grapes")
//console.log(fruits);
//fruits.unshift("Grapes")
//console.log(fruits);

//Javascript Array delete()
// delete the element from given array
//const fruits=["Banana","Orange","Apple","Mango"]
//console.log(fruits[0]);
//delete(fruits[0])
//console.log(fruits[0]);

//Merging arrays(Concatenating)
//In programming languages, concatenation means joining string end-to-end
//Concatenation "snow" and "ball" gives "snowball"

//Javascript Array concat()
//The concat() methode creayes a new array by merging(concatenation) existing arrays:
//const fruits=["Banana","Orange","Apple","MAngo"]
//const Name=["sonakshi","Tanvi","Krushnali","Tanisha"]
//let fullarray= fruits.concat(Name)
//console.log(fullarray);
// other formate
//const fruits=["Banana","Orange","Apple","MAngo"]
//const Name=["sonakshi","Tanvi","Krushnali","Tanisha"]
//const College=["kdk","gwc","jdce"]
//let fullarray= fruits.concat(Name,College)
//console.log(fullarray);

//Array copyWithin()
//The copyWithin() methode copies array elements to another position in an array:
//const fruits=["Banana","Orange","Apple","MAngo"]
//fruits.copyWithin(2, 0) 
//console.log(fruits);

//Note
//The copyWithin() method overwrites the existing values.
//The copyWithin() method does not add items to the array.
//The copyWithin() method does not change the length of the array.

//Flattening an Array
//Flattening an array is the process of reducing the dimensionality of an array.
//Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.


//Array flat()
//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
//const myArr=[[1,2],[3,4],[5,6]]
//const newArr=myArr.flat()
//console.log(newArr);

//JavaScript Array flatMap()
//ES2019 added the Array flatMap() method to JavaScript.
//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
//const myArr=[1,2,3,4,5,6]
//const newArr=myArr.flatMap(x => [x, x*10])
//console.log(newArr);

//const fruits =["Banana","Orange","Apple","Mango"]
//let fruit=fruits.toString()
//console.log(fruits);

//Splicing and Slicing Arrays
//The splice() method adds new items to an array.
//The slice() method slices out a piece of an array.

//Array splice()
//The splice() method can be used to add new items to an array:
//const fruits=["Banana","Orange","Apple","Mango"]
//fruits.splice(2,0,"Lemon","Kiwi")
//console.log(fruits);

//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items:

//const fruits=["Banana","Orange","Apple","Mango"]
//fruits.splice(2,2,"Lemon","Kiwi")
//console.log(fruits);
// Original Array
//Banana,Orange,Apple,Mango

//New Array
//Banana,Orange,Lemon,Kiwi

//Removed Items:
//Apple, Mango

//Using splice() to Remove Elements
//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

//const fruits=["Banana","Orange","Apple","Mango"]
//fruits.splice(0,1)
//console.log(fruits);
//const Name=['Google','Apple','amazone','microsoft']
//const pencil=['apsara','nataraj']
//const number=[1,2,3,4,5]
//let fullarray=pencil.concat(Name,number)

//The first parameter (0) defines the position where new elements should be added (spliced in).
//The second parameter (1) defines how many elements should be removed.
//The rest of the parameters are omitted. No new elements will be added.

//Array toSpliced()
//ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.
//The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

//const months=["Jan","Feb","Mar","Apr"]
//const spliced=months.toSpliced(0,1)
//console.log(spliced);

//Array slice()
//The slice() method slices out a piece of an array into a new array:
//const fruits=["Banana","Orange","Apple","Mango"]
//const citrus= fruits.slice(1)
//console.log(citrus);

// Note
//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.

//const fruits=["Banana","Orange","Lemon","Apple","Mango"]
//const citrus= fruits.slice(3)
//console.log(citrus);

//The slice() method can take two arguments like slice(1, 3).
//The method then selects elements from the start argument, and up to (but not including) the end argument.

//const fruits=["Banana","Orange","Lemon","Apple","Mango"]
//const citrus= fruits.slice(1,3)
//console.log(citrus);

//If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

//const fruits=["Banana","Orange","Lemon","Apple","Mango"]
//const citrus= fruits.slice(2)
//console.log(citrus);

//Automatic toString()
//JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
//This is always the case when you try to output an array.
//These two examples will produce the same result:

//Example
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//const fruit=fruits.toString()
//console.log(fruit);

//See Also:
//Basic searching Methods
//Sort Methods
//Iteration Methods

//looping
//let i=1
//while(i<1000){
//    console.log(i);
//    i++
//}

//let i=1
//while(i<=1000){
//    if(i%2==0)
//        console.log(i);
//    i++
//}

//let i=1
//while(i<=1000){
//    if(i %2!=0)
//        console.log(i);
//   i++
//}

//let i=1
//while(i<=1000){
//    if(i %2==1)
//        console.log(i);
//    i++
//}

//}

//let i=1000
//while(i>0){
//    if(i %2==0)
//        console.log(i);
//    i--
//}

//febonacci series
//let f=1;
//let s=1
//let i=3
//console.log(f,"\n",s);
//while(i<=10){
//    t=f+s
//    console.log(t);
//    f=s
//    s=t
//    i=i+1
//}

//create a table of any number
//let num=5
//let j=1
//while(a<=10){
//    table=num*i
//    console.log(table);//console.log(num,"X",i,"=",num*i);
///    j=j+1
//}

// factorial of number


//(I)function without argument and without return value
//factorial()
//function factorial(){
//    let num=5;
//    num=window.prompt("Enter any number for factorial")
//    let fact=1
//    while(num>=1){
//        fact=fact*num
//        num=num-1
//    }
//    console.log('Factortal of number is',fact);
//}


//(II) function with argument but without return value
//function factorial(num){
//    let fact=1
//    while(num>=1){
//        fact=fact*num
//        num=num-1
//    }
//    console.log('Factorial of number is',fact);
//}
//factorial(5)

//(III) function without argument but return value

//function factorial(){
//    let num=5
//    let fact=1
//    while(num>=1){
 //       fact=fact*num
//        num=num-1
//    }
//    return fact
//}
//fact=factorial()
//console.log('Factorial of number is',fact);
//factorial()

//(IV)function with argument with return value
//function factorial(num){
//    let fact=1
//    while(num>=1){
//        fact=fact*num
//        num=num-1
//    }
//    return fact
//}
//fact=factorial(5)
//console.log('Factorial of number is',fact);

// sum of digit
//let number=7890
//let sum=0
//let digit=null
//while(number!=0){
//digit=digit%}
//console.log('sum of digit is',sum);

// program to check an Armstrong number of three digits

//let sum = 0;
//const number = 153


//let temp = number;
//while (temp > 0) {
    
//    let remainder = temp % 10;

//    sum += remainder * remainder * remainder;

    // removing last digit from the number
//    temp = parseInt(temp / 10); // convert float into integer
//}

//if (sum == number) {
//    console.log(`${number} is an Armstrong number`);
//}
//else {
//    console.log(`${number} is not an Armstrong number.`);
//}


//print number 1 to 1000 Amstrong number(cube,power of 3)
//function amstrong(number){
//    let sum = 0;
//    let temp = number;
//    while (temp > 0) {
//
//
//        let remainder = temp % 10;
//    
//        sum += remainder * remainder * remainder;
//    
//        
//        temp = parseInt(temp / 10); 
//    }
//    return sum==number
//   
//}
//for(let i=1;i<=10000;i++){
//    if(amstrong(i)){
//        console.log(i);
//        
//    }
//}

//print number 1 to 1000 Amstrong number(power of 4)
//function armstrong(number){
//    let sum = 0;
//    let temp = number;
//    while (temp > 0) {
//
//        let remainder = temp % 10;
//    
//        sum += remainder * remainder * remainder*remainder;
//        temp = parseInt(temp / 10); 
//    }
//    return sum==number
//   
//}
//for(let i=1;i<=10000;i++){
//    if(armstrong(i)){
//        console.log(i);
//        
//    }
//}

// array itration, properties and methodes
// using while loop armstrong number 
//let original_number=123
//let sum=0
//let digit= null
//let temp_number=original_number
//while(temp_number!=0){
//    digit=temp_number % 10
//    sum=sum+(digit*digit*digit)
//    temp_number=parseInt(temp_number/10)
//}
//if(original_number==sum){
//    console.log(`The ${original_number} number is a armstrong number`);
//}
//else{
//    console.log(`The ${original_number} number is not a armstrong number`);
//}

//function to print all number weather armstrong or not
//function check_armstrong(number){
//    let original_number=number
//    let sum=0
//    let digit= null
//    let temp_number=original_number
//    while(temp_number!=0){
//        digit=temp_number % 10
//        sum=sum+(digit*digit*digit)
//        temp_number=parseInt(temp_number/10)
//    }
//    if(original_number==sum){
//        console.log(`The ${original_number}is armstrong number`);
//    }
//    else{
//        console.log(`The ${original_number}is not armstrong number`);
//    }
//}
//let i=0
//while(i<=1000){
//    if(check_armstrong(i)){
//        console.log(i);
//    }
//    i++
//}

// function to print exact armstrong number
//function check_armstrong(number){
//    let original_number=number
//    let sum=0
//    let digit= null
//    let temp_number=original_number
//    while(temp_number!=0){
//        digit=temp_number % 10
//        sum=sum+(digit*digit*digit)
//        temp_number=parseInt(temp_number/10)
//    }
//    if(original_number==sum){
//        return true
//    }
//    else{
//        return false
//    }
//}
//let i=0
//while(i<=1000){
//    if(check_armstrong(i)){
//        console.log(i);
//    }
//    i++
//}

// wap using js to reverse a number and check if it palindrom
//let number=121
//let org_number=number
//let digit=null
//let reverse=0
//while(number!=0){
//    digit=number %10
//    reverse=reverse*10+digit
//    number=parseInt(number/10)
//}
//if(reverse==org_number){
//    console.log(`The ${org_number}is a palindrom number`);
//}
//else{
//    console.log(`The ${original_number}is not a palindrom  number`);
//}

//function
//function check_palindrom(input){
//    let number=input
//    let org_number=number
//    let digit=null
//    let reverse=0
//    while(number!=0){
//        digit=number %10
//        reverse=reverse*10+digit
//        number=parseInt(number/10)
//    }
//    if(reverse==org_number){
//        console.log(`The ${org_number}is a palindrom number`);
//    }
//    else{
//        console.log(`The ${org_number}is not a palindrom  number`);
//    }
//}
//check_palindrom(128)

// factorial of number
//function factorial(number){
//    let org_number=number
//    let factorial=1
//    while(org_number!=0){
//        value=org_number
//        factorial=factorial*value
//        org_number--
//    }
//    console.log(`factorialof ${number} is ${factorial}!`);
//
//}
//factorial(7)
//factorial(9)
//factorial(12)

//array itration
//to access each element from the array
//let data=[1,2,3,4,5,6,7,8,9,10]
//let odd_numbers=[]
//let even_numbers=[]
//let i=0
//while(i<data.length){
//    if(data[i]%2==0){
//        even_numbers.push(data[i])
//    }
//    else{
//        odd_numbers.push(data[i])
//    }
//    i++
//}
//console.log(even_numbers);
//console.log(odd_numbers);

// do while loop and for loop
//do while(syntax)
//do{
//}while(condition)
// it will run atleast 1 time if condition is false
//let i=100
//do{
//    console.log(i);
//    i++
//}
//while(i<50)

// for loop
//syntax
// for(initialization;condition;updation(increment or decrement)){
// statments
//}
//for(let i=0;i<=100;i++){
//    console.log(i);
//    i%2==0?console.log(i):null
//}

//task

//do while loop
//let i=1
//do{
//    console.log(i);
//    i++
//}while(i<1000)


//let i=1
//do{
//    if(i%2==0){
//        console.log(i);
//    }
//    i++;
//}while(i<=100)

// for loop
//for(let i=1;i<=100;i++){
//    if(i%2==0){
//        console.log(i);
//    }
//}

//for(let i=1;i<=10;i++){
//    if(i%2!=0){
//        console.log(i);
//    }
//}
//for(let i=100;i>=1;i--){
//    console.log(i);
//}
//for(let i=100;i>=1;i--){
//  if(i%2==0){
//    console.log(i);
//        }
//}

//febonacci series
// daut

//let n1=0;
//let n2=1;
//let limit=10
//console.log(n1);
//console.log(n2);
//let i=1;
//do{
//    let entry=n1+n2;
//    console.log(entry);
//    n1=n2;
//    n2=entry;
//    i++
//}while(i<=limit)

//let data=[1,2,3,4,5,6,7,8,9,10]
//let odd_numbers=[]
//let even_numbers=[]
//for(let i=0;i<data.length;i++){
//    if(data[i]%2==0){
//        even_numbers.push(data[i])
//    }
//    else{
//        odd_numbers.push(data[i])
//    }
//}
//console.log(even_numbers);
//console.log(odd_numbers);

// factorial of number
//function factorial(number){
//    let org_number=number
//    let factorial=1
//    for(org_number=number;org_number!=0;org_number--){
//        value=org_number
//        factorial=factorial*value
//    }
//    console.log(`factorialof ${number} is ${factorial}!`);
//
//}
//factorial(7)
//factorial(9)
//factorial(12)

//function(daut)
//function check_palindrom(input){
//    let org_number=number
//    let digit=null
//    let reverse=0
//    for(let number=input;number!=0;number++){
//        digit=number %10
//        reverse=reverse*10+digit
//        number=parseInt(number/10)
//    }
//    if(reverse==org_number){
//        console.log(`The ${org_number}is a palindrom number`);
//    }
//    else{
//        console.log(`The ${org_number}is not a palindrom  number`);
//    }
//}
//check_palindrom(128)

// function to print exact armstrong number
//function check_armstrong(number){
//    let original_number=number
//    let sum=0
//    let digit= null
///    let temp_number=original_number
//    while(temp_number!=0){
//        digit=temp_number % 10
//        sum=sum+(digit*digit*digit)
//        temp_number=parseInt(temp_number/10)
//    }
//    if(original_number==sum){
///        return true
//    }
///    else{
//        return false
//    }
//}

//for(i=0;i<=1000;i++){
//    if(check_armstrong(i)){
//        console.log(i);
//    }
//
//let numbers=[1,2,3,4,5,6,7,8,9,10,11,12]
//length
//push pop shift unshift| updation
//itrate
//let odd=[]
//let even=[]
//let multiple_of_3=[]
//for(let i=0;i<numbers.length;i++){
//    if(numbers[i]%2==0){
//        even.push(numbers[i])
//    }
//    else{
//        odd.push(numbers[i])
//    }
//    if(numbers[i]%3==0){
//        multiple_of_3.push(numbers[i])
//    }
//}
//console.log(even)
//console.log(odd)
//console.log(multiple_of_3);

// forEach, for of, map

//numbers.forEach((number)=>{
//    // cannot return element like map function
//    console.log(number);
//})

//let printArray=(element)=>{
//    console.log(element);
//}
//let squareTheArray=(element)=>{
//    return element*element
//}
//numbers.map(printArray) OR
//numbers.map((number)=>{
//    return element*element
//})

//let squareArray=[]
//numbers.map((number)=>{
//    squareArray.push(number*number)
//})
//console.log(squareArray);

//let squareArray=[]
//numbers.forEach((number)=>{
//    squareArray.push(number*number)
//})
//console.log(squareArray);

//let newSquareArray=numbers.map((number)=>{
//    return number*number*number
    // return new array
//})
//console.log(newSquareArray);

// numbers.map((number)=>{
// //statement
//  // return new array
//    })

//let newArray=[]
//for(let i=0;i<numbers.length;i++){
//    newArray.push(numbers[i]*numbers[i])
//}
//console.log(newArray);

// for of
//for(let number of numbers){
//    newArray.push(number*number)
//}
//console.log(newArray);

// filter(searching),sort | return the new array
//binary,linear search |bubble,selection,insertion,merge,quick
// 2-D -matrix
// 5,1,3,2,4 - 1,2,3,4,5
// a,e,b,f,g i - a,b,e,f,g,i ||ASCII|| A 65 ,a 97 ,shift 32

//let numbers=[1,2,3,4,5,6,7,8,9]
//let odd=null
// filter methode will be return a new array in which element are valied from condition.
// if no element matched the condition filter methode will return an empty array.
// an empty array not false
//odd=numbers.filter((number)=>{
//    return number%2!=0
//})
//console.log(odd);

//
let students=[1,2,3,4,5,6,7]
let searchRollNumber=6
let result=students.filter((student)=>{
    return student==searchRollNumber
})
if(result.length !=0){
        console.log('student found');
}
else{
    console.log('student not found');
}
console.log(result);
// sorting in ascending order
//let numbers=[5,2,1,3,4]
//let result=numbers.sort()
//console.log(result);
// with compare function 

// sorting in descending order
//let result=numbers.sort((prev,next)=>{
//    return prev - next
//    return next - prev
//})
//console.log(result);

// ascending order sort
//let chars =["b","e","a","c","d"]
//let result = chars.sort()
//console.log(result);

// descending order sort



//(a,b)=>{
//  return a - b
//    }
// key : value comma separated

//let student ={
//    Name:"student1",
//    roll: 12,
//    contact:9364537727,
//    address: "Manewada",
//    section:'FSD7AM',
//    doSomething:()=>{
//        console.log('doing something!');
//    },
//    subject:['Maths',"Science","English"],
//    regular:true
//
//}
//for(let key in student){
//    console.log(student[key]);
//}
// let [a,b,c]=[1,2,3]
// console.log(a)
// member access oprator "."
//student.regular=false
//console.log(student.Name);
//console.log(student.roll);
// student.doSomething()

//array of object

//let students =[
//    {
//        Name:"student1",
//        roll:1,
//        contact:9763789298,
//        address:"Manewada",
//        section:"FSD7AM",
//        mark:85
//    },
//    {
//        Name:"student2",
//        roll:2,
//        contact:9763789298,
//        address:"Manewada",
///        section:"FSD7AM",
//        mark:89
//    },
//    {
//        Name:"student3",
//        roll:3,
//        contact:9763789298,
//        address:"Manewada",
//        section:"FSD7AM",
//        mark:45
//    },
//    {
//        Name:"student4",
//        roll:4,
//        contact:9763789298,
//        address:"Manewada",
//        section:"FSD7AM",
//        mark:68
//    },
//    {
//       Name:"student5",
//        roll:5,
//        contact:9763789298,
//        address:"Manewada",
//        section:"FSD7AM",
//        mark:50
//    },
//let sortedArray=students.sort((prevStudent,nextStudent)=>{
//    return nextStudent.mark - prevStudent.mark
//})
//console.log(sortedArray);

// grading
//for(let student of students){
//    if(student.mark >= 80){
//        student.grade="A"
//    }
//    else if(student.mark >= 60 && student.mark <= 80){
//        student.grade="B"
//    }else{
 //       student.grade="C"
//    }
//}
//console.log(students);
