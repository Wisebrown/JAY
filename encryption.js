function decrypt(){
    var sentece = document.querySelector("#decryptIn").value;
    for(let i = 0; i<sentece.length; i++){
        var k = sentece.charCodeAt(i);
        if(k==33){
            document.querySelector("#decryptOut").innerHTML += "  ";
        }
        else{
            document.querySelector("#decryptOut").innerHTML += String.fromCharCode(k+7);
        }
        // console.log(String.fromCharCode(i));
    }
}
function ency(){
    var sentece = document.querySelector("#encryIn").value;
    var encrypted = "";
    for(let i = 0; i<sentece.length; i++){
        var k = sentece.charCodeAt(i);
        if(k==32){
            k +=8;
        }
        encrypted +=  String.fromCharCode(k-7);
        document.querySelector("#encrytOut").value = encrypted;
        document.querySelector("img").style.display = "block";
    }
}
function copyEncry(){
    var encrypted = document.querySelector("#encrytOut");
    encrypted.select();
    document.execCommand("copy");

}