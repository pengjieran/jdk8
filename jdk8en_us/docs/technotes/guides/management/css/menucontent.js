// MASTHEAD MENUS CONTENT VARIABLES - v.1.1
// COPYRIGHT SUN MICROSYSTEMS INC.
// QUESTIONS? webdesign -at- sun.com

// SUN.COM link set v2.2

// translation for See All link at the end of each menu
seeall = "See All";

// set this to the location of your local css & im directories
cssdir = "css";
imdir = "css";

// sub menu width
mwidth = 150;

// array for all masthead menus
var navmenu = new Array();

// menus are organized using a two number decimel delineated system (1.2)
// the first number indicates which main topic link the menu belongs to.
// the second number indicates the order the sub topic link appears in the menu.

// the values for each item are then organized by a | delineated system (Link Name|URL)
// item X.0 MUST alway be the exact name of the main topic link as hardcoded in
// the masthead and must include a link that is the also the same.

// if the first main topic link was Products and it's URL was /products/ then you
// would start the products menu with... 
//
// navmenu['1.0'] = 'Products|/products/';

// if the main topic link is not a link to another page, but simply the title of your
// menu (i.e. Select A Topic) then you would set the [X.0] item to "|". this way the
// See All Item is not created at the bottom of the menu. like...
//
// navmenu['1.0'] = '|';

navmenu['1.0'] = 'Products|/products/';
navmenu['1.1'] = 'Software|/software/';
navmenu['1.2'] = 'Desktop Systems|/desktop/';
navmenu['1.3'] = 'Servers|/servers/';
navmenu['1.4'] = 'Storage|/storage/';
navmenu['1.5'] = 'Remanufactured Systems|/ibb/remanufactured';
navmenu['1.6'] = 'Financing|/sales/leasing/';

navmenu['2.0'] = 'Downloads|/download/';
navmenu['2.1'] = 'Solaris 10|/software/solaris/get.jsp';
navmenu['2.2'] = 'Java 2 Standard Edition|http://java.sun.com/j2se/downloads/';
navmenu['2.3'] = 'Developer Tools|http://www.sun.com/download/index.jsp?cat=Application%20Development&tab=3&subcat=Development%20Tools';
navmenu['2.4'] = 'Top Downloads|/download/index.jsp?tab=5';
navmenu['2.5'] = 'New Downloads|/download/index.jsp?tab=4';
navmenu['2.6'] = 'Patches &amp; Updates|/download/index.jsp?cat=Patches%20%26%20Updates&tab=3';

navmenu['3.0'] = 'Services &amp; Solutions|/servicessolutions/';
navmenu['3.1'] = 'Industry Solutions|/servicessolutions/industries/';
navmenu['3.2'] = 'Service Plans &amp; Warranties|/service/warrantiescontracts/';
navmenu['3.3'] = 'Consulting &amp; IT Services|/service/consulting/';
navmenu['3.4'] = 'Grid Computing|/servers/grid/ ';
navmenu['3.5'] = 'Utility Computing|/service/sungrid/overview.jsp';
navmenu['3.6'] = 'Managed Services|/service/managedservices/';
navmenu['3.7'] = 'Secure IT Network Services|/service/sunconnection/';
navmenu['3.8'] = 'Sun Solutions Portfolio|/servicessolutions/infrastructure/';

navmenu['4.0'] = 'Support|http://sunsolve.sun.com/pub-cgi/show.pl?target=home';
navmenu['4.1'] = 'Knowledgebase|http://sunsolve.sun.com';
navmenu['4.2'] = 'Sun System Handbook|http://sunsolve.sun.com/handbook_pub/';
navmenu['4.3'] = 'Patches &amp; Updates|http://sunsolve.sun.com/pub-cgi/show.pl?target=patchpage';
navmenu['4.4'] = 'Documentation|/documentation/';
navmenu['4.5'] = 'Service Plans &amp; Warranties|/service/warrantiescontracts/';
navmenu['4.6'] = 'Solaris 10 Support|/software/solaris/support.jsp';

navmenu['5.0'] = 'Training|/training/';
navmenu['5.1'] = 'Course Catalog|/training/catalog/';
navmenu['5.2'] = 'Certification|/training/certification/';
navmenu['5.3'] = 'Consulting Solutions|/training/team/';

navmenu['6.0'] = 'Research|http://research.sun.com/';
navmenu['6.1'] = 'Projects|http://research.sun.com/projects/';
navmenu['6.2'] = 'Events|http://research.sun.com/events/';
navmenu['6.3'] = 'Lab Downloads|http://research.sun.com/download/';
