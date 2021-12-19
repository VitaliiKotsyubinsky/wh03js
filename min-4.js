alert('Введіть 2 числа, а я знайду найбільший спільний дільник.')
const x = +prompt('Введіть перше число')
const y = +prompt('Введіть друге число')
function NOD(x, y) {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}
alert(NOD(x, y));