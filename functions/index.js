
const functions = require("firebase-functions");
const firebase= require('firebase')
//let GeoFire = require('geofire');
const geofire = require('geofire');
const geofirestore= require('geofirestore');
const admin=require('firebase-admin');
const Geofire = require('geofire-common');
admin.initializeApp(functions.config().functions);
firebase.initializeApp({
  apiKey: "AIzaSyAYinqifVvBdo9i0hv0Zezhvq1ZaQ8hqKg",
  databaseURL: "https://yibe-network.firebaseio.com",
  projectId: "yibe-network"
});
const runtimeOpts = {
  timeoutSeconds: 300,
  
}
exports.onEventCreated = functions.runWith(runtimeOpts).firestore
    .document('/trialevents/{trialeventsId}')
    .onCreate(async (snap,context) => {
      // Get an object representing the document
      // e.g. {'name': 'Marie', 'age': 66}
      //const allTokens = await admin.firestore().collection('devices').get();
     // var ref = admin.database().ref();
     // const geoFire = new GeoFire(ref)
      const tokenArray = [];
      const newValue = snap.data();
      const lat = newValue.lat;
      const lng = newValue.lng;
     const firestore = firebase.firestore();
     const payload = {
      notification:{
          title: 'New Event Alert',
          body: 'Event is created near you!!',
          sound: "default"
      },
  };

// Create a GeoFirestore reference
     const GeoFirestore = geofirestore.initializeApp(firestore);

// Create a GeoCollection reference
const geocollection = GeoFirestore.collection('tempuser');
const query = geocollection.near({ center: new firebase.firestore.GeoPoint(lat,lng), radius: 10 });
/*query.get().then((value) => {
  // All GeoDocument returned by GeoQuery, like the GeoDocument added above
  value.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    tokenArray.push(doc.data().token);
    console.log(doc.id, " => ", doc.data());

});*/
 query.onSnapshot(gquerySnapshot => {
  gquerySnapshot.forEach(res => {
     
      //tokenArray.push(res.data().token);
      admin.messaging().sendToDevice(res.data().token, payload);
      //return tokenArray;
      //console.log(res.data().token)
      //return true;
  })


 
 
});

/*query.get().then((value) => {
    
  console.log(value.docs);
});*/

/*if(response1==true){
try{
  const response = await admin.messaging().sendToDevice(tokenArray, payload);
  JSON.stringify(response);
  //console.log(geohash);
  return console.log("message sent");
  
  }catch (err){
    return console.log("Error in sending");
  }
}*/

      // access a particular field as you would any JS property
     // const name = newValue.name;
     /* 
 
 
     const lat = newValue.lat;
      const lng = newValue.lng;
      const center = [lat, lng];
      const radiusInM= 2*1000;
      const bounds = geofire.geohashQueryBounds(center, radiusInM);

      const promises = [];
      for (const b of bounds) {
      const q = db.collection('tempuser')
    .orderBy('geohash')
    .startAt(b[0])
    .endAt(b[1]);

  promises.push(q.get());
}
Promise.all(promises).then((snapshots) => {
  const matchingDocs = [];

  for (const snap of snapshots) {
    for (const doc of snap.docs) {
      const lat = doc.get('lat');
      const lng = doc.get('lng');

      // We have to filter out a few false positives due to GeoHash
      // accuracy, but most will match
      const distanceInKm = geofire.distanceBetween([lat, lng], center);
      const distanceInM = distanceInKm * 1000;
      if (distanceInM <= radiusInM) {
        matchingDocs.push(doc);
      }
    }
  }

  return matchingDocs;
}).then((matchingDocs) => {
  // Process the matching documents
  // ...
  tokenArray.push(matchingDocs.data().token);
  console.log(tokenArray);
});*/
      //console.log(lat);
      
      //console.log(lng);
     /* var geoQuery = geoFire.query({
        center: [10.38, 2.41],
        radius: 3
      });*/

      /*var db = admin.firestore();
      const citiesRef = db.collection('tempuser');
      const snapshot = await citiesRef.get();
      snapshot.forEach(doc => {
  tokenArray.push(doc.data().token);
  //console.log(doc.id, '=>', doc.data());

});*/

      //var allTokens = await admin.firestore().collection('tempuser').get();
      //const ref = admin.database().ref(`tempusers`)
      //const geoFire = new GeoFire(ref)
      /*var geoQuery = geoFire.query({
        center: [location.latitude, location.longitude],
        radius: 1.0
    })*/
     var tokens=['dNyctT8dQ_SjEnLqxWbOdo:APA91bHLzov0EP1_GfwEBfbWl_Roe0l4a3jgpVHQe2V21vAEuRCLRdXlPTfXB9Pls2tZ_8EWYW3I3cxeH38wlzuwo__DlwI_jqtxXf8gjel7fFrl9R3sD4daixRGdn8B1KR3xHybVFWK','fdeAs_bzTeqQVvHYh6trhQ:APA91bGD0K1T8cN3xcDwObaOWGvxEYOZdQc3T4peCA1uZV4PsvJ9nbLlWOB4Ebaxh2cK6ayb21soKm3aOu3dYAoctsoBvfLPC9eBesNG160lmMjxd9EPuREEju1-PZFjqeP7oiTnKJ1t','c9QZp93YTSuaxvSdc0eF5_:APA91bGkNmc6Sl7SYL-7H358WTfhwBr5S4yHeR-Hykg1LbZqPGkQ0gxN7tm77EEuTk15PV7_Q9L5mLZSUJbLBqMDYNEMKzW81ilGbyaNFu_OilpsbVxeQaqC5s-010V5wjwKrwP3TV-S'];
     
   
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