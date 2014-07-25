// MASTHEAD MENUS - v.1.0.2
// COPYRIGHT SUN MICROSYSTEMS INC.
// QUESTIONS? webdesign -at- sun.com

// init values
flym = new Array();
posi = new Array();
nlnk = new Array();
glnk = new Array();
mitm = new Array();
mlnk = new Array();
toplink = new Array();
glinkstate = new Array();
glinknull = 'url('+cssdir+'/a2_menu_off.gif)';
glinkhover = "#ED9B09";	// main topic when active
glinkhighl = "#ED9B09";	// main topic when in that section
glinkdeflt = "#FFFFFF";	// main topic default
mitembgD = "#35556B";	// menu bg default
mitembgH = "#E97D19";	// menu bg hover
mitemlnD = "#A3B8CB";	// menu line default
mitemlnH = "#A14D00";	// menu line hover
omenu = null;
oitem = null;
ready = false;
clinks = false;
clkd = false;
thisdoc = document;
presetlink = 0;
ydif = 0;
xdif = 0;

//open flyout
function popfly(flyname){
	if (is.docom && ready){
		if (omenu != null && omenu != flyname){
			closefly();
		}else if(omenu != flyname){
			if (is.op7){
				moveit(flyname,flyname,(xdif + -18),(ydif + 0));
				moveit(0,1,(xdif + 0),(ydif + 0));
			}else if (is.op){
				moveit(flyname,flyname,2,(ydif + 0));
				moveit(0,1,(xdif + 0),(ydif + 0));
			}else if (is.iemac){
				moveit(flyname,flyname,-8,(ydif + 17));
				moveit(0,1,(xdif + -8),(ydif + 17));
			}
			clrtopic(flyname,true);
			flym[flyname].style.visibility = "visible";
			flym[0].style.visibility = "visible";
			omenu = flyname;
		}
	}
}

// close fly
function closefly(){
	if (is.docom && omenu != null && ready){
		clrtopic(omenu, null);
		flym[omenu].style.visibility = "hidden";
		flym[0].style.visibility = "hidden";
		omenu = null;
		colormenuitem(null);
	}
}

// color masthead bgs
function clrtopic(cid,clrval){
	if (clrval){
		if (clinks){
			nlnk[cid].style.backgroundColor = mitembgD;
		}else{
			nlnk[cid].style.backgroundImage = glinkbimg;
		}
		glnk[cid].style.textDecoration = "underline";
	}else{
		if (clinks){
			nlnk[cid].style.backgroundColor = "transparent";
		}else{
			nlnk[cid].style.backgroundImage = glinknull;
		}
		glnk[cid].style.textDecoration = glinkstate[cid];
	}
}

// color menu item
function colormenuitem(dc){
	if (oitem){
		var whichlink = oitem.split('.'); 
		if (whichlink[1] != 1){
			mitm[oitem].style.borderTop = "1px solid "+mitemlnD;
		}else{
			mitm[oitem].style.borderTop = "1px solid "+mitembgD;
		}
		mitm[oitem].style.backgroundColor =  mitembgD;
		mlnk[oitem].style.textDecoration = "none";
	}
	if (dc){
		mitm[dc].style.backgroundColor = mitembgH;
		mitm[dc].style.borderTop = "1px solid "+mitemlnH;
		mlnk[dc].style.textDecoration = "underline";
	}
	oitem = dc;
}

// position div
function moveit(flyname,origin,xoff,yoff){

	if (document.images['ip'+origin].x && !is.safari) {
		var plft = thisdoc.images['ip'+origin].x;
		var ptop = thisdoc.images['ip'+origin].y;
	}else if (posi[origin].offsetLeft > 0){
		var plft = posi[origin].offsetLeft;
		var ptop = posi[origin].offsetTop;
		var parr = posi[origin].offsetParent;
		while(parr != null){
			plft = plft + parr.offsetLeft;
			ptop = ptop + parr.offsetTop;
			parr = parr.offsetParent;
		}
	}
	plft = plft + xoff;
	ptop = ptop + yoff;
	flym[flyname].style.top=ptop+'px';
	if (flyname != 0){
		flym[flyname].style.left=plft+'px';
	}
}

