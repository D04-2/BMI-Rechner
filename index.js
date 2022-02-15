const calcBmi = () => {
   const gewicht = document.getElementById("gewicht").value
   const groesse = document.getElementById("groesse").value / 100
   const bmiWertEl = document.getElementById("bmiWert")
   const select = document.getElementById("geschlecht")
   const maennlich = select.options[select.selectedIndex].value === 'männlich'
   // const weiblich = select.options[select.selectedIndex].value === 'weiblich'
   const bmi = (gewicht / groesse ** 2).toFixed(0);
  
   if (maennlich) {
      if (bmi <= 18.5) {
         bmiWertEl.textContent = `Ergebnis: ${bmi}`
      } else if(bmi >= 18.5 && bmi <= 24.9){
         bmiWertEl.textContent = "Ergebnis: Bmi: " + bmi + " normalgewichtig."
      }else if(bmi >= 25 && bmi <= 29.9){
         bmiWertEl.textContent = "Ergebnis: Bmi: " + bmi + " übergewichtig."
      }else if(bmi >= 30 && bmi <= 34.9){
         bmiWertEl.textContent = "Ergebnis: Bmi: " + bmi + " stark übergewichtig. (Adipositas Grad I)";
      }else if(bmi >= 35 && bmi <= 39.9){
         bmiWertEl.textContent = "Ergebnis: Bmi: " + bmi + " stark übergewichtig. (Adipositas Grad II)";
      }else if(bmi >= 40){
         bmiWertEl.textContent = "Ergebnis: Bmi: " + bmi + " stark übergewichtig. (Adipositas Grad III)";
      }else {
         bmiWertEl.textContent = ''
      }
   } else{
      if (bmi <= 18.5) {
         bmiWertEl.textContent = `Ergebnis: ${bmi}`
      } else if(bmi >= 18.5 && bmi <= 24.9){
         bmiWertEl.textContent = "Ergebnis: Bmi: " + bmi + " normalgewichtig."
      }else if(bmi >= 25 && bmi <= 29.9){
         bmiWertEl.textContent = "Ergebnis: Bmi: " + bmi + " übergewichtig."
      }else if(bmi >= 30 && bmi <= 34.9){
         bmiWertEl.textContent = "Ergebnis: Bmi: " + bmi + " stark übergewichtig. (Adipositas Grad I)";
      }else if(bmi >= 35 && bmi <= 39.9){
         bmiWertEl.textContent = "Ergebnis: Bmi: " + bmi + " stark übergewichtig. (Adipositas Grad II)";
      }else if(bmi >= 40){
         bmiWertEl.textContent = "Ergebnis: Bmi: " + bmi + " stark übergewichtig. (Adipositas Grad III)";
      }else {
         bmiWertEl.textContent = ''
      }
   }
};

