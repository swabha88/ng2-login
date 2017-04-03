export class User{
    username: string;
    password:string;
}

interface AuthConfiguration {
    apiEndPoint: string,
    tokenEndPoint: string,
}

export const ConfigKeys: AuthConfiguration = {
     apiEndPoint: 'http://ahnapi.azurewebsites.net/api',
     tokenEndPoint: 'http://ahnapi.azurewebsites.net/Token'
};