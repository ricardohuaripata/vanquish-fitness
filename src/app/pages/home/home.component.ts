import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  selectedCategory: string = 'newArrivals';
  newArrivals: any[] = [
    {
      name: 'Vanquish TSP Black Blur Oversized T Shirt',
      price: '€43,95',
      image:
        'https://www.vqfit.com/cdn/shop/files/VQ-EcommJuly2421206.jpg?v=1725961965&width=400',
      isWishlisted: false,
    },
    {
      name: 'Vanquish TSP Navy Blur Oversized T Shirt',
      price: '€43,95',
      image:
        'https://www.vqfit.com/cdn/shop/files/VQ-Auguste-commerce03781.jpg?v=1725962013&width=400',
      isWishlisted: false,
    },
    {
      name: 'Vanquish TSP White Blur Oversized T Shirt',
      price: '€43,95',
      image:
        'https://www.vqfit.com/cdn/shop/files/VQ-EcommJuly2422295.jpg?v=1725962056&width=400',
      isWishlisted: false,
    },
    {
      name: 'Vanquish TSP Black Pegasus Oversized T Shirt',
      price: '€43,95',
      image:
        'https://www.vqfit.com/cdn/shop/files/VQ-Auguste-commerce0102.jpg?v=1725961752&width=400',
      isWishlisted: false,
    },
  ];

  elevate: any[] = [
    {
      name: 'Vanquish Elevate Seamless Smoke Grey 2 in 1 Vest',
      price: '€41,95',
      image:
        'https://www.vqfit.com/cdn/shop/files/2.png?v=1726157945&width=400',
      isWishlisted: false,
    },
    {
      name: 'Vanquish Elevate Seamless Black 2 in 1 Vest',
      price: '€41,95',
      image:
        'https://www.vqfit.com/cdn/shop/files/VQ-Elevate-ecommJune2414868.jpg?v=1725375090&width=400',
      isWishlisted: false,
    },
    {
      name: 'Vanquish Elevate Seamless Coffee Brown 2 in 1 Vest',
      price: '€41,95',
      image:
        'https://www.vqfit.com/cdn/shop/files/VQ-Elevate-ecommJune2414761.jpg?v=1725374530&width=400',
      isWishlisted: false,
    },
    {
      name: 'Vanquish Elevate Seamless Dark Olive 2 in 1 Vest',
      price: '€41,95',
      image:
        'https://www.vqfit.com/cdn/shop/files/VQ-Elevate-ecommJune2414175.jpg?v=1725374464&width=400',
      isWishlisted: false,
    },
  ];

  collection1: any[] = [
    {
      name: "MEN'S NEW IN",
      image:
        'https://www.vqfit.com/cdn/shop/files/NEW_IN_SUB_BANNER.jpg?v=1726059546&width=800',
    },
    {
      name: "WOMEN'S NEW IN",
      image:
        'https://www.vqfit.com/cdn/shop/files/WOMENS_NEW_IN_SUB_BANNER.jpg?v=1725634826&width=800',
    },
    {
      name: 'BLACK LIFTING BEST SELLERS',
      image:
        'https://www.vqfit.com/cdn/shop/files/VQ-EcommJuly2422247edit_cc4d3d8b-b57f-4d02-a12f-9926efd6433d.jpg?v=1725299938&width=800',
    },
  ];

  youMayAlsoLike: any[] = [
    {
      name: 'Vanquish DBZ Goku Black Oversized T Shirt',
      price: '€49,95',
      image:
        'https://cdn.shopify.com/s/files/1/0585/3653/files/FIRSTSHOT_67_400x400.jpg?v=1700851524',
      availableVariants: [
        {
          size: 'SMALL',
          color: 'BLACK',
        },
        {
          size: 'MEDIUM',
          color: 'BLACK',
        },
        {
          size: 'LARGE',
          color: 'BLACK',
        },
        {
          size: 'EXTRA LARGE',
          color: 'BLACK',
        },
        {
          size: 'XXL',
          color: 'BLACK',
        },
        {
          size: 'XXXL',
          color: 'BLACK',
        },
      ],
    },
    {
      name: 'Vanquish Utility Black T Shirt',
      price: '€37,95',
      image:
        'https://cdn.shopify.com/s/files/1/0585/3653/files/FIRSTSHOT-2023-12-14T125655.411_400x400.jpg?v=1702558637',
      availableVariants: [
        {
          size: 'SMALL',
          color: 'BLACK',
        },
        {
          size: 'MEDIUM',
          color: 'BLACK',
        },
        {
          size: 'LARGE',
          color: 'BLACK',
        },
        {
          size: 'EXTRA LARGE',
          color: 'BLACK',
        },
        {
          size: 'XXL',
          color: 'BLACK',
        },
        {
          size: 'XXXL',
          color: 'BLACK',
        },
      ],
    },
    {
      name: 'Vanquish Essential Black Regular Fit Tank Top',
      price: '€25,95',
      image:
        'https://cdn.shopify.com/s/files/1/0585/3653/files/Blacktankcrop_400x400.jpg?v=1710105140',
      availableVariants: [
        {
          size: 'SMALL',
          color: 'BLACK',
        },
        {
          size: 'MEDIUM',
          color: 'BLACK',
        },
        {
          size: 'LARGE',
          color: 'BLACK',
        },
        {
          size: 'EXTRA LARGE',
          color: 'BLACK',
        },
        {
          size: 'XXL',
          color: 'BLACK',
        },
        {
          size: 'XXXL',
          color: 'BLACK',
        },
      ],
    },
    {
      name: 'Vanquish TSP Pursuit Vintage White Oversized T Shirt',
      price: '€43,95',
      image:
        'https://www.vqfit.com/cdn/shop/files/FIRSTSHOT_53054183-cf38-48ff-ba4c-a6365ae517b5.jpg?v=1719225096&width=400',
      availableVariants: [
        {
          size: 'SMALL',
          color: 'BLACK',
        },
        {
          size: 'MEDIUM',
          color: 'BLACK',
        },
        {
          size: 'LARGE',
          color: 'BLACK',
        },
        {
          size: 'EXTRA LARGE',
          color: 'BLACK',
        },
        {
          size: 'XXL',
          color: 'BLACK',
        },
        {
          size: 'XXXL',
          color: 'BLACK',
        },
      ],
    },
    {
      name: 'Vanquish TSP Black Pegasus Oversized T Shirt',
      price: '€43,95',
      image:
        'https://www.vqfit.com/cdn/shop/files/VQ-Auguste-commerce0102.jpg?v=1725961752&width=400',
      availableVariants: [
        {
          size: 'SMALL',
          color: 'BLACK',
        },
        {
          size: 'MEDIUM',
          color: 'BLACK',
        },
        {
          size: 'LARGE',
          color: 'BLACK',
        },
        {
          size: 'EXTRA LARGE',
          color: 'BLACK',
        },
        {
          size: 'XXL',
          color: 'BLACK',
        },
        {
          size: 'XXXL',
          color: 'BLACK',
        },
      ],
    },
    {
      name: 'Vanquish DBZ Shenron Black Oversized T Shirt',
      price: '€52,95',
      image:
        'https://www.vqfit.com/cdn/shop/files/FIRSTSHOT_6_edit.jpg?v=1706783155&width=400',
      availableVariants: [
        {
          size: 'SMALL',
          color: 'BLACK',
        },
        {
          size: 'MEDIUM',
          color: 'BLACK',
        },
        {
          size: 'LARGE',
          color: 'BLACK',
        },
        {
          size: 'EXTRA LARGE',
          color: 'BLACK',
        },
        {
          size: 'XXL',
          color: 'BLACK',
        },
        {
          size: 'XXXL',
          color: 'BLACK',
        },
      ],
    },
    {
      name: 'Vanquish TSP Black Champion Oversized Sweatshirt',
      price: '€55,95',
      image:
        'https://www.vqfit.com/cdn/shop/files/Untitled-1_0006_FIRSTSHOT.jpg?v=1715354766&width=400',
      availableVariants: [
        {
          size: 'SMALL',
          color: 'BLACK',
        },
        {
          size: 'MEDIUM',
          color: 'BLACK',
        },
        {
          size: 'LARGE',
          color: 'BLACK',
        },
        {
          size: 'EXTRA LARGE',
          color: 'BLACK',
        },
        {
          size: 'XXL',
          color: 'BLACK',
        },
        {
          size: 'XXXL',
          color: 'BLACK',
        },
      ],
    },
    {
      name: 'Vanquish Better Than Yesterday Washed Blue Full Zip Hoodie',
      price: '€55,95',
      image:
        'https://cdn.shopify.com/s/files/1/0585/3653/files/FIRSTSHOT_788b2105-111f-4d9d-a50d-5e71ec0443de.jpg?v=1724925001&width=400',
      availableVariants: [
        {
          size: 'SMALL',
          color: 'BLACK',
        },
        {
          size: 'MEDIUM',
          color: 'BLACK',
        },
        {
          size: 'LARGE',
          color: 'BLACK',
        },
        {
          size: 'EXTRA LARGE',
          color: 'BLACK',
        },
        {
          size: 'XXL',
          color: 'BLACK',
        },
        {
          size: 'XXXL',
          color: 'BLACK',
        },
      ],
    },
  ];

  addToWishlist(item: any) {
    item.isWishlisted = !item.isWishlisted;
    console.log('Added to wishlist:', item);
  }

  setSelectedCategory(category: string) {
    this.selectedCategory = category;
  }
}
