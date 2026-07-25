import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@leaddesk.com";
  const password = await bcrypt.hash("Admin@123", 10);

  const existing = await prisma.admin.findUnique({
    where: { email },
  });

  if (existing) {
    console.log("✅ Admin already exists");
    return;
  }

  await prisma.admin.create({
    data: {
      email,
      password,
    },
  });

  console.log("✅ Admin created successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });