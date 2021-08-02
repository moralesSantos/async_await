async function getRandomNumber(){

    let promise = new Promise((resolve, reject) => {

        setTimeout(()=> resolve(Math.random()),500);

    });

    let result = await promise; 


    console.log("Random Number is: " + result);
    // alert(result); 

}


getRandomNumber(); 