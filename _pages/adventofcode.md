---
layout: adventofcode
title: Advent of Code
permalink: /aoc/
---

This page (will) contain my solutions for current and past [Advent of Code](https://adventofcode.com/) problems! They're mainly in Kotlin, but I might throw some other languages in there every now and then too.

# Solutions
<ul>
{% assign years = site.aoc | group_by: 'year' %}
    <li> 
    {% for year in years %}
        {{ year.name }}
        {% for day in (1..25) %}
            {% assign day_str = day | prepend: '0' | slice: -2, 2 %}
            {% assign day_file = site.aoc | where: "year", year.name | where: "day", day | first %}
            {% if day_file %}
            • <a href="/aoc/{{ year.name }}/day{{ day_str }}">{{ day_str }}</a>
            {% else %}
                {% break %}
            {% endif %}
        {% endfor %}
    {% endfor %}
    </li>
</ul>

