const end_date="9 Nov 2023 10:00 PM";
document.getElementById('endDate').innerText=end_date;
const inputs=document.querySelectorAll('input');

function clock(){
    const end=new Date(end_date)
    const now=new Date();
    const diff=(end-now)/1000;
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;

    console.log(diff);


}
clock();
setInterval(()=>{
    clock(),1000
})

