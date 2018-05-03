**To Do**
- [ ] permalinks
- [ ] make video autoplay
- [ ] upload videos to DAC YouTube/Vimeo
- [ ] Use Webrecorder.io to capture each piece
- [ ] Screen capture each piece
- [x] add google analytics
- [x] tidy up text for each piece. 
- [x] curator's statement
- [x] compatibility charts  
- [x] add work content from easychair
- [x] finish template

## Development Workflow

**Dependencies**
- Jekyll & Bundle: `gem install jekyll bundler`
- Follow with `bundle install` to install the rest of the dependencies from the gemfile.

**Editing**
- Use a text editor, like Atom or Sublime, to add, create or modify content in: 
- `_works\` folder for individual pieces
- `_includes\` folder for components of your html pages
- `_layouts\` folder for different layouts 
- `assets\` folder for adding images, css, js, etc

**Deploy**
- Build `_site\` files with: `bundle exec jekyll build`
- Upload contents of `_site\` via FTP

## Advanced Workflow Caveats
To aid in the development process consider the following additions to the above workflow.

**Dependencies**
- The `bundle install` command from above will install livereload-guard and guard.
- `npm install -g http-server`

**Editing**
- In a terminal window: `bundle exec jekyll build --watch --incremental`
- In a second terminal window: `bundle exec guard`
- In a third terminal window: `http-server --c-1` to start an HTTP server running on port 8080. the `--c-1` part removes caching.

It's also useful to use watchy to rebuild when config file is modified: 
1. `npm install -g watchy`
2. `watchy -w _config.yml -- bundle exec jekyll serve --watch`

**Deploy with Git-FTP**

It's helpful to setup git-ftp to push changes to server:

1. `brew install git-ftp`
2. Add the following to .git/config

```
[git-ftp]
  url = ftp://siggraphdigitalarts.hosting.acm.org:21/immersiveexpressions
  user = sgdigitalarts
  syncroot = _site/
```

Then to update the site:

1. `bundle exec jekyll build`
2. `git add -A`
3. `git commit -am "updated"`
4. `git push`
5. `git ftp push`

