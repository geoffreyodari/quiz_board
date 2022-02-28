// $('td[name="tcol1"]')   // Matches exactly 'tcol1'
// $('td[name^="tcol"]' )  // Matches those that begin with 'tcol'
// $('td[name$="tcol"]' )  // Matches those that end with 'tcol'
// $('td[name*="tcol"]' )  // Matches those that contain 'tcol'


$(document).ready(()=>{
  let score=0
    
    $('#getAnswers').click(e=>{
       e.preventDefault()
        $('li').each((li)=>{
            
            $("input[name='question"+li+"']").each(function() {
                if( this.value == "correct" &&  this.checked==true ){
                    score+=1    
                }
                
                
             });
        
        })

       $("#page").html('<h1 class="text-center">Your Score is '+score+'</h1>')  
    })
               
})
