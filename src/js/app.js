// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// const formInput = document.querySelector('#movie-title');


// // ul.append(li);
// // li.innerText = "Spider Man";
// // li.classList.add("new_list");

// const moviesTitle = ['Black tha', 'Blacklist', 'Mr Robot', 'Despicable me', 'In time'];


// for(i = 0; i < moviesTitle.length; i++){
//     ul.append(li);
//     console.log(moviesTitle[i]);
//     li.innerText = moviesTitle[i];
//     li.classList.add("new_list");
// }


const bodyStyle = document.getElementsByTagName('body');

const formInput = document.querySelector('#email');

const popup = document.querySelector('.pop-up');

const popTitle = document.querySelector('#pop-title');

const popText = document.querySelector('#pop-text');


const btnAction = document.getElementById('btn-action');



function regEmail(){
    if(formInput.value === ""){
        popTitle.innerHTML = 'ERROR';
        popText.innerHTML = 'Invalid Email Address, Please input a valid Email address!';
        btnAction.innerHTML = 'Try again';
        popup.style.display = 'flex';
        popup.style.opacity = '1';
    }
    else{
        popTitle.innerHTML = 'Welcome to 4kit Community';
        popText.innerHTML = "Thank you for joining us! We can't wait to share what we have planned for you. A confirmation email has been sent to " + formInput.value;
        btnAction.innerHTML = "Thank you";
        popup.style.display = 'flex';
        popup.style.opacity = '1';
        console.log(formInput.value);
    }
}

function closePopUp(){
        popup.style.display = 'none';
        popup.style.opacity = '0';
}