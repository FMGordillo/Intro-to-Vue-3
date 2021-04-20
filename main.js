const app = Vue.createApp({
  data: () => {
    return {
      product: "Socks",
      description: "There are comfy",
      image: "/assets/images/socks_green.jpg",
      url: "/socks",
      inventory: 100,
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
    };
  },
});
