    // step-1: add click event handler with the submit button
    document.getElementById('btn-submit').addEventListener('click', function(){
     // steep-2: get the email address inside the email input field
    //  always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // step-3:get passswordnode
    // 3.a:
    // 3.b:
    // 3.c:
    const passwordField = document.getElementById('user-password');
    const passsword = passwordField.value;
    // console.log( email, passsword);

    // do not verify email
    // step-4: verify email and password
    if(email === 'shohan@gmail.com' && passsword === 'asd'){
      // console.log('valid user');
      window.location.href = 'bank.html';
    }
    else{
      alert('invalid user');}

    })