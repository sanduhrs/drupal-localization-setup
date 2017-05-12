INSTALL
-------

Before enabling the module

* Install the dependencies
  In the module folder run
      > composer install
* Create a new App at https://console.developers.google.com
  enable Translation API
  and store the Project ID in a variable
      > drush vset l10n_google_translate_project_id PROJECT_ID
* Get Google Application Default credentials
  See https://developers.google.com/identity/protocols/application-default-credentials
  Download the json file and store it somewhere outside your webroot
  Store the location to the file in a variable
      > drush vset l10n_google_translate_credentials_directory /path/to/the/credentials/outside/of/webroot
  or for testing purposes just store the file in the module folder as credentials.json
