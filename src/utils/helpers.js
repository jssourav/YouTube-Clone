export const nFormatter = (num, digits) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") +
        item.symbol +
        " views"
    : null;
};

export const timeSince = (publishTime) => {
  if (!publishTime) return null;
  const date = new Date(publishTime);
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return interval + " year" + (interval > 1 ? "s" : "") + " ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval + " month" + (interval > 1 ? "s" : "") + " ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval + " day" + (interval > 1 ? "s" : "") + " ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval + " hour" + (interval > 1 ? "s" : "") + " ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval + " minute" + (interval > 1 ? "s" : "") + " ago";
  }
  return Math.floor(seconds) + " second" + (seconds > 1 ? "s" : "") + " ago";
};
