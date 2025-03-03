function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'short' , 
        year: 'numeric', month: 'short', day: 'numeric' };
    
    const formattedDateTime = `${now.toLocaleDateString('en-US', options)}`;


    document.getElementById('dynamic-date').textContent = formattedDateTime;
}
updateDateTime();

setInterval(updateDateTime, 1000);