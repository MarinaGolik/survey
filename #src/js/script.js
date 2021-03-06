// const { on } = require("svg-sprite");

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

   
   let dateSpan = $('#date, #dateOnly')
   const monthsAll = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   const date = new Date();
   let day = date.getDate();
   let year = date.getFullYear();
   let months = date.getMonth();

   monthsAll.map((m, i) => (months === i) ? months = m : null)

   const today = `${months} ${day}, ${year}`

   dateSpan.html(today);




   const body = $('.survey__body');
   const main = $('main'); 

   data = {
      email: '',
      question_1: '',
      question_2: '',
      question_2_other:'',
      question_3: '',
      question_3_other:'',
      question_4: '',
      question_4_other:'',
      question_5: '',
      question_5_other:'',
   }



const step_1 =` 
<section class="survey-question">
<div class="container">  
  <div class="survey__body firstStep">
  <div class="survey-step">
   <div class="survey-step__title">
     <h2 class="survey-step__caption">How often do you  shop online?</h2>
   </div>
    <div class="survey-step__border">
      <form class="form-survey" action="" id="formQuest">
         <div class="form-survey__wrapper">

            <input type="radio"  name="often" id="radio1" data-attribute='Daily' required>
            <label for="radio1" class="form-survey__radio">                 
            <span class="form-survey__radiotext">Daily</span>  
            </label>            
            
            <input  type="radio" name="often" id="radio2" data-attribute='Once in 2-3 days'>
            <label for="radio2" class="form-survey__radio">
               <span class="form-survey__radiotext"> Once in 2-3 days</span>
            </label>
           
            <input  type="radio" name="often" id="radio3" data-attribute='Weekly'>
            <label for="radio3" class="form-survey__radio">
               <span class="form-survey__radiotext">Weekly</span>
            </label>
            
            <input  type="radio" name="often" id="radio4" data-attribute='Monthly'>
            <label for="radio4" class="form-survey__radio">
               <span class="form-survey__radiotext">Monthly</span>
            </label>
           
            <input type="radio" name="often" id="radio5" data-attribute='Once in 2-3 months'>
            <label for="radio5" class="form-survey__radio">
               <span class="form-survey__radiotext">Once in 2-3 months</span>
            </label>
            
            <input  type="radio" name="often" id="radio6" data-attribute='When I'm free'>
            <label for="radio6" class="form-survey__radio">
             <span class="form-survey__radiotext">When I'm free</span>
            </label>         

            <span class="error"> </span>

            <button class="form-survey__button" >Next </button>
          </div> 
       </form>        
    </div>  
  </div>   
 </div>
</div>
</section>
`
const step_2 = ` 
<section class="survey-question">
<div class="container">  
  <div class="survey__body secondStep">
  <div class="survey-step">
   <div class="survey-step__title">
     <h2 class="survey-step__caption">What types of products do you typically buy online?</h2>
   </div>
    <div class="survey-step__border">
    <form class="form-survey" action="" id="formQuest">
         <div class="form-survey__wrapper">

            <input type="radio" name="types" id="radio1" data-attribute='Electronics' required>
            <label for="radio1" class="form-survey__radio">                 
            <span class="form-survey__radiotext">Electronics</span>  
            </label>            
           
            <input  type="radio" name="types" id="radio2" data-attribute='Smart devices'>
            <label for="radio2" class="form-survey__radio">
               <span class="form-survey__radiotext"> Smart devices </span>
            </label>
           
            <input  type="radio" name="types" id="radio3" data-attribute='Home/kitchen appliances'>
            <label for="radio3" class="form-survey__radio">
               <span class="form-survey__radiotext">Home/kitchen appliances</span>
            </label>
            
            <input  type="radio" name="types" id="radio4" data-attribute='Health and beauty'>
            <label for="radio4" class="form-survey__radio">
               <span class="form-survey__radiotext">Health and beauty</span>
            </label>
            
            <input type="radio" name="types" id="radio5" data-attribute='Clothing and accessories'>
            <label for="radio5" class="form-survey__radio">
               <span class="form-survey__radiotext">Clothing and accessories</span>
            </label>
           
            <input  type="radio" name="types" id="radio6" data-attribute='Food and grocery'>
            <label for="radio6" class="form-survey__radio">
               <span class="form-survey__radiotext">Food and grocery</span>
            </label>
          
            <input  type="radio" name="types" id="radio7" data-attribute='Other'>
            <label for="radio7" class="form-survey__radio">
               <span class="form-survey__radiotext">Other (please specify) </span>
            </label>
            <span class="error"> </span>
        
            <textarea  class="form-survey__textarea hide" name="textarea" id="othertext2"
            placeholder="Please us know more... " required ></textarea>
          
            <button class="form-survey__button" >Next </button>
            
          </div> 
       </form>        
    </div>  
  </div>   
 </div>
</div>
</section>
`
const step_3 = `
<section class="survey-question">
  <div class="container">  
    <div class="survey__body thirdStep">
    <div class="survey-step">
     <div class="survey-step__title">
       <h2 class="survey-step__caption">What is the best website to buy from?</h2>
     </div>
      <div class="survey-step__border">
      <form class="form-survey" action="" id="formQuest">
           <div class="form-survey__wrapper">
           <input type="radio" name="website" id="radio1" data-attribute='Amazon' required>
              <label for="radio1" class="form-survey__radio">                 
              <span class="form-survey__radiotext">Amazon</span>  
              </label>            
             
              <input  type="radio" name="website" id="radio2" data-attribute='Ikea'>
              <label for="radio2" class="form-survey__radio">
                 <span class="form-survey__radiotext"> Ikea </span>
              </label>
                
              <input  type="radio" name="website" id="radio3" data-attribute='Target'>
              <label for="radio3" class="form-survey__radio">
                 <span class="form-survey__radiotext">Target</span>
              </label>
                
              <input  type="radio" name="website" id="radio4" data-attribute='Best Buy'>
              <label for="radio4" class="form-survey__radio">
                 <span class="form-survey__radiotext">Best Buy</span>
              </label>
                
              <input type="radio" name="website" id="radio5" data-attribute='P.C. Richard & Son'>
              <label for="radio5" class="form-survey__radio">
                 <span class="form-survey__radiotext">P.C. Richard & Son</span>
              </label>
                
              <input  type="radio" name="website" id="radio6" data-attribute='The Home Depot'>
              <label for="radio6" class="form-survey__radio">
                 <span class="form-survey__radiotext">The Home Depot</span>
              </label>
              
              <input  type="radio" name="website" id="radio7" data-attribute='Other'>
              <label for="radio7" class="form-survey__radio">
                 <span class="form-survey__radiotext">Other (please specify) </span>
              </label>
              <span class="error"> </span>
                
              <textarea  class="form-survey__textarea hide" id="othertext3"
              placeholder="Please us know more... " required ></textarea>
              
              <button class="form-survey__button" >Next </button>
            </div> 
         </form>        
      </div>  
    </div>   
   </div>
  </div>
  </section>
`
const step_4 =`
<section class="survey-question">
<div class="container">  
  <div class="survey__body fourthStep">
  <div class="survey-step">
   <div class="survey-step__title">
     <h2 class="survey-step__caption">What attracts you to buy in this online store?</h2>
   </div>
    <div class="survey-step__border">
    <form class="form-survey" action="" id="formQuest">
         <div class="form-survey__wrapper">

           <input type="radio" name="attracts" id="radio1" data-attribute='Good quality' required>
            <label for="radio1" class="form-survey__radio">                 
            <span class="form-survey__radiotext">Good quality</span>  
            </label>            
            
            <input  type="radio" name="attracts" id="radio2" data-attribute='Fast shipping'>
            <label for="radio2" class="form-survey__radio">
               <span class="form-survey__radiotext"> Fast shipping</span>
            </label>
            
            <input  type="radio" name="attracts" id="radio3" data-attribute='Regular sales'>
            <label for="radio3" class="form-survey__radio">
               <span class="form-survey__radiotext">Regular sales</span>
            </label>
          
            <input  type="radio" name="attracts" id="radio4" data-attribute='Loyalty programs '>
            <label for="radio4" class="form-survey__radio">
               <span class="form-survey__radiotext">Loyalty programs</span>
            </label>
           
            <input type="radio" name="attracts" id="radio5" data-attribute='Availability of goods in stock'>
            <label for="radio5" class="form-survey__radio">
               <span class="form-survey__radiotext">Availability of goods in stock</span>
            </label>
            
            <input  type="radio" name="attracts" id="radio6" data-attribute='Vouchers'>
            <label for="radio6" class="form-survey__radio">
               <span class="form-survey__radiotext">Vouchers</span>
            </label>
          
            <input  type="radio" name="attracts" id="radio7" data-attribute='Other'>
            <label for="radio7" class="form-survey__radio">
               <span class="form-survey__radiotext">Other (please specify) </span>
            </label>
            <span class="error"> </span>
          
            <textarea  class="form-survey__textarea hide" id="othertext4" 
            placeholder="Please us know more... " required ></textarea>
            
            <button class="form-survey__button" >Next </button>
          </div> 
       </form>        
    </div>  
  </div>   
 </div>
</div>
</section>
`
const step_5 = `
<section class="survey-question">
<div class="container">  
  <div class="survey__body fifthStep">
  <div class="survey-step">
   <div class="survey-step__title">
     <h2 class="survey-step__caption">How much do you spend on online shopping monthly?</h2>
   </div>
    <div class="survey-step__border">
    <form class="form-survey" action="" id="formQuest">
         <div class="form-survey__wrapper">

            <input type="radio" name="price" id="radio1" data-attribute='Less than 100 USD' required>
            <label for="radio1" class="form-survey__radio">                 
            <span class="form-survey__radiotext">Less than 100 USD</span>  
            </label>            
           
            <input  type="radio" name="price" id="radio2" data-attribute='$100 - $250'>
            <label for="radio2" class="form-survey__radio">
               <span class="form-survey__radiotext"> $100 - $250 </span>
            </label>
          
            <input  type="radio" name="price" id="radio3" data-attribute='$250 - $500'>
            <label for="radio3" class="form-survey__radio">
               <span class="form-survey__radiotext">$250 - $500</span>
            </label>
            
            <input  type="radio" name="price" id="radio4" data-attribute='$500 - $1000 '>
            <label for="radio4" class="form-survey__radio">
               <span class="form-survey__radiotext">$500 - $1000</span>
            </label>
           
            <input type="radio" name="price" id="radio5" data-attribute='$1000 - $2000'>
            <label for="radio5" class="form-survey__radio">
               <span class="form-survey__radiotext">$1000 - $2000</span>
            </label>
            
            <input  type="radio" name="price" id="radio6" data-attribute='More than 2000 USD'>
            <label for="radio6" class="form-survey__radio">
               <span class="form-survey__radiotext">More than 2000 USD</span>
            </label>
            
            <input  type="radio" name="price" id="radio7" data-attribute='Other'>
            <label for="radio7" class="form-survey__radio">
               <span class="form-survey__radiotext">Other (please specify) </span>
            </label>
            <span class="error"> </span>
            
            <textarea  class="form-survey__textarea hide" id="othertext5" 
            placeholder="Please us know more... " required ></textarea>
            
            <button class="form-survey__button" >Next </button>
          </div> 
       </form>        
    </div>  
  </div>   
 </div>
</div>
</section>
`
const step_6 =` 
<section class="survey-end">
<div class="container">  
   <div class="survey__body endStep">
       <div class="survey-endstep">
               <h2 class="survey-endstep__title">Please wait while we are processing your answers</h2>         
           <div class=" survey-endstep__wrapper">
              <div class=" survey-endstep__processing">
                <div class=" survey-endstep__progressbar">
                <div id="loadingProgressG">
                <div id="loadingProgressG_1" class="loadingProgressG" value="0" max="100"></div> </div>
                  </div>    
                     <p class="survey-endstep__text">Answers submitted.....</p>
                     <p class="survey-endstep__text">Ma tching best offers for you......</p>                
               </div>   
              <div class="survey-endstep__picture">
               <img src="./img/processing.png" alt="process" height="272" width="407">
             </div>
         </div>                       
      </div>            
   </div>
</div>     
</section>
`
const step_7 =`
<section class="finish">
   <div class="container">
      <div div class="finish__body">
<div class="survey-finish"> 
   <h2 class="survey-finish__title">Thank you for completing the survey!</h2>    
   <div class="survey-finish__wrapper">
      <div class="survey-finish__about">
        <p class="survey-finish__text"> <span>Rewarded Web Shopper</span> Rewarded Web Shopper Survey are grateful for your participation in the survey. 
           Because you helped provide vital consumer data, we'd matched few exclusive offers for you,
           depending on your answers</p>
        <p class="survey-finish__text"> Please pay attention, that these offers are currently <span>in extremely high demand,</span>  and if you leave this page without 
           confirmation accepting the offer, we have no choice but to give another random visitor a chance to participate in our surveys rewards program.</p>
      </div>
            <div class="survey-finish__picture">
        <img src="./img/finish.png" alt="finish" height="274" width="407">
      </div>
   </div>                        
  </div> 
</div>
</div>
</section> 
<section class="publicity">
<div class="container">
   <div class="publicity__body">
   <div class="publicity__border">
   <div class="publicity__poster"> 
   <div class="publicity__img">
      <img src="./img/poster1.png" alt="poster1" width="386" height="354">
   </div>  
   <div class="publicity__content">
      <h3  class="publicity__title"> SlimTone with BHB is here to stay because of the insurmountable 
         success people are having losing up to 1lb of fat per day! </h3>
      <p class="publicity__text"> SlimTone dual action formula is made with
          herbal extracts and active botanicals, SlimTone is completely safe 
          to use and is free from any harmful side effects. </p>   
       <p class="publicity__price"> <span class="red">Reg Price $119.97 </span>                    
         <span class="green"> $0.00 - Pay Only S/H</span> <br/>Shipping: $1.95
         <br/>Left in Stock:(1) </p>
       </p>
       <button class="publicity__button"> Claim reward </button>
   </div>                
</div>  
</div>    
      <div class="publicity__border">
      <div class="publicity__poster"> 
      <div class="publicity__img">
         <img src="./img/poster2.png" alt="poster2" width="386" height="354">
      </div>
      <div class="publicity__content">
         <h3 class="publicity__title"> MIGHTY LEAF - ENJOY BENEFITS OF MEDICAL CANNABIS </h3>
         <p class="publicity__text"> Mighty Leaf includes powerful hemp extract
             and is filtered to remove any THC compounds (which cause the high), 
             harnessing maximum therapeutic benefits of Cannabis. Legal in all 50 states
            <br/> Mighty Leaf is recommended by doctors across USA
             </p>   
          <p class="publicity__price"> <span class="red">Reg Price $119.97 </span>                   
            <span class="green"> $0.00 - Pay Only S/H</span> <br/>Shipping: $1.95
            <br/>Left in Stock:(1) </p>
          </p>
          <button class="publicity__button"> Claim reward </button>
      </div>                
   </div>     
</div>
   </div>
</div>
</section>
<section class="review">
<div class="container">
   <div div class="review__body">
      
         <div class="review__box">
            <div class="review__photo"> 
               <img src="./img/photo1.png" alt="Frank Taylor" height="100" width="100"  >
            </div>
            <div class="review__about">
               <h2 class="review__name"> Frank Taylor </h2>
               <p class="review__text"> I'm generally pretty 'meh' about doing surveys, 
                  but I thought I'd give this one a shot. I have to say, it was really 
                  quick and easy! I mean, within a few minutes and just a few simple questions,
                   you're giving me the option to choose between four unbeatable gifts. I don't
                  know how you do it, but I'm all in! Thanks for the teeth whitener, my teeth
                  look fantastic!  </p>
               <p class="review__data"> June 26, 2021 at 8:47 am </p>
            </div>
         </div>        
         <div class="review__box">
            <div class="review__photo"> 
               <img src="./img/photo2.png" alt="Emily Philips" height="100" width="100"  >
            </div>
            <div class="review__about">
               <h2 class="review__name">Emily Philips </h2>
               <p class="review__text"> The survey was quick and easy. I wouldn't mind doing another one :)</p>
               <p class="review__data"> June 26, 2021 at 8:47 am </p>
            </div>
         </div>
     
         <div class="review__box">
            <div class="review__photo"> 
               <img src="./img/photo3.png" alt="Katie Webb" height="100" width="100"  >
            </div>
            <div class="review__about">
               <h2 class="review__name"> Katie Webb </h2>
               <p class="review__text"> I had no use for the weight-loss product, and decided to give it to my friend.
                  And believe it or not- she lost like 14 pounds in less than 2 weeks! Now I want the same one for myself! </p>
               <p class="review__data"> June 26, 2021 at 8:47 am </p>
            </div>
         </div>     
         <div class="review__box">
         <div class="review__photo"> 
            <img src="./img/photo4.png" alt="Julia Stafford" height="100" width="100"  >
         </div>
         <div class="review__about">
            <h2 class="review__name"> Julia Stafford </h2>
            <p class="review__text"> I was bored so I did the survey, but I really liked the skin care cream, it worked really well! </p>
            <p class="review__data"> June 26, 2021 at 8:47 am </p>
         </div>
      </div>  
      <div class="review__box">
      <div class="review__photo"> 
         <img src="./img/photo5.png" alt="Thomas Harber" height="100" width="100"  >
      </div>
      <div class="review__about">
         <h2 class="review__name"> Thomas Harber </h2>
         <p class="review__text"> When your five question survey popped up I thought there was no way the rewards were actually valued 
         over $100. That's just being honest. But then I got to the end and got to select it and I thought, 'This is the greatest survey 
         in the history of surveys!' Seriously though, I don't know how the data you collect helps you, or how you can afford to offer 
         such great products, but I'm happy to take them off your hands. Let me know if you need another one done! </p>
         <p class="review__data"> June 26, 2021 at 8:47 am  </p>
      </div>
   </div>  
   </div>
</div>
</section> 
 
 `
 
 //?????????????????? email ???? ?????????????? ??????????????
  $('#formStart').validate({
      rules:{
          email: {
           required: true,
            email: true
         },
      },
       messages: {
         email: {
           required: 'Please need your email address',
           email: 'E-mail format should be name@domain.com'
         }        
       },
       submitHandler: function(event) {
         event.preventDefault()
       }
      })
      
