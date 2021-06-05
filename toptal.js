let A=[0,1,2,3,3,2,2-1,-3,-5,4,4,5,5,6,8]
//3,2,2-1,-3,-5,4,4,5,5,6,7,8
 //[1, 2, 3, 4,6]
function solution(A) {
    let result=null;
 // sortiranje i uklanjanje negativnih brojeva array
   let sortedAndFiltered=A.sort(function(a, b){return a - b}).filter((item)=>{
       return item >0;
   });
//uklanjanje duplicata
   let withOutDuplicates=  sortedAndFiltered.filter((item,index)=>{
    return sortedAndFiltered.indexOf(item)===index
   })
//pronalazenje najveceg broja
let max=Math.max(...withOutDuplicates)
//pronalazenje najmanjeg poyitivnog koji nedostaje
withOutDuplicates.forEach((elem,ind,arr) => {
    if(ind!==0){//preskakanje prvog elementa
        if(elem-arr[ind-1]>1){//proveravanje da li je razlika izmedju dva elementa veca od 1 
            result=elem-1;
        }else{
            result=max+1;//rezultat je van arr
        } 
    }   
   });
 
   let write = document.getElementById("resenje");
   write.innerHTML = result;
}

solution(A)