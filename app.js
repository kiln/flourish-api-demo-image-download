const opts = {
    container: "#visualization",
    api_key: "tnCbAlSozHJR7dOpI1GIcU-LUmwBOQFZZ0AD3epZ9GOeIkdE8D2_ILHB5Z3Qmbav",
    base_visualisation_id: "17078430"
};

var visualization_api = new Flourish.Live(opts);

var snapshot_options = {
    download: true,
    format: "png", // Formats available include png, jpg & svg
    filename: "flourish-map",
    scale: 2,
}

document.querySelector("button").addEventListener("click", function() {
    visualization_api.snapshot(snapshot_options, function (error, data) {
        if (error) {
            console.error(error);
            return;
        }
    });
})