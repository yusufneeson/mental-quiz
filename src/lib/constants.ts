export const CHECKLIST_ITEMS = [
  "Aku sering merasa capek, meski tidak banyak aktivitas",
  "Aku sering ingin menangis, tapi kutahan sendiri",
  "Aku merasa sendirian, meski sedang bersama orang lain",
  "Aku mudah tersinggung atau emosiku naik turun",
  "Aku sering menyalahkan diri sendiri",
  "Tidurku tidak benar-benar membuatku segar",
  "Aku sering overthinking hal kecil",
  "Aku merasa kehilangan semangat yang dulu aku punya",
  "Aku lelah harus terlihat kuat terus",
  "Aku jarang benar-benar mendengarkan perasaanku sendiri",
];

export const getResultMessage = (count: number): string => {
  if (count >= 0 && count <= 2)
    return "👉 Batin relatif stabil, tetap jaga diri";
  if (count >= 3 && count <= 4)
    return "👉 Batin mulai lelah, butuh ruang istirahat";
  if (count >= 5 && count <= 7)
    return "👉 Batin cukup berat, jangan dipendam sendirian";
  if (count >= 8 && count <= 10)
    return "👉 Batin sedang butuh perhatian & pelukan emosional";
  return "";
};
