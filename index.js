const heading1= document.getElementById('head1')
const body = document.querySelector('body')
const heading2= document.getElementById('head2')
const heading3= document.getElementById('head3')
const heading4= document.getElementById('head4')
const trainingContainer1= document.getElementById('training1')
const trainingContainer2= document.getElementById('training2')
const trainingContainer3= document.getElementById('training3')
const trainingContainer4= document.getElementById('training4')
const monday = document.getElementById('monday')
const tuesday = document.getElementById('tuesday')
const wednesday = document.getElementById('wednesday')
const thursday = document.getElementById('thursday')
const friday = document.getElementById('friday')

const r1time1 = document.getElementById('r1time1')
const r1time2 = document.getElementById('r1time2')
const r2time1 = document.getElementById('r2time1')
const r2time2 = document.getElementById('r2time2')
const r3time1 = document.getElementById('r3time1')
const r3time2 = document.getElementById('r3time2')
const r4time1 = document.getElementById('r4time1')
const r4time2 = document.getElementById('r4time2')
const r5time1 = document.getElementById('r5time1')
const r5time2 = document.getElementById('r5time2')
const sidebarmenu = document.getElementById('sidebarmenu')
const sidebar = document.getElementById('sidebar')
const closebar = document.getElementById('closebar')
const header = document.getElementById('header')
 


// headings2.onclick = function(){
//   heading3.textContent='hello'
//   document.body.style.backgroundColor='red';
// }
monday.addEventListener('click',function(){
r4time1.textContent='';
r5time2.textContent='';
r2time2.textContent='';
r5time1.textContent='';
r2time1.textContent='';
r4time2.textContent='';
r1time2.textContent='';
r3time1.textContent='';

  r1time1.textContent='10:00AM - 11:30AM';
r3time2.textContent='2:00PM - 3:30PM';

}
)
tuesday.addEventListener('click',function(){
r1time1.textContent='';
r3time2.textContent ='';
r4time1.textContent='';
r5time2.textContent='';
r2time2.textContent='';
r5time1.textContent='';
r2time1.textContent='';
r4time2.textContent='';

  r1time2.textContent='2:00PM - 3:30PM';
r3time1.textContent='10:00AM - 11:30AM';

}
)
wednesday.addEventListener('click',function(){
r1time2.textContent='';
r3time1.textContent='';
r1time1.textContent='';
r3time2.textContent ='';
r2time2.textContent='';
r5time1.textContent='';
r2time1.textContent='';
r4time2.textContent='';
  
r4time1.textContent='10:00AM - 11:30AM';
r5time2.textContent='2:00PM - 3:30PM';

}
)

thursday.addEventListener('click',function(){
r4time1.textContent='';
r5time2.textContent='';
r1time2.textContent='';
r3time1.textContent='';
r1time1.textContent='';
r3time2.textContent ='';
r2time1.textContent='';
r4time2.textContent='';
  
  
  r2time2.textContent='2:00PM - 3:30PM';
r5time1.textContent='10:00AM - 11:30AM';

}
)
friday.addEventListener('click',function(){
  r2time2.textContent='';
  r5time1.textContent='';
r4time1.textContent='';
r5time2.textContent='';
r1time2.textContent='';
r3time1.textContent='';
r1time1.textContent='';
r3time2.textContent ='';

  
r2time1.textContent='2:00PM - 3:30PM';
r4time2.textContent='10:00AM - 11:30AM';

}
)

head1.addEventListener('click',function(){
training4.style.display='none';
training2.style.display ='none';
training3.style.display ='none';
training1.style.display ='inline-block';
head1.style.active.color='#ff7200'

     
})

head2.addEventListener('click',function(){
training1.style.display='none';
training4.style.display='none';
training3.style.display ='none';
training2.style.display ='inline-block';


    
})
head3.addEventListener('click',function(){
training2.style.display='none';
training1.style.display='none';
training4.style.display='none';

training3.style.display ='inline-block';


    
})
head4.addEventListener('click',function(){
training3.style.display='none';
training2.style.display='none';
training1.style.display='none';

training4.style.display ='inline-block';

    
})

// sidebar.addEventListener('click', function(){
//   sidebarmenu.style.display = 'flex'
//   sidebar.style.active='green'
  
// })

function showSideBar(){
  sidebarmenu.style.display='flex';
  closebar.style.visibility ='visible';
  sidebar.style.visibility= 'hidden'
  

}

function closeSideBar(){
 sidebarmenu.style.visibility='hidden';
  sidebar.style.visibility='visible';
  closebar.style.visibility ='hidden';
  
}


window.addEventListener('scroll', function(){
  header.classList.toggle('sticky', window.scrollY>7);
}

)

// const nav = document.getElementById('myNav');
// window.onscroll= function(){
//   if(document.body.scrollTop >=200){
//     myNav.classList.add('nav-colored');
//     myNav.classList.remove('nav-transparent');

//   }
//   else{
//     myNav.classList.add('nav-transparent');
//     myNav.classList.remove('nav-colored');
//   }
// }


// )