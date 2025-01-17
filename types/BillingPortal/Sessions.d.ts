// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace BillingPortal {
      /**
       * The Billing customer portal is a Stripe-hosted UI for subscription and
       * billing management.
       *
       * A portal configuration describes the functionality and features that you
       * want to provide to your customers through the portal.
       *
       * A portal session describes the instantiation of the customer portal for
       * a particular customer. By visiting the session's URL, the customer
       * can manage their subscriptions and billing details. For security reasons,
       * sessions are short-lived and will expire if the customer does not visit the URL.
       * Create sessions on-demand when customers intend to manage their subscriptions
       * and billing details.
       *
       * Learn more in the [integration guide](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal).
       */
      interface Session {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing_portal.session';

        /**
         * The configuration used by this session, describing the features available.
         */
        configuration: string | Stripe.BillingPortal.Configuration;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The ID of the customer for this session.
         */
        customer: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The IETF language tag of the locale Customer Portal is displayed in. If blank or auto, the customer's `preferred_locales` or browser's locale is used.
         */
        locale: Session.Locale | null;

        /**
         * The account for which the session was created on behalf of. When specified, only subscriptions and invoices with this `on_behalf_of` account appear in the portal. For more information, see the [docs](https://stripe.com/docs/connect/charges-transfers#on-behalf-of). Use the [Accounts API](https://stripe.com/docs/api/accounts/object#account_object-settings-branding) to modify the `on_behalf_of` account's branding settings, which the portal displays.
         */
        on_behalf_of: string | null;

        /**
         * The URL to redirect customers to when they click on the portal's link to return to your website.
         */
        return_url: string | null;

        /**
         * The short-lived URL of the session that gives customers access to the customer portal.
         */
        url: string;
      }

      namespace Session {
        type Locale =
          | 'auto'
          | 'bg'
          | 'cs'
          | 'da'
          | 'de'
          | 'el'
          | 'en'
          | 'en-AU'
          | 'en-CA'
          | 'en-GB'
          | 'en-IE'
          | 'en-IN'
          | 'en-NZ'
          | 'en-SG'
          | 'es'
          | 'es-419'
          | 'et'
          | 'fi'
          | 'fil'
          | 'fr'
          | 'fr-CA'
          | 'hr'
          | 'hu'
          | 'id'
          | 'it'
          | 'ja'
          | 'ko'
          | 'lt'
          | 'lv'
          | 'ms'
          | 'mt'
          | 'nb'
          | 'nl'
          | 'pl'
          | 'pt'
          | 'pt-BR'
          | 'ro'
          | 'ru'
          | 'sk'
          | 'sl'
          | 'sv'
          | 'th'
          | 'tr'
          | 'vi'
          | 'zh'
          | 'zh-HK'
          | 'zh-TW';
      }
    }
  }
}