function validStep() {          
     const input =$('input[type="radio"]'); 
         $('#formQuest').on('click', function(){        
         $.each($(input), function () {
            if ($(this).is(':checked')){ 
               $('#formQuest').removeClass('invalid').addClass('valid')
               $('.error').text('')
              return false;        
            }
             else {      
              $('#formQuest').addClass('invalid')
              $('.error').text('Please make your choice')
              //return true; 
         } 
     }) 
   })
}


  
function checkedRadio(step, key, class1, class2) {
   $.each($('input[type="radio"]'), function () {
      if ( $(this).is(':checked') && $('input:checked').attr('data-attribute') !== 'Other'){
         data[`${key}`] = $(this).attr('data-attribute');
         main.html(step);
         body.removeClass(`${class1}`).addClass(`${class2}`)
        }  
        else {
           textareaOn();
        } 
   })
}
//?????????????????? ?? ???????????????????? ???????????????????? ???????? textarea ???? ????????????
function textareaOn(){  
   const textarea = $('.form-survey__textarea');   
   $.each($('input[type="radio"]'), function() {
     $(this).on('click', ()=>{
         if($(this).attr('data-attribute') == 'Other'){
            textarea.removeClass('hide');
            textarea.addClass('invalid')
           textValue()         
          } else {
            textarea.addClass('hide');
                                  
          }         
      })     
   })
}

