const myitems = require("SFitems");

const 铁穹 =extend(ForceProjector,"铁穹",{});
铁穹.phaseUseTime = 900;
铁穹.phaseShieldBoost = 11200;
铁穹.itemConsumer=铁穹.consumeItems(ItemStack.with(myitems.裂位能,3)).boost();