//	HYPE.documents["HomeworkTemplate"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="HomeworkTemplate.hyperesources",c="HomeworkTemplate",e="homeworktemplate_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/homeworktemplate_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),false==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"initializeSplash",source:"function(hypeDocument, element, event) {\t\n\tgetInfo();\n\thypeDocument.getElementById(\"title1\").innerHTML = window.title;\n\t\n}",identifier:"10"},{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.getElementById(\"infoDisplay\").innerHTML = \"QUESTION \" + (window.currentSlide + 1) + \" OF \" + window.numberOfQuestions;\n\t\n\tif (window.currentScore >= 0) {\n\t\thypeDocument.getElementById(\"scoreDisplay\").innerHTML = \"SCORE: +\" + (\"00000\" + window.currentScore).substr(-5, 5);\n\t} else {\n\t\thypeDocument.getElementById(\"scoreDisplay\").innerHTML = \"SCORE: -\" + (\"00000\" + (Math.abs(window.currentScore))).substr(-5, 5);\n\t}\n\t\n\thypeDocument.getElementById(\"questionDisplay\").innerHTML = window.questions[window.currentSlide];\n\thypeDocument.getElementById(\"answerADisplay\").innerHTML = window.answerA[window.currentSlide];\n\thypeDocument.getElementById(\"answerBDisplay\").innerHTML = window.answerB[window.currentSlide];\n\thypeDocument.getElementById(\"answerCDisplay\").innerHTML = window.answerC[window.currentSlide];\n\thypeDocument.getElementById(\"answerDDisplay\").innerHTML = window.answerD[window.currentSlide];\n\thypeDocument.getElementById(\"answerEDisplay\").innerHTML = window.answerE[window.currentSlide];\n\t\n\thypeDocument.getElementById(\"answerADisplay\").style.visibility = \"visible\";\n\thypeDocument.getElementById(\"answerBDisplay\").style.visibility = \"visible\";\n\thypeDocument.getElementById(\"answerCDisplay\").style.visibility = \"visible\";\n\thypeDocument.getElementById(\"answerDDisplay\").style.visibility = \"visible\";\n\thypeDocument.getElementById(\"answerEDisplay\").style.visibility = \"visible\";\n\t\n\thypeDocument.getElementById(\"answerADisplay\").style.color = \"#00F900\";\n\thypeDocument.getElementById(\"answerBDisplay\").style.color = \"#00F900\";\n\thypeDocument.getElementById(\"answerCDisplay\").style.color = \"#00F900\";\n\thypeDocument.getElementById(\"answerDDisplay\").style.color = \"#00F900\";\n\thypeDocument.getElementById(\"answerEDisplay\").style.color = \"#00F900\";\n\n\twindow.temp1 = [\"A\", \"B\", \"C\", \"D\", \"E\" ];\n\t\n\tif (window.correctAnswer[window.currentSlide] == \"A\") { window.temp1.splice(0, 1); } \n\telse if (window.correctAnswer[window.currentSlide] == \"B\") { window.temp1.splice(1, 1); }\n\telse if (window.correctAnswer[window.currentSlide] == \"C\") { window.temp1.splice(2, 1); }\n\telse if (window.correctAnswer[window.currentSlide] == \"D\") { window.temp1.splice(3, 1); }\n\telse if (window.correctAnswer[window.currentSlide] == \"E\") { window.temp1.splice(4, 1); }\n\t\n\t// SHUFFLE THE ARRAY, SEE https://css-tricks.com/snippets/javascript/shuffle-array/ for details\n\tfor(var j, x, i = window.temp1.length; i; j = parseInt(Math.random() * i), x = window.temp1[--i], window.temp1[i] = window.temp1[j], window.temp1[j] = x);\n\t\n\twindow.clickedAnswer = \"\";\n\twindow.timerValue = 0;\n\t\n}",identifier:"28"},{name:"removeWrongAnswer",source:"function(hypeDocument, element, event) {\t\n\tvar temp2 = \"answer\" + window.temp1[0] + \"Display\";\n\thypeDocument.getElementById(temp2).style.visibility = \"hidden\";\n\twindow.temp1.shift();\n\t\n}",identifier:"43"},{name:"answerClicked",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.getElementById(\"answerADisplay\").style.color = \"#00F900\";\n\thypeDocument.getElementById(\"answerBDisplay\").style.color = \"#00F900\";\n\thypeDocument.getElementById(\"answerCDisplay\").style.color = \"#00F900\";\n\thypeDocument.getElementById(\"answerDDisplay\").style.color = \"#00F900\";\n\thypeDocument.getElementById(\"answerEDisplay\").style.color = \"#00F900\";\n\thypeDocument.getElementById(element.id).style.color = \"#0433FF\";\n\t\n\twindow.clickedAnswer = element.id.charAt(6);\n\t\n\tvar x1 = hypeDocument.getElementById(\"countdownText\").innerHTML;\n\tvar x2 = x1.length;\n\tif (x2 == 4) {\t\t\twindow.timerValue = Number(x1); } \n\telse if ( x2 == 9) { \twindow.timerValue = Number(x1.slice(6)); } \n\telse if ( x2 == 14) {\twindow.timerValue = Number(x1.slice(12)); } \n\telse {\t\t\t\t\twindow.timerValue = 0; }\n\n    if ( window.clickedAnswer == window.correctAnswer[window.currentSlide] ) {\n    \twindow.timerValue = 1 * (window.timerValue);\n    } else {\n    \twindow.timerValue = -1 * (window.timerValue);\n    }\n\t\n}",identifier:"44"},{name:"updateScore",source:"function(hypeDocument, element, event) {\t\t\n\n\t\t\n\twindow.currentScore = window.currentScore + window.timerValue;\n\t\n\tif (window.currentScore >= 0) {\n\t\thypeDocument.getElementById(\"scoreDisplay\").innerHTML = \"SCORE: +\" + (\"00000\" + window.currentScore).substr(-5, 5);\n\t} else {\n\t\thypeDocument.getElementById(\"scoreDisplay\").innerHTML = \"SCORE: -\" + (\"00000\" + (Math.abs(window.currentScore))).substr(-5, 5);\n\t}\n\t\n\thypeDocument.getElementById(\"questionDisplay\").innerHTML = window.response[currentSlide];\n\t\n\n\t\n}",identifier:"45"},{name:"initializeSummary",source:"function(hypeDocument, element, event) {\t\t\n\tvar x1 = (window.currentScore/window.numberOfQuestions)/10;\n\tvar string1 = \"You scored \" + window.currentScore + \" points<br>out of a possible \";\n\tstring1 = string1 + (window.numberOfQuestions*1000) + \" <br>putting you at \";\n\tstring1 = string1 + x1 + \" percent.\";\n\thypeDocument.getElementById(\"info1\").innerHTML = string1;\n\t\n\t\n}",identifier:"54"},{name:"cleanupMain",source:"function(hypeDocument, element, event) {\t\n\twindow.currentSlide = window.currentSlide + 1;\n\t\n\tif (window.currentSlide < window.numberOfQuestions) {\n\t\thypeDocument.showSceneNamed(\"main\");\n\t} else {\n\t\thypeDocument.showSceneNamed(\"summary\");\n\t} \n\t\n}",identifier:"55"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"3":{p:1,n:"ring_background.png",g:"5",t:"@1x"},"-2":{n:"blank.gif"},"4":{p:2,n:"Human%20Crowd%20Cheer%2004.wav",g:"83",t:"audio/wav"},"0":{p:1,n:"mainBackdrop.jpg",g:"79",o:true,t:"@1x"},"1":{p:1,n:"summaryBackdrop.jpg",g:"81",o:true,t:"@1x"},"2":{n:"triviaInfo.js"},"-1":{n:"PIE.htc"}},h,[],d,[{n:"splash",o:"1",X:[0]},{n:"main",o:"11",X:[1]},{n:"summary",o:"46",X:[2]}],[{A:{a:[{p:4,h:"10"}]},o:"3",p:"600px",cA:false,Y:1024,Z:768,c:"#FFFFFF",L:[],bY:1,d:1024,U:{},T:{"9_hover":{i:"9_hover",n:"9_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#0433FF",s:"#00F900",o:"86"},{f:"c",y:0,z:1,i:"B",e:"#0433FF",s:"#00F900",o:"86"},{f:"c",y:0,z:1,i:"C",e:"#0433FF",s:"#00F900",o:"86"},{f:"c",y:0,z:1,i:"D",e:"#0433FF",s:"#00F900",o:"86"},{f:"c",y:0,z:1,i:"A",e:"#0433FF",s:"#00F900",o:"86"},{y:1,i:"G",s:"#0433FF",z:0,o:"86",f:"c"},{y:1,i:"B",s:"#0433FF",z:0,o:"86",f:"c"},{y:1,i:"C",s:"#0433FF",z:0,o:"86",f:"c"},{y:1,i:"D",s:"#0433FF",z:0,o:"86",f:"c"},{y:1,i:"A",s:"#0433FF",z:0,o:"86",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:3,b:[],a:[{f:"h",y:0,z:1,i:"a",e:0,s:-960,o:"87"},{y:1,i:"a",s:0,z:0,o:"87",f:"c"},{f:"h",y:1,z:1,i:"a",e:387,s:-405,o:"84"},{f:"h",y:2,z:1,i:"a",e:291,s:-619,o:"86"},{y:2,i:"a",s:387,z:0,o:"84",f:"c"},{y:3,i:"a",s:291,z:0,o:"86",f:"c"}],f:30}},bZ:180,O:["85","87","84","86"],n:"Untitled Layout","_":0,v:{"87":{G:"#00F900",bB:3,aU:8,c:1008,d:101,bC:3,aV:8,r:"inline",s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:64,Z:"break-word",v:"bold",i:"title1",w:"TRIVIA TITLE HERE",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:-960,bA:"#000000",F:"center",b:66},"86":{b:623,z:4,K:"Solid",c:449,L:"Solid",d:103,aS:6,M:12,bD:"none",N:12,aT:6,O:12,aU:6,P:12,i:"startButton",aV:6,j:"absolute",aI:20,k:"div",aJ:20,aK:20,aL:20,A:"#00F900",B:"#00F900",aM:"9_hover",Z:"break-word",C:"#00F900",r:"inline",s:"Optima,'Lucida Grande',Helvetica,sans-serif",D:"#00F900",t:96,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"11"}]},F:"center",G:"#00F900",aP:"pointer",w:"START",x:"visible",I:"Solid",a:-619,y:"preserve",J:"Solid"},"85":{h:"5",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:1,d:768},"84":{aU:8,bB:2,G:"#00F900",aV:8,bC:2,r:"inline",s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:36,Z:"break-word",v:"bold",i:"byline",w:"by Ethan Nunn",j:"absolute",x:"visible",yy:"nowrap",aZ:0,y:"preserve",k:"div",z:3,aS:8,aT:8,a:-405,bA:"#000000",F:"center",b:199}}},{A:{a:[{p:4,h:"28"}]},o:"13",p:"600px",cA:false,Y:1024,Z:768,c:"#FFFFFF",L:[],bY:1,d:1024,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:20,b:[],a:[{f:"b",y:3,z:10,i:"c",e:0,s:760,o:"91"},{f:"b",y:3,z:10,i:"a",e:50,s:810,o:"90"},{f:"c",y:3,z:0.15,i:"w",e:"&nbsp;950",s:"1000",o:"95"},{f:"b",y:3,z:10,i:"a",e:75,s:835,o:"95"},{f:"c",y:3.15,z:0.15,i:"w",e:"&nbsp;900",s:"&nbsp;950",o:"95"},{f:"c",y:4,z:0.15,i:"w",e:"&nbsp;850",s:"&nbsp;900",o:"95"},{f:"c",y:4.15,z:0.15,i:"w",e:"&nbsp;800",s:"&nbsp;850",o:"95"},{f:"c",p:2,y:5,z:2,i:"ActionHandler",e:{a:[{p:4,h:"43"}]},s:{a:[{p:4,h:"43"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:5,z:0.15,i:"w",e:"&nbsp;750",s:"&nbsp;800",o:"95"},{f:"c",y:5.15,z:0.15,i:"w",e:"&nbsp;700",s:"&nbsp;750",o:"95"},{f:"c",y:6,z:0.15,i:"w",e:"&nbsp;650",s:"&nbsp;700",o:"95"},{f:"c",y:6.15,z:0.15,i:"w",e:"&nbsp;600",s:"&nbsp;650",o:"95"},{f:"c",p:2,y:7,z:2,i:"ActionHandler",e:{a:[{p:4,h:"43"}]},s:{a:[{p:4,h:"43"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:7,z:0.15,i:"w",e:"&nbsp;550",s:"&nbsp;600",o:"95"},{f:"c",y:7.15,z:0.15,i:"w",e:"&nbsp;500",s:"&nbsp;550",o:"95"},{f:"c",y:8,z:0.15,i:"w",e:"&nbsp;450",s:"&nbsp;500",o:"95"},{f:"c",y:8.15,z:0.15,i:"w",e:"&nbsp;400",s:"&nbsp;450",o:"95"},{f:"c",p:2,y:9,z:2,i:"ActionHandler",e:{a:[{p:4,h:"43"}]},s:{a:[{p:4,h:"43"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:9,z:0.15,i:"w",e:"&nbsp;350",s:"&nbsp;400",o:"95"},{f:"c",y:9.15,z:0.15,i:"w",e:"&nbsp;300",s:"&nbsp;350",o:"95"},{f:"c",y:10,z:0.15,i:"w",e:"&nbsp;250",s:"&nbsp;300",o:"95"},{f:"c",y:10.15,z:0.15,i:"w",e:"&nbsp;200",s:"&nbsp;250",o:"95"},{f:"c",p:2,y:11,z:3.15,i:"ActionHandler",e:{a:[{p:4,h:"45"}]},s:{a:[{p:4,h:"43"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:11,z:0.15,i:"w",e:"&nbsp;150",s:"&nbsp;200",o:"95"},{f:"c",y:11.15,z:0.15,i:"w",e:"&nbsp;100",s:"&nbsp;150",o:"95"},{f:"c",y:12,z:0.15,i:"w",e:"&nbsp;&nbsp;50",s:"&nbsp;100",o:"95"},{f:"c",y:12.15,z:0.15,i:"w",e:"&nbsp;&nbsp;&nbsp;0",s:"&nbsp;&nbsp;50",o:"95"},{y:13,i:"c",s:0,z:0,o:"91",f:"c"},{y:13,i:"a",s:50,z:0,o:"90",f:"c"},{y:13,i:"a",s:75,z:0,o:"95",f:"c"},{y:13,i:"w",s:"&nbsp;&nbsp;&nbsp;0",z:0,o:"95",f:"c"},{f:"c",p:2,y:14.15,z:5.15,i:"ActionHandler",e:{a:[{p:4,h:"55"}]},s:{a:[{p:4,h:"45"}]},o:"kTimelineDefaultIdentifier"},{f:"c",p:2,y:20,z:0,i:"ActionHandler",s:{a:[{p:4,h:"55"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["89","92","93","96","99","101","100","88","94","97","90","98","95","91"],n:"Untitled Layout","_":1,v:{"100":{G:"#00F900",aU:8,c:884,d:34,aV:8,r:"inline",e:1,s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerBDisplay",w:"ANSWER B, ANSWER B, ANSWER B, ANSWER B",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"}]},k:"div",y:"preserve",z:8,aS:8,aT:8,a:100,b:380},"89":{h:"79",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",c:1024,d:768,r:"inline"},"95":{b:671,G:"#FFFFFF",c:81,aU:8,d:42,aV:8,r:"inline",s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:36,Z:"break-word",v:"bold",i:"countdownText",w:"1000",j:"absolute",x:"visible",k:"div",y:"preserve",z:16,aS:8,tX:0.5,aT:8,a:835,tY:0.5},"91":{c:760,d:40,I:"None",J:"None",K:"None",g:"#0433FF",L:"None",M:0,i:"redSlider",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:13,P:0,D:"#D8DDE4",a:110,b:680},"101":{G:"#0433FF",aU:8,c:884,d:34,aV:8,cY:"0",e:1,s:"Optima,'Lucida Grande',Helvetica,sans-serif",r:"inline",t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerADisplay",w:"ANSWER A, ANSWER A, ANSWER A, ANSWER A",aA:{a:[{p:4,h:"44"}]},x:"visible",j:"absolute",k:"div",y:"preserve",z:7,aS:8,aT:8,a:100,b:310},"96":{c:830,d:160,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:10,i:"border1",N:10,aI:10,A:"#00F900",x:"visible",j:"absolute",O:10,aJ:10,k:"div",C:"#00F900",z:5,B:"#00F900",D:"#00F900",aK:10,P:10,a:100,aL:10,b:100},"92":{G:"#00F900",aU:8,c:284,aV:8,d:29,r:"inline",s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:24,Z:"break-word",v:"bold",i:"infoDisplay",w:"QUESTION XX OF YY",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,b:30},"97":{G:"#00F900",aU:8,c:884,d:34,aV:8,r:"inline",e:1,s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerEDisplay",w:"ANSWER E, ANSWER E, ANSWER E, ANSWER E",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"}]},k:"div",y:"preserve",z:12,aS:8,aT:8,a:100,b:590},"93":{G:"#00F900",aU:8,c:230,d:28,aV:8,r:"inline",e:1,s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:24,Z:"break-word",v:"bold",i:"scoreDisplay",w:"SCORE: +00000",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:750,b:30},"98":{c:820,d:40,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:15,i:"countdownDisplay1",N:15,aI:30,A:"#00F900",x:"visible",j:"absolute",O:15,aJ:30,k:"div",C:"#00F900",z:14,B:"#00F900",D:"#00F900",aK:30,P:15,a:100,aL:30,b:665},"94":{G:"#00F900",aU:8,c:884,d:34,aV:8,r:"inline",e:1,s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerDDisplay",w:"ANSWER D, ANSWER D, ANSWER D, ANSWER D",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"}]},k:"div",y:"preserve",z:10,aS:8,aT:8,a:100,b:520},"88":{G:"#00F900",aU:8,c:884,d:34,aV:8,r:"inline",e:1,s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerCDisplay",w:"ANSWER C, ANSWER C, ANSWER C, ANSWER C",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"}]},k:"div",y:"preserve",z:9,aS:8,aT:8,a:100,b:450},"99":{G:"#00F900",aU:8,c:768,d:127,aV:8,r:"inline",e:1,s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:28,Z:"break-word",v:"bold",i:"questionDisplay",w:"QUESTION QUESTION QUESTION QUESTION QUESTION<br> \nQUESTION QUESTION QUESTION QUESTION QUESTION<br> \nQUESTION QUESTION QUESTION QUESTION QUESTION ",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:131,b:133},"90":{c:120,d:70,I:"Solid",J:"Solid",K:"Solid",g:"#00F900",L:"Solid",M:15,i:"countdownDisplay2",N:15,aI:50,A:"#FFFB00",x:"visible",j:"absolute",O:15,aJ:50,k:"div",C:"#FFFB00",z:15,B:"#FFFB00",D:"#FFFB00",aK:50,P:15,a:810,aL:50,b:650}}},{A:{a:[{p:4,h:"54"},{p:12,o:"83",q:false}]},o:"48",p:"600px",cA:false,Y:1024,Z:768,c:"#FFFFFF",L:[],bY:1,d:1024,U:{},T:{"53_hover":{i:"53_hover",n:"53_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"B",e:"#0433FF",s:"#00F900",o:"104"},{f:"c",y:0,z:1,i:"C",e:"#0433FF",s:"#00F900",o:"104"},{f:"c",y:0,z:1,i:"D",e:"#0433FF",s:"#00F900",o:"104"},{f:"c",y:0,z:1,i:"A",e:"#0433FF",s:"#00F900",o:"104"},{f:"c",y:0,z:1,i:"G",e:"#0433FF",s:"#00F900",o:"104"},{y:1,i:"B",s:"#0433FF",z:0,o:"104",f:"c"},{y:1,i:"C",s:"#0433FF",z:0,o:"104",f:"c"},{y:1,i:"D",s:"#0433FF",z:0,o:"104",f:"c"},{y:1,i:"A",s:"#0433FF",z:0,o:"104",f:"c"},{y:1,i:"G",s:"#0433FF",z:0,o:"104",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["105","103","102","106","104"],n:"Untitled Layout","_":2,v:{"102":{G:"#00F900",aU:8,c:1008,d:244,aV:8,r:"inline",s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:64,Z:"break-word",v:"bold",i:"info1",w:"You scored XXXX points<br>\nout of a possible XXXXXX,<br> \nputting you at XX percent.",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:1,F:"center",b:222},"106":{aV:8,w:"",x:"visible",a:466,Z:"break-word",b:365,y:"preserve",j:"absolute",z:6,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:16,r:"inline",aU:8,G:"#000000"},"103":{G:"#00F900",aU:8,aV:8,r:"inline",s:"Optima,'Lucida Grande',Helvetica,sans-serif",X:20,t:96,Z:"break-word",v:"bold",i:"finished",w:"FINISHED",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:3,aS:8,aT:8,a:208,b:42},"104":{b:560,z:5,K:"Solid",c:398,L:"Solid",d:84,aS:6,M:10,bD:"none",N:10,aT:6,O:10,aU:6,P:10,i:"playAgain",aV:6,j:"absolute",aI:20,k:"div",aJ:20,aK:20,aL:20,A:"#00F900",B:"#00F900",aM:"53_hover",Z:"break-word",C:"#00F900",r:"inline",s:"Optima,'Lucida Grande',Helvetica,sans-serif",D:"#00F900",t:64,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",v:"bold",G:"#00F900",aP:"pointer",w:"Play Again?",x:"visible",I:"Solid",a:298,y:"preserve",J:"Solid"},"105":{h:"81",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",c:1024,d:768,r:"inline"}}}],{},g,{h:[[0,0,0.175,0.885,0.32,1.25,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
