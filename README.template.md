# Overview

<%= config.profile.description %>

[<img src="https://github-readme-stats.vercel.app/api?username=<%= config.socials.github.username %>&show_icons=true&theme=dark"/>](<%= config.socials.github.url %>?tab=repositories&type=source)

# Social

[<img src="public/images/icons/GitHub.svg" alt="GitHub" width="40" height="40"/>](<%= config.socials.github.url %>)
[<img src="public/images/icons/Twitter.svg" alt="Twitter" width="40" height="40"/>](<%= config.socials.twitter.url %>)
[<img src="public/images/icons/Zenn.svg" alt="Zenn" width="40" height="40"/>](<%= config.socials.zenn.url %>)

# Skill
<% config.skillGroups.forEach(function(skillGroup) { %>
## <%= skillGroup.name %>

<% skillGroup.skills.forEach(function(skill) { %>[<img src="public/images/icons/<%= skill.name %>.svg" alt="<%= skill.name %>" width="40" height="40"/>](<%= skill.url %>)
<% }); }); %>
# Works
<% config.works.forEach(function(work) { %>
## [<%= work.name %>](<%= work.url %>)

<%= work.description %>

[View on GitHub](<%= config.socials.github.url %>/<%= work.repository %>)
<% }); %>
# Contact

[<%= config.profile.email %>](mailto:<%= config.profile.email %>)
