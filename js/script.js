var caurselImages = [{
        image: "Kraina pewnego czarnoksieznika.jpg",
        title: '\"Kraina pewnego czarnoksiężnika\"',
        description: "Tomasz Sętowski",
        id: 1
    },
    {
        image: "Cwiczenia z lewitacji.jpg",
        title: '\"Ćwiczenia z lewitacji\"',
        description: "Tomasz Sętowski",
        id: 2
    },
    {
        image: "Ikona czasu.jpg",
        title: '\"Ikona czasu\"',
        description: "Tomasz Sętowski",
        id: 3
    },
    {
        image: "Dreamand.jpg",
        title: '\"Dreamand\"',
        description: "Tomasz Sętowski",
        id: 4
    },
    {
        image: "Kosci zostaly rzucone.jpg",
        title: '\"Kosci zostaly rzucone\"',
        description: "Tomasz Sętowski",
        id: 5
    }
];

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

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function(progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});

var reset = document.getElementById('button-restart');
reset.addEventListener('click', function() {
    flkty.selectCell(0);
})