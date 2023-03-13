let addOne = document.querySelector(".add-one");
let decOne = document.querySelector(".dec-one");
let input = document.querySelector(".input");
let count = 0;
let fix = 0;
addOne.addEventListener("click",function()
{
    // count++;
    zero.innerHTML = count;
    count += 1
    zero.innerHTML = count;
})
decOne.addEventListener("click",function()
{
    //    count--;
    count = zero.innerHTML;
    count -= 1;
    zero.innerHTML = count;
    if (zero.innerHTML = 0 ) 
    {       
        document.querySelector('.dec-one').disabled = true;
        // zero.innerHTML = fix;
        // fix += 1;
        // zero.innerHTML = fix;
    }
    if (zero.innerHTML >= 0) 
    {       
        document.querySelector('.dec-one').disabled = false;
    }
})
// let addOne = document.getElementById("add-one");
// let decOne = document.getElementById("dec-one");
// let input = document.getElementById("input");