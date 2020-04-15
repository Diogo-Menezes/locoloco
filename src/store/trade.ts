import { useLocalStore } from 'mobx-react';

export type TradeStore = {
  register: {
    userDetails: {
      firstName: string;
      lastName: string;
      role: string;
      phone: string;
    };
    businessDetails: {
      name: string;
      postcode: string;
      offerType: string[];
      cuisineType: string[];
      address: {
        street: string;
        number: string;
        city: string;
        county: string;
      };
      phone: string;
      website: string;
      openFor: string[];
      openDays: string[];
    };
    deliveryInfo: {
      deliveryOptions: string[];
      minimumOrder: string;
      deliveryCharge: string;
      acceptedPostcodes: string[];
    };
    paymentDetails: {
      type: string[];
      stripe: {
        key: string;
        secret: string;
      };
    };
  };
}

export default (): TradeStore => {
  const store = useLocalStore(() => ({
    register: {
      userDetails: {
        firstName: '',
        lastName: '',
        role: '',
        phone: '',
      },
      businessDetails: {
        name: '',
        postcode: '',
        offerType: [],
        cuisineType: [],
        address: {
          street: '',
          number: '',
          city: '',
          county: '',
        },
        phone: '',
        website: '',
        openFor: [],
        openDays: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      },
      deliveryInfo: {
        deliveryOptions: [],
        minimumOrder: '',
        deliveryCharge: '',
        acceptedPostcodes: [],
      },
      paymentDetails: {
        type: [],
        stripe: {
          key: '',
          secret: '',
        },
      },
    },
  }));

  return store;
};
