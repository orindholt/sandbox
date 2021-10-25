let bool = true;

document.querySelector("#button").addEventListener("click", ()=>{
    if(bool){
        bool = false;
    } else {
        bool = true;
    }
    const element = document.createElement("p");
    const e = "string";
    /* console.log(e); */
    element.append(bool);
    document.querySelector("body").append(element);
});