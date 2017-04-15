/**
 * Created by agussuhardi on 02/12/16.
 */

var dmp = new diff_match_patch();

function launch() {
  var text1 = document.getElementById('text1').textContent;
  var text2 = document.getElementById('text2').textContent;

    var d = dmp.diff_main(text1, text2);

  var ds = dmp.diff_prettyHtml(d);
  document.getElementById('outputdiv').innerHTML = ds;



  var link = document.getElementById('text2');
  link.style.display = 'none'; //or
  //link.style.visibility = 'hidden';



}
//window.onload = launch;
