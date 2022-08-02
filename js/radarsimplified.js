
var f0input = document.getElementById("f0");
var f0output = document.getElementById("f0_display");
f0output.innerHTML = f0input.value;
f0input.oninput = function() {
  f0output.innerHTML = this.value;
    if (f0input.value  == 1){
      f0output.innerHTML = " 1 -- Five or more servings of fruits and/or vegetablesper day, but little or no meat or no fish.";
    }  else if (f0input.value  == 2) {
      f0output.innerHTML = "2 -- Several servings of fruits and/ or vegetabes per day in addition to some meat and fish.";
    }   else if (f0input.value == 3){
      f0output.innerHTML = "3 -- An equal balance of fruits, vegetables, and meat and/or fish.";
    } else if (f0input.value == 4){
      f0output.innerHTML = "4 -- Mostly foods such as breads, beef, chicken, and other meats and/or fish.";
    } else if (f0input.value == 5){
      f0output.innerHTML = "5 -- Mostly fast foods from local restuarant chains.";
    } else {
      f0input.innerHTML == 0;
    }
  }

  var f1input = document.getElementById("f1");
  var f1output = document.getElementById("f1_display");
  f1output.innerHTML = f1input.value;
  f1input.oninput = function() {
    f1output.innerHTML = this.value;
      if (f1input.value == 1){
        f1output.innerHTML = "1 -- I'm frugal with my budget for clothing and try to get the most out it, even if they go a bit out of style.";
      } else if (f1input.value == 2){
        f1output.innerHTML = "2 -- I try to get the most out of my clothes by wearing them out.";
      } else if (f1input.value == 3){
        f1output.innerHTML = "3 -- I think I'm average compared to other people I know in my purchase and disarding habits of my clothes.";
      } else if (f1input.value == 4){
        f1output.innerHTML = "4 -- I'm somewhat fashion conscious and don't mind spending money on new clothes occasionally.";
      } else if (f1input.value == 5){
        f1output.innerHTML = "5 -- I'm very fashion conscious and need to purchase and wear the latest fashions.";
      }
      else{
        f1output.innerHTML = 0;
      }
  }


  var f2input = document.getElementById("f2");
  var f2output = document.getElementById("f2_display");
  f2output.innerHTML = f2input.value;
  f2input.oninput = function() {
    f2output.innerHTML = this.value;
    if (f2input.value == 1){
      f2output.innerHTML = "1 -- I don't eat meat.";
    } else if (f2input.value == 2){
      f2output.innerHTML = "2 -- Chicken.";
    } else if (f2input.value == 3){
      f2output.innerHTML = "3 -- Seafood.";
    } else if (f2input.value == 4){
      f2output.innerHTML = "4 -- Lamb.";
    } else if (f2input.value == 5){
      f2output.innerHTML = "5 -- Beef.";
    }
  }

  var t0input = document.getElementById("t0");
  var t0output = document.getElementById("t0_display");
  t0output.innerHTML = t0input.value;
  t0input.oninput = function() {
    t0output.innerHTML = this.value;
    if (t0input.value == 1){
      t0output.innerHTML = "1 -- I never travel by private automobile.";
    } else if (t0input.value == 2){
      t0output.innerHTML = "2 -- On some days I travel by private automobile.";
    } else if (t0input.value == 3){
      t0output.innerHTML = "3 -- I travel by a combination of private automobile and public transportation.";
    } else if (t0input.value == 4){
      t0output.innerHTML = "4 -- I mostly travel by automobile.";
    } else if (t0input.value == 5){
      t0output.innerHTML = "5 --I always travel by automobile.";
    }
  }

  var t1input = document.getElementById("t1");
  var t1output = document.getElementById("t1_display");
  t1output.innerHTML = t1input.value;
  t1input.oninput = function() {
    t1output.innerHTML = this.value;
    if (t1input.value == 1){
      t1output.innerHTML = "1 -- I always travel by public transportation (buses or trains).";
    } else if (t1input.value == 2){
      t1output.innerHTML = "2 -- I mostly travel by public transportation.";
    } else if (t1input.value == 3){
      t1output.innerHTML = "3 -- I travel by a combination of private automobile and public transportation.";
    } else if (t1input.value == 4){
      t1output.innerHTML = "4 -- On same days I take public transportation.";
    } else if (t1input.value == 5){
      t1output.innerHTML = "5 -- I never travel by public transportation (buses or trains).";
    }
  }
  
  var e0input = document.getElementById("e0");
  var e0output = document.getElementById("e0_display");
  e0output.innerHTML = e0input.value;
  e0input.oninput = function() {
    e0output.innerHTML = this.value;
    if (e0input.value == 1){
      e0output.innerHTML = "1 -- We keep them until they wear out.";
    } else if(e0input.value == 2){
      e0output.innerHTML = "1 -- Sometimes, we get new appliances, even when the older ones are still functioning. But, we usually do so when it's needed.";
    } else if(e0input.value == 3){
      e0output.innerHTML = "3 -- We use and have about as many appliances as any other household. Sometimes we get new models.";
    } else if(e0input.value == 4){
      e0output.innerHTML = "4 -- We like to purchase new models, even though our current appliances are relatively new or have yet to age. In addition, extra appliances such as microwaves or airfryers are a must.";
    } else if(e0input.value == 5){
      e0output.innerHTML = "5 -- In my household, we have all the latest models with the best features possible. A high end range, a quality dishwashing machine, a great washer/dryer and so on.";
    }
  }


  var e1input = document.getElementById("e1");
  var e1output = document.getElementById("e1_display");
  e1output.innerHTML = e1input.value;
  e1input.oninput = function() {
    e1output.innerHTML = this.value;
    if (e1input.value == 1){
      e1output.innerHTML = "1 -- I try to get the most life out of my smart devices and computers until they wear out.";
    } else if (e1input.value == 2){
      e1output.innerHTML = "2 -- I try to get the most out of my smart devices, but I always get the latest smart phone.";
    } else if (e1input.value == 3){
      e1output.innerHTML = "3 -- I think I am average compared to other people purchasing and discarding habits of my smart phone and other gadgets.";
    } else if (e1input.value == 4){
      e1output.innerHTML = "4 - I tend to get bored or careless with all of my devices and I always spend money on new equipment.";
    } else if (e1input.value == 5){
      e1output.innerHTML = "5 -- I always purchase the latest devices and toss away my old equipment despite the cost.";
    }
  }

  
