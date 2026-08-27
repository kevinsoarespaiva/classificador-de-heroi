const heroForm = document.querySelector("#hero-form")
const result = document.querySelector("#response")

function heroTitle(){
    const heroName = document.querySelector("#hero-name").value;
    const heroXp = Number(document.querySelector("#hero-xp").value);
    let heroClass = "";
    if (heroXp <= 1000){
        heroClass = "ferro";
    }
    else if (heroXp <= 2000){
        heroClass = "Bronze";
    }
    else if (heroXp <= 5000){
        heroClass = "Prata";
    }
    else if (heroXp <= 7000){
        heroClass = "Ouro";
    }
    else if (heroXp <= 8000){
        heroClass = "Platina";
    }
    else if (heroXp <= 9000){
        heroClass = "Ascendente";
    }
    else if (heroXp <= 10000){
        heroClass = "Imortal";
    }
    else if (heroXp > 10000){
        heroClass = "Radiante";
    }
    result.textContent = "O Herói " + heroName + " é da classe: " + heroClass;
    result.classList.remove("hidden");
}
function main(){
    heroForm.addEventListener('submit', function(event){
        event.preventDefault(); 
        heroTitle();
    });
};

main();
