
const functions = require("firebase-functions");
var GeoFire = require('geofire');
//const GeoFire = require('geofire');
const admin=require('firebase-admin');
admin.initializeApp(functions.config().functions);

exports.onEventCreated = functions.firestore
    .document('/trialevents/{trialeventsId}')
    .onCreate(async (snap,context) => {
      // Get an object representing the document
      // e.g. {'name': 'Marie', 'age': 66}
      //const allTokens = await admin.firestore().collection('devices').get();
      //const geoFire = new GeoFire(ref)
      
      const newData=snap.data();
      const geohash = newData.geohash;
      var allTokens = await admin.firestore().collection('tempuser').get();
      //const ref = admin.database().ref(`tempusers`)
      //const geoFire = new GeoFire(ref)
      /*var geoQuery = geoFire.query({
        center: [location.latitude, location.longitude],
        radius: 1.0
    })*/
     var tokens=['dNyctT8dQ_SjEnLqxWbOdo:APA91bHLzov0EP1_GfwEBfbWl_Roe0l4a3jgpVHQe2V21vAEuRCLRdXlPTfXB9Pls2tZ_8EWYW3I3cxeH38wlzuwo__DlwI_jqtxXf8gjel7fFrl9R3sD4daixRGdn8B1KR3xHybVFWK','fdeAs_bzTeqQVvHYh6trhQ:APA91bGD0K1T8cN3xcDwObaOWGvxEYOZdQc3T4peCA1uZV4PsvJ9nbLlWOB4Ebaxh2cK6ayb21soKm3aOu3dYAoctsoBvfLPC9eBesNG160lmMjxd9EPuREEju1-PZFjqeP7oiTnKJ1t','c9QZp93YTSuaxvSdc0eF5_:APA91bGkNmc6Sl7SYL-7H358WTfhwBr5S4yHeR-Hykg1LbZqPGkQ0gxN7tm77EEuTk15PV7_Q9L5mLZSUJbLBqMDYNEMKzW81ilGbyaNFu_OilpsbVxeQaqC5s-010V5wjwKrwP3TV-S'];
      const payload = {
        notification:{
            title: 'New Event Alert',
            body: 'Event is created near you!!',
            sound: "default"
        },
    };
    try{
    const response =await admin.messaging().sendToDevice(tokens, payload);
    JSON.stringify(response);
    console.log(geohash);
    return console.log("message sent");
    
    }catch (err){
      return console.log("Error in sending");
    }
// Create a GeoFire index
      //var geoFire = new GeoFire(firebaseRef);     
      // access a particular field as you would any JS property
     // const name = newValue.name;
      //const geohash = newValue.geohash;
      //console.log(geohash);
      return console.log("Event is added");

      // perform desired operations ...
    });




   /* exports.onEventCreatedNew = functions.firestore
    .document('/trialevents/{trialeventsId}')
    .onCreate((snap, context) => {
      // Get an object representing the document
      // e.g. {'name': 'Marie', 'age': 66}
      const newValue = snap.data();
      var firebaseRef = firebase.database().ref();

// Create a GeoFire index
      var geoFire = new GeoFire(firebaseRef);     
      // access a particular field as you would any JS property
      const name = newValue.name;
      const geohash = newValue.geohash;
      console.log(geohash);
      return console.log("Event is added");

      // perform desired operations ...
    });


    */