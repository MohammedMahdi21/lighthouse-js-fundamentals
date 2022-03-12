const judgeVegetable = function(vegetables, metric) {
  let maxPoints = 0;
  let winner;

  for (let i = 0; i < vegetables.length; i++){

    if (vegetables[i][metric] > maxPoints){
      maxPoints = vegetables[i][metric];
      winner = vegetables[i]['submitter'];
    }
  }
  return winner;
};