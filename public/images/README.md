# Görsel Yer Tutucular

Bu klasörler, yapay zeka ile üretilecek gerçek görseller için ayrılmıştır.
Görseller hazır olana kadar site `ImagePlaceholder` bileşeni ile boş bir
görsel alanı gösterir (bkz. `components/ui/ImagePlaceholder.tsx`).

Beklenen dosyalar:

- `hero/office-hero.jpg` — Ana sayfa hero görseli (profesyonel ofis iç mekanı, 1920x1080)
- `team/salih-seref-kosova.jpg` — Avukat portresi (dikey, ör. 800x1000)
- `team/zeynep-aksu-kosova.jpg`
- `team/mehmet-can-gonul.jpg`
- `blog/<post-slug>.jpg` — Her blog yazısının `coverImage` alanında belirtilen kapak görseli

Gerçek görsel eklendiğinde, ilgili bileşendeki `ImagePlaceholder` kullanımını
`next/image`'a çevirin (`expectedSrc` zaten doğru path'i taşıyor).
