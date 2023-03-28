import swal from 'sweetalert'
// update for index1.01.js I added two modals one for the passsword stregth check and the other one is for the user registeration success and confirming email was sent




let errorCount = [0, 0, 0, 0] // each field has it's flag example : username's flag is errorCount[0] we will check at the end if the 4 flags is set to 0 means there is no errors and the form will be submitted :)



const setError = (element, message) => {
    const inputControl = element.parentElement // access the parent element (<div class="input-control">)to add the class .error to it  so for example if the error in the username section the div of the username only will get affected and so on
    const errorValue = inputControl.querySelector('.error')

    inputControl.classList.add('error')
    inputControl.classList.remove('success')
    errorValue.innerText = message
}
const setSuccess = (element) => {
    const inputControl = element.parentElement
    const errorValue = inputControl.querySelector('.error')

    inputControl.classList.add('success')
    inputControl.classList.remove('error')
    errorValue.innerText = ''

}


const isTheEmailValid = (email) => {
    const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    return re.test(email)
}

const passwordStrengthCheck = (password) => {
    const re = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/) // this needs an updated password with slashes (/ ? ) dosen't work
    return re.test(password) // returns true if the values of the regex exists and false if not 
}





export const validateInputs = (username, password, email) => {
    const usernameValue = username.value.trim()
    const passwordValue = password.value.trim()
    // const passwordConfirmValue = passwordConfirm.value.trim()
    const emailValue = email.value.trim()
    let flag = false

    function first() {
        if (usernameValue === '') {
            setError(username, 'Username is required!')
            errorCount[0] = 1
        } else {
            setSuccess(username)
            errorCount[0] = 0
        }

        if (passwordValue === '') {
            setError(password, 'Password is required!')
            errorCount[1] = 1
        } else if (passwordValue.length < 8) {
            setError(password, 'Password have to be 8 chars at least')
            errorCount[1] = 1
        } else if (passwordStrengthCheck(passwordValue) === false) {
            setError(password, 'at least 1 lowercase char,uppercase char,number,special char')
            errorCount[1] = 1
            // alert('Password must contain at least 1 lowercase ,1 uppercase,a number and a special char')
            swal({
                title: 'Registeration Error!',
                text: "Password must contain at least 1 lowercase ,1 uppercase,a number and a special char",
                icon: 'warning',
                buttons: false,
                timer: 10000
            });

        } else {
            setSuccess(password)
            errorCount[1] = 0
        }

        /**@this in case I wanted to do a password confirm section but I don't need it for now */
        // if(passwordConfirmValue === ''){
        //     setError(passwordConfirm, 'Password is required!')
        //     errorCount[2] = 1

        // }else if(passwordConfirmValue !== passwordValue) {
        //     setError(passwordConfirm, "Password dosen't match")
        //     errorCount[2] = 1

        // }else {
        //     setSuccess(passwordConfirm)
        //     errorCount[2] = 0
        // }

        if (emailValue === '') {
            setError(email, 'Email is required!')
            errorCount[3] = 1

        } else if (isTheEmailValid(emailValue) === false) {
            setError(email, "Email address is not valid!")
            errorCount[3] = 1

        } else {
            setSuccess(email)
            errorCount[3] = 0
        }
    }
    first()

    const errorCountCheck = errorCount.reduce(((sum, num) => sum + num), 0) // this function will return the sum of the array of errors when all the flags are off only will performe and continue
    if (errorCountCheck === 0) {
        swal({
            title: "Success!",
            text: "Welcome to LinkedIn, let's get started!",
            icon: "success",
            closeModal: false,
        }).then(() => {
            // console.log('validated')
            flag = true
        });
        // swal.setActionValue({ confirm: setTimeout(() => {
        //     form.submit()
        // }, 5000) })
        return true
    }
    else {
        console.log('There is ERRORS!')
        console.log(errorCountCheck, errorCount)
    }

    if (flag) {
        return true
    }
}

