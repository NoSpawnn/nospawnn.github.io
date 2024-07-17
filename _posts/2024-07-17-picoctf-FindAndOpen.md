---
title: PicoCTF - "FindAndOpen"
description: Solving "FindAndOpen" by Mubarak Mikail
date: 2024-07-17 14:40:00 +0100
categories: CTFs PicoCTF Forensics
---

[See the challenge by Mubarak Mikail](https://play.picoctf.org/practice/challenge/348)

## Description
Someone might have hidden the password in the trace file. Find the key to unlock this file. This tracefile might be good to analyze.

## Solution
We get two files: `dump.pcap` and `flag.zip`. Trying to unzip the flag...

![The zip file is password protected](/assets/img/picoctf-FindAndOpen1.png)

it's password protected! Ok, I guess we need to find the password somewhere in the pcap file then. Opening it up in wireshark, there's several distinct groups of packets, some of which have unknown protocols. I figure those are the one's I should focus on. Of the first section, there are nine packets, all of which are identical.

![First group of packets](/assets/img/picoctf-FindAndOpen2.png)

Next, there's a group of MDNS packets. These don't appear to contain anything useful or out of the ordinary. Then, some more packets with an unkown protocol.

![Third group of packets](/assets/img/picoctf-FindAndOpen3.png)

Followed by a single packet with a different, but still unknown, protocol.

![Fourth group, a single packet](/assets/img/picoctf-FindAndOpen4.png)

Yet more unknown packets.

![Fifth group of packets](/assets/img/picoctf-FindAndOpen5.png)
![Sixth group of packets](/assets/img/picoctf-FindAndOpen6.png)

Finally, there's another group of MDNS packets, which again, look normal. Across the non-MDNS packets, these strings are found (with corrected spelling):

```
1. Ethernet secret: Is this the flag
2. Could the flag have been splitted?
3. VGhpcyBpcyB0aGUgc2VjcmV0OiBwaWNvQ1RGe1IzNERJTkdfTE9LZF8=
4. bababkjaASKBKSBACVVAVSDDSSSSDSKJBJS
5. Maybe try checking the other file
```

String #3 there looks suspiciously like it's Base64 encoded, no?

![Decoding the string from Base64](/assets/img/picoctf-FindAndOpen7.png)

Got it! That's clearly part of the flag, but not all of it. The leading text makes me think it's the password...

![Unzipping the flag](/assets/img/picoctf-FindAndOpen8.png)

Bingo!

![We got it!](/assets/img/picoctf-FindAndOpen9.png)

That felt like it involved a lot more steps than previous challenges, but it helped me get a bit more familiar with wireshark and I had a lot of fun with this challenge!
