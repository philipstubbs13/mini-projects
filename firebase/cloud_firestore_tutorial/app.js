  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBT-lFEzpWNFcBv74zrxTNCS433EW4y7wg",
    authDomain: "hot-dog-test.firebaseapp.com",
    databaseURL: "https://hot-dog-test.firebaseio.com",
    projectId: "hot-dog-test",
    storageBucket: "",
    messagingSenderId: "344868889989"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();

  const docRef = firestore.doc("samples/sandwichData");
  const outputHeader = document.querySelector("#hotDogOutput");
  const inputTextField = document.querySelector("#latestHotDogStatus")
  const saveButton = document.querySelector("#saveButton");
  const loadButton = document.querySelector("#loadButton");

  saveButton.addEventListener("click", function() {
    const textToSave = inputTextField.value;
    console.log("I am going to save " + textToSave + " to Firestore");
    docRef.set({
      hotDogStatus: textToSave
    }).then(function() {
      console.log("Status saved!");
    }).catch(function (error) {
      console.log("Got an error", error);
    });
  });

  loadButton.addEventListener("click", function() {
    docRef.get().then(function (doc) {
      if (doc && doc.exists) {
        const myData = doc.data();
        outputHeader.innerText = "Hot dog status: " + myData.hotDogStatus;
      }
    }).catch(function (error) {
      console.log("Got an error: ", error);
    });
  })

  getRealtimeUpdates = function() {
    docRef.onSnapshot({includeMetadataChanges: true},function (doc) {
      if (doc && doc.exists) {
        const myData = doc.data();
        console.log("data", doc);
        outputHeader.innerText = "Hot dog status: " + myData.hotDogStatus;
      }
    })
  }

  getRealtimeUpdates();