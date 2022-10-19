//data structure 
//Arrays
//non primitive data type

//store similar kind of values
//array is a continous memory data structure

//array will have indexes, index is basically tells the position of the value;

//indexe positioning
//at 0 ---> 6
//at 1 ---> 9
// .
// .

var myArray = [6,9,8,7,20];

//accessing the elements of array;

// console.log(myArray[3]); //7
// console.log(myArray[0]); //6
// console.log(myArray[1]); //9
// console.log(myArray[2]); //8

//pop() --->method -- will remove the last value;

// myArray.pop();
// console.log(myArray);

//push method---> inserts the value at last position

myArray.push(2); 
console.log(myArray);

//size of the array --->length

console.log( "length of the array is " + myArray.length);

//inserting the element at  given index position;
myArray[3] = 29;
console.log(myArray);

// iterating the array 

// [6,9,8,29,21,2]
for (var i = 0; i < myArray.length; i++ ) {
    console.log(myArray[i]);
}

//home work 
//find sum of all the elements in array
//print all the numbers in array;




