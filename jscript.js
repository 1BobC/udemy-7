// udemy section 7 exercises
//58 events inside forms

const form= document.querySelector('.signup-form');
//const username= document.querySelector('#username'); //3 - identify entry for our own action
form.addEventListener('submit', e => {              //1 - e is the action event and browser would refresh as default
    e.preventDefault();                             //2 - now our own action can be programmed
    //console.log(username.value);                  //4 - gets text input
    console.log(form.username.value);               //5 - alternate to 4 since html has an input id (or name) attribute- where? 
})

//59 regular expressions (includes validation of data or testing regex!)
//const username= 'shaun';          //ok, false
//const username= 'boneym';         //ok true
//const username= '&boneym@nth';    // Ahhh... also true - why?   But false whe carat and dollar sign added
const username= '123robertandjune'           // Better be true! yes!
//const pattern= /[a-z]{6,}/          //the regex - lower case only and 6 characters no limit
const pattern= /^[a-z]{6,}$/          //add carat and dollar signs   
// let result= pattern.test((username));
// console.log(result);
// if(result){
//     console.log('regex test passed :)');    // play around with username for pass/ fail messages
// } else{
//     console.log('regex test failed :(');
// }
let result= username.search(pattern);   //alternate method shows position by number of match (-1 fail, 0 or othe can be pass)
console.log(result);