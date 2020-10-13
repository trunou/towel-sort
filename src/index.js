module.exports = function towelSort (matrix) {
  if(matrix === undefined){
    return [];
  } else{
  var flag = 1;
  let sortArr = [];
  for(let i = 0; i < matrix.length; i++){
    if(flag === 1){
      [].push.apply(sortArr, matrix[i]);
    } else [].push.apply(sortArr, matrix[i].reverse());
    flag *= -1;
  }
  return sortArr;
}
}

