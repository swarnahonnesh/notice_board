function filterNotices() {
    // 1. Get the search input value and turn it lowercase
    var input = document.getElementById('noticeSearch');
    if (!input) return; // Safety check: stop if search bar doesn't exist yet
    var filter = input.value.toLowerCase();
    
    // 2. Target all the notice cards
    var cards = document.getElementsByClassName('notice-card');

    // 3. Loop through every single card on the dashboard
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        
        // Get the card text and its data-category attribute safely
        var cardText = card.innerText ? card.innerText.toLowerCase() : "";
        var categoryAttr = card.getAttribute('data-category') ? card.getAttribute('data-category').toLowerCase() : "";

        // 4. If the search term matches the card contents OR the category, show it. Otherwise, hide it.
        if (cardText.includes(filter) || categoryAttr.includes(filter)) {
            card.style.display = ""; // Show card
        } else {
            card.style.display = "none"; // Hide card
        }
    }
}
