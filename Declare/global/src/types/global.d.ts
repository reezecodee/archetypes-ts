declare global {
  interface MyAppGlobal {
    version: string;
    init: () => void;
    user: {
      name: string;
      login: () => void;
    };
  }

  var myApp: MyAppGlobal;
}

export {};