define_ibex_controller({
    name: "PictureScale",
    jqueryWidget: {
        _init: function () {
            this.options.transfer = null; // Remove 'click to continue message'.         
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [           
                            "Message",  this.options,
                            "AcceptabilityJudgment",  this.options      
                ]
            });
        }
    },
    properties: {obligatory: ["html","s"]}
});