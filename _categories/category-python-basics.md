---
title: "Python Basics"
permalink: /categories/python/basics
---

{% assign posts = site.categories.python | where_exp: "item", "item.categories contains 'basics'" %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}