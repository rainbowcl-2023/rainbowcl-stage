
var acc = document.getElementsByClassName("cv-form-row-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
        console.log(panel.scrollHeight)
    //   panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.maxHeight = "fit-content";
    }
  });

  function updateParagraphText(input, paragraph) {
    // Récupérer la valeur de l'input
    var input = document.getElementById(input);
    var inputValue = input.value;
    // Mettre à jour le texte du paragraphe
    var paragraphs = document.getElementById(paragraph);
    
    paragraphs.textContent = inputValue;
    
    if (input.value === '') {
      document.querySelector('.'+paragraph).style.display = 'none';
    } else {
      document.querySelector('.'+paragraph).style.display = 'flex';
    }
  }

}



// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})
