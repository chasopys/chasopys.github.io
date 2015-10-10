var cm=[];
//encoded by http://www.htmlescape.net/stringescape_tool.html
var ptrn="\u00b7 2 + years of experience as a WEB, css3, html5, bootstrap,sql,mysql developer;\n\u00b7 Mast have:\n\u2014 strong knowledge of WEB technologies, JavaScript\n\u2014 software development experience for commercial project (JS);\n\u2014 base knowledge of git,Java SE and Java EE;\n\u00b7 Development experience SPA (Single Page Application) is a priority;\n\u00b7 As a plus: experience of working with frameworks Sencha Ext.js, GWT; Spring, Spring MVC;\n\u00b7 English intermediate level;\n\u00b7 Result- and team-oriented, responsible, self-starter.";

var txts=["java programming experience and SQL css experience a must; experience with any of the below is a bonus.\n Full stack experience (all aspects of software development and software life cycle)\n Bachelors degree in computer science or electrical engineering\n Expertise in Java and enterprise Java\n Experienced with Spring framework\n Experienced with ORM\n Good understanding of relational database theory\n Working knowledge of SQL\n Swing\x2FVaadin experience major plus\n mybatis major plus",
    "Back-en Developer - Node.js, MySQL, WebAPI\nDuration: 3-6 Months + Possible extensions\nRate: \u00a3350-\u00a3450\nStart date: ASAP\nJob: This is a  ASP .NET.MVC\n\u2014 Experience in working with AngularJS, Backbone fantastic contract role for a back end or full stack developer specialising in Node.js and MySQL technologies.\nIf you like working in a great environment with great team of people around you then please apply for this contract ASAP.\nYou can apply by sending your resume to : kaveh @isluk.co.uk or call: 01174 280 600\nApplicants m",
    "Professional requirements:\n\u2014 At least 5-year experience within css software development\n\u2014 Deep understanding software product lifecycle, quality assurance approaches\n\u2014 Offshoring projects experience\n\u2014 Experience of work in distributed team\x2Fenvironment\n\u2014 Experience of direct communication with client\nTechnical experience:\n\u2014 Experience in working with C#.\n\u2014 Experience in working with ASP .NET.MVC\n\u2014 Experience in working with AngularJS, Backbone\n\u2014 Experience in working with Oracle or MSSQL\n\u2014 Knowledge of unit-testing, continuous integration\nEducation \& Language:\n\u2014 Master degree or Bachelor degree from technological university\x2Fcollege.\n\u2014 English css : intermediate, both oral and written.\nPersonal requirements:\n\u2014 Excellent communication skills\n\u2014 Responsible and loyal\n\u2014 Self-organized\n\u2014 Team player\n\u2014 Company offers:\n" ];


//calcMatrix();

function calcMatrix(){
    var itkeys=['java', 'sql', 'css','mysql', 'node', 'aspnet', 'ember', 'mybatis', 'javascript',
        'photoshop', 'english', 'swing', 'orm', 'backbone', 'angular',
    'oop','patterns','c++','grunt','dotnet','html',
    'android','xml','sqlite','junit','jira','powerpoint','bootstrap','wordpress','jquery','html5','css3','flask','django','mongo', 'redis',
    'git','gulp', 'maven'];
    var ptrnkeys=extractgv(ptrn, itkeys);
    console.log('resume: '+ptrnkeys);
    var i;
    for (i=0;i<txts.length;i++) {
        console.log( extractgv(txts[i], itkeys));
        cm[i].skills=extractgv(txts[i], itkeys);
        console.log('ptrnkeys in calc'+ptrnkeys);
        console.log('skills in calc'+cm[i].skills);
        cm[i].matched=compareArrays(ptrnkeys, cm[i].skills);
        //cm[i].matched=extractgv(ptrnkeys, extractgv(txts[i], itkeys));
        cm[i].corr=matchgv(ptrnkeys, extractgv(txts[i], itkeys))
    }
    var needSort=true;
    while (needSort){
        needSort=false;
        for (i=0;i<cm.length-1;i++) if (cm[i].corr<cm[i+1].corr){
            var tmp=cm[i];cm[i]=cm[i+1];cm[i+1]=tmp;
            needSort=true;
        }

    }
}
console.log(cm);

function matchgv(v,r){
    return (v.reduce(function(s,v) {return r.indexOf(v)>-1 ? s+1:s;},0)/ v.length).toFixed(3);
}

function extractgv(txt, v) {
    var keywords=[];
    var lv = v.length;
    var r = txt.toLowerCase().split(/[;.: ,]/);
    for (i = 0; i < lv; i++){
        if (r.indexOf(v[i])>-1){
            keywords.push(v[i]);
        }
    }
    return keywords;
}

function compareArrays(r, v) {
    var keywords=[];
    var lv = v.length;
    for (i = 0; i < lv; i++){
        if (r.indexOf(v[i])>-1){
            keywords.push(v[i]);
        }
    }
    return keywords;
}
