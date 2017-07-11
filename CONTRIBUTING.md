*To Do*
- [x] add work content from easychair
- [x] finish template
- [ ] add a separate credits screen with
- [ ] rewrite gemspec
- [ ] get the videos published 
- [ ] tidy up text for each piece. 
- [ ] curator's statement
- [ ] compatibility charts  

*Editing*
- Start with: `bundle exec jekyll serve --watch --incremental`
- In a separate window: `bundle exec guard`

It's also useful to use watchy: 
1. `npm install -g watchy`
2. `watchy -w _config.yml -- bundle exec jekyll serve --watch`

*Deploying*
- Build _site files with: `bundle exec jekyll build`
- Upload contents of _site via FTP