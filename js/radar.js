//var slider = document.getElementById("f0").value;
//var output = document.getElementById("demo");
//output.innerHTML = slider.value;

//slider.oninput = function() {
//  output.innerHTML = this.value;
//}

var cfp =  document.getElementById('form');
function media(form){
  if(form.matches){
    cfp.classList.remove('row');
  }
}




///FOOD
function F_infoCard_0(){
  var fcard0 = document.getElementById("F_card");
   fcard0.classList.toggle("F_C");
}

function F_infoCard_1(){
  var fcard1 = document.getElementById("F_card_1");
   fcard1.classList.toggle("F_C_1");
}

function F_infoCard_2(){
  var fcard2 = document.getElementById("F_card_2");
   fcard2.classList.toggle("F_C_2");
}

function F_infoCard_3(){
  var fcard3 = document.getElementById("F_card_3");
   fcard3.classList.toggle("F_C_3");
}

function F_infoCard_4(){
  var fcard4 = document.getElementById("F_card_4");
   fcard4.classList.toggle("F_C_4");
}


///ENERGY
function E_infoCard_0(){
  var ecard0 = document.getElementById("E_card");
   ecard0.classList.toggle("E_C");
}

function E_infoCard_1(){
  var ecard1 = document.getElementById("E_card_1");
   ecard1.classList.toggle("E_C_1");
}

function E_infoCard_2(){
  var ecard2 = document.getElementById("E_card_2");
   ecard2.classList.toggle("E_C_2");
}

function E_infoCard_3(){
  var ecard3 = document.getElementById("E_card_3");
   ecard3.classList.toggle("E_C_3");
}

function E_infoCard_4(){
  var ecard4 = document.getElementById("E_card_4");
   ecard4.classList.toggle("E_C_4");
}


///TRANSPORTATION
function T_infoCard_0(){
  var tcard0 = document.getElementById("T_card");
   tcard0.classList.toggle("T_C");
}

function T_infoCard_1(){
  var tcard1 = document.getElementById("T_card_1");
   tcard1.classList.toggle("T_C_1");
}

function T_infoCard_2(){
  var tcard2 = document.getElementById("T_card_2");
   tcard2.classList.toggle("T_C_2");
}

function T_infoCard_3(){
  var tcard3 = document.getElementById("T_card_3");
   tcard3.classList.toggle("T_C_3");
}

function T_infoCard_4(){
  var tcard4 = document.getElementById("T_card_4");
   tcard4.classList.toggle("T_C_4");
}

function reload(){
	location.reload();
};

function index(){
  var indexdata = document.getElementById("index");
   indexdata.classList.toggle("index-result");
}

