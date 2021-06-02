

let rec=''
const grabText=()=>{
     rec=document.getElementById("rec").value;
    let recForDisplay=rec;

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

  
  let naslov= document.getElementById("naslov");
  let text= document.getElementById("slovo");
      naslov.innerHTML= `String "${recForDisplay}" has this letters:`;
                letters.forEach(element => {
                    let slovo = document.createElement("P");   
                    slovo.innerHTML +=`Letter '${element.letter}' is ${element.count} time/s `;
                    text.appendChild(slovo);
                  });
     
}

          

   
