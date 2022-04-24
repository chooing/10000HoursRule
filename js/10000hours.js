const inpJob = document.getElementById("inpJob");
const inpTime = document.getElementById("inpTime");
const formPlan = document.querySelector(".form-plan");

const loading = document.querySelector(".main .result-loading");
const ruleResult = document.getElementById("ruleResult");
const ruleResultStrong = document.querySelectorAll(".rule_result .txt-result strong");

const body = document.querySelector("body");
const btnEdu = document.getElementById("btnEdu");
const fighting = document.getElementById("fighting");


formPlan.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(!ruleResult.classList.contains("close"))ruleResult.classList.add("close");
    loading.classList.remove("close");

    setTimeout(()=>{
        loading.classList.remove("active");
        loading.classList.add("close");
        loading.classList.add("active");
        ruleResult.classList.remove("close");
    },3000)

    ruleResultStrong[0].innerHTML=inpJob.value;
    ruleResultStrong[1].innerHTML= Math.ceil(10000 / inpTime.value);
});

btnEdu.addEventListener("click",()=>{
    fighting.classList.remove("close");
    body.classList.add("stop");
});

fighting.addEventListener("click",(e)=>{
    if(e.target===fighting){
        fighting.classList.add("close");
        body.classList.remove("stop");
    }
})