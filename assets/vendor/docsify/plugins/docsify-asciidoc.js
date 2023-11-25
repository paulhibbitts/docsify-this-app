(()=>{"use strict";var e={146:e=>{const t=JSON.parse('{"CAUTION":"🔥","IMPORTANT":"❗","NOTE":"📌","TIP":"💡","WARNING":"⚠️"}'),n=JSON.parse('{"empty":"","idprefix":"_","idseparator":"_","markdown-line-break":"\\\\","markdown-strikethrough":"~~","nbsp":"&#160;","quotes":"<q> </q>","sp":" ","vbar":"|","zwsp":"&#8203;"}'),i={"'''":"---","***":"---","---":"---","<<<":void 0,"toc::[]":void 0},r=[...Array(19)].reduce(((e,t,n)=>(e[n+1]=String.fromCharCode(9312+n))&&e),{}),o={"----":"v","....":"v","====":"c","|===":"t","--":"c","****":"c",____:"c","++++":"p"},l=[1,2,3,4,5,6,7,8,9,"*",".","<","-"].reduce(((e,t)=>(e[""+t]=!0)&&e),{}),s=["quotes","attributes","macros"],a={quotes:function(e,t){const n=~(~e.indexOf("<<")?e=e.replace(L,"xref:$1[$2]"):e).indexOf("<");return n&&(e=e.replace(/</g,"&lt;")),~(t=e.indexOf("*"))&&~e.indexOf("*",t+1)&&(e=e.replace(R,"*$1*")),~e.indexOf("`")&&(t=~e.indexOf('"`')||~e.indexOf("'`"),1)&&(t&&(e=e.replace(N,this.q??=this.get("quotes").split(" ").slice(0,2).join("$2"))),(n||~e.indexOf("`+")||~e.indexOf("]`")||~e.indexOf("\\"))&&(e=e.replace(/(?:\[[^[\]]+\])?`(\+)?(\S|\S.*?\S)\1`/g,((e,t,i)=>(n&&i.length>3&&~i.indexOf("&lt;")&&(i=i.replace(/&lt;/g,"<")),t?"`"+(~i.indexOf("{")?i.replace(/\{(?=[a-z])/g,"\\{"):i)+"`":"`"+(~i.indexOf("\\")?i.replace(/\\(?=https?:|\.\.\.)/g,""):i)+"`"))))),~e.indexOf("]_")&&(e=e.replace(b,"")),~(t=e.indexOf("#"))&&~e.indexOf("#",t+1)&&(e=e.replace(S,((e,t,n,i)=>(n&&=this.s??=(n=this.get("markdown-strikethrough").split(" ")).length>1?n.slice(0,2):[n[0],n[0]],t?n?n[0]+i+n[1]:i:"<mark>"+i+"</mark>")))),~e.indexOf("'")?e.replace(/.'/g,((e,t,n,i=e[0],r=n[t+2]||"")=>"`"===i?"`"===r?e:"’":/\p{L}/u.test(r)&&/[\p{L}\d]/u.test(i)?i+"’":e)):e},attributes:_,macros:function(e){return~e.indexOf(":")?(~e.indexOf("m:[")&&(e=e.replace(A,((e,t)=>"$"+t.replace(/\\]/g,"]")+"$"))),~e.indexOf("image:")&&(e=e.replace(y,B.bind(this))),(~e.indexOf(":/")||~e.indexOf("link:"))&&(e=e.replace(k,((e,t,n="",i,r="",o,l=n,s)=>t?l?"<span>"+l+"</span>"+(s??i+r):"link:"+i+r:s?this.has("hide-uri-scheme")?"["+s+"]("+l+s+")":l+s:"["+(o||=this.has("hide-uri-scheme")?i:n+i)+"]("+n+i+")"))),~e.indexOf("[[")&&(e=e.replace(O,'<a name="$1"></a>')),~e.indexOf("xref:")?e.replace(D,((e,t,n,i,r,o=r,l)=>t?e.slice(1):"["+(n&&(n+="#"===i?"":i)?l||n:(n="#!"+o)&&l)+"]("+n+")")):e):~e.indexOf("[[")?e.replace(O,'<a name="$1"></a>'):e},callouts:function(e,t=">"===e[e.length-1]){return t?e.replace(m,((e,t,n)=>t+r["."===n?this.coseq++:n])):e}},c={"":"| --- ","<":"| :-- ","^":"| :-: ",">":"| --: "},d=/^:([^:]+):(?:$| (.+))/,u=/(\\)?\{([\p{Ll}\d_][\p{Ll}\d_-]*)\}/gu,f=/^(?:[\p{Alpha}\d_]+(?: +[\p{Alpha}\d_]+){0,2}(?: +<([^>]+)>)?(?:; |$))+$/u,p=/^\[([\p{L}_][\p{Alpha}\d_\-:.]*)(?:, ?(.+))?\]$/u,g=/^image::([^\s[][^[]*)\[(.*)\]$/,h=/(?:(?:^| +)(?:[<>^.]*[a-z]?)|)\| */,m=/(^| )<([.1-9]|1\d)>(?=(?: <(?:[.1-9]|1\d)>)*$)/g,v=/^(?!\/\/)(\S.*?)(:{2,4})(?: (.+))?($)/,x=/(?:^|, *)(?:(\w[\w-]*)=)?(?:("|')([^\2]+?)\2|([^,]+|))/g,b=/(?<![\p{L}\d_\\])\[[^[\]]+\](?=_(?:\S|\S.*?\S)_(?![\p{L}\d_]))/gu,O=/\[\[([\p{L}_][\p{Alpha}\d_\-:.]*)\]\]/u,y=/image:([^\s:`[\\][^[\\]*)\[(|.*?[^\\])\]/g,A=/stem:\[(.*?[^\\])\]/g,k=/(\\)?(?:(?:link:(?!:)|(https?:\/\/))([^\s[\\]+)(\[(|.*?[^\\])\^?\])|(https?:\/\/)([^\s[\]]+))/g,w=/^(\*+|\.+|<(?:[.1-9]|1\d)>|-+(?! -)|\d+\.) +(.+)/,S=/(?<![\p{L}\d_\\])(?:\[((\.line-through)|[^[\]]+)\])?#(\S|\S.*?\S)#(?![\p{L}\d_])/gu,E=/^\\?(?:(if)(n)?def|include)::([^[]+)\[(.+)?\]$/,N=/("|')`(\S|\S.*?\S)`\1/g,T=/^v(\d+(?:[-.]\w+)*)(?:, (\d+-\d+-\d+))?|(\d+-\d+-\d+)$/,C=/\[([^[]*?)\]\(#!([^)]+)\)/g,R=/(?<![\p{L}\d_\\])(?:\[[^[\]]+\])?(\*(?:\S|\S.*?\S)\*)(?![\p{L}\d_])/gu,I=/([.#%])/,D=/(\\)?xref:(?![\s:`])(?:([^#[\\]+)(#[^\s[\\]*|\.adoc)|#([^\s[\\]+)|([^#[\\]+))\[(|.*?[^\\])\]/g,L=/<<([^\s,>][^,>]*)(?:, ?([^>]+))?>>/g;function $(e,t=s){return/[{\x60\x27*_:<[#]/.test(e)?t.reduce(((e,t)=>a[t].call(this,e)),e):e}function _(e){return~e.indexOf("{")?e.replace(u,((e,t,n)=>t?e.slice(1):this.get(n)??e)):e}function M(e,t,n,i=e.length){return n||"+"===e[i-1]&&" "===e[i-2]?e.slice(0,-2)+t:e}function B(e,t,n,i,r,o=n.split(",")[0]||/(.*\/)?(.*?)($|\.)/.exec(t)[2]){return"!["+o+"]("+(this.get("imagesdir")?this.get("imagesdir")+"/":"")+t+")"}function P(e,t,n="test",i=e in l&&w[n](t)){return i||(t.endsWith("::")||~t.indexOf(":: ")?v[n](t):void 0)}function j(e,t,n,i,r,o=e.indexOf(" ")){if(~o&&e.startsWith(i=["=","==","===","====","=====","======"][o-1])&&(r=e.slice(o+1))&&(" "!==r[0]||(r=r.trimStart())))return t||n&&"discrete"===n.get(1)?[i,r]:void 0}function H(e,t=new Map){if(!e)return t;let n,i,r,o,l;if(t.set(0,e),"["===(n=e[0])&&(r=p.exec(e)))return r[2]?t.set("id",r[1]).set("reftext",r[2]):t.set("id",r[1]);if((i=0)||!~e.indexOf("=")&&!~e.indexOf('"'))if(","===n||~e.indexOf(","))for(const n of e.split(","))t.set(++i,n.trimStart());else t.set(1,e);else for(;r=x.exec(e);)t.set(r[1]??++i,r[4]??r[3]),r.index||(e=","+e,x.lastIndex=1);if(!(o=t.get(1))||(r=o.split(I)).length<2)return t;for(let e,i=0,o=r.length;i<o;i+=2)!(e=r[i])||!(n=r[i-1])&&(l=e)||("#"===n?t.set("id",e):"."===n?t.set("role",e):t.set(e+"-option",""));return t.set(1,l)}function F(e,t,n,i,r){const{id:o=n?.get("id"),indent:l,text:s,subs:a,title:c=$.call(i,s,a)}=t,d=o&&r.set(o,{title:c,reftext:n.get("reftext")})?'<a name="'+o+'"></a>':"";e.push(l+d+"**"+c+"**","")}e.exports=function(e,{attributes:r={}}={}){const l=new Map(Object.entries(Object.assign({},n,r))),a=e.split((l.delete("doctitle"),"\n"));let u,p,m,v,x,b,O,y,A,k,w,S,N,R,I,D,L;""===a[a.length-1]&&a.pop(),p=(u=v=(b="")||!1)||"="===e[0]||!!~e.indexOf("\n= ");const[q,U,V,W,G]=[(S=[]).slice(),new Map,new Map,[],()=>{}];return a.reduce(((e,n,C)=>{for(;void 0===(k=N=R=D=I=void 0);){if(W.length&&(N=W[W.length-1]||"endif::[]"===n&&n))return n===N?G(W.pop())||e:("endif::[]"===N&&n.startsWith("if")&&/^ifn?def::.+\[\]$/.test(n)&&W.push(N),e);if(!n&&!u.verbatim)return x||(p=v=!1)||(m?v=void 0:(n=b=u.childIndent||"")&&(n=n.trimEnd()),O=y=L=L?.close(),e[e.length-1]&&(e[e.length]=n)),e;if(!((k="\\"===(A=n[0]))||"i"===A&&"m"!==n[1])||!(k&&"\\endif::[]"===n||"]"===n[n.length-1]&&~n.indexOf("::")&&(N=E.exec(n)))||k&&(n=n.slice(1)))if(u.verbatim)if(n===u.delimiter){if(({cap:n,indent:b,inList:m,listStack:S}=u),u.outdent&&(k=u.outdent+b.length)&&~(N=u.at))for(let t=N,n=e.length;++t<n;)e[t]=(b+e[t].slice(k)).trimEnd();u=!!q.length&&q.pop()}else(N=n.length)&&(u.outdent&&=Math.min(N-n.trimStart().length,u.outdent),N>2&&(~n.indexOf("{")||">"===n[N-1])&&(I=u.subs));else if(!p&&n in o){!1!==v&&(v=!(S=(m=G(b=u.childIndent||""))||[]));const i=!1===u||n!==u.delimiter&&q.push(u)?u={delimiter:n,indent:b,childIndent:b,inList:m,listStack:S}:void 0;if("v"===(k=o[n]))u.subs=(u.verbatim=!!(l.coseq=1))&&["callouts"],O?(D="source"===(D=O.get(1)||("----"===n?"source":void 0))?O.get(2)||l.get("source-language"):"listing"===D||"literal"===D?void 0:D,"0"===O.get("indent")&&Object.assign(u,{at:e.length,outdent:1/0}),O.get("subs")?.includes("attributes")&&(u.subs=["callouts","attributes"]),y&&=F(e,y,O,l,V)):"----"===n&&(D=l.get("source-language")),n=D?(u.cap="```")+D:u.cap="```";else if("p"===k&&(u.verbatim=!0))n=O&&"stem"===O.get(1)?(u.cap="```")+"math":void 0,y=void 0;else if(void 0===i)({cap:n,indent:b,inList:m,listStack:S}=u),x=y=void 0,u=!!q.length&&q.pop();else if("t"===k){if(x={header:O?.has("header-option")||!O?.has("noheader-option")&&void 0},O!==(n=void 0)&&(k=O.get("cols"))){const e=!~k.indexOf("*")&&k.split(/,|;/)||k.split(/,|;/).reduce(((e,t)=>e.push.apply(e,~t.indexOf("*")?Array(parseInt(t,10)).fill(t):[t])&&e),[]);(x.div=~k.indexOf("<")||~k.indexOf("^")||~k.indexOf(">")?e.reduce(((e,t)=>e+c[/(?<!\.)[<^>]|$/.exec(t)[0]]),"")+"|":c[""].repeat(e.length)+"|")&&(x.cols=e.length)}}else"____"===n?(b=u.childIndent+="> ",(k=O&&O.get(2))&&(u.cap=">\n"+b+"— "+k),n=y&&=F(e,y,O,l,V)):"===="===n&&O?(D=O.get(1))in t?(n="<dl><dt><strong>"+(O.has("id")?'<a name="'+O.get("id")+'"></a>':"")+t[D]+" "+D+(y?": "+y.text:"")+"</strong></dt><dd>\n",u.cap="</dd></dl>",y=void 0):O.has("collapsible-option")?(n="spoiler"===l.get("markdown-collapsible-variant")&&(k="spoiler")?(u.cap="```")+(y?k+" "+$.call(l,y.text):k):(u.cap="</details>")&&(O.has("open-option")?"<details open>":"<details>")+"\n"+b+"<summary>"+(y?y.text:"Details")+"</summary>\n",y=void 0):n=y&&=F(e,y,O,l,V):n=y&&=F(e,y,O,l,V);i!==(O=void 0)&&(S=(m=void 0)||[])}else{let o,E,q;if((q=" "===A)||(E=n),void 0===v&&!(v=!1)&&(o=q?(E=n.trimStart())[0]:A)&&(P(o,E)&&m?e.pop():!q&&(S=(m=G(b=u.childIndent||""))||[])),"/"===A&&"/"===n[1])n="////"===n?G(v=!W.push(n)):void 0;else if(!v&&"="===A&&(N=j(n,!1===u,O))){let[t,i,r,o]=N;if(p){if(t.length>1||O&&"discrete"===O.get(1)||l.has("doctitle")){if(!(p=!1)&&e.length)return e;continue}l.set("doctitle",i),(r=O?.get("id"))&&(o=i.toLowerCase().split(" ").join("-"))}else o=(k=(i=_.call(l,i)).toLowerCase().split(" ")).join("-"),r=O?.get("id")||l.get("idprefix")+k.join(l.get("idseparator"));r&&V.set(i,V.set(r,{autoId:o,reftext:O?.get("reftext"),title:i}).get(r)),O=y=void 0,n="#".repeat(t.length)+" "+i}else if(!v&&":"===A&&(N=d.exec(n))){const[,e,t=""]=(n=void 0)||N;e in r||l.set(e,t&&_.call(l,t))}else if("["===A&&"]"===n[n.length-1]){if(L&&!(v=L=L.close()))continue;O=H(n.slice(1,-1),O),n=(v=!1)||void 0}else if(p){if(p=l.has("doctitle"))if(!l.has("author")&&f.test(n)){const e=n.split("; ").map((e=>e.split(" <")[0]));l.set("author",e[0]).set("authors",e.join(", "))}else if("revdate"in l||"revnumber"in l||!(N=T.exec(n)))p=!1;else{const[,e,t,n=t]=N;e&&l.set("revnumber",e),n&&l.set("revdate",n)}if(!p&&!e.length)continue;n=void 0}else if(x){const t=x.row,i=~n.indexOf("|",1)?n.split(h):"|"===A?["",n.slice(" "===n[1]?2:1)]:[n];if(t){if(i[0]&&(t.length&&(t.wrapped=!0)?t[t.length-1]=((k=t[t.length-1])&&M(k," +\n")+" ")+i[0]:(n=M((k=e[e.length-1].split("\n"))[0].slice(0,-2).trimEnd(),"<br>")+" "+$.call(l,i[0])+" |",e[e.length-1]=k.length>1?(k[0]=n)&&k.join("\n"):n)),(1===i.length?t.length:t.push.apply(t,i.slice(1)))<x.cols)return e;if(n="| "+$.call(l,t.splice(0,x.cols).join(" | "))+" |",t.wrapped&&!(t.wrapped=!1)&&~n.indexOf(" +\n")&&(n=n.replace(/ \+\n/g,"<br>")),t.length&&e.push(b+n)&&(n="|"+t.splice(0).join(" |")))continue}else{const t=(x.row=[])&&(x.cols??=i.length-1);if(!(x.header??=t===i.length-1&&""===a[C+1]&&""!==a[C-1])){y&&=F(e,y,O,l,V),e.push(b+"|     ".repeat(t)+"|",b+(x.div||c[""].repeat(t)+"|"));continue}I=s,n="| "+i.slice(1).join(" | ")+" |\n"+b+(x.div||c[""].repeat(t)+"|")}}else{if("+"===n&&m)return({indent:n,childIndent:b}=m),L=(v=!1)||L?.close(),e[e.length]=n&&n.trimEnd(),e;if((!v||m)&&(o??=q?(E=n.trimStart())[0]:A)&&(N=P(o,E,"exec"))){let[,e,t,i,r]=N;void 0!==r&&(r=t)&&(O&&"qanda"===O.get(1)||m&&"qanda"===m.dlist?(t="_"+e+"_")&&(e=".".repeat(r.length-1))&&(r="qanda"):(t="*"+e+"*")&&(e=r.length>2?"-".repeat(r.length-1):"-"),(R=i)||(w="pending"));const o="<"===e[0]&&!!(e="<.>")||"."===e[0]||"."===e[e.length-1]&&!!(e="1.");if(m&&m.marker===e)b=m.indent;else if(S.length&&~(N=S.findIndex((t=>t.marker===e))))b=(m=(S=N?S.slice(0,N+1):[S[0]]).pop()).indent;else{b=(m?S[S.length]=m:u).childIndent||"";const t=(l.lindent??=parseInt(l.get("markdown-list-indent"),10))||(o?3:2);m={marker:e,indent:b,childIndent:b+" ".repeat(t),numeral:o&&0,dlist:r}}L=L?.close(),I=(v=!0)&&s,n=(o?++m.numeral+". ":"* ")+t}else if(v)if(I=s,L){if(q?G(I=L.subs):!(v=L=L.close()))continue;n=n.slice(L.outdent)}else w||"hardbreaks"===v?e[e.length-1]+=l.get("markdown-line-break"):"+"===(k=e[e.length-1])?.[k.length-1]&&" "===k[k.length-2]?e[e.length-1]=M(k,l.get("markdown-line-break"),!0):l.has("markdown-unwrap-prose")&&(b=e.pop()+" ");else if("."===A){if(I=s,n.length>1&&("."!==n[1]||"."!==n[2])){const e="*"===n[1]&&"*"===n[n.length-1]?n.slice(2,-1):n.slice(1);y=(n=void 0)||{indent:b,text:e,subs:I}}}else if(q){O&&O.get("subs")?.includes("attributes")&&(I=["attributes"]);const t=n.length-(n=E).length;(v=!0)&&"$"===o&&" "===E[1]?(b=(m||u).childIndent||"",L={cap:b+"```",close:()=>e.push(L.cap)&&void 0,outdent:t,subs:I},n="```console\n"+b+n):(b=((m||u).childIndent||"")+"    ",L={close:G,outdent:t,subs:I})}else~(N=n.indexOf(": "))&&N<10&&(D=n.slice(0,N))in t?(R=(v=!0)&&n.slice(N+2),n="**"+t[D]+" "+D+"**"):"i"===A&&n.startsWith("image::")&&(N=g.exec(n))?n=B.apply(l,N,I=["attributes"]):n in i?n=i[n]:((k=O?.get("id"))&&(y?y.id=k:n="[["+k+"]]"+n),I=(v=!O?.has("hardbreaks-option")||"hardbreaks")&&s)}}else{if(N[1]){const[,,e,t,i,r=(l.has(t)?!!e:!e)]=N;if(i?!r&&(n=i):!W.push(r&&"endif::[]"))continue}n=void 0}if(n){if(y&&=F(e,y,O,l,V),I&&!(n=$.call(l,n,I))&&!e.length)return e;e[e.length]=b&&n?b+n:n,(R&&=$.call(l,R))&&(e[e.length-1]+=l.get("markdown-line-break"))&&(e[e.length]=b?b+R:R)}else{if(void 0===n)return e;e[e.length]=b?b.trimEnd():n}return w&&="pending"===w||void 0,e}}),[]).join("\n").trimEnd().replace(C,((e,t,n)=>{const{title:i=n,reftext:r=i,autoId:o=n}=V.get(n)||U.get(n)||{};return"["+(t||r)+"](#"+o+")"})).concat((k=L?.cap)?"\n"+k:"")}},36:(e,t,n)=>{function i(e,t){return Array(t+1).join(e)}n.r(t),n.d(t,{default:()=>L});var r=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function o(e){return c(e,r)}var l=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function s(e){return c(e,l)}var a=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function c(e,t){return t.indexOf(e.nodeName)>=0}function d(e,t){return e.getElementsByTagName&&t.some((function(t){return e.getElementsByTagName(t).length}))}var u={};function f(e){return e?e.replace(/(\n+\s*)+/g,"\n"):""}function p(e){for(var t in this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[],e.rules)this.array.push(e.rules[t])}function g(e,t,n){for(var i=0;i<e.length;i++){var r=e[i];if(h(r,t,n))return r}}function h(e,t,n){var i=e.filter;if("string"==typeof i){if(i===t.nodeName.toLowerCase())return!0}else if(Array.isArray(i)){if(i.indexOf(t.nodeName.toLowerCase())>-1)return!0}else{if("function"!=typeof i)throw new TypeError("`filter` needs to be a string, array, or function");if(i.call(e,t,n))return!0}}function m(e){var t=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),t}function v(e,t,n){return e&&e.parentNode===t||n(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}u.paragraph={filter:"p",replacement:function(e){return"\n\n"+e+"\n\n"}},u.lineBreak={filter:"br",replacement:function(e,t,n){return n.br+"\n"}},u.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,t,n){var r=Number(t.nodeName.charAt(1));return"setext"===n.headingStyle&&r<3?"\n\n"+e+"\n"+i(1===r?"=":"-",e.length)+"\n\n":"\n\n"+i("#",r)+" "+e+"\n\n"}},u.blockquote={filter:"blockquote",replacement:function(e){return"\n\n"+(e=(e=e.replace(/^\n+|\n+$/g,"")).replace(/^/gm,"> "))+"\n\n"}},u.list={filter:["ul","ol"],replacement:function(e,t){var n=t.parentNode;return"LI"===n.nodeName&&n.lastElementChild===t?"\n"+e:"\n\n"+e+"\n\n"}},u.listItem={filter:"li",replacement:function(e,t,n){e=e.replace(/^\n+/,"").replace(/\n+$/,"\n").replace(/\n/gm,"\n    ");var i=n.bulletListMarker+"   ",r=t.parentNode;if("OL"===r.nodeName){var o=r.getAttribute("start"),l=Array.prototype.indexOf.call(r.children,t);i=(o?Number(o)+l:l+1)+".  "}return i+e+(t.nextSibling&&!/\n$/.test(e)?"\n":"")}},u.indentedCodeBlock={filter:function(e,t){return"indented"===t.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,t,n){return"\n\n    "+t.firstChild.textContent.replace(/\n/g,"\n    ")+"\n\n"}},u.fencedCodeBlock={filter:function(e,t){return"fenced"===t.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,t,n){for(var r,o=((t.firstChild.getAttribute("class")||"").match(/language-(\S+)/)||[null,""])[1],l=t.firstChild.textContent,s=n.fence.charAt(0),a=3,c=new RegExp("^"+s+"{3,}","gm");r=c.exec(l);)r[0].length>=a&&(a=r[0].length+1);var d=i(s,a);return"\n\n"+d+o+"\n"+l.replace(/\n$/,"")+"\n"+d+"\n\n"}},u.horizontalRule={filter:"hr",replacement:function(e,t,n){return"\n\n"+n.hr+"\n\n"}},u.inlineLink={filter:function(e,t){return"inlined"===t.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,t){var n=t.getAttribute("href"),i=f(t.getAttribute("title"));return i&&(i=' "'+i+'"'),"["+e+"]("+n+i+")"}},u.referenceLink={filter:function(e,t){return"referenced"===t.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,t,n){var i,r,o=t.getAttribute("href"),l=f(t.getAttribute("title"));switch(l&&(l=' "'+l+'"'),n.linkReferenceStyle){case"collapsed":i="["+e+"][]",r="["+e+"]: "+o+l;break;case"shortcut":i="["+e+"]",r="["+e+"]: "+o+l;break;default:var s=this.references.length+1;i="["+e+"]["+s+"]",r="["+s+"]: "+o+l}return this.references.push(r),i},references:[],append:function(e){var t="";return this.references.length&&(t="\n\n"+this.references.join("\n")+"\n\n",this.references=[]),t}},u.emphasis={filter:["em","i"],replacement:function(e,t,n){return e.trim()?n.emDelimiter+e+n.emDelimiter:""}},u.strong={filter:["strong","b"],replacement:function(e,t,n){return e.trim()?n.strongDelimiter+e+n.strongDelimiter:""}},u.code={filter:function(e){var t=e.previousSibling||e.nextSibling,n="PRE"===e.parentNode.nodeName&&!t;return"CODE"===e.nodeName&&!n},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var t=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",n="`",i=e.match(/`+/gm)||[];-1!==i.indexOf(n);)n+="`";return n+t+e+t+n}},u.image={filter:"img",replacement:function(e,t){var n=f(t.getAttribute("alt")),i=t.getAttribute("src")||"",r=f(t.getAttribute("title"));return i?"!["+n+"]("+i+(r?' "'+r+'"':"")+")":""}},p.prototype={add:function(e,t){this.array.unshift(t)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){return e.isBlank?this.blankRule:(t=g(this.array,e,this.options))||(t=g(this._keep,e,this.options))||(t=g(this._remove,e,this.options))?t:this.defaultRule;var t},forEach:function(e){for(var t=0;t<this.array.length;t++)e(this.array[t],t)}};var x,b,O="undefined"!=typeof window?window:{},y=function(){var e=O.DOMParser,t=!1;try{(new e).parseFromString("","text/html")&&(t=!0)}catch(e){}return t}()?O.DOMParser:(x=function(){},function(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch(t){window.ActiveXObject&&(e=!0)}return e}()?x.prototype.parseFromString=function(e){var t=new window.ActiveXObject("htmlfile");return t.designMode="on",t.open(),t.write(e),t.close(),t}:x.prototype.parseFromString=function(e){var t=document.implementation.createHTMLDocument("");return t.open(),t.write(e),t.close(),t},x);function A(e,t){var n;return function(e){var t=e.element,n=e.isBlock,i=e.isVoid,r=e.isPre||function(e){return"PRE"===e.nodeName};if(t.firstChild&&!r(t)){for(var o=null,l=!1,s=null,a=v(s,t,r);a!==t;){if(3===a.nodeType||4===a.nodeType){var c=a.data.replace(/[ \r\n\t]+/g," ");if(o&&!/ $/.test(o.data)||l||" "!==c[0]||(c=c.substr(1)),!c){a=m(a);continue}a.data=c,o=a}else{if(1!==a.nodeType){a=m(a);continue}n(a)||"BR"===a.nodeName?(o&&(o.data=o.data.replace(/ $/,"")),o=null,l=!1):i(a)||r(a)?(o=null,l=!0):o&&(l=!1)}var d=v(s,a,r);s=a,a=d}o&&(o.data=o.data.replace(/ $/,""),o.data||m(o))}}({element:n="string"==typeof e?(b=b||new y).parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html").getElementById("turndown-root"):e.cloneNode(!0),isBlock:o,isVoid:s,isPre:t.preformattedCode?k:null}),n}function k(e){return"PRE"===e.nodeName||"CODE"===e.nodeName}function w(e,t){return e.isBlock=o(e),e.isCode="CODE"===e.nodeName||e.parentNode.isCode,e.isBlank=function(e){return!s(e)&&!function(e){return c(e,a)}(e)&&/^\s*$/i.test(e.textContent)&&!function(e){return d(e,l)}(e)&&!function(e){return d(e,a)}(e)}(e),e.flankingWhitespace=function(e,t){if(e.isBlock||t.preformattedCode&&e.isCode)return{leading:"",trailing:""};var n,i={leading:(n=e.textContent.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/))[1],leadingAscii:n[2],leadingNonAscii:n[3],trailing:n[4],trailingNonAscii:n[5],trailingAscii:n[6]};return i.leadingAscii&&S("left",e,t)&&(i.leading=i.leadingNonAscii),i.trailingAscii&&S("right",e,t)&&(i.trailing=i.trailingNonAscii),{leading:i.leading,trailing:i.trailing}}(e,t),e}function S(e,t,n){var i,r,l;return"left"===e?(i=t.previousSibling,r=/ $/):(i=t.nextSibling,r=/^ /),i&&(3===i.nodeType?l=r.test(i.nodeValue):n.preformattedCode&&"CODE"===i.nodeName?l=!1:1!==i.nodeType||o(i)||(l=r.test(i.textContent))),l}var E=Array.prototype.reduce,N=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function T(e){if(!(this instanceof T))return new T(e);var t={rules:u,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(e,t){return t.isBlock?"\n\n":""},keepReplacement:function(e,t){return t.isBlock?"\n\n"+t.outerHTML+"\n\n":t.outerHTML},defaultReplacement:function(e,t){return t.isBlock?"\n\n"+e+"\n\n":e}};this.options=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])}return e}({},t,e),this.rules=new p(this.options)}function C(e){var t=this;return E.call(e.childNodes,(function(e,n){var i="";return 3===(n=new w(n,t.options)).nodeType?i=n.isCode?n.nodeValue:t.escape(n.nodeValue):1===n.nodeType&&(i=I.call(t,n)),D(e,i)}),"")}function R(e){var t=this;return this.rules.forEach((function(n){"function"==typeof n.append&&(e=D(e,n.append(t.options)))})),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function I(e){var t=this.rules.forNode(e),n=C.call(this,e),i=e.flankingWhitespace;return(i.leading||i.trailing)&&(n=n.trim()),i.leading+t.replacement(n,e,this.options)+i.trailing}function D(e,t){var n=function(e){for(var t=e.length;t>0&&"\n"===e[t-1];)t--;return e.substring(0,t)}(e),i=t.replace(/^\n*/,""),r=Math.max(e.length-n.length,t.length-i.length);return n+"\n\n".substring(0,r)+i}T.prototype={turndown:function(e){if(!function(e){return null!=e&&("string"==typeof e||e.nodeType&&(1===e.nodeType||9===e.nodeType||11===e.nodeType))}(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(""===e)return"";var t=C.call(this,new A(e,this.options));return R.call(this,t)},use:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.use(e[t]);else{if("function"!=typeof e)throw new TypeError("plugin must be a Function or an Array of Functions");e(this)}return this},addRule:function(e,t){return this.rules.add(e,t),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return N.reduce((function(e,t){return e.replace(t[0],t[1])}),e)}};const L=T}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=n(36);const t=n(146),i=(n(36),{asciidoctorEnabled:!1,asciidoctorProcessor:void 0,downdocAttributes:void 0,ext:".adoc",debug:!1});function r(e){i.debug&&console.log("[docsifyAsciidoc] log: "+e)}window.$docsify.docsifyAsciidoc=Object.assign(i,window.$docsify.docsifyAsciidoc),window.$docsify.plugins=[].concat((function(n,o){n.beforeEach((function(n,l){let s="";if(!o.route.file.endsWith(i.ext))return r("file ["+o.route.file+"] is not asciidoc, continuing..."),r("content"+n),l(n);try{let o="";if(r("converting asciidoc to markdown"),i.asciidoctorEnabled){let t=void 0!==i.asciidoctorProcessor?i.asciidoctorProcessor:Asciidoctor();r("using asciidoctor instance"),o=t.convert(n),r("instantiating turndown"),s=(0,e.default)().turndown(o)}else r("using embedded converted"),s=t(n,i.downdocAttributes)}catch(e){console.error(e)}return l(s)}))}),window.$docsify.plugins)})()})();