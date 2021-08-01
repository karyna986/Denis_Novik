$ (function() {
    let jsbanner = $("#jsbanner")
    let jsburger = $("#jsburger")
    jsburger.on ("click", function(event)
    {
        event.preventDefault();
        jsbanner. burgerClass("show");
    })
    
}
)