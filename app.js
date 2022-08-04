
/* 
    1:- লুডু খেলায় কিভাবে ১ থেকে ৬ পর্যন্ত রেন্ডমলি দেখানো হয়। তার প্রোগামটি function ব্যবহার করে লিখ ।
*/
function getRandomNumberOneToSix(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

let min = 1;
let max = 6;
let getRandomNumber = getRandomNumberOneToSix(max, min);
console.log(getRandomNumber);


/* 
    2:- কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি ?
*/
function stringSorting(students){
    return students.sort();
}

const studentNames = ['Noman', 'Adnan', 'Dalim', 'Rahim', 'Karim', 'Badol', 'Koli', 'Cinku', 'Akash'];
let students = stringSorting(studentNames);
console.log(students);


/* 
    3:- কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের রোল ক্রম অনু্যাযী সাজাতে পারি ?
*/
function stringSorting(students){
    return students.sort(
        (a, b) => {
            return a - b;
        }
    );
}

const studentRolls = [10, 100, 20, 84, 60, 23, 50 ,40 ,55, 20 ,1 ,3, 2];
let studentRoll = stringSorting(studentRolls);
console.log(studentRoll);