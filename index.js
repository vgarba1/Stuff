let clickEvent = function(text){
	let pushBox = document.getElementById('box2input');
	let addedMes = document.createElement("li");
    if(text.length > 0){
	  addedMes.append(text);
	  pushBox.append(addedMes);
	}
}

let back = function(){
   let firstBox = document.getElementById('box1input');
   let secondBox = document.getElementById('box2input');
   let thirdBox = document.getElementById('box3input');
   let pushBox = thirdBox.firstChild ? secondBox : firstBox;
   let pushMes = thirdBox.firstChild ? thirdBox.lastChild : secondBox.lastChild;
   if(secondBox.firstChild || thirdBox.firstChild) {
   	  pushBox.append(pushMes)
   }
}

let forward = function(){
   let firstBox = document.getElementById('box1input');
   let secondBox = document.getElementById('box2input');
   let thirdBox = document.getElementById('box3input');
   let firstMes = secondBox.children.length > 0 ? secondBox.lastChild : firstBox.children.length > 0 ? firstBox.lastChild : undefined; 
   console.log(firstMes.parentNode.parentNode.id);
   if(firstMes.parentNode.parentNode.id === 'box2'){
   	  thirdBox.append(firstMes);
   	  console.log('hi')
   }
   if(firstMes.parentNode.parentNode.id === 'box1'){
   	  secondBox.append(firstMes);
   }
}