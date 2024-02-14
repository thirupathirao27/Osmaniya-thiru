let imageContainer = document.querySelector(".image_conatiner_for_history");
let image = document.getElementById('image_for_history');
let history = document.getElementById('para_for_image');
let history_main = document.querySelector('.history_main');
function showImage(ImageSrc,para,event,height,side)
{
  
    image.src=ImageSrc;
    history.innerHTML=para;
    imageContainer.style.height=height+'px';
   
    if(side=='left')
    {
        imageContainer.style.left=event.clientX+'px';
    }
    else{

        imageContainer.style.left=`${event.clientX - 500}px`
    }
    
    imageContainer.style.top=(event.clientY)+'px';
    imageContainer.style.display='flex';
   
}




function hideImage()
{
    
    imageContainer.style.display='none';
    // document.body.style.overflow='auto'
   
}

function image_conatiner_for_historyDisplay()
{
  
    imageContainer.style.display='flex';
     history_main.style.display='abolute';
    // document.body.style.overflow='hidden'
    
   
    console.log("open")
}


// another type images
let imageContainer1 = document.querySelector(".image_conatiner_for_history1");
let image1 = document.getElementById('image_for_history1');
let history1 = document.getElementById('para_for_image1');
function showImage1(ImageSrc,para,event,height,side)
{
  
 
    image1.src=ImageSrc;
    history1.innerHTML=para;
    imageContainer1.style.height=height + 'px';
   
    if(side=='left')
    {
        imageContainer1.style.left=event.clientX+'px';
    }
    else{

        imageContainer1.style.left=`${event.clientX - 500}px`
    }
    
    imageContainer1.style.top=(event.clientY) +'px';
    imageContainer1.style.display='flex';
   
}

function hideImage1()
{
    
    imageContainer1.style.display='none';
    // document.body.style.overflow='auto'
   
}

function image_conatiner_for_historyDisplay1()
{
  
    imageContainer1.style.display='flex';
    // document.body.style.overflow='hidden'
   
    console.log("open")
}

let spantag = document.querySelectorAll('span')

spantag.forEach((span)=>
{
    span.addEventListener('mouseover',()=>
    {
    let rect = span.getBoundingClientRect();
    let viewPortHieght = (window.innerHeight || document.documentElement.clientHeight);

    if(rect.top>=0 && rect.top <= viewPortHieght/2)
    {
        console.log('top')
    }
    else{
        console.log('bottom')
    }
})
})

let arrayContainer = document.querySelector('.arrayImageContainer');
let arrayImg = document.querySelector('#arryImg');
let arrayPara = document.querySelector('#arrayPara');
let images =['./asset/images/Osmania_University_Logo.png','./asset/images/library.jpg','./asset/images/osmaniy_main.jpeg','./asset/images/student_dressed.jpg','./asset/images/mosque-madras.jpg',];
let description =['Osmaniya Univerity Logo','Osmaniya Library','Osmaniya main campus','Students dressed in sherwani at the University College of Arts, c. 1939–1945.','The Mosque-Madrasa of Sultan Hasan is a monumental mosque']
let index =-1;
function FirstArrayContainer(){
   
   
    arrayImg.style.opacity = 0.3;
    var paraLen;
    var paraString;

    if(index < images.length - 1)
    {
        index++;
        arrayImg.src = images[index];
         paraLen = description[index].length;
         paraString = description[index];
   
    }
    else{
        index = 0;
        arrayImg.src = images[index];
        paraLen = description[index].length;
        paraString = description[index];
    }
   
    
 

move(paraLen,paraString,);

}
FirstArrayContainer();
function move(paraLen,paraString)
{
    let i =0;
let x =  setInterval(()=>{
   
     if(i <= paraLen)
     {
         arrayPara.innerHTML = paraString.slice(0,i);
         arrayImg.style.opacity = 1;
         i++;
         
     }
     else{
         clearInterval(x);
         setTimeout(FirstArrayContainer,1000);
     }
 },80);

}

