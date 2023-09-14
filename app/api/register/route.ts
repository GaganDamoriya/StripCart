import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { data } from "autoprefixer";

export async function POST(request: Request) {
  const body = await request.json();
  const [name, email, password] = body;

  const hashedpassword = await bcrypt.hash(password, 9);

  const user = await prisma.user.create({
    data: { name, email, hashedpassword },
  });
  return NextResponse.json(user);
}
