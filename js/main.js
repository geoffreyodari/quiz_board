
$(document).ready(()=>{
  let score=0
  let questions = 0

  fetch("./js/questions.json").then(results=>results.json()).then(data=>loadQuestions(data))
    
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
       $("#page").append(`<h1 class="text-center">You are ${(score/questions)*100}% Correct</h1>`)
       $("#page").append(rating((score/questions)))   
    })


    const loadQuestions= data=>{
                                    $("ol").html(
                                    data.map((data,index)=>`<li>${data.question} ${loadAnswerOptions(data.answers,index)} </li>`).join("")
                                    )
                                    //get the number of question 
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





  const rating = (value)=>{
      if(value<0.5){
            return '<h1 class="text-center text-danger">You have performed poorly</h1>'
      }

      if(value>=0.5 && value< 0.8){
        return '<h1 class="text-center text-warning">You have performed fairly</h1>'
      }

      if(value>=0.8){
        return '<h1 class="text-center text-success">You have performed excelently</h1>'
      }
  }                

