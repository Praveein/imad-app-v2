var button=document.getElementById("counter");

button.onclick=function(){
     //make request to the counter endpoint
     
     //capture the endpoint and store it in a variable
     var request=new XMLHttpRequest();
     request.open("GET",'http://praveein.imad.hasura-app.io/counter',true);
     request.send(null);
     request.onreadystatechange=function(){
         if(request.readystate===XMLHttpRequest.DONE){
             if(request.status===200){
             var counter= request.responseText;
             var span=document.getElementById('count');
             span.innerHTML=counter.toString();
             }
     }
     };
     
     //Render the variable in 
    
     
};