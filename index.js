var fs = require('fs');

fs.readdir('./', function(err, files) { //odczytaj pliki'files' z folderu './sciezka'
        if (err) throw err; //// jeśli pojawi się błąd, wyrzuć wyjątek
        console.log('Pliki w tym katalogu to: ');
        console.log(files); //wyswietlam pliki z function
        fs.writeFile('text.txt', files, function(err, data) { //zapisz pliki do 'text.txt'
            console.log('Zapisane dane w pliku text,txt')
        });
    });

