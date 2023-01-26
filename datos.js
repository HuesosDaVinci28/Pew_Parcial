function traerdatos() {
    const valorurl = window.location.search;
    const urlparametros = new URLSearchParams(valorurl);
    var gusto_data = urlparametros.get("gusto_data");
    var porcentaje_data = urlparametros.get("porcentaje_data");
    var nombre_data = urlparametros.get("nombrecompleto");
    var email_data =urlparametros.get("emailinput");
    var telefono_data = urlparametros.get("telefonoinput");
    const nombreregistro = document.querySelector(".nombreregistro");
    const emaildato = document.querySelector(".emaildato");
    const telefonodato = document.querySelector(".telefonodato");
    const gusto = document.querySelector(".gusto");
    const porcentaje = document.querySelector(".porcentaje");
    nombreregistro.textContent = nombre_data;
    emaildato.textContent = email_data;
    telefonodato.textContent = telefono_data;
    gusto.textContent = gusto_data;
    porcentaje.textContent = porcentaje_data;
}