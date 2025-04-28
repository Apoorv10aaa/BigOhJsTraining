const add=(a:number,b:number)=>a+b;


function loggerWrapper<T extends (...args:any[])=>any>(f:T){
    function wrapper(...args:Parameters<T>):ReturnType<T>{
        const logValue=`Function called is ${f.name} with arguments ${args}`;
        let output=f(...args);
        return output;
    }
    return wrapper;
}

const loggedAdd=loggerWrapper(add);
loggedAdd(3,5);