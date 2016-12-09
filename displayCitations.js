/**
 * Created by Administrator on 2016/12/8.
 */
function displayCitations(){
    var quotes = document.getElementsByTagName("blockquote");
    for (var i=0;i<quotes.length;i++){
        console.log(1);
        if (!quotes[i].getAttribute("cite")){
            continue;
        }

        var url = quotes[i].getAttribute("city");
        var quoteElements = quotes[i].getElementsByTagName("*");
        if (quoteElements.length<1) continue;
        var elem = quoteElements[quoteElements.length-1];
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var supscript = document.createElement("sup");
        supscript.appendChild(link);
        elem.appendChild(supscript);
    }

}
addLoadEvent(displayCitations);