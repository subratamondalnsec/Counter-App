let m=document.querySelector("#minus");
let p=document.querySelector("#plus");
let v=document.querySelector("#val");
m.addEventListener('click',function(){
    // v.innerText=(+v.innerText)-1;
    v.innerText=parseInt(v.innerText)-1;
});
p.addEventListener('click',function(){
    // v.innerText=(+v.innerText) +1;
    v.innerText=parseInt(v.innerText)+1;
}); 