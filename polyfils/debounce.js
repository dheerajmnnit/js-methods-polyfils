function debounce(func, wait) {
    let timeout;

    return function () {
        const context = this;
        const args = arguments;

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

// Example of function call:-
function logger() {
    console.log("debounce");
}
const printlog = debounce(logger, 2000);
printlog();
printlog();
  /* Output:-
debounce 
debounce
*/