function sumRange(from, to) {
    let sum = 0

    for (let i = from; i <= to; i++) {
        sum += i
    }
    return sum
}
sumRange(5, 8)
26
function sumUserRange() {
    const min = +prompt('Введіть мінімальне число діапазону', '0')
    const max = +prompt('Введіть максимальне число діапазону', min + 10)
    alert('Сума чисел в заданому діапазоні ' + sumRange(min, max))
}
sumUserRange()