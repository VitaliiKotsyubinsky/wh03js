function getAgeGroup(age) {
    if (age < 12) return 'child'
    if (age < 18) return 'teenager'
    if (age < 60) return 'adult'
    return 'senior'
}
function getUserAgeGroup() {
    let age
    do {
        age = +prompt('Input your age', 23)
    } while (!(age > 0) || !(age < 120))
    alert(getAgeGroup(age))
}
getUserAgeGroup()