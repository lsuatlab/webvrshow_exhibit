**To Do**
- [ ] make video autoplay
- [ ] upload vidoes to DAC YouTube
- [ ] Use Webrecorder.io to capture each piece
- [ ] Screen capture each piece
- [x] add google analytics
- [x] tidy up text for each piece. 
- [x] curator's statement
- [x] compatibility charts  
- [x] add work content from easychair
- [x] finish template

**Dependencies**
- Jekyll: `gem install jekyll bundler`

**Editing**
- Start with: `bundle exec jekyll serve --watch --incremental`
- In a separate window: `bundle exec guard`

It's also useful to use watchy: 
1. `npm install -g watchy`
2. `watchy -w _config.yml -- bundle exec jekyll serve --watch`

**Git-FTP Deploy**

Helpful to setup git-ftp to push:

1. `brew install git-ftp`
2. Add the following to .git/config

```
[git-ftp]
  url = ftp://siggraphdigitalarts.hosting.acm.org:21/immersiveexpressions
  user = sgdigitalarts
  password = PASSWORD
  syncroot = _site/
```

To update the site:

1. `bundle exec jekyll build`
2. `git add -A`
3. `git commit -am "updated"`
4. `git ftp push`

**Simple Deploy**

- Build _site files with: `bundle exec jekyll build`
- Upload contents of _site via FTP