//?????????????????? ???????????????? ?? textarea, ???????? ?????? ??????????????????, ???????????????? ???????????? ?? ????????????
function  textValue(){   
  $('.form-survey__textarea').on('input', function(){
   let textareas = $('textarea');         
   $.each (textareas, function() {
      let textarea=$(this).val();              
         switch ($(this).attr('id')) {
           case 'othertext2':  
                  if($(this).val() !== 0){
                    textareas.removeClass('invalid').addClass('valid') 
                    data.question_2_other= $(this).val();                  
                    break;
                 }                     
          
            case 'othertext3':                     
                 if($(this).val() !== 0){
                    textareas.removeClass('invalid').addClass('valid') 
                    data.question_3_other = $(this).val(); 
                    break;
                 }                 
                     
            case 'othertext4':                     
                 if($(this).val() !== 0){
                    textareas.removeClass('invalid').addClass('valid') 
                    data.question_4_other = $(this).val();
                    break;   
                 }        
                   
            case 'othertext5':                     
                 if($(this).val() !== 0){
                    textareas.removeClass('invalid').addClass('valid') 
                    data.question_5_other= $(this).val(); 
                    break;  
                 }                         
             }             
        }) 
     })  
 }  

function changeOther() { 
 
   if (body.is('.secondStep')){
       main.html(step_3);
       body.removeClass('secondStep').addClass('thirdStep');       
   }
   else if (body.is('.thirdStep')){    
      main.html(step_4);
      body.removeClass('thirdStep').addClass('fourthStep');
   }
   else if (body.is('.fourthStep')){
      main.html(step_5);
      body.removeClass('fourthStep').addClass('fifthStep');
   }
   else if (body.is('.fifthStep')){
     
      if($('textarea').hasClass('valid')){
         submitForm();
      } 
         main.html(step_6);
         body.removeClass('fifthStep').addClass('endStep');
       
   }
}


