(this["webpackJsonpcorexy-playground"]=this["webpackJsonpcorexy-playground"]||[]).push([[0],{12:function(t,o,i){},17:function(t,o,i){"use strict";i.r(o);var e=i(1),n=i.n(e),c=i(7),r=i.n(c),b=(i(12),i(2)),s=i(4),l=i(0);function d(t){var o=t.text,i=t.onClick;return Object(l.b)("button",{css:{height:30,width:30},onClick:i,children:o})}function a(t){var o=t.children,i=t.color,e=t.marginLeft,n=t.marginTop,c=t.rotation,r=t.size;return Object(l.b)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"space-around",color:"white",position:"absolute",width:r,height:r,borderRadius:"50%",backgroundColor:i||"brown",marginLeft:e,marginTop:n,transform:"rotate(".concat(c,"deg)")},children:o})}function h(t){var o=t.length;return Object(l.b)("span",{css:{backgroundColor:"#9BCA9B"},children:o})}function f(t){var o=t.backgroundColor,i=t.beltColors,e=t.beltWidth,n=t.offset,c=t.scale,r=t.showInfo;return Object(l.c)("div",{css:{boxSizing:"border-box",height:"100%",width:n.x,borderLeft:"".concat(e,"px solid ").concat(i[0]),paddingLeft:e},children:[Object(l.b)("div",{css:{position:"absolute",height:c-n.y,backgroundColor:o,opacity:.75,zIndex:-1,marginLeft:-e,width:n.x-e}}),Object(l.c)("div",{css:{boxSizing:"border-box",height:"100%",width:"100%",borderTop:"".concat(e,"px solid ").concat(i[0]),borderLeft:"".concat(e,"px solid ").concat(i[0]),borderTopLeftRadius:1.25*e},children:[r&&Object(l.b)("div",{css:{height:"45%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:Object(l.b)("div",{css:{marginBottom:"auto",marginTop:5},children:Object(l.b)(h,{length:n.x})})}),r&&Object(l.b)("div",{css:{height:"55%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:Object(l.b)("div",{css:{textAlign:"left",marginBottom:"auto",marginLeft:5},children:Object(l.b)(h,{length:c-n.y})})})]})]})}function u(t){var o=t.backgroundColor,i=t.beltColors,e=t.beltWidth,n=t.offset,c=t.scale,r=t.showInfo;return Object(l.c)("div",{css:{boxSizing:"border-box",height:"100%",borderRight:"".concat(e,"px solid ").concat(i[1]),flexGrow:1,paddingRight:e},children:[Object(l.b)("div",{css:{position:"absolute",height:c-n.y,backgroundColor:o,opacity:.75,zIndex:-1,width:c-n.x-e}}),Object(l.c)("div",{css:{boxSizing:"border-box",height:"100%",width:"100%",borderTop:"".concat(e,"px solid ").concat(i[1]),borderRight:"".concat(e,"px solid ").concat(i[1]),borderTopRightRadius:1.25*e},children:[r&&Object(l.b)("div",{css:{height:"45%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:Object(l.b)("div",{css:{marginBottom:"auto",marginTop:5},children:Object(l.b)(h,{length:c-n.x})})}),r&&Object(l.b)("div",{css:{height:"55%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:Object(l.b)("div",{css:{textAlign:"right",marginBottom:"auto",marginRight:5},children:Object(l.b)(h,{length:500-n.y})})})]})]})}function g(t){var o=t.backgroundColors,i=t.beltWidth,e=t.gearWidth,n=t.beltColors,c=t.offset,r=t.scale,b=t.showInfo;return Object(l.b)(l.a,{children:Object(l.c)("div",{css:{display:"flex",flexGrow:1},children:[Object(l.b)(a,{size:e,marginLeft:2*i}),Object(l.b)(a,{size:e,marginLeft:r-e-2*i}),Object(l.b)(j,{beltColor:n[0],beltWidth:i,gearColor:"black",marginLeft:-i,offset:c,rotation:2.5*(c.y-c.x),scale:r}),Object(l.b)(j,{beltColor:n[1],beltWidth:i,gearColor:"black",marginLeft:r-4*i,offset:c,rotation:2.5*(r-c.x-c.y),scale:r}),Object(l.b)(f,{backgroundColor:o[2],beltColors:n,beltWidth:i,offset:c,scale:r,showInfo:b}),Object(l.b)(u,{backgroundColor:o[3],beltColors:n,beltWidth:i,offset:c,showInfo:b,scale:r})]})})}function j(t){var o=t.beltColor,i=t.beltWidth,e=t.gearColor,n=t.marginLeft,c=t.offset,r=t.rotation,b=t.scale,s=5*i;return Object(l.c)("div",{css:{boxSizing:"border-box",paddingLeft:i,paddingRight:i,position:"absolute",width:s,height:s,borderRadius:"10%",backgroundColor:"grey",marginLeft:n,marginTop:b-c.y-.75*s},children:[Object(l.b)(a,{color:e,size:3*i,marginTop:i,rotation:r,children:"\u2191"}),Object(l.b)("div",{css:{height:s/2,borderLeft:"".concat(i,"px solid ").concat(o),borderRight:"".concat(i,"px solid ").concat(o)}})]})}function O(t){var o=t.backgroundColor,i=t.beltColors,e=t.beltWidth,n=t.offset,c=t.showInfo;return Object(l.c)("div",{css:{boxSizing:"border-box",borderLeft:"".concat(e,"px solid ").concat(i[0]),borderTopLeftRadius:1.25*e,height:n.y,width:n.x},children:[Object(l.b)("div",{css:{position:"absolute",height:n.y,backgroundColor:o,opacity:.75,zIndex:-1,width:n.x-e}}),Object(l.c)("div",{css:{boxSizing:"border-box",height:"100%",width:"100%",borderBottom:"".concat(e,"px solid ").concat(i[1]),borderLeft:"".concat(e,"px solid ").concat(i[1]),borderTopLeftRadius:1.25*e,borderBottomLeftRadius:1.25*e},children:[c&&Object(l.b)("div",{css:{height:"55%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:Object(l.b)("div",{css:{marginTop:"auto",textAlign:"left",marginLeft:5},children:Object(l.b)(h,{length:n.y})})}),c&&Object(l.b)("div",{css:{height:"45%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:Object(l.b)("div",{css:{marginTop:"auto",marginBottom:5},children:Object(l.b)(h,{length:n.x})})})]})]})}function x(t){var o=t.backgroundColor,i=t.beltColors,e=t.beltWidth,n=t.offset,c=t.scale,r=t.showInfo;return Object(l.c)("div",{css:{boxSizing:"border-box",borderRight:"".concat(e,"px solid ").concat(i[1]),borderTopRightRadius:1.25*e,height:"100%",flexGrow:1},children:[Object(l.b)("div",{css:{position:"absolute",height:n.y,backgroundColor:o,opacity:.75,zIndex:-1,width:c-n.x-e}}),Object(l.c)("div",{css:{boxSizing:"border-box",height:"100%",width:"100%",borderBottom:"".concat(e,"px solid ").concat(i[0]),borderRight:"".concat(e,"px solid ").concat(i[0]),borderTopRightRadius:1.25*e,borderBottomRightRadius:1.25*e},children:[r&&Object(l.b)("div",{css:{height:"55%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:Object(l.b)("div",{css:{marginTop:"auto",textAlign:"right",marginRight:5},children:Object(l.b)(h,{length:n.y})})}),r&&Object(l.b)("div",{css:{height:"45%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:Object(l.b)("div",{css:{marginTop:"auto",marginBottom:5},children:Object(l.b)(h,{length:c-n.x})})})]})]})}function p(t){var o=t.backgroundColors,i=t.beltWidth,e=t.gearWidth,n=t.beltColors,c=t.offset,r=t.scale,b=t.showInfo;return Object(l.c)(l.a,{children:[Object(l.c)("div",{css:{position:"absolute",paddingLeft:10},children:[Object(l.b)("div",{css:{marginTop:4,position:"absolute",width:r-20,borderTop:"".concat(i,"px solid ").concat(n[0]),transform:"rotate(1deg)"}}),Object(l.b)("div",{css:{marginTop:4,position:"absolute",width:r-20,borderTop:"".concat(i,"px solid ").concat(n[1]),transform:"rotate(-1deg)"}})]}),Object(l.b)(a,{size:e}),Object(l.b)(a,{size:e,marginLeft:r-e}),Object(l.b)(a,{size:e,marginLeft:i,marginTop:c.y-e}),Object(l.b)(a,{size:e,marginLeft:r-e-i,marginTop:c.y-e}),Object(l.c)("div",{css:{display:"flex"},children:[Object(l.b)(O,{backgroundColor:o[0],beltColors:n,beltWidth:i,offset:c,scale:r,showInfo:b}),Object(l.b)(x,{backgroundColor:o[1],beltColors:n,beltWidth:i,offset:c,scale:r,showInfo:b})]})]})}var v=["#0072B2","#F0E442"],C=["#CC79A7","#56B4E9","#D55E00","#009E73"],m=["none","none","none","none"];var M=function(){var t=Object(e.useState)({leftMotorPosition:0,rightMotorPosition:0}),o=Object(s.a)(t,2),i=o[0],n=i.leftMotorPosition,c=i.rightMotorPosition,r=o[1],a=Object(e.useState)(m),h=Object(s.a)(a,2),f=h[0],u=h[1],j=Object(e.useState)(!1),O=Object(s.a)(j,2),x=O[0],M=O[1],w=window,y=w.innerWidth,k=w.innerHeight,P=Object(e.useMemo)((function(){return y>550?500:y>450?400:350}),[y]),T=.14*P,L=Object(e.useMemo)((function(){return{x:y/2,y:.95*k/2-P/2}}),[P,y,k]),R=Object(e.useMemo)((function(){return{x:Math.round(P/2-n-c),y:Math.round(P/2+n-c)}}),[P,n,c]),z=function(){B((function(t){return Object(b.a)(Object(b.a)({},t),{},{leftMotorPosition:t.leftMotorPosition+3})}))},I=function(){B((function(t){return Object(b.a)(Object(b.a)({},t),{},{rightMotorPosition:t.rightMotorPosition-3})}))},W=function(){B((function(t){return Object(b.a)(Object(b.a)({},t),{},{leftMotorPosition:t.leftMotorPosition-3})}))},B=function(t){r((function(o){var i=t(o);return Math.abs(i.leftMotorPosition)+Math.abs(i.rightMotorPosition)<=180?i:o}))},D=Object(e.useCallback)((function(t,o){for(var i=(o-t)/2,e=(P-t-o)/2,r=i-i%3,b=e-e%3,s=r-n,l=b-c,d=Math.max(Math.abs(s),Math.abs(l))/3,a=s/d,h=l/d,f=function(t){window.setTimeout((function(){B((function(t){return{leftMotorPosition:t.leftMotorPosition+a,rightMotorPosition:t.rightMotorPosition+h}})),t===d&&B((function(t){return{leftMotorPosition:r,rightMotorPosition:b}}))}),0)},u=0;u<=d;u++)f(u)}),[P,n,c]),S=Object(e.useCallback)((function(t,o){if(t&&o){var i=o-L.y+P/2,e=t-L.x+P/2,n=(i-e)/2,c=(P-e-i)/2;B((function(t){return{leftMotorPosition:n>=t.leftMotorPosition+3||n<=t.leftMotorPosition-3?n-n%3:t.leftMotorPosition,rightMotorPosition:c>=t.rightMotorPosition+3||c<=t.rightMotorPosition-3?c-c%3:t.rightMotorPosition}}))}}),[L.x,L.y,P]);return Object(l.c)("div",{css:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",minHeight:"95vh",flexDirection:"column",backgroundColor:"gainsboro"},children:[Object(l.c)("div",{css:{display:"flex",flexDirection:"column",height:P,width:P,backgroundColor:"white",borderRadius:12.5,zIndex:0},onDragOver:function(t){t.preventDefault()},children:[Object(l.b)("div",{css:{position:"absolute",height:P-2*T,width:P-2*T,marginLeft:T,marginTop:T,zIndex:2,cursor:"crosshair"},onClick:function(t){var o=t.nativeEvent.offsetX+T,i=t.nativeEvent.offsetY+T;D(o,i)}}),Object(l.b)("div",{css:{position:"absolute",height:P-2*T,width:P-2*T,marginLeft:T,marginTop:T,border:"2px solid black",backgroundColor:"silver",zIndex:-1}}),Object(l.b)("div",{draggable:"true",onTouchMove:function(t){var o=t.changedTouches[0],i=o.clientX,e=o.clientY;S(i,e)},onDrag:function(t){var o=t.clientX,i=t.clientY;S(o,i)},css:{position:"absolute",height:40,width:40,backgroundColor:"black",marginLeft:R.x-20,marginTop:R.y-20,cursor:"pointer",zIndex:3}}),Object(l.b)(p,{backgroundColors:f,beltWidth:10,gearWidth:25,beltColors:v,offset:R,scale:P,showInfo:x}),Object(l.b)(g,{backgroundColors:f,beltWidth:10,gearWidth:25,beltColors:v,offset:R,scale:P,showInfo:x})]}),Object(l.c)("div",{css:{width:P,height:P,backgroundColor:"lightsteelblue"},children:[Object(l.c)("div",{css:{display:"flex"},children:[Object(l.c)("div",{css:{flex:"1 1 0px"},children:[Object(l.c)("h2",{children:[Math.round(5*n),"\xb0"]}),Object(l.b)(d,{text:"\u27f2",onClick:function(){W()}}),Object(l.b)(d,{text:"\u27f3",onClick:function(){z()}}),Object(l.b)("h4",{children:"Rotate Left Motor"})]}),Object(l.c)("div",{css:{flex:"1 1 0px"},children:[Object(l.b)("h3",{children:"x:".concat(-(P/2-R.x),", y:").concat(P/2-R.y)}),Object(l.c)("div",{children:[Object(l.b)(d,{text:"\u2196",onClick:function(){B((function(t){return Object(b.a)(Object(b.a)({},t),{},{rightMotorPosition:t.rightMotorPosition+3})}))}}),Object(l.b)(d,{text:"\u2191",onClick:function(){B((function(t){return{leftMotorPosition:t.leftMotorPosition-3,rightMotorPosition:t.rightMotorPosition+3}}))}}),Object(l.b)(d,{text:"\u2197",onClick:function(){W()}})]}),Object(l.c)("div",{children:[Object(l.b)(d,{text:"\u2190",onClick:function(){B((function(t){return{leftMotorPosition:t.leftMotorPosition+3,rightMotorPosition:t.rightMotorPosition+3}}))}}),Object(l.b)(d,{text:"\u2022",onClick:function(){B((function(t){return{leftMotorPosition:0,rightMotorPosition:0}}))}}),Object(l.b)(d,{text:"\u2192",onClick:function(){B((function(t){return{leftMotorPosition:t.leftMotorPosition-3,rightMotorPosition:t.rightMotorPosition-3}}))}})]}),Object(l.c)("div",{children:[Object(l.b)(d,{text:"\u2199",onClick:function(){z()}}),Object(l.b)(d,{text:"\u2193",onClick:function(){B((function(t){return{leftMotorPosition:t.leftMotorPosition+3,rightMotorPosition:t.rightMotorPosition-3}}))}}),Object(l.b)(d,{text:"\u2198",onClick:function(){I()}})]}),Object(l.b)("h4",{children:"Move Tool"})]}),Object(l.c)("div",{css:{flex:"1 1 0px"},children:[Object(l.c)("h2",{children:[Math.round(5*c),"\xb0"]}),Object(l.b)(d,{text:"\u27f2",onClick:function(){I()}}),Object(l.b)(d,{text:"\u27f3",onClick:function(){B((function(t){return Object(b.a)(Object(b.a)({},t),{},{rightMotorPosition:t.rightMotorPosition+3})}))}}),Object(l.b)("h4",{children:"Rotate Right Motor"})]})]}),Object(l.c)("div",{children:[Object(l.b)("p",{css:{marginTop:0},children:"Move the tool using the buttons above, clicking on the bed, or dragging it."}),Object(l.b)("p",{children:"Use the buttons below to help visualize how the belts are moving."})]}),Object(l.c)("div",{children:[Object(l.c)("button",{onClick:function(){u(f===m?C:m)},children:[f===m?"Show":"Hide"," Belt Quadrants"]}),Object(l.c)("button",{onClick:function(){M((function(t){return!t}))},children:[x?"Hide":"Show"," Belt Lengths"]})]})]})]})},w=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(o){var i=o.getCLS,e=o.getFID,n=o.getFCP,c=o.getLCP,r=o.getTTFB;i(t),e(t),n(t),c(t),r(t)}))},y=i(3);r.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root")),w()}},[[17,1,2]]]);
//# sourceMappingURL=main.2f9185d4.chunk.js.map