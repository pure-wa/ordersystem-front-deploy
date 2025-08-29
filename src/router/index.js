import { createRouter, createWebHistory } from "vue-router";
import { practiceRouter } from "./practiceRouter";
import { membereRouter } from "./memberRouter";
import { orderRouter } from "./orderRouter";
import { productRouter } from "./productRouter";


// routes에서 url경로와 화면을 매핑
const routes = [
    ...practiceRouter,
    ...membereRouter,
    ...orderRouter,
    ...productRouter,
]


const router = createRouter(
    {
        // vue router는 내부적으로 크게 두가지 종류가 있음
        // 1) createWebHistory: localhost:3000/member/create,  2) createWebHashHistory: /#/member/create

        history: createWebHistory(),
        routes
    }
)

// export된 router를 main.js에서 import해줘야 함
export default router