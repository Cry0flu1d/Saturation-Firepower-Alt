const 阳电 = extend(StatusEffect, "阳电", {
    init() {
        this.affinity(阴电, (unit, result, time) => {
            unit.damagePierce(this.transitionDamage);
            result.set(阴电, Math.min(time + result.time, 60));
        });
    }
});
const 阴电 = extend(StatusEffect, "阴电", {
    init() {
        this.affinity(阳电,  (unit, result, time) => {
            unit.damagePierce(this.transitionDamage);
            result.set(阳电, Math.min(time + result.time, 60));
        });
    }
});

exports.阳电 = 阳电;
exports.阴电 = 阴电;