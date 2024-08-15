---
title: Leetcode - 49. Group Anagrams
date: 2024-08-15 18:30:00 +0100
categories: Programming Leetcode
---

[See the problem](https://leetcode.com/problems/group-anagrams/description/)

## Initial attempt
My first attempt at this problem was, frankly awful. Yes it worked, but the performance was very poor, landing in the bottom 5% in both space and time complexity. For completeness though, here is said attempt.

```cs
public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        Dictionary<string, List<string>> groups = [];

        foreach (string str in strs)
        {
            if (groups.Count == 0)
            {
                groups.Add(str, [str]);
                continue;
            }

            var key = FindKeyMatch(str, groups);
            if (key is not null)
            {
                groups[key].Add(str);
            }
            else
            {
                groups.Add(str, [str]);
            }

        }

        return [.. groups.Values];
    }

    private static string? FindKeyMatch(string value, Dictionary<string, List<string>> groups)
    {
        foreach (var (key, _) in groups)
        {
            if (IsAnagram(value, key)) return key;
        }

        return null;
    }

    private static bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;

        var sChars = s.ToArray();
        var tChars = t.ToArray();
        Array.Sort(sChars);
        Array.Sort(tChars);

        return sChars.SequenceEqual(tChars);
    }
}
```

I used the first string I came across that was not already in a dictionary as a new key, comparing strings against each key until I found (or didn't find) an anagram. Simple enough in theory, and as I said it worked, but with terrible terrible performance.

## Actually good attempt

What I failed to realise was, instead, I could simply use the sorted characters of each anagram as keys in the dictionary (or HashTable, whatever), which avoided needing to effectively search the whole dictionary for each string. 

```cs
public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        Dictionary<string, List<string>> groups = [];

        foreach (string str in strs)
        {
            var charArray = str.ToCharArray();
            Array.Sort(charArray);
            var key = new string(charArray);

            if (groups.ContainsKey(key))
            {
                groups[key].Add(str);
            }
            else
            {
                groups.Add(key, [str]);
            }
        }

        return [.. groups.Values];
    }
}
```

This was quite the improvement, taking my solution instead to the top 10% in runtime and top 4% in space.

Out of interest I also tried sorting the string using LINQ, which turned out to be noticeably slower, this fell in the bottom 50% for runtime and bottom 15% for memory!

```cs
public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        Dictionary<string, List<string>> groups = [];

        foreach (string str in strs)
        {
            var key = new string(str.OrderBy(c => c).ToArray());

            if (groups.ContainsKey(key))
            {
                groups[key].Add(str);
            }
            else
            {
                groups.Add(key, [str]);
            }
        }

        return [.. groups.Values];
    }
}
```