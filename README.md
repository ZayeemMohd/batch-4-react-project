# FOOD DELIVERY APP

This is a food delivery app codebase

## Header
### Navbar
    - LOGO
    - Search Bar
    - Nav Links

## Body
### Restaurant Container
    - Restaurant Cards
        * Res Img
        * Res Name
        * Location
        * Rating and Price

## Footer
    - Copyright
    - Social media links
    - phone no


# Normal variables
declaration => 
 const resArr = [{}, {}, {}]

updation =>
 resArr = [{}]

# State variables
declaration =>
  const [resArr, setResArr] = useState([{}, {}, {}])

updation =>
  setResArr([{}])



  {"id": "11091","name": "Pizza Hut","cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/9e0ee8df-1fe1-4cce-a5ad-d70cf8a3fd63_11091.JPG","locality": "Attapur","areaName": "Attapur","costForTwo": "₹350 for two","cuisines": ["Pizzas"],"avgRating": 4.4,"parentId": "721","avgRatingString": "4.4","totalRatingsString": "22K+","sla": {"deliveryTime": 32,"lastMileTravel": 1,"serviceability": "SERVICEABLE","slaString": "30-35 mins","lastMileTravelString": "1.0 km","iconType": "ICON_TYPE_EMPTY"},"availability": {"nextCloseTime": "2026-05-06 03:45:00","opened": true},"badges": {"imageBadges": [{"imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png","description": "Best in Pizza"}]},"isOpen": true,"aggregatedDiscountInfoV2": {},"type": "F","badgesV2": {"entityBadges": {"imageBased": {"badgeObject": [{"attributes": {"description": "Best in Pizza","imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png","theme": ""}}]},"textBased": {},"textExtendedBadges": {}}},"differentiatedUi": {"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT","differentiatedUiMediaDetails": {"lottie": {},"video": {}}},"reviewsSummary": {},"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT","restaurantOfferPresentationInfo": {},"externalRatings": {"aggregatedRating": {"rating": "4.1","ratingCount": "2.3K+"},"source": "GOOGLE","sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"},"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"24 items}


  # Custom hooks

  ## Step 1: Create a simple .js file using 'use' as prefix
  ## Step 2: Plan the contract of your hook
                - Plan the input
                - Plan the processing/logic
                - Plan the output/return