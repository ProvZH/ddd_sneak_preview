require([
    "esri/views/MapView",
    "esri/Map",
    "esri/layers/WMSLayer",
    "esri/widgets/LayerList",
    "esri/widgets/Legend"
], function (MapView, Map, WMSLayer, LayerList, Legend
) {
        // INIT MAP
        var map = new Map({
            basemap: "dark-gray"
        });

        // CREATE the 2D Mapview
        var view = new MapView({
            container: "map",  // Reference to the DOM node that will contain the view
            map: map               // References the map object created in step 3
        });
    view.center = [4.306, 52.07]  // Sets the center point of the view at a specified lon/lat
        view.zoom = 10; 
        // WMS Layers
        var cultuurPZH = new WMSLayer({
            title: "Zonnewijzer",
            url: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?",
            sublayers: [
                {
                    title: "Grote daken [meer dan 180 panelen]",
                    name: "Grote daken [meer dan 180 panelen]",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Grote daken [meer dan 180 panelen]",
                    visible: false
                },
                {
                    title: "Provincie Zuid-Holland - Totale potentiele opbrengst woningen grote daken en voorkeurslocaties",
                    name: "Provincie Zuid-Holland - Totale potentiele opbrengst woningen grote daken en voorkeurslocaties",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Provincie Zuid-Holland - Totale potentiele opbrengst woningen grote daken en voorkeurslocaties",
                    visible: false
                },
                {
                    title: "Gemeente - Gerealiseerde productie SDE projecten [MWh/jaar]",
                    name: "Gemeente - Gerealiseerde productie SDE projecten [MWh/jaar]",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Gemeente - Gerealiseerde productie SDE projecten [MWh/jaar]",
                    visible: false
                },
                {
                    title: "Gemeente - Gerealiseerde productie kleinverbruikers [MWh/jaar]",
                    name: "Gemeente - Gerealiseerde productie kleinverbruikers [MWh/jaar]",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Gemeente - Gerealiseerde productie kleinverbruikers [MWh/jaar]",
                    visible: false
                },
                {
                    title: "Buurt - Potentiele opbrengst/ha [MWh/jaar] - woningen",
                    name: "Buurt - Potentiele opbrengst/ha [MWh/jaar] - woningen",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Buurt - Potentiele opbrengst/ha [MWh/jaar] - woningen",
                    visible: true
                },
                {
                    title: "Buurt - Potentiele opbrengst/ha [MWh/jaar]  - grote daken [meer dan 180 panelen]",
                    name: "Buurt - Potentiele opbrengst/ha [MWh/jaar]  - grote daken [meer dan 180 panelen]",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Buurt - Potentiele opbrengst/ha [MWh/jaar]  - grote daken [meer dan 180 panelen]",
                    visible: false
                },
                {
                    title: "Gemeente - Potentiele opbrengst/ha [MWh/jaar]  - woningen",
                    name: "Gemeente - Potentiele opbrengst/ha [MWh/jaar]  - woningen",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Gemeente - Potentiele opbrengst/ha [MWh/jaar]  - woningen",
                    visible: false
                },
                {
                    title: "Gemeente - Potentiele opbrengst/ha [MWh/jaar]  - grote daken [meer dan 180 panelen]",
                    name: "Gemeente - Potentiele opbrengst/ha [MWh/jaar]  - grote daken [meer dan 180 panelen]",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Gemeente - Potentiele opbrengst/ha [MWh/jaar]  - grote daken [meer dan 180 panelen]",
                    visible: false
                },
                {
                    title: "Experimenten zonne-energie Provincie Zuid-Holland",
                    name: "Experimenten zonne-energie Provincie Zuid-Holland",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Experimenten zonne-energie Provincie Zuid-Holland",
                    visible: false
                },
                {
                    title: "Voorkeurslocaties - Agrarische bedrijven",
                    name: "Voorkeurslocaties - Agrarische bedrijven",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Voorkeurslocaties - Agrarische bedrijven",
                    visible: false
                },
                {
                    title: "Voorkeurslocaties - Bouwblok bestemmingsplan",
                    name: "Voorkeurslocaties - Bouwblok bestemmingsplan",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Voorkeurslocaties - Bouwblok bestemmingsplan",
                    visible: false
                },
                {
                    title: "Voorkeurslocaties - Bouwblok geschikt zonneveld",
                    name: "Voorkeurslocaties - Bouwblok geschikt zonneveld",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Voorkeurslocaties - Bouwblok geschikt zonneveld",
                    visible: false
                },
                {
                    title: "Voorkeurslocaties - Geluidsweringen",
                    name: "Voorkeurslocaties - Geluidsweringen",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Voorkeurslocaties - Geluidsweringen",
                    visible: false
                },
                {
                    title: "Voorkeurslocaties - Restruimtes langs infra",
                    name: "Voorkeurslocaties - Restruimtes langs infra",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Voorkeurslocaties - Restruimtes langs infra",
                    visible: false
                },
                {
                    title: "Voorkeurslocaties - Parkeerplaatsen",
                    name: "Voorkeurslocaties - Parkeerplaatsen",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Voorkeurslocaties - Parkeerplaatsen",
                    visible: false
                },
                {
                    title: "Voorkeurslocaties - Parkeerplaatsen geschikt zonnedak",
                    name: "Voorkeurslocaties - Parkeerplaatsen geschikt zonnedak",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Voorkeurslocaties - Parkeerplaatsen geschikt zonnedak",
                    visible: false
                },
                {
                    title: "Voorkeurslocaties - Actieve stortplaatsen",
                    name: "Voorkeurslocaties - Actieve stortplaatsen",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Voorkeurslocaties - Actieve stortplaatsen",
                    visible: false
                },
                {
                    title: "Voorkeurslocaties - Actieve stortplaatsen geschikt zonneveld",
                    name: "Voorkeurslocaties - Actieve stortplaatsen geschikt zonneveld",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Voorkeurslocaties - Actieve stortplaatsen geschikt zonneveld",
                    visible: false
                },
                {
                    title: "Voorkeurslocaties - Voormalige stortplaatsen",
                    name: "Voorkeurslocaties - Voormalige stortplaatsen",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Voorkeurslocaties - Voormalige stortplaatsen",
                    visible: false
                },
                {
                    title: "Voorkeurslocaties - Voormalige stortplaatsen geschikt zonneveld",
                    name: "Voorkeurslocaties - Voormalige stortplaatsen geschikt zonneveld",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Voorkeurslocaties - Voormalige stortplaatsen geschikt zonneveld",
                    visible: false
                },
                {
                    title: "Brongegevens - Rijks- provinciale en spoorwegen",
                    name: "Brongegevens - Rijks- provinciale en spoorwegen",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Brongegevens - Rijks- provinciale en spoorwegen",
                    visible: false
                },
                {
                    title: "Brongegevens - Eigendom langs rijks- provinciale en spoorwegen",
                    name: "Brongegevens - Eigendom langs rijks- provinciale en spoorwegen",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Brongegevens - Eigendom langs rijks- provinciale en spoorwegen",
                    visible: false
                },
                {
                    title: "Brongegevens - BSD [bestaand stads en dorpsgebied]",
                    name: "Brongegevens - BSD [bestaand stads en dorpsgebied]",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Brongegevens - BSD [bestaand stads en dorpsgebied]",
                    visible: false
                },
                {
                    title: "Brongegevens - NatuurnetwerkNederland [belemmering]",
                    name: "Brongegevens - NatuurnetwerkNederland [belemmering]",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Brongegevens - NatuurnetwerkNederland [belemmering]",
                    visible: false
                },
                {
                    title: "Provincie Zuid-Holland - Totale gerealiseerde opbrengst SDE projecten en kleinverbruikers [1-1-2017]",
                    name: "Provincie Zuid-Holland - Totale gerealiseerde opbrengst SDE projecten en kleinverbruikers [1-1-2017]",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Zonnewijzer/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Provincie Zuid-Holland - Totale gerealiseerde opbrengst SDE projecten en kleinverbruikers [1-1-2017]",
                    visible: false
                }
            ]
        });
        map.layers.add(cultuurPZH);

        // LAYER LIST WIDGET
        var layerlist = new LayerList({
            view: view
        });
        // Adds widget below other elements in the top left corner of the view
        view.ui.add(layerlist, {
            position: "top-left"
        });

        // LEGEND WIDGET
        var legend = new Legend({
            view: view,
            layerInfos: [{
                layer: cultuurPZH,
                title: "Legend"
            }]
        });
        // Adds widget below other elements bottom right corner of the view
        view.ui.add(legend, "bottom-right");
    });






    // map.layers.add(bakkenGron);


    // Create the SceneLayer and add to the map
    // sceneLayer = new SceneLayer({
    //     portalItem: {
    //         id: "c8cb478cd4da4206a56e2a2fba545ccf"
    //     }
    // });
    // map.add(sceneLayer);


    // // Carbon storage of trees in Warren Wilson College.
    // var featureLayer = new FeatureLayer({
    //     url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
    // });

    // map.add(featureLayer);

    // // Existing web Map
    // var webmap = new WebMap({
    //     portalItem: {
    //         id: "c8cb478cd4da4206a56e2a2fba545ccf"
    //     }
    // });
    // // Map view. 
    // var view = new MapView({
    //     map: webmap,
    //     container: "map",
    //     layers: [cultuurPZH]
    // });




    // // Create a WebTileLayer with a third-party cached service
    // var mapBaseLayer = new WebTileLayer({
    //     urlTemplate: "https://stamen-tiles-{subDomain}.a.ssl.fastly.net/terrain/{level}/{col}/{row}.png",
    //     subDomains: ["a", "b", "c", "d"],
    //     copyright: "Map tiles by <a href=\"http://stamen.com/\">Stamen Design</a>, " +
    //         "under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>. " +
    //         "Data by <a href=\"http://openstreetmap.org/\">OpenStreetMap</a>, " +
    //         "under <a href=\"http://creativecommons.org/licenses/by-sa/3.0\">CC BY SA</a>."
    // });

    // // Create a Basemap with the WebTileLayer. The thumbnailUrl will be used for
    // // the image in the BasemapToggle widget.
    // var stamen = new Basemap({
    //     baseLayers: [mapBaseLayer],
    //     title: "Terrain",
    //     id: "terrain",
    //     thumbnailUrl: "https://stamen-tiles.a.ssl.fastly.net/terrain/10/177/409.png"
    // });

    // // Add the custom basemap to the map
    // var map = new Map({
    //     basemap: stamen,
    //     ground: "world-elevation"
    // });


    // var initCamera = {
    //     heading: 124.7,
    //     tilt: 82.9,
    //     position: {
    //         latitude: 52.0,
    //         longitude: 5.1,
    //         z: 50
    //     }
    // };

    // var view = new SceneView({
    //     container: "map",
    //     map: map,
    //     camera: initCamera
    // });

    // view.when(function () {
    //     // Add a basemap toggle widget to toggle between basemaps
    //     var toggle = new BasemapToggle({
    //         titleVisible: true,
    //         view: view,
    //         nextBasemap: webmap
    //     });

    //     // Add widget to the top right corner of the view
    //     view.ui.add(toggle, "top-right");
    // });