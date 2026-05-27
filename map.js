(function () {
  "use strict";

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  });

  var locations = {
    offshore: [
      {
        id: "nederwiek3",
        coords: [53.1721, 4.0952],
        label: "Nederwiek 3 Offshore Wind Farm",
        subtitle: "Wind energy area",
        icon: "\uD83D\uDCCD",
        color: "#39c5cf",
        info: "Offshore wind-energy development zone where turbines generate power that travels via subsea cables to land.",
        badge: "Offshore Zone",
        type: "offshore",
        status: "planned",
        metrics: {
          capacity: "~2 GW",
          link: "https://www.rvo.nl/onderwerpen/duurzaam-ondernemen/duurzame-energie-offshore/windenergie-op-zee",
        },
      },
    ],
    converter: [
      {
        id: "converter",
        coords: [51.70572, 4.8307],
        label: "Nederwiek 3 Converter Station",
        subtitle: "Standhazensedijk, Geertruidenberg",
        icon: "\u26A1",
        color: "#58a6ff",
        info: "Onshore converter station where 525 kV DC from Nederwiek 3 is converted to 380 kV AC to join the national grid. Planned in 5.5 hectares, up to 25m high.",
        badge: "Planned",
        type: "onshore",
        status: "planned",
        metrics: { voltage: "525 kV DC \u2192 380 kV AC", link: "https://www.tennet.eu/" },
      },
    ],
    substation: [
      {
        id: "tennet",
        coords: [51.70106, 4.83314],
        label: "TenneT 380 kV High-Voltage Substation",
        subtitle: "Amer area",
        icon: "\u26A1",
        color: "#db6d28",
        info: "Part of the national grid where onshore power is connected. Expanded infrastructure for Nederwiek 3 integration.",
        badge: "Existing",
        type: "onshore",
        status: "existing",
        metrics: { voltage: "380 kV AC", link: "https://www.tennet.eu/" },
      },
      {
        id: "tennet150",
        coords: [51.6955, 4.84108],
        label: "TenneT 150 kV Substation",
        subtitle: "Amer area",
        icon: "\u26A1",
        color: "#db6d28",
        info: "TenneT 150 kV substation for regional grid distribution in the Amer area.",
        badge: "Existing",
        type: "onshore",
        status: "existing",
        metrics: { voltage: "150 kV AC", link: "https://www.tennet.eu/" },
      },
    ],
    power: [
      {
        id: "amercentrale",
        coords: [51.709806, 4.843661],
        label: "RWE Amercentrale",
        subtitle: "Biomass power plant",
        icon: "\uD83C\uDFED",
        color: "#d29922",
        info: "Large biomass-based power station; existing energy infrastructure in the Amer area.",
        badge: "Existing",
        type: "onshore",
        status: "existing",
        metrics: { capacity: "~600 MW", link: "https://www.rwe.com/" },
      },
      {
        id: "planned-site-1",
        coords: [51.70688723115217, 4.844703179295164],
        label: "Data Central",
        subtitle: "Amer area",
        icon: "\uD83D\uDCCD",
        color: "#FF9933",
        info: "Planned Data Central facility in the Amer industrial area.",
        badge: "Planned",
        type: "onshore",
        status: "planned",
      },
    ],
    hydrogen: [
      {
        id: "h2-plant",
        coords: [51.70854418218434, 4.832673314157148],
        label: "RWE Hydrogen Production Plant",
        subtitle: "Amercentrale site",
        icon: "\uD83D\uDD0B",
        color: "#3fb950",
        info: "Electrolyser facility planned for producing green hydrogen from renewable energy.",
        badge: "Planned",
        type: "onshore",
        status: "planned",
        metrics: { capacity: "~100 MW electrolyser", link: "https://www.rwe.com/" },
      },
      {
        id: "h2-storage",
        coords: [51.7092, 4.8432],
        label: "RWE Hydrogen Storage Facility",
        subtitle: "Amercentrale site",
        icon: "\uD83D\uDEE2",
        color: "#3fb950",
        info: "Storage facility for green hydrogen to support flexible energy integration.",
        badge: "Planned",
        type: "onshore",
        status: "planned",
        metrics: { storage: "TBD", link: "https://www.rwe.com/" },
      },
    ],
    battery: [
      {
        id: "battery",
        coords: [51.7089, 4.8445],
        label: "Battery Energy Storage Fields",
        subtitle: "Amercentrale area",
        icon: "\uD83D\uDD0B",
        color: "#a371f7",
        info: "Large grid-scale energy storage planned to support flexible energy integration and grid stability.",
        badge: "Planned",
        type: "onshore",
        status: "planned",
        metrics: { capacity: "TBD", storage: "MWh scale", link: "https://www.rwe.com/" },
      },
    ],
    co2: [
      {
        id: "beccus",
        coords: [51.7095, 4.8428],
        label: "BECCUS CO\u2082 Capture & Storage Project",
        subtitle: "Amercentrale area",
        icon: "\uD83C\uDF2B\uFE0F",
        color: "#f85149",
        info: "Initiative to capture, reuse, and store CO\u2082 from biomass operations.",
        badge: "Research",
        type: "onshore",
        status: "research",
        metrics: { capture: "Research phase", link: "https://www.rwe.com/" },
      },
    ],
    heating: [
      {
        id: "ennatuurlijk",
        coords: [51.7095, 4.84],
        label: "ENNatuurlijk District Heating Hub",
        subtitle: "Amer area",
        icon: "\u2668\uFE0F",
        color: "#ea4aaa",
        info: "District heating network using residual heat from Amercentrale.",
        badge: "Existing",
        type: "onshore",
        status: "existing",
        metrics: { heat: "Residual from Amercentrale", link: "https://www.ennatuurlijk.nl/" },
      },
    ],
    nature: [
      {
        id: "little-biesbosch",
        coords: [51.7008, 4.8426],
        label: "Little Biesbosch",
        subtitle: "Planned nature corridor",
        icon: "\uD83C\uDF3F",
        color: "#22c55e",
        info: "Planned green-blue nature corridor between the Donge River and the Amertak canal. Focus on biodiversity, water management, and recreation.",
        badge: "Planned",
        type: "onshore",
        status: "planned",
        metrics: { link: 'https://www.geertruidenberg.nl/cultuur-en-vrije-tijd/vestingstad-aan-de-biesbosch' }
      },
      {
        id: "donge-river",
        coords: [51.695, 4.854],
        label: "Donge River Ecological Zone",
        subtitle: "River ecological corridor",
        icon: "\uD83D\uDCA7",
        color: "#14b8a6",
        info: "The Donge River area will be developed into blue-green ecological zones with improved walking routes, nature restoration, and water management improvements.",
        badge: "Planned",
        type: "onshore",
        status: "planned",
        metrics: { link: 'https://www.geertruidenberg.nl/projecten/donge-oevers' }
      },
      {
        id: 'amertak-canal',
        coords: [51.6982, 4.8399],
        label: 'Amertak Canal Landscape Area',
        subtitle: 'Waterway landscape corridor',
        icon: '🛶',
        color: '#0d9488',
        info: 'The Amertak canal area will include landscape improvements, ecological zones, and connections to recreation routes and nature areas.',
        badge: 'Planned',
        type: 'onshore',
        status: 'planned',
        metrics: { link: 'https://www.rijkswaterstaat.nl/water/vaarwegenoverzicht/amertak' }
      },
      {
        id: 'natuurpark-donge',
        coords: [51.69255, 4.85219],
        label: 'Natuurpark De Donge',
        subtitle: 'Planned nature park',
        icon: '🏞️',
        color: '#16a34a',
        info: 'Planned 30-hectare nature and recreation area with walking routes, water management improvements, and ecological habitats.',
        badge: 'Planned',
        type: 'onshore',
        status: 'planned',
        metrics: { link: 'https://www.geertruidenberg.nl/natuurpark-de-donge' }
      },
      {
        id: 'slikpolder',
        coords: [51.71001, 4.85654],
        label: 'Slikpolder Nature Area',
        subtitle: 'Nature and flood protection',
        icon: '🦆',
        color: '#15803d',
        info: 'Natural area along the Donge River planned for ecological improvements and flood protection measures.',
        badge: 'Planned',
        type: 'onshore',
        status: 'planned',
        metrics: { link: 'https://www.geertruidenberg.nl/natuurpark-de-donge' }
      }
    ],
    context: [
      {
        id: "geertruidenberg",
        coords: [51.7029, 4.8481],
        label: "Geertruidenberg",
        subtitle: "Municipality",
        icon: "\uD83C\uDFD8\uFE0F",
        color: "#8b949e",
        info: "Municipality hosting the converter station at Standhazensedijk. Local base for the power port region.",
        badge: null,
        type: "onshore",
        status: null,
      },
      {
        id: "drimmelen",
        coords: [51.7086, 4.8035],
        label: "Drimmelen",
        subtitle: "Municipality",
        icon: "\uD83C\uDFD8\uFE0F",
        color: "#8b949e",
        info: "Municipality in the project area, includes Made, Terheijden and surrounding villages.",
        badge: null,
        type: "onshore",
        status: null,
      },
      {
        id: "moerdijk",
        coords: [51.7043, 4.6247],
        label: "Moerdijk",
        subtitle: "Municipality",
        icon: "\uD83C\uDFED",
        color: "#8b949e",
        info: "Municipality in the project area with significant industrial and port infrastructure.",
        badge: null,
        type: "onshore",
        status: null,
      },
      {
        id: "tilburg",
        coords: [51.5555, 5.0913],
        label: "Tilburg",
        subtitle: "Municipality",
        icon: "\uD83C\uDFD9\uFE0F",
        color: "#8b949e",
        info: "Largest city in the region, potentially connected to the district heating grid extension.",
        badge: null,
        type: "onshore",
        status: null,
      },
    ],
  };

  function createIcon(color, status) {
    var normalizedStatus = status ? String(status).toLowerCase() : "";
    var baseShadow = "filter:drop-shadow(0 2px 8px rgba(0,0,0,0.4));";

    if (normalizedStatus === "research") {
      return L.divIcon({
        className: "custom-marker",
        html:
          '<svg width="28" height="28" viewBox="0 0 28 28" style="' +
          baseShadow +
          '">' +
          '<path d="M14 3 L25 24 H3 Z" fill="' +
          color +
          '" stroke="#fff" stroke-width="3" stroke-linejoin="round" />' +
          "</svg>",
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });
    }

    var radius = normalizedStatus === "existing" ? "0px" : "50%";
    return L.divIcon({
      className: "custom-marker",
      html:
        '<div style="' +
        "width: 28px; height: 28px;" +
        "background: " +
        color +
        ";" +
        "border: 3px solid #fff;" +
        "border-radius: " +
        radius +
        ";" +
        "box-shadow: 0 2px 8px rgba(0,0,0,0.4);" +
        '"></div>',
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });
  }

  function createLocationPinIcon(color) {
    return L.divIcon({
      className: "location-pin-marker",
      html:
        '<div style="position:relative;width:28px;height:36px;">' +
        '<svg viewBox="0 0 24 36" width="28" height="36" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));">' +
        '<path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 24 12 24s12-15 12-24C24 5.37 18.63 0 12 0z" fill="' +
        color +
        '" stroke="#fff" stroke-width="2"/>' +
        "</svg>" +
        "</div>",
      iconSize: [28, 36],
      iconAnchor: [14, 36],
    });
  }

  function createPopupContent(loc) {
    var metricItems = [];
    if (loc.metrics) {
      if (loc.metrics.capacity)
        metricItems.push(
          '<div class="popup-metric"><span>Capacity</span><strong>' + loc.metrics.capacity + "</strong></div>"
        );
      if (loc.metrics.voltage)
        metricItems.push(
          '<div class="popup-metric"><span>Voltage</span><strong>' + loc.metrics.voltage + "</strong></div>"
        );
      if (loc.metrics.storage)
        metricItems.push(
          '<div class="popup-metric"><span>Storage</span><strong>' + loc.metrics.storage + "</strong></div>"
        );
      if (loc.metrics.heat)
        metricItems.push('<div class="popup-metric"><span>Heat</span><strong>' + loc.metrics.heat + "</strong></div>");
      if (loc.metrics.capture)
        metricItems.push(
          '<div class="popup-metric"><span>Status</span><strong>' + loc.metrics.capture + "</strong></div>"
        );
    }
    var metricsHtml = metricItems.length ? '<div class="popup-metrics">' + metricItems.join("") + "</div>" : "";

    var linkUrl = loc.metrics && loc.metrics.link ? String(loc.metrics.link).trim() : "";
    var linkHtml = "";
    if (linkUrl) {
      var safeHref = linkUrl.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      linkHtml =
        '<a href="' +
        safeHref +
        '" target="_blank" rel="noopener noreferrer" class="popup-link">View project / Learn more →</a>';
    }

    var badgeHtml = "";
    if (loc.badge) {
      var badgeClass = loc.badge.toLowerCase().replace(/[^a-z]/g, "");
      badgeHtml =
        '<span class="popup-badge ' + badgeClass + '">' + loc.badge + "</span>";
    }

    var subHtml = loc.subtitle
      ? '<div style="font-size:0.75rem;color:#6b7280">' + loc.subtitle + "</div>"
      : "";

    return (
      '<div class="popup-header">' +
      '<div class="popup-icon" style="background:' +
      loc.color +
      "22; color:" +
      loc.color +
      '">' +
      loc.icon +
      "</div>" +
      "<div><div class=\"popup-title\">" +
      loc.label +
      "</div>" +
      subHtml +
      badgeHtml +
      "</div></div>" +
      '<div class="popup-info">' +
      loc.info +
      "</div>" +
      metricsHtml +
      linkHtml
    );
  }

  function createPipelinePopup(key) {
    if (key === "subsea") {
      return (
        '<div class="popup-pipeline"><strong>Subsea HVDC Cable</strong>' +
        '<div class="popup-metric"><span>Voltage</span><strong>525 kV DC</strong></div>' +
        '<div class="popup-metric"><span>Route</span><strong>Nederwiek 3 \u2192 Geertruidenberg</strong></div>' +
        '<div class="popup-metric"><span>Capacity</span><strong>~2 GW</strong></div></div>'
      );
    }
    if (key === "grid380") {
      return (
        '<div class="popup-pipeline"><strong>Grid connection</strong>' +
        '<div class="popup-metric"><span>Voltage</span><strong>380 kV AC</strong></div>' +
        '<div class="popup-metric"><span>Route</span><strong>Converter station \u2192 TenneT 380 kV</strong></div></div>'
      );
    }
    if (key === "grid150") {
      return (
        '<div class="popup-pipeline"><strong>Grid connection</strong>' +
        '<div class="popup-metric"><span>Voltage</span><strong>150 kV AC</strong></div>' +
        '<div class="popup-metric"><span>Route</span><strong>Converter station \u2192 TenneT 150 kV</strong></div></div>'
      );
    }
    return (
      '<div class="popup-pipeline"><strong>District heating network</strong>' +
      '<div class="popup-metric"><span>Route</span><strong>Amer \u2192 Oosterhout \u2192 Tilburg</strong></div>' +
      '<div class="popup-metric"><span>Source</span><strong>Residual heat from Amercentrale</strong></div></div>'
    );
  }

  function bearingBetween(fromLatLng, toLatLng) {
    var lat1 = (fromLatLng[0] * Math.PI) / 180;
    var lat2 = (toLatLng[0] * Math.PI) / 180;
    var dLon = ((toLatLng[1] - fromLatLng[1]) * Math.PI) / 180;
    var y = Math.sin(dLon) * Math.cos(lat2);
    var x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
  }

  // Rotation for arrow icon (0° = north/up), aligned with how the line appears on the map.
  function iconRotationDeg(fromLatLng, toLatLng) {
    var p1 = L.CRS.EPSG3857.project(L.latLng(fromLatLng[0], fromLatLng[1]));
    var p2 = L.CRS.EPSG3857.project(L.latLng(toLatLng[0], toLatLng[1]));
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return ((Math.atan2(dx, dy) * 180) / Math.PI + 360) % 360;
  }

  function offsetLatLng(latLng, bearingDeg, distanceM) {
    var center = L.latLng(latLng[0], latLng[1]);
    var p = L.CRS.EPSG3857.project(center);
    var rad = (bearingDeg * Math.PI) / 180;
    var dx = Math.sin(rad) * distanceM;
    var dy = Math.cos(rad) * distanceM;
    var next = L.CRS.EPSG3857.unproject(L.point(p.x + dx, p.y + dy));
    return [next.lat, next.lng];
  }

  function placeRouteArrow(drawLayer, fromLatLng, toLatLng, atLatLng, fillColor) {
    var arrowRotation = iconRotationDeg(fromLatLng, toLatLng);
    var arrowFill = fillColor || "#000000";
    var arrowIcon = L.divIcon({
      className: "route-line-arrow",
      html:
        '<svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true" ' +
        'style="transform: rotate(' +
        arrowRotation +
        'deg); transform-origin: 4px 0.5px;">' +
        '<path d="M4 0.5 L7 7 L1 7 Z" fill="' +
        arrowFill +
        '"/>' +
        "</svg>",
      iconSize: [8, 8],
      iconAnchor: [4, 0.5],
    });

    L.marker(atLatLng, { icon: arrowIcon, interactive: false }).addTo(drawLayer);
  }

  function addThinLineWithArrow(map, latLngs, options) {
    options = options || {};
    var drawLayer = options.layer || amervisieLayerGroup || map;
    var gapM = options.gapMeters != null ? options.gapMeters : 18;
    var coords = latLngs.map(function (c) {
      return c.slice();
    });

    if (coords.length < 2) return;

    var start = coords[0];
    var end = coords[coords.length - 1];
    var prev = coords[coords.length - 2];
    var next = coords[1];
    var bearingEnd = bearingBetween(prev, end);
    var showArrow = options.showArrow !== false;
    var bothArrows = options.arrowsBothEnds === true;
    var arrowAtStart = options.arrowAtStart === true;

    if (!bothArrows && showArrow && !options.noGapAtEnd) {
      var lineEnd = offsetLatLng(end, bearingEnd + 180, gapM);
      coords[coords.length - 1] = lineEnd;
    }

    if (!bothArrows && options.gapAtStart) {
      var bearingStart = bearingBetween(start, next);
      coords[0] = offsetLatLng(start, bearingStart, gapM);
    }

    var lineStyle = {
      color: options.color || "#000000",
      weight: options.weight != null ? options.weight : 2,
      opacity: 1,
    };
    if (options.dotDot) {
      lineStyle.dashArray = "2, 12";
      lineStyle.lineCap = "round";
      lineStyle.lineJoin = "round";
    } else if (options.dashed) {
      lineStyle.dashArray = "8, 10";
    }

    L.polyline(coords, lineStyle).addTo(drawLayer);

    var arrowColor = options.color || "#000000";

    if (bothArrows) {
      placeRouteArrow(drawLayer, next, start, start, arrowColor);
      placeRouteArrow(drawLayer, prev, end, end, arrowColor);
      return;
    }

    if (arrowAtStart) {
      placeRouteArrow(drawLayer, next, start, start, arrowColor);
    }

    if (!showArrow) return;

    var lineEnd = options.noGapAtEnd ? end : coords[coords.length - 1];
    placeRouteArrow(drawLayer, prev, end, lineEnd, arrowColor);
  }

  var mapRef = null;
  var markerRegistry = [];
  var layerGroups = {};
  var buildingHighlight = null;
  var converterPlannedHalo = null;
  var searchQuery = "";
  var searchResults = [];
  var showResults = false;
  var activeTypeFilter = null;
  var activeStatusFilter = null;
  var amervisieLayerGroup = null;
  var amervisieFrostEl = null;
  var pipelineLayers = [];
  var skatingMarker = null;
  var oldManMarkers = [];
  var SKATING_ICON_MIN_ZOOM = 13;
  var SKATING_ICON_FIXED_SIZE = 20;

  function latLngOnSegmentAtLng(a, b, lng) {
    var dlng = b[1] - a[1];
    if (Math.abs(dlng) < 1e-12) return [a[0], lng];
    var t = (lng - a[1]) / dlng;
    t = Math.max(0, Math.min(1, t));
    return [a[0] + t * (b[0] - a[0]), lng];
  }

  function skatingIconSizeForZoom(zoom) {
    if (zoom < SKATING_ICON_MIN_ZOOM) return 0;
    return SKATING_ICON_FIXED_SIZE;
  }

  function oldManIconSizeForZoom(zoom) {
    if (zoom < SKATING_ICON_MIN_ZOOM) return 0;
    var base = Math.min(32, Math.round(16 + (zoom - SKATING_ICON_MIN_ZOOM) * 4));
    return Math.min(38, Math.round(base * 1.12 + 2));
  }

  function createSkatingIcon(size) {
    var anchorY = size - Math.round(size * 0.14);
    return L.icon({
      iconUrl: "images/skate.png",
      iconSize: [size, size],
      iconAnchor: [size / 2, anchorY],
    });
  }

  function updateSkatingMarker() {
    if (!mapRef || !skatingMarker) return;
    var size = skatingIconSizeForZoom(mapRef.getZoom());
    if (size <= 0) {
      skatingMarker.setOpacity(0);
      skatingMarker.setIcon(createSkatingIcon(1));
      return;
    }
    skatingMarker.setOpacity(1);
    skatingMarker.setIcon(createSkatingIcon(size));
  }

  function createOldManIcon(size, facing) {
    var anchorY = size - Math.round(size * 0.14);
    if (facing === "horizontal") {
      return L.divIcon({
        className: "oldman-marker oldman-marker--horizontal",
        html:
          '<img src="images/oldman.png" width="' +
          size +
          '" height="' +
          size +
          '" alt="" style="transform:rotate(90deg);transform-origin:50% 86%;display:block;" />',
        iconSize: [size, size],
        iconAnchor: [size / 2, anchorY],
      });
    }
    return L.icon({
      iconUrl: "images/oldman.png",
      iconSize: [size, size],
      iconAnchor: [size / 2, anchorY],
    });
  }

  function updateOldManMarker() {
    if (!mapRef || !oldManMarkers.length) return;
    var size = oldManIconSizeForZoom(mapRef.getZoom());
    oldManMarkers.forEach(function (marker) {
      var facing = marker._oldManFacing || "default";
      if (size <= 0) {
        marker.setOpacity(0);
        marker.setIcon(createOldManIcon(1, facing));
        return;
      }
      marker.setOpacity(1);
      marker.setIcon(createOldManIcon(size, facing));
    });
  }

  function updateAmervisieMarkers() {
    updateSkatingMarker();
    updateOldManMarker();
  }

  function clearBuildingHighlight() {
    if (mapRef && buildingHighlight) {
      mapRef.removeLayer(buildingHighlight);
    }
    buildingHighlight = null;
  }

  function clearConverterPlannedHalo() {
    if (mapRef && converterPlannedHalo) {
      mapRef.removeLayer(converterPlannedHalo);
    }
    converterPlannedHalo = null;
  }

  function ensureConverterPlannedHalo() {
    if (!mapRef) return;

    // Planned building size: 5.5 hectares = 55,000 m²
    // Represented as an equivalent-area square behind the marker:
    // side = sqrt(area)
    var areaM2 = 55000;
    var sideM = Math.sqrt(areaM2);
    var halfSideM = sideM / 2;

    if (converterPlannedHalo) return;

    var converterLoc = markerRegistry.find(function (e) {
      return e && e.loc && e.loc.id === "converter";
    });
    if (!converterLoc || !converterLoc.loc || !converterLoc.loc.coords) return;

    var center = L.latLng(converterLoc.loc.coords[0], converterLoc.loc.coords[1]);
    // Use EPSG:3857 projection so we can offset by meters.
    var p = L.CRS.EPSG3857.project(center);
    var sw = L.CRS.EPSG3857.unproject(L.point(p.x - halfSideM, p.y - halfSideM));
    var ne = L.CRS.EPSG3857.unproject(L.point(p.x + halfSideM, p.y + halfSideM));

    converterPlannedHalo = L.rectangle([sw, ne], {
      color: "#a3ff12",
      weight: 3,
      opacity: 0.95,
      fillColor: "#d9ff00",
      fillOpacity: 0.22,
      interactive: false,
    }).addTo(mapRef);
  }

  function highlightBuildingForLocation(loc) {
    if (!mapRef || !loc || !loc.coords) return;

    // Only highlight the two substations requested.
    if (loc.id !== "tennet" && loc.id !== "tennet150") return;

    clearBuildingHighlight();

    // Leaflet basemap tiles don't expose building geometries. We approximate the
    // visible substation footprint with a tuned polygon per site.
    var lat = loc.coords[0];
    var lng = loc.coords[1];

    function polyFromOffsets(offsets) {
      return offsets.map(function (p) {
        return [lat + p[0], lng + p[1]];
      });
    }

    var polygonLatLngs = null;

    if (loc.id === "tennet") {
      // 380 kV: use provided GeoJSON (lng,lat) outline converted to Leaflet (lat,lng).
      // Source: user-provided coordinates for the TenneT 380kV site.
      polygonLatLngs = [
        [51.70253082529666, 4.831290106973711],
        [51.70284245312084, 4.83316735606698],
        [51.701838311336275, 4.833591971932492],
        [51.70197681497618, 4.834351810850791],
        [51.70196988980413, 4.834351810850791],
        [51.699504461241816, 4.835424524617963],
        [51.69895041386573, 4.832072294095866],
        [51.70088262466467, 4.831256584669262],
        [51.70101420591172, 4.831994075383648],
        [51.70253082529666, 4.831323629279524],
      ];
    } else if (loc.id === "tennet150") {
      // 150 kV: use provided GeoJSON (lng,lat) outline converted to Leaflet (lat,lng).
      // Source: user-provided coordinates for the TenneT 150kV site.
      polygonLatLngs = [
        [51.695735351323975, 4.839294723971079],
        [51.69605383550481, 4.84244324223306],
        [51.696057223622404, 4.842946130566162],
        [51.69595557998625, 4.843071852650496],
        [51.69599962559002, 4.8434927483203865],
        [51.69552867422021, 4.843618470403328],
        [51.695535450533754, 4.84370046306654],
        [51.69553206237708, 4.843738726309965],
        [51.69518985725372, 4.843837117506098],
        [51.69497301306444, 4.843082785005777],
        [51.69497640126298, 4.843082785005777],
        [51.69470195636612, 4.840453553608398],
        [51.69488491981531, 4.839010482739411],
        [51.69574212760659, 4.83930019014872],
      ];
    }

    if (!polygonLatLngs) return;

    buildingHighlight = L.polygon(polygonLatLngs, {
      color: "#a3ff12", 
      weight: 3,
      opacity: 0.95,
      fillColor: "#d9ff00", 
      fillOpacity: 0.35,
      interactive: false,
    }).addTo(mapRef);
  }

  function locMatchesFilters(loc) {
    if (activeStatusFilter === "amervisie") return false;
    if (activeTypeFilter && loc.type !== activeTypeFilter) return false;
    if (
      activeStatusFilter &&
      activeStatusFilter !== "amervisie" &&
      loc.status !== activeStatusFilter
    )
      return false;
    return true;
  }

  function setAmervisieMapMode(enabled) {
    var mapCard = document.querySelector(".map-card");
    if (mapCard) mapCard.classList.toggle("map-card--amervisie", !!enabled);
    if (amervisieFrostEl) amervisieFrostEl.classList.toggle("is-active", !!enabled);

    if (!mapRef) return;

    if (enabled) {
      clearBuildingHighlight();
      clearConverterPlannedHalo();
      mapRef.closePopup();

      Object.keys(layerGroups).forEach(function (key) {
        if (mapRef.hasLayer(layerGroups[key])) {
          mapRef.removeLayer(layerGroups[key]);
        }
      });

      pipelineLayers.forEach(function (layer) {
        if (mapRef.hasLayer(layer)) {
          mapRef.removeLayer(layer);
        }
      });
    } else {
      Object.keys(layerGroups).forEach(function (key) {
        if (!mapRef.hasLayer(layerGroups[key])) {
          layerGroups[key].addTo(mapRef);
        }
      });

      pipelineLayers.forEach(function (layer) {
        if (!mapRef.hasLayer(layer)) {
          layer.addTo(mapRef);
        }
      });
    }
  }

  function applyAmervisieLayer() {
    if (!mapRef || !amervisieLayerGroup) return;

    var isAmervisie = activeStatusFilter === "amervisie";
    setAmervisieMapMode(isAmervisie);

    if (isAmervisie) {
      if (!mapRef.hasLayer(amervisieLayerGroup)) {
        amervisieLayerGroup.addTo(mapRef);
      }
      updateAmervisieMarkers();
    } else if (mapRef.hasLayer(amervisieLayerGroup)) {
      mapRef.removeLayer(amervisieLayerGroup);
    }
  }

  function applyFilters() {
    var shouldShowConverterHalo = false;

    applyAmervisieLayer();

    markerRegistry.forEach(function (entry) {
      var visible = locMatchesFilters(entry.loc);
      var el = entry.marker.getElement();
      if (el) {
        el.style.display = visible ? "" : "none";
        el.style.pointerEvents = visible ? "" : "none";

        var shouldHighlightPlanned =
          visible &&
          activeStatusFilter === "planned" &&
          String(entry.loc.status).toLowerCase() === "planned" &&
          entry.loc.id !== "converter";
        el.classList.toggle("planned-highlight", !!shouldHighlightPlanned);
      }

      if (
        visible &&
        activeStatusFilter === "planned" &&
        entry.loc &&
        entry.loc.id === "converter" &&
        String(entry.loc.status).toLowerCase() === "planned"
      ) {
        shouldShowConverterHalo = true;
      }
    });

    if (shouldShowConverterHalo) ensureConverterPlannedHalo();
    else clearConverterPlannedHalo();
  }

  function handleSearch(query) {
    searchQuery = query;
    var q = query.trim().toLowerCase();
    var input = document.getElementById("search-input");
    var clearBtn = document.getElementById("search-clear");
    var resultsEl = document.getElementById("search-results");

    if (input) input.value = query;

    if (!q) {
      searchResults = [];
      showResults = false;
      if (clearBtn) clearBtn.classList.add("hidden");
      renderSearchResults();
      return;
    }

    if (clearBtn) clearBtn.classList.remove("hidden");

    searchResults = markerRegistry.filter(function (item) {
      var terms = [item.loc.label, item.loc.subtitle, item.loc.info, item.layerKey]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (terms.indexOf(q) !== -1) return true;
      var words = q.split(/\s+/);
      return words.every(function (word) {
        return word.length <= 1 || terms.indexOf(word) !== -1;
      });
    });

    searchResults = searchResults.slice(0, 8);
    showResults = true;
    renderSearchResults();
  }

  function renderSearchResults() {
    var resultsEl = document.getElementById("search-results");
    if (!resultsEl) return;

    resultsEl.innerHTML = "";
    if (!showResults || !searchQuery.trim()) {
      resultsEl.classList.add("hidden");
      return;
    }

    resultsEl.classList.remove("hidden");
    if (searchResults.length === 0) {
      var empty = document.createElement("div");
      empty.style.padding = "0.75rem 1rem";
      empty.style.fontSize = "0.875rem";
      empty.style.color = "#4b5563";
      empty.textContent = "No results found for your search.";
      resultsEl.appendChild(empty);
      return;
    }

    searchResults.forEach(function (item) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "search-result-btn";
      btn.innerHTML =
        '<div class="search-result-title"></div><div class="search-result-sub"></div>';
      btn.querySelector(".search-result-title").textContent = item.loc.label;
      btn.querySelector(".search-result-sub").textContent = item.loc.subtitle || "";
      btn.addEventListener("mousedown", function (e) {
        e.preventDefault();
      });
      btn.addEventListener("click", function () {
        goToSearchResult(item);
      });
      resultsEl.appendChild(btn);
    });
  }

  function goToSearchResult(item) {
    if (mapRef) {
      mapRef.flyTo(item.loc.coords, 14, { duration: 0.5 });
      item.marker.openPopup();
      searchQuery = "";
      searchResults = [];
      showResults = false;
      var input = document.getElementById("search-input");
      if (input) input.value = "";
      var clearBtn = document.getElementById("search-clear");
      if (clearBtn) clearBtn.classList.add("hidden");
      renderSearchResults();
    }
  }

  function updateFilterButtons() {
    var typeOff = document.getElementById("filter-type-offshore");
    var typeOn = document.getElementById("filter-type-onshore");
    var stEx = document.getElementById("filter-status-existing");
    var stPl = document.getElementById("filter-status-planned");
    var stRe = document.getElementById("filter-status-research");
    var stAm = document.getElementById("filter-status-amervisie");

    function setTypeBtn(btn, isActive, activeColor) {
      if (!btn) return;
      btn.classList.toggle("filter-btn--active", isActive);
      if (isActive) {
        btn.style.backgroundColor = activeColor;
        btn.style.color = "#ffffff";
      } else {
        btn.style.backgroundColor = "";
        btn.style.color = "";
      }
    }

    // setTypeBtn(typeOff, activeTypeFilter === "offshore", "#ff9933");
    // setTypeBtn(typeOn, activeTypeFilter === "onshore", "#ff9933");
    setTypeBtn(typeOff, activeTypeFilter === "offshore", "#6699cc");
    setTypeBtn(typeOn, activeTypeFilter === "onshore", "#6699cc");
    setTypeBtn(stEx, activeStatusFilter === "existing", "#3fb950");
    setTypeBtn(stPl, activeStatusFilter === "planned", "#FF9933");
    setTypeBtn(stRe, activeStatusFilter === "research", "#a371f7");
    setTypeBtn(stAm, activeStatusFilter === "amervisie", "#1f2937");
  }

  function initMap() {
    var container = document.getElementById("map-container");
    if (!container || mapRef) return;

    var map = L.map(container, {
      center: [51.65, 4.78],
      zoom: 10,
      zoomControl: true,
      minZoom: 8,
      maxZoom: 17,
    });

    mapRef = map;
    map.on("click", function () {
      clearBuildingHighlight();
      clearConverterPlannedHalo();
    });
    map.on("zoom", updateAmervisieMarkers);
    map.on("zoomend", updateAmervisieMarkers);

    amervisieFrostEl = L.DomUtil.create("div", "amervisie-frost", map.getContainer());

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 17,
    }).addTo(map);

    var southWest = L.latLng(51.35, 4.3);
    var northEast = L.latLng(51.78, 5.3);
    var bounds = L.latLngBounds(southWest, northEast);
    map.setMaxBounds(bounds);

    markerRegistry = [];
    layerGroups = {};

    Object.keys(locations).forEach(function (layerKey) {
      var layerGroup = L.layerGroup();
      layerGroups[layerKey] = layerGroup;

      locations[layerKey].forEach(function (loc) {
        var icon = layerKey === "context" ? createLocationPinIcon(loc.color) : createIcon(loc.color, loc.status);
        var marker = L.marker(loc.coords, { icon: icon })
          .bindPopup(createPopupContent(loc), { maxWidth: 320 })
          .bindTooltip(loc.label, {
            permanent: false,
            direction: "top",
            className: "custom-tooltip",
            offset: [0, -12],
          });

        marker.on("click", function () {
          if (loc && loc.id === "converter") {
            ensureConverterPlannedHalo();
          } else {
            clearConverterPlannedHalo();
            highlightBuildingForLocation(loc);
          }
        });
        marker.on("popupclose", function () {
          // Keep highlight in sync with selection behavior.
          // If you prefer the highlight to persist, remove this.
          clearBuildingHighlight();
          clearConverterPlannedHalo();
        });

        layerGroup.addLayer(marker);
        markerRegistry.push({ loc: loc, layerKey: layerKey, marker: marker });
      });

      layerGroup.addTo(map);
    });

    var subseaCableCoords = [
      [51.70572, 4.8307],
      // Amertak water corridor (user-provided waypoints)
      // [51.706206068477215, 4.826591932435804],
      [51.70949197101303, 4.828936588356384],
      [51.71272272452869, 4.805574592113403],
      [51.71750862476288, 4.780170973966132],
      [51.724681408330326, 4.754657224143189],
      [51.7222694490155, 4.723917765500143],
      [51.72226944902163, 4.695534998803056],
      [51.71574715724117, 4.620448237496963],
      [51.698216223848846, 4.540532434619289],
      [51.70415002384087, 4.438661655362442],
      [51.72337268714361, 4.364150932987898],
      [51.722573067007076, 4.345663944903698],
      [51.738833983956376, 4.263104755501148],
      [51.79051656578433, 4.176117100760663],
      [51.80616627457595, 4.124873463777713],
      // Continue offshore (keeps the end-point consistent with the Nederwiek 3 marker)
      [52.18, 3.8],
      [52.7, 3.95],
      [53.1721, 4.0952],
    ];

    var pipelineData = {
      subsea: { coords: subseaCableCoords, color: "#39c5cf" },
      grid380: { coords: [[51.70572, 4.8307], [51.70106, 4.83314]], color: "#58a6ff" },
      grid150: { coords: [[51.70572, 4.8307], [51.6955, 4.84108]], color: "#58a6ff" },
      heating: { coords: [[51.7095, 4.84], [51.6517, 4.8551], [51.5555, 5.0913]], color: "#ea4aaa" },
    };

    pipelineLayers = [
      L.polyline(pipelineData.subsea.coords, {
        color: pipelineData.subsea.color,
        weight: 4,
        opacity: 0.9,
        dashArray: "10, 15",
        className: "clickable-polyline",
      }).bindPopup(createPipelinePopup("subsea"), { maxWidth: 300 }),
      L.polyline(pipelineData.grid380.coords, {
        color: pipelineData.grid380.color,
        weight: 4,
        opacity: 0.9,
        className: "clickable-polyline",
      }).bindPopup(createPipelinePopup("grid380"), { maxWidth: 300 }),
      L.polyline(pipelineData.grid150.coords, {
        color: pipelineData.grid150.color,
        weight: 4,
        opacity: 0.9,
        className: "clickable-polyline",
      }).bindPopup(createPipelinePopup("grid150"), { maxWidth: 300 }),
      L.polyline(pipelineData.heating.coords, {
        color: pipelineData.heating.color,
        weight: 5,
        opacity: 0.9,
        dashArray: "8, 12",
        className: "clickable-polyline",
      }).bindPopup(createPipelinePopup("heating"), { maxWidth: 300 }),
    ];

    pipelineLayers.forEach(function (layer) {
      layer.addTo(map);
    });

    amervisieLayerGroup = L.layerGroup();

    addThinLineWithArrow(
      map,
      [
        [51.70879592225464, 4.830901099533861],
        [51.70869037686671, 4.828342064974748],
        [51.707774241722916, 4.8266929383575246],
        [51.70611806919385, 4.827090943288056],
      ],
      { noGapAtEnd: true }
    );

    addThinLineWithArrow(map, [
      [51.70573042819737, 4.827261551639367],
      [51.7005498653738, 4.828740488831187],
    ]);

    addThinLineWithArrow(
      map,
      [
        [51.700162199566165, 4.828854270367032],
        [51.69758942121041, 4.829706982038942],
        [51.694663914447005, 4.831242188123269],
      ],
      { gapAtStart: true }
    );

    addThinLineWithArrow(
      map,
      [
        [51.69427182498458, 4.831447796739354],
        [51.69105219601266, 4.833578651770381],
        [51.688575402494195, 4.836109042120029],
      ],
      { gapAtStart: true }
    );

    addThinLineWithArrow(
      map,
      [
        [51.68827267399237, 4.836552970251262],
        [51.68755712584914, 4.8373520408885895],
        [51.68755712584914, 4.83792914745888],
        [51.688052506537474, 4.838373075590113],
        [51.68860292316677, 4.838550646843174],
        [51.691272348877646, 4.840326359369499],
      ],
      { gapAtStart: true }
    );

    addThinLineWithArrow(
      map,
      [
        [51.691767688910005, 4.8408590731272625],
        [51.692978497278574, 4.841880107830207],
        [51.69460203039125, 4.8437446059816125],
        [51.69495975019652, 4.844099748487736],
        [51.695289950584055, 4.844810033497112],
        [51.69578524664823, 4.844499283804993],
        [51.6976563161941, 4.844277319739376],
        [51.69795898194002, 4.844321712553352],
        [51.698509278109015, 4.843877784422091],
        [51.69900453894027, 4.843211892223877],
      ],
      { gapAtStart: true }
    );

    addThinLineWithArrow(
      map,
      [
        [51.6995433239814, 4.842769594401659],
        [51.700240279668776, 4.84237845695165],
        [51.70169476130795, 4.842133996045732],
        [51.702512886683394, 4.84228067258897],
      ],
      { gapAtStart: true }
    );

    addThinLineWithArrow(
      map,
      [
        [51.70309137829861, 4.842521076254286],
        [51.70396286419697, 4.8431460687767185],
        [51.7047697806168, 4.84340648232839],
        [51.70573806132353, 4.842937737936211],
        [51.705673509920985, 4.842156497283611],
        [51.70506026700457, 4.841687752891374],
        [51.7048343333083, 4.840646098687046],
      ],
      { gapAtStart: true, showArrow: false }
    );

    addThinLineWithArrow(
      map,
      [
        [51.70475945792779, 4.840258236435119],
        [51.70465965090568, 4.839828761172043],
        [51.70504224329392, 4.83953349692797],
        [51.70620663500151, 4.838996652848721],
        [51.70861780777318, 4.834703007503379],
        [51.709476266103366, 4.833356109439109],
        [51.70892780849388, 4.831508934948772],
      ],
      { gapAtStart: true, dashed: true }
    );

    addThinLineWithArrow(
      map,
      [
        [51.70607031314813, 4.838669748388384],
        [51.70577788588443, 4.8381192137673],
        [51.70455941860595, 4.830529700779351],
        [51.704656897196145, 4.8234907224124015],
      ],
      { gapAtStart: true }
    );

    addThinLineWithArrow(
      map,
      [
        [51.706405766537614, 4.838644744143949],
        [51.7060683304604, 4.838664191317065],
        [51.70608279205845, 4.839057024206369],
      ],
      { showArrow: false }
    );

    addThinLineWithArrow(
      map,
      [
        [51.69584243039657, 4.830655836656291],
        [51.69546781509078, 4.831473521325705],
        [51.695379669862376, 4.832646721068386],
        [51.69612889883226, 4.8390815438984305],
      ],
      { gapAtStart: true }
    );

    addThinLineWithArrow(
      map,
      [
        [51.69619500667548, 4.839650368015157],
        [51.69661368743883, 4.8440943064343],
        [51.69684644312875, 4.844378266199271],
      ],
      { gapAtStart: true, showArrow: false }
    );

    addThinLineWithArrow(
      map,
      [
        [51.70173129852924, 4.842136882668257],
        [51.70143207012865, 4.8427975774249035],
        [51.70111709072674, 4.842238528014889],
      ],
      { showArrow: false }
    );

    addThinLineWithArrow(map, [
      [51.70143499353003, 4.842768303451578],
      [51.70158185030098, 4.84553889056366],
      [51.701570553643364, 4.849895274245483],
    ]);

    addThinLineWithArrow(
      map,
      [
        [51.7040218797099, 4.84322015031313],
        [51.7052111982901, 4.844649293763069],
        [51.706122144567956, 4.846078437213066],
        [51.70753913565295, 4.853060823781107],
        [51.70784277082524, 4.853019991110386],
      ],
      { showArrow: false }
    );

    addThinLineWithArrow(
      map,
      [
        [51.712371753544204, 4.849100054792046],
        [51.712017547778686, 4.852652497080214],
        [51.707994587647136, 4.853019991110386],
      ],
      { noGapAtEnd: true }
    );

    addThinLineWithArrow(map, [
      [51.712017547778686, 4.852652497080214],
      [51.71099658436259, 4.856521847044974],
      [51.70936865169318, 4.858863626191777],
      [51.70859007291236, 4.857835641597376],
      [51.70809454897653, 4.858349618810166],
    ], { showArrow: false });

    addThinLineWithArrow(
      map,
      [
        [51.70789024851254, 4.858578889261537],
        [51.705343054063576, 4.86121893051407],
      ],
      { arrowsBothEnds: true }
    );

    addThinLineWithArrow(map, [
      [51.695407570766434, 4.832941181052888],
      [51.69478276286142, 4.826605151396279],
    ]);

    addThinLineWithArrow(map, [
      [51.695735351323975, 4.839294723971079],
      [51.69605383550481, 4.84244324223306],
      [51.696057223622404, 4.842946130566162],
      [51.69595557998625, 4.843071852650496],
      [51.69599962559002, 4.8434927483203865],
      [51.69552867422021, 4.843618470403328],
      [51.695535450533754, 4.84370046306654],
      [51.69553206237708, 4.843738726309965],
      [51.69518985725372, 4.843837117506098],
      [51.69497301306444, 4.843082785005777],
      [51.69470195636612, 4.840453553608398],
      [51.69488491981531, 4.839010482739411],
      [51.69574212760659, 4.83930019014872],
    ], { showArrow: false });

    addThinLineWithArrow(
      map,
      [
        [51.70253838336848, 4.831312886685396],
        [51.70285027561411, 4.833187781827348],
        [51.70185343598973, 4.833602232332623],
        [51.701975748782075, 4.834342322520257],
        [51.69952331414814, 4.83542778812901],
        [51.69895452603029, 4.832102316218567],
        [51.700868805966195, 4.831273415209267],
        [51.700997237184396, 4.831964166050113],
        [51.70253838336848, 4.831312886685396],
      ],
      { showArrow: false }
    );

    addThinLineWithArrow(
      map,
      [
        [51.694438982990135, 4.8247862819521],
        [51.694676036459214, 4.826433692644429],
        [51.695387189417886, 4.833464606137682],
        [51.696098331201284, 4.8395247240429455],
        [51.69649948317496, 4.843437324438526],
        [51.696353610141585, 4.845526005852889],
        [51.696166107542126, 4.847208055149196],
        [51.69627016771639, 4.848853326178954],
        [51.69747724825237, 4.852949715272075],
        [51.697456436791725, 4.8547628711006325],
        [51.69720669216119, 4.855635834735864],
        [51.69726912685903, 4.856072335212531],
        [51.69870510113137, 4.8581876836793185],
        [51.69899645266955, 4.860101570386973],
      ],
      { arrowsBothEnds: true, color: "#f85149" }
    );

    addThinLineWithArrow(
      map,
      [
        [51.6983558117243, 4.835217493129562],
        [51.69435783282174, 4.836909854700622],
      ],
      { arrowsBothEnds: true, color: "#f85149" }
    );

    addThinLineWithArrow(
      map,
      [
        [51.69725264358627, 4.852139049204482],
        [51.69790727293881, 4.851742984048343],
        [51.69836550785152, 4.851003662422897],
        [51.698889199212886, 4.850634001610132],
        [51.69929832887155, 4.850475575547193],
        [51.700132941905935, 4.849841871297031],
      ],
      { color: "#f85149" }
    );

    addThinLineWithArrow(
      map,
      [
        [51.710625456400635, 4.856484829645666],
        [51.70999674854917, 4.8555124685351245],
        [51.708734067215545, 4.857448735442006],
        [51.70881789777391, 4.857600931094822],
        [51.70940994667035, 4.858556381576989],
        [51.710625456400635, 4.856484829645666],
      ],
      { showArrow: false, noGapAtEnd: true, weight: 1 }
    );

    var skatingLoopCenter = [
      (51.710625456400635 +
        51.70999674854917 +
        51.708734067215545 +
        51.70881789777391 +
        51.70940994667035) /
        5,
      (4.856484829645666 +
        4.8555124685351245 +
        4.857448735442006 +
        4.857600931094822 +
        4.858556381576989) /
        5,
    ];
    skatingMarker = L.marker(skatingLoopCenter, {
      icon: createSkatingIcon(16),
      interactive: false,
      opacity: 0,
    }).addTo(amervisieLayerGroup);
    updateAmervisieMarkers();

    var oldManLocations = [
      { coords: [51.70704466777943, 4.849787520183895] },
      { coords: [51.69920179908411, 4.841561101257923] },
      { coords: [51.70141948354694, 4.828492331198189], facing: "horizontal" },
    ];
    oldManMarkers = oldManLocations.map(function (loc) {
      var facing = loc.facing || "default";
      var marker = L.marker(loc.coords, {
        icon: createOldManIcon(16, facing),
        interactive: false,
        opacity: 0,
        zIndexOffset: 500,
      }).addTo(amervisieLayerGroup);
      marker._oldManFacing = facing;
      return marker;
    });

    L.polygon(
      [
        [51.70851607613625, 4.83107271549386],
        [51.70674695352892, 4.83101065196314],
        [51.70643927296959, 4.834020733194166],
        [51.707669982651595, 4.836130893231655],
        [51.70920832267129, 4.8334931931848075],
        [51.70849684691484, 4.8309796201982635],
      ],
      {
        color: "#a3ff12",
        weight: 3,
        opacity: 0.95,
        fillColor: "#99c590",
        fillOpacity: 1,
        interactive: false,
      }
    ).addTo(amervisieLayerGroup);

    L.polygon(
      [
        [51.704323582684054, 4.840063482679398],
        [51.70235335596621, 4.841095312894964],
        [51.70152376115411, 4.841262636714248],
        [51.70152376115411, 4.841820382776518],
        [51.70280271347187, 4.841987706595802],
        [51.70440999417252, 4.843047424114985],
        [51.704513687741155, 4.842740663780148],
        [51.70413347682873, 4.841904044686601],
        [51.70456553443606, 4.841374185927009],
        [51.70434086499532, 4.840063482679398],
      ],
      {
        color: "#a3ff12",
        weight: 3,
        opacity: 0.95,
        fillColor: "#99c590",
        fillOpacity: 1,
        interactive: false,
      }
    ).addTo(amervisieLayerGroup);

    L.polygon(
      [
        [51.705671415768705, 4.845638278621351],
        [51.70592510519228, 4.846252340868006],
        [51.70605194937016, 4.846911889207917],
        [51.705699603552716, 4.848117270654683],
        [51.70516403265418, 4.847639666684671],
        [51.70516403265418, 4.847321264038072],
        [51.70564322796707, 4.845661021667979],
      ],
      {
        color: "#a3ff12",
        weight: 3,
        opacity: 0.95,
        fillColor: "#99c590",
        fillOpacity: 1,
        interactive: false,
      }
    ).addTo(amervisieLayerGroup);

    L.polygon(
      [
        [51.69800034927485, 4.843941302918211],
        [51.69689269415102, 4.8435689952865175],
        [51.69650039312677, 4.839436380585596],
        [51.69675423535432, 4.840553303477179],
        [51.696756329069984, 4.8405272613515535],
        [51.69677552615366, 4.839969767796305],
        [51.696660343528066, 4.839598105426404],
        [51.69669873776925, 4.838637977637546],
        [51.69702508750342, 4.837584934256455],
        [51.69704428447338, 4.8386070057738095],
        [51.697140269200645, 4.83888575255142],
        [51.69706348143518, 4.839536161698959],
        [51.697082678388824, 4.839536161698959],
        [51.69727464747697, 4.839536161698959],
        [51.69783135322797, 4.839412274241994],
        [51.69783135322797, 4.839721992883398],
        [51.69811930179088, 4.839691021019661],
        [51.69823448070312, 4.8383282589961425],
        [51.69823448070312, 4.838421174588376],
        [51.69834965932213, 4.838668949502278],
        [51.69846483764803, 4.83931935864976],
        [51.69879117464629, 4.839536161698959],
        [51.69919429357097, 4.840836979992957],
        [51.699059920995325, 4.841208642362858],
        [51.69917509752153, 4.8418590515113635],
        [51.69948223350235, 4.842323629473441],
        [51.69948223346162, 4.842354601337121],
        [51.69794653287306, 4.843934166408786],
      ],
      {
        color: "#3fb950",
        weight: 2,
        opacity: 1,
        fillColor: "#dde474",
        fillOpacity: 0.55,
        lineJoin: "miter",
        lineCap: "butt",
        interactive: false,
      }
    ).addTo(amervisieLayerGroup);

    L.polygon(
      [
        [51.71072561252731, 4.85400509067486],
        [51.7103703375121, 4.853069605010489],
        [51.710202048372935, 4.853024339574262],
        [51.71008985526541, 4.853099781966989],
        [51.710080505827676, 4.853371374579439],
        [51.7101366024275, 4.853824028932877],
        [51.71013626784256, 4.853808495578221],
        [51.7101130615593, 4.853920849218213],
        [51.70964496790026, 4.853165425332577],
        [51.709595778169245, 4.853451205717533],
        [51.709418694695984, 4.853022535139587],
        [51.70929080064499, 4.85297490507557],
        [51.707854427238914, 4.853133671955931],
        [51.7076084683151, 4.853244808772189],
        [51.70764782183261, 4.8535464658455965],
        [51.708425046792144, 4.8550229978334585],
        [51.708543105111374, 4.8551341346498305],
        [51.70858245781611, 4.855388161658141],
        [51.70848407599041, 4.855467545098833],
        [51.70808070826794, 4.854975367769498],
        [51.70788394221984, 4.8550071211451495],
        [51.70782491223875, 4.8552929015301345],
        [51.708149576182535, 4.855848585611767],
        [51.70812989964614, 4.856086735931768],
        [51.708523428746474, 4.8565471598854515],
        [51.70873003015342, 4.856991707150769],
        [51.70971383343306, 4.855959722428111],
        [51.70947772259731, 4.855658065354788],
        [51.70933999070732, 4.855705695418777],
        [51.70913339208627, 4.855848585611767],
        [51.70905468760114, 4.855642188667474],
        [51.70915306818614, 4.855435791722101],
        [51.70957610226225, 4.855404038346478],
        [51.71009751091273, 4.855038874521824],
        [51.7101663757569, 4.854689587384513],
        [51.710766479246615, 4.8542926701831846],
        [51.711514138029514, 4.8541339033028805],
        [51.71071368907997, 4.853991013110516],
      ],
      {
        color: "#3fb950",
        weight: 2,
        opacity: 1,
        fillColor: "#dde474",
        fillOpacity: 0.55,
        lineJoin: "miter",
        lineCap: "butt",
        interactive: false,
      }
    ).addTo(amervisieLayerGroup);

    L.polygon(
      [
        [51.70512683784101, 4.827716046916436],
        [51.70512254454464, 4.827575028541783],
        [51.70510970600477, 4.827435368330817],
        [51.70508844587076, 4.827298411364303],
        [51.70505896890099, 4.827165476683285],
        [51.705021558990545, 4.827037844583273],
        [51.70497657643648, 4.826916744281936],
        [51.70492445446724, 4.826803342079102],
        [51.70486569506963, 4.826698730123204],
        [51.704800864153434, 4.826603915892408],
        [51.70473058610051, 4.826519812491737],
        [51.704655537750654, 4.8264472298596806],
        [51.70457644188237, 4.826386866968932],
        [51.704494060251264, 4.826339305096349],
        [51.70440918625323, 4.826305002226899],
        [51.70432263728293, 4.826284288645381],
        [51.70423524686148, 4.8262773637583205],
        [51.704147856608834, 4.826284294176521],
        [51.704061308138456, 4.82630501307662],
        [51.703976434952246, 4.826339320847705],
        [51.703894054413674, 4.826386887016604],
        [51.70381495987665, 4.826447253433249],
        [51.70373991304561, 4.826519838685283],
        [51.70366963664071, 4.826603943699328],
        [51.7036048074384, 4.826698758474894],
        [51.70354604975467, 4.826803369886022],
        [51.70349392943345, 4.826916770475482],
        [51.703448948398204, 4.827037868156842],
        [51.70341153981902, 4.827165496730958],
        [51.703382063941795, 4.827298427115659],
        [51.7033608046196, 4.82743537918054],
        [51.703347966579656, 4.8275750340729235],
        [51.70334367345209, 4.827716046916436],
        [51.703347966579656, 4.827857059759948],
        [51.7033608046196, 4.827996714652333],
        [51.703382063941795, 4.828133666717212],
        [51.70341153981902, 4.828266597101914],
        [51.703448948398204, 4.828394225676029],
        [51.70349392943345, 4.828515323357389],
        [51.70354604975467, 4.828628723946849],
        [51.7036048074384, 4.8287333353579776],
        [51.70366963664071, 4.8288281501335435],
        [51.70373991304561, 4.828912255147587],
        [51.70381495987665, 4.828984840399622],
        [51.703894054413674, 4.829045206816267],
        [51.703976434952246, 4.829092772985166],
        [51.704061308138456, 4.82912708075625],
        [51.704147856608834, 4.829147799656351],
        [51.70423524686148, 4.829154730074551],
        [51.70432263728293, 4.829147805187491],
        [51.70440918625323, 4.829127091605972],
        [51.704494060251264, 4.8290927887365225],
        [51.70457644188237, 4.82904522686394],
        [51.704655537750654, 4.82898486397319],
        [51.70473058610051, 4.828912281341134],
        [51.704800864153434, 4.828828177940464],
        [51.70486569506963, 4.828733363709667],
        [51.70492445446724, 4.8286287517537705],
        [51.70497657643648, 4.828515349550935],
        [51.705021558990545, 4.828394249249597],
        [51.70505896890099, 4.828266617149587],
        [51.70508844587076, 4.828133682468567],
        [51.70510970600477, 4.827996725502054],
        [51.70512254454464, 4.827857065291089],
        [51.70512683784101, 4.827716046916436],
      ],
      {
        color: "#000000",
        weight: 2,
        opacity: 1,
        fill: false,
        dashArray: "2, 12",
        lineCap: "round",
        lineJoin: "round",
        interactive: false,
      }
    ).addTo(amervisieLayerGroup);

    L.polygon(
      [
        [51.69582747675044, 4.831158482911577],
        [51.695822941420936, 4.831009545450683],
        [51.69580937911286, 4.83086204242779],
        [51.69578692044666, 4.830717394463065],
        [51.695755781724614, 4.830576994674203],
        [51.69571626284721, 4.830442195256926],
        [51.69566874442419, 4.830314294459935],
        [51.69561368410837, 4.830194524079902],
        [51.69555161218717, 4.830084037596968],
        [51.695483126474635, 4.829983899065105],
        [51.695408886553146, 4.829895072864365],
        [51.69532960742021, 4.829818414413703],
        [51.69524605260163, 4.829754661933819],
        [51.695159026797356, 4.829704429339317],
        [51.69506936813099, 4.829668200328536],
        [51.69497794007755, 4.829646323727933],
        [51.69488562314721, 4.8296390101357085],
        [51.694793306405174, 4.829646329896924],
        [51.69470187890943, 4.82966821242945],
        [51.6946122211487, 4.8297044469071215],
        [51.6945251965632, 4.829754684293393],
        [51.6944416432297, 4.829818440705779],
        [51.694362365791086, 4.829895102078555],
        [51.69428812770805, 4.829983930078725],
        [51.69421964390744, 4.830084069218179],
        [51.69415757389815, 4.830194555093521],
        [51.69410251542078, 4.830314323674126],
        [51.6940549986921, 4.830442221549003],
        [51.69401548129977, 4.830577017033777],
        [51.693984343796515, 4.830717412030869],
        [51.69396188603594, 4.830862054528704],
        [51.69394832428555, 4.831009551619675],
        [51.693943789144356, 4.831158482911577],
        [51.69394832428555, 4.8313074142034775],
        [51.69396188603594, 4.831454911294449],
        [51.693984343796515, 4.831599553792284],
        [51.69401548129977, 4.831739948789375],
        [51.6940549986921, 4.83187474427415],
        [51.69410251542078, 4.8320026421490265],
        [51.69415757389815, 4.832122410729631],
        [51.69421964390744, 4.832232896604974],
        [51.69428812770805, 4.832333035744428],
        [51.694362365791086, 4.832421863744597],
        [51.6944416432297, 4.832498525117374],
        [51.6945251965632, 4.83256228152976],
        [51.6946122211487, 4.832612518916031],
        [51.69470187890943, 4.832648753393703],
        [51.694793306405174, 4.832670635926228],
        [51.69488562314721, 4.832677955687444],
        [51.69497794007755, 4.83267064209522],
        [51.69506936813099, 4.832648765494617],
        [51.695159026797356, 4.832612536483835],
        [51.69524605260163, 4.8325623038893335],
        [51.69532960742021, 4.83249855140945],
        [51.695408886553146, 4.832421892958788],
        [51.695483126474635, 4.832333066758047],
        [51.69555161218717, 4.832232928226185],
        [51.69561368410837, 4.832122441743251],
        [51.69566874442419, 4.832002671363218],
        [51.69571626284721, 4.831874770566227],
        [51.695755781724614, 4.831739971148949],
        [51.69578692044666, 4.831599571360088],
        [51.69580937911286, 4.831454923395363],
        [51.695822941420936, 4.83130742037247],
        [51.69582747675044, 4.831158482911577],
      ],
      {
        color: "#000000",
        weight: 2,
        opacity: 1,
        fill: false,
        dashArray: "2, 12",
        lineCap: "round",
        lineJoin: "round",
        interactive: false,
      }
    ).addTo(amervisieLayerGroup);

    L.polygon(
      [
        [51.68924898104513, 4.837161899390537],
        [51.689243714979895, 4.836988990725734],
        [51.6892279675029, 4.836817747385616],
        [51.6892018902818, 4.836649818652283],
        [51.689165734472056, 4.836486821877328],
        [51.689119848297544, 4.83633032690179],
        [51.68906467369602, 4.836181840934147],
        [51.68900074206198, 4.836042794032146],
        [51.688928669127655, 4.835914525328375],
        [51.68884914903194, 4.83579827013236],
        [51.688762947633904, 4.835695148033389],
        [51.68867089513584, 4.835606152118723],
        [51.688573878086494, 4.835532139410954],
        [51.688472830841924, 4.835473822616597],
        [51.688368726565976, 4.835431763265264],
        [51.68826256785732, 4.835406366305407],
        [51.68815537709316, 4.835397876208517],
        [51.68804818658282, 4.835406374619151],
        [51.687942028625855, 4.83543177957326],
        [51.687837925570584, 4.835473846292138],
        [51.68773687996876, 4.835532169544202],
        [51.68763986492112, 4.835606187551674],
        [51.687547814706775, 4.835695187404376],
        [51.68746161578673, 4.835798311928375],
        [51.68738209826802, 4.835914567943223],
        [51.68731002791072, 4.83604283582816],
        [51.687246098754656, 4.8361818803051335],
        [51.687190926436855, 4.83633036233474],
        [51.687145042264035, 4.836486852010575],
        [51.68710888809706, 4.836649842327824],
        [51.68708281209663, 4.836817763693613],
        [51.687067065371316, 4.8369889990394785],
        [51.68706179955989, 4.837161899390537],
        [51.687067065371316, 4.837334799741596],
        [51.68708281209663, 4.83750603508746],
        [51.68710888809706, 4.83767395645325],
        [51.687145042264035, 4.837836946770499],
        [51.687190926436855, 4.837993436446333],
        [51.687246098754656, 4.83814191847594],
        [51.68731002791072, 4.838280962952914],
        [51.68738209826802, 4.838409230837851],
        [51.68746161578673, 4.838525486852698],
        [51.687547814706775, 4.8386286113766985],
        [51.68763986492112, 4.8387176112293995],
        [51.68773687996876, 4.838791629236871],
        [51.687837925570584, 4.838849952488936],
        [51.687942028625855, 4.8388920192078135],
        [51.68804818658282, 4.838917424161923],
        [51.68815537709316, 4.838925922572558],
        [51.68826256785732, 4.838917432475667],
        [51.688368726565976, 4.838892035515809],
        [51.688472830841924, 4.838849976164477],
        [51.688573878086494, 4.83879165937012],
        [51.68867089513584, 4.83871764666235],
        [51.688762947633904, 4.838628650747684],
        [51.68884914903194, 4.838525528648714],
        [51.688928669127655, 4.838409273452698],
        [51.68900074206198, 4.838281004748929],
        [51.68906467369602, 4.8381419578469265],
        [51.689119848297544, 4.837993471879284],
        [51.689165734472056, 4.837836976903747],
        [51.6892018902818, 4.837673980128791],
        [51.6892279675029, 4.837506051395457],
        [51.689243714979895, 4.837334808055339],
        [51.68924898104513, 4.837161899390537],
      ],
      {
        color: "#000000",
        weight: 2,
        opacity: 1,
        fill: false,
        dashArray: "2, 12",
        lineCap: "round",
        lineJoin: "round",
        interactive: false,
      }
    ).addTo(amervisieLayerGroup);

    L.circle([53.1721, 4.0952], {
      radius: 8000,
      color: "#39c5cf",
      fillColor: "#39c5cf",
      fillOpacity: 0.12,
      weight: 2,
      dashArray: "5, 10",
    }).addTo(layerGroups.offshore);

    applyFilters();
  }

  function wireUi() {
    var input = document.getElementById("search-input");
    var clearBtn = document.getElementById("search-clear");

    if (input) {
      input.addEventListener("input", function () {
        handleSearch(input.value);
      });
      input.addEventListener("keydown", function (e) {
        if (e.key !== "Enter") return;
        // Prevent form submits / page reloads; treat Enter as "choose top result".
        e.preventDefault();

        if (!searchQuery.trim()) return;

        if (searchResults.length > 0) {
          goToSearchResult(searchResults[0]);
          return;
        }

        // No results: keep the "No results found..." dropdown visible.
        showResults = true;
        renderSearchResults();
      });
      input.addEventListener("focus", function () {
        if (searchResults.length > 0) {
          showResults = true;
          renderSearchResults();
        }
      });
      input.addEventListener("blur", function () {
        setTimeout(function () {
          showResults = false;
          renderSearchResults();
        }, 200);
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        handleSearch("");
      });
    }

    var fOff = document.getElementById("filter-type-offshore");
    var fOn = document.getElementById("filter-type-onshore");
    var fEx = document.getElementById("filter-status-existing");
    var fPl = document.getElementById("filter-status-planned");
    var fRe = document.getElementById("filter-status-research");
    var fAm = document.getElementById("filter-status-amervisie");
    if (fOff)
      fOff.addEventListener("click", function () {
        activeTypeFilter = activeTypeFilter === "offshore" ? null : "offshore";
        updateFilterButtons();
        applyFilters();
      });
    if (fOn)
      fOn.addEventListener("click", function () {
        activeTypeFilter = activeTypeFilter === "onshore" ? null : "onshore";
        updateFilterButtons();
        applyFilters();
      });
    if (fEx)
      fEx.addEventListener("click", function () {
        activeStatusFilter = activeStatusFilter === "existing" ? null : "existing";
        updateFilterButtons();
        applyFilters();
      });
    if (fPl)
      fPl.addEventListener("click", function () {
        activeStatusFilter = activeStatusFilter === "planned" ? null : "planned";
        updateFilterButtons();
        applyFilters();
      });
    if (fRe)
      fRe.addEventListener("click", function () {
        activeStatusFilter = activeStatusFilter === "research" ? null : "research";
        updateFilterButtons();
        applyFilters();
      });
    if (fAm)
      fAm.addEventListener("click", function () {
        activeStatusFilter = activeStatusFilter === "amervisie" ? null : "amervisie";
        updateFilterButtons();
        applyFilters();
      });

    updateFilterButtons();
  }

  function wireMobileNav() {
    var btn = document.getElementById("mobile-menu-btn");
    var panel = document.getElementById("mobile-nav");
    var iconMenu = document.getElementById("icon-menu-svg");
    var iconClose = document.getElementById("icon-close-svg");
    if (!btn || !panel) return;

    btn.addEventListener("click", function () {
      var open = panel.classList.toggle("is-open");
      if (iconMenu) iconMenu.classList.toggle("hidden", open);
      if (iconClose) iconClose.classList.toggle("hidden", !open);
    });

    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        panel.classList.remove("is-open");
        if (iconMenu) iconMenu.classList.remove("hidden");
        if (iconClose) iconClose.classList.add("hidden");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    wireMobileNav();
    wireUi();
    initMap();
  });
})();
