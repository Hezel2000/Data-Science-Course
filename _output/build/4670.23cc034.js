"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4670],{44670:(O,e,t)=>{t.r(e),t.d(e,{json:()=>c,jsonLanguage:()=>Q,jsonParseLinter:()=>o});var r=t(49906),a=t(96947);const n=(0,a.styleTags)({String:a.tags.string,Number:a.tags.number,"True False":a.tags.bool,PropertyName:a.tags.propertyName,Null:a.tags.null,",":a.tags.separator,"[ ]":a.tags.squareBracket,"{ }":a.tags.brace}),s=r.WQ.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[n],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0});var P=t(3314);const o=()=>O=>{try{JSON.parse(O.state.doc.toString())}catch(e){if(!(e instanceof SyntaxError))throw e;const t=function(O,e){let t;return(t=O.message.match(/at position (\d+)/))?Math.min(+t[1],e.length):(t=O.message.match(/at line (\d+) column (\d+)/))?Math.min(e.line(+t[1]).from+ +t[2]-1,e.length):0}(e,O.state.doc);return[{from:t,message:e.message,severity:"error",to:t}]}return[]},Q=P.LRLanguage.define({name:"json",parser:s.configure({props:[P.indentNodeProp.add({Object:(0,P.continuedIndent)({except:/^\s*\}/}),Array:(0,P.continuedIndent)({except:/^\s*\]/})}),P.foldNodeProp.add({"Object Array":P.foldInside})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function c(){return new P.LanguageSupport(Q)}}}]);
//# sourceMappingURL=4670.23cc034.js.map