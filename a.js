function jsonFile(file,callback){
    var ajaxCall=new XMLHttpRequest();
    ajaxCall.overrideMimeType("application/json");
    ajaxCall.open("GET",file,true);
    ajaxCall.onreadystatechange=function(){
        if(ajaxCall.readyState === 4 && ajaxCall.status =="200"){
            callback(ajaxCall.responseText);
        }
    }
    ajaxCall.send(null);
}

// call the function

jsonFile("d.json",function(text){
    var data=JSON.parse(text);
    console.log(data.mydata);
    details(data.details);
    resu(data.mydata);
    
})

var body=document.querySelector("#root");
    console.log(body);
var main=document.createElement("section");
    main.classList.add("container");
    body.appendChild(main);

// creating artical1
var art1=document.createElement("artical");
    art1.setAttribute("class","artical1");
    main.appendChild(art1);


// create a function to get the object data
function details(mydetails){
    // create element for get the object name
    var h2=document.createElement("h2");
        h2.textContent=mydetails.name;
        h2.style.color="red";
        art1.appendChild(h2);

    // create h4 email
    let email=document.createElement("h4");
        email.textContent=mydetails.email;
        art1.appendChild(email);
    // create h4 phone no here
    let mob=document.createElement("h4");
        mob.textContent=mydetails.mobile;
        art1.appendChild(mob);
}





/*
function resu(mydata){
    //for(i in arrdetails){
        let art1=document.createElement("artical");
            art1.setAttribute("class","artical2");
            main.appendChild(art1);
         
        // create element for get the object name
        let h2=document.createElement("h2");
            h2.textContent=arrdetails[i].name;
            h2.style.color="red";
            art1.appendChild(h2);

        // create h4 email
        let email=document.createElement("h4");
            email.textContent=arrdetails[i].email;;
            art1.appendChild(email);
        // create h4 phone no here
        let mob=document.createElement("h4");
            mob.textContent=arrdetails[i].mobile;
            art1.appendChild(mob);
    
}
*/

/*(
    function(){
        function filesGetting(file,callback){
            var ajaxCall=new XMLHttpRequest();
                ajaxCall.overrideMimeType("aplication/json");
                ajaxCall.open("GET",file,true);
                ajaxCall.onreadystatechange=function(){                
                    if(ajaxCall.readyState===4 && ajaxCall.status=="200"){
                        callback(ajaxCall.responseText);
                        console.log(ajaxCall.status.responseText);
                    }
                }
            ajaxCall.send(null);

        }
        filesGetting("data.json",function(jsondata){
            var data=JSON.parse(jsondata);
                console.log(data);
           
        })
    }
)

*/
            // get the body tag
         // var body=document.getElementById("root");

    var body=document.querySelector("#root");
        console.log(body);
         // create section 
        var main=document.createElement("section");
         // classname to the section
        main.classList.add("main");
         // append main section to the body tag
        body.appendChild(main);

         // create card1
        var card1=document.createElement("article");
        card1.setAttribute("class","card1");
        main.appendChild(card1);

         // create Image tag
        var image=document.createElement("img");
        image.src="images/img.jpg";
        image.alt="Profile Image";
        card1.appendChild(image);
         // creare line
        card1.appendChild(document.createElement("hr"));
       // h2 for name
       // var name=document.createElement("h2");
        var name1=document.createElement("h2");
        name1.textContent="Praneetha Lakkimsetti";
        console.log(name1);
        card1.appendChild(name1);
         // careate email
        var email=document.createElement("h4");
        email.textContent="praneethalakkimsetti@gmail.com";
        card1.appendChild(email);

         // mobile number also
        var mobile=document.createElement("h4");
        mobile.textContent="7993778964";
        card1.appendChild(mobile);



         // create artical2
        var div=document.createElement("article");
        div.setAttribute("class","div");
        main.appendChild(div);

        var co=document.createElement("h4");
        co.textContent="Career Objective";
        console.log(co);
        div.appendChild(co);

        div.appendChild(document.createElement("hr"));

        var co1=document.createElement("p");
        co1.textContent="To secure a challenging position in a highly renowned company to expand my knowledge and skills by gaining experience";
        div.appendChild(co1);

        var s=document.createElement("h4");
        s.textContent="Skills";
        div.appendChild(s);

        div.appendChild(document.createElement("hr"));
        var s1=document.createElement("p","pre");
        s1.textContent="C";
        div.appendChild(s1);

        var s2=document.createElement("p","pre");
        s2.textContent="Python";
        div.appendChild(s2);

        var s3=document.createElement("p","pre");
        s3.textContent="Html & CSS";
        div.appendChild(s3);

        var p=document.createElement("h4");
        p.textContent="Personal Strengths";
        div.appendChild(p);

        div.appendChild(document.createElement("hr"));

        var p1=document.createElement("p","pre");
        p1.textContent="Adaptability";
        div.appendChild(p1);

        var p2=document.createElement("p","pre");
        p2.textContent="Optimistic";
        div.appendChild(p2);

        var p3=document.createElement("p","pre");
        p3.textContent="Self-movtivated";
        div.appendChild(p3);

        var p4=document.createElement("p","pre");
        p4.textContent="Quick-learner";
        div.appendChild(p4);

        var pp=document.createElement("h4");
        pp.textContent="Personal Profile";
        div.appendChild(pp);

        div.appendChild(document.createElement("hr"));

        var pp1=document.createElement("p","pre");
        pp1.textContent="Gender       : Female";
        div.appendChild(pp1);

        var pp2=document.createElement("p","pre");
        pp2.textContent="Nationality  : Indian";
        div.appendChild(pp2);

        var pp3=document.createElement("p","pre");
        pp3.textContent="DOB          : 25/03/2000";
        div.appendChild(pp3);

        var pp4=document.createElement("p","pre");
        pp4.textContent="Languages    : English and Telugu";
        div.appendChild(pp4);

/*
        var image=document.createElement("img");
        image.src="images/img.jpg";
        image.alt="Profile Image";
        card2.appendChild(image);
*/






