
document.getElementById('form-submit').addEventListener('click', function(){
    let name = document.getElementById('exampleInputName').value;
    let email = document.getElementById('exampleEmail').value;
    let message = document.getElementById('exampleMessage').value;

    document.getElementsById('name-error').innerText = '' ;
    document.getElementsById('email-error').innerText = '';


    if(name == ''){
        document.getElementsById('name-error').innerText = 'Name is required';
    }
    else if(email == ''){
        document.getElementsById('email-error').innerText = 'Email is required';
    }
    else if(message == ''){
        document.getElementsById('message-error').innerText = "";
    }
    else{
        alert('submitted');
    }
});