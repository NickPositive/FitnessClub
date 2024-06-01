document.getElementById('vacancy-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо відправку форми

    const formData = new FormData(event.target);
    console.log('Введені дані:');
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    console.log(''); // Додаємо пусте поле для відділення минулих повідомлень
});
