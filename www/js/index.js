function onDeviceReady()
{

  StatusBar.overlaysWebView(false);
  phoneInfo();
  getAccelerator();
}

// Phone info
function phoneInfo()
{
  $('#devicemodel').html(device.model);
  $('#devicecordova').html(device.cordova);
  $('#deviceplatform').html(device.platform);
  $('#deviceuuid').html(device.uuid);
  $('#deviceversion').html(device.version);
}
//

// button click
function clickMeButton()
{
  if($('#clickMeButton').html() != "Clicked")
  {
  navigator.notification.alert("You clicked me!", onSuccessClickMe, "Click", "Ok");
}
else {
  navigator.notification.alert("U've already clicked me. Thanx a lot!");
}
}

function onSuccessClickMe() {
  $('#clickMeButton').html('Clicked');
}
//

// accelerator methods
function getAccelerator() {
    var wId = navigator.accelerometer.watchAcceleration(onSuccessAcc, onErrorAcc, {frequency: 1000});
}
function onSuccessAcc(a)
{
  $('#aX').html(a.x);
  $('#aY').html(a.y);
  $('#aZ').html(a.z);
  $('#aTime').html(a.timestamp);
}
function onErrorAcc()
{}
//

// camera methods
function onSuccessCam(fileUri)
{
  $('#imageuri').html("Image uri code: " + fileUri);
}
function onErrorCam(a)
{
  var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
  if(app)
    {
      alert('There was an error occured with camera or u have  pressed cancel ');
    }
  else
  {
    alert("U can't run the camera in browser");
    $('#error').html(a.message);
  }
}
function picButClick() {
  alert('Smile :)');
  navigator.camera.getPicture(onSuccessCam, onErrorCam,
    {quality: 50, destinationType: Camera.DestinationType.FILE_URI  } );
}
  // end of camera methods

  // navigation
  function getLocation() {
    navigator.geolocation.watchPosition(onSuccesGeo, onErrorGeo, {frequency: 1000  });
  }
  function onSuccesGeo(p){
    $('#lat').html(p.coords.latitude);
    $('#lon').html(p.coords.longitude);
  }
  function onErrorGeo(e)
  {
    alert(e.message);
  }
  //

  // second page methods
  $(function()
  {
    $('#savebutton').click(function()
    {
      window.localStorage.setItem("name", $('#name').val());
    });
  });

  $('#newpage').live('pageshow ', function()
  {
    var personName = window.localStorage.getItem("name");
    if(personName.Length > 0)
    {
      $('#name' ).val(personName);
    }
  });




// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },
//     // Bind Event Listeners
//     //
//     // Bind any events that are required on startup. Common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//     },
//     // deviceready Event Handler
//     //
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicitly call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
//         app.receivedEvent('deviceready');
//     },
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         var parentElement = document.getElementById(id);
//         var listeningElement = parentElement.querySelector('.listening');
//         var receivedElement = parentElement.querySelector('.received');
//
//         listeningElement.setAttribute('style', 'display:none;');
//         receivedElement.setAttribute('style', 'display:block;');
//
//     }
// };