function changeStep() {   
   if (body.is('.previewStep')) {          
      data.email = $('input[name="email"]').val();      
      if($('input[name="email"]').hasClass('valid') ) {
         main.html(step_1);
         body.removeClass('previewStep').addClass('firstStep');
      } 
   }
   else if (body.is('.firstStep') ){   
      textareaOn();  
      textValue()             
      checkedRadio(step_2, 'question_1', 'firstStep', 'secondStep');           
   } 
   else if (body.is('.secondStep')) {  
      textareaOn();
      textValue() 
      checkedRadio(step_3, 'question_2', 'secondStep', 'thirdStep'); 
   }
   else if (body.is('.thirdStep')) {  
      textareaOn();
      textValue()  
      checkedRadio(step_4, 'question_3', 'thirdStep', 'fourthStep');     
   }
   else if (body.is('.fourthStep')) {  
      textareaOn();
      textValue()     
      checkedRadio(step_5, 'question_4', 'fourthStep', 'fifthStep');      
   } 

   else if (body.is('.fifthStep')) {   

      if($('#formQuest').hasClass('valid')){ 
      submitForm();     
      }     
      textareaOn();
      textValue() 
      checkedRadio(step_6, 'question_5', 'fifthStep', 'endStep'); 
      
   }  
 }

 

