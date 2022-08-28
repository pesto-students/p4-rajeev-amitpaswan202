function vowelCount(str){
    const vowelsMap = new Map();
    for (char of str){
        const isVowel = 'AEIOUaeiou'.includes(char);
        if(isVowel){
            const count = vowelsMap.get(char) || 0;
            vowelsMap.set(char, count+1);
        }
    }
    return vowelsMap;
}

console.log(vowelCount('AaaEEEeeeiiiiuuuiiIIOOOOoooU'));
console.log(vowelCount('qwrtplmn'));