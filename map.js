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
        info: "Onshore converter station where 525 kV DC from Nederwiek 3 is converted to 380 kV AC to join the national grid.",
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
        status: 'planned'
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
        status: 'planned'
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
        status: 'planned'
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

  var mapRef = null;
  var markerRegistry = [];
  var layerGroups = {};
  var searchQuery = "";
  var searchResults = [];
  var showResults = false;
  var activeTypeFilter = null;
  var activeStatusFilter = null;

  function locMatchesFilters(loc) {
    if (activeTypeFilter && loc.type !== activeTypeFilter) return false;
    if (activeStatusFilter && loc.status !== activeStatusFilter) return false;
    return true;
  }

  function applyFilters() {
    markerRegistry.forEach(function (entry) {
      var visible = locMatchesFilters(entry.loc);
      var el = entry.marker.getElement();
      if (el) {
        el.style.display = visible ? "" : "none";
        el.style.pointerEvents = visible ? "" : "none";
      }
    });
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

    L.polyline(pipelineData.subsea.coords, {
      color: pipelineData.subsea.color,
      weight: 4,
      opacity: 0.9,
      dashArray: "10, 15",
      className: "clickable-polyline",
    })
      .bindPopup(createPipelinePopup("subsea"), { maxWidth: 300 })
      .addTo(map);

    L.polyline(pipelineData.grid380.coords, {
      color: pipelineData.grid380.color,
      weight: 4,
      opacity: 0.9,
      className: "clickable-polyline",
    })
      .bindPopup(createPipelinePopup("grid380"), { maxWidth: 300 })
      .addTo(map);

    L.polyline(pipelineData.grid150.coords, {
      color: pipelineData.grid150.color,
      weight: 4,
      opacity: 0.9,
      className: "clickable-polyline",
    })
      .bindPopup(createPipelinePopup("grid150"), { maxWidth: 300 })
      .addTo(map);

    L.polyline(pipelineData.heating.coords, {
      color: pipelineData.heating.color,
      weight: 5,
      opacity: 0.9,
      dashArray: "8, 12",
      className: "clickable-polyline",
    })
      .bindPopup(createPipelinePopup("heating"), { maxWidth: 300 })
      .addTo(map);

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
