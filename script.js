const display = document.querySelector("#display")

function addToDisplay(x){
    display.value += x
    display.focus()
}

function delDisplay(){
    let st = display.selectionStart
    let en = display.selectionEnd
    let cur = display.value

    let befcur, aftcur
    aftcur = cur.slice(en)

    if(st === en && st > 0){
        // delete single char
        befcur = cur.slice(0, st-1)
        display.value = befcur + aftcur
        display.setSelectionRange(st-1, st-1)
    }
    else{
        // delete all selected
        befcur = cur.slice(0, st)
        display.value = befcur + aftcur
        display.setSelectionRange(st, st)
    }

    display.focus()
}

function clearDisplay(){
    display.value = ""
}