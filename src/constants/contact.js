const EMAIL = "torhshad90@gmail.com";

export const CONTACT = {
  email: EMAIL,
  phone: "+14848302977",
  phoneDisplay: "+1 (484) 830-2977",
  location: "Pennsylvania, USA",
  linkedin: "https://linkedin.com/in/shad-torh-9a2ab2352",
  github: "https://github.com/shadtorh",
  mailto: (subject = "Portfolio inquiry") =>
    `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`,
};
