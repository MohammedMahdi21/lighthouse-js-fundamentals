
const checkAir = function (samples, threshold) {
  // Code here!
  let cleanCount = 0;
  let dirtyCount = 0;
  let result = 0;
  

  for(let sample of samples){
    if(sample === 'clean'){
      cleanCount += 1;
    }
    else {
      dirtyCount += 1;
    }
  }
  let totalCount = cleanCount + dirtyCount;

  result = Math.round(cleanCount/totalCount);
  
  if(result < threshold){
    return "Clean";
  }
  else {
    return "Polluted";
  }

};





console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))