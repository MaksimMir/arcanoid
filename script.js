window.addEventListener('DOMContentLoaded', () => {

    function init() {
        let formValidation = false;
        let inputs = document.querySelectorAll('[type=text]');
        let form = document.querySelector('form');
        
        for (const inp of inputs) {
            let pattern = inp.getAttribute('data-val');
            

            if (pattern) {
                inp.addEventListener('change', function() {
                    let pattern = this.dataset.val,
                        mes = this.dataset.mes,
                        id = this.dataset.id,
                        value = this.value;
                        console.log(mes);
            
                    let res = value.search(pattern);
            
                    if (res == -1) {
                        document.getElementById(id).innerHTML = mes;
                        this.classList.add('invalid');
                    } else {
                        document.getElementById(id).innerHTML = '';
                        this.classList.add('valid');
                    }
                });
                formValidation = true;
            }
        }
        if (formValidation) {
            form.addEventListener('submit', () => {
                let invalid = false;
                for (const inp of inputs) {
                    if (inp.classList.contains('invalid')) {
                        invalid = true;
                    }
                };
                if (invalid) {
                    alert('Допущена ошибка при заполнении формы');
                    return false;
                }
            });
        }
    }

    init();
})