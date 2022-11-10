function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase("hello"));
}

function logWhisper(string){
    console.log(string.toLowerCase("hello"));
}

function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
        string = "I can't hear you!";
    } else if (string === string.toUpperCase()){
        string = "YES INDEED!";
    } else {
        string ="I would love to!";
    }
    return string;
}