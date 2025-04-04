let turshaklar = ['Olma', 'gilos', 'nok', 'banan'];

alert(`Длинна массива равна ${turshaklar.length}`);



let confirmation = confirm('Хочешь удалить последний элемент массива?');

if (confirmation == true) {
    turshaklar.pop();
    alert(turshaklar);
} else {
    alert('Последний элемент не удалён');
    alert(turshaklar);
}
