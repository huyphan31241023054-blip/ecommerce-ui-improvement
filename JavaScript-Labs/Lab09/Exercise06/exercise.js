function inspectEvent(event) {
  const data = {type:event.type, target:event.target.id, currentTarget:event.currentTarget.id};
  console.log(data);
  document.querySelector('#out').textContent = JSON.stringify(data,null,2);
}
window.addEventListener('load', () => {
  document.querySelectorAll('.moving').forEach(element => {
    element.addEventListener('mouseover', inspectEvent);
    element.addEventListener('focus', inspectEvent);
  });
});
