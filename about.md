---
layout: default
---
<div class="bio-card">
    <h2>{{ site.title }}</h2>
    
    <h2>Teck Stack</h2>
    <div class="tech-stack">
        <img alt="Static Badge" src="https://img.shields.io/badge/Spring%20Boot-%236DB33F?logo=springboot&logoColor=white">
        <img alt="Static Badge" src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white">
        <img alt="Static Badge" src="https://img.shields.io/badge/php-%23777BB4?logo=php&logoColor=white">
        <img alt="Static Badge" src="https://img.shields.io/badge/MariaDB-%23003545?logo=mariadb&logoColor=white">
        <img alt="Static Badge" src="https://img.shields.io/badge/MySQL-%234479A1?logo=mysql&logoColor=white">
        <img alt="Static Badge" src="https://img.shields.io/badge/Vue.js-%234FC08D?logo=vue.js&logoColor=white">
        <img alt="Static Badge" src="https://img.shields.io/badge/AngularJs-%23DD0031?logo=Angular&logoColor=white">
        <img alt="Static Badge" src="https://img.shields.io/badge/JavaScript-%23F7DF1E?logo=JavaScript&logoColor=white">
        <img alt="Static Badge" src="https://img.shields.io/badge/HTML5-%23E34F26?logo=html5&logoColor=white">
        <img alt="Static Badge" src="https://img.shields.io/badge/CSS-%23663399?logo=css&logoColor=white">
        <img alt="Static Badge" src="https://img.shields.io/badge/Jira-%230052CC?logo=jira&logoColor=white">
        <img alt="Static Badge" src="https://img.shields.io/badge/Git-%23F03C2E?logo=git&logoColor=white">
    </div>

    <h2>Links</h2>
    <ul class="links">
        <li>
            {% include icons/icon-mail.html %}
            <p>tnsdn94560@gmail.com</p>
        </li>
        <li>
            {% include icons/icon-notion.html %}
            <a href="https://jewel-sphynx-a90.notion.site/67883803969b820ab75881f61e728d12" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
        <li>
            {% include icons/icon-github.html %}
            <a href="https://github.com/swchoigit" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
            {% include icons/icon-linkedin.html %}
            <a href="https://www.linkedin.com/in/soonwoochoi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
    </ul>
</div>

<style>
.bio-card {
    h1, h2, h3 {
        margin-top: 24px;
        margin-bottom: 16px;
        padding-top: 1rem;
        font-weight: 600;
    }

    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;

        img {
            margin: 0;
        }
    }
}

.links {
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    li {
        display: flex;
        align-items: center;
    }

    a {
        color: rgb(9, 105, 218);
        text-decoration: underline;
    }

    svg {
        width: 24px;
        height: 24px;
        margin-right: 16px;
    }
}
</style>