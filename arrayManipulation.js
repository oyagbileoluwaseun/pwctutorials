//Array of numbers
const studentScore = [80, 90, 70, 60, 50];

//Array of Strings
const studentsNames = ['Oluwakemi', 'James', 'Okiroro', 'Timilehin', 'Oluwafemi'];

//Array of Objects
const studentsActivities = [
    {
        id: 1,
        description: 'Having the induction session',
        isDone: true
    },
    {
        id: 2,
        description: 'Starting the JavaScript, HTML, CSS, React class',
        isDone: false
    },
    {
        id: 3,
        description: 'Starting the C# .NET classes',
        isDone: false
    }
]

//Converting the array of Objects to JSON format
const studentsActivitiesJSON = JSON.stringify(studentsActivities);

// console.log(studentsNames[2]);
// console.log(studentsActivities[1].isDone);
// console.log(studentsActivitiesJSON);

//Higher order Array functions
//map()
const studentsActivitiesDescription = studentsActivities.map(
    activity => activity.description);

const studentsActivitiesId = studentsActivities.map(
    activity => activity.id);
// console.log(studentsActivitiesDescription);
// console.log(studentsActivitiesId);


//Class work
const customerAccountInfo = [
    {
        id: 1,
        accountNumber: '123456789',
        fullName: 'Oluwakemi Ogunjobi',
        address: '26 Obafemi Awolowo road',
        canDebit: true
    },
    {
        id: 2,
        accountNumber: '123456789',
        fullName: 'Oluwakemi Samuel',
        address: '26 Obafemi Awolowo road',
        canDebit: false,
    },
    {
        id: 3,
        accountNumber: '123456789',
        fullName: 'Abraham Ogunjobi',
        address: '30 Hamsat Awolowo road',
        canDebit: true,
    }
]

//customerInfoId
const customerInfoId = customerAccountInfo.map(function(data) {
    return data.id
});
console.log(customerInfoId);

//customerAccountNumbers
const customerAccountNumbers = customerAccountInfo.map(function(data) {
    return data.accountNumber
});
console.log(customerAccountNumbers);

//customerAccountfullName
const customerAccountFullName = customerAccountInfo.map(function(data) {
    return data.fullName
});
console.log(customerAccountFullName);

//customerAccountAddres
const customerAccountAddress = customerAccountInfo.map(function(data) {
    return data.address
});
console.log(customerAccountAddress);

//customerAccountcanDebit
const customerAccountCanDebit = customerAccountInfo.map(myAccountfunction);
function myAccountfunction(data) {
    return data.canDebit
}
console.log(customerAccountCanDebit);


//Class Work 2
const studentScore2 = [80, 90, 70, 60, 50];
const studentScoreMulTwo = studentScore2.map(function (data) {
    return data * 2;
});
console.log(studentScoreMulTwo);

//filter()
const studentsActivitiesDone = studentsActivities.filter(
    (activity) => !activity.isDone
);
//console.log(studentsActivitiesDone);

const studentsActivities3 = studentsActivities.filter(
    (activity) => activity.id === 3
);
console.log(studentsActivities3);

// 