function charting(){

var disForm = document.getElementById('form').style.display = 'none';
var disText = document.getElementById('text').style.display = 'none';
var showFormula = document.getElementById('CFP-form').style.display = 'block';

document.getElementById('chart-container').style.display = 'block';



document.getElementById("toggle-results").style.display = "block";

  //variables for removing sliders
  // when function charting() ==> remove css #text, #form
  new RGraph.SVG.Rose({
    id: 'chart-container',
    data:
      [
          //tn
          ( Number(document.getElementById("t0").value) + 
          Number(document.getElementById("t1").value) +
          Number(document.getElementById("t2").value) + 
          Number(document.getElementById("t3").value) + 
          Number(document.getElementById("t4").value))/5
          ,
          //fn
          //PRODUCE AN EQUATION FOR RETURNING A SMALLER VALUE FOR fn
          (Number(document.getElementById("f0").value) +
          (Number(document.getElementById("f1").value) +
            (//SET of MEATS 
            + Number(document.getElementById("p0").value)
            + Number(document.getElementById("p1").value)
            + Number(document.getElementById("p2").value)
            + Number(document.getElementById("p3").value)
            )*.25
          ) + 
          Number(document.getElementById("f2").value) + 
          Number(document.getElementById("f3").value) + 
          Number(document.getElementById("f4").value))/5
          ,

          //en 
          (Number(document.getElementById("e0").value)*.25 + Number(document.getElementById("e1").value) + Number(document.getElementById("e2").value) + Number(document.getElementById("e3").value))/4
          ,

        ],
    options: {
         colors: [ 'rgba(255,0,0,0.5)', 'rgba(0,255,0,0.5)', 'rgba(0,0,255,0.5)' ],
          backgroundGridRadialsCount: 0,
          linewidth: 0,
          amargin: '10deg',
          labels: ['Transportation','Food','Energy'],
          tooltips: '%{property:labels[%{dataset}]}',
          linewidth: .5
      }


  }).draw();


  //INPUT
  let CFP =  {
    fscore: 
    (
     Number(document.getElementById("f0").value) +
    (Number(document.getElementById("f1").value) +
        (//SET of MEATS 
        + Number(document.getElementById("p0").value)
        + Number(document.getElementById("p1").value)
        + Number(document.getElementById("p2").value)
        + Number(document.getElementById("p3").value)
        )*.25
      ) + 
      Number(document.getElementById("f2").value) + 
      Number(document.getElementById("f3").value) + 
      Number(document.getElementById("f4").value)
      )/5
    ,

    escore: (
      Number(document.getElementById("e0").value)*.25 + 
      Number(document.getElementById("e1").value) + 
      Number(document.getElementById("e2").value) + 
      Number(document.getElementById("e3").value)
    )/4,

    tscore: (
      Number(document.getElementById("t0").value) + 
      Number(document.getElementById("t1").value) + 
      Number(document.getElementById("t2").value) + 
      Number(document.getElementById("t3").value) + 
      Number(document.getElementById("t4").value)
    )/5,

    grab: {
        F: document.getElementById('F'),
        E: document.getElementById('E'),
        T: document.getElementById('T')
      },
    index: { //INDEX OBJ

      food: {
        low: {
          f_l_sum: [//ARR FOR AN INDEX OF FSCORE METRICS
            "You're leaving behind a low footprint with food, based on the FET Scale. But always keep in mind what can cause your CFP to rise: <br>",
            "Your intake of meatbased protein is ",//1
            "",//2
            "",//3
            "",//4
            ""//5

          ],

        },
        med: {
          f_m_sum: [
            "<p> You're leaving behind a medium footprint with food based on the FET Scale. But always keep in mind what can cause your CFP to rise:</p><br>",//0
            "",//1
            "",//2
            "",//3
            "",//4
            ""//5

          ],
        },
        high: {
          f_h_sum: [
            "<p> You're leaving behind a high footprint with food based on the FET Scale. But always keep in mind what can cause your CFP to rise:</p><br>",//0
            "<br>", //1
            "<br>",//2
            "<br>",//3
            "<br>",//4
            "<br>"//5

          ],
        }
      },

    }
   };
  CFP.grab.F.innerHTML = CFP.fscore;
  CFP.grab.E.innerHTML = CFP.escore;
  CFP.grab.T.innerHTML = CFP.tscore;


    if ( CFP.fscore <= 3.33333333 ) {
      document.getElementById("F_data").style.display = "block";
      document.getElementById("F_inner").innerHTML = "<p>Low CFP: </p><br>".concat(CFP.index.food.low.f_l_sum[0]);
    } else if(CFP.fscore > 3.33333333 || CFP.fscore <= 6.66666667) {
        document.getElementById("F_data").style.display = "block";
        document.getElementById("F_inner").innerHTML = "Medium CFP";
    } else {
          document.getElementById("F_data").style.display = "block";
          document.getElementById("F_inner").innerHTML = "High CFP";
    }

}


//DISPLAY VALUES OF MV, AND ADULTS
var hinput = document.getElementById("e0");
var houtput = document.getElementById("e0_display");
houtput.innerHTML = hinput.value;
hinput.oninput = function() {
  houtput.innerHTML = this.value;
}

var vehicleinput = document.getElementById("hr");
var vehicleoutput = document.getElementById("hr_display");
vehicleoutput.innerHTML = vehicleinput.value;
vehicleinput.oninput = function() {
  vehicleoutput.innerHTML = this.value;
}

var miinput = document.getElementById("mi");
var mioutput = document.getElementById("mi_display");
mioutput.innerHTML = miinput.value;
miinput.oninput = function() {
  mioutput.innerHTML = this.value;
}


//RESULTS CODE



  

