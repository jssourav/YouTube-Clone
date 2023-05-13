export const randomNameGenerator = () => {
  // Define arrays of possible names
  const firstNames = [
    "John",
    "Emily",
    "Michael",
    "Sarah",
    "David",
    "Jessica",
    "Chris",
    "Laura",
    "Daniel",
    "Jennifer",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
  ];

  // Generate a random first name and last name
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  // Combine the first name and last name into a full name
  const randomFullName = randomFirstName + " " + randomLastName;

  // Return the random full name
  return randomFullName;
};

export const randomStringGenerator = () => {
  const min = 15;
  const max = 25;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  // Define the length of the random string
  const length = randomNum;

  // Define the possible characters for the string
  const characters =
    "ABC DEFGHI JKLM NOPQRS TUVWXYZabcde fghij klmnop qrstuvwxyz ";

  // Initialize an empty string to store the random string
  let randomString = "";

  // Loop through the desired length and append a random character to the string
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  // Remove any numbers from the string
  randomString = randomString.replace(/[0-9]/g, "");

  // Return the random string
  return randomString;
};
