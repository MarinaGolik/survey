jQuery(document).ready(function () {
   //----Format Webp---------
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src =
         'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
   }
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      }
   });

   
//    let dateSpan = $('#date, #date2')
//    const monthsAll = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//    const date = new Date();
//    let day = date.getDate();
//    let year = date.getFullYear();
//    let months = date.getMonth();

//    monthsAll.map((m, i) => (months === i) ? months = m : null)

//    const today = `${months} ${day}, ${year}`

//    dateSpan.html(today);

   const body = $('.survey__body');
    const main = $('main');
   console.log(data);
  


   data = {
      email: '',
      question_1: '',
      question_2: '',
   }



const step_1 =` <section class="survey-question1">
<div class="container">  
  <div class="survey__body">
  <div class="survey-step">
   <div class="survey-step__title">
     <h2 class="survey-step__caption">How often do you  shop online?</h2>
   </div>
    <div class="survey-step__border">
      <form action="form-survey">
         <div class="form-survey__wrapper">
         <input class="form-survey__radio-input" type="radio" name="frequence" id="radio1" data-attribute='Daily'>
            <label for="radio1" class="form-survey__radio">                 
               <span class="form-survey__radio-text">Daily</span>
            </label>
            <div class="form-survey__line"></div>

            <input  type="radio" name="frequence" id="radio2" data-attribute='Once in 2-3 days'>
            <label for="radio2" class="form-survey__radio">
               <span class="form-survey__radio-text"> Once in 2-3 days</span>
            </label>
            <div class="form-survey__line"></div>

            <input  type="radio" name="frequence" id="radio3" data-attribute='Weekly'>
            <label for="radio3" class="form-survey__radio">
               <span class="form-survey__radio-text">Weekly</span>
            </label>
            <div class="form-survey__line"></div>

            <input  type="radio" name="frequence" id="radio4" data-attribute='Monthly'>
            <label for="radio4" class="form-survey__radio">
               <span class="form-survey__radio-text">Monthly</span>
            </label>
            <div class="form-survey__line"></div>

            <input type="radio" name="frequence" id="radio5" data-attribute='Once in 2-3 months'>
            <label for="radio5" class="form-survey__radio">
               <span class="form-survey__radio-text">Once in 2-3 months</span>
            </label>
            <div class="form-survey__line"></div>

            <input  type="radio" name="frequence" id="radio6" data-attribute='When I'm free'>
            <label for="radio6" class="form-survey__radio">
               <span class="form-survey__radio-text">When I'm free</span>
            </label>
            <div class="form-survey__line"></div>
            
            <button class="form-survey__button" >Next </button>
          </div> 
       </form>        
    </div>  
  </div>   
 </div>
</div>
</section>
`
const step_2 = ` <section class="survey-step">
  <div class="survey-step__title">
    <h2 class="survey-step__caption">What types of <br/>  products do you <br/> typically buy<br/>  online? <br/> </h2>
  </div>   
    <div class="survey-step__border">
     <form action="form-survey">
        <div class="form-survey__wrapper">
           <label for="radio1" class="form-survey__radio">
              <input class="form-survey__radio-input" type="radio" name="types" id="radio1" data-attribute='Electronics'>
              <span class="form-survey__radio-text">Electronics</span>
           </label>
           <div class="form-survey__line"></div>
           <label for="radio2" class="form-survey__radio">
              <input class="form-survey__radio-input" type="radio" name="types" id="radio2" data-attribute='Smart devices'>
              <span class="form-survey__radio-text">Smart devices</span>
           </label>
           <div class="form-survey__line"></div>
           <label for="radio3" class="form-survey__radio">
              <input class="form-survey__radio-input" type="radio" name="types" id="radio3" data-attribute='Home'>
              <span class="form-survey__radio-text">Home/kitchen appliances</span>
           </label>
           <div class="form-survey__line"></div>
           <label for="radio4" class="form-survey__radio">
              <input class="form-survey__radio-input" type="radio" name="types" id="radio4" data-attribute='Health and beauty'>
              <span class="form-survey__radio-text">Health and beauty</span>
           </label>
           <div class="form-survey__line"></div>
           <label for="radio5" class="form-survey__radio">
              <input class="form-survey__radio-input" type="radio" name="types" id="radio5" data-attribute='Clothing and accessories'>
              <span class="form-survey__radio-text">Clothing and accessories</span>
           </label>
           <div class="form-survey__line"></div>
           <label for="radio6" class="form-survey__radio">
              <input class="form-survey__radio-input" type="radio" name="types" id="radio6" data-attribute='Food and grocery'>
              <span class="form-survey__radio-text">Food and grocery</span>
           </label>
           <div class="form-survey__line"></div>
           <label for="radio7" class="form-survey__radio">
            <input class="form-survey__radio-input" type="radio" name="types" id="radio7" data-attribute='Other'>
            <span class="form-survey__radio-text">Other (please specify) </span>
         </label>
         <div class="form-survey__line"></div>
           <button class="form-survey__button" >Next </button>
         </div> 
      </form>        
   </div>      
  
</section>
`
const step_3 = `<section class="survey-step">
<div class="survey-step__title">
  <h2 class="survey-step__caption">How often do you <br/> shop online?</h2>
</div> </section>
`

