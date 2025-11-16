# 🔗 AMAZON AFFILIATE LINKS - Copy & Paste Guide

## 📋 **Product ASINs (Confirmed from Amazon)**

I've found the exact Amazon ASINs for all 3 UGREEN products:

1. **UGREEN USB-C Hub 5-in-1 (Revodok 105)**
   - ASIN: `B0BR3M8XHK`
   - Amazon URL: https://www.amazon.com/dp/B0BR3M8XHK

2. **UGREEN 4K Micro HDMI to HDMI Cable 6.6FT**
   - ASIN: `B08P8X2DBZ`
   - Amazon URL: https://www.amazon.com/dp/B08P8X2DBZ

3. **UGREEN 130W USB-C Car Charger**
   - ASIN: `B0B3D9XW8X`
   - Amazon URL: https://www.amazon.com/dp/B0B3D9XW8X

4. **UGREEN Amazon Store (Brand Page)**
   - Store URL: https://www.amazon.com/stores/UGREEN/page/DD6CFBED-164E-4990-91AE-1AA2F3DB8952
   - Use this for the "Shop UGREEN on Amazon" button

---

## 🎯 **YOUR AFFILIATE TAG**

First, you need your Amazon Associates affiliate tag. It looks like: `yourname-20`

**Where to find it:**
1. Log into https://affiliate-program.amazon.com
2. Go to "Product Linking" → "Link Builder"
3. Your tag is shown at the top (format: `something-20`)

**Example tags:**
- `techgear-20`
- `johndoe-20`
- `gadgetreview-20`

---

## 🔧 **HOW TO BUILD YOUR AFFILIATE LINKS**

### **Formula:**
```
https://www.amazon.com/dp/[ASIN]?tag=[YOUR-TAG]
```

### **Your 3 Links (replace YOUR-TAG with your actual tag):**

**USB-C Hub:**
```
https://www.amazon.com/dp/B0BR3M8XHK?tag=YOUR-TAG
```

**HDMI Cable:**
```
https://www.amazon.com/dp/B08P8X2DBZ?tag=YOUR-TAG
```

**Car Charger:**
```
https://www.amazon.com/dp/B0B3D9XW8X?tag=YOUR-TAG
```

### **Example (if your tag was `techgear-20`):**
```
https://www.amazon.com/dp/B0BR3M8XHK?tag=techgear-20
https://www.amazon.com/dp/B08P8X2DBZ?tag=techgear-20
https://www.amazon.com/dp/B0B3D9XW8X?tag=techgear-20
```

---

## 📝 **FIND & REPLACE IN YOUR FILES**

### **File 1: ugreen-brand-showcase.html**

**Open the file in a text editor (Notepad, VS Code, etc.) and find/replace:**

**FIND THIS (appears multiple times):**
```html
<a href="#" class="cta-button">
```

**Method A - Replace All at Once (for USB Hub links):**
```html
<a href="https://www.amazon.com/dp/B0BR3M8XHK?tag=YOUR-TAG" class="cta-button">
```

**OR Method B - Replace Each Product Individually:**

You'll need to find each product section and update manually:

1. **USB Hub section** - replace with Hub link
2. **HDMI Cable section** - replace with HDMI link
3. **Car Charger section** - replace with Charger link

---

### **File 2: ugreen-vs-anker-comparison.html**

**Same process - find/replace:**

**FIND:**
```html
<a href="#" class="cta-button">
```

**REPLACE:**
```html
<a href="https://www.amazon.com/dp/B0BR3M8XHK?tag=YOUR-TAG" class="cta-button">
```

*(Most CTAs on comparison page link to the Hub, which is the main product)*

---

## ✅ **QUICK CHECKLIST**

Before deploying, verify:

- [ ] Got your Amazon Associates affiliate tag
- [ ] Built all 3 product links with your tag
- [ ] Updated **ugreen-brand-showcase.html**:
  - [ ] USB Hub CTA button
  - [ ] HDMI Cable CTA button
  - [ ] Car Charger CTA button
- [ ] Updated **ugreen-vs-anker-comparison.html**:
  - [ ] Main CTA to showcase page
  - [ ] Any product links
- [ ] Tested links in browser (should open Amazon with your tag in URL)

---

## 🧪 **HOW TO TEST YOUR LINKS**

1. Save your HTML files with updated links
2. Open in browser
3. Click a "Buy on Amazon" button
4. Check the URL in your browser - should show: `?tag=YOUR-TAG`
5. If you see `?tag=YOUR-TAG` → ✅ Correct!
6. If you see `?tag=` or no tag → ❌ Fix it!

---

## 🔍 **NAVIGATION FIX**

I added a link from the main page to the comparison page!

**In ugreen-brand-showcase.html header, you'll now see:**
```html
<a href="ugreen-vs-anker.html">
  Curious how UGREEN compares to Anker? Read my honest 2-year comparison →
</a>
```

**If you rename files:**
- If you rename `ugreen-brand-showcase.html` to `index.html`
- Then update the comparison page link from:
  - `href="ugreen-brand-showcase.html"` 
  - TO: `href="index.html"` or `href="/"`

---

## 🎯 **FINAL EXAMPLE (Real Working Links)**

If your affiliate tag is **`techgear-20`**, here's what your final links should look like:

```html
<!-- USB Hub -->
<a href="https://www.amazon.com/dp/B0BR3M8XHK?tag=techgear-20" class="cta-button">
    <span>Buy on Amazon</span>
    <span>→</span>
</a>

<!-- HDMI Cable -->
<a href="https://www.amazon.com/dp/B08P8X2DBZ?tag=techgear-20" class="cta-button">
    <span>Buy on Amazon</span>
    <span>→</span>
</a>

<!-- Car Charger -->
<a href="https://www.amazon.com/dp/B0B3D9XW8X?tag=techgear-20" class="cta-button">
    <span>Buy on Amazon</span>
    <span>→</span>
</a>
```

---

## ⚠️ **COMMON MISTAKES TO AVOID**

❌ **Forgetting to replace YOUR-TAG**
```
https://www.amazon.com/dp/B0BR3M8XHK?tag=YOUR-TAG  ← Won't earn commissions!
```

❌ **Missing the ? before tag**
```
https://www.amazon.com/dp/B0BR3M8XHKtag=techgear-20  ← Broken link!
```

❌ **Using wrong ASIN**
```
https://www.amazon.com/dp/WRONG123?tag=techgear-20  ← Wrong product!
```

✅ **CORRECT FORMAT:**
```
https://www.amazon.com/dp/B0BR3M8XHK?tag=techgear-20
```

---

## 🚀 **YOU'RE READY!**

Once you:
1. ✅ Replace `YOUR-TAG` with your actual Amazon affiliate tag
2. ✅ Update all links in both HTML files
3. ✅ Test that links work

You can deploy and start earning commissions!

---

**Need your affiliate tag?** → https://affiliate-program.amazon.com  
**Test your links!** → Click them and check the URL bar  
**Deploy!** → Upload to hosting (Netlify, GitHub Pages, etc.)

Good luck! 💰
