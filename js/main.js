
$(document).ready(()=>{
  let score=0
  let questions = 0

  fetch("questions.json").then(results=>results.json()).then(data=>loadQuestions(data))
    
    $('#getAnswers').click(e=>{
       e.preventDefault()
        $('li').each((li)=>{
            
            $("input[name='question"+li+"']").each(function() {
                if( this.value == "correct" &&  this.checked==true ){
                    score+=1    
                }
                
                
             });
        
        })

       $("#page").html('<h1 class="text-center">Your Score is '+score+' correct out of '+questions+' questions </h1>')
       $("#page").append(`<h1 class="text-center">${(score/questions)*100}%</h1>`)
       $("#page").append(`<h1 class="text-center">${(score/questions)*100}%</h1>`)   
    })


    const loadQuestions= data=>{
        $("ol").html(
           data.map((data,index)=>`<li>${data.question} ${loadAnswerOptions(data.answers,index)} </li>`).join("")
        ) 
        questions= $("li").length                  
    }

    const loadAnswerOptions = (answers,index)=>{
                            return answers.map((item,id)=>`<div class="form-check">
                            <input class="form-check-input" type="radio" name="question${index}"  value="${item.correct==true?"correct":"wrong"}" id="question1${id}">
                                <label class="form-check-label" for="question1${id}">
                                ${item.answer}
                                    </label>
                            </div>`).join("")
        
    } 
               
})





                   

