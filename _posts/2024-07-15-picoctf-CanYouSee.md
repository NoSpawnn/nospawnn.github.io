---
title: PicoCTF - "CanYouSee"
date: 2024-07-14 16:19:00 +0100
categories: CTFs PicoCTF Forensics
---

[See the challenge by Mubarak Mikail](https://play.picoctf.org/practice/challenge/408)

## Description
How about some hide and seek?

## Solution
We're given a `.zip` archive containing a single image, my first thought was the flag was hidden using steganography, i.e. in the image, but after trying to extract something with `steghide`, I found this!

![Extracted data](/assets/img/picoctf-CanYouSee1.png)

So of course, the flag we want must be hidden *somewhere* in the files' metadata. Checking the file with the `identify` command from [ImageMagick](https://imagemagick.org/index.php) didn't give anything useful, but `exiftool` did! Notice anything weird?

![EXIF data from the image](/assets/img/picoctf-CanYouSee2.png)

That attribution "URL" doesn't look like a URL to me...

![Decoding the flag from Base64](/assets/img/picoctf-CanYouSee3.png)

Yup! There's the flag :)
