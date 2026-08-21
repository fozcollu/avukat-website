# Kosova Hukuk Bürosu — Web Sitesi

Next.js (App Router) + TypeScript ile geliştirilen, TR/EN iki dilli kurumsal
avukatlık bürosu sitesi.

## Kurulum

```bash
npm install
npm run dev
```

`http://localhost:3000` otomatik olarak `/tr`'ye yönlendirir.

## Proje Yapısı

- `app/[locale]/...` — sayfalar (ana sayfa, hakkımızda, ekibimiz, hizmetlerimiz, blog, kariyer, iletişim, kvkk)
- `components/` — UI bileşenleri (layout, home, team, practice-areas, blog, contact, ui)
- `content/team.ts` — 3 avukatın verisi (isim, unvan, eğitim, baro sicili, çalışma alanları, bio)
- `content/practiceAreas.ts` — hizmet/pratik alanları
- `content/blog/tr/*.md`, `content/blog/en/*.md` — blog yazıları (markdown, bkz. `CONTENT_GUIDELINES.md`)
- `content/legal/kvkk.*.md` — KVKK aydınlatma metni (taslak)
- `messages/tr.json`, `messages/en.json` — arayüz metinleri (next-intl)
- `i18n/` — next-intl routing/middleware yapılandırması

## Görseller

Gerçek fotoğraf henüz yok. Hero, avukat portreleri ve blog kapak görselleri
için `public/images/README.md` dosyasındaki beklenen dosya adlarına göre
yapay zeka ile görsel üretilip ilgili klasörlere eklenmesi, ardından
`components/ui/ImagePlaceholder.tsx` kullanımlarının `next/image` ile
değiştirilmesi gerekiyor.

## İletişim Formu

`components/contact/ContactForm.tsx` içindeki `FORM_ENDPOINT` şu an
placeholder bir Formspree adresi. Yayın öncesi gerçek bir
Formspree/Web3Forms endpoint'i ile değiştirilmeli.

## Taslak İçerikler

`[TASLAK]` / `[DRAFT]` etiketli tüm metinler (avukat CV detayları, adres,
KVKK metni) müvekkil onayına tabidir — bkz. `CONTENT_GUIDELINES.md`.

## Yeni Dil Ekleme (ör. Almanca, Kürtçe)

1. `i18n/routing.ts` içindeki `locales` dizisine ekleyin.
2. `messages/<locale>.json` dosyasını oluşturun.
3. `content/team.ts` ve `content/practiceAreas.ts` içindeki `{ tr, en }`
   objelerine yeni dil alanını ekleyin.
4. İsteğe bağlı olarak `content/blog/<locale>/` klasörü açın.
