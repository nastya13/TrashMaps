/**
 * Created by Кель on 18.11.2014.
 */
var myMap;
var placeMarks = [];
var clicked = [];
var routeClicked = false;
var currentRoute;
var trucks = [];
var buckets = [];
var areas = [];
var mainArea;
var realBucket;
var curAutoRoute;
var isAreasShown = false, isTruckVisible = true, isBucketsVisible = true, isSatelliteMode = false, isAutoRouted = false;
var lastId = -123;
var autoRoutCase;
var msk_district, kirov_district, vahit_district, sov_district, nsav_district, privol_district, avia_district;
var msk_truck, kirov_truck, vahit_truck, sov_truck, nsav_truck, privol_truck, avia_truck;
var routes = [];

function changeZoneColor(color) {
    mainArea.options.set('fillColor', color);
}

function routeCase1() {
    myMap.geoObjects.remove(r);
    // Авиастроительный
     var r1 = ymaps.route(avia_district.concat([avia_truck])).then(function (route) {
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });


    // Московский
    var r2 = ymaps.route(msk_district.concat([msk_truck])).then(function (route) {
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

    // Вахитовский
    var r3 = ymaps.route(vahit_district.concat([vahit_truck])).then(function (route) {
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });


    // Новосавиновский
    var r4 = ymaps.route(nsav_district.concat([nsav_truck])).then(function (route) {
        console.log("НОВОСАВИНОВСИКЙ РАЙОН :: " + nsav_district.length);
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

    // Кировский
    var r5 = ymaps.route(kirov_district.concat([kirov_truck])).then(function (route) {
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

    // Приволжский
    var r6 = ymaps.route(privol_district.concat([privol_truck])).then(function (route) {
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

    // Советский
    var r7 = ymaps.route(privol_district.concat([sov_truck])).then(function (route) {
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });



}

function routeCase2(){

    // Авиастроительный + Московский
    ymaps.route(avia_district.concat(msk_district).concat([msk_truck])).then(function (route) {
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

    //Кировский + Вахитовский
    ymaps.route(kirov_district.concat(vahit_district).concat([vahit_truck])).then(function (route) {
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

    // Ново-Савиновский;
    ymaps.route(nsav_district.concat([nsav_truck])).then(function (route) {
        console.log("НОВОСАВИНОВСИКЙ РАЙОН :: " + nsav_district.length);
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

    // Приволжский
    ymaps.route(privol_district.concat([privol_truck])).then(function (route) {
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

    // Советский
    ymaps.route(sov_district.concat([sov_truck])).then(function (route) {
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });
}

function routeCase3(){

    // Вахитовский и Приволжский
    ymaps.route(vahit_district.concat(privol_district).concat([vahit_truck])).then(function (route) {
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

    // Московский + Кировский + Авиастроительный
    ymaps.route(msk_district.concat(kirov_district).concat(avia_district).concat([msk_truck])).then(function (route) {
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

    // Новосавиновский + Советский
    ymaps.route(nsav_district.concat(sov_district).concat([nsav_truck])).then(function (route) {
        curAutoRoute = route;
        myMap.geoObjects.add(route);
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

}

function autoRoute() {
    if (!isAutoRouted) {
        isAutoRouted = true;
        //ymaps.route.options.set({ strokeColor: "0000ffff", opacity: 0.9 });
        //Опишем точки, в которые нам нужно заехать. Маршрут проложится автоматически
        switch (autoRoutCase){
            case 1:
                routeCase1();
                break;
            case 2:
                routeCase2();
                break;
            case 3:
                routeCase3();
                break;
        }


    } else {
        isAutoRouted = false;
        myMap.geoObjects.remove(curAutoRoute);
    }
}

function drawAreas() {
    addPolygon(firstRegion, true);
    addPolygon(fifthRegion, false);
    addPolygon(secondRegion, false);
    addPolygon(thirdRegion, false);
    addPolygon(fourRegion, false);
    addPolygon(sixthRegion, false);
}

function showTrucks() {
    for (var i = 0; i < trucks.length; i++) {
        trucks[i].options.set('visible', true);
    }
}

function hideTrucks() {
    for (var i = 0; i < trucks.length; i++) {
        trucks[i].options.set('visible', false);
    }
}

function changeTruckVisible() {
    if (isBucketsVisible) {
        hideTrucks();
        isBucketsVisible = false;
    } else {
        showTrucks();
        isBucketsVisible = true;
    }
}

function showBuckets() {
    for (var i = 0; i < buckets.length; i++) {
        buckets[i].options.set('visible', true);
    }
}

function hideBuckets() {
    for (var i = 0; i < buckets.length; i++) {
        buckets[i].options.set('visible', false);
    }
}

function changeBucketVisible() {
    if (isTruckVisible) {
        hideBuckets();
        isTruckVisible = false;
    } else {
        showBuckets();
        isTruckVisible = true;
    }
}

function hideAreas() {
    for (var i = 0; i < areas.length; i++) {
        areas[i].options.set('visible', false);
    }
}

function showAreas() {
    for (var i = 0; i < areas.length; i++) {
        areas[i].options.set('visible', true);
    }
}

function changeRegionMap() {
    if (isAreasShown) {
        hideAreas();
        isAreasShown = false;
    } else {
        showAreas()
        isAreasShown = true;
    }
}


function parameterBuilder() {
    var out = [];
    for (var index = 0; index < clicked.length; index++) {
        out[index] = clicked[index].geometry.getCoordinates();
    }
    console.log(out);
    return out;

}

function changeMapType() {
    if (!isSatelliteMode) {
        myMap.setType('yandex#satellite');
        isSatelliteMode = true;
    } else {
        myMap.setType('yandex#map');
        isSatelliteMode = false;
    }
}
function genDataRoute(econ, ecol) {
    var econ_span, ecol_span;
    var min = 100 / 3, mid = 200 / 3;
    max = 100;

    //specify ecology value interval
    if (ecol < min)
        ecol_span = 1;
    else if (ecol < mid)
        ecol_span = 2;
    else
        ecol_span = 3;

    //specify economy value interval
    if (econ < min)
        econ_span = 1;
    else if (econ < mid)
        econ_span = 2;
    else
        econ_span = 3;

    //specify case of trucks location
    autoRoutCase = 0;
    if (econ_span == 3 && ecol_span == 1)
        autoRoutCase = 1;
    else if (econ_span == 2 && ecol_span == 2)
        autoRoutCase = 2;
    else if (ecol_span == 1 && econ_span == 3)
        autoRoutCase = 3;


}
function drawCustomRoute() {
    //после нажатия на эту кнопку, выбираются баки, которые хочет собрать водитель
    //далее опять нажимается эта кнопка и прокладывается оптимальный маршрут для выбранных баков
    if (!routeClicked) {
        addRoute();
        routeClicked = true;
    } else {
        routeClicked = false;
        myMap.geoObjects.remove(currentRoute);
        for (var i = 0; i <= clicked.length; i++) {
            if (trucks.indexOf(clicked[i]) >= 0) {
                clicked[i].options.set('iconImageHref', 'Icons/garbage-truck.png');
            } else {
                switch (icons[buckets.indexOf(clicked[i])]) {
                    case 0:
                        clicked[i].options.set('iconImageHref', 'Icons/trash.png');
                        break;
                    case 1:
                        clicked[i].options.set('iconImageHref', 'Icons/trash-yellow-stroke.png');
                        break;
                    case 2:
                        clicked[i].options.set('iconImageHref', 'Icons/trash-orange-stroke.png');
                        break;
                    case 3:
                        clicked[i].options.set('iconImageHref', 'Icons/trash-red-stroke.png');
                        break;
                }
            }
        }
        clicked = [];
    }

}
// реагирование на приходящее смс
ymaps.ready(function () {

    myMap = new ymaps.Map('map', {
        center: [55.796395, 49.106971],
        zoom: 12,
        type: 'yandex#map',
        controls: []
    });


    var latitude = ymaps.geolocation.latitude;
    var longitude = ymaps.geolocation.longitude;
    console.log(latitude);
    console.log(longitude);

    console.log("MyLOGS", "!!!!!!!!!!!!!!!!!!!!!!!!!HMMMM!!!!!!!!!!!!!!!!");

    setInterval(function () {
        console.log("MyLOGS", "!!!!!!!!!!!!!!!!!!!!!!!!!IN SETINTERVAL FUNCTION!!!!!!!!!!!!!!!!");
        if (app.hasNewData()) {
            console.log("MyLOGS", "!!!!!!!!!!!!!!!!!!!!!!!!!APP HAS NEW DATA!!!!!!!!!!!!!!!!");
            var ID = app.getLastID();
            var filling = app.getLastFilling();
            app.makeToast("ID: " + ID + ", degree: " + filling, true);
            switch (filling) {
                case '0':
                    realBucket.options.set('iconImageHref', 'Icons/trash.png');
                    changeZoneColor(yellow);
                    break;
                case '1':
                    realBucket.options.set('iconImageHref', 'Icons/trash-yellow-stroke.png');
                    changeZoneColor(yellow);
                    break;
                case '2':
                    realBucket.options.set('iconImageHref', 'Icons/trash-orange-stroke.png');
                    changeZoneColor(yellow);
                    break;
                case '3':
                    realBucket.options.set('iconImageHref', 'Icons/trash-red-stroke.png');
                    changeZoneColor(red);
                    break;
            }
        }else
            console.log("MyLOGS", "!!!!!!!!!!!!!!!!!!!!!!!!!APP HASN`T NEW DATA!!!!!!!!!!!!!!!!");
    }, 1000);

    drawAreas();
    changeZoneColor(yellow);
    hideAreas();

    realBucket = buckets[0];

    /*------------------------Координаты мусоровозов------------------------*/
    msk_truck = [55.864268, 49.001104];
    kirov_truck = [55.797787, 49.068496];
    vahit_truck = [55.785043, 49.140487];
    sov_truck = [55.831954, 49.192742];
    nsav_truck = [55.823146, 49.14788];
    privol_truck = [55.732884, 49.104995];
    avia_truck = [55.90861, 49.06179];


    /*------------------------Координаты контейнеров------------------------*/
    vahit_district = [
        [55.785043, 49.140487],
        [55.788905, 49.133983],
        [55.775029, 49.136588],
        [55.779211, 49.130722],
        [55.79184, 49.131172],
        [55.793925, 49.151626],
        [55.733427, 49.129824]

    ]

    msk_district = [
        [55.872299, 48.969825],
        [55.865738, 48.923481],
        [55.892774, 48.960878 ],
        [55.881768, 48.893531],
        [55.897397, 48.898544]
    ]

    kirov_district = [
        [55.835301, 49.059154]
    ]

    sov_district = [
        [55.837004, 49.203549],
        [55.812737, 49.205444],
        [55.847493, 49.239356]
    ]

    avia_district = [
        [55.847432, 49.070203],
        [55.855593, 49.086373],
        [55.908611, 49.061786]
    ]

    privol_district = [
        [55.718978, 49.100189],
        [55.730335, 49.143299]
    ]

    nsav_district = [
        [55.850176, 49.090756],
        [55.830023, 49.160672],
        [55.811948, 49.077848],
        [55.839375, 49.063079],
        [55.849211, 49.153594],
        [55.820025, 49.175081],
        [55.814093, 49.103333]
    ]

/*------------------------Добавление контейнеров на карту------------------------*/
    //Ново-Савиновский район
    for (var i = 0; i < nsav_district.length; i++)
        addPlaceMark(nsav_district[i]);

    // Московский район
    for (var i = 0; i < msk_district.length; i++)
        addPlaceMark(msk_district[i]);

    //Советский
    for (var i = 0; i < sov_district.length; i++)
        addPlaceMark(sov_district[i]);

    //Приволжский
    for (var i = 0; i < privol_district.length; i++)
        addPlaceMark(privol_district[i]);

    //Вахитовский
    for (var i = 0; i < vahit_district.length; i++)
        addPlaceMark(vahit_district[i]);

    //Кировский
    for (var i = 0; i < kirov_district.length; i++)
    addPlaceMark(kirov_district[i]);

    //Авиастроительный
    for (var i = 0; i < avia_district.length; i++)
        addPlaceMark(avia_district[i]);

    /*------------------------Добавление мусоровозов на карту------------------------*/
    addTruck(avia_truck); // Авиастроительный
    addTruck(msk_truck); // Московский
    addTruck(nsav_truck); // Ново-савиновский (1)
    addTruck(sov_truck); // Советский
    addTruck(kirov_truck); // Кировский
    addTruck(vahit_truck); // Вахитовский
    addTruck(privol_truck); // Приволжский



});
