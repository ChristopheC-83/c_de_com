
import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const body = await req.json();
  let { email_recep, email, prenom, nom, message, emis } = body;
  // console.log("body", body);


  const created_at = new Date();
  created_at.setHours(created_at.getHours() + 2);
  

  try {
    const newMessage = await prisma.message.create({
      data: {
        email_recep,
        email,
        prenom,
        nom,
        message,
        created_at,
        emis,
      },
    });
    // console.log("newOpinion", newMessage);
    return NextResponse.json(newMessage, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
};
