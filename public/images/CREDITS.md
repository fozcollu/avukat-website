# Görseller — Kaynaklar

## Durum

Hero, avukat portreleri ve blog kapakları **gerçek stok fotoğraflar**
(Unsplash, ücretsiz lisans) — indirilip repoya `public/images/` altında
**yerel dosya** olarak eklendi. Dış bir CDN'e bağımlılık yok, `next/image`
bu dosyaları normal şekilde optimize ediyor.

| Dosya | Fotoğrafçı | Unsplash Sayfası |
|---|---|---|
| `hero/office-hero.jpg` | Florian Peeters | `unsplash.com/photos/an-office-with-a-desk-chair-and-bookshelves-ugkOAFZZlxw` |
| `team/salih-seref-kosova.jpg` | Tony Luginsland | `unsplash.com/photos/a-man-in-a-suit-posing-for-a-picture-bbOOTiq-EPA` |
| `team/zeynep-aksu-kosova.jpg` | Troy Spoelma | `unsplash.com/photos/a-woman-with-long-hair-wearing-a-blue-blazer-EV8PPQG6zxY` |
| `team/mehmet-can-gonul.jpg` | Jeppe Mønster | `unsplash.com/photos/a-man-in-a-suit-and-tie-posing-for-a-picture-qIZNyuZe638` |
| `blog/bosanma-mal-paylasimi.jpg` | Mariano Rivas | `unsplash.com/photos/gold-wedding-bands-on-fabric-ZYet8yoepik` |
| `blog/isten-cikarilma.jpg` | Amari Shutters | `unsplash.com/photos/two-businessmen-shaking-hands-across-a-desk-9h8Nhj8fy_E` |

Tümü [Unsplash Lisansı](https://unsplash.com/license) kapsamında ücretsiz
kullanım içindir (atıf zorunlu değildir, iyi pratik olarak burada
belgeleniyor).

## Bunlar stok fotoğraf — gerçek insanlar değil

Salih Şeref Kosova, Zeynep Aksu Kosova ve Mehmet Can Gönül'ün portreleri
gerçek fotoğraflarını **temsil etmiyor** — sitenin profesyonel görünmesi
için geçici olarak seçilmiş stok fotoğraflardır. Gerçek stüdyo çekimleri
veya onaylı AI portreler geldiğinde bunların yerine konmalıdır (bkz. aşağıda
"Değiştirme").

## Yedek tasarım (fallback)

`content/team.ts`'te bir kişinin `photo` alanı boşsa veya bir blog
yazısının `coverImage`'ı boşsa (ör. ileride eklenecek yeni bir kişi/yazı
için henüz görsel yoksa), bileşenler otomatik olarak ağ gerektirmeyen bir
tasarıma döner — asla "kırık görsel" göstermez:

- `components/ui/Monogram.tsx` — isim baş harfleri + gradyan
- `components/ui/AbstractPanel.tsx` — koyu gradyan + büyük soluk ikon

## Değiştirme

Gerçek fotoğraflar geldiğinde:

1. Aynı dosya adlarıyla (`hero/office-hero.jpg`,
   `team/<slug>.jpg`, `blog/<slug>.jpg`) `public/images/` altındaki
   dosyaların üzerine yazın — kod tarafında hiçbir değişiklik gerekmez.
2. Farklı dosya adı kullanmak isterseniz, `content/team.ts`'teki `photo`
   alanını veya blog yazısının `coverImage` frontmatter alanını güncelleyin.

AI ile görsel üretmek isterseniz hazır prompt'lar `public/images/PROMPTS.md`'de.
