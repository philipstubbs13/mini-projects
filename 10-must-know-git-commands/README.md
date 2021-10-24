# 10 Must Know Git Commands

* <https://www.youtube.com/c/WebDevSimplified/videos>

```bash
git add .
git commit -m "Message"
```

```bash
git commit -a -m "Message"
```

```bash
git add -A
gt commit -m "Message"
```

```bash
git config --global alias.ac '!git add -A && git commit -m'
```

```bash
git config --global alias.ac2 'commit -a -m'
```

```bash
git revert <commit_hash>
```

```bash
git revert HEAD
```

```bash
git reflog
```

```bash
git log --graph --decorate --oneline
```

```bash
git log -S "Text 2"
```

```bash
git stash
```

```bash
git stash pop
```

```bash
git branch --vv
```

```bash
git remote update --prune
```

```bash
git branch -vv | awk '/: gone]/{print $1}' | xargs git branch -d
```

```bash
git bisect start
git bisect bad
git bisect good <commit_hash>
git bisect bad
git bisect good
```

```bash
git reset --hard origin/main
```
