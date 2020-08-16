/* eslint-disable no-useless-escape */

const Cookies = {
  /**
  * Get the cookie value  using the key
  *
  * @param {String} key name of the cookie
  * @returns {String} returns the value of the cookie
  **/
  getItem: key => {
    if (!key || !Cookies.hasItem(key)) {
      return null;
    }

    const encodeKeyValue = new RegExp('(?:^|.*;\\s*)' + encodeURI(key).replace(/[\-\.\+\*]/g, '$&') + 's*=s*((?:[^;](?!;))*[^;]?).*');

    return decodeURI(document.cookie.replace(encodeKeyValue, '$1'));
  },

  /**
  * Set the key and the value in the cookies with the different parameters
  *
  * @param {String} key name of the cookie
  * @param {String} value the value of the cookie
  * @param {String} endDate OPTIONAL (Number, String, Date Object): the max-age in seconds (e.g., 31536e3 for a year) or the
  *  expires date in GMTString format or in Date Object format; if not specified it will expire at the end of session
  * @param {String} path OPTIONAL e.g., '/', '/mydir'; if not specified, defaults to the current path of the current document location
  * @param {String} domain OPTIONAL e.g., 'example.com', '.example.com' (includes all subdomains) or 'subdomain.example.com'; if not
  * specified, defaults to the host portion of the current document location
  * @param {Boolean} isSecured OPTIONAL: cookie will be transmitted only over secure protocol as https
  **/
  setItem: (key, value, endDate, path, domain, isSecured) => {
    if (!key || /^(?:expires|max\-age|path|domain|secure)$/.test(key)) {
      return;
    }

    let expireDate = '';
    if (endDate) {
      switch (typeof endDate) {
        case 'number':
          expireDate = '; max-age=' + endDate;
          break;
        case 'string':
          expireDate = '; expires=' + endDate;
          break;
        case 'object':
          if (prototype.hasOwnProperty.call(endDateObject, 'toGMTString')) { // eslint-disable-line no-undef
            expireDate = '; expires=' + endDate.toGMTString();
          }

          break;
        default:
          break;
      }
    }

    document.cookie = escape(key) + '=' + escape(value) + expireDate + (domain ? '; domain=' + domain : '') + (path ? '; path=' + path : '') + (isSecured ? '; secure' : '');
  },

  /**
  * Remove the cookie from the cookies
  *
  * @param {String} key name of the cookie
  **/
  removeItem: key => {
    if (!key || !Cookies.hasItem(key)) {
      return;
    }

    const expDate = new Date();
    expDate.setDate(expDate.getDate() - 1);
    document.cookie = escape(key) + '=; expires=' + expDate.toGMTString() + '; path=/';
  },

  /**
  * Check if the cookie exists
  *
  * @param {String} key name of the cookie
  * @returns {Boolean} returns true if the cookie exists, false otherwise
  **/
  hasItem: key => {
    return (new RegExp('(?:^|;\\s*)' + escape(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
  }
};

export default Cookies;