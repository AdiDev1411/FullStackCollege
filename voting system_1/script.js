let javacount = 0;
let pythoncount = 0;
let javascriptcount = 0;

function voteJava() {
    javacount++;
    document.getElementById("javacount").innerText = javacount + " votes";
}

function votePython() {
    pythoncount++;
    document.getElementById("pythoncount").innerText = pythoncount + " votes";
}

function voteJavaScript() {
    javascriptcount++;
    document.getElementById("javascriptcount").innerText = javascriptcount + " votes";
}