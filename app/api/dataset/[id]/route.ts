import { NextRequest } from "next/server"
import { z } from "zod"
import * as xlsx from 'xlsx';
import prisma from "@/utils/prisma";
import { isAdmin } from "@/utils/jwt";



const routeContextSchema = z.object({
    params: z.object({
        id: z.string(),
    }),
})



export async function POST(req: NextRequest, context: z.infer<typeof routeContextSchema>) {
    try {

        const data = await req.formData();
        const name = data.get('name') as string;


        const file: File | null = data.get('file') as unknown as File;

        const xlsxData = {};
        if (file) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const workbook = xlsx.read(buffer);
          
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

            // xlsxData['EmployeePerformanceYOY'] = xlsxData['EmployeePerformanceYOY']?.forEach((obj: any) => {
            //     for (let key in obj) {
            //         if (!isNaN(parseFloat(obj[key]))) {
            //             obj[key] = parseFloat(obj[key]);
            //         }
            //     }
            // });
        }
        const updatedData: any = {
            name
        }

        if (file) {
            updatedData.sheetData = xlsxData
        }


        let record = await prisma.dataset.update({
            where: {
                id: context.params.id
            },
            data: updatedData
        })

        return new Response(JSON.stringify(record))

    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }
        return new Response(null, { status: 500 })
    }
}


export async function DELETE(req: NextRequest, context: z.infer<typeof routeContextSchema>) {
    try {
      const { params } = routeContextSchema.parse(context);
  
      if (!(await isAdmin(req))) {
        return new Response('User is not admin', { status: 403 })
      }
  
      await prisma.dataset?.delete({
        where: {
          id: params.id
        }
      })
  
      return new Response(null, { status: 200 })
  
    } catch (error) {
  
      if (error instanceof z.ZodError) {
        return new Response(JSON.stringify(error.issues), { status: 422 })
      }
  
      return new Response(null, { status: 500 })
    }
  }
  
  