const quotes = [
    {
        quote: "낮말은 새가 듣고 밤말은 쥐가 듣는다",
        author: "한국 속담"
    },
    {
        quote: "발 없는 말이 천리 간다",
        author: "한국 속담"
    },
    {
        quote: "백문이 불여일견",
        author: "한국 속담"
    },
    {
        quote: "결초보은",
        author: "사자 성어"
    },
    {
        quote: "오합지졸",
        author: "사자 성어"
    },
    {
        quote: "사면초가",
        author:  "사자 성어"
    },
    {
        quote: "붕우유신",
        author:  "사자 성어"
    },
    {
        quote: "호랑이도 제 말 하면 온다",
        author: "한국 속담"
    },
    {
        quote: "다람쥐 쳇바퀴 돌듯",
        author: "한국 속담"
    },
    {
        quote: "벼는 익을수록 고개를 숙인다",
        author: "한국 속담"
    },
];

const nowQuote = document.querySelector("#quote span:first-child");
const nowAuthor = document.querySelector("#quote span:last-child");
const nowQuotes = quotes[Math.floor(Math.random() * quotes.length)];

nowQuote.innerText = nowQuotes.quote;
nowAuthor.innerText = nowQuotes.author;
