
const textradio = () => {
    const checks = document.querySelectorAll("#formulario input[type='radio']");
    const input = document.querySelectorAll("#formulario input[type='text']")[0];
    const extra = checks[checks.length - 1];

    if(extra.checked){
        input.disabled = false;
    }else{
        input.disabled = true;
    }

    extra.addEventListener('focus', (e) => {
        input.disabled = false;
    });

    checks.forEach((item, index) => {

        if(index < checks.length - 1){
            item.addEventListener('focus', () => {
                input.disabled = true;
            });
        }
    });
}


const dominio = 'http://localhost:5200/vianca';

if(window.location.href === `${dominio}/questions.php?group=3&page=8`){
    textradio();
}