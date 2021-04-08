
  var token = localStorage.getItem('token');
  if(token){
    var heart = document.querySelector("#heart");
    var temperature = document.querySelector("#temperature");
    viewAll();
    fetch('https://iotsensors12.herokuapp.com/readLast', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    heart.textContent=data.heart_beats;
    temperature.textContent=data.temperature;
    lng=parseInt(data.latitude);
    lat=parseInt(data.longitude);
    initMap(lat,lng);
  }).catch((error) => {
    console.error('Error:', error);

  });
    viewLast();

    
  function goTOListing(){
    window.location.href='listing.html'
  }
  function logout(){
    localStorage.removeItem("token");
    window.location.href='login.html'
  }
  }else{
    window.location.href='login.html'
  }
  function viewAll(){
    var table = document.querySelector("table");
    fetch('https://iotsensors12.herokuapp.com/read', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    let counter= data.length;
    for(let i in data){
        let result = data[i];
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            cell1.innerHTML = counter--;
            cell2.innerHTML = result.heart_beats;
            cell3.innerHTML = result.temperature;
            cell4.innerHTML = result.latitude;
            cell5.innerHTML = result.longitude;
            cell6.innerHTML = result.date;
            cell7.innerHTML = `<a href="https://www.google.com/maps/search/?api=1&query=${result.longitude},${result.latitude}">google map</a>`;
           
    }
  })
  .catch((error) => {
    console.error('Error:', error);

  });
  }
 function viewLast(){
    setInterval(()=>{
      fetch('https://iotsensors12.herokuapp.com/readLast', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    heart.textContent=data.heart_beats;
    temperature.textContent=data.temperature;
    lng=parseInt(data.latitude);
    lat=parseInt(data.longitude);
    initMap(lat,lng);
  }).catch((error) => {
    console.error('Error:', error);

  });
    },15000)

 }
 let map ;
 function initMap(lat=0,lng=0) {
  console.log("hi")
  const myLatLng = { lng,lat };
  map= new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 5,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
  });


}


 