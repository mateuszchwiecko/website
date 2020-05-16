

const express = require('express');

const app = express();

const server = app.listen(process.env.PORT || 3000, listen);

app.use(express.static('public'));

const io = require('socket.io')(server);
const mysql = require('mysql');

var bet_open,time,pos,coins_red,coins_green,coins_black,totalred,totalgreen,totalblack,l1,hash,number_los,hashwork,users_online = 0;

const lista_banow = [],mess_list = [],lista = [],history_list = [];


coins_black = 0;coins_green = 0;coins_red = 0;

totalblack = 0;totalred = 0;totalgreen = 0;


//hash losowaniaą
var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
//lączenie z bazą
var con = mysql.createConnection({

    host: "your host",

    user: "user",

    password: "password",

    database: "databasename"

});



//sprawdź wynik połączenia
con.connect(function(err) {

    if (err) throw err; // zlap error

    console.log("DataBase connected!"); //polaczono z bazą

    });
try {
//funkcja odswiez listę  wczesniejszych losowań
    function updatelist() {

        io.emit("updatelist", lista) // wyslij socket updatelist z listą wcześniejszych losowan

    }

    function refresh_history() {

        io.emit("refresh_history") // wyslij socket updatehistory z listą wcześniejszych losowan

    }

//funkcja stworz element wylosowany
    function element(color, img, width, height) {

        this.color = color;

        this.img = img;

        this.width = width;


        this.height = height;


    }

//funkcja stworz wiadomość
    function message(nick, mess, clock) {

        this.nickmess = nick;

        this.clockmess = clock;

        this.mess = mess;

    }

//funkcja odswiez obstawione lącznie coinsy oraz liste betow
    function betlist(idnewbet, clr) {

        io.emit("refresh_bets", totalred, totalgreen, totalblack, coins_red, coins_green, coins_black, "niewylosowano");//odswiez calkowite bety

        var sql = "SELECT * FROM bety ORDER BY coinsy ASC "  //zaznacz wszystko w bazie bety sortując coinsy obstawione rosnąco

        con.query(sql, function (err, results) {

            io.emit("emptybets") //wyzeruj bety

            if (results.length == 0) {

                io.emit("refresh_bets_list", '', '', '', results.length) //odswiez liste betów

            } else {

                for (var i = results.length - 1; i > -1; i--) {
                    var id = results[i].userid;
                    var nk = results[i].nick; //ustaw zmienną nk z wartością nick z tabeli o indeksie i

                    var cs = results[i].coinsy; //ustaw zmienną cs z wartością coinsy z tabeli o indeksie i

                    var cr = results[i].kolor; //ustaw zmienną cr z wartością kolor z tabeli o indeksie i
                    if (idnewbet == id && clr == cr) {
                        io.emit("refresh_bets_list", nk, cs, cr, results.length, "newbet")//odswiez listę betów
                    } else {
                        io.emit("refresh_bets_list", nk, cs, cr, results.length) //odswiez listę betów
                    }
                }

            }


        })

    }


    function historyroll(hash, wyl, ftime) {
        this.hashroll = hash;
        this.colorroll = wyl;
        this.dateroll = ftime;
        this.idroll = history_list.length + 1;

    }

    io.sockets.on('connection', function (socket) {
        var id_profile, nick_profile, zalogowany, upomnienie = 0, ban, blokuj_mess = 0, time = pos,game_pm = "off",esencja_pminowe,razem_pminowe,nastepnie_pminowe,procent_pminowe,proba_n; //ustaw zmienne
        const bomb = [],box_pminowe = [];



        function socketbetlist() {

            socket.emit("refresh_bets", totalred, totalgreen, totalblack, coins_red, coins_green, coins_black, "niewylosowano");//odswiez calkowite bety

            var sql = "SELECT * FROM bety ORDER BY coinsy ASC "  //zaznacz wszystko w bazie bety sortując coinsy obstawione rosnąco

            con.query(sql, function (err, results) {

                socket.emit("emptybets") //wyzeruj bety

                if (results.length == 0) {

                    socket.emit("refresh_bets_list", '', '', '', results.length) //odswiez liste betów

                } else {

                    for (var i = results.length - 1; i > -1; i--) {
                        var id = results[i].userid;
                        var nk = results[i].nick; //ustaw zmienną nk z wartością nick z tabeli o indeksie i

                        var cs = results[i].coinsy; //ustaw zmienną cs z wartością coinsy z tabeli o indeksie i

                        var cr = results[i].kolor; //ustaw zmienną cr z wartością kolor z tabeli o indeksie i

                        socket.emit("refresh_bets_list", nk, cs, cr, results.length) //odswiez listę betów

                    }

                }


            })

        }

        function socketupdatelist() {

            io.emit("updatelist", lista) // wyslij socket updatelist z listą wcześniejszych losowan

        }

        socket.emit("ruletka", number_los, time); //wyslij socket z wartościami wylosowanego koloru z losowania(number_los) i wartością czasu do końca animacji(time)

        console.log("We have a new client: " + socket.id); //wyslij do konsoli nowego klienta który się zalogował i wyslij jego id do konsoli

        users_online += 1;  //dodaj nowego uzytkownika do listy online

        io.emit("users_online", users_online) //odswiez liste online

        if (lista.length > 0) {

            socketupdatelist()  //odswiez liste wczesniejszych losowań

        }

        socketbetlist();  //odswiez liste betów

        if (hashwork == 1) {

            socket.emit("hash", MD5(hash));  //wyslij socket z hashem losowania do indexu


        }

        for (var i = 0; i < mess_list.length; i++) {

            socket.emit("answer_message", mess_list[i].nickmess, mess_list[i].mess, mess_list[i].clockmess) //stworz wszystkie wiadomosci z serwera w indeksie dla uzytkownika

        }


        socket.on("zaloguj", function (login, pass, local) {
            //jezeli jestes zalogowany
            if (zalogowany != true) {
                var sql = "SELECT * FROM uzytkownicy WHERE nick = " + con.escape(login); //sprawdz wyniki w bazie o nick = login
//jezeli login lub haslo będzie puste
                if (login == '' || pass == '') {

                    socket.emit("infoprint", "Uzupełnij wszystkie pola!", "red"); //wyslij alert (blad)

                }
                //jezeli login i haslo nie bedzie puste
                else {

                    con.query(sql, function (err, results) {
//sprawdz czy są wyniki zapytania jezeli długość wyników bedzie mniejsza lub równa 0 wykonaj
                        if (results.length <= 0) {

                            socket.emit("infoprint", "Błędne dane,sprawdź login lub hasło", "red");//wyslij alert

                        } //jezeli długość wyników jest większa niz 0 wykonaj
                        else {
                            var passandpass = results[0].password; //przypisz wartość z tabeli uzytkownicy o nazwie password o indeksie 0 do zmiennej passandpass
                            //jezeli zmienna passandpass będzie równa zmiennej pass wykonaj
                            if (passandpass === pass) {
                                console.log("ktos się zalogował na konto o id " + results[0].id);//wyslij do konsoli

                                nick_profile = results[0].nick; //przypisz wartość z tabeli nick o indeksie 0 do zmiennej nick_profile

                                var coins_profile = results[0].coins;  //przypisz do zmiennej coins_profile wartość coins z tabeli o indeksie 0

                                id_profile = results[0].id; //przypisz do zmiennej id_profile wartość id z tabeli o indeksie 0

                                socket.emit("zalogowano", nick_profile, coins_profile, login, pass); //wyslij soket zalogowano do indeksu z wartościami ze zmiennych nick_profile,coins_profile,login,pass


                                zalogowany = true; //przypisz zmiennej zalogowany wartosc true
                                if (local != 'localstorage') {
                                    socket.emit("infoprint", "Zalogowałeś się. Witamy " + nick_profile + " ponownie!", "green");//wyslij socket do indeksu o nazwie infoprint
                                }
                            }
                            //jezeli hasła nie pasują do siebie wykonaj
                            else {
                                socket.emit("infoprint", "Błędne dane,sprawdź login lub hasło", "red");//wyslij socket do indeksu o nazwie infoprint
                            }

                        }


                    })

                }


            }
//jezeli zalogowany jest rowny true wykonaj
            else {
                socket.emit("infoprint", "Jesteś już zalogowany! aby się zalogować wyloguj się ", "red");//wyslij socket do indeksu o nazwie infoprint
            }
        });

        socket.on("zarejestruj", function (login, pass, r_pass, chk) {
            //jezeli zalogowany nie jest rowny true wykonaj
            if (zalogowany != true) {
                var searchnick = "SELECT * FROM uzytkownicy WHERE nick = " + con.escape(login); //zapytanie zaznacz wszystko z tabeli uzytkownicy gdzie nick jest rowny wartości zmiennej login
                con.query(searchnick, function (err, results) {
                    var ok = 1; //przypisz zmiennej ok wartosc 1
                    //jezeli dlugosc zmiennej results bedzie wieksza od 0 wykonaj
                    if (results.length > 0) {
                        socket.emit("infoprint", "Ten Nick jest już zajęty wybierz inny", "red");//wyslij socket do indeksu o nazwie infoprint
                        ok = 0; //przypisz zmiennej ok wartosc 1
                        return false;//zwroc fałsz
                    }
                    //jezeli dlgosc wartosci ze zmiennej login będzie mniejsza od 4 lub wieksza od 12 wykonaj
                    if (login.length < 4 || login.length > 12) {
                        socket.emit("infoprint", "Nick minimum 4 znaki i maksimum 12", "red");//wyslij socket do indeksu o nazwie infoprint
                        ok = 0;//przypisz zmiennej ok wartosc 1
                        return false;//zwroc fałsz
                    }
                    //jezeli dlugosc wartosci ze zmiennej pass bedzie mniejsza niz 5 wykonaj
                    if (pass.length < 5) {
                        socket.emit("infoprint", "Hasło musi posiadać minium 5 znaków", "red");//wyslij socket do indeksu o nazwie infoprint
                        ok = 0;//przypisz zmiennej ok wartosc 1
                        return false;//zwroc fałsz
                    }
                    //jezeli wartosc ze zmiennej pass nie bedzie rowna wartosci ze zmiennej r_pass wykonaj
                    if (pass != r_pass) {
                        socket.emit("infoprint", "Hasła do siebie nie pasują", "red");//wyslij socket do indeksu o nazwie infoprint
                        ok = 0;//przypisz zmiennej ok wartosc 1
                        return false;//zwroc fałsz
                    }
                    //jezeli zmienna chk bedzie rowna false wykonaj
                    if (chk == 'false') {
                        socket.emit("infoprint", "muszisz zaznaczyć akceptuję regulamin!", "red");//wyslij socket do indeksu o nazwie infoprint
                        ok = 0;//przypisz zmiennej ok wartosc 1
                        return false;//zwroc fałsz
                    }
                    //jezeli zmienna ok bedzie rowna 1 wykonaj
                    if (ok == 1) {
                        var nowy = "INSERT INTO uzytkownicy (nick,password,coins) VALUES(?,?,'100')"; //zapytanie wpisz do tabeli uzytkowicy wartosci login pass '100' do nick ,password,coins
                        con.query(nowy, [login, pass])
                        socket.emit("infoprint", "Zarejestrowałeś się ! Za chwilę strona zostanie przeładowana", "green");//wyslij socket do indeksu o nazwie infoprint
                        socket.emit("refresh_register")//wyslij socket do indeksu

                    }


                })
            }
            //jezeli zalogowany jest rowny true wykonaj
            else {
                socket.emit("infoprint", "Aby się zarejestrować wyloguj się", "red");//wyslij socket do indeksu
            }
        });


        socket.on("balance", function (mg) {

            if (zalogowany == true) {

                var profile = "SELECT * FROM uzytkownicy WHERE id=?"

                con.query(profile, [id_profile], function (err, results) {

                    var coinss = results[0].coins;

                    socket.emit("balance_text", coinss);


                })


            }

        });

        socket.on("updatecoins", function () {

            var profile = "SELECT * FROM uzytkownicy WHERE id=?"

            con.query(profile, [id_profile], function (err, results) {

               var coinss = results[0].coins;

                socket.emit("updatecoins", coinss);

            })

        })

        socket.on("obstaw", function (cs, cr, x) {

            if (zalogowany == true) {

                if (bet_open == true) {

                    var csp = parseInt(cs);

                    var profile = "SELECT * FROM uzytkownicy WHERE id=?";

                    con.query(profile, [id_profile], function (err, results) {

                        var coins_profile = results[0].coins;


                        if (csp > 9 && (csp % 1) == 0 && csp <= coins_profile && csp < 100000000) {

                            var bet = parseInt(coins_profile) - parseInt(cs);

                            var sql = "UPDATE uzytkownicy SET coins = ? WHERE id = ?";

                            con.query(sql, [bet, id_profile]);

                            socket.emit("updatecoins", bet);


                            var selectbetsql = "SELECT * FROM bety WHERE userid=? AND kolor = ?";

                            con.query(selectbetsql, [id_profile, cr], function (err, results) {

                                if (results.length == 0) {

                                    var sqlbet = "INSERT INTO bety VALUES(?,?,?,?)";

                                    con.query(sqlbet, [id_profile, cr, cs, nick_profile]);

                                    if (cr == "red") {

                                        coins_red += parseInt(cs);

                                        totalred += 1

                                    }

                                    if (cr == "green") {

                                        coins_green += parseInt(cs);

                                        totalgreen += 1

                                    }

                                    if (cr == "black") {

                                        coins_black += parseInt(cs);

                                        totalblack += 1

                                    }

                                    socket.emit("infoprint", "obstawiłeś " + cs + " esencji na kolor " + cr, "green","push");

                                } else {

                                    var sqlbetcoins = parseInt(results[0].coinsy) + parseInt(cs);

                                    var sqlbetupdate = "UPDATE bety SET coinsy = ? WHERE userid = ? AND kolor = ?";

                                    con.query(sqlbetupdate, [sqlbetcoins, id_profile, cr]);

                                    if (cr == "red") {

                                        coins_red += parseInt(cs);


                                    }

                                    if (cr == "green") {

                                        coins_green += parseInt(cs);


                                    }

                                    if (cr == "black") {

                                        coins_black += parseInt(cs);


                                    }

                                    socket.emit("infoprint", "obstawiłeś " + cs + " esencji na kolor " + cr, "green","push");

                                }

                                var idnewbet = id_profile;
                                var clr = cr;

                                io.emit("refresh_bets", totalred, totalgreen, totalblack, coins_red, coins_green, coins_black, "niewylosowano");//odswiez calkowite bety

                                var sql = "SELECT * FROM bety ORDER BY coinsy ASC "  //zaznacz wszystko w bazie bety sortując coinsy obstawione rosnąco

                                con.query(sql, function (err, results) {

                                    io.emit("emptybets") //wyzeruj bety


                                    for (var i = results.length - 1; i > -1; i--) {
                                        var id = results[i].userid;
                                        var nk = results[i].nick; //ustaw zmienną nk z wartością nick z tabeli o indeksie i

                                        var cs = results[i].coinsy; //ustaw zmienną cs z wartością coinsy z tabeli o indeksie i

                                        var crk = results[i].kolor; //ustaw zmienną cr z wartością kolor z tabeli o indeksie i
                                        if (idnewbet == id && clr == crk) {
                                            io.emit("refresh_bets_list", nk, cs, crk, results.length, "newbet")//odswiez listę betów
                                        } else {
                                            io.emit("refresh_bets_list", nk, cs, crk, results.length) //odswiez listę betów
                                        }


                                    }


                                })


                            })


                        } else {

                            socket.emit("infoprint", "brak dostępnej ilości esencji lub minimalny bet to 10 esencji", "red");//zla liczba coinsow

                        }

                    });


                } else {

                    socket.emit("infoprint", "Losowanie rozpoczęte poczekaj do następnego losowania", "red"); //bety zamkniete

                }

            } else {

                socket.emit("infoprint", "aby grać należy się zalogować", "red");//musisz sie zalogowac

            }

        });

        socket.on("message", (mess) => {

            let messlower = mess.toLowerCase();

            if (zalogowany == true) {

                for (var i = 0; i < lista_banow.length; i++) {

                    if (lista_banow[i] == id_profile) {

                        ban = 1;

                    }

                }

                if (ban == 1) {

                    socket.emit("infoprint", "Posiadasz Bana na czat! Nie możesz już wysyłać wiadomości", "red")

                } else {

                    if (blokuj_mess == 0) {

                        if (messlower.length >= 5 && messlower.length <= 100) {

                            let date = new Date();

                            if (date.getMinutes() < 10) {

                                var clock = date.getHours() + 1 + ":0" + date.getMinutes();

                            } else {

                                var clock = date.getHours() + 1 + ":" + date.getMinutes();

                            }


                            io.emit("answer_message", nick_profile, messlower, clock);

                            var newmess = new message(nick_profile, messlower, clock)


                            mess_list.push(newmess)

                            for (var i = 0; i < wulgaryzm.length; i++) {

                                var sprawdzmess = messlower.search(wulgaryzm[i])


                                if (sprawdzmess != -1) {


                                    socket.emit("infoprint", "Przeklinanie na czacie grozi nie odwracalnym banem na czat!!!", "red")

                                    upomnienie += 1;

                                    if (upomnienie >= 4) {

                                        lista_banow.push(id_profile)

                                    }

                                }


                            }


                            blokuj_mess = 10;

                            var blokuj = setInterval(function () {

                                if (blokuj_mess > 0) {

                                    blokuj_mess -= 1

                                } else {

                                    clearInterval(blokuj)

                                }

                            }, 1000)

                        } else {

                            socket.emit("infoprint", "Wiadomość nie została wysłana,minimum 5 znaków i maksimum 100", "red")

                        }

                    } else {

                        socket.emit("infoprint", "Odczekaj jeszcze " + blokuj_mess + "s aby wysłać wiadomość", "red")

                    }

                }

            } else {

                socket.emit("infoprint", "aby wysłać wiadomość musisz się zalogować", "red");

            }

        });

        socket.on("refresh_history", function () {
            socket.emit("updatehistory", history_list)
        });

        socket.on("cashout",function () {
            if(game_pm == "off"){
                socket.emit("infoprint","wypłata nie powiodła się","red")

            }
            else {
                let k_s = "SELECT * FROM uzytkownicy WHERE id = ?";
                con.query(k_s,[id_profile],function (err,result) {
                    let profile_coins = result[0].coins;
                    let cashout = parseInt(profile_coins) + parseInt(razem_pminowe);
                    let cashout_k = "UPDATE uzytkownicy SET coins = ? WHERE id = ?";
                    con.query(cashout_k,[cashout,id_profile], function () {
                        socket.emit("pokazpoleminowe",bomb)
                        socket.emit("historyinput","wypłacono " + parseInt(razem_pminowe) + " esencji","green")
                        io.emit("refreshcoins");
                        esencja_pminowe = 0;
                        bomb.splice(0, bomb.length);
                        box_pminowe.splice(0, box_pminowe.length);
                        razem_pminowe = 0;
                        nastepnie_pminowe = 0;
                        proba_n = 0;
                        procent_pminowe = 0;
                        socket.emit("options_pminowe", parseInt(nastepnie_pminowe), parseInt(razem_pminowe))
                        game_pm = "off";

                    })

                })







                }

        })
        socket.on("graj_Poleminowe",function (esencja,bombs) {
                if (zalogowany == true){
                    if (game_pm == "on") {
                    socket.emit("infoprint", "gra jest już rozpoczęta...", "red")
                    } else {
                        if(esencja >= 100 && (esencja % 1) == 0 && esencja < 10000000) {
                            socket.emit("refresh_poleminowe");
                            const sprawdz = "SELECT * FROM uzytkownicy WHERE id = ?";
                            con.query(sprawdz, [id_profile], function (err, result) {
                                let profile_coins = result[0].coins

                                if (profile_coins >= esencja || (esencja % 1) == 0 || esencja < 10000000 || esencja > 9) {
                                    let balans_konta = parseInt(profile_coins) - parseInt(esencja);
                                    let balans = "UPDATE uzytkownicy SET coins = ? WHERE id = ?"
                                    con.query(balans, [balans_konta, id_profile])
                                    io.emit("refreshcoins");
                                    const losowaniebomb = function () {

                                        let number = Math.floor(Math.random() * 25) + 1;
                                        for (let i = 0; i < bomb.length; i++) {
                                            if (number == bomb[i]) {
                                                return losowaniebomb();
                                            }
                                            ;
                                        }
                                        bomb.push(number)

                                        if (bomb.length != bombs) {
                                            return losowaniebomb();
                                        }
                                        esencja_pminowe = esencja;
                                        if (bombs == 1) {
                                            procent_pminowe = 1;
                                            razem_pminowe = parseInt(esencja_pminowe);
                                            proba_n = 1;

                                        }
                                        if (bombs == 3) {
                                            procent_pminowe = 1;
                                            razem_pminowe = parseInt(esencja_pminowe);
                                            proba_n = 1;


                                        }
                                        if (bombs == 5) {
                                            procent_pminowe = 1;
                                            razem_pminowe = parseInt(esencja_pminowe);
                                            proba_n = 1;


                                        }
                                        if (bombs == 24) {
                                            procent_pminowe = 2000;
                                            razem_pminowe = parseInt(esencja_pminowe);
                                            proba_n = 1;

                                        }
                                        nastepnie_pminowe = esencja_pminowe * (procent_pminowe / 100);
                                        socket.emit("options_pminowe", parseInt(nastepnie_pminowe), razem_pminowe)
                                        socket.emit("historyinput", "rozpoczęto grę...", "green")
                                        game_pm = "on"
                                        return;
                                    }
                                    return losowaniebomb();

                                } else {
                                    socket.emit("infoprint", "obstawienie nie powiodło się", "red")
                                }

                            })
                        }
                        else {
                            socket.emit("infoprint", "minimalny bet to 100 esencji", "red")
                        }
                }
            }
            else{
                socket.emit("infoprint","aby zagrać musisz się zalogować","red")
            }
        })
        socket.on("Game_Poleminowe",function (number) {
            if (zalogowany == true) {
                if (game_pm == "on") {
                    for (let i = 0; i < box_pminowe.length; i++) {
                        if (number == box_pminowe[i]) return;
                    }
                    box_pminowe.push(number);
                    for (let i = 0; i < bomb.length; i++) {
                        if (number == bomb[i]) {
                            socket.emit("przegrana", bomb)
                            esencja_pminowe = 0;
                            bomb.splice(0, bomb.length);
                            box_pminowe.splice(0, box_pminowe.length);
                            razem_pminowe = 0;
                            nastepnie_pminowe = 0;
                            proba_n = 0;
                            procent_pminowe = 0;
                            game_pm = "off";
                            socket.emit("historyinput", "znaleziono bombę pod numerem " + number, "red")
                            socket.emit("historyinput", "gra została zakończona", "red")
                            socket.emit("options_pminowe", parseInt(nastepnie_pminowe), parseInt(razem_pminowe));
                            return;
                        }
                    }
                    nastepnie_pminowe = esencja_pminowe * (procent_pminowe / 100);
                    razem_pminowe += parseInt(nastepnie_pminowe);
                    socket.emit("pokaz_box", number);
                    socket.emit("historyinput", "znaleziono " + parseInt(nastepnie_pminowe) + " esencji pod numerem " + number, "green")
                    if (bomb.length == 1) {
                        proba_n += 1;
                        if (proba_n == 3) {
                            procent_pminowe += 1;
                            proba_n = 1;
                        }

                    }
                    if (bomb.length == 3) {
                        proba_n += 1;
                        if (proba_n == 5) {
                            procent_pminowe += 2;
                            proba_n = 1;

                        } else {
                            procent_pminowe += 1
                        }

                    }
                    if (bomb.length == 5) {
                        proba_n += 1;
                        if (proba_n > 4) {
                            procent_pminowe += 3;

                        } else {
                            procent_pminowe += 1
                        }

                    }


                    nastepnie_pminowe = esencja_pminowe * (procent_pminowe / 100);

                    socket.emit("options_pminowe", parseInt(nastepnie_pminowe), parseInt(razem_pminowe))
                } else {
                    socket.emit("infoprint", "aby zagrać ustaw poziom trundości oraz ilośc esencji i kliknij graj", "red")

                }
            }
            else{
                    socket.emit("infoprint","aby zagrać musisz się zalogować","red")

            }
        });

        socket.on('disconnect', function () {

            console.log("Client has disconnected");

            users_online -= 1;

            io.emit("users_online", users_online)

        });

    });

    var rollsound = "/audio/roll.wav";

    var wylosowanosound = "/audio/dzwiek_wylosowano.wav";

    activeroulette()

    function activeroulette() {


        rouletteon();

        function rouletteon() {

            bet_open = true;

            console.log("Wlączono Timer ruletki");

            var timer = false;

            if (timer == false) {

                var time = 14;

                var timerinterval = setInterval(function () {


                    if (time > 0) {

                        io.emit("losowanie", 'Losowanie za ' + parseFloat(time).toFixed(2));

                        time -= 0.01

                    }


                }, 10)


                setTimeout(function () {

                    bet_open = false;

                    Start(0, 14)

                    clearInterval(timerinterval)


                    function Start(mn, mx) {

                        Random(mn, mx);


                    }


                }, 14000)


                timer = true

            }

        }


        function Random(min, max) {

            io.emit("losowanie", 'Losowanie...');

            console.log('Losowanie...');

            var rd = Math.floor(Math.random() * (max - min + 1)) + min;

            var num = rd;

            PickDist(num)

        }


        function PickDist(nm) {

            const distance = ['-6900', '-6930', ' -6578', ' -6608', '-6668', '-6700', '-6765', '-6790', '-6855', '-6883', '-7000', ' -7020', '-7089', '-7113', '-7180', '-7205', '-7224', '-7250', '-7135', '-7160', '-7040', '-7070', '-6950', '-6975', '-6810', ' -6835', '-6715', '-6745', '-6625', '-6651']



                    let di = nm * 2;

                    let di2 = (nm * 2) + 1;

                    RandDist(parseInt(distance[di2]), parseInt(distance[di]))




            function RandDist(minDist, maxDist) {

                var dist = Math.floor(Math.random() * (maxDist - minDist + 1)) + minDist;


                Roll(dist, nm);


            }


        }


        function Roll(n, nm) {
            number_los = n;
            pos = 5000;
            time = 6000;
            io.emit("dzwiek", rollsound);

            io.emit("ruletka", n, time);

            var intervalrl = setInterval(function () {

                if (pos == 0) {


                    io.emit("dzwiek", wylosowanosound);

                    wylosowano(nm);

                    setTimeout(function () {

                        restartroulette()

                    }, 4000)

                    clearInterval(intervalrl)

                    var ustawninterval = setInterval(function () {

                        io.emit('ruletka', n, pos);

                    }, 100);

                    setTimeout(function () {

                        clearInterval(ustawninterval)

                    }, 17900)

                } else {

                    io.emit("losowanie", 'Losowanie...');

                    pos -= 1000


                }

            }, 1000)


        }

        function restartroulette() {

            activeroulette()

        }

        function wylosowano(nm) {

            var wylosowano = ''

            if (nm == 0) {

                wylosowano = 'green'

                img = '/css/img/zac-head.png'


            }

            if (nm <= 7 && nm > 0) {

                wylosowano = 'red';

                img = '/css/img/ornn-head.png'


            }

            if (nm > 7) {

                wylosowano = 'black'

                img = '/css/img/aatrox-head.png'

            }

            hashwork = 1;

            l1 = Math.floor((Math.random() * 9999) + 1);

            hash = "roll" + l1 + nm;

            io.emit("hash", MD5(hash));
            var newd = new Date();


            if ((newd.getHours() + 1) < 10) {
                var dhour = "0" + (1 + newd.getHours());
            } else {
                var dhour = newd.getHours() + 1;
            }
            if (newd.getMinutes() < 10) {
                var dmin = "0" + newd.getMinutes();
            } else {
                var dmin = newd.getMinutes();
            }
            if (newd.getSeconds() < 10) {
                var dsec = "0" + newd.getSeconds();
            } else {
                var dsec = newd.getSeconds();
            }

            var fulltime = dhour + ":" + dmin + ":" + dsec;
            var newroll = new historyroll(MD5(hash), wylosowano, fulltime);
            history_list.push(newroll);

            refresh_history()


            var kolor = new element(wylosowano, img, "35px", "35px");

            lista.push(kolor);

            console.log(lista[lista.length - 1].color)

            var wylosowanointerval = setInterval(function () {

                io.emit('losowanie', 'Wylosowano kolor ' + wylosowano);

            }, 1)

            setTimeout(function () {

                clearInterval(wylosowanointerval)

                betlist()

            }, 4000)

            setTimeout(function () {

                updatelist()


            }, 2000)

            console.log(nm);

            io.emit("refresh_bets", totalred, totalgreen, totalblack, coins_red, coins_green, coins_black, "wylosowano", wylosowano);

            coins_black = 0;
            coins_green = 0;
            coins_red = 0;

            totalblack = 0;
            totalred = 0;
            totalgreen = 0;

            var betysql = "SELECT * FROM bety WHERE kolor=?";

            con.query(betysql, [wylosowano], function (err, results) {

                if (results.length > 0) {

                    for (let i = results.length - 1; i > -1; i--) {

                if(i != -1) {
                    var idbet = results[i].userid;

                    var coins = results[i].coinsy;

                    if (wylosowano == "red" || wylosowano == "black") {

                        var profit = coins * 2

                    } else {

                        var profit = coins * 14

                    }

                    var betsql = "UPDATE uzytkownicy SET coins = coins + ? WHERE id=?";

                    con.query(betsql, [profit, idbet]);

                    var deletetb = "DELETE FROM bety WHERE userid = ?";

                    con.query(deletetb, [idbet]);

                    if (i == 0) {

                        io.emit("refreshcoins");

                        var tbdel = "DELETE FROM bety";

                        con.query(tbdel);

                    }
                }
                    }

                }else {

                    io.emit("updater");

                    var tbdel = "DELETE FROM bety";

                    con.query(tbdel);

                }


            })

        }


    }

}
catch(error){
    console.log("coś poszło nie tak opis błędu: " + error)
}

