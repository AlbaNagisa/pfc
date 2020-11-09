var link = document.createElement('link');  
  
        // set the attributes for link element 
        link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = 'static/style.css';  
  
        // Get HTML head element to append  
        // link element to it  
document.getElementsByTagName('HEAD')[0].appendChild(link); 

const title = document.getElementById('autotext')
const text = "Pierre Feuille Ciseaux"

let index = 0

const speed = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const play = () => {
    
    title.innerHTML = text.slice(0, index);

    index++;

    
    clearInterval(timer);
    timer = setInterval(play, speed(50, 300));
};

let timer = setInterval(play, 300);