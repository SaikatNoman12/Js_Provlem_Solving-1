
/* 
    1:- লুডু খেলায় কিভাবে ১ থেকে ৬ পর্যন্ত রেন্ডমলি দেখানো হয়। তার প্রোগামটি function ব্যবহার করে লিখ ।
*/
function getRandomNumberOneToSix(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let min = 1;
let max = 6;
let getRandomNumber = getRandomNumberOneToSix(max, min);
console.log(getRandomNumber);


/* 
    2:- কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি ?
*/
function stringSorting(students) {
    return students.sort();
}

const studentNames = ['Noman', 'Adnan', 'Dalim', 'Rahim', 'Karim', 'Badol', 'Koli', 'Cinku', 'Akash'];
let students = stringSorting(studentNames);
console.log(students);


/* 
    3:- কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের রোল ক্রম অনু্যাযী সাজাতে পারি ?
*/
function stringSorting(students) {
    return students.sort(
        (a, b) => {
            return a - b;
        }
    );
}

const studentRolls = [10, 100, 20, 84, 60, 23, 50, 40, 55, 20, 1, 3, 2];
let studentRoll = stringSorting(studentRolls);
console.log(studentRoll);


/* 
    4:- কোন সাল leap year কিনা তা কীভাবে বের করতে পারি ?
*/
function isLeapYear(year) {
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}
let year = 2026;
isLeapYear(year);


/* 
    5:- কোন Sentence এর মধ্য কতটা vowel আছে তা নির্ণয় করতে হবে ?
*/
const vowels = ['a', 'e', 'i', 'o', 'u'];

function isVowelCheck(sentence) {
    let count = 0;
    let word = Array.from(sentence.toLowerCase());

    word.forEach((value) => {
        if (vowels.includes(value)) {
            count++;
        }
    });
    return count;
};

let sentence = 'My name is Abdullah Al Nomaan.';
console.log(isVowelCheck(sentence));


/* 
    6:- কোন array থেকে  duplicate number গুলোকে কি ভাবে খুজে বের করে আনতে পারি তার প্রোগ্রাম লিখ ?
*/
const numbers = [1, 3, 5, 6, 6, 7, 8, 5, 7, 3, 8, 120, 9, 62];

let duplicateNumber = numbers.filter((value, index, array) => {
    return array.indexOf(value) !== index;
});
console.log(duplicateNumber);



/* 
    7:- কোন array থেকে  unique number গুলোকে কি ভাবে খুজে বের করে আনতে পারি তার প্রোগ্রাম লিখ ?
*/
let uniqueNumber = numbers.filter((value, index, array) => {
    return array.indexOf(value) === index;
});
console.log(uniqueNumber);
