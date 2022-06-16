const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(`${name}`)
}

function destructivelyPrependCat(name){
    cats.unshift(`${name}`)
}

function destructivelyRemoveLastCat(){
    cats.pop();
    console.log(cats)
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const copyCats = [...cats, "Broom"]
    return copyCats;
}


function prependCat(name){
    const copyCats = ['Arnold', ...cats]
    return copyCats;
}

function removeLastCat(name){
    const copyCats = cats.slice(0, 2);
    return copyCats
}

function removeFirstCat(name){
    const copyCats = cats.slice(1);
    return copyCats;
}