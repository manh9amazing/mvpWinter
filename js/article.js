function domainExpansion(info) {
  info.nextElementSibling.classList.toggle("hide");
  info.classList.toggle("hide");
}
function evtHide(info) {
  info.classList.toggle("hide");
  info.previousElementSibling.classList.toggle("hide");
}
