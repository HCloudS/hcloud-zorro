export declare class JSEncrypt {

  constructor(options?);

  setKey(key: string);

  setPrivateKey(privkey: string);

  setPublicKey(pubkey: string);

  decrypt(string): string | false;

  encrypt(string): string | false;

  getKey(cb);

  getPrivateKey();

  getPrivateKeyB64();

  getPublicKey();

  getPublicKeyB64();
}
