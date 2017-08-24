# env-app-yaml
## Install

```bash
npm install env-app-yaml --save
```

## Usage

```javascript
require('env-app-yaml').config();
```

Create a `app.yml` file in the root dirctory of your project, 
and add environment-specific variables as valid YAML.

`
runtime: nodejs
env: flex
env_variables:
  BASE_URL: 'https://localhost:8000'
  API_URL: 'https://localhost:8000/api'
`

That's it.

`process.env` now has the keys and values you defined in your `app.yml` file.


### Preload

If you are using iojs-v1.6.0 or later, you can use the `--require` (`-r`) command line option to preload env-app-yaml. By doing this, you do not need to require and load env-app-yaml in your application code.


```bash
$ node -r env-app-yaml/config your_script.js
```

The configuration options below are supported as command line arguments in the format `envappyaml_config_<option>=value`

```bash
$ node -r env-app-yaml/config your_script.js envappyaml_config_=/custom/path/to/your/env/vars
$ node -r env-app-yaml/config server.js envappyaml_config_path=./app.dev.yaml
```

## Options

### Path

Default: `app.yml`

You can specify a custom path if your file containing environmnet variables is
named or located differently.

```javascript
require('env-app-yaml').config({ path: '/custom/path/to/your/yaml/env/vars' });
```

### Encoding

Default: `utf8`

You may specify the encoding of your file containing environment variables
using this option.

```javascript
require('env-app-yaml').config({ encoding: 'base64' });
```

## FAQ

### Should I commit my `.yaml` file?

No. We **strongly** recommend against committing your `.yaml` file to version
control. It should only include environment-specific values such as database
passwords or API keys. Your production database should have a different
password than your development database.
