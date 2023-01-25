var bm = {};
var numberOfGuesses,
hintValue = true;

bm.photos = ["cards/2c.jpg", "cards/2s.jpg", "cards/2d.jpg", "cards/2h.jpg",
  "cards/3c.jpg", "cards/3s.jpg", "cards/3d.jpg", "cards/3h.jpg",
  "cards/4c.jpg", "cards/4s.jpg", "cards/4d.jpg", "cards/4h.jpg",
  "cards/5c.jpg", "cards/5s.jpg", "cards/5d.jpg", "cards/5h.jpg",
  "cards/6c.jpg", "cards/6s.jpg", "cards/6d.jpg", "cards/6h.jpg",
  "cards/7c.jpg", "cards/7s.jpg", "cards/7d.jpg", "cards/7h.jpg",
  "cards/8c.jpg", "cards/8s.jpg", "cards/8d.jpg", "cards/8h.jpg",
  "cards/9c.jpg", "cards/9s.jpg", "cards/9d.jpg", "cards/9h.jpg",
  "cards/1c.jpg", "cards/1s.jpg", "cards/1d.jpg", "cards/1h.jpg",
  "cards/jc.jpg", "cards/js.jpg", "cards/jd.jpg", "cards/jh.jpg",
  "cards/qc.jpg", "cards/qs.jpg", "cards/qd.jpg", "cards/qh.jpg",
  "cards/kc.jpg", "cards/ks.jpg", "cards/kd.jpg", "cards/kh.jpg",
  "cards/ac.jpg", "cards/as.jpg", "cards/ad.jpg", "cards/ah.jpg"];

