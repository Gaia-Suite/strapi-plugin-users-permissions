'use strict';

/**
 * Third-party (OAuth) login is not supported: only the `local` provider authenticates. The redirect
 * URI builder stays for the admin Providers settings page.
 */

const { getAbsoluteServerUrl } = require('strapi-utils');

const buildRedirectUri = (provider = '') =>
  `${getAbsoluteServerUrl(strapi.config)}/connect/${provider}/callback`;

module.exports = {
  buildRedirectUri,
};
