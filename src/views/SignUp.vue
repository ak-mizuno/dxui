<script>
import { signUp } from "../api/AwsApi"
export default {
    data() {
        return {
            email: "",
            password: "",
            familyName: "",
            givenName: "",
            result: ""
        }
    },
    methods: {
        async register() {
            try {
                const result = await signUp({
                    email: this.email,
                    password: this.password,
                    familyName: this.familyName,
                    givenName: this.givenName
                })
                this.result = result
            } catch (error) {
                this.result = error
            }

            const modal = new bootstrap.Modal(document.getElementById('result'), {
                keyboard: false
            })

            modal.show()
        },
        dismissModal() {
            const modal = bootstrap.Modal.getInstance(document.getElementById('result'))
            modal.dispose()
            this.$router.back()
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <form class="text-start" @submit.prevent="register">
                    <fieldset>
                        <legend>サインアップ</legend>
                        <div class="mb-3">
                            <label for="email" class="form-label">メールアドレス</label>
                            <input
                                type="email"
                                id="email"
                                v-model="email"
                                class="form-control"
                                placeholder="メールアドレス"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">パスワード</label>
                            <input
                                type="password"
                                id="password"
                                v-model="password"
                                class="form-control"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="familyName" class="form-label">姓</label>
                            <input
                                type="text"
                                id="familyName"
                                v-model="familyName"
                                class="form-control"
                                placeholder="苗字"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="givenName" class="form-label">名</label>
                            <input
                                type="text"
                                id="givenName"
                                v-model="givenName"
                                class="form-control"
                                placeholder="名前"
                                required
                            />
                        </div>
                        <input type="submit" class="btn btn-primary" value="登録" />
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
    <div
        class="modal fade"
        id="result"
        tabindex="-1"
        aria-labelledby="resultModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Result</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">{{ result }}</div>
                <div class="modal-footer">
                    <button class="btn btn-primary"  @click.prevent="dismissModal">戻る</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">再入力</button>
                </div>
            </div>
        </div>
    </div>
</template>