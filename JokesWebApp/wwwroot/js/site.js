// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let count = 0;

function counterHandler() {
    count++;
    const counterDiv = document.querySelector("#counter");
    console.log("handelr called", count, counterDiv);
    counterDiv.innerHTML = `${count}`;
}