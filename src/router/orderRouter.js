import OrderListComponent from "@/components/OrderListComponent.vue";
import OrderCart from "@/views/OrderCart.vue";


export const orderRouter = [
    {
        path: "/order/list",
        name: "OrderListComponent",
        component: OrderListComponent,
        props: {pageTitle: "전체 주문목록", isMyPage: false}
    },
    {
        path: "/order/cart",
        name: "OrderCart",
        component: OrderCart,
    }
]