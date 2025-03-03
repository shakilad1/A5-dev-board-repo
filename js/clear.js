document.getElementById('clear-btn')
.addEventListener('click',function(event){
event.preventDefault();
const clearBtn=document.getElementById('newP');
clearBtn.innerHTML=''
})