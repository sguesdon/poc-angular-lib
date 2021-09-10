## Librairie

```
ng new poc-angular-lib --create-application=false
cd poc-angular-lib
ng generate library @sguesdon/mylib
# modifier le paramétrage de la lib #9b2920
ng build
cd ./dist/sguesdon/mylib
npm link
ng build -- --watch
```

## Projet

```
ng new poc-angular-lib-app
cd poc-angular-lib-app
npm link @sguesdon/mylib
# modifier le paramétrage de la lib #9b2920
npm run start
```
