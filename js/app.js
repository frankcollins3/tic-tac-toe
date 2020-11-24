 const boxes = document.querySelectorAll('.cell');
     let currentPlayer = 'PlayerX';
     const displayPlayer = document.querySelector('#player')
     boxes.forEach(box => {
         box.addEventListener('click', clickResult, { once: true })
     })

     function clickResult(e) {
         const boxArray = Array.from(boxes)
         const index = boxArray.indexOf(e.target)
         displayPlayer.innerHTML = currentPlayer

         if (currentPlayer === 'PlayerO') {
             boxes[index].classList.add('PlayerX')
             boxes[index].innerText = currentPlayer
             currentPlayer = 'PlayerX'
         } else {
             boxes[index].classList.add('PlayerO')
             boxes[index].innerText = currentPlayer
             currentPlayer = 'PlayerO'
         }

         boxes[index] = currentPlayer;
         let winningConditions = [
             [0, 1, 2],
             [3, 4, 5],
             [6, 7, 8],
             [0, 3, 6],
             [1, 4, 7],
             [2, 5, 8],
             [0, 4, 8],
             [2, 4, 6]
         ]

         for (let i = 0; i < winningConditions.length; i++) {
             let winningRow = winningConditions[i]
             let value1 = winningRow[0]
             let value2 = winningRow[1]
             let value3 = winningRow[2]
             if (boxes[value1].innerText === boxes[value2].innerText && boxes[value2].innerText === boxes[value3].innerText && boxes[value2].innerText != '') {
                 alert(`winner, ${currentPlayer} WON THE ROUND!`)
             } 
         }
     } 
