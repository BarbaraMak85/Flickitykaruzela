var caurselImages = [{
        image: "Nowe Metropolis.jpg",
        title: '\"Nowe Metropolis\"',
        description: "Tomasz Sętowski",
        id: 1,
        coords: { lat: 54.351, lng: 18.658 }


    },
    {
        image: "Cwiczenia z lewitacji.jpg",
        title: '\"Ćwiczenia z lewitacji\"',
        description: "Tomasz Sętowski",
        id: 2,
        coords: { lat: 44.203, lng: 2.798 }
    },
    {
        image: "Ikona czasu.jpg",
        title: '\"Ikona czasu\"',
        description: "Tomasz Sętowski",
        id: 3,
        coords: { lat: 50.831, lng: 19.085 }


    },
    {
        image: "Nadejscie wiosny.jpg",
        title: '\"Nadejście wiosny\"',
        description: "Tomasz Sętowski",
        id: 4,
        coords: { lat: 47.554, lng: 7.594 }

    },
    {
        image: "Kosci zostaly rzucone.jpg",
        title: '\"Kosci zostaly rzucone\"',
        description: "Tomasz Sętowski",
        id: 5,
        coords: { lat: 40.740, lng: -73.997 }

    }
];



var createMap = (centerId) => {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: caurselImages[centerId].coords
    });

    caurselImages.forEach(slide => {
        console.log("SLIDE");
        var marker = new google.maps.Marker({
            position: slide.coords,
            map: map
        });

        marker.addListener('click', function() {
            // Wewnątrz funcji wpisujemy kod, który ma się wykonać po kliknięciu markera. W tym przykładzie wyświetlimy tekst na stronie. 
            flkty.selectCell(slide.id - 1);
        });
    })



}

// Mapy
(function() {
    window.initMap = function() {
        createMap(0);
    };
})();



var templateList = document.getElementById('template-product-item').innerHTML;
Mustache.parse(templateList);

var results = document.getElementById('carousel');

caurselImages.forEach(x => {
    var fullProductList = Mustache.render(templateList, x);
    results.insertAdjacentHTML('beforeend', fullProductList);
});

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    hash: true,
    pageDots: false
});

flkty.on('change', function(index) {
    createMap(index);
});


var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function(progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});

var reset = document.getElementById('button-restart');
reset.addEventListener('click', function() {
    flkty.selectCell(0);
})