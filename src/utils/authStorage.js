import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage{
    constructor(namespace='auth'){
        this.namespace=namespace;
    }

    async getAccessToken(){
        const accessToken=await AsyncStorage.getItem(this.namespace);
        return accessToken;
    }

    async setAccessToken(accessToken){
        await AsyncStorage.setItem(this.namespace,accessToken);
    }

    async removeAccessToken(){
        await AsyncStorage.removeItem(this.namespace);
    }
}

export default AuthStorage;