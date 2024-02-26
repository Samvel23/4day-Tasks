(function(window, document, undefined) {
    function saveData() {
        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
        };
        localStorage.setItem('data', JSON.stringify(data));
    }
    function loadData() {
        const savedData = localStorage.getItem('data');
        if(savedData) {
            const data = JSON.parse(savedData);
            document.getElementById('name').value = data.name;
            document.getElementById('email').value = data.email;
        }
    };
    function autoSave() {
        saveData();
    }
    loadData();
})(window, document);