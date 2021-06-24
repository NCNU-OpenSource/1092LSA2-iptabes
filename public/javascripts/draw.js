// document.addEventListener("DOMContentLoaded", function() {
function startDraw(inAllaccept, inAlldrop, inForwardR, inForwardD){
  var cy = (window.cy = cytoscape({
    container: document.getElementById("cy"), // container to render in

    // demo your layout
    layout: {
      name: "preset"
      // some more options here...
    },

    style: [{
        selector: "node",
        style: {
          "background-color": "data(color)",
          'shape': 'data(shape)',
          'width': 'data(width)',
          'height': 'data(height)',
          'label': "data(name)",
          "font-weight": "bold", // 粗體
          "color": "#fff",
          "text-valign": "data(textPlace)",
          "text-halign": "data(textPlace)",
          "text-outline-color": "#000",
          "text-outline-width": 0.5,
          "font-size": 7,
        }
      },
      {
        selector: "edge",
        style: {
          "curve-style": "data(curve)",  // 線段屬性
          "target-arrow-shape": "data(shape)",
          "line-color": "data(color)",
          "target-arrow-color": "data(color)",
          'width': 1.5,
          opacity: "data(opacity)",
          'label': "data(rules)", // 字
          "text-wrap": "wrap",
          "color":"data(textColor)",
          // "text-rotation": "autorotate",
          // "text-margin-x": "10px",
          "text-margin-y": "data(my)",
          "font-size": 5,
        }
      }
    ],

    elements: {
      nodes: [{
          data: {
            id: "internet",
            name: "internet",
            color: "navy",
            textPlace: "center",
          },
          position: { // the model position of the node (optional on init, mandatory after)
            x: -100,
            y: 0
          },
        },
        {
          data: {
            id: "firewall",
            name: "firewall",
            color: "#941716",
            shape:"rectangle",
            width:"3",
            height:"50"
          }
        },
        {
          data: {
            id: "inner",
            name: "PC",
            color: "navy",
            textPlace: "center",
          },
          position: { // the model position of the node (optional on init, mandatory after)
            x: 100,
            y: 0
          },
        },
        {
          data: {
            id: "drop",
            color: "#eee",
          },
          position: { // the model position of the node (optional on init, mandatory after)
            x: -50,
            y: -100
          },
        },
        {
          data: {
            id: "other",
            name: "other",
            color: "navy",
            textPlace: "center",
          },
          position: { // the model position of the node (optional on init, mandatory after)
            x: 100,
            y: 80
          },
        },
      ],
      edges: [{
          data: {
            curve:"straight",
            // "control-point-step-size": 40,
            shape:"none",
            source: "internet",
            target: "firewall",
            color: "#E00000",
            opacity: "0.5",
          }
        },
        {
          data: {
            curve:"straight",
            shape:"none",
            source: "internet",
            target: "firewall",
            color: "#7A7A7A",
            opacity: "0.5",
          }
        },
        {
          data: {
            curve:"straight",
            shape:"none",
            source: "internet",
            target: "firewall",
            color: "#00B7FF",
            opacity: "0.5",
            rules: inForwardR,
            textColor : "#000EAC",
            my: "10px",
          }
        },
        {
          data: {
            curve:"bezier",
            shape:"none",
            source: "firewall",
            target: "inner",
            color: "#00B7FF",
          }
        },
        {
          data: { // accept
            curve:"straight",
            shape:"triangle",
            source: "firewall",
            target: "inner",
            color: "#7A7A7A",
            rules: inAllaccept,
            textColor : "black",
            my: "-5px",
          }
        },
        {
          data: { // drop
            curve:"bezier",
            shape:"triangle",
            source: "firewall",
            target: "drop",
            color: "#E00000",
            rules: inAlldrop,
            textColor : "#610000",
            my: "-20px",
          }
        },
        {
          data: { // forward
            curve:"straight",
            shape:"triangle",
            source: "inner",
            target: "other",
            color: "#00B7FF",
            rules: inForwardD,
            textColor : "#004F80",
            my: "-5px",
          }
        },
      ]
    }
  }));
};