

export interface ContactFormConfig {
  showEmail: boolean;
}

export const contactFormConfigs: Record<string, ContactFormConfig> = {
  "/": {
    showEmail: false,
  },
  
  "/waterfront-amenities": {
    showEmail: true,
  },
  
  "/landscapes-waterscapes": {
    showEmail: true,
  },
  
  default: {
    showEmail: false,
  },
};

export const getContactFormConfig = (path: string): ContactFormConfig => {
  return contactFormConfigs[path] || contactFormConfigs.default;
};

export const getCurrentContactFormConfig = (): ContactFormConfig => {
  if (typeof window !== 'undefined') {
    return getContactFormConfig(window.location.pathname);
  }
  return contactFormConfigs.default;
}; 