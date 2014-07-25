function Eminem_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
document.writeln('<option selected>Select a Chapter/Topic</option><option value="contents.html">Table of Contents</option><option value="overview.html">Overview</option><option value="setup.html">Setting Up the Web Site</option><option value="launch.html">Creating the Web Page That Launches the Application</option><option value="development.html">Application Development Considerations</option><option value="downloadservletguide.html">Packaging JNLP Applications in a Web Archive</option><option value="syntax.html">JNLP File Syntax</option><option value="examples.html">JNLP API Examples</option><option value="../../../tools/unix/javaws.html">javaws Command Line</option><option value="faq.html">FAQ</option><option value="http://download.oracle.com/javase/6/docs/jre/api/javaws/jnlp/index.html">JNLP API (JavaDoc)</option></select>');

