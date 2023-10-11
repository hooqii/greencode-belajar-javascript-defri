function penjumlahan(angka1, angka2) {
    return angka1 + angka2
}

function pangkat(angka) {
    return angka*angka
}

// fungsi di dalam fungsi
function eksekusi(angka, fungsi){
    return fungsi(angka)
}

console.log(eksekusi(3, pangkat))


