document.querySelectorAll('.rating-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Deselect all buttons in the same group
        const siblingButtons = this.closest('.ratings').querySelectorAll('.rating-btn');
        siblingButtons.forEach(btn => btn.classList.remove('selected'));

        // Select the clicked button
        this.classList.add('selected');
    });
});

document.getElementById('submit-btn').addEventListener('click', function () {
    const feedback = document.getElementById('additional-feedback').value;
    const selectedRatings = [];

    document.querySelectorAll('.ratings').forEach(group => {
        const selectedButton = group.querySelector('.rating-btn.selected');
        if (selectedButton) {
            selectedRatings.push(selectedButton.textContent);
        } else {
            selectedRatings.push('Nincs kiválasztva');
        }
    });

    console.log('Kiválasztott értékelések:', selectedRatings);
    console.log('További visszajelzés:', feedback);

    alert('Köszönjük a visszajelzést!');
});


