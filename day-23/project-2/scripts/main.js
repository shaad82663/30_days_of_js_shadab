document.addEventListener("keydown", function(event) {
    var keyName = event.key
    var keyCode = event.keyCode
    if(keyCode == 32) keyName = 'Space'
    const nameDiv = document.querySelector('.key-name')
    const keyDiv =  document.querySelector('.key-value')
    nameDiv.textContent = `You have pressed ${keyName}`
    keyDiv.textContent = keyCode
  });
  