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
            title: "Cultuurhistorie Beeldbepalend Erfgoed",
            url: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?",
            sublayers: [
                {
                    title: "Historische orientatiepunten.",
                    name: "Historische orientatiepunten.",
                    featureInfoUrl: "http://geo.zuid-holland.nl/data/chs/tekst/BBE/Beeldbepalend%20Erfgoed%20obve.html",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Historische orientatiepunten." // url to the legend
                },
                {
                    title: "Sociale woningbouw onder architectuur.",
                    name: "Sociale woningbouw onder architectuur.",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Sociale woningbouw onder architectuur." // url to the legend
                },
                {
                    title: "Beeldbepalend erfgoed op basis van enquete",
                    name: "Beeldbepalend erfgoed op basis van enquete",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Beeldbepalend erfgoed op basis van enquete",
                    visible: false
                },
                {
                    title: "Beeldbepalend erfgoed op basis van Canon Zuid-Holland",
                    name: "Beeldbepalend erfgoed op basis van Canon Zuid-Holland",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Beeldbepalend erfgoed op basis van Canon Zuid-Holland",
                    visible: false
                },
                {
                    title: "Sociale woningbouw onder architectuur",
                    name: "Sociale woningbouw onder architectuur",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Sociale woningbouw onder architectuur",
                    visible: false
                },
                {
                    title: "Kerken gebouwd tot 1500",
                    name: "Kerken gebouwd tot 1500",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Kerken gebouwd tot 1500",
                    visible: false
                },
                {
                    title: "Landhuizen gebouwd tot 1500",
                    name: "Landhuizen gebouwd tot 1500",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Landhuizen gebouwd tot 1500",
                    visible: false
                },
                {
                    title: "Poorten gebouwd tot 1500",
                    name: "Poorten gebouwd tot 1500",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Poorten gebouwd tot 1500",
                    visible: false
                },
                {
                    title: "Stadhuizen gebouwd tot 1500",
                    name: "Stadhuizen gebouwd tot 1500",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Stadhuizen gebouwd tot 1500",
                    visible: false
                },
                {
                    title: "Vestingtorens gebouwd tot 1500",
                    name: "Vestingtorens gebouwd tot 1500",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Vestingtorens gebouwd tot 1500",
                    visible: false
                },
                {
                    title: "Windmolens gebouwd tot 1500",
                    name: "Windmolens gebouwd tot 1500",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Windmolens gebouwd tot 1500",
                    visible: false
                },
                {
                    title: "Zichtcirkels tot 1500",
                    name: "Zichtcirkels tot 1500",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Zichtcirkels tot 1500",
                    visible: false
                },
                {
                    title: "Kerken gebouwd tussen 1500 en 1800",
                    name: "Kerken gebouwd tussen 1500 en 1800",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Kerken gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Landhuizen gebouwd tussen 1500 en 1800",
                    name: "Landhuizen gebouwd tussen 1500 en 1800",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Landhuizen gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Poorten gebouwd tussen 1500 en 1800",
                    name: "Poorten gebouwd tussen 1500 en 1800",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Poorten gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Stadhuizen gebouwd tussen 1500 en 1800",
                    name: "Stadhuizen gebouwd tussen 1500 en 1800",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Stadhuizen gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Vestingtoren gebouwd tussen 1500 en 1800",
                    name: "Vestingtoren gebouwd tussen 1500 en 1800",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Vestingtoren gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Vuurtorens gebouwd tussen 1500 en 1800",
                    name: "Vuurtorens gebouwd tussen 1500 en 1800",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Vuurtorens gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Windmolens gebouwd tussen 1500 en 1800",
                    name: "Windmolens gebouwd tussen 1500 en 1800",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Windmolens gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Zichtcirkels tussen 1500 en 1800",
                    name: "Zichtcirkels tussen 1500 en 1800",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Zichtcirkels tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Bruggen gebouwd tussen 1800 en 1945",
                    name: "Bruggen gebouwd tussen 1800 en 1945",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Bruggen gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Industrieen gebouwd tussen 1800 en 1945",
                    name: "Industrieen gebouwd tussen 1800 en 1945",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Industrieen gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Kantoren gebouwd tussen 1800 en 1945",
                    name: "Kantoren gebouwd tussen 1800 en 1945",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Kantoren gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Kerken gebouwd tussen 1800 en 1945",
                    name: "Kerken gebouwd tussen 1800 en 1945",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Kerken gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Stadhuizen gebouwd tussen 1800 en 1945",
                    name: "Stadhuizen gebouwd tussen 1800 en 1945",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Stadhuizen gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Uitkijktorens gebouwd tussen 1800 en 1945",
                    name: "Uitkijktorens gebouwd tussen 1800 en 1945",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Uitkijktorens gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Vuurtorens gebouwd tussen 1800 en 1945",
                    name: "Vuurtorens gebouwd tussen 1800 en 1945",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Vuurtorens gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Watertorens gebouwd tussen 1800 en 1945",
                    name: "Watertorens gebouwd tussen 1800 en 1945",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Watertorens gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Windmolens gebouwd tussen 1800 en 1945",
                    name: "Windmolens gebouwd tussen 1800 en 1945",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Windmolens gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Zichtcirkels tussen 1800-1945",
                    name: "Zichtcirkels tussen 1800-1945",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Zichtcirkels tussen 1800-1945",
                    visible: false
                },
                {
                    title: "Monumentale bebouwing gebouw voor 1500",
                    name: "Monumentale bebouwing gebouw voor 1500",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Monumentale bebouwing gebouw voor 1500",
                    visible: false
                },
                {
                    title: "Waterwegen of kanalen of vaarten in 1500",
                    name: "Waterwegen of kanalen of vaarten in 1500",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Waterwegen of kanalen of vaarten in 1500",
                    visible: false
                },
                {
                    title: "Bebouw gebied en landschap en water in 1500",
                    name: "Bebouw gebied en landschap en water in 1500",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Bebouw gebied en landschap en water in 1500",
                    visible: false
                },
                {
                    title: "Monumentale bebouwing gebouw voor 1850",
                    name: "Monumentale bebouwing gebouw voor 1850",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Monumentale bebouwing gebouw voor 1850",
                    visible: false
                },
                {
                    title: "Waterwegen of kanalen of vaarten in 1850",
                    name: "Waterwegen of kanalen of vaarten in 1850",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Waterwegen of kanalen of vaarten in 1850",
                    visible: false
                },
                {
                    title: "Bebouw gebied en landschap en water in 1850",
                    name: "Bebouw gebied en landschap en water in 1850",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Bebouw gebied en landschap en water in 1850",
                    visible: false
                },
                {
                    title: "Monumentale bebouwing gebouw voor 2000",
                    name: "Monumentale bebouwing gebouw voor 2000",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Monumentale bebouwing gebouw voor 2000",
                    visible: false
                },
                {
                    title: "Waterwegen of kanalen of vaarten in 2000",
                    name: "Waterwegen of kanalen of vaarten in 2000",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Waterwegen of kanalen of vaarten in 2000",
                    visible: false
                },
                {
                    title: "Bebouw gebied en landschap en water in 2000",
                    name: "Bebouw gebied en landschap en water in 2000",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Bebouw gebied en landschap en water in 2000",
                    visible: false
                },
                {
                    title: "Beeldbepalend erfgoed op basis van enquete.",
                    name: "Beeldbepalend erfgoed op basis van enquete.",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Beeldbepalend erfgoed op basis van enquete.",
                    visible: false
                },
                {
                    title: "Beeldbepalend erfgoed op basis van Canon Zuid-Holland.",
                    name: "Beeldbepalend erfgoed op basis van Canon Zuid-Holland.",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Beeldbepalend erfgoed op basis van Canon Zuid-Holland.",
                    visible: false
                },
                {
                    title: "Sociale woningbouw onder architectuur.",
                    name: "Sociale woningbouw onder architectuur.",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Sociale woningbouw onder architectuur.",
                    visible: false
                },
                {
                    title: "Historische orientatiepunten.",
                    name: "Historische orientatiepunten.",
                    featureInfoUrl: "",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Beeldbepalend_Erfgoed/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Historische orientatiepunten.",
                    visible: false
                },
            ]
        });
        map.layers.add(cultuurPZH);

        var landschapPZH = new WMSLayer({
            title: "Cultuurhistorie Landschap",
            url: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?",
            sublayers: [
                {
                    title: "Beeldbepalend erfgoed op basis van enquete",
                    name: "Beeldbepalend erfgoed op basis van enquete",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Beeldbepalend erfgoed op basis van enquete",
                    visible: false
                },
                {
                    title: "Beeldbepalend erfgoed op basis van Canon Zuid-Holland",
                    name: "Beeldbepalend erfgoed op basis van Canon Zuid-Holland",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Beeldbepalend erfgoed op basis van Canon Zuid-Holland",
                    visible: false
                },
                {
                    title: "Sociale woningbouw onder architectuur",
                    name: "Sociale woningbouw onder architectuur",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Sociale woningbouw onder architectuur",
                    visible: false
                },
                {
                    title: "Kerken gebouwd tot 1500",
                    name: "Kerken gebouwd tot 1500",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Kerken gebouwd tot 1500",
                    visible: false
                },
                {
                    title: "Landhuizen gebouwd tot 1500",
                    name: "Landhuizen gebouwd tot 1500",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Landhuizen gebouwd tot 1500",
                    visible: false
                },
                {
                    title: "Poorten gebouwd tot 1500",
                    name: "Poorten gebouwd tot 1500",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Poorten gebouwd tot 1500",
                    visible: false
                },
                {
                    title: "Stadhuizen gebouwd tot 1500",
                    name: "Stadhuizen gebouwd tot 1500",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Stadhuizen gebouwd tot 1500",
                    visible: false
                },
                {
                    title: "Vestingtorens gebouwd tot 1500",
                    name: "Vestingtorens gebouwd tot 1500",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Vestingtorens gebouwd tot 1500",
                    visible: false
                },
                {
                    title: "Windmolens gebouwd tot 1500",
                    name: "Windmolens gebouwd tot 1500",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Windmolens gebouwd tot 1500",
                    visible: false
                },
                {
                    title: "Zichtcirkels tot 1500",
                    name: "Zichtcirkels tot 1500",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Zichtcirkels tot 1500",
                    visible: false
                },
                {
                    title: "Kerken gebouwd tussen 1500 en 1800",
                    name: "Kerken gebouwd tussen 1500 en 1800",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Kerken gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Landhuizen gebouwd tussen 1500 en 1800",
                    name: "Landhuizen gebouwd tussen 1500 en 1800",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Landhuizen gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Poorten gebouwd tussen 1500 en 1800",
                    name: "Poorten gebouwd tussen 1500 en 1800",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Poorten gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Stadhuizen gebouwd tussen 1500 en 1800",
                    name: "Stadhuizen gebouwd tussen 1500 en 1800",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Stadhuizen gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Vestingtoren gebouwd tussen 1500 en 1800",
                    name: "Vestingtoren gebouwd tussen 1500 en 1800",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Vestingtoren gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Vuurtorens gebouwd tussen 1500 en 1800",
                    name: "Vuurtorens gebouwd tussen 1500 en 1800",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Vuurtorens gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Windmolens gebouwd tussen 1500 en 1800",
                    name: "Windmolens gebouwd tussen 1500 en 1800",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Windmolens gebouwd tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Zichtcirkels tussen 1500 en 1800",
                    name: "Zichtcirkels tussen 1500 en 1800",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Zichtcirkels tussen 1500 en 1800",
                    visible: false
                },
                {
                    title: "Bruggen gebouwd tussen 1800 en 1945",
                    name: "Bruggen gebouwd tussen 1800 en 1945",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Bruggen gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Industrieen gebouwd tussen 1800 en 1945",
                    name: "Industrieen gebouwd tussen 1800 en 1945",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Industrieen gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Kantoren gebouwd tussen 1800 en 1945",
                    name: "Kantoren gebouwd tussen 1800 en 1945",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Kantoren gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Kerken gebouwd tussen 1800 en 1945",
                    name: "Kerken gebouwd tussen 1800 en 1945",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Kerken gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Stadhuizen gebouwd tussen 1800 en 1945",
                    name: "Stadhuizen gebouwd tussen 1800 en 1945",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Stadhuizen gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Uitkijktorens gebouwd tussen 1800 en 1945",
                    name: "Uitkijktorens gebouwd tussen 1800 en 1945",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Uitkijktorens gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Vuurtorens gebouwd tussen 1800 en 1945",
                    name: "Vuurtorens gebouwd tussen 1800 en 1945",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Vuurtorens gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Watertorens gebouwd tussen 1800 en 1945",
                    name: "Watertorens gebouwd tussen 1800 en 1945",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Watertorens gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Windmolens gebouwd tussen 1800 en 1945",
                    name: "Windmolens gebouwd tussen 1800 en 1945",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Windmolens gebouwd tussen 1800 en 1945",
                    visible: false
                },
                {
                    title: "Zichtcirkels tussen 1800-1945",
                    name: "Zichtcirkels tussen 1800-1945",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Zichtcirkels tussen 1800-1945",
                    visible: false
                },
                {
                    title: "Monumentale bebouwing gebouw voor 1500",
                    name: "Monumentale bebouwing gebouw voor 1500",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Monumentale bebouwing gebouw voor 1500",
                    visible: false
                },
                {
                    title: "Waterwegen of kanalen of vaarten in 1500",
                    name: "Waterwegen of kanalen of vaarten in 1500",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Waterwegen of kanalen of vaarten in 1500",
                    visible: false
                },
                {
                    title: "Bebouw gebied en landschap en water in 1500",
                    name: "Bebouw gebied en landschap en water in 1500",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Bebouw gebied en landschap en water in 1500",
                    visible: false
                },
                {
                    title: "Monumentale bebouwing gebouw voor 1850",
                    name: "Monumentale bebouwing gebouw voor 1850",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Monumentale bebouwing gebouw voor 1850",
                    visible: false
                },
                {
                    title: "Waterwegen of kanalen of vaarten in 1850",
                    name: "Waterwegen of kanalen of vaarten in 1850",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Waterwegen of kanalen of vaarten in 1850",
                    visible: false
                },
                {
                    title: "Bebouw gebied en landschap en water in 1850",
                    name: "Bebouw gebied en landschap en water in 1850",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Bebouw gebied en landschap en water in 1850",
                    visible: false
                },
                {
                    title: "Monumentale bebouwing gebouw voor 2000",
                    name: "Monumentale bebouwing gebouw voor 2000",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Monumentale bebouwing gebouw voor 2000",
                    visible: false
                },
                {
                    title: "Waterwegen of kanalen of vaarten in 2000",
                    name: "Waterwegen of kanalen of vaarten in 2000",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Waterwegen of kanalen of vaarten in 2000",
                    visible: false
                },
                {
                    title: "Bebouw gebied en landschap en water in 2000",
                    name: "Bebouw gebied en landschap en water in 2000",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Bebouw gebied en landschap en water in 2000",
                    visible: false
                },
                {
                    title: "Beeldbepalend erfgoed op basis van enquete.",
                    name: "Beeldbepalend erfgoed op basis van enquete.",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Beeldbepalend erfgoed op basis van enquete.",
                    visible: false
                },
                {
                    title: "Beeldbepalend erfgoed op basis van Canon Zuid-Holland.",
                    name: "Beeldbepalend erfgoed op basis van Canon Zuid-Holland.",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Beeldbepalend erfgoed op basis van Canon Zuid-Holland.",
                    visible: false
                },
                {
                    title: "Sociale woningbouw onder architectuur.",
                    name: "Sociale woningbouw onder architectuur.",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Sociale woningbouw onder architectuur.",
                    visible: false
                },
                {
                    title: "Historische orientatiepunten.",
                    name: "Historische orientatiepunten.",
                    legendUrl: "https://geoservices.zuid-holland.nl/arcgis/services/Cultuur/Cultuurhistorie_Landschap/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Historische orientatiepunten.",
                    visible: false
                }
            ]
        });

        // map.layers.add(landschapPZH);

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