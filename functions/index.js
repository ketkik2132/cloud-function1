
const functions = require("firebase-functions");
const admin=require('firebase-admin');
admin.initializeApp(functions.config().functions);
var newData;
exports.sendnotification = functions.firestore
    .document('trialevents/')
    .onCreate((snap, context) => {
      // Get an object representing the document
      // e.g. {'name': 'Marie', 'age': 66}
      const newValue = snap.data();

      // access a particular field as you would any JS property
     // const name = newValue.name;
     // const geohash = newValue.geohash;
      console.log("Event created");

      // perform desired operations ...
    });
/*exports.messageTrigger= functions.firestore.document("trialevents/{trialevetsId}").onCreate(async (snapshot,context)=>
{
    if(snapshot.empty){
        console.log("No devices");
        return;
    }
    else{
        newData=snapshot.data;
        var payload={
            notification:{title:"Push notification"}
        }
    };
    try{

    }
    catch(e){

    }
});*/

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
