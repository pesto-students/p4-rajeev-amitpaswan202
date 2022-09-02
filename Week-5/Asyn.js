function resolveAfter1Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved after 1 seconds');
        }, 1000);
    });
}

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved after 2 seconds');
        }, 2000);
    });
}

function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved after 3 seconds');
        }, 3000);
    });
}

async function* generatorFunc (resolveAfter1Seconds, resolveAfter2Seconds, resolveAfter3Seconds) {
    const result = yield await resolveAfter1Seconds();
    const result2 = yield await resolveAfter2Seconds();
    const result3 = yield await resolveAfter3Seconds();
}

const gen = generatorFunc(resolveAfter1Seconds, resolveAfter2Seconds, resolveAfter3Seconds);

gen.next().then(console.log);
gen.next().then(console.log);
gen.next().then(console.log);
gen.next().then(console.log);
