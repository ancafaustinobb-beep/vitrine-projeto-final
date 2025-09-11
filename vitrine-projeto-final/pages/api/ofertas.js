export default function handler(req, res) {
  const produtos = [
    {
      nome: "Apple iPhone 13 (128 GB) - Luz das estrelas",
      link: "https://amzn.to/46n1EUG",
      imagem: "/images/iphone13.jpg",
    },
    {
      nome: "Notebook Lenovo LOQ-e 15IAX9E Intel Core i5-12450HX 16GB 512GB SSD",
      link: "https://amzn.to/46n1EUG",
      imagem: "/images/lenovo.jpg",
    },
    // Adicione os 18 produtos restantes aqui
  ];

  res.status(200).json(produtos);
}
