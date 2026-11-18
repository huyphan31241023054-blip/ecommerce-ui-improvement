document.querySelector('#run').addEventListener('click', () => {
  const first = document.querySelector('#first');
  const parent = first.parentNode;
  const rows = ['firstChild: ' + first.firstChild.nodeName, 'nextSibling: ' +
    first.firstChild.nextSibling.nodeName, 'parentNode: #' + parent.id];
  parent.childNodes.forEach((node, index) => {
    rows.push(index + ': ' + node.nodeName + ' (nodeType ' + node.nodeType + ')');
    if (node.nodeType === Node.ELEMENT_NODE) node.classList.add('selected');
  });
  document.querySelector('#out').textContent = rows.join('\n');
});
