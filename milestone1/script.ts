const Togglebutton= document.getElementById(`toggle-skills`) as HTMLElement
const skills = document.getElementById(`skills`) as HTMLElement

export{}
Togglebutton.addEventListener(`click`,()=>{
    if(skills.style.display===`none`){
    skills.style.display=`block`
}
else {
    skills.style.display =`none`
}
})