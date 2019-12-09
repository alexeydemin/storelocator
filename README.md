# StoreLocator
Store Locator plugin for October CMS.

* Google Maps with markers on frontend
* Manage store list on backend
* Export/import store list
* Autocomplete GPS coordinates

__Premium features__:
* Customizable map style
* Different map markers for different location types


# Installation
1. Go to Settings > Plugins > StoreLocator and add your Google Maps API Key. 

2. If you wish to add stores in specific countries only you might want to edit 
`plugins/ademin/storelocator/models/store/fields.yaml`->address->countryRestriction
and add country codes for Address field auto-complete on backend (default `'us,gb'`).

3. If you want to test current position functionality make sure your application launched on HTTPS server or use one of the workarounds 
https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins

4. Add `[storeLocator]` to configuration section and `{% component 'storeLocator' %}` to Twig section of your page

Feel free to contact me with any questions deminn@gmail.com
