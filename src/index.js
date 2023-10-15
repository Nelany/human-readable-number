module.exports = function toReadable(number) {
    const stringN = number.toString();
    const rev = stringN.split("").map((el) => Number(el));
    //   const rev = arrayN.reverse();
    let newAr = [];

    function tens(rev) {
        // if(rev[1] === 1) {newAr.push('ten');}
        if (rev[0] === 2) {
            newAr.push("twenty");
        }
        if (rev[0] === 3) {
            newAr.push("thirty");
        }
        if (rev[0] === 4) {
            newAr.push("forty");
        }
        if (rev[0] === 5) {
            newAr.push("fifty");
        }
        if (rev[0] === 6) {
            newAr.push("sixty");
        }
        if (rev[0] === 7) {
            newAr.push("seventy");
        }
        if (rev[0] === 8) {
            newAr.push("eighty");
        }
        if (rev[0] === 9) {
            newAr.push("ninety");
        }
    }

    function tenNineteen(rev) {
        if (rev[0] === 1 && rev[1] === 0) {
            newAr.push("ten");
        }
        if (rev[0] === 1 && rev[1] === 1) {
            newAr.push("eleven");
        }
        if (rev[0] === 1 && rev[1] === 2) {
            newAr.push("twelve");
        }
        if (rev[0] === 1 && rev[1] === 3) {
            newAr.push("thirteen");
        }
        if (rev[0] === 1 && rev[1] === 4) {
            newAr.push("fourteen");
        }
        if (rev[0] === 1 && rev[1] === 5) {
            newAr.push("fifteen");
        }
        if (rev[0] === 1 && rev[1] === 6) {
            newAr.push("sixteen");
        }
        if (rev[0] === 1 && rev[1] === 7) {
            newAr.push("seventeen");
        }
        if (rev[0] === 1 && rev[1] === 8) {
            newAr.push("eighteen");
        }
        if (rev[0] === 1 && rev[1] === 9) {
            newAr.push("nineteen");
        }
    }

    function units(rev) {
        if (rev[0] === 1) {
            newAr.push("one");
        }
        if (rev[0] === 2) {
            newAr.push("two");
        }
        if (rev[0] === 3) {
            newAr.push("three");
        }
        if (rev[0] === 4) {
            newAr.push("four");
        }
        if (rev[0] === 5) {
            newAr.push("five");
        }
        if (rev[0] === 6) {
            newAr.push("six");
        }
        if (rev[0] === 7) {
            newAr.push("seven");
        }
        if (rev[0] === 8) {
            newAr.push("eight");
        }
        if (rev[0] === 9) {
            newAr.push("nine");
        }
    }

    if (rev.length === 3) {
        units(rev);
        newAr.push("hundred");
        rev.shift();
    }

    if (rev.length === 2 && rev[0] !== 1) {
        tens(rev);
        if (rev[1] === 0) {
            rev.shift();
        }
        rev.shift();
    }

    tenNineteen(rev);

    if (rev.length === 1) {
        units(rev);
    }

    if (rev[0] === 0 && rev.length === 1) {
        console.log(rev);
        newAr.push("zero");
    }


    const newStringRev = newAr.join(" ");
    // console.warn(newRev);
    return newStringRev;
};
