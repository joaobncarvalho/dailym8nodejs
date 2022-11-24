function goInfo(id) {
    localStorage.setItem("establishment_id", id)
    window.location.href = "./detail-restaurant-2.html"
}



$(document).ready(

    function restaurantsrandom(){

        $.ajax({
            url: "https://dailym8nodeproj.fly.dev/api/showrandomrestaurants/",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#Restaurantes').text(result)
                let teste = document.querySelector("#randomtest")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].establishment_name + " - " + result[i].restaurant_type_id
                    html += ` 
                    <div class="item">
                    
                        <div class="strip">
			                <figure>
			                    <span class="ribbon off">-30%</span>
			                    <img src="img/lazy-placeholder.png" data-src="img/location_1.jpg" class="owl-lazy" alt="">
			                    <a onclick="goInfo(${result[i].establishment_id})" class="strip_info">
			                        <small>${result[i].type_restaurant_name}</small>
			                        <div class="item_title">
			                        <h3>${result[i].establishment_name}</h3>
			                        <small>27 Old Gloucester St</small>
			                        </div>
			                    </a>
			                </figure>
			                <ul>
			                    <li><span class="loc_open">Now Open</span></li>
			                    <li>
			                        <div class="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div>
			                    </li>
			                </ul>
			            </div>
                    </div>`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html

            }

        });
    }
);








//SELECIONAR 50 RESTAURANTES ALEATÓRIOS