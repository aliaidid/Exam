function result()
{
    var input = 'A%6&Z#7c';
    var patt1 = /[a-zA-Z]/g;
    var patt2 = /[0-9]/g;
    var huruf = input.match(patt1);
    var angka = input.match(patt2);
    console.log('Angka : ' +angka);
    console.log('Huruf : ' +huruf);
}
result()