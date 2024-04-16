'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react";

export default function QuestionaireSection() {
    return <Accordion type="multiple" >
        <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl px-4 py-2 my-2 rounded-[4px] bg-[rgba(255,255,255,0.1)]">
                The Service
                <ChevronDown className="w-4" />
            </AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground p-2">

                <p className="text-lg"><span className="font-bold">Quality</span> of the product</p>
                <p className="text-lg"><span className="font-bold">Length</span> of life of the product</p>
                <p className="text-lg"><span className="font-bold">Design</span> of the product</p>
                <p className="text-lg"><span className="font-bold">Consistency</span> of quality</p>
                <p className="text-lg"><span className="font-bold">Range</span> of products</p>
                <p className="text-lg"><span className="font-bold">Processibility</span> of the product</p>


            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl px-4 py-2 my-2 rounded-[4px] bg-[rgba(255,255,255,0.1)]">
                Delivery
                <ChevronDown className="w-4" />
            </AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground p-2">
                <p className="text-lg">Delivery <span className="font-bold">on time</span></p>
                <p className="text-lg"><span className="font-bold">Speed</span> of delivery</p>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl px-4 py-2 my-2 rounded-[4px] bg-[rgba(255,255,255,0.1)]">
                Technology and service
                <ChevronDown className="w-4" />
            </AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground p-2">
                <p className="text-lg"><span className="font-bold">Courtesy</span> from sales staff</p>
                <p className="text-lg">Representative’s<span className="font-bold"> availability</span></p>
                <p className="text-lg">Representative’s <span className="font-bold"> knowledge</span></p>
                <p className="text-lg"><span className="font-bold"> Reliability</span> of returning calls</p>
       
                <p className="text-lg"><span className="font-bold"> Friendliness</span> of the Engagement Manager</p>
                <p className="text-lg">Complaint<span className="font-bold"> resolution</span></p>
                <p className="text-lg"><span className="font-bold">Responsiveness</span> to inquiries</p>
                <p className="text-lg"><span className="font-bold">After sales</span> service</p>
                <p className="text-lg"><span className="font-bold">Technical</span> service</p>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl px-4 py-2 my-2 rounded-[4px] bg-[rgba(255,255,255,0.1)]">
                The company
                <ChevronDown className="w-4" />
            </AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground p-2">
                <p className="text-lg"><span className="font-bold">Reputation</span> of the company</p>
                <p className="text-lg"><span className="font-bold">Ease</span> of doing business</p>
                <p className="text-lg">Invoice<span className="font-bold"> clarity</span></p>
                <p className="text-lg">Invoices<span className="font-bold"> on time</span></p>
       
              
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl px-4 py-2 my-2 rounded-[4px] bg-[rgba(255,255,255,0.1)]">
            Price
                <ChevronDown className="w-4" />
            </AccordionTrigger>
            <AccordionContent className="space-y-2 text-muted-foreground p-2">
                <p className="text-lg">Market<span className="font-bold"> price</span></p>
                <p className="text-lg"><span className="font-bold"> Total cost </span>of use</p>
                <p className="text-lg"><span className="font-bold"> Value </span>for money</p>
            </AccordionContent>
        </AccordionItem>

    </Accordion>
}