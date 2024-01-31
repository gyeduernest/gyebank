import {
  ClockIcon,
  CogIcon,
  MinusCircleIcon,
  ShoppingCartIcon,
  StatusOnlineIcon,
} from "@heroicons/react/outline";
import { Badge, BadgeDelta } from "@tremor/react";

export default () => (
<>
<p>Badge</p>
<Badge>live</Badge>
<Badge>ordered</Badge>
<Badge>waiting</Badge>
<Badge>operational</Badge>
<Badge>downtime</Badge>
<p>Badge with icon</p>
<Badge icon={StatusOnlineIcon}>{props.text}</Badge>
<Badge icon={ShoppingCartIcon}>ordered</Badge>
<Badge icon={ClockIcon}>waiting</Badge>
<Badge icon={CogIcon}>operational</Badge>
<Badge icon={MinusCircleIcon}>downtime</Badge>
<p>BadgeDelta with pre-defined status icons</p>
<BadgeDelta deltaType="increase"></BadgeDelta>
<BadgeDelta deltaType="moderateIncrease">increase</BadgeDelta>
<BadgeDelta deltaType="unchanged">text</BadgeDelta>
<BadgeDelta deltaType="moderateDecrease">text</BadgeDelta>
<BadgeDelta deltaType="decrease">text</BadgeDelta>
<p>BadgeDelta without text</p>
<BadgeDelta deltaType="increase" />
<BadgeDelta deltaType="moderateIncrease" />
<BadgeDelta deltaType="unchanged" />
<BadgeDelta deltaType="moderateDecrease" />
<BadgeDelta deltaType="decrease" />
</>
);