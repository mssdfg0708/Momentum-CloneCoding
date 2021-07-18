const quotes = [
    {
        quote: "I never dream about success, I worked for it",
        author: "  - Estee Lauder"
    },
    {
        quote: "Do not try to be original, just try to be good",
        author: "  - Paul Rand"
    },
    {
        quote: "Do not be afriad to give up the good to go for the great",
        author: "  - John D.Rockefeller"
    },
    {
        quote: "I've had lots of troubles, so I write jolly tales.",
        author: "  - Louisa May Alcott",
    },
    {
        quote: "Chess isn't always competitive. Chess can also be beautiful.",
        author: "  - Queen's Gambit, Halmon",
    },
    {
        quote: "My experience has taught me what you know isn't always what's important.",
        author: "  - Queen's Gambit, Alma",
    },
    { 
        quote: "The strongest person is the person who isn't scared to be alone.",
        author: "  - Queen's Gambit, Alice",
    },
    { 
        quote: "If you don't like it, You change it.",
        author: "  - Miss Sloane",
    },
    { 
        quote: "Suddenly, time travel seems almost unnecessary, because every detail of life is so delightful.",
        author: "  - About time",
    },
    { 
        quote: "We are all traveling through ime together, everyday of our lives. all we can do is do our best to relish this remarkable ride.",
        author: "  - About time",
    }
];

const nowQuote = document.querySelector("#quote span:first-child");
const nowAuthor = document.querySelector("#quote span:last-child");
const nowQuotes = quotes[Math.floor(Math.random() * quotes.length)];

nowQuote.innerText = nowQuotes.quote;
nowAuthor.innerText = nowQuotes.author;
