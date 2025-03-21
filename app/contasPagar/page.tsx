import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Suas ligações foram confirmadas.",
    description: "1 atrás",
  },
  {
    title: "Você tem uma nova mensagem!",
    description: "1 atrás",
  },
  {
    title: "Sua inscrição expirará em breve!",
    description: "2 atrás",
  },
]

type CardProps = React.ComponentProps<typeof Card>



export default function CardDemo({ className, ...props }: CardProps) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 min-h-[100px] w-full">
      <Card className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
          <CardTitle>Notificações</CardTitle>
          <CardDescription>Você tem 3 mensagens não lidas.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <BellRing />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Notificações
              </p>
              <p className="text-sm text-muted-foreground">
                Enviar notificação para dispositivo.
              </p>
            </div>
            <Switch />
          </div>
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check /> Marcar tudo como lido
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
