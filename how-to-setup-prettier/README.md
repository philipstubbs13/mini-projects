# How to Setup Prettier

- <https://www.youtube.com/watch?v=DqfQ4DPnRqI>

- Create package.json file

```bash
npm init -y
```

- Install prettier

```bash
npm i --save-dev --save-exact prettier
```

- Run prettier using npx

```bash
npx prettier --write script.js
```

- Check to see if this is conforming to prettier standards

```bash
npx prettier --check script.js
```

- vscode extension

  - Prettier - Code formatter

- Ignore files
  - Create `.prettierignore` file

* Configuration options

  - create `.prettierrc` file

  ```bash
    {
        "semi": true,
        "overrides": [
            {
                "files": ".ts",
                "options": {
                    "semi": false
                }
            }
        ]
    }
  ```

* Using with eslint
* `eslint-config-prettier` turns off eslint configurations that prettier already handles.

```bash
npm i --save-dev eslint-config-prettier
```

```bash
// .eslintrc
{
    "extends": ["prettier"],
    "rules: {
        "indent": "error"
    }
}
```

```bash
npx eslint-config-prettier script.js
```
