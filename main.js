function dodajOdejmijMnoz(number1, number2) {
    let suma = number1 + number2;
    let roznica = number1 - number2;
    let iloczyn = number1 * number2;


    if (suma > 0) {
        console.log("wynik dodawania wynosi" + suma);
    } else {
        console.log("Wynik jest nieprawidłowy");
    }

    if (suma > 0) {
        console.log("wynik dodawania wynosi" - suma);
    } else {
        console.log("Wynik jest nieprawidłowy");
    }


    if (suma > 0) {
        console.log("wynik dodawania wynosi" * suma);
    } else {
        console.log("Wynik jest nieprawidłowy");
    }

    console.log("wynik dodawania wynosi " + suma);
    console.log("wynik odejmowanie wynosi " + roznica);
    console.log("wynik mnozenia wynosi " + iloczyn);
    console.log(dodajOdejmijMnoz(number1, number2));
}
dodajOdejmijMnoz(10, 20);
let liczba1 = 20;
let liczba2 = 6;
let liczba3 = 11;
dodajOdejmijMnoz(liczba1, liczba2);

dodajOdejmijMnoz(liczba2, liczba3);
dodajOdejmijMnoz(liczba2, liczba1);




