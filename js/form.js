const templates = {
    promo: (nama, harga, tag) => `🔥🔥 PROMO SPESIAL HARI INI! 🔥🔥

Siapa yang udah nungguin ${nama}? Akhirnya hadir dengan harga yang bikin kaget! 😱

💰 Cuma ${harga} aja!
sebelum✅ Kualitas terjamin
✅ Stok terbatas, siapa cepat dia dapat
✅ Pengiriman cepat ke seluruh Indonesia

Jangan sampai nyesel karena kehabisan ya! ⏰
Langsung checkout sekarang  harga balik normal 🛒💨

#Promo #${tag} #DiskonHariIni #BelanjaHemat`,

    santai: (nama, harga, tag) => `Hai bestie! 👋✨

Lagi cari ${nama}? Pas banget, kamu nyasar ke tempat yang tepat 😎

Gak perlu nguras dompet, cukup ${harga} aja udah bisa kamu bawa pulang. Worth it parah sih ini, beneran deh! 🤌

Cocok buat dipakai sendiri, atau dijadiin kado buat orang tersayang 🎁💕

Yuk mampir, chat aja kalau ada yang mau ditanyain~ 💬

#${tag} #RekomendasiProduk #RacunBelanja #WorthIt`,

    formal: (nama, harga, tag) => `Dengan bangga kami persembahkan:
✦ ${nama} ✦

Produk ini dipilih secara cermat untuk memberikan kualitas terbaik dan pengalaman yang memuaskan bagi Anda.

Harga: ${harga}

Keunggulan:
• Kualitas terjamin dan telah melalui kontrol mutu
• Layanan pelanggan yang responsif
• Pengiriman aman dan tepat waktu

Untuk pemesanan dan informasi lebih lanjut, silakan hubungi kami melalui pesan langsung. Terima kasih atas kepercayaan Anda.

#${tag} #ProdukBerkualitas #BelanjaAman`,

    flashsale: (nama, harga, tag) => `⚡ FLASH SALE ⚡

${nama} lagi turun harga jadi ${harga}!

⏳ Waktu terbatas
📦 Stok menipis
🚚 Langsung dikirim

Sebelum kehabisan, amankan sekarang! 🏃💨

#FlashSale #${tag} #PromoTerbatas #CheckoutSekarang`,

    storytelling: (nama, harga, tag) => `Dulu, nyari produk yang pas itu ribet banget. Udah coba sana-sini, hasilnya bikin kecewa. 😮‍💨

Sampai akhirnya ketemu ${nama}. Dari pertama pakai, langsung kerasa bedanya.

Sekarang kamu juga bisa merasakannya, cukup ${harga}. Mungkin ini yang selama ini kamu cari. ✨

Cerita kamu berikutnya dimulai dari sini. 💛

#${tag} #CeritaPelanggan #ProdukPilihan #Rekomendasi`,

    minimalis: (nama, harga, tag) => `${nama}

${harga}

Simpel. Berkualitas. Siap dikirim.

Pesan via DM.

#${tag} #Minimalis #ReadyStock`,

    humor: (nama, harga, tag) => `Dompet: "Jangan beli lagi dong..." 😭
Hati: "Tapi ${nama} lucu banget..." 😍

Tenang, cuma ${harga} aja kok! Dompet aman, hati senang. 😂💸

Checkout dulu, mikirnya belakangan! 🛒🤪

#${tag} #RacunShopee #BelanjaHappy #DompetAman`,

    premium: (nama, harga, tag) => `✨ ${nama} ✨

Dirancang untuk Anda yang menghargai kualitas dan detail.

Investasi: ${harga}

◆ Material pilihan
◆ Pengerjaan teliti
◆ Kemasan eksklusif

Koleksi terbatas. Hubungi kami untuk pemesanan.

#${tag} #Exclusive #PremiumQuality #LimitedEdition`,

    problemSolusi: (nama, harga, tag) => `Capek sama produk yang gampang rusak? 😩
Bingung cari yang kualitasnya bagus tapi harganya masuk akal? 🤔

Solusinya: ${nama}!

✅ Awet dan tahan lama
✅ Praktis dipakai sehari-hari
✅ Harga ramah di kantong: ${harga}

Gak perlu bingung lagi, tinggal pesan. 👉

#${tag} #SolusiTepat #ProdukBagus #BelanjaPintar`,

    testimoni: (nama, harga, tag) => `⭐⭐⭐⭐⭐ "Beneran bagus, gak nyesel beli!"

Itu kata pelanggan yang sudah mencoba ${nama}. 🥰

Sekarang giliran kamu. Harganya cuma ${harga}, kualitasnya sudah dipercaya banyak orang.

Chat kami untuk order atau tanya-tanya dulu juga boleh. 💬

#${tag} #TestimoniPelanggan #TerpercayaTerbukti #BestSeller`,

    newArrival: (nama, harga, tag) => `🆕 NEW ARRIVAL! 🆕

Yang ditunggu-tunggu akhirnya datang: ${nama}!

Harga perkenalan: ${harga}

Jadi yang pertama punya sebelum yang lain! 🏆
Stok awal terbatas, jangan sampai ketinggalan. 👀

#NewArrival #${tag} #BaruDatang #ReadyStock`,

    hadiah: (nama, harga, tag) => `Bingung cari kado? 🎁

${nama} bisa jadi jawabannya! Cocok buat ulang tahun, hari spesial, atau sekadar kejutan kecil buat orang tersayang. 💝

Harga cuma ${harga}, bisa request kemasan kado juga lho! 🎀

Bikin orang tersayang tersenyum hari ini. 😊

#${tag} #IdeKado #HadiahSpesial #GiftIdea`,

    hemat: (nama, harga, tag) => `Belanja hemat, hasil maksimal! 💸

${nama} cuma ${harga} aja.

👍 Harga bersahabat
👍 Kualitas gak murahan
👍 Cocok buat semua kalangan

Hemat hari ini, tenang sampai akhir bulan. 😌

#${tag} #BelanjaHemat #HargaBersahabat #MurahBerkualitas`,

};

