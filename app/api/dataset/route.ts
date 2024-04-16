import { NextRequest } from "next/server"
import { z } from "zod"
import * as xlsx from 'xlsx';
import prisma from "@/utils/prisma";
let updateSchema = z.object({
  username: z.any(),
  password: z.any()
})

export async function GET(req: NextRequest) {
  try {
    const records = await prisma.dataset.findMany({})
    return new Response(JSON.stringify(records))
  }
  catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }
    return new Response(null, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {

    const data = await req.formData();
    const name = data.get('name') as string;
    const file: File | null = data.get('file') as unknown as File;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const workbook = xlsx.read(buffer);
    const xlsxData = {};

    workbook.SheetNames.forEach(sheetName => {
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
      sheetData?.forEach?.((obj: any) => {
        for (let key in obj) {
            if (!isNaN(parseFloat(obj[key]))) {
                obj[key] = parseFloat(obj[key]);
            }
        }
    });
      xlsxData[sheetName] = sheetData;
    });


    let record = await prisma.dataset.create({
      data: {
        name,
        sheetData: xlsxData
      }
    })

    return new Response(JSON.stringify(record))

  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }
    return new Response(null, { status: 500 })
  }
}



