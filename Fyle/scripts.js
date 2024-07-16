//section3
const data = document.querySelectorAll('.mini-page')
const section3Image = document.querySelector('#ProjectImage')

data.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        data.forEach((ele)=>ele.classList.remove('mini-page-active'))
        const imageUrl = ele.getAttribute('data-id')
        section3Image.setAttribute('src',imageUrl)
        ele.classList.add('mini-page-active')
    })
})

//carousel
const indicator = document.querySelectorAll('#carouselExampleIndicators')
const carouselImage = document.querySelector('.carousel-in')

indicator.forEach((ele, i)=>{
    ele.addEventListener('click',()=>{
        indicator.forEach((ele)=>{
            ele.classList.remove('active','outline')
        })
        ele.classList.add('outline','active')
       const slideImage =  ele.getAttribute('data-bs-slide-to')
       let position = slideImage * 310;
       carouselImage.style.left =`-${position}px`
        
    })  
})
