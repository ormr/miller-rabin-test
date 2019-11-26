const millerRabinTest = () => {
    let n = parseInt(document.body.querySelector('#n').value);
    let k = parseInt(document.body.querySelector('#k').value);
    let result = document.createElement('h1');
    let answer = true;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n < 2) return false;

    let s = 0, d = n - 1;
    while (d % 2 === 0) {
        d /= 2;
        ++s;
    }

    WitnessLoop: do {
        let x = Math.pow(2 + Math.floor(Math.random() * (n - 3)), d) % n;

        if (x === 1 || x === n - 1) continue;

        for (let i = s - 1; i--;) {
            x = x * x % n;

            if (x === 1) return false;
            if (x === n - 1) continue WitnessLoop;
        }
        answer = false;
    } while (--k);

    result.innerHTML = answer;
    document.body.append(result);
    setTimeout(() => result.remove(), 1000);
}