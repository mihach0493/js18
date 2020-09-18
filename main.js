function dodajOdejmijMnoz(number1, number2) {
    let suma = number1 + number2;
    let roznica = number1 - number2;
    let iloczyn = number1 * number2;


    if (suma > 0) {
        console.log("wynik dodawania wynosi " + suma);
    } else {
        console.log("Wynik jest nieprawidłowy");
    }

    if (roznica > 0) {
        console.log("wynik odejmowania wynosi ruznica " + roznica);
    } else {
        console.log("Wynik jest nieprawidłowy");
    }


    if (iloczyn > 0) {
        console.log("wynik mnozenia wynosi iloczyn" + iloczyn);
    } else {
        console.log("Wynik jest nieprawidłowy");
    }

  
   
}
dodajOdejmijMnoz(10, 20);
let liczba1 = 20;
let liczba2 = 6;
let liczba3 = 11;
dodajOdejmijMnoz(liczba1, liczba2);

dodajOdejmijMnoz(liczba2, liczba3);
dodajOdejmijMnoz(liczba2, liczba1);




