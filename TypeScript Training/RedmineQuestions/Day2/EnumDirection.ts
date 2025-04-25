enum DIRECTION{
    Up="1",
    Down="2",
    Left="3",
    Right="4",
}

function getDirection(direction:keyof typeof DIRECTION): string{
    return DIRECTION[direction];
}

// work on suggestionsgs with keys
console.log(getDirection("Right"))