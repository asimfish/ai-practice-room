export function selectVisibleText(element){
 if(!element)return false;
 const selection=window.getSelection();if(!selection)return false;
 const range=document.createRange();range.selectNodeContents(element);selection.removeAllRanges();selection.addRange(range);return selection.toString()===element.textContent;
}
