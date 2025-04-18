import { Prisma, PrismaClient } from '@prisma/client'


// const prisma = new PrismaClient()
const prisma = new PrismaClient({ log: ['query'] })

async function main() {
  // const deleteUsers = prisma.user.deleteMany();
  // const deleteStudents = prisma.student.deleteMany();
  // const deleteCareers = prisma.career.deleteMany(); 

  // The transaction runs synchronously so deleteUsers must run last.
  // await prisma.$transaction([deleteUsers, deleteStudents, deleteCareers]);

  // const another = await prisma.user.create({
  //   data:{
  //     firstname:'Sergio Rodrigo',
  //     lastname:'Cardenas Rivera',
  //     email:'rodrigosergio93@gmail.com',
  //     ci : '5540408',
  //     student:{
  //       create:
  //         {
  //           userId: "12345",
  //           codSis: "201001616",
  //         }
  //     }
  //   },
  // })
  
  // const careers : Prisma.CareerCreateInput[] = [
  //   {
  //     codCareer:"650001",
  //     title: "ING. ELECTROMECANICA",
  //   },
  //   {
  //     codCareer:"309801",
  //     title: "ING INDUSTRIAL",
  //   },
  //   {
  //     codCareer:"319801",
  //     title: "ING MECANICA",
  //   },
  //   {
  //     codCareer:"349701",
  //     title: "LIC EN MATEMATICAS",
  //   },
    
  //   {
  //     codCareer:"439801",
  //     title:"ING. MATEMATICAS"
  //   }
  // ]

  // // getData();
  // const users: Prisma.UserCreateInput[] = [
  //   {
  //     firstname:'Sergio Rodrigo',
  //     lastname:'Cardenas Rivera',
  //     email:'rodrigosergio93@gmail.com',
  //     ci : '5540408',
  //     student:{
  //       create:
  //         {
  //           codSis: "201001616",
  //           careerId: "309801",
  //         }
  //     }
  //   },
  //   {
  //     firstname:'Leonardo Daniel',
  //     lastname:'Cardona Camacho',
  //     email:'leonardocardona@gmail.com',
  //     ci : '3453453',
  //     student:{
  //       create:
  //         {
  //           codSis: "2017887342",
  //           careerId: "309801",
  //         }
  //     }
  //   },
  // ]

  // // await Promise.all(
  // await Promise.all(
  //   careers.map(async (career) => {
  //     await prisma.career.create({
  //       data: career,
  //     })
  //   })
  // )
  
  // await Promise.all(
  //   users.map(async (user) => {
  //     await prisma.user.create({
  //       data: user,
  //     })
  //   })
  // )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })