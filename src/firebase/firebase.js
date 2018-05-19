import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC207MDHTnVJST0HLeqPOMnw4PLIuRHSuI",
    authDomain: "expensify-3e4bc.firebaseapp.com",
    databaseURL: "https://expensify-3e4bc.firebaseio.com",
    projectId: "expensify-3e4bc",
    storageBucket: "expensify-3e4bc.appspot.com",
    messagingSenderId: "768596431765"
};
firebase.initializeApp(config);

 const database = firebase.database();

 export {firebase,database as default};
// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });


// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         //console.log(snapshot.val());
//         const expenses = [];

//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()
//             }); 
//         });
//         console.log(expenses);
//     }).catch((e)=>{
//             console.log('This failed.',e);
//     });

// database.ref('expenses').push({
//     description:'Firebase',
//     note:'Expenses firebase',
//     amount:500,
//     createAt:'9519519512123'
// });

// const firebaseNotes = {
//         title:'second note',
//         body:'This is my second note.'
// };

// database.ref('notes').push(firebaseNotes);

// database.ref('notes/-L7rA4-7SvA3H53xA-Mn').update({
//     body:'Buy food'
// });

// database.ref('notes/-L7rA4-7SvA3H53xA-Mn').remove();

// database.ref().on('value',(snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(()=>{
//     database.ref('job/company').set('Firebase');
// },3000);

// database.ref('location')
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e)=>{
//         console.log('This failed.',e);
//  });

// const onValueChange = database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// },(e)=>{
//     console.log('Error with data fetching',e);
// });

// setTimeout(()=>{
//     database.ref('age').set(26);
// },3000);

// setTimeout(()=>{
//     database.ref('age').off(onValueChange);
// },2000);


// setTimeout(()=>{
//     database.ref('age').set(24);
// },1000);


//Return firebase.promise
// database.ref().set({
//     name:'Bee',
//     age:26, 
//     location:{
//         city:'Chiang mai',
//         country:'Thailand'
//     }
// }).then(()=>{
//     console.log('Data is save');
// }).catch((e)=>{
//     console.log('This failed.',e);
// });

//database.ref().set('This is my data'); 


// database.ref('attributes').set({
//     height:174,
//     weight:64
// }).then(()=>{
//     console.log('Data attributes are save');
// }).catch((e)=>{
//     console.log('This failed.',e);
// });

//Removing
// database.ref('isSingle')
//     .remove()
//     .then(()=>{
//         console.log('Data is removed');
//     }).catch((e)=>{
//         console.log('This failed.',e);
//     });

//Removing
// database.ref('isSingle').set(null);

//Update
// database.ref().update({
//    name:"Mike" , 
//    age:29,
//    streetLevel:15,
//    job:{
//        title: 'Software dev',
//        company: 'Google'
//    },
// });

// database.ref().update({
//     'location/city':'Boston',
//     'location/country':'USA'
//  });

//  database.ref().update({
//      streetLevel:9,
//     'job/company':'Amazon',
//     'location/city':'Seattle',
//  });