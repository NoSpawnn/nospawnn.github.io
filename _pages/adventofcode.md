---
layout: adventofcode
title: Advent of Code
permalink: /aoc/
---

This page (will) contain my solutions for current and past [Advent of Code](https://adventofcode.com/) problems!

# Solutions
<ul>
{% assign years = site.aoc | group_by: 'year' %}
    {% for year in years %}
    <li> 
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
    </li>
    {% endfor %}
</ul>

