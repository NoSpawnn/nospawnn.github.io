---
title: Kotlin in 30 minutes
date: 2024-07-16 
categories: Programming Languages Kotlin
---

This article will be an overview of the Kotlin programming language as quickly as possible, making heavy use of code snippets. I'll try my best to explain each snippet as we go!

Note that we're mainly focusing on syntax here, so that you can read and understand any Kotlin code you come across!

Let's get started.

## Variables

### Binding

Kotlin has three keywords for creating variables, `val`, `var`, and `const`.

`var` creates a mutable variable.

```kotlin
var x = 0 // Declare and assign x = 0
x += 1    // x = 1
```

`val` creates an immutable variable.

```kotlin
val x = 0 // Declare and assign x = 0
x += 1    // Doesn't work
```

`const` is used in conjunction with `val` for variables that can be assigned at compile time. It only supports primitive types and Strings.

```kotlin
const val s = "Hello!"
```

### Typing

Kotlin uses type inference when it comes to variables. You don't need to annotate types, but you can if you want using `:`. 

```kotlin
val x: String = "Hello!"
```

However, if you **do not** assign a variable a value when it is declared, you **must** annotate its type.

```kotlin
val x: Int // Okay. Declared with no value, assignable later.
val x      // Not okay
```

### Nullability

By default, variables cannot be null. A question mark `?` must be used with a type annotation to permit nullability.

```kotlin
val s: String? = null // Okay
val s: String = null  // Not okay
```

## Control flow

### Conditional expressions

#### if

C-style if statements are used, you're probably already familiar with these so I won't spend too long on them. 

```kotlin
if (condition) {
    println("Condition is true")
} else if (!condition) {
    println("Condition is false")
} else {
    println("What?")
}
```

#### when

This is Kotlin's rendition of switch cases. `->` is used to denote the action to be taken according to a condition.

```kotlin
val s = "Hello!"

when (s) {
    // If s equals "1"
    "1" -> println("One")
    // If s equals "Hello"
    "Hello" -> println("Greetings")
    // Default
    else -> println("Unknown")
}

// Greetings
```

They can also be used as expressions, for example to assign directly to a variable.

```kotlin
val s = "Hello!"

val result = when (s) {
    // If s equals "1", result becomes "One"
    "1" -> "One"
    // If s equals "Hello", result becomes "Greetings"
    "Hello" -> "Greetings"
    // Default, result becomes "Unkown"
    else -> "Unknown"
}

println(result)
// Greetings
```

`when` can also be used to compare against boolean expressions.

```kotlin
val temp = 13

val weather = when {
    // If temp < 0 is true, description becomes "Freezing!"
    temp < 0 -> "Freezing!"
    // If temp < 0 is true, description becomes "Pretty cold"
    temp < 10 -> "Pretty cold"
    // If temp < 20 is true, description becomes "Kind warm"
    temp < 20 -> "Kinda warm"
    // Otherwise, description becomes "Boiling!"
    else -> "Boiling!"
}

println(weather)
// Kinda warm
```

`when` blocks must be exhaustive, that is to say, if all possible cases aren't covered, your program will not run without an `else` condition.

```kotlin
val s = "Hello!"

when (s) {
    // If s equals "1"
    "1" -> println("One")
    // If s equals "Hello"
    "Hello" -> println("Greetings")
}

// 'when' expression must be exhaustive, add necessary 'else' branch
```

### Ranges

To iterate a set number of times, you need a range to loop over. Kotlin's syntax for this is using `..`. These are inclusive by default, but the end value can be omitted using `..<` instead.

```kotlin
val inclusive = 1..4  // 1, 2, 3, 4
val exclusive = 1..<4 // 1, 2, 3
```

Reverse ranges can be formed using `downTo`.

```kotlin
val reversed = 4 downTo 1 // 4, 3, 2, 1
```

The step of a range can also be modified.

```kotlin
val twoStep = 1..5 step 2 // 1, 3, 5
```

All of the above work with characters too.

```kotlin
val alphabet = 'a'..'z' // The alphabet, a-z!
```

### Collections

#### Lists

#### Sets

#### Maps

### Iteration

#### for

The `in` keyword is used to assign a variable over an iterable.

```kotlin
// With a range
for (num in 1..5) {
    print(num)
}
// 12345

// With a collection
val names = listOf("Adam", "Jack", "Joe")

for (name in names) {
    println("Hey, $name!")
}
// Hey, Adam!
// Hey, Jack!
// Hey, Joe!
```