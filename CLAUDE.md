# ইলমঘর / IlmHouse — Project Guide

## উদ্দেশ্য
দুই-ভাষী (বাংলা/ইংরেজি) ইসলামিক কনটেন্ট সাইট: নামাজ শিক্ষা, কুরআনের সূরা,
গুরুত্বপূর্ণ দোয়া, হাদিস — আরবি টেক্সট + বাংলা উচ্চারণ + অনুবাদসহ।
ব্যবহারকারীর অধিকাংশ মোবাইল ইউজার — mobile-first responsive বাধ্যতামূলক।

## Tech Stack
React + Vite + Tailwind CSS v4 + DaisyUI v5 + React Router + react-icons.
DaisyUI কম্পোনেন্টকে অগ্রাধিকার দাও; কাস্টম CSS যতটা সম্ভব কম।

## থিম ও কালার (index.css-এ কাস্টম থিম হিসেবে)
দুটি কাস্টম DaisyUI থিম: `ilmghar-light` (default) ও `ilmghar-dark` (prefersdark)।

Primary প্যালেট:
- 950 #0D3B26 | 800 #1A6640 | 600 #2E8B57 | 400 #4CAF82 | 100 #C8EED8

Light থিম: base bg #C8EED8, text #0e1215, primary #2E8B57
Dark থিম:  base bg #0e1215, text #C8EED8, primary #4CAF82
নিয়ম: একেবারে সাদা (#FFFFFF) বা কালো (#000000) কখনো নয়। base-200/300
হবে base-100 এর সামান্য ভিন্নতা।

## মোড টগল (৩ অবস্থা)
light / dark / system — একটি কাস্টম useTheme হুক। localStorage-এ পছন্দ সেভ;
"system" হলে prefers-color-scheme পড়ে data-theme সেট হবে। Navbar-এ সুইচ।

## ফন্ট
- বাংলা default: Noto Sans Bengali | বাংলা heading: Hind Siliguri
- ইংরেজি: Cabin | আরবি: কুরআন-স্টাইল ফন্ট (Amiri Quran / KFGQPC-জাতীয়)
আরবি টেক্সট ব্লকে dir="rtl" দিতে হবে (পুরো পেজ নয়)।

## ভাষা ব্যবস্থা (দুই স্তর — গুলিয়ে ফেলো না)
1. UI ভাষা (মেনু/বোতাম): react-i18next দিয়ে Bn/En টগল।
2. কনটেন্ট ডেটা: স্ট্যাটিক JSON, বাংলা ও ইংরেজির জন্য আলাদা ফাইল।
   যেমন: /src/data/bn/duas.json ও /src/data/en/duas.json (একই id/structure)।

## Navbar গঠন
হোম | নামাজ শিক্ষা▾ | কুরআনের সূরা▾ | গুরুত্বপূর্ণ দোয়া▾ | হাদিস▾
(▾ = dropdown, ভিতরে সাব-পেজ থাকবে)

## নিয়ম
- একবারে এক ধাপ; প্রতিটির পরে npm run dev-এ যাচাই।
- বড় পরিবর্তনের আগে প্ল্যান দাও, তারপর কোড।