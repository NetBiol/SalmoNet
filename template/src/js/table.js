dtable = new webix.ui({
        container:"browsetable",
        view:"datatable",
        columns:[
            { id:"title",   header:"Film title",    width:200},
            { id:"year",    header:"Release year" , width:80},
            { id:"votes",   header:"Votes",         width:100}
        ],
        data:[
            { id:1, title:"The Shawshank Redemption", year:1994, votes:678790},
            { id:2, title:"The Godfather",            year:1972, votes:511495}
        ]
});