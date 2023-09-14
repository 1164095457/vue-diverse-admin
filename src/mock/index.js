import Mock from 'mockjs'
import DynamicRouter from "@/assets/json/routerList.json";
import authButton from "@/assets/json/authButton.json";


Mock.mock("/api/router/list", () => {
  {
    return Mock.mock({
      code: 200,
      list: DynamicRouter.data
    });
  }
});

Mock.mock("/api/login", () => {
  {
    return Mock.mock({
      name: "admin",
      token: 'tokentest'
    });
  }
});

Mock.mock("/api/auth/button", () => {
  {
    return Mock.mock({
      code: 200,
      list: authButton.data
    });
  }
});