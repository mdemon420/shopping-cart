
document.querySelector("#case-increase").addEventListener("click",function(){
   handelProduct(true);

});
document.querySelector("#case-decrease").addEventListener("click", function(){
   handelProduct(false);
   
});


function handelProduct(isInCrease){
   const caseInput = document.querySelector("#case-count");
   const caseCount = parseInt(caseInput.value);
   let caseNewCount = caseCount;
   if(isInCrease == true){
      caseNewCount = caseCount + 1;
   }
   else if(isInCrease ==  false && caseCount > 0){
      caseNewCount = caseCount -1 ;
   }
   caseInput.value = caseNewCount;

   const caseTotal = caseNewCount * 59;
   document.querySelector("#caseTotal").innerText = "$" + caseTotal;

}

// document.querySelector("#case-increase").addEventListener("click",function(){
//    const caseInput = document.querySelector("#case-count");
//    const caseCount = parseInt(caseInput.value);
//    const caseNewCount = caseCount + 1;
//    caseInput.value= caseNewCount;  
 
//    const caseTotal = caseNewCount * 59;
//    document.querySelector("#caseTotal").innerText ="$"+caseTotal;
 

// });
// document.querySelector("#case-decrease").addEventListener("click", function(){
//    const caseInput = document.querySelector("#case-count");
//    const caseCount = parseInt(caseInput.value);
//    const caseNewCount = caseCount - 1;
//    caseInput.value = caseNewCount;

//    const caseTotal = caseNewCount * 59;
//    document.querySelector("#caseTotal").innerText = "$" + caseTotal;

   
// });