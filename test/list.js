const addButton = document.getElementById("add");
const hobbyWrapper = document.getElementById("hobby");
let i = 0
addButton.addEventListener("click", add);

function add (){
	i = i + 1
	const inputWrapper = document.createElement('div');
	inputWrapper.id = `inputWrapper-${i}` ;
  const input = document.createElement('input');
  input.placeholder = "More hobbies";
  inputWrapper.appendChild(input)
  
  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'X';
  removeButton.onclick = () => { 
  	hobbyWrapper.removeChild(inputWrapper)
  }
  
  inputWrapper.appendChild(removeButton);
  hobbyWrapper.appendChild(inputWrapper);
}