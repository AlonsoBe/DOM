const main = document.querySelector('main');

let heading = "My Jokes";
const joke = "What's a horrible icebreaker? The Titanic.";
const joke1 = "My girlfriend told me she needed to take a break from me. So I gave her a Kit Kat.";
const joke2 = "What did Delaware? Her New Jersey.";

const template = `
    <section>
        <p>${joke}</p>
        <p>${joke1}</p>
        <p>${joke2}</p>
    </section>
`;

main.innerHTML = template;

const p = document.createElement('p');
p.textContent = "Thats all folks!"
main.appendChild(p);