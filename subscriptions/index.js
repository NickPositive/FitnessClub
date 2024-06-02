document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalContentH3 = document.getElementById('modal-h3');
    const modalContentH2 = document.getElementById('modal-h2');
    const closeBtn = document.querySelector('.close');
    const buyButtons = document.querySelectorAll('.card .btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const card = button.closest('.card');
            const h3Content = card.querySelector('h3').innerText;
            const h2Content = card.querySelector('h2').innerText;

            modalContentH3.innerText = h3Content;
            modalContentH2.innerText = h2Content;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    const form = document.querySelector('#modal form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const modalH3 = modalContentH3.innerText;
        const modalH2 = modalContentH2.innerText;

        console.log('Інформація з карки:');
        console.log('Термін', modalH3);
        console.log('Вартість:', modalH2);
        console.log('Ім\'я:', name);
        console.log('Номер телефону:', phone);
        console.log('');

        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';

        modal.style.display = 'none';
    });
});
