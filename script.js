
document.getElementById('submitQuiz').addEventListener('click', () => {
    const answers = {
        espresso: 0,
        latte: 0,
        americano: 0,
        mocha: 0,
    };

    const form = document.forms['coffeeQuiz'];

    for (let i = 1; i <= 4; i++) {
        const selected = form[`q${i}`];
        let selectedValue = null;

        for (const option of selected) {
            if (option.checked) {
                selectedValue = option.value;
                break;
            }
        }

        if (selectedValue) {
            answers[selectedValue]++;
        } else {
            alert(`Nem válaszoltál a ${i}. kérdésre!`);
            return;
        }
    }


    const bestMatch = Object.keys(answers).reduce((a, b) => (answers[a] > answers[b] ? a : b));

    const result = document.getElementById('result');
    const coffeeDescriptions = {
        espresso: 'Az erős, intenzív espresso tökéletes választás számodra!',
        latte: 'A lágy, krémes latte a te kávéd!',
        americano: 'Az egyszerű és klasszikus americano illik hozzád legjobban!',
        mocha: 'Az édes, csokoládés mocha a te világod!',
    };

    result.textContent = coffeeDescriptions[bestMatch];
});
