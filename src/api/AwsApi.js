import {
    CognitoUserPool,
    CognitoUserAttribute
} from 'amazon-cognito-identity-js'
import { Config, CognitoIdentityCredentials } from 'aws-sdk'

const signUp = (user) => {
    // Amazon Cognito 認証情報プロバイダーを初期化します
    Config.region = 'ap-northeast-1'; // リージョン
    Config.credentials = new CognitoIdentityCredentials({
        IdentityPoolId: 'ap-northeast-1:ebd1a1af-ee0c-4e58-9f14-c8b0d792b2b5',
    });
    const poolData = {
        UserPoolId: 'ap-northeast-1_HlBIyXvJ5', //ユーザープールのID
        ClientId: '3oa7sohr6gsq3ncko4evho7n7a' //クライアントアプリの設定上のID
    };

    //ユーザープール＋クライアントアプリの情報を格納
    const userPool = new CognitoUserPool(poolData);
    const attributeList = [
        new CognitoUserAttribute({
            Name: "family_name",
            Value: user.familyName
        }),
        new CognitoUserAttribute({
            Name: "given_name",
            Value: user.givenName
        })
    ];

    return new Promise((resolve, reject) => {
        userPool.signUp(user.email, user.password, attributeList, null, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const saveAccessLog = async (log) => {
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(log)
    }

    // カテゴリの取得
    try {
        const response = await fetch("20.27.12.185/car", options)
        return response.text()
    } catch (error) {
        return error
    }
}

export { signUp, saveAccessLog }
