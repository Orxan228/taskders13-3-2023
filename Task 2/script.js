let names = document.querySelector("#names");
let addName = document.querySelector("#add-a-name");
let input = document.querySelector("input");
addName.addEventListener("click", function()
{
    names.innerHTML = "";
    names.innerHTML += `<li>${input.value}</li>`
})