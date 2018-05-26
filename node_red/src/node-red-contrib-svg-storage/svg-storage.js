module.exports = function (RED) {
    function SVGStorageNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        // get filename and content from svg-storage node.
        var filename = config.filename;
        var filecontent = config.content;
        node.on('input', function (msg) {

            if (msg.req.url === "/svg-list") {
                msg.payload = [{ id: 1, name: filename }];
                return node.send(msg);
            }

            if (msg.req.params.id === filename) {
                msg.payload = filecontent;
                return node.send(msg);
            }

            msg.payload = "USE '/svg-list' o '/svg-get/:nombre_de_archivo.svg'";
            node.send(msg);
        });
    }
    RED.nodes.registerType("svg-storage", SVGStorageNode);
}