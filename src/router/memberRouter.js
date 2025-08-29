import MemberCreate from "@/views/MemberCreate.vue";
import MemberDetailComponent from "@/views/MemberDetailComponent.vue";
import MemberListComponent from "@/views/MemberListComponent.vue";
import MemberLogin from "@/views/MemberLogin.vue";
import MyPage from "@/views/MyPage.vue";


export const membereRouter = [
    {
        path: "/member/create",
        name: "MemberCreate",
        component: MemberCreate
    },
    {
        path: "/member/login",
        name: "MemberLogin",
        component: MemberLogin
    },
    {
        path: "/member/list",
        name: "MemberlistComponent",
        component: MemberListComponent
    },
    {
        path: "/member/detail/:memberId",
        name: "MemberDetailComponent",
        component: MemberDetailComponent,
        props: {pageTitle: "회원상세정보", isMyPage: false}
    },
    {
        path: "/member/mypage",
        name: "MyPage",
        component: MyPage
    },
]