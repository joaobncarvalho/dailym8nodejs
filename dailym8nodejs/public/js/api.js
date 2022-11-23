function goInfo(id) {
    localStorage.setItem("imo_id", id)
    window.location.href = "./blog-single.html"
}



$(document).ready(

    function imo(){

        $.ajax({
            url: "https://imodream-api.herokuapp.com/api/imo/",
            type: "GET",
            dataType: 'json',
            success: function(result) {

                console.log("="+result);
                $('#DimensionPro').text(result)
                let teste = document.querySelector("#imo")
                let html = ""

                for (let i in result) {
                    let h2 = result[i].Dimension + " - " + result[i].Measurments
                    html += ` 
                        <figure class="aa-blog-img">
                          <a href="#"><img alt="img" src="img/Imo/LogoCommon.jpeg"></a>
                          <span class="aa-date-tag">${result[i].Criacao}</span>
                        </figure>
                        
                          <h3><a onclick="goInfo(${result[i].ImoId})">${result[i].Name}</a></h3>
                          <p>Agencia Imobiliaria.</p>
                          <div class="aa-blog-single-bottom">
                            <a class="aa-blog-author" href="#"><i class="fa fa-user"></i> ${result[i].Name}</a>
                          </div>
                        </div>                   
                      </article>`
                }
                console.log("aaaaa"+html)
                teste.innerHTML=html

            }

        });
    }
);