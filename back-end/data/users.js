import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('1111', 10),
    isAdmin: true,
  },
  {
    name: 'Sakil Khan',
    email: 'sakil@sakil.com',
    password: bcrypt.hashSync('0000', 10),
  },
  {
    name: 'Sony',
    email: 'sony@sony.com',
    password: bcrypt.hashSync('0001', 10),
  },
];

export default users;
