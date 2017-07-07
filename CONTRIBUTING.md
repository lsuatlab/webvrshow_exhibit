*To Do Now*
- [ ] Add works

*To Do Soon*
- [ ] Add a separate credits screen with
- [ ] rewrite gemspec

*Editing*
- Start with: `bundle exec jekyll serve --watch --incremental`
- In a separate window: `bundle exec guard`

It's also useful to use watchy: 
1. `npm install -g watchy`
2. `watchy -w _config.yml -- bundle exec jekyll serve --watch`

*Deploying*
- Build _site files with: `bundle exec jekyll serve`
- Upload contents of _site via FTP