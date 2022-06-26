window.onload = function () {
  this.addEventListener();
}

addEventListener = function () {
  const signInButton = document.getElementsByClassName('sign-in')[0];
  const signUpButton = document.getElementsByClassName('sign-up')[0];
  
  signUpButton.addEventListener('click', () => {
    const signInForm = document.getElementsByClassName('form-container')[0];
    signInForm.classList.add('active');
    document.body.classList.add('active');
  });
  
  signInButton.addEventListener('click', () => {
    const signInForm = document.getElementsByClassName('form-container')[0];
    signInForm.classList.remove('active');
    document.body.classList.remove('active');
  });
}
