

let rec=''
let naslov= document.getElementById("naslov");
let text= document.getElementById("slovo");
let recForDisplay;
const grabText=()=>{
     rec=document.getElementById("rec").value;
     rec=rec.toUpperCase();
    recForDisplay=rec;
    rec=[...rec];
    rec= rec.filter((e)=>{
          return e !==' ' && e!==',';
      });
    
  let letters=[];
  let count=0;
  
  for (let k = 0; k < rec.length; k++) {
      let letterAndCount={letter:'',count:0};
      letterAndCount.letter = rec[k];
      count=0;
      for (let i = 0; i < rec.length; i++) {
          if(rec[k]===rec[i]){
              letterAndCount.count++;
          }
       }//inner loop
       if (letters.filter(e => e.letter === rec[k]).length < 1) {
      
          letters.push(letterAndCount);
       }
       
  }///outher loop
  
  letters.sort((a, b) => (a.count > b.count) ? -1 : 1)

  
//   let naslov= document.getElementById("naslov");
//   let text= document.getElementById("slovo");
      naslov.innerHTML= `String "${recForDisplay}" has this letters:`;
                letters.forEach(element => {
                    let time='';
                    if(element.count<2){
                        time=`Letter ${element.letter} is ${element.count} time`;
                    }else{
                        time=`Letter ${element.letter} is ${element.count} times`;
                    }
                    let slovo = document.createElement("LI");   
                    slovo.innerHTML +=time;
                    text.appendChild(slovo);
                  }); 
}

const clearText=()=>{
    rec=document.getElementById("rec");
    rec.value='';
    recForDisplay='';
    naslov.innerHTML= `String " " has this letters:`;
    console.log(rec +'rec')
    while (text.hasChildNodes()) {  
        text.removeChild(text.firstChild);
      }
   
}      

   
