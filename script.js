


let list = document.querySelectorAll('.top')
let images = document.querySelectorAll('.top img')
let hidden = document.querySelectorAll('.hidden')


list.forEach((e, i)=>{

  let show = true;
  
  e.addEventListener('click',()=>{
    
    
    if(show == true){
      show = false
      hidden[i].style.display = 'block'
      images[i].src = "assets/images/icon-minus.svg" 
    }else{
      
      show = true;
      images[i].src = "assets/images/icon-plus.svg" 
      hidden[i].style.display = 'none'
    }
  })

})