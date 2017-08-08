// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export class GLOBAL {

  public static get API_SERVICE(): string {
    return 'http://localhost:8081/service';
  }

}

export const environment = {
  production: false,

  GET_RECIPES: GLOBAL.API_SERVICE + '/recipes/getRecipes',
  ADD_RECIPES: GLOBAL.API_SERVICE + '/recipes/addRecipe',

  GET_USERS: GLOBAL.API_SERVICE + '/users/getUsers'

};
