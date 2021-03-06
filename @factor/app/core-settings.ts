/* eslint-disable import/no-unresolved */
export default (): object => {
  return {
    app: {
      components: {
        error404: (): Promise<any> => import("__FIND__/404.vue"),
        content: (): Promise<any> => import("__FIND__/content.vue"),
        site: (): Promise<any> => import("__FIND__/site.vue"),
      },
      // Must be a function to use __FIND__
      icon: (): string => require("__FIND__/static/icon.svg"),
      avatarDefault: "https://fiction-com.s3-us-west-1.amazonaws.com/user-blank-2.png",
      templatePath: "__FIND__/index.html",
      faviconPath: "__FIND__/static/favicon.png",
    },
    dashboard: {
      route: "/dashboard",
    },
    metaInfo: {
      titleTemplate: "%s",
      image: "",
    },
  }
}
