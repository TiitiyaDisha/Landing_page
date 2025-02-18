function myFun(a) {
    a.classList.toggle('change'); // called an ele object
    toggleMenu();
}
function toggleMenu(){
    const view = document.getElementById('List');
    view.classList.toggle('show');

}