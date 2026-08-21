# İçerik Kuralları

## Baro Uyumluluğu (Reklam Yasağı)

Türkiye Barolar Birliği meslek kuralları, avukatlık hizmetlerinin reklamını
yasaklar. Sitede yer alacak tüm metinlerde (ana sayfa, hakkımızda, blog
yazıları, sosyal medya paylaşımları) şu ifadelerden kaçınılmalıdır:

- Karşılaştırmalı/üstünlük ifadeleri: "en iyi", "lider", "Türkiye'nin
  1 numaralı...", "rakipsiz" vb.
- Başarı garantisi veya sonuç vaadi içeren ifadeler ("davanızı kesin
  kazanırız" gibi).
- Ünlü müvekkil isimleri veya belirli dosya detaylarının izinsiz paylaşımı.

Sitenin barodan onay alması gerektiğinden, yayın öncesi tüm metinler ilgili
avukat/danışman tarafından bu kriterlere göre gözden geçirilmelidir.

## Blog Yazısı Ekleme

1. `content/blog/tr/<slug>.md` (Türkçe) ve isteğe bağlı olarak
   `content/blog/en/<slug>.md` (İngilizce) dosyası oluşturun.
2. Frontmatter alanlarını doldurun: `title`, `slug`, `date` (YYYY-AA-GG),
   `excerpt`, `practiceAreaSlug` (bkz. `content/practiceAreas.ts` içindeki
   slug'lar), `author` (bkz. `content/team.ts` içindeki slug'lar),
   `coverImage`.
3. Gövdeye markdown formatında yazıyı yazın (`##` alt başlıklar, `**kalın**`,
   listeler ve linkler desteklenir).
4. `npm run dev` ile `/tr/blog` ve `/en/blog` sayfalarında görünürlüğünü
   kontrol edin.

## Taslak İşaretleri

Kod tabanında `[TASLAK]` / `[DRAFT]` ile işaretlenmiş tüm metinler (avukat
CV detayları, adres/iletişim bilgileri, KVKK metni) müvekkil onayı
alınmadan yayına çıkmamalıdır.
