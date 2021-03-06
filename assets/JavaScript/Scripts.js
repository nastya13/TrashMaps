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
var autoRoutes = [];
var isAreasShown = false, isTruckVisible = true, isBucketsVisible = true, isSatelliteMode = false, isAutoRouted = false;
var lastId = -123;
var autoRoutCase;
var msk_district, kirov_district, vahit_district, sov_district, nsav_district, privol_district, avia_district;
var msk_truck, kirov_truck, vahit_truck, sov_truck, nsav_truck, privol_truck, avia_truck;
var curAutoRoute;

function changeZoneColor(color) {
    mainArea.options.set('fillColor', color);
}

function routeCase1() {

    // Авиастроительный
    ymaps.route(avia_district.concat([avia_truck])).then(function (route) {
        autoRoutes[0] = route;
        myMap.geoObjects.add(route);
        route.options.set({ strokeWidth: 8, strokeColor: 'f26522ff', opacity: 0.9 });
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });


    // Московский
    ymaps.route(msk_district.concat([msk_truck])).then(function (route) {
        autoRoutes[1] = route;
        myMap.geoObjects.add(route);
        route.options.set({ strokeWidth: 3, strokeColor: '39b54aff', opacity: 0.9 });
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

    // Вахитовский
    ymaps.route(vahit_district.concat([vahit_truck])).then(function (route) {
        autoRoutes[2] = route;
        myMap.geoObjects.add(route);
        route.options.set({ strokeWidth: 4, strokeColor: '662d91ff', opacity: 0.9 });
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });


    // Новосавиновский
    ymaps.route(nsav_district.concat([nsav_truck])).then(function (route) {
        autoRoutes[3] = route;
        myMap.geoObjects.add(route);
        route.options.set({ strokeWidth: 2, strokeColor: 'ed145bff', opacity: 0.9 });
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

    // Кировский
    ymaps.route(kirov_district.concat([kirov_truck])).then(function (route) {
        autoRoutes[4] = route;
        myMap.geoObjects.add(route);
        route.options.set({strokeWidth: 8, strokeColor: '2e9592ff', opacity: 0.9 });
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
        autoRoutes[5] = route;
        myMap.geoObjects.add(route);
        route.options.set({ strokeWidth: 3, strokeColor: '00aeefff', opacity: 0.9 });
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });

    // Советский
    ymaps.route(privol_district.concat([sov_truck])).then(function (route) {
        autoRoutes[6] = route;
        myMap.geoObjects.add(route);
        route.options.set({ strokeWidth: 8, strokeColor: '00a99dff', opacity: 0.9 });
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });


}

function routeCase2() {

    // Авиастроительный + Московский
    ymaps.route(avia_district.concat(msk_district).concat([msk_truck])).then(function (route) {
        autoRoutes[0] = route;
        myMap.geoObjects.add(route);
        route.options.set({ strokeWidth: 4, strokeColor: 'f26522ff', opacity: 0.9 });
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
        autoRoutes[1] = route;
        myMap.geoObjects.add(route);
        route.options.set({ strokeWidth: 4, strokeColor: '39b54aff', opacity: 0.9 });
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
        autoRoutes[2] = route;
        myMap.geoObjects.add(route);
        route.options.set({ strokeWidth: 4, strokeColor: '662d91ff', opacity: 0.9 });

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
        autoRoutes[3] = route;
        myMap.geoObjects.add(route);
        route.options.set({ strokeWidth: 4, strokeColor: '2e9592ff', opacity: 0.9 });
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
        autoRoutes[4] = route;
        myMap.geoObjects.add(route);
        route.options.set({strokeWidth: 4, strokeColor: 'ed145bff', opacity: 0.9 });
        var points = route.getWayPoints(),
            lastPoint = points.getLength() - 1;
        //для того, чтобы на карте не было страшных "булавок"
        points.options.set('iconImageHref', './images/transparent.png');
        console.log(points);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });
}

function routeCase3() {

    // Вахитовский и Приволжский
    ymaps.route(vahit_district.concat(privol_district).concat([vahit_truck])).then(function (route) {
        autoRoutes[0] = route;
        myMap.geoObjects.add(route);
        route.options.set({ strokeWidth: 4, strokeColor: 'f26522ff', opacity: 0.9 });
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
        autoRoutes[1] = route;
        myMap.geoObjects.add(route);
        route.options.set({ strokeWidth: 4, strokeColor: '39b54aff', opacity: 0.9 });
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
        autoRoutes[2] = route;
        myMap.geoObjects.add(route);
        route.options.set({ strokeWidth: 4, strokeColor: '662d91ff', opacity: 0.9 });
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

        switch (autoRoutCase) {
            case 1:
                routeCase1();
                console.log("Case1");
                break;
            case 2:
                routeCase2();
                console.log("Case2");
                break;
            case 3:
                routeCase3();
                console.log("Case3");
                break;
        }


    } else {
        isAutoRouted = false;
        for (var i = 0; i < autoRoutes.length; i++)
            myMap.geoObjects.remove(autoRoutes[i]);
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

    console.log("econ_span = " + econ_span);
    console.log("ecol_span = " + ecol_span);

    //specify case of trucks location
    autoRoutCase = -1;
    if (econ_span == 3 && ecol_span == 1)
        autoRoutCase = 1;
    else if (econ_span == 2 && ecol_span == 2)
        autoRoutCase = 2;
    else if (econ_span == 1 && ecol_span == 3)
        autoRoutCase = 3;

    console.log("autoRoutCase = " + autoRoutCase);


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
    myMap.controls.add(new ymaps.control.MiniMap({type:'yandex#hybrid'},{zoomOffset: 3}));
    myMap.controls.add('smallZoomControl');

    var latitude = ymaps.geolocation.latitude;
    var longitude = ymaps.geolocation.longitude;
    console.log(latitude);
    console.log(longitude);

    setInterval(function () {
        if (app.hasNewData()) {
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
        }
    }, 1000);

    drawAreas();
    changeZoneColor(yellow);
    hideAreas();

    realBucket = [55.792134, 49.122126]; // Второе высотное здание КФУ


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

    addPlaceMark(realBucket); // Контейнер во втором высотном здании КФУ
    vahit_district.push(realBucket);

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