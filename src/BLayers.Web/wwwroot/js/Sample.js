var appId = 'p6GqkdoqlSjfnyVvdIUL';
var appCode = '00CJe6ilEo6UAyApIR0JNA';
window.mapUndo = {
    clickElement: function (element) {

        element.addEventListener('click', function () {
            draw.removeLastPoint();

            //document.getElementById('undo').addEventListener('click', function () {
            //    draw.removeLastPoint();
        }
}
};
export const raster = new ol.layer.Tile({
    source: new ol.source.OSM(),
});

export function showPrompt(message) {
    return prompt(message, 'Type anything here');
}

export const source = new ol.source.Vector({ wrapX: false });

export const vector = new ol.layer.Vector({
    source: source,
});

export const map = new ol.Map({
    layers: [raster, vector],
    target: 'map',
    view: new ol.View({
        center: [-11000000, 4600000],
        zoom: 4,
    }),
});

export const typeSelect = document.getElementById('type');

export function addInteraction() {
    const value = typeSelect.value;
    if (value !== 'None') {
        draw = new ol.interaction.Draw({
            source: source,
            type: typeSelect.value,
        });
        map.addInteraction(draw);
    }
}
export function showMap(message) {
    //const raster = new ol.layer.Tile({
    //    source: new ol.source.OSM(),
    //});

    //const source = new ol.source.Vector({ wrapX: false });

    //const vector = new ol.layer.Vector({
    //    source: source,
    //});

    //const map = new ol.Map({
    //    layers: [raster, vector],
    //    target: 'map',
    //    view: new ol.View({
    //        center: [-11000000, 4600000],
    //        zoom: 4,
    //    }),
    //});

   /* const typeSelect = document.getElementById('type');*/

    // global so we can remove it later
    //function addInteraction() {
    //    const value = typeSelect.value;
    //    if (value !== 'None') {
    //        draw = new ol.interaction.Draw({
    //            source: source,
    //            type: typeSelect.value,
    //        });
    //        map.addInteraction(draw);
    //    }
    //}

    /**
     * Handle change event.
     */
    typeSelect.onchange = function () {
        map.removeInteraction(draw);
        addInteraction();
    };

    document.getElementById('undo').addEventListener('click', function () {
        draw.removeLastPoint();
    });
    //DotNet.invokeMethodAsync('BlazorSample', 'ReturnArrayAsync')
    //    .then(data => {
    //        console.log(data);
    //    });
    addInteraction();
    // return vector;
}

export let draw;

