//SCRIPT FOR HAMBURGER MENU
document.addEventListener('DOMContentLoaded', function () {
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.getElementById('mobile-navigation');

hamburger.addEventListener('click', function () {
    nav.classList.toggle('show-nav');
});
});


//SCRIPT FOR DROPDOWN MENU
document.addEventListener('DOMContentLoaded', function() {
    const dropdownWrapper = document.querySelector('.dropdown-wrapper');
    const dropdownDisplay = dropdownWrapper.querySelector('.dropdown-display');
    const dropdownOptions = dropdownWrapper.querySelector('.dropdown-options');
    const selectedValueSpan = dropdownWrapper.querySelector('.selected-value');
    const dropdownLabel = dropdownWrapper.querySelector('.dropdown-placeholder-label');

    //Open dropdown
    function openDropdown() {
        dropdownOptions.classList.add('show');
        dropdownWrapper.classList.add('open');
        dropdownDisplay.setAttribute('aria-expanded', 'true');
        dropdownOptions.setAttribute('aria-hidden', 'false');

        // Set initial focus for keyboard navigation if already selected
        const selectedOption = dropdownOptions.querySelector('.selected');
        if (selectedOption) {
            selectedOption.focus();
            currentHighlightedOption = selectedOption;
            selectedOption.classList.add('highlighted')
        } else {
            const firstOption = dropdownOptions.querySelector('li');
            if (firstOption) {
                firstOption.focus();
                currentHighlightedOption = firstOption;
                firstOption.classList.add('highlighted');
            }
        }
    }

    //Close dropdown
    function closeDropdown() {
        dropdownOptions.classList.remove('show');
        dropdownWrapper.classList.remove('open');
        dropdownDisplay.setAttribute('aria-expanded', 'false');
        dropdownOptions.setAttribute('aria-hidden', 'true');
        if (currentHighlightedOption) {
            currentHighlightedOption.classList.remove('highlighted');
            currentHighlightedOption = null;
        }
    }

    //Toggle dropdown on display click
    dropdownDisplay.addEventListener('click', function() {
        if (dropdownOptions.classList.contains('show')) {
            closeDropdown();
        } else {
            openDropdown();
        }
    });

    //Handle selection of an option
    dropdownOptions.addEventListener('click', function(event) {
        const clickedOption = event.target.closest('li[role="option"]');
        if (clickedOption) {
            const currentSelected = dropdownOptions.querySelector('.selected');
            if (currentSelected) {
                currentSelected.classList.remove('selected');
                currentSelected.removeAttribute('aria-selected');
            }

            //Add 'selected' class to the new selection
            clickedOption.classList.add('selected');
            clickedOption.setAttribute('aria-selected', 'true');

            //Update the displayed value
            selectedValueSpan.textContent = clickedOption.textContent;

            //Hide the placeholder label if a value is selected
            dropdownLabel.style.display = 'block'; 
            dropdownLabel.textContent = 'Size';

            closeDropdown();
            dropdownDisplay.focus(); 
        }
    });

    //Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdownWrapper.contains(event.target)) {
            closeDropdown();
        }
    });

});

//SCRIPT FOR ADD TO BAG BUTTON

document.addEventListener('DOMContentLoaded', function() {
    const addToBag = document.getElementById('add-to-bag');

    //If button is clicked, redirect to stage 1
    if (addToBag){
        addToBag.addEventListener('click', function() {
            window.location.href= 'index.html';
        });
    }
});
