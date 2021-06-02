import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


(function(){
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems);

    elems = document.querySelectorAll('.datepicker');
    instances = M.Datepicker.init(elems, {
        showClearBtn: true,
        autoClose: true,
        format: 'yyyy-mm'
    });

    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdowns);

    const select = document.querySelectorAll('select');
    M.FormSelect.init(select);


})();
