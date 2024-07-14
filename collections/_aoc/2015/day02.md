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
        return sides(input).sumOf { nums ->
            2 * nums[0] * nums[1] + 2 * nums[1] * nums[2] + 2 * nums[0] * nums[2] + nums[0] * nums[1]
        }
    }

    override fun part2(input: String): Int {
        return sides(input).sumOf { nums ->
            nums[0] * 2 + nums[1] * 2 + nums[0] * nums[1] * nums[2]
        }
    }

    private fun sides(input: String) = sequence {
        input.split('\n').forEach { line ->
            val sides = line.split('x')
            yield(sides.map { it.trim().toInt() }.sorted())
        }
    }
}
```