class Helper {
    static async toAwait(promise) {
        return promise.then((res) => [res, null])
            .catch((err) => [null, err]);
    }
}

module.exports = Helper;