bm.begin = function () {
  var thing = document.getElementsByTagName("img"),
    din = document.getElementsByTagName("div"),
    ths = document.getElementsByTagName("th"),
    spans = document.getElementsByTagName("span"),
    tds = document.getElementsByTagName("td"),
    list2 = [];
    numberOfGuesses = 0;
    hintValue = true;

  for (var i = 0; i <= 24; i++) {
    var randval = Math.floor((Math.random() * ((51 - 0) + 1) + 0));
    for (var i = 0; i < list2.length; i++) {
      if (randval == list2[i]){
        randval = Math.floor((Math.random() * ((51 - 0) + 1) + 0));
        i = 0;
      }
    }

    list2.push(randval);
    thing[i].src = bm.photos[randval];

    if (randval == 0 || randval == 1 || randval == 2 || randval == 3) {
      din[i].innerHTML = 2;
    }
    else if (randval == 4 || randval == 5 || randval == 6 || randval == 7) {
      din[i].innerHTML = 3;
    }
    else if (randval == 8 || randval == 9 || randval == 10 || randval == 11) {
      din[i].innerHTML = 4;
    }
    else if (randval == 12 || randval == 13 || randval == 14 || randval == 15) {
      din[i].innerHTML = 5;
    }
    else if (randval == 16 || randval == 17 || randval == 18 || randval == 19) {
      din[i].innerHTML = 6;
    }
    else if (randval == 20 || randval == 21 || randval == 22 || randval == 23) {
      din[i].innerHTML = 7;
    }
    else if (randval == 24 || randval == 25 || randval == 26 || randval == 27) {
      din[i].innerHTML = 8;
    }
    else if (randval == 28 || randval == 29 || randval == 30 || randval == 31) {
      din[i].innerHTML = 9;
    }
    else if (randval == 48 || randval == 49 || randval == 50 || randval == 51) {
      din[i].innerHTML = 11;
    }
    else {
      din[i].innerHTML = 10
    }
  }

  document.getElementById("verticalScore1").innerHTML = parseInt(document.getElementById("val0").innerHTML) + parseInt(document.getElementById("val1").innerHTML)
    + parseInt(document.getElementById("val2").innerHTML) + parseInt(document.getElementById("val3").innerHTML) + parseInt(document.getElementById("val4").innerHTML);

  document.getElementById("verticalScore2").innerHTML = parseInt(document.getElementById("val5").innerHTML) + parseInt(document.getElementById("val6").innerHTML)
    + parseInt(document.getElementById("val7").innerHTML) + parseInt(document.getElementById("val8").innerHTML) + parseInt(document.getElementById("val9").innerHTML);

  document.getElementById("verticalScore3").innerHTML = parseInt(document.getElementById("val10").innerHTML) + parseInt(document.getElementById("val11").innerHTML)
    + parseInt(document.getElementById("val12").innerHTML) + parseInt(document.getElementById("val13").innerHTML) + parseInt(document.getElementById("val14").innerHTML);

  document.getElementById("verticalScore4").innerHTML = parseInt(document.getElementById("val15").innerHTML) + parseInt(document.getElementById("val16").innerHTML)
    + parseInt(document.getElementById("val17").innerHTML) + parseInt(document.getElementById("val18").innerHTML) + parseInt(document.getElementById("val19").innerHTML);

  document.getElementById("verticalScore5").innerHTML = parseInt(document.getElementById("val20").innerHTML) + parseInt(document.getElementById("val21").innerHTML)
    + parseInt(document.getElementById("val22").innerHTML) + parseInt(document.getElementById("val23").innerHTML) + parseInt(document.getElementById("val24").innerHTML);

  document.getElementById("horizontalScore1").innerHTML = parseInt(document.getElementById("val0").innerHTML) + parseInt(document.getElementById("val5").innerHTML)
    + parseInt(document.getElementById("val10").innerHTML) + parseInt(document.getElementById("val15").innerHTML) + parseInt(document.getElementById("val20").innerHTML);

  document.getElementById("horizontalScore2").innerHTML = parseInt(document.getElementById("val1").innerHTML) + parseInt(document.getElementById("val6").innerHTML)
    + parseInt(document.getElementById("val11").innerHTML) + parseInt(document.getElementById("val16").innerHTML) + parseInt(document.getElementById("val21").innerHTML);

  document.getElementById("horizontalScore3").innerHTML = parseInt(document.getElementById("val2").innerHTML) + parseInt(document.getElementById("val7").innerHTML)
    + parseInt(document.getElementById("val12").innerHTML) + parseInt(document.getElementById("val17").innerHTML) + parseInt(document.getElementById("val22").innerHTML);

  document.getElementById("horizontalScore4").innerHTML = parseInt(document.getElementById("val3").innerHTML) + parseInt(document.getElementById("val8").innerHTML)
    + parseInt(document.getElementById("val13").innerHTML) + parseInt(document.getElementById("val18").innerHTML) + parseInt(document.getElementById("val23").innerHTML);

  document.getElementById("horizontalScore5").innerHTML = parseInt(document.getElementById("val4").innerHTML) + parseInt(document.getElementById("val9").innerHTML)
    + parseInt(document.getElementById("val14").innerHTML) + parseInt(document.getElementById("val19").innerHTML) + parseInt(document.getElementById("val24").innerHTML);

  var tdc = document.getElementsByTagName("td");
  for(var i = 0; i < tdc.length;i++)  {
    tdc[i].style.borderColor = "black";
  }

  for (var i = 0; i < 10; i++) {
    if (parseInt(spans[i].innerHTML) == 31) {
      ths[i].style.backgroundColor = "green";
    }
    else {
      ths[i].style.backgroundColor = "red";
    }
  }
  var a = 0;
  for (var i = 0; i < 25; i++) {
    b = parseInt(din[i].innerHTML);
    a += b;
  }
  console.log(a)
  if (a != 155) {
    bm.begin()
  }
  for(var i = 0; i<25;i++){
    tds[i].dataset.hint = "true";
    }
  }

function dragstart() {
  event.dataTransfer.setData("text/plain",event.target.id);
}

function dragover() {
  event.preventDefault();
}

