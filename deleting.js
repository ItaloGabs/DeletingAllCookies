const deletandoCookie = (nome, path, domain) => {
    document.cookie = nome + "=" +
      ((path) ? ";path=" + path : "") +
      ((domain) ? ";domain=" + domain : "") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
      //insere uma data para expirar o cookie e ser removido
      console.log('excluiu ' + nome)
}

function listaCookies(){
    var cookies = document.cookie.split(";"); //Separa todos os cookies um do outro
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var Apos = cookie.indexOf("=");
        var name = Apos > -1 ? cookie.substring(0, Apos) : cookie;
        deletandoCookie(name,'path','Domain') //Path - path do site do seu dominio, Domain - dominio do site surgerido
        
    }
}
