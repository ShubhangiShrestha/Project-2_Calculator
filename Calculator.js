let CalcScreen = document.getElementById('CalcScreen');
buttons = document.querySelectorAll('button');
let screen='';
for(item of buttons){
	item.addEventListener('click', (e)=>{
		buttonText = e.target.innerText;
		if(buttonText == '='){
			CalcScreen.value = eval(screen);
		}
		else if(buttonText == 'C'){
			screen = "";
			CalcScreen.value = screen;
		}
		else{
			screen += buttonText;
			CalcScreen.value = screen;
		}
	})
}