//print divs
function printmenus(){

	if (is.docom){
		var clickaction = "";
		var flymenus = "";
		var mtwidth = mwidth + 20;
		var mtdwidth = mtwidth - 16;
		var x = 1;
		var xx = 1;
		while (navmenu[x+'.1']){
			var thismenu =  "";
			var topiclink = navmenu[x+'.0'].split('|'); 

			while (navmenu[x+'.'+xx]){ 
				var itemnlink = navmenu[x+'.'+xx].split('|'); 
				var ml = (xx != 1)? "s": "1";
				
				//omniture onclick code
				if(window.s_account){
					var clickaction = "if(!clkd){s_linkType='o';s_linkName='Masthead Menu: "+topiclink[0]+"';s_prop15=s_pageName;s_prop16='"+itemnlink[0]+"';s_lnk=s_co(this);s_gs(s_account);clkd=true;}";
					var fullclick = ' onclick="'+clickaction+'"';
				}else{
					var clickaction = "";
					var fullclick = "";
				}

				thismenu = thismenu+'<div style="background:'+mitembgD+'" class="menulink'+ml+'" onmouseover="colormenuitem(\''+x+'.'+xx+'\');" id="'+x+'.'+xx+'" onclick="'+clickaction+'document.location = \''+itemnlink[1]+'\'"><a href="'+itemnlink[1]+'" class="menulink" id="mlink'+x+'.'+xx+'" '+fullclick+'>'+itemnlink[0]+'<\/a><\/div>\n';
				xx++;
			}

			var itemnlink = navmenu[x+'.0'].split('|'); 
			if (itemnlink[1]){
				//omniture onclick code
				if(window.s_account){
					var clickaction = "if(!clkd){s_linkType='o';s_linkName='Masthead Menu: "+topiclink[0]+"';s_prop15=s_pageName;s_prop16='"+itemnlink[0]+" (bottom menu link)';s_lnk=s_co(this);s_gs(s_account);clkd=true;}";
					var fullclick = ' onclick="'+clickaction+'"';
				}else{
					var clickaction = "";
					var fullclick = "";
				}

				thismenu = thismenu+'<div style="width:'+mwidth+'px" class="menulink'+ml+'" onmouseover="colormenuitem(\''+x+'.0\');" id="'+x+'.0" onclick="'+clickaction+'document.location = \''+itemnlink[1]+'\'"><a href="'+itemnlink[1]+'" class="menulink" id="mlink'+x+'.0" '+fullclick+' title="'+seeall+' '+itemnlink[0]+'">'+seeall+' <img src="'+imdir+'/a.gif" width="1" height="1" alt="'+itemnlink[0]+'" border="0"><\/a>&raquo;<\/div><\/td>\n<\/tr>\n';
			}
			flymenus = flymenus+'\n<div class="flymenus" style="width:'+mtwidth+'px" id="flymenu'+x+'" onmouseover="popfly('+x+');"><div style="background:'+mitembgD+';z-index:26"><img src="'+imdir+'\/a.gif" alt="'+itemnlink[0]+'" height="1" width="1" border="0">'+thismenu+'</div><table cellpadding="0" cellspacing="0" border="0" class="menucorners" width="'+mtwidth+'">\n<tr><td class="cornerBL">&nbsp;</td><td class="cornerBR">&nbsp;</td></tr>\n</table>\n</div>';
			mitm[x] = xx;
			x++;
			xx = 1;
		}
	document.write(flymenus+'\n<div id="offdiv" onmouseover="javascript:closefly();"><img src="'+imdir+'\/a.gif" alt="" height="500" width="1" border="0"><\/div>\n');
	}
}

//prep menus and highlight section
function prepmenus(){
	if (is.docom){
		toplink[0] = null;
		// determine section from breadcrumb or URL
		if (thisdoc.getElementById('breadcrumb') && presetlink == 0){
			aa = thisdoc.getElementById('breadcrumb').getElementsByTagName('a');
			if(aa[1]){
				mktoplink(aa[1]);
			}
		}else if (presetlink == 0){
			var allt = document.all? document.all : document.getElementsByTagName("div");
			for (var i=0;i<allt.length;i++){
				if (allt[i].className=="breadcrumb"){
					aa = allt[i].getElementsByTagName('a');
					if(aa[1]){
						mktoplink(aa[1]);
					}
					break;
				}
			}
			if (!toplink[0]){
				mktoplink(document.location);
			}
		}

	if(thisdoc.getElementById('glink1') && thisdoc.getElementById('flymenu1')){
			//prep menus & arrays
			var x = 1;
			while (navmenu[x+'.1']){
				glnk[x] = thisdoc.getElementById('glink'+x);
				nlnk[x] = thisdoc.getElementById('navlink'+x);
				flym[x] = thisdoc.getElementById('flymenu'+x);
				posi[x] = thisdoc.getElementById('ip'+x);
				for (var i=0;i<=mitm[x];i++){
					mitm[x+'.'+i] = thisdoc.getElementById(x+'.'+i);		
					mlnk[x+'.'+i] = thisdoc.getElementById('mlink'+x+'.'+i);		
				}
				moveit(x,x,(xdif + -18),(ydif + 2));
				if (presetlink == 0){
					ttlink = navmenu[x+'.0'].split('|');
					if (ttlink[1].indexOf("/index\.") > -1){
						ttlink = /(\/.*\/)index\..*/.exec(ttlink[1]);
					}
					hoverhighlight(x,ttlink[1]);
				}else{
					hoverhighlight(x,presetlink);
				}
				x++;
			}
			flym[0] = thisdoc.getElementById('offdiv');
			moveit(0,1,0,(ydif + 2));
			ready = true;
		}
		if (thisdoc.getElementById('a2v0')||thisdoc.getElementById('a2v4')){
			clinks = true;
		}
		if (thisdoc.getElementById('a2v2')||thisdoc.getElementById('a2v5')){
			glinkbimg = 'url('+cssdir+'/a2_menu_on_s.gif)';
		}else{
			glinkbimg = 'url('+cssdir+'/a2_menu_on.gif)';
		}
	}
}

//reposition divs
window.onresize = movin;
function movin(){
	if (is.docom && ready){
		moveit(0,1,0,(ydif + 2));
		var x = 1;
		while (navmenu[x+'.1']){
			moveit(x,x,(xdif + -18),(ydif + 2));
			x++;
		}
	}
}

// mk toplink
function mktoplink(inger){
		toplink[0] = inger;
		tplink = /\w+:\/\/[^\/]+(\/.*)/.exec(inger);
		toplink[1] = tplink[1];
	if (toplink[1].indexOf("/index\.") > -1){
		tplink = /(\/?.*\/)index\..*/.exec(tplink[1]);
		toplink[2] = tplink[1];
	}else{
		toplink[2] = "";
	}
}

//set hover arrays & highlight 
function hoverhighlight(thisglink,thisgtitle){
	glinkstate[thisglink] = "none";
	var x = 0;
	if (toplink[x]){
		while(toplink[x]){
			if (thisgtitle == toplink[x]){
				glnk[thisglink].style.textDecoration = "underline";
				glinkstate[thisglink] = "underline";
				break;
			}
			x++;	
		}
	}else if (thisgtitle == thisglink){
		glnk[thisglink].style.textDecoration = "underline";
		glinkstate[thisglink] = "underline";
	}
}
