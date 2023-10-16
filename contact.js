//url of the deployed backend API
const URL_heroku_backend="https://honna-portfolio-contact-api.herokuapp.com/user/contact";

const container=document.querySelector('#container');
const submit=document.querySelector('#submit');
const result=document.querySelector('#result');
const error=document.querySelector('#error');

submit.addEventListener('click',function(e){
    e.preventDefault();

   const work=document.getElementById('work');
    const date=new Date();
    //data that has to be send to API/DB
    const data={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        work:work.options[work.selectedIndex].value,
        message:document.getElementById('message').value,
        time:date.toString()
    }
    //Creating a object that contain data,header and body of request
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }
   //sending to URL
    fetch(URL_heroku_backend,options)
    .then(res=>{
        console.log(res);
        if(res.status===201){
             setTimeout(()=>{
                window.location.replace("./index.html");
            },4000);

            return result.innerHTML="Response /Information Saved"
        }
        else{
            setTimeout(()=>{
                return error.innerHTML="";
            },4000);
            return error.innerHTML="Unable to save Information(check for repetation of mail Id)";
        }
    })
    .catch(err=>{
        console.error(err);
        err.innerHTML="Unable to save Information(check for repetation of mail Id)"
    })
})



