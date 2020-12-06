/**
 * Parses the string value as a json object
 *
 * @remarks
 * Values received from php through window.config object may have
 * faulty strings that do not parse as json properly. This function is
 * here to make sure that those failures do not break the site.
 *
 * @param serializedJson string to parse as json
 * @param catchValue value to be returned if the json parse fails
 */
export function parseJson<T>(serializedJson: string, catchValue: T): T {
  try {
    return JSON.parse(serializedJson);
  } catch (e) {
    console.log(serializedJson);
    console.warn(e);
    return catchValue;
  }
}
