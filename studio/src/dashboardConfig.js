export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a017d10a1ff11e2cfcd926",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-2-studio-b86vmeda",
                  apiId: "112c37a1-763f-4a21-bf2a-acd39ecc2e51",
                },
                {
                  buildHookId: "60a017d1c0fe4a455d36a311",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-2-web-4w8rk7de",
                  apiId: "d1b96e6f-5f7b-493b-accf-d558c3842952",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tarungangwani/sanity-gatsby-blog-2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-2-web-4w8rk7de.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