function checkedRadio(step, key, class1, class2) {
   $.each($('input[type="radio"]'), function () {
      if ($(this).is(':checked')) {
         data[`${key}`] = $(this).next().text()
         main.html(step);
         body.removeClass(`${class1}`).addClass(`${class2}`)
      }
   })
}

function changeStep() {
   if (body.is('.previewStep')) {
      data.email = $('input[name="email"]').val();

      if (data.email.length !== 0) {
         main.html(step_1);
         body.removeClass('previewStep').addClass('firstStep')
      }
   } else if (body.is('.firstStep')) {
      checkedRadio(step_2, 'question_1', 'firstStep', 'secondStep')
   } else if (body.is('.secondStep')) {
      checkedRadio(step_3, 'question_2', 'secondStep', 'thirdStep')
   }
}

body.on('click', 'button', function (e) {
   e.preventDefault();
   changeStep()
   console.log(data);
})

});

//добавляем в док.текущую дату. в двух местах.
const date =new Date();

let month = date.getMonth(),
    day = date.getDate(),
    year = date.getFullYear();


    const allMonth =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    for ( i=0; i<allMonth.length; i++){
       if (month===i){
          month=allMonth[i]
       }
    }
    let newDate = month+` `+ day +`, `+ year;
  

 let spanData = document.getElementById(`date`);
     spanDataTwo = document.getElementById(`date2`);

     spanData.innerHTML = newDate;
     spanDataTwo.innerHTML = newDate;



// data ={
//    email: '',
//    frequence: '',
//    types: '',
// }

// const step_1 =`<section class="survey-step">
// <div class="survey-step__title">
//   <h2 class="survey-step__caption">How often do you <br/> shop online?</h2>
// </div>
//              <div class="survey-step__border">
//       <form action="form-survey">
//          <div class="form-survey__wrapper">
//             <label for="radio1" class="form-survey__radio">
//                <input class="form-survey__radio-input" type="radio" name="frequence" id="radio1" data-attribute='Daily'>
//                <span class="form-survey__radio-text">Daily</span>
//             </label>
//             <div class="form-survey__line"></div>
//             <label for="radio2" class="form-survey__radio">
//                <input class="form-survey__radio-input" type="radio" name="frequence" id="radio2" data-attribute='Once in 2-3 days'>
//                <span class="form-survey__radio-text">Once in 2-3 days</span>
//             </label>
//             <div class="form-survey__line"></div>
//             <label for="radio3" class="form-survey__radio">
//                <input class="form-survey__radio-input" type="radio" name="frequence" id="radio3" data-attribute='Weekly'>
//                <span class="form-survey__radio-text">Weekly</span>
//             </label>
//             <div class="form-survey__line"></div>
//             <label for="radio4" class="form-survey__radio">
//                <input class="form-survey__radio-input" type="radio" name="frequence" id="radio4" data-attribute='Monthly'>
//                <span class="form-survey__radio-text">Monthly</span>
//             </label>
//             <div class="form-survey__line"></div>
//             <label for="radio5" class="form-survey__radio">
//                <input class="form-survey__radio-input" type="radio" name="frequence" id="radio5" data-attribute='Once in 2-3 months'>
//                <span class="form-survey__radio-text">Once in 2-3 months</span>
//             </label>
//             <div class="form-survey__line"></div>
//             <label for="radio6" class="form-survey__radio">
//                <input class="form-survey__radio-input" type="radio" name="frequence" id="radio6" data-attribute='When I'm free'>
//                <span class="form-survey__radio-text">When I'm free</span>
//             </label>
//             <div class="form-survey__line"></div>
//             <button class="form-survey__button" >Next </button>
//           </div> 
//        </form>        
//     </div>      
  
