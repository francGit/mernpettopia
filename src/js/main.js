let user = 'Juliana Garzon',
    pet = 'Rufus',
    pass = "password",
    modal = `
  <div class="modal fade" id="mdGeneral" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btnclose" data-bs-dismiss="modal" aria-label="Close"> <img src="image/x.svg" alt="" class="img-fluid"></button>
        </div>
        <div class="modal-body">
        </div>
      
      </div>
    </div>
  </div>
`;

let header = `
<div class="container">
     
<div class="boxNav">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid  ">
      <div class="boxLogo">
        <figure>
          <img src="image/logo.svg" alt="" class="img-fluid">
        </figure>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <span class="dataUserDash">Bienven@ a PetTopia: <b class="logUser">${user}</b> <i><img src="image/Edit.svg" class="img-fluid" alt=""></i></span>
        <ul class="navbar-nav menu">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./#inicio">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./#servicios">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./#equipo">Equipo</a>
          </li>
        </ul>
        <div class="boxLog">
        <ul>
        <li class="btnlogin">
        <a href="login.html"><i> <img src="image/user.svg" alt="" class="img-fluid"></i> </a>
      </li>
          <li class="btnexit">
            <a href="index.html"><i> <img src="image/exit.svg" alt="" class="img-fluid"></i> </a>
          </li>
        <li class="btnagendar">
         <a href="agendar.html"><span>Agendar cita</span> </a>
         </li> 
        </ul>
      </div>
      </div>
   
    </div>
  </nav>
</div>

</div>
`;

let footer = `
<small>© Todos los derechos reservados 2022 | PetTopia</small>
`;

$("body").append(modal);
$("#header").append(header);
$("#footer").append(footer);

if ($(".boxSliderHero")[0]) {
    ///slider Hero
    $(".boxSliderHero").slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
    });

    ///slide serivicios
    $(".sliderServicios").slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: false,
        infinite: true,
        speed: 500,
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><img src='image/left.svg'></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><img src='image/right.svg'></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                },
            },
        ],
    });
} else {
    console.log("no esta la clase boxSliderHero");
}

////metodo registrar
$("#registro").on("click", () => {
    $("#mdGeneral").modal("show");
    $(".modal-title").html("Registro exitoso");
    $(".modal-body").html(`
    <p>Recuerda tu usuario y contraseña para acceder a tu cuenta</p>
    <div class="boxWhite lista">
    <ul>
        <li> <strong>usuario:</strong> ${user}</li>
        <li> <strong>contraseña:</strong> ${pass}</li>
    </ul>
</div>
    `);
});

///// login
$("#login").on("click", () => {
    $("#mdGeneral").modal("show");
    $(".modal-title").html("Acceso concedido");
    $(".modal-body").html(`
        <a href="dashboard.html" class="btn btn-info">Continuar</a>
    `);
});

////metodo agendar
$("#agendar").on("click", () => {
    $("#mdGeneral").modal("show");
    $(".modal-title").html("Agendamieto exitoso");
    $(".modal-body").html(`
        <p class="d-block text-center">Recuerda la fecha y la hora de tu cita</p>
       <div class="boxWhite lista">
            <ul>
                <li> <strong>día:</strong> 12 octubre 2022 </li>
                <li> <strong>hora:</strong> 2:00 p.m.</li>
                <li> <strong>servicio:</strong> baño y peluquería </li>
            </ul>
       </div>
        <figure class="pareja"><img src="image/pairPet.svg"></figure>  
    `);
});
////metodo detalle
$(".detalleModal").on("click", () => {
    $("#mdGeneral").modal("show");
    $(".modal-title").html("Baño y peluquería");
    $(".modal-body").html(`
        <p class="d-block text-center">Viernes 12 / OCT / 22  Hora: 3:00 p. m.</p>
        <p class="d-block text-center">Se le implemento un champu especial para el cuidado del cabello según la raza.</p>
        <small class="d-block text-center commentDetail"><strong>Recomendaciones:</strong> lorem indusrsr jhsgufs </small>
         
        <figure class="pareja"><img src="image/pairPet.svg"></figure>  
    `);
});


//////(metodos menu)
if ($('body').hasClass('iniContent') || $('body').hasClass('loginContent') || $('body').hasClass('registroContent')  ) {
    $('.dataUserDash').hide();
    $('.btnexit').hide();
}
if ($('body').hasClass('agendarContent') || $('body').hasClass('dashboardContent') ) {
    $('.menu').hide();
    $('.btnlogin').hide();
    $('.btnagendar').hide();
}




