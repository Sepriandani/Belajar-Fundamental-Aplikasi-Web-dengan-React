import React from "react";

const LocaleContext = React.createContext();

export const LocaleProvider = LocaleContext.Provider;
export const LocaleCustomer = LocaleContext.Consumer;

export default LocaleContext;