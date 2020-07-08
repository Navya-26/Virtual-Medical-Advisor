/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function myFunction() {
    var high = document.getElementById("highid").value;
    var low = document.getElementById("lowid").value;
    var name=document.getElementById("nameid").value;
    var age=document.getElementById("ageid").value;
    if(age<0)
    {
        document.getElementById("demo").innerHTML="<center>Invalid Age Entered</center>";
    }                  
    else
    {
        if((high<70 || high>=210) || (low<40 || low>=120) || high<0 || low<0)
        {
            document.getElementById("demo").innerHTML="<center>Abnormal Blood Pressure Readings.</center>";
        }
        else if((high>=70 && high<=90) && (low>=40 && low<=60))
        {
            document.getElementById("demo").innerHTML ="<center>Hi "+name+",<br>"+high+"/"+low+" is a Low Blood Pressure(HypoTension).<br><br>"+"<h5><p>Your blood pressure is lower than normal.Low blood pressure can cause fainting or dizziness because the brain doesn't receive enough blood.</p></h5><br>"+"Lead a healthy life style by "+"<a href='low.html'>Clicking Here</a>"+"</center>";
        }
        else if ((high>90 && high < 121) && (low>60 && low <= 85))
        {
            document.getElementById("demo").innerHTML  ="<center>Hi "+name+",<br>"+high+"/"+low+" is a Normal Blood Pressure.<br><br>"+"<h5><p>Follow Healthy diet to maintain the Optimal Blood Pressure.</p></h5></center>"; 
        }
        else if ((high>=121 && high <= 129) && low > 80 && low<=89) 
        {
            document.getElementById("demo").innerHTML  = "<center>Hi "+name+",<br>"+high+"/"+low+" is a Elevated Blood Pressure.<br><br>"+"<h5><p>Your blood pressure is elevated. It should be confirmed within 2 months. Your General Practitioner should advise you about lifestyle risk reduction and/or medication to lower your blood pressure.</p></h5><br>"+"Lead a healthy life style by "+"<a href='elevated.html'>Clicking Here</a>"+"</center>";
        }
        else if ((high>=130 && high <= 139) && (low>80 && low <=89)) 
        {
            document.getElementById("demo").innerHTML  = "<center>Hi "+name+",<br>"+high+"/"+low+" is a Stage-1 High Blood Pressure(Mild Hypertension).<br><br>"+"<h5><p>Your blood pressure is greater than normal.You may also need to see a specialist in this time. Your General Practitioner can advise you about lifestyle risk reduction and/or medication to lower your blood pressure.</p></h5><br>"+"Lead a healthy life style by "+"<a href='stage1.html'>Clicking Here</a>"+"</center>";
        }
        else if ((high>=140 && high<=159) && (low>=90 && low<=99)) 
        {
            document.getElementById("demo").innerHTML  ="<center>Hi "+name+",<br>"+high+"/"+low+" is a Stage-2 High Blood Pressure(Moderate Hypertension).<br><br>"+"<h5><p>Your blood pressure is greater than normal.You may also need to see a specialist in this time. Your General Practitioner can advise you about lifestyle risk reduction and/or medication to lower your blood pressure.</p></h5><br>"+"Lead a healthy life style by "+"<a href='stage2.html'>Clicking Here</a>"+"</center>";
        }
        else if((high>=160 && high<=179) && (low>=100 && low<=109))
        {
            document.getElementById("demo").innerHTML ="<center>Hi "+name+",<br>"+high+"/"+low+" is a Stage-3 High Blood Pressure(Severe Hypertension).<br><br>"+"<h5><p>Your blood pressure is more greater than normal.You may also need to see a specialist in this time. Your General Practitioner can advise you about lifestyle risk reduction and/or medication to lower your blood pressure.</p></h5><br>"+"Lead a healthy life style by "+"<a href='stage3.html'>Clicking Here</a>"+"</center>";
        }
        else if((high>=180 && high<=209) && (low>=110 && low<=119))
        {
            document.getElementById("demo").innerHTML ="<center>Hi "+name+",<br>"+high+"/"+low+" is a Stage-4 High Blood Pressure(Very Severe Hypertension).<br><br>"+"<h5><p>Your blood pressure is more greater than normal.you may also need to see a specialist in this time. Your General Practitioner can advise you about lifestyle risk reduction and/or medication to lower your blood pressure.</p></h5><br>"+"Lead a healthy life style by "+"<a href='stage4.html'>Clicking Here</a>"+"</center>";
        }
        else if(high>=130 && high<=139)
        {
            document.getElementById("demo").innerHTML  = "<center>Hi "+name+",<br>"+high+"/"+low+" is a Stage-1 High Blood Pressure(Mild Hypertension).<br><br>"+"<h5><p>Your blood pressure is greater than normal.You may also need to see a specialist in this time. Your General Practitioner can advise you about lifestyle risk reduction and/or medication to lower your blood pressure.</p></h5><br>"+"Lead a healthy life style by "+"<a href='stage1.html'>Clicking Here</a>"+"</center>";
        }
        else if(high>=140 && high<=159)
        {
            document.getElementById("demo").innerHTML  ="<center>Hi "+name+",<br>"+high+"/"+low+" is a Stage-2 High Blood Pressure(Moderate Hypertension).<br><br>"+"<h5><p>Your blood pressure is greater than normal.You may also need to see a specialist in this time. Your General Practitioner can advise you about lifestyle risk reduction and/or medication to lower your blood pressure.</p></h5><br>"+"Lead a healthy life style by "+"<a href='stage2.html'>Clicking Here</a>"+"</center>";
        }
        else if(high>=160 && high<=179)
        {
            document.getElementById("demo").innerHTML ="<center>Hi "+name+",<br>"+high+"/"+low+" is a Stage-3 High Blood Pressure(Severe Hypertension).<br><br>"+"<h5><p>Your blood pressure is more greater than normal.You may also need to see a specialist in this time. Your General Practitioner can advise you about lifestyle risk reduction and/or medication to lower your blood pressure.</p></h5><br>"+"Lead a healthy life style by "+"<a href='stage3.html'>Clicking Here</a>"+"</center>";
        }
        else if(high>=180 && high<=209)
        {
            document.getElementById("demo").innerHTML ="<center>Hi "+name+",<br>"+high+"/"+low+" is a Stage-4 High Blood Pressure(Very Severe Hypertension).<br><br>"+"<h5><p>Your blood pressure is more greater than normal.you may also need to see a specialist in this time. Your General Practitioner can advise you about lifestyle risk reduction and/or medication to lower your blood pressure.</p></h5><br>"+"Lead a healthy life style by "+"<a href='stage4.html'>Clicking Here</a>"+"</center>";
        }
        else if(high<90)
        {
            document.getElementById("demo").innerHTML ="<center>Hi "+name+",<br>"+high+"/"+low+" is a Low Blood Pressure(HypoTension).<br><br>"+"<h5><p>Your blood pressure is lower than normal.Low blood pressure can cause fainting or dizziness because the brain doesn't receive enough blood.</p></h5><br>"+"Lead a healthy life style by "+"<a href='low.html'>Clicking Here</a>"+"</center>";
        }
        else
        {
            document.getElementById("demo").innerHTML ="<center>Irreugular Blood Pressure Readings</center>";
        }
    }
}   
