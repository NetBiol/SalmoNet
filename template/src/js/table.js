dtable = new webix.ui({
        container:"browsetable",
        view:"datatable",
        columns:[
            { id:"uniprot", map:"#data1#", header:["UniProt AC", {content:"textFilter"}], adjust:true},
            { id:"genename", map:"#data2#", header:["Gene name", {content:"textFilter"}], adjust:true},
            { id:"locus", map:"#data3#", header:["Locus", {content:"textFilter"}], adjust:true},
            { id:"strain", map:"#data4#", header:["Strain", {content:"selectFilter"}], fillspace:true},
            { id:"numort", map:"#data5#", header:"Othologs", adjust:true},
            { id:"numint", map:"#data6#", header:"Interactions", adjust:true}
        ],
        resizeColumn:true,
        datatype:"csv",
        url:'data/nodes.csv',
        autoheight:true,
        pager: {
            template: "{common.prev()}{common.next()}Page {common.page()} from #limit#",
            container: "paging_here",
            size: 15,
            group: 5
        },
        hover:"browse_row_hover",
				on:{
					"onItemClick":function(id, e, trg){
                        //window.location.href = "proteins/"+dtable.getItem(id.row).uniprot+".html";
                        window.location.href = "uniprot.html";
						//webix.message("Click on row: "+dtable.getItem(id.row).uniprot);
					}
        }
});