$(function(){
    console.log("Passive aggressive fitering engaged");

    $("#msgs_div").bind("DOMNodeInserted", function(event){
        var inserted = $(event.target);
        if(inserted.is("ts-message") && ! inserted.hasClass("unprocessed"))
        {
            var message = inserted.find(".message_body");
            var emojis = message.find("span[class^=emoji]");
            if(emojis.length > 0)
            {
                console.log(emojis);
            }
        }
    });
});
