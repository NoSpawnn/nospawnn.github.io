---
title: PicoCTF - "hideme"
date: 2024-07-14 21:16:00 +0100
categories: CTFs PicoCTF Forensics
---

[See the challenge by Geoffrey Njogu](https://play.picoctf.org/practice/challenge/350)

## Description
The SOC analyst saw one image been sent back and forth between two people. They decided to investigate and found out that there was more than what meets the eye here.

## Solution
We're given one file, `flag.png`. The problem *did* have a steganography tag, so it was fairly obvious where to start. `strings` spat out some possibly useful info? As you can see:

![strings result](/assets/img/picoctf-hideme1.png)

Ok, I'll check with `zsteg` then.

![zsteg result](/assets/img/picoctf-hideme2.png)

Ah, some data after the end of the image. A zip archive! Okay. I used `binwalk` to extract it.

![binwalk extract](/assets/img/picoctf-hideme3.png)

Progress! The extracted data contained a `secret` folder, which contained another `flag.png`. But this time, it was actually the flag!

![flag in the secret image](/assets/img/picoctf-hideme4.png)

This was easy enough to extract with OCR (thanks, windows snipping tool) and then hand correct.

That was a fun one!