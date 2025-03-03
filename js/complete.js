//make btn disable function
function getDisableId(id){
const card=document.getElementById(id);
card.disabled=true;
return card;
}
//assign task re number krbe.
function getInputValueById(id){
    const value =document.getElementById(id).innerText
    const convertedValue=parseFloat(value)
    return convertedValue;
}


//part-1(card1)
document.getElementById('card1')
.addEventListener('click',function(){
    
    const card1=getDisableId('card1');
    alert('Board Updated Successfully');
    card1.style.opacity='0.2';
    
})
//part-2(card1)
document.getElementById('card1')
.addEventListener('click',function(event){
    event.preventDefault();
  
const convertedMain=getInputValueById('taskNumber')
const convertedUp=getInputValueById('upNumber')
    
   const taskRemaining=convertedMain-1;
   const prevMoney=document.getElementById('taskNumber').innerText=taskRemaining;
const upNumberRemaining=convertedUp+1;
const newUp=document.getElementById('upNumber').innerText=upNumberRemaining;
// time part
const now = new Date();
const currentTime = now.toLocaleTimeString();
//append div part
const container=document.getElementById('newP');
const para1=document.getElementById('para1').innerText;
const div=document.createElement('div');
div.classList.add('bg-gray-100');
div.classList.add('rounded-md');
div.classList.add('p-2');
div.classList.add('mb-2');
div.classList.add('text-sm');

div.innerHTML=`You have completed the task ${para1} at ${currentTime}`
container.appendChild(div);
if(taskRemaining===0){
    alert('Congrats!!! You have completed all the current task')
}
})
//part-1(card2)
document.getElementById('card2')
.addEventListener('click',function(){
    
    const card1=getDisableId('card2');
    alert('Board Updated Successfully');
    card1.style.opacity='0.2';
    
})
//part-2(card2)
document.getElementById('card2')
.addEventListener('click',function(event){
    event.preventDefault();
  
const convertedMain=getInputValueById('taskNumber')
const convertedUp=getInputValueById('upNumber')
    
   const taskRemaining=convertedMain-1;
   const prevMoney=document.getElementById('taskNumber').innerText=taskRemaining;
const upNumberRemaining=convertedUp+1;
const newUp=document.getElementById('upNumber').innerText=upNumberRemaining;
//  time part
const now = new Date();
const currentTime = now.toLocaleTimeString();
//append div part
const container=document.getElementById('newP');
const para2=document.getElementById('para2').innerText;
const div=document.createElement('div');
div.classList.add('bg-gray-100');
div.classList.add('rounded-md');
div.classList.add('p-2');
div.classList.add('mb-2');
div.classList.add('text-sm');
div.innerHTML=`You have completed the task ${para2} at ${currentTime}`
container.appendChild(div);
if(taskRemaining===0){
    alert('Congrats!!! You have completed all the current task')
}
})
//part-1(card3)
document.getElementById('card3')
.addEventListener('click',function(){
    
    const card1=getDisableId('card3');
    alert('Board Updated Successfully');
    card1.style.opacity='0.2';
    
})
//part-2(card3)
document.getElementById('card3')
.addEventListener('click',function(event){
    event.preventDefault();
  
const convertedMain=getInputValueById('taskNumber')
const convertedUp=getInputValueById('upNumber')
    
   const taskRemaining=convertedMain-1;
   const prevMoney=document.getElementById('taskNumber').innerText=taskRemaining;
const upNumberRemaining=convertedUp+1;
const newUp=document.getElementById('upNumber').innerText=upNumberRemaining;
// time part
const now = new Date();
const currentTime = now.toLocaleTimeString();
//append div part
const container=document.getElementById('newP');
const para3=document.getElementById('para3').innerText;
const div=document.createElement('div');
div.classList.add('bg-gray-100');
div.classList.add('rounded-md');
div.classList.add('p-2');
div.classList.add('mb-2');
div.classList.add('text-sm');
div.innerHTML=`You have completed the task ${para3} at ${currentTime}`
container.appendChild(div);
if(taskRemaining===0){
    alert('Congrats!!! You have completed all the current task')
}
})
//part-1(card4)
document.getElementById('card4')
.addEventListener('click',function(){
    
    const card1=getDisableId('card4');
    alert('Board Updated Successfully');
    card1.style.opacity='0.2';
    
})
//part-2(card4)
document.getElementById('card4')
.addEventListener('click',function(event){
    event.preventDefault();
  
const convertedMain=getInputValueById('taskNumber')
const convertedUp=getInputValueById('upNumber')
    
   const taskRemaining=convertedMain-1;
   const prevMoney=document.getElementById('taskNumber').innerText=taskRemaining;
const upNumberRemaining=convertedUp+1;
const newUp=document.getElementById('upNumber').innerText=upNumberRemaining;
// time part
const now = new Date();
const currentTime = now.toLocaleTimeString();
//append div part
const container=document.getElementById('newP');
const para4=document.getElementById('para4').innerText;
const div=document.createElement('div');
div.classList.add('bg-gray-100');
div.classList.add('rounded-md');
div.classList.add('p-2');
div.classList.add('mb-2');
div.classList.add('text-sm');
div.innerHTML=`You have completed the task ${para4} at ${currentTime}`
container.appendChild(div);
if(taskRemaining===0){
    alert('Congrats!!! You have completed all the current task')
}
})
//part-1(card5)
document.getElementById('card5')
.addEventListener('click',function(){
    
    const card1=getDisableId('card5');
    alert('Board Updated Successfully');
    card1.style.opacity='0.2';
    
})
//part-2(card5)
document.getElementById('card5')
.addEventListener('click',function(event){
    event.preventDefault();
  
const convertedMain=getInputValueById('taskNumber')
const convertedUp=getInputValueById('upNumber')
    
   const taskRemaining=convertedMain-1;
   const prevMoney=document.getElementById('taskNumber').innerText=taskRemaining;
const upNumberRemaining=convertedUp+1;
const newUp=document.getElementById('upNumber').innerText=upNumberRemaining;
// time part
const now = new Date();
const currentTime = now.toLocaleTimeString();
//append div part
const container=document.getElementById('newP');
const para5=document.getElementById('para5').innerText;
const div=document.createElement('div');
div.classList.add('bg-gray-100');
div.classList.add('rounded-md');
div.classList.add('p-2');
div.classList.add('mb-2');
div.classList.add('text-sm');
div.innerHTML=`You have completed the task ${para5} at ${currentTime}`
container.appendChild(div);
if(taskRemaining===0){
    alert('Congrats!!! You have completed all the current task')
}
})
//part-1(card6)
document.getElementById('card6')
.addEventListener('click',function(){
    
    const card1=getDisableId('card6');
    alert('Board Updated Successfully');
    card1.style.opacity='0.2';
    
})
//part-2(card6)
document.getElementById('card6')
.addEventListener('click',function(event){
    event.preventDefault();
  
const convertedMain=getInputValueById('taskNumber')
const convertedUp=getInputValueById('upNumber')
    
   const taskRemaining=convertedMain-1;
   const prevMoney=document.getElementById('taskNumber').innerText=taskRemaining;
const upNumberRemaining=convertedUp+1;
const newUp=document.getElementById('upNumber').innerText=upNumberRemaining;
// time part
const now = new Date();
const currentTime = now.toLocaleTimeString();
// append div part
const container=document.getElementById('newP');
const para6=document.getElementById('para6').innerText;
const div=document.createElement('div');
div.classList.add('bg-gray-100');
div.classList.add('rounded-md');
div.classList.add('p-2');
div.classList.add('mb-2');
div.classList.add('text-sm');

div.innerHTML=`You have completed the task ${para6} at ${currentTime}`
container.appendChild(div);
if(taskRemaining===0){
    alert('Congrats!!! You have completed all the current task')
}
})
