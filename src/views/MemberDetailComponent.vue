<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-h5">
                        {{ pageTitle }}
                    </v-card-title>
                    <v-card-text>
                        <v-table>
                            <tbody>
                                <tr><td>ID : </td><td>{{ member.id }}</td></tr>
                                <tr><td>이름 : </td><td>{{ member.name }}</td></tr>
                                <tr><td>이메일 : </td><td>{{ member.email }}</td></tr>
                            </tbody>
                        </v-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import { getErrorMessage, getResultData } from '@/utils/commonDataHandler';

    export default {
        // 화면간의 매개변수를 넘길 때, 사용하는 변수값을 props라 칭함
        props: ['isMyPage', 'pageTitle'],
        data() {
            return {
                member: {},
            }
        },
       async created() {
            try {
                if(this.isMyPage) {
                    const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/myInfo`);
                    this.member = getResultData(response);
                } else {
                    const memberId = this.$route.params.memberId;
                    const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/detail/${memberId}`);
                    this.member = getResultData(response);
                }

                
            } catch(error) {
                console.log(getErrorMessage(error));
                alert(getErrorMessage(error));
            }
        },
        methods: {

        }
    }
</script>