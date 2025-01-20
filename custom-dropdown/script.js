function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('open');
}

function selectOption(event) {
    const selectedOption = event.target.innerText;
    const dropdownButton = document.querySelector('.dropdown-button');
    dropdownButton.innerText = selectedOption;

    const options = document.querySelectorAll('.dropdown-item');
    options.forEach(option => {
        option.classList.remove('selected');
    });

    event.target.classList.add('selected');
    toggleDropdown();
}

document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.dropdown-item');
    options.forEach(option => {
        option.addEventListener('click', selectOption);
    });

    const dropdownToggle = document.querySelector('.dropdown-button');
    dropdownToggle.addEventListener('click', toggleDropdown);
});