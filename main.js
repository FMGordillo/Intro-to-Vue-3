const app = Vue.createApp({
  data: () => {
    return {
      product: "Socks",
      description: "There are comfy",
      image: "/assets/images/socks_green.jpg",
      url: "/socks",
      inventory: 100,
      onSale: true,
    };
  },
});
