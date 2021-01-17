// udemy section 7 exercises
//58 events inside forms

//const form= document.querySelector('.signup-form'); //(used again in #62 form validaation)
//const username= document.querySelector('#username'); //3 - identify entry for our own action
//form.addEventListener('submit', e => {              //1 - e is the action event and browser would refresh as default
//    e.preventDefault();                             //2 - now our own action can be programmed
    //console.log(username.value);                  //4 - gets text input
//    console.log(form.username.value);               //5 - alternate to 4 since html has an input id (or name) attribute- where? 
//})

    //59 regular expressions also #60 regular expressions #61 validation of data or testing regex

//const username= 'shaun';          //ok, false
//const username= 'boneym';         //ok true
//const username= '&boneym@nth';    // Ahhh... also true - why?   But false when carat and dollar sign added
//const username= '123robertandjune'           // Better be true! yes!
//const pattern= /[a-z]{6,}/          //the regex - lower case only and 6 characters no limit
//const pattern= /^[a-z]{6,}$/          //add carat and dollar signs   
// let result= (pattern.test(username));    //check position of parenthesese after I changed one!
// console.log(result);
// if(result){
//     console.log('regex test passed :)');    // play around with username for pass/ fail messages
// } else{
//     console.log('regex test failed :(');
// }
//let result= username.search(pattern);   //alternate method shows position by number of match (-1 fail, 0 or othe can be pass)
//console.log(result);

    // #62 basic form validation
    const form= document.querySelector('.signup-form');
    const feedback= document.querySelector('.feedback');    //needed to place feedback text in the DOM
    const usernamePattern= /^[a-zA-Z]{6,12}$/       //the regex! moved up for access by both callback functions

    form.addEventListener('submit', e => {              //1 - e is the action event and browser would refresh as default
        e.preventDefault();                             //2 - now our own action can be programmed
        //console.log(username.value);                  //4 - gets text input
        //console.log(form.username.value);               //5 - alternate to 4 since html has an input id (or name) attribute- where? 
        const username= form.username.value;
    //const usernamePattern= /^[a-zA-Z]{6,12}$/       //the regex! moved up for access by both callback functions
        if(usernamePattern.test(username)){
            //feedback pass info
            feedback.textContent= 'The username is valid. thankyou!';
        }else{
            //feedback help info
            feedback.textContent= "Please change entry to upper and lower case letters, 6 to 12 chareacters long."
        }
    });

    // #63 keyboard events starting with live-feedback oooh!
        form.username.addEventListener('keyup', e => {
            console.log(e);                                 //last of all look at e information
            //console.log(e.target.value, form.username.value);   //use e.target.value if available over form. one less place to look if form name changed
            if(usernamePattern.test(e.target.value)) {
                //console.log('passed');
                form.username.setAttribute('class', 'success');
            }else{
                //console.log('failed');
                form.username.setAttribute('class', 'error');
            }
        });
