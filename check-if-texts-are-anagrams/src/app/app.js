(() => {
  'use strict';

  // # Modules: `import` emulation
  const { Anagram, AnagramNonOptimized } = window.module;


  // # Configuration
  const anagramFormHTMLIdentifier = 'js-app__anagram-form';
  const anagramFormText1InputName = 'text1';
  const anagramFormText2InputName = 'text2';
  const nonOptimizedAnagramCheckButtonHTMLIdentifier = 'js-app__non-optimized-checking';


  // # Anagram form
  const anagramForm = document.getElementById(anagramFormHTMLIdentifier);
  anagramForm.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    const { text1, text2 } = getFormValues();
    const result = Anagram.checkIfTextsAreAnagrams(text1, text2);
    alert(`Optimized check: \`${result}\`.`);
  });

  const nonOptimizedAnagramCheckButton = document.getElementById(nonOptimizedAnagramCheckButtonHTMLIdentifier);
  nonOptimizedAnagramCheckButton.addEventListener('click', (mouseEvent) => {
    mouseEvent.preventDefault();
    const { text1, text2 } = getFormValues();
    const result = AnagramNonOptimized.checkIfTextsAreAnagrams(text1, text2);
    alert(`Non-optimized check: \`${result}\`.`);
  });


  // # Auxiliary functions
  function getFormValues() {
    const formData = new FormData(anagramForm);
    const text1 = formData.get(anagramFormText1InputName);
    const text2 = formData.get(anagramFormText2InputName);
    return { text1, text2 };
  }
})();
