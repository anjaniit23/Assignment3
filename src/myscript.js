const my=['anjani','pratik','somya','likith','udit','sahil','vijat','shivansh','ayush'];
const first=my.slice(0,4);
// const mid=my[4];
// console.log(mid);
const last=my.slice(5,9);
var i;
const one='Anjnai';
const two=pratik;
const three=one+String(two);
console.log(three);

const new1=new Array(first.length+last.length+1);
for(i=0;i<first.length;i++)
{
    new1[i]=first[i];
}
new1[i]=one+String(two);i++;
for(i=i;i<(first.length+last.length+1);i++)
{
    new1[i]=last[i-5];
}
console.log(new1);

