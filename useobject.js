const employee={
    empid:2,
    name:'xyz',
    designation:'java developer',
    techstack:[{
        plang:"java",
        server:'Apache Tomcat',
        database:'mysql',
        database2:'mongodb'
},
{
        plang:"python",
        server:'Djmongo',
        database:'mysql',
        database2:'mongodb'
},
{
        plang:"react",
        server:'mode server',
        database:'mysql',
        database2:'mongodb'
}]
}
console.log(employee.techstack[0])
console.log(employee.techstack[1])
console.log(employee.techstack[2].server)
console.log("Hello Sahil");
