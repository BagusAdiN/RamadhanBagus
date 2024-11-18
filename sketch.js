let stars = [];
let angle = 0; // Variabel untuk rotasi

function setup() {
  createCanvas(640, 480, WEBGL); // Buat kanvas 3D
  
  // Buat posisi acak untuk bintang
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: random(-width * 2, width * 2),
      y: random(-height * 2, height * 2),
      z: random(-500, 500),
    });
  }
}

function draw() {
  background(0); // Latar belakang hitam
  
  // Gambar bintang-bintang
  push();
  noStroke();
  fill(255); // Warna putih untuk bintang
  for (let star of stars) {
    push();
    translate(star.x, star.y, star.z); // Pindahkan ke posisi bintang
    sphere(2); // Ukuran bintang kecil
    pop();
  }
  pop();

  // Tambahkan pencahayaan
  lights();

  // Buat planet (Saturnus)
  push();
  rotateY(angle); // Putar planet secara horizontal
  fill(200, 150, 50); // Warna kuning kecoklatan
  noStroke();
  sphere(100); // Ukuran bola 100
  pop();

  // Buat cincin Saturnus
  push();
  rotateY(angle); // Putar cincin mengikuti planet
  rotateX(PI / 3); // Miringkan cincin
  fill(180, 180, 180, 200); // Warna abu-abu transparan
  noStroke();
  torus(150, 15); // Radius utama 150, ketebalan cincin 15
  pop();

  // Perbarui sudut untuk rotasi
  angle += 0.02; // Kecepatan rotasi
}
