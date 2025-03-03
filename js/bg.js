document.getElementById('bg-btn').addEventListener('click',function(){
   const color = changeBackgroundColor('bg-btn');
})

function changeBackgroundColor(id) {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
 
    const randomColor = `rgb(${r}, ${g}, ${b})`;
  

    document.body.style.backgroundColor = randomColor;
  }