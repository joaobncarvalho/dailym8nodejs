///////////////////////////////////// VER LINHA 57 ////////////////////////////////////


window.onload = async function(){

    navigator.geolocation.getCurrentPosition(
 
     function (position) {
       initMap(position.coords.latitude, position.coords.longitude)
     },
     function errorCallback(error) {
       console.log(error)
     }
 
    );
 
 }
 
 async function filterplacescoffee(){
 
   if(navigator.geolocation) {
 
     navigator.geolocation.getCurrentPosition(showPositionForCoffees);
 
 
 
 
   } else {
 
     console.log("Erro");
 
   }
 
 }
 
 function showPositionForCoffees(position){
 
   console.log("Latitude: " + position.coords.latitude);
 
   console.log("Longitude: " + position.coords.longitude);
 
   var coordinates = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
   const PORTUGAL5_MAPBOUNDS = {
     //PONTO 1 -> NORTH E WEST
     //PONTO 2 -> SOUTH E EAST
     north:  42.138649,
     south: 36.346396,
     west: -10.031045,
     east: -6.353972,
 
   }
 
   var options = { //Customização do mapa
         
     zoom: 15, //Zoom no mapa
     center:{lat:  position.coords.latitude, lng:  position.coords.longitude}, //Centro do mapa quando este é aberto (Lisboa)
     restriction: {
 
         latLngBounds: PORTUGAL5_MAPBOUNDS,
         strictBounds: false,
 
     },
     disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
     
 
   }
 
   var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA
 
   var request = {
 
     location: coordinates,
     radius: '5000',
     type: ['restaurant']
 
 };
 
 var service = new google.maps.places.PlacesService(map);
 service.nearbySearch(request, callback);
 
 }
 
 async function filterplacesrestaurantes(){
 
   if(navigator.geolocation) {
 
     navigator.geolocation.getCurrentPosition(showPositionForRestaurantes);
 
   } else {
 
     console.log("Erro");
 
   }
 
 }
 
 function showPositionForRestaurantes(position){
 
   console.log("Latitude: " + position.coords.latitude);
 
   console.log("Longitude: " + position.coords.longitude);
 
   var coordinates = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
   const PORTUGAL5_MAPBOUNDS = {
     //PONTO 1 -> NORTH E WEST
     //PONTO 2 -> SOUTH E EAST
     north:  42.138649,
     south: 36.346396,
     west: -10.031045,
     east: -6.353972,
 
   }
 
   var options = { //Customização do mapa
         
     zoom: 15, //Zoom no mapa
     center:{lat:  position.coords.latitude, lng:  position.coords.longitude}, //Centro do mapa quando este é aberto (Lisboa)
     restriction: {
 
         latLngBounds: PORTUGAL5_MAPBOUNDS,
         strictBounds: false,
 
     },
     disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
     
 
   }
 
   var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA
 
   var request = {
 
     location: coordinates,
     radius: '5000',
     type: ['restaurant']
 
 };
 
 var service = new google.maps.places.PlacesService(map);
 service.nearbySearch(request, callback);
 
 }
 
 async function filterplacesbares(){
 
   if(navigator.geolocation) {
 
     navigator.geolocation.getCurrentPosition(showPositionForBares);
 
   } else {
 
     console.log("Erro");
 
   }
 
 }
 
 function showPositionForBares(position){
 
   console.log("Latitude: " + position.coords.latitude);
 
   console.log("Longitude: " + position.coords.longitude);
 
   var coordinates = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
   const PORTUGAL5_MAPBOUNDS = {
     //PONTO 1 -> NORTH E WEST
     //PONTO 2 -> SOUTH E EAST
     north:  42.138649,
     south: 36.346396,
     west: -10.031045,
     east: -6.353972,
 
   }
 
   var options = { //Customização do mapa
         
     zoom: 15, //Zoom no mapa
     center:{lat:  position.coords.latitude, lng:  position.coords.longitude}, //Centro do mapa quando este é aberto (Lisboa)
     restriction: {
 
         latLngBounds: PORTUGAL5_MAPBOUNDS,
         strictBounds: false,
 
     },
     disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
     
 
   }
 
   var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA
 
   var request = {
 
     location: coordinates,
     radius: '5000',
     type: ['bar']
 
 };
 
 var service = new google.maps.places.PlacesService(map);
 service.nearbySearch(request, callback);
 
 }
 
 async function filterplacesginasios(){
 
   if(navigator.geolocation) {
 
     navigator.geolocation.getCurrentPosition(showPositionForGinasios);
 
   } else {
 
     console.log("Erro");
 
   }
 
 }
 
 function showPositionForGinasios(position){
 
   console.log("Latitude: " + position.coords.latitude);
 
   console.log("Longitude: " + position.coords.longitude);
 
   var coordinates = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
   const PORTUGAL5_MAPBOUNDS = {
     //PONTO 1 -> NORTH E WEST
     //PONTO 2 -> SOUTH E EAST
     north:  42.138649,
     south: 36.346396,
     west: -10.031045,
     east: -6.353972,
 
   }
 
   var options = { //Customização do mapa
         
     zoom: 15, //Zoom no mapa
     center:{lat:  position.coords.latitude, lng:  position.coords.longitude}, //Centro do mapa quando este é aberto (Lisboa)
     restriction: {
 
         latLngBounds: PORTUGAL5_MAPBOUNDS,
         strictBounds: false,
 
     },
     disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
     
 
   }
 
   var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA
 
   var request = {
 
     location: coordinates,
     radius: '5000',
     type: ['gym']
 
 };
 
 var service = new google.maps.places.PlacesService(map);
 service.nearbySearch(request, callback);
 
 }
 
 function callback(results, status){
 
   const directionsRenderer = new google.maps.DirectionsRenderer(); //CONSTANTE PARA RENDERIZAR A ROTA
 
   const directionsService = new google.maps.DirectionsService(); //CONSTANTE DO SERVIÇO DE ROTAS PARA O MAPA
 
   directionsRenderer.setMap(map);
 
   const PORTUGAL3_MAPBOUNDS = {
     //PONTO 1 -> NORTH E WEST
     //PONTO 2 -> SOUTH E EAST
     north:  42.138649,
     south: 36.346396,
     west: -10.031045,
     east: -6.353972,
 
   }
 
   window.alert("Getting places...")
 
   var options = { //Customização do mapa
       zoom: 15, //Zoom no mapa
       center:{lat:  38.769653 ,  lng:  -9.170325}, //Centro do mapa quando este é aberto (Lisboa)
       restriction: {
 
           latLngBounds: PORTUGAL3_MAPBOUNDS,
           strictBounds: false,
 
       },
       disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
 
   }
 
   var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA
 
   console.log("Posting places");
 
 if(status == google.maps.places.PlacesServiceStatus.OK) {
 
   for(var i = 0; i < results.length; i++){
 
      //  console.log(results[i].name);
 
        const marker = new google.maps.Marker({
           map: map,
           position: results[i].geometry.location,
           title: results[i].name,
         });
         
 
         const infotoshow = results[i].name;
 
         const infowindow = new google.maps.InfoWindow({
 
           content: infotoshow,
 
         });
         
         //CRIAR A ROTA
 
         marker.addListener("click", () => {
 
           console.log("clicked");
 
            //GET LOCATION
              if(navigator.geolocation) {
 
               sessionStorage.setItem("marker_name", marker.title);
       
               sessionStorage.setItem("marker_latitude", marker.getPosition().lat());
               sessionStorage.setItem("marker_longitude", marker.getPosition().lng());
 
               var xxx = marker.getPosition().lat();
 
 
 
               console.log("" + xxx);
               
 
               console.log("Coordenadas: " + marker.position);
 
               navigator.geolocation.getCurrentPosition(showRotaForPlace);
 
              } else {
 
               console.log("Erro");
 
              }
           
              });
 
   }
 
 }
 
 }
 
 async function showRotaForPlace(position){
 
   var latitude = sessionStorage.getItem("marker_latitude");
   var longitude = sessionStorage.getItem("marker_longitude");
 
   
 
   console.log("" + latitude);
 
   const directionsRenderer = new google.maps.DirectionsRenderer(); //CONSTANTE PARA RENDERIZAR A ROTA
 
   const directionsService = new google.maps.DirectionsService(); //CONSTANTE DO SERVIÇO DE ROTAS PARA O MAPA
 
   console.log("Atribuido");
 
   var myLatitude = position.coords.latitude;
   var myLongitude = position.coords.longitude;
 
   sessionStorage.setItem("my_Latitude", myLatitude);
   sessionStorage.setItem("my_Longitude", myLongitude);
  // sessionStorage.setItem("place_title", placeTitle);
 
   var coords = new google.maps.LatLng(myLatitude, myLongitude);
 
   var newcoords = {lat: myLatitude, lng: myLongitude};
 
   const marker1 = new google.maps.Marker({
  
     map: map,
     position: newcoords,
     icon: {
 
       url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
 
     }
 
   });
 
   console.log("Atribuido novamente");
 
   marker1.setMap(map);
 
   console.log("Passou");
 
   //RESTRICOES DE LIMITES DO MAPA
 
   const PORTUGAL_MAPBOUNDS = {
     //PONTO 1 -> NORTH E WEST
     //PONTO 2 -> SOUTH E EAST
     north:  42.138649,
     south: 36.346396,
     west: -10.031045,
     east: -6.353972,
 
   }
 
   console.log("Passou denovo");
 
   var options = { //Customização do mapa
         
     zoom: 15, //Zoom no mapa
     center:{lat:  myLatitude, lng:  myLongitude}, //Centro do mapa quando este é aberto (Lisboa)
     restriction: {
 
         latLngBounds: PORTUGAL_MAPBOUNDS,
         strictBounds: false,
 
     },
     disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
 
   }
 
   console.log("Ja nao passou");
 
   
 
   var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA
 
   directionsRenderer.setMap(map);
 
   console.log("A ir para o calculate");
 
   
   const selectedMode = "DRIVING"; //EXEMPLO COM MODO ESTATICO
 
   console.log("DRIVING A CHEGAR!")
 
   
       directionsService.route({  
         origin: {lat: parseFloat(myLatitude), lng: parseFloat(myLongitude)},  
         destination: {lat: parseFloat(latitude), lng: parseFloat(longitude)},  
         travelMode: google.maps.TravelMode.DRIVING  
       }, function(response, status) {  
         if (status === google.maps.DirectionsStatus.OK) {  
           directionsRenderer.setDirections(response);  
           console.log("Worked");
         } else {  
           window.alert('Directions request failed due to ' + status);  
         }  
       }); 
       
       var distancia = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(parseFloat(myLatitude), parseFloat(myLongitude)), new google.maps.LatLng(parseFloat(latitude), parseFloat(longitude)));
  
       var distanciashorted = (Math.round(distancia, 2)) / 1000;    //Arredondar
       console.log("Distancia: " + distanciashorted.toFixed(2));
 
       document.getElementById("distanceshow").innerHTML = "DISTÂNCIA: " + distanciashorted.toFixed(2) + " km";
 
 
 }
 
 
  function initMap(lat, lng){
 
   const directionsRenderer = new google.maps.DirectionsRenderer(); //CONSTANTE PARA RENDERIZAR A ROTA
 
   const directionsService = new google.maps.DirectionsService(); //CONSTANTE DO SERVIÇO DE ROTAS PARA O MAPA
 
   var myLatLng = {
     lat,
     lng
  };
 
  //LIMITES DE PORTUGAL
  const PORTUGAL_MAPBOUNDS = {
   //PONTO 1 -> NORTH E WEST
   //PONTO 2 -> SOUTH E EAST
   north:  42.138649,
   south: 36.346396,
   west: -10.031045,
   east: -6.353972,
  }
 
  
  var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 15,
     center: myLatLng,
     restriction: {
 
       latLngBounds: PORTUGAL_MAPBOUNDS,
       strictBounds: false,
 
   },
   disableDefaultUI: true,
  });
 
  var marker = new google.maps.Marker({
     position: myLatLng,
     map: map,
     icon: {
 
       url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
 
    }
  });
 
     //INPUT DO GEOCODER
 
     const defaultBoundsPlaces = { //Mostrar locais com proximidade | Definição de um raio á posição atual do utilizador
 
       north: map.center.lat + 2.5,
       south: map.center.lat - 2.5,
       east: map.center.lng + 2.5,
       west: map.center.lng - 2.5,
 
    }
 
 
 
    const options2 = {
 
        //Restrições do aparecimento de locais
 
        componentRestrictions: {country: "pt"}, //Autocomplete somente com estabelecimentos situados em PORTUGAL.
        fields: ["address_components", "geometry", "icon", "name"], //Dados que queremos obter (morada, nome, geometria -> coordenadas e icone)
        strictBounds: false,
        types: ["establishment"], //Obter locais de estabelecimentos
        bounds: defaultBoundsPlaces,
 
    };
 
    const autocomplete2 = new google.maps.places.Autocomplete(document.getElementById("input"), options2);
 
    autocomplete2.addListener("place_changed", () => {
 
         
     const local = autocomplete2.getPlace();
     const markerplace = new google.maps.Marker({
 
       position: local.geometry.location,
       title: local.name,
       map: map,
 
     });
 
     
   }
 
   );
 
   /////////// NOVO CÓDIGO ///////////
 
   
 
    getEventosRecentesss();
 
    getAulasMarcadasRecentesss();
 
 }
 
 //OBTER AULAS MARCADAS RECENTES (ACABAR A FUNCAO)
 
 async function getAulasMarcadasRecentesss(){
 
   var user_admin = sessionStorage.getItem("user_admin");
   var user_pt = sessionStorage.getItem("user_pt");
   var user_nutri = sessionStorage.getItem("user_nutri");
   let recipeName = document.getElementById("nome1")
   let eventosrecentesElem = document.getElementById("organize109");
   var user_id = sessionStorage.getItem("user_id");
   console.log("setItem->userId = " + user_id);
 
   try{
 
      let someeventos = await $.ajax({
 
        url: "/eventos/alleventos/aulas/" + user_id,
        method: "get",
        dataType: "json",
 
      });
 
      console.log("[utilizador] utilizador = " + JSON.stringify(someeventos));
 
      let html = "";
 
      for(let someuser of someeventos){
        console.log("Recipe: " + someuser);
        html += createaulaHTML(someuser);
      }
 
      console.log("OBTEVE");
    //  recipeName.innerHTML = html;
 
      eventosrecentesElem.innerHTML = html;
 
 
   } catch(err){
     console.log(err);
   }
 
 
 }
 
 function createaulaHTML(aula){
   
   return "<div class='selectbox66' style='cursor: pointer' id='selectbox66' onclick='openmarkeraula('" + aula + "')'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + aula.pedido_titulo + "Data: " + aula.pedido_data + "</p>" + "</div>"
   //return "<div class='selectbox66' style='cursor: pointer' id='selectbox66' onclick='openmarker( " + evento + " )'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + evento.evento_titulo + "Data: " + evento.evento_data + "</p>" + "</div>"
  
 
 }
 
 ///////////////////////////////////////
 
 async function openmarkeraula(aula){
 
   sessionStorage.setItem("place_title",aula.pedido_titulo);
 
 
 
 sessionStorage.setItem("pedido_latitude", aula.latitude);
   sessionStorage.setItem("pedido_longitude", aula.longitude);
 
 
   console.log("Working");
 
   x = navigator.geolocation; //Criar variavel X para a geolocalização
 
   x.getCurrentPosition(openmarcadoraula);
 
   openmarcadoraula();
 
 }
 
 function openmarcadoraula(position) {
 
   var evento_titulo = sessionStorage.getItem("place_title");
   var aula_latitude = sessionStorage.getItem("pedido_latitude");
   var aula_longitude = sessionStorage.getItem("pedido_longitude");
 
 
 
   console.log(evento_titulo);
   console.log(aula_latitude);
   console.log(aula_longitude);
 
 
   const directionsRenderer = new google.maps.DirectionsRenderer(); //CONSTANTE PARA RENDERIZAR A ROTA
 
   const directionsService = new google.maps.DirectionsService(); //CONSTANTE DO SERVIÇO DE ROTAS PARA O MAPA
 
   console.log("Atribuido");
 
   var myLatitude = position.coords.latitude;
   var myLongitude = position.coords.longitude;
 
   sessionStorage.setItem("myLatitude", myLatitude);
   sessionStorage.setItem("myLongitude", myLongitude);
 
   var coords = new google.maps.LatLng(myLatitude, myLongitude);
 
   var newcoords = {lat: myLatitude, lng: myLongitude};
 
   const marker1 = new google.maps.Marker({
  
     map: map,
     position: newcoords,
     icon: {
 
       url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
 
     }
 
   });
 
   console.log("Atribuido novamente");
 
   marker1.setMap(map);
 
   console.log("Passou");
 
   //RESTRICOES DE LIMITES DO MAPA
 
   const PORTUGAL_MAPBOUNDS = {
     //PONTO 1 -> NORTH E WEST
     //PONTO 2 -> SOUTH E EAST
     north:  42.138649,
     south: 36.346396,
     west: -10.031045,
     east: -6.353972,
 
   }
 
   console.log("Passou denovo");
 
   var options = { //Customização do mapa
         
     zoom: 15, //Zoom no mapa
     center:{lat:  myLatitude, lng:  myLongitude}, //Centro do mapa quando este é aberto (Lisboa)
     restriction: {
 
         latLngBounds: PORTUGAL_MAPBOUNDS,
         strictBounds: false,
 
     },
     disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
 
   }
 
   console.log("Ja nao passou");
 
   
 
   var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA
 
   directionsRenderer.setMap(map);
 
   console.log("A ir para o calculate");
 
  //FUNCAO CALCULATE
 
  const selectedMode = "DRIVING"; //EXEMPLO COM MODO ESTATICO
 
   console.log("DRIVING A CHEGAR!")
 
   
       directionsService.route({  
         origin: {lat: parseFloat(myLatitude), lng: parseFloat(myLongitude)},  
         destination: {lat: parseFloat(aula_latitude), lng: parseFloat(aula_longitude)},  
         travelMode: google.maps.TravelMode.DRIVING  
       }, function(response, status) {  
         if (status === google.maps.DirectionsStatus.OK) {  
           directionsRenderer.setDirections(response);  
           console.log("Worked");
         } else {  
           window.alert('Directions request failed due to ' + status);  
         }  
       }); 
       
       var distancia = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(parseFloat(myLatitude), parseFloat(myLongitude)), new google.maps.LatLng(parseFloat(aula_latitude), parseFloat(aula_longitude)));
  
       var distanciashorted = (Math.round(distancia, 2)) / 1000;    //Arredondar
       console.log("Distancia: " + distanciashorted.toFixed(2));
 
       document.getElementById("distanceshow").innerHTML = "DISTÂNCIA: " + distanciashorted.toFixed(2) + " km";
 
 }
 
 async function getEventosRecentesss(){
 
   let recipeName = document.getElementById("nome1")
   let eventosrecentesElem = document.getElementById("organize99");
   var user_id = sessionStorage.getItem("user_id");
   console.log("setItem->userId = " + user_id);
 
   try{
 
      let someeventos = await $.ajax({
 
        url: "/eventos/eventosrecentes/",
        method: "get",
        dataType: "json",
 
      });
 
      console.log("[utilizador] utilizador = " + JSON.stringify(someeventos));
 
      let html = "";
 
      for(let someuser of someeventos){
        console.log("Recipe: " + someuser);
        html += createeventoHTML(someuser);
      }
 
      console.log("OBTEVE");
    //  recipeName.innerHTML = html;
 
      eventosrecentesElem.innerHTML = html;
 
 
   } catch(err){
     console.log(err);
   }
 
 
 }
 
 
 //TERMINAR O ONCLICK NO EVENTO
 
 function createeventoHTML(evento){
   
   return "<div class='selectbox66' style='cursor: pointer' id='selectbox66' onclick='openmarker(" + JSON.stringify(evento) + ")'> <p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + evento.evento_titulo + "Data: " + evento.evento_data + "</p>" + "</div>"
   //return "<div class='selectbox66' style='cursor: pointer' id='selectbox66' onclick='openmarker( " + evento + " )'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + evento.evento_titulo + "Data: " + evento.evento_data + "</p>" + "</div>"
  
 
 }
 
 async function openmarker(evento){
 
     sessionStorage.setItem("place_title",evento.evento_titulo);
 
  sessionStorage.setItem("eventolatitude", evento.latitude);
     sessionStorage.setItem("eventolongitude", evento.longitude);
 
 
     console.log("Working");
 
     x = navigator.geolocation; //Criar variavel X para a geolocalização
 
     x.getCurrentPosition(openmarcador);
 
     openmarcador();
 
 }
 
 function openmarcador(position) {
 
   var evento_titulo = sessionStorage.getItem("place_title");
   var evento_latitude = sessionStorage.getItem("eventolatitude");
   var evento_longitude = sessionStorage.getItem("eventolongitude");
 
 
 
   console.log(evento_titulo);
   console.log(evento_latitude);
   console.log(evento_longitude);
 
 
   const directionsRenderer = new google.maps.DirectionsRenderer(); //CONSTANTE PARA RENDERIZAR A ROTA
 
   const directionsService = new google.maps.DirectionsService(); //CONSTANTE DO SERVIÇO DE ROTAS PARA O MAPA
 
   console.log("Atribuido");
 
   var myLatitude = position.coords.latitude;
   var myLongitude = position.coords.longitude;
 
   sessionStorage.setItem("myLatitude", myLatitude);
   sessionStorage.setItem("myLongitude", myLongitude);
 
   var coords = new google.maps.LatLng(myLatitude, myLongitude);
 
   var newcoords = {lat: myLatitude, lng: myLongitude};
 
   const marker1 = new google.maps.Marker({
  
     map: map,
     position: newcoords,
     icon: {
 
       url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
 
     }
 
   });
 
   console.log("Atribuido novamente");
 
   marker1.setMap(map);
 
   console.log("Passou");
 
   //RESTRICOES DE LIMITES DO MAPA
 
   const PORTUGAL_MAPBOUNDS = {
     //PONTO 1 -> NORTH E WEST
     //PONTO 2 -> SOUTH E EAST
     north:  42.138649,
     south: 36.346396,
     west: -10.031045,
     east: -6.353972,
 
   }
 
   console.log("Passou denovo");
 
   var options = { //Customização do mapa
         
     zoom: 15, //Zoom no mapa
     center:{lat:  myLatitude, lng:  myLongitude}, //Centro do mapa quando este é aberto (Lisboa)
     restriction: {
 
         latLngBounds: PORTUGAL_MAPBOUNDS,
         strictBounds: false,
 
     },
     disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
 
   }
 
   console.log("Ja nao passou");
 
   
 
   var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA
 
   directionsRenderer.setMap(map);
 
   console.log("A ir para o calculate");
 
   calculateAndDisplayRoute(directionsService, directionsRenderer);
 
 }
 
 function calculateAndDisplayRoute(directionsService, directionsRenderer){
 
   var myLatitude = sessionStorage.getItem("myLatitude");
   var myLongitude = sessionStorage.getItem("myLongitude");
   var placetitle = sessionStorage.getItem("place_title");
   
 
   console.log("Chegou"); ///CHEGA AQUI!
   console.log("" + myLatitude);
 
   var evento_latitude = sessionStorage.getItem("eventolatitude");
   var evento_longitude = sessionStorage.getItem("eventolongitude");
   
 
   var eventocoords = new google.maps.LatLng(evento_latitude, evento_longitude);
   var neweventocoords = {lat: evento_latitude, lng: evento_longitude};
 
   var mycoords = new google.maps.LatLng(myLatitude, myLongitude);
   var newmycoords = {lat: myLatitude, lng: myLongitude};
 
   const selectedMode = "DRIVING"; //EXEMPLO COM MODO ESTATICO
 
   console.log("DRIVING A CHEGAR!")
 
   
       directionsService.route({  
         origin: {lat: parseFloat(myLatitude), lng: parseFloat(myLongitude)},  
         destination: {lat: parseFloat(evento_latitude), lng: parseFloat(evento_longitude)},  
         travelMode: google.maps.TravelMode.DRIVING  
       }, function(response, status) {  
         if (status === google.maps.DirectionsStatus.OK) {  
           directionsRenderer.setDirections(response);  
           console.log("Worked");
         } else {  
           window.alert('Directions request failed due to ' + status);  
         }  
       }); 
       
       var distancia = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(parseFloat(myLatitude), parseFloat(myLongitude)), new google.maps.LatLng(parseFloat(evento_latitude), parseFloat(evento_longitude)));
  
       var distanciashorted = (Math.round(distancia, 2)) / 1000;    //Arredondar
       console.log("Distancia: " + distanciashorted.toFixed(2));
 
       document.getElementById("distanceshow").innerHTML = "DISTÂNCIA: " + distanciashorted + " km";
 
 }
 
 
 
   //const myLatLng = { lat: evento.latitude, lng: evento.longitude };
 
   //console.log("clicked");
 
   /*const marker = new google.maps.Marker({
  
     map: map,
     position: myLatLng,
     icon: {
 
        url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
 
     }
 
   });*/
 
 
 
 
 
 
 
 
 
 
 
 
 
    
 