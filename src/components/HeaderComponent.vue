<template>
    <v-app-bar>
        <v-container>
            <v-row>
                <!-- d-flex justify-start : 왼쪽 기준 정렬 -->
                <v-col class="d-flex justify-start">
                    <div v-if="userRole==='ADMIN'">
                        <v-btn :to="'/member/list'">회원관리</v-btn>
                        <v-btn :to="'/product/manage'">상품관리</v-btn>
                        <v-btn href="/order/list">실시간 주문건수 {{ liveOrderCount }}</v-btn>
                        <!-- <v-btn :to="'/practice/store'">store test</v-btn> -->
                    </div>
                </v-col>
                <v-col class="text-center">
                    <v-btn to="'/'">DEV SHOP</v-btn>
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-btn v-if="isLogined" :to="'/member/login'">장바구니 {{ totalQuantity }} </v-btn>
                    <v-btn :to="'/product/list'">상품목록</v-btn>
                    <v-btn v-if="isLogined" :to="'/member/mypage'">마이페이지</v-btn>
                    <v-btn v-if="!isLogined" :to="'/member/create'">회원가입</v-btn>
                    <v-btn v-if="!isLogined" :to="'/member/login'">로그인</v-btn>
                    <v-btn v-if="isLogined" @click="doLogout()">로그아웃</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
import { EventSourcePolyfill } from 'event-source-polyfill';
import { jwtDecode } from 'jwt-decode';

    export default {
        data() {
            return {
                userRole: null,
                isLogined: false,
                liveOrderCount: 0,
            }
        },
        computed: {
            totalQuantity() {
                return this.$store.getters.getTotalQuantity;
            }
        },
        created() {
            const accessToken = localStorage.getItem("accessToken");
            if(accessToken) {
                const payload = jwtDecode(accessToken);
                this.userRole = payload.role;            
                this.isLogined = true;
            }
            // sse 연결 및 메시지 수신
            if(this.userRole === 'ADMIN') {
                // sse 연결 요청을 위한 event-source-polyfill라이브러리 사용
                // npm install event-source-polyfill
                let sse = new EventSourcePolyfill(`${process.env.VUE_APP_API_BASE_URL}/sse/connect`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                sse.addEventListener('connect', (event) => {
                    console.log(event);
                });
                sse.addEventListener('ordered', () => {
                    this.liveOrderCount++;
                    console.log(this.liveOrderCount);
                });
            }
        },
        methods: {
            doLogout() {
                window.localStorage.clear(); // key로 삭제하기
                // this.isLogined = false;
                // this.$router.push("/")
                window.location.reload();
                this.userRole = null;
            }
        }
    }
</script>