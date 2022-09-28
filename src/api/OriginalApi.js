const options = {
    method: "GET",
    mode: "cors",
    cache: "cache",
    headers: {
        "Content-Type": "application/json"
    },
    referrerPolicy: "no-referrer"
}

const getCategories = async () => {
    // カテゴリの取得
    try {
        const response = await fetch("https://20.27.12.185/category", options)
        return response.json()
    } catch (error) {
        console.error(error)
        return ["カテゴリーを取得できませんでした"]
    }
}

const getCars = async () => {
    // 車の取得
    try {
        const response = await fetch("https://20.27.12.185/car", options)
        return response.json()
    } catch (error) {
        console.error(error)
        return ["車を取得できませんでした"]
    }
}

export { getCars, getCategories }
