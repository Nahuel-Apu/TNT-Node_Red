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
        deleteConfirm: "¿Esta seguro de Borrar el usuario?",
        controller: {
            loadData: function (filter) {
                return $.ajax({
                    type: "GET",
                    url: "/api/users"
                });
            },
            insertItem: function (item) {
                return $.ajax({
                    type: "POST",
                    url: "/api/users",
                    data: item
                });
            },
            updateItem: function (item) {
                return $.ajax({
                    type: "PUT",
                    url: "/api/users",
                    data: item
                });
            },
            deleteItem: function (item) {
                return $.ajax({
                    type: "DELETE",
                    url: "/api/users",
                    data: item
                });
            }
        },
        fields: [
            { name: "username", type: "text", title: "Nombre de Usuario", width: 80, filtering: false },
            { name: "password", type: "text", title: "Contraseña", width: 80, filtering: false },
            { name: "superuser", type: "checkbox", title: "Superusuario", width: 30,filtering: false, sorting: false },
            { type: "control", width: 30 }
        ]
    });
});