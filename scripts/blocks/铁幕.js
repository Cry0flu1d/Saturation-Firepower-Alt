const myitems = require("SFitems");

const 铁幕 =extend(ForceProjector,"铁幕",{});
铁幕.phaseUseTime = 180;
铁幕.phaseShieldBoost = 4000;
铁幕.itemConsumer=铁幕.consumeItems(ItemStack.with(myitems.泰勒合金,1)).boost();