const form = document.getElementById("form");

const rules = {
    nama: (v) => {
        v = v.trim();
        if (!v) return "Nama produk wajib diisi.";
        if (v.length < 3) return `Nama produk minimal 3 karakter (sekarang ${v.length}).`;
        if (v.length > 60) return `Nama produk maksimal 60 karakter (sekarang ${v.length}).`;
        if (!/\p{L}/u.test(v)) return "Nama produk harus mengandung huruf.";
        return "";
    },
    harga: (v) => {
        if (!v) return "Harga wajib diisi.";
        const n = Number(v);
        if (!Number.isInteger(n)) return "Harga harus angka bulat, tanpa koma.";
        if (n < 1000) return "Harga minimal Rp 1.000.";
        if (n > 100000000) return "Harga maksimal Rp 100.000.000.";
        return "";
    },
};

function validate(id) {
    const input = document.getElementById(id);
    const msg = rules[id](input.value);
    document.getElementById(`${id}-error`).textContent = msg;
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    input.classList.toggle("invalid", Boolean(msg));
    return !msg;
}

for (const id in rules) {
    document.getElementById(id).addEventListener("input", () => validate(id));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const invalid = Object.keys(rules).filter((id) => !validate(id));
    if (invalid.length) {
        document.getElementById(invalid[0]).focus();
        document.getElementById("caption").value = "";
        return;
    }
    const nama = document.getElementById("nama").value.trim();
    const harga = Number(document.getElementById("harga").value)
        .toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
    const template = document.getElementById("template").value;
    const tag = nama.replace(/[^\p{L}\p{N}\s]/gu, "").split(/\s+/)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");

    document.getElementById("caption").value = templates[template](nama, harga, tag);
});
