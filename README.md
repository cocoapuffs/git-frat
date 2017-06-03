
# git frat

`git frat(ernal)` is an easier alternative to git
archive syntax that can be in-place replaced with
`git clone`.

The difference is, it will not clone any history
and can be seen similar to `svn export`.

As most other packages have some stupid scriptable
API and not a real CLI API with zero dependencies,
this aims to deliver.

**Usage**

The usage of `git frat` is trying to reflect the
same syntax as with `git clone`.

Use case is, for example, a developer coming back to
work on monday:

```bash
git frat https://github.com/cookiengineer/git-frat.git ./frat;
```

**Supported Flags**

- `git frat --branch="branch"`


# Installation

**Installation via NPM**

Install the package `git-frat` via NPM:

```bash
sudo npm install -g git-frat;
```

Make sure to restart your Terminal afterwards to see the effect.

**Manual Installation**

Only requirement is `nodejs >= 6.0.0` with `const`, `let`, and `arrow function` support.

```bash
curl -sSL https://raw.githubusercontent.com/cookiengineer/git-frat/master/git-frat.js > git-frat.js;

sudo mv ./git-frat.js /usr/local/bin/git-frat;
sudo chmod +x /usr/local/bin/git-frat;
```

# License

Same license as `git`, so it's licensed as `GNU GPL v2` and `GNU LGPL v2.1`.

If you want a different license, just contact [@cookiengineer](https://github.com/cookiengineer)
and we'll figure things out together.

