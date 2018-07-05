$(function () {

    $("#jsGrid").jsGrid({
        height: "80%",
        width: "100%",
        filtering: true,
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
        pageButtonCount: 5,
        deleteConfirm: "¿Estas seguro de Borrar el Proyecto?",
        controller: {
            loadData: function (filter) {
                return $.ajax({
                    type: "GET",
                    url: "./api/projects"
                });
            },
            insertItem: function (item) {
                return $.ajax({
                    type: "POST",
                    url: "./api/projects",
                    data: item
                });
            },
            updateItem: function (item) {
                return $.ajax({
                    type: "PUT",
                    url: "./api/projects",
                    data: item
                });
            },
            deleteItem: function (item) {
                return $.ajax({
                    type: "DELETE",
                    url: "./api/projects",
                    data: item
                });
            }
        },
        fields: [
            { name: "project_name", type: "text", title: "Nombre de Proyecto", width: 80, filtering: false },
            { name: "prefix", type: "text", title: "Prefijo", width: 80, filtering: false },
            { name: "collectionName", type: "text", title: "Coleccións", width: 30,filtering: false, sorting: false },
            { type: "control", width: 30 }
        ]
    });
});