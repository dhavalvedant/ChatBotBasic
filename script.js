$(document).ready(function(){
 
    var triger=0;  
    $('#submit').click(function(){
        triger++;
    
       
        var select='<select id="select" style="cursor:pointer""><option value="1">Web Development</option><option value="2">App Development</option><select><hr>'
        var text=$('#text').val();
        if(triger==1){
            
            $('.displayauto').append("<p> Welcome",text,"How can I help you?</p>",select);
        
        };
        $('#select').change(function(){
            var selected=$('#select option:selected').val();
            if(selected==1){
                $('.displayauto').append("<br><br> What kind of dynamic Website you want","<br><br>",'<select style="cursor:pointer;" id="select2"><option value="1">Startup</Option><option value="2">Business</option><option value="3">Enterprises</option></select>');

            }
            else{
                $('.displayauto').append("<br><br>What kind of dynamic Application you want","<br><br>",'<select style="cursor:pointer;" id="select2"><option value="1">Startup</Option><option value="2">Business</option><option value="3">Enterprises</option></select>');

            }
    
        })

        $('.displayauto').after(function(){
        $('#displayuser ').append("<h1>",text,"</h1>","<hr>");
        });
      

    });
});
