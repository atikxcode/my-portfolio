const actives = document.querySelectorAll('.active-list');
console.log(actives);

actives.forEach(active => {
  
  active.addEventListener('click', () => {
    
    actives.forEach(item => {
      if(item !== active){
        item.classList.remove('active');
      }
    });
    active.classList.add('active');
   
  })
})
