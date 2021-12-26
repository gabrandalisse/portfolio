import userData from '@constants/data';
const {name, email, phone, address, about, experience, socialLinks} = userData;


export default (req, res) => {
  res.statusCode = 200;
  res.json({
    name,
    "about": about.title,
    "contact": { 
      address,
      linkedIn: socialLinks.linkedin
    },
    experience
  });
}
