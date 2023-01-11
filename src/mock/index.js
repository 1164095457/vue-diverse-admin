import Mock from 'mockjs'
import DynamicRouter from "@/assets/json/routerList.json";



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