/*!build time : 2014-09-24 10:42:24 AM*/
KISSY.add("kg/image-tagging/2.0.0/image-tagging",function(a,b,c,d){function e(d,h,i){e.Config.dynamic&&!g.used&&(g.used=!0,g.on("globalInterval",p),c.on(window,"resize",p));var j=this,k={};a.mix(k,i),k.picNode=b.get(d),d=k.picNode,k.coords=h,this.tagNodes=[],this.wrapNode=null,d&&h&&(f||(f=b.create('<div class="ks-tagging-container"></div>'),b.addStyleSheet(".ks-tagging-container {position:absolute;top:0;left:0;}"),b.append(f,b.get("body")),b.addStyleSheet(".ks-tag-wrap {position:absolute;}")),g.timer||(g.timer=a.later(function(){l()},this.constructor.Config.timerInterval,!0)),d.complete?(a.log("Render Run"),j._renderPic(k)):m(k,j))}var f=null,g={timer:null,used:!1},h=0,i=[],j=[],k=0;a.mix(g,a.EventTarget);var l=function(){g.fire("globalInterval")},m=function(a,b){i.push([a,b]),h||(g.on("globalInterval",n),h=1)},n=function(){for(var a=0;a<i.length;a++)i[a][0].picNode.complete&&(i[a][1]._renderPic(i[a][0]),i.splice(a,1));0===i.length&&(g.detach("globalInterval",n),h=0)},o=function(a){var c=a.img,d=a.wrapNode,e=parseInt(b.css(c,"paddingTop"),10),f=parseInt(b.css(c,"paddingLeft"),10),g=parseInt(b.css(c,"borderTopWidth"),10),h=parseInt(b.css(c,"borderLeftWidth"),10),i=b.offset(c),j=i.top,k=i.left;b.css(d,{top:j+e+g,left:k+f+h})},p=function(){a.log("process Run"),a.each(j,function(a){o(a)})},q={dynamic:!0,timerInterval:250,rules:{container:"",imageClass:"",imageIgnoreClass:"",minWidth:400,minHeight:400,ratio:.5}};return e.Config=a.mix({},q),a.augment(e,a.EventTarget,{_renderPic:function(c){var g=c.picNode,h=c.coords,i=b.width(g),l=b.height(g);if(!(i<e.Config.rules.minWidth||l<e.Config.rules.minHeight||e.Config.rules.imageIgnoreClass&&b.hasClass(g,e.Config.rules.imageIgnoreClass)||e.Config.rules.imageClass&&!b.hasClass(g,e.Config.rules.imageClass)||e.Config.rules.ratio&&Math.min(i/l,l/i)<e.Config.rules.ratio)){var m=parseInt(b.css(g,"paddingTop"),10),n=parseInt(b.css(g,"paddingLeft"),10),o=parseInt(b.css(g,"borderTopWidth"),10),p=parseInt(b.css(g,"borderLeftWidth"),10),q=b.offset(g),r=q.top,s=q.left,t=b.create('<div class="ks-tag-wrap"></div>'),u=b.create('<div class="ks-tag-btnwrap"></div>'),v=c.tagClass?c.tagClass:"ks-tag",w=c.tagContent?c.tagContent:"",x="",y="",z=null;b.addClass(t,"ks-tagindex-"+k++),b.css(t,{top:r+m+o,left:s+n+p}),b.css(u,{position:"absolute",top:l,left:0}),b.append(u,t),b.append(t,f);for(var A=0;A<h.length;A++)a.isFunction(w)?(x=w({index:A}),!x&&(x="")):x=w,a.isFunction(v)?(y=v({index:A}),!y&&(y="")):y=v,z=b.create('<div class="'+y+'" tagindex="'+A+'">'+x+"</div>"),a.isNumber(h[A].bottom)&&!isNaN(h[A].bottom)?(b.append(z,u),b.css(z,{position:"absolute",bottom:h[A].bottom,left:h[A].left}),overlayNode=new d({srcNode:z,elCls:y,content:x,align:{node:u,points:["bl","bl"],offset:[h[A].left,h[A].bottom]}})):(b.append(z,t),b.css(z,{position:"absolute",top:h[A].top,left:h[A].left}),overlayNode=new d({srcNode:z,elCls:y,content:x,align:{node:t,points:["tl","tl"],offset:[h[A].left,h[A].top]}})),overlayNode.render(),overlayNode.show(),this.tagNodes.push(overlayNode);this.wrapNode=t,j.push({img:g,wrapNode:t})}},showAll:function(){a.each(this.tagNodes,function(a){a.show()})},hideAll:function(){a.each(this.tagNodes,function(a){a.hide()})},getTagNodes:function(){return this.tagNodes}}),e},{requires:["dom","event","overlay"]}),KISSY.add("kg/image-tagging/2.0.0/index",function(a,b){return b},{requires:["./image-tagging"]});