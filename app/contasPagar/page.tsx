import { BellRing, Check } from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TransactionsTable } from "@/components/TransactionsTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type CardProps = React.ComponentProps<typeof Card>

export default function CardWithForm() {
  return (
    <div className="flex justify-center items-center">
      <div className="space-y-4 px-4 md:px-8">
        <div className="grid grid-cols-1 gap-2 w-[1080px]">
          <div className="bg-white shadow rounded-lg p-6 justify-between items-center">
            <Card>
              <CardHeader>
                <CardTitle>Adicionar conta</CardTitle>
                <CardDescription>Adicione uma nova despesa</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Valor</Label>
                      <Input id="name" placeholder="R$ 0,00" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Destino</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Selecionar" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="sveltekit">SvelteKit</SelectItem>
                          <SelectItem value="astro">Astro</SelectItem>
                          <SelectItem value="nuxt">Nuxt.js</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancelar</Button>
                <Button>Adicionar</Button>
              </CardFooter>
            </Card>
          </div>
          {/* Tabela de transações */}
          <div className="bg-white shadow rounded-lg p-4">
            <TransactionsTable />
          </div>
        </div>
      </div>
    </div>
  )
}
