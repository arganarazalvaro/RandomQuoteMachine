document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const button = document.querySelector("#new-quote");
    const quote = document.querySelector("#text");
    const cite = document.querySelector("#author");

    async function updateQuote() {
        // Fetch a random quote from the Quotable API
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        if (response.ok) {
            // Update DOM elements
            quote.textContent = data.content;
            cite.textContent = data.author;
        } else {
            quote.textContent = "An error occured";
            console.log(data);
        }
    }

    // Attach an event listener to the `button`
    button.addEventListener("click", updateQuote);

    //updateQuote once when page loads
    updateQuote();
});