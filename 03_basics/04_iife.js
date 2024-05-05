// Immediately invoked function expressions

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // we have to use ; in iife zrorri

( (name) => {
    console.log(`DB Connected Two ${name}`);
})(`RAo`)