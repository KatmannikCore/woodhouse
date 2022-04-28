document.querySelector('.primer_modal_content_close').addEventListener('click', fiddenModal) //primer_modal_content_close
document.querySelector('.bacround').addEventListener('click', fiddenModal)
function fiddenModal(){
    document.querySelector('.primer_modal_zatemn').hidden = true //primer_modal_zatemn
    document.querySelector('.bacround').hidden = true;
}
function CreateWindow(number){
    let modal = document.querySelector('.primer_modal_zatemn'); //primer_modal_zatemn
    modal.hidden = false
    document.querySelector('.bacround').hidden = false;
}