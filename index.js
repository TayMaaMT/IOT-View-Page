
  var token = localStorage.getItem('token');
  if(token){
    var heart = document.querySelector("#heart");
    var date = document.querySelector("#date");
    var time = document.querySelector("#time_");
    var temperature = document.querySelector("#temperature");
  
      viewLast();
      setInterval(()=>{
        viewLast();
      },15000)

   
      viewAll();
 
      viewHeart();

      viewTemperature();
 
     
  function logout(){
    localStorage.removeItem("token");
    window.location.href='login.html'
  }
  }else{
    window.location.href='login.html'
  }


  //view all
  function viewAll(){
    var table = document.querySelector(".AllTable");
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
            var cell8 = row.insertCell(7);
            cell1.innerHTML = counter--;
            cell2.innerHTML = result.heart_beats;
            cell3.innerHTML = result.temperature;
            cell4.innerHTML = result.latitude;
            cell5.innerHTML = result.longitude;
            const date = new Date(result.date);
            cell6.innerHTML = date.toLocaleTimeString();
            cell7.innerHTML = date.toLocaleDateString();
            cell8.innerHTML = `<a href="https://www.google.com/maps/search/?api=1&query=${result.longitude},${result.latitude}">google map</a>`;
           
    }
  })
  .catch((error) => {
    console.error('Error:', error);

  });
  }
//view temperature
  function viewTemperature(){
    var table = document.querySelector(".TempTable");
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

          cell1.innerHTML = counter--;
          cell2.innerHTML = result.temperature;
          const date = new Date(result.date);
          cell3.innerHTML = date.toLocaleTimeString();
          cell4.innerHTML = date.toLocaleDateString();
          cell5.innerHTML = `<a href="https://www.google.com/maps/search/?api=1&query=${result.longitude},${result.latitude}">google map</a>`;
           
    }
  })
  .catch((error) => {
    console.error('Error:', error);

  });
  }  

  //view heart
  function viewHeart(){
    var table = document.querySelector(".HearTable");
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


          cell1.innerHTML = counter--;
          cell2.innerHTML = result.heart_beats;
          const date = new Date(result.date);
          cell3.innerHTML = date.toLocaleTimeString();
          cell4.innerHTML = date.toLocaleDateString();
          cell5.innerHTML = `<a href="https://www.google.com/maps/search/?api=1&query=${result.longitude},${result.latitude}">google map</a>`;
           
    }
  })
  .catch((error) => {
    console.error('Error:', error);

  });
  } 
function viewLast(){
  fetch('https://iotsensors12.herokuapp.com/readLast', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    const date = new Date(data.date);
    date.textContent = date.toLocaleDateString();
    time.textContent= date.toLocaleTimeString();
    heart.textContent=data.heart_beats;
    temperature.textContent=data.temperature;
    lng=parseInt(data.latitude);
    lat=parseInt(data.longitude);
    initMap(lat,lng);
  }).catch((error) => {
    console.error('Error:', error);

  });
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


 