// type alias
type PaketKiriman<IsiPaket = string> = {
  idPengiriman: string;
  isi: IsiPaket;
  beratKg: number;
};

const paketDokumen: PaketKiriman = {
  idPengiriman: "1021023",
  isi: "Ini pesan rahasia ya",
  beratKg: 10,
};

console.log(paketDokumen);

interface Elektronik {
  nama: string;
  garansiTahun: number;
}

const paketLaptop: PaketKiriman<Elektronik> = {
  idPengiriman: "1723121",
  isi: {
    nama: "Laptop HP",
    garansiTahun: 2025,
  },
  beratKg: 10,
};

console.log(paketLaptop);

// interface
interface WidgetDashboard<TipeData = number[]> {
  judul: string;
  data: TipeData;
  render(): void;
}

const widgetGrafik: WidgetDashboard = {
  judul: "Penjualan Harian",
  data: [10, 20, 30, 40, 50],
  render() {
    console.log(`Merender grafik dengan data ${this.data.join(", ")}`);
  },
};

widgetGrafik.render();

interface Tugas {
  id: number;
  deskripsi: string;
  selesai: boolean;
}

const widgetTugas: WidgetDashboard<Tugas[]> = {
  judul: "Daftar Tugas",
  data: [
    {
      id: 1,
      deskripsi: "Tugas Matematika",
      selesai: true,
    },
    {
      id: 1,
      deskripsi: "Tugas Coding",
      selesai: false,
    },
  ],
  render() {
    console.log("Merender daftar tugas...");
  },
};

widgetTugas.render();

// class
class LocalStorage<TipeData = string> {
  private kunci: string;

  constructor(kunci: string) {
    this.kunci = kunci;
  }

  simpan(data: TipeData): void {
    console.log(`Menyimpan kunci di '${this.kunci}' : ${data}`);
  }

  ambil(): TipeData | null {
    return null;
  }
}

const sesiPengguna = new LocalStorage("token_sesi");
sesiPengguna.simpan("xyz-asdnkasd-asdsa");

interface Pengaturan {
  tema: "terang" | "gelap";
  bahasa: "id" | "en";
}

const pengaturanAplikasi = new LocalStorage<Pengaturan>("pengaturan_app");
pengaturanAplikasi.simpan({ tema: "gelap", bahasa: "id" });

// function
function buatArray<T>(item: T): T[] {
  return [item];
}

const arrayAngka = buatArray(100);
const arrayString = buatArray('Hello World');

console.log(`Hasil inferensi : ${arrayAngka}`)
console.log(`Hasil inferensi : ${arrayString}`)

const arrayAngkaAtauString = buatArray<string | number>('satu')
console.log(`Hasil eksplisit : ${arrayAngkaAtauString}`)