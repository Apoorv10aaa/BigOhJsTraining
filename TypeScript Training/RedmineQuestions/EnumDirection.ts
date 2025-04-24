enum DIRECTION{
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right"
}
let getDirection=(direction:DIRECTION): string=>{
    return direction;
}

// work on suggestionsgs with keys
console.log(getDirection(DIRECTION.Right))