function drop(obj) {
  event.preventDefault();
  var id = event.dataTransfer.getData("text/plain");
  var buff = obj.src;
  obj.src = document.getElementById(id).src;
  document.getElementById(id).src = buff;

  hintValue = true;

  for (var i = 0; i <= 24; i++) {
    var thing = document.getElementsByTagName("img"),
      din = document.getElementsByTagName("div"),
      ths = document.getElementsByTagName("th"),
      spans = document.getElementsByTagName("span"),
      randval,
      buff,
      str;

      str = thing[i].src;
      buff = str.slice(-12)
      randval = bm.photos.indexOf(buff);
      console.log(buff);
      console.log(randval);

      if (randval == 0 || randval == 1 || randval == 2 || randval == 3) {
        din[i].innerHTML = 2;
      }
      else if (randval == 4 || randval == 5 || randval == 6 || randval == 7) {
        din[i].innerHTML = 3;
      }
      else if (randval == 8 || randval == 9 || randval == 10 || randval == 11) {
        din[i].innerHTML = 4;
      }
      else if (randval == 12 || randval == 13 || randval == 14 || randval == 15) {
        din[i].innerHTML = 5;
      }
      else if (randval == 16 || randval == 17 || randval == 18 || randval == 19) {
        din[i].innerHTML = 6;
      }
      else if (randval == 20 || randval == 21 || randval == 22 || randval == 23) {
        din[i].innerHTML = 7;
      }
      else if (randval == 24 || randval == 25 || randval == 26 || randval == 27) {
        din[i].innerHTML = 8;
      }
      else if (randval == 28 || randval == 29 || randval == 30 || randval == 31) {
        din[i].innerHTML = 9;
      }
      else if (randval == 48 || randval == 49 || randval == 50 || randval == 51) {
        din[i].innerHTML = 11;
      }
      else {
        din[i].innerHTML = 10
      }
  }

  document.getElementById("verticalScore1").innerHTML = parseInt(document.getElementById("val0").innerHTML) + parseInt(document.getElementById("val1").innerHTML)
    + parseInt(document.getElementById("val2").innerHTML) + parseInt(document.getElementById("val3").innerHTML) + parseInt(document.getElementById("val4").innerHTML);

  document.getElementById("verticalScore2").innerHTML = parseInt(document.getElementById("val5").innerHTML) + parseInt(document.getElementById("val6").innerHTML)
    + parseInt(document.getElementById("val7").innerHTML) + parseInt(document.getElementById("val8").innerHTML) + parseInt(document.getElementById("val9").innerHTML);

  document.getElementById("verticalScore3").innerHTML = parseInt(document.getElementById("val10").innerHTML) + parseInt(document.getElementById("val11").innerHTML)
    + parseInt(document.getElementById("val12").innerHTML) + parseInt(document.getElementById("val13").innerHTML) + parseInt(document.getElementById("val14").innerHTML);

  document.getElementById("verticalScore4").innerHTML = parseInt(document.getElementById("val15").innerHTML) + parseInt(document.getElementById("val16").innerHTML)
    + parseInt(document.getElementById("val17").innerHTML) + parseInt(document.getElementById("val18").innerHTML) + parseInt(document.getElementById("val19").innerHTML);

  document.getElementById("verticalScore5").innerHTML = parseInt(document.getElementById("val20").innerHTML) + parseInt(document.getElementById("val21").innerHTML)
    + parseInt(document.getElementById("val22").innerHTML) + parseInt(document.getElementById("val23").innerHTML) + parseInt(document.getElementById("val24").innerHTML);

  document.getElementById("horizontalScore1").innerHTML = parseInt(document.getElementById("val0").innerHTML) + parseInt(document.getElementById("val5").innerHTML)
    + parseInt(document.getElementById("val10").innerHTML) + parseInt(document.getElementById("val15").innerHTML) + parseInt(document.getElementById("val20").innerHTML);

  document.getElementById("horizontalScore2").innerHTML = parseInt(document.getElementById("val1").innerHTML) + parseInt(document.getElementById("val6").innerHTML)
    + parseInt(document.getElementById("val11").innerHTML) + parseInt(document.getElementById("val16").innerHTML) + parseInt(document.getElementById("val21").innerHTML);

  document.getElementById("horizontalScore3").innerHTML = parseInt(document.getElementById("val2").innerHTML) + parseInt(document.getElementById("val7").innerHTML)
    + parseInt(document.getElementById("val12").innerHTML) + parseInt(document.getElementById("val17").innerHTML) + parseInt(document.getElementById("val22").innerHTML);

  document.getElementById("horizontalScore4").innerHTML = parseInt(document.getElementById("val3").innerHTML) + parseInt(document.getElementById("val8").innerHTML)
    + parseInt(document.getElementById("val13").innerHTML) + parseInt(document.getElementById("val18").innerHTML) + parseInt(document.getElementById("val23").innerHTML);

  document.getElementById("horizontalScore5").innerHTML = parseInt(document.getElementById("val4").innerHTML) + parseInt(document.getElementById("val9").innerHTML)
    + parseInt(document.getElementById("val14").innerHTML) + parseInt(document.getElementById("val19").innerHTML) + parseInt(document.getElementById("val24").innerHTML);

  var tdc = document.getElementsByTagName("td");
  for(var i = 0; i < tdc.length;i++)  {
    tdc[i].style.borderColor = "black";
  }

  for (var i = 0; i < 10; i++) {
    if (parseInt(spans[i].innerHTML) == 31) {
      ths[i].style.backgroundColor = "green";
    }
    else {
      ths[i].style.backgroundColor = "red";
    }
  }

  var h1, h2, h3, h4, h5, v1, v2, v3, v4, v5;
    h1 = parseInt(document.getElementById("horizontalScore1").innerHTML);
    h2 = parseInt(document.getElementById("horizontalScore2").innerHTML);
    h3 = parseInt(document.getElementById("horizontalScore3").innerHTML);
    h4 = parseInt(document.getElementById("horizontalScore4").innerHTML);
    h5 = parseInt(document.getElementById("horizontalScore5").innerHTML)

    v1 = parseInt(document.getElementById("verticalScore1").innerHTML);
    v2 = parseInt(document.getElementById("verticalScore2").innerHTML);
    v3 = parseInt(document.getElementById("verticalScore3").innerHTML);
    v4 = parseInt(document.getElementById("verticalScore4").innerHTML);
    v5 = parseInt(document.getElementById("verticalScore5").innerHTML);

    if (h1 == 31 && h2 == 31 && h3 == 31 && h4 == 31 && h5 == 31 && v1 == 31 && v2 == 31 && v3 == 31 && v4 == 31 && v5 == 31)  {
      bm.win();
    }
  }

  bm.hint = function () {
    //use for loop to sort through th
    var spns = document.getElementsByTagName("span"),
      ths = document.getElementsByTagName("th"),
      tds = document.getElementsByTagName("td"),
      divs = document.getElementsByTagName("div"),
      text,i,need,look, found = false,found2 = false;

    if (hintValue != true){
      alert("You have not move the recommended cards yet!");
      return;
    }

    numberOfGuesses++;

    //first one not = to 31 break loop -- turn this one's background yellow
    for (i = 0; i <= spns.length; i++) {
      text = parseInt(spns[i].innerHTML);
      if (text != 31) {
        ths[i].style.backgroundColor = "yellow";
        break;
      }
    }

    if (i == 0) {
      console.log("tds/div 0-4");
      for(var watch = 0; watch < 5; watch++){
        need = 31 - parseInt(spns[i].innerHTML);
        console.log(need);
        if (found == false){
          look = parseInt(divs[watch].innerHTML)+need;
          console.log(look);
          for(var count = 5; count<25;count++){
            if(tds[count].dataset.hint = "true"){
              if (look == parseInt(divs[count].innerHTML)){
                tds[count].style.borderColor = "yellow";
                tds[watch].style.borderColor = "yellow";
                tds[count].dataset.hint = "false";
                tds[watch].dataset.hint = "false";
                found = true;
                break;
              }
            }
          }
        }
      }
        alert("You need to switch the cards in row 1 with a card with a value of " + look + "." );
    }
    else if (i == 1) {
      console.log("tds/div 5-9");
      for(var watch = 5; watch < 10; watch++){
        need = 31 - parseInt(spns[i].innerHTML);
        console.log(need);
        if (found == false){
          look = parseInt(divs[watch].innerHTML)+need;
          console.log(look);
          for(var count = 0; count<5;count++){
            if(tds[count].dataset.hint = "true"){
              if (look == parseInt(divs[count].innerHTML)){
                tds[count].style.borderColor = "yellow";
                tds[watch].style.borderColor = "yellow";
                tds[count].dataset.hint = "false";
                tds[watch].dataset.hint = "false";
                found = true;
                break;
            }
           }
          }
          if (found != true){
          for(var count = 10; count<25;count++){
            if(tds[count].dataset.hint = "true"){
              if (look == parseInt(divs[count].innerHTML)){
                tds[count].style.borderColor = "yellow";
                tds[watch].style.borderColor = "yellow";
                tds[count].dataset.hint = "false";
                tds[watch].dataset.hint = "false";
                found = true;
                break
            }
          }
        }
        }
        }
      }
      alert("You need to switch the cards in row 2 with a card with a value of " + look + "." );
    }
    else if (i == 2) {
      console.log("tds/div 10-14");
      for(var watch = 10; watch < 15; watch++){
        need = 31 - parseInt(spns[i].innerHTML);
        console.log(need);
        if (found == false){
          look = parseInt(divs[watch].innerHTML)+need;
          console.log(look);
          for(var count = 0; count<10;count++){
            if(tds[count].dataset.hint = "true"){
              if (look == parseInt(divs[count].innerHTML)){
                tds[count].style.borderColor = "yellow";
                tds[watch].style.borderColor = "yellow";
                tds[count].dataset.hint = "false";
                tds[watch].dataset.hint = "false";
                found = true;
                break;
            }
          }
          }
          if (found != true){
          for(var count = 15; count<25;count++){
            if(tds[count].dataset.hint = "true"){
              if (look == parseInt(divs[count].innerHTML)){
                tds[count].style.borderColor = "yellow";
                tds[watch].style.borderColor = "yellow";
                tds[count].dataset.hint = "false";
                tds[watch].dataset.hint = "false";
                found = true;
                break;
            }
          }
          }
        }
        }
      }
      alert("You need to switch the cards in row 3 with a card with a value of " + look + "." );
    }
    else if (i == 3) {
      console.log("tds/div 15-19");
      for(var watch = 15; watch < 20; watch++){
        need = 31 - parseInt(spns[i].innerHTML);
        console.log(need);
        if (found == false){
          look = parseInt(divs[watch].innerHTML)+need;
          console.log(look);
          for(var count = 0; count<14;count++){
            if(tds[count].dataset.hint = "true"){
              if (look == parseInt(divs[count].innerHTML)){
                tds[count].style.borderColor = "yellow";
                tds[watch].style.borderColor = "yellow";
                tds[count].dataset.hint = "false";
                tds[watch].dataset.hint = "false";
                found = true;
                break;
            }
          }
        }
          if(found != true){
          for(var count = 20; count<25;count++){
            if(tds[count].dataset.hint = "true"){
              if (look == parseInt(divs[count].innerHTML)){
                tds[count].style.borderColor = "yellow";
                tds[watch].style.borderColor = "yellow";
                tds[count].dataset.hint = "false";
                tds[watch].dataset.hint = "false";
                found = true;
            }
          }
        }
        }
        }
      }
      alert("You need to switch the cards in row 4 with a card with a value of " + look + "." );
    }
    else if (i == 4) {
      console.log("tds/div 20-24");
      for(var watch = 20; watch < 25; watch++){
        need = 31 - parseInt(spns[i].innerHTML);
        console.log(need);
        if (found == false){
          look = parseInt(divs[watch].innerHTML)+need;
          console.log(look);
          for(var count = 0; count<19;count++){
            if(tds[count].dataset.hint = "true"){
              if (look == parseInt(divs[count].innerHTML)){
                tds[count].style.borderColor = "yellow";
                tds[watch].style.borderColor = "yellow";
                tds[count].dataset.hint = "false";
                tds[watch].dataset.hint = "false";
                found = true;
                break;
            }
          }
          }
        }
      }
      alert("You need to switch the cards in row 5 with a card with a value of " + look + "." );
    }
    else if (i == 5) {
      console.log("tds/div 0, 5, 10, 15, 20");
      for(var watch = 0; watch <= 20; watch += 5){
        need = 31 - parseInt(spns[i].innerHTML);
        console.log(need);
        if (found == false){
          look = parseInt(divs[watch].innerHTML)+need;
          console.log(look);
          for(var count = 1; count<5;count++){
            if(tds[count].dataset.hint = "true"){
              if (look == parseInt(divs[count].innerHTML)){
                tds[count].style.borderColor = "yellow";
                tds[watch].style.borderColor = "yellow";
                tds[count].dataset.hint = "false";
                tds[watch].dataset.hint = "false";
                found = true;
                break;
            }
          }
          }
          if(found != true){
          for(var count = 6; count<10;count++){
            if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
            }
          }
          }
        }
        if(found != true){
          for(var count = 11; count<15;count++){
            if(tds[count].dataset.hint = "true"){
              if (look == parseInt(divs[count].innerHTML)){
                tds[count].style.borderColor = "yellow";
                tds[watch].style.borderColor = "yellow";
                tds[count].dataset.hint = "false";
                tds[watch].dataset.hint = "false";
                found = true;
                break;
            }
          }
          }
        }
        if(found != true){
          for(var count = 16; count<20;count++){
            if(tds[count].dataset.hint = "true"){
              if (look == parseInt(divs[count].innerHTML)){
                tds[count].style.borderColor = "yellow";
                tds[watch].style.borderColor = "yellow";
                tds[count].dataset.hint = "false";
                tds[watch].dataset.hint = "false";
                found = true;
                break;
            }
          }
          }
        }
        if(found != true){
          for(var count = 21; count<25;count++){
            if(tds[count].dataset.hint = "true"){
              if (look == parseInt(divs[count].innerHTML)){
                tds[count].style.borderColor = "yellow";
                tds[watch].style.borderColor = "yellow";
                tds[count].dataset.hint = "false";
                tds[watch].dataset.hint = "false";
                found = true;
                break;
            }
            }
          }
        }
      }
    }
      alert("You need to switch the cards in column 1 with a card with a value of " + look + "." );
  }
    else if (i == 6) {
      console.log("tds/div 1, 6, 11, 16, 21");
      for(var watch = 1; watch <= 21; watch += 5){
        need = 31 - parseInt(spns[i].innerHTML);
        console.log(need);
        if (found == false){
          look = parseInt(divs[watch].innerHTML)+need;
          console.log(look);
          if(tds[0].dataset.hint = "true"){
            if (look == parseInt(divs[0].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
          }
        }
          if(found != true){
        for(var count = 2; count<6;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
        }
      }
      if(found != true){
        for(var count = 7; count<11;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
        }
      }
      if(found != true){
        for(var count = 12; count<16;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
        }
      }
      if(found != true){
        for(var count = 17; count<21;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
      }
      }
      if(found != true){
        for(var count = 22; count<25;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
        }
      }
    }
  }
    alert("You need to switch the cards in column 2 with a card with a value of " + look + "." );
}
  else if (i == 7) {
    console.log("tds/div 2, 7, 12, 17, 22");
    for(var watch = 2; watch <= 22; watch += 5){
      need = 31 - parseInt(spns[i].innerHTML);
      console.log(need);
      if (found == false){
        look = parseInt(divs[watch].innerHTML)+need;
        console.log(look);
        for(var count = 0; count<2;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
        }
        if(found != true){
        for(var count = 3; count<7;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
        }
      }
      if(found != true){
        for(var count = 8; count<12;count++){
          if (look == parseInt(divs[count].innerHTML)){
            if(tds[count].dataset.hint = "true"){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
        }
      }
      if(found != true){
        for(var count = 13; count<17;count++){
          if (look == parseInt(divs[count].innerHTML)){
            if(tds[count].dataset.hint = "true"){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
        }
      }
      if(found != true){
        for(var count = 18; count<22;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
        }
      }
      if(found != true){
        for(var count = 23; count<25;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
      }
      }
    }
  }
    alert("You need to switch the cards in column 3 with a card with a value of " + look + "." );
}
  else if (i == 8) {
    console.log("tds/div 3, 8, 13, 18, 23");
    for(var watch = 3; watch <= 23; watch += 5){
      need = 31 - parseInt(spns[i].innerHTML);
      console.log(need);
      if (found == false){
        look = parseInt(divs[watch].innerHTML)+need;
        console.log(look);
        for(var count = 0; count<3;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
        }
        if(found != true){
        for(var count = 4; count<8;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
        }
      }
      if(found != true){
        for(var count = 9; count<13;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
        }
      }
        if(found != true){
        for(var count = 14; count<18;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
        }
      }
      if(found != true){
        for(var count = 19; count<23;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
              break;
          }
        }
      }
      }
      if(tds[24].dataset.hint = "true"){
        if (look == parseInt(divs[24].innerHTML && found != true)){
          tds[count].style.borderColor = "yellow";
          tds[watch].style.borderColor = "yellow";
          tds[count].dataset.hint = "false";
          tds[watch].dataset.hint = "false";
          found = true;
        }
      }
      }
    }
    alert("You need to switch the cards in column 4 with a card with a value of " + look + "." );
  }
  else {
    console.log("tds/div 4, 9, 14, 19, 24");
    for(var watch = 4; watch <= 24; watch += 5){
      need = 31 - parseInt(spns[i].innerHTML);
      console.log(need);
      if (found == false){
        look = parseInt(divs[watch].innerHTML)+need;
        console.log(look);
        for(var count = 0; count<4;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
          }
        }
      }
        for(var count = 5; count<9;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
          }
        }
        }
        for(var count = 10; count<14;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
          }
        }
        }
        for(var count = 15; count<19;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
          }
        }
      }
        for(var count = 20; count<24;count++){
          if(tds[count].dataset.hint = "true"){
            if (look == parseInt(divs[count].innerHTML)){
              tds[count].style.borderColor = "yellow";
              tds[watch].style.borderColor = "yellow";
              tds[count].dataset.hint = "false";
              tds[watch].dataset.hint = "false";
              found = true;
          }
        }
      }
      }
    }
    alert("You need to switch the cards in column 5 with a card with a value of " + look + "." );
  }
    hintValue = false;
  }


  bm.win = function(){
    alert("You win. You used " + numberOfGuesses + " hints.");
    numberOfGuesses = 0;
    bm.begin();
  }

  window.onload = function () {
    bm.begin();
    document.getElementById("reset").addEventListener('click', bm.begin);
    document.getElementById("check").addEventListener('click', bm.hint);
    document.getElementById("reset").addEventListener('click',bm.carga);
    document.getElementById("test").addEventListener('click',bm.win);
   }
