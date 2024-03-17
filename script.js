//your JS code here. If required.

  <script>
      let currentNode = 1;
      const prev = document.getElementById("prev");
      const next = document.getElementById("next");

   function navigate(diresction){
    const currentElement = document.getElementById(currentNode);
   if(diresction === 'next' && currentElement.nextElementSibling){
    currentElement.nextElementSibling.classList.add('active')
    currentElement.nextElementSibling.nextElementSibling.classList.add('active')
    currentNode++
   }else if(diresction === 'prev' && currentElement.previousElementSibling){
    currentElement.classList.remove('active')
    currentElement.previousElementSibling.classList.remove('active')
    currentNode--
   }
   currentNode === 5 ? (next.disabled = true) : (next.disabled = false)
   currentNode === 1 ?  (prev.disabled = true) : (prev.disabled = false)
   } 

   prev.addEventListener('click',()=>{
    navigate('prev')
   })
   next.addEventListener('click',()=>{
     navigate('next')
   })

  </script>

