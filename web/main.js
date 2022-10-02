var tampon = ""

async function yt(){
    var data = document.getElementById('data').value
    var verif = data.split("=")
    
    if(verif[0]=="https://www.youtube.com/watch?v"){

        document.getElementById('circle-loader').style.display="block";
        document.getElementById('circle-loader').classList.remove('load-complete');
        document.getElementById('checkmark').classList.remove('active')
        document.getElementById('results').innerHTML= "Musique en cours de téléchargement ..."
        document.getElementById('data').value=""
        eel.App(data)().then((r) => {
           if(r){
            document.getElementById('circle-loader').style.display="none";
            document.getElementById('results').innerHTML= "La musique existe deja dans le dossier Musique_téléchargé"
           }else{
            result()
           }
        });
    }else{
        document.getElementById('circle-loader').style.display="none";
        document.getElementById('results').innerHTML= "Veuillez entrer un URL youtube correct"
    }
}

function result(){
    document.getElementById('results').innerHTML= "Musique téléchargée "
    document.getElementById('circle-loader').classList.add('load-complete');
    document.getElementById('checkmark').classList.add('active')
}
