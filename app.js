const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdown= document.querySelectorAll(".dropdown select");


for(let select of dropdown){   
    for(currcode in countryList){
    let newoption=document.createElement("option");
    newoption.innerText= currcode;
    newoption.value= currcode;
    if(select.name=="from" && currcode=="USD"){
        newoption.selected="selected"
    } 
    else if(select.name=="to" && currcode=="INR"){

    }
    select.append(newoption);
}
select.addEventListener("change", (evt)=>{
    updateflag(evt.target);
})
}
 const updateflag = (element) =>{
      let currcode = element.value;
      let countrycode= countryList[currcode];
      let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
      let img=element.parentElement.querySelector("img");
      img.src= newsrc;
 };