// </section>

// `
// const step_2 = ` <section class="survey-step">
//   <div class="survey-step__title">
//     <h2 class="survey-step__caption">What types of <br/>  products do you <br/> typically buy<br/>  online? <br/> </h2>
//   </div>   
//     <div class="survey-step__border">
//      <form action="form-survey">
//         <div class="form-survey__wrapper">
//            <label for="radio1" class="form-survey__radio">
//               <input class="form-survey__radio-input" type="radio" name="types" id="radio1" data-attribute='Electronics'>
//               <span class="form-survey__radio-text">Electronics</span>
//            </label>
//            <div class="form-survey__line"></div>
//            <label for="radio2" class="form-survey__radio">
//               <input class="form-survey__radio-input" type="radio" name="types" id="radio2" data-attribute='Smart devices'>
//               <span class="form-survey__radio-text">Smart devices</span>
//            </label>
//            <div class="form-survey__line"></div>
//            <label for="radio3" class="form-survey__radio">
//               <input class="form-survey__radio-input" type="radio" name="types" id="radio3" data-attribute='Home'>
//               <span class="form-survey__radio-text">Home/kitchen appliances</span>
//            </label>
//            <div class="form-survey__line"></div>
//            <label for="radio4" class="form-survey__radio">
//               <input class="form-survey__radio-input" type="radio" name="types" id="radio4" data-attribute='Health and beauty'>
//               <span class="form-survey__radio-text">Health and beauty</span>
//            </label>
//            <div class="form-survey__line"></div>
//            <label for="radio5" class="form-survey__radio">
//               <input class="form-survey__radio-input" type="radio" name="types" id="radio5" data-attribute='Clothing and accessories'>
//               <span class="form-survey__radio-text">Clothing and accessories</span>
//            </label>
//            <div class="form-survey__line"></div>
//            <label for="radio6" class="form-survey__radio">
//               <input class="form-survey__radio-input" type="radio" name="types" id="radio6" data-attribute='Food and grocery'>
//               <span class="form-survey__radio-text">Food and grocery</span>
//            </label>
//            <div class="form-survey__line"></div>
//            <label for="radio7" class="form-survey__radio">
//             <input class="form-survey__radio-input" type="radio" name="types" id="radio7" data-attribute='Other'>
//             <span class="form-survey__radio-text">Other (please specify) </span>
//          </label>
//          <div class="form-survey__line"></div>
//            <button class="form-survey__button" >Next </button>
//          </div> 
//       </form>        
//    </div>      
  
// </section>
// `
// const step_3 = `<section class="survey-step">
// <div class="survey-step__title">
//   <h2 class="survey-step__caption">How often do you <br/> shop online?</h2>
// </div> </section>
// `
// //работа с проверкой email адреса и перекл.на степы
// let body = document.querySelector('.survey__body');
// console.log(body);


// let emailInput = document.querySelector('input[name="email"]'),
//     buttonClick = document.querySelectorAll('button');
//     console.log(buttonClick);

// //     button.forEach( body=> {
// //      body.addEventListener('click','button', function (e) {
// //    e.preventDefault();
   
// //    if (data.email.length !== 0) {
// //       data.email = emailInput.value;
// //       body.innerHTML = step_1;
// //    }
// //  });
// // })

// function radioChecked() {
//    let radioInput = content.querySelectorAll('input[type="radio"]');
//    radioInput.forEach(input => {
//       //и вешаем слуш.событий по клику, чекнутый инпут записать в массив данных
//       input.addEventListener('click', function() { if (input.checked) {
//          data.frequence = input.getAttribute('data-attribute'),
//          data.types = input.getAttribute('data-attribute');        
//       } 
//       })

//    if (input.checked) {
//       data.frequence = input.getAttribute('data-attribute'),
//       data.types = input.getAttribute('data-attribute');      
//    } 
   
 
//  }) 
// } 



// function changeStep() {
//    switch (step) {
//       case 2:
//          body.innerHTML=step_2;  
//          radioChecked();                 
//          break;
//       case 3:
//          body.innerHTML=step_3;  
//          radioChecked();       
//          break;
      
//    }
// }


// buttonClick.addEventListener( 'click', function(e){
//    e.preventDefault();
//    data.email = emailInput.value;

//    if (data.email.length !== 0) {
      
//       body.innerHTML = step_1;
//    }
       
//    //здесь будет ф-ция перекл далее
// })
// console.log(data);