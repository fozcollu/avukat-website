# Görsel Kaynakları

Bu ortamda görsel üretim/indirme aracı bulunmadığından, ilk sürümde
Unsplash'ten ücretsiz lisanslı stok fotoğraflar **uzaktan (remote URL)**
kullanılıyor (bkz. `next.config.ts` → `images.remotePatterns`). Gerçek ofis
ve avukat fotoğrafları / AI ile üretilmiş görseller geldiğinde, ilgili
`content/team.ts` ve `components/home/Hero.tsx` içindeki URL'leri yerel
dosya yollarıyla (`/images/...`) değiştirmeniz yeterli.

Tüm görseller [Unsplash Lisansı](https://unsplash.com/license) kapsamında
ücretsiz kullanım içindir (atıf zorunlu değildir, ama iyi pratik olarak
burada belirtiyoruz).

| Kullanım | Fotoğrafçı | Unsplash Sayfası |
|---|---|---|
| Hero — ofis resepsiyon görseli | Revendo | `unsplash.com/photos/a-black-and-white-reception-desk-with-a-plant-in-front-of-it-HdYPD_Tgx94` |
| Salih Şeref Kosova — portre | Tony Luginsland | `unsplash.com/photos/a-man-in-a-suit-posing-for-a-picture-bbOOTiq-EPA` |
| Zeynep Aksu Kosova — portre | Troy Spoelma | `unsplash.com/photos/a-woman-with-long-hair-wearing-a-blue-blazer-EV8PPQG6zxY` |
| Mehmet Can Gönül — portre | Jeppe Mønster | `unsplash.com/photos/a-man-in-a-suit-and-tie-posing-for-a-picture-qIZNyuZe638` |

## Neden Uzaktan Bağlantı?

Bu geliştirme ortamının ağ erişimi kısıtlı olduğundan (Unsplash CDN'inden
dosya indirilemiyor), görseller yerel diske indirilmek yerine doğrudan
Unsplash CDN URL'si üzerinden `next/image` ile gösteriliyor. Bu, üretimde
çalışan sitede sorunsuz görüntülenir; ancak önerilir ki:

1. Yayına almadan önce bu 4 görseli indirip `public/images/` altına koyup
   yerel dosyaya geçin (harici bir CDN'e bağımlılığı azaltır, hız/kontrol
   artar), veya
2. `public/images/PROMPTS.md`'deki prompt'larla gerçek/AI üretimi
   görsellerle değiştirin.