function listen() {

    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://' + host + ':' + port);

}



var wulgaryzm = ['chuj','chuja', 'chujek', 'chuju', 'chujem', 'chujnia',
    'chujowy', 'chujowa', 'chujowe', 'cipa', 'cipę', 'cipe', 'cipą',
    'cipie', 'dojebać','dojebac', 'dojebie', 'dojebał', 'dojebal',
    'dojebała', 'dojebala', 'dojebałem', 'dojebalem', 'dojebałam',
    'dojebalam', 'dojebię', 'dojebie', 'dopieprzać', 'dopieprzac',
    'dopierdalać', 'dopierdalac', 'dopierdala', 'dopierdalał',
    'dopierdalal', 'dopierdalała', 'dopierdalala', 'dopierdoli',
    'dopierdolił', 'dopierdolil', 'dopierdolę', 'dopierdole', 'dopierdoli',
    'dopierdalający', 'dopierdalajacy', 'dopierdolić', 'dopierdolic',
    'dupa', 'dupie', 'dupą', 'dupcia', 'dupeczka', 'dupy', 'dupe', 'huj',
    'hujek', 'hujnia', 'huja', 'huje', 'hujem', 'huju', 'jebać', 'jebac',
    'jebał', 'jebal', 'jebie', 'jebią', 'jebia', 'jebak', 'jebaka', 'jebal',
    'jebał', 'jebany', 'jebane', 'jebanka', 'jebanko', 'jebankiem',
    'jebanymi', 'jebana', 'jebanym', 'jebanej', 'jebaną', 'jebana',
    'jebani', 'jebanych', 'jebanymi', 'jebcie', 'jebiący', 'jebiacy',
    'jebiąca', 'jebiaca', 'jebiącego', 'jebiacego', 'jebiącej', 'jebiacej',
    'jebia', 'jebią', 'jebie', 'jebię', 'jebliwy', 'jebnąć', 'jebnac',
    'jebnąc', 'jebnać', 'jebnął', 'jebnal', 'jebną', 'jebna', 'jebnęła',
    'jebnela', 'jebnie', 'jebnij', 'jebut', 'koorwa', 'kórwa', 'kurestwo',
    'kurew', 'kurewski', 'kurewska', 'kurewskiej', 'kurewską', 'kurewska',
    'kurewsko', 'kurewstwo', 'kurwa', 'kurwaa', 'kurwami', 'kurwą', 'kurwe',
    'kurwę', 'kurwie', 'kurwiska', 'kurwo', 'kurwy', 'kurwach', 'kurwami',
    'kurewski', 'kurwiarz', 'kurwiący', 'kurwica', 'kurwić', 'kurwic',
    'kurwidołek', 'kurwik', 'kurwiki', 'kurwiszcze', 'kurwiszon',
    'kurwiszona', 'kurwiszonem', 'kurwiszony', 'kutas', 'kutasa', 'kutasie',
    'kutasem', 'kutasy', 'kutasów', 'kutasow', 'kutasach', 'kutasami',
    'matkojebca', 'matkojebcy', 'matkojebcą', 'matkojebca', 'matkojebcami',
    'matkojebcach', 'nabarłożyć', 'najebać', 'najebac', 'najebał',
    'najebal', 'najebała', 'najebala', 'najebane', 'najebany', 'najebaną',
    'najebana', 'najebie', 'najebią', 'najebia', 'naopierdalać',
    'naopierdalac', 'naopierdalał', 'naopierdalal', 'naopierdalała',
    'naopierdalala', 'naopierdalała', 'napierdalać', 'napierdalac',
    'napierdalający', 'napierdalajacy', 'napierdolić', 'napierdolic',
    'nawpierdalać', 'nawpierdalac', 'nawpierdalał', 'nawpierdalal',
    'nawpierdalała', 'nawpierdalala', 'obsrywać', 'obsrywac', 'obsrywający',
    'obsrywajacy', 'odpieprzać', 'odpieprzac', 'odpieprzy', 'odpieprzył',
    'odpieprzyl', 'odpieprzyła', 'odpieprzyla', 'odpierdalać',
    'odpierdalac', 'odpierdol', 'odpierdolił', 'odpierdolil',
    'odpierdoliła', 'odpierdolila', 'odpierdoli', 'odpierdalający',
    'odpierdalajacy', 'odpierdalająca', 'odpierdalajaca', 'odpierdolić',
    'odpierdolic', 'odpierdoli', 'odpierdolił', 'opieprzający',
    'opierdalać', 'opierdalac', 'opierdala', 'opierdalający',
    'opierdalajacy', 'opierdol', 'opierdolić', 'opierdolic', 'opierdoli',
    'opierdolą', 'opierdola', 'piczka', 'pieprznięty', 'pieprzniety',
    'pieprzony', 'pierdel', 'pierdlu', 'pierdolą', 'pierdola', 'pierdolący',
    'pierdolacy', 'pierdoląca', 'pierdolaca', 'pierdol', 'pierdole',
    'pierdolenie', 'pierdoleniem', 'pierdoleniu', 'pierdolę', 'pierdolec',
    'pierdola', 'pierdolą', 'pierdolić', 'pierdolicie', 'pierdolic',
    'pierdolił', 'pierdolil', 'pierdoliła', 'pierdolila', 'pierdoli',
    'pierdolnięty', 'pierdolniety', 'pierdolisz', 'pierdolnąć',
    'pierdolnac', 'pierdolnął', 'pierdolnal', 'pierdolnęła', 'pierdolnela',
    'pierdolnie', 'pierdolnięty', 'pierdolnij', 'pierdolnik', 'pierdolona',
    'pierdolone', 'pierdolony', 'pierdołki', 'pierdzący', 'pierdzieć',
    'pierdziec', 'pizda', 'pizdą', 'pizde', 'pizdę', 'piździe', 'pizdzie',
    'pizdnąć', 'pizdnac', 'pizdu', 'podpierdalać', 'podpierdalac',
    'podpierdala', 'podpierdalający', 'podpierdalajacy', 'podpierdolić',
    'podpierdolic', 'podpierdoli', 'pojeb', 'pojeba', 'pojebami',
    'pojebani', 'pojebanego', 'pojebanemu', 'pojebani', 'pojebany',
    'pojebanych', 'pojebanym', 'pojebanymi', 'pojebem', 'pojebać',
    'pojebac', 'pojebalo', 'popierdala', 'popierdalac', 'popierdalać',
    'popierdolić', 'popierdolic', 'popierdoli', 'popierdolonego',
    'popierdolonemu', 'popierdolonym', 'popierdolone', 'popierdoleni',
    'popierdolony', 'porozpierdalać', 'porozpierdala', 'porozpierdalac',
    'poruchac', 'poruchać', 'przejebać', 'przejebane', 'przejebac',
    'przyjebali', 'przepierdalać', 'przepierdalac', 'przepierdala',
    'przepierdalający', 'przepierdalajacy', 'przepierdalająca',
    'przepierdalajaca', 'przepierdolić', 'przepierdolic', 'przyjebać',
    'przyjebac', 'przyjebie', 'przyjebała', 'przyjebala', 'przyjebał',
    'przyjebal', 'przypieprzać', 'przypieprzac', 'przypieprzający',
    'przypieprzajacy', 'przypieprzająca', 'przypieprzajaca',
    'przypierdalać', 'przypierdalac', 'przypierdala', 'przypierdoli',
    'przypierdalający', 'przypierdalajacy', 'przypierdolić',
    'przypierdolic', 'qrwa', 'rozjebać', 'rozjebac', 'rozjebie',
    'rozjebała', 'rozjebią', 'rozpierdalać', 'rozpierdalac', 'rozpierdala',
    'rozpierdolić', 'rozpierdolic', 'rozpierdole', 'rozpierdoli',
    'rozpierducha', 'skurwić', 'skurwiel', 'skurwiela', 'skurwielem',
    'skurwielu', 'skurwysyn', 'skurwysynów', 'skurwysynow', 'skurwysyna',
    'skurwysynem', 'skurwysynu', 'skurwysyny', 'skurwysyński',
    'skurwysynski', 'skurwysyństwo', 'skurwysynstwo', 'spieprzać',
    'spieprzac', 'spieprza', 'spieprzaj', 'spieprzajcie', 'spieprzają',
    'spieprzaja', 'spieprzający', 'spieprzajacy', 'spieprzająca',
    'spieprzajaca', 'spierdalać', 'spierdalac', 'spierdala', 'spierdalał',
    'spierdalała', 'spierdalal', 'spierdalalcie', 'spierdalala',
    'spierdalający', 'spierdalajacy', 'spierdolić', 'spierdolic',
    'spierdoli', 'spierdoliła', 'spierdoliło', 'spierdolą', 'spierdola',
    'srać', 'srac', 'srający', 'srajacy', 'srając', 'srajac', 'sraj',
    'sukinsyn', 'sukinsyny', 'sukinsynom', 'sukinsynowi', 'sukinsynów',
    'sukinsynow', 'śmierdziel', 'udupić', 'ujebać', 'ujebac', 'ujebał',
    'ujebal', 'ujebana', 'ujebany', 'ujebie', 'ujebała', 'ujebala',
    'upierdalać', 'upierdalac', 'upierdala', 'upierdoli', 'upierdolić',
    'upierdolic', 'upierdoli', 'upierdolą', 'upierdola', 'upierdoleni',
    'wjebać', 'wjebac', 'wjebie', 'wjebią', 'wjebia', 'wjebiemy',
    'wjebiecie', 'wkurwiać', 'wkurwiac', 'wkurwi', 'wkurwia', 'wkurwiał',
    'wkurwial', 'wkurwiający', 'wkurwiajacy', 'wkurwiająca', 'wkurwiajaca',
    'wkurwić', 'wkurwic', 'wkurwi', 'wkurwiacie', 'wkurwiają', 'wkurwiali',
    'wkurwią', 'wkurwia', 'wkurwimy', 'wkurwicie', 'wkurwiacie', 'wkurwić',
    'wkurwic', 'wkurwia', 'wpierdalać', 'wpierdalac', 'wpierdalający',
    'wpierdalajacy', 'wpierdol', 'wpierdolić', 'wpierdolic', 'wpizdu',
    'wyjebać', 'wyjebac', 'wyjebali', 'wyjebał', 'wyjebac', 'wyjebała',
    'wyjebały', 'wyjebie', 'wyjebią', 'wyjebia', 'wyjebiesz', 'wyjebie',
    'wyjebiecie', 'wyjebiemy', 'wypieprzać', 'wypieprzac', 'wypieprza',
    'wypieprzał', 'wypieprzal', 'wypieprzała', 'wypieprzala', 'wypieprzy',
    'wypieprzyła', 'wypieprzyla', 'wypieprzył', 'wypieprzyl', 'wypierdal',
    'wypierdalać', 'wypierdalac', 'wypierdala', 'wypierdalaj',
    'wypierdalał', 'wypierdalal', 'wypierdalała', 'wypierdalala',
    'wypierdalać', 'wypierdolić', 'wypierdolic', 'wypierdoli',
    'wypierdolimy', 'wypierdolicie', 'wypierdolą', 'wypierdola',
    'wypierdolili', 'wypierdolił', 'wypierdolil', 'wypierdoliła',
    'wypierdolila', 'zajebać', 'zajebac', 'zajebie', 'zajebią', 'zajebia',
    'zajebiał', 'zajebial', 'zajebała', 'zajebiala', 'zajebali', 'zajebana',
    'zajebani', 'zajebane', 'zajebany', 'zajebanych', 'zajebanym',
    'zajebanymi', 'zajebiste', 'zajebisty', 'zajebistych', 'zajebista',
    'zajebistym', 'zajebistymi', 'zajebiście', 'zajebiscie', 'zapieprzyć',
    'zapieprzyc', 'zapieprzy', 'zapieprzył', 'zapieprzyl', 'zapieprzyła',
    'zapieprzyla', 'zapieprzą', 'zapieprza', 'zapieprzy', 'zapieprzymy',
    'zapieprzycie', 'zapieprzysz', 'zapierdala', 'zapierdalać',
    'zapierdalac', 'zapierdalaja', 'zapierdalał', 'zapierdalaj',
    'zapierdalajcie', 'zapierdalała', 'zapierdalala', 'zapierdalali',
    'zapierdalający', 'zapierdalajacy', 'zapierdolić', 'zapierdolic',
    'zapierdoli', 'zapierdolił', 'zapierdolil', 'zapierdoliła',
    'zapierdolila', 'zapierdolą', 'zapierdola', 'zapierniczać',
    'zapierniczający', 'zasrać', 'zasranym', 'zasrywać', 'zasrywający',
    'zesrywać', 'zesrywający', 'zjebać', 'zjebac', 'zjebał', 'zjebal',
    'zjebała', 'zjebala', 'zjebana', 'zjebią', 'zjebali', 'zjeby','pizdy','cwel','cwele'];
