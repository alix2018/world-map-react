import * as am4core from "@amcharts/amcharts4/core"; // Core functionality
import * as am4maps from "@amcharts/amcharts4/maps"; // Maps
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
import {globeIconPath} from './globeIconPath';

function useChart(chartDiv) {
  var chart = am4core.create(chartDiv, am4maps.MapChart);
  // Set projection
  chart.projection = new am4maps.projections.Mercator();

  var restoreContinents = function(){
    hideCountries();
    chart.goHome();
  };

  // Zoom control
  chart.zoomControl = new am4maps.ZoomControl();

  var homeButton = new am4core.Button();
  homeButton.events.on("hit", restoreContinents);

  homeButton.icon = new am4core.Sprite();
  homeButton.padding(7, 5, 7, 5);
  homeButton.width = 30;
  homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
  homeButton.marginBottom = 10;
  homeButton.parent = chart.zoomControl;
  homeButton.insertBefore(chart.zoomControl.plusButton);

  // Shared
  var hoverColorHex = "#9a7bca";
  var hoverColor = am4core.color(hoverColorHex);
  var hideCountries = function() {
    countryTemplate.hide();
    labelContainer.hide();
  };

  // Continents
  var continentsSeries = chart.series.push(new am4maps.MapPolygonSeries());
  continentsSeries.geodata = am4geodata_continentsLow;
  continentsSeries.useGeodata = true;
  continentsSeries.exclude = ["antarctica"];

  var continentTemplate = continentsSeries.mapPolygons.template;
  continentTemplate.tooltipText = "{name}";
  continentTemplate.properties.fillOpacity = 0.8; // Reduce conflict with back to continents map label
  continentTemplate.propertyFields.fill = "color";
  continentTemplate.nonScalingStroke = true;
  continentTemplate.events.on("hit", function(event){
    if ( ! countriesSeries.visible) countriesSeries.visible = true;
    chart.zoomToMapObject(event.target);
    countryTemplate.show();
    labelContainer.show();
  });

  var contintentHover = continentTemplate.states.create("hover");
  contintentHover.properties.fill = hoverColor;
  contintentHover.properties.stroke = hoverColor;

  continentsSeries.dataFields.zoomLevel = "zoomLevel";
  continentsSeries.dataFields.zoomGeoPoint = "zoomGeoPoint";

  continentsSeries.data = [ {
    "id": "africa",
    "color": chart.colors.getIndex(0)
  }, {
    "id": "asia",
    "color": chart.colors.getIndex(1),
    "zoomLevel": 2,
    "zoomGeoPoint": {
      "latitude": 46,
      "longitude": 89
    }
  }, {
    "id": "oceania",
    "color": chart.colors.getIndex(2)
  }, {
    "id": "europe",
    "color": chart.colors.getIndex(3)
  }, {
    "id": "northAmerica",
    "color": chart.colors.getIndex(4)
  }, {
    "id": "southAmerica",
    "color": chart.colors.getIndex(5)
  }];


  // Countries
  var countriesSeries = chart.series.push(new am4maps.MapPolygonSeries());
  var countries = countriesSeries.mapPolygons;
  countriesSeries.visible = false; // start off as hidden
  countriesSeries.exclude = ["AQ"];
  countriesSeries.geodata = am4geodata_worldLow;
  countriesSeries.useGeodata = true;
  // Hide each country so we can fade them in
  countriesSeries.events.once("inited", function(){
    hideCountries();
  });

  var countryTemplate = countries.template;
  countryTemplate.applyOnClones = true;
  countryTemplate.fill = am4core.color("#a791b4");
  countryTemplate.fillOpacity = 0.3; // see continents underneath, however, country shapes are more detailed than continents.
  countryTemplate.strokeOpacity = 0.5;
  countryTemplate.nonScalingStroke = true;
  countryTemplate.tooltipText = "{name}";
  countryTemplate.events.on("hit", function(event){
    chart.zoomToMapObject(event.target);
  });

  var countryHover = countryTemplate.states.create("hover");
  countryHover.properties.fill = hoverColor;
  countryHover.properties.fillOpacity = 0.8; // Reduce conflict with back to continents map label
  countryHover.properties.stroke = hoverColor;
  countryHover.properties.strokeOpacity = 1;

  var labelContainer = chart.chartContainer.createChild(am4core.Container);
  labelContainer.hide();
  labelContainer.config = {cursorOverStyle: [
    {
      "property": "cursor",
      "value": "pointer"
    }
  ]};
  labelContainer.isMeasured = false;
  labelContainer.layout = "horizontal";
  labelContainer.verticalCenter = "bottom";
  labelContainer.contentValign = "middle";
  labelContainer.y = am4core.percent(100);
  labelContainer.dx = 10;
  labelContainer.dy = -25;
  labelContainer.background.fill = am4core.color("#fff");
  labelContainer.background.fillOpacity = 0; // Hack to ensure entire area of labelContainer, e.g. between icon path, is clickable
  labelContainer.setStateOnChildren = true;
  labelContainer.states.create("hover");
  labelContainer.events.on("hit", restoreContinents);

  var globeIcon = labelContainer.createChild(am4core.Sprite);
  globeIcon.valign = "bottom";
  globeIcon.verticalCenter = "bottom";
  globeIcon.width = 29;
  globeIcon.height = 29;
  globeIcon.marginRight = 7;
  globeIcon.path = globeIconPath;

  var globeHover = globeIcon.states.create("hover");
  globeHover.properties.fill = hoverColor;

  var label = labelContainer.createChild(am4core.Label);
  label.valign = "bottom";
  label.verticalCenter = "bottom";
  label.dy = -5;
  label.text = "Back to continents map";
  label.states.create("hover").properties.fill = hoverColor;

  return chart;
}

export default useChart;