main.on('click', 'button', function () {    
   if ($('textarea').hasClass('valid')){
      changeOther()
   }     
   changeStep();   
   validStep();
})




// $(document).on('ajaxSend', function(){
//    showProgress(20)
// })
// .on('ajaxStop', function(){
//    showProgress()
// })


let submitForm = async () => {   
  
   try {     
      await $.ajax({
         url: 'http://localhost:8000/posts',
         type: 'POST',
         data = {
            email: data.email,
            question_1: data.question_1,
            question_2: data.question_2,
            question_2_other:  data.question_2_other,
            question_3: data.question_3,
            question_3_other:  data.question_3_other,
            question_4: data.question_4,
            question_4_other:  data.question_4_other,
            question_5: data.question_5,
            question_5_other:  data.question_5_other,
         },
         beforeSend: function(){
          $('#loadingProgressG').show()
      }
    
      })
      
      
   } catch (error) {
      console.error(error);
      console.log(data);    
   }
   finally {
      main.html(step_7)
   }
}

});

//?????????????????? ?? ??????.?????????????? ????????. ?? ???????? ????????????. ?????? ??-??

// const date =new Date();

// let month = date.getMonth(),
//     day = date.getDate(),
//     year = date.getFullYear();


//     const allMonth =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     for ( i=0; i<allMonth.length; i++){
//        if (month===i){
//           month=allMonth[i]
//        }
//     }
//     let newDate = month+` `+ day +`, `+ year;
  

//  let spanData = document.getElementById(`date`);
//      spanDataTwo = document.getElementById(`date2`);

//      spanData.innerHTML = newDate;
//      spanDataTwo.innerHTML = newDate;


// function showProgress(time){
//    let start = 0;
//    let progressElement = document.querySelector('progress');
//    console.log(progressElement);
//    console.log(1);
//    let intervalId = setInterval( function(){
//       if (start > 100){
//          clearInterval(intervalId);
//          //userProgressCallBack();
//       }
//       else{
//         progressElement.value = start;
//       }
//       start ++;       
//    },time);
// }