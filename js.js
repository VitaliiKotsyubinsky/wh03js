let userAge = prompt('enter age')
if (userAge < 0 || userAge <= 12) {
    alert('child')
} else if (userAge < 12 && userAge < 18) {
    alert('student')
} else if (userAge > 18 && userAge <= 60) {
    alert('adult')
} else if (userAge > 60) {
    alert('old')
} else {
    alert('please enter correct number')
}
