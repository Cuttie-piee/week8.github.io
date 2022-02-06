const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

if(window.localStorage.getItem("blog") == undefined){
     var blog = [];
     window.localStorage.setItem("blog", JSON.stringify(blog));
}

var blogEX = window.localStorage.getItem("blog");
var blog = JSON.parse(blogEX);


class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input, name));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "DELETE";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = blog.indexOf(name);
            blog[indexof] = input.value;
            window.localStorage.setItem("blog", JSON.stringify(blog));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = blog.indexOf(name);
        blog.splice(index, 1);
        window.localStorage.setItem("blog", JSON.stringify(blog));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        blog.push(inputValue.value);
        window.localStorage.setItem("blog", JSON.stringify(blog));
		inputValue.value = "";
	}
}

for (var v = 0 ; v < blog.length ; v++){
    new item(blog[v]);
}
