type Event={
    stopDefault():void;
}

function fun<T extends Event>(event:T):void{
    event.stopDefault();
}
// fun((e)=>{
//     e.stopDefault();
//     console.log(e);
// })
export {};