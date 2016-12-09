/**
 * Created by Administrator on 2016/11/29.
 */
function displayAbbreviations(){
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    //获取abbr缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length<1) return false;
    var defs = new Array();
    //遍历abbreviations，取得abbr的title和说明，斌复制给defs数组；
    for(var i=0;i<abbreviations.length;i++){
        if(abbreviations[i].childNodes.length < 1) continue;
        var abbrTit = abbreviations[i].title;
        var abbrText = abbreviations[i].lastChild.nodeValue;
        defs[abbrText] = abbrTit;
    }
    //创建自定义列表，显示缩略词
    var dlist = document.createElement("dl");
    for(abbrText in defs){
        //遍历定义
        var abbrTit = defs[abbrText];
        //创建标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(abbrText);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text= document.createTextNode(abbrTit);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length < 1) return false;
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);