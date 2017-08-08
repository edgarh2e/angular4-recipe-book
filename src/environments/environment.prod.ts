export class GLOBAL {

  public static get API_SERVICE(): string {
    return 'http://0.0.0.0:8081/service';
  }

}

export const environment = {
  production: true,

  GET_RECIPES: GLOBAL.API_SERVICE + '/recipes/getRecipes',
  ADD_RECIPES: GLOBAL.API_SERVICE + '/recipes/addRecipe',

  GET_USERS: GLOBAL.API_SERVICE + '/users/getUsers'
};
