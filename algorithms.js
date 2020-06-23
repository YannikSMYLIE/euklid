/**
 * Ermittelt den ggT zweier Zahlen.
 * @param a
 * @param b
 * @returns {*}
 */
function euklid(a, b) {
    if(a < b) {
        const tmp = b;
        b = a;
        a = tmp;
    }

    if(!b) {
        return a;
    }
    // Rechnen
    const mod = a % b;
    return euklid(b, mod);
}

function euklidSteps(a, b, array) {
    if(a < b) {
        const tmp = b;
        b = a;
        a = tmp;
    }

    if(b) {
        const mod = a % b;
        array.push(b);
        euklidSteps(b, mod, array);
    }
}