function aligningNumbers(){
  for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
      continue;
   } else {
      console.log(i +" "+ parseInt(i+1))
   }
  }
}

aligningNumbers();