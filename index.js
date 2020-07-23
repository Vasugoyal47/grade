total = document.getElementById('tot');
average = document.getElementById('avg');
grade = document.getElementById('grd');
status = document.getElementById('st');
complete= document.getElementById('comp');


total.addEventListener("click", function() {



  var eng = document.getElementById('sub1').value;
  var hindi = document.getElementById('sub2').value;
  var maths = document.getElementById('sub3').value;
  var sst = document.getElementById('sub4').value;
  var sci = document.getElementById('sub5').value;


  var total1= parseInt(eng)+parseInt(hindi)+parseInt(maths)+parseInt(sst)+parseInt(sci);
  if(parseInt(eng)>100 || parseInt(hindi)>100 || parseInt(maths)>100 || parseInt(sst)>100 || parseInt(sci)>100 || parseInt(eng)<0 || parseInt(hindi)<0 || parseInt(maths)<0 || parseInt(sst)<0 || parseInt(sci)<0)
  {
    alert("please enter the marks in the range of 0-100");
  }
  else{
   document.getElementById('Total').innerHTML= "Total: "+total1;
}


});

average.addEventListener("click", function() {

  var eng = document.getElementById('sub1').value;
  var hindi = document.getElementById('sub2').value;
  var maths = document.getElementById('sub3').value;
  var sst = document.getElementById('sub4').value;
  var sci = document.getElementById('sub5').value;


  var total1= parseInt(eng)+parseInt(hindi)+parseInt(maths)+parseInt(sst)+parseInt(sci);
  var  average= total1/5;


  if(parseInt(eng)>100 || parseInt(hindi)>100 || parseInt(maths)>100 || parseInt(sst)>100 || parseInt(sci)>100 || parseInt(eng)<0 || parseInt(hindi)<0 || parseInt(maths)<0 || parseInt(sst)<0 || parseInt(sci)<0)
  {
    alert("please enter the marks in the range of 0-100");
  }
else
{
   document.getElementById('Average').innerHTML= "Average: "+average;
}

});




grade.addEventListener("click", function() {

  var eng = document.getElementById('sub1').value;
  var hindi = document.getElementById('sub2').value;
  var maths = document.getElementById('sub3').value;
  var sst = document.getElementById('sub4').value;
  var sci = document.getElementById('sub5').value;


  var total1= parseInt(eng)+parseInt(hindi)+parseInt(maths)+parseInt(sst)+parseInt(sci);
  var  avg= total1/5;
var grade="";
  if(avg>=90 && avg <=100)
  {
    grade="A";
  }
else  if(avg<=89 && avg >=70)
  {
    grade="B";
  }
  else  if(avg>=40 && avg <=69)
    {
      grade="C";
    }
    else{
      grade="F";
    }

let status="Pass";

if(grade=="F")
{
  status="Fail";
}

 if(parseInt(eng)>100 || parseInt(hindi)>100 || parseInt(maths)>100 || parseInt(sst)>100 || parseInt(sci)>100 || parseInt(eng)<0 || parseInt(hindi)<0 || parseInt(maths)<0 || parseInt(sst)<0 || parseInt(sci)<0)
 {
   alert("please enter the marks in the range of 0-100");
 }
else{
  document.getElementById('Grade').innerHTML= "Grade: "+ grade;
    document.getElementById('Status').innerHTML= "Status: "+ status;
}




});




complete.addEventListener("click", function() {

  var eng = document.getElementById('sub1').value;
  var hindi = document.getElementById('sub2').value;
  var maths = document.getElementById('sub3').value;
  var sst = document.getElementById('sub4').value;
  var sci = document.getElementById('sub5').value;


  var total1= parseInt(eng)+parseInt(hindi)+parseInt(maths)+parseInt(sst)+parseInt(sci);
  var  avg= total1/5;
var grade="";
  if(avg>=90 && avg <=100)
  {
    grade="A";
  }
else  if(avg<=89 && avg >=70)
  {
    grade="B";
  }
  else  if(avg>=40 && avg <=69)
    {
      grade="C";
    }
    else{
      grade="F";
    }

let status="Pass";

if(grade=="F")
{
  status="Fail";
}

 if(parseInt(eng)>100 || parseInt(hindi)>100 || parseInt(maths)>100 || parseInt(sst)>100 || parseInt(sci)>100 || parseInt(eng)<0 || parseInt(hindi)<0 || parseInt(maths)<0 || parseInt(sst)<0 || parseInt(sci)<0)
 {
   alert("please enter the marks in the range of 0-100");
 }
else{
    document.getElementById('Total').innerHTML= "Total: "+total1;
   document.getElementById('Average').innerHTML= "Average: "+avg;
   document.getElementById('Grade').innerHTML= "Grade: "+ grade;
   document.getElementById('Status').innerHTML= "Status: "+ status;
}


});
