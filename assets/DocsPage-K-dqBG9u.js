import{t as e}from"./rolldown-runtime-lhHHWwHU.js";import{C as t,G as n,T as r,_ as i,at as a,b as o,ct as s,g as c,h as l,m as u,x as d,z as f}from"./network-graph-BWPi7CRy.js";import{t as p}from"./create-BQBjlaro.js";import{c as m,f as h,t as g,u as _}from"./vm-D4J_1K1Q.js";import{a as v,i as y,o as b,s as x,t as ee}from"./QBtn-C1vjqRiM.js";import{P as S}from"./demo-CcNZ8TgP.js";import{T as te,_ as ne,v as re}from"./index-CbLZ3EDR.js";import{t as ie}from"./QBanner-iMiKjnP7.js";import{t as ae}from"./QPage-B_e0d3_B.js";var oe=p({name:`QBreadcrumbsEl`,props:{...v,label:String,icon:String,tag:{type:String,default:`span`}},emits:[`click`],setup(e,{slots:t}){let{linkTag:n,linkAttrs:i,linkClass:a,navigateOnClick:o}=y(),s=u(()=>({class:`q-breadcrumbs__el q-link flex inline items-center relative-position `+(e.disable===!0?`q-breadcrumbs__el--disable`:`q-link--focusable`+a.value),...i.value,onClick:o})),c=u(()=>`q-breadcrumbs__el-icon`+(e.label===void 0?``:` q-breadcrumbs__el-icon--with-label`));return()=>{let i=[];return e.icon!==void 0&&i.push(r(m,{class:c.value,name:e.icon})),e.label!==void 0&&i.push(e.label),r(n.value,{...s.value},_(t.default,i))}}}),se=[``,!0],ce=p({name:`QBreadcrumbs`,props:{...x,separator:{type:String,default:`/`},separatorColor:String,activeColor:{type:String,default:`primary`},gutter:{type:String,validator:e=>[`none`,`xs`,`sm`,`md`,`lg`,`xl`].includes(e),default:`sm`}},setup(e,{slots:t}){let n=b(e),i=u(()=>`flex items-center ${n.value}${e.gutter===`none`?``:` q-gutter-${e.gutter}`}`),a=u(()=>e.separatorColor?` text-${e.separatorColor}`:``),o=u(()=>` text-${e.activeColor}`);return()=>{if(t.default===void 0)return;let n=g(h(t.default));if(n.length===0)return;let s=1,c=[],l=n.filter(e=>{var t;return((t=e.type)==null?void 0:t.name)===`QBreadcrumbsEl`}).length,u=t.separator===void 0?()=>e.separator:t.separator;return n.forEach(e=>{var t;if(((t=e.type)==null?void 0:t.name)===`QBreadcrumbsEl`){let t=s<l,n=e.props!==null&&se.includes(e.props.disable),i=(t===!0?``:` q-breadcrumbs--last`)+(n!==!0&&t===!0?o.value:``);s++,c.push(r(`div`,{class:`flex items-center${i}`},[e])),t===!0&&c.push(r(`div`,{class:`q-breadcrumbs__separator`+a.value},u()))}else c.push(e)}),r(`div`,{class:`q-breadcrumbs`},[r(`div`,{class:i.value},c)])}}}),C={};function le(e){let t=C[e];if(t)return t;t=C[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function w(e,t){typeof t!=`string`&&(t=w.defaultChars);let n=le(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;e<128?t+=`��`:t+=String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;e<2048||e>=55296&&e<=57343?t+=`���`:t+=String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}w.defaultChars=`;/?:@&=+$,#`,w.componentChars=``;var ue={};function T(e){let t=ue[e];if(t)return t;t=ue[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function E(e,t,n){typeof t!=`string`&&(n=t,t=E.defaultChars),n===void 0&&(n=!0);let r=T(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}E.defaultChars=`;/?:@&=+$,-_.!~*'()#`,E.componentChars=`-_.!~*'()`;function de(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function D(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var fe=/^([a-z0-9.+-]+:)/i,pe=/:[0-9]*$/,me=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,he=[`%`,`/`,`?`,`;`,`#`,`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],O=[`/`,`?`,`#`],ge=255,_e=/^[+a-z0-9A-Z_-]{0,63}$/,ve=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,ye={javascript:!0,"javascript:":!0},be={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function xe(e,t){if(e&&e instanceof D)return e;let n=new D;return n.parse(e,t),n}D.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=me.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=fe.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&ye[o])&&(a=a.substr(2),this.slashes=!0)),!ye[o]&&(i||o&&!be[o])){let e=-1;for(let t=0;t<O.length;t++)r=a.indexOf(O[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<he.length;t++)r=a.indexOf(he[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(_e)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(_e)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(ve);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>ge&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),be[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},D.prototype.parseHost=function(e){let t=pe.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var Se=e({decode:()=>w,encode:()=>E,format:()=>de,parse:()=>xe}),Ce=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,we=/[\0-\x1F\x7F-\x9F]/,Te=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Ee=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,De=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Oe=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,ke=e({Any:()=>Ce,Cc:()=>we,Cf:()=>Te,P:()=>Ee,S:()=>De,Z:()=>Oe}),Ae=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0))),je=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0))),Me=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Ne=String.fromCodePoint??function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function Pe(e){return e>=55296&&e<=57343||e>1114111?65533:Me.get(e)??e}var k;(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(k||={});var Fe=32,A;(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(A||={});function Ie(e){return e>=k.ZERO&&e<=k.NINE}function Le(e){return e>=k.UPPER_A&&e<=k.UPPER_F||e>=k.LOWER_A&&e<=k.LOWER_F}function Re(e){return e>=k.UPPER_A&&e<=k.UPPER_Z||e>=k.LOWER_A&&e<=k.LOWER_Z||Ie(e)}function ze(e){return e===k.EQUALS||Re(e)}var j;(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(j||={});var M;(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(M||={});var Be=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=j.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=M.Strict}startEntity(e){this.decodeMode=e,this.state=j.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case j.EntityStart:return e.charCodeAt(t)===k.NUM?(this.state=j.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=j.NamedEntity,this.stateNamedEntity(e,t));case j.NumericStart:return this.stateNumericStart(e,t);case j.NumericDecimal:return this.stateNumericDecimal(e,t);case j.NumericHex:return this.stateNumericHex(e,t);case j.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|Fe)===k.LOWER_X?(this.state=j.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=j.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*r**+i+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(Ie(r)||Le(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(Ie(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===k.SEMI)this.consumed+=1;else if(this.decodeMode===M.Strict)return 0;return this.emitCodePoint(Pe(this.result),this.consumed),this.errors&&(e!==k.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&A.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=He(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===M.Attribute&&(i===0||ze(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&A.VALUE_LENGTH)>>14,i!==0){if(a===k.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==M.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&A.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~A.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case j.NamedEntity:return this.result!==0&&(this.decodeMode!==M.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case j.NumericDecimal:return this.emitNumericEntity(0,2);case j.NumericHex:return this.emitNumericEntity(0,3);case j.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case j.EntityStart:return 0}}};function Ve(e){let t=``,n=new Be(e,e=>t+=Ne(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function He(e,t,n,r){let i=(t&A.BRANCH_LENGTH)>>7,a=t&A.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}var Ue=Ve(Ae);Ve(je);function We(e,t=M.Legacy){return Ue(e,t)}var Ge=e({arrayReplaceAt:()=>Ze,assign:()=>Xe,escapeHtml:()=>P,escapeRE:()=>ut,fromCodePoint:()=>$e,has:()=>Ye,isMdAsciiPunct:()=>R,isPunctChar:()=>L,isSpace:()=>F,isString:()=>qe,isValidEntityCode:()=>Qe,isWhiteSpace:()=>I,lib:()=>ft,normalizeReference:()=>dt,unescapeAll:()=>N,unescapeMd:()=>it});function Ke(e){return Object.prototype.toString.call(e)}function qe(e){return Ke(e)===`[object String]`}var Je=Object.prototype.hasOwnProperty;function Ye(e,t){return Je.call(e,t)}function Xe(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function Ze(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function Qe(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function $e(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var et=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,tt=RegExp(et.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),nt=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function rt(e,t){if(t.charCodeAt(0)===35&&nt.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Qe(n)?$e(n):e}let n=We(e);return n===e?e:n}function it(e){return e.indexOf(`\\`)<0?e:e.replace(et,`$1`)}function N(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(tt,function(e,t,n){return t||rt(e,n)})}var at=/[&<>"]/,ot=/[&<>"]/g,st={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function ct(e){return st[e]}function P(e){return at.test(e)?e.replace(ot,ct):e}var lt=/[.?*+^$[\]\\(){}|-]/g;function ut(e){return e.replace(lt,`\\$&`)}function F(e){switch(e){case 9:case 32:return!0}return!1}function I(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function L(e){return Ee.test(e)||De.test(e)}function R(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function dt(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}var ft={mdurl:Se,ucmicro:ke};function pt(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function mt(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=N(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=N(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function ht(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=N(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=N(e.slice(t,a)),o}var gt=e({parseLinkDestination:()=>mt,parseLinkLabel:()=>pt,parseLinkTitle:()=>ht}),z={};z.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+P(a.content)+`</code>`},z.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+P(e[t].content)+`</code></pre>
`},z.fence=function(e,t,n,r,i){let a=e[t],o=a.info?N(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||P(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},z.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},z.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},z.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},z.text=function(e,t){return P(e[t].content)},z.html_block=function(e,t){return e[t].content},z.html_inline=function(e,t){return e[t].content};function B(){this.rules=Xe({},z)}B.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+P(e.attrs[t][0])+`="`+P(e.attrs[t][1])+`"`;return r},B.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},B.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},B.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`;break;default:}return r},B.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r};function V(){this.__rules__=[],this.__cache__=null}V.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},V.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},V.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},V.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},V.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},V.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},V.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},V.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},V.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},V.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function H(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}H.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},H.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},H.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},H.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},H.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t};function _t(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}_t.prototype.Token=H;var vt=/\r\n?|\n/g,yt=/\0/g;function bt(e){let t;t=e.src.replace(vt,`
`),t=t.replace(yt,`�`),e.src=t}function xt(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function St(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function Ct(e){return/^<a[>\s]/i.test(e)}function wt(e){return/^<\/a\s*>/i.test(e)}function Tt(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=0;for(let a=r.length-1;a>=0;a--){let o=r[a];if(o.type===`link_close`){for(a--;r[a].level!==o.level&&r[a].type!==`link_open`;)a--;continue}if(o.type===`html_inline`&&(Ct(o.content)&&i>0&&i--,wt(o.content)&&i++),!(i>0)&&o.type===`text`&&e.md.linkify.test(o.content)){let i=o.content,s=e.md.linkify.match(i),c=[],l=o.level,u=0;s.length>0&&s[0].index===0&&a>0&&r[a-1].type===`text_special`&&(s=s.slice(1));for(let t=0;t<s.length;t++){let n=s[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let a=s[t].text;a=s[t].schema?s[t].schema===`mailto:`&&!/^mailto:/i.test(a)?e.md.normalizeLinkText(`mailto:`+a).replace(/^mailto:/,``):e.md.normalizeLinkText(a):e.md.normalizeLinkText(`http://`+a).replace(/^http:\/\//,``);let o=s[t].index;if(o>u){let t=new e.Token(`text`,``,0);t.content=i.slice(u,o),t.level=l,c.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=l++,d.markup=`linkify`,d.info=`auto`,c.push(d);let f=new e.Token(`text`,``,0);f.content=a,f.level=l,c.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--l,p.markup=`linkify`,p.info=`auto`,c.push(p),u=s[t].lastIndex}if(u<i.length){let t=new e.Token(`text`,``,0);t.content=i.slice(u),t.level=l,c.push(t)}t[n].children=r=Ze(r,a,c)}}}}var Et=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Dt=/\((c|tm|r)\)/i,Ot=/\((c|tm|r)\)/gi,kt={c:`©`,r:`®`,tm:`™`};function At(e,t){return kt[t.toLowerCase()]}function jt(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(Ot,At)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Mt(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&Et.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Nt(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&(Dt.test(e.tokens[t].content)&&jt(e.tokens[t].children),Et.test(e.tokens[t].content)&&Mt(e.tokens[t].children))}var Pt=/['"]/,Ft=/['"]/g,It=`’`;function Lt(e,t,n){return e.slice(0,t)+n+e.slice(t+1)}function Rt(e,t){let n,r=[];for(let i=0;i<e.length;i++){let a=e[i],o=e[i].level;for(n=r.length-1;n>=0&&!(r[n].level<=o);n--);if(r.length=n+1,a.type!==`text`)continue;let s=a.content,c=0,l=s.length;OUTER:for(;c<l;){Ft.lastIndex=c;let u=Ft.exec(s);if(!u)break;let d=!0,f=!0;c=u.index+1;let p=u[0]===`'`,m=32;if(u.index-1>=0)m=s.charCodeAt(u.index-1);else for(n=i-1;n>=0&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let h=32;if(c<l)h=s.charCodeAt(c);else for(n=i+1;n<e.length&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n++)if(e[n].content){h=e[n].content.charCodeAt(0);break}let g=R(m)||L(String.fromCharCode(m)),_=R(h)||L(String.fromCharCode(h)),v=I(m),y=I(h);if(y?d=!1:_&&(v||g||(d=!1)),v?f=!1:g&&(y||_||(f=!1)),h===34&&u[0]===`"`&&m>=48&&m<=57&&(f=d=!1),d&&f&&(d=g,f=_),!d&&!f){p&&(a.content=Lt(a.content,u.index,It));continue}if(f)for(n=r.length-1;n>=0;n--){let d=r[n];if(r[n].level<o)break;if(d.single===p&&r[n].level===o){d=r[n];let o,f;p?(o=t.md.options.quotes[2],f=t.md.options.quotes[3]):(o=t.md.options.quotes[0],f=t.md.options.quotes[1]),a.content=Lt(a.content,u.index,f),e[d.token].content=Lt(e[d.token].content,d.pos,o),c+=f.length-1,d.token===i&&(c+=o.length-1),s=a.content,l=s.length,r.length=n;continue OUTER}}d?r.push({token:i,pos:u.index,single:p,level:o}):f&&p&&(a.content=Lt(a.content,u.index,It))}}}function zt(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!==`inline`||!Pt.test(e.tokens[t].content)||Rt(e.tokens[t].children,e)}function Bt(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}var Vt=[[`normalize`,bt],[`block`,xt],[`inline`,St],[`linkify`,Tt],[`replacements`,Nt],[`smartquotes`,zt],[`text_join`,Bt]];function Ht(){this.ruler=new V;for(let e=0;e<Vt.length;e++)this.ruler.push(Vt[e][0],Vt[e][1])}Ht.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},Ht.prototype.State=_t;function U(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o)if(F(s)){n++,s===9?r+=4-r%4:r++;continue}else o=!0;(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}U.prototype.push=function(e,t,n){let r=new H(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},U.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},U.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},U.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&F(this.src.charCodeAt(e));e++);return e},U.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!F(this.src.charCodeAt(--e)))return e+1;return e},U.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},U.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},U.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if(F(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},U.prototype.Token=H;var Ut=65536;function Wt(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function Gt(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function Kt(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!F(s)||o===45&&F(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!F(t))return!1;a++}let c=Wt(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=Wt(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=Gt(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=Wt(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=Gt(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>Ut))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}function qt(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function Jt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+(f?1:0);let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function Yt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if(F(t))t===9?o+=4-(o+e.bsCount[m]+(r?1:0))%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+(n?1:0),l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function Xt(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!F(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function Zt(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!F(e.src.charCodeAt(r))?-1:r}function Qt(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!F(a))?-1:i}function $t(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function en(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=Qt(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=Zt(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,b=e.tShift[c],x=e.sCount[c],ee=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=ee,e.tShift[c]=b,e.sCount[c]=x,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let S=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){S=!0;break}if(S)break;if(d){if(p=Qt(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=Zt(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&$t(e,h),!0}function tn(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return null;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return null}let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];return e.src.slice(i,a+1)}let c=e.src.slice(i,a+1);a=c.length;let l=-1;for(i=1;i<a;i++){let e=c.charCodeAt(i);if(e===91)return!1;if(e===93){l=i;break}else if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(e===92&&(i++,i<a&&c.charCodeAt(i)===10)){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!F(e))break}let u=e.md.helpers.parseLinkDestination(c,i,a);if(!u.ok)return!1;let d=e.md.normalizeLink(u.str);if(!e.md.validateLink(d))return!1;i=u.pos;let f=i,p=o,m=i;for(;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!F(e))break}let h=e.md.helpers.parseLinkTitle(c,i,a);for(;h.can_continue;){let t=s(o);if(t===null)break;c+=t,i=a,a=c.length,o++,h=e.md.helpers.parseLinkTitle(c,i,a,h)}let g;for(i<a&&m!==i&&h.ok?(g=h.str,i=h.pos):(g=``,i=f,o=p);i<a&&F(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10&&g)for(g=``,i=f,o=p;i<a&&F(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10)return!1;let _=dt(c.slice(1,l));return _?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[_]===void 0&&(e.env.references[_]={title:g,href:d}),e.line=o,!0):!1}var nn=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),rn=`<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`,an=RegExp(`^(?:`+rn+`|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`),on=RegExp(`^(?:`+rn+`|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>)`),W=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+nn.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp(on.source+`\\s*$`),/^$/,!1]];function sn(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<W.length&&!W[s][0].test(o);s++);if(s===W.length)return!1;if(r)return W[s][2];let c=t+1;if(!W[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent);c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),W[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let l=e.push(`html_block`,``,0);return l.map=[t,c],l.content=e.getLines(t,c,e.blkIndent,!0),!0}function cn(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!F(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&F(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=e.src.slice(i,a).trim(),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function ln(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return!1;let c=e.getLines(t,s,e.blkIndent,!1).trim();e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function un(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=e.getLines(t,a,e.blkIndent,!1).trim();e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}var dn=[[`table`,Kt,[`paragraph`,`reference`]],[`code`,qt],[`fence`,Jt,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,Yt,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,Xt,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,en,[`paragraph`,`reference`,`blockquote`]],[`reference`,tn],[`html_block`,sn,[`paragraph`,`reference`,`blockquote`]],[`heading`,cn,[`paragraph`,`reference`,`blockquote`]],[`lheading`,ln],[`paragraph`,un]];function fn(){this.ruler=new V;for(let e=0;e<dn.length;e++)this.ruler.push(dn[e][0],dn[e][1],{alt:(dn[e][2]||[]).slice()})}fn.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},fn.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},fn.prototype.State=U;function G(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}G.prototype.pushPending=function(){let e=new H(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},G.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new H(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},G.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i=e>0?this.src.charCodeAt(e-1):32,a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32,c=R(i)||L(String.fromCharCode(i)),l=R(s)||L(String.fromCharCode(s)),u=I(i),d=I(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},G.prototype.Token=H;function pn(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function mn(e,t){let n=e.pos;for(;n<e.posMax&&!pn(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}var hn=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function gn(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=e.pending.match(hn);if(!i)return!1;let a=i[1],o=e.md.linkify.matchAtStart(e.src.slice(n-a.length));if(!o)return!1;let s=o.url;if(s.length<=a.length)return!1;let c=s.length;for(;c>0&&s.charCodeAt(c-1)===42;)c--;c!==s.length&&(s=s.slice(0,c));let l=e.md.normalizeLink(s);if(!e.md.validateLink(l))return!1;if(!t){e.pending=e.pending.slice(0,-a.length);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,l]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(s);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=s.length-a.length,!0}function _n(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0);else e.push(`softbreak`,`br`,0);for(n++;n<i&&F(e.src.charCodeAt(n));)n++;return e.pos=n,!0}var vn=[];for(let e=0;e<256;e++)vn.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){vn[e.charCodeAt(0)]=1});function yn(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),F(i));)n++;return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);i<256&&vn[i]!==0?t.content=a:t.content=o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}function bn(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function xn(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function Sn(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function Cn(e){let t=e.tokens_meta,n=e.tokens_meta.length;Sn(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&Sn(e,t[r].delimiters)}var wn={tokenize:xn,postProcess:Cn};function Tn(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function En(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function Dn(e){let t=e.tokens_meta,n=e.tokens_meta.length;En(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&En(e,t[r].delimiters)}var On={tokenize:Tn,postProcess:Dn};function kn(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),!(!F(n)&&n!==10));m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),!(!F(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),!(!F(n)&&n!==10));m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||=e.src.slice(f,p),a=e.env.references[dt(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function An(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),!(!F(n)&&n!==10));a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),!(!F(n)&&n!==10));a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),!(!F(n)&&n!==10));a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||=e.src.slice(p,m),o=e.env.references[dt(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}var jn=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Mn=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Nn(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(Mn.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(jn.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}function Pn(e){return/^<a[>\s]/i.test(e)}function Fn(e){return/^<\/a\s*>/i.test(e)}function In(e){let t=e|32;return t>=97&&t<=122}function Ln(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!In(i))return!1;let a=e.src.slice(r).match(an);if(!a)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=a[0],Pn(t.content)&&e.linkLevel++,Fn(t.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}var Rn=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,zn=/^&([a-z][a-z0-9]{1,31});/i;function Bn(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(Rn);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=Qe(t)?$e(t):$e(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(zn);if(r){let n=We(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}function Vn(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function Hn(e){let t=e.tokens_meta,n=e.tokens_meta.length;Vn(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&Vn(t[e].delimiters)}function Un(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}var Wn=[[`text`,mn],[`linkify`,gn],[`newline`,_n],[`escape`,yn],[`backticks`,bn],[`strikethrough`,wn.tokenize],[`emphasis`,On.tokenize],[`link`,kn],[`image`,An],[`autolink`,Nn],[`html_inline`,Ln],[`entity`,Bn]],Gn=[[`balance_pairs`,Hn],[`strikethrough`,wn.postProcess],[`emphasis`,On.postProcess],[`fragments_join`,Un]];function K(){this.ruler=new V;for(let e=0;e<Wn.length;e++)this.ruler.push(Wn[e][0],Wn[e][1]);this.ruler2=new V;for(let e=0;e<Gn.length;e++)this.ruler2.push(Gn[e][0],Gn[e][1])}K.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},K.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},K.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},K.prototype.State=G;function Kn(e){let t={};e||={},t.src_Any=Ce.source,t.src_Cc=we.source,t.src_Z=Oe.source,t.src_P=Ee.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!`+n+`|`+t.src_ZPCc+`)`+t.src_Any+`)`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!`+t.src_ZCc+`|[@/\\[\\]()]).)+@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|`+n+`|`+t.src_ZPCc+`)(?!`+(e[`---`]?`-(?!--)|`:`-|`)+`_|:\\d|\\.-|\\.(?!$|`+t.src_ZPCc+`))`,t.src_path=`(?:[/?#](?:(?!`+t.src_ZCc+`|[><｜]|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+`|\\]).)*\\]|\\((?:(?!`+t.src_ZCc+`|[)]).)*\\)|\\{(?:(?!`+t.src_ZCc+`|[}]).)*\\}|\\"(?:(?!`+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+`|[']).)+\\'|\\'(?=`+t.src_pseudo_letter+`|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!`+t.src_ZCc+`|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!`+t.src_ZCc+`|$)|;(?!`+t.src_ZCc+`|$)|\\!+(?!`+t.src_ZCc+`|[!]|$)|\\?(?!`+t.src_ZCc+`|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|`+t.src_pseudo_letter+`{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:`+t.src_pseudo_letter+`)|(?:`+t.src_pseudo_letter+`(?:-|`+t.src_pseudo_letter+`){0,61}`+t.src_pseudo_letter+`))`,t.src_host=`(?:(?:(?:(?:`+t.src_domain+`)\\.)*`+t.src_domain+`))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:`+t.src_domain+`)\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:`+t.src_domain+`)\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:`+t.src_ZPCc+`|>|$))`,t.tpl_email_fuzzy=`(^|`+n+`|"|\\(|`+t.src_ZCc+`)(`+t.src_email_name+`@`+t.tpl_host_fuzzy_strict+`)`,t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+`)`,t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+`)`,t}function qn(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function Jn(e){return Object.prototype.toString.call(e)}function Yn(e){return Jn(e)===`[object String]`}function Xn(e){return Jn(e)===`[object Object]`}function Zn(e){return Jn(e)===`[object RegExp]`}function Qn(e){return Jn(e)===`[object Function]`}function $n(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}var er={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function tr(e){return Object.keys(e||{}).reduce(function(e,t){return e||er.hasOwnProperty(t)},!1)}var nr={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/`+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:`+n.re.src_domain+`)\\.)+`+n.re.src_domain_root+`)`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^`+n.re.src_email_name+`@`+n.re.src_host_strict,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},rr=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,ir=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);function ar(e){e.__index__=-1,e.__text_cache__=``}function or(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function sr(){return function(e,t){t.normalize(e)}}function cr(e){let t=e.re=Kn(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(rr),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "`+e+`": `+t)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,Xn(n)){Zn(n.validate)?r.validate=or(n.validate):Qn(n.validate)?r.validate=n.validate:a(t,n),Qn(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=sr();return}if(Yn(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:sr()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map($n).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><｜]|`+t.src_ZPCc+`))(`+o+`)`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><｜]|`+t.src_ZPCc+`))(`+o+`)`,`ig`),e.re.schema_at_start=RegExp(`^`+e.re.schema_search.source,`i`),e.re.pretest=RegExp(`(`+e.re.schema_test.source+`)|(`+e.re.host_fuzzy_test.source+`)|@`,`i`),ar(e)}function lr(e,t){let n=e.__index__,r=e.__last_index__,i=e.__text_cache__.slice(n,r);this.schema=e.__schema__.toLowerCase(),this.index=n+t,this.lastIndex=r+t,this.raw=i,this.text=i,this.url=i}function ur(e,t){let n=new lr(e,t);return e.__compiled__[n.schema].normalize(n,e),n}function q(e,t){if(!(this instanceof q))return new q(e,t);t||tr(e)&&(t=e,e={}),this.__opts__=qn({},er,t),this.__index__=-1,this.__last_index__=-1,this.__schema__=``,this.__text_cache__=``,this.__schemas__=qn({},nr,e),this.__compiled__={},this.__tlds__=ir,this.__tlds_replaced__=!1,this.re={},cr(this)}q.prototype.add=function(e,t){return this.__schemas__[e]=t,cr(this),this},q.prototype.set=function(e){return this.__opts__=qn(this.__opts__,e),this},q.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let t,n,r,i,a,o,s,c,l;if(this.re.schema_test.test(e)){for(s=this.re.schema_search,s.lastIndex=0;(t=s.exec(e))!==null;)if(i=this.testSchemaAt(e,t[2],s.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&(c=e.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(n=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(a=n.index+n[1].length,(this.__index__<0||a<this.__index__)&&(this.__schema__=``,this.__index__=a,this.__last_index__=n.index+n[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&(l=e.indexOf(`@`),l>=0&&(r=e.match(this.re.email_fuzzy))!==null&&(a=r.index+r[1].length,o=r.index+r[0].length,(this.__index__<0||a<this.__index__||a===this.__index__&&o>this.__last_index__)&&(this.__schema__=`mailto:`,this.__index__=a,this.__last_index__=o))),this.__index__>=0},q.prototype.pretest=function(e){return this.re.pretest.test(e)},q.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},q.prototype.match=function(e){let t=[],n=0;this.__index__>=0&&this.__text_cache__===e&&(t.push(ur(this,n)),n=this.__last_index__);let r=n?e.slice(n):e;for(;this.test(r);)t.push(ur(this,n)),r=r.slice(this.__last_index__),n+=this.__last_index__;return t.length?t:null},q.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);return n?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+n,ur(this,0)):null},q.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),cr(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,cr(this),this)},q.prototype.normalize=function(e){e.schema||(e.url=`http://`+e.url),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:`+e.url)},q.prototype.onCompile=function(){};var J=2147483647,Y=36,dr=1,X=26,fr=38,pr=700,mr=72,hr=128,gr=`-`,_r=/^xn--/,vr=/[^\0-\x7F]/,yr=/[\x2E\u3002\uFF0E\uFF61]/g,br={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},xr=Y-dr,Z=Math.floor,Sr=String.fromCharCode;function Q(e){throw RangeError(br[e])}function Cr(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function wr(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(yr,`.`);let i=Cr(e.split(`.`),t).join(`.`);return r+i}function Tr(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var Er=e=>String.fromCodePoint(...e),Dr=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Y},Or=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},kr=function(e,t,n){let r=0;for(e=n?Z(e/pr):e>>1,e+=Z(e/t);e>xr*X>>1;r+=Y)e=Z(e/xr);return Z(r+(xr+1)*e/(e+fr))},Ar=function(e){let t=[],n=e.length,r=0,i=hr,a=mr,o=e.lastIndexOf(gr);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&Q(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=Y;;i+=Y){s>=n&&Q(`invalid-input`);let o=Dr(e.charCodeAt(s++));o>=Y&&Q(`invalid-input`),o>Z((J-r)/t)&&Q(`overflow`),r+=o*t;let c=i<=a?dr:i>=a+X?X:i-a;if(o<c)break;let l=Y-c;t>Z(J/l)&&Q(`overflow`),t*=l}let c=t.length+1;a=kr(r-o,c,o==0),Z(r/c)>J-i&&Q(`overflow`),i+=Z(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},jr=function(e){let t=[];e=Tr(e);let n=e.length,r=hr,i=0,a=mr;for(let n of e)n<128&&t.push(Sr(n));let o=t.length,s=o;for(o&&t.push(gr);s<n;){let n=J;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>Z((J-i)/c)&&Q(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>J&&Q(`overflow`),n===r){let e=i;for(let n=Y;;n+=Y){let r=n<=a?dr:n>=a+X?X:n-a;if(e<r)break;let i=e-r,o=Y-r;t.push(Sr(Or(r+i%o,0))),e=Z(i/o)}t.push(Sr(Or(e,0))),a=kr(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},Mr={version:`2.3.1`,ucs2:{decode:Tr,encode:Er},decode:Ar,encode:jr,toASCII:function(e){return wr(e,function(e){return vr.test(e)?`xn--`+jr(e):e})},toUnicode:function(e){return wr(e,function(e){return _r.test(e)?Ar(e.slice(4).toLowerCase()):e})}},Nr={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}},Pr=/^(vbscript|javascript|file|data):/,Fr=/^data:image\/(gif|png|jpeg|webp);/;function Ir(e){let t=e.trim().toLowerCase();return Pr.test(t)?Fr.test(t):!0}var Lr=[`http:`,`https:`,`mailto:`];function Rr(e){let t=xe(e,!0);if(t.hostname&&(!t.protocol||Lr.indexOf(t.protocol)>=0))try{t.hostname=Mr.toASCII(t.hostname)}catch{}return E(de(t))}function zr(e){let t=xe(e,!0);if(t.hostname&&(!t.protocol||Lr.indexOf(t.protocol)>=0))try{t.hostname=Mr.toUnicode(t.hostname)}catch{}return w(de(t),w.defaultChars+`%`)}function $(e,t){if(!(this instanceof $))return new $(e,t);t||qe(e)||(t=e||{},e=`default`),this.inline=new K,this.block=new fn,this.core=new Ht,this.renderer=new B,this.linkify=new q,this.validateLink=Ir,this.normalizeLink=Rr,this.normalizeLinkText=zr,this.utils=Ge,this.helpers=Xe({},gt),this.options={},this.configure(e),t&&this.set(t)}$.prototype.set=function(e){return Xe(this.options,e),this},$.prototype.configure=function(e){let t=this;if(qe(e)){let t=e;if(e=Nr[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},$.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},$.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},$.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},$.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},$.prototype.render=function(e,t){return t||={},this.renderer.render(this.parse(e,t),this.options,t)},$.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},$.prototype.renderInline=function(e,t){return t||={},this.renderer.render(this.parseInline(e,t),this.options,t)};var Br=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->

# Weaver Administration Guide

This guide is for the person who installed Weaver and operates it day-to-day. It covers initial setup, user management, license configuration, workload provisioning, security administration, and ongoing maintenance.

**Prerequisites:** Weaver is installed and running on NixOS. If you have not yet installed Weaver, see [PRODUCTION-DEPLOYMENT.md](PRODUCTION-DEPLOYMENT.md) for NixOS module installation instructions.

## Table of Contents

- [First-Run Setup](#first-run-setup)
- [User Management](#user-management)
- [License & Tier Management](#license--tier-management)
- [Network Management](#network-management)
- [AI Agent Configuration](#ai-agent-configuration)
- [Workload Management](#workload-management)
- [Tags & Organization](#tags--organization)
- [Audit Log](#audit-log)
- [Notifications](#notifications)
- [Organization Settings](#organization-settings)
- [Security Administration](#security-administration)
- [Backup & Restore](#backup--restore)
- [Monitoring & Health](#monitoring--health)
- [Upgrade Procedures](#upgrade-procedures)
- [Extensions](#extensions)
- [Weaver Team Administration](#weaver-team-administration)
- [Fabrick Administration](#fabrick-administration)
- [TUI Administration](#tui-administration)

---

## First-Run Setup

*Available: v1.0+*

When Weaver starts for the first time with no existing user accounts, the login page automatically switches to a "Create Admin Account" form. The first account created always receives admin privileges.

### Steps

1. Open your browser and navigate to \`http://<host>:3100\` (default port). The port is configured via \`services.weaver.port\` in the NixOS module. See [PRODUCTION-DEPLOYMENT.md](PRODUCTION-DEPLOYMENT.md) for configuration options.
2. The login page displays a "Create Admin Account" form when no users exist.
3. Enter a username (lowercase, starts with a letter, 3+ characters) and password (14+ characters, must include uppercase, lowercase, digit, and special character).
4. Click "Create Account". You are logged in as the admin.

### Verifying the Installation

After first login, confirm:

- The Weaver page loads and shows the host information strip (hostname, IP, CPU cores, RAM, KVM status).
- Any existing VMs on the host are discovered and displayed.
- The WebSocket connection is active (VM status updates in real time without page refresh).
- The health endpoint responds: \`curl -s http://localhost:3100/api/health | jq .\`

#### Weaver Solo+ — Auto-Provisioning

With a Solo or higher license and provisioning enabled, a lightweight CirOS example VM (~20 MB) is auto-provisioned after your first admin login. Look for "example-cirros" on the Weaver page — it should appear and transition to "running" status within a few seconds.

**Removing the example VM:** Once you have your own workloads registered or created, \`example-cirros\` is safe to delete. Click the VM card on the Weaver page, then click **Delete** in the detail panel. A hint banner will appear on the dashboard prompting you to remove it once it detects both the example and your own VMs. The example is not automatically recreated — deletion is permanent.

> **Note:** If you configured \`initialAdminPasswordFile\` in the NixOS module, the admin account is created automatically on first startup. You can log in immediately with the username \`admin\` and the password from that file. Change the password via the UI after first login.

---

## User Management

*Available: v1.0+*

*User management (Solo+):* The admin creates and manages user accounts from the Users page in the sidebar. Free tier is single-admin — upgrade to Solo or higher for multi-user access.

| Tier | User capacity |
|------|--------------|
| Free | 1 admin (single user) |
| Solo | 1 admin + additional Operators and Viewers |
| Team | Per-user licensing — 4 paying users + 1 viewer |
| Fabrick | Unlimited users |

### Roles

| Role | Permissions |
|------|------------|
| **Admin** | Full access: manage users, delete VMs, manage distributions, configure settings, view audit log |
| **Operator** | Start/stop/restart VMs, register new VMs, refresh distro catalog, use AI diagnostics |
| **Viewer** | Read-only access to the Weaver page, network map, and AI diagnostics |
| **Auditor** *(v1.2+)* | Read-only access plus audit log viewing; cannot modify workloads or users |

The dashboard hides actions you do not have permission to perform. Viewers do not see Start/Stop/Restart, Create VM, or Delete buttons. Operators do not see the Delete button.

### Creating Users

1. Navigate to Users from the sidebar.
2. Click "Add User" in the top-right corner.
3. Enter a username (lowercase, starts with a letter), password (14+ characters with uppercase, lowercase, digit, and special character), and select a role.
4. Click "Create User".

### Changing Roles

Select a new role from the dropdown in the user's row. The change takes effect immediately. The affected user's active sessions are invalidated, requiring them to log in again.

### Deleting Users

Click the trash icon next to the user. You cannot delete your own account.

### User Limits (Weaver Team)

Weaver Team supports up to 4 paying users (Admin/Operator) plus 1 free Viewer seat. A banner appears when the limit is reached. Upgrade to Fabrick for unlimited users.

### Per-VM Access Control (Fabrick)

On Fabrick tier, admins can restrict which VMs each user can access. Click the shield icon next to a non-admin user to assign specific VMs. Users with ACL entries only see and interact with their assigned VMs. Leave the list empty for unrestricted access. Admin users always bypass ACL restrictions.

### Resource Quotas (Fabrick)

On Fabrick tier, admins can set per-user limits on maximum VMs, total memory (MB), and total vCPUs. When a quota is configured, the Create VM dialog shows current usage. VM creation is blocked when any quota limit would be exceeded. Quotas default to unlimited until explicitly set.

---

## License & Tier Management

*Available: v1.0+*

Weaver works out of the box on the Free tier — no license key required. To unlock additional capabilities, activate a license key in the NixOS module configuration.

| Tier | What it unlocks |
|------|----------------|
| **Free** | Workload monitoring, start/stop/restart, AI diagnostics (BYOK), network topology, serial console, TUI |
| **Weaver Solo** | Live Provisioning — create and manage workloads from the browser. Managed bridges, push notifications, distro management |
| **Weaver Team** | Multi-user with per-user licensing. Full remote management of up to 2 peer hosts |
| **Fabrick** | Fleet-scale governance — per-workload access control, resource quotas, audit log, fleet topology |

### Activating a License

Set \`licenseKeyFile\` in the NixOS module, pointing to a file containing your license key. Use sops-nix to encrypt the key at rest (see [PRODUCTION-DEPLOYMENT.md](PRODUCTION-DEPLOYMENT.md) § Secrets Management).

\`\`\`nix
services.weaver = {
  licenseKeyFile = config.sops.secrets."weaver/license-key".path;
};
\`\`\`

### Checking Your Current Tier

The Settings page displays your current tier badge and expiry information. You can also check via the command line:

\`\`\`bash
curl -s http://localhost:3100/api/health | jq '.tier'
\`\`\`

### License Expiry

After expiry, tier features remain accessible in read-only mode for a 30-day grace period. A warning banner appears in Settings. After the grace period, the instance reverts to the Free tier.

> **Note:** Tier restrictions are enforced at the API level, not just the UI. The TUI and direct API calls respect the same tier gates.

---

## Network Management

*Available: v1.0+ (basic), v1.2+ (full management)*

### Strands — Local Topology

The Strands page (sidebar: "Strands") displays an interactive graph of your host, network bridges, and VMs/containers. Bridges are derived automatically from running workloads. Click a workload node to see its details; double-click to navigate to its detail page.

Strands is read-only on Weaver Free and interactive (drag, zoom, search) on all tiers.

### Bridge Management (v1.2+, Weaver Solo)

Bridges are auto-detected from the network interfaces your VMs are attached to. These appear with an "auto-detected" badge and are read-only. With Weaver Solo or higher, you can also:

- **Create managed bridges** — Click "Create Bridge" to define a new bridge with a name and gateway IP. Managed bridges support deletion and full configuration.
- **Configure IP pools** — Set IP address pools per bridge for automatic VM IP assignment.
- **Manage firewall rules** — View and manage nftables firewall rules per bridge (v1.2+).

### Default Bridge Configuration

The default bridge is \`br-microvm\` with gateway \`10.10.0.1\`. Customize in the NixOS module:

\`\`\`nix
services.weaver = {
  bridgeInterface = "br-microvm";
  bridgeGateway = "10.10.0.1";
};
\`\`\`

---

## AI Agent Configuration

*Available: v1.0+*

Weaver includes AI-powered workload diagnostics with three actions per VM: Diagnose (analyze issues), Explain (describe configuration), and Suggest (recommend optimizations).

### Mock Mode

When no API key is configured (server-side or BYOK), AI features use mock mode with canned sample responses. This is ideal for evaluation — no configuration required.

### BYOK (Bring Your Own Key)

Any user can configure their own Anthropic API key in Settings under "AI Provider (BYOK)":

1. Go to Settings.
2. In the "AI Provider (BYOK)" section, select a vendor and enter your API key.
3. The key is stored in your browser's localStorage only — never sent to or stored on the server.

Supported vendors include Anthropic (Claude), OpenAI, and self-hosted options (vLLM, TGI, Ollama).

### Server-Side AI Key (Weaver Solo+)

Admins can configure a server-side API key available to all Weaver Solo/Team and Fabrick users:

**NixOS module:** Set \`aiApiKey\` or \`aiApiKeyFile\` in the module configuration.

**Environment variable:** Set \`ANTHROPIC_API_KEY\` in the service environment.

Users on Weaver Solo+ can toggle between their personal BYOK key and the server-provided key in Settings.

### Per-Workload AI Assignment (Fabrick)

On Fabrick tier, admins can override the AI provider for specific workloads in Settings under "Workload AI Assignment". This is useful for HIPAA-sensitive VMs (route to ZenCoder) or air-gapped environments (route to local LLM).

### AI Credential Vault (v1.4+)

*Available: v1.4+*

Admin-managed credential vault for AI provider keys. Centralizes key management so individual users do not need to manage their own API keys.

### Rate Limits

AI agent rate limits are enforced per-user:

| Tier | Limit |
|------|-------|
| Free | 5 requests/minute |
| Weaver Solo/Team | 10 requests/minute |
| Fabrick | 30 requests/minute |

---

## Workload Management

### Two Approaches to MicroVMs

Weaver supports two ways to run MicroVMs, and they complement each other:

| | NixOS-Declared (All Tiers) | Live Provisioned (Weaver Solo+) |
|---|---|---|
| **How** | Define in NixOS flake → \`nixos-rebuild switch\` | Create from Weaver UI or API — no rebuild |
| **Guest OS** | NixOS only | Any (Ubuntu, Fedora, Windows, Alpine, Arch, custom) |
| **Hypervisors** | QEMU, Cloud Hypervisor, crosvm, kvmtool | QEMU |
| **Managed by** | systemd (\`microvm@<name>.service\`) | Weaver process manager |
| **Shared filesystems** | virtiofs / 9p | Not available |
| **Guest configuration** | Declarative Nix (version-controlled, atomic rollback) | Cloud-init or manual (ISO install) |
| **Terminal required** | Yes | No |

**Free tier** users define MicroVMs in their NixOS configuration and use Weaver to monitor, start, stop, and restart them. This path offers lighter hypervisors, shared filesystems, and full declarative reproducibility.

**Weaver Solo+** unlocks Live Provisioning — create and manage MicroVMs directly from the browser with any guest OS, no terminal needed. This is the core paid differentiator.

### Discovering Existing Workloads (All Tiers)

*Available: v1.0+*

Weaver automatically discovers NixOS-declared MicroVMs and containers running on your host. Two methods:

- **Scan for Workloads** — Discovers \`microvm@*\` systemd services and Docker/Podman containers, then adds them to Weaver. Available from the Weaver page or Settings.
- **Register Existing** — Manually register a workload that Weaver didn't auto-discover. For workloads managed outside Weaver that you want to monitor.

Once discovered, you can monitor, start, stop, and restart workloads from the Weaver page.

### Live Provisioning (Weaver Solo+)

*Available: Weaver Solo+*

Live Provisioning lets you create and manage MicroVMs directly from the browser — no terminal, no \`nixos-rebuild switch\`, no configuration files. Choose a distribution, set resources, and provision in seconds.

#### Supported Distributions

Built-in distributions include Arch Linux, Fedora, Ubuntu, Debian, Alpine, and CirOS. Custom distributions can be added in Settings.

- **Cloud distros** — QEMU with cloud images and cloud-init (Ubuntu, Fedora, etc.)
- **ISO distros** — boot from a downloaded ISO for manual installation (Windows, non-cloud Linux)
- **NixOS guests** — flake generator with microvm.nix

#### Hypervisor Options

| Hypervisor | Compatibility | Notes |
|-----------|---------------|-------|
| QEMU | All distributions | Most versatile; supports desktop mode (VNC), Windows, cloud images |
| Cloud Hypervisor | NixOS guests only | Lightweight alternative |
| crosvm | NixOS guests only | Lightweight alternative |
| kvmtool | NixOS guests only | Lightweight alternative |
| Firecracker | NixOS guests only | Lightweight; incompatible with virtiofs/9p |

#### Windows Guests

Windows guests use a "Bring Your Own ISO" approach:

1. In Settings, add a custom distro with your Windows ISO URL and set Guest OS to "Windows".
2. Create a new VM and select your Windows distro.
3. The VM is provisioned with a blank disk and your ISO attached as CDROM.
4. Start the VM and install Windows via the VNC console.

Windows VMs use IDE disk and e1000 networking for driver-free installation. Use Windows 10 or Server 2016+ (Windows 11 requires UEFI, which is not yet supported).

#### Image Management

Admins can manage distributions in Settings under "Distributions & Image URLs":

- **Check URLs** — Verify that all distribution image URLs are reachable.
- **Refresh Catalog** — Re-fetch the curated distro catalog from the bundled default or a remote URL.
- **Edit URLs** — Override the default image URL for any built-in distribution.
- **Add Custom Distributions** — Add new distros with remote URLs (\`https://...\`) or local file paths (\`file:///path/to/image.qcow2\`).

---

## Tags & Organization

*Available: v1.0+*

Tags help organize workloads by purpose, environment, team, or any other classification.

### Preset Tags

Admins can manage a global list of preset tags in Settings under "Tag Management". Preset tags are available as quick-select options when tagging workloads.

### Applying Tags

Edit tags on individual workloads from the VM detail page. Tags appear as badges on VM cards and can be used to filter the workload list.

### Bulk Tag Management

In Settings, the Tag Management section shows all tags in use with VM counts. Admins can:

- **Rename** a tag across all VMs in bulk.
- **Delete** a tag from all VMs in bulk.

---

## Audit Log

*Available: v1.0+ (recording), Fabrick (UI viewer)*

Weaver records significant user actions in an audit log. All tiers record audit events to \`audit-log.json\` in the data directory.

### What Is Logged

- Authentication events (login, logout, failed login attempts)
- VM operations (start, stop, restart, create, delete)
- AI agent invocations
- User management actions (create, delete, role change)
- Distribution management (add, delete, catalog refresh)
- Configuration changes

Each entry captures: timestamp, username, action, resource (if applicable), success/failure status, and IP address.

### Viewing the Audit Log (Fabrick)

On Fabrick tier, admins and operators can browse the audit log on the Audit Log page (sidebar: "Audit Log"). The page provides:

- **Filters** — Date range (from/until), action type, user ID, and resource name.
- **Paginated table** — Columns: Timestamp, User, Action (color-coded badge), Resource, Status (success/fail icon), IP.
- **Navigation** — Page controls at the bottom with entry count.

### Retention

Audit entries are stored in \`audit-log.json\` in the data directory. Back up this file as part of your regular backup procedure (see [Backup & Restore](#backup--restore)).

> **Note:** At v3.0+, the audit log transitions to a SQL backend with a full query UI and fleet-wide audit aggregation.

---

## Notifications

*Available: v1.0+ (in-app), Weaver Solo+ (push channels)*

### In-App Notifications

The bell icon in the toolbar shows unread notification count. Click to open the notification panel where you can mark individual notifications as read, dismiss them, or use checkboxes for bulk actions (mark read, delete). "Mark all read" clears the badge count; "Clear all" removes all notifications.

### Push Notification Channels (Weaver Solo+)

Admins can configure push notification channels in Settings under "Notifications":

1. Click "Add Channel" to create a new channel.
2. Select the channel type:
   - **ntfy** — Push to any ntfy server or ntfy.sh.
   - **Email (SMTP)** — Send notifications via your mail server.
   - **Webhook** — HTTP POST with support for JSON, Slack, Discord, and PagerDuty payload formats.
   - **Web Push** — Browser push notifications.
3. Select which events the channel should receive.
4. Click "Add Channel" to save, then use the "Test" button to verify delivery.

### Notification Events

Events are grouped into four categories:

| Category | Events |
|----------|--------|
| VM events | started, stopped, failed, recovered |
| Provisioning | provisioned, provision-failed |
| Resource alerts | high CPU, high memory |
| Security | auth failure, unauthorized access, permission denied |

Session lifecycle events (login kick, logout) do not trigger security notifications. Each channel can subscribe to any combination of events.

---

## Organization Settings

*Available: v1.0+*

Admins on Weaver Solo/Team and above can customize instance identity in Settings under "Identity":

- **Organization Name** — Appears in the browser tab, header, and login page.
- **Logo URL** — URL or data URI for your logo, shown in the header and login page. A preview is displayed as you type.
- **Contact Email** — Displayed on the Help page in a contact banner visible to all users.
- **Contact Phone** — Displayed on the Help page alongside the contact email.

Click "Save Identity" to apply changes.

---

## Security Administration

*Available: v1.0+*

### Rate Limiting

The backend enforces rate limits automatically with no configuration needed:

| Endpoint | Limit | Window |
|----------|-------|--------|
| Auth routes (login, register, refresh) | 10 requests | 1 minute |
| VM mutations (start, stop, restart, create, delete) | 30 requests | 1 minute |
| AI agent | 5/10/30 per tier | 1 minute |
| All other endpoints | 120 requests | 1 minute |

Rate limits are keyed by authenticated user ID or by IP for unauthenticated requests.

### Account Lockout

After 5 failed login attempts within 15 minutes, the account is temporarily locked. Lockout state is persisted to \`lockout.json\` in the data directory and survives server restarts. Expired entries are pruned on startup. No configuration is needed.

### Session Management

- Access tokens expire after 15 minutes and are refreshed automatically. Refresh tokens expire after 7 days of inactivity.
- Single-session enforcement is active — logging in from a new browser or TUI revokes the previous session. Only one active session per user is allowed.
- Weaver Solo+/Fabrick tiers default to SQLite sessions (persistent across restarts). Free tier uses in-memory sessions. Override with \`SESSION_STORE_TYPE\` if needed.

### CSP Headers

The backend sets a Content Security Policy via Helmet. If you add external resources (CDN fonts, analytics), update the CSP directives in the backend configuration. The \`upgrade-insecure-requests\` directive is disabled at the app level — configure it at the reverse proxy if needed.

### Password Requirements

All passwords must be 14-128 characters with at least one uppercase letter, one lowercase letter, one digit, and one special character.

### Password Reset

If the only admin has lost their password and has root access on the host:

\`\`\`bash
sudo weaver-reset-password
\`\`\`

This prompts for a username and new password, updates the password hash directly, and clears any lockout state.

For the full security checklist, see [PRODUCTION-DEPLOYMENT.md](PRODUCTION-DEPLOYMENT.md) § Security Checklist.

---

## Backup & Restore

*Available: v1.0+*

All persistent state lives in the data directory (\`/var/lib/weaver\` on NixOS, or the path set by \`VM_DATA_DIR\`).

### What to Back Up

| File | Description | Critical? |
|------|------------|-----------|
| \`users.json\` | User accounts, bcrypt password hashes, roles | Yes |
| \`audit-log.json\` | Audit trail of all user actions | Yes |
| \`vms.json\` | VM registry and metadata | Yes |
| \`network-config.json\` | Network configuration | Yes |
| \`custom-distros.json\` | User-defined distribution templates | Yes |
| \`sessions.db\` + WAL/SHM | SQLite session store (premium tiers) | No (users re-auth) |
| \`distro-catalog.json\` | Cached curated distro catalog | No (auto-refreshed) |
| \`lockout.json\` | Account lockout state | No (auto-pruned) |

For backup scripts, automated backup with cron/systemd timers, and restore procedures, see [PRODUCTION-DEPLOYMENT.md](PRODUCTION-DEPLOYMENT.md) § Backup and Restore.

---

## Monitoring & Health

*Available: v1.0+*

### Health Endpoint

\`GET /api/health\` is public (no authentication required) and returns:

\`\`\`json
{
  "status": "healthy",
  "timestamp": "2026-02-12T12:00:00.000Z",
  "service": "weaver",
  "tier": "premium",
  "tierExpiry": "2027-01-15T00:00:00.000Z",
  "tierGraceMode": false
}
\`\`\`

Use this for uptime monitoring, load balancer health checks, and alerting:

\`\`\`bash
curl -sf http://localhost:3100/api/health > /dev/null || echo "Weaver is down"
\`\`\`

### Host Information (Weaver Solo+ Admin)

Weaver Solo/Team admins can view detailed host metrics in Settings under "Host Information":

- NixOS version
- CPU topology (sockets, cores, threads, cache hierarchy, virtualization type)
- Disk usage per mount point with capacity warnings
- Network interfaces with state and MAC address
- Live metrics: free RAM, load averages (1m, 5m, 15m)

### Log Locations

Weaver logs to the systemd journal with structured JSON output in production.

\`\`\`bash
# Live log stream
sudo journalctl -u weaver -f

# Last 100 lines
sudo journalctl -u weaver -n 100

# Errors only
sudo journalctl -u weaver -p err
\`\`\`

Set \`LOG_LEVEL\` to control verbosity: \`fatal\`, \`error\`, \`warn\`, \`info\` (default/recommended), \`debug\`, \`trace\`.

### What to Monitor

- Health endpoint availability and response time
- Service status: \`systemctl is-active weaver\`
- Disk usage on the data directory (especially if running many VMs)
- Journal error rate: \`journalctl -u weaver -p err --since "1 hour ago" | wc -l\`
- WebSocket connectivity (client-side reconnection events)

For full monitoring guidance, see [PRODUCTION-DEPLOYMENT.md](PRODUCTION-DEPLOYMENT.md) § Monitoring.

---

## Upgrade Procedures

*Available: v1.0+*

### NixOS (Flake)

\`\`\`bash
# Update the Weaver flake input
nix flake update weaver

# Rebuild the system
sudo nixos-rebuild switch
\`\`\`

The NixOS module handles service restart automatically. After rebuild, run \`gh auth setup-git\` if you use the GitHub CLI (the credential helper path goes stale after NixOS rebuilds).

### Version Compatibility

- User data files (\`users.json\`, \`vms.json\`, etc.) are forward-compatible. Weaver migrates data automatically on startup when needed.
- NixOS module options may change between major versions. Check the changelog before upgrading.
- The JWT secret must remain the same across upgrades. If it changes, all user sessions are invalidated.

> **Note:** Always back up your data directory before upgrading. See [Backup & Restore](#backup--restore).

---

## Extensions

*Available: v1.1+*

Extensions expand Weaver's capabilities beyond the core workload management features. All extensions are tier-gated — they require at minimum a Weaver Solo license. There is no a la carte extension purchasing; extensions are included with the appropriate tier.

### Extension Categories

| Category | Version | Description |
|----------|---------|-------------|
| **Containers** | v1.1+ | Docker, Podman, and Apptainer workload visibility and management |
| **Auth Extensions** | v1.1+ | SSO (SAML/OIDC) and FIDO2/WebAuthn authentication |
| **DNS Management** | v1.1+ | Internal DNS for workload service discovery |
| **Firewall & TLS** | v1.2+ | Managed nftables profiles and TLS certificate management |
| **Hardening** | v1.2+ | Security hardening profiles for workloads |
| **GPU Inventory** | v1.2+ | GPU detection, assignment, and monitoring |
| **AI Credential Vault** | v1.4+ | Centralized admin-managed AI provider keys |
| **Secrets Management** | v1.5+ | Encrypted secret injection into workloads |
| **Templates** | v2.0+ | Workload templates and disk management |
| **Compliance Export** | v2.2+ | Framework-based compliance report generation |

### TOTP / Multi-Factor Authentication

TOTP is included in Weaver Solo/Team at no additional cost. Free tier does not have MFA. Users with 1Password Technical Accounts at the Weaver tier get TOTP free via OAuth.

---

## Weaver Team Administration

*Available: v2.2+*

Weaver Team adds multi-host awareness through peer monitoring — read-only visibility into up to 2 other Weaver hosts without requiring a full Fabrick fleet.

### Peer Registration

Register remote Weaver instances as peers to monitor their workload health and status from your dashboard. Peers are discovered via Tailscale or manual URL entry.

### Tailscale Discovery

When running on a Tailscale network, Weaver can automatically discover other Weaver instances on the tailnet. Discovered peers appear as candidates for registration.

### Limitations

- Maximum of 2 peers per Weaver Team instance.
- Peer access is read-only — you can view remote workload status but cannot start, stop, or modify remote workloads.
- For full remote workload management, upgrade to Fabrick.

---

## Fabrick Administration

*Available: v2.3+*

Fabrick is the multi-host fleet control plane. Each host runs Weaver; Fabrick orchestrates the fleet.

### Fleet Overview

The Fabrick page provides an aggregate view of all enrolled hosts showing health status, workload counts, resource utilization, and host kind (on-prem, cloud, remote, IoT). Click a host card to drill into that host's workloads.

### Host Enrollment

Enroll hosts into the fleet by deploying Weaver with a Fabrick-tier license key on each host. Hosts register with the fleet control plane and appear on the Fabrick overview page.

### Warp Patterns (v2.5+)

Warp is the desired-state management surface. A warp pattern defines what a host type should look like: which workloads, which bridges, which GPU assignment, which snapshot policy. Warp detects configuration drift and supports blue/green pattern deployment.

### Fleet Virtual Bridges (v3.0+)

Fleet virtual bridges span multiple hosts using overlay transport (VXLAN for datacenter, WireGuard for edge). They replace the need for separate CNI plugins, ingress controllers, and deployment tools. Each fleet bridge maps 1:1 to a workload group — the compliance boundary IS the network isolation boundary.

### Workload Groups (v3.3+)

Compliance boundaries that scope workloads, users, and AI policy. Each group can have compliance framework tags (HIPAA, PCI-DSS, CMMC), an AI policy (allow-all, claude-only, local-only, none), and IdP/LDAP group mapping. Creating a group automatically creates its fleet bridge.

---

## TUI Administration

*Available: v1.0+*

Weaver includes a terminal-based interface (TUI) for managing workloads over SSH without a browser.

### Connecting

\`\`\`bash
# Connect to a running Weaver instance
npm run start:tui -- --host http://your-host:3100

# Demo mode (offline, mock data)
npm run start:tui -- --demo
\`\`\`

> **Note:** Complete the initial admin setup via the web UI before using the TUI. The TUI requires an existing account to authenticate.

### Credentials

TUI credentials are stored in \`~/.config/weaver/\`. The TUI uses the same JWT authentication as the web UI, and single-session enforcement applies — logging in via the TUI revokes any existing web session for that user.

### Tier Display

The TUI displays the current license tier in the status bar. Tier-gated features are enforced at the backend — the TUI respects the same restrictions as the web UI.

### JSON Export

Export workload data as JSON for scripting and automation:

\`\`\`bash
npm run start:tui -- --export
\`\`\`

### Keyboard Navigation

| Key | Action |
|-----|--------|
| Arrows / j / k | Navigate workload list |
| s | Start selected workload |
| S | Stop selected workload |
| r | Restart selected workload |
| d | Open workload detail |
| a | Invoke AI agent |
| q | Quit |
`,Vr=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->

# Weaver User Guide

## Introduction

Weaver is a web-based management interface for workloads running on NixOS hosts. It manages MicroVMs (hardware-isolated virtual machines) and containers (Docker, Podman, Apptainer) from a single interface. A MicroVM is a container with a hardware boundary instead of a namespace boundary — Weaver manages both uniformly.

This guide is for **all users** — administrators, operators, and viewers — who use Weaver daily. It covers every page and feature you will encounter in the web interface. Installation, NixOS configuration, and backend administration are covered separately in the Admin Guide.

**Feature tiers:** Weaver has four tiers — Free, Solo, Team, and Fabrick. Each section in this guide notes which tier and version introduced the feature. Tier-gated features show an upgrade prompt in the UI when your license does not include them.

---

## Table of Contents

1. [Logging In](#logging-in)
2. [Navigation](#navigation)
3. [Weaver Page — Workload Management](#weaver-page--workload-management)
4. [Workload Detail Page](#workload-detail-page)
5. [Creating Workloads — Shed](#creating-workloads--shed)
6. [Serial Console](#serial-console)
7. [AI Diagnostics](#ai-diagnostics)
8. [Network Topology — Strands](#network-topology--strands)
9. [Tags and Search](#tags-and-search)
10. [Keyboard Shortcuts](#keyboard-shortcuts)
11. [Notifications](#notifications)
12. [Settings](#settings)
13. [Understanding Status Badges](#understanding-status-badges)
14. [Containers](#containers)
15. [Fabrick Fleet View](#fabrick-fleet-view)
16. [Loom — Fleet Topology](#loom--fleet-topology)
17. [Warp — Fleet Configuration](#warp--fleet-configuration)
18. [TUI Client](#tui-client)
19. [FAQ](#faq)

---

## Logging In

*Available: v1.0+*

Navigate to your Weaver instance in a browser (for example, \`http://your-host:3100\`). You will see a login page with username and password fields.

### First-Run Setup

When no user accounts exist, the login page automatically switches to a "Create Admin Account" form. The first account created always receives admin privileges. After setup, subsequent users must be created by an admin from the Users page.

### Session Management

Access tokens expire after 15 minutes. Weaver refreshes your session automatically in the background — you will not be interrupted unless the refresh token itself expires (7 days) or you have been idle too long. **Single-session enforcement** is active at all tiers — logging in from a new browser or TUI revokes your previous session. Only one active session per user is allowed.

### Logging Out

Click your username in the top-right corner of the header to open the user menu. Your current role is displayed as a colored badge (purple for Admin, teal for Operator, grey for Viewer). Click **Logout** to end your session.

### Forgotten Password

Contact your administrator. If you are the only admin and have root access on the host, a command-line password reset script is available.

> **Note:** Role changes take effect immediately. If an admin changes your role, your active session is invalidated and you must log in again.

---

## Navigation

*Available: v1.0+*

The sidebar provides access to all pages. On screens narrower than large desktop size, the sidebar collapses behind a hamburger menu button.

### Sidebar Layout

**Operational pages:**

| Page | Icon | Description | Availability |
|------|------|-------------|--------------|
| **Fabrick** | Grid | Multi-host fleet control plane | v2.3+, Fabrick tier |
| **Loom** | Spider web | Fleet host-to-host topology | v3.0+, Fabrick tier |
| **Warp** | Texture | Fleet host configuration patterns | v2.5+, Fabrick tier |
| **Weaver** | Grid | Manage workloads (VMs and containers) | v1.0+, all tiers |
| **Strands** | Network | Local network topology | v1.0+, all tiers |

**Creation:**

| Page | Icon | Description | Availability |
|------|------|-------------|--------------|
| **Shed** | Door | Create new workloads and browse templates | v2.0+, Admin/Operator only |

**Utility pages:**

| Page | Icon | Description | Availability |
|------|------|-------------|--------------|
| **Users** | People | Manage user accounts | Admin only |
| **Groups** | Folder | Workload groups and compliance boundaries | v3.3+, Fabrick tier |
| **Audit Log** | Search | Activity history | v1.0+, Fabrick tier, Admin only |
| **Extensions** | Puzzle | Extension catalog (AI, DNS, security, backup) | v1.1+, all tiers |
| **Settings** | Gear | AI provider, preferences, host config | v1.0+, all tiers |
| **Help** | Question | Guides, FAQ, keyboard shortcuts | v1.0+, all tiers |

### The Textile Metaphor

Weaver uses a textile naming convention throughout the product:

- **Strands** — individual threads of local network connectivity
- **Loom** — the fleet structure where strands are woven together
- **Weaver** — the tool that manages it all
- **Fabrick** — the finished fleet fabric (note the spelling with k)
- **Shed** — the opening where new threads enter the loom
- **Warp** — the lengthwise threads that define the pattern (host configurations)

### Role-Based Visibility

Not all pages are visible to all users. The **Shed** page is hidden for Viewer and Auditor roles — they cannot create workloads. The **Users** page requires Admin role. The **Audit Log** requires Admin role and Fabrick tier. Buttons for actions you cannot perform (start, stop, delete) are also hidden based on your role.

> **Tip:** Your current role appears as a badge next to your username in the header. If you need elevated permissions, contact your administrator.

---

## Weaver Page — Workload Management

*Available: v1.0+*

The Weaver page is the main page. It displays all workloads as cards in a responsive grid layout.

### Workload Cards

Each card shows:

- **Name** — the workload identifier, with a type icon (server or desktop)
- **Status badge** — color-coded status (see [Understanding Status Badges](#understanding-status-badges))
- **IP address** — the network address assigned to the workload
- **vCPU count** — number of virtual CPUs allocated
- **Memory** — allocated RAM in MB
- **Hypervisor** — the virtualization backend (QEMU, Cloud Hypervisor, etc.)
- **Tags** — assigned labels (up to 3 visible, with overflow count)
- **Description** — optional text description

Click any card to open its [Workload Detail Page](#workload-detail-page).

### Workload Actions

Running workloads show **Stop** and **Restart** buttons. Stopped workloads show a **Start** button. A **Delete** button appears for Admin users on paid tiers. Actions are hidden if your role does not permit them.

### Scanning for Workloads

If no workloads are registered, an empty state appears with two options:

- **Scan for Workloads** — discovers NixOS-declared MicroVMs (\`microvm@*\` systemd services) and containers on your host, then adds them to Weaver automatically
- **Create VM** — navigate to the Shed page to provision a new MicroVM via Live Provisioning (Weaver Solo+)

> **Note:** Weaver supports two approaches to MicroVMs. On **all tiers**, NixOS-declared MicroVMs (defined in your NixOS configuration) offer lighter hypervisors, shared filesystems, and declarative reproducibility — Weaver monitors and controls them. On **Weaver Solo+**, Live Provisioning lets you create MicroVMs with any guest OS directly from the browser — no rebuild, no terminal. See the Admin Guide for details.

### Filtering and Sorting

*Containers: v1.1+*

When containers are present, filter chips appear at the top of the page:

- **All** — show all workloads (VMs and containers)
- **VMs** — show only MicroVMs
- **Docker** — show only Docker containers
- **Podman** — show only Podman containers
- **Apptainer** — show only Apptainer containers (Weaver Solo+)

Use the **sort dropdown** (next to the grid/list toggle) to sort workloads by name, status, or manual order. Select "Manual (drag)" to enable drag-and-drop reordering — drag handles appear on each card. Your custom order persists across sessions in browser localStorage.

Toggle between **grid view** and **list view** using the buttons next to the sort dropdown.

### Remote Workloads

*Available: v2.2+*

On Weaver Team tier, workloads from remote peer hosts appear alongside local workloads. Remote workloads display a purple **host badge** with the originating hostname. These are read-only — you can view their status but cannot control them from a peer host.

### Bulk Operations

*Available: v2.3+, Fabrick tier*

On Fabrick tier, selection checkboxes appear on each VM card. Select multiple VMs and use the bulk action bar to start, stop, or restart them all at once.

### Host Information Strip

A strip at the top of the Weaver page shows basic host facts: hostname, IP address, CPU core count, total RAM, and KVM status. If KVM hardware acceleration is not detected, a warning banner appears — VMs run significantly slower without it.

---

## Workload Detail Page

*Available: v1.0+*

Click any workload card on the Weaver page to open its detail view. A "Back to Weaver" link returns you to the main page.

### Header Section

The header displays the workload name, an editable description field, tags, and the current status badge. Provisioning state badges appear when relevant (Provisioning, Failed, Destroying, Registered).

### Action Buttons

Action buttons appear based on your role and the workload state:

- **Start** — start a stopped workload (Operator, Admin)
- **Stop** — stop a running workload (Operator, Admin)
- **Restart** — restart a running workload (Operator, Admin)
- **Delete** — remove the workload and clean up resources (Admin, paid tiers)
- **Clone** — duplicate the workload configuration (v1.1+, paid tiers)
- **Migrate** — move the workload to another host (v2.3+ cold migration, v3.0+ live migration, Fabrick tier)

AI action buttons are always visible:

- **Diagnose** — analyze issues and suggest fixes
- **Explain** — describe what the workload does
- **Suggest** — recommend optimizations

### Info Cards

Below the header, info cards display key specifications:

- IP address
- Memory (MB)
- vCPUs
- Disk size (GB), if allocated
- Hypervisor type
- Distribution, if applicable
- Uptime, if running

### Resource Metrics

*Available: v1.1+*

CPU, memory, and disk I/O charts appear below the info cards with configurable time windows.

### Tabs

Five tabs provide detailed information:

| Tab | Content |
|-----|---------|
| **Configuration** | VM settings: name, hypervisor, memory, vCPUs, disk, distribution, autostart, cloud-init, bridge |
| **Networking** | IP address, bridge, MAC address, and connectivity details |
| **Logs** | Provisioning output and system logs |
| **Console** | Serial terminal for running VMs (see [Serial Console](#serial-console)) |
| **AI Analysis** | History of past AI diagnostics (see [AI Diagnostics](#ai-diagnostics)) |

### GPU and Firewall Information

*Available: v1.2+*

On paid tiers at v1.2+, the detail page shows GPU passthrough information (if a GPU is assigned) and firewall rule visibility.

---

## Creating Workloads — Shed

*Available: v2.0+*

The Shed page is the unified workload creation surface. Navigate to it from the sidebar (Admin and Operator roles only). Prior to v2.0, workload registration and creation were accessed from buttons on the Weaver page.

### Tabs

Shed has three tabs:

- **Custom** — create or register individual workloads
- **Templates** — browse and deploy pre-configured workload templates
- **Migrate** — migration helpers for moving workloads between hosts

### Custom Tab

The Custom tab shows cards for different workload types:

**Register Existing VM** — Track an existing systemd-managed MicroVM (for example, \`microvm@name.service\`) without provisioning it. This is for VMs already managed outside Weaver. Available on all tiers.

**Custom MicroVM** (Weaver Solo+) — Configure a hardware-isolated VM from scratch. Choose a distribution, set memory, vCPUs, IP address, disk size, and hypervisor. Cloud distributions use QEMU with cloud images and cloud-init. ISO distributions boot from a downloaded ISO for manual installation (useful for Windows).

**Container** (v2.0+ registration, v2.1+ creation) — Create or register Docker, Podman, or Apptainer containers. At v2.0, only registration of existing containers is available. Full container creation (image, port mappings, environment variables) arrives at v2.1.

**GPU Workload** (Weaver Solo+) — Create a VM or container with dedicated GPU via VFIO-PCI passthrough. Supports NVIDIA, AMD, and Intel GPUs.

### Templates Tab

*Available: v2.0+*

The template catalog shows pre-configured workload definitions organized by category:

- **Web servers** — Nginx, Caddy
- **Databases** — PostgreSQL, MariaDB
- **Monitoring** — Prometheus, Grafana
- **Security** — Pi-hole, Vaultwarden
- **Automation** — Node-RED
- **Load balancing** — HAProxy

Browse templates by category, search by name, and deploy with one click. Templates specify the distribution, resources, and cloud-init configuration automatically.

> **Note:** Free-tier users can browse the template catalog but cannot deploy. A tier upgrade prompt appears when attempting to deploy.

### Hypervisor Options

When creating a VM, you will choose a hypervisor:

- **QEMU** — most versatile; supports all distributions, desktop mode (VGA/VNC), cloud images, and Windows guests
- **Cloud Hypervisor**, **crosvm**, **kvmtool** — lighter alternatives for NixOS guests only
- **Firecracker** — not available (incompatible with NixOS MicroVMs)

> **Tip:** When in doubt, choose QEMU. It supports the widest range of guest operating systems.

---

## Serial Console

*Available: v1.0+*

The serial console provides a terminal interface to a running VM directly in your browser.

### Accessing the Console

1. Open a workload's detail page by clicking its card on the Weaver page.
2. Click the **Console** tab.
3. The terminal connects to the VM's serial console output.

### Usage

The console displays text output from the VM and accepts keyboard input. You can log in, run commands, and inspect logs as if you were connected via a physical serial cable.

> **Note:** The serial console requires the VM to be running. If the VM is stopped, the console tab will indicate that no connection is available. Desktop-mode VMs (VGA/VNC) use a separate graphical console.

---

## AI Diagnostics

*Available: v1.0+*

Weaver includes AI-powered analysis for workload diagnostics. Three actions are available for each workload:

- **Diagnose** — analyze issues and suggest fixes
- **Explain** — describe what the workload does and its configuration
- **Suggest** — recommend performance and security optimizations

### Triggering Analysis

There are several ways to start an AI analysis:

1. Click the **stethoscope icon** on any workload card for a quick Diagnose.
2. Open a workload detail page and use the **Diagnose**, **Explain**, or **Suggest** buttons.
3. View past analyses in the **AI Analysis** tab on the detail page.

### API Key Configuration

AI features work in two modes:

- **Mock mode** — when no API key is configured, AI features return sample responses. This is useful for evaluation and exploring the interface without cost.
- **Live mode** — configure an API key in Settings to get real AI analysis.

### BYOK (Bring Your Own Key)

BYOK lets you use your own API key instead of a server-configured one. Your key is stored in your browser's localStorage and sent with each request. The server never stores your key.

If your administrator has configured a server-side key, it is available to Weaver Solo+ license holders. Free-tier users must provide their own key via Settings.

### Vendor Selection

Weaver supports multiple AI vendors. Configure your preferred vendor in Settings under the AI Provider section.

### Rate Limits

AI requests are rate-limited per user to protect AI infrastructure:

| Tier | Limit |
|------|-------|
| Free | 5 requests/minute |
| Weaver Solo/Team | 10 requests/minute |
| Fabrick | 30 requests/minute |

---

## Network Topology — Strands

*Available: v1.0+*

The Strands page displays an interactive graph of your host's network topology — bridges, VMs, and containers connected to each bridge.

### What the Topology Shows

- **Host node** — your NixOS machine, displayed at the center
- **Bridge nodes** — network bridges (for example, \`br-microvm\`) derived from running workloads
- **Workload nodes** — VMs and containers attached to each bridge
- **Edges** — connections between workloads and their bridges
- **Cross-bridge routes** — dashed lines showing routing between different bridges

### Interacting with the Graph

- **Zoom** — scroll wheel or pinch to zoom in and out
- **Pan** — click and drag the background to move the view
- **Click a node** — select it to see details
- **Double-click a workload** — navigate to its detail page

### Topology Colors and Badges

Workload nodes are color-coded by status (green for running, grey for stopped, etc.). Bridge nodes use infrastructure colors. On Fabrick tier at v3.0+, bridge nodes show fleet bridge membership badges.

### Container Topology

*Available: v1.2+*

At v1.2+, Docker and Podman bridge clusters appear on the topology with container nodes, giving a complete view of your local network fabric.

### Remote Peer Hosts

*Available: v2.2+*

On Weaver Team tier, workloads from remote peer hosts appear on the topology with dashed remote-service edges.

---

## Tags and Search

*Available: v1.0+*

### Applying Tags

Tags are labels you assign to workloads for organization. To add or edit tags on a workload:

1. Open the workload's detail page.
2. Use the **tag editor** below the workload name (Admin and Operator roles).
3. Type a tag name and press Enter to add it.

Viewers see tags as read-only chips.

### Managing Tags Centrally

Admins can manage tags in **Settings > Tag Management**. This section shows all tags in use with workload counts. You can rename a tag across all workloads or delete a tag from all workloads in bulk.

### Search

Use the search bar in the toolbar to filter workloads by name. The search is available on the Weaver page, Strands page, and Fabrick page. On mobile, tap the magnifying glass icon to open the search field.

---

## Keyboard Shortcuts

*Available: v1.0+*

Global keyboard shortcuts let you navigate quickly. Shortcuts are ignored when focus is in a text input, textarea, or dropdown.

| Shortcut | Action |
|----------|--------|
| \`?\` | Open the Help page |
| \`d\` | Go to the Weaver page |
| \`s\` | Go to Settings |
| \`t\` | Go to Strands (network topology) |
| \`n\` | Create a new VM |

---

## Notifications

*Available: v1.0+*

### Notification Bell

The bell icon in the toolbar shows a badge with the count of unread notifications. Click it to open the notification panel where you can:

- Mark individual notifications as read
- Dismiss notifications with the X button
- Select multiple notifications for bulk actions (mark read or delete)
- Use "Mark all read" to clear the badge count
- Use "Clear all" to remove all notifications

### Push Notification Channels

*Available: v1.0+, Weaver Solo+*

Admins can configure push notification channels in **Settings > Notifications**. Supported channels:

| Channel | Description |
|---------|-------------|
| **ntfy** | Push notifications via ntfy service |
| **Email (SMTP)** | Email alerts to specified addresses |
| **Webhook** | HTTP requests with Slack, Discord, and PagerDuty format support |
| **Web Push** | Browser push notifications |

### Notification Events

Events are grouped into four categories:

- **VM events** — started, stopped, failed, recovered
- **Provisioning events** — provisioned, provision-failed
- **Resource alerts** — high CPU, high memory
- **Security events** — auth failure, unauthorized access, permission denied

Each channel can subscribe to any combination of events. Use the "Test" button when adding a channel to verify delivery.

---

## Settings

*Available: v1.0+*

Access Settings from the sidebar. The Settings page contains several sections:

### AI Provider

Configure your AI vendor and API key. When no key is configured, AI features operate in mock mode with sample responses. BYOK keys are stored in your browser only.

### Custom Distributions

Add custom cloud image distributions by providing a short name, full name, image URL (or local file path), format, and cloud-init support flag. Built-in distributions can be overridden if their image URL becomes stale.

### Tag Management

*(Admin only)* View all tags in use with workload counts. Rename or delete tags in bulk.

### Host Information

The host information strip shows hostname, IP, CPU cores, total RAM, and KVM status. On Weaver Solo/Team, admins can view detailed host metrics including CPU topology, disk usage, network interfaces, and live load.

### Host Configuration Viewer

A read-only view of the NixOS \`configuration.nix\` file. Workload definitions are categorized in a sidebar: MicroVMs, OCI containers, Slurm nodes, and Infrastructure. Click any section to jump to its definition. Available to all authenticated users at all tiers.

### Notification Channels

*(Admin, Weaver Solo+)* Configure push notification channels (ntfy, email, webhook, web push) and manage event subscriptions.

### Help Preferences

Toggle contextual help tooltips on or off. When disabled, the small help icons next to form fields and buttons are hidden.

### License

View your current tier badge, tier description, and expiry information.

### Distribution and Image URLs

View the health status of all distribution image URLs. Valid URLs show a green check; broken URLs show a red X. Admins can update broken URLs directly.

> **Tip:** Weaver validates distribution image URLs daily using HEAD requests. Check this section if VM provisioning fails due to image download errors.

---

## Understanding Status Badges

*Available: v1.0+*

Every workload displays a color-coded status badge. Statuses update in real-time via WebSocket every 2 seconds.

| Status | Color | Meaning |
|--------|-------|---------|
| **Running** | Green | Workload is active and responding |
| **Stopped** | Grey | Workload is not running |
| **Failed** | Red | Workload encountered an error |
| **Provisioning** | Blue (with spinner) | Workload is being created or configured |
| **Destroying** | Orange (with spinner) | Workload is being removed |
| **Unknown** | Yellow | Status could not be determined |
| **Registered** | Grey | Workload is tracked but not yet started |

### WebSocket Indicator

The toolbar displays a WebSocket status chip:

- **Green "WebSocket"** — live connection active; statuses update in real-time
- **Red "WebSocket Offline"** — no connection; statuses are stale

> **Note:** If the WebSocket indicator stays red, check that the backend service is running and accessible.

---

## Containers

*Available: v1.1+*

Weaver manages Docker, Podman, and Apptainer containers alongside MicroVMs on the same interface.

### How Containers Appear

Containers are auto-detected from runtimes running on the host. They appear as cards on the Weaver page with:

- **Runtime badge** — Docker (blue), Podman (teal), or Apptainer (purple)
- **Port mappings** — exposed ports
- **Resource metrics** — CPU and memory usage
- **Labels** — container labels as tags

Use the filter chips at the top of the Weaver page to focus on a specific runtime.

### Container vs MicroVM

A MicroVM runs its own kernel inside a hardware-isolated virtual machine — stronger isolation, suitable for compliance-sensitive workloads. A container shares the host kernel via namespaces — lighter and faster, suitable for general workloads. Weaver manages both with the same interface, API, and bridge routing.

### Container Actions

Container management actions (start, stop, create, remove) require Weaver Solo tier or higher. Free-tier users can view container status but cannot control them.

### Apptainer

Apptainer (SIF format, for HPC and research workloads) requires Weaver Solo tier. It appears alongside Docker and Podman in the filter chips when Apptainer containers are detected.

---

## Fabrick Fleet View

*Available: v2.3+, Fabrick tier*

The Fabrick page is the fleet control plane — an aggregate view of all enrolled hosts.

### Fleet Overview

Each host appears as a card showing:

- Health status (online, degraded, offline)
- Workload count
- Resource utilization (CPU, memory)
- Host kind (on-prem, cloud, remote, IoT)

### Drill-Down

Click a host card to drill into that host's workloads. A breadcrumb in the header shows \`FabricK > hostname\`. The Weaver page and Strands page then display data for the selected host. Click the FabricK title in the header to return to the fleet view.

### Search

The toolbar search bar on the Fabrick page searches across hosts and workloads.

---

## Loom — Fleet Topology

*Available: v3.0+, Fabrick tier*

Loom is the fleet topology view. It shows all hosts in the fleet with their interconnections.

### What Loom Shows

- **Host nodes** — on-prem, cloud, remote, and IoT hosts
- **WireGuard tunnel edges** — solid lines showing encrypted host-to-host tunnels
- **Cross-host service edges** — dashed lines showing workload-to-workload service connections across hosts

### Logical View

The Loom page has a **Tunnels / Fleet Bridges** toggle. The logical view shows fleet virtual bridges as hub nodes with host nodes radiating outward. Edges display traffic weights and cordon status. Click a fleet bridge to open its detail drawer.

### Fleet Virtual Bridges

A fleet virtual bridge is a logical network bridge spanning multiple hosts, backed by overlay transport (VXLAN or WireGuard). Each fleet bridge maps 1:1 to a workload group — the network isolation boundary matches the compliance boundary.

### Navigation

Double-click a host node to navigate to the Fabrick overview for that host.

### Legend

The header displays a legend for edge types:

- **Solid white line** — host tunnel
- **Dashed orange line** — cross-host service

---

## Warp — Fleet Configuration

*Available: v2.5+, Fabrick tier*

Warp is the fleet host configuration surface. It manages configuration patterns across hosts in your Fabrick fleet.

### What Warp Does

- **Pattern versioning** — track and version host configuration templates
- **Blue/green deployment** — roll out configuration changes to a subset of hosts before fleet-wide application
- **Drift detection** — identify hosts that have diverged from their assigned configuration pattern

### Navigation

Access Warp from the sidebar. It is visible only to Fabrick-tier users.

---

## TUI Client

*Available: v1.0+*

Weaver includes a terminal-based user interface (TUI) for managing workloads over SSH without a browser.

### Connecting

\`\`\`
npm run start:tui -- --host http://your-host:3100
\`\`\`

Complete the initial admin setup via the web UI before using the TUI. Credentials are stored in \`~/.config/weaver/\`.

### Navigation

| Key | Action |
|-----|--------|
| Arrow keys / \`j\`/\`k\` | Navigate the workload list |
| \`s\` | Start selected workload |
| \`S\` | Stop selected workload |
| \`r\` | Restart selected workload |
| \`d\` | Open workload detail |
| \`a\` | Run AI agent analysis |
| \`q\` | Quit |

### JSON Export

Use \`--export\` to output workload data as JSON for scripting and automation.

### Tier Display

The TUI mirrors all web UI features: workload list, detail view, AI agent, network topology, settings, users, audit log, and fleet bridges. Tier restrictions are enforced identically — the backend API is the authoritative gatekeeper regardless of client.

---

## FAQ

### What is the WebSocket indicator in the header?

The Live/Offline chip shows whether the dashboard has an active WebSocket connection to the backend. When connected (green), workload statuses update in real-time every 2 seconds. When offline (red), the dashboard cannot receive live updates.

### Why is my VM stuck in "Provisioning" state?

VM provisioning can take several minutes, especially when downloading large cloud images. Check the Logs tab on the workload detail page for progress. If provisioning fails, the status changes to "Failed" with an error message.

### Can I use Weaver on mobile?

Yes. Weaver is a Progressive Web App (PWA) and works on mobile browsers. The responsive layout adapts to smaller screens. You can install it as a home screen app for a native-like experience.

### Is dark mode supported?

Yes. Click the sun/moon icon in the top-right toolbar to cycle between light mode, dark mode, and auto (follows system preference). Your choice persists across sessions.

### What distributions are supported?

Built-in distributions include Arch Linux, Fedora, Ubuntu, Debian, and Alpine. Cloud distributions use QEMU with cloud images and cloud-init. ISO distributions boot from a downloaded ISO for manual installation (for example, Windows). You can also add custom distributions in Settings.

### Can I run Windows as a guest?

Yes. Add a custom distribution in Settings with your Windows ISO URL and set Guest OS to "Windows." When creating a VM, select the Windows distribution — QEMU and desktop mode (VNC) are automatically enabled. Install Windows manually via the VNC console. Windows 10 and Server 2016+ are supported. Windows VMs use IDE disk and e1000 networking for driver-free installation.

> **Note:** Windows 11 requires UEFI, which is not yet supported.

### Can I run macOS as a guest?

Weaver does not currently support macOS guests. Apple's license agreement restricts macOS to Apple-branded hardware, and the specialized QEMU configuration required is not yet implemented.

### What are the API rate limits?

| Endpoint Category | Limit |
|-------------------|-------|
| Auth (login, register, refresh) | 10 requests/minute |
| VM mutations (start, stop, restart, create, delete) | 30 requests/minute |
| AI agent requests | 5–30/minute (tier-dependent) |
| All other endpoints | 120 requests/minute |

When a limit is exceeded, you receive a 429 response. Wait a moment and try again.

### How do I export my VM configurations?

The API provides a free-tier endpoint for exporting workload configurations as JSON:

\`\`\`bash
# Export all workloads
curl -s -H "Authorization: Bearer $TOKEN" http://localhost:3100/api/workload/export | jq .

# Export a single workload
curl -s -H "Authorization: Bearer $TOKEN" http://localhost:3100/api/workload/web-nginx/export | jq .
\`\`\`

The export includes name, IP, memory, vCPUs, hypervisor, distribution, tags, and bridge configuration.

### What if a cloud image URL is broken?

Weaver validates all distribution image URLs daily using HEAD requests. Go to **Settings > Distributions & Image URLs** to see which URLs are valid (green check) or broken (red X). Admins can click the edit icon to update a broken URL. When provisioning fails due to a broken URL, the error banner includes a "Fix in Settings" shortcut.

### How do I keep the NixOS store clean?

Each \`nixos-rebuild\` creates a new generation, and the Nix store grows over time. Use the \`nh\` (nix-helper) tool to garbage-collect old generations:

1. Add \`nh\` to your \`environment.systemPackages\`.
2. Run: \`nh clean all --keep 3\` — removes all generations except the 3 most recent.
3. Schedule it periodically (for example, a weekly systemd timer) to keep disk usage in check.

### What happens when a license expires?

After expiry, your tier features remain accessible in read-only mode for a 30-day grace period. A warning banner appears in Settings during this time. After 30 days, the instance downgrades to Free tier.

### What is Live Provisioning?

Live Provisioning is the core Weaver Solo+ differentiator — creating and managing VMs dynamically via the API and UI without running \`nixos-rebuild switch\` on the host. A one-time NixOS setup, then zero host rebuilds forever.

---

*Copyright 2026 whizBANG Developers LLC. All rights reserved.*
*Weaver Free: AGPL-3.0. Solo/Team/Fabrick: BSL-1.1. AI Training Restriction applies to all tiers. See LICENSE.*
`,Hr=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->

# Security Baselines

Minimum security parameter thresholds every WBD product must meet, based on **NIST 800-63B (2024)** and **OWASP ASVS 4.0**.

## Authentication

| Parameter | Minimum | Standard | Notes |
|-----------|---------|----------|-------|
| Password minimum length | 14 characters | NIST 800-63B | Infrastructure management requires stronger than consumer-grade 8-char |
| Password complexity | Upper + lower + digit + special character | OWASP ASVS V2.1 | All four character classes required |
| Password max length | 128 characters | OWASP ASVS V2.1 | Allow long passphrases |
| Bcrypt cost factor | 13 | OWASP 2024 | ~250ms per hash at cost 13 |
| Account lockout threshold | 5 attempts / 15 min | NIST 800-63B | Time-based reset, persisted to disk |
| Login error messages | Generic ("Invalid username or password") | OWASP ASVS V2.2 | Never reveal whether username exists |
| Login timing | Constant-time (dummy hash on missing user) | OWASP ASVS V2.2 | Prevent user enumeration via timing |

## Sessions & Tokens

| Parameter | Minimum | Standard | Notes |
|-----------|---------|----------|-------|
| Access token TTL | 15 minutes max | NIST 800-63B | Short-lived, non-renewable |
| Refresh token TTL | 7 days max | OWASP ASVS V3.5 | One-time use, rotated on refresh |
| Refresh token rotation | Required | OWASP ASVS V3.5.2 | Old token deleted before new issued |
| Password change | Invalidate all sessions | OWASP ASVS V3.3 | Force re-authentication |
| Token storage | httpOnly cookies preferred | OWASP ASVS V3.4.5 | localStorage is XSS-vulnerable |

## HTTP Security

| Parameter | Minimum | Standard | Notes |
|-----------|---------|----------|-------|
| HSTS max-age | 31536000 (1 year) | OWASP | Include includeSubDomains |
| CSP script-src | No unsafe-inline, no unsafe-eval | OWASP | Nonce or hash preferred |
| CSP style-src | unsafe-inline acceptable (framework requirement) | -- | Quasar/Vue runtime styles |
| CORS production | Explicit origin or same-origin only | OWASP | Never reflect arbitrary origins with credentials |
| X-Frame-Options | DENY or SAMEORIGIN | OWASP | Clickjacking protection |

## Audit Logging

| Event | Required | Standard |
|-------|----------|----------|
| Login success | Yes | OWASP ASVS V7.1 |
| Login failure | Yes | OWASP ASVS V7.1 |
| Logout | Yes | OWASP ASVS V7.1 |
| Password change | Yes | OWASP ASVS V7.1 |
| Role change | Yes | OWASP ASVS V7.1 |
| User creation/deletion | Yes | OWASP ASVS V7.1 |

## Command Execution

| Parameter | Requirement | Notes |
|-----------|-------------|-------|
| System commands | execFileAsync with argument arrays only | Never shell: true |
| User input in commands | Validated against strict regex before use | e.g., ^[a-z][a-z0-9-]*$ for VM names |
| Error messages from system commands | Sanitized before returning to client | Log full error server-side |

## Planned Improvements

No outstanding planned improvements — all baselines are implemented.

---

This document is the source of truth for the \`audit:security\` threshold checks. See \`scripts/audit-security.ts\`.
`,Ur=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->

# NIST 800-171 Rev 2 Control Mapping

**Date:** 2026-04-01
**Scope:** Weaver v1.0 — single-host NixOS workload isolation manager (containers + MicroVMs).

> **Disclaimer:** This document maps Weaver's technical controls to NIST 800-171 Rev 2 requirements. It is not a certification claim. Buyers should verify controls against their specific compliance requirements.

## AC — Access Control

| 800-171 ID | Control | Weaver Implementation | Status | Tier |
|-------------|---------|----------------------|--------|------|
| 3.1.1 | Limit system access to authorized users | JWT authentication required for all API routes; first-run admin setup (no default credentials) | Implemented | Free |
| 3.1.2 | Limit system access to authorized functions | RBAC: Admin/Operator/Viewer roles enforced via \`requireRole()\` middleware on every route | Implemented | Free |
| 3.1.3 | Control CUI flow per authorizations | Tier gating: \`requireTier()\` middleware restricts features by tier (Free+); per-VM ACLs for workload-level access control (Fabrick) | Implemented | Free (basic), Fabrick (per-VM ACLs) |
| 3.1.5 | Least privilege | Viewer role is read-only; Operator cannot manage users; Admin-only routes for user/role management | Implemented | Free |
| 3.1.7 | Prevent non-privileged users from executing privileged functions | Role checks enforced server-side; frontend guards are UX-only, backend is authoritative | Implemented | Free |
| 3.1.8 | Limit unsuccessful login attempts | Account lockout after 5 failed attempts within 15 minutes; progressive delay at 3+ attempts | Implemented | Free |
| 3.1.10 | Session lock after inactivity | Idle session timeout (15 min, server-side activity tracking); sessions deleted after 15 minutes of no API requests | Implemented | Free |
| 3.1.12 | Monitor and control remote access | All access via authenticated API/WebSocket; rate limiting on all routes | Implemented | Free |
| 3.1.22 | Control CUI on publicly accessible systems | Demo mode uses mock data only; no real workload data exposed; robots.txt + noai meta tags | Implemented | Free |

## AU — Audit and Accountability

| 800-171 ID | Control | Weaver Implementation | Status | Tier |
|-------------|---------|----------------------|--------|------|
| 3.3.1 | Create and retain audit records | Audit log captures: login success/failure, logout, password change, role change, user create/delete, workload actions | Implemented | Free |
| 3.3.2 | Ensure actions are traceable to individual users | Every audit entry includes authenticated user ID, timestamp, action type, and target | Implemented | Free |
| 3.3.4 | Alert on audit process failure | Audit log write failures logged to systemd journal | Implemented | Free |
| 3.3.5 | Correlate audit review/analysis/reporting | Audit log queryable via \`GET /api/audit\` (Admin/Operator); filterable by event type, user, date range | Implemented | Free |
| 3.3.8 | Protect audit information | Audit log accessible only to Admin/Operator roles; no deletion API exposed | Implemented | Free |

## IA — Identification and Authentication

| 800-171 ID | Control | Weaver Implementation | Status | Tier |
|-------------|---------|----------------------|--------|------|
| 3.5.1 | Identify system users | Unique username per user; first-run setup creates initial admin (no shared accounts) | Implemented | Free |
| 3.5.2 | Authenticate users | JWT-based authentication; bcrypt cost factor 13 (~250ms/hash); constant-time comparison on missing users | Implemented | Free |
| 3.5.3 | Use multifactor authentication | Multi-factor authentication (MFA) | Planned | Solo+ |
| 3.5.7 | Enforce minimum password complexity | 14+ characters; upper + lower + digit + special character required (NIST 800-63B) | Implemented | Free |
| 3.5.8 | Prohibit password reuse | Password change invalidates all sessions | Implemented | Free |
| 3.5.10 | Store and transmit only protected passwords | Passwords stored as bcrypt hashes (cost 13); transmitted only over HTTPS (TLS at nginx) | Implemented | Free (bcrypt), Solo+ (TLS enforcement) |
| 3.5.11 | Obscure authentication feedback | Generic error: "Invalid username or password"; no username existence disclosure | Implemented | Free |

## SC — System and Communications Protection

| 800-171 ID | Control | Weaver Implementation | Status | Tier |
|-------------|---------|----------------------|--------|------|
| 3.13.1 | Monitor/control communications at boundaries | Network topology API; bridge isolation for MicroVMs; firewall rules (Weaver) | Implemented | Solo+ |
| 3.13.5 | Implement subnetworks for CUI components | MicroVM bridge isolation (\`br-microvm\`); per-VM networking with TAP interfaces | Implemented | Solo+ |
| 3.13.8 | Implement cryptographic mechanisms for CUI in transit | HSTS max-age 31536000 with includeSubDomains; TLS termination at nginx reverse proxy | Implemented (deployer configures TLS) | Solo+ (manual TLS), Team+ (auto-TLS) |
| 3.13.10 | Establish and manage cryptographic keys | Encrypted secret management at rest via sops-nix; JWT signing keys | Planned | Solo+ |
| 3.13.11 | Employ FIPS-validated cryptography | bcrypt for passwords; JWT HS256/RS256; TLS 1.2+ at nginx layer | Deployer Responsibility (FIPS-mode OpenSSL) | Solo+ |
| 3.13.15 | Protect authenticity of communications | CORS: same-origin in production (no wildcard); CSP frame-ancestors 'none'; X-Frame-Options DENY | Implemented | Free |
| 3.13.16 | Protect CUI at rest | Encrypted secret management via sops-nix; NixOS declarative filesystem permissions | Planned | Solo+ |

## SI — System and Information Integrity

| 800-171 ID | Control | Weaver Implementation | Status | Tier |
|-------------|---------|----------------------|--------|------|
| 3.14.1 | Identify and remediate flaws | \`npm audit\` in CI; SHA-pinned GitHub Actions (44/44); pre-release security audit checklist | Implemented | Free |
| 3.14.2 | Provide protection from malicious code | Zod input validation on all API endpoints; command injection prevention (\`execFileAsync\`, no \`shell: true\`) | Implemented | Free |
| 3.14.3 | Monitor security alerts | Dependabot alerts enabled; \`npm run test:security\` in pre-push hooks | Implemented | Free |
| 3.14.6 | Monitor system security | Health endpoint (\`GET /api/health\`); systemd service management; WebSocket real-time status | Implemented | Free |
| 3.14.7 | Identify unauthorized use | Audit log captures all auth events; account lockout on repeated failures | Implemented | Free |

## CM — Configuration Management

| 800-171 ID | Control | Weaver Implementation | Status | Tier |
|-------------|---------|----------------------|--------|------|
| 3.4.1 | Establish and maintain baseline configurations | NixOS declarative configuration; git-tracked flake.nix; reproducible builds | Implemented | Free |
| 3.4.2 | Establish and enforce security configuration settings | Security baselines document (NIST 800-63B / OWASP ASVS 4.0); automated \`audit:security\` threshold checks | Implemented | Free |
| 3.4.5 | Define and enforce access restrictions for change | Git-based change control; pre-commit lint + typecheck hooks; pre-push security audit | Implemented | Free |
| 3.4.6 | Employ least functionality | No default credentials; mock mode auto-activates without API keys; minimal service surface | Implemented | Free |
| 3.4.8 | Apply deny-by-exception (blacklist) policy to prevent use of unauthorized software or deny-all, permit-by-exception (whitelist) policy to allow the execution of authorized software | **Private Nix Cache + Approved Packages (Decision #147).** Attic-based substituter cache with manually-curated allowlist — no software can execute on approved hosts unless the derivation hash is in the approval table. Add-only signing-key rotation + audit log of every approval/revocation. Shed Builder (Decision #149) provides custom software ingestion with two-person rule at Team+ for binary drops (separation-of-duties per 3.1.4). | Planned (v2.3.0) | Weaver Team+ |

## MP — Media Protection

| 800-171 ID | Control | Weaver Implementation | Status | Tier |
|-------------|---------|----------------------|--------|------|
| 3.8.1 | Protect CUI on system media | Encrypted secret management at rest on NixOS hosts via sops-nix | Planned | Solo+ |
| 3.8.6 | Implement cryptographic mechanisms for CUI on portable media | NixOS filesystem encryption (deployer responsibility); encrypted secret management for application secrets | Planned / Deployer Responsibility (disk encryption) | Solo+ |

---

**Cross-reference:** [SECURITY-BASELINES.md](../SECURITY-BASELINES.md) for threshold values and standards citations.
`,Wr=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->

# HIPAA Section 164.312 Technical Safeguards Mapping

**Date:** 2026-04-01
**Scope:** Weaver v1.0 — single-host NixOS workload isolation manager. This mapping covers Technical Safeguards only (Section 164.312). Administrative Safeguards (Section 164.308) and Physical Safeguards (Section 164.310) are organizational responsibilities, not software controls.

> **Disclaimer:** This document maps Weaver's technical controls to HIPAA Section 164.312 requirements. It is not a certification claim. Covered entities must verify controls against their specific compliance requirements and conduct their own risk analysis per Section 164.308(a)(1).

## Section 164.312(a) — Access Control

| Requirement | HIPAA Spec | Weaver Implementation | Status | Tier |
|-------------|-----------|----------------------|--------|------|
| Unique User Identification | 164.312(a)(2)(i) Required | Unique username per user account; first-run admin setup (no shared/default credentials); user ID in all audit entries | Implemented | Free |
| Emergency Access Procedure | 164.312(a)(2)(ii) Required | \`scripts/reset-admin-password.sh\` (requires root/sudo access to host); NixOS declarative config enables system recovery | Implemented | Free |
| Automatic Logoff | 164.312(a)(2)(iii) Addressable | Access token TTL: 15 minutes max; refresh token TTL: 7 days max with one-time-use rotation; idle session timeout (15 min, server-side) | Implemented | Free |
| Encryption and Decryption | 164.312(a)(2)(iv) Addressable | Encrypted secret management at rest via sops-nix; TLS for data in transit (nginx layer); bcrypt for stored passwords | Planned / Deployer Responsibility (TLS at nginx) | Free (bcrypt), Solo+ (sops-nix, TLS) |

## Section 164.312(b) — Audit Controls

| Requirement | HIPAA Spec | Weaver Implementation | Status | Tier |
|-------------|-----------|----------------------|--------|------|
| Implement audit mechanisms | 164.312(b) Required | Comprehensive audit log: login success/failure, logout, password change, role change, user create/delete, workload start/stop/restart | Implemented | Free |
| Record examination activity | 164.312(b) Required | All audit entries include: timestamp, authenticated user ID, action type, target resource, source IP | Implemented | Free |
| Audit log access control | 164.312(b) Required | Audit log queryable only by Admin/Operator roles via \`GET /api/audit\`; no delete/modify API exposed | Implemented | Free |
| Audit log retention | 164.312(b) Required | Log persistence to disk; retention period configurable by deployer | Deployer Responsibility (retention policy) | Free |

## Section 164.312(c) — Integrity

| Requirement | HIPAA Spec | Weaver Implementation | Status | Tier |
|-------------|-----------|----------------------|--------|------|
| Protect ePHI from improper alteration/destruction | 164.312(c)(1) Required | Zod schema validation on all API inputs; path traversal prevention; command injection prevention (\`execFileAsync\` with argument arrays) | Implemented | Free |
| Software integrity verification on ePHI-processing systems | 164.312(c)(1) Required | **Private Nix Cache + Approved Packages (Decision #147).** Attic-based substituter cache with signed derivations — software installed on ePHI-processing hosts has verified integrity and approved origin. Add-only signing-key rotation; tamper-evident approval audit log. Shed Builder (Decision #149) with two-person rule at Team+ for binary drops prevents unauthorized software introduction that could alter or destroy ePHI processing integrity. | Planned (v2.3.0) | Weaver Team+ |
| Authenticate ePHI | 164.312(c)(2) Addressable | All data modifications require authenticated JWT; role-based write permissions; audit trail for all changes | Implemented | Free |

**Note:** Weaver manages workload infrastructure, not ePHI directly. ePHI integrity within workloads (VMs/containers) is the deployer's responsibility. Weaver ensures the management plane cannot be used to tamper with workload data.

## Section 164.312(d) — Person or Entity Authentication

| Requirement | HIPAA Spec | Weaver Implementation | Status | Tier |
|-------------|-----------|----------------------|--------|------|
| Verify identity of persons seeking access | 164.312(d) Required | JWT authentication with bcrypt (cost 13); 14-character minimum password with complexity requirements (NIST 800-63B) | Implemented | Free |
| Multi-factor authentication | 164.312(d) Required | Multi-factor authentication (MFA) | Planned | Solo+ |
| Account lockout | 164.312(d) Required | Lockout after 5 failed attempts within 15 minutes; progressive delay (1s at 3, 3s at 4 attempts) | Implemented | Free |
| Timing-safe authentication | 164.312(d) Required | Constant-time bcrypt comparison on missing users prevents user enumeration; generic error messages only | Implemented | Free |
| Single-session enforcement | 164.312(d) Required | Last login revokes prior sessions (configurable; disabled in test mode for parallel E2E) | Implemented | Free |

## Section 164.312(e) — Transmission Security

| Requirement | HIPAA Spec | Weaver Implementation | Status | Tier |
|-------------|-----------|----------------------|--------|------|
| Integrity controls for transmitted ePHI | 164.312(e)(1) Required | HSTS max-age 31536000 with includeSubDomains; CSP headers; CORS same-origin in production | Implemented | Free |
| Encryption of transmitted ePHI | 164.312(e)(2)(ii) Addressable | TLS termination at nginx reverse proxy; Weaver sets HSTS to enforce HTTPS | Deployer Responsibility (TLS certificate + nginx config) | Solo+ (manual TLS), Team+ (auto-TLS) |
| WebSocket security | 164.312(e)(2)(ii) Addressable | WebSocket (\`/ws/status\`) requires authenticated connection; same-origin policy applies | Implemented | Free |

## Deployer Responsibilities Summary

Weaver provides the application-level controls listed above. The following are outside Weaver's scope and must be configured by the deployer:

| Area | Deployer Action Required |
|------|-------------------------|
| TLS certificates | Configure nginx with valid TLS certificates for HTTPS termination |
| Disk encryption | Enable NixOS LUKS or equivalent full-disk encryption for ePHI at rest |
| Backup and recovery | Implement backup procedures for workload data and Weaver configuration |
| Network segmentation | Configure host firewall and network isolation appropriate to the environment |
| Log retention | Configure audit log retention period per organizational policy (HIPAA requires 6 years) |
| Physical security | Physical access controls to the NixOS host are organizational responsibilities |
| BAA | Execute Business Associate Agreement with whizBANG Developers LLC if applicable |

---

**Cross-reference:** [SECURITY-BASELINES.md](../SECURITY-BASELINES.md) for threshold values and standards citations.
`,Gr=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->

# PCI DSS v4.0 Control Mapping

**Date:** 2026-04-01
**Scope:** Weaver v1.0 — single-host NixOS workload isolation manager. This mapping covers PCI DSS v4.0 requirements relevant to infrastructure management software. Requirements related to payment processing, cardholder data handling, and physical security are outside Weaver's scope.

> **Disclaimer:** This document maps Weaver's technical controls to PCI DSS v4.0 requirements. It is not a certification claim. Merchants and service providers must verify controls against their specific PCI DSS scope and conduct their own assessments with a QSA.

## Requirement 2 — Apply Secure Configurations

| PCI DSS ID | Requirement | Weaver Implementation | Status | Tier |
|------------|------------|----------------------|--------|------|
| 2.2.1 | Develop configuration standards | NixOS declarative configuration (\`flake.nix\`); security baselines document (NIST 800-63B / OWASP ASVS 4.0); reproducible builds | Implemented | Free |
| 2.2.2 | Manage vendor default accounts | No default credentials; first-run setup requires creating initial admin account; \`setup-required\` endpoint detects unconfigured state | Implemented | Free |
| 2.2.5 | Remove unnecessary services/functions | Minimal attack surface: mock mode activates without API keys; NixOS minimal service profile; body limit 1MB | Implemented | Free |
| 2.2.7 | Encrypt non-console administrative access | HSTS enforced; all management via authenticated HTTPS API; WebSocket requires authentication | Implemented (deployer configures TLS) | Solo+ (manual TLS), Team+ (auto-TLS) |

## Requirement 3 — Protect Stored Account Data

| PCI DSS ID | Requirement | Weaver Implementation | Status | Tier |
|------------|------------|----------------------|--------|------|
| 3.5.1 | Protect stored cryptographic keys | Encrypted secret management at rest on NixOS hosts via sops-nix; JWT signing keys in application config | Planned | Solo+ |
| 3.5.1.2 | Restrict access to cryptographic keys | NixOS filesystem permissions; service runs as dedicated user; secrets accessible only by service account | Implemented (NixOS) / Planned | Solo+ |

**Note:** Weaver does not store, process, or transmit cardholder data. These controls apply to Weaver's own secrets (JWT keys, API keys). Cardholder data protection within workloads is the deployer's responsibility.

## Requirement 6 — Develop and Maintain Secure Systems

| PCI DSS ID | Requirement | Weaver Implementation | Status | Tier |
|------------|------------|----------------------|--------|------|
| 6.2.1 | Secure development lifecycle | Pre-commit lint + typecheck; pre-push security audit; 18 static compliance auditors; E2E test suite | Implemented | Free |
| 6.2.3 | Review custom code before release | Pre-release security audit checklist: dependency audit, source scan, git history verification, red team review | Implemented | Free |
| 6.2.4 | Prevent common coding vulnerabilities | Zod input validation on all API endpoints; command injection prevention (\`execFileAsync\`, no \`shell: true\`); path traversal defense; error sanitization | Implemented | Free |
| 6.3.1 | Identify security vulnerabilities | \`npm audit\` in CI pipeline; Dependabot alerts; SHA-pinned GitHub Actions (44/44); \`npm run test:security\` in pre-push | Implemented | Free |
| 6.3.2 | Maintain inventory of custom software | \`package.json\` with \`engines\` field (Node >= 18, npm >= 9); lock files tracked in git; SBOM via npm | Implemented | Free |
| 6.4.1 | Protect public-facing web applications | CSP (script-src no unsafe-inline/eval); CORS same-origin in production; X-Frame-Options DENY; Helmet security headers; rate limiting | Implemented | Free |
| 6.4.2 | Detect and prevent web-based attacks | Zod schema validation rejects malformed input; rate limiting on all routes; body size limit 1MB | Implemented | Free |
| 6.4.5 | Changes to critical software are documented and approved | **Private Nix Cache + Approved Packages (Decision #147).** Every software package installable on hosts requires explicit admin approval via Shed "Approved Packages" catalog. Approval records are append-only in SQLite with uploader identity, approver identity, timestamp, attestation metadata (declared origin, scan results, risk acknowledgment). Add-only signing-key rotation provides audit-integrity for the approval chain. Shed Builder (Decision #149) with two-person rule at Team+ for binary drops satisfies separation-of-duties expected in PCI DSS change-management workflows. | Planned (v2.3.0) | Weaver Team+ |

## Requirement 11 — Test Security of Systems and Networks Regularly

| PCI DSS ID | Requirement | Weaver Implementation | Status | Tier |
|------------|------------|----------------------|--------|------|
| 11.5.1 | Deploy change-detection mechanism to alert personnel to unauthorized modification of critical files | **Private Nix Cache + Approved Packages (Decision #147).** Signed approved-package cache + add-only key rotation provides file-integrity monitoring for software installed on in-scope systems. Any derivation not matching an approved signed hash is rejected at install time — equivalent to FIM alerting on unauthorized changes, but preventive rather than detective. Git-based declarative config provides change-detection for host configuration; \`cache.build\` / \`cache.fetch\` audit events record every software-install event. | Planned (v2.3.0) | Weaver Team+ |

## Requirement 7 — Restrict Access by Business Need to Know

| PCI DSS ID | Requirement | Weaver Implementation | Status | Tier |
|------------|------------|----------------------|--------|------|
| 7.2.1 | Access control model defined | Three roles: Admin (full), Operator (workload management), Viewer (read-only); documented in DEVELOPER-GUIDE | Implemented | Free |
| 7.2.2 | Access assigned based on job function | \`requireRole()\` middleware enforces role on every route; per-VM ACLs for fine-grained access (Fabrick) | Implemented | Free (RBAC), Fabrick (per-VM ACLs) |
| 7.2.5 | Access rights reviewed periodically | User management UI (\`GET /api/users\`); Admin can view/modify all user roles | Implemented (tooling provided; review schedule is deployer responsibility) | Free |

## Requirement 8 — Identify Users and Authenticate Access

| PCI DSS ID | Requirement | Weaver Implementation | Status | Tier |
|------------|------------|----------------------|--------|------|
| 8.2.1 | Unique ID for each user | Unique username required; no shared accounts; user ID in all audit entries | Implemented | Free |
| 8.2.2 | Shared/group accounts prohibited | First-run setup creates named admin; no anonymous or shared access paths | Implemented | Free |
| 8.3.1 | Authenticate all user access | JWT required for all API and WebSocket connections; no unauthenticated routes except health and setup-required | Implemented | Free |
| 8.3.4 | Limit repeated access attempts | Account lockout after 5 failures within 15 minutes; progressive delay at 3+ attempts | Implemented | Free |
| 8.3.6 | Minimum password complexity | 14+ characters; upper + lower + digit + special character (exceeds PCI DSS 12-char minimum) | Implemented | Free |
| 8.3.9 | Passwords changed at least every 90 days | Password change API available; enforced expiry is deployer policy | Deployer Responsibility | Free |
| 8.4.2 | MFA for access to CDE | Multi-factor authentication (MFA) | Planned | Solo+ |
| 8.6.1 | System/service account management | NixOS dedicated service user; minimal filesystem permissions; no interactive login | Implemented | Free |

## Requirement 10 — Log and Monitor All Access

| PCI DSS ID | Requirement | Weaver Implementation | Status | Tier |
|------------|------------|----------------------|--------|------|
| 10.2.1 | Audit logs capture access events | All auth events logged: login success/failure, logout, password change, role change, user create/delete | Implemented | Free |
| 10.2.1.2 | Log all actions by admin accounts | All API actions audited regardless of role; admin actions explicitly logged | Implemented | Free |
| 10.2.1.5 | Log all changes to authentication mechanisms | Password changes, role changes, user creation/deletion logged with user ID and timestamp | Implemented | Free |
| 10.2.2 | Log fields include required data | Timestamp, user ID, event type, target resource, source context | Implemented | Free |
| 10.3.1 | Protect audit logs from modification | No audit log delete/modify API; logs accessible read-only to Admin/Operator | Implemented | Free |
| 10.4.1 | Review logs at least daily | Audit log queryable via API with filtering; automated alerting is deployer responsibility | Implemented (query tool) / Deployer Responsibility (review schedule) | Free |

---

**Cross-reference:** [SECURITY-BASELINES.md](../SECURITY-BASELINES.md) for threshold values and standards citations.
`,Kr=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->

# CIS Benchmark Alignment — NixOS Hosts Running Weaver

**Date:** 2026-04-01
**Scope:** Weaver v1.0 on NixOS hosts. Mapped against CIS Benchmarks for Linux (Level 1 and Level 2). Controls are categorized by who provides them: NixOS (declarative OS), Weaver (application), or Deployer (site-specific configuration).

> **Disclaimer:** This document maps Weaver's deployment posture to CIS Benchmark recommendations for Linux. It is not a certification claim. NixOS does not have an official CIS Benchmark profile; this mapping uses the general Linux benchmark as a reference. Deployers should verify controls against their specific environment.

## Filesystem Configuration

| CIS Control | Description | Implementation | Owner | Status | Tier |
|-------------|------------|----------------|-------|--------|------|
| 1.1.1 | Disable unused filesystems | NixOS: unused kernel modules not loaded by default; declarative module system | NixOS | Implemented | Free |
| 1.1.2-1.1.5 | Separate partitions for /tmp, /var, /home | NixOS: configurable via \`fileSystems\` declaration; not enforced by default | Deployer | Deployer Responsibility | Free |
| 1.1.8 | noexec on removable media | NixOS: declarative mount options; Weaver does not mount external media | NixOS / Deployer | Deployer Responsibility | Free |
| 1.4.1 | Ensure bootloader password | NixOS: GRUB password configurable via \`boot.loader.grub.extraConfig\` | Deployer | Deployer Responsibility | Free |

## User Accounts and Authentication

| CIS Control | Description | Implementation | Owner | Status | Tier |
|-------------|------------|----------------|-------|--------|------|
| 5.2.1 | Ensure sudo is installed | NixOS: sudo included; Weaver uses configurable \`SUDO_PATH\` (NixOS: \`/run/wrappers/bin/sudo\`) | NixOS | Implemented | Free |
| 5.2.2 | Ensure sudo commands use pty | NixOS: configurable via \`security.sudo.extraConfig\` | Deployer | Deployer Responsibility | Free |
| 5.3.1 | Ensure password creation requirements | Weaver: 14+ characters, 4 character classes (exceeds CIS minimum); enforced server-side via Zod validation | Weaver | Implemented | Free |
| 5.3.2 | Ensure lockout for failed attempts | Weaver: 5 attempts / 15 minutes; progressive delay at 3+ attempts | Weaver | Implemented | Free |
| 5.4.1 | Dedicated service account | NixOS module creates dedicated \`weaver\` service user; no interactive login shell | NixOS + Weaver | Implemented | Free |
| 5.4.2 | No default/shared accounts | Weaver: first-run setup (no default credentials); unique username per user | Weaver | Implemented | Free |
| 5.4.4 | Default group for root | NixOS: standard Linux group model; Weaver service user has minimal group membership | NixOS | Implemented | Free |

## Logging and Auditing

| CIS Control | Description | Implementation | Owner | Status | Tier |
|-------------|------------|----------------|-------|--------|------|
| 4.1.1 | Ensure auditing is enabled | NixOS: systemd journal enabled by default; Weaver: application-level audit log for all auth and workload events | NixOS + Weaver | Implemented | Free |
| 4.1.2 | Audit log storage | NixOS: journald persistent storage configurable; Weaver: audit log persisted to disk | NixOS + Deployer | Implemented (Weaver) / Deployer Responsibility (journald retention) | Free |
| 4.1.3 | Audit privileged commands | Weaver: all sudo/system commands logged server-side with full arguments; audit log captures workload actions | Weaver | Implemented | Free |
| 4.1.4-4.1.11 | Audit file access and modifications | NixOS: \`auditd\` configurable via \`security.audit\`; Weaver does not modify host files outside its data directory | Deployer | Deployer Responsibility | Free |
| 4.2.1 | Configure log shipping | NixOS: journald forwarding configurable; Weaver audit log is queryable via API for SIEM integration | Deployer | Deployer Responsibility | Free |

## Network Configuration

| CIS Control | Description | Implementation | Owner | Status | Tier |
|-------------|------------|----------------|-------|--------|------|
| 3.1.1 | Ensure IP forwarding is disabled (if not router) | NixOS: disabled by default; Weaver enables forwarding only for MicroVM bridge (\`br-microvm\`) | NixOS + Weaver | Implemented (scoped to bridge) | Solo+ |
| 3.1.2 | Ensure packet redirect not accepted | NixOS: sysctl configurable declaratively | Deployer | Deployer Responsibility | Free |
| 3.4.1 | Ensure firewall is installed/active | NixOS: \`networking.firewall.enable = true\` by default; Weaver NixOS module configures required port exceptions | NixOS + Weaver | Implemented | Free |
| 3.4.2 | Ensure default deny firewall policy | NixOS firewall: default deny; only explicitly opened ports allowed | NixOS | Implemented | Free |
| 3.4.3 | Ensure loopback traffic restricted | NixOS firewall: loopback allowed by default; external traffic filtered | NixOS | Implemented | Free |
| 3.5.1 | Bridge network isolation | Weaver: MicroVM bridge (\`br-microvm\`) with per-VM TAP interfaces; \`iptables\` rules for inter-VM isolation | Weaver | Implemented | Solo+ |
| 3.5.2 | CORS and origin validation | Weaver: CORS same-origin in production; explicit \`CORS_ORIGIN\` required for reverse proxy setups | Weaver | Implemented | Free |

## Access Control

| CIS Control | Description | Implementation | Owner | Status | Tier |
|-------------|------------|----------------|-------|--------|------|
| 5.1.1 | Ensure cron daemon is enabled | NixOS: cron/timer services declarative; Weaver does not use cron (systemd timers if needed) | NixOS | N/A (Weaver uses systemd) | Free |
| 5.1.8 | Restrict cron to authorized users | NixOS: declarative; Weaver service has no cron jobs | NixOS | N/A | Free |
| 5.2.4 | Restrict SSH access | NixOS: \`services.openssh\` configurable; key-only auth recommended; Weaver does not manage SSH | Deployer | Deployer Responsibility | Free |
| 5.2.5 | Ensure SSH idle timeout | NixOS: \`services.openssh.extraConfig\` for \`ClientAliveInterval\` | Deployer | Deployer Responsibility | Free |
| 5.2.15 | Ensure SSH access is limited | NixOS: \`AllowUsers\`/\`AllowGroups\` configurable declaratively | Deployer | Deployer Responsibility | Free |

## NixOS-Specific Advantages

NixOS provides several CIS-aligned properties by design that traditional Linux distributions require manual hardening for:

| Property | CIS Benefit |
|----------|------------|
| Declarative configuration | All system state defined in code; drift detection is trivial (diff \`configuration.nix\`) |
| Reproducible builds | Same configuration produces identical system; no undocumented manual changes |
| Atomic upgrades/rollbacks | Failed updates roll back automatically; no partial-upgrade states |
| Immutable system paths | \`/nix/store\` is read-only; system binaries cannot be tampered with at runtime |
| Minimal base install | NixOS includes only explicitly declared packages; no hidden default services |
| Git-tracked configuration | Full audit trail of every system change via version control |

---

**Cross-reference:** [SECURITY-BASELINES.md](../SECURITY-BASELINES.md) for application-level threshold values and standards citations.
`,qr=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->

# CIS Controls v8.1 Mapping — Weaver

**Date:** 2026-04-15
**Scope:** Weaver v1.0 — single-host NixOS workload isolation manager (containers + MicroVMs). This doc maps Weaver capabilities to the CIS Critical Security Controls v8.1, the top-18 framework that replaced the older CIS Top 20.

> **Disclaimer:** This document is a best-effort technical mapping, not a certification claim. CIS Controls are organizational — each control requires both technical implementation AND organizational policy/process. Weaver provides infrastructure-level technical implementation for 10 of the 18 controls; the remaining 8 are either partial/supporting or fall outside Weaver's scope (people/process/endpoint-specific). Buyers should verify controls against their specific compliance requirements.

> **Framework distinction:** CIS Controls (the top-18 framework) is different from [CIS Benchmarks](CIS-BENCHMARK-ALIGNMENT.md) (Linux hardening checklists). Both are CIS products; they address different layers. Weaver maps to both — this file covers Controls; the sibling file covers Benchmarks.

## Implementation Groups (IG1/IG2/IG3)

CIS Controls v8.1 tiers safeguards by Implementation Group — IG1 for basic cyber hygiene, IG2 for risk-informed organizations, IG3 for mature security programs. This mapping notes the IG level per safeguard where relevant. Weaver supports all three IG levels across applicable controls.

---

## Control 1 — Inventory and Control of Enterprise Assets

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 1.1 | Establish and maintain detailed enterprise asset inventory | NixOS declarative configuration IS the asset inventory. Every VM, container, bridge, IP pool, and resource is declared in \`configuration.nix\` / flake. Workload Page shows all declared and running assets | Implemented | Free |
| 1.2 | Address unauthorized assets | Zero-drift architecture — unauthorized assets cannot run unless declared. NixOS activation rejects undeclared system state | Implemented | Free |
| 1.3 | Utilize an active discovery tool | Network topology API + bridge introspection; \`weaver-observer\` for non-NixOS host discovery (v2.4 fleet discovery wizard) | Partial (v1.0) · Implemented fleet (v2.4) | Free (local), Fabrick (fleet) |
| 1.4 | Use DHCP logging to update enterprise asset inventory | Managed bridges with declarative IP pools; DHCP lease visibility via bridge status | Partial | Weaver Team+ |

## Control 2 — Inventory and Control of Software Assets

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 2.1 | Establish and maintain a software inventory | **Approved Packages catalog (Decision #147).** Every software package installable on approved hosts is recorded with derivation hash, approver, timestamp, attestation metadata. Query-able via \`GET /api/cache/approvals\` and Shed "Approved Packages" page. | Planned (v2.3.0) | Weaver Team+ |
| 2.2 | Ensure authorized software is currently supported | Approval records include declared-origin attestation (vendor, source URL). v3.1 automated pipeline adds CVE scan + SBOM extraction to flag unsupported software | Planned (v2.3.0 basic, v3.1 automated) | Weaver Team+ |
| 2.3 | Address unauthorized software | **Private Nix Cache (Decision #147)** locks host \`nix.settings.substituters\` to the private cache — unauthorized (unapproved) software cannot be installed because the derivation hash isn't in the signed allowlist. Deny-by-default at install time, not detect-after-the-fact | Planned (v2.3.0) | Weaver Team+ |
| 2.4 | Utilize automated software inventory tools | NixOS declarative config + Approved Packages table is the software inventory; queryable programmatically | Planned (v2.3.0) | Weaver Team+ |
| 2.5 | Allowlist authorized software | **Exact match.** Approved Packages allowlist (Decision #147) with manual approval at Solo/Team entry, automated approval pipeline at v3.1/v3.2 | Planned (v2.3.0) | Weaver Team+ |
| 2.6 | Allowlist authorized libraries | v3.1 SBOM extraction (Decision #149 Shed Builder automated pipeline) identifies library dependencies; approval applies at derivation level | Planned (v3.1.0) | Fabrick |
| 2.7 | Allowlist authorized scripts | **Shed Builder Lane 4 (Decision #149)** handles native Nix derivations — scripts installed via the cache are subject to the same approval flow | Planned (v2.3.0) | Weaver Team+ |

## Control 3 — Data Protection

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 3.1 | Establish and maintain data management process | Weaver manages workload infrastructure, not application data directly. Declarative config documents where data lives (per-VM disk paths, bind mounts, storage pool references) | Partial (infrastructure layer) | Free |
| 3.3 | Configure data access control lists | Per-VM RBAC; tier-gated access; audit log for all data-access infrastructure events | Implemented | Fabrick (per-VM ACLs) |
| 3.6 | Encrypt data on end-user devices | NixOS LUKS full-disk encryption (deployer responsibility). Weaver does not manage endpoint devices | Deployer Responsibility | Free |
| 3.11 | Encrypt sensitive data at rest | sops-nix for application secrets; NixOS LUKS for disk encryption (deployer) | Planned (sops-nix) / Deployer (disk) | Solo+ |

## Control 4 — Secure Configuration of Enterprise Assets and Software

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 4.1 | Establish and maintain a secure configuration process | **NixOS declarative configuration IS the secure configuration process.** Every setting is declared in code, git-tracked, change-controlled. Zero drift means configured state equals running state | Implemented | Free |
| 4.2 | Establish and maintain a secure configuration for network infrastructure | Managed bridges (Decision #32); declarative firewall rules (v1.2); network topology in code | Implemented | Solo+ |
| 4.4 | Implement and manage a firewall on servers | NixOS firewall default-deny; Weaver firewall plugin (v1.2) for per-VM policy | Implemented (v1.0 host), Solo+ (per-VM) | Free (host), Solo+ (per-VM) |
| 4.5 | Implement and manage a firewall on end-user devices | N/A — Weaver is infrastructure, not endpoint | N/A | — |
| 4.6 | Securely manage enterprise assets and software | Zero-drift declarative config; git-tracked change control; reproducible builds | Implemented | Free |
| 4.7 | Manage default accounts | First-run admin setup (no default credentials, Decision #30); dedicated \`weaver\` service user with no interactive shell | Implemented | Free |
| 4.8 | Uninstall or disable unnecessary services | NixOS least-functionality by construction — only declared services run. Nothing installs unless declared | Implemented | Free |
| 4.9 | Configure trusted DNS servers | DNS plugin (v1.1) with declarative zone configuration | Implemented | Solo+ |

## Control 5 — Account Management

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 5.1 | Establish and maintain an inventory of accounts | User list API (\`GET /api/users\`); RBAC roles; audit log tracks all account lifecycle events | Implemented | Free |
| 5.2 | Use unique passwords | 14+ character complex passwords required (NIST 800-63B); bcrypt cost 13; password reuse prevention | Implemented | Free |
| 5.3 | Disable dormant accounts | User deletion API; role change audit trail; deployer responsibility for inactive-user review cadence | Implemented (tooling) / Deployer Responsibility (cadence) | Free |
| 5.4 | Restrict administrator privileges to dedicated administrator accounts | Admin/Operator/Viewer role separation; per-VM ACLs at Fabrick | Implemented | Free (roles), Fabrick (per-VM) |
| 5.5 | Establish and maintain an inventory of service accounts | Dedicated \`weaver\` service user; sops-nix credential management (Solo+) | Implemented | Free (basic), Solo+ (sops-nix) |
| 5.6 | Centralize account management | SSO/SAML/LDAP integration via auth plugin | Planned | Solo+ (v1.2), Fabrick (SAML/LDAP) |

## Control 6 — Access Control Management

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 6.1 | Establish an access granting process | First-run admin setup; role assignment via Users page; audit log of role grants | Implemented | Free |
| 6.2 | Establish an access revoking process | User deletion API; role demotion; password change invalidates all sessions; single-session enforcement | Implemented | Free |
| 6.3 | Require MFA for externally exposed applications | MFA (TOTP/FIDO2) via auth plugin | Planned | Solo+ |
| 6.5 | Require MFA for administrative access | MFA required for Admin role at Solo+ | Planned | Solo+ |
| 6.7 | Centralize access control | SSO/SAML/LDAP integration | Planned | Solo+ / Fabrick |
| 6.8 | Define and maintain role-based access control | Admin/Operator/Viewer roles implemented; per-VM ACLs at Fabrick | Implemented | Free (roles), Fabrick (per-VM) |

## Control 7 — Continuous Vulnerability Management

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 7.1 | Establish and maintain a vulnerability management process | \`npm audit\` in CI; pre-push security hook; SECURITY-AUDIT.md with disposition tracking; 28-auditor compliance suite | Implemented | Free |
| 7.2 | Establish and maintain a remediation process | Dependabot alerts; pre-release security audit checklist; red team audit cadence | Implemented | Free |
| 7.3 | Perform automated operating system patch management | NixOS declarative OS updates — patches are git commits, fleet-wide rollout via Colmena (v2.4). Automated upstream channel bumps | Implemented (single host) · Planned fleet (v2.4) | Solo+ (host), Fabrick (fleet) |
| 7.4 | Perform automated application patch management | Weaver app updates via NixOS module; automatic upgrade on \`nixos-rebuild switch\` | Implemented | Free |
| 7.5 | Perform automated vulnerability scans of internal enterprise assets | SAST auditor (v1.0); pre-release dependency audit | Implemented | Free |
| 7.6 | Perform automated vulnerability scans of externally-exposed enterprise assets | Deployer responsibility (external scanning is outside Weaver scope) | Deployer Responsibility | — |
| 7.7 | Remediate detected vulnerabilities | Git-commit-based patch workflow; SECURITY-AUDIT.md tracks each finding to disposition | Implemented | Free |

## Control 8 — Audit Log Management

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 8.1 | Establish and maintain an audit log management process | **Declarative audit log (Decision #103).** Every auth event, user lifecycle event, workload action, and config change is captured in SQLite audit store. Retention and access policy documented | Implemented | Free |
| 8.2 | Collect audit logs | \`audit-store.ts\` captures: login, logout, password change, role change, user create/delete, workload start/stop/restart, config change, approval (v2.3) | Implemented | Free |
| 8.3 | Ensure adequate audit log storage | SQLite-backed with configurable retention; git-based declarative config change log is append-only by construction | Implemented | Free |
| 8.4 | Standardize time synchronization | NixOS NTP configuration (deployer); timestamps in audit log use UTC | Deployer Responsibility (NTP) · Implemented (UTC) | Free |
| 8.5 | Collect detailed audit logs | Audit entries include: timestamp, user ID, action, target, source IP, outcome | Implemented | Free |
| 8.6 | Collect DNS query audit logs | DNS plugin (v1.1) with query logging at Fabrick | Implemented | Fabrick |
| 8.8 | Collect command-line audit logs | Declarative config is the command-line equivalent — git log captures every config change | Implemented | Free |
| 8.9 | Centralize audit logs | Single Weaver host audit log at v1.0; fleet-wide audit aggregation at v2.4 Fabrick clustering | Implemented (single) · Planned fleet (v2.4) | Free (single), Fabrick (fleet) |

## Control 9 — Email and Web Browser Protections

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| All safeguards | Email and web browser protections | **N/A** — Weaver is infrastructure management, not endpoint/browser protection. Deployers should use dedicated email/browser security tools | N/A | — |

## Control 10 — Malware Defenses

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 10.1 | Deploy and maintain anti-malware software | N/A at host level — Weaver doesn't manage endpoints. **However:** the v2.3 Private Nix Cache (Decision #147) with signed approved-package allowlist provides **preventive** malware defense for software installed on managed hosts — unapproved/unsigned software cannot install. This is a stronger control than detective anti-malware (signature-based) because it's deny-by-default at install time | Partial (v1.0 infrastructure) · Preventive software control (v2.3 Decision #147) | N/A (host AV) · Weaver Team+ (v2.3 prevention) |
| 10.3 | Disable autorun and autoplay for removable media | NixOS: no autorun by default; deployer responsibility for removable media policy | Deployer Responsibility | — |

## Control 11 — Data Recovery

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 11.1 | Establish and maintain a data recovery process | **Decision #148 two-layer backup.** v1.0: declarative NixOS config = infrastructure state reproducible from git. v2.5: encrypted cloud-native backup (6 adapters: local FS, NFS, restic, borg at Solo; S3/Azure/GCS at Team) with retention, file-level restore, integrity verification. v2.7: Fabrick fleet-scale multi-target + cross-site replication + automated test restores | Implemented (infrastructure v1.0) · Planned data layer (v2.5) | Free (v1.0 config) · Weaver Team+ (v2.5 data) |
| 11.2 | Perform automated backups | v2.5 Backup Weaver includes backup job scheduler with systemd timers; per-job retention policies | Planned (v2.5.0) | Solo+ |
| 11.3 | Protect recovery data | AES-256-GCM encryption with client-side key management (sops-nix); integrity verification on write and restore | Planned (v2.5.0) | Solo+ |
| 11.4 | Establish and maintain an isolated instance of recovery data | S3/Azure/GCS off-site copy adapters (Team) + cross-site replication (Fabrick v2.7) | Planned (v2.5 Team) · Planned fleet (v2.7) | Team+ / Fabrick |
| 11.5 | Test data recovery | Automated test restores at v2.7 Fabrick (random backup verification on standby workload, on schedule) | Planned (v2.7.0) | Fabrick |

## Control 12 — Network Infrastructure Management

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 12.1 | Ensure network infrastructure is up-to-date | NixOS declarative network configuration; git-tracked change history; fleet-wide rollout via Colmena (v2.4) | Implemented | Solo+ |
| 12.2 | Establish and maintain a secure network architecture | **Managed bridges (Decision #32, #114)** provide declarative network segmentation; IP pools; zone-aware topology map (Strands at v1.x, Loom at v3.0+) | Implemented | Solo+ |
| 12.3 | Securely manage network infrastructure | Declarative firewall rules (v1.2); Smart Bridges (v2.2+) for automated routing; per-VM network policies | Implemented | Solo+ |
| 12.4 | Establish and maintain architecture diagram(s) | Network topology map (Strands) — live, config-driven, always current. No manual Visio diagrams | Implemented | Free |
| 12.5 | Centralize network authentication, authorization, and auditing (AAA) | Per-VM RBAC; centralized audit log; SSO/SAML/LDAP (Solo+ / Fabrick) | Implemented (roles) · Planned (SSO) | Fabrick |
| 12.6 | Use of secure network management and communication protocols | TLS at nginx; WebSocket over authenticated TLS; internal IPC over Unix sockets | Implemented | Free |
| 12.7 | Ensure remote devices utilize a VPN and are connecting to an enterprise's AAA infrastructure | Tailscale integration for remote access (v1.3); Tailscale MagicDNS for peer discovery (v2.2) | Implemented | Solo+ |
| 12.8 | Establish and maintain dedicated computing resources for all administrative work | Dedicated \`weaver\` service user with minimal permissions; admin role separation; NixOS service isolation | Implemented | Free |

## Control 13 — Network Monitoring and Defense

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 13.1 | Centralize security event alerting | Audit log with real-time WebSocket streaming; AI diagnostics surface anomalies | Implemented | Free |
| 13.2 | Deploy a host-based intrusion detection solution | N/A host-level (deployer responsibility for HIDS). Weaver's zero-drift architecture provides equivalent protection — unauthorized changes are architecturally impossible without a git commit | Partial (zero-drift substitute) / Deployer Responsibility (HIDS) | — |
| 13.3 | Deploy a network intrusion detection solution | Deployer responsibility (NIDS is outside Weaver scope) | Deployer Responsibility | — |
| 13.6 | Collect network traffic flow logs | Bridge flow visibility via Weaver topology; declarative firewall logging | Partial | Solo+ |
| 13.11 | Tune security event alerting thresholds | AI diagnostics + audit log query API for custom alerting | Implemented | Solo+ |

## Control 14 — Security Awareness and Skills Training

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| All safeguards | Security awareness training | **N/A** — this is a people/process control, not a software feature. Organizations using Weaver should run their own security awareness program | N/A | — |

## Control 15 — Service Provider Management

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| All safeguards | Service provider management | **N/A (governance).** Weaver is self-hosted — no cloud service provider relationship. For organizations using Fabrick Cloud (v4.0), WBD publishes its own SOC 2 / SLA documentation. Weaver's open-core code base + NixOS declarative supply chain supports customer due diligence | N/A (infrastructure) | — |

## Control 16 — Application Software Security

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 16.1 | Establish and maintain a secure application development process | Weaver's own development: pre-commit + pre-push hooks, 29 compliance auditors, E2E suite, SAST auditor, red team audit cadence. Public via open-core repo | Implemented | Free |
| 16.2 | Establish and maintain a process to accept and address software vulnerabilities | Published SECURITY.md; GitHub advisory process; Dependabot triage workflow | Implemented | Free |
| 16.4 | Establish and manage an inventory of third-party software components | \`package.json\` + lock files in git; Decision #147 + Shed Builder v2.3 provides the *customer's* software-component inventory at install time | Implemented (Weaver deps) · Planned customer inventory (v2.3.0) | Free (Weaver) · Weaver Team+ (customer) |
| 16.5 | Use up-to-date and trusted third-party software components | Dependabot alerts; SHA-pinned GitHub Actions; lock file review in SECURITY-AUDIT.md. For customer-installed software: Private Nix Cache ensures only approved packages can install (Decision #147) | Implemented (Weaver) · Planned customer side (v2.3.0) | Free / Weaver Team+ |
| 16.9 | Train developers in application security | N/A — customer-side developer training is outside Weaver scope. Weaver's LESSONS-LEARNED.md + KNOWN-GOTCHAS.md provide pattern references for developers building on Weaver | Deployer Responsibility | — |
| 16.11 | Leverage vetted modules or services for application security components | sops-nix for secrets; Nix package manager for dependencies; Fastify + Zod for validation. All published upstream projects with security review | Implemented | Free |

## Control 17 — Incident Response Management

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| 17.1 | Designate personnel to manage incident handling | Deployer responsibility (organizational control) | Deployer Responsibility | — |
| 17.2 | Establish and maintain contact information for reporting security incidents | \`docs/SECURITY.md\` with disclosure contact | Implemented | Free |
| 17.3 | Establish and maintain an enterprise process for reporting incidents | Weaver audit log + AI diagnostics provide incident timeline reconstruction. DFARS 72-hour reporting workflow supported in defense-contractor vertical doc | Implemented (tooling) | Free |
| 17.4 | Establish and maintain an incident response process | **Compromise runbook** (cache-key-compromise-runbook.md — to be written at v2.3 under \`docs/operations/\`) provides cache-key compromise response procedure. Declarative baselines enable rapid forensic comparison | Partial (v1.0 baseline) · Planned runbook (v2.3.0) | Free (baseline) · Weaver Team+ (cache runbook) |
| 17.5 | Assign key roles and responsibilities | Deployer responsibility (organizational) | Deployer Responsibility | — |
| 17.8 | Conduct post-incident reviews | Git-based audit trail provides immutable evidence for post-incident review | Implemented | Free |

## Control 18 — Penetration Testing

| Safeguard | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| All safeguards | Penetration testing program | **N/A (process).** This is an organizational program, not a software feature. Weaver itself is subject to red team audit as part of the release process (see internal development notes on Forge Security Audit Domains). | Deployer Responsibility (customer pen test) | — |

---

## Summary Table

| Control | Weaver Fit | Primary Status | Tier Entry |
|---|---|---|---|
| **1. Asset Inventory** | Exact (declarative = inventory) | Implemented | Free |
| **2. Software Asset Control** | Exact | Planned (v2.3.0) | Weaver Team+ |
| **3. Data Protection** | Partial | Partial / Planned | Solo+ |
| **4. Secure Configuration** | Exact (NixOS) | Implemented | Free |
| **5. Account Management** | Good | Implemented | Free |
| **6. Access Control Management** | Good | Implemented | Free / Fabrick |
| **7. Vulnerability Management** | Good | Implemented | Free |
| **8. Audit Log Management** | Exact (git + audit store) | Implemented | Free |
| **9. Email/Web Protection** | N/A | N/A | — |
| **10. Malware Defenses** | Partial (v2.3 preventive) | Partial / Planned | Weaver Team+ |
| **11. Data Recovery** | Good | Planned (v2.5.0) | Weaver Team+ |
| **12. Network Infrastructure** | Exact | Implemented | Solo+ |
| **13. Network Monitoring** | Decent | Partial | Solo+ |
| **14. Security Awareness** | N/A (people) | N/A | — |
| **15. Service Provider Mgmt** | N/A (governance) | N/A | — |
| **16. Application Software Security** | Good | Implemented / Planned | Free / Weaver Team+ |
| **17. Incident Response** | Partial | Partial / Planned | Free / Weaver Team+ |
| **18. Penetration Testing** | N/A (process) | N/A | — |

**Applicable controls (excluding 5 N/A):** 13
**Implemented at v1.0:** 7 (Controls 1, 4, 5, 6, 7, 8, 12)
**Partial at v1.0 / fully implemented v2.3+:** 6 (Controls 2, 3, 10, 11, 13, 16)
**Full compliance version:** v2.7.0 (after Backup Fabrick fleet-scale ships)

---

**Cross-reference:** [CIS-BENCHMARK-ALIGNMENT.md](CIS-BENCHMARK-ALIGNMENT.md) for OS hardening alignment. CIS Controls (this doc) and CIS Benchmarks are complementary — Controls specify *what* to protect; Benchmarks specify *how* to harden the underlying OS.
`,Jr=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->

# SOC 2 Trust Service Criteria Readiness Mapping

**Date:** 2026-04-01
**Scope:** Weaver v1.0 — single-host NixOS workload isolation manager. This is a readiness mapping, not a SOC 2 report. These controls address Trust Service Criteria (TSC). A SOC 2 Type II audit would verify their operating effectiveness over a review period.

> **Disclaimer:** This document maps Weaver's technical controls to AICPA SOC 2 Trust Service Criteria. It is not a SOC 2 Type I or Type II report. Organizations seeking SOC 2 attestation must engage a licensed CPA firm to perform the audit. This mapping serves as preparation material.

## CC6 — Security (Common Criteria)

### CC6.1 — Logical Access Security

| TSC Point | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| CC6.1.1 | Identify and authenticate users | JWT authentication; bcrypt (cost 13); unique usernames; first-run admin setup (no defaults) | Implemented | Free |
| CC6.1.2 | Manage credentials | 14+ char passwords with complexity; multi-factor authentication (MFA); account lockout (5 attempts / 15 min) | Implemented (passwords) / Planned | Free (passwords, lockout), Solo+ (MFA) |
| CC6.1.3 | Role-based access | Admin/Operator/Viewer roles; \`requireRole()\` middleware on every route; per-VM ACLs (Fabrick) | Implemented | Free (RBAC), Fabrick (per-VM ACLs) |
| CC6.1.4 | Restrict physical access | NixOS host: deployer responsibility; Weaver runs as dedicated service user with minimal filesystem permissions | Deployer Responsibility | Free |
| CC6.1.5 | Remove access when no longer needed | User deletion API (\`DELETE /api/users/:id\`); password change invalidates all sessions | Implemented | Free |

### CC6.2 — System Access Authorization

| TSC Point | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| CC6.2.1 | Authorization prior to access | No anonymous access; all routes require JWT except health and setup-required | Implemented | Free |
| CC6.2.2 | Least privilege | Viewer: read-only; Operator: workload management; Admin: full control including user management | Implemented | Free |
| CC6.2.3 | Review access periodically | User list API for admin review; audit log tracks all role changes | Implemented (tooling) / Deployer Responsibility (review cadence) | Free |

### CC6.3 — Encryption and Key Management

| TSC Point | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| CC6.3.1 | Encrypt data in transit | HSTS max-age 31536000; TLS at nginx; CSP; CORS same-origin in production | Implemented (deployer configures TLS) | Solo+ (manual TLS), Team+ (auto-TLS) |
| CC6.3.2 | Encrypt data at rest | Encrypted secret management for application secrets via sops-nix; NixOS disk encryption (deployer) | Planned / Deployer Responsibility (disk) | Solo+ |
| CC6.3.3 | Protect cryptographic keys | NixOS filesystem permissions; dedicated service user; encrypted key management via sops-nix | Planned | Solo+ |

### CC6.6 — System Boundary Protection

| TSC Point | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| CC6.6.1 | Restrict external access | NixOS firewall default-deny; rate limiting on all Weaver API routes; body size limit 1MB | Implemented | Free |
| CC6.6.2 | Protect against malicious inputs | Zod schema validation on all API inputs; command injection prevention; path traversal defense; error sanitization | Implemented | Free |
| CC6.6.3 | Monitor boundaries | Health endpoint; WebSocket real-time status; audit log for all access events | Implemented | Free |

### CC6.8 — Prevention of Unauthorized or Malicious Software + Vulnerability Management

**Canonical TSC text (AICPA 2017):** *"The entity implements controls to prevent or detect and act upon the introduction of unauthorized or malicious software to meet the entity's objectives."*

| TSC Point | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| CC6.8.1 | Assess vulnerabilities | \`npm audit\` in CI; SHA-pinned GitHub Actions (44/44); pre-release security audit checklist; SAST auditor | Implemented | Free |
| CC6.8.2 | Remediate vulnerabilities | Dependabot alerts; pre-push \`test:security\` hook; known vulns tracked with disposition (SECURITY-AUDIT.md) | Implemented | Free |
| CC6.8.3 | Test security controls | 18 static compliance auditors; E2E test suite; route auth coverage auditor (68 routes) | Implemented | Free |
| CC6.8.4 | Prevent introduction of unauthorized or malicious software | **Private Nix Cache + Approved Packages (Decision #147).** Attic-based substituter cache with manually-curated allowlist — deny-all-permit-by-exception software execution policy. Every derivation hash must be explicitly approved by an admin before any software can install on approved hosts. Add-only signing-key rotation with tamper-evident approval audit log. Shed Builder (Decision #149) custom software ingestion with two-person rule at Team+ for binary drops prevents single-person introduction of unauthorized software (separation-of-duties). v3.1 automated approval pipeline adds CVE scan + SBOM + license + signature verification. Direct implementation of the canonical CC6.8 text above. | Planned (v2.3.0) | Weaver Team+ |

## A1 — Availability

| TSC Point | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| A1.1 | Maintain availability commitments | Health endpoint (\`GET /api/health\`); systemd service with auto-restart; NixOS atomic rollback on failed updates | Implemented | Free |
| A1.2 | Environmental protections | NixOS declarative config ensures reproducible deployments; infrastructure as code | Implemented (software) / Deployer Responsibility (hardware) | Free |
| A1.3 | Backup and recovery | NixOS configuration is git-tracked (full rebuild from source); \`fresh-install\` script for clean-slate recovery; emergency admin password reset | Implemented (config recovery) / Deployer Responsibility (data backup) | Free |

## PI1 — Processing Integrity

| TSC Point | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| PI1.1 | Process data completely and accurately | Zod schema validation on all inputs; typed API responses; WebSocket broadcasts validated state | Implemented | Free |
| PI1.2 | Detect and correct processing errors | Error sanitization: raw system errors logged server-side, user-safe messages returned to clients; health monitoring | Implemented | Free |
| PI1.3 | Input validation | Zod schemas on all request bodies, params, and query strings; VM name regex \`^[a-z][a-z0-9-]*$\`; path traversal prevention | Implemented | Free |
| PI1.4 | Output completeness | Typed API response schemas; Zod response validation (Fastify validates all status codes including errors) | Implemented | Free |

## C1 — Confidentiality

| TSC Point | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| C1.1 | Identify confidential information | Tier gating separates feature access; Weaver/Fabrick features require \`requireTier()\` middleware | Implemented | Free |
| C1.2 | Protect confidential information | RBAC prevents unauthorized access; error sanitization prevents information leakage (no internal paths in responses) | Implemented | Free |
| C1.3 | Dispose of confidential information | User deletion removes account data; workload deletion removes VM configuration | Implemented | Free |
| C1.4 | Restrict access to confidential data | Per-VM ACLs (Fabrick); role-based API access; audit log restricted to Admin/Operator | Implemented | Free (RBAC), Fabrick (per-VM ACLs) |

## Privacy

| TSC Point | Requirement | Weaver Implementation | Status | Tier |
|-----------|------------|----------------------|--------|------|
| P1-P8 | Privacy criteria | N/A — Weaver is infrastructure management software. It does not process, store, or transmit personal information (PII). User accounts contain only username and role. Privacy obligations for data within managed workloads are the deployer's responsibility. | N/A | N/A |

## Audit Evidence Summary

For a SOC 2 Type II audit, the following evidence artifacts exist:

| Evidence Type | Location |
|--------------|----------|
| Security baselines and thresholds | \`docs/security/SECURITY-BASELINES.md\` |
| Automated compliance auditors (18) | \`npm run test:compliance\` |
| Route auth coverage report | \`npm run audit:routes\` (68 routes) |
| Dependency vulnerability tracking | \`npm run test:security\` |
| Pre-release security checklist | \`CLAUDE.md\` Release Checklist |
| Audit log implementation | \`backend/src/routes/\` (auth events) + \`GET /api/audit\` |
| Change management trail | Git history with pre-commit hooks (lint + typecheck + tests) |
| Access control model | RBAC implementation in \`requireRole()\` / \`requireTier()\` |

---

**Cross-reference:** [SECURITY-BASELINES.md](../SECURITY-BASELINES.md) for threshold values and standards citations.
`,Yr=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->

---
runbook: cache-key-compromise
status: draft
version_target: v2.3.0
rehearsal_required: true
decision_refs: ["#147", "#149"]
compliance_refs:
  - framework: NIST 800-171
    controls: ["3.6.1", "3.6.2", "3.6.3"]
  - framework: HIPAA 164.308
    controls: ["(a)(6)(ii)"]
  - framework: CIS Controls v8.1
    controls: ["17.4"]
  - framework: PCI DSS v4.0
    controls: ["12.10.1", "12.10.3"]
  - framework: SOC 2
    controls: ["CC7.3", "CC7.4"]
api_endpoints_referenced:
  - POST /api/cache/keys/compromise
  - POST /api/cache/keys/rotate
  - POST /api/cache/keys/:id/retire
  - GET /api/cache/keys
  - GET /api/cache/health
  - GET /api/audit
systemd_units_referenced:
  - weaver-cache.service
  - weaver-cache-substituter-writer.service
  - attic-server.service
audit_events_referenced:
  - cache.key.compromise
  - cache.key.rotate
  - cache.key.retire
  - cache.approve
  - cache.build
  - cache.fetch
config_keys_referenced:
  - services.weaver.cache.dataDir
  - services.weaver.cache.signingKey.rotation.policy
sops_paths_referenced:
  - /var/lib/weaver/sops/cache-signing-key.age
---

# Runbook: Private Nix Cache Signing Key Compromise

> **⚠ DRAFT — v2.3 feature.** This runbook documents incident response procedures for a cache signing key compromise. The v2.3 Private Nix Cache feature (Decision #147) is planned for v2.3.0 and NOT YET IMPLEMENTED. This runbook will be **rehearsed in dev before v2.3 ship**, and any friction points found during rehearsal will become v2.3 code changes. The authoritative post-v2.3 version will correct any commands that differed from implementation reality.
>
> **Do not rely on this runbook for actual incident response before v2.3 ships.** If you encounter a cache key compromise in a pre-v2.3 environment, there is no private cache feature yet — the system uses standard \`cache.nixos.org\` substituters and no approval allowlist.

---

## 1. Purpose and Scope

This runbook covers **compromise of the Attic signing key used by the Weaver Private Nix Cache (Decision #147)**. A compromise means:

- The private signing key material has been exposed outside sops-nix (leaked, copied, exfiltrated)
- OR: an attacker has gained the ability to sign arbitrary NAR objects with the current active key
- OR: an insider with legitimate key access has been terminated/role-changed and the key must be assumed compromised

**This runbook does NOT cover:**

- Routine key rotation (see \`docs/operations/cache-key-rotation-runbook.md\` — separate runbook)
- Host compromise without key exposure (see generic incident response)
- Non-cache service compromise (JWT signing, sops-nix, TLS — separate runbooks)
- Data breach of backed-up cache contents (see \`docs/operations/backup-incident-runbook.md\` — v2.5 feature)

**Applicability:**

- **Weaver Solo:** single-host private cache; runbook applies to one cache instance
- **Weaver Team:** peer-federated cache (up to 2 peers + primary); runbook applies to the entire peer group — ALL peers must be rotated in coordination
- **FabricK:** fleet-scope caches; runbook applies to each affected cache in the fleet — v2.4 automation will orchestrate multi-cache compromise response

---

## 2. Prerequisites

Before invoking this runbook, confirm:

- **Role:** you have Admin role on the affected Weaver host(s)
- **Access:** SSH to the host, sudo access to the \`weaver\` service user, sops-nix age key access
- **Audit retention:** the audit log has at least 90 days of history for blast-radius analysis
- **Backup:** the Weaver configuration is backed up per \`plans/v2.5.0/EXECUTION-ROADMAP.md\` (Backup Weaver compliance-complete) — if not, you may lose approval records during recovery
- **Communication channel:** you have a secure out-of-band channel (phone, encrypted chat) to coordinate with other admins on Team peer groups
- **Time window:** expect 1–4 hours of downtime for the cache depending on cache size (rehearsal will calibrate actual timing)

**Do NOT start this runbook if:**

- You are a single admin on a Team peer group AND the two-person rule is enabled (\`services.weaver.cache.ingestion.binaryUpload.requireTwoPersonApproval = true\`) — recovery requires a second admin to approve the compromise flow. Contact your organization's secondary admin first.
- You cannot confirm whether this is a real compromise (proceed to Section 3 — Assessment).

---

## 3. Assessment — Is This Actually a Compromise?

Distinguish compromise from other incidents before starting recovery. Compromise is the **highest-cost, slowest** recovery path — don't invoke it unnecessarily.

### 3.1 Compromise indicators (any one triggers runbook)

- [ ] Sops-nix age key file has been accessed by a non-Weaver process (check \`/var/log/audit/audit.log\` for open events on \`/var/lib/weaver/sops/cache-signing-key.age\`)
- [ ] Sops-nix age key file has been copied off the host (network egress to unknown destination from the weaver service account)
- [ ] An unknown signed NAR appears in Attic that was not produced by an approved package build
- [ ] \`cache.build\` audit event references a \`signed_by_key_id\` that doesn't match the currently active key and the key hasn't been rotated recently
- [ ] A former admin (with historical sops-nix access) has been terminated and key material may have been retained
- [ ] Intelligence from a vendor, CERT, or threat-sharing group indicates the signing key has been exposed

### 3.2 NOT compromise (different runbook)

- [ ] Routine rotation interval reached → use the rotation runbook, not this one
- [ ] A dormant key alert fired but investigation shows a legitimate delayed build → see dormant-key triage note
- [ ] A package was approved in error → use the revocation procedure, not compromise

### 3.3 Decision

If any 3.1 indicator is confirmed, **proceed to Section 4**. If only 3.2 indicators are present, **stop this runbook** and invoke the appropriate other runbook. If uncertain, **stop and escalate** — over-invoking compromise is expensive but under-invoking can lose audit evidence.

---

## 4. Incident Response Steps

**Order matters.** Steps are numbered and must execute in sequence. Rollback points are marked with ⏪.

### Step 4.1 — Block new approvals (immediate, < 1 min)

Prevent any new packages from being approved while investigation is underway. This stops the attacker from signing additional malicious content if they still have access.

\`\`\`bash
# Stop accepting new approvals at the API layer
curl -X POST https://{{WEAVER_HOST}}/api/cache/lock \\
  -H "Authorization: Bearer $(cat ~/.weaver/admin-token)" \\
  -H "Content-Type: application/json" \\
  -d '{"reason": "compromise-response", "runbook_step": "4.1"}'
\`\`\`

Expected: HTTP 200 with \`locked_at\` timestamp. Verify in audit log:

\`\`\`bash
curl https://{{WEAVER_HOST}}/api/audit?type=cache.lock -H "Authorization: Bearer $(cat ~/.weaver/admin-token)"
\`\`\`

⏪ **Rollback point:** if assessment is wrong, \`POST /api/cache/unlock\` with the same auth restores approval capability.

### Step 4.2 — Snapshot current state for forensics (5–10 min)

Preserve the audit trail, the current signing key metadata, and the list of objects signed by the compromised key. This snapshot is **compliance evidence** (NIST 800-171 3.6.1 — "establish incident-handling capability") and **forensic input** for post-incident review.

\`\`\`bash
# Export audit log for the last 90 days
curl "https://{{WEAVER_HOST}}/api/audit?type=cache.&limit=10000&since=$(date -d '90 days ago' -Iseconds)" \\
  -H "Authorization: Bearer $(cat ~/.weaver/admin-token)" \\
  > /tmp/weaver-compromise-audit-$(date +%Y%m%d-%H%M%S).json

# List all signing keys (active and retired)
curl https://{{WEAVER_HOST}}/api/cache/keys \\
  -H "Authorization: Bearer $(cat ~/.weaver/admin-token)" \\
  > /tmp/weaver-compromise-keys-$(date +%Y%m%d-%H%M%S).json

# List all objects signed by the compromised key (v2.3: filter by signed_by_key_id)
curl "https://{{WEAVER_HOST}}/api/cache/objects?signed_by_key_id={{COMPROMISED_KEY_ID}}" \\
  -H "Authorization: Bearer $(cat ~/.weaver/admin-token)" \\
  > /tmp/weaver-compromise-objects-$(date +%Y%m%d-%H%M%S).json
\`\`\`

Store these files **outside** the affected host — copy to a separate forensics-dedicated machine or encrypted cloud storage. They are your proof-of-state for the post-incident review.

⏪ **Rollback point:** none — snapshotting is additive, no state change.

### Step 4.3 — Assess blast radius (10–30 min)

How many objects are signed by the compromised key? Which hosts have pulled those objects? Which workloads are running software that was installed from those objects?

\`\`\`bash
# Count affected objects
jq '.objects | length' /tmp/weaver-compromise-objects-*.json

# List downstream pulls (which hosts have fetched compromised objects)
curl "https://{{WEAVER_HOST}}/api/audit?type=cache.fetch&signed_by_key_id={{COMPROMISED_KEY_ID}}" \\
  -H "Authorization: Bearer $(cat ~/.weaver/admin-token)" \\
  | jq '.events[].host' | sort -u
\`\`\`

**Decision point:** if the blast radius includes workloads on hosts outside your immediate control (Team peer, FabricK fleet agents), contact the operators of those hosts via your out-of-band channel BEFORE proceeding to Step 4.4. Coordinated recovery is safer than independent recovery.

⏪ **Rollback point:** none.

### Step 4.4 — Generate new signing key (2 min)

Generate a new key **before** revoking the old one. The new key must exist to sign the re-signed objects in Step 4.5.

\`\`\`bash
curl -X POST https://{{WEAVER_HOST}}/api/cache/keys/rotate \\
  -H "Authorization: Bearer $(cat ~/.weaver/admin-token)" \\
  -H "Content-Type: application/json" \\
  -d '{
    "reason": "compromise-response",
    "incident_id": "{{INCIDENT_ID}}",
    "runbook_step": "4.4"
  }'
\`\`\`

Expected: HTTP 200 with new \`key_id\`, public key, and \`created_at\` timestamp. The new key is added to \`trusted_public_keys\` alongside the compromised key (add-only model — both keys are trusted until Step 4.6 removes the compromised one).

Verify:
- New key appears in \`cache_signing_keys\` table with \`is_active = true\`
- Old (compromised) key is still \`is_active = false\` but present in trust list
- Audit event \`cache.key.rotate\` recorded with \`reason = compromise-response\`

⏪ **Rollback point:** if the new key generation fails or has corrupted material, \`POST /api/cache/keys/:new_id/retire\` removes it from the trust list and deletes its private material. The compromised key is still active — you're back where you started, try again.

### Step 4.5 — Atomic re-sign of affected objects (30 min – 3 hr)

This is the longest step. Every object signed by the compromised key must be re-signed with the new active key. During re-signing, the cache remains available for reads (objects can be pulled) but not for writes (the lock from Step 4.1 is still in effect).

\`\`\`bash
curl -X POST https://{{WEAVER_HOST}}/api/cache/keys/compromise \\
  -H "Authorization: Bearer $(cat ~/.weaver/admin-token)" \\
  -H "Content-Type: application/json" \\
  -d '{
    "compromised_key_id": "{{COMPROMISED_KEY_ID}}",
    "new_key_id": "{{NEW_KEY_ID_FROM_STEP_4_4}}",
    "incident_id": "{{INCIDENT_ID}}",
    "mode": "atomic"
  }'
\`\`\`

Expected: HTTP 202 (accepted, long-running) with a \`job_id\`. Monitor progress:

\`\`\`bash
curl "https://{{WEAVER_HOST}}/api/cache/keys/compromise/{{JOB_ID}}" \\
  -H "Authorization: Bearer $(cat ~/.weaver/admin-token)"
\`\`\`

Status progression: \`queued → running → re-signing-<N>/<total> → finalizing → complete\`.

**Timing calibration (rehearsal will validate):**

- Small cache (<100 objects, ~1 GB): 30 min
- Medium cache (100–1000 objects, 1–10 GB): 1 hr
- Large cache (1000–5000 objects, 10–50 GB): 2–3 hr
- Team peer group: timings multiply by peer count (~2× for Team, 3× for 3-peer group) — federation replication amplifies work

**During re-signing:**

- DO NOT rotate keys again (second rotation during re-sign creates ordering ambiguity)
- DO NOT accept new approvals (still locked from 4.1)
- DO NOT retire the compromised key yet (Step 4.6 handles that after re-sign completes)
- Monitor the \`cache.key.compromise\` audit event stream for progress

⏪ **Rollback point:** if re-sign fails mid-flight, the job reports \`failed\` with a partial-state marker. The cache is left in a "mixed signature" state: some objects re-signed with new key, some still signed with compromised key. **DO NOT retire the compromised key in this state.** Resume with \`POST /api/cache/keys/compromise/:job_id/resume\` or, if resume is not possible, \`POST /api/cache/keys/compromise/:job_id/rollback\` to mark the new key as retired and unlock the cache in its original state. Escalate to WBD support if rollback fails.

### Step 4.6 — Retire the compromised key (1 min)

Once re-sign is complete and all objects reference the new key, remove the compromised key from the trust list. This is **irreversible** — after this step, the compromised key can no longer be used to verify any cached content.

\`\`\`bash
curl -X POST https://{{WEAVER_HOST}}/api/cache/keys/{{COMPROMISED_KEY_ID}}/retire \\
  -H "Authorization: Bearer $(cat ~/.weaver/admin-token)" \\
  -H "Content-Type: application/json" \\
  -d '{
    "reason": "compromise",
    "incident_id": "{{INCIDENT_ID}}",
    "preflight_override": false
  }'
\`\`\`

The retire API runs a **preflight check**: if any object is still signed by this key, the retire is rejected with HTTP 409. If Step 4.5 completed correctly, preflight passes. If it didn't, **STOP** — do not use \`preflight_override: true\` unless WBD support has analyzed the mixed-signature state and determined it's safe.

Expected: HTTP 200 with confirmation that the key is removed from trust list AND sops-nix private material is deleted.

Verify the sops-nix deletion:

\`\`\`bash
# The file should no longer exist
sudo -u weaver test -f /var/lib/weaver/sops/cache-signing-key-{{COMPROMISED_KEY_ID}}.age
echo $?  # Should be 1 (file not found)
\`\`\`

⏪ **Rollback point:** after Step 4.6 completes, there is NO rollback. The compromised key's private material has been physically deleted from sops-nix and cannot be recovered. Any object that was not re-signed in Step 4.5 becomes unverifiable (Nix will reject it at install time).

### Step 4.7 — Unlock approvals (1 min)

Re-enable approvals so normal operations can resume.

\`\`\`bash
curl -X POST https://{{WEAVER_HOST}}/api/cache/unlock \\
  -H "Authorization: Bearer $(cat ~/.weaver/admin-token)" \\
  -H "Content-Type: application/json" \\
  -d '{
    "incident_id": "{{INCIDENT_ID}}",
    "runbook_step": "4.7"
  }'
\`\`\`

Verify by approving a test package (use a known-safe nixpkgs derivation) and confirming the flow works end-to-end.

⏪ **Rollback point:** re-lock with \`POST /api/cache/lock\` if any follow-up issue appears.

### Step 4.8 — Verify Team peer group sync (Team+ only, 5 min)

If this is a Team peer-group cache, verify that all peers have converged on the new key state:

\`\`\`bash
# On each peer in the group, check that:
# 1. The compromised key is NOT in cache_signing_keys table (or has is_active=false AND retired_at set)
# 2. The new key IS in cache_signing_keys with is_active=true
# 3. The approval_records table references only new_key_id for signed_by_key_id on recent entries
curl https://{{PEER_HOST}}/api/cache/keys -H "Authorization: Bearer $(cat ~/.weaver/admin-token)"
curl https://{{PEER_HOST}}/api/cache/health -H "Authorization: Bearer $(cat ~/.weaver/admin-token)"
\`\`\`

If a peer shows the compromised key as still active, the peer federation replication failed — invoke the peer re-sync procedure (separate troubleshooting runbook).

### Step 4.9 — Generate post-incident evidence bundle (10 min)

Collect everything for compliance review:

\`\`\`bash
INCIDENT_DIR=/tmp/weaver-compromise-$(date +%Y%m%d-%H%M%S)
mkdir -p $INCIDENT_DIR
cp /tmp/weaver-compromise-audit-*.json $INCIDENT_DIR/
cp /tmp/weaver-compromise-keys-*.json $INCIDENT_DIR/
cp /tmp/weaver-compromise-objects-*.json $INCIDENT_DIR/

curl "https://{{WEAVER_HOST}}/api/audit?incident_id={{INCIDENT_ID}}" \\
  -H "Authorization: Bearer $(cat ~/.weaver/admin-token)" \\
  > $INCIDENT_DIR/incident-events.json

curl https://{{WEAVER_HOST}}/api/cache/health \\
  -H "Authorization: Bearer $(cat ~/.weaver/admin-token)" \\
  > $INCIDENT_DIR/post-incident-health.json

tar czf $INCIDENT_DIR.tar.gz $INCIDENT_DIR
\`\`\`

Store the evidence bundle per your organization's incident-retention policy. Minimum retention per common compliance frameworks:

- **HIPAA §164.316(b)(2)(i):** 6 years from creation or last effective date
- **PCI DSS 10.5.1:** 1 year with 3 months immediately available
- **NIST 800-171 3.3.1:** per organizational retention schedule
- **CMMC L2:** per §A.03.03.01 (equivalent to 800-171)
- **SOX § 802:** 7 years for audit-related records

---

## 5. Post-Incident Actions (next 24–72 hours)

Actions that must happen after the immediate recovery but are not part of the urgent incident timeline.

### 5.1 — Root-cause analysis

Determine how the key was compromised:

- [ ] sops-nix age key exposure (how? where? who?)
- [ ] Insider access (terminated employee retained key material)
- [ ] Host compromise (attacker gained root)
- [ ] Supply chain (compromised sops-nix dependency)
- [ ] Unknown / undeterminable

Document findings in the incident report. If the root cause is a systemic issue (e.g., sops-nix age key distribution, admin offboarding process), file a follow-up ticket.

### 5.2 — Regulatory reporting (check each framework)

Depending on the data processed by affected workloads and applicable frameworks:

- **HIPAA §164.400 Breach Notification Rule:** if ePHI-processing workloads pulled compromised binaries, this may be a reportable breach. Consult legal. 60 days max to notify affected individuals.
- **DFARS 252.204-7012:** if CUI-processing systems affected, DC3 must be notified within 72 hours. 90-day image preservation applies.
- **PCI DSS 12.10.1:** incident response plan must be followed; card brands notified if CDE affected.
- **GDPR Art. 33:** 72-hour notification to supervisory authority if personal data affected.
- **SEC Cybersecurity Disclosure Rule (2023):** material cybersecurity incidents require 8-K filing within 4 business days for public companies.
- **State breach notification laws:** varies by state; consult legal.

### 5.3 — Re-validate trust list (grep for orphans)

The audit system should flag any \`cache.build\` or \`cache.fetch\` event in the next 90 days that references the retired compromised key. There should be none. If any appear, investigate immediately — it means either (a) the retire didn't propagate correctly, or (b) a replay attack is in progress.

\`\`\`bash
# Weekly check for 90 days post-incident
curl "https://{{WEAVER_HOST}}/api/audit?type=cache.build&signed_by_key_id={{COMPROMISED_KEY_ID}}&since=$(date -d '1 week ago' -Iseconds)" \\
  -H "Authorization: Bearer $(cat ~/.weaver/admin-token)"
\`\`\`

### 5.4 — Update this runbook

If any step surfaced friction, missing commands, or unclear ordering, update this runbook immediately while the experience is fresh. Every rehearsal and every real incident is an opportunity to improve the runbook.

---

## 6. Abort Criteria

Stop this runbook and escalate to WBD support if:

- Step 4.5 (atomic re-sign) fails and rollback also fails
- Step 4.6 (retire) preflight fails unexpectedly (indicates Step 4.5 was incomplete)
- Sops-nix shows key material that shouldn't exist (indicates backup/restore happened mid-incident)
- Team peer group refuses to converge after Step 4.8
- You cannot distinguish the compromised key from the new active key in the \`cache_signing_keys\` table

**Escalation path:** email \`security@whizbangdevelopers.com\` with the incident ID, current step number, and the full audit snapshot from Step 4.2.

---

## 7. Compliance Cross-Reference

This runbook provides evidence for the following controls:

| Framework | Control | Evidence Type |
|---|---|---|
| NIST 800-171 | 3.6.1 (Establish incident-handling capability) | Runbook existence + rehearsal log |
| NIST 800-171 | 3.6.2 (Track/report incidents) | Evidence bundle from Step 4.9 |
| NIST 800-171 | 3.6.3 (Test incident response capability) | Rehearsal requirement before v2.3 ship |
| HIPAA | §164.308(a)(6)(ii) (Response and reporting) | Runbook + regulatory reporting section (5.2) |
| PCI DSS v4.0 | 12.10.1 (Incident response plan) | Runbook text |
| PCI DSS v4.0 | 12.10.3 (Personnel available 24/7) | Escalation path in Section 6 |
| SOC 2 | CC7.3 (Incident evaluation) | Section 3 assessment procedure |
| SOC 2 | CC7.4 (Incident response) | Section 4 steps |
| CIS Controls v8.1 | 17.4 (Establish and maintain incident response process) | Runbook existence |

---

## 8. Rehearsal Log

Each rehearsal (before v2.3 ship and at least annually thereafter) should be recorded in \`docs/operations/rehearsal-logs/\` with:

- Date, operator, duration
- Friction points encountered
- Runbook changes applied as a result
- Timing calibration updates to Step 4.5

**Pre-ship rehearsal status:** not yet rehearsed (v2.3 in development). Rehearsal is a blocking gate for v2.3 ship per Decision #147.

---

## 9. Revision History

| Date | Change | Author |
|---|---|---|
| 2026-04-15 | Initial draft — written against v2.3 agent spec + parity check; commands untested against real implementation | Claude (session 2026-04-14/15) |

When v2.3 ships, the DRAFT banner in Section 1 is removed and this revision history gains an entry noting rehearsal-validated accuracy.
`,Xr=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->

---
policy: cache-key-retirement
status: draft
version_target: v2.3.0
audience: customer-operator
effective_date: "2026-04-15"
review_cadence: annually
decision_refs: ["#147"]
compliance_refs:
  - framework: NIST 800-53
    controls: ["SC-12", "SC-17"]
  - framework: NIST 800-171
    controls: ["3.13.10"]
  - framework: HIPAA 164.312
    controls: ["(a)(2)(iv)"]
  - framework: PCI DSS v4.0
    controls: ["3.6", "3.7"]
  - framework: SOC 2
    controls: ["CC6.1", "CC6.3"]
  - framework: CIS Controls v8.1
    controls: ["3.11"]
config_keys_referenced:
  - services.weaver.cache.signingKey.rotation.policy
  - services.weaver.cache.signingKey.rotation.interval
---

# Policy: Private Nix Cache Signing Key Retirement

> **⚠ DRAFT — v2.3 feature.** This policy documents customer responsibilities and recommended procedures for routine retirement of Private Nix Cache signing keys. The v2.3 Private Nix Cache feature (Decision #147) is planned for v2.3.0 and NOT YET IMPLEMENTED. This policy will be rehearsed against the v2.3 automation layer (v2.4 scheduled rotation per the foundation-early prep model) before taking effect.

---

## 1. Purpose

This document establishes the **recommended policy** for routine retirement of cache signing keys used by the Weaver Private Nix Cache (Decision #147). It distinguishes **routine retirement** (this policy) from **compromise response** (see \`cache-key-compromise-runbook.md\`), explains the add-only rotation model's trade-offs, and defines customer vs WBD responsibilities.

**This is a recommendation, not a contractual obligation.** Weaver's add-only signing-key model allows keys to be rotated routinely or left in place indefinitely — the product mechanics do not enforce any particular retirement cadence. This policy exists so that compliance-vertical customers have a defensible "we have a documented key retirement policy" answer during audit.

---

## 2. Audience

**This policy is for:**

- **Weaver Solo/Team administrators** responsible for host cache configuration
- **Compliance officers** evaluating Weaver against NIST SP 800-57, HIPAA §164.312(a)(2)(iv), PCI DSS 3.6–3.7, SOC 2 CC6.3, CIS Controls 3.11
- **Auditors** reviewing customer deployments of Weaver

**This policy is NOT for:**

- WBD as a company — WBD does not rotate or retire customer signing keys. That's a customer responsibility by design (self-hosted, no phone-home, no key escrow).
- The compromise response scenario — see the compromise runbook, not this policy.

---

## 3. Background — Add-Only Rotation Model

Weaver's Private Nix Cache uses an **add-only signing-key trust list** (Decision #147). Here's what that means operationally:

- Each rotation generates a new \`ed25519\` signing key. The new key is added to \`nix.settings.trusted-public-keys\` on all hosts that pull from the cache.
- The old key **stays in the trust list**. Cached objects signed by the old key remain verifiable indefinitely.
- No re-signing is required at rotation — "rotation" is just a signer change, not a trust change.
- Over time, the trust list grows: 1 key at v2.3 ship, 2 keys after the first rotation, N+1 keys after N rotations.

**Why this design (Decision #147 investigation, 2026-04-14):**

- Re-signing a large cache is a multi-hour operation. Forcing re-sign on every rotation would make routine rotation prohibitively expensive and would incentivize customers to skip rotation entirely.
- Upgrade migrations (v2.3 → v2.4 fleet-scope expansion → v2.6 storage pool reconfig) would require re-signing every object at each upgrade, destroying cache warmth and breaking audit history continuity.
- The add-only model eliminates re-sign as a routine requirement and preserves audit integrity across the full cache lifetime.

**The trade-off:**

- Trust list grows over time. At 10 rotations, your hosts trust 10 historical keys. 
- Any compromised historical key can still sign objects unless explicitly retired. 
- Retirement requires re-signing any objects signed by the retired key — which is exactly the expensive operation we avoided at rotation time.

**The policy question this document addresses:** given the trade-off, how often should customers retire old keys? When is retirement worth the cost?

---

## 4. Recommended Cadence

### 4.1 — WBD default recommendation

**Retire keys older than 2 rotation cycles, on a routine schedule aligned to your regulatory framework.**

Concretely:

- **Minimum recommended rotation interval:** 12 months (annually)
- **Minimum recommended retirement interval:** 24 months (rotate annually, retire the key that's 2 rotations old)
- **Trust list steady state:** 2 active keys (current + previous), plus however many pending retirement

At 12/24-month cadence, an organization's trust list contains exactly 2 keys in steady state. That matches NIST SP 800-57 recommendations for ed25519 cryptoperiod (1–2 year operational use, effective retirement after the cryptoperiod ends).

### 4.2 — Framework-specific guidance

Some compliance frameworks prescribe stricter retirement cadence:

| Framework | Control | Recommended cadence | Notes |
|---|---|---|---|
| NIST 800-53 SC-12 | Cryptographic Key Establishment and Management | Per cryptoperiod in NIST SP 800-57; typically 1–2 years for ed25519 | Align rotation schedule with organizational key management policy |
| NIST 800-171 3.13.10 | Establish and manage cryptographic keys | Cite SP 800-57; document cadence in customer's system security plan | Key management is customer responsibility |
| HIPAA §164.312(a)(2)(iv) | Encryption and Decryption | No prescribed interval, but "reasonable and appropriate" per risk assessment. Annually is the typical industry default. | Document rationale in customer's risk analysis |
| PCI DSS 3.6–3.7 | Cryptographic Key Management | Minimum annually for secret/private key retirement; document in the organization's key management policy | PCI is explicit: "at least once annually" |
| SOC 2 CC6.3 | Protect Cryptographic Keys | No prescribed interval; auditor will look for documented cadence + evidence of adherence | Document the cadence in the SOC 2 control description |
| CIS Controls v8.1 Safeguard 3.11 | Encrypt Sensitive Data at Rest | References NIST SP 800-57 key management | Defer to SP 800-57 guidance |
| CMMC Level 2 | 800-171 inheritance | Inherits 3.13.10 | Same as NIST 800-171 |

**The common denominator:** annually. An organization rotating on a 12-month cycle and retiring on a 24-month cycle satisfies PCI DSS explicitly and every other framework's "reasonable and appropriate" test.

### 4.3 — When to deviate from the default

**Shorter cadence (rotate more often than 12 months):**

- Your threat model includes a high risk of insider compromise
- Regulatory requirement mandates quarterly rotation (rare)
- Compliance audit finding requires a tighter cycle
- Post-incident follow-up after a compromise response

**Longer cadence (rotate less often than 12 months):**

- Small deployment (single Weaver Solo host, low object count)
- Documented risk acceptance from your compliance officer
- Regulatory framework that allows longer cryptoperiods (few do for signing keys)

Any deviation from the 12/24-month default should be documented in your key management policy with justification.

---

## 5. Customer Responsibility

**WBD does not rotate or retire customer cache signing keys.** The Weaver software provides the *mechanism* for rotation and retirement; the customer is responsible for the *policy*.

Specifically:

| Action | Responsibility | How |
|---|---|---|
| Generate initial signing key | WBD (first-run) | Automatic during v2.3 cache provisioning |
| Rotate signing key (routine) | **Customer** | Manual: Shed UI button (v2.3) · Automated: NixOS option \`services.weaver.cache.signingKey.rotation.policy = "scheduled"\` with \`interval = "365d"\` (v2.4+) |
| Retire old signing key | **Customer** | Shed UI (v2.4) or \`POST /api/cache/keys/:id/retire\` with re-sign preflight |
| Rotate on compromise | **Customer** | Follow the compromise runbook — this is incident response, not routine |
| Store retired public keys | **Customer** | Retained in \`cache_signing_keys\` table; \`retired_at\` and \`retire_reason\` fields populated |
| Store retired private keys | **N/A** | Retired private keys are **physically deleted from sops-nix** on retirement — neither WBD nor the customer retains them |
| Document rotation policy for audit | **Customer** | This policy doc is a template; customize for your organization |
| Rehearse compromise response | **Customer (recommended annually)** | Follow the compromise runbook against a dev cache |

---

## 6. Retired-Key Storage

**Retired private keys are physically deleted from sops-nix at retirement.** This is intentional per Decision #147 — eliminates the "sops recipient separation" concern (there's nothing to compromise in the sops file for a retired key).

Retained about each retired key:

- Public key material (still in \`cache_signing_keys.public_key\`)
- \`created_at\` timestamp
- \`retired_at\` timestamp
- \`retire_reason\` (\`rotation\` | \`compromise\`)
- The public key remains in \`/etc/nix/nix.conf\` \`trusted-public-keys\` until explicit removal

NOT retained:

- Private key material (deleted from sops-nix on retirement)

**Implication for audit evidence:** after retirement, you can *verify* that a historical object was signed by a specific retired key (using the retained public key), but you cannot *produce new signatures* with the retired key. This is the correct audit posture — signatures are verifiable forever, but replay attacks are impossible after retirement.

---

## 7. Rotation vs Retirement — Quick Decision Guide

Use this guide to decide whether a given event calls for rotation, retirement, or both:

| Event | Action |
|---|---|
| Annual rotation schedule reached | Rotate (new key, old key stays trusted) |
| Former admin retained key material | Treat as compromise — rotate + retire via compromise runbook |
| Old key is 2+ rotations ago | Retire (removes from trust list, deletes sops private material) |
| Upgrading v2.3 → v2.4 | Neither — upgrade doesn't trigger rotation or retirement |
| Compromise detected | Rotate + atomic re-sign + retire (compromise runbook) |
| Re-signing all historical objects for some reason | Use the compromise runbook's atomic re-sign flow; then optionally retire the old key |

---

## 8. Compliance Evidence Trail

For audit purposes, customers should maintain the following evidence of adherence to their documented retirement policy:

1. **This policy document** (customized with your organization's cadence and framework citations)
2. **Rotation schedule** (calendar entries, systemd timer state if automated)
3. **Rotation history** (\`GET /api/audit?type=cache.key.rotate\`)
4. **Retirement history** (\`GET /api/audit?type=cache.key.retire\`)
5. **Current trust list state** (\`GET /api/cache/keys\`) — snapshot at audit time
6. **Cache health metrics** (\`GET /api/cache/health\`) — days-since-last-rotation, trust list size
7. **Policy review history** — annual review signatures on this document

---

## 9. Automation (v2.4 Scheduled Rotation)

At v2.4, scheduled rotation becomes available via NixOS module option:

\`\`\`nix
services.weaver.cache.signingKey.rotation = {
  policy = "scheduled";  # "manual" (default at v2.3) | "scheduled"
  interval = "365d";      # Recommended default per this policy
};
\`\`\`

When \`policy = "scheduled"\`, a systemd timer fires every \`interval\` and calls the same rotation API the Shed button would call. The customer still retains responsibility for *retirement* — scheduled rotation does not automatically retire the previous key.

**For v2.4 deployments:** enable scheduled rotation at the default interval, then add a calendar reminder to retire old keys annually on the anniversary of their rotation-plus-24-months.

---

## 10. Revision History

| Date | Change | Author |
|---|---|---|
| 2026-04-15 | Initial draft — policy recommendations drawn from Decision #147, NIST SP 800-57, and framework surveys | Claude (session 2026-04-14/15) |

When v2.3 ships and this policy is validated against real automation, the DRAFT banner is removed and this revision history gains an entry.
`,Zr=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->

# Third-Party Attribution

This file lists all direct runtime dependencies bundled with Weaver, their licenses, and copyright holders.

**Generated:** 2026-04-02
**Source:** package.json (frontend, backend, TUI)

## Frontend Runtime Dependencies

| Package | Version | License | Copyright |
|---------|---------|---------|-----------|
| @quasar/extras | ^1.16.9 | MIT | Razvan Stoenescu |
| @xterm/addon-fit | ^0.11.0 | MIT | The xterm.js authors |
| @xterm/addon-web-links | ^0.12.0 | MIT | The xterm.js authors |
| @xterm/xterm | ^6.0.0 | MIT | The xterm.js authors, SourceLair Private Company, Christopher Jeffrey |
| axios | ^1.6.5 | MIT | Matt Zabriskie |
| idb | ^8.0.0 | ISC | Jake Archibald |
| markdown-it | ^14.1.1 | MIT | Vitaly Puzrin, Alex Kocharin |
| pinia | ^2.1.7 | MIT | Eduardo San Martin Morote |
| pinia-plugin-persistedstate | ^3.2.1 | MIT | prazdevs |
| quasar | ^2.14.0 | MIT | Razvan Stoenescu |
| sortablejs | ^1.15.7 | MIT | All contributors to Sortable |
| v-network-graph | ^0.9.22 | MIT | dash14.ack |
| vue | ^3.5.27 | MIT | Evan You |
| vue-router | ^4.2.5 | MIT | Eduardo San Martin Morote |

## Backend Runtime Dependencies

| Package | Version | License | Copyright |
|---------|---------|---------|-----------|
| @anthropic-ai/sdk | ^0.81.0 | MIT | Anthropic |
| @fastify/compress | ^8.3.1 | MIT | Tomas Della Vedova |
| @fastify/cookie | ^11.0.1 | MIT | Fastify Team |
| @fastify/cors | ^11.2.0 | MIT | Tomas Della Vedova |
| @fastify/helmet | ^13.0.2 | MIT | Matteo Collina |
| @fastify/rate-limit | ^10.3.0 | MIT | Tomas Della Vedova |
| @fastify/static | ^9.0.0 | MIT | Tommaso Allevi |
| @fastify/websocket | ^11.2.0 | MIT | Matteo Collina |
| bcryptjs | ^3.0.3 | BSD-3-Clause | Daniel Wirtz |
| better-sqlite3 | ^12.6.2 | MIT | Joshua Wise |
| dotenv | ^16.3.1 | BSD-2-Clause | Scott Motte |
| fastify | ^5.8.4 | MIT | Matteo Collina |
| fastify-type-provider-zod | ^4.0.2 | MIT | turkerd |
| jsonwebtoken | ^9.0.3 | MIT | auth0 |
| markdown-it | ^14.1.1 | MIT | Vitaly Puzrin, Alex Kocharin |
| nodemailer | ^8.0.1 | MIT-0 | Andris Reinman |
| stripe | ^18.1.0 | MIT | Stripe |
| web-push | ^3.6.7 | MPL-2.0 | Marco Castelluccio |
| zod | ^3.25.76 | MIT | Colin McDonnell |

## TUI Runtime Dependencies

| Package | Version | License | Copyright |
|---------|---------|---------|-----------|
| conf | ^13.0.1 | MIT | Sindre Sorhus |
| ink | ^5.2.0 | MIT | Vadim Demedes |
| react | ^18.3.1 | MIT | Facebook, Inc. and its affiliates |
| ws | ^8.18.1 | MIT | Einar Otto Stangvik |

---

All packages listed above are MIT, ISC, BSD-2-Clause, BSD-3-Clause, or MIT-0 licensed (fully permissive), with one exception:

- **web-push** (MPL-2.0) — weak file-level copyleft. Modifications to web-push source files must be shared under MPL-2.0. Weaver does not modify web-push; it is used as a dependency without source changes. MPL-2.0 is compatible with both AGPL-3.0 (Free tier) and BSL-1.1 (Solo/Team/Fabrick). Fabrick and compliance-sensitive customers should be aware of this license if their policy restricts copyleft dependencies.

Weaver Free is licensed under AGPL-3.0 with Commons Clause and AI Training Restriction.
Weaver Solo, Weaver Team, and Fabrick are licensed separately. See LICENSE for full terms.
See LICENSE for full terms.
`,Qr=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->
# Terms of Service

**Effective date:** 2026-04-05
**Last updated:** 2026-04-05
**Licensor:** whizBANG Developers LLC

These Terms of Service ("Terms") govern your use of Weaver, including the software, documentation, demo site, and any associated services provided by whizBANG Developers LLC ("Licensor," "we," "us").

By installing, accessing, or using Weaver, you agree to these Terms. If you do not agree, do not use the software.

---

## 1. License

Weaver is distributed under two licenses depending on tier:

| Tier | License |
|------|---------|
| Weaver Free | AGPL-3.0 + Commons Clause + AI Training Restriction |
| Weaver Solo / Team / Fabrick | BSL-1.1 + AI Training Restriction |

The complete license text is included with the software in the LICENSE file. These Terms supplement — but do not replace — the applicable license.

## 2. AI Training Restriction

You may not use any portion of the Software, its source code, documentation, API responses, or output data to train, fine-tune, or otherwise develop artificial intelligence or machine learning models. This restriction applies regardless of how the Software is accessed — via source code, binary, hosted service, API, or documentation.

**Exceptions:** (a) Using Weaver's built-in AI features (AI diagnostics, BYOK agent) as intended; (b) Weaver's own development process under whizBANG Developers authorization.

## 3. Bring Your Own Key (BYOK)

### 3.1 User-Supplied API Keys

Weaver permits you to provide your own third-party API key ("BYOK Key") for use with the AI diagnostics feature. By entering a BYOK Key, you acknowledge and agree to the following terms.

### 3.2 Client-Side Storage

Your BYOK Key is stored exclusively in your web browser's local storage on your device. The Licensor does not receive, transmit, store, process, or have access to your BYOK Key at any time. The Licensor cannot recover, reset, or revoke your BYOK Key.

### 3.3 Your Responsibility

You are solely responsible for:

- (a) the security, rotation, and revocation of your BYOK Key;
- (b) compliance with the terms of service of the third-party API provider (e.g., Anthropic's Acceptable Use Policy, Usage Policy, and Terms of Service);
- (c) all costs, charges, fees, and overages incurred through the use of your BYOK Key, regardless of whether such usage was authorized by you;
- (d) ensuring your BYOK Key has appropriate rate limits, spending caps, and access restrictions as provided by your API vendor;
- (e) not entering BYOK Keys on shared, public, or untrusted devices or browsers.

### 3.4 Third-Party Terms Pass-Through

Your use of a BYOK Key constitutes a direct relationship between you and the third-party API provider. The Licensor is not a party to that relationship. The third-party provider's terms of service, acceptable use policies, and privacy policies apply to your use of their API through Weaver.

### 3.5 Data Flow Transparency

When you use a BYOK Key, Weaver sends your API key and the diagnostic request directly from your browser to the third-party API endpoint. The Licensor's servers are not involved in this communication.

### 3.6 Key Hygiene Recommendations

The Licensor strongly recommends that you:

- Use a dedicated API key with restricted permissions for Weaver;
- Set spending caps and rate limits with your API vendor;
- Rotate your BYOK Key periodically;
- Clear your BYOK Key from Settings before using Weaver on any shared device;
- Monitor your API vendor's usage dashboard for unexpected activity.

### 3.7 Paid Tier Alternative

Weaver Solo, Team, and Fabrick tiers include a server-side AI credential vault managed by the Weaver administrator. This vault stores API keys in an encrypted database on the server, not in the browser. Users who require centralized key management, audit trails, or organizational control over AI API usage should consider a paid tier.

## 4. Disclaimer of Warranty

THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. THE LICENSOR MAKES NO WARRANTY REGARDING THE SECURITY OF BROWSER LOCAL STORAGE, THE AVAILABILITY OR PERFORMANCE OF THIRD-PARTY API SERVICES, OR THE ACCURACY OF AI-GENERATED OUTPUT.

This disclaimer extends to all features of the Software, including but not limited to BYOK, AI diagnostics, workload management, network topology, and all configuration interfaces.

## 5. Limitation of Liability

IN NO EVENT SHALL THE LICENSOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING FROM OR RELATED TO:

- (a) your use of or inability to use the Software;
- (b) unauthorized access to or use of your BYOK Key or any other credentials;
- (c) charges incurred on your third-party API account;
- (d) loss, corruption, or unavailability of data, configuration, or credentials due to browser data clearing, device loss, or any other cause;
- (e) actions taken by third-party service providers;
- (f) the content, accuracy, or consequences of AI-generated output;
- (g) any modification, suspension, or discontinuation of the Software.

## 6. Compliance Documents

Weaver provides security control mappings to industry standards (NIST 800-171, HIPAA, PCI DSS, CIS Benchmarks, SOC 2). These documents describe technical controls implemented in the software. They are **not** certification claims, audit attestations, or guarantees of compliance with any regulatory framework. You are responsible for verifying controls against your specific compliance requirements.

## 7. Changes to These Terms

We may update these Terms from time to time. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of the Software after changes constitutes acceptance of the revised Terms.

## 8. Contact

For questions about these Terms, contact whizBANG Developers LLC at the address listed on the product website.

---

*These Terms are subject to attorney review. See \`business/legal/BYOK-LIABILITY-CLAUSE-DRAFT.md\` for detailed legal review notes.*
`,$r=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->
# Production Deployment Guide

This guide covers deploying Weaver in production environments. Weaver is a NixOS-native application — the NixOS module is the only supported deployment method.

## Table of Contents

- [System Requirements](#system-requirements)
- [NixOS Deployment](#nixos-deployment-primary-method)
- [Security](#security)
- [Backup and Restore](#backup-and-restore)
- [Monitoring](#monitoring)

---

## System Requirements

| Requirement | Minimum |
| --- | --- |
| Operating System | NixOS 25.11+ |
| Node.js | 24.x (bundled by Nix — no manual install required) |
| RAM | 2 GB+ (Weaver application + workload provisioning) |
| CPU | 2 vCPU |
| Disk | 1 GB for Nix store dependencies + application data |
| Network | Port 3100 (default service port) |

For workload provisioning, the host also needs:

- KVM support (\`/dev/kvm\`) for QEMU hardware acceleration
- A network bridge interface for VM connectivity
- IP forwarding enabled

QEMU and cdrkit are provided automatically by the NixOS module.

> **Pre-flight check:** Run \`./scripts/preflight-check.sh\` before installing to verify hardware readiness, including BIOS settings (VT-x/AMD-V, IOMMU). See [COMPATIBILITY.md](COMPATIBILITY.md) for the full compatibility matrix, architecture support, cloud provider compatibility, and BIOS configuration reference.
>
> **Post-install diagnostics:** Use \`GET /api/system/doctor\` (admin only) to run a comprehensive system health check after installation.

### NixOS Channel Strategy

Weaver targets NixOS stable releases. We test against the current stable channel and update the minimum version on a predictable cadence aligned with the NixOS release cycle.

**Release cadence:** NixOS publishes two stable releases per year -- \`YY.05\` (May) and \`YY.11\` (November).

| Time Frame | Action | Example (2026--2027) |
|------------|--------|----------------------|
| Month 5 (May) | New stable drops. Begin testing against it. Update flake examples and docs to reference new channel. Minimum stays at prior stable. | Test against 26.05, docs show \`nixos-26.05\`, minimum remains 25.11 |
| Month 11 (Nov) | Next stable drops. Bump minimum to the *previous* stable (now N-1). Users on older channels have had 6 months to upgrade. | Minimum bumps to 26.05, docs show \`nixos-26.11\` |

This gives users a full release cycle (6 months) of overlap before their channel falls below the minimum.

**Unstable / \`nixpkgs-unstable\`:** Not tested or supported. NixOS stable provides reproducible builds — the same flake input always produces the same system. Unstable updates packages daily, which breaks this guarantee: the Node.js version, system libraries, or service defaults can change between any two evaluations. This directly impacts compliance posture — reproducible builds are a prerequisite for configuration control requirements in NIST 800-171, SOC 2, HIPAA, and PCI DSS. If you cannot demonstrate that two builds from the same source produce identical outputs, audit evidence for change management and system integrity controls is undermined. Use NixOS stable for production deployments. Support and warranty coverage under the [Terms of Service](TERMS-OF-SERVICE.md) apply only to supported configurations (NixOS stable channel, documented system requirements).

---

## NixOS Deployment (Primary Method)

The NixOS module in \`nixos/default.nix\` provides a fully declarative deployment. It builds the frontend and backend into a single Nix package, creates a systemd service, and handles user/group creation, firewall rules, and sudo permissions.

### Flake-Based Installation (Recommended)

Add the dashboard as a flake input:

\`\`\`nix
# flake.nix
{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
    weaver.url = "github:whizbangdevelopers-org/Weaver-Free";
  };

  outputs = { nixpkgs, weaver, ... }: {
    nixosConfigurations.myhost = nixpkgs.lib.nixosSystem {
      modules = [
        weaver.nixosModules.default
        {
          services.weaver = {
            enable = true;
            host = "127.0.0.1";
            port = 3100;
            jwtSecretFile = "/run/secrets/weaver-jwt";
            initialAdminPasswordFile = "/run/secrets/weaver-admin-pw";
          };
        }
      ];
    };
  };
}
\`\`\`

### Non-Flake Installation

\`\`\`nix
# /etc/nixos/configuration.nix
{ ... }:
{
  imports = [
    /path/to/weaver/nixos/default.nix
  ];

  services.weaver = {
    enable = true;
    host = "127.0.0.1";
    port = 3100;
    jwtSecretFile = "/run/secrets/weaver-jwt";
    initialAdminPasswordFile = "/run/secrets/weaver-admin-pw";
  };
}
\`\`\`

### Complete Configuration Reference

\`\`\`nix
services.weaver = {
  # --- Core ---
  enable = true;                      # Enable the service
  port = 3100;                        # API server port (default: 3100)
  host = "127.0.0.1";                # Bind address (default: 127.0.0.1)
  openFirewall = false;               # Open firewall for the dashboard port (default: false)
  package = weaver;        # Override the package derivation

  # --- Data Storage ---
  dataDir = "/var/lib/weaver";  # Persistent data directory (default)
  storageBackend = "json";            # VM registry backend: "json" or "sqlite" (default: "json")

  # --- Authentication ---
  # JWT secret — REQUIRED for production (tokens survive restarts)
  # Use jwtSecretFile for secret management; jwtSecret for inline (not recommended)
  jwtSecret = null;                   # Direct JWT secret string (avoid in production)
  jwtSecretFile = null;               # Path to file containing JWT secret

  # Initial admin account — created on first run when no users exist
  initialAdminPassword = null;        # Direct password string (avoid in production)
  initialAdminPasswordFile = null;    # Path to file containing initial admin password

  # --- Licensing ---
  licenseKey = null;                  # License key string (WVR-<tier>-<payload>-<checksum>)
  licenseKeyFile = null;              # Path to file containing license key
  licenseHmacSecret = null;           # HMAC secret for license key validation
  premiumEnabled = false;             # DEPRECATED: use licenseKey instead

  # --- Service Identity ---
  serviceUser = "weaver";  # System user for the service (default: dedicated user)
  serviceGroup = "weaver"; # System group for the service (default: dedicated group)

  # --- VM Provisioning (enabled by default, sets up bridge/NAT) ---
  provisioningEnabled = true;         # VM creation/management (bridge, NAT, IP forwarding)
  microvmsDir = "/var/lib/microvms";  # Storage directory for MicroVM flakes and disks
  bridgeInterface = "br-microvm";    # Bridge interface name for VM networking
  bridgeGateway = "10.10.0.1";       # Gateway IP on the VM bridge (host-side)

  # --- Optional ---
  distroCatalogUrl = null;            # Remote URL to refresh the curated distro catalog
};
\`\`\`

### Secrets Management

Weaver uses file-based secret injection — secrets are read from files at runtime, never stored in the Nix store. The NixOS module provides \`jwtSecretFile\`, \`initialAdminPasswordFile\`, and \`licenseKeyFile\` options that point to files owned by the \`weaver\` system user.

We recommend [sops-nix](https://github.com/Mic92/sops-nix) for encrypting secrets at rest in your NixOS configuration repository. Secrets are decrypted to \`/run/secrets/\` at boot and are never written to the Nix store.

#### sops-nix Configuration

\`\`\`nix
{ config, ... }:
{
  sops.secrets."weaver/jwt-secret" = {
    owner = "weaver";
    group = "weaver";
  };
  sops.secrets."weaver/admin-password" = {
    owner = "weaver";
    group = "weaver";
  };
  sops.secrets."weaver/license-key" = {
    owner = "weaver";
    group = "weaver";
  };

  services.weaver = {
    enable = true;
    jwtSecretFile = config.sops.secrets."weaver/jwt-secret".path;
    initialAdminPasswordFile = config.sops.secrets."weaver/admin-password".path;
    licenseKeyFile = config.sops.secrets."weaver/license-key".path;
  };
}
\`\`\`

### Systemd Service Details

The NixOS module creates a systemd service named \`weaver\`:

\`\`\`bash
# Check service status
sudo systemctl status weaver

# View logs
sudo journalctl -u weaver -f

# Restart the service
sudo systemctl restart weaver
\`\`\`

**Service properties:**

| Property | Value |
| --- | --- |
| Service name | \`weaver.service\` |
| Type | \`simple\` |
| User/Group | \`weaver\` / \`weaver\` (default) |
| Working directory | \`/var/lib/weaver\` (default dataDir) |
| Restart policy | \`on-failure\` with 10-second delay |
| Dependencies | \`network.target\` |

The service sets \`NODE_ENV=production\` and configures structured JSON logging (no pino-pretty in production).

### Reverse Proxy with Nginx

*Available: v1.0+ (manual configuration for Free/Solo). Weaver Team and Fabrick will auto-provision TLS and reverse proxy as part of the NixOS module.*

Weaver binds to \`127.0.0.1\` by default — it only accepts connections from localhost. For external access, place it behind a reverse proxy that handles TLS termination. This keeps TLS certificates, HTTPS negotiation, and HSTS enforcement at the proxy layer, not in the application.

The NixOS module for nginx provides a declarative configuration:

\`\`\`nix
services.nginx = {
  enable = true;
  virtualHosts."weaver.example.com" = {
    forceSSL = true;
    enableACME = true;
    locations."/" = {
      proxyPass = "http://127.0.0.1:3100";
      proxyWebsockets = true;  # Required for real-time status updates
      extraConfig = ''
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
      '';
    };
  };
};

# CORS is same-origin by default — no configuration needed when nginx
# serves both the frontend and API on the same domain.
\`\`\`

### Workload Management

Weaver Free works out of the box — it scans your host, discovers existing VMs, and gives you a dashboard to monitor, start, stop, and restart them. No bridge configuration, no provisioning setup, no license key required.

#### Live Provisioning (Weaver Solo+)

With a Solo or higher license, Weaver can create and manage new workloads directly from the browser. When provisioning is enabled, the NixOS module automatically configures:

- KVM group membership for the service user
- MicroVMs storage directory (\`/var/lib/microvms\` by default)
- Sudo rules for TAP interface management and IP commands
- Bridge networking (\`br-microvm\` with gateway \`10.10.0.1\`)
- NAT for VM internet access (iptables MASQUERADE)
- IP forwarding (\`net.ipv4.ip_forward = 1\`)
- QEMU and cdrkit in the service PATH

To customize bridge settings:

\`\`\`nix
services.weaver = {
  enable = true;
  provisioningEnabled = true;
  bridgeInterface = "br-microvm";  # default
  bridgeGateway = "10.10.0.1";    # default
  microvmsDir = "/var/lib/microvms"; # default
};
\`\`\`


---

## Security

### Built-In Protections (All Tiers)

Weaver includes these security controls out of the box — no configuration required:

- **Authentication** — JWT-based, bcrypt cost factor 13. No default credentials; first-run creates the admin account.
- **Password policy** — 14+ characters, uppercase + lowercase + digit + special character. Enforced at registration and password change.
- **Account lockout** — Progressive delay after 3 failed attempts, full lockout at 5. State persists across restarts.
- **Rate limiting** — All endpoints rate-limited (auth: 10/min, mutations: 30/min, AI agent: 5–30/min by tier, all others: 120/min). Keyed by user ID or IP.
- **Role-based access** — Admin / Operator / Viewer roles enforced server-side on every route.
- **Input validation** — Zod schemas on all API request bodies, params, and query strings.
- **Error sanitization** — Internal paths and system details never returned in API responses.
- **Command injection prevention** — All system commands via \`execFile\` with argument arrays, never shell execution.
- **Security headers** — HSTS (1 year), CSP frame-ancestors \`'none'\`, X-Content-Type-Options, X-Frame-Options via Helmet.
- **Localhost binding** — Service binds to \`127.0.0.1\` by default; not directly accessible from the network.
- **Audit logging** — All auth events (login, logout, register, password change, role change, user delete) recorded with user ID, timestamp, and action.
- **Request body limit** — 1 MB maximum, enforced by Fastify.

### Production Hardening (Weaver Solo+)

*Complete this checklist when deploying with a Solo or higher license:*

#### Secrets

- [ ] **Generate a strong JWT secret** — \`openssl rand -hex 64\`. Use \`jwtSecretFile\` to inject from a file (see § Secrets Management above).
- [ ] **Set initial admin password via file** — Configure \`initialAdminPasswordFile\` so the admin account is created on first run. Change the password via the UI after first login.
- [ ] **Use sops-nix for all secrets** — License keys, JWT secrets, and admin passwords should be encrypted at rest in your NixOS configuration repository.

#### Network

- [ ] **TLS via reverse proxy** — Run behind nginx with ACME for automatic certificate management (see § Reverse Proxy above). *Weaver Team and Fabrick will auto-provision this.*
- [ ] **Firewall** — Only expose port 443 (nginx). Keep Weaver's port 3100 on localhost. On NixOS, leave \`openFirewall = false\`.

#### Persistence

- [ ] **Session store** — Solo+ uses SQLite sessions (persistent across restarts). Ensure the data directory has correct permissions.
- [ ] **Data directory** — Mode \`0700\` owned by the service user. The NixOS module sets this automatically.
- [ ] **Secrets files** — Mode \`0600\` owned by root or the service user.

#### Logging

- [ ] **Log rotation** — The systemd journal handles rotation by default. No additional configuration needed for standard deployments.

---

## Backup and Restore

*Weaver v2.4 introduces built-in scheduled backup with snapshot management. The procedures below cover manual backup for v1.x deployments.*

### Weaver Free

All persistent state is JSON files in the data directory (\`/var/lib/weaver\`). JSON writes are atomic — no service stop required for a consistent backup.

| File | Description |
| --- | --- |
| \`users.json\` | User accounts (usernames, bcrypt password hashes, roles) |
| \`audit-log.json\` | Audit trail of all user actions |
| \`vms.json\` | VM registry (discovered VMs and metadata) |

Back up with a simple archive:

\`\`\`bash
tar -czf /var/backups/weaver-$(date +%Y%m%d).tar.gz -C /var/lib/weaver .
\`\`\`

### Weaver Solo+

Solo adds provisioning data, session persistence, and secrets. Back up the data directory plus MicroVM storage:

| File | Description |
| --- | --- |
| \`users.json\` | User accounts |
| \`audit-log.json\` | Audit trail |
| \`vms.json\` | VM registry (provisioned + discovered) |
| \`custom-distros.json\` | User-defined VM distribution templates |
| \`network-config.json\` | Bridge and network configuration |
| \`sessions.db\` | SQLite session store (persistent across restarts) |
| \`sessions.db-wal\` | SQLite write-ahead log |
| \`/var/lib/microvms/\` | MicroVM flakes and disk images |

SQLite sessions benefit from a clean shutdown. For a consistent backup:

\`\`\`bash
sudo systemctl stop weaver
tar -czf /var/backups/weaver-$(date +%Y%m%d).tar.gz \\
  -C /var/lib/weaver . \\
  -C / var/lib/microvms
sudo systemctl start weaver
\`\`\`

For zero-downtime backup, use SQLite's online backup instead of stopping the service:

\`\`\`bash
sqlite3 /var/lib/weaver/sessions.db ".backup /var/backups/sessions-$(date +%Y%m%d).db"
tar -czf /var/backups/weaver-$(date +%Y%m%d).tar.gz -C /var/lib/weaver .
\`\`\`

### Automated Backup (NixOS Timer)

\`\`\`nix
systemd.services.weaver-backup = {
  description = "Backup Weaver data";
  serviceConfig = {
    Type = "oneshot";
    ExecStart = "/usr/local/bin/backup-weaver.sh";
  };
};

systemd.timers.weaver-backup = {
  wantedBy = [ "timers.target" ];
  timerConfig = {
    OnCalendar = "daily";
    Persistent = true;
  };
};
\`\`\`

### Restore

\`\`\`bash
# 1. Stop the service
sudo systemctl stop weaver

# 2. Preserve current data
sudo mv /var/lib/weaver /var/lib/weaver.old

# 3. Create fresh data directory
sudo mkdir -p /var/lib/weaver
sudo chown weaver:weaver /var/lib/weaver
sudo chmod 750 /var/lib/weaver

# 4. Extract the backup
sudo tar -xzf /var/backups/weaver-YYYYMMDD.tar.gz -C /var/lib/weaver

# 5. Fix ownership
sudo chown -R weaver:weaver /var/lib/weaver

# 6. Restart and verify
sudo systemctl start weaver
curl -s http://localhost:3100/api/health | jq .
\`\`\`

---

## Monitoring

### Health Endpoint

The \`GET /api/health\` endpoint is public (no authentication required) and returns:

\`\`\`json
{
  "status": "healthy",
  "timestamp": "2026-02-12T12:00:00.000Z",
  "service": "weaver",
  "tier": "free",
  "tierExpiry": null,
  "tierGraceMode": false
}
\`\`\`

Use this endpoint for uptime monitoring, load balancer health checks, and alerting:

\`\`\`bash
# Simple health check
curl -sf http://localhost:3100/api/health > /dev/null || echo "Weaver is down"

# Check with jq
curl -s http://localhost:3100/api/health | jq -e '.status == "healthy"'
\`\`\`

### Logging

Weaver uses Pino for structured JSON logging via the systemd journal. No file-based log configuration needed — journald handles rotation, persistence, and filtering.

\`\`\`bash
# Live log stream
sudo journalctl -u weaver -f

# Errors only
sudo journalctl -u weaver -p err

# JSON output for log aggregation
sudo journalctl -u weaver -o json
\`\`\`

Set log verbosity via the NixOS module or \`LOG_LEVEL\` environment variable:

| Level | What it captures |
| --- | --- |
| \`info\` | Startup, requests, provisioning events (recommended) |
| \`warn\` | Warnings only — reduces log volume |
| \`debug\` | Detailed troubleshooting |

### Common Issues

#### Port 3100 already in use

A previous instance didn't shut down cleanly.

\`\`\`bash
sudo lsof -ti:3100 | xargs -r sudo kill
sudo systemctl restart weaver
\`\`\`

#### Permission denied on data directory

\`\`\`
EACCES: permission denied, open '/var/lib/weaver/users.json'
\`\`\`

The data directory is not owned by the service user. The NixOS module sets this automatically, but after a rebuild you may need to re-apply:

\`\`\`bash
sudo systemd-tmpfiles --create
sudo systemctl restart weaver
\`\`\`

#### WebSocket status updates not working

If real-time workload status doesn't update, verify your reverse proxy passes WebSocket connections. The nginx configuration in § Reverse Proxy above handles this. If using a different proxy, ensure it supports WebSocket upgrades on the \`/ws/\` path.

#### AI agent returns generic responses

Weaver's AI diagnostics require an API key. Without one, the agent uses mock responses to demonstrate the feature.

- **Free tier**: Enter your own API key (BYOK) in the AI diagnostics dialog
- **Solo+**: Configure a server-side API key via the Settings page

#### JWT secret missing (Solo+)

\`\`\`
[auth] JWT_SECRET or JWT_SECRET_FILE is required in production
\`\`\`

Set \`jwtSecretFile\` in the NixOS module, pointing to a file managed by sops-nix (see § Secrets Management above).

#### License key not recognized (Solo+)

The license key format is \`WVR-<tier>-<payload>-<checksum>\`. Verify the key file is readable by the \`weaver\` service user and the file path in \`licenseKeyFile\` is correct. Contact support if the key was provided by whizBANG Developers and does not activate.
`,ei=`<!-- Copyright (c) 2026 whizBANG Developers LLC. All rights reserved. -->
<!-- Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE. -->
# Compatibility Matrix

This document is the **single source of truth** for Weaver's hardware, platform, and BIOS compatibility. The README contains a condensed summary table synced from this document — run \`npm run audit:compatibility\` to verify parity.

---

## Table of Contents

- [Platform Support](#platform-support)
- [Architecture Support](#architecture-support)
- [Hardware Feature Requirements](#hardware-feature-requirements)
- [NixOS Version Support](#nixos-version-support)
- [Cloud Provider Compatibility](#cloud-provider-compatibility)
- [BIOS Configuration Reference](#bios-configuration-reference)
- [Pre-Installation Verification](#pre-installation-verification)

---

## Platform Support

<!-- SYNC:PLATFORM_TABLE:START -->
| Platform | Architecture | Dashboard | Provisioning | Device Passthrough | Status |
|----------|-------------|-----------|-------------|-------------------|--------|
| NixOS 25.11+ bare metal | x86_64 | Full | Full | Full (IOMMU required) | Supported |
| NixOS 25.11+ VM (cloud/nested) | x86_64 | Full | Nested virt required | No | Supported |
| NixOS 25.11+ bare metal | aarch64 | Full | Experimental | No | Community |
| Docker (any Linux) | x86_64 | Full | Dashboard only | No | Supported |
| Docker (any Linux) | aarch64 | Full | Dashboard only | No | Community |
<!-- SYNC:PLATFORM_TABLE:END -->

**Status definitions:**

| Status | Meaning |
|--------|---------|
| **Supported** | Tested in CI, covered by release checklist, eligible for support |
| **Community** | Known to work, not tested in CI, community-contributed fixes accepted |
| **Experimental** | May work, no guarantees, breaking changes possible |
| **Unsupported** | Known incompatible or untested — use at your own risk |

---

## Architecture Support

| Architecture | Dashboard | MicroVM Provisioning | Notes |
|-------------|-----------|---------------------|-------|
| **x86_64** (Intel/AMD 64-bit) | Yes | Yes | Primary target. Full KVM + QEMU support |
| **aarch64** (ARM 64-bit) | Yes | Experimental | NixOS aarch64 builds work; QEMU guest support varies by hypervisor |
| **RISC-V** | No | No | NixOS has early RISC-V support; Weaver is untested. Not recommended |
| **i686** (32-bit x86) | No | No | Unsupported. NixOS has dropped most i686 support |

---

## Hardware Feature Requirements

| Feature | Required For | How to Check | Impact If Missing |
|---------|-------------|-------------|-------------------|
| **Intel VT-x / AMD-V** | KVM acceleration | \`grep -cE 'vmx\\|svm' /proc/cpuinfo\` | VMs run 10-50x slower (QEMU TCG fallback) |
| **Intel VT-d / AMD-Vi (IOMMU)** | Device passthrough | \`ls /sys/class/iommu/\` or \`dmesg \\| grep -i iommu\` | No GPU/NIC/USB passthrough to VMs |
| **Nested virtualization** | Running inside a VM | \`cat /sys/module/kvm_intel/parameters/nested\` | Cannot provision VMs from a cloud VPS without enabling nested virt |
| **AES-NI** | Encrypted workloads | \`grep -c aes /proc/cpuinfo\` | Slower disk encryption; no functional impact on Weaver |
| **KVM kernel module** | VM provisioning | \`lsmod \\| grep kvm\` | \`/dev/kvm\` unavailable; provisioning disabled |
| **Bridge networking** | VM connectivity | \`modprobe bridge && echo OK\` | VMs cannot communicate with host or external network |

### Minimum Hardware

| Resource | Dashboard Only | With Provisioning |
|----------|---------------|-------------------|
| CPU | 1 vCPU | 2+ vCPU |
| RAM | 1 GB | 2 GB + VM memory |
| Disk | 500 MB | 500 MB + VM images |
| Network | Port 3100 | Port 3100 + bridge interface |

---

## NixOS Version Support

| NixOS Version | Status | Notes |
|--------------|--------|-------|
| **25.11** | Supported (minimum) | Current stable baseline |
| **26.05** | Supported (when released) | Tested on release; docs updated |
| **26.11** | Future | Minimum bumps to 26.05 when 26.11 drops |
| **nixpkgs-unstable** | Unsupported | May work; pin to specific commit for reproducibility |
| **24.11 and older** | Unsupported | May work but no testing or fixes |

**Upgrade cadence:** NixOS publishes two stable releases per year (May and November). Weaver supports the current stable + previous stable, giving users a 6-month overlap to upgrade.

---

## Cloud Provider Compatibility

Running Weaver inside a cloud VM requires **nested virtualization** for MicroVM provisioning. Dashboard-only mode works everywhere.

| Provider | Nested Virt | How to Enable | Provisioning Works |
|----------|------------|---------------|-------------------|
| **Hetzner Cloud** | Yes (dedicated) | Dedicated CPU instances only; shared vCPU lacks KVM | Yes (dedicated CPU) |
| **Hetzner Bare Metal** | N/A (native) | Native KVM, no nesting needed | Yes |
| **DigitalOcean** | No | Not available on standard droplets | Dashboard only |
| **AWS EC2** | Yes (metal/bare) | \`.metal\` instance types, or enable nested virt on Nitro | Yes (\`.metal\` instances) |
| **AWS EC2 (standard)** | Limited | Nitro-based instances with \`--cpu-options\` | Check instance type |
| **Vultr** | Yes (bare metal) | Bare metal plans only | Yes (bare metal) |
| **OVHcloud** | Yes (dedicated) | Dedicated servers with KVM | Yes |
| **Proxmox (self-hosted)** | Yes | Enable in VM config: \`cpu: host\`, \`args: -cpu host\` | Yes |

> **Tip:** If you only need the dashboard (no provisioning), any cloud VM with NixOS or Docker works. Nested virt is only required for creating and running MicroVMs.

---

## BIOS Configuration Reference

MicroVM provisioning requires hardware virtualization support enabled in BIOS/UEFI. Device passthrough additionally requires IOMMU.

### Intel Systems — Enable VT-x

| Vendor | BIOS Path | Setting Name |
|--------|-----------|-------------|
| **Dell** | BIOS Setup → Advanced → Virtualization Support | Virtualization → **Enabled** |
| **HP / HPE** | BIOS Setup → Security → System Security | Virtualization Technology (VTx) → **Enabled** |
| **Lenovo** | BIOS Setup → Security → Virtualization | Intel Virtualization Technology → **Enabled** |
| **Supermicro** | Advanced → CPU Configuration | Intel Virtualization Technology → **Enabled** |
| **ASUS** | Advanced → CPU Configuration | Intel Virtualization Technology → **Enabled** |
| **Gigabyte** | BIOS → Tweaker → Advanced CPU Settings | Intel VT-x → **Enabled** |
| **MSI** | OC → CPU Features | Intel Virtualization Tech → **Enabled** |
| **ASRock** | Advanced → CPU Configuration | Intel Virtualization Technology → **Enabled** |
| **AMI BIOS (generic)** | Advanced → Processor Configuration | Intel Virtualization Technology → **Enabled** |

### AMD Systems — Enable AMD-V (SVM)

| Vendor | BIOS Path | Setting Name |
|--------|-----------|-------------|
| **Dell** | BIOS Setup → Advanced → Virtualization Support | Virtualization → **Enabled** |
| **HP / HPE** | BIOS Setup → Security → System Security | Virtualization Technology (AMD-V) → **Enabled** |
| **Lenovo** | BIOS Setup → Security → Virtualization | AMD SVM Technology → **Enabled** |
| **Supermicro** | Advanced → CPU Configuration | SVM Mode → **Enabled** |
| **ASUS** | Advanced → CPU Configuration | SVM Mode → **Enabled** |
| **Gigabyte** | BIOS → Tweaker → Advanced CPU Settings | SVM Mode → **Enabled** |
| **MSI** | OC → CPU Features | SVM Mode → **Enabled** |
| **ASRock** | Advanced → CPU Configuration | SVM Mode → **Enabled** |

### Enable IOMMU (VT-d / AMD-Vi) — Required for Device Passthrough

| Vendor | BIOS Path | Setting Name |
|--------|-----------|-------------|
| **Dell** | BIOS Setup → Advanced → Virtualization Support | VT for Direct I/O → **Enabled** |
| **HP / HPE** | BIOS Setup → Security → Device Security | VT-d / IOMMU → **Enabled** |
| **Lenovo** | BIOS Setup → Security → Virtualization | VT-d / AMD-Vi → **Enabled** |
| **Supermicro** | Advanced → Chipset Configuration → NB Configuration | VT-d → **Enabled** |
| **ASUS** | Advanced → System Agent (SA) Configuration | VT-d → **Enabled** |
| **Gigabyte** | BIOS → Settings → Miscellaneous | IOMMU → **Enabled** |
| **MSI** | OC → CPU Features | Intel VT-d / AMD IOMMU → **Enabled** |
| **ASRock** | Advanced → Chipset Configuration | VT-d / IOMMU → **Enabled** |

> **After enabling IOMMU in BIOS**, also add \`intel_iommu=on\` (Intel) or \`amd_iommu=on\` (AMD) to your kernel boot parameters. On NixOS: \`boot.kernelParams = [ "intel_iommu=on" ];\`

### Secure Boot

NixOS supports Secure Boot via [Lanzaboote](https://github.com/nix-community/lanzaboote). Weaver has no Secure Boot dependency — it works with Secure Boot enabled or disabled. If your BIOS requires Secure Boot for compliance, enable it independently of Weaver.

---

## Pre-Installation Verification

### Automated Pre-Flight Check

Run the pre-flight script before installing Weaver to verify hardware readiness:

\`\`\`bash
# Download and run (no installation required)
curl -fsSL https://raw.githubusercontent.com/whizbangdevelopers-org/Weaver-Free/main/scripts/preflight-check.sh | bash
\`\`\`

Or clone the repo and run locally:

\`\`\`bash
./scripts/preflight-check.sh
\`\`\`

The script checks: CPU architecture, virtualization extensions, KVM availability, IOMMU, RAM, disk space, NixOS version, and network bridge support. Each check reports PASS, WARN, or FAIL with actionable remediation steps.

### Post-Installation Diagnostics

After installing Weaver, use the built-in doctor endpoint to verify system health:

\`\`\`bash
# Via API (requires admin authentication)
curl -H "Authorization: Bearer <token>" http://localhost:3100/api/system/doctor

# Via the web UI: Settings → System Health → Run Diagnostics
\`\`\`

The doctor runs all pre-flight checks plus Weaver-specific checks: SQLite connectivity, WebSocket health, bridge reachability, QEMU availability, license status, and tier-capability alignment.

### Manual Verification

\`\`\`bash
# CPU virtualization
grep -cE 'vmx|svm' /proc/cpuinfo          # Should be > 0

# KVM
ls -la /dev/kvm                             # Should exist and be readable
lsmod | grep kvm                            # kvm_intel or kvm_amd loaded

# IOMMU (optional — for device passthrough)
ls /sys/class/iommu/ 2>/dev/null            # Non-empty if IOMMU active
dmesg | grep -i iommu                       # Look for "IOMMU enabled"

# NixOS version
nixos-version                               # Should be 25.11+

# Memory
free -h                                     # 2 GB+ recommended

# Disk
df -h /                                     # 500 MB+ free

# Bridge support
modprobe bridge && echo "Bridge support OK" # Should print OK
\`\`\`
`,ti={style:{"max-width":`900px`,margin:`0 auto`}},ni={class:`row items-center justify-between q-mb-md`},ri={class:`text-body2`},ii={class:`text-body2`},ai=[`innerHTML`],oi={class:`q-mt-xl q-pt-md`},si=t({__name:`DocsPage`,setup(e){let t=ne(),r=re(),p=te(),h=u(()=>S()?p.demoVersion+`.0`:`0.1.0`),g={"admin-guide":{title:`Admin Guide`,content:Br},"user-guide":{title:`User Guide`,content:Vr},"security-baselines":{title:`Security Baselines`,content:Hr},"nist-800-171":{title:`NIST 800-171 Mapping`,content:Ur},"hipaa-164-312":{title:`HIPAA §164.312 Mapping`,content:Wr},"pci-dss":{title:`PCI DSS v4.0 Mapping`,content:Gr},"cis-benchmarks":{title:`CIS Benchmark Alignment`,content:Kr},"cis-controls":{title:`CIS Controls v8.1 Mapping`,content:qr},"soc2-readiness":{title:`SOC 2 Readiness`,content:Jr},"runbook-cache-key-compromise":{title:`Runbook: Cache Key Compromise Response`,content:Yr},"policy-cache-key-retirement":{title:`Policy: Cache Key Retirement`,content:Xr},attribution:{title:`Open Source Dependencies`,content:Zr},"terms-of-service":{title:`Terms of Service`,content:Qr},"production-deployment":{title:`Production Deployment`,content:$r},compatibility:{title:`Compatibility Matrix`,content:ei}},_={"admin-guide":`ADMIN-GUIDE.md`,"user-guide":`USER-GUIDE.md`,"production-deployment":`PRODUCTION-DEPLOYMENT.md`,compatibility:`COMPATIBILITY.md`,"security-baselines":`security/SECURITY-BASELINES.md`,"nist-800-171":`security/compliance/NIST-800-171-MAPPING.md`,"hipaa-164-312":`security/compliance/HIPAA-164-312-MAPPING.md`,"pci-dss":`security/compliance/PCI-DSS-MAPPING.md`,"cis-benchmarks":`security/compliance/CIS-BENCHMARK-ALIGNMENT.md`,"cis-controls":`security/compliance/CIS-CONTROLS-MAPPING.md`,"soc2-readiness":`security/compliance/SOC2-READINESS.md`,"runbook-cache-key-compromise":`operations/cache-key-compromise-runbook.md`,"policy-cache-key-retirement":`operations/cache-key-retirement-policy.md`,attribution:`ATTRIBUTION.md`,"terms-of-service":`legal/TERMS-OF-SERVICE.md`},v=Object.assign({}),y={"ADMIN-GUIDE.md":`admin-guide`,"USER-GUIDE.md":`user-guide`,"PRODUCTION-DEPLOYMENT.md":`production-deployment`,"SECURITY-BASELINES.md":`security-baselines`,"NIST-800-171-MAPPING.md":`nist-800-171`,"HIPAA-164-312-MAPPING.md":`hipaa-164-312`,"PCI-DSS-MAPPING.md":`pci-dss`,"CIS-BENCHMARK-ALIGNMENT.md":`cis-benchmarks`,"SOC2-READINESS.md":`soc2-readiness`,"ATTRIBUTION.md":`attribution`,"TERMS-OF-SERVICE.md":`terms-of-service`,"COMPATIBILITY.md":`compatibility`},b=u(()=>t.params.slug||``),x=u(()=>{if(!S())return;let e=b.value,t=e?_[e]:void 0;if(t)return v[`../../docs/v${p.demoVersion}/${t}`]}),se=u(()=>!!x.value),C=u(()=>{let e=b.value;if(e){if(x.value){var t;return{title:((t=g[e])==null?void 0:t.title)??e,content:x.value}}return g[e]}}),le=u(()=>{var e;return((e=C.value)==null?void 0:e.title)??`Not Found`}),w=new Set([`security-baselines`,`nist-800-171`,`hipaa-164-312`,`pci-dss`,`cis-benchmarks`,`cis-controls`,`soc2-readiness`,`attribution`,`terms-of-service`]),ue=new Set([`admin-guide`,`user-guide`]),T=u(()=>w.has(b.value)),E=u(()=>ue.has(b.value)),de=u(()=>{var e;return((e=C.value)==null?void 0:e.content.includes(`*Available:`))??!1});function D(){window.print()}function fe(e){let[t,n]=e.replace(/^v/,``).split(`.`).map(Number);return(t??0)*100+(n??0)}function pe(e){return S()?p.isDemoVersionAtLeast(e):fe(h.value)>=fe(e)}function me(e){let t=e.split(/^(#{2,3}\s)/m),n=[];n.push(t[0]);for(let e=1;e<t.length;e+=2)n.push((t[e]??``)+(t[e+1]??``));return n.filter(e=>{let t=e.match(/\*Available:\s*v?([\d.]+)\+/);return t?pe(t[1]):!0}).join(``)}function he(e){return e.toLowerCase().replace(/[^\w\s-]/g,``).replace(/\s/g,`-`).trim()}let O=new $({html:!1,linkify:!0,typographer:!0}),ge=O.renderer.rules.heading_open??((e,t,n,r,i)=>i.renderToken(e,t,n));O.renderer.rules.heading_open=(e,t,n,r,i)=>{let a=e[t+1];if(a!=null&&a.children){let n=a.children.map(e=>e.content).join(``);e[t].attrSet(`id`,he(n))}return ge(e,t,n,r,i)};let _e=O.renderer.rules.link_open??((e,t,n,r,i)=>i.renderToken(e,t,n)),ve=O.renderer.rules.link_close??((e,t,n,r,i)=>i.renderToken(e,t,n));O.renderer.rules.link_open=(e,t,n,r,i)=>{let a=e[t].attrGet(`href`);if(a&&a.match(/\.md(?:#|$)/i)){let[o,s]=a.split(`#`),c=y[o.split(`/`).pop()??o];if(c){let a=s?`/#/docs/${c}#${s}`:`/#/docs/${c}`;return e[t].attrSet(`href`,a),_e(e,t,n,r,i)}return r._stripLink=!0,``}return _e(e,t,n,r,i)},O.renderer.rules.link_close=(e,t,n,r,i)=>r._stripLink?(r._stripLink=!1,``):ve(e,t,n,r,i);function ye(e){let t=e.target.closest(`a`);if(!t)return;let n=t.getAttribute(`href`);if(n){if(n.startsWith(`#`)){e.preventDefault();let t=document.getElementById(n.slice(1));t&&t.scrollIntoView({behavior:`smooth`});return}if(n.startsWith(`/#/docs/`)){e.preventDefault();let[t,i]=n.slice(2).split(`#`);r.push(t).then(()=>{i&&setTimeout(()=>{let e=document.getElementById(i);e&&e.scrollIntoView({behavior:`smooth`})},100)});return}}}let be=u(()=>{if(!C.value)return`<p>Document not found. <a href="/help">Return to Help</a>.</p>`;let e=me(C.value.content.replace(/^(\s*<!--[\s\S]*?-->\s*)+/,``));return O.render(e)});return(e,t)=>(f(),c(ae,{padding:``},{default:n(()=>[l(`div`,ti,[l(`div`,ni,[d(ce,null,{default:n(()=>[d(oe,{label:T.value?`Compliance`:`Help`,icon:T.value?`mdi-shield-check`:`mdi-help-circle`,to:T.value?`/compliance`:`/help`},null,8,[`label`,`icon`,`to`]),d(oe,{label:le.value},null,8,[`label`])]),_:1}),E.value?(f(),c(ee,{key:0,flat:``,color:`primary`,icon:`mdi-printer`,label:`Print`,onClick:D})):i(``,!0)]),a(S)()&&!se.value?(f(),c(ie,{key:0,class:`q-mb-md bg-amber-1`,rounded:``,dense:``},{avatar:n(()=>[d(m,{name:`mdi-information`,color:`amber-8`,size:`sm`})]),default:n(()=>[l(`span`,ri,` Documentation for v`+s(h.value)+` is in development. Showing latest available. `,1)]),_:1})):de.value?(f(),c(ie,{key:1,class:`q-mb-md bg-blue-1`,rounded:``,dense:``},{avatar:n(()=>[d(m,{name:`mdi-information`,color:`primary`,size:`sm`})]),default:n(()=>[l(`span`,ii,[t[0]||=o(` This guide shows documentation for `,-1),l(`strong`,null,`v`+s(h.value),1),t[1]||=o(`. Sections for future versions are hidden. `,-1)])]),_:1})):i(``,!0),l(`div`,{class:`docs-content`,innerHTML:be.value,onClick:ye},null,8,ai),l(`div`,oi,[d(ee,{flat:``,color:`primary`,icon:`mdi-arrow-left`,label:T.value?`Back to Compliance`:`Back to Help`,to:T.value?`/compliance`:`/help`},null,8,[`label`,`to`])])])]),_:1}))}});export{si as default};