function charting(){

    var disForm = document.getElementById('form').style.display = 'none';
    var disText = document.getElementById('text').style.display = 'none';
    var showFormula = document.getElementById('CFP-form').style.display = 'block';
    
    document.getElementById('chart-container').style.display = 'block';

    document.getElementById('index').style.display = 'block';
    
    
    
    
    // document.getElementById("toggle-results").style.display = "block";
    
      //variables for removing sliders
      // when function charting() ==> remove css #text, #form
      new RGraph.SVG.Rose({
        id: 'chart-container',
        data:
          [
              //tn
              Number(document.getElementById("t0").value) + 
              Number(document.getElementById("t1").value)
              ,
              //fn
              //PRODUCE AN EQUATION FOR RETURNING A SMALLER VALUE FOR fn
              Number(document.getElementById("f0").value) +
              Number(document.getElementById("f1").value)+ 
              Number(document.getElementById("f2").value)
              ,
    
              //en 
              Number(document.getElementById("e0").value) + Number(document.getElementById("e1").value)
              ,
    
            ],
        options: {
             colors: [ 'rgba(255,0,0,0.5)', 'rgba(0,255,0,0.5)', 'rgba(0,0,255,0.5)' ],
              backgroundGridRadialsCount: 0,
              linewidth: 0,
              amargin: '10deg',
              labels: ['Transportation','Food(and clothing)','Energy'],
              tooltips: '%{property:labels[%{dataset}]}',
              linewidth: .5
          }
    
      }).draw();
      //toggle between fet cards
      window.scrollTo(0,-1000);
    }

    var index_hidden = {
      index0: document.getElementById('index-0'),
      // index1: document.getElementById('index-1').style.display="none",
      // index2: document.getElementById('index-2').style.display="none"
    }


  // FOOD FUNCTIONS INDEX================>
    function F0_Over(){
      document.getElementById('f_list_0').style.display="block";
    }
    function F0_Out(){
      document.getElementById('f_list_0').style.display="none";
    }
    function F1_Over(){
      document.getElementById('f_list_1').style.display="block";
    }
    function F1_Out(){
      document.getElementById('f_list_1').style.display="none";
    }
    function F2_Over(){
      document.getElementById('f_list_2').style.display="block";
    }
    function F2_Out(){
      document.getElementById('f_list_2').style.display="none";
    }


  // ENERGY FUNCTIONS INDEX================>
    function E0_Over(){
      document.getElementById('e_list_0').style.display="block";
    }
    function E0_Out(){
      document.getElementById('e_list_0').style.display="none";
    }
    function E1_Over(){
      document.getElementById('e_list_1').style.display="block";
    }
    function E1_Out(){
      document.getElementById('e_list_1').style.display="none";
    }

 // TRANPORTATION FUNCTIONS INDEX================>
    function T0_Over(){
      document.getElementById('t_list_0').style.display="block";
    }
    function T0_Out(){
      document.getElementById('t_list_0').style.display="none";
    }
    function T1_Over(){
      document.getElementById('t_list_1').style.display="block";
    }
    function T1_Out(){
      document.getElementById('t_list_1').style.display="none";
    }

    function prev(){

    }
    function next(){

    }
