import prisma from '../utils/prisma'
const bcrypt = require('bcrypt')
const { nanoid } = require('nanoid')
const { generateTokens } =  require('../utils/jwt')


async function seedUsers() {

  let data = [
    {
      "username": "invincix_admin",
      "password": "Invincix@123"
    },
]


  await Promise.all(data?.map(async (item) => {
    const password = bcrypt.hashSync(item.password, 12);

    let user = await prisma.user.create({
      data: {
        username: item.username,
        password
      },
    })
    const jti = nanoid();
    const { accessToken, refreshToken } = generateTokens(user, jti);

    
  }))

}






async function main() {
  try {
    await seedUsers()
  }
  catch(e){
    console.log(e)
    console.log('db seeding completed')
  }


}

main()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  await prisma.$disconnect()
  process.exit(1)
})
