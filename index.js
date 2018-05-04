function bruteHello(waitTime = 10){

    const str = 'Hello, world!';
    const arr = str.split('');

    let result = '';
    let i = 0;

    let interval = setInterval(() => {
        const char = arr[i];
        const randCharCode = Math.floor(Math.random()*94) + 32;
        const c = String.fromCharCode(randCharCode);
        console.log(result + c);
        if(c === char){
            result += char;
            i++;
        }
        if(result === str){
            clearInterval(interval);
        }
    }, waitTime);
}


