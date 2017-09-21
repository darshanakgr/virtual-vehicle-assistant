var vehicleList = ['Alfa Romeo',
    'Aston Martin',
    'Audi',
    'Bentley',
    'Benz',
    'BMW',
    'Bugatti',
    'Cadillac',
    'Chevrolet',
    'Chrysler',
    'Citroen',
    'Corvette',
    'DAF',
    'Dacia',
    'Daewoo',
    'Daihatsu',
    'Datsun',
    'De Lorean',
    'Dino',
    'Dodge',
    'Farboud',
    'Ferrari',
    'Fiat',
    'Ford',
    'Honda',
    'Hummer',
    'Hyundai',
    'Jaguar',
    'Jeep',
    'KIA',
    'Koenigsegg',
    'Lada',
    'Lamborghini',
    'Lancia',
    'Land Rover',
    'Lexus',
    'Ligier',
    'Lincoln',
    'Lotus',
    'Martini',
    'Maserati',
    'Maybach',
    'Mazda',
    'McLaren',
    'Mercedes',
    'Mercedes-Benz',
    'Mini',
    'Mitsubishi',
    'Nissan',
    'Noble',
    'Opel',
    'Peugeot',
    'Pontiac',
    'Porsche',
    'Renault',
    'Rolls-Royce',
    'Rover',
    'Saab',
    'Seat',
    'Skoda',
    'Smart',
    'Spyker',
    'Subaru',
    'Suzuki',
    'Toyota',
    'Vauxhall',
    'Volkswagen',
    'Volvo'];

vehicleList.forEach(function (t) {
    $('[name=manufacturer]').append($('<option>', {
        value:t,
        text:t
    }));
});

for(var i = 1970; i <= new Date().getFullYear(); i++){
    $('[name=year]').append($('<option>', {
        value:i,
        text:i
    }));
}

$('form#register-nre-vehicle').on('submit', function (e) {
    e.preventDefault();

    var fileList = $('[name=image-uploads]').get(0).files;

    for(var i = 0; i < fileList.length; i++){
        console.log(fileList[i].name);
    }

    var manufacturer = $('[name=manufacturer]').val();
    var model = $('[name=model]').val();
    var year = $('[name=year]').val();
    var transmission = $('[name=transmission]').val();
    var color = $('[name=color]').val();
    var millage = $('[name=millage]').val();
    var otherInformation = $('[name=other-information]').val();
    
    var vehicle = {
        manufacturer,
        model,
        transmission,
        color,
        millage,
        otherInformation
    };

    var db = firebase.database();

    db.ref().child('vehicle').child('V001').set(vehicle);

});
