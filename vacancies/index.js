document.getElementById('vacancy-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log('Введені дані:');
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    console.log('');
});
