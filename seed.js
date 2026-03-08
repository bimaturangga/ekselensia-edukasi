import { ConvexHttpClient } from "convex/browser";
import { api } from "./convex/_generated/api.js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = new ConvexHttpClient(process.env.VITE_CONVEX_URL);

async function seed() {
    console.log("Seeding data ke Convex...");

    const articles = [
        {
            title: "Panduan Lengkap Mengurus Visa Belajar ke Tiongkok Tahun Ini",
            slug: "panduan-lengkap-mengurus-visa",
            tag: "Panduan",
            date: "12 Mar 2026",
            author: "Tim Konselor",
            image: "https://images.unsplash.com/photo-1757843298369-6e5503c14bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFuZ2hhaSUyMG1vZGVybiUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc3MjgyOTk1OXww&ixlib=rb-4.1.0&q=80&w=1080",
            content: `
        <p>Proses pengurusan visa sering kali menjadi salah satu tahap yang paling mendebarkan sekaligus membingungkan bagi calon mahasiswa internasional. Namun, dengan panduan yang tepat, Anda bisa melewati proses ini dengan lancar.</p>

        <h2>1. Kenali Jenis Visa Pelajar Tiongkok</h2>
        <p>Tiongkok mengeluarkan dua jenis visa pelajar (Visa X) berdasarkan durasi studi:</p>
        <ul>
            <li><strong>Visa X1:</strong> Dikeluarkan untuk siswa yang berencana belajar selama lebih dari 6 bulan (biasanya untuk program S1, S2, S3, atau program bahasa jangka panjang).</li>
            <li><strong>Visa X2:</strong> Dikeluarkan untuk siswa yang berencana belajar selama kurang dari atau sama dengan 6 bulan (biasanya untuk program pertukaran atau kursus singkat).</li>
        </ul>

        <h2>2. Dokumen Persyaratan Utama</h2>
        <p>Sebelum datang ke pusat pengajuan visa, pastikan dokumen-dokumen berikut sudah lengkap. Jangan lupa membawa dokumen asli dan fotokopinya:</p>
        <ul>
            <li><strong>Paspor asli:</strong> Masa berlaku minimal 6 bulan setelah tanggal keberangkatan dengan minimal dua halaman kosong.</li>
            <li><strong>Formulir Aplikasi Visa:</strong> Diisi secara online, dicetak, dan ditandatangani.</li>
            <li><strong>Pasfoto terbaru:</strong> Ukuran spesifikasi visa Tiongkok (umumnya 48mm x 33mm) dengan latar belakang putih.</li>
            <li><strong>Admission Notice (Surat Penerimaan Asli):</strong> Dari universitas di Tiongkok.</li>
            <li><strong>Formulir JW201 atau JW202:</strong> Ini adalah form aplikasi asuransi/visa resmi untuk pelajar internasional yang dikeluarkan oleh pemerintah lokal Tiongkok.</li>
        </ul>

        <h2>3. Prosedur Pengajuan</h2>
        <p>Prosedur pengajuannya cukup lugas asalkan persiapan Anda matang:</p>
        <ol>
            <li><strong>Isi formulir online:</strong> Masuk ke situs resmi Chinese Visa Application Service Center (CVASC), pilih negara Anda, dan lengkapi formulir aplikasi.</li>
            <li><strong>Buat Janji Temu:</strong> Setelah formulir siap, buat janji temu kedatangan. Tanggal-tanggal di masa penerimaan mahasiswa (Juli-Agustus) sangat padat, jadi mendaftarlah sedini mungkin.</li>
            <li><strong>Datang ke CVASC:</strong> Datang tepat waktu, serahkan dokumen. Anda mungkin akan diminta untuk merekam biometrik (sidik jari).</li>
        </ol>
      `
        },
        {
            title: "10 Universitas Terbaik di Tiongkok Berdasarkan Ranking Global",
            slug: "10-universitas-terbaik-di-tiongkok",
            tag: "Informasi",
            date: "10 Mar 2026",
            author: "Tim Akademik",
            image: "https://images.unsplash.com/photo-1559402387-f51005cd23c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWtpbmclMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc3MjgyOTk2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
            content: `<p>Pelajari daftar universitas unggulan yang masuk jajaran top dunia, lengkap dengan keunggulan fakultas dan persentase penerimaan mahasiswa internasional.</p>`
        },
        {
            title: "Tips Cepat Lulus Ujian HSK 4 dalam 6 Bulan",
            slug: "tips-cepat-lulus-hsk-4",
            tag: "Tips Belajar",
            date: "05 Mar 2026",
            author: "Laoshi Anita",
            image: "https://images.unsplash.com/photo-1646716000935-12ac7ead4070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbGFuZ3VhZ2UlMjBzdHVkeSUyMGJvb2t8ZW58MXx8fHwxNzcyODI5OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
            content: `<p>Di artikel ini kami menyoroti cara terbaik untuk membangun rutinitas belajar bahasa Mandarin Anda. Dibuat khusus untuk pemula yang ingin mengejar syarat pendaftaran S1.</p>`
        }
    ];

    for (const article of articles) {
        await client.mutation(api.seed.createArticle, article);
    }

    console.log("Seeding sukses!");
}

seed().catch(console.error);
