    // Scrolly (parallax)
    $('.parallax').scrolly(
        //{bgParallax: true}
    );

    // función quitar clase si es dispositivo móvil
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	// mobile!
    	$('.cursos .card').removeClass('fancybox-pdf');
	}