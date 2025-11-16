// asnychronous -> javascript code ko line by line chalata hai ab kuch aisa code hota hai jo ki depended hota hai depended mtlb woh code jaisa mna kha ap facebook se picture le aayo facebook ki picture k liye facebook ke server tak jayanga tbhi picture miliangii apka baaki ka code rukha rahanaga jab tak facebook se photo nhi aayangii toh aisa nhi kr skte hai ho skta hai facebook se photo aane mai buth time lg jaaye aisa code ko asynchornous code mai move kr deta hai yeh jo facebook se photo laana k code jo hai yeh thoda side mai chalanga baaki ka code aage badh jayanga  hum yeh keh skte hai ki code line by line chl rha tha beech mai asnychronous code aa gya toh woh side mai chla gya side mai kha humne kha tum chlo jab ho jaaye toh btana baaki ka code run hona lga jb woh complete honga asnychronous wala code uske baad chlanga jab photo aa jayangii

// callbacks, Promises, and async/await -> tino ka use hota hai asnychronous code ko chalana k liye

// aisa code hum likhanga jo synchronous code nhi honga woh side stack pr jayanga woh kbhi aayanga uska jwb kbhi aaynga toh usko turant nhi chla skte example

// function getSongs() {
//   setTimeout(function () {
//     console.log("song aa gaye");
//   }, 2000);
// }

// function getMoreSongs() {
//   setTimeout(function () {
//     console.log(`more song aa gaye`);
//   }, 1200);
// }

// getSongs();
// getMoreSongs();

function connectToServer(cbfn) {
  console.log("connecting to server...");
  setTimeout(function () {
    console.log("connected to server");
    cbfn();
  }, 2000);
}

function fetchCourses(cbfn) {
  console.log("fetching course...");
  setTimeout(() => {
    cbfn(["course", "course1", "course2", "course3"]);
  }, 2000);
}

connectToServer(function () {
  fetchCourses(function (data) {
    console.log(data);
  });
});
