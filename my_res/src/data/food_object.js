const menu = {
  "1": {
    id: Math.floor(Math.random() * 10000),
    name: "PHỞ HÀ NỘI",
    image: "",
    description:
      "Phở Hà Nội không chỉ là món ăn riêng biệt của mảnh đất Hà Thành, mà nó còn mang đậm nét văn hóa ẩm thực Việt Nam được nhiều du khách quốc tế trong và ngoài nước yêu thích.",
    price: "50000",
  },
  "2": {
    id: Math.floor(Math.random() * 10000),
    name: "SÚP LƯƠN NGHỆ AN",
    image: "",
    description:
      "Súp lươn Nghệ An là đặc sản nổi tiếng bởi giống lươn ở đây rất chắc thịt, ngọt và béo.",
    price: "40000",
  },
  "3": {
    id: Math.floor(Math.random() * 10000),
    name: "BÚN CHẢ CÁ QUY NHƠN",
    Image: "",
    description:
      "Bún chả cá Quy Nhơn là sự kết hợp của những lát chả cá thơm ngon, nước lèo nấu từ cá, vị chua nhẹ của cà chua chín và thơm hòa quyện vào nhau tạo cảm giác rất đặc biệt.",
    price: "45000",
  },
  "4": {
    id: Math.floor(Math.random() * 10000),
    name: "BÁNH ĐA CUA HẢI PHÒNG",
    Image: "",
    description:
      "Một bát bánh đa cua ngon, thường mang những màu sắc rất hấp dẫn của gạch cua đồng, màu nâu của bánh đa, màu xanh thậm của chả lá lốt, xanh tươi của hành lá hòa quyện với sắc đỏ của ớt và vàng rộm của hành phi.",
    price: "60000",
  },
  "5": {
    id: Math.floor(Math.random() * 10000),
    name: "BÚN BÒ HUẾ",
    image: "",
    description:
      "Bún bò Huế là một đặc sản của ẩm thực Huế, tùy là bún bò nhưng ngoài thịt bò còn có thịt heo. Hương vị đặc biệt của món ăn này chủ yếu là ở vị cay nồng, mùi sả đặc trưng  của nước lèo.",
    price: "55000",
  },
  "6": {
    id: Math.floor(Math.random() * 10000),
    name: "MÌ QUẢNG GÀ",
    image: "",
    description:
      "Mì Quảng gà là một trong những món ăn được xem là đặc sản miền Trung nhờ vào sự kết hoàn hảo của sợi mì dai mềm, thịt gà thơm ngon cùng với vị nước dùng đậm đà.",
    price: "38000",
  },
  "7": {
    id: Math.floor(Math.random() * 10000),
    name: "CAO LẦU HỘI AN",
    image: "",
    description:
      "Được xem là cái hồn của ẩm thực phố Hội xưa còn đọng lại, Cao Lầu Hội An xứng danh là cao lương mỹ vị không chỉ vì hương vị thơm ngon đặc biệt của nó.",
    price: "48000",
  },
  "8": {
    id: Math.floor(Math.random() * 10000),
    name: "BÁNH CANH GHẸ VŨNG TÀU",
    image: "",
    description:
      "Bánh canh ghẹ với nước dùng sền sệt, ngọt thanh kết hợp với sợi bánh canh dai dai đã góp phần tạo nên hương vị hấp dẫn làm siêu lòng không biết bao nhiêu tâm hồn ăn uống.",
    price: "65000",
  },
  "9": {
    id: Math.floor(Math.random() * 10000),
    name: "VỊT NẤU CHAO CẦN THƠ",
    image: "",
    description:
      "Vịt nấu chao cần thơ với những miếng thịt vịt mềm, thơm, phần mỡ vịt chảy ra khiến nước sốt thật béo, thật đậm vị.",
    price: "55000",
  },
  "10": {
    id: Math.floor(Math.random() * 10000),
    name: "HỦ TIẾU SA ĐÉC",
    image: "",
    description:
      "Tô hủ tiếu Sa Đéc với nước súp trong, sợi bánh trắng, điểm vài miếng thịt, tim, gan, lòng heo, có khi tôm, thịt nạt bằm, kèm theo hẹ, xà lách, hành, chanh ớt,… bốc mùi thơm phức, ngay phút đầu gợi cho thực khách một bữa ăn ngon miệng.",
    price: "40000",
  },
  "11": {
    id: Math.floor(Math.random() * 10000),
    name: "BÚN CÁ NHA TRANG",
    image: "",
    description:
      "Bún cá Nha Trang khác với bún cá khác bởi sự hào quyện màu sắc và hương thơm của các loại gia vị. Cũng là bún, rau nhưng bún cá Nha Trang không dùng cá miếng như bún cá miền bắc mà dùng chả cá giòn dai cùng thịt cá tươi ngon",
    price: "48000",
  },
  "12": {
    id: Math.floor(Math.random() * 10000),
    name: "GỎI CÁ TRÍCH KIÊN GIANG",
    image: "",
    description:
      "Món gỏi cá trích Kiên Giang tươi ngon, đầy ắp hương vị biển ăn cuộn bánh tráng ăn kèm với rau thơm, dừa nạo thật tuyệt không gì bằng.",
    price: "67000",
  },

  "13": {
    id: Math.floor(Math.random() * 10000),
    name: "BÁNH CĂN PHAN RANG",
    image: "",
    description:
      "Ăn bánh căn Phan Rang để cảm nhận được cái giòn tan của vỏ bánh, mềm mịn của lớp bột bên trong, cái béo ngọt của tôm, mực, thịt, trứng cùng mùi thơm, cay nhẹ của nước chấm hòa lẫn vị chua của xoài xanh băm nhỏ, một ít hành lá trộn chung tóp mỡ, rồi vừa nhâm nhi vừa húp nước.",
    price: "50000",
  },
};

export default menu;
