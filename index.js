function isBlanced(exp) {
	let isValid = true;
	let expArray = Array.from(exp);
  let tempArray = [];
  let leftSet = ['{', '[', '('];
  let rightSet = ['}', ']', ')'];
  expArray.forEach((element) => {
  	if(leftSet.indexOf(element) !== -1) {
    	tempArray.push(element);
    } else if(rightSet.indexOf(element) !== -1) {
    	let popedEle = tempArray.pop();
      let index = rightSet.indexOf(element);
      if(popedEle !== leftSet[index]) {
      	isValid = false;
        return false;
      }
    }
  });
  if(tempArray.length !== 0) {
  	isValid = false;
  }
  return isValid;
}
