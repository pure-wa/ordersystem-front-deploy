<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        로그인
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                label="이메일"
                                type="email"
                                prepend-icon="mdi-email"
                                v-model="email"
                            />
                            <v-text-field
                                label="비밀번호"
                                type="password"
                                prepend-icon="mdi-lock"
                                v-model="password"
                            />
                            <v-row>
                                <v-col>
                                    <!-- block : 속한 row에서 너비를 꽉채우는 옵션이다 -->
                                    <v-btn @click="memberLogin()" color="primary" block="">
                                        로그인
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { getErrorMessage, getResultData } from '@/utils/commonDataHandler';
import axios from 'axios';

    export default {
        data() {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            async memberLogin() {
                const email = this.email;
                const password = this.password;
                const data = {email, password};
                let response;
                try {
                    response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/member-service/member/doLogin`, data);
                    const accessToken = getResultData(response).accessToken;
                    const refreshToken = getResultData(response).refreshToken;
                    localStorage.setItem("accessToken", accessToken);
                    localStorage.setItem("refreshToken", refreshToken);
                    console.log(response.data);
                    // this.$router.push("/");
                    window.location.href = "/";
                } catch(error) {
                    alert(getErrorMessage(error))
                }
            }
        }
    }
</script>