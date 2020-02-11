function var result(){
    let name= document.getElementById("name");
    let surname= document.getElementById("surname");
    let adresse= document.getElementById("adresse");
    let specialite= document.getElementById("specialite");
    let mail= document.getElementById("mail");
    let analyse= document.getElementById("analyse");

    

    let name2= document.getElementById("name2");
    let surname2= document.getElementById("surname2");
    let adresse2= document.getElementById("adresse2");
    let mail2= document.getElementById("mail2");
    
    sessionStorage.setItem('nom',name);
    sessionStorage.setItem('prenom',surnamename);
    sessionStorage.setItem('adress',adreese);
    sessionStorage.setItem('specialite',specialite);
    sessionStorage.setItem('email',mail);
    sessionStorage.setItem('votre_analyse',analyse);
    
    sessionStorage.setItem('nom2',name);
    sessionStorage.setItem('prenom2',surnamename);
    sessionStorage.setItem('adress2',adreese);
    sessionStorage.setItem('email2',mail);

}