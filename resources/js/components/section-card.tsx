import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Metrics } from "@/types";
import { BadgeDollarSign, Calendar, Home } from "lucide-react";
import { PropsWithChildren } from "react";

export function SectionCards({metrics = []}:PropsWithChildren<{ metrics?: Metrics[] }>) {
    const iconList = [
      {
        name: "booking",
        icon: <Calendar className="!size-5"/>
      },
      {
        name: "revenue",
        icon: <BadgeDollarSign className="!size-5"/>
      },
      {
        name: "rooms",
        icon: <Home className="!size-5"/>
      },
    ]
  return (
        metrics.map(stat => (
          <Card className="@container/card" key={stat.name}>
            <CardHeader>
              <CardDescription>{stat.description}</CardDescription>
              <CardTitle className="text-4xl py-4 font-semibold tabular-nums @[250px]/card:text-3xl">
                {stat.value}{stat.type === "currency" && "$"}
              </CardTitle>
              <CardAction>
                <Badge variant="outline" key={stat.name}>
                  {iconList.map(icon => (
                    <span key={icon.name}>
                      {icon.name === stat.name && icon.icon}
                    </span>
                  ))}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="text-muted-foreground">
                Acquisition needs attention
              </div>
            </CardFooter>
          </Card>
        ))
  );
}
