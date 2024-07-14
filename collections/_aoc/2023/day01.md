---
layout: aocday
title: "Trebuchet?!"
year: 2023
day: 01
---

```kotlin
package adventOfCode.y2023.d01

import adventOfCode.lib.Solver

class Solution : Solver {
    override fun part1(input: String): Int {
        return solve(input, Regex("\\d"))
    }

    override fun part2(input: String): Int {
        return solve(input, Regex("(?=(\\d|one|two|three|four|five|six|seven|eight|nine))"))
    }

    private fun solve(input: String, regex: Regex): Int {
        return input.lines().filter { it.isNotBlank() }.sumOf { line ->
            val matches = regex.findAll(line).toList()

            if (matches.isNotEmpty()) {
                // Takes into account whether the regex is wrapped in a group or not
                val first = matches.first().groupValues.getOrElse(1) { matches.first().groupValues[0] }
                val last = matches.last().groupValues.getOrElse(1) { matches.last().groupValues[0] }
                convertMatch(first) * 10 + convertMatch(last)
            } else {
                0
            }
        }
    }

    private fun convertMatch(match: String): Int {
        return when (match) {
            "one" -> 1
            "two" -> 2
            "three" -> 3
            "four" -> 4
            "five" -> 5
            "six" -> 6
            "seven" -> 7
            "eight" -> 8
            "nine" -> 9
            else -> match.toInt()
        }
    }
}
```
