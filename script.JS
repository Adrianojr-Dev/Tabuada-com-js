function verificar(){
    var nmb = Number(window.document.getElementById("nmb").value) // transformed to number
    var res = window.document.getElementById("res")
    var tabb = window.document.getElementById("tab")
    //res.innerHTML = "<p>resultado :</p>"
    tabb.innerHTML = ""
    if(nmb==0){
        alert("por favor digite um numero")
    }else{
        for(var c=1;c<=10;c++){
        var mul = nmb*c
        var item = document.createElement("option")
        item.text = `${nmb} x ${c} = ${mul}`
        tabb.appendChild(item)
    }
    }
    
}