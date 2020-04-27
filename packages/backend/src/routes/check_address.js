const USPS = require("usps-webtools-promise").default;
const usps = new USPS({
  userId: "433UNIVE3837",
  // USPS returns ALL CAPS, this boolean turns on Proper Caps for both Street lines and City. This is an optional item.
  properCase: true
});

const checkAddress = async (street, city, state, zipcode) => {
  const verifiedAddress = await usps.verify({
    street1: street,
    // street2: '',//should be apt #
    city: city,
    state: state,
    zip: zipcode
  });
  return verifiedAddress;
};

console.log(checkAddress("707 Soulnier St", "Houston", "TX", "77019"));
