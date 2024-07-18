document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill",
            category: "inspirational"
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "John Lennon",
            category: "life"
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            category: "life"
        },
        {
            text: "Love the life you live. Live the life you love.",
            author: "Bob Marley",
            category: "life"
        },
        {
            text: "In football, the worst things are excuses. Excuses mean you cannot grow or move forward.",
            author: "Pele",
            category: "football"
        },
 {
            text: "You have to fight to reach your dream. You have to sacrifice and work hard for it.",
            author: "Leo Messi",
            category: "football"
        },
 {
            text: "Maybe god is with him but He is not the god",
            author: "Max verstappen",
            category: "f1"
        },

        {
            text: "I never fear failure, I only fear not trying.",
            author: "Virat Kholi",
            category: "cricket"
        },
        {
            text: "The balance of the car is fantastic, especially when you take it through the fast corners.",
            author: "Lewis Hamilton",
            category: "f1"
        },
        {
            text: "The best way to predict your future is to create it.",
            author: "Abraham Lincoln",
            category: "inspirational"
        }
    ];

    const quoteText = document.getElementById('text');
    const quoteAuthor = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const tweetQuoteButton = document.getElementById('tweet-quote');

    // Function to get a random quote
    function getQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        
        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = `- ${randomQuote.author}`;
        
        tweetQuoteButton.href = `https://twitter.com/intent/tweet?text="${randomQuote.text}" - ${randomQuote.author}`;
    }

    // Load initial quote
    getQuote();

    // Event listener for new quote button
    newQuoteButton.addEventListener('click', getQuote);
});