import React from 'react';

const RestaurantSchema = () => (
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Tartine Bakery",
        "potentialAction": {
          "@type": "ViewAction",
          "target": [
            "http://www.urbanspoon.com/r/6/92204",
            {
              "@type": "EntryPoint",
              "urlTemplate": "http://api.urbanspoon.com/r/6/92204",
              "contentType": "application/json+ld"
            },
            "android-app://com.urbanspoon/http/www.urbanspoon.com/r/6/92204",
            {
              "@type": "EntryPoint",
              "urlTemplate": "urbanspoon://r/6/92204",
              "actionApplication": {
                "@type": "SoftwareApplication",
                "@id": "284708449",
                "name": "Urbanspoon iPhone & iPad App",
                "operatingSystem": "iOS"
              }
            },
            {
              "@type": "EntryPoint",
              "urlTemplate": "urbanspoon://r/6/92204",
              "actionApplication": {
                "@type": "SoftwareApplication",
                "@id": "5b23b738-bb64-4829-9296-5bcb59bb0d2d",
                "name": "Windows Phone App",
                "operatingSystem": "Windows Phone 8"
              }
            }
          ]
        }
      }
    `}
  </script>
);

export default RestaurantSchema;
