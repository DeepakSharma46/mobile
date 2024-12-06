import './App.css';
import Hero from './heroSection';
import Mobile from './mobile';


function App() {
  const mobiles = [
    {
      title: "Infinix Note 40X 5G (Starlit Black, 256 GB)  (12 GB RAM)",
      specifications: [
        "12 GB RAM | 256 GB ROM | Expandable Up to 1 TB",
        "17.22 cm (6.78 inch) Full HD+ Display",
        "108MP + 2MP + AI Lens | 8MP Front Camera",
        "5000 mAh Lithium-ion Polymer Battery",
      ],
      price: "13,999",
      mainImageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/v/3/-original-imah3fbcx9y9pyqq.jpeg?q=70",
      assuranceImageUrl: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png",
    },
    {
      title: "Apple iPhone 15 (Pink, 128 GB)",
      specifications: [
        "128 GB ROM",
        "15.49 cm (6.1 inch) Super Retina XDR Display",
        "48MP + 12MP | 12MP Front Camera",
        "A16 Bionic Chip, 6 Core Processor Processor",
      ],
      price: "58,999",
      mainImageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70",
      assuranceImageUrl: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png",
    },
    {
      title: "Apple iPhone 15 (Black, 128 GB)",
      specifications: [
        "128 GB ROM",
        "15.49 cm (6.1 inch) Super Retina XDR Display",
        "48MP + 12MP | 12MP Front Camera",
        "A16 Bionic Chip, 6 Core Processor Processor",
      ],
      price: "58,999",
      mainImageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
      assuranceImageUrl: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png",
    },

    {
      title: "Infinix Zero 40 5G (Rock Black, 256 GB)  (12 GB RAM)",
      specifications: [
        "12 GB RAM | 256 GB ROM",
        "17.22 cm (6.78 inch) Full HD+ Display",
        "108MP + 50MP + 2MP | 50MP Front Camera",
        "5000 mAh Lithium-ion Polymer Battery",
      ],
      price: "27,999",
      mainImageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/4/h/zero-40-5g-x6861-infinix-original-imah4sgz85wrhj4s.jpeg?q=70",
      assuranceImageUrl: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png",
    },
    {
      title: "Infinix Zero Flip 5G (Rock Black, 512 GB)  (8 GB RAM)",
      specifications: [
        "8 GB RAM | 512 GB ROM",
        "17.53 cm (6.9 inch) Full HD+ Display",
        "50MP + 50MP | 50MP Front Camera",
        "A16 Bionic Chip, 6 Core Processor Processor",
      ],
      price: "49,999",
      mainImageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/h/z/zero-flip-5g-x6962-infinix-original-imah5ztehzcs3hnh.jpeg?q=70",
      assuranceImageUrl: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png",
    },
    {
      title: "Apple iPhone 15 (Black, 256 GB)",
      specifications: [
        "256 GB ROM",
        "15.49 cm (6.1 inch) Super Retina XDR Display",
        "48MP + 12MP | 12MP Front Camera",
        "A16 Bionic Chip, 6 Core Processor Processor",
      ],
      price: "63,999",
      mainImageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
      assuranceImageUrl: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png",
    },

    {
      title: "POCO M6 5G (Polaris Green, 64 GB)  (4 GB RAM)",
      specifications: [
        "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
        "17.12 cm (6.74 inch) HD+ Display",
        "50MP Rear Camera | 5MP Front Camera",
        "5000 mAh Battery",
      ],
      price: "7,999",
      mainImageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/x/x/-original-imah4gzvgzrkwhtg.jpeg?q=70",
      assuranceImageUrl: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png",
    },
    {
      title: "Apple iPhone 15 (Black, 128 GB)",
      specifications: [
        "128 GB ROM",
        "15.49 cm (6.1 inch) Super Retina XDR Display",
        "48MP + 12MP | 12MP Front Camera",
        "A16 Bionic Chip, 6 Core Processor Processor",
      ],
      price: "58,999",
      mainImageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
      assuranceImageUrl: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png",
    },

    {
      title: "Infinix Zero 40 5G (Rock Black, 256 GB)  (12 GB RAM)",
      specifications: [
        "12 GB RAM | 256 GB ROM",
        "17.22 cm (6.78 inch) Full HD+ Display",
        "108MP + 50MP + 2MP | 50MP Front Camera",
        "5000 mAh Lithium-ion Polymer Battery",
      ],
      price: "27,999",
      mainImageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/4/h/zero-40-5g-x6861-infinix-original-imah4sgz85wrhj4s.jpeg?q=70",
      assuranceImageUrl: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png",
    },
    {
      title: "Infinix Zero Flip 5G (Rock Black, 512 GB)  (8 GB RAM)",
      specifications: [
        "8 GB RAM | 512 GB ROM",
        "17.53 cm (6.9 inch) Full HD+ Display",
        "50MP + 50MP | 50MP Front Camera",
        "A16 Bionic Chip, 6 Core Processor Processor",
      ],
      price: "49,999",
      mainImageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/h/z/zero-flip-5g-x6962-infinix-original-imah5ztehzcs3hnh.jpeg?q=70",
      assuranceImageUrl: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png",
    },
    {
      title: "Motorola G85 5G (Olive Green, 128 GB)  (8 GB RAM)",
      specifications: [
        "8 GB RAM | 128 GB ROM",
        "116.94 cm (6.67 inch) Full HD+ Display",
        "50MP + 8MP | 32MP Front Camera",
        "5000 mAh Battery",
      ],
      price: "17,999",
      mainImageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70",
      assuranceImageUrl: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png",
    },
  ];
  return (
    <div className="App">
      <Hero/>
      {mobiles.map((mobile, index) => (
      <Mobile
        key={index}
        title={mobile.title}
        specifications={mobile.specifications}
        price={mobile.price}
        mainImageUrl={mobile.mainImageUrl}
        assuranceImageUrl={mobile.assuranceImageUrl}
      />
      ))};
    </div>
  );
}

export default App;
