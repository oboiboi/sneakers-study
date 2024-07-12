const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 99,
      colors: [
        {
          code: "black",
          img: "./img/Air from html-css-js-ecommerce.png",
        },
        {
          code: "darkblue",
          img: "./img/Air2 (1).png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/Jordan from YouTube.png",
        },
        {
          code: "green",
          img: "./img/Jordan2 (1).png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/Blazer Safak.png",
        },
        {
          code: "green",
          img: "./img/Blazer2 (1).png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/Crater from Safak YouTube.png",
        },
        {
          code: "lightgray",
          img: "./img/Crater2 (1).png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/Hippie from Safak YouTube.png",
        },
        {
          code: "black",
          img: "./img/Hippie2 (1).png",
        },
      ],
    },
  ];

  let choosenProduct = products[0]

  const currentProductImg = document.querySelector(".productImg")
  const currentProductTitle = document.querySelector(".productTitle")
  const currentProductPrice = document.querySelector(".productPrice")
  const currentProductColors = document.querySelectorAll(".color")
  const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {

        //muda o slide atual
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //muda o produto escolhido
        choosenProduct = products[index]

        //muda os textos dos currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //atribuindo novas cores
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    })
})

currentProductColors.forEach((color, index) => 
{
  color.addEventListener("click", () => 
  {

    currentProductImg.src = choosenProduct.colors[index].img

  })
})

currentProductSizes.forEach((size, index) => 
{
  size.addEventListener("click", () => 
  {
    currentProductSizes.forEach(size => 
    {

      size.style.backgroundColor = "white"
      size.style.color = "black"

    })

    size.style.backgroundColor = "black"
    size.style.color = "white"
      
  })
})

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click", () => {
  payment.style.display = "flex"
})

close.addEventListener("click", () => {
  payment.style.display = "none"
})

const cardNumber = document.getElementById("cardNumber");

cardNumber.oninput = (e) => {
  let cursorPos = e.target.selectionStart
  let currentValue = e.target.value
  let cleanValue = currentValue.replace(/\D/g, "");
  let formatInput = patternMatch({
      input: cleanValue,
      template: "xxxx xxxx xxxx xxxx"
   });
  
  e.target.value = formatInput
  
  let isBackspace = (e?.data==null) ? true: false
  let nextCusPos = nextDigit(formatInput, cursorPos, isBackspace)
  
  cardNumber.setSelectionRange(nextCusPos+1, nextCusPos+1);
};

const cardMonth = document.getElementById("cardMonth");

cardMonth.oninput = (e) => {
  let cursorPos = e.target.selectionStart
  let currentValue = e.target.value
  let cleanValue = currentValue.replace(/\D/g, "");
  let formatInput = patternMatch({
      input: cleanValue,
      template: "xx"
   });
  
  e.target.value = formatInput
  
  let isBackspace = (e?.data==null) ? true: false
  let nextCusPos = nextDigit(formatInput, cursorPos, isBackspace)
  
  cardMonth.setSelectionRange(nextCusPos+1, nextCusPos+1);
};

const cardYear = document.getElementById("cardYear")

cardYear.oninput = (e) => {
  let cursorPos = e.target.selectionStart
  let currentValue = e.target.value
  let cleanValue = currentValue.replace(/\D/g, "")
  let formatInput = patternMatch({
    input: cleanValue,
    template: "xxxx"
  })

  e.target.value = formatInput
  let isBackspace = (e?.data==null) ? true: false
  let nextCusPos = nextDigit(formatInput, cursorPos, isBackspace)

  cardYear.setSelectionRange(nextCusPos+1, nextCusPos+1)
}

const cardCvv = document.getElementById("cardCvv")

cardCvv.oninput = (e) => {
  let cursorPos = e.target.selectionStart
  let currentValue = e.target.value
  let cleanValue = currentValue.replace(/\D/g, "")
  let formatInput = patternMatch({
    input: cleanValue,
    template: "xxx"
  })

  e.target.value = formatInput
  let isBackspace = (e?.data==null) ? true: false
  let nextCusPos = nextDigit(formatInput, cursorPos, isBackspace)

  cardCvv.setSelectionRange(nextCusPos+1, nextCusPos+1)
}

function patternMatch({ input, template }) {
  try {
    let j = 0;
    let plaintext = "";
    let countj = 0;
    while (j < template.length) {
      if (countj > input.length - 1) {
        template = template.substring(0, j);
        break;
      }

      if (template[j] == input[j]) {
        j++;
        countj++;
        continue;
      }

      if (template[j] == "x") {
        template =
          template.substring(0, j) + input[countj] + template.substring(j + 1);
        plaintext = plaintext + input[countj];
        countj++;
      }
      j++;
    }

    return template;
  } catch {
    return "";
  }
}




