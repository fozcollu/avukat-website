# Görseller — Durum ve Geçmiş

## Şu anki durum

Hero, avukat portreleri ve blog kapakları şu an **tamamen yerel, ağ
gerektirmeyen** tasarımlarla gösteriliyor:

- `components/ui/Monogram.tsx` — avukat kartları/CV sayfası: isim baş
  harfleri + gradyan + ince "terazi" motifi.
- `components/ui/AbstractPanel.tsx` — hero ve blog kapakları: koyu gradyan +
  büyük, soluk bir ikon (blog kapaklarında ilgili pratik alanın ikonu).

Bu bileşenler hiçbir dış görsele bağımlı değil, bu yüzden ağ durumu ne
olursa olsun asla "kırık görsel" olarak görünmezler.

## Neden Unsplash'ten vazgeçildi

İlk denemede hero + 3 portre + 2 blog kapağı için Unsplash'ten ücretsiz
lisanslı stok fotoğraflar bulunup `next/image` ile uzaktan bağlanmıştı.
Ancak bu geliştirme ortamının ağ erişimi görsel CDN'lerine (`images.unsplash.com`
dahil) kısıtlı/kararsız çıktı — bazı denemelerde görseller yüklendi, bazılarında
"kırık görsel" ikonu olarak göründü. Güvenilir olmadığı için bu yaklaşım
terk edildi.

Kullanılan (artık aktif olmayan) fotoğrafların kaynakları, ileride tekrar
denenmek istenirse diye burada arşivlendi (Unsplash Lisansı, ücretsiz):

| Kullanım | Fotoğrafçı | Unsplash Sayfası |
|---|---|---|
| Hero — ofis resepsiyon görseli | Revendo | `unsplash.com/photos/a-black-and-white-reception-desk-with-a-plant-in-front-of-it-HdYPD_Tgx94` |
| Salih Şeref Kosova — portre | Tony Luginsland | `unsplash.com/photos/a-man-in-a-suit-posing-for-a-picture-bbOOTiq-EPA` |
| Zeynep Aksu Kosova — portre | Troy Spoelma | `unsplash.com/photos/a-woman-with-long-hair-wearing-a-blue-blazer-EV8PPQG6zxY` |
| Mehmet Can Gönül — portre | Jeppe Mønster | `unsplash.com/photos/a-man-in-a-suit-and-tie-posing-for-a-picture-qIZNyuZe638` |
| Blog — "Boşanma / Mal Paylaşımı" | Mariano Rivas | `unsplash.com/photos/gold-wedding-bands-on-fabric-ZYet8yoepik` |
| Blog — "İşten Haksız Çıkarılma" | Amari Shutters | `unsplash.com/photos/two-businessmen-shaking-hands-across-a-desk-9h8Nhj8fy_E` |

## Gerçek Görsele Geçiş

Gerçek fotoğraf (stüdyo çekimi, AI üretimi veya güvenilir bir CDN'den
indirilmiş dosya) elinize geçtiğinde:

1. Dosyayı `public/images/team/<slug>.jpg` veya `public/images/blog/<slug>.jpg`
   yoluna koyun.
2. `content/team.ts` içindeki ilgili kişinin `photo` alanına bu yolu yazın
   (`photo: "/images/team/salih-seref-kosova.jpg"`), ya da blog yazısının
   frontmatter'ındaki `coverImage` alanını doldurun.
3. Bileşenler (`TeamMemberCard`, `LawyerProfileHeader`, `BlogPostCard`, blog
   detay sayfası) `photo`/`coverImage` doluysa otomatik olarak gerçek
   görseli (`next/image` ile) gösterir, boşsa placeholder'a döner — başka
   bir kod değişikliği gerekmez.

AI ile görsel üretmek isterseniz `public/images/PROMPTS.md`'deki hazır
prompt'ları kullanabilirsiniz.
