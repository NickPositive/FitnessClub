document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContentH2 = document.getElementById('modal-h2');
    const closeBtn = document.querySelector('.close');
    const cardLinks = document.querySelectorAll('.card-container .card');

    cardLinks.forEach(card => {
        card.addEventListener('click', (event) => {
            event.preventDefault();
            const h2Content = card.querySelector('h2.name').innerText;

            modalTitle.innerText = 'Записатись до:';
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
        const modalH2 = modalContentH2.innerText;

        console.log('Запис до тренера:');
        console.log('Тренер:', modalH2);
        console.log('Ім\'я:', name);
        console.log('Номер телефону:', phone);
        console.log('');

        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';

        modal.style.display = 'none';
    });
});
