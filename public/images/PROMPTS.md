# AI Görsel Üretim Prompt'ları

Bu ortamda görsel üretim API'sine erişimim yok, bu yüzden dosyaları
üretemedim. Aşağıdaki prompt'ları bir görsel üretim aracına (ChatGPT/DALL·E,
Midjourney, Claude.ai görsel üretimi, Ideogram vb.) yapıştırıp üretilen
dosyayı belirtilen yola koymanız yeterli — kod tarafı zaten o path'i
bekliyor (`ImagePlaceholder` bileşenlerini `next/image` ile değiştirmem
gerekecek, bunu dosyalar geldiğinde ben yaparım).

## 1. Hero — Ofis Görseli

**Dosya yolu:** `public/images/hero/office-hero.jpg`
**Boyut önerisi:** 1920x1080 (16:9), yatay

**Prompt:**
```
A wide-angle interior photograph of an elegant, modern Turkish law firm
reception/lobby area. Dark walnut wood paneling, warm brass accent
lighting, a large marble reception desk, minimal furniture (a couple of
leather armchairs), soft ambient lighting, no visible people, no visible
text or logos on walls. Professional, upscale, calm atmosphere in black,
charcoal grey and warm gold tones. Photorealistic, shot on a full-frame
camera, shallow depth of field, architectural photography style.
```

## 2. Avukat Portreleri (3 adet)

Üçünü de **aynı prompt şablonuyla, aynı oturumda/arka planda** üretmek
tutarlı bir görsel set için önemli — ışık, arka plan ve stil birebir aynı
kalmalı, sadece kişi tarifi değişmeli.

**Boyut önerisi:** 1000x1250 (4:5), dikey, omuz-üstü portre

### Salih Şeref Kosova
**Dosya yolu:** `public/images/team/salih-seref-kosova.jpg`
```
A professional corporate headshot of a Turkish male lawyer in his 40s,
wearing a dark charcoal grey tailored suit with a white shirt, no tie or a
subtle dark tie, confident and approachable expression, arms crossed or
hands relaxed. Neutral soft-grey studio background with subtle gradient.
Soft, even studio lighting from the front-left. Photorealistic, shot on a
85mm portrait lens, shallow depth of field. Same lighting/background style
as a matching set of professional law firm headshots.
```

### Zeynep Aksu Kosova
**Dosya yolu:** `public/images/team/zeynep-aksu-kosova.jpg`
```
A professional corporate headshot of a Turkish female lawyer in her late
30s, wearing a dark charcoal grey tailored blazer with a white blouse,
confident and approachable expression. Neutral soft-grey studio background
with subtle gradient. Soft, even studio lighting from the front-left.
Photorealistic, shot on a 85mm portrait lens, shallow depth of field. Same
lighting/background style as a matching set of professional law firm
headshots.
```

### Mehmet Can Gönül
**Dosya yolu:** `public/images/team/mehmet-can-gonul.jpg`
```
A professional corporate headshot of a Turkish male lawyer in his early
30s, wearing a dark charcoal grey tailored suit with a white shirt,
confident and approachable expression. Neutral soft-grey studio background
with subtle gradient. Soft, even studio lighting from the front-left.
Photorealistic, shot on a 85mm portrait lens, shallow depth of field. Same
lighting/background style as a matching set of professional law firm
headshots.
```

## Görseller Geldikten Sonra

Dosyaları yukarıdaki path'lere koyduğunuzda bana haber verin (ya da
kendiniz `public/images/...` altına ekleyin) — `components/ui/ImagePlaceholder`
kullanımlarını ilgili yerlerde `next/image`'a çevirip devreye alırım.
