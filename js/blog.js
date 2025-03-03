document.getElementById('discover')
.addEventListener('click',function(){
    
    window.location.href="./blog.html"
    
})

const discoverDiv = document.getElementById('discover');

discoverDiv.addEventListener('mousedown', function() {
    
    discoverDiv.style.opacity = '0.8'; 
    discoverDiv.style.hover = 'bg-gray-100'; 
    
});


