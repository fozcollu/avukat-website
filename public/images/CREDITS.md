# Görseller — Kaynaklar ve Yedek Tasarım

## Şu anki durum

Hero, avukat portreleri ve blog kapakları **gerçek stok fotoğraflarla**
(Unsplash, ücretsiz lisans) gösteriliyor — `next/image` ile `unoptimized`
olarak (tarayıcı görseli doğrudan Unsplash CDN'inden çeker, sunucu
tarafında yeniden işlemez; bkz. "Neden unoptimized" aşağıda).

| Kullanım | Fotoğrafçı | Unsplash Sayfası |
|---|---|---|
| Hero — koyu ahşap ofis / kitaplık | Florian Peeters | `unsplash.com/photos/an-office-with-a-desk-chair-and-bookshelves-ugkOAFZZlxw` |
| Salih Şeref Kosova — portre | Tony Luginsland | `unsplash.com/photos/a-man-in-a-suit-posing-for-a-picture-bbOOTiq-EPA` |
| Zeynep Aksu Kosova — portre | Troy Spoelma | `unsplash.com/photos/a-woman-with-long-hair-wearing-a-blue-blazer-EV8PPQG6zxY` |
| Mehmet Can Gönül — portre | Jeppe Mønster | `unsplash.com/photos/a-man-in-a-suit-and-tie-posing-for-a-picture-qIZNyuZe638` |
| Blog — "Boşanma / Mal Paylaşımı" | Mariano Rivas | `unsplash.com/photos/gold-wedding-bands-on-fabric-ZYet8yoepik` |
| Blog — "İşten Haksız Çıkarılma" | Amari Shutters | `unsplash.com/photos/two-businessmen-shaking-hands-across-a-desk-9h8Nhj8fy_E` |

Tümü [Unsplash Lisansı](https://unsplash.com/license) kapsamında ücretsiz
kullanım içindir.

## Yedek tasarım (fallback)

`content/team.ts`'te bir kişinin `photo` alanı boşsa veya bir blog
yazısının `coverImage`'ı boşsa, bileşenler otomatik olarak ağ gerektirmeyen
tasarımlara döner:

- `components/ui/Monogram.tsx` — isim baş harfleri + gradyan
- `components/ui/AbstractPanel.tsx` — koyu gradyan + büyük soluk ikon

Bu, ileride bir görsel URL'si geçici olarak erişilemez olursa (ya da yeni
bir kişi/yazı için henüz foto girilmemişse) sitenin asla "kırık görsel"
göstermemesini sağlar.

## Neden `unoptimized`

`next/image` normalde görseli **sunucu tarafında** indirip yeniden boyutlandırır.
Bazı ağ/hosting ortamlarında (bu geliştirme sandbox'ı dahil) sunucunun
üçüncü parti bir CDN'e ulaşamaması `/_next/image` üzerinden `500` hatasına
yol açabiliyor. `unoptimized` ile bu adım atlanır, tarayıcı görseli
doğrudan Unsplash'ten çeker — bu, normal internet erişimi olan tarayıcılar
için (yani gerçek ziyaretçiler için) en güvenilir yoldur.

**Not:** Bu geliştirme ortamının kendi ağ erişimi `images.unsplash.com`'a
tutarsız/kısıtlı olduğundan, buradan alınan ekran görüntülerinde görsel
bazen kırık çıkabilir — bu, koddaki bir hatadan değil, bu özel ortamın ağ
kısıtından kaynaklanır. Gerçek tarayıcıda/deploy'da bu sorun yaşanmaz.

## Gerçek/AI Görsele Geçiş

Daha sonra bu stok fotoğrafları gerçek ofis/portre fotoğrafları veya AI
üretimi görsellerle değiştirmek isterseniz:

1. Dosyayı `public/images/team/<slug>.jpg` veya `public/images/hero/` ya da
   `public/images/blog/<slug>.jpg` yoluna koyun.
2. `content/team.ts`'teki `photo` alanını ya da blog yazısının
   `coverImage` frontmatter alanını bu yerel yolla değiştirin.
3. Hiçbir bileşen değişikliği gerekmez — `PortraitImage` yerel/uzak her iki
   kaynağı da otomatik olarak doğru şekilde gösterir.

AI ile görsel üretmek için hazır prompt'lar: `public/images/PROMPTS.md`.
