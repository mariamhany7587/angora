var quotes=[
    {
        quote: "Without music, life would be a mistake.",
        author:"--Friedrich Nietzsche",
    },
    {
        quote:"I am so clever that sometimes I don't understand a single word of what I am saying.",
        author:"--Oscar Wilde",
    },
    {
        quote:"We accept the love we think we deserve.",
        author:"--Stephen Chbosky",
    },
    {
        quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
        author:"--Ralph Waldo Emerson",
    },
    {
        quote:"It is better to be hated for what you are than to be loved for what you are not.",
        author:"--Andre Gide, Autumn Leaves",
    },
    {
        quote:"So many books, so little time.",
        author:"--Frank Zappa",
    },
    {
        quote:"A room without books is like a body without a soul.",
        author:"--Marcus Tullius Cicero",
    },
    {
        quote:"Be yourself; everyone else is already taken.",
        author:"--Oscar Wilde",
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:"--Mae West",
    },
]
function NewQuote(){
    var newNum= Math.floor(Math.random()*quotes.length)
console.log(NewQuote);
document.getElementById("quote").innerHTML=quotes[newNum].quote;
document.getElementById("author").innerHTML=quotes[newNum].author;
}