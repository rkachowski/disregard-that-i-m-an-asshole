"use strict";

$(function(){
    console.log("Passive aggressive fitering engaged");

    var get_offenders = function(message)
    {
        var filter_list = ["wink"];
        var emojis = message.find("span.emoji-outer");
        var to_replace = [];
        if(emojis.length > 0)
        {
            for(var i =0; i < emojis.length;i++)
            {
                var emoji = emojis[i];
                var text = $(emoji).text();
                for (var filtered of filter_list)
                {
                    var regex = new RegExp(filtered);
                    if(text.search(regex) == 1)
                    {
                        to_replace.push(emoji);
                    }
                }
            }
        }

        return to_replace;
    }

    $("#msgs_div").bind("DOMNodeInserted", function(event){
        var inserted = $(event.target);
        if(inserted.is("ts-message") )//&& ! inserted.hasClass("unprocessed"))
        {
            var message = inserted.find(".message_body");
            var offensive_messages = get_offenders(message);
            if(offensive_messages.length > 0)
            {
                $(offensive_messages).addClass("asshole imahiddenasshole");
                $(offensive_messages).before("<span class='replacement'>- disregard that, i'm an asshole</span>")
            }
        }
    });
});
