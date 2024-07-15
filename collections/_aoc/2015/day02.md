---
layout: aocday
title: "I Was Told There Would Be No Math"
year: 2015
day: 02
---

```kotlin
package adventOfCode.y2015.d02

import adventOfCode.lib.Solver

class Solution : Solver {
    override fun part1(input: String): Int {
        return boxes(input).sumOf { sides ->
            2 * sides[0] * sides[1] + 2 * sides[1] * sides[2] + 2 * sides[0] * sides[2] + sides[0] * sides[1]
        }
    }

    override fun part2(input: String): Int {
        return boxes(input).sumOf { sides ->
            sides[0] * 2 + sides[1] * 2 + sides[0] * sides[1] * sides[2]
        }
    }

    private fun boxes(input: String) = sequence {
        input.split('\n').forEach { line ->
            val sides = line.split('x')
            yield(sides.map { it.trim().toInt() }.sorted())
        }
    }
}
```