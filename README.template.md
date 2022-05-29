# Overview

<%= config.profile.description %>

[<img src="https://github-readme-stats.vercel.app/api?username=koki-develop&show_icons=true&theme=dark"/>](https://github.com/koki-develop?tab=repositories&type=source)
[<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=koki-develop&theme=dark&layout=compact" />](https://github.com/koki-develop?tab=repositories&type=source)

# Social

<% config.socials.forEach(function(social) { %>[<img src="public/images/icons/<%= social.name %>.svg" alt="<%= social.name %>" width="40" height="40"/>](<%= social.url %>)
<% }); %>

# Skill
<% config.skillGroups.forEach(function(skillGroup) { %>
## <%= skillGroup.name %>

<% skillGroup.skills.forEach(function(skill) { %>[<img src="public/images/icons/<%= skill.name %>.svg" alt="<%= skill.name %>" width="40" height="40"/>](<%= skill.url %>)
<% }); }); %>
# Works
<% config.works.forEach(function(work) { %>
## [<%= work.name %>](<%= work.url %>)

<%= work.description %>

[View on GitHub](<%= work.repositoryUrl %>)
<% }); %>
# Contact

[<%= config.profile.email %>](mailto:<%= config.profile.email %>)
